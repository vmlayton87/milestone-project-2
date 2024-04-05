// config.js
import crypto from "crypto"

// Function to generate a random secret key
const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

// Export the generated secret key
export default generateSecretKey
