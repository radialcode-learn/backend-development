const dislikePost = require("../schema/dislikePost");
const likePost = require("../schema/likePost");
const createPost = require("../schema/simplePost");

const CreatePostApiHandler = async (req, res) => {
  const myPostList = await createPost.find({ userId: req.payload._id });
  return res.status(200).json({
    success: true,
    message: "my post list",
    postList: myPostList,
  });
};

const PostLikeApiHandler = async (req, res) => {
  const updatedPostDetails = await createPost.find({ _id: req.body.postId });
  const isPostExictToLike = await likePost.find({
    userId: req.body.userId,
    postId: req.body.postId,
  });
  if (isPostExictToLike && isPostExictToLike.length === 0) {
    const updateRes = await createPost.updateOne(
      {
        _id: req.body.postId,
      },
      {
        $set: {
          like: updatedPostDetails.link + 1,
          isLike: true,
        },
      }
    );
    console.log(updateRes);
    const likePostObj = new likePost({
      userId: req.body.userId,
      postId: req.body.postId,
    });
    await likePostObj.save();

    return res.status(200).json({
      success: true,
      message: "Post liked successFully",
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "Post already liked",
    });
  }
};

const PostDisLikeApiHandler = async (req, res) => {
  const updatedPostDetails = await createPost.find({ _id: req.body.postId });
  console.log(updatedPostDetails, "updatedPostDetails===========");
  const isPostExictToLike = await likePost.find({
    userId: req.body.userId,
    postId: req.body.postId,
  });
  console.log(isPostExictToLike, "isPostExictToLike");
  const isPostExictToDislike = await dislikePost.find({
    userId: req.body.userId,
    postId: req.body.postId,
  });
  console.log(isPostExictToDislike, "-==============isPostExictToDislike");

  if (isPostExictToDislike && isPostExictToDislike.length === 0) {
    const updateRes = await createPost.updateOne(
      {
        _id: req.body.postId,
      },
      {
        $set: {
          dislike: updatedPostDetails.dislike + 1,
          like:
            isPostExictToLike && isPostExictToLike.length > 0
              ? updatedPostDetails.like - 1
              : updatedPostDetails.like,
        },
      }
    );
    console.log(updateRes);
    if (isPostExictToLike && isPostExictToLike.length < 0) {
      await likePost.find(
        {
          userId: req.body.userId,
          postId: req.body.postId,
        },
        {
          $pull: { userId: req.body.userId, postId: req.body.postId },
        }
      );
    }
    const dislikeObj = new likePost({
      userId: req.body.userId,
      postId: req.body.postId,
    });
    await dislikeObj.save();

    return res.status(200).json({
      success: true,
      message: "Post disliked successFully",
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "Post already disliked",
    });
  }
};

module.exports = {
  CreatePostApiHandler,
  PostLikeApiHandler,
  PostDisLikeApiHandler,
};
