const path = require('path');
const fs = require('fs');

const PATH = '../cdn'

function resImage(req, res) {
    const realPath = path.resolve(__dirname, PATH + req.url)
    fs.exists(realPath, function (exists) {
        if (!exists) {
            return res.json({
                data: {},
                status: 1,
                message: `图片不存在:${realPath}`
            })
        } else {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            fs.createReadStream(realPath).pipe(res);
        }
    })
}

module.exports = {
    'GET /images/ns.jpg': (req, res) => resImage(req, res),
    'GET /images/nsqq.jpg': (req, res) => resImage(req, res),
}