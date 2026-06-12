const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

test("package manifest includes release and Marketplace metadata", () => {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

  assert.equal(pkg.version, "1.0.0");
  assert.equal(pkg.name, "vibesec");
  assert.equal(pkg.displayName, "VibeSec");
  assert.equal(pkg.publisher, "m2004266");
  assert.equal(pkg.license, "MIT");
  assert.equal(pkg.repository?.url, "https://github.com/m2004266/vibesec.git");
  assert.equal(pkg.homepage, "https://github.com/m2004266/vibesec#readme");
  assert.equal(pkg.bugs?.url, "https://github.com/m2004266/vibesec/issues");
  assert.ok(pkg.keywords.includes("security"));
  assert.ok(pkg.keywords.includes("semgrep"));
  assert.ok(pkg.galleryBanner);
});

test(".vscodeignore keeps required production dependencies in the VSIX", () => {
  const ignored = fs.readFileSync(".vscodeignore", "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  if (ignored.includes("node_modules/**") || ignored.includes("node_modules")) {
    for (const dependency of [
      "js-yaml",
      "argparse",
      "minimatch",
      "brace-expansion",
      "balanced-match",
    ]) {
      assert.ok(
        ignored.includes(`!node_modules/${dependency}/**`),
        `${dependency} must be unignored because compiled code requires production dependencies`,
      );
    }
  }
});

test("README uses canonical repository and current UI terminology", () => {
  const readme = fs.readFileSync("README.md", "utf8");
  const oldCloneTarget = ["Moawiah", "188/vibesec.git"].join("");
  const oldCommandName = ["Refresh", "File", "Tree"].join(" ");

  assert.match(readme, /https:\/\/github\.com\/m2004266\/vibesec\.git/);
  assert.match(readme, /Security across every phase of the software development lifecycle/);
  assert.match(readme, /Control Center/);
  assert.match(readme, /Analysis sidebar/);
  assert.equal(readme.includes(oldCloneTarget), false);
  assert.equal(readme.includes(oldCommandName), false);
});
