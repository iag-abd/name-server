import {Shorten} from '../models/shorten.model'

export const setShortname = (req, res) => {
  Shorten.findOne({shortname: req.body.shortname}, (err, doc) => {
    if (doc) {
      console.log('APP: URL found in DB')
      res.send({
        shortname: doc.shortname,
        longname: doc.longname,
        author: doc.author,
        team: doc.team,
        status: 400,
        statusTxt: 'ERROR'
      })
    } else {
      const s = new Shorten({
        shortname: req.body.shortname,
        longname: req.body.longname,
        author: req.body.author,
        team: req.body.team
      })
      s.save()
      res.send({
        shortname: req.body.shortname,
        longname: req.body.longname,
        author: req.body.author,
        team: req.body.team,
        status: 200,
        statusTxt: 'OK'
      })
    }
  })
}

export const getAllShortnames = (req, res) => {
  Shorten.find().exec((err, redirects) => {
    if (err) {
      return res.json({'success': false, 'message': 'Some Error'})
    }
    return res.json({'success': true, 'message': 'Todos fetched successfully', redirects})
  })
}

export const deleteShortname = (req, res) => {
  Shorten.findOneAndRemove({shortname: req.body.shortname}, (err) => {
    if (err) {
      return res.json({'success':false,'message': 'Some Error'})
    }
    return res.json({'success':true,'message': `${req.body.shortname} deleted successfully`});
  })
}

export const redirect = (req, res) => {
  var shortname = req.params.shortname
  if (shortname) {
    Shorten.findOne({ shortname: shortname }, (err, doc) => {
      if (doc) {
        console.log('APP: Found ID in DB, redirecting to URL')
        res.redirect(doc.longname)
      } else {
        console.log('APP: Could not find ID in DB, return 404')
        res.status(404).send('<h2 align=center>Page Not Found!</h2>')
      }
    })
  }
}
