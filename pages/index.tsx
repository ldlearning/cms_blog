import type {GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage} from 'next'
import {PostCard, Categories, PostWidget, Comments, CommentsForm} from "../components";
import {getPosts} from "../services";
import FeaturedPosts from "../sections/FeaturedPosts";

function Blog({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    // will resolve posts to type Post[]
    return (
        // mx : margin horizontal - px : padding horizontal cf https://tailwindcss.com/docs
        <div className="container mx-auto px-10 mb-8 ">
            <div>
                <FeaturedPosts/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-5">
                <div className="lg:col-span-8 col-span-1">
                    {posts.map((post:any, index:any) => (
                        <PostCard key={index} post={post.node} />
                    ))}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}


//NextJS way to fetch data
export const getServerSideProps: GetServerSideProps = async (
    context
) => {
    const posts = await getPosts();
    return {
        props: {posts}
    }
}

export default Blog


