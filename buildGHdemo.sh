#!/usr/bin/env bash
echo "Startinging build for GH pages"
echo "Clearing dist and cache and old docs"
rm -rf dist .cache docs

echo "Building dist"
yarn build

echo "Renaming to Docs"
mv dist docs

echo "Moving demo route css"
rm -rf ./docs/index.html && mv ./docs/demo/index.html ./docs/index.html
echo "fixing paths"
sed -i '' 's/src=\"\/demo/src=\".\/demo/g' ./docs/index.html
sed -i '' 's/href=\"\/demo/href=\".\/demo/g' ./docs/index.html
sed -i '' 's/src=\"\/logo/src=\".\/logo/g' ./docs/index.html
# mv ./docs/*demo* ./docs/demo/
echo "Done!"