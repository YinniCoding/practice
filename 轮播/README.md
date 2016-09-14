## 组件化轮播

  效果如图所示：
  
  ![](http://ww1.sinaimg.cn/mw690/62d95157gw1f7sxzl22jzj20j20aqgm7.jpg)

### 功能包括：
  1. 点击左右箭头翻页 （1s完成）
  2. 点击小圆点翻页
  3. 自动翻页 （每3s）

  [点击Demo]()查看效果

### 使用方式
依赖jQuery
1. HTML容器
  容器需要包括如下结构
  ```
  <div class="className">
    <ul id="ulName">
      <li index=1><img src="" /a></li>
      <li index=1><img src="" /a></li>
      ... ...
    </ul>
    <a class="pre arrow"><</a>
    <a class="next arrow">></a>
    <div id="nav">
      <span class="on" index=1></span>
      <span index=2></span>
      ... ...
    </div>
  </div>
  ```

2. 引入js

  `<script src="js/index.js"></script>`

3. 调用

  ```
  <script>
    exports($("#ulName"));
  </script>
  ```
