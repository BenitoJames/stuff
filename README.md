# AgnoRated
CCAPDEV Group 7
Benito, Chong, Medina, Ruiz

## Setup
1. Open terminal in the AgnoRated folder `\AgnoRated`
2. Run: `npm install`
3. Create a `.env` file with:
   `MONGO_URI=your_mongodb_connection_string`
4. Run: `node seed/seedData.js` to populate the database
5. Run: `node app.js`
6. Open `http://localhost:3000` in your browser

## Dependencies installed
- bcrypt
- connect-mongo
- dotenv
- express
- express-handlebars
- express-session
- mongodb
- mongoose
- multer
- nodemon