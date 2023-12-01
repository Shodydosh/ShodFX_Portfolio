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

function Project5(params) {
    const heroData = getPortfolioItem('nata');
    return (
        <Layout>
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
                                <strong>Composers</strong> EREN, TAKI
                            </li>
                            <li className="p-relative">
                                <strong>Song Producer</strong> SHI
                            </li>
                            <li className="p-relative">
                                <strong>Visualizer</strong> SHOD NGUYEN
                            </li>
                            <li className="p-relative">
                                <strong>Mixing & Mastering</strong> VCC TEDDY
                            </li>
                            <li className="p-relative">
                                <strong>Published</strong> September 6th 2023
                            </li>
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            @sushimjn - NATA (feat. @taki.0_ & @shi.originals)
                            <br/>
                            Visualizer: @shod.fx 
                            <br/>
                            Mixing & Mastering: @vcc.teddyxz 
                        </p>
                        <div className="intro-project-cat mt-30">
                            <span className="cat-item">automotive</span>
                            <span className="cat-item">car</span>
                            <span className="cat-item">Photography</span>
                        </div>
                        <ButtonProject
                            href="https://www.youtube.com/watch?v=YtfoWl_OxLY"
                            target="_blank"
                            className="mt-30"
                        >
                            VIST PROJECT
                        </ButtonProject>
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project*/}

            <BoxGallery className="section-margin container" col={2}>
                <BoxGalleryItem
                    src="/img/old_projects/nata/FINAL.png"
                    groupPopup="gallery"
                />
                <BoxGalleryItem
                    src="/img/old_projects/nata/outnow.jpg"
                    groupPopup="gallery"
                />
            </BoxGallery>
            <BoxGallery className="section-margin container" col={2}>
                <BoxGalleryItem
                    src="/img/old_projects/nata/1.jpg"
                    groupPopup="gallery"
                />
                <BoxGalleryItem
                    src="/img/old_projects/nata/3.jpg"
                    groupPopup="gallery"
                />
            </BoxGallery>

            {/*Start Parallax Img*/}
            <ParallaxImage
                alt={""}
                src={"/img/old_projects/nata.jpg"}
                caption="NATA"
            />
            {/*End Parallax Img*/}


        </Layout>
    );
}

export default Project5;