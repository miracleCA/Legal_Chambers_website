import '../Assets/styles/Home.css';
import '../Assets/styles/style.css';
import '../Assets/styles/style-custom.css';
import '../Assets/styles/style-responsive.css';

import img1 from '../Assets/images/dark/social-icon/facebook.png';
import img2 from '../Assets/images/dark/social-icon/flickr.png';
import img3 from "../Assets/images/dark/social-icon/linkedin.png";
import img4 from "../Assets/images/dark/social-icon/pinterest.png";
import img5 from "../Assets/images/dark/social-icon/twitter.png";
import img6 from "../Assets/upload/logo.png";
import img7 from "../Assets/upload/slider-1.jpg";
import img8 from "../Assets/upload/slider-2.jpg";
import img9 from "../Assets/upload/jack-smith.png";
import img10 from "../Assets/upload/photodune-448186-old-law-building-m-400x300.jpg";
import img11 from "../Assets/upload/photodune-824920-bodywork-damage-m-400x300.jpg";
import img12 from "../Assets/upload/Fotolia_39975530_Subscription_Monthly_XXL-400x300.jpg";
import img13 from "../Assets/upload/photodune-10847259-family-sitting-on-sofa-with-parents-arguing-m-400x300.jpg";
import img14 from "../Assets/upload/photodune-3332253-man-working-with-modern-devices-m-400x300.jpg";
import img15 from "../Assets/upload/photodune-3290449-concierges-holding-the-cart-and-posing-m-400x300.jpg";
import img16 from "../Assets/upload/Fotolia_3104144_Subscription_Monthly_XXL-400x300.jpg";
import img17 from "../Assets/upload/photodune-2277503-businessman-in-front-of-bookcase-m-400x300.jpg";
import img18 from "../Assets/upload/testi-hp-3.jpg";
import img19 from "../Assets/upload/testi-hp-2.jpg";
import img20 from "../Assets/upload/testi-hp-1.jpg";
import img21 from "../Assets/upload/attorney-1-400x300.jpg";
import img22 from "../Assets/upload/attorney-2-400x300.jpg";
import img23 from "../Assets/upload/attorney-3-400x300.jpg";
import img24 from "../Assets/upload/attorney-4-400x300.jpg";
import img25 from "../Assets/upload/attorney-5-400x300.jpg";
import img26 from "../Assets/upload/attorney-6-400x300.jpg";
import img27 from "../Assets/upload/attorney-7-400x300.jpg";
import img28 from "../Assets/upload/banner-1.jpg";
import img29 from "../Assets/upload/banner-2.jpg";
import img30 from "../Assets/upload/banner-3.jpg";
import img31 from "../Assets/upload/banner-4.jpg";
import img32 from "../Assets/upload/banner-5.jpg";
import img33 from "../Assets/upload/banner-6.jpg";
import img34 from "../Assets/upload/women-contact.png";

function Home() {

  return (
    <div id='home'>
        <div class="body-wrapper float-menu" data-home="index.html">
            <header class="gdlr-header-wrapper">
                <div class="top-navigation-wrapper">
                    <div class="top-navigation-container container">
                        <div class="top-navigation-right">
                            <div class="top-navigation-right-text">
                                <div class="top-bar-right-text-inner">
                                    <i class="fa fa-envelope-o"></i> <a href="#" class="__cf_email__">test@gmail.com</a>
                                </div>
                                <div class="top-bar-right-text-inner"><i class="fa fa-phone"></i> +1-223-3344-34</div>
                                <div class="top-social-wrapper">
                                    <div class="social-icon">
                                        <a href="#" target="_blank">
                                            <img width="32" height="32" src={{img1}} alt="Facebook"/>
                                        </a>
                                    </div>
                                    <div class="social-icon">
                                        <a href="#" target="_blank">
                                            <img width="32" height="32" src={{img2}} alt="Flickr"/>
                                        </a>
                                    </div>
                                    <div class="social-icon">
                                        <a href="#" target="_blank">
                                            <img width="32" height="32" src={{img3}} alt="Linkedin"/>
                                        </a>
                                    </div>
                                    <div class="social-icon">
                                        <a href="#" target="_blank">
                                            <img width="32" height="32" src={{img4}} alt="Pinterest"/>
                                        </a>
                                    </div>
                                    <div class="social-icon">
                                        <a href="#" target="_blank">
                                            <img width="32" height="32" src={{img5}} alt="Twitter"/>
                                        </a>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>

                <div class="gdlr-header-inner">
                    <div class="gdlr-header-container container">
                        <div class="gdlr-logo">
                            <a href="index.html"> <img src={{img6}} alt="" width="391" height="205"/> </a>
                            <div class="gdlr-responsive-navigation dl-menuwrapper" id="gdlr-responsive-navigation">
                                <button class="dl-trigger">Open Menu</button>

                                <ul id="menu-main-menu" class="dl-menu gdlr-main-mobile-menu">
                                    <li class="menu-item menu-item-home">
                                        <a href="index.html" aria-current="page">Home</a>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="about-us.html">Pages</a>
                                        <ul class="dl-submenu">
                                            <li class="menu-item"><a href="about-us.html">About Us</a></li>
                                            <li class="menu-item"><a href="careers.html">Careers</a></li>
                                            <li class="menu-item"><a href="honors-awards.html">Honors &amp; Awards</a></li>
                                            <li class="menu-item"><a href="qa.html">Q&amp;A</a></li>
                                            <li class="menu-item"><a href="contact-page.html">Contact Page 1</a></li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="portfolio-grid-3-columns-no-space.html">Portfolio</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="portfolio-grid-3-columns.html">Portfolio Classic</a>
                                                        <ul class="dl-submenu">
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-1-column.html">Portfolio Grid 1 Column (Both Sidebar)</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-2-columns.html">Portfolio Grid 2 Columns (Right Sidebar)</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-3-columns.html">Portfolio Grid 3 Columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-4-columns.html">Portfolio Grid 4 Columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-2-columns-no-space.html">Portfolio Grid 2 Columns, No Space</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-3-columns-no-space.html">Portfolio Grid 3 Columns, No Space</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-4-columns-no-space.html">Portfolio Grid 4 Columns, No Space</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="portfolio-modern-3-columns-with-filter.html">Portfolio With Filter</a>
                                                        <ul class="dl-submenu">
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-1-columns-with-filter.html">Portfolio Grid 1 Col With Filter</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-2-columns-with-filter.html">Portfolio Grid 2 Cols With Filter</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-3-columns-with-filter.html">Portfolio Grid 3 Cols With Filter</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-4-columns-with-filter.html">Portfolio Grid 4 Cols With Filter</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="menu-item"><a href="404.html">404 Page</a></li>
                                            <li class="menu-item"><a href="testimonial.html">Testimonial</a></li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="gallery-3-columns-with-caption.html">Gallery</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item">
                                                        <a href="gallery-2-columns-with-caption.html">Gallery 2 Columns With Caption</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="gallery-2-columns-without-caption.html">Gallery 2 Columns Without Caption</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="gallery-3-columns-with-caption.html">Gallery 3 Columns With Caption</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="gallery-3-columns-without-caption.html">Gallery 3 Columns Without Caption</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="gallery-4-columns-with-caption.html">Gallery 4 Columns With Caption</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="gallery-4-columns-without-caption.html">Gallery 4 Columns Without Caption</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="gallery-5-columns-with-caption.html">Gallery 5 Columns With Caption</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="gallery-5-columns-without-caption.html">Gallery 5 Columns Without Caption</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="practice-areas-modern-3-columns.html">Practice Areas</a>
                                        <ul class="dl-submenu">
                                            <li class="menu-item menu-item-has-children">
                                                <a href="practice-areas-modern-3-columns.html">Practice Areas – Modern</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item">
                                                        <a href="practice-areas-modern-1-column.html">Practice Areas – Modern 1 Column</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-modern-2-columns.html">Practice Areas – Modern 2 Columns</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-modern-3-columns.html">Practice Areas – Modern 3 Columns</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-modern-4-columns.html">Practice Areas – Modern 4 Columns</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="practice-areas-classic-3-columns.html">Practice Areas – Classic</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item">
                                                        <a href="practice-areas-classic-1-column.html">Practice Areas – Classic 1 Column</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-classic-2-columns.html">Practice Areas – Classic 2 Columns</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-classic-3-columns.html">Practice Areas – Classic 3 Columns</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-classic-4-columns.html">Practice Areas – Classic 4 Columns</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="practice-areas-3-columns-with-filter.html">Practice Areas – With Filter</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item">
                                                        <a href="practice-areas-2-columns-with-filter.html">Practice Areas – 2 Columns With Filter</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-3-columns-with-filter.html">Practice Areas – 3 Columns With Filter</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-4-columns-with-filter.html">Practice Areas – 4 Columns With Filter</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item"><a href="single-practice.html">Single Practice</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="attorney-4-columns.html">Attorneys</a>
                                        <ul class="dl-submenu">
                                            <li class="menu-item"><a href="attorney-2-columns.html">Attorney 2 Columns</a></li>
                                            <li class="menu-item"><a href="attorney-3-columns.html">Attorney 3 Columns</a></li>
                                            <li class="menu-item"><a href="attorney-4-columns.html">Attorney 4 Columns</a></li>
                                            <li class="menu-item"><a href="attorney-carousel.html">Attorney Carousel</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="blog-full-with-right-sidebar.html">Blog</a>
                                        <ul class="dl-submenu">
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#">Blog Full</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item">
                                                        <a href="blog-full-with-right-sidebar.html">Blog Full With Right Sidebar</a>
                                                    </li>
                                                    <li class="menu-item"><a href="blog-full-with-left-sidebar.html">Blog Full With Left Sidebar</a></li>
                                                    <li class="menu-item"><a href="blog-full-with-both-sidebar.html">Blog Full With Both Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#">Blog Column</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item"><a href="blog-1-column.html">Blog 1 Column (Right Sidebar)</a></li>
                                                    <li class="menu-item"><a href="blog-2-columns.html">Blog 2 Columns (Right Sidebar)</a></li>
                                                    <li class="menu-item"><a href="blog-3-columns.html">Blog 3 Columns</a></li>
                                                    <li class="menu-item"><a href="blog-4-columns.html">Blog 4 Columns</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#">Blog Masonry</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item">
                                                        <a href="blog-2-columns-masonry.html">Blog 2 Columns – Masonry (Right Sidebar)</a>
                                                    </li>
                                                    <li class="menu-item"><a href="blog-3-columns-masonry.html">Blog 3 Columns – Masonry</a></li>
                                                    <li class="menu-item"><a href="blog-4-columns-masonry.html">Blog 4 Columns – Masonry</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="typography.html">Shortcodes</a>
                                        <ul class="dl-submenu">
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#">Shortcode Set 1</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item"><a href="accordiontoggle-box.html">Accordion/Toggle Box</a></li>
                                                    <li class="menu-item"><a href="audio-shortcode.html">Audio Shortcode</a></li>
                                                    <li class="menu-item"><a href="button.html">Button</a></li>
                                                    <li class="menu-item"><a href="column-shortcode.html">Column Shortcode</a></li>
                                                    <li class="menu-item"><a href="divider.html">Divider</a></li>
                                                    <li class="menu-item"><a href="gallery-shortcode.html">Gallery Shortcode</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#">Shortcode Set 2</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item"><a href="heading-tag.html">Heading Tag</a></li>
                                                    <li class="menu-item"><a href="icons-icon-boxes.html">icons &amp; icon boxes</a></li>
                                                    <li class="menu-item"><a href="lightbox-frames.html">Lightbox &amp; Frames</a></li>
                                                    <li class="menu-item"><a href="notification-boxes.html">Notification Boxes</a></li>
                                                    <li class="menu-item"><a href="personnel.html">Personnel</a></li>
                                                    <li class="menu-item"><a href="post-slider.html">Post Slider</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#">Shortcode Set 3</a>
                                                <ul class="dl-submenu">
                                                    <li class="menu-item"><a href="price-table.html">Price Table</a></li>
                                                    <li class="menu-item"><a href="process.html">Process</a></li>
                                                    <li class="menu-item"><a href="progress-circle.html">Progress Circle</a></li>
                                                    <li class="menu-item"><a href="skills.html">Skills</a></li>
                                                    <li class="menu-item"><a href="tabs.html">Tabs</a></li>
                                                    <li class="menu-item"><a href="typography.html">Typography</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="gdlr-navigation-wrapper">
                            <nav class="gdlr-navigation" id="gdlr-main-navigation" role="navigation">
                                <ul id="menu-main-menu-1" class="sf-menu gdlr-main-menu">
                                    <li class="menu-item menu-item-home current-menu-item gdlr-normal-menu">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="menu-item menu-item-has-children-item menu-item-has-children gdlr-normal-menu">
                                        <a href="about-us.html" class="sf-with-ul-pre">Pages</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="about-us.html">About Us</a></li>
                                            <li class="menu-item"><a href="careers.html">Careers</a></li>
                                            <li class="menu-item"><a href="honors-awards.html">Honors &amp; Awards</a></li>
                                            <li class="menu-item"><a href="qa.html">Q&amp;A</a></li>
                                            <li class="menu-item"><a href="contact-page.html">Contact Page 1</a></li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="portfolio-grid-3-columns-no-space.html" class="sf-with-ul-pre">Portfolio</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="portfolio-grid-3-columns.html" class="sf-with-ul-pre">Portfolio Classic</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item"><a href="portfolio-grid-1-column.html">Portfolio Grid 1 Column (Both Sidebar)</a></li>
                                                            <li class="menu-item"><a href="portfolio-grid-2-columns.html">Portfolio Grid 2 Columns (Right Sidebar)</a></li>
                                                            <li class="menu-item"><a href="portfolio-grid-3-columns.html">Portfolio Grid 3 Columns</a></li>
                                                            <li class="menu-item"><a href="portfolio-grid-4-columns.html">Portfolio Grid 4 Columns</a></li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-2-columns-no-space.html">Portfolio Grid 2 Columns, No Space</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-3-columns-no-space.html">Portfolio Grid 3 Columns, No Space</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-4-columns-no-space.html">Portfolio Grid 4 Columns, No Space</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="portfolio-modern-3-columns-with-filter.html" class="sf-with-ul-pre">Portfolio With Filter</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-1-columns-with-filter.html">Portfolio Grid 1 Col With Filter</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-2-columns-with-filter.html">Portfolio Grid 2 Cols With Filter</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-3-columns-with-filter.html">Portfolio Grid 3 Cols With Filter</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio-grid-4-columns-with-filter.html">Portfolio Grid 4 Cols With Filter</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item"><a href="404.html">404 Page</a></li>
                                            <li class="menu-item"><a href="testimonial.html">Testimonial</a></li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="gallery-3-columns-with-caption.html" class="sf-with-ul-pre">Gallery</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item"><a href="gallery-2-columns-with-caption.html">Gallery 2 Columns With Caption</a></li>
                                                    <li class="menu-item"><a href="gallery-2-columns-without-caption.html">Gallery 2 Columns Without Caption</a></li>
                                                    <li class="menu-item"><a href="gallery-3-columns-with-caption.html">Gallery 3 Columns With Caption</a></li>
                                                    <li class="menu-item"><a href="gallery-3-columns-without-caption.html">Gallery 3 Columns Without Caption</a></li>
                                                    <li class="menu-item"><a href="gallery-4-columns-with-caption.html">Gallery 4 Columns With Caption</a></li>
                                                    <li class="menu-item"><a href="gallery-4-columns-without-caption.html">Gallery 4 Columns Without Caption</a></li>
                                                    <li class="menu-item"><a href="gallery-5-columns-with-caption.html">Gallery 5 Columns With Caption</a></li>
                                                    <li class="menu-item"><a href="gallery-5-columns-without-caption.html">Gallery 5 Columns Without Caption</a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children-item menu-item-has-children gdlr-normal-menu">
                                        <a href="practice-areas-modern-3-columns.html" class="sf-with-ul-pre">Practice Areas</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item menu-item-has-children">
                                                <a href="practice-areas-modern-3-columns.html" class="sf-with-ul-pre">Practice Areas – Modern</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item"><a href="practice-areas-modern-1-column.html">Practice Areas – Modern 1 Column</a></li>
                                                    <li class="menu-item"><a href="practice-areas-modern-2-columns.html">Practice Areas – Modern 2 Columns</a></li>
                                                    <li class="menu-item"><a href="practice-areas-modern-3-columns.html">Practice Areas – Modern 3 Columns</a></li>
                                                    <li class="menu-item"><a href="practice-areas-modern-4-columns.html">Practice Areas – Modern 4 Columns</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="practice-areas-classic-3-columns.html" class="sf-with-ul-pre">Practice Areas – Classic</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item"><a href="practice-areas-classic-1-column.html">Practice Areas – Classic 1 Column</a></li>
                                                    <li class="menu-item"><a href="practice-areas-classic-2-columns.html">Practice Areas – Classic 2 Columns</a></li>
                                                    <li class="menu-item"><a href="practice-areas-classic-3-columns.html">Practice Areas – Classic 3 Columns</a></li>
                                                    <li class="menu-item"><a href="practice-areas-classic-4-columns.html">Practice Areas – Classic 4 Columns</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="practice-areas-3-columns-with-filter.html" class="sf-with-ul-pre">Practice Areas – With Filter</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item">
                                                        <a href="practice-areas-2-columns-with-filter.html">Practice Areas – 2 Columns With Filter</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-3-columns-with-filter.html">Practice Areas – 3 Columns With Filter</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="practice-areas-4-columns-with-filter.html">Practice Areas – 4 Columns With Filter</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item"><a href="single-practice.html">Single Practice</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children-item menu-item-has-children gdlr-normal-menu">
                                        <a href="attorney-4-columns.html" class="sf-with-ul-pre">Attorneys</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="attorney-2-columns.html">Attorney 2 Columns</a></li>
                                            <li class="menu-item"><a href="attorney-3-columns.html">Attorney 3 Columns</a></li>
                                            <li class="menu-item"><a href="attorney-4-columns.html">Attorney 4 Columns</a></li>
                                            <li class="menu-item"><a href="attorney-carousel.html">Attorney Carousel</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children-item menu-item-has-children gdlr-mega-menu">
                                        <a href="blog-full-with-right-sidebar.html" class="sf-with-ul-pre">Blog</a>
                                        <div class="sf-mega">
                                            <ul class="sub-menu">
                                                <li class="menu-item menu-item-has-children" data-column="four columns" data-size="1/3">
                                                    <a href="#" class="sf-with-ul-pre">Blog Full</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="blog-full-with-right-sidebar.html">Blog Full With Right Sidebar</a></li>
                                                        <li class="menu-item"><a href="blog-full-with-left-sidebar.html">Blog Full With Left Sidebar</a></li>
                                                        <li class="menu-item"><a href="blog-full-with-both-sidebar.html">Blog Full With Both Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children" data-column="four columns" data-size="1/3">
                                                    <a href="#" class="sf-with-ul-pre">Blog Column</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="blog-1-column.html">Blog 1 Column (Right Sidebar)</a></li>
                                                        <li class="menu-item"><a href="blog-2-columns.html">Blog 2 Columns (Right Sidebar)</a></li>
                                                        <li class="menu-item"><a href="blog-3-columns.html">Blog 3 Columns</a></li>
                                                        <li class="menu-item"><a href="blog-4-columns.html">Blog 4 Columns</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children" data-column="four columns" data-size="1/3">
                                                    <a href="#" class="sf-with-ul-pre">Blog Masonry</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="blog-2-columns-masonry.html">Blog 2 Columns – Masonry (Right Sidebar)</a></li>
                                                        <li class="menu-item"><a href="blog-3-columns-masonry.html">Blog 3 Columns – Masonry</a></li>
                                                        <li class="menu-item"><a href="blog-4-columns-masonry.html">Blog 4 Columns – Masonry</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="menu-item menu-item-has-children-item menu-item-has-children gdlr-mega-menu">
                                        <a href="typography.html" class="sf-with-ul-pre">Shortcodes</a>
                                        <div class="sf-mega">
                                            <ul class="sub-menu">
                                                <li class="menu-item menu-item-has-children" data-column="four columns" data-size="1/3">
                                                    <a href="#" class="sf-with-ul-pre">Shortcode Set 1</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="accordiontoggle-box.html">Accordion/Toggle Box</a></li>
                                                        <li class="menu-item"><a href="audio-shortcode.html">Audio Shortcode</a></li>
                                                        <li class="menu-item"><a href="button.html">Button</a></li>
                                                        <li class="menu-item"><a href="column-shortcode.html">Column Shortcode</a></li>
                                                        <li class="menu-item"><a href="divider.html">Divider</a></li>
                                                        <li class="menu-item"><a href="gallery-shortcode.html">Gallery Shortcode</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children" data-column="four columns" data-size="1/3">
                                                    <a href="#" class="sf-with-ul-pre">Shortcode Set 2</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="heading-tag.html">Heading Tag</a></li>
                                                        <li class="menu-item"><a href="icons-icon-boxes.html">icons &amp; icon boxes</a></li>
                                                        <li class="menu-item"><a href="lightbox-frames.html">Lightbox &amp; Frames</a></li>
                                                        <li class="menu-item"><a href="notification-boxes.html">Notification Boxes</a></li>
                                                        <li class="menu-item"><a href="personnel.html">Personnel</a></li>
                                                        <li class="menu-item"><a href="post-slider.html">Post Slider</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children" data-column="four columns" data-size="1/3">
                                                    <a href="#" class="sf-with-ul-pre">Shortcode Set 3</a>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item"><a href="price-table.html">Price Table</a></li>
                                                        <li class="menu-item"><a href="process.html">Process</a></li>
                                                        <li class="menu-item"><a href="progress-circle.html">Progress Circle</a></li>
                                                        <li class="menu-item"><a href="skills.html">Skills</a></li>
                                                        <li class="menu-item"><a href="tabs.html">Tabs</a></li>
                                                        <li class="menu-item"><a href="typography.html">Typography</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <i class="fa fa-search icon-search gdlr-menu-search-button" id="gdlr-menu-search-button"></i>
                            <div class="gdlr-menu-search" id="gdlr-menu-search">
                                <form method="get" action="index.html">
                                    <div class="search-text">
                                        <input type="text" value="Type Keywords" name="s" autocomplete="off" data-default="Type Keywords"/>
                                    </div>
                                    <input type="submit" value=""/>
                                    <div class="clear"></div>
                                </form>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </header>

            <div id="gdlr-header-substitute"></div>

            <div class="content-wrapper">
            <div class="gdlr-content">
                <div class="with-sidebar-wrapper">
                    <section id="content-section-1">
                        <div class="gdlr-full-size-wrapper gdlr-show-all" id='s4'>
                            <div class="gdlr-master-slider-item gdlr-slider-item gdlr-item" id='s5'>

                                <div id="rev_slider_1_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-source="gallery">
                                    <div id="rev_slider_1_1" class="rev_slider fullwidthabanner" style={{display: 'none'}} data-version="5.4.8.2">
                                        <ul>
                                            <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="upload/slider-1-100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description=""> 
                                                <img src={{img7}} alt="" title="slider-1" width="1800" height="1000" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-no-retina=""/>
                                                <div class="tp-caption tp-resizeme" id="slide-1-layer-1" data-x="center" data-hoffset="" data-y="center" data-voffset="-182" data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                                    Welcome to
                                                </div>
                                                <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme" id="slide-1-layer-3" data-x="center" data-hoffset="" data-y="center" data-voffset="-152" data-width="['103']" data-height="['1']" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"></div>
                                                <div class="tp-caption tp-resizeme" id="slide-1-layer-4" data-x="center" data-hoffset="" data-y="center" data-voffset="-80" data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:310,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                                    Attorna
                                                </div>
                                                <div class="tp-caption tp-resizeme" id="slide-1-layer-5" data-x="center" data-hoffset="" data-y="center" data-voffset="33" data-width="['610']" data-height="['81']" data-visibility="['on','on','off','off']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:530,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                                    We are a leading law firm in financial &amp; business industry. With more than 20 years of experience
                                                </div>
                                                <div class="tp-caption rev-btn rev-withicon" id="slide-1-layer-7" data-x="center" data-hoffset="" data-y="center" data-voffset="127" data-width="['auto']" data-height="['auto']" data-visibility="['on','on','off','off']" data-type="button" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:790,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(255,255,255);bg:rgb(174,148,104);bs:solid;bw:0 0 0 0;&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[14,14,14,14]" data-paddingright="[17,17,17,17]" data-paddingbottom="[16,16,16,16]" data-paddingleft="[23,23,23,23]">
                                                    <a href="contact-page.html" id='s8'>Contact Now<i class="fa-icon-long-arrow-right"></i></a>
                                                </div>

                                            </li>
                                            <li data-index="rs-2" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="upload/slider-2-100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description=""> 
                                                <img src={{img8}} alt="" title="slider-2" width="1800" height="1000" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-no-retina=""/>
                                                <div class="tp-caption tp-resizeme" id="slide-2-layer-1" data-x="center" data-hoffset="" data-y="center" data-voffset="-182" data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                                    Professional
                                                </div>
                                                <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme" id="slide-2-layer-3" data-x="center" data-hoffset="" data-y="center" data-voffset="-152" data-width="['103']" data-height="['1']" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"></div>
                                                <div class="tp-caption tp-resizeme" id="slide-2-layer-4" data-x="center" data-hoffset="" data-y="center" data-voffset="-80" data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:310,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                                    Law Firm
                                                </div>
                                                <div class="tp-caption tp-resizeme" id="slide-2-layer-5" data-x="center" data-hoffset="" data-y="center" data-voffset="33" data-width="['610']" data-height="['81']" data-visibility="['on','on','off','off']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:530,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                                    We are a leading law firm in financial &amp; business industry. With more than 20 years of experience
                                                </div>
                                                <div class="tp-caption rev-btn rev-withicon" id="slide-2-layer-7" data-x="center" data-hoffset="" data-y="center" data-voffset="127" data-width="['auto']" data-height="['auto']" data-visibility="['on','on','off','off']" data-type="button" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:790,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(255,255,255);bg:rgb(174,148,104);bs:solid;bw:0 0 0 0;&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[14,14,14,14]" data-paddingright="[17,17,17,17]" data-paddingbottom="[16,16,16,16]" data-paddingleft="[23,23,23,23]">
                                                    <a href="contact-page.html" id='s8'>Contact Now<i class="fa-icon-long-arrow-right"></i></a>
                                                </div>

                                            </li>
                                        </ul>
                                        <div class="tp-bannertimer tp-bottom" id='s6'></div>
                                    </div>

                                </div>



                            </div>
                            <div class="clear"></div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </section>
                    <section id="content-section-2">
                        <div class="gdlr-full-size-wrapper gdlr-show-all" id='s4'>
                            <div class="gdlr-service-half-background-item">
                                <div class="gdlr-half-left" style={{background: '#b1976b'}}>
                                    <div class="half-container">
                                        <div class="gdlr-item-margin">
                                            <div class="gdlr-service-half-background-left-head">
                                                <div class="service-half-background-icon"><i class="fa fa-book"></i></div>
                                                <h3 class="gdlr-left-service-title">We are the best full-service firm based in New York</h3>
                                            </div>
                                            <div class="gdlr-left-service-content">
                                                <p>
                                                    Lawyer base has more than 20 years of experiences in this feild and we have solved more than 2000 cases. Every case is very important to us and we always take care of them seriously.
                                                    We have 98% of happy clients.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="gdlr-half-right" id='s9'>
                                    <div class="half-container">
                                        <div class="gdlr-item-margin">
                                            <h3 class="gdlr-right-service-title">Something About Us</h3>
                                            <div class="gdlr-right-service-caption"><p>Pellentesque Adipiscing Purus</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="clear"></div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </section>
                    <section id="content-section-3">
                        <div class="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-dark-skin" id="gdlr-parallax-wrapper-1" data-bgspeed="0.1">
                            <div class="container">
                                <div class="four columns">
                                    <div class="gdlr-image-frame-item gdlr-item" id='s5'>
                                        <div class="gdlr-frame frame-type-none">
                                            <div class="gdlr-image-link-shortcode"><img src={{img9}} alt="" width="348" height="568"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="four columns">
                                    <div class="gdlr-item gdlr-content-item" style={{marginBottom: '50px'}}></div>
                                    <div class="gdlr-ux column-service-ux">
                                        <div class="gdlr-item gdlr-column-service-item gdlr-type-1" style={{marginBottom: '27px'}}>
                                            <div class="column-service-icon gdlr-skin-box"><i class="fa fa-car"></i></div>
                                            <div class="column-service-content-wrapper">
                                                <h3 class="column-service-title">Ultricies Ipsum</h3>
                                                <div class="column-service-content gdlr-skin-content">
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gdlr-ux column-service-ux">
                                        <div class="gdlr-item gdlr-column-service-item gdlr-type-1" style={{marginBottom: '27px'}}>
                                            <div class="column-service-icon gdlr-skin-box"><i class="fa fa-users"></i></div>
                                            <div class="column-service-content-wrapper">
                                                <h3 class="column-service-title">Vehicula Malesuada Nullam</h3>
                                                <div class="column-service-content gdlr-skin-content">
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gdlr-ux column-service-ux">
                                        <div class="gdlr-item gdlr-column-service-item gdlr-type-1">
                                            <div class="column-service-icon gdlr-skin-box"><i class="fa fa-bank"></i></div>
                                            <div class="column-service-content-wrapper">
                                                <h3 class="column-service-title">Venenatis Consectetur</h3>
                                                <div class="column-service-content gdlr-skin-content">
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="four columns">
                                    <div class="gdlr-item gdlr-content-item" style={{marginBottom: '50px'}}></div>
                                    <div class="gdlr-ux column-service-ux">
                                        <div class="gdlr-item gdlr-column-service-item gdlr-type-1" style={{marginBottom: '27px'}}>
                                            <div class="column-service-icon gdlr-skin-box"><i class="fa fa-support"></i></div>
                                            <div class="column-service-content-wrapper">
                                                <h3 class="column-service-title">Tristique Purus Ridiculus</h3>
                                                <div class="column-service-content gdlr-skin-content">
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gdlr-ux column-service-ux">
                                        <div class="gdlr-item gdlr-column-service-item gdlr-type-1" style={{marginBottom: '27px'}}>
                                            <div class="column-service-icon gdlr-skin-box"><i class="fa fa-ambulance"></i></div>
                                            <div class="column-service-content-wrapper">
                                                <h3 class="column-service-title">Sollicitudin Magna</h3>
                                                <div class="column-service-content gdlr-skin-content">
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gdlr-ux column-service-ux">
                                        <div class="gdlr-item gdlr-column-service-item gdlr-type-1">
                                            <div class="column-service-icon gdlr-skin-box"><i class="fa fa-home"></i></div>
                                            <div class="column-service-content-wrapper">
                                                <h3 class="column-service-title">Tortor Lorem Ultricies</h3>
                                                <div class="column-service-content gdlr-skin-content">
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </section>
                    <section id="content-section-4">
                        <div class="section-container container">
                            <div class="gdlr-stunning-item-ux gdlr-ux">
                                <div class="gdlr-item gdlr-stunning-item type-normal" style={{marginBottom: '67px'}}>
                                    <h2 class="stunning-item-title">Are you having any problems but can’t consult to anyone?</h2>
                                    <div class="stunning-item-caption gdlr-skin-info gdlr-title-font">
                                        <p>Talk to us! We promise we can help you! <strong>Call Now! (1)223-3344-334</strong></p>
                                    </div>
                                    <div class="stunning-item-icon">
                                        <i class="fa fa-phone"></i>
                                        <div class="stunning-item-icon-divider gdlr-left"></div>
                                        <div class="stunning-item-icon-divider gdlr-right"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="clear"></div>
                            <div class="gdlr-item-title-wrapper gdlr-item pos-center">
                                <div class="gdlr-item-title-head"><h3 class="gdlr-item-title gdlr-skin-title gdlr-skin-border">Legal Practice Areas</h3></div>
                                <a class="gdlr-item-title-link" href="practice-areas-modern-3-columns.html">View All Practices<i class="fa fa-long-arrow-right icon-long-arrow-right"></i></a>
                            </div>
                            <div class="practice-item-wrapper type-modern-style gdlr-column-1-4" style={{marginBottom: '40px'}} data-ajax="#">
                                <div class="practice-item-holder">
                                    <div class="gdlr-isotope" data-type="practice" data-layout="fitRows">
                                        <div class="clear"></div>
                                        <div class="three columns">
                                            <div class="gdlr-item gdlr-modern-practice">
                                                <div class="gdlr-ux gdlr-modern-practice-ux">
                                                    <div class="gdlr-practice-thumbnail">
                                                        <img src={{img10}} alt="" width="400" height="300"/>
                                                        <div class="gdlr-practice-thumbnail-overlay"></div>
                                                        <h3 class="practice-title"><a href="single-practice.html">Bank And Financial</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="three columns">
                                            <div class="gdlr-item gdlr-modern-practice">
                                                <div class="gdlr-ux gdlr-modern-practice-ux">
                                                    <div class="gdlr-practice-thumbnail">
                                                        <img src={{img11}} alt="" width="400" height="300"/>
                                                        <div class="gdlr-practice-thumbnail-overlay"></div>
                                                        <h3 class="practice-title"><a href="single-practice.html">Car Accident</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="three columns">
                                            <div class="gdlr-item gdlr-modern-practice">
                                                <div class="gdlr-ux gdlr-modern-practice-ux">
                                                    <div class="gdlr-practice-thumbnail">
                                                        <img src={{img12}} alt="" width="400" height="300"/>
                                                        <div class="gdlr-practice-thumbnail-overlay"></div>
                                                        <h3 class="practice-title"><a href="single-practice.html">Personal Injury</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="three columns">
                                            <div class="gdlr-item gdlr-modern-practice">
                                                <div class="gdlr-ux gdlr-modern-practice-ux">
                                                    <div class="gdlr-practice-thumbnail">
                                                        <img src={{img13}} alt="" width="400" height="300"/>
                                                        <div class="gdlr-practice-thumbnail-overlay"></div>
                                                        <h3 class="practice-title"><a href="single-practice.html">Family Law</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="three columns">
                                            <div class="gdlr-item gdlr-modern-practice">
                                                <div class="gdlr-ux gdlr-modern-practice-ux">
                                                    <div class="gdlr-practice-thumbnail">
                                                        <img src={{img14}} alt="" width="400" height="300"/>
                                                        <div class="gdlr-practice-thumbnail-overlay"></div>
                                                        <h3 class="practice-title"><a href="single-practice.html">Capital Market</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="three columns">
                                            <div class="gdlr-item gdlr-modern-practice">
                                                <div class="gdlr-ux gdlr-modern-practice-ux">
                                                    <div class="gdlr-practice-thumbnail">
                                                        <img src={{img15}} alt="" width="400" height="300"/>
                                                        <div class="gdlr-practice-thumbnail-overlay"></div>
                                                        <h3 class="practice-title"><a href="single-practice.html">Employment Law</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="three columns">
                                            <div class="gdlr-item gdlr-modern-practice">
                                                <div class="gdlr-ux gdlr-modern-practice-ux">
                                                    <div class="gdlr-practice-thumbnail">
                                                        <img src={{img16}} alt="" width="400" height="300"/>
                                                        <div class="gdlr-practice-thumbnail-overlay"></div>
                                                        <h3 class="practice-title"><a href="single-practice.html">Corporate</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="three columns">
                                            <div class="gdlr-item gdlr-modern-practice">
                                                <div class="gdlr-ux gdlr-modern-practice-ux">
                                                    <div class="gdlr-practice-thumbnail">
                                                        <img src={{img17}} alt="" width="400" height="300"/>
                                                        <div class="gdlr-practice-thumbnail-overlay"></div>
                                                        <h3 class="practice-title"><a href="single-practice.html">Dispute Resolution</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </section>
                    <section id="content-section-5">
                        <div class="gdlr-color-wrapper gdlr-show-all gdlr-skin-light-grey" id='s10'>
                            <div class="container">
                                <div class="six columns">
                                    <div class="gdlr-testimonial-item-wrapper">
                                        <div class="gdlr-item-title-wrapper gdlr-item pos-left gdlr-nav-container">
                                            <div class="gdlr-item-title-head">
                                                <h3 class="gdlr-item-title gdlr-skin-title gdlr-skin-border">Testimonial</h3>
                                                <div class="gdlr-item-title-nav">
                                                    <i class="icon-angle-left gdlr-flex-prev"></i><i class="icon-angle-right gdlr-flex-next"></i>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>
                                            <div class="gdlr-item-title-divider"></div>
                                        </div>
                                        <div class="gdlr-item gdlr-testimonial-item carousel modern-style">
                                            <div class="gdlr-ux gdlr-testimonial-ux">
                                                <div class="flexslider" data-type="carousel" data-nav-container="gdlr-testimonial-item" data-columns="1">
                                                    <ul class="slides">
                                                        <li class="testimonial-item">
                                                            <div class="testimonial-author-image gdlr-skin-border"><img src={{img18}} alt="" width="120" height="120"/></div>
                                                            <div class="testimonial-item-outer">
                                                                <div class="testimonial-item-inner gdlr-skin-box">
                                                                    <div class="testimonial-content gdlr-skin-content">
                                                                        <p>
                                                                            <span id='s11'>Lawyer Base just saved my life!</span><br/>
                                                                            Aenean lacinia bibendum nulla sed cons ectetur. Morbi leo risus, porta ac conse ctet ur ac, vesti bulum at eros. Etiam porta sem mal esuada magna mollis
                                                                            euismod. Etiam porta sem malesuada magna mo llis eu. Donec ullamcorper nulla non metus auctor.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="testimonial-info gdlr-title-font">
                                                                    <span class="testimonial-author gdlr-skin-link-color">Oliver Shansder</span><span class="testimonial-position gdlr-skin-info">Father of two sons</span>
                                                                </div>
                                                                <div class="testimonial-gimmick"></div>
                                                            </div>
                                                        </li>
                                                        <li class="testimonial-item">
                                                            <div class="testimonial-author-image gdlr-skin-border"><img src={{img19}} alt="" width="120" height="120"/></div>
                                                            <div class="testimonial-item-outer">
                                                                <div class="testimonial-item-inner gdlr-skin-box">
                                                                    <div class="testimonial-content gdlr-skin-content">
                                                                        <p>
                                                                            <span id='s11'>I got my money back!</span><br/>
                                                                            Aenean lacinia bibendum nulla sed cons ectetur. Morbi leo risus, porta ac conse ctet ur ac, vesti bulum at eros. Etiam porta sem mal esuada magna mollis
                                                                            euismod. Etiam porta sem malesuada magna mo llis eu. Donec ullamcorper nulla non metus auctor.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="testimonial-info gdlr-title-font">
                                                                    <span class="testimonial-author gdlr-skin-link-color">Santana White</span><span class="testimonial-position gdlr-skin-info">Car Accident</span>
                                                                </div>
                                                                <div class="testimonial-gimmick"></div>
                                                            </div>
                                                        </li>
                                                        <li class="testimonial-item">
                                                            <div class="testimonial-author-image gdlr-skin-border"><img src={{img20}} alt="" width="120" height="120"/></div>
                                                            <div class="testimonial-item-outer">
                                                                <div class="testimonial-item-inner gdlr-skin-box">
                                                                    <div class="testimonial-content gdlr-skin-content">
                                                                        <p>
                                                                            <span id='s11'>Now I can get my business running!</span><br/>
                                                                            Aenean lacinia bibendum nulla sed cons ectetur. Morbi leo risus, porta ac conse ctet ur ac, vesti bulum at eros. Etiam porta sem mal esuada magna mollis
                                                                            euismod. Etiam porta sem malesuada magna mo llis eu. Donec ullamcorper nulla non metus auctor.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="testimonial-info gdlr-title-font">
                                                                    <span class="testimonial-author gdlr-skin-link-color">James Bond</span><span class="testimonial-position gdlr-skin-info">Financial Issue</span>
                                                                </div>
                                                                <div class="testimonial-gimmick"></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="six columns">
                                    <div class="gdlr-item-title-wrapper gdlr-item pos-left">
                                        <div class="gdlr-item-title-head"><h3 class="gdlr-item-title gdlr-skin-title gdlr-skin-border">Recent News</h3></div>
                                        <div class="gdlr-item-title-divider"></div>
                                    </div>
                                    <div class="blog-item-wrapper">
                                        <div class="blog-item-holder">
                                            <div class="gdlr-item gdlr-blog-widget">
                                                <div class="gdlr-ux gdlr-blog-widget-ux">
                                                    <article id="post-2255" class="post-2255 post type-post status-publish format-standard has-post-thumbnail hentry category-post-slider tag-blog tag-life-style">
                                                        <div class="gdlr-standard-style">
                                                            <div class="blog-date-wrapper">
                                                                <span class="blog-date-day gdlr-title-font">21</span>
                                                                <span class="blog-date-month">Mar</span>
                                                            </div>
                                                            <header class="post-header">
                                                                <div class="gdlr-blog-title"><a href="singleblog.html">Sem Porta Mollis Parturient</a></div>

                                                                <div class="gdlr-blog-excerpt">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed...
                                                                    <div class="clear"></div>
                                                                    <a href="singleblog.html" class="excerpt-read-more">Read More</a>
                                                                </div>
                                                                <div class="clear"></div>
                                                            </header>
                                                            <div class="clear"></div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div class="gdlr-item gdlr-blog-widget">
                                                <div class="gdlr-ux gdlr-blog-widget-ux">
                                                    <article id="post-2254" class="post-2254 post type-post status-publish format-standard has-post-thumbnail hentry category-post-slider tag-blog tag-life-style">
                                                        <div class="gdlr-standard-style">
                                                            <div class="blog-date-wrapper">
                                                                <span class="blog-date-day gdlr-title-font">21</span>
                                                                <span class="blog-date-month">Mar</span>
                                                            </div>
                                                            <header class="post-header">
                                                                <div class="gdlr-blog-title"><a href="singleblog.html">Nullam Lorem Mattis Purus</a></div>

                                                                <div class="gdlr-blog-excerpt">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed...
                                                                    <div class="clear"></div>
                                                                    <a href="singleblog.html" class="excerpt-read-more">Read More</a>
                                                                </div>
                                                                <div class="clear"></div>
                                                            </header>
                                                            <div class="clear"></div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div class="gdlr-item gdlr-blog-widget">
                                                <div class="gdlr-ux gdlr-blog-widget-ux">
                                                    <article id="post-2249" class="post-2249 post type-post status-publish format-standard has-post-thumbnail hentry category-post-slider tag-blog tag-life-style">
                                                        <div class="gdlr-standard-style">
                                                            <div class="blog-date-wrapper">
                                                                <span class="blog-date-day gdlr-title-font">21</span>
                                                                <span class="blog-date-month">Mar</span>
                                                            </div>
                                                            <header class="post-header">
                                                                <div class="gdlr-blog-title"><a href="singleblog.html">Nibh Sem Sit Ullamcorper</a></div>

                                                                <div class="gdlr-blog-excerpt">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed...
                                                                    <div class="clear"></div>
                                                                    <a href="singleblog.html" class="excerpt-read-more">Read More</a>
                                                                </div>
                                                                <div class="clear"></div>
                                                            </header>
                                                            <div class="clear"></div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <a class="blog-widget-right-text-link" href="blog-full-with-right-sidebar.html">Read All News<i class="fa fa-long-arrow-right icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </section>
                    <section id="content-section-6">
                        <div class="gdlr-color-wrapper gdlr-show-all no-skin" style={{backgroundColor: '#ffffff', paddingTop: '70px', paddingBottom: '0px'}}>
                            <div class="container">
                                <div class="attorney-item-wrapper">
                                    <div class="gdlr-item-title-wrapper gdlr-item pos-center gdlr-nav-container">
                                        <div class="gdlr-item-title-head">
                                            <h3 class="gdlr-item-title gdlr-skin-title gdlr-skin-border">Meet Our Attorneys</h3>
                                            <div class="gdlr-item-title-nav">
                                                <i class="icon-angle-left gdlr-flex-prev"></i><i class="icon-angle-right gdlr-flex-next"></i>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-item-title-divider"></div>
                                    </div>
                                    <div class="attorney-item-holder">
                                        <div class="gdlr-attorney-carousel-item gdlr-item">
                                            <div class="flexslider" data-type="carousel" data-nav-container="attorney-item-holder" data-columns="4">
                                                <ul class="slides">
                                                    <li class="gdlr-item gdlr-attorney-item">
                                                        <div class="gdlr-attorney-thumbnail">
                                                            <a href="upload/attorney-1.jpg" data-rel="fancybox"><img src={{img21}} alt="" width="400" height="300"/></a>
                                                        </div>
                                                        <div class="attorney-content-wrapper">
                                                            <h3 class="attorney-title gdlr-title"><a href="#">Kevin Stiller</a></h3>
                                                            <div class="attorney-position">Bank &amp; Financial Lawyer</div>
                                                            <div class="attorney-excerpt">
                                                                Biography Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl...
                                                                <div class="clear"></div>
                                                                <a href="#" class="excerpt-read-more">Read Profile</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="gdlr-item gdlr-attorney-item">
                                                        <div class="gdlr-attorney-thumbnail">
                                                            <a href="upload/attorney-2.jpg" data-rel="fancybox"><img src={{img22}} alt="" width="400" height="300"/></a>
                                                        </div>
                                                        <div class="attorney-content-wrapper">
                                                            <h3 class="attorney-title gdlr-title"><a href="#">Marisa Goldberg</a></h3>
                                                            <div class="attorney-position">Bank &amp; Financial Lawyer</div>
                                                            <div class="attorney-excerpt">
                                                                Biography Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl...
                                                                <div class="clear"></div>
                                                                <a href="#" class="excerpt-read-more">Read Profile</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="gdlr-item gdlr-attorney-item">
                                                        <div class="gdlr-attorney-thumbnail">
                                                            <a href="upload/attorney-3.jpg" data-rel="fancybox"><img src={{img23}} alt="" width="400" height="300"/></a>
                                                        </div>
                                                        <div class="attorney-content-wrapper">
                                                            <h3 class="attorney-title gdlr-title"><a href="#">Eric Peterson</a></h3>
                                                            <div class="attorney-position">Bank &amp; Financial Lawyer</div>
                                                            <div class="attorney-excerpt">
                                                                Biography Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl...
                                                                <div class="clear"></div>
                                                                <a href="#" class="excerpt-read-more">Read Profile</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="gdlr-item gdlr-attorney-item">
                                                        <div class="gdlr-attorney-thumbnail">
                                                            <a href="upload/attorney-4.jpg" data-rel="fancybox"><img src={{img24}} alt="" width="400" height="300"/></a>
                                                        </div>
                                                        <div class="attorney-content-wrapper">
                                                            <h3 class="attorney-title gdlr-title"><a href="#">Jack Smith</a></h3>
                                                            <div class="attorney-position">Bank &amp; Financial Lawyer</div>
                                                            <div class="attorney-excerpt">
                                                                Biography Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl...
                                                                <div class="clear"></div>
                                                                <a href="#" class="excerpt-read-more">Read Profile</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="gdlr-item gdlr-attorney-item">
                                                        <div class="gdlr-attorney-thumbnail">
                                                            <a href="upload/attorney-5.jpg" data-rel="fancybox"><img src={{img25}} alt="" width="400" height="300"/></a>
                                                        </div>
                                                        <div class="attorney-content-wrapper">
                                                            <h3 class="attorney-title gdlr-title"><a href="#">Helen Ederson</a></h3>
                                                            <div class="attorney-position">Bank &amp; Financial Lawyer</div>
                                                            <div class="attorney-excerpt">
                                                                Biography Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl...
                                                                <div class="clear"></div>
                                                                <a href="#" class="excerpt-read-more">Read Profile</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="gdlr-item gdlr-attorney-item">
                                                        <div class="gdlr-attorney-thumbnail">
                                                            <a href="upload/attorney-6.jpg" data-rel="fancybox"><img src={{img26}} alt="" width="400" height="300"/></a>
                                                        </div>
                                                        <div class="attorney-content-wrapper">
                                                            <h3 class="attorney-title gdlr-title"><a href="#">Janet Jones</a></h3>
                                                            <div class="attorney-position">Bank &amp; Financial Lawyer</div>
                                                            <div class="attorney-excerpt">
                                                                Biography Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl...
                                                                <div class="clear"></div>
                                                                <a href="#" class="excerpt-read-more">Read Profile</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="gdlr-item gdlr-attorney-item">
                                                        <div class="gdlr-attorney-thumbnail">
                                                            <a href="upload/attorney-7.jpg" data-rel="fancybox"><img src={{img27}} alt="" width="400" height="300"/></a>
                                                        </div>
                                                        <div class="attorney-content-wrapper">
                                                            <h3 class="attorney-title gdlr-title"><a href="#">John Doe</a></h3>
                                                            <div class="attorney-position">Bank &amp; Financial Lawyer</div>
                                                            <div class="attorney-excerpt">
                                                                Biography Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl...
                                                                <div class="clear"></div>
                                                                <a href="#" class="excerpt-read-more">Read Profile</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </section>
                    <section id="content-section-7">
                        <div class="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-dark-skin" id="gdlr-parallax-wrapper-2" data-bgspeed="0">
                            <div class="container">
                                <div class="six columns">
                                    <div class="gdlr-title-item" style={{marginBottom: '45px'}}>
                                        <div class="gdlr-item-title-wrapper gdlr-item pos-center">
                                            <div class="gdlr-item-title-head"><h3 class="gdlr-item-title gdlr-skin-title gdlr-skin-border">Don't hesitate to ask</h3></div>
                                            <div class="gdlr-item-title-caption gdlr-skin-info">
                                                Law is complicate matter. It can cause you a big problem <br/>
                                                if you ignore it. Let us help you!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gdlr-item gdlr-content-item">
                                        <div role="form" class="wpcf7" id="wpcf7-f4260-o1" lang="en-US" dir="ltr">
                                            <div class="screen-reader-response">
                                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                <ul></ul>
                                            </div>

                                            <form method="post" action="contactform/contactengine.php">
                                                
                                                <input type="text" name="Name" id="Name" placeholder="Name:" class="input"/>
                                                
                                                <input type="text" name="City" id="City" placeholder="City:" class="input"/>

                                                <input type="text" name="Email" id="Email" placeholder="Email:" class="input"/>
                                                
                                                <textarea name="Message" rows="20" cols="20" id="Message" placeholder="Message:" class="input"></textarea>

                                                <input type="submit" name="submit" value="Submit" class="submit-button"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="six columns">
                                    <div class="gdlr-image-frame-item gdlr-item" id='s5'>
                                        <div class="gdlr-frame frame-type-none">
                                            <div class="gdlr-image-link-shortcode">
                                                <img src={{img34}} alt="" width="487" height="731"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </section>
                    <section id="content-section-8">
                        <div class="gdlr-color-wrapper gdlr-show-all no-skin" style={{backgroundColor: '#ffffff', paddingTop: '70px', paddingBottom: '45px'}}>
                            <div class="container">
                                <div class="gdlr-banner-item-wrapper">
                                    <div class="gdlr-item-title-wrapper gdlr-item pos-center gdlr-nav-container">
                                        <div class="gdlr-item-title-head">
                                            <h3 class="gdlr-item-title gdlr-skin-title gdlr-skin-border">Some Of Our Clients</h3>
                                            <div class="gdlr-item-title-nav">
                                                <i class="icon-angle-left gdlr-flex-prev"></i><i class="icon-angle-right gdlr-flex-next"></i>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-item-title-divider"></div>
                                    </div>
                                    <div class="gdlr-banner-images gdlr-item">
                                        <div class="flexslider" data-pausetime="7000" data-slidespeed="600" data-effect="fade" data-columns="5" data-type="carousel" data-nav-container="gdlr-banner-images">
                                            <ul class="slides">
                                                <li><img src={{img28}} alt="" width="230" height="117"/></li>
                                                <li><img src={{img29}} alt="" width="230" height="117"/></li>
                                                <li><img src={{img30}} alt="" width="230" height="117"/></li>
                                                <li><img src={{img31}} alt="" width="230" height="117"/></li>
                                                <li><img src={{img32}} alt="" width="230" height="117"/></li>
                                                <li><img src={{img33}} alt="" width="230" height="117"/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </section>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <footer class="footer-wrapper">
            <div class="footer-container container">
                <div class="footer-column three columns" id="footer-widget-1">
                    <div id="text-2" class="widget widget_text gdlr-item gdlr-widget">
                        <h3 class="gdlr-widget-title">About Us</h3>
                        <div class="clear"></div>
                        <div class="textwidget">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta.
                            <div class="clear"></div>
                            <div class="gdlr-space" style={{marginTop: '20px'}}></div>

                            <a href="#" target="_blank" rel="noopener"><i class="gdlr-icon fa fa-facebook-square" id='s13'></i></a>
                            <a href="#" target="_blank" rel="noopener"><i class="gdlr-icon fa fa-twitter-square" id='s13'></i></a>
                            <a href="#" target="_blank" rel="noopener"><i class="gdlr-icon fa fa-linkedin-square" id='s13'></i></a>
                            <a href="#" target="_blank" rel="noopener"><i class="gdlr-icon fa fa-google-plus-square" id='s13'></i></a>
                            <a href="#" target="_blank" rel="noopener"><i class="gdlr-icon fa fa-pinterest-square" id='s13'></i></a>
                            <a href="#" target="_blank" rel="noopener"><i class="gdlr-icon fa fa-flickr" id='s13'></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-column three columns" id="footer-widget-2">
                    <div id="recent-posts-5" class="widget widget_recent_entries gdlr-item gdlr-widget">
                        <h3 class="gdlr-widget-title">Recent News</h3>
                        <div class="clear"></div>
                        <ul>
                            <li>
                                <a href="singleblog.html">Sem Porta Mollis Parturient</a>
                            </li>
                            <li>
                                <a href="singleblog.html">Nullam Lorem Mattis Purus</a>
                            </li>
                            <li>
                                <a href="singleblog.html">Nibh Sem Sit Ullamcorper</a>
                            </li>
                            <li>
                                <a href="singleblog.html">Donec luctus imperdiet</a>
                            </li>
                            <li>
                                <a href="singleblog.html">Magna pars studiorum</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-column three columns" id="footer-widget-3">
                    <div id="text-3" class="widget widget_text gdlr-item gdlr-widget">
                        <h3 class="gdlr-widget-title">Contact Info</h3>
                        <div class="clear"></div>
                        <div class="textwidget">
                            Address: 184 Main Collins Street West Victoria 8007

                            <div class="clear"></div>
                            <div id='s1' class="gdlr-space" ></div>

                            <i id='s2' class="gdlr-icon fa fa-phone"></i> +1800-222-3333

                            <div class="clear"></div>
                            <div id='s1' class="gdlr-space" ></div>

                            <i id='s3' class="gdlr-icon fa fa-mobile"></i> +1833-232-3443

                            <div class="clear"></div>
                            <div id='s1' class="gdlr-space" ></div>

                            <i id='s2' class="gdlr-icon fa fa-envelope-o"></i>
                            <a href="#" class="__cf_email__">test@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div class="footer-column three columns" id="footer-widget-4">
                    <div id="nav_menu-5" class="widget widget_nav_menu gdlr-item gdlr-widget">
                        <h3 class="gdlr-widget-title">Business Overview</h3>
                        <div class="clear"></div>
                        <div class="menu-business-overview-footer-container">
                            <ul id="menu-business-overview-footer" class="menu">
                                <li class="menu-item"><a href="attorney-4-columns.html">Attorneys</a></li>
                                <li class="menu-item"><a href="practice-areas-modern-4-columns.html">Practice Areas</a></li>
                                <li class="menu-item"><a href="careers.html">Careers</a></li>
                                <li class="menu-item"><a href="honors-awards.html">Honors &amp; Awards</a></li>
                                <li class="menu-item"><a href="qa.html">Q&amp;A</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div class="copyright-wrapper">
                <div class="copyright-container container">
                    <div class="copyright-left">
                        Copyright 2022 All Right Revered
                    </div>
                    <div class="copyright-right">
                        Powered By HTML
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </footer>
    </div>
    </div>
  )
}

export default Home