import type { Profile } from "$lib/types/profile";
import type { Project } from "$lib/types/project";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    let [profile, projects] = await Promise.all([
        "user/github/profile/andogq",
        "projects/github/repo_topics/andogq"
    ].map((path) =>
          fetch(`https://api.ando.gq/api/${path}`)
              .then((response) => response.json())
    )) as [Profile, Project[]];

    return { profile, projects };
}
