(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{467:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("k get componentstatuses\n\nk -n kube-system get po\n\nk cluster-info\n\nk get nodes\n\nk get pods\n\nk describe nodes\n\nk describe node "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk describe pod "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk scale rc kubia --replicas"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\nk expose rc kubia --type"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LoadBalancer --name kubia-http\n\nk get svc\n\nk get po -o wide\n\nk get po "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -o yaml\n\nk explain po\n\nk explain po.spec\n\nk logs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk logs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("container_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk port-forward "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local_port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk get po --show-labels\n\nk get po -L "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("label_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk label po "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("env")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("debug --overwrite\n\nk get po -l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("label_key"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("label_value"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk get po -l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("label_key"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk get po -l "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!<label_key>'")]),s._v("\n\nk label node "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vm")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\nk get nodes -l "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vm")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\nk get nodes -L vm\n\nk annotate pod "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("createdBy")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tester"')]),s._v("\n\nk describe pod "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk get ns\n\nk get po -n kube-system\n\nk delete po "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pod_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk delete po -l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("label"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk delete ns "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("namespace"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nk delete all --all\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);