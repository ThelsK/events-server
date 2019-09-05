const Event = require("./model")
const eventRouter = new require("express").Router()

eventRouter.get("/event", (req, res, next) => {
  Event.findAll()
    .then(events => res.send(events))
    .catch(next)
})

eventRouter.get("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => {
      if (event) {
        res.send(event)
      } else {
        res.status(404).end()
      }
    })
    .catch(next)
})

eventRouter.post("/event", (req, res, next) => {
  Event.create(req.body)
    .then(event => res.send(event))
    .catch(next)
})

eventRouter.put("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => {
      if (event) {
        event.update(req.body)
          .then(event => res.send(event))
      } else {
        res.status(404).end()
      }
    })
    .catch(next)
})

eventRouter.delete("/event/:id", (req, res, next) => {
  Event.destroy({ where: { id: req.params.id } })
    .then(amount => res.send(amount))
    .catch(next)
})

module.exports = eventRouter