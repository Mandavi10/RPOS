﻿function BindData() { jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/BindLenCardNo", data: "{}", dataType: "json", async: !1, success: function (t) { var e = 0; jquery_min_p("#cardDetailsTable tbody").empty(); var a = t.length; for (e = 0; e < a; e++) { var n; n = (n = (n = n + "<tr onclick='BindCard(this," + t[e].Length + ");'>") + "<td width='30%'> " + t[e].Length + " </td>") + "<td width='70%'> " + t[e].CardNo + "</td>", n += "</tr>" } jquery_min_p("#cardDetailsTable tbody").append(n), jquery_min_p("#cardDetail").css("display", "block") }, error: function () { } }) } function BindCard(t, e) { jquery_min_p("#cardDetailsTable tbody tr").removeClass("selectedItem"), row = jquery_min_p(t).closest("tr"), row.addClass("selectedItem"), jquery_min_p("#lbllength").text(e) } function CheckData() { if (1 == jquery_min_p("#rdcreatenew").prop("checked")) { if (1 == Validation()) { var t = 0, e = jquery_min_p("#txtcardno").val(), a = jquery_min_p("#txtstartfrom").val(), n = jquery_min_p("#txtcardlength").val(); "" != e && "" != a && "" != n.Text && a.length <= n && jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/CheckValidation", data: "{}", dataType: "json", async: !1, success: function (r) { for (var i = r.length, s = 0; s < i; s++) r[s].Length == n && (t = 1, jquery_min_p("#hwarning").text("Card Already Existed!!"), bootstrap_min_p("#WarningPopup").modal("show")); 0 == t && (jquery_min_p("#divcard").html(""), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/CreateLoyaltyCard", data: "{'cardno':'" + e + "','startfrom':'" + a + "','cardlength':'" + n + "'}", dataType: "json", async: !1, success: function (t) { for (var e = t.length, a = "", n = 0; n < e; n++) a += "<div class='loyaltyCard'>", a += "<h4><img src='../Content/images/loyality-icon-white.png'/> Loyalty Card</h4>", a = (a += "<div class='loyaltycardDetail'><div class='logoImg'><img src='../Content/images/POS-logo-sm-1.png' /></div>") + "<div class='cardNoCon'><span>CARD NUMBER</span><span class='cardNo'>" + t[n].CardNo + "</span></div>", a += "<div class='loyaltyFooter'><span>POS System</span></div>", a += "</div></div>"; jquery_min_p("#divcard").append(a), BindData() }, error: function () { } })) }, error: function () { } }) } } else { n = jquery_min_p("#lbllength").text(), a = "", e = jquery_min_p("#txtcardno").val(); 1 == rowvalidate() && jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/CreateLoyaltyCard", data: "{'cardno':'" + e + "','startfrom':'" + a + "','cardlength':'" + n + "'}", dataType: "json", async: !1, success: function (t) { jquery_min_p("#divcard").html(""); for (var e = t.length, a = "", n = 0; n < e; n++) a += "<div class='loyaltyCard'>", a += "<h4><img src='../Content/images/loyality-icon-white.png'/> Loyalty Card</h4>", a = (a += "<div class='loyaltycardDetail'><div class='logoImg'><img src='../Content/images/POS-logo-sm-1.png' /></div>") + "<div class='cardNoCon'><span class='cardNo'>" + t[n].CardNo + "</span></div>", a += "<div class='loyaltyFooter'><span>POS System</span></div>", a += "</div></div>"; jquery_min_p("#divcard").append(a), BindData() }, error: function () { } }) } } function RemoveClass() { "" != jquery_min_p("#txtcardno").val() && jquery_min_p("#txtcardno").removeClass("validate"), "" != jquery_min_p("#txtstartfrom").val() && jquery_min_p("#txtstartfrom").removeClass("validate"), "" != jquery_min_p("#txtcardlength").val() && jquery_min_p("#txtcardlength").removeClass("validate"), "" != jquery_min_p("#txtissuecard").val() && jquery_min_p("#txtissuecard").removeClass("validate"), "0" != jquery_min_p("#ddlcardlength").val() && jquery_min_p("#ddlcardlength").removeClass("validate"), "" != jquery_min_p("#txtamount").val() && jquery_min_p("#txtamount").removeClass("validate"), "" != jquery_min_p("#txtearnedpoint").val() && jquery_min_p("#txtearnedpoint").removeClass("validate"), "" != jquery_min_p("#txtredeemamount").val() && jquery_min_p("#txtredeemamount").removeClass("validate"), "" != jquery_min_p("#txtdate").val() && jquery_min_p("#txtdate").removeClass("validate") } function Validation() { jquery_min_p("#hdnmaxlen").val(); var t = 0; return "" == jquery_min_p("#txtcardno").val() && (jquery_min_p("#txtcardno").addClass("validate"), t = 1), "" == jquery_min_p("#txtstartfrom").val() && (jquery_min_p("#txtstartfrom").addClass("validate"), t = 1), "" == jquery_min_p("#txtcardlength").val() && (jquery_min_p("#txtcardlength").addClass("validate"), t = 1), (jquery_min_p("#txtcardlength").val() > 15 || jquery_min_p("#txtcardlength").val() < 0) && (jquery_min_p("#hwarning").text("Card Length must be greater than or less than 15 !!"), bootstrap_min_p("#WarningPopup").modal("show"), t = 1), 1 != t } function BindResturantMenu() { jquery_min_p("#restaurantList").html(""), jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/SequenceSetup/BindResturant", data: "{}", dataType: "json", async: !1, success: function (t) { var e = 0, a = t.length, n = ""; for (e = 0; e < a; e++) n = (n = n + "<div class='sectionBox' onclick='BindResturantId(this," + t[e].restroId + ");' ondblclick='BindResturantwisegrid(" + t[e].restroId + ");'>") + "<h6>" + t[e].name + "</h6></div>"; jquery_min_p("#restaurantList").append(n) }, error: function () { } }) } function BindResturantId(t, e) { jquery_min_p(".restaurantList .sectionBox").removeClass("active"), jquery_min_p("#lblrestroid").text(e), jquery_min_p("#txtissuecard").val(""), jquery_min_p("#lblrestroissuecards").text(""), jquery_min_p(t).addClass("active"), BindCardAvailable() } function BindResturantwisegrid(t) { jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/BindRestrogrid", data: "{'restroid':'" + t + "'}", dataType: "json", async: !1, success: function (t) { var e = 0; jquery_min_p("#tblrestrocards tbody").empty(); var a = t.length; for (e = 0; e < a; e++) { var n; n = (n = (n = (n = n + "<tr>") + "<td width='30%'> " + t[e].CardLength + " </td>") + "<td width='30%'> " + t[e].coun + "</td>") + "<td width='30%'> " + t[e].AssignToCustomer + "</td>", n += "</tr>" } jquery_min_p("#tblrestrocards tbody").append(n), jquery_min_p("#divrestrogrid").css("display", "block") }, error: function () { } }) } function BindCardLength() { jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/BindCardLength", data: "{}", dataType: "json", async: !1, success: function (result) { for (var i = 0, jsondata = eval(result), i = 0; i < result.length; i++) { var newOption = $("<option>"); newOption.attr("value", result[i].Length).text(result[i].Length), $("#ddlcardlength").append(newOption) } } }) } function BindCardAvailable() { jquery_min_p("#divcardDetail").css("display", "block"), jquery_min_p("#divrestrodetail").css("display", "block"), jquery_min_p("#lblrestroissuecards").text(""); var t = jquery_min_p("#lblrestroid").text(); "" == t && (t = 0); var e = jquery_min_p("#ddlcardlength option:selected").val(); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/BindCardTotal", data: "{'len':'" + e + "','restroid':'" + t + "'}", dataType: "json", async: !1, success: function (t) { var e = t.Table, a = e[0].Totcards; jquery_min_p("#lbltotalcards").text(a); var n = (e = t.Table1)[0].Total; jquery_min_p("#lblcardavailable").text(n); var r = (e = t.Table2)[0].coun; jquery_min_p("#lblrestroissuecards").text(r) } }) } function SaveIssueCards() { var t = jquery_min_p("#lblrestroid").text(), e = jquery_min_p("#ddlcardlength option:selected").val(), a = jquery_min_p("#lblcardavailable").text(), n = jquery_min_p("#txtissuecard").val(); "" == n.trim() ? jquery_min_p("#txtissuecard").addClass("validate") : "0" == e ? jquery_min_p("#ddlcardlength").addClass("validate") : parseInt(n) > parseInt(a) ? (jquery_min_p("#hwarning").text("Issue cards must be less than cards available!!"), bootstrap_min_p("#WarningPopup").modal("show")) : 0 == t ? (jquery_min_p("#hwarning").text("Please Select Restaurant!!"), bootstrap_min_p("#WarningPopup").modal("show")) : (jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/SaveIssueCards", data: "{'IssueCards':'" + n + "','restroId':'" + t + "','length':'" + e + "'}", dataType: "json", async: !1, success: function (t) { BindCardAvailable(), jquery_min_p("#popupsuccess").text("Card Issued Successfully"), jquery_min_p("#savePopup").modal("show") } }), jquery_min_p("#txtissuecard").val()) } function Reset() { jquery_min_p("#txtamount").val(""), jquery_min_p("#txtearnedpoint").val(""), jquery_min_p("#txtredeemamount").val(""), jquery_min_p("#txtdate").val("") } function validaterules() { var t = 0; return "" == jquery_min_p("#txtamount").val() && (jquery_min_p("#txtamount").addClass("validate"), t = 1), "" == jquery_min_p("#txtearnedpoint").val() && (jquery_min_p("#txtearnedpoint").addClass("validate"), t = 1), "" == jquery_min_p("#txtredeemamount").val() && (jquery_min_p("#txtredeemamount").addClass("validate"), t = 1), "" == jquery_min_p("#txtdate").val() && (jquery_min_p("#txtdate").addClass("validate"), t = 1), 1 != t } function SaveRule() { var t = jquery_min_p("#txtamount").val(), e = jquery_min_p("#txtearnedpoint").val(), a = jquery_min_p("#txtredeemamount").val(), n = jquery_min_p("#txtdate").val(); jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/SaveRule", data: "{'amount':'" + t + "','earnedpoints':'" + e + "','redeemamount':'" + a + "','date':'" + n + "'}", dataType: "json", async: !1, success: function (t) { jquery_min_p("#popupsuccess").text("Rule Saved Successfully"), jquery_min_p("#savePopup").modal("show"), BindRule() } }) } function BindRule() { jquery_min_p.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/Loyalty/BindPointsNew", data: "{}", dataType: "json", async: !1, success: function (t) { var e = 0; jquery_min_p("#rulesTable tbody").empty(); var a = t.length; for (e = 0; e < a; e++) { var n; n = (n = (n = (n = (n = (n = n + "<tr>") + "<td width='15%'> " + t[e].EffectiveFrom + " </td>") + "<td width='15%'> " + t[e].BillAmount + "</td>") + "<td width='25%'> " + t[e].ReedemableAmount + "</td>") + "<td width='15%'> " + t[e].EarnedPoints + "</td>") + "<td width='30%'> " + t[e].CreatedBy + "</td>", n += "</tr>" } jquery_min_p("#rulesTable tbody").append(n) }, error: function () { } }) } function rowvalidate() { var t = 1; return jquery_min_p("#cardDetailsTable tbody tr").each(function () { "selectedItem" == this.className && (t = 0) }), "" == jquery_min_p("#txtcardno").val() && (jquery_min_p("#txtcardno").addClass("validate"), t = 1), 1 != t } function ReadConfigSettings() { alert(test) } jquery_min_p(document).ready(function () { jquery_min_p("#lblcardavailable").text("0"), jquery_min_p("#lblrestroissuecards").text("0"), BindRule(), jquery_min_p("#btnadd").click(function () { CheckData() }), jquery_min_p("#btnsaveclose").click(function () { bootstrap_min_p("#savePopup").modal("hide") }), jquery_min_p("#btnIssue").click(function () { SaveIssueCards() }), jquery_min_p("#btncrosscloase").click(function () { bootstrap_min_p("#WarningPopup").modal("hide") }), jquery_min_p("#btnok").click(function () { bootstrap_min_p("#WarningPopup").modal("hide") }), jquery_min_p("#btnaddrule").click(function () { if (1 == validaterules()) { var t = new Date, e = t.getMonth() + 1, a = t.getDate(), n = t.getFullYear() + "-" + (e < 10 ? "0" : "") + e + "-" + (a < 10 ? "0" : "") + a; jquery_min_p("#txtdate").val() >= n ? (SaveRule(), Reset()) : alert("Invalid Date") } }), jquery_min_p("#rdexisting").click(function () { 1 == jquery_min_p("#rdexisting").prop("checked") && (jquery_min_p("#txtcardno").val(""), BindData()) }), jquery_min_p("#txtamount").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }), jquery_min_p("#txtstartfrom").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }), jquery_min_p("#txtissuecard").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }), jquery_min_p("#txtearnedpoint").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }), jquery_min_p("#txtredeemamount").keypress(function (t) { var e = t.keyCode; (e >= 65 && e <= 90 || e >= 97 && e <= 122) && t.preventDefault() }) });