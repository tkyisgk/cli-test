#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"

# yarn lint && yarn test -u && git add ./packages/*/test/snapshots/*
yarn lint