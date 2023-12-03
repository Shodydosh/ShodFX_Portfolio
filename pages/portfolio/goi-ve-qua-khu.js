import BoxGallery, {
    BoxGalleryItem,
} from "../../components/box-gallery/BoxGallery";
import ButtonProject from "../../components/button/ButtonProject";
import ParallaxImage from "../../components/Image/ParallaxImage";
import DsnGrid from "../../layout/DsnGrid";
import Layout from "../../layout/Layout";
import {getPortfolioItem} from "../../data/portfolio";
import HeaderFull from "../../components/header/HeaderFull";
import NextProject from "../../components/next/NextProject";
import Head from "next/head";

function Project5(params) {
    const heroData = getPortfolioItem('goi-ve-qua-khu');
    return (
        <Layout>
            <Head>
                <title>Portfolio | GOI VE QUA KHU </title>
            </Head>
            <HeaderFull className="dsn-container"
                        alignItems="end"
                        heroContent={heroData} overlay={heroData.overlay}/>

            {/*Start Intro Project*/}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{desktop:"40% 60%"}}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        <ul className="intro-project-list">
                            <li className="p-relative">
                                <strong>Singer</strong>DA/MD
                            </li>
                            <li className="p-relative">
                                <strong>Visualizer</strong>SHOD NGUYEN
                            </li>
                            <li className="p-relative">
                                <strong>Published</strong> November 23rd 2023
                            </li>
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            New single “Gọi về quá khứ”
                            Visual by @shod.fx 🦋
                        </p>
                        <div className="intro-project-cat mt-30">
                            <span className="cat-item">3D environment</span>
                            <span className="cat-item">Graphic design</span>
                            <span className="cat-item">Visualizer</span>
                        </div>
                        <ButtonProject
                            href="https://www.youtube.com/watch?v=QFAKEeF8sy8"
                            target="_blank"
                            className="mt-30"
                        >
                            VISIT PROJECT
                        </ButtonProject>
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project*/}

            {/*Start Gallery List*/}
            <BoxGallery className="section-margin container" col={2}>
                <BoxGalleryItem
                    src="/img/old_projects/goivequakhu/square_aw.jpg"
                    groupPopup="gallery"
                />
                <BoxGalleryItem
                    src="/img/old_projects/goivequakhu/square_blank.jpg"
                    groupPopup="gallery"
                />
            </BoxGallery>
            {/*End Gallery List*/}

            {/*Start Parallax Img*/}
            <ParallaxImage
                alt={""}
                src={"/img/old_projects/gvqk.jpg"}
                caption="GOI VE QUA KHU"
            />
            {/*End Parallax Img*/}
        </Layout>
    );
}

export default Project5;