ej.addCulture( "lo", {
	name: "lo",
	englishName: "Lao",
	nativeName: "ພາສາລາວ",
	language: "lo",
	numberFormat: {
		groupSizes: [3,0],
		percent: {
			groupSizes: [3,0]
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3,0],
			symbol: "₭"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["ວັນອາທິດ","ວັນຈັນ","ວັນອັງຄານ","ວັນພຸດ","ວັນພະຫັດ","ວັນສຸກ","ວັນເສົາ"],
				namesAbbr: ["ອາທິດ","ຈັນ","ອັງຄານ","ພຸດ","ພະຫັດ","ສຸກ","ເສົາ"],
				namesShort: ["ທ","ຈ","ອ","ພ","ພຫ","ສ","ເສ"]
			},
			months: {
				names: ["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ",""],
				namesAbbr: ["ມ.ກ","ກ.ພ","ມິ.ນ","ມ.ສ","ພ.ພ","ມິ.ຖ","ກ.ລ","ສ.ຫ","ກ.ຍ","ຕ.ລ","ພ.ຈ","ທ.ວ",""]
			},
			AM: ["ເຊົ້າ","ເຊົ້າ","ເຊົ້າ"],
			PM: ["ແລງ","ແລງ","ແລງ"],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dd MMMM yyyy",
				t: "H:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy H:mm",
				F: "dd MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});