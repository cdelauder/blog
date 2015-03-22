Posts = new Mongo.Collection('posts');
Posts.remove();
Posts.insert({
  id: 1,
  title: "Datetime Math Is Hard!",
  content: "This is example content I will actually write something on this topic very soon hopefully and whatnot.\nChecking how it handles things like new lines when I do it this way."
})