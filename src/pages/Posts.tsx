export const Posts = () => {
  return (
    <div
      className='post-container'
      style={{ width: '100vw', margin: '0 auto' }}
    >
      <h1>Page Principale</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='posts'>Nombre de publications : 5</label>
        <input type='range' min={1} max={20} />
      </div>
    </div>
  );
};
