# Staking Rewards Pool

A professional-grade implementation of a DeFi staking pool. This contract allows users to deposit a specific ERC20 token (Staking Token) and earn another ERC20 token (Reward Token) proportional to their share of the total pool.

## Features
* **Duration-Based Rewards:** Admin sets a reward rate over a specific timeframe (e.g., 30 days).
* **Real-time Yield:** Users accrue rewards every block based on their current stake.
* **Gas Efficiency:** Uses the "Stored Reward Per Token" algorithm to avoid looping through all stakers.
* **Emergency Safety:** Includes standard checks to ensure funds are handled securely.

## Math Overview
The contract calculates rewards using the formula:
$$Reward = \int_{t_{start}}^{t_{end}} \frac{R \cdot s(t)}{S(t)} dt$$
Where $R$ is the reward rate, $s(t)$ is the user's stake, and $S(t)$ is the total stake.



## Quick Start
1. **Deploy:** Deploy the contract with the addresses of your Staking and Reward tokens.
2. **Fund:** Send Reward tokens to the contract and call `notifyRewardAmount`.
3. **Stake:** Users call `stake(amount)` to begin earning.
4. **Claim:** Users call `getReward()` to transfer earned tokens to their wallet.

## License
MIT
