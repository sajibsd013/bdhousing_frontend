<template>
  <div>
    <div class="card mx-auto" style="max-width: 400px" id="element-to-capture">
      <div class="card-body small" v-if="result?.data?.id">
        <h6 class="mb fw-semibold text-center">ট্যাক্স যাচাই</h6>
        <hr />
        <div class="row">
          <h6 class="fw-semibold small col-5">হোল্ডিং নং</h6>
          <p class="small col-7">: {{ result.data.holding }}</p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">নাম</h6>
          <p class="small col-7">: {{ result.data.name }}</p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">পিতা</h6>
          <p class="small col-7">: {{ result.data.father }}</p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">গ্রাম</h6>
          <p class="small col-7">: {{ result.data.village }}</p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">বকেয়া</h6>
          <p class="small col-7">: {{ result.data.due_tax }}</p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">মোট ট্যাক্স</h6>
          <p class="small col-7">: {{ result.data.total_tax }}</p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">অবশিষ্ট বকেয়া</h6>
          <p class="small col-7">: {{ result.data.remaining_due_tax }}</p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">আদায়ের তারিখ</h6>
          <p class="small col-7">
            : {{ formatDate(result.data.created_date) }}
          </p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">আদায়ের সন</h6>
          <p class="small col-7">: {{ result.data.collection_year }}</p>
        </div>
        <div class="row">
          <h6 class="fw-semibold small col-5">মোবাইল</h6>
          <p class="small col-7">
            : {{ convertToBengali(result.data.mobile) }}
          </p>
        </div>
        <hr />
        <p class="small">ধন্যবাদ,আমরা সবাই দিবো কর, দেশ হবে স্বনির্ভর।</p>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "Download",
  props: {
    result: Object,
  },
  methods: {
    formatDate(dateString) {
      // const date = new Date(dateString);
      // const fullDateUS = date.toLocaleDateString("en-US");
      // console.log(dateString,date,fullDateUS)
      const parts = dateString.split('T');
      return this.convertToBengali(parts[0]);
    },
    convertToBengali(number) {
      const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      // Convert each digit of the number
      const bengaliDigits = number
        .toString()
        .split("")
        .map((digit) =>
          englishNumbers.includes(digit)
            ? bengaliNumbers[englishNumbers.indexOf(digit)]
            : digit
        );
      return bengaliDigits.join("");
    },

  },
};
</script>

