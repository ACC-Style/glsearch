<template>
	<div id="app" class="p_4 viewport">
		<header id="transcript_header" class="relative">
			<h1
				class="br-b_1 br_primary br_solid font_display lh_0 m_0 relative p-t_4 p-b_2 text_center text_left:md"
			>
				My Transcript
				<span
					class="print-display_none c_secondary-2 font_n1 inline-block m-b_2 vertical-align_middle w_100"
				>
					Total Credits in Transcript:
					<span>{{fullCreditCount}}</span>
				</span>
			</h1>
			<div class="absolute:md t_0 r_0 b_0 text_center text_right:md font_ui print-display_none">
				<div id="dateRange" class="font_0:md font_n1 m-y_2 c_secondary m-b_3:md">
					<span class="block inline:md m-b_2 m-b_0:md">Date Claimed:</span>
					<input
						type="date"
						class="lh_0 p_2 font_0 text_center br_solid br_secondary-3 br_1"
						name
						id
						v-model="filterStartDate"
					/> -
					<input
						type="date"
						class="lh_0 p_2 font_0 text_center br_solid br_secondary-3 br_1"
						name
						id
						v-model="filterEndDate"
					/>
					<i
						class="bg_secondary-3 br-b_1 br_secondary-3 br_solid fa-calendar far font_n1 p-l_3 p-r_3 p-t_3 p_3 vertical-align_bottom"
					></i>
				</div>
				<a
					href
					class="button bg_primary text_center font_n1:md br_radius p-y_3 m-b_3 p-x_4 block inline-block:md m-t_3 m-t_0:md c_white undecorated h:bg_secondary h:c_white"
				>
					<i class="fas fa-plus m-r_3"></i> Add Non ACC Activity
				</a>
			</div>
		</header>
		<div id="fiterAndSortContainer" class="font_ui p-y_4 flex print-display_none">
			<div id="Sort" class="flex_auto p-r_5">
				<span class="uppercase c_secondary font_bold font_n2 m-x_2">Sort</span>
				<ul class="flex flex_column flex_row:md font_bold font_n2 font_ui ul_none">
					<li
						class="flex_shrink"
						:class="{'is-active': selectedSort =='Date'}"
						@click="selectedSort ='Date'"
					>
						<span
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Date</span>
					</li>
					<li
						class="flex_shrink"
						:class="{'is-active': selectedSort =='Activity'}"
						@click="selectedSort ='Activity'"
					>
						<span
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Activity</span>
					</li>
					<li
						class="flex_shrink"
						:class="{'is-active': selectedSort =='Product'}"
						@click="selectedSort ='Product'"
					>
						<span
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Product</span>
					</li>
					<li
						class="flex_shrink"
						:class="{'is-active': selectedSort =='Type'}"
						@click="selectedSort ='Type'"
					>
						<span
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Type</span>
					</li>
					<li
						class="flex_shrink"
						:class="{'is-active': selectedSort =='Claimed'}"
						@click="selectedSort ='Claimed'"
					>
						<span
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Claimed</span>
					</li>
				</ul>
			</div>
			<filterCreditType
				:creditTypes="creditTypes"
				:creditsInList="creditsInList"
				v-on:updatefitler="selectedCreditFilter = $event"
			></filterCreditType>
		</div>
		<div id="summaryView" class="bg_secondary-5 m-b_4 font_ui m-x_n4 m-x_3:md m-x_0:lg">
			<div
				class="flex bg_secondary-2 font_n2 font_n1:md c_white p_2 p-x_4 font_bold print-display_none"
			>
				<div class="flex_auto uppercase">list summary</div>
				<div class="flex_shrink p-l_4 uppercase">
					<span class="c_secondary-n3 m-l_3">
						<span class="p-r_3">Filtered:</span>

						<span class="c_secondary-n3" v-if="filterStartDate != '1949-01-01' || filterEndDate==''">Date</span>
						<span
							class="m-x_3"
							v-if="(selectedCreditFilter.length > 1 && selectedCreditFilter[1] != 'All' ) && (filterStartDate != '1949-01-01' || filterEndDate=='')"
						>&amp;</span>
						<span v-if="(selectedCreditFilter.length > 1 && selectedCreditFilter[1] != 'All' )">Credit</span>
					</span>
				</div>
			</div>
			<div class="flex print-br_black">
				<div class="flex_auto w_70 p-x_4 p-y_3">
					<ul class="ul_none lh_3">
						<li class="font_n2 font_n1:md">
							<span class="capitalize font_bold c_secondary-1">Date Range</span>
							<span
								class="c_secondary-n3 m-l_3 font_bold font_italic"
								v-if="filterStartDate == '1949-01-01' && filterEndDate==''"
							>None</span>
							<span v-else class="c_primary font_bold m-l_3">
								{{filterStartDate}} to
								<span v-if="filterEndDate == ''">Today</span>
								<span v-if="filterEndDate !== ''">{{filterEndDate}}</span>
							</span>
						</li>
					</ul>
				</div>
				<div class="flex_shrink:md w_30 print-br_black">
					<div
						v-if="selectedCreditFilter.length == 1"
						class="p-x_4 p-y_3 bg_primary c_white text_center lh_0"
					>
						<span class="block font_4">{{filteredCreditCount['All']}}</span>
						<span class="block font_n2 font_bold c_primary-4 uppercase">Credits</span>
					</div>
					<div v-else>
						<transition-group
							name="crossfade"
							tag="ul"
							class="ul_none flex bg_secondary-n1"
							:class="{'flex_row flex_wrap':creditsFilteredList.length>4,'flex_column ':creditsFilteredList.length<=4}"
						>
							<li
								class="p-x_4 p-y_3 flex lh_0 font_bold print-br_black"
								v-for="(credit, index) in creditsFilteredList"
								v-bind:key="index+'_credit'"
								:class="creditCounterDecorator(credit,creditsFilteredList.length)"
							>
								<span class="flex_auto p-r_4">{{credit}}</span>
								<span class="flex_shrink print-c_black">{{filteredCreditCount[credit]}}</span>
							</li>
						</transition-group>
					</div>
				</div>
			</div>
		</div>
		<div class="m-x_n4 m-x_n2:md m-x_0">
			<transition-group tag="div" name="crossFade">
				<transcriptItem
					v-for="(activity) in transcriptFiltered"
					v-bind:key="activity.ID+'_activity'"
					v-bind="activity"
					:selectedSort="selectedSort"
					:selectedCreditFilter="selectedCreditFilter"
				/>
			</transition-group>
		</div>
		<div
			id="loadMore "
			class="c_white-8 text_center p-y_3 font_slab br-t_2 br_solid br_primary-1 bg_primary-1 m-x_n4 print-display_none"
		>
			Showing First 20 Results
			<a
				href
				class="transition_1 button br_radius font_bold inline-block br_solid br_2 br_white-8 c_white-8 undecorated p-x_4 p-y_3 h:bg_white-8 h:c_primary h:br_white m-x_3"
			>Load All Activities</a>
		</div>
		<div id="foooter" class="bg_secondary-4 p_5 m-x_n4 m-b_n4">
			<ol class="font_n2 c_secondary lh_2">
				<li>The American College of Cardiology Foundation (ACCF) is accredited by the Accreditation Council for Continuing Medical Education to provide continuing medical education for physicians.</li>
				<li>The American College of Cardiology Foundation (ACCF) is accredited as a provider of continuing education by the American Nurses Credentialing Center's Commission on Accreditation.</li>
			</ol>
		</div>
	</div>
</template>

<script>
import transcriptItem from "./components/transcriptItem.vue";
import filterCreditType from "./components/filterCreditType.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
	name: "app",
	data: function() {
		return {
			filterStartDate: "2018-01-01",
			filterEndDate: "",
			selectedCreditFilter: ["All"],
			sortType: [],
			selectedSort: "Date"
		};
	},
	props: {},
	components: {
		transcriptItem,
		filterCreditType
	},
	computed: {
		...mapState(["transcript", "creditTypes"]),
		fullCreditCount: function() {
			var creditCount = 0;
			this.transcript.forEach(activity => {
				activity.Credits.forEach(credit => {
					creditCount += Number.parseFloat(credit.Amount);
				});
			});
			return creditCount.toFixed(1);
		},

		filteredCreditCount: function() {
			var creditCount = {};
			creditCount["All"] = 0;
			this.transcriptFiltered.forEach(activity => {
				activity.Credits.forEach(credit => {
					creditCount["All"] += credit.Amount * 10;
					if (!creditCount.hasOwnProperty(credit.Type)) {
						creditCount[credit.Type] = 0;
					}
					creditCount[credit.Type] += credit.Amount * 10;
				});
			});
			for (const key in creditCount) {
				if (creditCount.hasOwnProperty(key)) {
					var newVal = creditCount[key] / 10;
					creditCount[key] = newVal;
				}
			}
			return creditCount;
		},
		creditsInList: function() {
			var arr = ["CME"];
			var list = this.transcript;
			for (const key in list) {
				if (list.hasOwnProperty(key)) {
					const item = list[key]["Credits"];
					for (const credit in item) {
						if (item.hasOwnProperty(credit)) {
							const type = item[credit]["Type"];
							if (arr.indexOf(type) === -1) {
								arr.push(type);
							}
						}
					}
				}
			}

			return arr;
		},
		creditsFilteredList: function() {
			var arr = this.creditsInList,
				newArr = [];
			for (let i = 0; i < arr.length; i++) {
				const element = arr[i];
				if (
					this.selectedCreditFilter.indexOf(element) != -1 ||
					this.selectedCreditFilter.length == 1
				) {
					newArr.push(element);
				}
			}
			return newArr;
		},
		transcriptFiltered: function() {
			var arr = [];
			this.transcript.forEach(element => {
				var inDate = this.isDateInFilter(element.DateClaimed);
				var inCreditFilter = false;
				element.Credits.forEach(credit => {
					if (this.isCreditTypeInFilter(credit.Type)) {
						inCreditFilter = true;
					}
				});
				if (inDate && inCreditFilter) {
					arr.push(element);
				}
			});

			return arr.sort(this.compare);
		}
	},
	methods: {
		...mapMutations([]),
		...mapActions([]),
		compare: function(a, b) {
			let comparison = 0;
			switch (this.selectedSort) {
				case "Date":
					comparison =
						new Date(a.DateClaimed) >= new Date(b.DateClaimed) ? -1 : 1;
					break;
				case "Activity":
					comparison = a.Activity <= b.Activity ? -1 : 1;
					break;
				case "Product":
					comparison = a.ProductTitle <= b.ProductTitle ? -1 : 1;
					break;
				default:
					break;
			}

			return comparison;
		},
		creditCounterDecorator: function(credit, count) {
			var classCode = "bg_" + credit + " c_white";
			if (count < 3) classCode = classCode + " font_2";
			if (count == 3) classCode = classCode + " font_1";
			if (count == 4) classCode = classCode + " font_0";
			if (count > 4)
				classCode = classCode + " w_50 br_solid br_white-5 br_1 font_n1";
			return classCode;
		},
		creditBoolean: function(credit) {
			var bool =
				this.selectedCreditFilter.indexOf(credit) != -1 ||
				this.selectedCreditFilter.length() == 1;
			return bool;
		},
		isCreditTypeInFilter: function(type) {
			return this.creditsFilteredList.indexOf(type) !== -1 ? true : false;
		},
		isDateInFilter: function(date) {
			var start, end, activityDate;
			activityDate = new Date(date);
			start =
				new Date(this.filterStartDate) == "invalid date"
					? new Date("1970-01-01")
					: new Date(this.filterStartDate);
			end =
				this.filterEndDate == "" ? new Date() : new Date(this.filterEndDate);

			return start <= activityDate && activityDate <= end ? true : false;
		}
	}
};
</script>

<style>
.viewport {
	min-height: 100vh;
	overflow-x: hidden;
}
.crossFade-enter-active,
.crossFade-leave-active {
	transition: opacity 0.25s ease 0.25s;
}

.crossFade-leave-to,
.crossFade-enter {
	opacity: 0;
}
.crossFade-enter-to {
	opacity: 1;
}
.crossFade-move {
	transition: 0.5s ease;
}
@media print {
	.print-display_none {
		display: none !important;
	}
	.print-display_block {
		display: block !important;
	}
	.print-display_inline-block {
		display: inline-block !important;
	}
	.print-p_0 {
		padding: 0 !important;
	}
	.print-m_0 {
		margin: 0 !important;
	}
	.print-flex_row {
		flex-direction: row;
		flex-wrap: wrap;
	}
	.print-flex_row > * {
		flex: 1 0 auto !important;
		display: inline-block;
		padding-right: 0.5rem;
		padding-left: 0rem;
	}
	.print-br_black {
		border: rgb(73, 73, 73) 1px solid !important;
	}
	.print-c_black {
		color: black !important;
	}
	.print-font_0 {
		font-size: 1rem !important;
	}
}
</style>

function newFunction(element) {
	console.log(element);
}
