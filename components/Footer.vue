<template>
  <section class=" d-none d-md-block mb-md-0 ">
    <section id="contact" class="footer_wrapper pt-5 mt-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <img
              src="~/static/img/footerlogo.png"
              alt="sasthosebok.com"
              class="d-none d-md-block mb-4"
              width="150"
            />


            <div class="contact-info">
              <ul class="list-unstyled p-0">
                <li>
                  <a href="mailto:info@bdhousingtax.com"
                    ><i class="icofont-ui-message me-2"></i>
                    info@bdhousingtax.com</a
                  >
                </li>
              </ul>
              <ul
                class="social-network d-flex align-items-center p-0 d-none d-md-flex"
              >
                <li>
                  <a href="#" target="_blank"
                    ><i class="icofont-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="#" target="_blank"
                    ><i class="icofont-youtube"></i
                  ></a>
                </li>
                <li>
                  <a href="#"><i class="icofont-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 d-none d-md-block">
            <h5>Our Services</h5>
            <ul class="link-widget p-0">
              <li>
                <NuxtLink to="/check-tax" class="text-light">ট্যাক্স যাচাই</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/house" class="text-light">খানা প্রদানের তথ্য</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/taxs" class="text-light"
                  >কর মূল্যয়ন তথ্য</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 d-none d-md-block">
            <h5>Quick Links</h5>
            <ul class="link-widget p-0">
              <li>
                <NuxtLink to="about" class="text-light">About us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="text-light">FAQs</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact-us" class="text-light"
                  >Contact us</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/privacy" class="text-light">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms" class="text-light">
                  Terms & Conditions
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 ">
            <h5>Newsletter</h5>
            <div class="form-group mb-4">
              <input
                type="email"
                class="form-control bg-transparent"
                placeholder="Enter Your Email Here"
              />
              <button
                type="submit"
                class="btn btn-success rounded-2 mt-3 border-white text-white"
              >
                Subscribe
              </button>
            </div>
 
          </div>
        </div>
      </div>
      <div
        class="container-fluid copyright-section py-1 small mb-0 d-none d-md-block"
      >
        <small class="p-0 text-light">
          Copyright &copy;
          <a href="#" class="">
            <span class="fw-bold">bdhousingtax.com </span>
          </a>
          All Rights Reserved, developed by
          <a
            href="https://www.linkedin.com/in/sajibsd013/"
            target="_blank"
            class=""
            >Sajib Sutradhar</a
          >
        </small>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
