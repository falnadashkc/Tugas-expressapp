const index = (req, res, next) => {
    res.render('index', { title: 'Express',nama: 'Nissan' });   //ini controllers
  };

const show = (res, req, next) => {
    res.render('index', { title: 'Express',nama: 'Nissan' });
};

const demo = (res, req, next) => {
    res.render('index', { title: 'Express',nama: 'Nissan' });
};

const edit = (res, req, next) => {
    res.render('index', { title: 'Express',nama: 'Nissan' });
};

const destroy = (res, req, next) => {
    res.render('index', { title: 'Express',nama: 'Nissan' });
};

module.exports = {index, show, edit, destroy,demo}