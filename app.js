$(document).ready(function () {
  var userType = ""
    , shortTerm = ""



  // user type selection
  $(".userType").change(function () {
    userType = $(".userType option:selected").val()
    $("div#shortTermSelectBoxHtml select").html(window[userType + "SelectBoxHtml"])
    $("span.shortTerm").text("Kuerzel waehlen")
  });



  // short term selection
  $(".shortTerm").change(function () {
    shortTerm = $(".shortTerm option:selected").val()

    if (userType === "" || shortTerm === "") {
      return;
    }

    var url = "http://iskariot.uphero.com/index.php?art=" +
      userType + "&nummer=" + userType + getPlaceholder(shortTerm) + shortTerm;

    $("#iframeId").attr("src", url);
  });



  // helper function to prepare required placeholders
  function getPlaceholder(shortTerm) {
    var placeholder = "00";

    if (shortTerm.length === 1) {
      placeholder += "00";
    }

    if (shortTerm.length === 2) {
      placeholder += "0";
    }

    return placeholder;
  }
});
