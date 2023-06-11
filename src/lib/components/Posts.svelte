<script lang="ts">
    import Tags from "$lib/components/Tags.svelte";

    export let posts: { title: string, date: Date, tags: string[] }[];
</script>

<div id="container">
    {#each posts as { title, date, tags }, i}
        <div class="post">
            <h3 class="post_number">{i.toLocaleString("default", { minimumIntegerDigits: 2 })}</h3>
            <p class="title">{title}</p>

            <div class="details">
                <p class="date">{date.toLocaleString()}</p>
                <div class="tags">
                    <Tags {tags}/>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    #container {
        display: flex;
        flex-direction: column-reverse;
        gap: 20px;
    }

    .post {
        background: var(--background);
        border-radius: var(--border-radius);
        overflow: hidden;
        padding: 20px;

        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto 1fr;
        column-gap: 1rem;

        align-items: center;
    }

    .post_number {
        grid-area: 1 / 1 / 3 / 2;

        font-size: 2rem;
        font-weight: bold;
    }

    .title {
        grid-area: 1 / 2 / 2 / 3;

        font-size: 1rem;
        font-weight: bold;
    }

    .details {
        grid-area: 2 / 2 / 3 / 3;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.5rem;
    }

    .date {
        font-size: 1rem;
        color: var(--grey);
    }
</style>
