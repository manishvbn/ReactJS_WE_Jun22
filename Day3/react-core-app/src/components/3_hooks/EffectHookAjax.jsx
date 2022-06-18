// import React, { useEffect, useState } from 'react';
// import postApiClient from '../../services/post-api-client';
// import DataTable from '../common/DataTable';
// import LoaderAnimation from '../common/LoaderAnimation';

// const EffectHookAjax = () => {
//     const [posts, setPosts] = useState([]);
//     const [message, setMessage] = useState('Loading Data, please wait...');
//     const [flag, setFlag] = useState(false);

//     useEffect(() => {
//         postApiClient.getAllPosts().then(data => {
//             setPosts(data);
//             setMessage("");
//             setFlag(true);
//         }).catch(eMsg => {
//             setMessage(eMsg);
//             setFlag(true);
//         });
//     }, []);

//     return (
//         <>
//             <div className="row mt-5">
//                 <h4 className="text-warning text-center text-uppercase font-weight-bold">{message}</h4>
//             </div>

//             {
//                 !flag ? <LoaderAnimation /> : null
//             }

//             <DataTable items={posts}>
//                 <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
//             </DataTable>
//         </>
//     );
// };

// export default EffectHookAjax;

// ---------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import postApiClient from '../../services/post-api-client';
// import DataTable from '../common/DataTable';
// import LoaderAnimation from '../common/LoaderAnimation';

// const EffectHookAjax = () => {
//     const [data, setData] = useState({ posts: [], message: "Loading Data, please wait...", flag: false });

//     useEffect(() => {
//         postApiClient.getAllPosts().then(data => {
//             setData({ posts: [...data], message: "", flag: true });
//         }).catch(eMsg => {
//             setData({ posts: [], message: eMsg, flag: true });
//         });
//     }, []);

//     return (
//         <>
//             <div className="row mt-5">
//                 <h4 className="text-warning text-center text-uppercase font-weight-bold">{data.message}</h4>
//             </div>

//             {
//                 !data.flag ? <LoaderAnimation /> : null
//             }

//             <DataTable items={data.posts}>
//                 <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
//             </DataTable>
//         </>
//     );
// };

// export default EffectHookAjax;

// --------------------------------------------------------- async await

import React, { useEffect, useState } from 'react';
import postApiClient from '../../services/post-api-client';
import DataTable from '../common/DataTable';
import LoaderAnimation from '../common/LoaderAnimation';

const EffectHookAjax = () => {
    const [data, setData] = useState({ posts: [], message: "Loading Data, please wait...", flag: false });

    // useEffect(async() => {
    //     try {
    //         let posts_data = await postApiClient.getAllPosts();
    //         setData({ posts: [...posts_data], message: "", flag: true });
    //     } catch(eMsg) {
    //         setData({ posts: [], message: eMsg, flag: true });
    //     }
    // }, []);

    useEffect(async() => {
        try {
            let posts_data = await postApiClient.getAllPostsAsync();
            setData({ posts: [...posts_data], message: "", flag: true });
        } catch(eMsg) {
            setData({ posts: [], message: eMsg, flag: true });
        }
    }, []);

    return (
        <>
            <div className="row mt-5">
                <h4 className="text-warning text-center text-uppercase font-weight-bold">{data.message}</h4>
            </div>

            {
                !data.flag ? <LoaderAnimation /> : null
            }

            <DataTable items={data.posts}>
                <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
            </DataTable>
        </>
    );
};

export default EffectHookAjax;