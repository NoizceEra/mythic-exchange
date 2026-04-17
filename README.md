# Mythic Exchange

DEX aggregator for the Mythic L2 network, forked from [Autobahn](https://github.com/blockworks-foundation/autobahn) (AGPL-3.0).

Mythic Exchange routes trades across all Mythic L2 liquidity sources — MythicSwap AMM pools, launchpad bonding curves, and future third-party DEXes — to find optimal execution for every swap.

## Architecture

- **`bin/autobahn-router`** — Core routing engine and HTTP API
- **`lib/router-lib`** — Shared routing library (DEX adapters, path finding, quoting)
- **`programs/`** — On-chain routing programs
- **`scripts/`** — Operational tooling

## Status

Under active development. The MythicSwap adapter and Mythic L2 RPC configuration are being added by the dev team.

## License

AGPL-3.0 — see [LICENSE.md](./LICENSE.md)

## Upstream

Based on Autobahn by Blockworks Foundation. Original repository: https://github.com/blockworks-foundation/autobahn
