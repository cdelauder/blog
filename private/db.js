Meteor.startup( function () {
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
        content: "ACKThis is example content I will actually write something on this topic very soon hopefully and whatnot.<p>Checking how it handles things like new lines when I do it this way.</p>"
      }, function (doc) {
        if (!doc) {
          console.log('error adding doc');
        } else {
          console.log('new doc created ' + doc._id);
        }
      });
    }
  });
});