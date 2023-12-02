import React from "react";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../components/hero-section/HeroSection";
import TitleSection from "../components/heading/TitleSection";
import ServiceOne from "../components/services/grid/ServiceOne";
import ParallaxImage from "../components/Image/ParallaxImage";
import MoveBox from "../components/move-box/MoveBox";
import Button from "../components/button/Button";
import PortfolioSwiper from "../components/portfolio/PortfolioSwiper";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import Testimonial from "../components/testimonial/Testimonial";
import Accordion, {AccordionItem} from "../components/accordion/Accordion";
import DsnGrid from "../layout/DsnGrid";
import TitleCover from "../components/heading/TitleCover";
import BlogSwiper from "../components/bolg/BlogSwiper";
import Team from "../components/Team/Team";
import BrandClient from "../components/brand-client/BrandClient";

import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";


function Home() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>Home | Shod Nguyen</title>
            </Head>
            <SliderPortfolio
                webgel
                fullWidth
                className={"align-items-end pb-80"}
                webgelOptions={{
                    displacement: "/img/displacement/8.jpg",
                    speedIn: 3.5,
                }}
                metaData={{hasSeparator: true}}
            />
            <HeroSection className="container section-margin container fill-right-container"
                         data-dsn-title="Who is Shod"/>

            {/*Start Service*/}
            <div className="container section-margin" data-dsn-title="My Services">
                <TitleSection
                    className="align-items-center text-center"
                    description={"My Services"}
                >
                    I specialize in bringing client visions  <br/> into tangible, realized outcomes.
                </TitleSection>
                <ServiceOne/>
            </div>
            {/*End Service*/}

            {/*Start Box Info Move Content*/}
            <div className="p-relative section-margin">
                <ParallaxImage src="/img/thumbnail/black.jpg" overlay={2} alt={""}/>
                <MoveBox tablet={false}>
                    <TitleSection
                        className={`align-items-start mb-30`}
                        description={"SHOD NGUYEN"}
                        defaultSpace={false}
                    >
                        My works
                    </TitleSection>

                    <p className="mb-10">
                        I believe in a collaborative partnership, where your insights and feedback play a crucial role in shaping the final outcome. 
                    </p>
                    <p className="mb-30">
                        Your satisfaction is my priority, and I am committed to refining the design until it aligns seamlessly with your vision.
                    </p>

                    <Button href={"work-classic-2-col"} className={"image-zoom"} data-dsn="parallax" transitionPage={{title:"My works"}}>
                        My Projects <span>⟶</span>
                    </Button>

                    <p className={`sm-p mt-15 theme-color`}>
                        NOTE : Some details are very important.
                    </p>
                </MoveBox>
            </div>
            {/*End Box Info Move Content*/}


            {/*Start Portfolio*/}
            <div className="section-margin" data-dsn-title="My Portfolio">
                <TitleSection
                    className={`container align-items-center text-center`}
                    description={"My Works"}
                >
                    Creative Portfolio <br/>
                    Designs
                </TitleSection>
                <PortfolioSwiper
                    grabCursor
                    desktop={{spaceBetween: 50, slidesPerView: 1.5}}
                    tablet={{spaceBetween: 0, slidesPerView: 1.3}}
                    mobile={{slidesPerView: 1}}
                    stylePortfolio="work-section"
                    className="text-left v-dark-head title-inherit h4"
                    centeredSlides
                    loop
                    blur
                    parallax
                    speed={1200}
                    watchSlidesProgress
                    loopedSlides={2}
                    parallaxImage={{"data-swiper-parallax-scale": "0.85"}}
                    parallaxContent={{"data-swiper-parallax-opacity": "0"}}
                >
                    <SwiperPagination
                        className={`justify-content-between dsn-container mt-30`}
                    />
                </PortfolioSwiper>
            </div>
            {/*End Portfolio*/}

            {/* Testimonial */}
            {/*Start testimonial Section*/}
            {/* <div className="section-margin" data-dsn-title="Testimonials">
                <Testimonial className="container section-margin" title="Feedback from our clients."
                             skin={["testimonials-half"]}
                             backgroundColor={"background-section"}
                             desktop={{slidesPerView: 2}}
                             mobile={{slidesPerView: 1}}
                             speed={1000} grabCursor loop loopedSlides={2}
                             parallax parallaxImage={{"data-swiper-parallax-scale": 0.7}}
                             parallaxContent={{"data-swiper-parallax-opacity": 0, "data-swiper-parallax": "30%"}}
                >
                    <SwiperPagination className={`justify-content-between dsn-container mt-30`}/>
                </Testimonial>
            </div> */}


            {/*End testimonial Section*/}

            {/*Start box vertical Section*/}
            {/* <section className="box-gallery-vertical container section-margin" data-dsn-title="Our Services">
                <DsnGrid col={2} colTablet={1} colGap={0} rowGap={0} rowGapTablet={0} rowGapMobile={0}>
                    <div className="p-relative mb-lg-section">
                        <div className="box-im w-100 h-100 p-absolute">
                            <ParallaxImage
                                alt={""}
                                src={"/img/plan-project.jpg"}
                                overlay={3}
                                height="100%"
                                heightTable={"70vh"}
                                heightMobile={"70vh"}
                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
                            />
                        </div>
                    </div>
                    <div className="p-relative pt-lg-section">
                        <div className="box-info h-100 box-padding background-section ">
                            <DsnGrid className="box-info-inner" col={1} colGap={0}>
                                <TitleCover>Shod.fx</TitleCover>
                                <TitleSection
                                    className={"text-uppercase"}
                                    description={"OUR PURPOSE"}
                                    defaultSpace={false}
                                >
                                    We Plan Your Project
                                </TitleSection>
                                <Accordion>
                                    <AccordionItem title="Extensive Employment" active number={1}>
                                        <p>
                                            Quisque placerat vitae lacus ut sceleris queusce luctus
                                            odio ac nibh luctus, in porttitor.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem title="Dedicated Staff" number={2}>
                                        <p>
                                            Quisque placerat vitae lacus ut sceleris queusce luctus
                                            odio ac nibh luctus, in porttitor.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem title="User Experience" number={3}>
                                        <p>
                                            Cepteur sint occaecat cupidatat proident, taken possession
                                            of my entire soul, like these sweet mornings of spring
                                            which I enjoy with my whole.
                                        </p>
                                    </AccordionItem>
                                </Accordion>
                            </DsnGrid>
                        </div>
                    </div>
                </DsnGrid>
            </section> */}
            {/*End box vertical Section*/}

            {/*========== team Section ========== */}
            {/* <section className="container section-margin " data-dsn-title="Our Team">
                <TitleSection
                    className={` align-items-center text-center`}
                    description={"Our Team"}
                >
                    The Best Team Ever!
                </TitleSection>

                <Team col={3} colTablet={2}/>
            </section> */}
            {/*========== End team Section ========== */}

            {/*========== End brand-client Section ==========*/}
            {/* <section className="container section-margin" data-dsn-title="our clients">
                <TitleSection
                    className={`align-items-center text-center`}
                    description={"Our clients"}
                >
                    Your successful, our <br/>
                    reputation
                </TitleSection>

                <BrandClient col={4} colTablet={3} colMobile={2} colGap={0} rowGap={0}/>
            </section> */}
            {/*========== End brand-client Section ==========*/}

            {/*========== Next Page ==========*/}
            <NextPage className="section-padding border-top background-section"/>
            {/*========== End Next Page ==========*/}

            {/*========== Footer ==========*/}
            <Footer className="background-section"/>
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Home;
