Meteor.startup( function () {
  console.log(' in db.js')
  Posts = new Mongo.Collection('posts');
  Posts.remove({id: 1}, function (docs) {
    if (docs) {
      docs.forEach(function (doc) {
        console.log(doc);
      });
    } else {
      console.log('success in removing docs');
      Posts.insert({
        id: 1,
        title: "Datetime Math Is Hard!",
        date: new Date(2015, 2, 22).toDateString(),
        content: "ACK! This is example content I will actually write something on this topic very soon hopefully and whatnot.Checking how it handles things like new lines when I do it this way."
      }, function (err, doc) {
        if (err) {
          console.log('error adding doc');
        } else {
          console.log('new doc created ' + doc);
        }
      });
    }
  });
});