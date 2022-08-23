import { PostData } from '../interfaces';
interface PostsListProps {
  allPosts: PostData[] | null;
}
//créer plutôt une interface pour référencer allPosts props

export const PostList: React.FC<PostsListProps> = ({ allPosts }) => {
  // il faut récupérer l'interface PostData
  return (
    <div className='Posts'>
      {/* on peut intérer et accéder à toutes les prop allPosts car on l'a récup depuis l'interface */}
      <ul>
        {allPosts?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Lire l'article</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
