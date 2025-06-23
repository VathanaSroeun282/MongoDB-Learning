const { group, count } = require("console");
const { title } = require("process");

use('konpapa')

// db.getCollection('newCollection').find();


//$group
// db.getCollection('posts').aggregate([
//     {
//         $group: {
//           _id: "$body"
//         }
//     }
// ]);

// //$limit
// db.getCollection('posts').aggregate([
//     {
//         $group: {_id:"$body"}
//     },
//     {
//         $limit: 1
//     }
// ]);

// //$project
// db.getCollection('posts').aggregate([
//     {
//         $project: {
//             "_id" : 0,
//           "title": 1,
//           "body": 1
//         }
//     },
//     {
//         $limit: 1
//     }
// ]);

//$sort
// db.getCollection('posts').aggregate([
//     {
//         $limit:2
//     },
//     {
//         $project: {
//             "_id" : 0,
//           "title": 1,
//           "body": 1,
//           "event" : 1
//         }
//     },
//     {
//         $sort:{"body" : -1}
//     }
// ]);

//$match //use as find()
// db.getCollection('posts').aggregate([
//     {
//         $match: {
//           title : "Title2"
//         }
//     },
//     {
//         $project: {
//             "_id" : 0,
//           "title" : 1,
//           "tages" : 1
//         }
//     }
// ]);

//$addFields
// db.getCollection('posts').aggregate([
//     {
//         $match: {
//           title : "Title2"
//         }
//     },
//     {
//         $addFields: {
//           AvgLikes:{$avg: "$likes"}
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "title": 1,
//             "AvgLikes" : 1,
//             "date": 1
//         }
//     }
// ]);

//$count // use to count fields in the documents 
// db.getCollection('posts').aggregate([
//     {
//         $count : "tages",
//         $count : "body",
//         $count : "yoo"
//     }
// ]);
/// fix
// db.posts.aggregate([{ $match: { tages: { $exists: true } } }, { $count: "tagesCount" }])
// db.posts.aggregate([{ $match: { body: { $exists: true } } }, { $count: "bodyCount" }])
// db.posts.aggregate([{ $match: { yoo: { $exists: true } } }, { $count: "yooCount" }])
// /// fix again use $group
// db.posts.aggregate([
//   {
//     $group: {
//       _id: null,
//       tagesCount: { $sum: { $cond: [{ $gt: ["$tages", null] }, 1, 0] } },
//       bodyCount:  { $sum: { $cond: [{ $gt: ["$body", null] }, 1, 0] } },
//       yooCount:   { $sum: { $cond: [{ $gt: ["$yooo", null] }, 1, 0] } }
//     }
//   }
// ])
///fix again and again
/*
db.posts.aggregate([
  {
    $group: {
      _id: null,
      tagesCount: { $sum: {
        $cond:[{
            $gt : ["$title", null]
        }, 1,0]
       }}
    //    ,
    //   bodyCount:  { $sum: "$body"},
    //   yooCount:   { $sum: "$yooo"}
    }
  }
]);*/
// db.posts.find().pretty()

posts = db.posts;

// posts.find()
posts.find({}, {_id:0})