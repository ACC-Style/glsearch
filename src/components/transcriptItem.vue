<template>
	<section
		class="h:bg_black-1"
		:class="{'is-active':IsActive}"
		@click="function(){ IsActive = !IsActive }"
	>
		<div class="br-b_1 br_primary-3 a:bg_primary-5 br_dotted font_ui p_3 p-x_4 relative flex">
			<div class="flex_auto">
				<div class="flex_auto font_n2 absolute t_0 r_0 opacity_5 display_none">
					<span class="font_bold">Product ID:</span>
					<span class="font_italic c_primary font_n2">{{ID}}</span>
				</div>
				<div class>
					<div class="self_baseline m-r_3">
						<div>
							<span
								class="inline-block c_secondary-3 font_n2:md font_n3 uppercase font_bold"
								:class="{'bg_warning c_white p-x_3 p-y_1 br_radius':External}"
							>
								<span v-if="External">Non ACC &nbsp;</span>Activity
							</span>
							<div
								v-if="External"
								class="font_n2:md font_n3 uppercase font_bold c_secondary-1 inline-block m-x_1"
							>
								<span class="p-y_1 p-x_3 br_radius m-x_1 h:bg_secondary h:c_white">
									<i class="fas fa-edit"></i> &nbsp;Edit
								</span>
								<span class="p-y_1 p-x_3 br_radius m-x_1 h:bg_secondary h:c_white">
									<i class="fas fa-times"></i> &nbsp; Delete
								</span>
							</div>
						</div>
						<span class="block c_secondary-n4 font_2:md font_1">
							<span v-if="Course">{{Course}} -</span>
							{{Activity}}
						</span>
					</div>
					<div class="font_n2 font_n1:md font_bold c_accent self_baseline m-r_3" v-if="ProductTitle">
						<span>{{ProductTitle}}</span>
					</div>
				</div>
				<div class="flex absolute:lg t_4 r_4 font_italic font_n3">
					<div class="shrink p-x_3:lg p-l_0">
						<div class>
							<span>Date Completed:</span>&nbsp;
							<span>{{DateCompleted}}</span>
						</div>
					</div>
					<div class="shrink p-x_3">
						<div class>
							<span>Date Claimed:</span>&nbsp;
							<span>{{DateClaimed}}</span>
						</div>
					</div>
				</div>
				<div>
					<a href class="download font_n2 c_primary">
						<i class="fas fa-badge-check"></i> Download Certificate
					</a>
				</div>
			</div>
			<div class="flex_shrink w-grid_3 w-grid_4:md self_end">
				<ul class="ul_none flex flex_wrap flex_row-reverse:md flex_column font_n1 font_0:md">
					<li
						class="br_radius c_white p-y_1 p-x_2 p-y_2:md p-x_3:md block inline-block:md m-x_2 flex_shrink text_center m-b_2"
						:class="['bg_'+credit.Type]"
						v-for="(credit, credit_index) in Credits"
						v-bind:key="credit_index"
					>
						<span>{{credit.Type}}</span>
						<span class="font_bold m-l_3 p-l_3 br-l_1 br_solid br_white">{{credit.Amount}}</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		ID: { type: Number, default: -1 },
		External: { type: Boolean, default: false },
		ProductTitle: { type: String, default: undefined },
		Course: { type: String, default: undefined },
		Activity: { type: String, default: "activity" },
		DateCompleted: { type: String, default: "0/0/00" },
		DateClaimed: { type: String, default: "1/1/00" },
		Credits: { type: Array }
	},
	data: function() {
		return {
			IsActive: false
		};
	}
};
</script>

<style lang="scss" scoped>
</style>