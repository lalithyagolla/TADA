 
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: String,
  description: String,
  amount: Number,
  type: {
    type: String,
    enum: ['TA', 'DA']
  }
});

module.exports = mongoose.model('Expense', expenseSchema);
