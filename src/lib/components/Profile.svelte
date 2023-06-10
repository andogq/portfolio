<script lang="ts">
    export let src: string;
</script>

<div id="container">
    <img id="profile" {src} alt="Profile" />
</div>

<style>
    #container {
        --size: 200px;

        overflow: hidden;

        height: var(--size);
        width: var(--size);

        padding: 0 1px 1px;

        background: var(--primary);

        box-shadow: 0px 2px 10px rgba(254,163,29,0.3), 0px 0px 50px rgba(237,244,255,0.2);
    }

    #container, #container > * {
        border-radius: 50%;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>
