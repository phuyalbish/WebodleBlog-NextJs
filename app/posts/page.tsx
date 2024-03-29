import React from 'react'
import PostItem from '../components/PostItem'
import styles from './Post.module.css'

interface Post {
  userId:number;
  id: number;
  title:string;
  body:string;

}
const Posts = async () => {

    
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[]= await response.json();
  return (
    <div>
        {posts.length > 0 ? (
        <div className={styles.posts_container}>
          {


          posts.map(({ id, userId, title, body }) => (
            <PostItem
              key={id}
              id={id}
              userId={userId}
              title={title}
              body={body}
            />
          ))
          }
        </div>
      ) : (
        <div className="posts_container">
          <h3>No Posts Found!</h3>
        </div>
      )}
    </div>
  )
}

export default Posts