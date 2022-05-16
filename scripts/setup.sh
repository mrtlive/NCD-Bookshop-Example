#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 1: Contract Building"
echo ---------------------------------------------------------
echo

yarn build:release

echo
echo
echo ---------------------------------------------------------
echo "Step 2: deploying contract"
echo
echo ---------------------------------------------------------
echo

# uncomment out the line below to deploy the other example contract
# near dev-deploy ./build/debug/simple.wasm

# comment the line below to deploy the other example contract
yarn deploy

echo
echo
echo ---------------------------------------------------------
echo "Step 3: you need to setup your developer id write this code for the save your contract id"
echo
echo 'export CONTRACT=<dev-123-456>'
echo
echo ---------------------------------------------------------
echo 
echo "Step 4: now you can call all the functions in the contract"
echo "example : near call \$CONTRACT function_name example getBooks --accountId <Your_id>.testnet "
echo
# uncomment this line for a useful hint when using the singleton style
# echo "near call \$CONTRACT init --accountId \$CONTRACT"
echo ---------------------------------------------------------
echo

exit 0