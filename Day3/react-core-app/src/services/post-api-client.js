const url = process.env.REACT_APP_POST_API_URL;

const postApiClient = {
    getAllPosts: function () {
        return new Promise((resolve, reject) => {
            // AJAX Library Code
            fetch(url).then(response => {
                response.json().then(data => {
                    setTimeout(() => {
                        resolve(data);
                    }, 5000);
                }).catch(err => {
                    reject("Parsing Error...");
                })
            }).catch(err => {
                reject("Communication Error...");
            })
        });
    },

    getAllPostsAsync: async function () {
        try {
            let response = await fetch(url);
            let data = await response.json();
            return data;
        } catch (e) {
            throw e;
        }
    }
};

export default postApiClient;