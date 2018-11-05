const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'postDb';
const client = new MongoClient(url, {
  useNewUrlParser: true
});

class PostService {

  constructor(req, res) {
    this.req = req
    this.res = res
  }

  insert(postItem, db, callback) {
    db.collection('post').insertOne({
      "item": postItem
    }, function () {
      callback()
    })
  }

  addPost() {
    let self = this;
    let postItem = this.req.body.postItem;
    try {
      client.connect(function (err) {
        assert.equal(null, err);
        const db = client.db(dbName);

        self.insert(postItem, db, function () {
          client.close()
          return self.res.status(200).json({
            status: 'success'
          })
        })
      });
    } catch (error) {
      return self.res.status(500).json({
        status: 'error',
        error: error
      })
    }

  }

  getPosts() {
    let self = this;
    var postList;
    client.connect(function (err) {
      assert.equal(null, err);
      const db = client.db(dbName);
      db.collection('post').find({}, {
        item: true,
        _id: false
      }).toArray(function(err, docs) {
        assert.equal(null, err);
        postList = docs;
        console.log(docs);
      });
      return postList;

    });
  }

  getPost() {
    let self = this;
    try {
      client.connect(function (err) {
        assert.equal(null, err);
        let postList = [];
        const db = client.db(dbName);
        let cursor = db.collection('post').find({}, {
          item: true,
          _id: false
        });
        return cursor;
        // cursor.each(function (err, doc) {
        //   assert.equal(err, null);
        //   if (doc != null) {
        //     postList.push(doc.item)
        //   } else {
        //     return postList;
        //   }
        // });
      });
    } catch (error) {
      return self.res.status(500).json({
        status: 'error',
        error: error
      })
    }
  }
}
module.exports = PostService
