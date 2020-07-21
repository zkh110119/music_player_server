const DB = require('./db.js');

class DataService {
    constructor() {
    }

    getAllOnlineMusic(res) {
        let json = null;
        let db = new DB();
        db.queryData(`select * from music_online where 1=1`, (rows) => {
            json = {
                code: 200,
                rows: rows,
                message: ''
            };
            db.close();
            res.send(json);
        });
    }
}

module.exports = DataService;
