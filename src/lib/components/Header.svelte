<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import type { Profile as ProfileData } from "$lib/types/profile";
    import Icons, { type IconMap } from "$lib/components/Icons.svelte";
    import Outlined from "$lib/components/Outlined.svelte";

    export let profile: ProfileData;

    $: icons = [
        { icon_name: "github", link: profile.links["github"] },
        { icon_name: "twitter", link: profile.links["twitter"] },
        { icon_name: "email", link: `mailto:${profile.email}` },
    ] as IconMap;
</script>

<div id="container">
    <Outlined border_radius="30px">
        <div id="inner">
            <Profile src={profile.avatar}/>

            <h1 id="name">{profile.name}</h1>

            <p id="bio">{profile.bio}</p>

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

    #name, #bio {
        text-align: center;
    }
</style>
