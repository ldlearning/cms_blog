export type Post = {
    title: string;
    excerpt: string;
    slug: string;
    featuredImage: {
        url: string;
    }
}



export const posts = [
    {
        title: 'React Testing', excerpt: 'Learn React Testing'
    },
    {
        title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'
    },

];

export const categories = [
    {
        name: 'React', slug: 'react'
    },
    {
        name: 'Web Development', slug: 'web-dev'
    },

];