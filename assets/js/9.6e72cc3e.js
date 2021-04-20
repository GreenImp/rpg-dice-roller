(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{539:function(t,e,a){"use strict";a.r(e);var o=a(27),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"diceroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll"}},[t._v("#")]),t._v(" DiceRoll")]),t._v(" "),a("p",[a("a",{attrs:{name:"DiceRoll"}})]),t._v(" "),a("h2",{attrs:{id:"diceroll-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-2"}},[t._v("#")]),t._v(" DiceRoll")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("DiceRoll")]),t._v(" handles rolling of a single dice notation and storing it's result.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global class"),a("br"),t._v(" "),a("strong",[t._v("See")]),t._v(": "),a("a",{attrs:{href:"DiceRoller"}},[t._v("DiceRoller")]),t._v(" if you need to keep a history of rolls")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#DiceRoll"}},[t._v("DiceRoll")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#new_DiceRoll_new"}},[t._v("new DiceRoll(notation)")])]),t._v(" "),a("li",[a("em",[t._v("instance")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#DiceRoll+averageTotal"}},[t._v(".averageTotal")]),t._v(" ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+maxTotal"}},[t._v(".maxTotal")]),t._v(" ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+minTotal"}},[t._v(".minTotal")]),t._v(" ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+notation"}},[t._v(".notation")]),t._v(" ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+output"}},[t._v(".output")]),t._v(" ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+rolls"}},[t._v(".rolls")]),t._v(" ⇒ "),a("code",[t._v("Array.<(ResultGroup|RollResults|string|number)>")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+total"}},[t._v(".total")]),t._v(" ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+export"}},[t._v(".export([format])")]),t._v(" ⇒ "),a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("null")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+hasExpressions"}},[t._v(".hasExpressions()")]),t._v(" ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+hasRolls"}},[t._v(".hasRolls()")]),t._v(" ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+roll"}},[t._v(".roll()")]),t._v(" ⇒ "),a("code",[t._v("Array.<RollResults>")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+toJSON"}},[t._v(".toJSON()")]),t._v(" ⇒ "),a("code",[t._v("Object")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DiceRoll+toString"}},[t._v(".toString()")]),t._v(" ⇒ "),a("code",[t._v("string")])])])]),t._v(" "),a("li",[a("em",[t._v("static")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#DiceRoll.import"}},[t._v(".import(data)")]),t._v(" ⇒ "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])])])])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"new_DiceRoll_new"}})]),t._v(" "),a("h3",{attrs:{id:"new-diceroll-notation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-diceroll-notation"}},[t._v("#")]),t._v(" new DiceRoll(notation)")]),t._v(" "),a("p",[t._v("Create a DiceRoll, parse the notation and roll the dice.")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("notation")]),t._v(" is an object, it must contain a "),a("code",[t._v("notation")]),t._v(" property that defines the notation.\nIt can also have an optional array of "),a("code",[t._v("RollResults")]),t._v(", in the "),a("code",[t._v("rolls")]),t._v(" property.")]),t._v(" "),a("p",[a("strong",[t._v("Throws")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("NotationError")]),t._v(" notation is invalid")]),t._v(" "),a("li",[a("code",[t._v("RequiredArgumentError")]),t._v(" notation is required")]),t._v(" "),a("li",[a("code",[t._v("TypeError")]),t._v(" Rolls must be a valid result object, or an array")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("notation")]),t._v(" "),a("td",[a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("Object")])]),t._v(" "),a("td",[t._v("The notation to roll")])]),t._v(" "),a("tr",[a("td",[t._v("notation.notation")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("If `notation is an object; the notation to roll")])]),t._v(" "),a("tr",[a("td",[t._v("[notation.rolls]")]),t._v(" "),a("td",[a("code",[t._v("ResultGroup")]),t._v(" | "),a("code",[t._v("Array.<(ResultGroup|RollResults|string|number)>")])]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("notation")]),t._v(" is an object; the rolls to import")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")]),t._v(" "),a("em",[t._v("(String notation)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" roll "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiceRoll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4d6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Example")]),t._v(" "),a("em",[t._v("(Object)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" roll "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiceRoll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  notation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4d6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rolls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RollResults object or array of roll results")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"DiceRoll+averageTotal"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-averagetotal-⇒-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-averagetotal-⇒-number"}},[t._v("#")]),t._v(" diceRoll.averageTotal ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("The average possible total for the notation.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Since")]),t._v(": 4.3.0"),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+maxTotal"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-maxtotal-⇒-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-maxtotal-⇒-number"}},[t._v("#")]),t._v(" diceRoll.maxTotal ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("The maximum possible total for the notation.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Since")]),t._v(": 4.3.0"),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+minTotal"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-mintotal-⇒-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-mintotal-⇒-number"}},[t._v("#")]),t._v(" diceRoll.minTotal ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("The minimum possible total for the notation.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Since")]),t._v(": 4.3.0"),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+notation"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-notation-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-notation-⇒-string"}},[t._v("#")]),t._v(" diceRoll.notation ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("The dice notation.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+output"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-output-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-output-⇒-string"}},[t._v("#")]),t._v(" diceRoll.output ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("String representation of the rolls")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("d20"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("d6"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"DiceRoll+rolls"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-rolls-⇒-array-resultgroup-rollresults-string-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-rolls-⇒-array-resultgroup-rollresults-string-number"}},[t._v("#")]),t._v(" diceRoll.rolls ⇒ "),a("code",[t._v("Array.<(ResultGroup|RollResults|string|number)>")])]),t._v(" "),a("p",[t._v("The dice rolled for the notation")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+total"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-total-⇒-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-total-⇒-number"}},[t._v("#")]),t._v(" diceRoll.total ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("The roll total")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+export"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-export-format-⇒-string-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-export-format-⇒-string-null"}},[t._v("#")]),t._v(" diceRoll.export([format]) ⇒ "),a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("null")])]),t._v(" "),a("p",[t._v("Export the object in the given format.\nIf no format is specified, JSON is returned.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance method of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("null")]),t._v(" - The exported data, in the specified format"),a("br"),t._v(" "),a("strong",[t._v("Throws")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TypeError")]),t._v(" Invalid export format")])]),t._v(" "),a("p",[a("strong",[t._v("See")]),t._v(": "),a("a",{attrs:{href:"#DiceRoll+toJSON"}},[t._v("toJSON")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("[format]")]),t._v(" "),a("td",[a("code",[t._v("exportFormats")])]),t._v(" "),a("td",[a("code",[t._v("exportFormats.JSON")])]),t._v(" "),a("td",[t._v("The format to export the data as")])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"DiceRoll+hasExpressions"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-hasexpressions-⇒-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-hasexpressions-⇒-boolean"}},[t._v("#")]),t._v(" diceRoll.hasExpressions() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Check whether the DiceRoll has expressions or not.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance method of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - "),a("code",[t._v("true")]),t._v(" if the object has expressions, "),a("code",[t._v("false")]),t._v(" otherwise"),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+hasRolls"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-hasrolls-⇒-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-hasrolls-⇒-boolean"}},[t._v("#")]),t._v(" diceRoll.hasRolls() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Check whether the object has rolled dice or not")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance method of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - "),a("code",[t._v("true")]),t._v(" if the object has rolls, "),a("code",[t._v("false")]),t._v(" otherwise"),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+roll"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-roll-⇒-array-rollresults"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-roll-⇒-array-rollresults"}},[t._v("#")]),t._v(" diceRoll.roll() ⇒ "),a("code",[t._v("Array.<RollResults>")])]),t._v(" "),a("p",[t._v("Roll the dice for the stored notation.")]),t._v(" "),a("p",[t._v("This is called in the constructor, so you'll only need this if you want to re-roll the\nnotation. However, it's usually better to create a new "),a("code",[t._v("DiceRoll")]),t._v(" instance instead.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance method of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("Array.<RollResults>")]),t._v(" - The results of the rolls"),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+toJSON"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-tojson-⇒-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-tojson-⇒-object"}},[t._v("#")]),t._v(" diceRoll.toJSON() ⇒ "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("Return an object for JSON serialising.")]),t._v(" "),a("p",[t._v("This is called automatically when JSON encoding the object.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance method of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll+toString"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-tostring-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-tostring-⇒-string"}},[t._v("#")]),t._v(" diceRoll.toString() ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("Return the String representation of the object.")]),t._v(" "),a("p",[t._v("This is called automatically when casting the object to a string.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance method of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("See")]),t._v(": "),a("a",{attrs:{href:"#DiceRoll+output"}},[t._v("output")]),a("br"),t._v(" "),a("a",{attrs:{name:"DiceRoll.import"}})]),t._v(" "),a("h3",{attrs:{id:"diceroll-import-data-⇒-diceroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diceroll-import-data-⇒-diceroll"}},[t._v("#")]),t._v(" DiceRoll.import(data) ⇒ "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])])]),t._v(" "),a("p",[t._v("Create a new "),a("code",[t._v("DiceRoll")]),t._v(" instance with the given data.")]),t._v(" "),a("p",[a("code",[t._v("data")]),t._v(" can be an object of data, a JSON / base64 encoded string of such data.")]),t._v(" "),a("p",[t._v("The object must contain a "),a("code",[t._v("notation")]),t._v(" property that defines the notation and, optionally, an\narray of RollResults, in the "),a("code",[t._v("rolls")]),t._v(" property.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": static method of "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),a("br"),t._v(" "),a("strong",[t._v("Returns")]),t._v(": "),a("a",{attrs:{href:"#DiceRoll"}},[a("code",[t._v("DiceRoll")])]),t._v(" - The new "),a("code",[t._v("DiceRoll")]),t._v(" instance"),a("br"),t._v(" "),a("strong",[t._v("Throws")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("DataFormatError")]),t._v(" data format is invalid")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[a("code",[t._v("Object")]),t._v(" | "),a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("The data to import")])]),t._v(" "),a("tr",[a("td",[t._v("data.notation")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("notation")]),t._v(" is an object; the notation to import")])]),t._v(" "),a("tr",[a("td",[t._v("[data.rolls]")]),t._v(" "),a("td",[a("code",[t._v("Array.<RollResults>")])]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("notation")]),t._v(" is an object; the rolls to import")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")]),t._v(" "),a("em",[t._v("(Object)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("DiceRoll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  notation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4d6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rolls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ResultGroup object or array of roll results")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Example")]),t._v(" "),a("em",[t._v("(JSON)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("DiceRoll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"notation":"4d6","rolls":[...]}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Example")]),t._v(" "),a("em",[t._v("(Base64)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("DiceRoll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eyJub3RhdGlvbiI6IjRkNiIsInJvbGxzIjpbXX0='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);