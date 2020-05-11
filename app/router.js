'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const UserInterceptor = app.middleware.userInterceptor({}, app);
  router.get('/home', controller.home.index);
  router.get('/getMostImportant',UserInterceptor,controller.todo.getMostImportant);
  router.get('/getTodoList', UserInterceptor,controller.todo.getTodoList);
  router.post('/postTodoList',UserInterceptor,controller.todo.postTodoList);
  router.get('/changeStatus/:id',UserInterceptor,controller.todo.changeStatus);
  router.post('/login',controller.login.login);
};
