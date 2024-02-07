 
 import mongoose  from 'mongoose';

 export const connectToDB = async () => {
   try {
     await mongoose.connect('mongodb://localhost/mydatabase', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     console.log('Connected to MongoDB');
   } catch (error) {
     console.error('Failed to connect to MongoDB:', error);
   }
 };