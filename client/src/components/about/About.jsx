import { Link } from "react-router-dom";

export default function About() {
   return (
     <>
       <section
         className="download-area section-gap"
         id="app"
         style={{ backgroundColor: "white" }}
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-6 download-left">
               <img
                 className="img-fluid"
                 src="./src/public/images/multyAIimage_result.png"
                 alt=""
               />
             </div>
             <div className="col-lg-6 download-right">
               <h1>
                 We are 
                 ALYST!
               </h1>
               <p className="subs"> Our goal is to help business manage empoyees, operate and create custop AI models.</p>
               <div className="d-flex flex-row">
                 <div className="buttons">
                   <i className="fa fa-apple" aria-hidden="true" />
                   <div className="desc">
                     <a href="#">
                       <p>
                         <span>Available</span> <br />
                         on App Store
                       </p>
                     </a>
                   </div>
                 </div>
                 <div className="buttons">
                   <i className="fa fa-android" aria-hidden="true" />
                   <div className="desc">
                     <a href="#">
                       <p>
                         <span>Available</span> <br />
                         on Play Store
                       </p>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>{" "}
       {/* end team section
       <section className="hero">
         <div className="container">
           <div className="hero-inner">
             <div className="hero-copy">
               <h1 className="hero-title mt-0">We are bind</h1>
               <p className="hero-paragraph">
                 Brinding Distances with Speed and Care
               </p>
               <div className="hero-cta"></div>
             </div>
             <div className="hero-figure anime-element">
               <div className="hero-header-image">
                 <img src="./src/public/images/i11.jpg" alt="#" />
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* End Services Area */}
       {/* Start Counter Section*/}
       <section
         className="product-counter-section"
         style={{ background: "#3a86ff" }}
       >
         <div className="product-counter-wrap">
           <div className="container">
             <div className="row">
               <div className="col-lg-6 col-12">
                 <div className="counter-content-wrap">
                   <i className="lni lni-rocket" />
                   <h6 className="counter-title">
                     <strong>Trusted by 2000+</strong>
                   </h6>
                   <p className="counter-text">
                     High performing team worldwide
                   </p>
                 </div>
               </div>
               <div className="col-lg-6 col-12">
                 <ul className="counter-list list-inline text-right">
                   <li>
                     <span className="number count">238</span>
                     <span className="title">Happy Clients</span>
                   </li>
                   <li>
                     <span className="number count">4</span>
                     <span className="title">Wining Award</span>
                   </li>
                   <li>
                     <span className="number count">34</span>
                     <span className="title">Team Member</span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* /End Counter Section*/}
       {/*Frequently asked questions start*/}
       {/*Frequently asked questions end*/}
       {/* Start Blog Area */}
       {/* End Blog Area */}
       {/* team section */}
       <section id="service" className="service">
         <div className="container">
           <div
             className="heading_container heading_center"
             style={{ paddingBottom: "4%" }}
           >
             <h2>Our services </h2>
           </div>
           <div className="service-content">
             <div className="row">
               <div className="col-md-4 col-sm-6">
                 <div
                   className="single-service-item"
                   style={{
                     backgroundColor: "#E7ECEF",
                     boxShadow: "0 0 15px 0",
                   }}
                 >
                   <div className="single-service-icon">
                     <img
                       //  style={{ height: "129px" }}
                       className="flaticon-car"
                       src="/src/public/images/text-message-4642 (1).png"
                       alt=""
                     />
                   </div>
                   <h2>
                     <a href="#">Customer helper</a>
                   </h2>
                   <p>
                     Answer qustomers question without need for a Qustomer
                     Support team.
                   </p>
                 </div>
               </div>
               <div className="col-md-4 col-sm-6">
                 <div
                   className="single-service-item"
                   style={{
                     backgroundColor: "#E7ECEF",
                     boxShadow: "0 0 15px 0",
                   }}
                 >
                   <div className="single-service-icon">
                     <img
                       //  style={{ height: "129px" }}
                       className="flaticon-car"
                       src="/src/public/images/list-6241.png"
                       alt=""
                     />
                   </div>
                   <h2>
                     <a href="#">Employee Task Tracker</a>
                   </h2>
                   <p>Your empoyees progress and thay can search their tasks</p>
                 </div>
               </div>
               <div className="col-md-4 col-sm-6">
                 <div
                   className="single-service-item"
                   style={{
                     backgroundColor: "#E7ECEF",
                     boxShadow: "0 0 15px 0",
                   }}
                 >
                   <div className="single-service-icon">
                     <img
                       //  style={{ height: "129px" }}
                       className="flaticon-car"
                       src="/src/public/images/filter-6551.png"
                       alt=""
                     />
                   </div>
                   <h2>
                     <a href="#">Get custom AI</a>
                   </h2>
                   <p>
                     Tell us your sepcific business problem and we will find AI
                     solution
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/*/.container*/}
       </section>
       <section
         style={{ marginTop: "8%", marginBottom: "8%" }}
         id="faq"
         className="faq-section section"
       >
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div className="section-title">
                 <h2>Frequently asked questions</h2>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-12">
               <div id="accordion" className="mt-4 faq-container">
                 <div className="simple-card">
                   <div className="card-header" id="headingOne">
                     <h5 className="mb-0">
                       <button
                         className=" btn-link collapsed"
                         data-toggle="collapse"
                         data-target="#collapseOne"
                         aria-expanded="false"
                         aria-controls="collapseOne"
                       >
                         <span className="arrow-container" /> How to start
                         delivering?
                       </button>
                     </h5>
                   </div>
                   <div
                     id="collapseOne"
                     className="collapse"
                     aria-labelledby="headingOne"
                     data-parent="#accordion"
                   >
                     <div className="card-body">
                       You can start delivering by making an delivering account
                       - sign up in become a deliver page.
                     </div>
                   </div>
                 </div>
                 <div className="simple-card">
                   <div className="card-header" id="headingTwo">
                     <h5 className="mb-0">
                       <button
                         className=" btn-link"
                         data-toggle="collapse"
                         data-target="#collapseTwo"
                         aria-expanded="true"
                         aria-controls="collapseTwo"
                       >
                         <span className="arrow-container" /> How to order?
                       </button>
                     </h5>
                   </div>
                   <div
                     id="collapseTwo"
                     className="collapse show"
                     aria-labelledby="headingTwo"
                     data-parent="#accordion"
                   >
                     <div className="card-body card-with-button">
                       You can make orders from order page. Then put your
                       personal data into the form ad make your order.This order
                       will be delivered to you every single week.
                       {/* <a href="#" className=" btn">
                    Go to documentation
                  </a> */}
                     </div>
                   </div>
                 </div>
                 <div className="simple-card">
                   <div className="card-header" id="headingThree">
                     <h5 className="mb-0">
                       <button
                         className=" btn-link collapsed"
                         data-toggle="collapse"
                         data-target="#collapseThree"
                         aria-expanded="false"
                         aria-controls="collapseThree"
                       >
                         <span className="arrow-container" /> How much money I
                         will make?
                       </button>
                     </h5>
                   </div>
                   <div
                     id="collapseThree"
                     className="collapse"
                     aria-labelledby="headingThree"
                     data-parent="#accordion"
                   >
                     <div className="card-body">
                       You wil make money with every delivery you make. You get
                       a percentage of the orders price-4%. You stack your
                       deliveries at once and deliver them all together.
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       <section
         style={{ marginTop: "6%", marginBottom: "5%" }}
         className="blog section"
         id="blog"
       >
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div className="section-title">
                 <h2>Read Our Blog</h2>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-lg-4 col-md-6 col-12">
               {/* Single Blog */}
               <div className="single-news">
                 <div className="news-body">
                   <div className="news-content">
                     <div className="date">22 Aug, 2023</div>
                     <h2>
                       <a href="blog-single-sidebar.html">
                         NEW CEO ANNOUNCEMENT
                       </a>
                     </h2>
                     <p className="text">
                       We are proud to announce that Martin Kovachki is the new
                       ceo of the company
                     </p>
                   </div>
                 </div>
               </div>
               {/* End Single Blog */}
             </div>
             <div className="col-lg-4 col-md-6 col-12">
               {/* Single Blog */}
               <div className="single-news">
                 <div className="news-body">
                   <div className="news-content">
                     <div className="date">15 Jul, 2022</div>
                     <h2>
                       <a href="blog-single-sidebar.html">
                         YOU CAN NOW JOIN US, DELIVER WITH US AND MAKE PROGRESS
                       </a>
                     </h2>
                     <p className="text">
                       If you have a free days now you can fill them with
                       delivering and make money
                     </p>
                   </div>
                 </div>
               </div>
               {/* End Single Blog */}
             </div>
             <div className="col-lg-4 col-md-6 col-12">
               {/* Single Blog */}
               <div className="single-news">
                 <div className="news-body">
                   <div className="news-content">
                     <div className="date">05 Jan, 2021</div>
                     <h2>
                       <a href="blog-single-sidebar.html">
                         THE START OF THE JOURNEY
                       </a>
                     </h2>
                     <p className="text">
                       Our Goal Is To Make Life More Simple For Ones And Better
                       Of Others
                     </p>
                   </div>
                 </div>
               </div>
               {/* End Single Blog */}
             </div>
           </div>
         </div>
       </section>
       <section
         style={{ backgroundColor: "#e7ecef" }}
         className="contact_section layout_padding"
       >
         <div className="contact_bg_box">
           <div className="img-box">
             <img src="images/contact-bg.jpg" alt="" />
           </div>
         </div>
         <div className="container">
           <div className="heading_container heading_center">
             <h2>Have a questions?</h2>
           </div>
           <div className="">
             <div className="row">
               <div className="col-md-7 mx-auto">
                 <form action="#">
                   <div className="contact_form-container">
                     <div>
                       <div>
                         <input type="text" placeholder="Full Name" />
                       </div>
                       <div>
                         <input type="email" placeholder="Email " />
                       </div>
                       <div>
                         <input type="text" placeholder="Phone Number" />
                       </div>
                       <div className="">
                         <input
                           type="text"
                           placeholder="Message"
                           className="message_input"
                         />
                       </div>
                       <div className="btn-box ">
                         <button type="submit">Send</button>
                       </div>
                     </div>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </section>

     </>
   );
}