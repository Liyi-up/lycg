# GraphCode 图形验证码

## Demo:

**简单示例**
<code src="./demos/index.tsx"></code>

## API

| 属性     | 说明                                             | 类型                        | 默认值 |
| -------- | ------------------------------------------------ | --------------------------- | ------ |
| height   | 图片高度（可选）                                 | `number`                    | 200    |
| width    | 图片宽度（可选）                                 | `number`                    | 500    |
| bgColor  | 背景颜色（可选）                                 | `string`                    | #fff   |
| charNum  | 验证码字符个数（可选）                           | `number`                    | 4      |
| fontSize | 字体大小（可选）                                 | `number`                    | 25     |
| onChange | 点击验证码的回调，初始加载也会调用，返回验证码值 | `(captcha: string) => void` |        |
