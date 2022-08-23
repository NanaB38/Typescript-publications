import { useNavigate } from 'react-router-dom';
import { PostData } from '../interfaces';
import './postList.css';

interface PostsListProps {
  allPosts: PostData[] | null;
}
//créer plutôt une interface pour référencer allPosts props

export const PostList: React.FC<PostsListProps> = ({ allPosts }) => {
  const navigate = useNavigate();
  // il faut récupérer l'interface PostData
  return (
    <div className='posts'>
      {/* on peut intérer et accéder à toutes les prop allPosts car on l'a récup depuis l'interface */}
      <ul>
        {allPosts?.map((post) => (
          <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
            <h2>{post.title}</h2>
            <p>Lire l'article</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
