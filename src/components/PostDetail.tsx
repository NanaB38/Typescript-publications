import { Link } from 'react-router-dom';
import { PostData } from '../interfaces';

interface PostDetailProps {
  onePost: PostData | null;
}
export const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <div
        className='one-post'
        style={{
          width: '70vw',
          padding: '3rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'lightgray',
        }}
      >
        <div>
          <h1>Publication N°{onePost?.id} </h1>
          <h2>Titre : {onePost?.title} </h2>
          <p>{onePost?.body}</p>
          <Link to='/'>Page principale</Link>
        </div>
      </div>
    </div>
  );
};
