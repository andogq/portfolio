import type { Blurb } from "$lib/types/blurb";
import type { Post } from "$lib/types/post";
import type { Profile } from "$lib/types/profile";
import type { Project } from "$lib/types/project";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    let [profile, projects, blurb, posts] = await Promise.all([
        "user/github/profile/andogq",
        "projects/github/repo_topics/andogq",
        "blurb/github/readme/andogq",
        "posts/github/issues/andogq"
    ].map((path) =>
          fetch(`https://api.ando.gq/api/${path}`)
              .then((response) => response.json())
    )) as [Profile, Project[], Blurb, Post[]];

    return { profile, projects, blurb, posts };
}
