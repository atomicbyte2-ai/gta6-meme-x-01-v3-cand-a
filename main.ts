import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Resolve POST.json from this script's own directory, never from CWD.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const postPath = join(scriptDir, "POST.json");

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

function readPost(): string {
  try {
    return readFileSync(postPath, "utf8");
  } catch (err) {
    fail(`Failed to read POST.json at ${postPath}: ${err}`);
  }
}

const raw = readPost();

let data: unknown;
try {
  data = JSON.parse(raw);
} catch (err) {
  fail(`POST.json is not valid JSON: ${err}`);
}

if (typeof data !== "object" || data === null || Array.isArray(data)) {
  fail("POST.json must be a JSON object with a url field");
}

const url = (data as Record<string, unknown>).url;
if (
  typeof url !== "string" ||
  (!url.startsWith("https://x.com/") && !url.startsWith("https://twitter.com/"))
) {
  fail(
    "POST.json url must be a string starting with https://x.com/ or https://twitter.com/"
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "POST.json");
  writeFileSync(outPath, raw);
  const copied = readFileSync(outPath, "utf8");
  if (copied !== raw) {
    fail("Copied POST.json does not match the source byte-for-byte");
  }
  console.log(`Wrote ${outPath}`);
} catch (err) {
  fail(`Failed to write output: ${err}`);
}
