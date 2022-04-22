function RandomImage(props) {
    const style = {
       width: 150,
       height: 200,
       backgroundColor: Math.floor(Math.random()*16777215).toString(16),
       display: 'inline-block',
       margin: 2,
       border: '5px solid #333',
       borderBottom: '5px solid #222',
       borderLeft: '5px solid #222',
       borderRadius: 4,
       boxSizing: 'border-box',
       backgroundImage: `url(https://unsplash.it/150/200?image=${Math.floor(Math.random() * 10000)})`,
       transition: 'background-image 1s ease-in-out'
   }

   return (
     <a href="#" style={style} />
       )
}
export default RandomImage;
