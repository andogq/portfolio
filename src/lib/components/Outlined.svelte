<script lang="ts">
    export let border_radius: string = "var(--border-radius)";
    export let height: string | null = null;
</script>

<div
    id="container"
    style:--outlined-border-radius={border_radius}
    style:height={height ?? ""}
>
    <div id="inner">
        <slot />
    </div>
</div>

<style>
    #container {
        padding: 1px;

        background: rgb(42,48,65);
        background: linear-gradient(0deg, rgba(42,48,65,1) 0%, rgba(113,130,160,1) 100%);

        border-radius: var(--outlined-border-radius);
    }

    #inner {
        height: 100%;
        width: 100%;

        background: rgb(44,50,66);
        background: linear-gradient(0deg, rgba(44,50,66,1) 0%, rgba(41,47,62,1) 100%);

        border-radius: var(--outlined-border-radius);
    }
</style>
