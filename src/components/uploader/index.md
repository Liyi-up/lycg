# Uploader 图片上传

## Demo:

### 基础示例

<code src="./demos/demo1.tsx"></code>

### 默认填充图片

<Alert>`initialValues` 只会在初始化时渲染一次，如果想修改 `initialValues` 需要手动调用 `setFieldsValue` 方法</Alert>
<code src="./demos/demo2.tsx"></code>

### 自定义上传按钮

<code src="./demos/demo3.tsx"></code>

## API

| 属性      | 说明                                             | 类型     | 默认值     |
| --------- | ------------------------------------------------ | -------- | ---------- |
| label     | 上传图片组件的标题名                             | `string` | "上传图片" |
| uploadUrl | 图片上传到服务器的接口                           | `string` | -          |
| imgPreUrl | 图片 url 前缀                                    | `string` | -          |
| watermark | 添加的水印文字（白色字体，会显示在图片的左下角） | `string` | ""         |
| quality   | 压缩图片的质量（0 - 1 之间的小数）               | `number` | 0.8        |

其他 `API` 继承自 `antd-mobile` 的 `image-uploader` 组件 [点击查看](https://mobile.ant.design/zh/components/image-uploader#imageuploader)
