import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { getDetailMovieDT } from '../../api/action';

const DetailPage = () => {
    const params = useParams();
    console.log(params)

    const fetchData = async () => {
        const result = await getDetailMovieDT(params.title ? params.title : "");
        console.log(result);
        // 줄거리, 출연진, 국가 등 기타 세부 정보

    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            g
        </div>
    );
};

export default DetailPage;