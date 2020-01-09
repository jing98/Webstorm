window.onload = function () {
  //获取头部dom元素
  var arrowEl = document.querySelector("#head .headMain > .arrow");
  var liNodes = document.querySelectorAll("#head .headMain > .nav > .list > li");
  var upNodes = document.querySelectorAll("#head .headMain > .nav > .list > li .up");
  var firstLiNode = liNodes[0];
  var firstUpNode = firstLiNode.querySelector(".up");

  //获取内容区dom元素
  var head = document.querySelector("#head");
  var content = document.querySelector("#content");
  var cLiNodes = document.querySelectorAll("#content .list > li");
  var cList = document.querySelector("#content .list");
  //同步当前屏的索引  this.index---同步now  now---不同步---this.index
  var now = 0;
  var timer = 0;






  //内容区
  //缩小屏幕的时候
  window.onresize = function () {
    /*
    * 调整分辨率（用px的时候）
    *     1.没有点击的时候，视口只能出现一屏 contentBind();
    *     2.点击后视口只能出现一屏，在1的基础上对每一屏的偏移量进行重新调整，因为视口只能出现一屏
    *         cList.style.top = -now * (document.documentElement.clientHeight - head.offsetHeight) + "px";
    *     3.小箭头的位置也需要调整
    *         arrowEl.style.left = liNodes[now].offsetLeft + liNodes[now].offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
    * */
    contentBind();
    cList.style.top = -now * (document.documentElement.clientHeight - head.offsetHeight) + "px";
    arrowEl.style.left = liNodes[now].offsetLeft + liNodes[now].offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
  };
  //内容区交互
  //滚轮
  if (content.addEventListener) {
    content.addEventListener("DoMMouseScroll", function (ev) {
      ev = ev || event;

      //使劲滑的时候，只要触发事件的时间间隔在200ms之内，第二次触发滚轮事件的时候，把上一次的定时器清掉
      //让fn的逻辑在DoMMouseScroll事件被频繁触发的时候，只执行一次
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn(ev);
      }, 200);
    })
  }//W3C
  content.onmousewheel = function (ev) {
    ev = ev || event;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(ev);
    }, 200);
  };//IE/Opera/Chrome
  function fn(ev) {
    ev = ev || event;
    var dir = "";
    if (ev.wheelDelta) {
      dir = ev.wheelDelta > 0 ? "up" : "down";
    } else if (ev.detail) {
      dir = ev.detail < 0 ? "up" : "down";
    }
    switch (dir) {
      case "up":
        if (now > 0) {
          now--;
          move(now);
        }
        break;
      case "down":
        if (now < cLiNodes.length - 1) {
          now++;
          move(now);
        }
        break;
    }
  }

  //调整高度
  contentBind();
  function contentBind() {
    content.style.height = document.documentElement.clientHeight - head.offsetHeight + "px";
    for (var i = 0; i < cLiNodes.length; i++) {
      cLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + "px";
    }
  }


  //头部交互
  headBind();
  function headBind() {
    firstUpNode.style.width = "100%";
    arrowEl.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
    for (var i = 0; i < liNodes.length; i++) {
      //转绑很重要，变量跟属性是不一样的
      liNodes[i].index = i;
      liNodes[i].onclick = function () {
        move(this.index);
        now = this.index;
      }
    }
  }

  //小箭头移动:异步,动画的核心函数
  move(0);
  function move(index) {
    for (var i = 0; i < upNodes.length; i++) {
      // upNodes[i].style.width = "0";
      upNodes[i].style.width = "";
    }
    upNodes[index].style.width = "100%";
    arrowEl.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
    cList.style.top = -index * (document.documentElement.clientHeight - head.offsetHeight) + "px";
  }
};