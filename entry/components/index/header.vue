<template>
<header class="top-bar no-title">
    <a class="btn-top back">[返回]</a>
    <h1 class="top-title">#top_title#</h1>
    <div class="top-logo">[腾讯动漫LOGO]</div>
    <div class="padding"></div>
    <a class="btn-top search" href="/search/index">[搜索]</a>
  

</header>
</template>
<style>
.top-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    z-index: 149;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.5rem;
    background-color: #cccccc;
   box-shadow: 0 0 0.125rem rgba(9, 2, 4, 0.06);
    
}
.top-bar .top-title {
    display: block;
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: 0.9rem;
    color: #535252;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.top-bar .top-title {
    display: block;
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: 0.9rem;
    color: #535252;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.top-bar.no-title .top-title, .top-bar.no-title .btn-top.back {
    display: none;
}
.top-bar .btn-top.back {
    padding: 0.375rem;
}
.top-bar .btn-top.back, .top-bar .btn-top.search, .top-bar .btn-top.menu, .nav-menu .nav-list .link {
    border-radius: 0.1rem;
    overflow: hidden;
}
.top-bar .btn-top.back, .top-bar .btn-top.search, .top-bar .btn-top.menu, .nav-menu .nav-list .link {
    border-radius: 0.1rem;
    overflow: hidden;
}
.top-bar .btn-top {
    display: block;
    text-indent: -2500rem;
    font-size: 0;
}
a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
}
.top-bar.no-title .top-logo {
    display: block;
}
.top-bar .top-logo {
    display: none;
    width: 6rem;
    height: 2.5rem;
    background: url(http://gtimg.ac.qq.com/h5/public/images/sc_img_default.png?v=7bae68b0e0ed2802) no-repeat 0rem -2.55rem;
    background-size: 14.8rem 7rem;
    width: 6rem;
    height: 2.5rem;
    background-repeat: no-repeat;
    text-indent: -2500rem;
    font-size: 0;
}
.top-bar .padding {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
</style>

