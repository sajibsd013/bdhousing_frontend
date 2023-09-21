<template>
  <div class="container">
    <div class="raw my-5">
      <div class="col-md-7 mx-auto card rounded p-md-5 p-3">
        <h1 class="mb-3 display-4" style="font-weight: 350; color: #084298">
          Contact us
        </h1>
        <div class="row">
          <div class="col mb-3">
            <label class="form-label">First Name</label>
            <input type="text" class="form-control" placeholder="First Name" />
          </div>
          <div class="col mb-3">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-control" placeholder="Last Name" />
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Email:</label>
          <input
            type="text"
            class="form-control"
            placeholder="name@email.com"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Subject</label>
          <input type="text" class="form-control" placeholder="Subject" />
        </div>
        <div class="mb-3">
          <label class="form-label">Message:</label>
          <textarea
            name=""
            class="form-control"
            placeholder="write Your message Here"
            rows="3"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Bangladesh Tax Digitization || Contact us",
    };
  },
};
</script>

<style></style>
