"use strict";(self["webpackChunktest_wc"]=self["webpackChunktest_wc"]||[]).push([[544],{5050:function(t,e,i){i.d(e,{A:function(){return l}});i(4114);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header",style:t.open?"":"background-image: linear-gradient(90deg, #2aae67, #a7facf)"},[e("div",{staticStyle:{display:"flex",width:"100%"}},[t.open?e("div",{staticStyle:{"background-color":"#2aae67","box-sizing":"border-box","padding-left":"5px",cursor:"pointer"},on:{click:t.home}},[e("img",{staticClass:"pic",attrs:{src:i(409),alt:""}})]):e("div",{staticClass:"logo",on:{click:t.home}},[e("img",{staticClass:"pic",attrs:{src:i(409),alt:""}}),e("span",{staticStyle:{color:"#fff","font-size":"22px"}},[t._v("微信专项测试")])]),e("div",{staticClass:"nav",style:t.open?"background-image: linear-gradient(90deg, #2aae67, #a7facf)":""},[e("div",["控制台"!==t.headerName?e("div",{staticClass:"projectnav",style:t.open?"":"box-shadow: -2px 0px 4px -1px #308a36;"},["no"!==t.$route.query.slide&&"QualityReport"!==t.$route.name&&"Home"!==t.$route.name?e("i",{class:t.open?"el-icon-s-unfold":"el-icon-s-fold",staticStyle:{"margin-right":"10px",cursor:"pointer","font-size":"20px",color:"#fff"},on:{click:t.changeCollapse}}):t._e(),t.headerName?e("div",{staticStyle:{color:"#fff",display:"flex","align-items":"center",cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.$router.push({path:"/Console"})}}},[t._v(" 控制台 ")]):t._e(),e("el-dropdown",[e("span",{staticClass:"el-dropdown-link"},[t._v(" 内测项目"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[t._v("黄金糕")])],1)],1),"log"==t.$route.name?e("div",{staticStyle:{"margin-left":"25px","font-size":"14px"}},[e("el-popover",{attrs:{placement:"top-start",trigger:"click"}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("工具 "),e("i",{staticClass:"el-icon-arrow-down"})]),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap","max-width":"867px",gap:"20px"}},t._l(t.select,(function(i,a){return e("div",{key:a,staticStyle:{display:"flex","align-items":"center",gap:"10px",width:"250px"}},[e("i",{staticClass:"iconfont",class:i.icon,staticStyle:{"font-size":"26px"}}),e("div",[e("b",[t._v(t._s(i.title))]),e("p",{staticStyle:{margin:"0"}},[t._v(t._s(i.txt))])])])})),0)])],1):t._e()],1):t._e()]),e("div",[e("span",{staticClass:"wc",staticStyle:{color:"rgb(106, 108, 115)","font-size":"14px","margin-right":"30px",cursor:"pointer"},on:{click:t.log}},[t._v("进入工作台")]),e("el-dropdown",[e("span",{staticClass:"el-dropdown-link"},[t._v(" v_jntaodeng"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"})],1)],1)])])])},s=[],o={props:{isOpen:!1,headerName:"",lastProjects:[]},data(){return{open:!1,project:[],searchInput:{keyword:""},name:"",list:[],useInfo:{},storeProjectID:"",lastProject:[],date:{page_size:100,current_page:1},select:[{title:"For APP（平台云测版）",txt:"面向APP/H5/小程序/小游戏的智能探索型测试服务",icon:"icon-tupian"},{title:"For APP（本地体验版）",txt:"云真机，全自动，高效率，深触达",icon:"icon-shouji"},{title:"For H5",txt:"支持Crash/ANR/JSError等专项故障监测",icon:"icon-shouji"},{title:"For 小程序/小游戏",txt:"支持集过程和结果一体的可视化分析报告",icon:"icon-shouji"},{title:"For H5",txt:"面向H5的性能测试服务",icon:"icon-shouji"},{title:"For APP/H5",txt:"面向APP/H5/小程序/小游戏的兼容性测试服务",icon:"icon-shouji"},{title:"For APP/H5",txt:"支持集过程和结果一体的可视化分析报告",icon:"icon-shouji"},{title:"For 直播",txt:"视频流回放,黑屏检测,卡顿检测",icon:"icon-shouji"},{title:"For 短视频",txt:"短视频专项测试",icon:"icon-weixin"},{title:"小游戏云测试",txt:"支持微信小游戏功能、性能、兼容性测试",icon:"icon-ios"},{title:"测试工具",txt:"覆盖主流厂商和头部用户的真机设备",icon:"icon-ceshi"},{title:"报告可视化工具",txt:"提供全面专业的可视化质量报告",icon:"icon-tupian1"}]}},watch:{isOpen:{immediate:!0,deep:!0,handler(t){this.open=t}},lastProjects:{deep:!0,handler(t){t&&t.length&&(console.log(t,"val"),this.name=t[0].name)}}},mounted(){this.find()},methods:{log(){this.$router.push({name:"log"})},changeCollapse(t){this.open=!this.open,this.$emit("changeCollapse",this.open)},home(){},async handleClick(t){if(t){let e=await getcontrolproject({id:t.project_id});this.$store.commit("switchProjectIDStore",e.data.project_id),this.project.forEach((t=>{if(t.is_react_last)return t.is_react_last=!1})),this.$store.commit("lastProjectName",t.name),this.name=t.name,this.$emit("handleClick",t)}},lastProjectFilter(t){this.lastProject=t.filter((t=>{if(this.$route.params.id)this.$route.params.id==t.project_id?t.is_react_last=!0:t.is_react_last=!1;else if(this.storeProjectID){if(t.project_id==this.storeProjectID)return t.is_react_last=!0;t.is_react_last=!1}if(t.is_react_last)return t.is_react_last})),this.$store.commit("switchProjectIDStore",this.storeProjectID||this.lastProject[0].project_id)},find(){this.date.page_size,this.date.current_page,this.searchInput.keyword}}},r=o,n=i(1656),c=(0,n.A)(r,a,s,!1,null,"27a1a76a",null),l=c.exports},4544:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{overflow:"hidden"}},[e("Header"),e("div",[t._m(0),e("div",{staticClass:"content_car"},[e("h1",{staticStyle:{"text-align":"center"}},[t._v("平台能力")]),e("div",{staticClass:"content_car_box"},[e("div",{staticClass:"item_car"},[e("div",{staticClass:"my-card"},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover","body-style":{height:"350px"}}},[e("h2",[t._v("智能探索测试test")]),e("p",[t._v("面向APP/H5/小程序/小游戏的智能探索型测试服务")]),e("p",[t._v("云真机，全自动，高效率，深触达")]),e("p",[t._v("支持Crash/ANR/JSError等专项故障监测")]),e("p",[t._v("支持集过程和结果一体的可视化分析报告")]),e("div",{staticClass:"btn"},[e("el-button",{key:t.i,staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For APP（平台云测版）")]),e("el-button",{key:t.i,staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For APP（本地体验版）")]),e("el-button",{key:t.i,staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For H5")]),e("el-button",{key:t.i,staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For 小程序/小游戏")])],1)])],1),e("div",{staticClass:"my-card"},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover","body-style":{height:"350px"}}},[e("h2",[t._v("性能测试")]),e("p",[t._v("面向H5的性能测试服务,支持XWeb/X5等多种内 核模式")]),e("p",[t._v("支持图文/视频等差异化评测配置,支持30项+关键 性能指标")]),e("p",[t._v("支持可视化分析报告,支持多任务/多版本性能对比")]),e("div",{staticClass:"btn"},[e("el-button",{staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For H5")])],1)])],1),e("div",{staticClass:"my-card"},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover","body-style":{height:"350px"}}},[e("h2",[t._v("兼容性测试")]),e("p",[t._v("面向APP/H5/小程序/小游戏的兼容性测试服务")]),e("p",[t._v("云真机，全自动，高效率，深触达")]),e("p",[t._v("支持Top50云真机资源，支持自定义测试脚本")]),e("p",[t._v("支持Crash/ANR/JSError等专项故障监测")]),e("p",[t._v("支持集过程和结果一体的可视化分析报告")]),e("div",{staticClass:"btn"},[e("el-button",{staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For APP/H5")]),e("el-button",{staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For 小程序/小游戏")])],1)])],1),e("div",{staticClass:"my-card"},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover","body-style":{height:"350px"}}},[e("h2",[t._v("音视频测试")]),e("p",[t._v("视频流回放")]),e("p",[t._v("黑屏检测")]),e("p",[t._v("卡顿检测")]),e("div",{staticClass:"btn"},[e("el-button",{staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For 直播")]),e("el-button",{staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("For 短视频")])],1)])],1),e("div",{staticClass:"my-card"},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover","body-style":{height:"350px"}}},[e("h2",[t._v("Others")]),e("p",[t._v("支持微信小游戏功能、性能、兼容性测试")]),e("p",[t._v("支持标准化、录制回放、测试框架等多种测试模式")]),e("p",[t._v("覆盖主流厂商和头部用户的真机设备")]),e("p",[t._v("提供全面专业的可视化质量报告")]),e("p",[t._v("提供小游戏自动拉起工具，提供小游戏日志Trace工具")]),e("div",{staticClass:"btn"},[e("el-button",{staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("小游戏云测试")]),e("el-button",{staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("测试工具")]),e("el-button",{staticStyle:{"background-color":"#2aae67",border:"none"},attrs:{type:"primary",size:"mini"}},[t._v("报告可视化工具")])],1)])],1)])])]),e("div",{staticClass:"content_car"},[e("h1",{staticStyle:{"text-align":"center"}},[t._v("平台优势")]),e("div",{staticClass:"advantage"},[e("div",{staticStyle:{width:"60%",display:"flex",margin:"auto",gap:"20px"}},[t._m(1),e("div",{key:t.i,staticClass:"advantage_text",staticStyle:{"padding-top":"30px",flex:"1"}},t._l(t.info.slice(0,4),(function(i,a){return e("div",{key:a,staticStyle:{display:"flex",gap:"12px","":"120px"}},[e("i",{staticClass:"iconfont icon-weixin",staticStyle:{"padding-top":"23px","font-size":"46px"}}),e("div",[e("h3",[t._v(t._s(i.title))]),e("p",[t._v(" "+t._s(i.txt)+" ")])])])})),0),e("div",{key:t.i,staticClass:"advantage_text",staticStyle:{"padding-top":"30px",flex:"1"}},t._l(t.info.slice(4,9),(function(i,a){return e("div",{key:a,staticStyle:{display:"flex",gap:"12px","":"120px"}},[e("i",{staticClass:"iconfont icon-weixin",staticStyle:{"padding-top":"23px","font-size":"46px"}}),e("div",[e("h3",[t._v(t._s(i.title))]),e("p",[t._v(" "+t._s(i.txt)+" ")])])])})),0)])])])]),e("div",{staticClass:"footer"},[t._v(" 微信专项测试 Designed by 微信测试中心 Copyright © 1998-2024 Tencent Inc. All Rights Reserved ")])],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hero",attrs:{id:"home"}},[e("div",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[t._v("微信专项测试平台")]),e("p",{staticClass:"subtitle"},[t._v(" 微信专项测试平台，专为微信小游戏"),e("br"),t._v(" 打造的一站式真机自动化测试和性能测试的测试平台 ")]),e("div",{staticStyle:{width:"190px"}},[e("a",{staticClass:"home-button"},[t._v(" 开始使用 "),e("i",{staticClass:"iconfont icon-youjiantou home-button-icon",staticStyle:{transform:"translateX(8px)",transition:"all 0.5s"}})])])]),e("div",[e("img",{staticClass:"floating-image",attrs:{src:i(8937)}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"advantage_img"},[e("img",{attrs:{src:"https://www.helloimg.com/i/2024/12/16/675f893165843.png"}})])}],o=i(5050),r={components:{Header:o.A},data(){return{info:[{title:"云真机",txt:"提供真实的设备环境，支持多种操作系统和设备型号，确保应用在真实环境中的表现。全自动测试流程，提高测试效率，减少人工干预。",icon:""},{title:"自动化测试",txt:"平台集成APP、H5、小程序、小游戏的自动化测试功能，支持多种测试框架和工具。高效便捷的测试流程，支持自定义创建任务，满足不同测试需求。",icon:""},{title:"设备管理",txt:"集中管理所有测试设备，包括云真机和物理设备。提供设备状态监控、远程控制等功能，确保设备资源的合理利用。",icon:""},{title:"项目管理",txt:"统一管理多个测试项目，支持项目创建、成员管理、权限设置等功能。帮助团队高效协作。",icon:""},{title:"小游戏测试",txt:"专门针对小游戏的测试解决方案，支持多种小游戏平台。提供自动化测试和手动测试功能，确保小游戏的稳定性和用户体验。",icon:""},{title:"数据分析",txt:"收集和分析测试数据，生成详细的测试报告。提供多种数据可视化工具，帮助团队快速定位问题，优化应用性能。",icon:""},{title:"任务管理",txt:"集中管理所有测试任务，支持任务创建、分配、跟踪和结果反馈。提供任务优先级设置和提醒功能，确保任务按时完成。",icon:""},{title:"可视化工具",txt:"提供丰富的数据可视化工具，帮助团队直观地了解测试结果和应用性能。支持自定义图表报表和富文本，满足不同需求。",icon:""}]}}},n=r,c=i(1656),l=(0,c.A)(n,a,s,!1,null,null,null),d=l.exports},8937:function(t,e,i){t.exports=i.p+"img/hero-img.8b0d2025.1963917f.png"},409:function(t,e,i){t.exports=i.p+"img/windowLogo.8df2e3c2.png"}}]);
//# sourceMappingURL=544.f815bdd0.js.map