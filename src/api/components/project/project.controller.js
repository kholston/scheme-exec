// create project
const create = (req, res, next) => {
  res.send({ currentRoute: 'project create' });
};
// read a project
const get = (req, res, next) => {
  res.send({ currentRoute: 'project get' });
};
// read all projects
const list = (req, res, next) => {
  res.status(200).json({ currentRoute: 'project get all' });
};
// update a project
const update = (req, res, next) => {
  res.json({ currentRoute: 'project update' });
};
// delete a project
const remove = (req, res, next) => {
  res.json({ currentRoute: 'project delete' });
};

export default {
  create,
  get,
  list,
  update,
  remove,
};
