## 说明

验证生产环境下的 Sourcemap 调试，可以执行 build 后使用 `serve` 本地启动 HTTP 服务器进行验证。

```bash
$ npm run build
$ npm i serve -S
$ serve ./build
# 打开 localhost:5000 端口访问
```