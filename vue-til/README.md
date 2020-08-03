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

>#### 
- 
```
```

>#### 
- 
```
```

>#### 
- 
```
```

>#### 
- 
```
```
