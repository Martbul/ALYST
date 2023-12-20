import { Link } from "react-router-dom";
export default function Home() {
   return (
     <>
<div
style={{backgroundColor:'white'}}
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
                We Improve your <em>Company</em> with <span>AI</span> Products
              </h2>
              <p>
                ALYST is a professional company working for better future. We want to optimize the works in each company trought utilizing AI work
                
              </p>
              <form id="search" action="#" method="GET">
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
              </form>
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
                src="/src/public/images/AIHome.jpg"
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
       <section className="about_section layout_padding" style={{backgroundColor:'#003554'}}>
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
                   Our goal is to help companies with Artoficial Inteligence.
                    To make the work and logistics simler and generate more income.
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
       <section className="service_section layout_padding">
         <div className="container">
           <div className="heading_container heading_center">
             <h2 >Our services </h2>
           </div>
           <div className="row">
             <div className="col-md-4">
               <div className="box ">
                 <div className="img-box">
                   <svg
                     enableBackground="new 0 0 512 512"
                     height={512}
                     viewBox="0 0 512 512"
                     width={512}
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <g>
                       <g>
                         <circle cx={256} cy={125} r={15} />
                         <path d="m356 262c-18.955 0-35.996-10.532-44.472-27.484l-2.111-4.223c-2.541-5.083-7.735-8.293-13.417-8.293h-80c-5.682 0-10.876 3.21-13.417 8.292l-2.111 4.222c-8.476 16.954-25.517 27.486-44.472 27.486-8.284 0-15 6.716-15 15v85.597c0 33.654 10.619 65.715 30.708 92.716 20.089 27 47.747 46.384 79.982 56.054 1.406.422 2.858.633 4.31.633s2.904-.211 4.31-.633c32.235-9.67 59.893-29.054 79.982-56.054 20.089-27.001 30.708-59.062 30.708-92.716v-85.597c0-8.284-6.716-15-15-15zm-46.967 87.322-56.568 56.568c-2.929 2.929-6.768 4.394-10.606 4.394s-7.678-1.464-10.606-4.394l-28.284-28.284c-5.858-5.858-5.858-15.355 0-21.213 5.857-5.858 15.355-5.858 21.213 0l17.678 17.677 45.962-45.961c5.857-5.858 15.355-5.858 21.213 0 5.856 5.858 5.856 15.355-.002 21.213z" />
                         <g>
                           <path d="m485.371 179.287-220-176c-5.479-4.383-13.263-4.383-18.741 0l-220 176c-6.469 5.175-7.518 14.614-2.342 21.083 5.175 6.468 14.614 7.517 21.083 2.342l30.629-24.503v232.791c0 8.284 6.716 15 15 15h31.119c-7.333-20.12-11.119-41.476-11.119-63.403v-85.597c0-24.813 20.187-45 45-45 7.632 0 14.226-4.075 17.639-10.901l2.112-4.224c7.67-15.342 23.093-24.875 40.249-24.875h80c17.156 0 32.579 9.533 40.25 24.878l2.111 4.223c3.412 6.824 10.007 10.899 17.639 10.899 24.813 0 45 20.187 45 45v85.597c0 21.927-3.786 43.283-11.119 63.403h31.119c8.284 0 15-6.716 15-15v-232.791l30.629 24.503c2.766 2.213 6.075 3.288 9.361 3.288 4.4 0 8.76-1.927 11.722-5.63 5.176-6.469 4.127-15.908-2.341-21.083zm-229.371-9.287c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" />
                         </g>
                       </g>
                       <g>
                         <path d="m156 15c0-8.284-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15v70.372l60-48z" />
                       </g>
                     </g>
                   </svg>
                 </div>
                 <div className="detail-box">
                   <h6>Get weekly groceries</h6>
                   <p>Make order for your weekly groceries with us.</p>
                   <a href="">Read More</a>
                 </div>
               </div>
             </div>
             <div className="col-md-4">
               <div className="box ">
                 <div className="img-box">
                   <svg
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     x="0px"
                     y="0px"
                     viewBox="0 0 512 512"
                     style={{ enableBackground: "new 0 0 512 512" }}
                     xmlSpace="preserve"
                   >
                     <g>
                       <g>
                         <g>
                           <circle cx="219.429" cy="393.143" r="18.286" />
                           <path
                             d="M219.429,329.143c-40.396,0-73.143,32.747-73.143,73.143c0,40.396,32.747,73.143,73.143,73.143
    c40.396,0,73.143-32.747,73.143-73.143C292.525,361.909,259.805,329.189,219.429,329.143z M228.571,428.416V448
    c0,5.049-4.093,9.143-9.143,9.143c-5.049,0-9.143-4.093-9.143-9.143v-19.584c-17.831-4.604-29.458-21.749-27.137-40.018
    c2.32-18.269,17.864-31.963,36.28-31.963c18.416,0,33.959,13.694,36.28,31.963C258.029,406.667,246.403,423.812,228.571,428.416z
    "
                           />
                           <path
                             d="M402.286,274.286v-36.571c-0.01-10.095-8.191-18.276-18.286-18.286H215.772c-12.18-0.01-23.558-6.08-30.348-16.192
    l-20.321-30.487c-3.392-5.109-9.117-8.179-15.25-8.179H54.857c-10.095,0.01-18.276,8.191-18.286,18.286v310.857
    c0.01,10.095,8.191,18.276,18.286,18.286h352.516c-3.294-5.533-5.051-11.846-5.088-18.286V274.286z M304.069,436.92
    c-14.047,34.375-47.506,56.826-84.64,56.795c-37.135,0.031-70.593-22.419-84.64-56.795c-14.047-34.375-5.888-73.833,20.64-99.818
    v-35.388c0.04-35.33,28.67-63.96,64-64c35.33,0.039,63.961,28.67,64,64v35.388C309.957,363.087,318.116,402.545,304.069,436.92z"
                           />
                           <path d="M384,73.143h41.929l-60.214-60.214v41.929C365.724,64.952,373.905,73.133,384,73.143z" />
                           <path
                             d="M265.143,323.227v-21.513c-0.044-25.229-20.485-45.67-45.714-45.714c-25.235,0.03-45.685,20.479-45.714,45.714v21.513
    C201.959,306.734,236.898,306.734,265.143,323.227z"
                           />
                           <path
                             d="M420.571,256v219.429c10.095-0.01,18.276-8.191,18.286-18.286V91.429H384c-20.188-0.023-36.548-16.383-36.571-36.571V0
    h-256C81.334,0.01,73.153,8.191,73.143,18.286v128h76.71c12.247-0.005,23.684,6.122,30.464,16.321l20.295,30.446
    c3.395,5.048,9.077,8.08,15.161,8.089H384c20.188,0.023,36.548,16.383,36.571,36.571V256z M310.857,182.857h-91.429
    c-5.049,0-9.143-4.093-9.143-9.143s4.093-9.143,9.143-9.143h91.429c5.049,0,9.143,4.093,9.143,9.143
    S315.907,182.857,310.857,182.857z M310.857,146.286H201.143c-5.049,0-9.143-4.093-9.143-9.143c0-5.049,4.093-9.143,9.143-9.143
    h109.714c5.049,0,9.143,4.093,9.143,9.143C320,142.192,315.907,146.286,310.857,146.286z M310.857,109.714H109.714
    c-5.049,0-9.143-4.093-9.143-9.143c0-5.049,4.093-9.143,9.143-9.143h201.143c5.049,0,9.143,4.093,9.143,9.143
    C320,105.621,315.907,109.714,310.857,109.714z M310.857,73.143H109.714c-5.049,0-9.143-4.093-9.143-9.143
    s4.093-9.143,9.143-9.143h201.143c5.049,0,9.143,4.093,9.143,9.143S315.907,73.143,310.857,73.143z"
                           />
                           <path
                             d="M457.143,265.143v192c-0.023,20.188-16.383,36.548-36.571,36.571c0.01,10.095,8.191,18.276,18.286,18.286h18.286
    c10.095-0.01,18.276-8.191,18.286-18.286V283.429C475.419,273.334,467.238,265.153,457.143,265.143z"
                           />
                         </g>
                       </g>
                     </g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                   </svg>
                 </div>
                 <div className="detail-box">
                   <h6>Save time</h6>
                   <p>Almost 90% of the people shop every week.</p>
                   <a href="">Read More</a>
                 </div>
               </div>
             </div>
             <div className="col-md-4">
               <div className="box ">
                 <div className="img-box">
                   <svg
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     x="0px"
                     y="0px"
                     viewBox="0 0 512 512"
                     style={{ enableBackground: "new 0 0 512 512" }}
                     xmlSpace="preserve"
                   >
                     <g>
                       <g>
                         <path d="M332,423.518V512h60v-15C392,460.784,366.197,430.487,332,423.518z" />
                       </g>
                     </g>
                     <g>
                       <g>
                         <path
                           d="M407,272h-38.298c6.211-9.549,11.184-21.85,14.971-32.595c38.58-3.058,69.119-35.067,69.119-74.405
           c0-24.814-20.186-45-45-45h-17.263c-3.373-30.112-16.168-58.339-38.108-80.581C326.639,14.004,290.742,0,255,0
           c-69.309,0-125.911,52.685-133.484,120H105c-24.814,0-45,20.186-45,45c0,24.476,11.836,46.095,30.066,59.685
           C90.062,224.797,90,224.888,90,225v48.516C39.25,280.873,0,324.245,0,377v60c0,41.353,33.633,75,75,75h227v-90h-15H105
           c-8.291,0-15-6.709-15-15v-60c0-8.291,6.709-15,15-15s15,6.709,15,15v45h120v-61.373c4.988,0.569,9.946,1.373,15,1.373
           s12.012-0.804,17-1.373V392h15h30h75v-45c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15v60c0,8.291-6.709,15-15,15h-16.75
           c19.534,19.08,31.75,45.608,31.75,75v15h15c41.367,0,75-33.647,75-75v-60C512,319.109,464.891,272,407,272z M392,195v-45h15.791
           c8.262,0,15,6.724,15,15c0,20.33-13.638,37.354-32.179,42.914C391.033,203.597,392,199.378,392,195z M255,30
           c27.803,0,56.229,10.928,76.209,30.63c16.238,16.45,26.111,37.178,29.319,59.37H287c-8.291,0-15,6.709-15,15v15h-32v-15
           c0-8.291-6.709-15-15-15h-73.484C158.873,69.25,202.244,30,255,30z M90,165c0-8.276,6.738-15,15-15h15v45
           c0,4.292,0.956,8.425,1.362,12.66C103.239,201.843,90,185.03,90,165z M120,272v-34.219c2.75,0.564,5.449,1.283,8.298,1.542
           c3.787,10.774,8.774,23.103,15,32.677H120z M326.316,275.706c-29.136,25.422-72.715,31.761-108.047,19.067
           c-11.777-4.237-22.866-10.593-32.578-19.063c-20.881-18.376-33.043-46.22-34.929-73.644C159.448,206.968,169.332,210,180,210
           c11.235,0,21.636-3.298,30.637-8.694C213.739,223.118,232.346,240,255,240c8.291,0,17-6.709,17-15s-8.709-15-17-15
           c-8.262,0-15-6.724-15-15v-15h40.346c10.411,17.847,29.55,30,51.654,30c10.668,0,20.552-3.032,29.238-7.934
           C359.352,229.501,347.186,257.357,326.316,275.706z"
                         />
                       </g>
                     </g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                     <g></g>
                   </svg>
                 </div>
                 <div className="detail-box">
                   <h6>Earn as a deliver</h6>
                   <p>You can become a deliver and make money when you want.</p>
                   <a href="">Read More</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* end service section */}
       {/* client section */}
       <section className="client_section layout_padding">
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
      
       <section className="contact_section layout_padding" style={{backgroundColor :'#C2CCD1'}} >
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
