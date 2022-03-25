rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:yudie-zhao/dip-ui-website-3.git &&
git push -f -u origin main &&
cd - &&
echo https://yudie-zhao.github.io/dip-ui-website-3/index.html
