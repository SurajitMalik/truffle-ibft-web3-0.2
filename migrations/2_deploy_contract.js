const
    fs = require('fs'),
    Sample = artifacts.require('Sample.sol');

module.exports = function test(deployer) {
    deployer.deploy(
            Sample
        )
        .then(() => {
            fs.writeFileSync('Sample.json', `{
            "Sample": "${Sample.address}"
        }`)
        })
}