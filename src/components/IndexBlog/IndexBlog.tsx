import React, { useEffect, useState } from 'react'
import './IndexBlog.css';
import Footer from '../Footer/Footer';
import ShortenText from '../../utils/ShortenText';
import ToText from '../../utils/ToText';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import blogicon from '../../assets/blogicon.png';
import { getIndexxMediumBlogs } from '../../services/api';
export interface posts {
    pubDate: string;
    title: string;
    thumbnail: string;
    description: string;
    link: string;
    categories: [];
}


export interface apiPosts {
    id: string;
    tags: string[];
    claps: number;
    last_modified_at: Date;
    published_at: Date;
    url: string;
    image_url: string;
    lang: string;
    publication_id: string;
    word_count: number;
    title: string;
    reading_time: number;
    responses_count: number;
    voters: number;
    topics: string[];
    author: string;
    subtitle: string;
}

export const IndexBlog = () => {
    const [itemRows1, setItemRows1] = useState<apiPosts[]>([]);
    const [loadings, setLoadings] = useState<boolean>(true);



    const onClickHandler = (path: any) => {
        window.open(`${path}`);
    };


    useEffect(() => {
        getIndexxMediumBlogs().then((res) => {
            setItemRows1(res);
            setLoadings(false);
        });

    }, []);

    return (
        <>
            <div style={loadings ? { paddingTop: "130px" } : {}}>
                <div className=' blog_container container' style={{ paddingBottom: 200 }}>
                    <div className="margin-t-2x blog_container_header">

                        <div className='row'>
                            <div className='col'>

                                <img src={blogicon} alt="blogicon"></img>
                            </div>
                            <div className='col'>

                                <p className='font_60x' style={{ marginLeft: -580, marginTop: -10 }}>Blog</p>
                            </div>
                        </div>





                    </div>
                    <div className="margin-t-2x blog_container_main" >
                        {
                            loadings ? <LoadingSpinner /> :
                                itemRows1?.[0] &&
                                <div className='d-flex flex-justify-between margin-b-5x padding-b-3x row' onClick={() => onClickHandler(itemRows1[0]?.url)} key={itemRows1?.[0].id}>
                                    <div className='blog_flipicon_image  col-lg-8 col-md-12'><img src={itemRows1[0]?.image_url} alt="personFlipCoin" className='w-100' /></div>
                                    <div className='blog_flipicon_image_content col-lg-4 col-md-12'>
                                        <p className='font_40x padding-b-2x'>{itemRows1[0]?.title}</p>
                                        <p className='font_23x'>  {ShortenText(ToText(itemRows1[0]?.subtitle), 0, 120) + "..."}</p>
                                    </div>
                                </div>
                        }
                        <div className='d-flex flex-justify-between flex-wrap row blog_Responsive gapleft' >
                            {itemRows1?.length > 1 &&
                                itemRows1?.map((post, index) => {
                                    if (index === 0) return "";
                                    return <div className=' border-1x margin-b-2x col-lg-6 col-md-12 col-sm-12 padding-0' onClick={() => onClickHandler(post?.url)} key={post?.id}>
                                        <img src={post?.image_url} alt="IndexPreSaleIcon" className='width-100 ' />
                                        <p className='font_40x padding-lr-2x padding-t-1x'>{ShortenText(ToText(post?.title), 0, 50) + "..."}</p>
                                        <p className='font_23x padding-lr-2x margin-t-2x margin-b-3x '> {ShortenText(ToText(post.subtitle), 0, 120) + "..."}</p>
                                        <span className='font_20x text-center d-block padding-b-1x'>{new Date(post?.published_at).toDateString()} - 2 min read</span>
                                    </div>;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br /> <br /> <br /> <br /> <br /><br /> <br />
            <Footer />
        </>
    )
}

export default IndexBlog;
