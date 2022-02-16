const mongoose = require('mongoose');

const dbConnection = async() => {
    try {

        await mongoose.connect( 'mongodb+srv://rpadro93:rami38050222@cluster0.b2rs2.mongodb.net/ranking', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}
module.exports = {
    dbConnection
}
