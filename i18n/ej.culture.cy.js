ej.addCulture( "cy", {
	name: "cy",
	englishName: "Welsh",
	nativeName: "Cymraeg",
	language: "cy",
	numberFormat: {
		"NaN": "Dim rhif",
		negativeInfinity: "-Anfeidredd",
		positiveInfinity: "Anfeidredd",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-$n","$n"],
			symbol: "£"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Dydd Sul","Dydd Llun","Dydd Mawrth","Dydd Mercher","Dydd Iau","Dydd Gwener","Dydd Sadwrn"],
				namesAbbr: ["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],
				namesShort: ["Su","Ll","Ma","Me","Ia","Gw","Sa"]
			},
			months: {
				names: ["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr",""],
				namesAbbr: ["Ion","Chwef","Maw","Ebr","Mai","Meh","Gorff","Awst","Medi","Hyd","Tach","Rhag",""]
			},
			AM: ["am","am","AM"],
			PM: ["pm","pm","PM"],
			patterns: {
				d: "dd/MM/yy",
				D: "d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy HH:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});
