(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{553:function(r,e,o){"use strict";o.r(e);var t=o(27),i=Object(t.a)({},(function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[o("h1",{attrs:{id:"dropmodifier"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dropmodifier"}},[r._v("#")]),r._v(" DropModifier")]),r._v(" "),o("p",[o("a",{attrs:{name:"DropModifier"}})]),r._v(" "),o("h2",{attrs:{id:"dropmodifier-⇐-keepmodifier"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dropmodifier-⇐-keepmodifier"}},[r._v("#")]),r._v(" DropModifier ⇐ "),o("code",[r._v("KeepModifier")])]),r._v(" "),o("p",[r._v("A "),o("code",[r._v("DropModifier")]),r._v(' will "drop" (Remove from total calculations) dice from a roll.')]),r._v(" "),o("p",[o("strong",[r._v("Kind")]),r._v(": global class"),o("br"),r._v(" "),o("strong",[r._v("Extends")]),r._v(": "),o("code",[r._v("KeepModifier")]),o("br"),r._v(" "),o("strong",[r._v("See")]),r._v(": "),o("a",{attrs:{href:"KeepModifier"}},[r._v("KeepModifier")]),r._v(" for the opposite of this modifier")]),r._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#DropModifier"}},[r._v("DropModifier")]),r._v(" ⇐ "),o("code",[r._v("KeepModifier")]),r._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#new_DropModifier_new"}},[r._v("new DropModifier([end], [qty])")])]),r._v(" "),o("li",[o("a",{attrs:{href:"#DropModifier+name"}},[r._v(".name")]),r._v(" ⇒ "),o("code",[r._v("string")])]),r._v(" "),o("li",[o("a",{attrs:{href:"#DropModifier+notation"}},[r._v(".notation")]),r._v(" ⇒ "),o("code",[r._v("string")])]),r._v(" "),o("li",[o("a",{attrs:{href:"#DropModifier+rangeToDrop"}},[r._v(".rangeToDrop(_results)")]),r._v(" ⇒ "),o("code",[r._v("Array.<number>")])])])])]),r._v(" "),o("p",[o("a",{attrs:{name:"new_DropModifier_new"}})]),r._v(" "),o("h3",{attrs:{id:"new-dropmodifier-end-qty"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-dropmodifier-end-qty"}},[r._v("#")]),r._v(" new DropModifier([end], [qty])")]),r._v(" "),o("p",[r._v("Create a "),o("code",[r._v("DropModifier")]),r._v(" instance.")]),r._v(" "),o("p",[o("strong",[r._v("Throws")]),r._v(":")]),r._v(" "),o("ul",[o("li",[o("code",[r._v("RangeError")]),r._v(" End must be one of 'h' or 'l'")]),r._v(" "),o("li",[o("code",[r._v("TypeError")]),r._v(" qty must be a positive integer")])]),r._v(" "),o("table",[o("thead",[o("tr",[o("th",[r._v("Param")]),r._v(" "),o("th",[r._v("Type")]),r._v(" "),o("th",[r._v("Default")]),r._v(" "),o("th",[r._v("Description")])])]),r._v(" "),o("tbody",[o("tr",[o("td",[r._v("[end]")]),r._v(" "),o("td",[o("code",[r._v("string")])]),r._v(" "),o("td",[o("code",[r._v('"l"')])]),r._v(" "),o("td",[r._v("Either "),o("code",[r._v("h|l")]),r._v(" to drop highest or lowest")])]),r._v(" "),o("tr",[o("td",[r._v("[qty]")]),r._v(" "),o("td",[o("code",[r._v("number")])]),r._v(" "),o("td",[o("code",[r._v("1")])]),r._v(" "),o("td",[r._v("The amount of dice to drop")])])])]),r._v(" "),o("p",[o("a",{attrs:{name:"DropModifier+name"}})]),r._v(" "),o("h3",{attrs:{id:"dropmodifier-name-⇒-string"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dropmodifier-name-⇒-string"}},[r._v("#")]),r._v(" dropModifier.name ⇒ "),o("code",[r._v("string")])]),r._v(" "),o("p",[r._v("The name of the modifier.")]),r._v(" "),o("p",[o("strong",[r._v("Kind")]),r._v(": instance property of "),o("a",{attrs:{href:"#DropModifier"}},[o("code",[r._v("DropModifier")])]),o("br"),r._v(" "),o("strong",[r._v("Returns")]),r._v(": "),o("code",[r._v("string")]),r._v(" - 'drop-l' or 'drop-h'"),o("br"),r._v(" "),o("a",{attrs:{name:"DropModifier+notation"}})]),r._v(" "),o("h3",{attrs:{id:"dropmodifier-notation-⇒-string"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dropmodifier-notation-⇒-string"}},[r._v("#")]),r._v(" dropModifier.notation ⇒ "),o("code",[r._v("string")])]),r._v(" "),o("p",[r._v("The modifier's notation.")]),r._v(" "),o("p",[o("strong",[r._v("Kind")]),r._v(": instance property of "),o("a",{attrs:{href:"#DropModifier"}},[o("code",[r._v("DropModifier")])]),o("br"),r._v(" "),o("a",{attrs:{name:"DropModifier+rangeToDrop"}})]),r._v(" "),o("h3",{attrs:{id:"dropmodifier-rangetodrop-results-⇒-array-number"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dropmodifier-rangetodrop-results-⇒-array-number"}},[r._v("#")]),r._v(" dropModifier.rangeToDrop(_results) ⇒ "),o("code",[r._v("Array.<number>")])]),r._v(" "),o("p",[r._v("Determine the start and end (end exclusive) range of rolls to drop.")]),r._v(" "),o("p",[o("strong",[r._v("Kind")]),r._v(": instance method of "),o("a",{attrs:{href:"#DropModifier"}},[o("code",[r._v("DropModifier")])]),o("br"),r._v(" "),o("strong",[r._v("Returns")]),r._v(": "),o("code",[r._v("Array.<number>")]),r._v(" - The min / max range to drop")]),r._v(" "),o("table",[o("thead",[o("tr",[o("th",[r._v("Param")]),r._v(" "),o("th",[r._v("Type")]),r._v(" "),o("th",[r._v("Description")])])]),r._v(" "),o("tbody",[o("tr",[o("td",[r._v("_results")]),r._v(" "),o("td",[o("code",[r._v("RollResults")])]),r._v(" "),o("td",[r._v("The results to drop from")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);