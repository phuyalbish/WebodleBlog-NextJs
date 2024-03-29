
import React from 'react'

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
const PostWriter:React.FC<{ userId: number }> =async ({ userId }) => {



  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const writer: Writer= await response.json();

  return (
    <div className="post_writer_details">
        <h5>{writer?.name}</h5>
        <small>@{writer?.username}</small>
    </div>
  );
}

export default PostWriter