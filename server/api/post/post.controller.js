/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';
import Post from './post.model'
import Category from './category.model'
/**
 * router.get('/', controller.getPosts);
 router.get('/:category', controller.getPostsByCategory);
 router.get('/:postUrlName', controller.getPostByUrlName);
 router.post('/add', controller.addPost);
 router.post('/edit', controller.addPost);
 router.post('/delete', controller.addPost);

 * @param req
 * @param res
 */

export function getPosts(req, res) {
  Post.find(function (err, data) {
    res.json({err, data});
  });
}

export function getPostsByCategory(req, res) {
  console.log(req.params);
  Post.find(
    {category:req.params.category},
    function (err, data) {
      console.log(data);

      res.json({err, data})
    }
  )
}

export function getCategories(req, res) {
  Category.find(
    function (err, data) {
      res.json({err, data})
    }
  )
}

export function getPostByUrlName(req, res) {
  Post.findOne(
    {urlName:req.params.urlName},
    function (err, data) {
      res.json({err, data})
    }
  )
}

export function addPost(req, res) {
  var post = {
    content: req.body.content,
    title: req.body.title,
    author: req.body.author,
    date: req.body.date,
    category: req.body.category
  };
  Post.create(post, function(err,data) {
    return res.json({err,data});
  })
}

export function editPost(req, res) {

}

export function deletePost(req, res) {
  console.log(req.body);
  Post.findById(req.body.post._id, function (err, product) {
    product.remove(function (err, product) {
      res.json({err,product});
    });
  })
}

//
//
// export function country(req, res) {
//   res.json(["Vietnam", "Singapore", "China"]);
// }
//
// export function login(req, res) {
//   if (req.body.username === "admin" && req.body.password === "123") {
//     res.json({message: "success"});
//   } else {
//     res.json({message: "failure"});
//   }
// }
