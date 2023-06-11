<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Posts from "$lib/components/Posts.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<Header profile={data.profile} />

<div id="content">
    <h2 class="underline">About Me</h2>

    <div>
        {@html data.blurb.blurb}
    </div>

    <h2 class="underline">What I'm Working On</h2>

    <div>
        <Projects projects={data.projects} />
    </div>

    {#if data.posts.length > 0}
        <h2 class="underline">What I'm Writing</h2>

        <div>
            <Posts posts={data.posts} />
        </div>
    {/if}
</div>

<style>
    #content {
        max-width: 1000px;

        padding: 0 5rem;
        margin: 5vh auto;
    }

    @media (max-width: 500px) {
        #content {
            padding: 0 10vw;
        }
    }

    #content > *:not(:last-child) {
        padding-bottom: 2rem;
    }
</style>
