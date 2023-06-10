export type Profile = {
    name?: string,
    avatar: string,
    bio?: string,
    location?: string,
    email?: string,
    links: {[key: string]: string},
    blog?: string,
    company?: string
}
