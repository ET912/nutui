# Progress 进度条

展示操作或任务的当前进度，比如上传文件。

## 基本用法

```html
<nut-progress 
    percentage="30"
>
</nut-progress>
```
设置高度和颜色

```html
<nut-progress
    percentage="30"
    stroke-color="#8e71c7" 
    stroke-width="12"
>
</nut-progress>
```
设置百分比不显示

```html
<nut-progress 
    percentage="50"
    :show-text="false"
>
</nut-progress>
```
设置百分比内显

```html
<nut-progress 
    percentage="60" 
    :text-inside="true" 
    stroke-width="24"
></nut-progress>
```
设置状态显示

```html
<nut-progress 
    percentage="30" 
    stroke-color="#f30" 
    status="active"
>
</nut-progress>
<nut-progress 
    percentage="50"
    stroke-color="#f30"
    stroke-width="15"
    status="wrong"
>
</nut-progress>
<nut-progress 
    percentage="100" 
    :stroke-width="15" 
    status="success"
>
</nut-progress>
```
## 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。
```html
<nut-progress 
    size="small"
>
</nut-progress>
<nut-progress
    size="base"
>
</nut-progress>
<nut-progress 
    size="large"
>
</nut-progress>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| percentage | 百分比 | Number | 0
| stroke-color | 进度条背景色 | String | #1890ff
| stroke-width | 进度条高度 | String | ''
| size | 进度条及文字尺寸，可选值small/base/large | String | -
| show-text | 是否显示进度条文字内容 | Boolean | true
| text-inside | 进度条文字显示位置 | Boolean | false
| status | 进度条当前状态,可选值text/active/wrong/success | String | text
