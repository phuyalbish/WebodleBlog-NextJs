import React from 'react'
import Link from 'next/link'
import styles from './PostCard.module.css'
import PostWriter from './PostWriter'
interface Post {
  userId:number;
  id: number;
  title:string;
  body:string;
}

function PostItem({ id, userId, title, body }:Post) {


    const truncateTitle =
    title.length > 40 ? title.substring(0, 40) + "..." : title;
  const capitalizedTitle =
    truncateTitle.charAt(0).toUpperCase() + truncateTitle.slice(1);
  const truncateBody =
    body.length > 100 ? body.substring(0, 100) + "..." : body;
  const capitalizedBody =
    truncateBody.charAt(0).toUpperCase() + truncateBody.slice(1);



    
  return (
    <article className={styles.post}>
        <div className={styles.post_content}>
          <Link href={`/posts/${id}`}>
            <h3>{capitalizedTitle}</h3>
          </Link>
          <p>{capitalizedBody}</p>
        </div>
        <div className={styles.post__footer}>
          <div></div>
          <PostWriter userId={userId} />
        </div>
    </article>
  );

}

export default PostItem