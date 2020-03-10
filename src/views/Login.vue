<template>
	<div class="homeWrap">
		<el-container direction="vertical" style="height: 100%;">
			<el-header>Header</el-header>
			<el-container>
				<el-container>
					<el-main>
						<div>
							<el-row>
								<div class="grid-content bg-purple-light formWrap">
									<div class="formRegion">
										<el-tabs v-model="activeName" @tab-click="handleClick">
											<el-tab-pane label="登录" name="login">
												<el-form ref="Loginform" :model="Loginform" label-width="78px" size="mini">
													<el-form-item label="账 号" prop="account">
														<el-input v-model="Loginform.account" placeholder="请输入账号"></el-input>
													</el-form-item>
													<el-form-item label="密 码">
														<el-input type="password" v-model="Loginform.password" placeholder="请输入密码" show-password></el-input>
													</el-form-item>
													<el-form-item label="角 色">
														<el-radio-group v-model="Loginform.role">
															<el-radio label="stu">学生</el-radio>
															<el-radio label="tea">教师</el-radio>
															<el-radio label="admin">管理员</el-radio>
														</el-radio-group>
													</el-form-item>
													<el-form-item>
														<div style="width: 85%;">
															<el-button type="primary" @click="onLogin">登录</el-button>
														</div>
													</el-form-item>
												</el-form>
											</el-tab-pane>
											<el-tab-pane label="注册" name="register">
												<el-form ref="registerForm" :model="registerForm" status-icon :rules="rules" label-width="78px" size="mini">
													<el-form-item label="账 号" prop="account">
														<el-input v-model="registerForm.account" placeholder="请输入账号"></el-input>
													</el-form-item>
													<el-form-item label="密 码">
														<el-input type="password" v-model="registerForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
													</el-form-item>
													<el-form-item label="确认密码" prop="checkPass">
														<el-input type="password" placeholder="请输入密码" v-model="registerForm.checkPass" autocomplete="off"></el-input>
													</el-form-item>
													<el-form-item label="角 色">
														<el-radio-group v-model="registerForm.role">
															<el-radio label="stu">学生</el-radio>
															<el-radio label="tea">教师</el-radio>
														</el-radio-group>
													</el-form-item>
													<el-form-item>
														<div style="width: 85%;">
															<el-button type="primary" @click="onRegister">注册</el-button>
															<el-button @click="resetForm('registerForm')">重置</el-button>
														</div>
													</el-form-item>
												</el-form>
											</el-tab-pane>
										</el-tabs>
									</div>
								</div>
							</el-row>
						</div>
					</el-main>
				</el-container>
			</el-container>
			<el-footer>Footer</el-footer>
		</el-container>

	</div>
</template>

<script>
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				activeName: 'login',
				Loginform: {
					account: "",
					password: "",
					role: "stu"
				},
				registerForm: {
					account: "",
					password: "",
					checkPass: "",
					role: "stu"
				},
				rules: {
					password: [{
						required: true,
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						required: true,
						validator: validatePass2,
						trigger: 'blur'
					}],
					account: [{
						required: true,
						message: "请输入账号",
						trigger: 'blur'
					}]

				}
			};

		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			onLogin() {
				console.log('submit!');
			},
			onRegister() {
				this.$refs['registerForm'].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
				console.log('register!');
			},
			resetForm() {
				this.$refs['registerForm'].resetFields();
			}

		}
	};
</script>

<style>
	.formRegion {
		margin-left: 1rem;
		margin-right: 3rem;
	}

	.formWrap {
		margin-top: 8%;
		margin-left: 35%;
		width: 30%;
		height: fit-content;
	}

	.homeWrap {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.el-footer,
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 50px;
	}

	/* .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
		margin-left: 156px;
		padding-left: 0;
	} */
	/* .el-tabs__active-bar {
			width: 40px !important;
	} */
	.el-tabs__nav {
		transform: translateX(150px) !important;
	}

	body>.el-container {

		height: 100%;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>
