<script lang="ts" context="module">
    const icon_map = {
        github: Github,
        twitter: Twitter,
        email: Mail
    } as const;

    export type IconName = keyof typeof icon_map;
    export type IconMap = { icon_name: IconName, link: string }[];
</script>

<script lang="ts">
    import { Github, Twitter, Mail } from "lucide-svelte";

    export let icons: IconMap;
</script>

<div id="container">
    {#each icons as { icon_name, link }}
        {@const Icon = icon_map[icon_name]}

        <a href={link} aria-label={icon_name}>
            <div class="icon">
                <Icon />
            </div>
        </a>
    {/each}
</div>

<style>
    #container {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .icon {
        color: var(--light);
        transition: color var(--transition);
        cursor: pointer;
    }
    .icon:hover {
        color: var(--primary);
    }
</style>
