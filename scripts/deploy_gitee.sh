#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'init' &&
git remote add origin git@gitee.com:lgm11/morney-react-website.git &&
git branch -M main &&
git push -f -u origin main
cd -