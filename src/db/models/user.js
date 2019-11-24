import mongoose from '..';

const User = new mongoose.Schema(
  {
    tgId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    username: String,
    firstName: String,
    lastName: String
  },
  { strict: 'throw', timestamps: true }
);

const Model = mongoose.model('User', User);
Model.ensureIndexes();

export default Model;
