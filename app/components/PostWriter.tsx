'use client'
import React,{ useEffect, useState }  from 'react'
// interface UserId {
//     userId:number
// }
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
const PostWriter:React.FC<{ userId: number }> = ({ userId }) => {


  const [writer, setWriter] = useState<Writer | null>(null);

  useEffect(() => {
    const fetchWriter = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const writers: Writer = await response.json();
        // const foundWriter = writers.find((w) => w.id === userId);
        setWriter(writers);
      } catch (error) {
        console.error('Error fetching writer:', error);
      }
    };

    fetchWriter();

}, [userId]);

  return (
    <div className="post_writer_details">
        <h5>{writer?.name}</h5>
        <small>@{writer?.username}</small>
    </div>
  );
}

export default PostWriter