<h1 align="center">
  <br>
  快简历（精简版）
  <br>
</h1>

<h4 align="center">
  多种简历模板可供选择，当然也可以创建你自己的简历，欢迎分享模板~
</h4>

<br>
<br>

<p align="left">
<img src="src/assets/preview/resume-purple.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-side-bar-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-left-right-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-material-dark.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-left-right.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-side-bar.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-oblique.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<br>
<br>

## 最低配置

NodeJs >= 8.5

## 如何使用

1. 克隆本项目。

2. 执行 `npm install`。

3. 在`resume/`文件夹中填写信息: 编辑`data.yml`中的内容，把`id.jpg`更新为个人图片。

4. 执行 `npm run dev` 预览简历。

5. 找到适合的简历，浏览器打印为PDF。

<br>


## Creating and Updating Templates

自定义简历模板请参考<a href="DEVELOPER.md">开发文档</a>。

<br>


## 来约
欢迎使用，发现问题请帮忙修下，哈哈。  
有好的简历模板请多分享，图片也可以，我们把它做成模板，造福更多人。
<br>


<br>

## 与原版的差别
项目fork的是salomonelli的<a href="https://salomonelli.github.io/best-resume-ever">best-resume-ever</a>，为原作者点赞！

更改的内容如下：
1. 删除了导出PDF的功能：

    原项目中使用puppeteer（chrome的内核包）实现导出功能，实现原理和浏览器中“打印 -> 另存为PDF”功能相同。但由于puppeteer包比较大，install时耗费时间长，且下载过程容易中断（特别是国内），所以把这部分功能去除。  
    经测试，通过浏览器（以Chrome为例）的“打印 -> 另存为PDF”功能（打印选项：布局->纵向；纸张->A4；边距->无） 保存的PDF，与源代码直接导出的结果完全相同。

2. 删除了预览功能（PDF->IMAGE）：

   原项目中，利用pdf-image把PDF导出为图片来达到预览PDF的功能。现在打印PDF前，可以直接在打印窗口预览，所以省去了这一功能。

3. 删除了对material-design-icon、material-icon的引用：

   原项目中为了表示图标的多样性，所以引入了font-awesome和material的icon，但是为了保持简历风格的统一性，实际只需要一种icon即可。material的icon包由于比较大，且下载十分困难，所以去除了对它的引用，用font-awesome的图标做了替代。


>精简后的代码依赖更少，包更小，对环境的支持也更好。windows用户可以放心安全的使用了。

## 后续工作
1. 目前模板更偏向外国简历的板式和内容，后面上线一些中文简历模板
2. 把模板拆分为布局、基本信息、教育经历、工作经历、项目经历、技能等模块
3. 支持通过组合拼接各类模块，生成更多模板
4. 把目前的config.json获取信息改为从线上form获取，直接生产可供用户保存的简历