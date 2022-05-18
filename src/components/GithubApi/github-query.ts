export interface CommitArrayData {
    data: RepoDataProp[];
}

export interface RepoDataProp {
    name?: string;
    commit?: CommitDataProp;
}

export interface CommitDataProp {
    commit: CommitMessageProp;
}

export interface CommitMessageProp {
    message: string;
}

export interface RepositoryUrlData {
    url: string;
}
