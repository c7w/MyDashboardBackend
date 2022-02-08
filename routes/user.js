import User from '../models/user.js'
import app from "../app/app.js"


// user?username=c7w
app.get("/user", async (req, res) => {
    const username = req.query.username;
    if(username === undefined) { res.status(404).send("user-not-found"); return; }
    const result = await User.findOne({where: {username: username}});
    if (result === null) {
        res.sendStatus(404); return;
    } else {
        res.json(result); return;
    }

});

// { "action": "create", "username": "c7w" }
// { "action": "update", "id": 1, "field": 1, "payload": +10.0 }
// { "action": "delete", "id": 1 }
app.post("/user", async (req, res) => {
    const action = req.body.action;
    
    if ( action === 'create' ) {
        const username = req.body.username;
        if(username === undefined) { res.status(400).send("Invalid username"); return; }
        let user = await User.findOne({ where: { username: username } });
        if (user === null ) {
            const user = await User.create({username: username});
            res.json(user); return;
        } else {
            res.status(400).send("Occupied username"); return;
        }
    }
    
    if ( action === 'update' ) {
        const id = parseInt(req.body.id, 10);
        let field = parseInt(req.body.field, 10);
        let payload = parseFloat(req.body.payload);

        if (isNaN(field) || field < 1 || field > 9) { res.status(400).send("Bad field"); return; }
        if( isNaN(payload)) { res.status(400).send("Bad payload"); return; }
        field = 'credit' + field;

        let user = await User.findOne({ where: { id: id } });
        if (user === null) {
            res.status(400).send("User id not found"); return;
        } else {
            user.setDataValue( field, user.getDataValue(field) + payload ); // 事实上将 payload 交给前端发送的做法是不安全的
            user = await user.save();
            res.json(user); return;
        }
    }
    
    if ( action === 'delete' ) {
        const id = parseInt(req.body.id, 10);
        let user = await User.findOne({ where: { id: id } });
        if (user === null) {
            res.status(400).send("User id not found"); return; 
        } else {
            await user.destroy();
            res.sendStatus(200); return;
        }
    }
    
    res.sendStatus(400); // Bad Request
})

export default {};