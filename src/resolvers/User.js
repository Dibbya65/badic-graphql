const User = {
  posts(parent, args, { db }, ifno) {
    return db.posts.filter((post) => {
      return post.author === parent.id;
    });
  },
};
export default User;
