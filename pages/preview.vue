<template>
  <div>
    <PDF :result="result" />
    <div class="d-flex justify-content-center">
      <button
        @click="downloadPdf"
        class="btn btn-outline-dark btn-sm my-2 me-1"
      >
        Download <i class="icofont-download"></i>
      </button>
      <button @click="printPdf" class="btn btn-outline-dark btn-sm my-2 ms-1">
        Print <i class="icofont-print"></i>
      </button>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default {
  layout: "download",
  data() {
    return {
      result: {},
    };
  },
  methods: {
    async downloadPdf() {
      try {
        // Use html2canvas to take a screenshot of the element
        const element = document.querySelector("#element-to-capture");
        const canvas = await html2canvas(element);
        const dataUrl = canvas.toDataURL();

        // Use jsPDF to create a PDF using the screenshot
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${this.result.data.id}.pdf`);
      } catch (error) {
        console.error("Error generating PDF", error);
      }
    },
    printPdf() {
      // console.log("printPrescription called");
      // print();
      // Get HTML to print from element
      const prtHtml = document.getElementById("element-to-capture").innerHTML;

      // Get all stylesheets HTML
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }

      // Open the print window
      const WinPrint = window.open(
        " ",
        " ",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );

      WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
    <style>
      ._edit_items{
        display: none;
      }
    </style>
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      // WinPrint.close();
    },
  },
  mounted() {
    this.result = JSON.parse(this.$route.query.result);
    console.log(this.$route.query.result, this.result);
  },
};
</script>

<style></style>
