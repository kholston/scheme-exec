import mongoose from 'mongoose';

const { Schema } = mongoose;

const TeamSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    leader: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  },
  { timestamps: true },
);

const Team = mongoose.model('Team', TeamSchema);
export default Team;
