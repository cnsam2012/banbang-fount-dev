<template>
		    <view>
		        <uni-forms ref="form" :modelValue="formData" :rules="rules" >
					
				<!-- 	<uni-forms-item>
						<view class="noti-class">
						<uni-data-checkbox v-model="formData.class" :localdata="formData.range" :multiple="true" ></uni-data-checkbox>
						</view>
					</uni-forms-item> -->
					
		            <uni-forms-item  name="name" >
		                <uni-easyinput type="text" v-model="formData.name" placeholder="输入标题"/>
		            </uni-forms-item>
					
		           <!-- <uni-forms-item label="邮箱" name="email">
		                <input class="input" v-model="formData.email" type="text" placeholder="请输入用户名" @input="binddata('email',$event.detail.value)" />
		            </uni-forms-item> -->
					
					<uni-forms-item name="noti">
						<uni-easyinput type="textarea"  v-model="formData.noti" placeholder="请输入内容" >
							
						</uni-easyinput>
					</uni-forms-item>
					
					<uni-forms-item>
						<view>
						    <uni-data-picker :localdata="items" popup-title="请选择班级" @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>
						  </view>
						
						
						<uni-file-picker  
					v-model="formData.notiimg" 
					fileMediatype="image" 
					:image-styles="imageStyles" 
					mode="grid"
					@select="select" 
					@success="success" 
					@fail="fail"
					/>
					</uni-forms-item>
		        </uni-forms>
				
		        <button @click="submit">Submit</button>
		    </view>
</template>

<script>
	export default {
		 data() {
		        return {
					 items: [{
					          text: "一年级",
					          value: "1-0",
					          children: [
					            {
					              text: "1.1班",
					              value: "1-1"
					            },
					            {
					              text: "1.2班",
					              value: "1-2"
					            }
					          ]
					        },
					        {
					          text: "二年级",
					          value: "2-0"
					        },
					        {
					          text: "三年级",
					          value: "3-0"
					        }],
		            // 表单数据
		            formData: {
		                name: '',
		                email: '',
						noti: '',
						class: '',
						notiimg: [],
						range: [{"value": 0,"text": "篮球"    },{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
		            },
		            rules: {
		                // 对name字段进行必填验证
		                // name: {
		                //     rules: [{
		                //             required: true,
		                //             errorMessage: '请输入姓名',
		                //         },
		                //         {
		                //             minLength: 3,
		                //             maxLength: 5,
		                //             errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
		                //         }
		                //     ]
		                // },
		                // // 对email字段进行必填验证
		                // email: {
		                //     rules: [{
		                //         format: 'email',
		                //         errorMessage: '请输入正确的邮箱地址',
		                //     }]
		                // }
		            }
		        }
		    },
		    methods: { // 上传成功
            success(e){
                console.log('上传成功')
            },

            // 上传失败
            fail(e){
                console.log('上传失败：',e)
            },
			select(e){
				console.log(e)
			},
				
				
		        /**
		         * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
		         * @param {String} name 字段名称
		         * @param {String} value 表单域的值
		         */
		        // binddata(name,value){
		        // 通过 input 事件设置表单指定 name 的值
		        //   this.$refs.form.setValue(name, value)
		        // },
		        // 触发提交表单
		        submit() {
		            this.$refs.form.validate().then(res=>{
		                console.log('表单数据信息：', res);
		            }).catch(err =>{
		                console.log('表单错误信息：', err);
		            })
		        }
		    }
	}
</script>

<style lang="scss">
.noti-class {
	display: flex;
	justify-content: space-around;
}
</style>
