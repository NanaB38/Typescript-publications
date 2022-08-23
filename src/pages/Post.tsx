import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostDetail } from '../components/PostDetail';
import { PostData } from '../interfaces';

export const Post = () => {
  type PostParams = {
    id: string;
  };
  const { id } = useParams<PostParams>();
  const [onePost, setOnePost] = useState<PostData | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      // json2ts : convertir le json en tsx, générer une interface qui va décrire le contenu de l'objet posts
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data: PostData = await res.json();
      setOnePost(data);
    };
    getPosts();
  }, [id]);
  console.log(onePost);

  return (
    <div className='post-container'>
      <h1 style={{ textAlign: 'center' }}>Detail de la publication</h1>
      <PostDetail onePost={onePost} />
    </div>
  );
};
