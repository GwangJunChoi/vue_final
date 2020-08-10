<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title</label>
					<input type="text" id="title" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents</label>
					<textarea
						type="contents"
						id="contents"
						rows="5"
						v-model="contents"
					></textarea>
					<p v-if="!isContentsValid" class="validation-text warning">
						Contents length must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">Create</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { createPost } from '@/api/posts';

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const response = await createPost({
					title: this.title,
					contents: this.contents,
				});
				console.log(response);
			} catch (error) {
				console.log(error);
				this.logMessage = error.response.data.message;
			}
		},
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
