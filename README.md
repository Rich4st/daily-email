# Daily Email

## 🪄 主要功能

* 爬取天气、ONE、知乎、猫咪照片、每日一个英语单词并将数据整合为邮件并定时发送。
* 纪念日：配置纪念日提醒。
* ...



## 🤖 效果

![img](http://182.61.149.102/dailyEmail.jpg)



## 🚀 开始

* 安装依赖

```powershell
npm install
```

* 运行 需要先切到项目目录下

```powershell
node index.js
```

### 服务器中使用pm2

* 运行一个进程，通过`--name`重命名为foo，`--watch`监听该进程

```powershell
pm2 start index.js --name foo --watch
```



## 🛠 配置文件

> 配置文件`config.json`在`config`目录下

### 配置邮件**发送人**

```json
"auth": {
    "user": "2357823678@qq.com",
    "pass": "**********jxf"
}
```

`user`: 填入你的邮箱

`password`: **不是**QQ密码。网页登录QQ邮箱 `设置` -> `账户`-> `POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务`  -> `生成授权码`



### 配置**收件人**

```json
"sendEmail": {
    "address": "2750633066@qq.com",
    "subject": "daily email"
}
```

`address`: 收件人邮箱

`subject`： 邮件主题/标题

**Tips:** **不支持**配置多个收件人



### 配置爬取**天气**的城市

```json
"address": "china/fujian/xiamen"
```

>❗️
>
>除了部分城市，基本只要只要配置省份拼音和城市拼音即可
>
>可以在[墨迹天气](https://tianqi.moji.com/weather/)中查询所处城市的名称



### 配置重要**日期提醒**

```json
"commemoration": [
    {
      "name": "国庆节&#127881;",
      "date": "10-01",
      "advance": 150
    },
    {
      "name": "开学&#127891;",
      "date": "10-09",
      "advance": 150
    }
  ],
```

`name`: 日期名称；中文后面的代码是**Emoji**的。可以在[w3schools](https://www.w3schools.com/charsets/ref_emoji.asp)查询Emoji对应的Html Code

`date`: 日期 ；不要配置年份，默认为今年

`advance`: 配置需要提前多少天发送邮件提醒



### 配置需要渲染的卡片

```json
  "dataCard": [
    "天气",
    "纪念日",
    "知乎日报",
    "Words",
    "CuteCat",
    "ONE"
  ]
```

* 删除数组中的元素就**不会**渲染对应的卡片



### 配置邮件发送时间

```json
"interval": "00 20 08 * * *"
```

例子中配置的是每天早上8：20发送

* 格式说明

```json
00   20   08   *    *    *
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```

更多信息参考[node-schedule](https://github.com/node-schedule/node-schedule)官方文档配置



## 📝 关于

* 环境

> **Node**版本: v14.16.0
>
> **Npm**版本: 6.14.11

* 项目使用到的包

> [cheerio](https://cheerio.js.org/) 专为服务器设计的核心 jQuery 的快速、灵活和精简的实现。
>
> [iconv-lite](https://www.npmjs.com/package/iconv-lite) 纯JS字符编码转换
>
> [node-schedule](node-schedule) 定时作业和调度
>
> [request](https://www.npmjs.com/package/request) 简化的 HTTP 客户端
>
> [nodemailer](https://github.com/nodemailer/nodemailer) 使用 Node.JS 发送电子邮件——就像蛋糕一样简单！

* 特别感谢 ❗️❗️❗️

[everyday-email](https://github.com/xuguanqun/everyday-email)
