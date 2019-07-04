const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const {fullName, email, password, isAdmin} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        let employee = await db.employee.check_employee({email});
        employee = employee[0];
        if(employee){
            return res.status(400).send('Employee already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newEmployee = await db.employee.register({fullName, email, password: hash, isAdmin});
        newEmployee = newEmployee[0];
        delete newEmployee.password;
        session.employee = newEmployee;
        res.status(201).send(session.employee);
    },
    login: async(req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        let employee = await db.employee.check_employee({email});
        employee = employee[0];
        if(!employee){
            return res.status(400).send('Email not found')
        }
        const foundEmployee = bcrypt.compareSync(password, employee.password);
        if(foundEmployee){
            delete employee.password;
            session.employee = employee;
            res.send(session.employee);
        } else {
            res.status(400).send('Incorrect password')
        }
    },
    logout: async(req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}