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

===================================

# mongoose:
==

# create
const user = new User({name: 'ali'})

await user.save()
.then(() => {//was saved})

--

const user = await User.create({name: 'sara'})

--

# update: 
user.name = 'al'
user.save();

--

# options with each field:

type
required
lowerCase: true
upperCase
type: Date
default: () => Date.now()
# does not let setting the prop, without any error
immutable: true
min
max

# only runs if: use: create() or save()
validate: {
  validator: v => v % 2 === 0,
  message: props => `${props.value} is not an even number`
}

# mongoose methods and middleware add to schema and virtual

# mongoose relationships:
==


=========================================================

{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "strict": true
  }
}

====================================================

# web sockets:
==


 -->