﻿var RestroId = ""; function BindkitchenName() { RestroId = jquery_min_p("#lblrestroid").text(), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/KitchenScreen/BindkitchenName", data: "{}", dataType: "json", async: !1, success: function (e) { var l = 0; for (l = 0; l < e.length; l++) { var a = $("<option>"); a.attr("value", e[l].kitchensectionId).text(e[l].name), $("#changesection").append(a) } }, error: function () { } }) } function BindKitchenScreen() { jquery_min_p("#test").html(""), RestroId = jquery_min_p("#lblrestroid").text(); var e = jquery_min_p("#changesection").val(); jquery_min_p("#changesection option:selected").text(); jquery_min_p("#lblpagetitle").text("Kitchen Screen"), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/KitchenScreen/BindKitchenScreen", data: "{'RestroId':'" + RestroId + "','KitchenScreenId':'" + e + "'}", dataType: "json", async: !1, success: function (e) { var l = 0, a = "", t = e.Table1; for (e.Table2, l = 0; l < t.length; l++) 3 == t[l].ordertypeId ? (a = a + " <div class='width21 orderbrd ml-3 mt-3' data-toggle='modal' onclick='OpenItemPopUp(" + t[l].orderId + "," + t[l].KOTId + "," + t[l].ordertypeId + ")'>", a += "<div class='takeawaytop'>", a = (a += "<label class='col-md-5 fontBold textwhite'>KOT No:</label>") + "<label class='col-md-6 p-0 textwhite'>" + t[l].KOTId + "</label>", a += "</div>", a += "<div class='col-md-12 kitchenordercard'>", a += "<div class='row'>", a = (a += "<label class='col-md-5 fontBold'>Order No:</label>") + "<label class='col-md-6 p-0'>" + t[l].OrderNo + "</label>", a += "</div>", a += "<div class='row'>", a = (a += "<label class='col-md-5 fontBold'>Time:</label>") + "<label class='col-md-6 p-0'>" + t[l].tim + "</label>", a += "</div>", a += "<div class='row'>", a = (a += "<label class='col-md-5 fontBold'>Waiter Name:</label>") + "<label class='col-md-6 p-0'>" + t[l].EmpName + "</label>", a += "</div>", a += "<div class='row'>", a = (a += "<label class='col-md-5 fontBold'>Table:</label>") + "<label class='col-md-6 p-0'>" + t[l].TableNo + "</label>", a += "</div>", a += "</div>", a += "</div>") : 1 == t[l].ordertypeId && (a = a + " <div class='width21 orderbrd ml-3 mt-3' data-toggle='modal' onclick='OpenItemPopUp(" + t[l].orderId + "," + t[l].KOTId + "," + t[l].ordertypeId + ")'>", a += "<div class='dineintop'>", a = (a += "<label class='col-md-5 fontBold textwhite'>KOT No:</label>") + "<label class='col-md-6 p-0 textwhite'>" + t[l].KOTId + "</label>", a += "</div>", a += "<div class='col-md-12 dinein'>", a += "<div class='row'>", a = (a += "<label class='col-md-5 fontBold'>Order No:</label>") + "<label class='col-md-6 p-0'>" + t[l].OrderNo + "</label>", a += "</div>", a += "<div class='row'>", a = (a += "<label class='col-md-5 fontBold'>Time:</label>") + "<label class='col-md-6 p-0'>" + t[l].tim + "</label>", a += "</div>", a += "<div class='row'>", a = (a += "<label class='col-md-5 fontBold'>Waiter Name:</label>") + "<label class='col-md-6 p-0'>" + t[l].EmpName + "</label>", a += "</div>", a += "<div class='row'>", a = (a += "<label class='col-md-5 fontBold'>Table:</label>") + "<label class='col-md-6 p-0'>" + t[l].TableNo + "</label>", a += "</div>", a += "</div>", a += "</div>"); jquery_min_p("#test").append(a), jquery_min_p("#preloader").css("display", "none"), jquery_min_p("#Overlay_Load").css("visibility", "hidden") }, beforesend: function () { jquery_min_p("#preloader").css("display", "block"), jquery_min_p("#Overlay_Load").css("visibility", "visible") }, error: function () { } }) } function OpenItemPopUp(e, l, a) { jquery_min_p("#ordernumber").html(""); var t = jquery_min_p("#lblrestroid").text(), d = jquery_min_p("#changesection").val(); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/KitchenScreen/BindKitchenScreen_Items", data: "{'RestroId':'" + t + "','KitchenScreenId':'" + d + "','OrderID':'" + e + "','KotId':'" + l + "'}", dataType: "json", async: !1, success: function (t) { var d = 0, o = ""; o += "<div  class='modal-dialog modal-md'>", o += "<div  class='modal-content'>", o += "<div  class='modal-header'>", o += "<button type='button' class='close' onclick='Closepopup()'>", o += "<span class='cross'>&times;</span>", o += "</button>", o += "<h4 class='modal-title'>", o += "Item", o += "</h4>", o += "</div>", o += "<div  class='modal-body'>", o += "<div  class='col-sm-12 col-md-12 pl-0'>", o += "<div  class='row'>", o += "<div  class='width100 orderbrd ml-3'>", 1 == a ? o += "<div  class='col-md-12 dinein'>" : 3 == a && (o += "<div  class='col-md-12 kitchenordercard'>"), o += "<div  class='row'>", o = (o += "<label class='col-md-3 fontBold'>KOT No:</label>") + "<label class='col-md-2 p-0'>" + t[0].KOTId + "</label>", o = (o += "<label class='col-md-3 fontBold pl-0'>Order No:</label>") + "<label class='col-md-3 p-0'>" + t[0].OrderNo + "</label>", o += "</div>", o += "</div>", o += "<div  class='col-md-12 orderscroll'>", o += "<div  class='row orderheadling'>", o += "<label class='col-md-5 fontBold' style='color:#fff'>Item</label>", o += "<label class='col-md-3 p-0' style='color:#fff'>AddOn</label>", o += "<label class='col-md-3 p-0' style='color:#fff'>Qty</label>", o += "</div>"; for (d = 0; d < t.length; d++) { if (o = (o = (o = (o += "<div  class='row mt-1'>") + "<label class='col-md-5 fontBold'>" + t[d].ItemName + "</label>") + "<label class='col-md-3 p-0'>" + t[d].AddOns + "</label>") + "<label class='col-md-2 p-0'>" + t[d].Quantity + "</label>", "O" == t[d].itemstatus.trim()) var s = "Preparing"; else if ("CS" == t[d].itemstatus.trim()) s = "Bump"; o = o + "<button type='button' class='btn btn-success btn-sm pull-right' onclick='btnprepare_click( " + e + "," + l + "," + a + "," + t[d].orderitemsId + ',"' + t[d].itemstatus.trim() + "\" )'>" + s + "</button>", o += "</div>" } o += "</div>", o += "</div>", o += "</div>", o += "</div>", o += "</div>", o += "</div>", o += "</div>", jquery_min_p("#ordernumber").append(o), jquery_min_p("#ordernumber").show() }, error: function () { } }) } function Closepopup() { jquery_min_p("#ordernumber").hide() } function btnprepare_click(e, l, a, t, d) { var o = t; "O" == d.trim() && (RestroId = jquery_min_p("#lblrestroid").text(), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/KitchenScreen/prepare_click", data: "{'RestroId':'" + RestroId + "','orderitemsId':'" + o + "'}", dataType: "json", async: !1, success: function (t) { "1" == t[0].result && (BindKitchenScreen(), jquery_min_p("#ordernumber").hide(), OpenItemPopUp(e, l, a)) }, error: function () { } })), "CS" == d.trim() && (RestroId = jquery_min_p("#lblrestroid").text(), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/KitchenScreen/Bumped_click", data: "{'RestroId':'" + RestroId + "','orderitemsId':'" + o + "'}", dataType: "json", async: !1, success: function (t) { "1" == t[0].result ? (BindKitchenScreen(), jquery_min_p("#ordernumber").hide(), OpenItemPopUp(e, l, a)) : (BindKitchenScreen(), jquery_min_p("#ordernumber").hide()) }, error: function () { } })) } jquery_min_p(document).ready(function () { RestroId = jquery_min_p("#lblrestroid").text(), BindkitchenName(), BindKitchenScreen(), setInterval(BindKitchenScreen, 5e3) });