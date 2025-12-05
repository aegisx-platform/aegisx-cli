var import_bootstrap = require("./bootstrap");
async function main() {
  try {
    await (0, import_bootstrap.bootstrap)();
  } catch (error) {
    console.error("\u274C Application failed to start:", error);
    process.exit(1);
  }
}
main();
