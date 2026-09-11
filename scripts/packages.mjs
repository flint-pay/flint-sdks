import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export const repository = "https://github.com/flint-pay/flint-sdks";
export const sha256 = (data) => createHash("sha256").update(data).digest("hex");
export const json = (path) => JSON.parse(readFileSync(path, "utf8"));
export const formatted = (value) => JSON.stringify(value, null, 2) + "\n";
export function files(directory, prefix = "") {
  return readdirSync(join(directory, prefix), { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const path = prefix + entry.name;
      if (entry.isSymbolicLink())
        throw new Error(`Unexpected symlink: ${path}`);
      return entry.isDirectory() ? files(directory, path + "/") : [path];
    });
}

export function nodeManifest(source) {
  return {
    ...source,
    repository: { type: "git", url: repository + ".git", directory: "node" },
    homepage: "https://developers.withflintpay.com",
    bugs: { url: repository + "/issues" },
  };
}

export function composerManifest(source) {
  const { version, ...manifest } = source; // Packagist derives versions from Git tags.
  const autoload = {};
  for (const [kind, paths] of Object.entries(source.autoload)) {
    if (Array.isArray(paths))
      autoload[kind] = paths.map((path) => "php/" + path);
    else if (kind === "psr-4" || kind === "psr-0")
      autoload[kind] = Object.fromEntries(
        Object.entries(paths).map(([namespace, path]) => [
          namespace,
          Array.isArray(path) ? path.map((p) => "php/" + p) : "php/" + path,
        ]),
      );
    else throw new Error(`Unsupported Composer autoload entry: ${kind}`);
  }
  return {
    ...manifest,
    autoload,
    homepage: "https://developers.withflintpay.com",
    support: { issues: repository + "/issues", source: repository },
    archive: {
      exclude: [
        "/.git",
        "/.github",
        "/.context",
        "/.tools",
        "/.generated",
        "/.gitignore",
        "/.gitattributes",
        "/node",
        "/node_modules",
        "/vendor",
        "/composer.lock",
        "/php/vendor",
        "/php/composer.lock",
        "/spec",
        "/scripts",
        "/tests",
        "/releases",
        "/sdk.json",
        "/sdk.lock.json",
        "/sdk-files.json",
        "/package.json",
        "/package-lock.json",
        "/RELEASING.md",
        "/MIGRATION.md",
      ],
    },
  };
}

export function publishedFiles(output) {
  const result = new Map();
  for (const target of ["node", "php"]) {
    const manifest = json(
      join(output, target, target === "node" ? "package.json" : "composer.json"),
    );
    for (const path of files(join(output, target))) {
      if (
        path.startsWith("vendor/") ||
        path.startsWith("node_modules/") ||
        path === "composer.lock"
      )
        continue;
      let content = readFileSync(join(output, target, path));
      // A prerelease needs an explicit version, especially with Composer's stable default.
      if (path === "README.md" && manifest.version.includes("-")) {
        const command = target === "node" ? "npm install" : "composer require";
        const separator = target === "node" ? "@" : ":";
        content = Buffer.from(
          content.toString("utf8").replace(
            `\`${command} ${manifest.name}\``,
            `\`${command} ${manifest.name}${separator}${manifest.version}\``,
          ),
        );
      }
      result.set(`${target}/${path}`, content);
    }
  }
  result.set(
    "node/package.json",
    Buffer.from(
      formatted(nodeManifest(json(join(output, "node/package.json")))),
    ),
  );
  result.set(
    "composer.json",
    Buffer.from(
      formatted(composerManifest(json(join(output, "php/composer.json")))),
    ),
  );
  result.set("LICENSE", readFileSync(join(output, "php/LICENSE")));
  return result;
}
