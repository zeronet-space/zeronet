import { Post } from '../../database'

export default async function postsRoute(req, res) {
  /*const admin = await User.create({
    id: '66-6-6-6-666'.replace(/6/g,_=>(Math.random().toString(16)+'00000').slice(2,6)),
    username: 'ay0ks',
    password: '$2a$12$5viYeccNg4yhP8Z6hBh7buXU4UALhDAXHNPwy4lQAVaLrlXs7xa.y',
    email: 'contact@zeronet.space',
    admin: true
  });*/
  let posts = await Post.findAll();
  res.send(posts);
}

