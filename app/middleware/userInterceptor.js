 
const jwt = require('jsonwebtoken');

module.exports = (options, app) => {
    
    return async function userInterceptor(ctx, next) {
        //获取token
        // let token = ctx.cookies.get('token')
        // console.log(ctx);
        let token = ctx.request.header.token;
        console.log(token);
        // 获取前端或以其他方式设置的cookie需要设置signed: false属性，避免对它做验签导致获取不到 cookie 的值。
        // let username = ctx.cookies.get('username', {signed: false})
        let userName = ctx.request.header.user;
        //验证token是否为空
        if (token){
            // let result = verifyToken(token) //解密token
            try{
                let result =  jwt.verify( token, app.config.jwt.secret );
                console.log("------------------------------------")
                console.log(result);
                console.log(result.user);
                let { user } = result //检查是否有用户_id
                //验证客户端token是否合法
                if (user == userName) {
                    await next();
                }else{
                    let res = {};
                    res.code = 1002;
                    res.content = '身份信息不正确，请重新登陆！';
                    ctx.body = res;
                }
            }catch(error){
                let res = {};
                res.code = 1001;
                res.content = error.message;
                ctx.body = res;
                // ctx.body = ctx.response.ResultResponse.createByErrorCodeMsg('10001', error.message);
            }
        
        }else{
            let res = {};
            res.code = 1001;
            res.content = "请登陆！";
            ctx.body = res;
        }
    };
}
// 验证token的方法，传入token，解密，验证是否过期
// function verifyToken(token) {
//     let cert = fs.readFileSync(path.join(__dirname, '../public/rsa_public_key.pem'));//公钥
//     let res = ''
//     try {
//         let result = jwt.verify(token, cert, {algorithms: ['RS256']}) || {};
//         let {exp, iat} = result, current = Math.floor(Date.now() / 1000);
//         if (current <= exp) {
//             res = result.data || {};
//         }
//     } catch (e) {
//         console.log(e);
//     }
//     return res;
// }
 