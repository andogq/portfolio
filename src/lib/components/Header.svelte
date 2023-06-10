<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import Icons, { type IconMap } from "$lib/components/Icons.svelte";
    import Outlined from "$lib/components/Outlined.svelte";

    const icons: IconMap = [
        { icon_name: "github", link: "https://github.com/andogq" },
        { icon_name: "twitter", link: "https://twitter.com/andogq" },
        { icon_name: "email", link: "mailto:tom@ando.gq" },
    ];
</script>

<div id="container">
    <Outlined border_radius="30px">
        <div id="inner">
            <Profile src="https://avatars.githubusercontent.com/u/63131525" />

            <h1 id="name">Tom Anderson</h1>

            <p id="bio">Self-taught programmer and computer science student</p>

            <Icons {icons} />
        </div>
    </Outlined>
</div>

<style>
    #container {
        --padding: 5vh;

        margin: var(--padding);
        max-height: calc(100vh - (2 * var(--padding)));
        width: calc(100vw - (2 * var(--padding)));
    }

    #inner {
        padding: var(--padding);

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 2rem;
    }
</style>
