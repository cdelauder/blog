Meteor.startup(function() {
  Meteor.isServer = true;
  Posts = new Mongo.Collection('posts');
  Posts.insert({
  id: 1,
  title: "Datetime Math Is Hard!",
  content: "This is example content I will actually write something on this topic very soon hopefully and whatnot.\nChecking how it handles things like new lines when I do it this way."
  });

  var posts = Posts.find();
  posts.forEach(function (post) {
    console.log(post.title);
  });
  
});