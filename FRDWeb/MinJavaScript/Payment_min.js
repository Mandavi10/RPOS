﻿var selected_otherid = 0; function BindOrderDetail() { const t = new URLSearchParams(window.location.search).get("orderId"); restroid = jquery_min_p("#lblrestroid").text(); var e = t; jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/BindOrderDetails", data: "{'restroid':'" + restroid + "','OrderId':'" + e + "'}", dataType: "json", async: !1, success: function (t) { var e = 0, a = t.Table, n = t.Table1, r = (t.Table2, t.Table3), i = ""; for (e = 0; e < a.length; e++) i = (i = (i = (i = (i += "<tr>") + "<td style='display:none'>" + a[e].orderId + "</td>") + "<td>" + a[e].ItemName + "</td>") + "<td>" + a[e].Quantity + "</td>") + "<td>" + a[e].itemPrice + "</td>", i += "</tr>"; for (var l = 0, o = n[0].tax, s = r[0].OrderNo, u = 0; u < a.length; u++) l += a[u].itemPrice; var m = l + o; jquery_min_p("#lblorderNo").text(s), jquery_min_p("#txtsubtotal").val(l), jquery_min_p("#txtsubtotal").attr("disabled", "disabled"), jquery_min_p("#txtvat").val(o), jquery_min_p("#txtvat").attr("disabled", "disabled"), jquery_min_p("#txttotal").val(m), jquery_min_p("#txttotal").attr("disabled", "disabled"), jquery_min_p("#txtdue").val(m), jquery_min_p("#txtdue").attr("disabled", "disabled"), jquery_min_p("#txtbalance").val(m), jquery_min_p("#txtbalance").attr("disabled", "disabled"), jquery_min_p("#tblrunningord tbody").append(i), jquery_min_p("#preloader").css("display", "none"), jquery_min_p("#Overlay_Load").css("visibility", "hidden") }, beforesend: function () { jquery_min_p("#preloader").css("display", "block"), jquery_min_p("#Overlay_Load").css("visibility", "visible") }, error: function () { } }) } function btnvalue(t, e) { var a = ""; a = jquery_min_p("#txttendered").val(), 0 == e ? "" == jquery_min_p("#txttendered").val() ? (jquery_min_p("#txttendered").val(t), a = jquery_min_p("#txttendered").val()) : a += t : 1 == e && ("" == jquery_min_p("#txttendered").val() ? (jquery_min_p("#txttendered").val(t), a = jquery_min_p("#txttendered").val()) : a = parseInt(a) + parseInt(t)), jquery_min_p("#txttendered").val(a) } function MenuBoxCash() { $("#divcalculator").removeClass("disable"), $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxCash").addClass("active") } function MenuBoxCard() { $("#divcalculator").addClass("disable"), $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxCard").addClass("active") } function MenuBoxLoyalty() { $("#divcalculator").addClass("disable"), $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxLoyalty").addClass("active") } function MenuBoxCoupon() { $("#divcalculator").addClass("disable"), $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxCoupon").addClass("active") } function MenuBoxSTCPay() { $("#divcalculator").addClass("disable"), jquery_min_p("#lblstctotalamount").text(jquery_min_p("#txtbalance").val().trim()), $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxSTCPay").addClass("active") } function MenuBoxOther() { $("#divcalculator").addClass("disable"), $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxOther").addClass("active"), EnableTextFields(1) } function MenuBoxSplitBill() { $("#divcalculator").removeClass("disable"), $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxSplitBill").addClass("active") } function MenuBoxCancel() { $("#divcalculator").removeClass("disable"), $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxCash").addClass("active"); var t = jquery_min_p("#txtdue").val(); jquery_min_p("#txtbalance").val(t), jquery_min_p("#txttendered").val(""), jquery_min_p("#lblstcpay").text("0"), jquery_min_p("#lblstationdebit").text("0"), jquery_min_p("#lbloffer").text("0"), jquery_min_p("#lblhospitality").text("0"), jquery_min_p("#lblempcredit").text("0"), jquery_min_p("#lblcustcredit").text("0"), jquery_min_p("#lblcash").text("0"), jquery_min_p("#lblcard").text("0"), jquery_min_p("#lblloyality").text("0"), jquery_min_p("#lblcoupan").text("0"), jquery_min_p("#lblstationcash").text("0"), jquery_min_p("#lblstcpay").text("0"), jquery_min_p("#lblchairman").text("0"), ClearRecord() } function CardPaymentValidation() { var t = 0; return void 0 === $("input[name='a']:checked").val() && (t = 1), $("#divcardpayment .boxpaycolor1").each(function (e) { $(this).hasClass("active") && (t = 0) }), "" == jquery_min_p("#txtcardnumber").val().trim() && (jquery_min_p("#txtcardnumber").addClass("validate"), t = 1), "" == jquery_min_p("#txtcardamount").val().trim() && (jquery_min_p("#txtcardamount").addClass("validate"), t = 1), "1" != t } function RemoveClassCardPayment() { "" != jquery_min_p("#txtcardnumber").val().trim() && jquery_min_p("#txtcardnumber").removeClass("validate"), "" != jquery_min_p("#txtcardamount").val().trim() && jquery_min_p("#txtcardamount").removeClass("validate") } function Reset() { $("#destinationFields .MenuBox").hasClass("active") && jquery_min_p("#destinationFields .MenuBox").removeClass("active"), jquery_min_p("#MenuBoxCash").addClass("active"), jquery_min_p("#lblstcpay").text("0"), jquery_min_p("#lblstationdebit").text("0"), jquery_min_p("#lbloffer").text("0"), jquery_min_p("#lblhospitality").text("0"), jquery_min_p("#lblempcredit").text("0"), jquery_min_p("#lblcustcredit").text("0"), jquery_min_p("#lblcash").text("0"), jquery_min_p("#lblcard").text("0"), jquery_min_p("#lblloyality").text("0"), jquery_min_p("#lblcoupan").text("0"), jquery_min_p("#lblstationcash").text("0"), jquery_min_p("#lblstcpay").text("0"), jquery_min_p("#lblchairman").text("0"), jquery_min_p("#txttendered").val("") } function DecryptOrderID() { var t = new URLSearchParams(window.location.search).get("orderId"); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/DecryptOrderID", data: "{'OrderId':'" + t + "'}", dataType: "json", async: !1, success: function (t) { var e = t; jquery_min_p("#lblorderid").text(e) }, error: function () { } }) } function btnsaveCash() { var t = jquery_min_p("#txttendered").val().trim(), e = jquery_min_p("#txtdue").val().trim(), a = jquery_min_p("#txttendered").val().trim(); if ("" == a && (a = 0), "" == t) return jquery_min_p("#h6warning").text("please enter tendered amount first!!"), jquery_min_p("#dngwarn").modal("show"), !1; if (parseFloat(e) < parseFloat(t)) return jquery_min_p("#h6warning").text("amount should be  equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show"), !1; restroid = jquery_min_p("#lblrestroid").text(); var n = jquery_min_p("#lblorderid").text(), r = "<dtXml>"; r += "<dtXml ", r += 'Orderid="' + n + '" ', r += 'PaymentMode="Cash" ', r += 'Amount="' + t + '" ', r += 'CardID="" ', r += 'LoalityPoints="0" ', r += 'PointsValue="0" ', r += " />", r += "</dtXml>", jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/btnsaveCash", data: "{'restroid':'" + restroid + "','TableDataX':'" + r + "','Orderid':'" + n + "'}", dataType: "json", async: !1, success: function (t) { t.length; a = parseFloat(t[0].Amount), jquery_min_p("#lblcash").text(t[0].Amount); var e = jquery_min_p("#txtdue").val(), n = parseFloat(e) - parseFloat(t[0].Amount); jquery_min_p("#txtbalance").val(n), jquery_min_p("#txttendered").val(a) }, error: function () { } }) } function btnsaveCradpayment() { var t = jquery_min_p("#txtcardamount").val().trim(), e = jquery_min_p("#txtbalance").val().trim(); restroid = jquery_min_p("#lblrestroid").text(); var a = jquery_min_p("#lblorderid").text(), n = jquery_min_p("#txttendered").val().trim(); "" == n && (n = 0); var r = jquery_min_p("#txtcardnumber").val().trim(), i = "<dtXml>"; i += "<dtXml ", i += 'Orderid="' + a + '" ', i += 'PaymentMode="R" ', i += 'Amount="' + t + '" ', i += 'CardID="' + r + '" ', i += 'LoalityPoints="0" ', i += 'PointsValue="0" ', i += " />", i += "</dtXml>", jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/btnsaveCradpayment", data: "{'restroid':'" + restroid + "','TableDataX':'" + i + "','Orderid':'" + a + "'}", dataType: "json", async: !1, success: function (a) { a.length; jquery_min_p("#lblcard").text(a[0].Amount); var r = parseFloat(e) - parseFloat(t); n = parseFloat(n) + parseFloat(a[0].Amount), jquery_min_p("#txttendered").val(n), jquery_min_p("#txtbalance").val(r), $("#cardPayment").modal("hide") }, error: function () { } }) } function StcPaymentValidation() { var t = 0; return "" == jquery_min_p("#txtstctransaction").val().trim() && (jquery_min_p("#txtstctransaction").addClass("validate"), t = 1), "" == jquery_min_p("#txtstcamount").val().trim() && (jquery_min_p("#txtstcamount").addClass("validate"), t = 1), "1" != t } function RemoveClassStcPayment() { "" != jquery_min_p("#txtstctransaction").val().trim() && jquery_min_p("#txtstctransaction").removeClass("validate"), "" != jquery_min_p("#txtstcamount").val().trim() && jquery_min_p("#txtstcamount").removeClass("validate") } function Stcpayment() { var t = jquery_min_p("#txtbalance").val().trim(), e = jquery_min_p("#txtstcamount").val().trim(); restroid = jquery_min_p("#lblrestroid").text(); var a = jquery_min_p("#lblorderid").text(), n = jquery_min_p("#txtstctransaction").val().trim(), r = "<dtXml>"; r += "<dtXml ", r += 'Orderid="' + a + '" ', r += 'PaymentMode="S" ', r += 'Amount="' + e + '" ', r += 'CardID="' + n + '" ', r += 'LoalityPoints="0" ', r += 'PointsValue="0" ', r += " />", r += "</dtXml>", jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/Stcpayment", data: "{'restroid':'" + restroid + "','TableDataX':'" + r + "','Orderid':'" + a + "'}", dataType: "json", async: !1, success: function (a) { a.length; jquery_min_p("#lblstcpay").text(a[0].Amount); var n = parseFloat(t) - parseFloat(e); jquery_min_p("#txtbalance").val(n), $("#stcpay").modal("hide") }, error: function () { } }) } function LoyalityCardChange() { var t = jQuery("#txtloyalityCardNo").val(); restroid = jquery_min_p("#lblrestroid").text(), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/LoyalityCardChange", data: "{'restroid':'" + restroid + "','cardNo':'" + t + "'}", dataType: "json", async: !1, success: function (t) { t.length; "-1" == t[0].Column1 ? (jquery_min_p("#h6warning").text("card is invalid"), jquery_min_p("#dngwarn").modal("show"), jquery_min_p("#divloyalitypoint").css("display", "none"), jquery_min_p("#divCustomerName").css("display", "none"), jquery_min_p("#divloyalityamounts").css("display", "none")) : "-2" == t[0].Column1 ? (jquery_min_p("#h6warning").text("This Card Is Not Issue To Customer"), jquery_min_p("#dngwarn").modal("show"), jquery_min_p("#divloyalitypoint").css("display", "none"), jquery_min_p("#divCustomerName").css("display", "none"), jquery_min_p("#divloyalityamounts").css("display", "none")) : (jquery_min_p("#lblloyalitypoints").text(t[0].Column2), jquery_min_p("#lblloyalityamounts").text(t[0].Column1), jquery_min_p("#lblCustomerName").text(t[0].name), jquery_min_p("#divloyalitypoint").css("display", "flex"), jquery_min_p("#divCustomerName").css("display", "flex"), jquery_min_p("#divloyalityamounts").css("display", "flex")) }, error: function () { } }) } function LoyalityValidation() { var t = 0; return "" == jquery_min_p("#txtloyalityCardNo").val().trim() && (jquery_min_p("#txtloyalityCardNo").addClass("validate"), t = 1), "" == jquery_min_p("#txtloyalityCardAmount").val().trim() && (jquery_min_p("#txtloyalityCardAmount").addClass("validate"), t = 1), "1" != t } function RemoveClassLoyality() { "" != jquery_min_p("#txtloyalityCardNo").val().trim() && jquery_min_p("#txtloyalityCardNo").removeClass("validate"), "" != jquery_min_p("#txtloyalityCardAmount").val().trim() && jquery_min_p("#txtloyalityCardAmount").removeClass("validate") } function SaveLoyalityAmount() { var t = jquery_min_p("#txtloyalityCardNo").val(), e = jquery_min_p("#txtloyalityCardAmount").val(), a = jquery_min_p("#txtbalance").val(); jquery_min_p("#lblloyalityamounts").text(); restroid = jquery_min_p("#lblrestroid").text(); var n = jquery_min_p("#lblorderid").text(), r = (t = jquery_min_p("#txtloyalityCardNo").val().trim(), "<dtXml>"); r += "<dtXml ", r += 'Orderid="' + n + '" ', r += 'PaymentMode="L" ', r += 'Amount="' + e + '" ', r += 'CardID="' + t + '" ', r += 'LoalityPoints="0" ', r += 'PointsValue="0" ', r += " />", r += "</dtXml>", jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/Stcpayment", data: "{'restroid':'" + restroid + "','TableDataX':'" + r + "','Orderid':'" + n + "'}", dataType: "json", async: !1, success: function (t) { t.length; var n = jquery_min_p("#txttendered").val().trim(); "" == n && (n = 0), n = parseFloat(n) + parseFloat(t[0].Amount), jquery_min_p("#lblloyality").text(t[0].Amount); var r = parseFloat(a) - parseFloat(e); jquery_min_p("#txtbalance").val(r), jquery_min_p("#txttendered").val(n), $("#loyaltyCard").modal("hide") }, error: function () { } }) } function EnableTextFields(t) { ResetResetOther(), selected_otherid = t, 1 == t && (jquery_min_p("#HungerstationTransactionNo").val(""), jquery_min_p("#HungerstationAmount").val(""), $("#HungerstationTransactionNo").removeClass("disable"), $("#HungerstationAmount").removeClass("disable"), jquery_min_p("#divHungerstationcash .Difference2").addClass("active")), 2 == t && (jquery_min_p("#HungerstationdebitTranNo").val(""), jquery_min_p("#HungerstationdebitAmount").val(""), $("#HungerstationdebitTranNo").removeClass("disable"), $("#HungerstationdebitAmount").removeClass("disable"), jquery_min_p("#divHungerstationdebit .Difference2").addClass("active")), 3 == t && (jquery_min_p("#InvoiceTransNo").val(""), jquery_min_p("#InvoiceTransAmount").val(""), $("#InvoiceTransNo").removeClass("disable"), $("#InvoiceTransAmount").removeClass("disable"), jquery_min_p("#divInvoice .Difference2").addClass("active")), 4 == t && (jquery_min_p("#txtChairmanTransNo").val(""), jquery_min_p("#txtChairmanTransAmount").val(""), $("#txtChairmanTransNo").removeClass("disable"), $("#txtChairmanTransAmount").removeClass("disable"), jquery_min_p("#divChairman .Difference2").addClass("active")), 5 == t && (jquery_min_p("#txtHospitalityTransNo").val(""), jquery_min_p("#txtHospitalityTransAmount").val(""), $("#txtHospitalityTransNo").removeClass("disable"), $("#txtHospitalityTransAmount").removeClass("disable"), jquery_min_p("#divHospitality .Difference2").addClass("active")), 6 == t && (jquery_min_p("#txtCustCreditTransNo").val(""), jquery_min_p("#txtCustCreditTransAmount").val(""), $("#txtCustCreditTransNo").removeClass("disable"), $("#txtCustCreditTransAmount").removeClass("disable"), jquery_min_p("#divCustCredit .Difference2").addClass("active")), 7 == t && (jquery_min_p("#EmployeeCreditTransNo").val(""), jquery_min_p("#EmployeeCreditTransAmount").val(""), $("#EmployeeCreditTransNo").removeClass("disable"), $("#EmployeeCreditTransAmount").removeClass("disable"), jquery_min_p("#divEmployeeCredit .Difference2").addClass("active")) } function ResetResetOther() { jquery_min_p("#HungerstationTransactionNo").val(""), jquery_min_p("#HungerstationAmount").val(""), $("#HungerstationTransactionNo").addClass("disable"), $("#HungerstationAmount").addClass("disable"), jquery_min_p("#HungerstationdebitTranNo").val(""), jquery_min_p("#HungerstationdebitAmount").val(""), $("#HungerstationdebitTranNo").addClass("disable"), $("#HungerstationdebitAmount").addClass("disable"), jquery_min_p("#InvoiceTransNo").val(""), jquery_min_p("#InvoiceTransAmount").val(""), $("#InvoiceTransNo").addClass("disable"), $("#InvoiceTransAmount").addClass("disable"), jquery_min_p("#txtChairmanTransNo").val(""), jquery_min_p("#txtChairmanTransAmount").val(""), $("#txtChairmanTransNo").addClass("disable"), $("#txtChairmanTransAmount").addClass("disable"), jquery_min_p("#txtHospitalityTransNo").val(""), jquery_min_p("#txtHospitalityTransAmount").val(""), $("#txtHospitalityTransNo").addClass("disable"), $("#txtHospitalityTransAmount").addClass("disable"), jquery_min_p("#txtCustCreditTransNo").val(""), jquery_min_p("#txtCustCreditTransAmount").val(""), $("#txtCustCreditTransNo").addClass("disable"), $("#txtCustCreditTransAmount").addClass("disable"), jquery_min_p("#EmployeeCreditTransNo").val(""), jquery_min_p("#EmployeeCreditTransAmount").val(""), $("#EmployeeCreditTransNo").addClass("disable"), $("#EmployeeCreditTransAmount").addClass("disable"), jquery_min_p("#divHungerstationcash .Difference2").removeClass("active"), jquery_min_p("#divHungerstationdebit .Difference2").removeClass("active"), jquery_min_p("#divInvoice .Difference2").removeClass("active"), jquery_min_p("#divChairman .Difference2").removeClass("active"), jquery_min_p("#divHospitality .Difference2").removeClass("active"), jquery_min_p("#divCustCredit .Difference2").removeClass("active"), jquery_min_p("#divEmployeeCredit .Difference2").removeClass("active") } function isNumberKey(t) { var e = t.which ? t.which : t.keyCode; return !(e > 31 && (e < 48 || e > 57)) } function OtherPayementValidation(t) { if (1 == t) { var e = 0; return "" == jquery_min_p("#HungerstationTransactionNo").val().trim() && (jquery_min_p("#HungerstationTransactionNo").addClass("validate"), e = 1), "" == jquery_min_p("#HungerstationAmount").val().trim() && (jquery_min_p("#HungerstationAmount").addClass("validate"), e = 1), "1" != e } if (2 == t) { e = 0; return "" == jquery_min_p("#HungerstationdebitTranNo").val().trim() && (jquery_min_p("#HungerstationdebitTranNo").addClass("validate"), e = 1), "" == jquery_min_p("#HungerstationdebitAmount").val().trim() && (jquery_min_p("#HungerstationdebitAmount").addClass("validate"), e = 1), "1" != e } if (3 == t) { e = 0; return "" == jquery_min_p("#InvoiceTransNo").val().trim() && (jquery_min_p("#InvoiceTransNo").addClass("validate"), e = 1), "" == jquery_min_p("#InvoiceTransAmount").val().trim() && (jquery_min_p("#InvoiceTransAmount").addClass("validate"), e = 1), "1" != e } if (4 == t) { e = 0; return "" == jquery_min_p("#txtChairmanTransNo").val().trim() && (jquery_min_p("#txtChairmanTransNo").addClass("validate"), e = 1), "" == jquery_min_p("#txtChairmanTransAmount").val().trim() && (jquery_min_p("#txtChairmanTransAmount").addClass("validate"), e = 1), "1" != e } if (5 == t) { e = 0; return "" == jquery_min_p("#txtHospitalityTransNo").val().trim() && (jquery_min_p("#txtHospitalityTransNo").addClass("validate"), e = 1), "" == jquery_min_p("#txtHospitalityTransAmount").val().trim() && (jquery_min_p("#txtHospitalityTransAmount").addClass("validate"), e = 1), "1" != e } if (6 == t) { e = 0; return "" == jquery_min_p("#txtCustCreditTransNo").val().trim() && (jquery_min_p("#txtCustCreditTransNo").addClass("validate"), e = 1), "" == jquery_min_p("#txtCustCreditTransAmount").val().trim() && (jquery_min_p("#txtCustCreditTransAmount").addClass("validate"), e = 1), "1" != e } if (7 == t) { e = 0; return "" == jquery_min_p("#EmployeeCreditTransNo").val().trim() && (jquery_min_p("#EmployeeCreditTransNo").addClass("validate"), e = 1), "" == jquery_min_p("#EmployeeCreditTransAmount").val().trim() && (jquery_min_p("#EmployeeCreditTransAmount").addClass("validate"), e = 1), "1" != e } } function SaveOtherPayment(t, e, a) { var n = t, r = e, i = jquery_min_p("#txttendered").val().trim(), l = jquery_min_p("#txtbalance").val(); restroid = jquery_min_p("#lblrestroid").text(); var o = jquery_min_p("#lblorderid").text(), s = a, u = "<dtXml>"; u += "<dtXml ", u += 'Orderid="' + o + '" ', u += 'PaymentMode="O" ', u += 'Amount="' + r + '" ', u += 'CardID="' + n + '" ', u += 'LoalityPoints="0" ', u += 'PointsValue="0" ', u += " />", u += "</dtXml>", jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/SaveOtherPayment", data: "{'restroid':'" + restroid + "','TableDataX':'" + u + "','Orderid':'" + o + "','OtherpaymentType':'" + s + "'}", dataType: "json", async: !1, success: function (t) { t.length; i = parseFloat(i) + parseFloat(r); var e = parseFloat(l) - parseFloat(r); jquery_min_p("#txtbalance").val(e), jquery_min_p("#txttendered").val(i), "HSC" == s && jquery_min_p("#lblstationcash").text(t[0].Amount), "HSD" == s && jquery_min_p("#lblstationdebit").text(t[0].Amount), "IO" == s && jquery_min_p("#lbloffer").text(t[0].Amount), "C" == s && jquery_min_p("#lblchairman").text(t[0].Amount), "H" == s && jquery_min_p("#lblhospitality").text(t[0].Amount), "CC" == s && jquery_min_p("#lblcustcredit").text(t[0].Amount), "EC" == s && jquery_min_p("#lblempcredit").text(t[0].Amount), $("#other").modal("hide") }, error: function () { } }) } function FinalPayment() { var t = jquery_min_p("#txtdue").val().trim(), e = jquery_min_p("#txttendered").val().trim(), a = jquery_min_p("#txtbalance").val().trim(), n = jquery_min_p("#txtvat").val().trim(), r = jquery_min_p("#txtdue").val().trim(); jquery_min_p("#txtdue").val().trim(); restroid = jquery_min_p("#lblrestroid").text(); var i = jquery_min_p("#lblorderid").text(), l = r; t != e && 0 != a ? (jquery_min_p("#h6warning").text("Amount Should Be Equal To Actual Amount"), jquery_min_p("#dngwarn").modal("show")) : jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/ConFirmBill", data: "{'restroid':'" + restroid + "','SplitAmount':'" + l + "','Orderid':'" + i + "','ReasonId':'0','discountPercent':'0','discountAmount':'0','TotalTax':'" + n + "'}", dataType: "json", async: !1, success: function (t) { t.length; t.length > 0 && (jquery_min_p("#popupsuccess").text("Information Send  Successfully"), jquery_min_p("#savePopup").modal("show"), DisableDiv()) }, error: function () { } }) } function ClearRecord() { restroid = jquery_min_p("#lblrestroid").text(); var t = jquery_min_p("#lblorderid").text(); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Payment/ClearTempTable", data: "{'restroid':'" + restroid + "','Orderid':'" + t + "'}", dataType: "json", async: !1, success: function (t) { t.length }, error: function () { } }) } function DisableDiv() { $("#divcalculator").addClass("disable"), $("#MenuBoxCash").addClass("disable"), $("#MenuBoxCard").addClass("disable"), $("#MenuBoxLoyalty").addClass("disable"), $("#MenuBoxCoupon").addClass("disable"), $("#MenuBoxSTCPay").addClass("disable"), $("#MenuBoxOther").addClass("disable"), $("#MenuBoxSplitBill").addClass("disable"), $("#MenuBoxCancel").addClass("disable"), $("#MenuBoxConfirm").addClass("disable"), $("#btnmanagerprivilege").addClass("disable"), $("#btnexact").addClass("disable"), $("#btnclear").addClass("disable"), $("#btndifference").addClass("disable") } jquery_min_p(document).ready(function () { BindOrderDetail(), DecryptOrderID(), jquery_min_p("#empDetails").css("display", "block"), jquery_min_p("#MenuBoxCash").addClass("active"), jquery_min_p("#txttendered").attr("disabled", "disabled"), jquery_min_p("#btnexit").click(function () { window.location.href = "/SalesBilling/RunningOrder" }), jquery_min_p("#btnclear").click(function () { jquery_min_p("#txttendered").val(""); var t = jquery_min_p("#txtdue").val(); jquery_min_p("#txtbalance").val(t), ClearRecord() }), jquery_min_p("#MenuBoxConfirm").click(function () { var t = jquery_min_p("#txtdue").val().trim(), e = jquery_min_p("#txttendered").val().trim(), a = jquery_min_p("#txtbalance").val().trim(); jquery_min_p("#txtvat").val().trim(), jquery_min_p("#txtdue").val().trim(), jquery_min_p("#txtdue").val().trim(); if (restroid = jquery_min_p("#lblrestroid").text(), parseFloat(t) != parseFloat(e) && 0 != parseFloat(a)) return jquery_min_p("#h6warning").text("Amount Should Be Equal To Actual Amount"), jquery_min_p("#dngwarn").modal("show"), !1; jquery_min_p("#hconfirm").text("Would You Like To make payment !"), jquery_min_p("#confirmationPopup").modal("show"), jquery_min_p("#yesBtn").click(function () { jquery_min_p("#confirmationPopup").modal("hide"), FinalPayment() }), jquery_min_p("#noBtn").click(function () { return jquery_min_p("#confirmationPopup").modal("hide"), !1 }) }), jquery_min_p("#btnRedeem").click(function () { jquery_min_p("#txtloyalityCardNo").val(); var t = jquery_min_p("#txtloyalityCardAmount").val(); if (LoyalityValidation()) { jquery_min_p("#txtloyalityCardNo").val(), t = jquery_min_p("#txtloyalityCardAmount").val(); var e = jquery_min_p("#txtbalance").val(), a = jquery_min_p("#lblloyalityamounts").text(); parseFloat(t) > parseFloat(e) || parseFloat(t) > parseFloat(a) ? (jquery_min_p("#h6warning").text("Your Amount is Greater!!"), jquery_min_p("#dngwarn").modal("show")) : (jquery_min_p("#hconfirm").text("Would You Like To Redeem !"), jquery_min_p("#confirmationPopup").modal("show"), jquery_min_p("#yesBtn").click(function () { jquery_min_p("#confirmationPopup").modal("hide"), SaveLoyalityAmount() }), jquery_min_p("#noBtn").click(function () { return jquery_min_p("#confirmationPopup").modal("hide"), !1 })) } else jquery_min_p("#h6warning").text("please fill all details!!"), jquery_min_p("#dngwarn").modal("show") }), jquery_min_p("#btnOtherProceed").click(function () { var t = selected_otherid, e = "", a = "", n = "", r = jQuery("#txtbalance").val().trim(); jQuery("#HungerstationTransactionNo").val().trim(); if (!OtherPayementValidation(t)) return jquery_min_p("#h6warning").text("please fill details!!"), jquery_min_p("#dngwarn").modal("show"), !1; 1 == t && (n = "HSC", e = jQuery("#HungerstationTransactionNo").val().trim(), a = jQuery("#HungerstationAmount").val().trim(), parseFloat(r) < parseFloat(a) ? (jquery_min_p("#h6warning").text("amount should be equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show")) : SaveOtherPayment(e, a, n)), 2 == t && (n = "HSD", e = jQuery("#HungerstationdebitTranNo").val().trim(), a = jQuery("#HungerstationdebitAmount").val().trim(), parseFloat(r) < parseFloat(a) ? (jquery_min_p("#h6warning").text("amount should be equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show")) : SaveOtherPayment(e, a, n)), 3 == t && (n = "IO", e = jQuery("#InvoiceTransNo").val().trim(), a = jQuery("#InvoiceTransAmount").val().trim(), parseFloat(r) < parseFloat(a) ? (jquery_min_p("#h6warning").text("amount should be equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show")) : SaveOtherPayment(e, a, n)), 4 == t && (n = "C", e = jQuery("#txtChairmanTransNo").val().trim(), a = jQuery("#txtChairmanTransAmount").val().trim(), parseFloat(r) < parseFloat(a) ? (jquery_min_p("#h6warning").text("amount should be equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show")) : SaveOtherPayment(e, a, n)), 5 == t && (n = "H", e = jQuery("#txtHospitalityTransNo").val().trim(), a = jQuery("#txtHospitalityTransAmount").val().trim(), parseFloat(r) < parseFloat(a) ? (jquery_min_p("#h6warning").text("amount should be equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show")) : SaveOtherPayment(e, a, n)), 6 == t && (n = "CC", e = jQuery("#txtCustCreditTransNo").val().trim(), a = jQuery("#txtCustCreditTransAmount").val().trim(), parseFloat(r) < parseFloat(a) ? (jquery_min_p("#h6warning").text("amount should be equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show")) : SaveOtherPayment(e, a, n)), 7 == t && (n = "EC", e = jQuery("#EmployeeCreditTransNo").val().trim(), a = jQuery("#EmployeeCreditTransAmount").val().trim(), parseFloat(r) < parseFloat(a) ? (jquery_min_p("#h6warning").text("amount should be equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show")) : SaveOtherPayment(e, a, n)) }), jQuery("#txtloyalityCardNo").blur(function () { if ("" == jQuery("#txtloyalityCardNo").val().trim()) return jquery_min_p("#h6warning").text("Enter card No."), jquery_min_p("#dngwarn").modal("show"), !1; LoyalityCardChange() }), jquery_min_p("#btnstcok").click(function () { if (!StcPaymentValidation()) return jquery_min_p("#h6warning").text("please fill details first!!"), jquery_min_p("#dngwarn").modal("show"), !1; var t = jquery_min_p("#txtbalance").val().trim(), e = jquery_min_p("#txtstcamount").val().trim(); if (parseFloat(t) < parseFloat(e)) return jquery_min_p("#h6warning").text("amount should not be Equal than actual amount"), jquery_min_p("#dngwarn").modal("show"), !1; var a = jquery_min_p("#txttendered").val().trim(), n = jquery_min_p("#txtstcamount").val().trim(), r = parseFloat(a) + parseFloat(n); jquery_min_p("#txttendered").val(r), Stcpayment() }), jquery_min_p("#divcardpayment .boxpaycolor1 ").click(function () { $("#divcardpayment .boxpaycolor1").removeClass("active"), jquery_min_p("#divcardpayment .boxpaycolor1").removeClass("active"), jquery_min_p(this).addClass("active") }), jquery_min_p("#txtcardnumber").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }), jquery_min_p("#txtcardamount").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }), jquery_min_p("#txtstctransaction").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }), jquery_min_p("#txtstcamount").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }), jquery_min_p("#btnProceedcard").click(function () { if (CardPaymentValidation(), CardPaymentValidation()) { jquery_min_p('input[name="a"]:checked').val(), jquery_min_p('input[name="a"]:checked').val(); var t = ""; t += jquery_min_p("#txtcardamount").val().trim(); var e = jquery_min_p("#txtbalance").val().trim(); if (parseFloat(e) < parseFloat(t)) jquery_min_p("#txtcardamount").val(""), jquery_min_p("#h6warning").text("amount should be equal to actual amount!!"), jquery_min_p("#dngwarn").modal("show"); else { jquery_min_p("#txtbalance").val().trim(); btnsaveCradpayment() } } else jquery_min_p("#h6warning").text("please fill all details!!"), jquery_min_p("#dngwarn").modal("show") }), jquery_min_p("#btncross").click(function () { var t = jquery_min_p("#txttendered").val(), e = t.substr(0, t.length - 1); jquery_min_p("#txttendered").val(e) }), jquery_min_p("#btnexact").click(function () { var t = jquery_min_p("#txtdue").val(), e = jquery_min_p("#txtbalance").val(); parseFloat(t) != parseFloat(e) ? (jquery_min_p("#hconfirm").text("Would You Like To Exact !"), jquery_min_p("#confirmationPopup").modal("show"), jquery_min_p("#yesBtn").click(function () { jquery_min_p("#confirmationPopup").modal("hide"), Reset(), ClearRecord(), jquery_min_p("#txttendered").val(t), jquery_min_p("#txtbalance").val("0"), jquery_min_p("#lblcash").text(t) }), jquery_min_p("#noBtn").click(function () { return jquery_min_p("#confirmationPopup").modal("hide"), !1 })) : (jquery_min_p("#txttendered").val(t), jquery_min_p("#txtbalance").val("0")) }), jQuery("#txtdiffamt").on("input", function () { var t = jquery_min_p("#txtdiffamt").val(), e = jquery_min_p("#txtdue").val() - t; jquery_min_p("#lbldiffbalamt").text(e) }), jquery_min_p("#btndifference").click(function () { $("#txtdiffamt").focus(); var t = jquery_min_p("#txtdue").val(); jquery_min_p("#lbldiffdueamt").text(t) }) });