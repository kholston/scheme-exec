// create user
const create = (req, res, next) => {
  res.send({ currentRoute: 'user create' });
};
// read a user
const get = (req, res, next) => {
  res.send({ currentRoute: 'user get' });
};
// read all users
const list = (req, res, next) => {
  res.status(200).json({ currentRoute: 'user get all' });
};
// update a user
const update = (req, res, next) => {
  res.json({ currentRoute: 'user update' });
};
// delete a user
const remove = (req, res, next) => {
  res.json({ currentRoute: 'user delete' });
};

export default {
  create,
  get,
  list,
  update,
  remove,
};
