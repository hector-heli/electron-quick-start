import { Schema, model } from "mongoose";

const analiticsSchema = new Schema(
  {
    room: String,
    alarmCode: String,
    activateTime: Date,
    incidentCareTime: Date,
    timeElapsed: Number,
    report: String,
    terminated: Boolean
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('Report', analiticsSchema);
