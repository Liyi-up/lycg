# VideoUploader 视频上传

### 基础示例

<code src="./demos/demo1.tsx"></code>

### 单独使用

`VideoUploader` 是受控组件，需要传入 `onChange`，`value` 属性。

<code src="./demos/demo2.tsx"></code>

### 单独使用预览视频

<code src="./demos/demo3.tsx"></code>

## VideoUploader

| 属性          | 说明                                                           | 类型                                 | 默认值    |
| ------------- | -------------------------------------------------------------- | ------------------------------------ | --------- |
| uploadUrl     | 图片上传到服务器的接口                                         | `string`                             | -         |
| imgPreUrl     | 图片 url 前缀                                                  | `string`                             | -         |
| accept        | 文件类型                                                       | `string`                             | `video/*` |
| disableUpload | 是否禁用上传按钮                                               | `boolean`                            | `false`   |
| deletable     | 是否展示删除按钮                                               | `boolean`                            | `true`    |
| maxCount      | 最多上传几个视频，超出数量会自动隐藏上传按钮，`0` 表示不做限制 | `number`                             | `0`       |
| children      | 自定义上传按钮                                                 | `ReactNode`                          | -         |
| value         | 已上传的视频文件列表                                           | `ImageUploadItem[]`                  | -         |
| onChange      | 已上传的文件列表变化时触发                                     | `(items: ImageUploadItem[]) => void` | -         |

### VideoUploader.Dialog

| 属性  | 说明           | 类型     | 默认值   |
| ----- | -------------- | -------- | -------- |
| title | 弹窗的标题     | `string` | 预览视频 |
| url   | 视频的资源地址 | `string` | -        |

### CSS 变量

| 属性        | 说明                 | 默认值 |
| ----------- | -------------------- | ------ |
| --cell-size | 视频和上传按钮的大小 | `80px` |
