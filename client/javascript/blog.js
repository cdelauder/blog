Posts = new Mongo.Collection('posts');
var posts = Posts.find();
Template.blog.helpers({
  posts: function () {
    console.log('in posts')
    return posts;
  },
  count: function () {
    return posts.count()
  }
});