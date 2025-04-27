import mongoose from 'mongoose';

const analysisSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  upload: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Upload',
    required: true,
  },
  xAxis: {
    type: String,
    required: true,
  },
  yAxis: {
    type: String,
    required: true,
  },
  chartType: {
    type: String, // e.g., 'bar', 'line', 'pie', 'scatter', '3d-column'
    required: true,
  },
  chartImage: {
    type: String, // optional: if you save the generated chart as an image URL
  },
  aiSummary: {
    type: String, // optional: if integrated with OpenAI
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Analysis = mongoose.model('Analysis', analysisSchema);
export default Analysis;
