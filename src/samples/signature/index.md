## 签字板

使用 `react-canvas-draw` 实现签字，查看 [完整 API](https://github.com/embiem/react-canvas-draw)

```bash
npm install react-canvas-draw
or
yarn add react-canvas-draw
```

## 使用示例

### 基础示例

<code src="./demos/demo1.tsx"></code>

### 不使用笔画引导

<code src="./demos/demo2.tsx"></code>

### 签字板背景

<code src="./demos/demo3.tsx"></code>

### 签字板背景

<code src="./demos/demo3.tsx"></code>

### 清空 和 重做

<code src="./demos/demo4.tsx"></code>

## 重要的属性

### hideInterface: boolean

是否隐藏笔画引导，默认为 `false`

### hideGrid: boolean

是否隐藏背景宫格图，默认为 `false`

### imgSrc: string

设置背景图，可以为 `base64 字符串`，图片链接

### getDataURL(fileType: string, useBgImage: boolean, backgroundColour: string)

`fileType` ：要导出到的文件格式。默认为 `png` （不需要已 `"image/"` 开头，如：'webp','jpeg',...）

`useBgImage`：画布的背景图像是否需要被导出，默认为 `false`

`backgroundColour`：十六进制的背景颜色， 如： `"#ffffff"`

### clear()

清空所有的笔画

### undo()

撤销上一步的操作
