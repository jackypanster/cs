(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{469:function(s,e,a){"use strict";a.r(e);var t=a(4),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"查看pod状态以及运行节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看pod状态以及运行节点"}},[s._v("#")]),s._v(" 查看"),a("strong",[s._v("Pod")]),s._v("状态以及运行节点")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl get pods -o wide\nkubectl -n kube-system get pods -o wide\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看pod事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看pod事件"}},[s._v("#")]),s._v(" 查看"),a("strong",[s._v("Pod")]),s._v("事件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl describe pod "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看node状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看node状态"}},[s._v("#")]),s._v(" 查看"),a("strong",[s._v("Node")]),s._v("状态")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl get nodes\nkubectl describe node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看kubelet日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看kubelet日志"}},[s._v("#")]),s._v(" 查看"),a("strong",[s._v("Kubelet")]),s._v("日志")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("journalctl -l -u kubelet\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);