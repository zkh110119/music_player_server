const DB = require('./db.js');

class DataService {
    constructor() {
    }

    /**
     * 获取所有在线音乐
     * @param res
     */
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

    /**
     * 根据关键字获取在线音乐
     * @param req
     * @param res
     */
    getOnlineMusicByKeyword(req, res) {

    }
}

module.exports = DataService;
