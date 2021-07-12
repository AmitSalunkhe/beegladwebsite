import react from 'react';

class Home extends react.Component{
    render(){
        return(
        <div> 
            
            <body>
    {/* <!-- Loading Screen --> */}
    <div id="loader-wrapper">
      <div id="loader"></div>
      <h1 class="loader-logo">B</h1>
      <h3 class="spaced loader-text">LOADING</h3>
    </div>

    {/* <!-- //// HEADER //// --> */}
    <header id="main-header">
      <nav class="navbar navbar-default navbar-fixed-top main-navbar">
        {/* <!-- Main Navbar --> */}
        <div class="container">
          <div class="navbar-header">
            <a href="#" class="navbar-brand" id="logo">
              <img
                src="assets/images/beelogo200x99.png"
                class="img-responsive"
                alt="site logo"
            /></a>
            {/* <!--- Site Logo --> */}
            <button
              type="button"
              id="hamburger"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navHeaderCollapse"
            >
              {/* <!-- Mobile Menu Button --> */}
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse navHeaderCollapse">
            <ul class="nav navbar-nav navbar-right">
              {/* <!-- Nav Links --> */}
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#features">SERVICES</a></li>
              <li><a href="#screenshots">TECHNOLOGY</a></li>
              <li><a href="#portfolio">PORTFOLIO</a></li>
              <li><a href="#clients">CLIENTS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>
     {/*  <!-- Main Navbar End --> */}
    </header>
    {/* <!-- Header End --> */}

    {/* <!-- /// HERO SECTION /// --> */}
    <div id="hero-section">
      <div id="particles-web"></div>
      <div class="row hero-unit">
        <div class="container">
          <div class="hero-caption">
           {/*  <!-- Main Tagline --> */}
            <h1 class="strong spaced tagline">
              We Build <span class="colored">Mobile & Web</span>
              <span class="colored">.</span>Applications
            </h1>
            <p class="hero-tags">
              We are team of engineers and developers. We believe in delivering
              excellence. We are committed to help our clients achieve their
              desired milestone. With integrity & transparency, we demonstrate a
              strong commitment to sustainable and scalable business practices.
              Our values of innovation and collaboration drive us to achieve
              lasting success for our clients.
            </p>
            <a href="#contact"
              ><buttom class="button download">Contact Us</buttom></a>
            
            <a href="#about"><buttom class="button">Learn More</buttom></a>
          </div>
          <div class="img-container">
            <img
              src="assets/images/beehero.svg"
              id="hero-mockup"
              class="img-responsive mockup animation-element pop-in"
            />
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Hero Section End --> */}

    {/* <!-- //// ABOUT SECTION /// --> */}
    <div id="about-section" class="large-margin angled-section">
      <div class="container">
        <a id="about"></a>
        {/* <!-- Nav Anchor --> */}
        <div class="row tiny-margin text-center section-heading">
          {/* <!-- Section Heading --> */}
          <h1 class="strong spaced heading">
            <span class="colored">WHAT</span> We<span class="colored"> Do</span>
          </h1>
          <i class="fa fa-chevron-down fa-lg colored"></i>
        </div>
        {/* <!-- Heading End --> */}
        <div class="row small-margin medium-margin text-center">
          <div class="col-md-10 col-md-offset-1">
            <p>
              We build mobile & web app with lot many features for the ease of
              our customers business. Our app development have unparalleled
              features & performance. Our team is expertise in building complex
              apps, Blogs, Shopping Cart, Content Management System, WordPress
              app & plugins , Online Catalogues, integration of payment gateway
              with most latest features and incorporating the most latest
              technologies for big or small business.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img
              src="assets/images/serviceSection.svg"
              id="feature-mockup"
              class="mockup img-responsive animation-element fade-in"
            />
          </div>
          <div class="col-md-6">
            <div class="row tiny-margin">
              <div
                class="col-md-10 top-feature animation-element slide-in-right"
              >
                <i class="pe-7s-edit pe-3x colored"></i>
                <div class="top-feature-text">
                  <h2>Build Transferable Software Product</h2>
                  <p>
                    We build software products for our Customers and , we
                    transfer the full ownership of software products whenever
                    customers are ready.
                  </p>
                </div>
              </div>
            </div>
            <div class="row tiny-margin">
              <div
                class="
                  col-md-10
                  top-feature
                  animation-element
                  slide-in-right
                  delayed
                "
              >
                <i class="pe-7s-cup pe-3x colored"></i>
                <div class="top-feature-text">
                  <h2>Remote Resource Augmentation</h2>
                  <p>
                    This model used by clients they already have existing team
                    and they were inserted to add remote team members. We have
                    super experience in working with remote client teams across
                    different time zones.
                  </p>
                </div>
              </div>
            </div>
            <div class="row tiny-margin">
              <div
                class="
                  col-md-10
                  top-feature
                  animation-element
                  slide-in-right
                  delayed-1
                "
              >
                <i class="pe-7s-shield pe-3x colored"></i>
                <div class="top-feature-text">
                  <h2>Managed Solution Delivery</h2>
                  <p>
                    Minimal involvement with timely deliveries prepared by
                    clients. we get a full ownership of entire solution delivery
                    and worked accordingly timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- //// FEATURES AND HOW IT WORKS SECTION //// --> */}
    <div id="features-section" class="row large-margin">
      <div class="container">
        <a id="features"></a>
       {/* <!-- Nav Anchor --> */}
        <div class="row small-margin text-center section-heading">
          {/* <!-- Section Heading --> */}
          <h1 class="strong spaced heading">
            Our <span class="colored">Technologies.</span>
          </h1>
          <i class="fa fa-chevron-down fa-lg colored"></i>
        </div>
        {/* <!-- Heading End --> */}
        <div class="row medium-margin">
          <div class="owl-carousel owl-theme">
            <div>
              <img
                src="assets/images/techlogo/technology1.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology4.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology3.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology5.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology6.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology7.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology28.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology29.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology30.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology8.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology9.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology10.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology11.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology12.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology13.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology31.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology32.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology33.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology14.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology15.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology16.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology17.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology18.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology19.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology35.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology36.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology37.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology20.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology21.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology23.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology25.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology26.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology27.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology38.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology39.png"
                class="img-responsive"
              />
            </div>
            <div>
              <img
                src="assets/images/techlogo/technology40.png"
                class="img-responsive"
              />
            </div>
          </div>
        </div>

       {/*  <!--div class="row medium-margin">
                <div class="col-md-4 text-right left-features">
                    <i class="pe-7s-unlock pe-2x animation-element fade-in"></i>
                    <div class="feature-text left animation-element slide-in-left">
                        <h2><span class="colored strong">LOG IN</span> SECURELY</h2>
                        <p>Vivamus congue orci sapien, vitae porta orci vestibulum et. Phasellus eleifend augue in.</p>
                    </div>
                    <i class="pe-7s-upload pe-2x animation-element fade-in"></i>  
                    <div class="feature-text left animation-element slide-in-left">
                        <h2><span class="colored strong">UPLOAD</span> YOUR DATA</h2>
                        <p>Vivamus congue orci sapien, vitae porta orci vestibulum et. Phasellus eleifend augue in.</p>
                    </div>           
                </div>
                <div class="col-md-4">
                    <img src="assets/images/phone_mockup_3.png" id="example-mockup" class="mockup img-responsive">
                </div>
                <div class="col-md-4 right-features">
                    <i class="pe-7s-box2 pe-2x animation-element fade-in"></i>
                    <div class="feature-text right animation-element slide-in-right">
                        <h2><span class="colored strong">COMPRESS</span> AND COMPILE</h2>
                        <p>Vivamus congue orci sapien, vitae porta orci vestibulum et. Phasellus eleifend augue in.</p>
                    </div>
                    <i class="pe-7s-cloud-download pe-2x animation-element fade-in"></i>
                    <div class="feature-text right animation-element slide-in-right">
                        <h2><span class="colored strong">DOWNLOAD</span> RESULTS</h2>
                        <p>Vivamus congue orci sapien, vitae porta orci vestibulum et. Phasellus eleifend augue in.</p>
                    </div>    
                </div>
            </div--> */}
        <div class="row small-margin">
          <h2 class="text-center spaced small-margin">
            <span class="colored">AWESOME</span> FEATURES.
          </h2>
          <div class="col-md-4 extra-features">
            <i class="pe-7s-browser pe-3x colored"></i>
            <div class="extra-feature-text">
              <h3><span class="colored strong">HIGH</span> RESOLUTION</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus.
              </p>
            </div>
          </div>
          <div class="col-md-4 extra-features">
            <i class="pe-7s-light pe-3x colored"></i>
            <div class="extra-feature-text">
              <h3><span class="colored strong">CREATIVE</span> DESIGN</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus.
              </p>
            </div>
          </div>
          <div class="col-md-4 extra-features">
            <i class="pe-7s-phone pe-3x colored"></i>
            <div class="extra-feature-text">
              <h3><span class="colored strong">RETINA</span> READY</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 extra-features">
            <i class="pe-7s-link pe-3x colored"></i>
            <div class="extra-feature-text">
              <h3><span class="colored strong">CLEAN</span> CODE</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus.
              </p>
            </div>
          </div>
          <div class="col-md-4 extra-features">
            <i class="pe-7s-gleam pe-3x colored"></i>
            <div class="extra-feature-text">
              <h3><span class="colored strong">FAST</span> AND SNAPPY</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus.
              </p>
            </div>
          </div>
          <div class="col-md-4 extra-features">
            <i class="pe-7s-loop pe-3x colored"></i>
            <div class="extra-feature-text">
              <h3><span class="colored strong">ROBUST</span> AND EFFICIENT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- //// SCREENSHOTS AND TESTIMONIALS //// --> */}
    <div id="screenshot-section" class="row large-margin angled-section">
      <div class="container">
        <a id="screenshots"></a>
        {/* <!-- Nav Anchor --> */}
        <div class="row small-margin text-center section-heading">
          {/* <!-- Section Heading --> */}
          <h1 class="strong spaced heading">
            <span class="colored">Portfolio</span> Gallery<span class="colored">.</span>
          </h1>
          <i class="fa fa-chevron-down fa-lg colored"></i>
        </div>
        {/* <!-- Heading End --> */}
        <div class="row medium-margin">
          <div class="owl-carousel owl-theme">
            <div>
              <img src="assets/images/productlogo/prod1.jpeg" class="img-responsive" />
            </div>
            <div>
              <img src="assets/images/productlogo/prod2.jpeg" class="img-responsive" />
            </div>
            <div>
              <img src="assets/images/productlogo/prod3.jpeg" class="img-responsive" />
            </div>
          </div>
        </div>
        <div class="row medium-margin">
          <div
            id="carousel-testimonials"
            class="carousel slide"
            data-ride="carousel"
          >
            {/* <!-- Wrapper for slides --> */}
            <div class="carousel-inner text-center" role="listbox">
              <div class="item active">
                {/* <!-- Testimonial Slide --> */}
                <div class="col-md-8 col-md-offset-2 testimonial-container">
                  <h2 class="spaced">JAMES HOLT</h2>
                  <p>Power User</p>
                  <p class="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam orci risus, tempor varius quam et, dictum sollicitudin
                    turpis. Morbi at est justo. Proin efficitur ullamcorper
                    turpis accumsan laoreet. Nullam sit amet nisl purus.
                  </p>
                  <i class="fa fa-star fa-lg colored inline"></i>
                  <i class="fa fa-star fa-lg colored inline"></i>
                  <i class="fa fa-star fa-lg colored inline"></i>
                  <i class="fa fa-star fa-lg colored inline"></i>
                  <i class="fa fa-star-o fa-lg colored inline"></i>
                </div>
              </div>
              {/* <!-- Slide End --> */}
              <div class="item">
                {/* <!-- Testimonial Slide --> */}
                <div class="col-md-8 col-md-offset-2 testimonial-container">
                  <h2 class="spaced">GAVIN JONES</h2>
                  <p>Power User</p>
                  <p class="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam orci risus, tempor varius quam et, dictum sollicitudin
                    turpis. Morbi at est justo. Proin efficitur ullamcorper
                    turpis accumsan laoreet. Nullam sit amet nisl purus.
                  </p>
                  <i class="fa fa-star fa-lg colored inline"></i>
                  <i class="fa fa-star fa-lg colored inline"></i>
                  <i class="fa fa-star fa-lg colored inline"></i>
                  <i class="fa fa-star fa-lg colored inline"></i>
                  <i class="fa fa-star-o fa-lg colored inline"></i>
                </div>
              </div>
              {/* <!-- Slide End --> */}
              {/* <!-- Carousel Controlls --> */}
              <a
                class="control control-left"
                href="#carousel-testimonials"
                role="button"
                data-slide="prev"
              >
                <span class="pe-7s-angle-left pe-4x" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="control control-right"
                href="#carousel-testimonials"
                role="button"
                data-slide="next"
              >
                <span class="pe-7s-angle-right pe-4x" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- //// PRICING SECTION //// --> */}
    <div id="pricing-section" class="row large-margin">
      <div class="container">
        <div class="row medium-margin">
          <div class="row medium-margin text-center section-heading">
            {/* <!-- Section Heading --> */}
            <h1 class="strong spaced heading">
              Our <span class="colored">CLIENTS</span>
              <span class="colored">.</span>
            </h1>
            <i class="fa fa-chevron-down fa-lg colored"></i>
          </div>
          {/* <!-- Heading End --> */}
          <div class="row medium-margin">
            <div class="owl-carousel owl-theme">
              <div>
                <img
                  src="assets/images/clientlogo/client1.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client2.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client3.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client4.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client5.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client6.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client7.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client8.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client9.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client10.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client11.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client13.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client12.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client14.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client15.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client16.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client17.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client18.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client19.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client20.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client21.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client22.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client23.png"
                  class="img-responsive"
                />
              </div>
              <div>
                <img
                  src="assets/images/clientlogo/client25.png"
                  class="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div id="newsletter" class="row text-center animation-element slide-up">
          <h2>Bee-glad</h2>
          <p>Subscribe to get developement updates.</p>
          <form id="signupForm" data-toggle="validator">
            <div class="col-md-8 col-md-offset-2">
              <input
                type="email"
                id="emailsign"
                placeholder="your email"
                required/>
              
              <button type="submit" id="form-signup" class="button">
                SUBSCRIBE
              </button>
              <div id="msgSignup" class="h3 text-center hidden"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* <!-- //// CONTACT SECTION //// --> */}
    <div id="contact-section" class="row angled-section">
      <div class="container">
        <a id="contact"></a>
        {/* <!-- Nav Anchor --> */}
        <div class="row medium-margin text-center section-heading">
          {/* <!-- Section Heading --> */}
          <h1 class="strong spaced heading">
            <span class="colored">GET</span> IN TOUTCH<span class="colored">.</span>
            
              
          </h1>
          <i class="fa fa-chevron-down fa-lg colored"></i>
        </div>
        {/* <!-- Heading End --> */}
        <div class="row">
          <div class="col-md-6">
            <h2 class="tiny-margin">Send Message</h2>
            <form id="contactForm" data-toggle="validator">
              <div class="row">
                <div class="col-md-12 form-group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                    size="35"
                    data-error="Name is required"/>
                  
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              {/* <!-- End of Row --> */}
              <div class="row">
                <div class="col-md-12 form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    size="35"
                    data-error="Email is required"/>
                  
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="row tiny-margin">
                <div class="col-md-12">
                  <input
                    type="text"
                    id="website"
                    placeholder="Website"
                    required
                    size="35"
                  />
                </div>
              </div>
              <div class="row small-margin">
                <div class="col-md-12 form-group">
                  {/* <!-- Message Field --> */}
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                    data-error="Message cannot be empty">
                  </textarea>
                  <div class="help-block with-errors"></div>
                  {/* <!-- Submit Button --> */}
                  <button type="submit" class="button">SEND MESSAGE</button>
                  {/* <!-- Success Message --> */}
                  <div id="msgSubmit" class="text-center hidden"></div>
                </div>
              </div>
              {/* <!-- End of Row --> */}
            </form>
            {/* <!-- Form End --> */}
          </div>
          <div id="address" class="col-md-6">
            <h2 class="tiny-margin">Our Info</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fringilla tincidunt blandit. Nulla eros purus, tempus
              quis ligula non, mollis mattis sem.
            </p>
            <ul>
              <li>
                <i class="pe-7s-phone pe-2x"></i>
                <p><b>Phone:</b> +91 702 013 0253</p>
              </li>
              <li>
                <i class="pe-7s-paper-plane pe-2x"></i>
                <p><b>Email:</b> info@bee-glad.com</p>
              </li>
              <li>
                <i class="pe-7s-map-marker pe-2x"></i>
                <p>
                  <b>Mumbai office:</b> Bee Glad, 1104,Sri Krishna Complex New Link Road Opp Laxmi Industrial Estate
                  Andheri West-801
                </p>
              </li>
              <li>
                <i class="pe-7s-map-marker pe-2x"></i>
                <p>
                  <b>Pune office:</b> Bee Glad, 9-New Ajay,S.B.Road,
                  Pune-16,
                  Pune 411043, India.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Google Map --> */}
    <div id="map-canvas"></div>

    {/* <!-- /// FOOTER SECTION /// --> */}
    <footer id="main-footer">
      <div class="row" id="footer">
        <div class="container">
          <div class="col-md-12 text-center">
            <ul class="social-links">
              <li>
                <a href="https://www.facebook.com/beegladlivinginovation/"
                  ><i class="fa fa-facebook-square fa-lg icon-social"></i>
                </a>
              </li>
              
              <li>
                <a href="https://www.linkedin.com/company/bee-glad/about/"
                  ><i class="fa fa-linkedin-square fa-lg icon-social"></i>
                </a>
              </li>
              
              <li>
                <a href="https://www.instagram.com/beeglad_livinginnovtion/"
                  ><i class="fa fa-instagram fa-lg icon-social"></i>
                </a>
              </li>
            </ul>

            <p id="copyright">
              &copy; Bee-Glad.
              <script type="text/javascript">
                document.write(new Date().getFullYear());
              </script>
            </p>
            {/* <!-- Copyright Text --> */}
            <p>
                All Rights Reserved. Developed By
              <span class="strong">Amit Salunkhe</span>
             
            </p>
          </div>
        </div>
        {/* <!-- Container End --> */}
      </div>
      {/* <!-- End of Row --> */}
    </footer>
    {/* <!-- Footer End --> */}

    
  </body>
            
        </div>
            );    }
}

export default Home;