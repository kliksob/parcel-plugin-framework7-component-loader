const Bundler = require("parcel-bundler");
const path = require("path");
const _root = path.dirname(__dirname);

async function run() {
  const bundler = new Bundler(_root + "/example/index.html", {
    outDir: __dirname + "/dist",
    watch: true,
    cache: false
  });
  bundler.addAssetType("f7", require.resolve("../lib/F7Asset.js"));
  await bundler.serve();
}
run();