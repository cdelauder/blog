Posts = new Mongo.Collection('posts');
var posts = Posts.find();
posts.forEach(function (post) {
  console.log(post.title);
});
Template.blog.helpers({
    posts: function () {
      return Posts.find();
    }
    })