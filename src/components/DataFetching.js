import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://www.fruityvice.com/api/fruit/all')
        .then( resp => {
            console.log(resp)
            setPost(resp.data)

        })
        .catch(err => {
            console.log(err)
        })

    }, [])
  return (
    <div>
        <ul>
            {post.map(post =>(
                <li key={post.id}>{post.nutritions}</li>
            ))}
        </ul>
    </div>
  )
}

export default DataFetching