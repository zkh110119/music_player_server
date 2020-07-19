const db = require('better-sqlite3')('./db/music_player_server.db', {});

class DataService {
    constructor() {
    }

    getAllOnlineMusic() {
        let rows = db.prepare(`select * from music_online where 1=1`).get();
        let json = {
            code: 200,
            rows: rows,
            message: ''
        };
        return json;
    }
}

module.exports = DataService;