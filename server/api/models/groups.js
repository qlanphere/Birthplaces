const db = require ('../dbConfig')

class Groups {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.birthPlace = data.birthPlace
    }

        static get all() {
            return new Promise (async (resolve, reject) => {
                try {
                    console.log('before')
                    const groupData = await db.query('SELECT * FROM groups;')
                    console.log('after' + groupData)
                    const groups = groupData.rows.map(d => new Groups(d))
                    resolve(groups);
                } catch (err) {
                    reject("Error retrieving groups")
                }
            })
        }

        // static findByName (name) {
        //     return new Promise (async (resolve, reject) => {
        //         try {
        //             let groupData = await db.query(`SELECT * FROM groups WHERE name = $B;`, [ name ]);
        //             let groups = new Groups(groupData.rows[0]);
        //             resolve (groups);
        //         } catch (err) {
        //             reject('Person not found');
        //         }
        //     });
        // }
    }

    module.exports = Groups;