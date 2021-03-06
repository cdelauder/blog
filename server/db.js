Meteor.startup( function () {
  var post1 = "<style>" +
      "div {"+
        "display: inline-block;"+
      "}"+
      ".block-1 {"+
        "width: 100px;"+
        "height: 50px;"+
        "background-color: blue;"+
      "}"+
      ".block-2 {"+
        "width: 100px;"+
        "height: 50px;"+
        "background-color: darkblue;"+
      "}"+
    "</style>"+
    "<div class='block-1'></div>"+" " +
    "<div class='block-2'></div>"+
    "<p>Have you ever had 2 elements on your page that, no matter what, wouldn't touch? After making absolutely certain that there is no margin, padding, borders, or other elements in between them, you find that with inline of inline-block elements there is sometimes still space between them. I encountered this issue the other day, and it was making me crazy so it was time to dig deeper into why that could be the case.</p>"+
    "<p>The short explanation is that html, as an extremely literal language, displays the blank spaces in your html files. The reason why those 2 elements won't touch is because the html is displaying the tabs or spaces you used to indent your code.</p>"+
    "<p>There are some elements that will inherently be placed on the page without speaces between. List tags are an example of this, which I think goes a long way to explaining their abundance on pages without lists. But for those of us who don't want to/can't use a list tag in this particular situation there are still a number of solutions.</p>"+
    "<div class='block-1'></div><!-- comment "+
    "--><div class='block-2'></div>"+
    "<p>The one I used successfully is to wrap the white space in a comment tag. I created a comment that stretched from the end of one line of html to the beginning of the next. This immediately solved the problem.</p>"+
    "<div class='block-1'></div><div class='block-2'></div>"+
    "<p>Another solution is to place both elements on the same line of html. I can't say I'm a fan of this one. In fact, it saddens me to see such nonsense.</p>"

  Posts = new Mongo.Collection('posts');
  Posts.remove({}, function (docs) {
    if (docs) {
      docs.forEach(function (doc) {
        console.log(doc);
      });
    } else {
      console.log('success in removing docs');
      Posts.insert({
        id: 2,
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
      Posts.insert({
        id: 1,
        title: "Why Won't 2 Elements Touch",
        date: new Date(2015, 1, 18).toDateString(),
        content: post1
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