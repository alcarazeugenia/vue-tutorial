<template>
	<button @click="onClick()" :style="{ background: color }" class="btn">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "ButtonComponent",
	props: {
		text: {
			type: String,
			default: "Add",
		},
		color: {
			type: String,
			default: "green",
		},
	},
	methods: {
		onClick() {
			this.$emit("btn-click");
		},
	},
};
</script>
