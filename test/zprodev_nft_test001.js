const ZprodevNftTest001 = artifacts.require("ZprodevNftTest001");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ZprodevNftTest001", function (/* accounts */) {
  it("should assert true", async function () {
    await ZprodevNftTest001.deployed();
    return assert.isTrue(true);
  });
});
