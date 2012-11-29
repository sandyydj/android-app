var userType = localStorage.getItem("userType") || ""
  , shortTerm = localStorage.getItem("shortTerm") || ""



function isValid() {
  return userType === "" || shortTerm === "";
}



function renderPlan() {
  if (isValid()) {
    return;
  }

  $("span.userType").text(userType === "t" ? "Lehrer" : "Klasse");
  $("span.shortTerm").text(window[userType + "Hash"][shortTerm]);
  $("div#shortTermSelectBoxHtml select").html(getOptionsHtml())

  var url = "http://iskariot.uphero.com/index.php?art=" +
    userType + "&nummer=" + userType + getPlaceholder(shortTerm) + shortTerm;

  $("#iframeId").attr("src", url);
}



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



function getOptionsHtml() {
  var html = "";

  $.each(window[userType + "Hash"], function (value, key) {
    html += '<option value="' + value + '">' + key + '</option>';
  });

  return html;
}



$(document).ready(function () {
  renderPlan();

  // user type selection
  $(".userType").change(function () {
    userType = $(".userType option:selected").val()
    localStorage.setItem("userType", userType);

    // prepare short term selection
    $("span.shortTerm").text("Kuerzel waehlen")
    $("div#shortTermSelectBoxHtml select").html(getOptionsHtml())
  });



  // short term selection
  $(".shortTerm").change(function () {
    shortTerm = $(".shortTerm option:selected").val()
    localStorage.setItem("shortTerm", shortTerm);

    renderPlan()
  });



  // refresh button
  $("a#refreshButton").click(function () {
    renderPlan();
  });
});
