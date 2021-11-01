# 跨端小程序框架

## 配套

##### 框架：Taro V3.3.10

##### UI：Taro UI

##### 状态管理：Mobx V6+

##### 路由：React-router

## 全局安装 taro-cli 脚手架

```
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

### 查看版本

```
npm info @tarojs/cli
```

### 安装

```
# clone项目(default master)
$ git clone https://github.com/rrr5t6y7/taro-pro.git

# 进入项目根目录
$ cd taro-pro

# 使用 yarn 安装依赖
$ yarn

# OR 使用 cnpm 安装依赖
$ cnpm install

# OR 使用 npm 安装依赖
$ npm install
```

### 快速启动

```
# 微信小程序
$ yarn dev:weapp & npm run dev:weapp

# 字节跳动小程序
$ yarn dev:tt & npm run dev:tt

# 支付宝小程序
$ yarn dev:alipay & npm run dev:alipay

# 同时启动微信和字节
$ yarn dev:all & npm run dev:all

# 更多请查看pkg
$ -

```

## 其他

#### 接口（支持 async/await）

#### 数据可通过 useState、useReducer 或者 mobx 操作

#### 无 ts
