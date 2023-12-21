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
                       We Improve your <em>Company</em> with <span>AI</span>{" "}
                       Products
                     </h2>
                     <p>
                       ALYST is a professional company working for better
                       future. We want to optimize the works in each company
                       trought utilizing AI work
                     </p>
                     {/* <form id="search" action="#" method="GET">
                <fieldset>
                  <input
                    type="address"
                    name="address"
                    className="email"
                    placeholder="Your website URL..."
                    autoComplete="on"
                    required=""
                  />
                </fieldset>
                <fieldset>
                  <button type="submit" className="main-button">
                    Analyze Site
                  </button>
                </fieldset>
              </form> */}
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
                   Our goal is to help companies with Artoficial Inteligence. To
                   make the work and logistics simler and generate more income.
                 </p>
                 <div className="btn-box">
                   <a href="">Read More</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* end about section */}\{/* service section */}
       <section id="service" className="service">
         <div className="container">
            
           <div className="heading_container heading_center">
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
                     <a href="#">
                       largest dealership <span> of</span> car
                     </a>
                   </h2>
                   <p>
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                     odit aut den fugit sed quia.
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
                     <i className="flaticon-car-repair" />
                   </div>
                   <h2>
                     <a href="#">unlimited repair warrenty</a>
                   </h2>
                   <p>
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                     odit aut den fugit sed quia.
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
                     <i className="flaticon-car-1" />
                   </div>
                   <h2>
                     <a href="#">insurence support</a>
                   </h2>
                   <p>
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                     odit aut den fugit sed quia.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/*/.container*/}
       </section>
   
       
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
       {/* contact section */}
       <section className="callto-action-area section-gap" id="join">
         <div className="container">
           <div className="row d-flex justify-content-center">
             <div className="menu-content col-lg-9">
               <div className="title text-center">
                 <h1 className="mb-10 text-white">Join us today</h1>
                 <p className="text-white">
                   Make the dream true wit us. Become a deliver and make money
                   when you want. Deliver order in your time schedule and
                   preferred day. Have own customers and live the life you
                   deserve
                 </p>
                 <a className="primary-btn" href="#">
                   Make deliver account
                 </a>
                 <a className="primary-btn" href="#">
                   Lear more
                 </a>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* end contact section */}
       {/* team section */}
       <section
         className="contact_section layout_padding"
         style={{ backgroundColor: "#89b2ff7a" }}
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
