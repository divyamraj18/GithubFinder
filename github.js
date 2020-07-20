class Github{
    constructor(){
        this.client_id='11a0bddd1526cd12096b';
        this.client_secret='cd8f06a84bb818d0c44f19abebf1551891acaa8c';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();
        const repos=await repoResponse.json();
        return {
            profile,
            repos
        }
    }
    
}