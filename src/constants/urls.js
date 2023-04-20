const baseURL = 'https://jsonplaceholder.typicode.com'
const posts= '/posts'


const urls ={
    posts: {
        all:posts,
        getById:(id)=>`${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}