import mongoose from "mongoose";

export const connectDB = async () => {
    const URI = process.env.MONGO_URI;
    if (!URI) {
        console.error("❌ MONGO_URI is not defined in environment variables.");
        process.exit(1);
    }

    try {
        const connection = await mongoose.connect(URI);
        console.log(`✅ MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1);
    }
};
