import { posts } from './index';
//학습노트 crud

function fetchPosts() {
	return posts.get('/');
}

function createPost(postData) {
	return posts.post('/', postData);
}

export { fetchPosts, createPost };
