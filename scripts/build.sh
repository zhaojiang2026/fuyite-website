#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

cd "${COZE_WORKSPACE_PATH}"

echo "Installing all dependencies..."
pnpm install --include=dev

echo "Building the Next.js project..."
pnpm next build

echo "Build completed successfully!"
