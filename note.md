<!-- 
/* console.log('--', Object.keys(req))

console.log(req.url)
console.log(req.baseUrl)
console.log(req.params);
console.log(req.query);
console.log(req.route);
console.log(req.rawHeaders);
console.log(req.method)
console.log(req.originalUrl)
console.log(req.body) */

console.log(Object.keys(res))
console.log(res._hasBody)
console.log(res._header)
console.log(res.finished)

===

res.download('some.js');

/string_params /:id =: req.params

/key&value =: req.query

=======

# runs on each route with paramter :id /blog/id

router.param("id", (req, res, next, id) => {

  next();
})


 -->