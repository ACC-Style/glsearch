<template>
	<div id="app" class="p_4 viewport">
		<h1 class="br-b_1 br_primary br_solid font_display lh_0 m_0 relative p-t_4 p-b_2">
			My Transcript
			<span
				class="a:_block c_secondary-2 font_n1 inline-block m-b_2 vertical-align_middle w_100"
			>Total Credits in Transcript: 54</span>
			<div id="dateRange" class="absolute:md text_right:md t_n4 r_0 font_0:md font_n1 p_4 c_secondary">
				<a
					href
					class="button bg_primary font_n1 br_radius p-y_3 m-b_3 p-x_4 inline-block c_white undecorated h:bg_secondary h:c_white absolute t_5 t_0:lg r_0 relative:md"
				>
					<i class="fas fa-plus m-r_3"></i> Add Non ACC Activity
				</a>
				<div>
					Date Range:
					<input type="date" name id v-model="filterStartDate" /> -
					<input type="date" name id v-model="filterEndDate" />
					<i class="fa-calendar far font_2 m-l_3 vertical-align_middle"></i>
				</div>
			</div>
		</h1>
		<div id="fiterAndSortContainer" class="font_ui p-y_4 flex">
			<div id="Sort" class="flex_auto p-r_5">
				<span class="uppercase c_secondary font_bold font_n2 m-x_2">Sort</span>
				<ul class="flex flex_column flex_row:md font_bold font_n2 font_ui ul_none">
					<li class="flex_shrink is-active">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Date</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Product</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Type</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>Claimed</a>
					</li>
				</ul>
			</div>
			<filterCreditType
				:creditTypes="creditTypes"
				:creditsInList="creditsInList"
				v-on:updatefitler="selectedCreditFilter = $event"
			></filterCreditType>
		</div>
		<div class="bg_secondary-5 m-b_4 font_ui m-x_n4 m-x_3:md m-x_0:lg">
			<div class="flex bg_secondary-2 font_n2 font_n1:md c_white p_2 p-x_4">
				<div class="flex_auto font_bold capitalize">list summary</div>
				<div class="flex_shrink p-x_4">
					<span class="capitalize">Date Range:</span>
					<span class="c_secondary-n3 m-l_3 font_bold">None</span>
				</div>
				<div class="flex_shrink p-l_4">
					<span class="capitalize">Filter:</span>
					<span class="c_secondary-n3 m-l_3 font_bold">None</span>
				</div>
			</div>
			<div class="flex">
				<div class="flex_auto p-x_4 p-y_3">
					<ul class="ul_none">
						<li>
							<ul class="ul_none flex flex_wrap font_n2 font_n1:md">
								<li class="font_bold flex_shrink m-r_3">
									Credit Types
									<span
										class="c_primary-0 font_n1 h:dotted inline-block m-t_n2 vertical-align_top"
									>
										<i class="fa-question-circle fas"></i>
									</span>
								</li>
								<transition-group
									appear
									name="creditTypeRollup"
									enter-active-class="crossFade"
									appear-active-class="crossFade-enter"
									leave-active-class="crossFade-leave"
									:duration="1000"
								>
									<li
										class="inline-block br_radius c_white p_1 inline-block m-x_1 p-x_2 p-x_3:md flex_shrink"
										v-for="(credit, index) in creditsFilteredList"
										v-bind:key="index+'_credit'"
										:class="['bg_' + credit]"
									>
										<span class="font_bold">{{credit}}</span>
									</li>
								</transition-group>
							</ul>
						</li>
					</ul>
				</div>
				<div class="flex_shrink:md p-x_4 p-y_3 bg_primary c_white text_center lh_0">
					<span class="block font_5">10</span>
					<span class="block font_n2 font_bold c_primary-4 uppercase">Credits</span>
				</div>
			</div>
		</div>
		<div class="m-x_n4 m-x_n2:md m-x_0">
			<transition-group
				appear
				name="search"
				enter-active-class="crossFade"
				appear-active-class="crossFade-enter"
				leave-active-class="crossFade-leave"
				:duration="1000"
				v-if="transcriptFiltered"
			>
				<transcriptItem
					v-for="(item) in transcriptFiltered"
					v-bind:key="item.ID"
					v-bind="item"
					:selectedCreditFilter="selectedCreditFilter"
				/>
			</transition-group>
		</div>
		<div
			id="loadMore "
			class="c_white-8 text_center p-y_3 font_slab br-t_2 br_solid br_primary-1 bg_primary-1 m-x_n4"
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
			filterStartDate: "1970-01-01",
			filterEndDate: "",
			selectedCreditFilter: ["All"],
			sortType: []
		};
	},
	props: {},
	components: {
		transcriptItem,
		filterCreditType
	},
	computed: {
		...mapState(["transcript", "creditTypes"]),
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
			var tranFiltered = this.transcript,
				arr = [];
			this.transcript.forEach(element => {
				if (this.isTranscriptFilteredOut(element.Credits)) {
					arr.push(element);
				}
			});

			return arr;
		}
	},
	methods: {
		...mapMutations([]),
		...mapActions([]),
		creditBoolean: function(credit) {
			var bool =
				this.selectedCreditFilter.indexOf(credit) != -1 ||
				this.selectedCreditFilter.length() == 1;
			return bool;
		},
		isTranscriptFilteredOut(credits) {
			var arr;
			for (const credit in credits) {
				if (credits.hasOwnProperty(credit)) {
					const element = credits[credit];
					arr.push(element.Type);
				}
			}

			return arr.some(r => this.selectedCreditFilter.indexOf(r) >= 0);
		}
	}
};
</script>

<style>
.viewport {
	min-height: 100vh;
	overflow-x: hidden;
}
/*.slideInRight-enter-active {
	transition-delay: 0.5s;
}*/
.slideInRight-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
	transform: translateX(-100%);
	opacity: 0;
}
.slideInRight-enter /* .slideIn-leave-active below version 2.1.8 */ {
	transform: translateX(100%);
	opacity: 0;
}
.slideInRight-enter-to {
	transform: translateX(1);
	opacity: 1;
}
.slideInRight-move {
	transition: transform 0.5s ease;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
}

.crossFade-enter-active,
.crossFade-leave-active {
	transition: opacity 0.25s ease 0.25s;
}

.crossFade-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.crossFade-enter /* .slideIn-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.crossFade-enter-to {
	opacity: 1;
}
.crossFade-move {
	transition: opacity 0.5s ease;
}
</style>
