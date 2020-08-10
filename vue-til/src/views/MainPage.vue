<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<LoadingSpinner v-if="isLoading"></LoadingSpinner>
			<ul v-else>
				<PostListItme
					v-for="postItem in postItems"
					:key="postItem._id"
					:postItem="postItem"
				></PostListItme>
			</ul>
			<router-link to="/add" class="create-button">
				<i class="ion-md-add"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
import PostListItme from '@/components/posts/PostListItem';
import { fetchPosts } from '@/api/posts';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default {
	components: {
		PostListItme,
		LoadingSpinner,
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
