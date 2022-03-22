# FormMapPicker 地图选点

## 使用须知

这里需要配置两个使用到的高德脚本，可在 `src/pages/document.ejs` 文件中配置。

```html
<head>
  <script src="https://webapi.amap.com/maps?v=2.0&key=311778bf17753ed936a5b678b29e1aea&plugin=AMap.Geocoder,AMap.ToolBar,AMap.Driving,plugin=AMap.Scale,AMap.OverView"></script>

  <script src="https://webapi.amap.com/ui/1.1/main.js?v=1.1.1"></script>
</head>
```

## Demo:

### 基础示例

<code src="./demos/demo1.tsx"></code>
