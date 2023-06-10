<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Posts from "$lib/components/Posts.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    const posts = [
        { title: "Hello This is a Test", date: new Date("2022-07-26T19:15:00Z"), tags: ["bug", "invalid"] },
        { title: "Writing a Generic Profile API in Rust", date: new Date("2023-05-31T03:14:00Z"), tags: ["web", "api", "rust"] },
        { title: "How I Built a Million Dollar Startup", date: new Date("2023-08-02T18:28:00Z"), tags: ["money", "stevent"] },
    ];
</script>

<Header profile={data.profile} />

<div id="content">
    <h2 class="underline">About Me</h2>

    <p>
        I'm currently studying a Bachelor of Engineering (Computer and Network)/Bachelor of Computer Science at RMIT, and am working as a Technology Associate at Commonwealth Bank.
    </p>
    <p>
        I really enjoy working with Rust and Svelte when I can get away with it, although I will be happy enough in JavaScript land (TypeScript, JavaScript, NodeJS, and begrudgingly React). If you really twist my arm I can also work with Java, Python and C/C++.
    </p>
    <p>
        When I'm not working you can find me playing the violin and running!
    </p>

    <h2 class="underline">What I'm Writing</h2>

    <div>
        <Posts {posts} />
    </div>

    <h2 class="underline">What I'm Working On</h2>

    <div>
        <Projects projects={data.projects} />
    </div>
</div>

<style>
    #content {
        max-width: 1000px;

        padding: 0 5rem;
        margin: 5vh auto;
    }

    #content > *:not(:last-child) {
        padding-bottom: 2rem;
    }
</style>
