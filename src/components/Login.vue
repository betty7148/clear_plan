<template>
    <div id="login">
        <div class='center'>
            <div class='logo_header'>
                    <img src='../assets/logo.png' class='logo'/>
                    <div class='flo_right'>
                        <h3>todolist</h3>
                        <p>高效能计划管理软件</p>
                    </div>
            </div>      
            <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
            >
                <a-form-item>
                    <a-input
                        v-decorator="[
                        'userName',
                        { rules: [{ required: true, message: '请输入用户名!' }] },
                        ]"
                        placeholder="Username"
                    >
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input
                        v-decorator="[
                        'password',
                        { rules: [{ required: true, message: '请输入密码!' }] },
                        ]"
                        type="password"
                        placeholder="Password"
                    >
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                <!-- <a class="login-form-forgot" href="">
                    Forgot password
                </a> -->
                    <a-button type="primary" html-type="submit" class="login-form-button">
                        登录
                    </a-button>
                    <!-- <a-button type="primary" html-type="regist" class="login-form-button">
                        注册
                    </a-button> -->
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script>
// let userName = window.localStorage.getItem(user)||'';
// let token = userName ? window.localStorage.getItem(userName):'';
// this.$http.
import CryptoJS from 'crypto-js';
export default {
    data(){
        return{
            encryptContent:'',
            // encryptSecretKey :''
        }
    },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        //   console.dir(values);
        if (!err) {
            this.encryptFunction(values['password']);
            console.log(this.encryptContent)
            this.$http.post('http://127.0.0.7:7001/login',{
                username: values['userName'],
                password: this.encryptContent
            }).then(res => {
                console.log(res);
                // console.log(res.headers.get('authorization'));
                let { data,status } = res;
                if(status == 200){
                    let { content,code,authorization } = data;
                    if(content.message == '登陆成功！'){
                      //
                      window.localStorage.setItem('auth' , authorization);
                      window.localStorage.setItem('user', values['userName']);
                        this.$message.success('登陆成功！');
                        setTimeout(function(){
                            window.location.hash = '/DaoJiShi';
                        },1200)
                    }else if(content.message == '密码不正确'){
                        this.$message.error('密码不正确');
                    }else if(content.message == '用户名不存在'){
                        this.$message.warning('用户名不存在');
                    }
                }
                // console.log(content.message);
            })
            console.log('Received values of form: ', values);
        }
      });
    },
      encryptFunction: function (content) {
          
        // this.encryptSecretKey=null;
        let objEncrypt = null;
        objEncrypt = this.encryptByAES(content);
        if (objEncrypt) {
          this.encryptContent = objEncrypt.encryptContent;
        //   this.encryptSecretKey = objEncrypt.encryptSecretKey;
        }
      },
      /**
       * aes加密
       * @param strEncrypt:需要加密的内容
       * @return 返回加密后的内容与加密密钥
       **/
      encryptByAES: function (strEncrypt) {
        console.log(strEncrypt);
        let aesSecretKey = '';//16长度随机字符串
        aesSecretKey = 'qweasdzxc1234567';
        // do {
        //   aesSecretKey = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(Math.floor(Math.random() * (12 - 5 + 1) + 5))
        // } while (aesSecretKey.length != 16);
        let aesSecretUtf8 = CryptoJS.enc.Utf8.parse(aesSecretKey);
        const iv = CryptoJS.enc.Base64.parse('******KKKKKKKKKKKKKKKKK******');
        let aesEncrypt = CryptoJS.AES.encrypt(strEncrypt, aesSecretUtf8, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
        let objReturn = {
          encryptContent: aesEncrypt.toString(),
          encryptSecretKey: aesSecretKey
        };
        return objReturn;
      },
      /**
       * 解密方法
       **/
      unEncryptFunction: function () {
        this.$data.content=this.unEncryptByAES( this.$data.encryptContent,this.$data.encryptSecretKey)
      },
      /**
       * aes加密
       * @param strEncrypt:需要解密的内容
       * @param keyEncrypt:加密时用到的密钥
       * @return 返回解密后的内容
       **/
      unEncryptByAES: function (strEncrypt,keyEncrypt) {
        let aesSecretUtf8 = CryptoJS.enc.Utf8.parse(keyEncrypt);
        const iv = CryptoJS.enc.Base64.parse('******KKKKKKKKKKKKKKKKK******');
        let aesUnEncrypt =CryptoJS.AES.decrypt(strEncrypt,aesSecretUtf8,
          {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
        return aesUnEncrypt.toString(CryptoJS.enc.Utf8);
      },
  },
};
 
</script>
<style scoped>
#login{
    width:100%;
    height:100%;
    /* background-color: rgba(231, 253, 246, 0.5); */
    /* background-image: url('../assets/todolist.jpg'); */
}
#login .center{
    border:1px solid rgb(202, 245, 231);
    position:absolute;
    left:50%;
    top:50%;
    width:400px;
    height:400px;
    transform: translate(-50%,-50%);
    /* background-color: aqua; */
    text-align: center;
    vertical-align: middle;
    padding:20px;
}
.logo{
    width:100px;
    height:100px;
    border-radius: 100px;
}
#login .flo_right{
    margin-right:40px;
    /* vertical-align: middle; */
    height:100px;
    /* line-height:50px; */
    color:  blueviolet;
    font-size:30px;
}
#login .flo_right>h3{
    color:  blueviolet;
}
#login .flo_right>p{
    font-size: 18px;;
}
.logo_header{
    height:100px;
    vertical-align: middle;
    width:100%;
    text-align: center;
}
 
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
 
</style>