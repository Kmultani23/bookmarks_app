const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/bookmarks');

const Bookmark = db.define('Bookmark', {
    site: {
        type: STRING,
        allowNull: false,
        },
    siteURL: {
        type: STRING,
        validate:{
            isURL: true,
        },
    },
    category: {
        type: STRING,
    },
});

const syncAndSeed = async () => {
    await db.sync({ force: true });
};

module.exports = {
    db, 
    syncAndSeed,
    models : {
        Bookmark
    }

};