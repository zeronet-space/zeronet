import { Post } from '../../database'

export default async function postRoute(req, res) {
  let post = await Post.findAll({
    where: {
      id: req.body.id
    }
  });
  res.send(post);
}

