rm -rf ../reply-node/public/index.html
rm -rf ../reply-node/public/static

npm run build
cp -r ./dist/* ../reply-node/public