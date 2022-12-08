const Post = require('../posts/post.model');
const { faker } = require('@faker-js/faker');

const post = new Post({
  author: faker.database.mongodbObjectId(),
  title: faker.lorem.words(7),
  category: faker.lorem.word(),
  content: faker.lorem.words(20),
});

const createDummyPost = async () => {
  try {
    const res = await post.save();
    console.log('🚀 dummy-14-> res =>', res);
  } catch (error) {
    console.log('🚀 dummy-16-> error =>', error);
  }
};

module.exports = createDummyPost;
