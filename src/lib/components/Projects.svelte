<script lang="ts">
    import { Code, GitFork, Play, Star } from "lucide-svelte";
    import Tags from "$lib/components/Tags.svelte";
    import Outlined from "$lib/components/Outlined.svelte";

    export let projects: {
        title: string,
        description: string,
        languages: string[],
        repo: null | {
            forks: number,
            stars: number,
            link: string,
        },
        website: string | null
    }[];

    function project_links(project: typeof projects[number]) {
        return [
            {
                Icon: Code,
                link: project.repo?.link || null,
                text: "View source"
            },
            {
                Icon: Play,
                link: project.website || null,
                text: "Visit"
            },
        ]
            .filter(({ link }) => link !== null);
    }
</script>

<div id="container">
    {#each projects as project}
        <div>
            <Outlined>
                <div class="project">
                    <div class="header">
                        <h4>{project.title}</h4>

                        {#if project.repo !== null}
                            <div class="repo_details">
                                <Star />
                                <p>{project.repo.stars}</p>
                                <GitFork />
                                <p>{project.repo.forks}</p>
                            </div>
                        {/if}
                    </div>

                    <Tags tags={project.languages} />

                    <p>{project.description}</p>

                    <div class="buttons">
                        {#each project_links(project) as { Icon, link, text }}
                            <a href={link} >
                                <div class="button">
                                    <Icon />

                                    <p>{text}</p>
                                </div>
                            </a>
                        {/each}
                    </div>
                </div>
            </Outlined>
        </div>
    {/each}
</div>

<style>
    #container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
    }

    #container > * {
        min-width: 400px;
        width: fit-content;
        flex-grow: 1;

        transition: transform var(--transition);

        position: relative;
    }

    #container > *:hover {
        transform: scale(1.025);
    }

    .project {
        padding: 30px;
        
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .repo_details {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .repo_details > p:not(:last-child) {
        margin-right: 15px;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        color: var(--grey);

        width: fit-content;
        padding: 5px 15px;

        font-weight: bold;

        border: 1px solid var(--grey);
        border-radius: 10px;

        transition: color var(--transition), border-color var(--transition);
    }
    a {
        text-decoration: none;
    }
    .button:hover {
        color: var(--light);
        border-color: var(--grey);
    }
</style>