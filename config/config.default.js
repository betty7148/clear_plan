/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
      mysql:{
          // 单数据库信息配置
          client: {
              // host
              host: '127.0.0.1',
              // 端口号
              port: '3306',
              // 用户名
              user: 'root',
              // 密码
              password: '',
              // 数据库名
              database: 'todo',
          },
          // 是否加载到 app 上，默认开启
          app: true,
          // 是否加载到 agent 上，默认关闭
          agent: false,
      },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588080403009_8492';

  // add your middleware config here
  config.middleware = [];

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    origin: '*',  // 允许的请求来源（* 表示允许所有的IP的请求 ）
  }

  config.security = {
      csrf: {
          enable: false
      }
  }
  
  config.jwt = {  //jwt配置项
    secret: "_qweasdzxc?"
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
