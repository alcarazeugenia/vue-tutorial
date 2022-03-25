<template>
	<header>
		<h1>{{ title }}</h1>
		<ButtonComponent
			:text="showAddTask ? 'Close' : 'Add Task'"
			:color="showAddTask ? 'red' : 'green'"
			@btn-click="$emit('toggle-add-task')"
		/>
	</header>
</template>

<script>
import ButtonComponent from "./Button.vue";
export default {
	name: "HeaderComponent",
	props: {
		title: {
			type: String,
			default: "Task Tracker",
		},
		showAddTask: Boolean,
	},
	components: {
		ButtonComponent,
	},
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
</style>
