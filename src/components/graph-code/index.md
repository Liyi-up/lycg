# GraphCode 图形验证码

## Demo:

**简单示例**
<code src="./demos/index.tsx"></code>

## API

| 属性      | 说明                                                                               | 类型                        | 默认值 |
| --------- | ---------------------------------------------------------------------------------- | --------------------------- | ------ |
| height    | 海报画布大小（可选）                                                               | `number`                    | 40     |
| width     | 画布圆角（可选）                                                                   | `number`                    | 100    |
| bgColor   | 背景颜色（可选）                                                                   | `string`                    | #fff   |
| charNum   | 字符个数（可选）                                                                   | `string`                    | 4      |
| fontSize  | 字体大小（可选）                                                                   | `number`                    | 25     |
| onChange  | 改变验证码的回调函数, 用来传递验证码（会在页面初始加载和点击验证码时调用）（可选） | `(captcha: string) => void` |        |
| className | 样式名（可选）                                                                     | `string`                    | ''     |
