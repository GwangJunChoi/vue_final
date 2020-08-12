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


>#### axios
```
npm i axios
```
- axios.post()
```
(method) AxiosInstance.post<any, AxiosResponse<any>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any>>
```
- axois.create()
```
//(method) AxiosStatic.create(config?: AxiosRequestConfig): AxiosInstance
//example
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000',
});

function registerUser(user) {
	return instance.post('/signup', user);
}

export { registerUser };
```

>#### .env 파일 설정
- vue cli 3 이상 부터 제공
- .env //프로젝트 루트 생성
```
VUE_APP_API_URL=http://localhost:3000
```
- example
```
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});
```
- .env, .env.production, .env.development
- [Vue cli env 파일 규칙](https://cli.vuejs.org/guide/mode-and-env.html)

>#### vue router navigation
- 자바스크립트 단에서의 라우터 이동
```
this.$router.push('/');
```
- [Vue router navigation](https://router.vuejs.org/guide/essentials/navigation.html)

>#### vuex
- npm i vuex
```

```

>#### jwt
- [json web](https://jwt.io/)
```
//vuex header Authorization property example
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	headers: {
		Authorization: '',
	},
});
```

>#### axios interceptor
- reqest or response 전처리 핸들러
- [axios interceptor](https://github.com/axios/axios#interceptors)
```
export function setInterceptors(instance) {
	instance.interceptors.request.use(
		function(config) {
			// Do something before request is sent
			config.headers.Authorization = store.state.token;
			return config;
		},
		function(error) {
			// Do something with request error
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function(response) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data
			return response;
		},
		function(error) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error);
		},
	);

	return instance;
}
```

>#### vue filter
- 데이터 포맷팅
```
// template code
<div>{{ postItem.createdAt | formatDate }}</div>
// script code
filters: {
		formatDate(date) {
			return new Date(date);
		},
	},
```
```
//전역 필터
import { formatDate } from '@/utils/filters';
//main.js
Vue.filter('formatDate', formatDate);
```
>#### router navigation guard
- 권한 필요 페이지 요청 체크
```
//router example
{
  path: '/add',
  component: () => import('@/views/PostAdd.vue'),
  meta: {
    auth: true,
  },
},
//router beforeEach example
router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인중 ㅜㄸㅇ');
		next('/login');
		return;
	}
	next();
});

```

>#### jest
- vue test code
- [jest 공식 사이트](https://jestjs.io/)
- js test library
```
//math.js
export function sum(a, b) {
  return a + b;
}

//test.spec.js
import { sum } from './math';

describe('math.js', () => {
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    expect(result).not.toBe(15);
    expect(result).toBe(30);
  });
});

//vue example
import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅 되면 username 초기값 설정', () => {
		const instance = new Vue(LoginForm).$mount();
		console.log(instance);
		expect(instance.username).toBe('');
	});
});

```
>#### vue test util
- vue test 공식 라이브러리 
- [공식 사이트](https://vue-test-utils.vuejs.org/)
```
import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅 되면 username 초기값 설정', () => {
		const warpper = shallowMount(LoginForm);
		//warpper.vm.username
		expect(warpper.vm.username).toBe('');
	});
});
```
- HTML 요소 검색
```
describe('LoginForm.vue', () => {
	test('', () => {
		const warpper = shallowMount(LoginForm);
		const idInput = warpper.find('#username');
		console.log(idInput.html());
	});
});

//result
<input id="username" type="text">

describe('LoginForm.vue', () => {
	test('', () => {
		const warpper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const idInput = warpper.find('#username');
		console.log(idInput.html());
		console.log(idInput.element.value);
	});
});

//result
<input id="username" type="text">
test
```
>#### 
- 
```
```
