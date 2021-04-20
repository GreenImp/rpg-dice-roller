(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{570:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"math"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math"}},[t._v("#")]),t._v(" math")]),t._v(" "),e("h2",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),e("dl",[e("dt",[e("a",{attrs:{href:"#compareNumbers"}},[t._v("compareNumbers(a, b, operator)")]),t._v(" ⇒ "),e("code",[t._v("boolean")])]),t._v(" "),e("dd",[e("p",[t._v("Check if "),e("code",[t._v("a")]),t._v(" is comparative to "),e("code",[t._v("b")]),t._v(" with the given operator.")])]),t._v(" "),e("dt",[e("a",{attrs:{href:"#evaluate"}},[t._v("evaluate(equation)")]),t._v(" ⇒ "),e("code",[t._v("number")])]),t._v(" "),e("dd",[e("p",[t._v("Evaluate mathematical strings.")])]),t._v(" "),e("dt",[e("a",{attrs:{href:"#isNumeric"}},[t._v("isNumeric(val)")]),t._v(" ⇒ "),e("code",[t._v("boolean")])]),t._v(" "),e("dd",[e("p",[t._v("Check if the given value is a valid finite number.")])]),t._v(" "),e("dt",[e("a",{attrs:{href:"#isSafeNumber"}},[t._v("isSafeNumber(val)")]),t._v(" ⇒ "),e("code",[t._v("boolean")])]),t._v(" "),e("dd",[e("p",[t._v('Check if the given value is a "safe" number.')]),t._v(" "),e("p",[t._v('A "safe" number falls within the '),e("code",[t._v("Number.MAX_SAFE_INTEGER")]),t._v(" and "),e("code",[t._v("Number.MIN_SAFE_INTEGER")]),t._v(" values\n(Inclusive).")])]),t._v(" "),e("dt",[e("a",{attrs:{href:"#sumArray"}},[t._v("sumArray(numbers)")]),t._v(" ⇒ "),e("code",[t._v("number")])]),t._v(" "),e("dd",[e("p",[t._v("Take an array of numbers and add the values together.")])]),t._v(" "),e("dt",[e("a",{attrs:{href:"#toFixed"}},[t._v("toFixed(num, [precision])")]),t._v(" ⇒ "),e("code",[t._v("number")])]),t._v(" "),e("dd",[e("p",[t._v("Round a number to the given amount of digits after the decimal point, removing any trailing\nzeros after the decimal point.")])])]),t._v(" "),e("p",[e("a",{attrs:{name:"compareNumbers"}})]),t._v(" "),e("h2",{attrs:{id:"comparenumbers-a-b-operator-⇒-boolean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comparenumbers-a-b-operator-⇒-boolean"}},[t._v("#")]),t._v(" compareNumbers(a, b, operator) ⇒ "),e("code",[t._v("boolean")])]),t._v(" "),e("p",[t._v("Check if "),e("code",[t._v("a")]),t._v(" is comparative to "),e("code",[t._v("b")]),t._v(" with the given operator.")]),t._v(" "),e("p",[e("strong",[t._v("Kind")]),t._v(": global function"),e("br"),t._v(" "),e("strong",[t._v("Returns")]),t._v(": "),e("code",[t._v("boolean")]),t._v(" - "),e("code",[t._v("true")]),t._v(" if the comparison matches, "),e("code",[t._v("false")]),t._v(" otherwise")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("a")]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[t._v("The number to compare with "),e("code",[t._v("b")])])]),t._v(" "),e("tr",[e("td",[t._v("b")]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[t._v("The number to compare with "),e("code",[t._v("a")])])]),t._v(" "),e("tr",[e("td",[t._v("operator")]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("A valid comparative operator: "),e("code",[t._v("=, <, >, <=, >=, !=")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example")]),t._v(" "),e("em",[t._v("(Is `a` greater than `b`?)")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareNumber")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Example")]),t._v(" "),e("em",[t._v("(Is `a` equal to `b`?)")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareNumber")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'='")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),e("p",[e("a",{attrs:{name:"evaluate"}})]),t._v(" "),e("h2",{attrs:{id:"evaluate-equation-⇒-number"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evaluate-equation-⇒-number"}},[t._v("#")]),t._v(" evaluate(equation) ⇒ "),e("code",[t._v("number")])]),t._v(" "),e("p",[t._v("Evaluate mathematical strings.")]),t._v(" "),e("p",[e("strong",[t._v("Kind")]),t._v(": global function"),e("br"),t._v(" "),e("strong",[t._v("Returns")]),t._v(": "),e("code",[t._v("number")]),t._v(" - The result of the equation")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("equation")]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("The mathematical equation to compute.")])])])]),t._v(" "),e("p",[e("strong",[t._v("Example")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("evaluate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5+6'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 11")]),t._v("\n")])])]),e("p",[e("a",{attrs:{name:"isNumeric"}})]),t._v(" "),e("h2",{attrs:{id:"isnumeric-val-⇒-boolean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isnumeric-val-⇒-boolean"}},[t._v("#")]),t._v(" isNumeric(val) ⇒ "),e("code",[t._v("boolean")])]),t._v(" "),e("p",[t._v("Check if the given value is a valid finite number.")]),t._v(" "),e("p",[e("strong",[t._v("Kind")]),t._v(": global function"),e("br"),t._v(" "),e("strong",[t._v("Returns")]),t._v(": "),e("code",[t._v("boolean")]),t._v(" - "),e("code",[t._v("true")]),t._v(" if it is a finite number, "),e("code",[t._v("false")]),t._v(" otherwise")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),t._v(" "),e("th",[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("val")]),t._v(" "),e("td",[e("code",[t._v("*")])])])])]),t._v(" "),e("p",[e("a",{attrs:{name:"isSafeNumber"}})]),t._v(" "),e("h2",{attrs:{id:"issafenumber-val-⇒-boolean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issafenumber-val-⇒-boolean"}},[t._v("#")]),t._v(" isSafeNumber(val) ⇒ "),e("code",[t._v("boolean")])]),t._v(" "),e("p",[t._v('Check if the given value is a "safe" number.')]),t._v(" "),e("p",[t._v('A "safe" number falls within the '),e("code",[t._v("Number.MAX_SAFE_INTEGER")]),t._v(" and "),e("code",[t._v("Number.MIN_SAFE_INTEGER")]),t._v(" values\n(Inclusive).")]),t._v(" "),e("p",[e("strong",[t._v("Kind")]),t._v(": global function"),e("br"),t._v(" "),e("strong",[t._v("Returns")]),t._v(": "),e("code",[t._v("boolean")]),t._v(" - "),e("code",[t._v("true")]),t._v(' if the value is a "safe" number, '),e("code",[t._v("false")]),t._v(" otherwise")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),t._v(" "),e("th",[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("val")]),t._v(" "),e("td",[e("code",[t._v("*")])])])])]),t._v(" "),e("p",[e("a",{attrs:{name:"sumArray"}})]),t._v(" "),e("h2",{attrs:{id:"sumarray-numbers-⇒-number"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sumarray-numbers-⇒-number"}},[t._v("#")]),t._v(" sumArray(numbers) ⇒ "),e("code",[t._v("number")])]),t._v(" "),e("p",[t._v("Take an array of numbers and add the values together.")]),t._v(" "),e("p",[e("strong",[t._v("Kind")]),t._v(": global function"),e("br"),t._v(" "),e("strong",[t._v("Returns")]),t._v(": "),e("code",[t._v("number")]),t._v(" - The summed value")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),t._v(" "),e("th",[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("numbers")]),t._v(" "),e("td",[e("code",[t._v("Array.<number>")])])])])]),t._v(" "),e("p",[e("a",{attrs:{name:"toFixed"}})]),t._v(" "),e("h2",{attrs:{id:"tofixed-num-precision-⇒-number"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tofixed-num-precision-⇒-number"}},[t._v("#")]),t._v(" toFixed(num, [precision]) ⇒ "),e("code",[t._v("number")])]),t._v(" "),e("p",[t._v("Round a number to the given amount of digits after the decimal point, removing any trailing\nzeros after the decimal point.")]),t._v(" "),e("p",[e("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("num")]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The number to round")])]),t._v(" "),e("tr",[e("td",[t._v("[precision]")]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("0")])]),t._v(" "),e("td",[t._v("The number of digits after the decimal point")])])])]),t._v(" "),e("p",[e("strong",[t._v("Example")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.236")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.24")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 30.1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0000000004")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);