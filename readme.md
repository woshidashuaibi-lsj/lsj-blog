## 开始

项目从 0 开始搭建，不使用脚手架

  安装
  npm i --save vue
  npm i --save-dev css-loader mini-css-extract-plugin vue-loader webpack webpack-cli

  node 有个进程环境变量 NODE_ENV=production，就我们执行node脚本的时候加上这个分配本地开发环境和生产开发环境
  ```js
  {
    "scripts": {
    "dev": "NODE_ENV=development webpack serve -c ./webpack.config.js",
    "build": "NODE_ENV=production webpack -c ./webpack.config.js"
      }
   }
  ```