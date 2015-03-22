Posts = new Mongo.Collection('posts');
var posts = Posts.find();
Template.blog.helpers({
  posts: function () {
    return posts;
  },
  count: function () {
    return posts.count()
  }
});