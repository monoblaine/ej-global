ej.addCulture( "es-SV", {
	name: "es-SV",
	englishName: "Spanish (El Salvador)",
	nativeName: "Español (El Salvador)",
	language: "es",
	numberFormat: {
		groupSizes: [3,3,0],
		"NaN": "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			groupSizes: [3,3,0]
		},
		currency: {
			groupSizes: [3,0]
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
				namesAbbr: ["dom","lun","mar","mié","jue","vie","sáb"],
				namesShort: ["do","lu","ma","mi","ju","vi","sá"]
			},
			months: {
				names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
				namesAbbr: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]
			},
			AM: ["a.m.","a.m.","A.M."],
			PM: ["p.m.","p.m.","P.M."],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dddd, dd' de 'MMMM' de 'yyyy hh:mm tt",
				F: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
				M: "d' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});