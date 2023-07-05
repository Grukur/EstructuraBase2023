import sequelize from './app/database/db.js';
import app from './app/app.js';
import 'dotenv/config.js';


const main = async() => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({ force:true, alter:true });
        let PORT = process.env.PORT || 3001;
        app.listen(PORT, ()=> {
            console.log(`Server running on port ${PORT}`);
        });
    } catch(error){
        console.log('Ha ocurrido un error: ' + error);
    }
};

main();