// create team
const create = (req, res, next) => {
  res.send({ currentRoute: 'team create' });
};
// read a team
const get = (req, res, next) => {
  res.send({ currentRoute: 'team get' });
};
// read all teams
const list = (req, res, next) => {
  res.status(200).json({ currentRoute: 'team get all' });
};
// update a team
const update = (req, res, next) => {
  res.json({ currentRoute: 'team update' });
};
// delete a team
const remove = (req, res, next) => {
  res.json({ currentRoute: 'team delete' });
};

export default {
  create,
  get,
  list,
  update,
  remove,
};
