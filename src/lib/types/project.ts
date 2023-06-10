export type Project = {
    name: string,
    description?: string,
    url?: string,
    repo?: {
        url: string,
        stars: number,
        forks: number,
        watchers: number,
        issues: number,
    },
    tags: string[],
    languages?: string[]
}
