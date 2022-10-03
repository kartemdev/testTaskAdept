const express = require('express');
const cors = require('cors');
const path = require('path');
const { Op } = require('sequelize');
const { Company, Employee, sequelize } = require('./db/models')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

app.get('/totalCount', async (req, res) => {
  try {
    const total = await Company.count({});

    res.status(200).json({ total: total })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
})

app.route('/companies/:limit')
  .get(async (req, res) => {
    try {
      const findComps = req.params.limit;

      if (!Number(findComps)) {

        const comps = await Company.findAll({
          where: {
            name: {
              [Op.or]: {
                [Op.startsWith]: `${findComps}%`,
              },
            }
          },
        });

        res.status(200).json(comps);
      } else {
        const comps = await Company.findAll({
          order: sequelize.literal('id ASC'),
          limit: req.params.limit,
        });

        res.status(200).json(comps);
      }
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: 'server error' })
    }
  })
  .post(async (req, res) => {
    const { name, adress } = req.body;

    try {
      const company = await Company.create({
        name: name,
        adress: adress,
      })

      res.status(200).json(company)
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: 'server error' })
    }
  })
  .put(async (req, res) => {
    try {
      const { id, name, adress } = req.body

      const comp = await Company.findOne({ where: { id: id }});

      await Company.update({
        name: name || comp.name,
        countEmps: comp.countEmps,
        adress: adress || comp.adress,
        checked: comp.checked,
      }, { where: { id: id }})

      const editComp = await Company.findOne({ where: { id: id }});

      res.status(200).json(editComp);
    } catch (error) {
      res.status(500).json({ message: 'server error' })
      console.log(error);
    }
  });

  app.route('/employees/:compId')
    .get(async (req, res) => {
      try {
        const emps = await Employee.findAll({ 
          where: { compId: req.params.compId }, 
        })

        res.status(200).json(emps)

      } catch (error) {
        res.status(500).json({ message: 'server error' })

        console.log(error);
      }
    })
    .post(async (req, res) => {
      try {
        const {firstName, lastName, jobTitle} = req.body;

        const employee = await Employee.create({
          firstName: firstName,
          lastName: lastName,
          jobTitle: jobTitle,
          compId: req.params.compId,
        })

        const comp = await Company.findOne({ where: { id: req.params.compId } });

        await Company.update({
          name: comp.name,
          countEmps: comp.countEmps + 1,
          adress: comp.adress,
          checked: comp.checked,
        }, { where: { id: req.params.compId } })

        res.status(200).json(employee);
      } catch (error) {
        res.status(500).json({ message: 'server error' });

        console.log(error);
      }
    })
    .put(async (req, res) => {
      try {
        const { firstName, lastName, jobTitle } = req.body;

        const emp = await Employee.findOne({ where: { id: req.params.compId } })

        await Employee.update({
          firstName: firstName || emp.firstName,
          lastName: lastName || emp.lastName,
          jobTitle: jobTitle || emp.jobTitle,
          checked: emp.checked,
          compId: emp.compId,
        }, { where: { id: req.params.compId } })

        const editEmp = await Employee.findOne({ where: { id: req.params.compId } })

        res.status(200).json(editEmp)
      } catch (error) {
        res.status(500).json({ message: 'server error' })
        console.log(error);
      }
    });

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build/index.html'));
      });      

app.listen(PORT, () => console.log('server started on port', PORT))
