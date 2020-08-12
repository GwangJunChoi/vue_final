import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('id가 이메일 형식 이 아니면 경고 메시지 출력', () => {
		const warpper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test@',
				};
			},
		});
		const warningText = warpper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID 와 PW 입력되지 않으면 비활성화 된다', () => {
		const warpper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
					password: 'test',
				};
			},
		});
		const btn = warpper.find('.btn');
		expect(btn.element.disabled).toBeTruthy();
	});
});

// describe('LoginForm.vue', () => {
// 	test('컴포넌트가 마운팅 되면 username 초기값 설정', () => {
// 		const warpper = shallowMount(LoginForm);
// 		//warpper.vm.username
// 		expect(warpper.vm.username).toBe('');
// 	});
// });

// describe('LoginForm.vue', () => {
// 	test('', () => {
// 		const warpper = shallowMount(LoginForm, {
// 			data() {
// 				return {
// 					username: 'test@test.com',
// 				};
// 			},
// 		});
// 		const idInput = warpper.find('#username');
// 		console.log(warpper.vm.isUsernameValid);
// 	});
// });
