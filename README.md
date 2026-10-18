# 虚实疆界留言服务

这是与 GitHub Pages 分开部署的 Waline 服务。访客仅填写名称和正文；网页继续使用原有留言界面。

完整操作见项目根目录《GitHub留言部署指南.md》。单独上传此文件夹内容到服务仓库时：

1. 在 Vercel 导入仓库，使用 Node.js 24.x 和提供的 `vercel.json`。
2. 新建 PostgreSQL 数据库，在空数据库执行一次 `schema.sql`。
3. 参考 `.env.example`，在 Vercel 配置实际 `PG_*`、`SITE_URL`、`SERVER_URL`、`SECURE_DOMAINS` 等变量，再重新部署。
4. 先访问服务的 `/ui/register` 注册站主管理员。
5. 在网页 `public/content.js` 的 `comments.serverUrl` 填入服务的 HTTPS 正式地址，并发布网页更新。

不要上传 `node_modules`、真实 `.env`、密码或测试数据库。`.env.example` 仅是示例；程序不自动读取它。

`index.cjs` 导出云函数入口，`validation.cjs` 校验作品路径、名称和正文长度。`start.cjs` 可在配置好环境变量后通过 `npm install`、`npm start` 本地运行，默认监听 `127.0.0.1:9090`；其他服务器需要按平台设置 `HOST` 与 `PORT`。

Waline 运行版本固定为 `@waline/vercel` 1.43.4，安装依赖时保留 `package-lock.json`。随附的 `LICENSE-WALINE` 来自所使用的 Waline 包。
