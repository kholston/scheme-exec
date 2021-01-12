import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    status: {
      type: String,
      enum: ['Planning', 'In Progress', 'Completed', 'Archived'],
      default: 'Planning',
    },
  },
  { timestamps: true },
);

ProjectSchema.pre('remove', (next) => {
  this.model('Tasks').deleteMany({ project: this.id }, next);
});

const Project = mongoose.model('Project', ProjectSchema);
export default Project;
