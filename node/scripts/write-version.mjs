import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sdkRoot = path.resolve(__dirname, "..");
const packageJson = JSON.parse(
  readFileSync(path.join(sdkRoot, "package.json"), "utf8")
);

const versionFile = path.join(sdkRoot, "src", "version.ts");
const nextContent = `export const SDK_VERSION = "${packageJson.version}" as const;\n`;

writeFileSync(versionFile, nextContent);
