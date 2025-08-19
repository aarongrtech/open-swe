#!/usr/bin/env bash
set -euo pipefail

required_node_major=20
required_yarn_version="3.5.1"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js v$required_node_major is required" >&2
  exit 1
fi

node_major=$(node -v | sed -E 's/^v([0-9]+).*/\1/')
if [[ "$node_major" != "$required_node_major" ]]; then
  echo "Node.js v$required_node_major is required. You have $(node -v)." >&2
  exit 1
fi

if ! command -v corepack >/dev/null 2>&1; then
  echo "corepack is required" >&2
  exit 1
fi

corepack enable >/dev/null 2>&1
yarn_version=$(yarn -v)
if [[ "$yarn_version" != "$required_yarn_version" ]]; then
  echo "Yarn $required_yarn_version is required. You have $yarn_version." >&2
  exit 1
fi

yarn install

echo "Setup complete"
