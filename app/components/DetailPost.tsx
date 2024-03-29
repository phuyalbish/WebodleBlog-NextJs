import React,{ useEffect, useState }  from 'react'


interface Post {
  userId:number;
  id: number;
  title:string;
  body:string;

}
const DetailPost:React.FC<{ id: number }> = ({ id }) => {


  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const posts: Post[] = await response.json();
        const post = posts.find((p) => p.id === id);
        setPost(post || null);
      } catch (error) {
        console.error('Error fetching Post:', error);
      }
    };

    fetchPost();

    
  

});
let capitalizedTitle = post?.title;
let capitalizedBody = post?.body;
capitalizedTitle = post?.title && post?.title.charAt(0).toUpperCase() + post?.title.slice(1);
capitalizedBody =  post?.body && post?.body.charAt(0).toUpperCase() + post?.body.slice(1);

  return (
    <div className="post_writer_details">
        <h2>{capitalizedTitle}</h2>
        <small>{capitalizedBody}</small>
    </div>
  );
}

export default DetailPost