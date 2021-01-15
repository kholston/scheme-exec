// create task
const create = (req, res, next) => {
  res.send({ currentRoute: 'task create' });
};
// read a task
const get = (req, res, next) => {
  res.send({ currentRoute: 'task get' });
};
// read all tasks
const list = (req, res, next) => {
  res.status(200).json({ currentRoute: 'task get all' });
};
// update a task
const update = (req, res, next) => {
  res.json({ currentRoute: 'task update' });
};
// delete a task
const remove = (req, res, next) => {
  res.json({ currentRoute: 'task delete' });
};

export default {
  create,
  get,
  list,
  update,
  remove,
};
