import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./github-api.scss";
import Spinner from "../Spinner/Spinner";
import { fetchUser, fetchUsersRepos, fetchCommits } from "../../utils";
import { CommitArrayData, CommitDataProp, RepoDataProp, RepositoryUrlData } from "./github-query";

const GithubApi = () => {
    const [userData, setUserData] = useState<any>();
    const [repos, setRepos] = useState<any>();
    const [commits, setCommits] = useState<any>([]);
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [githubNick, setGithubNick] = useState<string>("");

    useEffect(() => {
        if (repos) {
            fetchCommitData();
        }
    }, [repos]);

    const handleChange = (event: any) => {
        setGithubNick(event.target.value);
    };

    const fetchCommitData = async () => {
        const commitArray: CommitArrayData[] = [];
        const commits = await Promise.all(repos.map((repo: RepositoryUrlData) => fetchCommits(repo.url)));
        commits.map(({ data }: any) => commitArray.push(data));
        setIsLoading(false);
        setCommits(commitArray);
    };

    const handleSecondClick = () => {
        setError("");
        if (githubNick) {
            setIsLoading(true);
            fetchUser(githubNick)
                .then(({ data }) => {
                    setUserData(data);
                    return fetchUsersRepos(data.login);
                })
                .then(({ data }) => {
                    setRepos(data);
                })
                .catch((error) => {
                    setUserData(null);
                    setIsLoading(false);
                    setError("Nie mogliśmy znaleźć użytkownika :(");
                });
        }
    };

    return (
        <div className="github__section">
            <div className="github__section_input">
                <TextField
                    id="outlined-basic"
                    label="Nazwa Github"
                    variant="outlined"
                    value={githubNick}
                    onChange={handleChange}
                    size="small"
                    sx={{ mr: 1 }}
                />
                <Button variant="contained" onClick={handleSecondClick}>
                    Wyszukaj
                </Button>
            </div>

            {userData && !error ? (
                <div className="github__section_results">
                    <div className="github__section_user">
                        <div className="github__section_user_data">
                            <img
                                className="github__section_user_data_avatar"
                                src={userData.avatar_url}
                                alt="profile_img"
                            />
                            <p className="github__section_user_data_login">{userData.login}</p>
                        </div>
                    </div>
                    {repos && !isLoading ? (
                        <div className="github__section_repos">
                            {repos.map((repo: RepoDataProp, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <p className="github__section_repos_repo-name">{`${index + 1}. ${
                                            repo.name
                                        }`}</p>
                                        {commits[index]
                                            ? commits[index].map((commit: CommitDataProp, idx: number) => {
                                                  return (
                                                      <p className="github__section_repos_repo-commit" key={idx}>
                                                          - {commit?.commit?.message}
                                                      </p>
                                                  );
                                              })
                                            : null}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    ) : null}
                </div>
            ) : error ? (
                <div className="github__section_results">
                    <p>{error}</p>
                </div>
            ) : null}
            {isLoading ? <Spinner /> : null}
        </div>
    );
};

export default GithubApi;
