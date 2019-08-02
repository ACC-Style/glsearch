import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		creditTypes: [
			{
				shortName: "COP",
				fullName: "Certificate of Participation",
				styleCode: "COP"
			},
			{
				shortName: "ABP",
				fullName: "American Board of Pediatrics",
				styleCode: "ABP"
			},
			{
				shortName: "CE",
				fullName: "Continuing Education",
				styleCode: "CE"
			},
			{
				shortName: "MOC II",
				fullName: "ABIM MOC Part II",
				styleCode: "MOCII"
			},
			{
				shortName: "MOC IV",
				fullName: "ABIM MOC Part IV",
				styleCode: "MOCIV"
			},
			{
				shortName: "CNE",
				fullName: "Continuing Nursing Education",
				styleCode: "CNE"
			},
			{
				shortName: "CNE<sup>rx</sup>",
				fullName: "CNE<sup>rx</sup>",
				styleCode: "CNErx"
			},
			{
				shortName: "ECME",
				fullName: "External Continuing Medical Education",
				styleCode: "ECME"
			},
			{
				shortName: "CPE",
				fullName: "Continuing Pharamacy Education",
				styleCode: "CPE"
			},
			{
				shortName: "CME",
				fullName: "Continuing Medical Education",
				styleCode: "CME"
			}
		],
		transcript: [
			{
				ID: 1,
				ProductTitle: null,
				Course: "It",
				Activity: "Stringtough",
				DateCompleted: "2/10/2019",
				DateClaimed: "7/9/2019",
				Credits: [
					{
						Type: "CME",
						Amount: 23.9
					},
					{
						Type: "CNErx",
						Amount: 3.6
					}
				],
				External: true
			},
			{
				ID: 2,
				ProductTitle: "Heart Songs",
				Course: null,
				Activity: "Alphazap",
				DateCompleted: "4/30/2019",
				DateClaimed: "6/5/2019",
				Credits: [
					{
						Type: "CNErx",
						Amount: 21.6
					}
				],
				External: true
			},
			{
				ID: 3,
				ProductTitle: null,
				Course: null,
				Activity: "Biodex",
				DateCompleted: "7/11/2019",
				DateClaimed: "5/20/2019",
				Credits: [
					{
						Type: "CNErx",
						Amount: 10.9
					}
				],
				External: false
			},
			{
				ID: 4,
				ProductTitle: "Cardiosourse Plus",
				Course: null,
				Activity: "Tempsoft",
				DateCompleted: "8/21/2018",
				DateClaimed: "1/7/2019",
				Credits: [
					{
						Type: "CPE",
						Amount: 8.0
					},
					{
						Type: "COP",
						Amount: 10.3
					}
				],
				External: false
			},
			{
				ID: 5,
				ProductTitle: "ACCSAP",
				Course: null,
				Activity: "Biodex",
				DateCompleted: "8/20/2018",
				DateClaimed: "11/5/2018",
				Credits: [
					{
						Type: "CNE",
						Amount: 20.1
					}
				],
				External: false
			},
			{
				ID: 6,
				ProductTitle: null,
				Course: null,
				Activity: "Sonsing",
				DateCompleted: "9/19/2018",
				DateClaimed: "4/21/2019",
				Credits: [
					{
						Type: "CNE",
						Amount: 10.7
					}
				],
				External: false
			},
			{
				ID: 7,
				ProductTitle: null,
				Course: null,
				Activity: "Job",
				DateCompleted: "7/14/2019",
				DateClaimed: "5/22/2019",
				Credits: [
					{
						Type: "CNErx",
						Amount: 2.7
					},
					{
						Type: "MOCII",
						Amount: 17.8
					}
				],
				External: true
			},
			{
				ID: 8,
				ProductTitle: "EP SAP",
				Course: null,
				Activity: "Alpha",
				DateCompleted: "10/26/2018",
				DateClaimed: "1/27/2019",
				Credits: [
					{
						Type: "CME",
						Amount: 22.1
					}
				],
				External: false
			},
			{
				ID: 9,
				ProductTitle: "CathSAP",
				Course: null,
				Activity: "Konklux",
				DateCompleted: "4/13/2019",
				DateClaimed: "5/9/2019",
				Credits: [
					{
						Type: "CPE",
						Amount: 8.0
					},
					{
						Type: "ECME",
						Amount: 4.4
					}
				],
				External: false
			},
			{
				ID: 10,
				ProductTitle: "Heart Songs",
				Course: null,
				Activity: "Bamity",
				DateCompleted: "5/9/2019",
				DateClaimed: "8/16/2018",
				Credits: [
					{
						Type: "CNErx",
						Amount: 17.9
					}
				],
				External: false
			},
			{
				ID: 11,
				ProductTitle: "Heart Songs",
				Course: null,
				Activity: "Biodex",
				DateCompleted: "4/10/2019",
				DateClaimed: "2/21/2019",
				Credits: [
					{
						Type: "MOCIV",
						Amount: 5.6
					}
				],
				External: false
			},
			{
				ID: 12,
				ProductTitle: "ACCSAP",
				Course: "Sonsing",
				Activity: "Bitchip",
				DateCompleted: "4/9/2019",
				DateClaimed: "2/6/2019",
				Credits: [
					{
						Type: "ECME",
						Amount: 22.7
					},
					{
						Type: "CME",
						Amount: 19.0
					}
				],
				External: false
			},
			{
				ID: 13,
				ProductTitle: "Cardiosourse Plus",
				Course: null,
				Activity: "Vagram",
				DateCompleted: "12/4/2018",
				DateClaimed: "9/25/2018",
				Credits: [
					{
						Type: "ECME",
						Amount: 2.3
					}
				],
				External: false
			},
			{
				ID: 14,
				ProductTitle: "Cardiosourse Plus",
				Course: "Span",
				Activity: "It",
				DateCompleted: "12/15/2018",
				DateClaimed: "9/8/2018",
				Credits: [
					{
						Type: "COP",
						Amount: 20.9
					},
					{
						Type: "ECME",
						Amount: 2.7
					}
				],
				External: true
			},
			{
				ID: 15,
				ProductTitle: "ACCSAP",
				Course: null,
				Activity: "Fixflex",
				DateCompleted: "1/11/2019",
				DateClaimed: "7/23/2019",
				Credits: [
					{
						Type: "CNE",
						Amount: 6.6
					}
				],
				External: true
			},
			{
				ID: 16,
				ProductTitle: "EP SAP",
				Course: null,
				Activity: "Treeflex",
				DateCompleted: "10/21/2018",
				DateClaimed: "2/2/2019",
				Credits: [
					{
						Type: "ECME",
						Amount: 5.5
					}
				],
				External: true
			},
			{
				ID: 17,
				ProductTitle: "Cardiosourse Plus",
				Course: null,
				Activity: "Cardify",
				DateCompleted: "8/16/2018",
				DateClaimed: "12/23/2018",
				Credits: [
					{
						Type: "CME",
						Amount: 15.4
					},
					{
						Type: "COP",
						Amount: 24.9
					}
				],
				External: false
			},
			{
				ID: 18,
				ProductTitle: "Cardiosourse Plus",
				Course: null,
				Activity: "Matsoft",
				DateCompleted: "3/11/2019",
				DateClaimed: "4/6/2019",
				Credits: [
					{
						Type: "CNE",
						Amount: 16.7
					}
				],
				External: true
			},
			{
				ID: 19,
				ProductTitle: "EP SAP",
				Course: null,
				Activity: "Bamity",
				DateCompleted: "8/13/2018",
				DateClaimed: "10/4/2018",
				Credits: [
					{
						Type: "COP",
						Amount: 14.0
					}
				],
				External: false
			},
			{
				ID: 20,
				ProductTitle: "CathSAP",
				Course: null,
				Activity: "Pannier",
				DateCompleted: "11/26/2018",
				DateClaimed: "1/8/2019",
				Credits: [
					{
						Type: "ECME",
						Amount: 15.4
					}
				],
				External: true
			},
			{
				ID: 21,
				ProductTitle: "Heart Songs",
				Course: "Konklab",
				Activity: "Zaam-Dox",
				DateCompleted: "1/19/2019",
				DateClaimed: "9/10/2018",
				Credits: [
					{
						Type: "CPE",
						Amount: 5.9
					}
				],
				External: true
			},
			{
				ID: 22,
				ProductTitle: "Cardiosourse Plus",
				Course: null,
				Activity: "Zoolab",
				DateCompleted: "12/24/2018",
				DateClaimed: "3/12/2019",
				Credits: [
					{
						Type: "COP",
						Amount: 17.3
					}
				],
				External: true
			},
			{
				ID: 23,
				ProductTitle: null,
				Course: null,
				Activity: "Subin",
				DateCompleted: "12/3/2018",
				DateClaimed: "2/18/2019",
				Credits: [
					{
						Type: "CNErx",
						Amount: 14.3
					}
				],
				External: false
			},
			{
				ID: 24,
				ProductTitle: "ACCSAP",
				Course: "Pannier",
				Activity: "Matsoft",
				DateCompleted: "5/6/2019",
				DateClaimed: "6/22/2019",
				Credits: [
					{
						Type: "MOCIV",
						Amount: 1.3
					}
				],
				External: false
			},
			{
				ID: 25,
				ProductTitle: "EP SAP",
				Course: null,
				Activity: "Sonair",
				DateCompleted: "2/20/2019",
				DateClaimed: "8/23/2018",
				Credits: [
					{
						Type: "CME",
						Amount: 5.9
					},
					{
						Type: "MOCIV",
						Amount: 1.5
					}
				],
				External: false
			}
		]
	},
	mutations: {},
	actions: {}
});
