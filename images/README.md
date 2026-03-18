# VWD温馨家园 - 图片资源说明

## 目录说明

本目录应存放网站所需的所有图片资源。当前网站使用的是在线占位图片（来自Unsplash），如需替换为本地图片，请参考以下说明。

## 推荐图片文件清单

### 1. Logo相关
- `logo.svg` - 网站Logo图标（SVG格式，支持矢量缩放）
  - 尺寸建议：200x200px
  - 设计建议：结合爱心与医疗十字元素的简约设计

### 2. 首页图片
- `banner.jpg` - 英雄横幅背景图
  - 尺寸建议：1920x600px
  - 主题：温馨的家庭、医疗关怀、希望与温暖
  - 占位链接：https://images.unsplash.com/photo-1576091160399-112ba8d25d1d

- `news-1.jpg` - 新闻图片1（医疗研究）
  - 尺寸建议：800x600px
  - 占位链接：https://images.unsplash.com/photo-1551076805-e1869033e561

- `news-2.jpg` - 新闻图片2（患者活动）
  - 尺寸建议：800x600px
  - 占位链接：https://images.unsplash.com/photo-1506905925346-21bda4d32df4

- `news-3.jpg` - 新闻图片3（药物治疗）
  - 尺寸建议：800x600px
  - 占位链接：https://images.unsplash.com/photo-1579684385127-1ef15d508118

- `news-4.jpg` - 新闻图片4（健康生活）
  - 尺寸建议：800x600px
  - 占位链接：https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d

### 3. 疾病知识页图片
- `vwd-mechanism.jpg` - VWD病理机制示意图
  - 尺寸建议：800x400px
  - 占位链接：https://images.unsplash.com/photo-1576091160399-112ba8d25d1d

- `genetics-chart.jpg` - 遗传模式示意图
  - 尺寸建议：800x400px
  - 占位链接：https://images.unsplash.com/photo-1559757175-5700dde675bc

## 当前使用的占位图片

网站目前使用Unsplash的免费可商用图片作为占位符。这些图片会自动加载，无需手动下载。

### 获取免费可商用图片的网站推荐：

1. **Unsplash** (https://unsplash.com)
   - 高质量免费图片
   - 无需署名（但推荐署名）
   - 支持"医疗"、"家庭"、"健康"等关键词搜索

2. **Pexels** (https://www.pexels.com)
   - 免费照片和视频
   - 许可证：CC0（可免费商用）

3. **Pixabay** (https://pixabay.com)
   - 免费图片、插画、矢量图
   - 许可证：免费用于商业用途

## 如何替换为本地图片：

1. 在 `images/` 目录中放置相应的图片文件
2. 打开HTML文件，找到对应的 `<img>` 标签
3. 将 `src` 属性从在线链接改为本地路径，例如：

   ```html
   <!-- 修改前 -->
   <img src="https://images.unsplash.com/photo-..." alt="...">
   
   <!-- 修改后 -->
   <img src="images/banner.jpg" alt="...">
   ```

## 注意事项：

1. **图片格式**：推荐使用 JPG、PNG 或 WebP 格式
2. **文件大小**：为提高加载速度，请优化图片文件大小（建议每张不超过500KB）
3. **版权问题**：确保使用的图片具有合法的使用许可
4. **响应式**：图片应能适应不同屏幕尺寸，当前CSS已包含响应式样式
5. **alt属性**：所有图片都应包含描述性的alt文本，以提高可访问性

## 图标说明

网站图标使用内嵌的SVG格式，无需单独下载。SVG图标包括：
- Logo图标（心形）
- 信息图标
- 医疗图标
- 用户图标
- 链接图标

这些SVG图标已直接嵌入HTML中，可确保在任何设备上清晰显示。
