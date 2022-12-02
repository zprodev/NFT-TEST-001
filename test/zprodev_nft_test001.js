const ZprodevNftTest001 = artifacts.require("ZprodevNftTest001");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ZprodevNftTest001", function (accounts) {
  it("should balance increase with mint", async function () {
    const account = accounts[1];
    const instance = await ZprodevNftTest001.deployed();
    const beforeBalance = await instance.balanceOf(account);
    assert.isTrue(beforeBalance.toString() == '0');
    await instance.safeMint(accounts[1]);
    const afterBalance = await instance.balanceOf(account);
    assert.isTrue(afterBalance.toString() == '1');
    const hoge = await instance.tokenURI(1);
    console.log(hoge);

  });

  it("should return json in tokenURI", async function () {
    const instance = await ZprodevNftTest001.deployed();
    const token1 = await instance.tokenURI(1);
    assert.isTrue(token1.toString() == '{"name":"TEST #1","image":"https://via.placeholder.com/256.png/FFFFFF/000000/?text=1"}');
    const token2 = await instance.tokenURI(2);
    assert.isTrue(token2.toString() == '{"name":"TEST #2","image":"https://via.placeholder.com/256.png/FFFFFF/000000/?text=2"}');
  });
});
