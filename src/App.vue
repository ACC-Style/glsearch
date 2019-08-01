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
					class="button bg_primary font_n1 br_radius p-y_3 m-b_3 p-x_4 inline-block c_white undecorated h:bg_secondary h:c_white absolute t_5 r_0 relative:md"
				>
					<i class="fas fa-plus m-r_3"></i> Add External Activity
				</a>
				<div>
					Date Range:
					<input type="date" name id value="2011-09-29" /> -
					<input type="date" name id value="2019-07-31" />
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
			<div id="CreditType" class="text_right flex_end flex_auto p-l_5">
				<span class="uppercase c_secondary font_bold font_n2 m-x_2">
					Filter Credit Types
					<i class="fas fa-question-circle"></i>
				</span>
				<ul class="flex flex_column flex_row-reverse:md text_left font_bold font_n2 font_ui ul_none">
					<li class="flex_shrink is-active">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
						>All</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_CME a:c_white"
						>CME</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_CNE a:c_white"
						>CNE</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_COP a:c_white"
						>COP</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_ECME a:c_white"
						>ECME</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_MOCII a:c_white"
						>MOCII</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_MOCIV a:c_white"
						>MOCIV</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_CNErx a:c_white"
						>CNErx</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_CPE a:c_white"
						>CPE</a>
					</li>
					<li class="flex_shrink">
						<a
							href
							class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_CE a:c_white"
						>CE</a>
					</li>
				</ul>
			</div>
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
									enter-active-class="animate fadeInr"
									appear-active-class="animated fadeInr"
									leave-active-class="animated fadeOutl"
									:duration="1000"
									v-if="creditsInList"
								>
									<li
										class="inline-block br_radius c_white p_1 inline-block m-x_1 p-x_2 p-x_3:md flex_shrink"
										v-for="(credit, index) in creditsInList"
										v-bind:key="index"
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
				enter-active-class="animate fadeInr"
				appear-active-class="animated fadeInr"
				leave-active-class="animated fadeOutl"
				:duration="1000"
				v-if="transcript"
			>
				<transcriptItem v-for="(item, index) in transcript" v-bind:key="index" v-bind="item" />
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
import transcriptItem from "./components/transcript-item.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
	name: "app",
	components: {
		transcriptItem
	},
	computed: {
		...mapState(["transcript"]),
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
		}
	},
	methods: {
		...mapMutations([]),
		...mapActions([])
	}
};
</script>

<style>
.viewport {
	min-height: 100vh;
	overflow-x: hidden;
}
</style>
