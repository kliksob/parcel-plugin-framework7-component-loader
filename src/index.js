module.exports = function parcelPluginFramework7ComponentLoader(bundler) {
  bundler.addAssetType("f7", require.resolve("./F7Asset.js"));
  console.log("parcel-plugin-framework7-component-loader is inited...!");
}