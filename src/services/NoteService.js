const db = require('../db');

module.exports = {
    getAll:  () => {
        return new Promise((resolve, reject)=> {
            let query = 'SELECT * FROM note';
            db.query(query, (error, result) => {
                if(error) { reject(error); return; }
                resolve(result);
            });

        });
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {

            db.query('SELECT * FROM note WHERE id = ?', [id],(error, result)); 
                if(error) { reject(error); return; }
                if(results.length > 0) {
                    resolve(results[0]);
                }else {
                    resolve(false);
                }
            });
        },
    
    add: () => {
        return new Promise((resolve, reject)=>{

            db.query('INSERT INTO note (title, body) VALUES (?, ?)',
                [title, body],
                (error, result) => {
                    if(error) {reject(error); return;}
                    resolve(results.insertId);
                }
            );
        }); 
    },
    update: (id, title, body) => {
        return new Promise((resolve, reject)=>{

            db.query('UPDATE note SET title = ?, body = ? WHERE id = ? ',
                [title, body, id],
                (error, results) => {
                    if(error) {reject(error); return;}
                    resolve(results);
                }
            );

        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM note WHERE id = ?', [id], (error, results) => {
                if(error) {reject(error); return;}
                resolve(results);
            });
        });
    }
};