# FormPicker 选择器

<Alert type="info">
  只适用于 
  <span style="color:#d56161;font-weight: bold; font-size: 1.25em;margin: 0 6px">Form.Item</span> 
  内，作为 
  <span style="color:#d56161;font-weight: bold; font-size: 1.25em;margin: 0 6px">Picker</span>
  组件的二次封装。如果你只想使用 
  <span style="color:#d56161;font-weight: bold; font-size: 1.25em;margin: 0 6px">Picker</span>
  ，请访问 &nbsp;
  <a href="https://mobile.ant.design/zh/components/picker">Picker</a>
</Alert>

## Demo:

### 基础示例

<code src="./demos/demo1.tsx"></code>

### antd-mobile 使用对比

<code src="./demos/demo2.tsx"></code>

## API

由对比可知，`FormPicker` 精简了 `Picker` 的使用，仅需要最核心的 `columns`，即可。 <br/>

其他 `API` 继承自 `antd-mobile` 的 `Picker` 组件 [点击查看](https://mobile.ant.design/zh/components/picker#%E5%B1%9E%E6%80%A7) <br/>

| 属性    | 说明             | 类型                                                           | 默认值 |
| ------- | ---------------- | -------------------------------------------------------------- | ------ |
| columns | 配置每一列的选项 | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -      |
