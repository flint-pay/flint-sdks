import test from "node:test";
import assert from "node:assert/strict";
import { releaseNotes } from "../scripts/release-notes.mjs";

test("release notes select the exact version and retain its Markdown subsections", () => {
  const notes = "New public methods.\n\n### Migration\n\nUse the new names.";
  const changelog = `# Changelog\n\n## Unreleased\n\nUpcoming.\n\n## [8.0.0-beta.1] - 2026-10-30\n\n${notes}\n\n## 7.0.0\n\nOlder notes.\n`;
  assert.equal(releaseNotes(changelog, "8.0.0-beta.1"), notes + "\n");
  assert.equal(releaseNotes(changelog, "7.0.0"), "Older notes.\n");
  assert.throws(() => releaseNotes(changelog, "8.0.0"), /exactly one nonempty entry/);
});

test("missing, duplicate and empty changelog entries cannot publish release notes", () => {
  for (const changelog of ["", "## 8.0.0\n", "## 8.0.0\nA\n## 8.0.0\nB\n", "## 8.0.0-beta.1\nBeta\n"])
    assert.throws(() => releaseNotes(changelog, "8.0.0"), /exactly one nonempty entry/);
  assert.throws(() => releaseNotes("## nonsense\nNotes", "nonsense"), /Invalid release version/);
});
