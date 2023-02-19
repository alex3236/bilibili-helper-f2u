"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[654],{37:(e,t,i)=>{i.d(t,{$:()=>d});var o=i(69055),r=i(47874),a=i(33385),n=i(67294),l=i(60677);const s=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],c=l["default"].div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,p=l["default"].h4`
  position: sticky;
  top: -10px;
  display: flex;
  margin: 0 -10px;
  padding: 4px 0 4px 10px;
  color: #3B3B3B;
  background-color: #f4f4f4;
  z-index: 2;

  b {
    margin: 0 4px;
    color: var(--bilibili-pink);
  }

  .more-btn {
    margin-left: auto;
    cursor: pointer;
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999999;
    background-color: #1f1f1f;
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class d extends n.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:a,rowGap:l,columnsGap:d,footer:m,sectionRef:h}=e,b=(0,r.Z)(e,s);return n.createElement(c,(0,o.Z)({className:"section",rowGap:l,columnsGap:d,ref:h},b),i?n.createElement(p,{className:"section-title"},i):null,n.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${a}, 1fr)`,gridColumnEnd:"span "+a}},t),m)}}(0,a.Z)(d,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},57171:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var o=i(33385),r=i(73473),a=i.n(r),n=i(88686),l=i(67294),s=i(55168),c=i(60677),p=i(48903),d=i(37),m=i(42650);const h=c["default"].div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 40px;
    overflow: auto;
    scrollbar-width: thin;

    .section-title {
      top: 28px;
      display: flex;
      width: 100%;

      .more-btn {
        cursor: pointer;
        margin-left: auto;
      }
    }

    .section-content {
      min-height: 200px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,b=c["default"].div`
  display: flex;
  padding: 4px;
  //height: 58px;
  border-radius: 2px;
  cursor: pointer;
  //transition: background-color .2s;
  //content-visibility: auto;
  //contain-intrinsic-size: 0 58px;

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .cover {
    position: relative;
    flex-shrink: 0;
    border-radius: 2px;
    overflow: hidden;

    .img {
      display: block;
      width: 80px;
      max-height: 70px;
      //height: 62.5px;
      border-radius: 2px;
      //transition: filter .2s;
    }

    .badge {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 3px;
      border-radius: 2px;
      background-color: var(--bilibili-pink);
      color: var(--bilibili-gray);
      zoom: .8;
      //opacity: 0;

      &.not-in-live {
        background-color: var(--paper-grey-800);
      }
    }

    .process-bar {
      position: absolute;
      height: 3px;
      width: 100%;
      bottom: 0;
      background-color: var(--google-grey-300);

      .process-handle {
        height: 100%;
        background-color: var(--bilibili-pink);
      }
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 6px;
    display: flex;
    flex-direction: column;

    .title {
      margin: 0;
      color: var(--paper-grey-900);
      line-height: 14px;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;

      .tag {
        margin-right: 4px;
        color: var(--bilibili-blue);
      }
    }

    .username, .view-time {
      display: -webkit-box;
      margin: 0;
      width: fit-content;
      color: var(--paper-grey-600);
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .username:hover {
      text-decoration: underline;
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .img {
        //filter: brightness(1);
      }
    }

    .img {
      //filter: brightness(.8);
    }

    .info {
      .title {
        color: var(--bilibili-gray);
      }
    }
  }
`;class g extends l.Component{constructor(e){super(e),(0,o.Z)(this,"state",{type:0,dataList:[{list:[],viewAt:0,hasMore:!0,ps:30,type:"all"},{list:[],viewAt:0,hasMore:!0,ps:30,type:"archive"},{list:[],viewAt:0,hasMore:!0,ps:30,type:"live"},{list:[],viewAt:0,hasMore:!0,ps:30,type:"article"}]}),(0,o.Z)(this,"listRef",l.createRef()),(0,o.Z)(this,"bottomObserverRef",l.createRef()),(0,o.Z)(this,"loadDataByType",(e=20)=>new(a())(t=>{const{dataList:i,type:o}=this.state;i[o].hasMore&&chrome.runtime.sendMessage({target:"historyWatched",event:"getList",type:i[o].type,viewAt:i[o].viewAt,ps:i[o].ps},r=>{r?(i[o].list.push(...r.list),i[o].viewAt=r.list[r.list.length-1].view_at,r.length<e&&(i[o].hasMore=!1),this.setState({dataList:i},()=>t())):t()})})),(0,o.Z)(this,"handleOnClickHistoryItem",(e,t,i)=>{const{type:o}=this.state;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_history",action:"click_category_item",label:`${o}_${i}`}),this.context.createTab(e,t)}),(0,o.Z)(this,"handleOnClickUserName",(e,t)=>{e.stopPropagation(),e.preventDefault(),this.context.createTab(e,"https://space.bilibili.com/"+t)}),(0,o.Z)(this,"handleOnClickTypeButton",e=>{const{type:t}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",action:"click_category",label:e}),this.setState({type:e},()=>{this.listRef.current&&(this.listRef.current.querySelector(".popup-main-anime .section").scrollTop=0)}))})}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/history"}),this.loadDataByType().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{dataList:i,type:o}=this.state;i[o].hasMore&&e.length&&e[0].intersectionRatio&&this.loadDataByType()},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))})}render(){const{dataList:e,type:t}=this.state,{columns:i}=this.context;return l.createElement(h,{ref:this.listRef},l.createElement("div",{className:"section-btn-group"},l.createElement(n.Button,{className:0===t?"active":"",onClick:()=>this.handleOnClickTypeButton(0)},"\u5168\u90e8"),l.createElement(n.Button,{className:1===t?"active":"",onClick:()=>this.handleOnClickTypeButton(1)},"\u89c6\u9891"),l.createElement(n.Button,{className:2===t?"active":"",onClick:()=>this.handleOnClickTypeButton(2)},"\u76f4\u64ad"),l.createElement(n.Button,{className:3===t?"active":"",onClick:()=>this.handleOnClickTypeButton(3)},"\u4e13\u680f")),l.createElement(d.$,{columns:i,rowGap:0,columnsGap:4,footer:l.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e[t].hasMore&&e[t].list.length>0?l.createElement(n.Button,{className:"border",onClick:()=>this.loadDataByType()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},e[t].list.length>0?e[t].list.map((e,t)=>{const{badge:i,title:o,tag_name:r,view_at:a,cover:s,covers:c,author_name:d,author_mid:m,uri:h,history:g,duration:u,progress:v}=e;let f=h;return g.epid?f="https://www.bilibili.com/bangumi/play/ep"+g.epid:!f&&g.bvid?(f="https://www.bilibili.com/video/"+g.bvid,g.page&&g.page>1&&(f+="?p="+g.page)):!f&&g.oid&&(f="https://www.bilibili.com/read/cv"+g.oid),l.createElement(b,{key:t,onClick:e=>this.handleOnClickHistoryItem(e,f,t),onAuxClick:e=>this.handleOnClickHistoryItem(e,f,t)},l.createElement("div",{className:"cover"},l.createElement(n.Image,{url:s||(c?c[0]:null)}),i?l.createElement("span",{className:["badge","\u672a\u5f00\u64ad"===i?"not-in-live":null].join(" ")},i):null,u&&v?l.createElement("div",{className:"process-bar"},l.createElement("div",{className:"process-handle",style:{width:v/u*100+"%"}})):null),l.createElement("div",{className:"info"},l.createElement("p",{className:"title"},this.context.showTag?l.createElement("span",{className:"tag"},r):null,o),d?l.createElement("p",{className:"username"},l.createElement("a",{onClick:e=>this.handleOnClickUserName(e,m),onAuxClick:e=>this.handleOnClickUserName(e,m)},d)):null,a?l.createElement("p",{className:"view-time"},(0,p.fromNow)(1e3*a)):null))}):l.createElement("div",{style:{padding:"0 8px"}},"\u6ca1\u6709\u6570\u636e")))}}(0,o.Z)(g,"contextType",m.Z);const u=(0,s.EN)(g)}}]);