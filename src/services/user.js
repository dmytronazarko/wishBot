import User from '../db/models/user';

const service = {
  create(data) {
    const user = new User(data);
    return user.save();
  },
  get(tgId) {
    return User.findOne({ tgId });
  }
};

export default service;
