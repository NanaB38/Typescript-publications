import { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';
import { PostData } from '../interfaces';

export const Posts: React.FC = () => {
  // React.FC : composant fonctionnel
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  //PostData est un tableau
  const [numberOfPosts, setNumberOfPosts] = useState<number>(5);
  //chargement de la page : récupère 5 publications

  const localOrState = localStorage.getItem('number') || numberOfPosts;
  const localOrStateNum = localOrState;

  useEffect(() => {
    const getPosts = async () => {
      // json2ts : convertir le json en tsx, générer une interface qui va décrire le contenu de l'objet posts
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`
      );
      const data: PostData[] = await res.json();
      setAllPosts(data);
    };
    getPosts();
  }, [numberOfPosts]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //coller le type de onChange ici (supp Handler : ChangeEventHandler)
    setNumberOfPosts(+e.target.value);
    localStorage.setItem('number', e.target.value);
  };

  return (
    <div
      className='post-container'
      style={{ width: '100vw', margin: '0 auto' }}
    >
      <h1 style={{ color: 'red', textAlign: 'center' }}>Page Principale</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='posts'>Nombre de publications :{localOrState}</label>
        <input
          type='range'
          min={1}
          max={20}
          onChange={onChange}
          defaultValue={localOrStateNum}
          //récupérer infos onChange (property)
        />
        <PostList allPosts={allPosts} />
      </div>
    </div>
  );
};
