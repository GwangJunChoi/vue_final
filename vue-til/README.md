# vue-til

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue-router install
```
npm i vue-router
```
>#### 일반적인 router file
```
import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage';
import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/login',
			component: LoginPage,
		},
		{
			path: '/signup',
			component: SignupPage,
		},
	],
});
```
>#### 코드 스플리팅 적용 router file
- url 요청시 동적 컴포넌트 임포트
```
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/singup',
			component: () => import('@/views/SignupPage.vue'),
		},
	],
});
```
- (웹팩 코드 스플리팅 문서)[https://webpack.js.org/guides/code-splitting/]
- (vuejs 다이나믹 임포트 문서)[https://kr.vuejs.org/v2/guide/components-dynamic-async.html]