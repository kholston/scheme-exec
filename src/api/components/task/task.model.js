import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    timeSensitive: { type: Boolean, required: true },
    deadlineDate: { type: Date },
    assignedUsers: [
      { type: Schema.Types.ObjectId, ref: 'User', required: true },
    ],
    status: {
      type: String,
      enum: ['Planning, In Progress, Completed, Archived'],
      default: 'Unassigned',
      required: true,
    },
  },
  { timestamps: true },
);

const Task = mongoose.model('Task', TaskSchema);
export default Task;
