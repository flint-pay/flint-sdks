import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

export function releaseNotes(changelog, version) {
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(version))
    throw new Error(`Invalid release version: ${version}`);
  const headings = [...changelog.matchAll(/^##[ \t]+(.+?)\r?$/gm)];
  const matches = headings.flatMap((heading, index) => {
    const title = heading[1].trim();
    const label = title.startsWith("[") ? `[${version}]` : version;
    if (title !== label && !title.startsWith(label + " ")) return [];
    return [changelog.slice(heading.index + heading[0].length, headings[index + 1]?.index).trim()];
  });
  if (matches.length !== 1 || !matches[0])
    throw new Error(`CHANGELOG.md must contain exactly one nonempty entry for ${version}`);
  return matches[0] + "\n";
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href)
  process.stdout.write(releaseNotes(readFileSync("CHANGELOG.md", "utf8"), process.argv[2]));
