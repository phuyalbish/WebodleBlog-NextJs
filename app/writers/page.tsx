import React from 'react'
import PostItem from '../components/PostItem'
import styles from './Writer.module.css'

interface Writer {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const Writers = async () => {

    
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const writers: Writer[]= await response.json();
  return (
     <section className={styles.authors}>
      {writers.length > 0 ? (
        <div className={styles.writers_container}>
          {writers.map(({ id, name, username, email}) => {
            return (
              <div className={styles.author}>
                <div className={styles.author_info}>
                  <h4>{name}</h4>
                  <p>{email}</p>
                  <p>@{username}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No Writers Found!</h2>
      )}
    </section>
  )
}

export default Writers