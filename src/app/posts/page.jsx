import  { Suspense } from 'react';
import Posts from '@/components/Posts';

const PostsPage = () => {
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());   

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Posts postsPromise ={postsPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostsPage;