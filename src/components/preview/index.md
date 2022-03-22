## Preview 文件预览

## 使用须知

这里的 `url` 需要为完整的文件路径，如 `https://ejg.1078d.com/images/foo/2021.pdf` 。

如果在控制台提示 `No 'Access-Control-All-Origin' header ` 需要配置运行跨域访问，可通过配置 `nginx` 解决。

如上面路径所示，可通过配置 `nginx.conf` 文件设置 `images` 文件代理路径。

```conf
location /images {
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods 'GET,POST';
    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,  If-Modified-Since,Cache-Control,Content-Type,Authorization';
    root /www/;
    expires 3d;
    access_log off;
}

```

## Demo:

<code src="./demos/demo1.tsx"></code>

## API

| 属性      | 说明                 | 类型                       | 默认值                |
| --------- | -------------------- | -------------------------- | --------------------- |
| show      | 是否显示预览         | `boolean`                  | -                     |
| url       | 预览的文件链接       | `string`                   | -                     |
| title     | 预览文件的标题       | `string`                   | `url`                 |
| bodyStyle | 内容区域的样式       | `React.CSSProperties`      | `{ height: '100vh' }` |
| onClose   | 点击右上角的关闭按钮 | `(state: boolean) => void` |                       |
