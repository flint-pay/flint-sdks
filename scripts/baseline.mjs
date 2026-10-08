// Rebuild the previous release with its original generator so CI does not need to
// publish private provenance records or depend on an expiring artifact cache.
import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  cpSync,
  readFileSync,
  writeFileSync,
  renameSync,
  rmSync,
} from "node:fs";
import { resolve, dirname, join } from "node:path";
import { pathToFileURL } from "node:url";
import { randomUUID } from "node:crypto";
import { json, formatted, sha256 } from "./packages.mjs";
const run = (cmd, args, options = {}) => {
  const r = spawnSync(cmd, args, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  });
  if (r.error || r.status !== 0)
    throw new Error(
      `${cmd}: ${r.error?.message ?? ""}\n${r.stderr ?? ""}\n${r.stdout?.slice(-2000) ?? ""}`,
    );
  return r.stdout;
};
const root = resolve(import.meta.dirname, "..");
process.chdir(root);
if (run("git", ["rev-parse", "--is-shallow-repository"]).trim() === "true")
  throw new Error(
    "Fetch full history and tags before generating SDK compatibility baselines.",
  );
const current = json("spec/profiles/full-common-sdk.json").version;
const generator = resolve(".tools/sdk-generator");
const { compareVersions } = await import(
  pathToFileURL(join(generator, "dist/version.js"))
);
const tags = run("git", ["tag", "--merged", "HEAD", "--list", "v*"])
  .trim()
  .split("\n")
  .filter((tag) =>
    /^v\d+\.\d+\.\d+(?:-(?:alpha|beta|rc)(?:\.\d+)?)?$/.test(tag),
  )
  .filter((tag) => compareVersions(tag.slice(1), current) < 0)
  .sort((a, b) => compareVersions(b.slice(1), a.slice(1)));
const tag = tags[0];
if (!tag) {
  console.log("No earlier release tag: initial generated SDK baseline.");
  process.exit(0);
}
const commit = run("git", ["rev-parse", `refs/tags/${tag}^{commit}`]).trim();
const marker = ".generated/baseline.json";
const output = resolve(".generated/sdk");
const source = resolve(".generated/baselines", commit);
const baselineOutput = join(source, "sdk");
const baselineRecord = join(baselineOutput, ".sdk-generator.json");
function replaceDirectory(stage, destination) {
  const backup = destination + ".before-baseline-" + randomUUID();
  let moved = false;
  try {
    if (existsSync(destination)) {
      renameSync(destination, backup);
      moved = true;
    }
    renameSync(stage, destination);
  } catch (error) {
    if (moved && !existsSync(destination)) renameSync(backup, destination);
    throw error;
  }
  if (moved) rmSync(backup, { recursive: true, force: true });
}
function restoreBaseline() {
  const stage = output + ".baseline-stage-" + randomUUID();
  try {
    cpSync(baselineOutput, stage, { recursive: true });
    replaceDirectory(stage, output);
  } finally {
    rmSync(stage, { recursive: true, force: true });
  }
}
if (
  existsSync(marker) &&
  json(marker).commit === commit &&
  json(marker).recordHash &&
  existsSync(baselineRecord)
) {
  if (sha256(readFileSync(baselineRecord)) !== json(marker).recordHash)
    throw new Error("Cached published SDK baseline record has changed.");
  // The working output contains the last candidate. A version bump starts a
  // new comparison in the generator, so always restore the published release.
  restoreBaseline();
  process.exit(0);
}
const paths = run("git", [
  "ls-tree",
  "-r",
  "--name-only",
  commit,
  "--",
  "sdk.json",
  "sdk.lock.json",
  "spec",
])
  .trim()
  .split("\n");
if (!paths.includes("sdk.lock.json")) {
  console.log(
    `${tag} predates this generator. Review MIGRATION.md; no compiled baseline is available.`,
  );
  process.exit(0);
}
for (const path of paths) {
  const target = join(source, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, run("git", ["show", `${commit}:${path}`]));
}
const previous = json(join(source, "sdk.lock.json"));
let previousGenerator = generator;
if (previous.generator.revision !== json("sdk.lock.json").generator.revision) {
  if (!/^[0-9a-f]{40}$/.test(previous.generator.revision))
    throw new Error("Invalid prior generator revision.");
  previousGenerator = resolve(
    ".tools",
    "generator-" + previous.generator.revision,
  );
  if (!existsSync(previousGenerator))
    run("git", ["clone", previous.generator.repository, previousGenerator], {
      stdio: "inherit",
    });
  if (run("git", ["status", "--porcelain"], { cwd: previousGenerator }).trim())
    throw new Error("Previous generator checkout has local modifications.");
  run("git", ["fetch", "origin", previous.generator.revision], {
    cwd: previousGenerator,
    stdio: "inherit",
  });
  run("git", ["checkout", "--detach", previous.generator.revision], {
    cwd: previousGenerator,
    stdio: "inherit",
  });
  run("npm", ["ci"], { cwd: previousGenerator, stdio: "inherit" });
  run("npm", ["run", "build"], { cwd: previousGenerator, stdio: "inherit" });
}
const stage = baselineOutput + ".stage-" + randomUUID();
try {
  console.log(`Reconstructing compatibility baseline from ${tag} (${commit}).`);
  run(process.execPath, [
    "--max-old-space-size=8192",
    join(previousGenerator, "dist/cli.js"),
    "generate",
    join(source, "spec/openapi.json"),
    join(source, "sdk.json"),
    stage,
  ]);
  replaceDirectory(stage, baselineOutput);
  restoreBaseline();
  writeFileSync(
    marker,
    formatted({
      tag,
      commit,
      generator: previous.generator.revision,
      recordHash: sha256(readFileSync(baselineRecord)),
    }),
  );
} finally {
  rmSync(stage, { recursive: true, force: true });
}
