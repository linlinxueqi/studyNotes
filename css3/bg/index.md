### background-origin(css3新特性)
   background-origin: padding-box(默认值)|| border-box || content-box(新版本浏览器)
   background-origin: padding || border || content(新版本浏览器)

   - padding-box(padding) => background-position起始位置从padding外边缘（border内边缘）开始显示背景图片
   - border-box和content-box分别从border外边缘和content外边缘开始显示


   ****重点理解：设置background-position的起始位置

   ***** 在background-attachment:fixed时，background-origin将没有作用



### background-clip(css3新特性)
   background-origin: padding-box || border-box(默认值) || content-box

   - padding-box  =>   背景延伸到padding的外边缘
   - border-box   =>   背景图片在边框下
   - content-box  =>   背景图片在内容区域绘制（FireFox3.6一下不支持）

### background-size(css3新特性)
   background-size: auto || <length> || <perentage> || cover || contain 

   - auto     =>   默认值，保留图片原始宽高度
   - <length> =>   取具体的整数值（例如px值），将改变背景图片的大小
   - <perentage> =>  取百分值 0% ~ 100% ，会改变背景图片大小，但此值是相对于这个值是相对于元素的宽度来计算的，不是根据背景图片的宽度进行计算
   - cover => 将背景图片放大，以适合铺满整个容器，但是会导致背景图片失真
   - contain  => 保持背景图片本身的宽高比例，将背景图片缩放倒宽度或者高度正适应所定义的容器区域



 ### background-attachment(css2特性)
    background-attachment:scroll || fixed 

    - 用来设置背景图片是否固定或者是随着页面的其他部分滚动
    - fixed一般运用在html,body中，使用在其他标签上不能达到固定的效果

