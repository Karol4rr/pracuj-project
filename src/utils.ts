import axios from "axios";

async function fetchFromAPI(baseUrl: string, boundRoute: string) {
    return await axios.get(`${baseUrl}${boundRoute}`);
}

export const fetchUser = (nick: string) => fetchFromAPI("https://api.github.com/", `users/${nick}`);

export const fetchUsersRepos = (nick: string) =>
    fetchFromAPI("https://api.github.com/", `users/${nick}/repos?per_page=5&sort=updated`);

export const fetchCommits = (baseUrl: string) => fetchFromAPI(baseUrl, "/commits?per_page=5");
