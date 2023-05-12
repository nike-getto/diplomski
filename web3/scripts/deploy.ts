import { ethers } from 'hardhat'

async function main() {
	const currentTimestampInSeconds = Math.round(Date.now() / 1000)
	const unlockTime = currentTimestampInSeconds + 60

	const lockedAmount = ethers.utils.parseEther('0.001')

	const Pay = await ethers.getContractFactory('Pay')
	const pay = await Pay.deploy(unlockTime, { value: lockedAmount })

	await pay.deployed()

	console.log(
		`Pay with ${ethers.utils.formatEther(
			lockedAmount
		)}ETH and unlock timestamp ${unlockTime} deployed to ${pay.address}`
	)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
