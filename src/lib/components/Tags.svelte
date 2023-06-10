<script lang="ts">
    export let tags: string[];
</script>

<div id="tags">
    {#each tags as tag}
        <p class="tag">{tag}</p>
    {/each}
</div>

<style>
    #tags {
        display: flex;
        flex-direction: row;

        gap: 10px;
    }

    .tag {
        background: var(--primary);
        color: var(--background);

        border-radius: 20px;
        padding: 0 10px;

        font-size: 0.9rem;
        height: 1.2rem;
    }
</style>
