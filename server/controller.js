Meteor.startup(function() {
  Meteor.isServer = true;
  Posts = new Mongo.Collection('posts');
  Router.route('/', function () {
    this.layout('index', {
      data: {
        posts: Posts.find()
      }
    });
    console.log(Posts.find())
  })
});