import { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';

//coller depuis json2ts
export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Posts: React.FC = () => {
  // React.FC : composant fonctionnel
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  //PostData est un tableau

  useEffect(() => {
    const getPosts = async () => {
      // json2ts : convertir le json en tsx, générer une interface qui va décrire le contenu de l'objet posts
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      const data: PostData[] = await res.json();
      setAllPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div
      className='post-container'
      style={{ width: '100vw', margin: '0 auto' }}
    >
      <h1>Page Principale</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='posts'>Nombre de publications : 5</label>
        <input type='range' min={1} max={20} />
        <PostList />
      </div>
    </div>
  );
};
