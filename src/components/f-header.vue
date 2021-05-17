<template>
	<div>
		<el-menu :default-active="activeIndex" class="d-flex" mode="horizontal" router="true" type="flex">
			<el-menu-item class="mr-auto">昵称</el-menu-item>
			<el-menu-item index="/home">首页</el-menu-item>
			<el-menu-item index="/archive">归档</el-menu-item>
			<el-menu-item index="/about">关于</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '/home'
			};
		},
		methods: {
		}
	}
</script>

<style scoped>

</style>
