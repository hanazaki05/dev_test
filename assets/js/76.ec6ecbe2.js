(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{236:function(a,t,r){"use strict";r.r(t);var e=r(2),s=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"部署之前"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署之前","aria-hidden":"true"}},[a._v("#")]),a._v(" 部署之前")]),a._v(" "),r("p",[a._v("本节将说明在部署 V2Ray 的过程中需要注意的一些细节，看似无关紧要，但有些许差错可能就会造成部署失败。所以请大家请仔细阅读，在部署的过程如果遇到问题了，也请检查一下是不是哪些地方做得不到位。")]),a._v(" "),r("h2",{attrs:{id:"时间是否准确"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#时间是否准确","aria-hidden":"true"}},[a._v("#")]),a._v(" 时间是否准确")]),a._v(" "),r("p",[a._v("V2Ray 对于时间有比较严格的要求，要求服务器和客户端时间差绝对值不能超过 2 分钟，所以一定要保证时间足够准确。还好 V2Ray 并不要求时区一致。比如说自个儿电脑上的时间是北京时间（东 8 区）2017-07-31 12:08:31，但是 VPS 上的时区是东 9 区，所以 VPS 上的时间应该是2017-07-31 13:06:31 到 2017-07-31 13:10:31 之间才能正常使用 V2Ray。当然，也可以自行改成自己想要的时区。")]),a._v(" "),r("h2",{attrs:{id:"linux-版本的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux-版本的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 版本的问题")]),a._v(" "),r("p",[a._v("由于 V2Ray 使用的编程语言的特点，V2Ray 可以不依赖其它软件（库）而运行，并且可以在许多操作系统上运行（Windows、Linux、BSD等），但是由于新手在学习使用过程中可能会遇到各种问题，却缺乏相应的解决问题的能力，因此在 VPS 上建议与本指南一样使用 Debian 8.x 操作系统，或者使用 Debian 9.x 以上以及 Ubuntu 16.04 以上的系统。请不要迷信某个（些）“最稳定”的系统或系统版本。")]),a._v(" "),r("h2",{attrs:{id:"防火墙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#防火墙","aria-hidden":"true"}},[a._v("#")]),a._v(" 防火墙")]),a._v(" "),r("p",[a._v("有些朋友非要使用最稳定的 Linux，或者 VPS 是从比较为客户考虑的商家里买的，因此正确部署了 V2Ray 之后可能还是连不上。这时候你就要检查一下是否可能是防火墙的问题了。具体情况你可以发工单问客服或 Google。")]),a._v(" "),r("h2",{attrs:{id:"启动问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动问题")]),a._v(" "),r("p",[a._v("使用脚本新安装 V2Ray 后不会自动运行，而是要自己手动运行。另外如果修改了配置文件，要重新启动 V2Ray 新的配置才会生效。")]),a._v(" "),r("h2",{attrs:{id:"配置文件的格式问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置文件的格式问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置文件的格式问题")]),a._v(" "),r("p",[a._v("因为 V2Ray 的配置文件比较长，层级也多，导致编辑时很容易出错，也难检查。如果使用在线的 JSON 工具（当然也有离线 的），可以检查文件格式是否正确。这种在线工具一搜一大把，就不打广告了。")]),a._v(" "),r("h2",{attrs:{id:"代理设置问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理设置问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 代理设置问题")]),a._v(" "),r("p",[a._v("在指南中使用的 FireFox 浏览器，设置的是 socks 代理。但是有的朋友喜欢用其它浏览器，那么我提示一下，客户端的 inbound 可以使用 HTTP 协议，并在 IE 选项中设置代理。或者也可以使用浏览器插件，如 SwitchyOmega 等。")]),a._v(" "),r("h2",{attrs:{id:"部署过程中的命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署过程中的命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 部署过程中的命令")]),a._v(" "),r("p",[a._v("本指南约定，所有以 $ 开头的都是命令行，不以 $ 开头的都不是命令。在实际输入命令时，都不需要将 $ 输进去。")]),a._v(" "),r("p",[r("strong",[a._v("另外，本指南当中所有带 sudo 的命令都需要 su 权限。如果你不明白这句话的意思，可以直接使用 root 账户，则在输入命令时不需要输入 sudo 这几个字符。")])]),a._v(" "),r("h2",{attrs:{id:"阅读的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#阅读的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 阅读的问题")]),a._v(" "),r("p",[a._v("无论是在网络上，还是现实生活中，我发现不少人很喜欢跳跃式看文章/书/教程，自以为只看关键的东西就足够了，似乎这样子非常高效。实际上这样子做大多会花更多的时间才能达到同样的效果。所以如果你刚接触 V2Ray，又不太会使用，建议按照本指南的顺序并看完。")]),a._v(" "),r("h2",{attrs:{id:"绝技！最终解决问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#绝技！最终解决问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 绝技！最终解决问题")]),a._v(" "),r("p",[a._v("很遗憾，我没有能力预测所有可能出现的问题。但是，我可以告诉你，你遇到的所有问题都有人早就遇到了，并且还给出了相应的解决办法（除非你是该行业的顶尖人才，遇到的是需要调用浩瀚的资源才有希望解决的）。所以如果遇到问题，可以通过搜索引擎搜索解决，到社区里提问是迫不得已的办法。我可以很明确地说，在部署 V2Ray 的过程中，所遇到所有的问题有 90% 以上的问题可以通过搜索或者查看相关文档解决，要社区提问才能解决的不足 5%。如果不是，那么只能说明你的综合能力还需提高（比如查资料的能力、阅读理解能力的）。当然，我的意思并不是反对到社区提问，而是希望提问的东西能够有点意义，谁也不愿意自己就像个复读机一样天天回答网友们千篇一律的问题。如果有提问的需要，强烈建议先认真学习一个"),r("a",{attrs:{href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("提问的智慧"),r("OutboundLink")],1),a._v("。")])])},[],!1,null,null,null);t.default=s.exports}}]);