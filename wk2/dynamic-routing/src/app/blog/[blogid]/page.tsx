export default function BlogDetails({ params }: {
    params: {blogid: string};
}) {
    return <h1>Blog Details {params.blogid}</h1>
}
