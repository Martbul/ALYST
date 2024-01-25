import { Link } from "react-router-dom";
export default function Home() {
   return (
     <>
       <div
         style={{ backgroundColor: "white" }}
         className="main-banner wow fadeIn"
         id="top"
         data-wow-duration="1s"
         data-wow-delay="0.5s"
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="row">
                 <div className="col-lg-6 align-self-center">
                   <div
                     className="left-content header-text wow fadeInLeft"
                     data-wow-duration="1s"
                     data-wow-delay="1s"
                   >
                     <h6>Welcome to ALYST</h6>
                     <h2>
                       Put your <em>Business</em> Online and Improve it with
                       <span>AI</span> Products
                     </h2>
                     <p>
                       ALYST is a professional company working for better
                       future. We want to optimize the works in each company
                       trought utilizing AI work
                     </p>
                   </div>
                 </div>
                 <div className="col-lg-6">
                   <div
                     className="right-image wow fadeInRight"
                     data-wow-duration="1s"
                     data-wow-delay="0.5s"
                   >
                     <img
                       className="image1"
                       src="/src/public/images/AI_image.jpg"
                       alt="team meeting"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* about section */}
       <section
         className="about_section layout_padding"
         style={{ backgroundColor: "#003554" }}
       >
         <div className="container">
           <div className="row">
             <div className="col-md-6 px-0">
               <div className="img_container">
                 <div className="img-box">
                   <img src="images/about-img.jpg" alt="" />
                 </div>
               </div>
             </div>
             <div className="col-md-6 px-0">
               <div className="detail-box">
                 <div className="heading_container ">
                   <h2>Who Are We?</h2>
                 </div>
                 <p>
                   We are an experienced company in the software development
                   fiel and our goal is to improveand grow businesses
                 </p>
                 <div className="btn-box">
                   <a href="">Read More</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* end about section */}
       {/* service section */}
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
                     <Link to="/Websitedevelopment">Website Development</Link>
                   </h2>
                   <p>
                     Grow your business online and improve your customer
                     experience
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
                     <Link to="/service2">App Development</Link>
                   </h2>
                   <p>Make the life of your customers with mobile experience</p>
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
                     <Link to="/service3">Cutom GPT</Link>
                   </h2>
                   <p>Customize GPT for your company needs</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/*/.container*/}
       </section>
       <div className="infos section" id="infos">
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="main-content">
                 <div className="row">
                   <div className="col-lg-6">
                     <div className="left-image">
                       <img
                         className="img111"
                         src="./src/public/images/AIphoto.jpeg"
                         alt=""
                       />
                     </div>
                   </div>
                   <div className="col-lg-6">
                     <div className="section-heading">
                       <h2>
                         More <em style={{ color: "#03a4ed" }}>About Us</em>{" "}
                         &amp; What{" "}
                         <span style={{ color: "#3a86ff" }}>We Offer</span>
                       </h2>

                       <p>
                         You are free to use this template for any purpose. You
                         are not allowed to redistribute the downloadable ZIP
                         file of Tale SEO Template on any other template
                         website. Please contact us. Thank you.
                       </p>
                     </div>
                     <div className="skills">
                       <div className="skill-slide marketing">
                         <div className="fill" />
                         <h6>Web Industry</h6>
                         <span>90%</span>
                       </div>
                       <div className="skill-slide digital">
                         <div className="fill" />
                         <h6>Customer Experience</h6>
                         <span>80%</span>
                       </div>
                       <div className="skill-slide media">
                         <div className="fill" />
                         <h6>Customization</h6>
                         <span>95%</span>
                       </div>
                     </div>
                     <p className="more-info">
                       Scale and Grow your business with us!
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* client section */}
       <section
         className="client_section layout_padding"
         style={{ backgroundColor: "#f6f6f6" }}
       >
         <div className="container ">
           <div className="heading_container heading_center">
             <h2>What our clients says</h2>
           </div>
           <div
             id="carouselExampleControls"
             className="carousel slide"
             data-ride="carousel"
           >
             <div className="carousel-inner">
               <div className="carousel-item active">
                 <div className="box">
                   <div className="img-box">
                     <img src="images/client.png" alt="" />
                   </div>
                   <div className="detail-box">
                     <h4>Peter Dimov</h4>
                     <p>
                       I hated weekly shopping so much, but i was the only one
                       able to do in in my family. Now with Bind i don't have to
                       spend time in the store.
                     </p>
                   </div>
                 </div>
               </div>
               <div className="carousel-item ">
                 <div className="box">
                   <div className="img-box">
                     <img src="images/client.png" alt="" />
                   </div>
                   <div className="detail-box">
                     <h4>Ivo Petrov</h4>
                     <p>
                       The price is a bit high for a delivey , but they saved me
                       so much time. Now that i dont have to go shop for
                       groceries i have so much spare time. I was able to finish
                       my docturanture.
                     </p>
                   </div>
                 </div>
               </div>
               <div className="carousel-item ">
                 <div className="box">
                   <div className="img-box">
                     <img src="images/client.png" alt="" />
                   </div>
                   <div className="detail-box">
                     <h4>Martin Kovachki</h4>
                     <p>
                       The service is the best in the whole county. I have never
                       experienced the this type of service and now i love it.
                       The delivery was on time and the products i ordered were
                       in perfect condition
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="carousel_btn-box">
               <a
                 className="carousel-control-prev"
                 href="#carouselExampleControls"
                 role="button"
                 data-slide="prev"
               >
                 <i className="fa fa-angle-left" aria-hidden="true" />
                 <span className="sr-only">Previous</span>
               </a>
               <a
                 className="carousel-control-next"
                 href="#carouselExampleControls"
                 role="button"
                 data-slide="next"
               >
                 <i className="fa fa-angle-right" aria-hidden="true" />
                 <span className="sr-only">Next</span>
               </a>
             </div>
           </div>
         </div>
       </section>
       {/* end client section */}
       <div className="untree_co-section">
         <div className="container">
           <div className="row mb-5">
             <div
               className="col-12 text-center"
               data-aos="fade-up"
               data-aos-delay={0}
             >
               <span className="caption">Features</span>
               <h2 className="heading">Advantage of using our services</h2>
               <p>Far from the countries Vokalia and Consonantia</p>
             </div>
           </div>{" "}
           {/* /.row */}
           <div className="row">
             <div
               className="col-lg-6 mb-4"
               data-aos="fade-up"
               data-aos-delay={100}
             >
               <div className="service horizontal d-flex">
                 <div className="service-icon color-1 mb-4">
                   <svg
                     className="bi bi-app-indicator"
                     width="1em"
                     height="1em"
                     viewBox="0 0 16 16"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fillRule="evenodd"
                       d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                     />
                     <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                   </svg>
                 </div>{" "}
                 {/* /.icon */}
                 <div className="service-contents">
                   <h3>Built for Entrepreneurs </h3>
                   <p>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts.
                   </p>
                 </div>{" "}
                 {/* /.service-contents*/}
               </div>{" "}
               {/* /.service */}
             </div>
             <div
               className="col-lg-6 mb-4"
               data-aos="fade-up"
               data-aos-delay={200}
             >
               <div className="service horizontal d-flex">
                 <div className="service-icon color-2 mb-4">
                   <svg
                     className="bi bi-arrow-repeat"
                     width="1em"
                     height="1em"
                     viewBox="0 0 16 16"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fillRule="evenodd"
                       d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
                     />
                     <path
                       fillRule="evenodd"
                       d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
                     />
                   </svg>
                 </div>{" "}
                 {/* /.icon */}
                 <div className="service-contents">
                   <h3>Modern Design</h3>
                   <p>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts.
                   </p>
                 </div>{" "}
                 {/* /.service-contents*/}
               </div>{" "}
               {/* /.service */}
             </div>
             <div
               className="col-lg-6 mb-4"
               data-aos="fade-up"
               data-aos-delay={300}
             >
               <div className="service horizontal d-flex">
                 <div className="service-icon color-3 mb-4">
                   <svg
                     className="bi bi-briefcase"
                     width="1em"
                     height="1em"
                     viewBox="0 0 16 16"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fillRule="evenodd"
                       d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                     />
                     <path
                       fillRule="evenodd"
                       d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                     />
                   </svg>
                 </div>{" "}
                 {/* /.icon */}
                 <div className="service-contents">
                   <h3>High end comunication</h3>
                   <p>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts.
                   </p>
                 </div>{" "}
                 {/* /.service-contents*/}
               </div>{" "}
               {/* /.service */}
             </div>
             <div
               className="col-lg-6 mb-4"
               data-aos="fade-up"
               data-aos-delay={400}
             >
               <div className="service horizontal d-flex">
                 <div className="service-icon color-4 mb-4">
                   <svg
                     className="bi bi-collection"
                     width="1em"
                     height="1em"
                     viewBox="0 0 16 16"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fillRule="evenodd"
                       d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                     />
                   </svg>
                 </div>{" "}
                 {/* /.icon */}
                 <div className="service-contents">
                   <h3>Bring Ideas to Life</h3>
                   <p>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts.
                   </p>
                 </div>{" "}
                 {/* /.service-contents*/}
               </div>{" "}
               {/* /.service */}
             </div>
           </div>{" "}
           {/* /.row */}
         </div>{" "}
         {/* /.container */}
       </div>{" "}
       {/* team section */}
       <section
         className="contact_section layout_padding"
         style={{ backgroundColor: "#e7ecef" }}
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
