export default function thunkMiddleware({dispatch, getState}) {
  return function nextHandler({dispatch, getState}) {
    return function actionHandler(next) {
      return function action() {};
    };
  };
}
