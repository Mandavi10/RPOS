﻿function BindResturantMenu() { jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/SequenceSetup/BindResturant", data: "{}", dataType: "json", async: !1, success: function (e) { var t = 0, r = e.length, n = ""; for (t = 0; t < r; t++) n = (n = n + "<div class='sectionBox' onclick='BindResturantinformation(" + e[t].restroId + ");' ondblclick='Edit(" + e[t].restroId + ");'><a href='#'>") + "<h6>" + e[t].name + "</h6></a></div>"; jquery_min_p("#restaurantList").append(n) }, error: function () { } }) } function BindResturantinformation(e) { jquery_min_p("#sequenceForm").css("display", "none"), jquery_min_p("#sequenceTable").css("display", "block"), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/SequenceSetup/BindResturantinformation", data: "{'id':'" + e + "'}", dataType: "json", async: !1, success: function (e) { var t = 0; jquery_min_p("#tbl tbody").empty(); var r = e.length; for (t = 0; t < r; t++) var n = n + "<tr><td> " + e[t].SequenceNo + " </td> <td> " + e[t].Startfrom + " </td> <td>" + e[t].Fixedvalue + "</td> <td>" + e[t].Type + "</td> <td>" + e[t].CreatedOn + "</td> <td>" + e[t].NextNo + "</td> </tr>"; jquery_min_p("#tbl tbody").append(n), jquery_min_p("#sequenceTable").css("display", "block") }, error: function () { } }) } function Edit(e) { jquery_min_p("#lblRestroId").text(e), jquery_min_p("#sequenceTable").css("display", "none"), jquery_min_p("#sequenceForm").css("display", "block"), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/SequenceSetup/Edit", data: "{'id':'" + e + "'}", dataType: "json", async: !1, success: function (e) { var t = 0, r = e, n = e.length; if (n > 0) for (t = 0; t < n; t++) "Sales Return" == e[t].Type ? (jquery_min_p("#txtsalesreturnno").val(r[t].Length), jquery_min_p("#txtsalesreturnstart").val(r[t].Startfrom), jquery_min_p("#txtsalesreturnfixed").val(r[t].Fixedvalue)) : "Order" == e[t].Type ? (jquery_min_p("#txtorderno").val(r[t].Length), jquery_min_p("#txtorderstart").val(r[t].Startfrom), jquery_min_p("#txtorderfixed").val(r[t].Fixedvalue)) : "Invoice" == e[t].Type ? (jquery_min_p("#txtinvoiceno").val(r[t].Length), jquery_min_p("#txtinvoicestart").val(r[t].Startfrom), jquery_min_p("#txtinvoicefixed").val(r[t].Fixedvalue)) : "Receipt" == e[t].Type && (jquery_min_p("#txtreceiptno").val(r[t].Length), jquery_min_p("#txtreceiptstart").val(r[t].Startfrom), jquery_min_p("#txtreceiptfixed").val(r[t].Fixedvalue)); else jquery_min_p("#txtsalesreturnno").val(" "), jquery_min_p("#txtsalesreturnstart").val(" "), jquery_min_p("#txtsalesreturnfixed").val(" "), jquery_min_p("#txtorderno").val(" "), jquery_min_p("#txtorderstart").val(" "), jquery_min_p("#txtorderfixed").val(" "), jquery_min_p("#txtinvoiceno").val(" "), jquery_min_p("#txtinvoicestart").val(" "), jquery_min_p("#txtinvoicefixed").val(" "), jquery_min_p("#txtreceiptno").val(" "), jquery_min_p("#txtreceiptstart").val(" "), jquery_min_p("#txtreceiptfixed").val(" ") }, error: function () { } }) } function UpdateOrderNoSequence() { jquery_min_p("#sequenceTable").css("display", "none"), jquery_min_p("#sequenceForm").css("display", "block"); var e = jquery_min_p("#txtorderno").val(), t = jquery_min_p("#txtorderstart").val(), r = jquery_min_p("#txtorderfixed").val(), n = jquery_min_p("#lblRestroId").text(); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/SequenceSetup/UpdateorderSequence", data: "{'id':'" + n + "','Ordernumberlength':'" + e + "','ordernumberstart':'" + t + "','orderfixednumber':'" + r + "','type':'O'}", dataType: "json", async: !1, success: function (e) { e.length }, error: function () { } }) } function UpdateInvoiceNoSequence() { jquery_min_p("#sequenceTable").css("display", "none"), jquery_min_p("#sequenceForm").css("display", "block"); var e = jquery_min_p("#txtinvoiceno").val(), t = jquery_min_p("#txtinvoicestart").val(), r = jquery_min_p("#txtinvoicefixed").val(), n = jquery_min_p("#lblRestroId").text(); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/SequenceSetup/UpdateInvoiceNoSequence", data: "{'id':'" + n + "','invoicenumberlength':'" + e + "','invoicenumberstart':'" + t + "','invoicefixednumber':'" + r + "','type':'I'}", dataType: "json", async: !1, success: function (e) { e.length }, error: function () { } }) } function UpdatesalesNoSequence() { jquery_min_p("#sequenceTable").css("display", "none"), jquery_min_p("#sequenceForm").css("display", "block"); var e = jquery_min_p("#lblRestroId").text(), t = jquery_min_p("#txtsalesreturnno").val(), r = jquery_min_p("#txtsalesreturnstart").val(), n = jquery_min_p("#txtsalesreturnfixed").val(); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/SequenceSetup/UpdatesalesNoSequence", data: "{'id':'" + e + "','salesorderlength':'" + t + "','salesnumberstart':'" + r + "','salesfixednumber':'" + n + "','type':'S'}", dataType: "json", async: !1, success: function (e) { e.length }, error: function () { } }) } function UpdateReceiptNoSequence() { jquery_min_p("#sequenceTable").css("display", "none"), jquery_min_p("#sequenceForm").css("display", "block"); var e = jquery_min_p("#lblRestroId").text(), t = jquery_min_p("#txtreceiptno").val(), r = jquery_min_p("#txtreceiptstart").val(), n = jquery_min_p("#txtreceiptfixed").val(); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/SequenceSetup/UpdateReceiptNoSequence", data: "{'id':'" + e + "','receiptnumberlength':'" + t + "','receiptnumberstart':'" + r + "','receiptfixednumber':'" + n + "','type':'R'}", dataType: "json", async: !1, success: function (e) { e.length }, error: function () { } }) } function validatorder() { var e = 0; return "" == jquery_min_p("#txtorderno").val().trim() && (jquery_min_p("#txtorderno").addClass("validate"), e = 1), "" == jquery_min_p("#txtorderstart").val().trim() && (jquery_min_p("#txtorderstart").addClass("validate"), e = 1), "" == jquery_min_p("#txtorderfixed").val().trim() && (jquery_min_p("#txtorderfixed").addClass("validate"), e = 1), 1 != e } function validatinvoice() { var e = 0; return "" == jquery_min_p("#txtinvoiceno").val().trim() && (jquery_min_p("#txtinvoiceno").addClass("validate"), e = 1), "" == jquery_min_p("#txtinvoicestart").val().trim() && (jquery_min_p("#txtinvoicestart").addClass("validate"), e = 1), "" == jquery_min_p("#txtinvoicefixed").val().trim() && (jquery_min_p("#txtinvoicefixed").addClass("validate"), e = 1), 1 != e } function validatsales() { var e = 0; return "" == jquery_min_p("#txtsalesreturnno").val().trim() && (jquery_min_p("#txtsalesreturnno").addClass("validate"), e = 1), "" == jquery_min_p("#txtsalesreturnstart").val().trim() && (jquery_min_p("#txtsalesreturnstart").addClass("validate"), e = 1), "" == jquery_min_p("#txtsalesreturnfixed").val().trim() && (jquery_min_p("#txtsalesreturnfixed").addClass("validate"), e = 1), 1 != e } function validatreceipt() { var e = 0; return "" == jquery_min_p("#txtreceiptno").val().trim() && (jquery_min_p("#txtreceiptno").addClass("validate"), e = 1), "" == jquery_min_p("#txtreceiptstart").val().trim() && (jquery_min_p("#txtreceiptstart").addClass("validate"), e = 1), "" == jquery_min_p("#txtreceiptfixed").val().trim() && (jquery_min_p("#txtreceiptfixed").addClass("validate"), e = 1), 1 != e } function Removeclass() { "" != jquery_min_p("#txtorderno").val() && jquery_min_p("#txtorderno").removeClass("validate"), "" != jquery_min_p("#txtorderstart").val() && jquery_min_p("#txtorderstart").removeClass("validate"), "" != jquery_min_p("#txtorderfixed").val() && jquery_min_p("#txtorderfixed").removeClass("validate"), "" != jquery_min_p("#txtinvoiceno").val() && jquery_min_p("#txtinvoiceno").removeClass("validate"), "" != jquery_min_p("#txtinvoicestart").val() && jquery_min_p("#txtinvoicestart").removeClass("validate"), "" != jquery_min_p("#txtinvoicefixed").val() && jquery_min_p("#txtinvoicefixed").removeClass("validate"), "" != jquery_min_p("#txtsalesreturnno").val() && jquery_min_p("#txtsalesreturnno").removeClass("validate"), "" != jquery_min_p("#txtsalesreturnstart").val() && jquery_min_p("#txtsalesreturnstart").removeClass("validate"), "" != jquery_min_p("#txtsalesreturnfixed").val() && jquery_min_p("#txtsalesreturnfixed").removeClass("validate"), "" != jquery_min_p("#txtreceiptno").val() && jquery_min_p("#txtreceiptno").removeClass("validate"), "" != jquery_min_p("#txtreceiptstart").val() && jquery_min_p("#txtreceiptstart").removeClass("validate"), "" != jquery_min_p("#txtreceiptfixed").val() && jquery_min_p("#txtreceiptfixed").removeClass("validate") } function reset() { jquery_min_p("#txtorderno").val(""), jquery_min_p("#txtorderstart").val(""), jquery_min_p("#txtorderfixed").val(""), jquery_min_p("#txtinvoiceno").val(""), jquery_min_p("#txtinvoicestart").val(""), jquery_min_p("#txtinvoicefixed").val(""), jquery_min_p("#txtreceiptno").val(""), jquery_min_p("#txtreceiptstart").val(""), jquery_min_p("#txtreceiptfixed").val(""), jquery_min_p("#txtsalesreturnno").val(""), jquery_min_p("#txtsalesreturnstart").val(""), jquery_min_p("#txtsalesreturnfixed").val("") } jquery_min_p(document).ready(function () { BindResturantMenu(), jquery_min_p("#btnSubmitorder").click(function () { if (!validatorder()) return !1; UpdateOrderNoSequence() }), jquery_min_p("#btnSubmitinvoice").click(function () { if (!validatinvoice()) return !1; UpdateInvoiceNoSequence() }), jquery_min_p("#btnSubmitsales").click(function () { if (!validatsales()) return !1; UpdatesalesNoSequence() }), jquery_min_p("#btnSubmitreceipt").click(function () { if (!validatreceipt()) return !1; UpdateReceiptNoSequence() }), jquery_min_p("#exitTable").click(function () { window.location.href = "/Master/Home" }) });