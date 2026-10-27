import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const scanner = resolve(
  import.meta.dirname,
  "../scripts/scan-public-artifacts.py",
);

test("public artifact scanner scans nested archives and redacts findings", () => {
  const directory = mkdtempSync(join(tmpdir(), "flint-public-scan-"));
  try {
    writeFileSync(join(directory, "README.md"), "Public SDK documentation.\n");
    const scan = () =>
      spawnSync("python3", [scanner, directory], { encoding: "utf8" });
    assert.equal(scan().status, 0);
    const secret = "ghp_" + "x".repeat(40);
    const fixture = spawnSync(
      "python3",
      [
        "-c",
        `
import io,sys,tarfile,zipfile
data=sys.argv[2].encode()
inner=io.BytesIO()
with tarfile.open(fileobj=inner,mode='w:gz') as archive:
    member=tarfile.TarInfo('package/.env.local')
    member.size=len(data)
    archive.addfile(member,io.BytesIO(data))
with zipfile.ZipFile(sys.argv[1]+'/public.zip','w') as archive:
    archive.writestr('nested.tgz',inner.getvalue())
`,
        directory,
        secret,
      ],
      { encoding: "utf8" },
    );
    assert.equal(fixture.status, 0, fixture.stderr);
    const result = scan();
    assert.equal(result.status, 1, result.stderr);
    const report = JSON.parse(result.stdout);
    assert.ok(
      report.findings.some(
        ([name, kind]) =>
          name.endsWith("package/.env.local") &&
          kind === "private runtime path",
      ),
    );
    assert.ok(report.findings.some(([, kind]) => kind === "GitHub token"));
    assert.ok(!result.stdout.includes(secret));
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test("public artifact scanner refuses empty releases", () => {
  const directory = mkdtempSync(join(tmpdir(), "flint-public-scan-"));
  try {
    const result = spawnSync("python3", [scanner, directory], {
      encoding: "utf8",
    });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /empty release directory/);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test("public artifact scanner detects Flint API and OAuth credentials without logging values", () => {
  const directory = mkdtempSync(join(tmpdir(), "flint-public-scan-"));
  try {
    for (const prefix of ["flint_test_", "flint_live_", "fwat_", "fcat_", "fcrt_"]) {
      const value = prefix + "abc_def-".repeat(6);
      writeFileSync(
        join(directory, "config.json"),
        JSON.stringify({ token: value }),
      );
      const result = spawnSync("python3", [scanner, directory], {
        encoding: "utf8",
      });
      assert.equal(result.status, 1);
      assert.ok(
        JSON.parse(result.stdout).findings.some(
          ([, kind]) => kind === "Flint token",
        ),
      );
      assert.ok(!result.stdout.includes(value));
    }
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test("public artifact scanner rejects malformed archives and absolute archive member paths", () => {
  const directory = mkdtempSync(join(tmpdir(), "flint-public-scan-"));
  try {
    for (const extension of ["zip", "tgz", "tar"]) {
      const path = join(directory, `public.${extension}`);
      writeFileSync(path, "malformed archive");
      const result = spawnSync("python3", [scanner, directory], {
        encoding: "utf8",
      });
      assert.equal(result.status, 1);
      assert.ok(
        JSON.parse(result.stdout).findings.some(
          ([, kind]) => kind === "invalid archive",
        ),
      );
      rmSync(path);
    }
    const fixture = spawnSync(
      "python3",
      [
        "-c",
        `
import io,sys,tarfile,zipfile
with zipfile.ZipFile(sys.argv[1]+'/public.zip','w') as archive:
    archive.writestr('/unsafe-zip.txt','public')
with tarfile.open(sys.argv[1]+'/public.tgz',mode='w:gz') as archive:
    member=tarfile.TarInfo('/unsafe-tar.txt')
    member.size=6
    archive.addfile(member,io.BytesIO(b'public'))
`,
        directory,
      ],
      { encoding: "utf8" },
    );
    assert.equal(fixture.status, 0, fixture.stderr);
    const result = spawnSync("python3", [scanner, directory], {
      encoding: "utf8",
    });
    assert.equal(result.status, 1, result.stderr);
    const findings = JSON.parse(result.stdout).findings;
    for (const member of ["/unsafe-zip.txt", "/unsafe-tar.txt"]) {
      assert.ok(
        findings.some(
          ([name, kind]) =>
            name.endsWith(member) && kind === "private runtime path",
        ),
      );
    }
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
