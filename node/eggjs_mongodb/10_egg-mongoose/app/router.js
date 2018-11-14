module.exports = (app) => {
    const { router, controller } = app;
    router.get('/', controller.index.index);
    router.get('/about', controller.index.about);
    router.get('/get', controller.index.get);
    router.get('/getid/:id', controller.index.getId);
    router.get('/mongo', controller.index.mongo);
};