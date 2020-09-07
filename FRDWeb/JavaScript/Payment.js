var  selected_otherid = 0;
var IsUpdatedGridQuantity = 0;
var UpdatedGridQuantity = 0;
var Iscount = '0';
//var QtyB = '0';
var totalqty = 0;
var IsShowBill = 0;
//var actamnt = 0; prs
var IsProceed = 0;

var IsAmountSplit = 0;
var IsActiveBill = 0;
var IsSplitOk = 0;
var SplitQuantity = 0;

var dotcount = 0;


jquery_min_p(document).ready(function () {
    

    BindOrderDetail();
    DecryptOrderID();
    BindDropDown();
    BindBookletCoupon();






  










    // var IsOk = 1;
    jquery_min_p('#MenuBoxCancel').dblclick(function () {
        jquery_min_p("#tblrunningord").css('display', 'block');
        jquery_min_p("#dvshowitemsplit").css('display', 'none');
        jquery_min_p(".receiptbox").css('display', 'none');
        jquery_min_p("#receiptdiv").css('display', 'none');
        
    });
    
    

    jquery_min_p('#btnprint').click(function () {

        printpay();

    });
   

    jquery_min_p("#empDetails").css('display', 'block');
    jquery_min_p("#MenuBoxCash").addClass('active');
    jquery_min_p("#txttendered").attr("disabled", "disabled");

    

    jquery_min_p('#btnsalesreturnexit').click(function () {


    })

    jquery_min_p("#txtcardamount").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });


    jquery_min_p("#txtcardamount").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    }); // text


    jquery_min_p("#txtloyalityCardAmount").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });

    jquery_min_p("#txtstcamount").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });




    
    jquery_min_p('#MenuBoxCoupon').click(function () {



        jquery_min_p('#coupondetails').on('shown.bs.modal', function () {
            jquery_min_p('#textCouponno').focus();
        })
        MenuBoxCoupon();



        var dueamont = jquery_min_p("#txtbalance").val();

        jquery_min_p("#lblcouponamount").text(dueamont)
        jquery_min_p("#coupondetails").modal('show');
        var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
        jquery_min_p('#ddlpytmcupon').append(newOption1);

    });

    
    //jquery_min_p('#btnpytmcoupanapply').click(function () {
    //    if( CouponValidation())
    //    {
    //       // jquery_min_p("#coupondetails").modal('hide');
    //    }
    //    else {
    //        return false;
    //    }

    //});


    jquery_min_p('#btnpytmcoupanapply').click(function () {
        if (CouponValidation()) {
            var num = jquery_min_p("#lblnumber").text();     ///paras add
            jquery_min_p("#lblcoupan").text(num);            ///paras add
            jquery_min_p("#txttendered").val(num.toFixed(3));           ///paras add
            jquery_min_p("#coupondetails").modal('hide');
            jquery_min_p("#lblnumber").text("");
            CouponReset();                                   ///paras add
            jquery_min_p("#ddlpytmcupon").html("");
        }
        else {
            return false;
        }
    });


    
    jquery_min_p('#btncouponcrosscloase').click(function () {
        CouponReset();
    });



    jquery_min_p('#btnproceedcrosscloase').click(function () {
        
        SplitQuantity = 0;
        jquery_min_p("#dvsplititemwise").html('');
        BindOrderDetail();
    });


    jquery_min_p('#btnsiproceed').click(function () {



        

        var qtyproc = "";
        var pnzero = "";
        var ro = "";
       // qtyproc = jquery_min_p("#splittable tbody td").closest('tr');
       // var ro = qtyproc.find('td:nth-child(3)').text().trim();
        // alert(ro);
        var l = jquery_min_p("#splittable tbody tr").length;
        var con = 0;
        //alert(con)
        jquery_min_p("#splittable tbody tr").each(function () {
            if (jquery_min_p(this).hasClass('grdactive')) {

                row1 = jquery_min_p(this).closest('tr');
                //alert(row);
                con++;
            }
            if (!jquery_min_p(this).hasClass('grdactive')) {
                qtyproc = jquery_min_p(this).closest('tr');
                ro = ro + qtyproc.find('td:nth-child(3)').text().trim();
            }

            
        });
       // alert(l-con);

        for (var i = 1; i <= (l-con); i++) {
            pnzero = pnzero + '0';
        }
        ///alert(pnzero); 
       /// alert(ro);
        if (ro == pnzero) {

            jquery_min_p('#proceeditem').modal('hide');
                
          // jquery_min_p('#dvsplititemwise').appendTo('#dvshowitemsplit');
            var firstDivContent = document.getElementById('dvsplititemwise');
            var secondDivContent = document.getElementById('dvshowitemsplit');
            secondDivContent.innerHTML = firstDivContent.innerHTML;
            IsProceed = 1;
           // ShowSplitItemWise();
            jquery_min_p("#dvshowitemsplit").css('display', 'block');
            jquery_min_p("#receiptdiv").css('display', 'none');
            jquery_min_p(".bbutton").css('display', 'none');
            
            jquery_min_p("#tblrunningord").css('display', 'none');
            jquery_min_p("#dvsplititemwise").html('');

        }
        else
        {
            jquery_min_p('#h6warning').text('Add all items in bills ');
            jquery_min_p('#dngwarn').modal('show');

            return false;
        }   


    });


    jquery_min_p('#MenuBoxSplitBill').click(function () {

        var dueamont = jquery_min_p("#txtbalance").val();

        jquery_min_p("#lblsplitamount").text(dueamont)

        jquery_min_p('#splitbill').on('shown.bs.modal', function () {
            jquery_min_p('#txtsplitcount').focus();
        })


        MenuBoxSplitBill();


    });



    jquery_min_p('#MenuBoxCard').click(function () {



        jquery_min_p('#cardPayment').on('shown.bs.modal', function () {
            jquery_min_p('#txtcardnumber').focus();
        })
        MenuBoxCard();


    });





    jquery_min_p('#MenuBoxLoyalty').click(function () {



        jquery_min_p('#loyaltyCard').on('shown.bs.modal', function () {
            jquery_min_p('#txtloyalityCardNo').focus();
        })
        MenuBoxLoyalty();


    });


    //jquery_min_p('#MenuBoxCoupon').click(function () {



    //    jquery_min_p('#coupondetails').on('shown.bs.modal', function () {
    //        jquery_min_p('#textCouponno').focus();
    //    })
    //    MenuBoxCoupon();


    //});

    jquery_min_p('#MenuBoxSTCPay').click(function () {



        jquery_min_p('#stcpay').on('shown.bs.modal', function () {
            jquery_min_p('#txtstctransaction').focus();
        })
        MenuBoxSTCPay();


    });


    jquery_min_p('#MenuBoxOther').click(function () {
        jquery_min_p('#other').on('shown.bs.modal', function () {
            jquery_min_p('#HungerstationTransactionNo').focus();
        })
        MenuBoxOther();


    });


    jquery_min_p('#btnok').click(function () {

        if (IsAmountSplit != 1) {
            btnsaveCash();
        }
        else {
            btnsaveCashSplit();
        }




    });
    //btncrosscloase
    jquery_min_p('#btncrosscloase').click(function () {


        $('#divcardpayment .boxpaycolor1').removeClass('active');
        jquery_min_p("#divcardpayment .boxpaycolor1").removeClass('active');

        jquery_min_p("#txtcardnumber").removeClass('validate');
        jquery_min_p("#txtcardamount").removeClass('validate');


    })


    jquery_min_p('#btncrosscloaseSplit').click(function () {

        IsAmountSplit = 0;
        jquery_min_p("#MenuBoxSplitBill").addClass('active');

        jquery_min_p("#txtsplitcount").val("");

        jquery_min_p('#txtsplitcount').removeClass('validate');


        jquery_min_p('#splitbill').modal('hide');


    });



    jquery_min_p('#btnexit').click(function () {
        window.location.href = "/SalesBilling/RunningOrder";
    });


    jquery_min_p('#proceedsplitbill').click(function () {

        var Flag = 0;
        jquery_min_p("#Disproportionatepopup").modal('hide');
        if (jquery_min_p("#txtsplitcount").val() == "") {
            jquery_min_p("#txtsplitcount").addClass('validate');
            Flag = 1;
        }

        if (Flag == 0) {
            if (jquery_min_p('input[name=amount]:checked').val() == "Equally") {


                // jquery_min_p("#receiptdiv").css('display', 'none');


                jquery_min_p("#tblrunningord").css('display', 'none');
                jquery_min_p("#dvshowitemsplit").css('display', 'none');
                splitAmountEqually();


            }

            if (jquery_min_p('input[name=Splitbill]:checked').val() == "Item") {

                //alert('hi');
                IsAmountSplit = 0;
                var count = jquery_min_p("#txtsplitcount").val();
                if (SplitQuantity >= count) {
                    SplitItemWise(count);
                }
                else {

                    jquery_min_p('#h6warning').text('Split Count should be less than Order Quantity');
                    jquery_min_p('#dngwarn').modal('show');

                }

            }




            if (jquery_min_p('input[name=amount]:checked').val() == "Disproportionate") {

                //jquery_min_p("#receiptdiv").css('display', 'none');

                jquery_min_p("#tblrunningord").css('display', 'none');
                jquery_min_p("#dvshowitemsplit").css('display', 'none');

                splitAmountDispropotionate();

            }

        }
        else {
            return false;



        }





    });


    jquery_min_p('#btnproceeddisp').click(function () {


        GridDispropotionate();

    });






    jquery_min_p("input[name=Splitbill]:radio").click(function () {
        if (jquery_min_p('input[name=Splitbill]:checked').val() == "Amount") {


            IsAmountSplit = 1;
            jquery_min_p("#txtsplitcount").val("");

            jquery_min_p('#txtsplitcount').removeClass('validate');

        }
    });


    jquery_min_p("input[name=Splitbill]:radio").click(function () {
        if (jquery_min_p('input[name=Splitbill]:checked').val() == "Item") {

            jquery_min_p("#txtsplitcount").val("");

            jquery_min_p('#txtsplitcount').removeClass('validate');

        }
    });






    jquery_min_p("txtsplitcount").keypress(function () {

        if (jquery_min_p("#txtsplitcount").val() != "") {
            jquery_min_p("#txtsplitcount").removeClass('validate');



        }
    });


    jquery_min_p('#btnclear').click(function () {

        jquery_min_p('#txttendered').val("");


        //var amount = jquery_min_p('#txtdue').val();
        var subtotal = jquery_min_p("#txtsubtotal").text();
        var vat = jquery_min_p("#txtvat").text();
        var amount = parseFloat(subtotal) + parseFloat(vat);
        jquery_min_p('#txtbalance').val(parseInt(amount).toFixed(3));
        jquery_min_p('#txtdue').val(parseInt(amount).toFixed(3))
        jquery_min_p('#txttotal').text(parseInt(amount).toFixed(3))

        ClearRecord();
        Reset();
        $("#divcalculator").removeClass("disable");



    });



    jquery_min_p('#yesAmmend').click(function () {
        jquery_min_p("#AmmendconfirmationPopup").modal('hide');

        AmmendedItem();

    });

    jquery_min_p('#noAmmend').click(function () {

        jquery_min_p('#AmmendconfirmationPopup').modal('hide');
        return false;

    });


    jquery_min_p('#MenuBoxConfirm').click(function () {

        var duebalance = jquery_min_p("#txtdue").val().trim();
        var tenderedbalance = jquery_min_p("#txttendered").val().trim();
        var balance = jquery_min_p("#txtbalance").val().trim();
        var TotalTax = jquery_min_p("#txtvat").val().trim();
        var billAmount = jquery_min_p("#txtdue").val().trim();
        var totalAmount = jquery_min_p("#txtdue").val().trim();
        restroid = jquery_min_p("#lblrestroid").text();


        if ($('#receiptdiv .receiptbox').hasClass('active')) {

            if (parseFloat(duebalance) != parseFloat(tenderedbalance) && parseFloat(balance) != 0) {


                jquery_min_p('#hconfirm').text('Would you like to make the payment ?');
                jquery_min_p('#confirmationPopup').modal('show');

                jquery_min_p('#yesBtn').click(function () {
                    jquery_min_p("#confirmationPopup").modal('hide');


                    FinalPayment();
                    //        if(IsAmountSplit==1)
                    //        {
                    //            AmountsplitPayment();
                    //        }
                    //    else
                    //{

                    //        FinalPayment();
                    //}

                });

                jquery_min_p('#noBtn').click(function () {

                    jquery_min_p('#confirmationPopup').modal('hide');
                    return false;

                });




            }

        }

        else if (parseFloat(duebalance) != parseFloat(tenderedbalance) && parseFloat(balance) != 0) {  // || parseFloat(duebalance) == parseFloat(tenderedbalance) && parseFloat(balance)==0) {
            jquery_min_p('#h6warning').text('Amount Should Be Equal To Actual Amount');
            jquery_min_p('#dngwarn').modal('show');

            return false;

        }

        else {

            jquery_min_p('#hconfirm').text('Would you like to make the payment ?');
            jquery_min_p('#confirmationPopup').modal('show');

            jquery_min_p('#yesBtn').click(function () {
                jquery_min_p("#confirmationPopup").modal('hide');

                FinalPayment();

                //added
                //if (IsAmountSplit == 1) {
                //    AmountsplitPayment();
                //}
                //else {

                //    FinalPayment();
                //}

                //added

            });

            jquery_min_p('#noBtn').click(function () {

                jquery_min_p('#confirmationPopup').modal('hide');
                return false;

            });

        }


    });

    jquery_min_p('#manager').on('shown.bs.modal', function () {
        jquery_min_p('#textaccesscode').focus();
    })
    jquery_min_p('#btnmanagerprivilege').click(function () {


        var dueamount = jquery_min_p("#txtdue").val().trim();
        var tenderedamt = jquery_min_p("#txttendered").val().trim()
        var balamt = jquery_min_p("#txtbalance").val().trim();

        var discountamt = jquery_min_p("#txtdiscount").text();
        if (discountamt == "0") {
            if (parseFloat(dueamount) != parseFloat(balamt)) {

                jquery_min_p('#h6warning').text('You Can Not Give Any Discount After Payment!!');
                jquery_min_p('#dngwarn').modal('show');
                return false;
            }
            else {



                jquery_min_p("#manager").modal('show');
                jquery_min_p("#textaccesscode").val("");
            }
        }
        else {
            jquery_min_p('#h6warning').text('You Have already Given Discount    !!');
            jquery_min_p('#dngwarn').modal('show');
            return false;
        }



    });



    jquery_min_p("input[name=Manager]:radio").click(function () {
        if (jquery_min_p('input[name=Manager]:checked').val() == "Debit") {

            jquery_min_p('#amendorder').css('display', 'none');
            jquery_min_p('#divmanagerdiscount').css('display', 'flex');


            jquery_min_p("#MDPersentage").removeClass('validate');
            jquery_min_p("#txtMDamount").removeClass('validate');
            jquery_min_p("#ddlreason").removeClass('validate');


            bindReason();


        } else {
            jquery_min_p('#divmanagerdiscount').css('display', 'none');
            jquery_min_p('#amendorder').css('display', 'flex');
            BindItem();


        }


    });



    jquery_min_p("#ddlreason").change(function () {



        if (jquery_min_p("#ddlreason").val().trim() != '0') {
            jquery_min_p("#ddlreason").removeClass('validate');

        }

    });

    jquery_min_p("#txtreason").change(function () {



        if (jquery_min_p("#txtreason").val().trim() != '0') {
            jquery_min_p("#txtreason").removeClass('validate');

        }

    });


    jquery_min_p("input[name=Splitbill]:radio").click(function () {

        if (jquery_min_p('input[name=Splitbill]:checked').val() == "Item") {

            //jquery_min_p('#amendorder').css('display', 'none');
            //jquery_min_p('#divmanagerdiscount').css('display', 'flex');


            //jquery_min_p("#MDPersentage").removeClass('validate');
            //jquery_min_p("#txtMDamount").removeClass('validate');
            //jquery_min_p("#ddlreason").removeClass('validate');

            jquery_min_p("#divequaldis").css('display', 'none');



        }
        else {

            jquery_min_p("#divequaldis").css('display', 'block');

            jquery_min_p("input[name=amount][value=Equally]").prop('checked', true);

        }
    });











    jquery_min_p('#btnmanagergo').click(function () {



        var accesscode = jquery_min_p('#textaccesscode').val().trim();
        var restroId = jquery_min_p("#lblrestroid").text();


        if (accesscode == "") {
            jquery_min_p('#h6warning').text('Enter Access code!!');
            jquery_min_p('#dngwarn').modal('show');
            return false;
        }

        else {

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/Payment/CheckAdmin",
                data: "{'restroId':'" + restroId + "','accesscode':'" + accesscode + "'}",
                dataType: "json",
                async: false,
                success: function (result) {


                    var ArrayCount = result.length;
                    if (result[0].result == "-1") {
                        jquery_min_p('#h6warning').text('Invalid Access Code!!');
                        jquery_min_p('#dngwarn').modal('show');
                        return false;
                    }
                    else {

                        jquery_min_p("#manager").modal('hide');
                        jquery_min_p('#managerpri').modal('show');


                        //jquery_min_p('input[name=Manager]').attr('checked', true);
                        jquery_min_p("input[name=Manager][value=Debit]").prop('checked', true);
                        jquery_min_p('#divmanagerdiscount').css('display', 'flex');

                        jquery_min_p('#MDPersentage').val("");
                        jquery_min_p('#txtMDamount').val("");

                        jquery_min_p('#amendorder').css('display', 'none');
                        bindReason();

                        jquery_min_p('#txtMainamount').val(jquery_min_p('#txtdue').val().trim());
                        jquery_min_p('#txtMainamount').attr("disabled", "disabled");

                        jquery_min_p('#txtMDamount').attr("disabled", "disabled");
                    }


                },
                error: function () {
                    //alert('error');
                }


            });
        }

    });




    jquery_min_p('#btnProceeddiscount').click(function () {



        if (jquery_min_p('input[name=Manager]:checked').val() == "Debit") {

            if (DiscountValidation()) {

                ManagerDiscount();



            }
            else {

                jquery_min_p('#h6warning').text('Please Fill All Details');
                jquery_min_p('#dngwarn').modal('show');

            }



        }
        else {

            if (AmmendedValidation()) {



                jquery_min_p('#Ammendconfirm').text('Are you sure? this can not  revoke!');
                jquery_min_p('#AmmendconfirmationPopup').modal('show');

            }


        }



    });



    jquery_min_p('#btnRedeem').click(function () {

        var cardno = jquery_min_p('#txtloyalityCardNo').val();
        var amount = jquery_min_p('#txtloyalityCardAmount').val();
        if (LoyalityValidation()) {

            var cardno = jquery_min_p('#txtloyalityCardNo').val();
            var amount = jquery_min_p('#txtloyalityCardAmount').val();


            var balanceamount = jquery_min_p('#txtbalance').val();
            var redemeamount = jquery_min_p('#lblloyalityamounts').text();


            if (parseFloat(amount) > parseFloat(balanceamount) || parseFloat(amount) > parseFloat(redemeamount)) {


                // alert('Your Amount is Greater!!')
                jquery_min_p('#h6warning').text('Your Amount is Greater!!');
                jquery_min_p('#dngwarn').modal('show');

            }
            else {

                jquery_min_p('#hconfirm').text('Would You Like To Redeem !');
                jquery_min_p('#confirmationPopup').modal('show');







                jquery_min_p('#yesBtn').click(function () {
                    jquery_min_p("#confirmationPopup").modal('hide');

                    SaveLoyalityAmount();

                });

                jquery_min_p('#noBtn').click(function () {

                    jquery_min_p('#confirmationPopup').modal('hide');
                    return false;

                });


            }
        }
        else {
            //alert('please fill all details');
            jquery_min_p('#h6warning').text('please fill all details!!');
            jquery_min_p('#dngwarn').modal('show');
        }


    });



    jquery_min_p('#btnOtherProceed').click(function () {

        var inpuid = selected_otherid;
        var transno = '';
        var otheramount = '';
        var otherpaymentType = '';
        var balance = jQuery("#txtbalance").val().trim();
        var tenderedamount = jQuery("#HungerstationTransactionNo").val().trim();

        if (OtherPayementValidation(inpuid)) {
            if (inpuid == 1) {
                otherpaymentType = 'HSC';
                transno = jQuery("#HungerstationTransactionNo").val().trim();
                otheramount = jQuery("#HungerstationAmount").val().trim();
                if (parseFloat(balance) < parseFloat(otheramount)) {
                    jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
                    jquery_min_p('#dngwarn').modal('show');
                }
                else {
                    SaveOtherPayment(transno, otheramount, otherpaymentType);
                }
            }

            if (inpuid == 2) {
                otherpaymentType = 'HSD';
                transno = jQuery("#HungerstationdebitTranNo").val().trim();
                otheramount = jQuery("#HungerstationdebitAmount").val().trim();
                if (parseFloat(balance) < parseFloat(otheramount)) {
                    jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
                    jquery_min_p('#dngwarn').modal('show');
                }
                else {
                    SaveOtherPayment(transno, otheramount, otherpaymentType);
                }
            }
            if (inpuid == 3) {
                otherpaymentType = 'IO';
                transno = jQuery("#InvoiceTransNo").val().trim();
                otheramount = jQuery("#InvoiceTransAmount").val().trim();
                if (parseFloat(balance) < parseFloat(otheramount)) {
                    jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
                    jquery_min_p('#dngwarn').modal('show');
                }
                else {
                    SaveOtherPayment(transno, otheramount, otherpaymentType);
                }
            }
            if (inpuid == 4) {
                otherpaymentType = 'C';
                transno = jQuery("#txtChairmanTransNo").val().trim();
                otheramount = jQuery("#txtChairmanTransAmount").val().trim();
                if (parseFloat(balance) < parseFloat(otheramount)) {
                    jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
                    jquery_min_p('#dngwarn').modal('show');
                }
                else {
                    SaveOtherPayment(transno, otheramount, otherpaymentType);
                }
            }
            if (inpuid == 5) {
                otherpaymentType = 'H';
                transno = jQuery("#txtHospitalityTransNo").val().trim();
                otheramount = jQuery("#txtHospitalityTransAmount").val().trim();
                if (parseFloat(balance) < parseFloat(otheramount)) {
                    jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
                    jquery_min_p('#dngwarn').modal('show');
                }
                else {
                    SaveOtherPayment(transno, otheramount, otherpaymentType);
                }

            }
            if (inpuid == 6) {
                otherpaymentType = 'CC';
                transno = jQuery("#txtCustCreditTransNo").val();
                otheramount = jQuery("#txtCustCreditTransAmount").val().trim();
                if (parseFloat(balance) < parseFloat(otheramount)) {
                    jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
                    jquery_min_p('#dngwarn').modal('show');
                }
                else {
                    SaveOtherPayment(transno, otheramount, otherpaymentType);
                }
            }
            if (inpuid == 7) {
                otherpaymentType = 'EC';
                transno = jQuery("#EmployeeCreditTransNo").val();
                otheramount = jQuery("#EmployeeCreditTransAmount").val().trim();
                if (parseFloat(balance) < parseFloat(otheramount)) {
                    jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
                    jquery_min_p('#dngwarn').modal('show');
                }
                else {
                    SaveOtherPayment(transno, otheramount, otherpaymentType);
                }
            }
        }
        else {
            //alert('please fill details');
            jquery_min_p('#h6warning').text('please fill details!!');
            jquery_min_p('#dngwarn').modal('show');
            return false;
        }

    });




    jQuery("#txtloyalityCardNo").blur(function () {


        var CardNo = jQuery("#txtloyalityCardNo").val().trim();
        if (CardNo == '') {
            //alert('Enter card No.')
            jquery_min_p('#h6warning').text('Enter card No.');
            jquery_min_p('#dngwarn').modal('show');
            return false;

        }
        else {

            LoyalityCardChange();
        }
    });


    jquery_min_p('#btnstcok').click(function () {

        if (StcPaymentValidation()) {

            var balanceamount = jquery_min_p('#txtbalance').val().trim();
            var stcamount = jquery_min_p('#txtstcamount').val().trim();

            if (parseFloat(balanceamount) < parseFloat(stcamount)) {
                // alert('amount should not be greater than actual amount');
                jquery_min_p('#h6warning').text('amount should not be Equal than actual amount');
                jquery_min_p('#dngwarn').modal('show');
                return false;

            }
            else {

                var tenderedamount = jquery_min_p("#txttendered").val().trim();
                var cardamount = jquery_min_p("#txtstcamount").val().trim();
                if (tenderedamount == '') {
                    tenderedamount = 0
                }
                var newtenderedamount = parseFloat(tenderedamount) + parseFloat(cardamount);
               // alert(parseFloat(tenderedamount))
              

                jquery_min_p("#txttendered").val(newtenderedamount);
                Stcpayment();
            }

        }
        else {

            //alert('please fill details first !')
            jquery_min_p('#h6warning').text('please fill details first!!');
            jquery_min_p('#dngwarn').modal('show');
            return false;
        }

    });



    jquery_min_p('#divcardpayment .boxpaycolor1 ').click(function () {


        $('#divcardpayment .boxpaycolor1').removeClass('active');
        jquery_min_p("#divcardpayment .boxpaycolor1").removeClass('active');
        jquery_min_p(this).addClass('active');


    });

    jquery_min_p("#txtcardnumber").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });



    jquery_min_p("#txtcardamount").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });





    jquery_min_p("#txtstctransaction").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });



    jquery_min_p("#txtstcamount").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });



    jquery_min_p("#btnProceedcard").click(function () {



       
        CardPaymentValidation();

        if (CardPaymentValidation()) {


            if (jquery_min_p('input[name="a"]:checked').val() === "Debit") {

                //Difference1 boxpaycolor1 active
                //if (jquery_min_p('Difference1 boxpaycolor1').hasClass('active')) {
                //    alert(jquery_min_p('divMastercard').text())
                //}

                jquery_min_p("#divcardpayment .Difference1 ").each(function () {
                    if (jquery_min_p(this).hasClass('active')) {

                        var a = jquery_min_p(this).find(".h6").text();
                        // alert(a);
                        // alert('enter') lbltempcard
                        if (a == 'Master Card') {
                            jquery_min_p("#lbltempcard").text("1");
                        }
                        if (a == 'Visa') {
                            jquery_min_p("#lbltempcard").text("3");
                        }
                        if (a == 'American Express') {
                            jquery_min_p("#lbltempcard").text("4");
                        }
                        if (a == 'Mada-Debit Card') {
                            jquery_min_p("#lbltempcard").text("9");
                        }
                    }


                    //var b = jquery_min_p('#lbltempcard').text();
                    //alert(b);


                });

            }




            if (jquery_min_p('input[name="a"]:checked').val() === "Credit") {

                jquery_min_p("#divcardpayment .Difference1 ").each(function () {
                    if (jquery_min_p(this).hasClass('active')) {

                        var a = jquery_min_p(this).find(".h6").text();
                        // alert(a);
                        // alert('enter')

                        if (a == 'Master Card') {
                            jquery_min_p("#lbltempcard").text("5");
                        }
                        if (a == 'Visa') {
                            jquery_min_p("#lbltempcard").text("7");
                        }
                        if (a == 'American Express') {
                            jquery_min_p("#lbltempcard").text("8");
                        }
                        if (a == 'Mada-Debit Card') {
                            jquery_min_p("#lbltempcard").text("10");
                        }
                    }




                });






            }
            

            var amount = '';

           
            amount = amount + jquery_min_p("#txtcardamount").val().trim();
            var balanceamount = jquery_min_p("#txtbalance").val().trim();
            if (parseFloat(balanceamount) < parseFloat(amount)) {
                // alert('amount should be equal or less to actual amount')
                jquery_min_p("#txtcardamount").val("");
                jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
                jquery_min_p('#dngwarn').modal('show');
            }

            else {
                //var tenderedamount = jquery_min_p("#txttendered").val().trim();
                //var cardamount = jquery_min_p("#txtcardamount").val().trim();
                //var newtenderedamount = parseFloat(tenderedamount) + parseFloat(cardamount);


                //jquery_min_p("#txttendered").val(newtenderedamount);
                var balance = jquery_min_p("#txtbalance").val().trim();

                if (IsAmountSplit != 1) {

                    btnsaveCradpayment();
                }
                else {

                    var cardsplit = jquery_min_p("#txtcardamount").val();
                    jquery_min_p("#txttendered").val(parseInt(cardsplit).toFixed(3));
                    $("#cardPayment").modal('hide');

                }

            }


        }
        else {

            //alert('please fill all details')
            jquery_min_p('#h6warning').text('please fill all details!!');
            jquery_min_p('#dngwarn').modal('show');
        }



    });


    //jquery_min_p('#btndot').click(function () {

    //    var dot = ".";
    //    jquery_min_p('#txttendered').val(dot);
    //  .  jquery_min_p('#txttendered').val();
    //});


    jquery_min_p('#btncross').click(function () {

        var inputString = jquery_min_p('#txttendered').val();
        var shortenedString = inputString.substr(0, (inputString.length - 1));
//alert(shortenedString)
        jquery_min_p('#txttendered').val(shortenedString);

    });
    jquery_min_p('#btnexact').click(function () {

        var amount = jquery_min_p('#txtdue').val();
        var balanceamount = jquery_min_p('#txtbalance').val();
        if (parseFloat(amount) != parseFloat(balanceamount)) {
            jquery_min_p('#lblcash').text(amount);

            jquery_min_p('#hconfirm').text('Would You Like To Exact !');
            jquery_min_p('#confirmationPopup').modal('show');

            jquery_min_p('#yesBtn').click(function () {
                jquery_min_p("#confirmationPopup").modal('hide');

                Reset();
                ClearRecord();
                // if ($('#receiptdiv .receiptbox').hasClass('active')) {  
                jquery_min_p('#txttendered').val(parseInt(amount).toFixed(3));
                jquery_min_p('#txtbalance').val("0");
                jquery_min_p('#lblcash').text(amount);
                //}

            });

            jquery_min_p('#noBtn').click(function () {

                jquery_min_p('#confirmationPopup').modal('hide');
                return false;

            });


        }
        else {
            jquery_min_p('#txttendered').val(parseInt(amount).toFixed(3));

            jquery_min_p('#txtbalance').val("0");
            //jquery_min_p('#lblcash').text(amount);
        }




    });




    jQuery('#txtdiffamt').on('input', function () {
        var amount = jquery_min_p("#txtdiffamt").val();
        var diffdueamt = jquery_min_p('#txtdue').val();

        var diffbalamt = amount - diffdueamt;
        jquery_min_p('#lbldiffbalamt').text(diffbalamt);



    });




    jQuery('#MDPersentage').keyup(function () {
        var persentage = jquery_min_p("#MDPersentage").val();
        
        if (persentage != "") {
            jquery_min_p("#MDPersentage").removeClass('validate');
        }
        if (persentage == "") {
            jquery_min_p("#txtMDamount").val("");
            return false;
        }

        if (parseFloat(persentage) > 30) {
            jquery_min_p("#lbldiscounterror").addClass('error');
            jquery_min_p("#lbldiscounterror").text('Note:Only 30% Discount Will Be Applicable');
            jquery_min_p("#lbldiscounterror").css('display', 'block');
            jquery_min_p("#txtMDamount").val("");
        }
        else {
            var Totalamt = jquery_min_p("#txtMainamount").val();
            
            var newamount = 0;
            
            jquery_min_p("#lbldiscounterror").css('display', 'none');
            listPrice = parseFloat(Totalamt);
            discount = parseFloat(persentage);

            newamount = (listPrice * discount / 100).toFixed(2);
            
            jquery_min_p("#txtMDamount").val(newamount);
            jquery_min_p("#txtMDamount").removeClass('validate');

        }

    });



    jquery_min_p('#btndifference').click(function () {


        jquery_min_p('#txtdiffamt').val("");
        jquery_min_p('#lbldiffbalamt').text("");

        jquery_min_p('#txtdiffamt').focus();


        var diffdueamt = jquery_min_p('#txtdue').val();

        jquery_min_p("#lbldiffdueamt").text(diffdueamt);
    });

});


function BindOrderDetail() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('orderId');
    restroid = jquery_min_p("#lblrestroid").text();
    var OrderId = myParam;



    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/BindOrderDetails",
        data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            jquery_min_p("#tblrunningord tbody").html("");
            var i = 0;
            var jsonData1 = result.Table;
            var jsonData2 = result.Table1;
            var jsonData3 = result.Table2;
            var jsonData4 = result.Table3;

            // jsonData1[i].




            var Query = "";
            for (var i = 0; i < jsonData1.length; i++) {

                if (jsonData1[i].ISammend == "1") {


                    Query = Query + "<tr class='grdactive strikeout'>";
                    //Query = Query + "<tr class='strikeout'>";
                }
                else {
                    Query = Query + "<tr>";
                    SplitQuantity = SplitQuantity + jsonData1[i].Quantity;
                  
                }
                Query = Query + "<td style='display:none'>" + jsonData1[i].orderId + "</td>";

                //  Query = Query + "<td style='display:none  id = 'txtitemid" + i + "''>" + jsonData1[i].itemId + "</td>";
                Query = Query + "<td width='60%'>" + jsonData1[i].ItemName + "</td>";
                Query = Query + "<td>" + jsonData1[i].Quantity + "</td>";
                Query = Query + "<td>" + (parseFloat(jsonData1[i].itemPrice)).toFixed(3) + "</td>";
                Query = Query + "<td>" + (parseFloat(jsonData1[i].vat)).toFixed(3) + "</td>";

               
                Query = Query + "</tr>";

            }
            var SubTotal = 0;
            var taxAmount = jsonData2[0].tax;
            var OrderNo = jsonData4[0].OrderNo;
            for (var j = 0; j < jsonData1.length; j++) {
                SubTotal = SubTotal + jsonData1[j].itemPrice;
            }
            // var discount = 0;    
            var balance = SubTotal + taxAmount;
            var total = balance;

            
            //jquery_min_p("#txtdiscount").text(discount);
            // jquery_min_p("#txtdiscount").attr("disabled", "disabled");

            jquery_min_p("#lblorderNo").text(OrderNo);
            jquery_min_p("#txtsubtotal").text(parseInt(SubTotal).toFixed(3));
            // jquery_min_p("#txtsubtotal").attr("disabled", "disabled");
            jquery_min_p("#txtvat").text(parseFloat(taxAmount).toFixed(3));
            //jquery_min_p("#txtvat").attr("disabled", "disabled");
            jquery_min_p("#txttotal").text(parseInt(balance).toFixed(3));
            //jquery_min_p("#txttotal").attr("disabled", "disabled");

            jquery_min_p("#txtdue").val(parseInt(balance).toFixed(3));
            jquery_min_p("#txtdue").attr("disabled", "disabled");
            jquery_min_p("#txtbalance").val(parseInt(balance).toFixed(3));
            jquery_min_p("#txtbalance").attr("disabled", "disabled");
            jquery_min_p("#tblrunningord tbody").append(Query);

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },


        error: function () {
        }
    });





}
function btnvalue(btnvalue, parameter) {
    var tenderedamount = "";

    tenderedamount = jquery_min_p("#txttendered").val();
    var duebalance = jquery_min_p("#txtdue").val();

    if (parameter == 0) {

        if (jquery_min_p("#txttendered").val() == "") {

            jquery_min_p("#txttendered").val(btnvalue)

            tenderedamount = jquery_min_p("#txttendered").val();


        }
        else {
            if (parseFloat(duebalance) == parseFloat(tenderedamount)) {
                tenderedamount = tenderedamount + btnvalue;
            }
            else {
                tenderedamount = tenderedamount + btnvalue;
            }

        }

    }

    else if (parameter == 1) {
        if (jquery_min_p("#txttendered").val() == "") {

            jquery_min_p("#txttendered").val(btnvalue)

            tenderedamount = jquery_min_p("#txttendered").val();
        }
        else {

            if (parseFloat(duebalance) == parseFloat(tenderedamount)) {

            }

            else {
                tenderedamount = parseFloat(tenderedamount) + parseFloat(btnvalue);
            }
        }
    }

    else if (parameter == 2) {  //added 

        // dotcount = dotcount + 1; var regexp=/^\[0-9]*\.+$/;
        //var regexp = /^\[0-9]*\.+jquery_min_p("#txttendered").val()/;
        //alert(regexp);
        //if (dotcount <= 1) {
            if (jquery_min_p("#txttendered").val() == "") {

                jquery_min_p("#txttendered").val(btnvalue)

                tenderedamount = jquery_min_p("#txttendered").val();

                //  tenderedamount = tenderedamount + btnvalue;
            }

            else {

                if (parseFloat(duebalance) == parseFloat(tenderedamount)) { //added

                }
                tenderedamount = tenderedamount + btnvalue;  // added
            }
        }
   // }
    else {

    }

    jquery_min_p("#txttendered").val(tenderedamount);
}





function MenuBoxCash() {

    $("#divcalculator").removeClass("disable")


    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxCash").addClass('active');

    var temptendered = jquery_min_p("#txttendered").val();
    var tempdue = jquery_min_p("#txtdue").val();
    //alert(temptendered);lbltemptendered
    jquery_min_p("#lbltemptendered").text(temptendered);

    if (parseInt(temptendered) == parseInt(tempdue)) { }
    else {
        jquery_min_p("#txttendered").val('');
    }
}


function decimal(e)
{
    var key = e.keyCode;
    //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
    //    e.preventDefault();
    //}

    if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
        e.preventDefault();
    }

    var text = jquery_min_p(this).val();

    if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
        e.preventDefault();
    }
}






function MenuBoxCard() {


    jquery_min_p("#txtcardnumber").val("");
    jquery_min_p("#txtcardamount").val("");
    var duebalance = jquery_min_p("#txtbalance").val();
    jquery_min_p("#txtcarddue").text(duebalance);






    $("#divcalculator").addClass("disable")
    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxCard").addClass('active');
}


function MenuBoxLoyalty() {


    jquery_min_p("#txtloyalityCardNo").val("");
    jquery_min_p("#txtloyalityCardAmount").val("");

    var dueamont = jquery_min_p("#txtbalance").val();

    jquery_min_p("#lblloyalitydue").text(dueamont)



    $("#divcalculator").addClass("disable")
    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxLoyalty").addClass('active');
}
function MenuBoxCoupon() {



    $("#divcalculator").addClass("disable")
    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxCoupon").addClass('active');
}
function MenuBoxSTCPay() {



    jquery_min_p("#txtstctransaction").val("");
    jquery_min_p("#txtstcamount").val("");
    var dueamont = jquery_min_p("#txtbalance").val();

    jquery_min_p("#lblstcdue").text(dueamont)

    $("#divcalculator").addClass("disable")
    jquery_min_p("#lblstctotalamount").text(jquery_min_p("#txtbalance").val().trim())
    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxSTCPay").addClass('active');
}
function MenuBoxOther() {

    var dueamont = jquery_min_p("#txtbalance").val();

    jquery_min_p("#lblotherdue").text(dueamont)

    $("#divcalculator").addClass("disable")
    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxOther").addClass('active');
    EnableTextFields(1);
}
function MenuBoxSplitBill() {


    // IsAmountSplit = 1;

    jquery_min_p("#txtsplitcount").val("");

    jquery_min_p('#txtsplitcount').removeClass('validate');

    $("#divcalculator").removeClass("disable")
    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxSplitBill").addClass('active');

    jquery_min_p("#receiptdiv").css('display', 'none');

    jquery_min_p("#receiptdiv").html('');


    jquery_min_p("#splitbill").modal('show');

    //jquery_min_p('#splitbill').on('shown.bs.modal', function () {
    //    jquery_min_p('#txtsplitcount').focus();
    //})

    jquery_min_p("#divequaldis").css('display', 'none');

    jquery_min_p("input[name=Splitbill][value=Item]").prop('checked', true);



}
function MenuBoxCancel() {

    //jquery_min_p("#dvsplit"++"").removeClass('disable');
    jquery_min_p(".dvsplit").removeClass('disable');
    jquery_min_p('.receiptbox').removeClass('disable');
    jquery_min_p('#txttendered').val("");


    //var amount = jquery_min_p('#txtdue').val(); jquery_min_p("#lbltempvat").text(oldvat);
    var subtotal = jquery_min_p("#txtsubtotal").text();
    var vat = jquery_min_p("#lbltempvat").text();
    var amount = parseFloat(subtotal) + parseFloat(vat);
    jquery_min_p('#txtbalance').val(amount.toFixed(3));
    jquery_min_p('#txtdue').val(amount.toFixed(3))
    jquery_min_p('#txttotal').text(amount)
    jquery_min_p('#txtvat').text(vat) //added by rishabh

    $("#divcalculator").removeClass("disable")
    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxCash").addClass('active');
    
    var dueamount = jquery_min_p("#txtdue").val();

    jquery_min_p("#txtbalance").val(parseFloat(dueamount).toFixed(3));
    jquery_min_p("#txttendered").val("");


    jquery_min_p("#lblstcpay").text("0");
    jquery_min_p("#lblstationdebit").text("0");
    jquery_min_p("#lbloffer").text("0");
    jquery_min_p("#lblhospitality").text("0");
    jquery_min_p("#lblempcredit").text("0");
    jquery_min_p("#lblcustcredit").text("0");
    jquery_min_p("#lblcash").text("0");
    jquery_min_p("#lblcard").text("0");
    jquery_min_p("#lblloyality").text("0");
    jquery_min_p("#lblcoupan").text("0");
    jquery_min_p("#lblstationcash").text("0");
    jquery_min_p("#lblstcpay").text("0");
    jquery_min_p("#lblchairman").text("0");
    jquery_min_p("#txtdiscount").text("0");


    
    
    ClearRecord();

}


function CardPaymentValidation() {
    var flag = 0;


    if (typeof $("input[name='a']:checked").val() === "undefined") {
        flag = 1;
    }

    $('#divcardpayment .boxpaycolor1').each(function (e) {
        if ($(this).hasClass('active')) {
            flag = 0;
        }


    });
    if (jquery_min_p("#txtcardnumber").val().trim() == '') {
        jquery_min_p("#txtcardnumber").addClass('validate');
        flag = 1;
    }

    if (jquery_min_p("#txtcardamount").val().trim() == '') {
        jquery_min_p("#txtcardamount").addClass('validate');
        flag = 1;
    }




    if (flag == "1") {
        return false;
    }
    else {

        return true;
    }

}




function RemoveClassCardPayment() {
    if (jquery_min_p("#txtcardnumber").val().trim() != '') {
        jquery_min_p("#txtcardnumber").removeClass('validate');

    }

    if (jquery_min_p("#txtcardamount").val().trim() != '') {
        jquery_min_p("#txtcardamount").removeClass('validate');
    }


}
function Reset() {
    if ($('#destinationFields .MenuBox').hasClass('active')) {
        jquery_min_p('#destinationFields .MenuBox').removeClass('active');
    }

    jquery_min_p("#MenuBoxCash").addClass('active');

    jquery_min_p("#lblstcpay").text("0");
    jquery_min_p("#lblstationdebit").text("0");
    jquery_min_p("#lbloffer").text("0");
    jquery_min_p("#lblhospitality").text("0");
    jquery_min_p("#lblempcredit").text("0");
    jquery_min_p("#lblcustcredit").text("0");
    jquery_min_p("#lblcash").text("0");
    jquery_min_p("#lblcard").text("0");
    jquery_min_p("#lblloyality").text("0");
    jquery_min_p("#lblcoupan").text("0");
    jquery_min_p("#lblstationcash").text("0");
    jquery_min_p("#lblstcpay").text("0");
    jquery_min_p("#lblchairman").text("0");
    jquery_min_p("#txtdiscount").text("0");
    jquery_min_p("#txttendered").val("");
}

function DecryptOrderID() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('orderId');

    var OrderId = myParam;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/DecryptOrderID",
        data: "{'OrderId':'" + OrderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var orderid = result;
            jquery_min_p("#lblorderid").text(orderid);

        },
        error: function () {

        }


    });
}

function btnsaveCashSplit() {

    var Amount = jquery_min_p("#txttendered").val().trim();
    var duebalance = jquery_min_p("#txtdue").val().trim();

    var tenederedamount = jquery_min_p("#txttendered").val().trim();


    if (Amount == '') {
        //alert('please enter tendered amount first')
        jquery_min_p('#h6warning').text('please enter tendered amount first!!');
        jquery_min_p('#dngwarn').modal('show');
        return false;

    }
    if (tenederedamount == "") {

        tenederedamount = 0;
    }

    //if (parseFloat(duebalance) < parseFloat(Amount)) {
    //    jquery_min_p('#h6warning').text('amount should be  equal to actual amount!!');
    //    jquery_min_p('#dngwarn').modal('show');
    //    jquery_min_p("#txttendered").val("");
    //    return false;
    //}

    //else
    {
        restroid = jquery_min_p("#lblrestroid").text();

        var Orderid = jquery_min_p("#lblorderid").text();

        var CardID = "";
        var PaymentMode = 'Cash';
        var LoalityPoints = 0;
        var PointsValue = 0.00;

        var TableDataX = "<dtXml>";
        TableDataX += "<dtXml ";

        TableDataX += 'Orderid="' + Orderid + '" ';
        TableDataX += 'PaymentMode="' + PaymentMode + '" ';
        TableDataX += 'Amount="' + Amount + '" ';
        TableDataX += 'CardID="' + CardID + '" ';
        TableDataX += 'LoalityPoints="' + LoalityPoints + '" ';
        TableDataX += 'PointsValue="' + PointsValue + '" ';
        TableDataX += " />";
        TableDataX += "</dtXml>";

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Payment/btnsaveCashSplit",
            data: "{'restroid':'" + restroid + "','TableDataX':'" + TableDataX + "','Orderid':'" + Orderid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {


                IsSplitOk++;

                var ArrayCount = result.length;
                var splitCount = jquery_min_p('#txtsplitcount').val();
                tenederedamount = parseFloat(result[0].Amount)

                jquery_min_p("#lblcash").text(result[0].Amount);
                // var duebalance = jquery_min_p("#txtdue").val();
                var Jbalance = jquery_min_p("#txtbalance").val();

                var stender = jquery_min_p("#txttendered").val();


                if (IsSplitOk != splitCount) {

                    //jquery_min_p("#txttendered").val(netamt); 

                    // var balance = parseFloat(duebalance) - parseFloat(result[0].Amount)
                    var balance = parseFloat(Jbalance) - parseFloat(stender)
                    jquery_min_p("#txtbalance").val(balance.toFixed(3));

                    // jquery_min_p("#txttendered").val(tenederedamount);
                    jquery_min_p("#txttendered").val('');
                }

                else {
                    var bal = parseFloat(stender) - parseFloat(Jbalance)
                    jquery_min_p("#txtbalance").val(bal.toFixed(2));
                    var due = jquery_min_p("#txtdue").val();
                    jquery_min_p("#txttendered").val((parseFloat(due)).toFixed(3));


                }


                var i = 0;
                jquery_min_p("#receiptdiv .receiptbox").each(function () {
                    //jquery_min_p('#receiptdiv .receiptbox').removeClass('disable')
                    i = 1;
                    if ($(this).hasClass('active')) {

                        jquery_min_p(this).removeClass("active");
                        jquery_min_p(this).addClass("disable");

                    }
                    i++;
                });



                //jquery_min_p("#dvsplititemwise tbody tr").each(function () {
                //    //jquery_min_p('#receiptdiv .receiptbox').removeClass('disable')
                //    jquery_min_p("#dvsplit" + k + "").removeClass('active');
                //    if ($(this).hasClass('active')) {

                //        jquery_min_p(this).removeClass("active");
                //        jquery_min_p(this).addClass("disable");

                //    }
                    
                //});



               // var k = 1;

                     jquery_min_p("#dvshowitemsplit tbody tr").each(function () {

                        if (jquery_min_p("#dvsplit" + IsActiveBill + "").hasClass('active')) {
                            jquery_min_p("#dvsplit" + IsActiveBill + "").removeClass('active');

                            //++k;
                        }

                    });
                    jquery_min_p("#dvsplit" + IsActiveBill + "").addClass("disable");
                //    jquery_min_p("#dvsplit" + i + "").addClass('active');

                //jquery_min_p(this).addClass("disable");  $("#dvsplit" + i + " tr").each(function () {





            },
            error: function () {

            }


        });
    }

}











function btnsaveCash() {

    var Amount = jquery_min_p("#txttendered").val().trim();
    var duebalance = jquery_min_p("#txtdue").val().trim();

    var tenederedamount = jquery_min_p("#txttendered").val().trim();
    var dueblnce = jquery_min_p("#txtbalance").val();

    //alert(Amount)
    //alert(duebalance)
    //alert(tenederedamount)
    //alert(dueblnce)
    

    if (Amount == '') {
        //alert('please enter tendered amount first')
        jquery_min_p('#h6warning').text('please enter tendered amount first!!');
        jquery_min_p('#dngwarn').modal('show');
        return false;

    }
    if (tenederedamount == "") {

        tenederedamount = 0;
    }

    //if (parseFloat(dueblnce) < parseFloat(Amount)) {
    //jquery_min_p('#h6warning').text('amount should be  equal to actual amount!!');
    //jquery_min_p('#dngwarn').modal('show');
    //jquery_min_p("#txttendered").val("");
    //return false;
    //}

    if (parseFloat(duebalance) < parseFloat(Amount)) {
        jquery_min_p('#h6warning').text('amount should be  equal to actual amount!!');
        jquery_min_p('#dngwarn').modal('show');
        jquery_min_p("#txttendered").val("");
        return false;
    }

    else {
        restroid = jquery_min_p("#lblrestroid").text();

        var Orderid = jquery_min_p("#lblorderid").text();

        var CardID = "";
        var PaymentMode = 'Cash';
        var LoalityPoints = 0;
        var PointsValue = 0.00;

        var TableDataX = "<dtXml>";
        TableDataX += "<dtXml ";

        TableDataX += 'Orderid="' + Orderid + '" ';
        TableDataX += 'PaymentMode="' + PaymentMode + '" ';
        TableDataX += 'Amount="' + Amount + '" ';
        TableDataX += 'CardID="' + CardID + '" ';
        TableDataX += 'LoalityPoints="' + LoalityPoints + '" ';
        TableDataX += 'PointsValue="' + PointsValue + '" ';
        TableDataX += " />";
        TableDataX += "</dtXml>";

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Payment/btnsaveCash",
            data: "{'restroid':'" + restroid + "','TableDataX':'" + TableDataX + "','Orderid':'" + Orderid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {


                var ArrayCount = result.length;
                tenederedamount = parseFloat(result[0].Amount)

                jquery_min_p("#lblcash").text(result[0].Amount);
                var duebalance = jquery_min_p("#txtdue").val();
                

                //var balance = parseFloat(duebalance) - parseFloat(result[0].Amount)
                //jquery_min_p("#txtbalance").val(balance.toFixed(3));
                //jquery_min_p("#txttendered").val(tenederedamount.toFixed(3));


                var blnce = parseFloat(dueblnce) - parseFloat(result[0].Amount);
                var tmptndr = jquery_min_p("#lbltemptendered").text();

                if (tmptndr == '') {
                    var tndr = parseFloat(Amount);
                }
                else {
                    var tndr = parseFloat(Amount) + parseFloat(tmptndr);
                }
                // alert(tmp + "  " + Amount);
                if (parseInt(tenederedamount) == parseInt(duebalance)) {
                    blnce = 0;
                    jquery_min_p("#txtbalance").val(blnce.toFixed(3));
                } else {
                    jquery_min_p("#txtbalance").val(blnce.toFixed(3));
                }
                
                jquery_min_p("#txttendered").val(tndr);
               // jquery_min_p("#txttendered").val(tenederedamount.toFixed(3));

                var i = 0;
                jquery_min_p("#receiptdiv .receiptbox").each(function () {
                    //jquery_min_p('#receiptdiv .receiptbox').removeClass('disable')
                    i = 1;
                    if ($(this).hasClass('active')) {

                        jquery_min_p(this).removeClass("active");
                        jquery_min_p(this).addClass("disable");

                    }
                    i++;
                });





                //jquery_min_p(this).addClass("disable");





            },
            error: function () {

            }


        });
    }

}


function btnsaveCradpayment() {
    var Amount = jquery_min_p("#txtcardamount").val().trim();

    var balanceamount = jquery_min_p("#txtbalance").val().trim();
    restroid = jquery_min_p("#lblrestroid").text();

    var Orderid = jquery_min_p("#lblorderid").text();
    var tenderedamount = jquery_min_p("#txttendered").val().trim();
    if (tenderedamount == "") {
        tenderedamount = 0;
    }

    var tempcardid = jquery_min_p("#lbltempcard").text();
    //alert(tempcardid)
    var CardID = jquery_min_p("#txtcardnumber").val().trim();
    var PaymentMode = 'R';
    var LoalityPoints = 0;
    var PointsValue = 0.00;

    var tempcard = jquery_min_p("#lblcard").text();
    var tempAmount = parseFloat(Amount) + parseFloat(tempcard); //rishabh

    var TableDataX = "<dtXml>";
    TableDataX += "<dtXml ";

    TableDataX += 'Orderid="' + Orderid + '" ';
    TableDataX += 'PaymentMode="' + PaymentMode + '" ';
    TableDataX += 'Amount="' + Amount + '" ';
    TableDataX += 'CardID="' + CardID + '" ';
    TableDataX += 'LoalityPoints="' + LoalityPoints + '" ';
    TableDataX += 'PointsValue="' + PointsValue + '" ';
    TableDataX += " />";
    TableDataX += "</dtXml>";

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/btnsaveCradpayment",
        data: "{'restroid':'" + restroid + "','TableDataX':'" + TableDataX + "','Orderid':'" + Orderid + "','tempcardid':'" + tempcardid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            var ArrayCount = result.length;



           // jquery_min_p("#lblcard").text(result[0].Amount);
            jquery_min_p("#lblcard").text(tempAmount);  //added by rishabh
            //var duebalance = jquery_min_p("#txtdue").val();
            var balance = balanceamount - Amount;

            tenderedamount = parseFloat(tenderedamount) + parseFloat(result[0].Amount);
            jquery_min_p("#txttendered").val(tenderedamount.toFixed(3));
                    
            jquery_min_p("#txtbalance").val(balance.toFixed(3));

            $("#cardPayment").modal('hide');
        },
        error: function () {

        }


    });


}

function StcPaymentValidation() {

    var flag = 0;


    if (jquery_min_p("#txtstctransaction").val().trim() == '') {
        jquery_min_p("#txtstctransaction").addClass('validate');
        flag = 1;
    }

    if (jquery_min_p("#txtstcamount").val().trim() == '') {
        jquery_min_p("#txtstcamount").addClass('validate');
        flag = 1;
    }

    if (flag == "1") {
        return false;

    }
    else {


        return true;
    }

}

function RemoveClassStcPayment() {
    if (jquery_min_p("#txtstctransaction").val().trim() != '') {
        jquery_min_p("#txtstctransaction").removeClass('validate');

    }

    if (jquery_min_p("#txtstcamount").val().trim() != '') {
        jquery_min_p("#txtstcamount").removeClass('validate');
    }


}


function Stcpayment() {

    var balanceamount = jquery_min_p('#txtbalance').val().trim();
    var Amount = jquery_min_p('#txtstcamount').val().trim();


    restroid = jquery_min_p("#lblrestroid").text();

    var Orderid = jquery_min_p("#lblorderid").text();

    var CardID = jquery_min_p("#txtstctransaction").val().trim();
    var PaymentMode = 'S';
    var LoalityPoints = 0;
    var PointsValue = 0.00;

    var tempstc = jquery_min_p("#lblstcpay").text();
   
   
    var tempstcamnt = parseInt(tempstc) + parseInt(Amount);
    
    var TableDataX = "<dtXml>";
    TableDataX += "<dtXml ";

    TableDataX += 'Orderid="' + Orderid + '" ';
    TableDataX += 'PaymentMode="' + PaymentMode + '" ';
    TableDataX += 'Amount="' + Amount + '" ';
    TableDataX += 'CardID="' + CardID + '" ';
    TableDataX += 'LoalityPoints="' + LoalityPoints + '" ';
    TableDataX += 'PointsValue="' + PointsValue + '" ';
    TableDataX += " />";
    TableDataX += "</dtXml>";

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/Stcpayment",
        data: "{'restroid':'" + restroid + "','TableDataX':'" + TableDataX + "','Orderid':'" + Orderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            var ArrayCount = result.length;

           // jquery_min_p("#lblstcpay").text(result[0].Amount);//
            jquery_min_p("#lblstcpay").text(tempstcamnt); //rishabh

            var balance = parseFloat(balanceamount) - parseFloat(Amount)
            jquery_min_p("#txtbalance").val(balance.toFixed(3));
            $("#stcpay").modal('hide');
        },
        error: function () {

        }


    });


}


function LoyalityCardChange() {

    var cardNo = jQuery("#txtloyalityCardNo").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/LoyalityCardChange",
        data: "{'restroid':'" + restroid + "','cardNo':'" + cardNo + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            var ArrayCount = result.length;
            if (result[0].Column1 == '-1') {
                //alert('card is invalid')
                jquery_min_p('#h6warning').text('card is invalid');
                jquery_min_p('#dngwarn').modal('show');
                jquery_min_p("#divloyalitypoint").css('display', 'none');
                jquery_min_p("#divCustomerName").css('display', 'none');
                jquery_min_p("#divloyalityamounts").css('display', 'none');
            }
            else if (result[0].Column1 == '-2') {
                //alert('This Card Is Not Issue To Customer')
                jquery_min_p('#h6warning').text('This Card Is Not Issue To Customer');
                jquery_min_p('#dngwarn').modal('show');
                jquery_min_p("#divloyalitypoint").css('display', 'none');
                jquery_min_p("#divCustomerName").css('display', 'none');
                jquery_min_p("#divloyalityamounts").css('display', 'none');
            }
            else {

                jquery_min_p("#lblloyalitypoints").text(result[0].Column2);
                jquery_min_p("#lblloyalityamounts").text(result[0].Column1);

                jquery_min_p("#lblCustomerName").text(result[0].name);

                jquery_min_p("#divloyalitypoint").css('display', 'flex');
                jquery_min_p("#divCustomerName").css('display', 'flex');
                jquery_min_p("#divloyalityamounts").css('display', 'flex');
            }

        },
        error: function () {

        }


    });

}

function LoyalityValidation() {


    var flag = 0;

    if (jquery_min_p("#txtloyalityCardNo").val().trim() == '') {
        jquery_min_p("#txtloyalityCardNo").addClass('validate');
        flag = 1;
    }

    if (jquery_min_p("#txtloyalityCardAmount").val().trim() == '') {
        jquery_min_p("#txtloyalityCardAmount").addClass('validate');
        flag = 1;
    }

    if (flag == "1") {
        return false;

    }
    else {


        return true;
    }

}

function RemoveClassLoyality() {
    if (jquery_min_p("#txtloyalityCardNo").val().trim() != '') {
        jquery_min_p("#txtloyalityCardNo").removeClass('validate');

    }

    if (jquery_min_p("#txtloyalityCardAmount").val().trim() != '') {
        jquery_min_p("#txtloyalityCardAmount").removeClass('validate');
    }



}

function SaveLoyalityAmount() {

    //var cardno = jquery_min_p('#txtloyalityCardNo').val();
    //var amount = jquery_min_p('#txtloyalityCardAmount').val();


    //var balanceamount = jquery_min_p('#txtbalance').val();
    //var redemeamount = jquery_min_p('#lblloyalityamounts').text();

    //restroid = jquery_min_p("#lblrestroid").text();


    //jquery_min_p.ajax({
    //    type: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    url: "/Payment/SaveLoyalityAmount",
    //    data: "{'restroid':'" + restroid + "','amount':'" + amount + "','cardno':'" + cardno + "'}",
    //    dataType: "json",
    //    async: false,
    //    success: function (result) {


    //        var ArrayCount = result.length;


    //    },
    //    error: function () {

    //    }


    //});




    var CardID = jquery_min_p('#txtloyalityCardNo').val();
    var Amount = jquery_min_p('#txtloyalityCardAmount').val();


    var balanceamount = jquery_min_p('#txtbalance').val();
    var redemeamount = jquery_min_p('#lblloyalityamounts').text();


    restroid = jquery_min_p("#lblrestroid").text();

    var Orderid = jquery_min_p("#lblorderid").text();

    var CardID = jquery_min_p("#txtloyalityCardNo").val().trim();
    var PaymentMode = 'L';
    var LoalityPoints = 0;
    var PointsValue = 0.00;


    var TableDataX = "<dtXml>";
    TableDataX += "<dtXml ";

    TableDataX += 'Orderid="' + Orderid + '" ';
    TableDataX += 'PaymentMode="' + PaymentMode + '" ';
    TableDataX += 'Amount="' + Amount + '" ';
    TableDataX += 'CardID="' + CardID + '" ';
    TableDataX += 'LoalityPoints="' + LoalityPoints + '" ';
    TableDataX += 'PointsValue="' + PointsValue + '" ';
    TableDataX += " />";
    TableDataX += "</dtXml>";

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/Stcpayment",
        data: "{'restroid':'" + restroid + "','TableDataX':'" + TableDataX + "','Orderid':'" + Orderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            var ArrayCount = result.length;
            var tenderedamount = jquery_min_p('#txttendered').val().trim();
            if (tenderedamount == "") {
                tenderedamount = 0;
            }
            tenderedamount = parseFloat(tenderedamount) + parseFloat(result[0].Amount);


            jquery_min_p("#lblloyality").text(result[0].Amount);

            var balance = parseFloat(balanceamount) - parseFloat(Amount)
            jquery_min_p("#txtbalance").val(balance.toFixed(3));
            jquery_min_p('#txttendered').val(tenderedamount.toFixed(3));
            $("#loyaltyCard").modal('hide');

        },
        error: function () {

        }


    });


}



function EnableTextFields(id) {

    ResetResetOther();
    selected_otherid = id;


    if (id == 1)//Hungerstationcash
    {
        jquery_min_p("#HungerstationTransactionNo").val("");
        jquery_min_p("#HungerstationAmount").val("");
        $("#HungerstationTransactionNo").removeClass("disable");
        $("#HungerstationAmount").removeClass("disable");
        jquery_min_p("#divHungerstationcash .Difference2").addClass('active');

    }

    if (id == 2)//Hungerstationdebit
    {
        jquery_min_p("#HungerstationdebitTranNo").val("");
        jquery_min_p("#HungerstationdebitAmount").val("");
        $("#HungerstationdebitTranNo").removeClass("disable");
        $("#HungerstationdebitAmount").removeClass("disable");
        jquery_min_p("#divHungerstationdebit .Difference2").addClass('active');
    }

    if (id == 3)//invoiceOffer
    {
        jquery_min_p("#InvoiceTransNo").val("");
        jquery_min_p("#InvoiceTransAmount").val("");
        $("#InvoiceTransNo").removeClass("disable");
        $("#InvoiceTransAmount").removeClass("disable");
        jquery_min_p("#divInvoice .Difference2").addClass('active');

    }

    if (id == 4)//chairman
    {
        jquery_min_p("#txtChairmanTransNo").val("");
        jquery_min_p("#txtChairmanTransAmount").val("");
        $("#txtChairmanTransNo").removeClass("disable");
        $("#txtChairmanTransAmount").removeClass("disable");
        jquery_min_p("#divChairman .Difference2").addClass('active');
    }

    if (id == 5)//Hospitality
    {
        jquery_min_p("#txtHospitalityTransNo").val("");
        jquery_min_p("#txtHospitalityTransAmount").val("");
        $("#txtHospitalityTransNo").removeClass("disable");
        $("#txtHospitalityTransAmount").removeClass("disable");
        jquery_min_p("#divHospitality .Difference2").addClass('active');
    }

    if (id == 6)//Customercredit
    {
        //jquery_min_p("#txtCustCreditTransNo").val("");
        jquery_min_p("#txtCustCreditTransAmount").val("");
        $("#txtCustCreditTransNo").removeClass("disable");
        $("#txtCustCreditTransAmount").removeClass("disable");
        jquery_min_p("#divCustCredit .Difference2").addClass('active');
    }

    if (id == 7)//Employeecredit
    {
        //jquery_min_p("#EmployeeCreditTransNo").val("");
        jquery_min_p("#EmployeeCreditTransAmount").val("");
        $("#EmployeeCreditTransNo").removeClass("disable");
        $("#EmployeeCreditTransAmount").removeClass("disable");
        jquery_min_p("#divEmployeeCredit .Difference2").addClass('active');
    }


}


function ResetResetOther() {
    jquery_min_p("#HungerstationTransactionNo").val("");
    jquery_min_p("#HungerstationAmount").val("");
    $("#HungerstationTransactionNo").addClass("disable");
    $("#HungerstationAmount").addClass("disable");


    jquery_min_p("#HungerstationdebitTranNo").val("");
    jquery_min_p("#HungerstationdebitAmount").val("");
    $("#HungerstationdebitTranNo").addClass("disable");
    $("#HungerstationdebitAmount").addClass("disable");

    jquery_min_p("#InvoiceTransNo").val("");
    jquery_min_p("#InvoiceTransAmount").val("");
    $("#InvoiceTransNo").addClass("disable");
    $("#InvoiceTransAmount").addClass("disable");

    jquery_min_p("#txtChairmanTransNo").val("");
    jquery_min_p("#txtChairmanTransAmount").val("");
    $("#txtChairmanTransNo").addClass("disable");
    $("#txtChairmanTransAmount").addClass("disable");

    jquery_min_p("#txtHospitalityTransNo").val("");
    jquery_min_p("#txtHospitalityTransAmount").val("");
    $("#txtHospitalityTransNo").addClass("disable");
    $("#txtHospitalityTransAmount").addClass("disable");

    jquery_min_p("#txtCustCreditTransNo").val(0);
    jquery_min_p("#txtCustCreditTransAmount").val("");
    $("#txtCustCreditTransNo").addClass("disable");
    $("#txtCustCreditTransAmount").addClass("disable");

    jquery_min_p("#EmployeeCreditTransNo").val(0);
    jquery_min_p("#EmployeeCreditTransAmount").val("");
    $("#EmployeeCreditTransNo").addClass("disable");
    $("#EmployeeCreditTransAmount").addClass("disable");


    jquery_min_p("#divHungerstationcash .Difference2").removeClass('active');
    jquery_min_p("#divHungerstationdebit .Difference2").removeClass('active');
    jquery_min_p("#divInvoice .Difference2").removeClass('active');
    jquery_min_p("#divChairman .Difference2").removeClass('active');
    jquery_min_p("#divHospitality .Difference2").removeClass('active');
    jquery_min_p("#divCustCredit .Difference2").removeClass('active');
    jquery_min_p("#divEmployeeCredit .Difference2").removeClass('active');

}


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


function OtherPayementValidation(id) {
    if (id == 1) {
        var flag = 0;

        if (jquery_min_p("#HungerstationTransactionNo").val().trim() == '') {
            jquery_min_p("#HungerstationTransactionNo").addClass('validate');
            flag = 1;
        }

        if (jquery_min_p("#HungerstationAmount").val().trim() == '') {
            jquery_min_p("#HungerstationAmount").addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            return true;
        }
    }


    if (id == 2) {
        var flag = 0;

        if (jquery_min_p("#HungerstationdebitTranNo").val().trim() == '') {
            jquery_min_p("#HungerstationdebitTranNo").addClass('validate');
            flag = 1;
        }

        if (jquery_min_p("#HungerstationdebitAmount").val().trim() == '') {
            jquery_min_p("#HungerstationdebitAmount").addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            return true;
        }
    }


    if (id == 3) {
        var flag = 0;

        if (jquery_min_p("#InvoiceTransNo").val().trim() == '') {
            jquery_min_p("#InvoiceTransNo").addClass('validate');
            flag = 1;
        }

        if (jquery_min_p("#InvoiceTransAmount").val().trim() == '') {
            jquery_min_p("#InvoiceTransAmount").addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            return true;
        }
    }



    if (id == 4) {
        var flag = 0;

        if (jquery_min_p("#txtChairmanTransNo").val().trim() == '') {
            jquery_min_p("#txtChairmanTransNo").addClass('validate');
            flag = 1;
        }

        if (jquery_min_p("#txtChairmanTransAmount").val().trim() == '') {
            jquery_min_p("#txtChairmanTransAmount").addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            return true;
        }
    }



    if (id == 5) {
        var flag = 0;

        if (jquery_min_p("#txtHospitalityTransNo").val().trim() == '') {
            jquery_min_p("#txtHospitalityTransNo").addClass('validate');
            flag = 1;
        }

        if (jquery_min_p("#txtHospitalityTransAmount").val().trim() == '') {
            jquery_min_p("#txtHospitalityTransAmount").addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            return true;
        }
    }



    if (id == 6) {
        var flag = 0;

        if (jquery_min_p("#txtCustCreditTransNo").val() == "0") {
            jquery_min_p("#txtCustCreditTransNo").addClass('validate');
            flag = 1;
        }

        if (jquery_min_p("#txtCustCreditTransAmount").val() == "") {
            jquery_min_p("#txtCustCreditTransAmount").addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            return true;
        }
    }



    if (id == 7) {
        var flag = 0;

        if (jquery_min_p("#EmployeeCreditTransNo").val() == '0') {
            jquery_min_p("#EmployeeCreditTransNo").addClass('validate');
            flag = 1;
        }

        if (jquery_min_p("#EmployeeCreditTransAmount").val().trim() == '') {
            jquery_min_p("#EmployeeCreditTransAmount").addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            return true;
        }
    }

}


function SaveOtherPayment(transno, otheramount, otherpaymentType) {

    var CardID = transno;
    var Amount = otheramount;
    var tenderedamount = jquery_min_p('#txttendered').val().trim();
    if (tenderedamount == "") {
        tenderedamount = 0;

    }

    var balanceamount = jquery_min_p('#txtbalance').val();


    restroid = jquery_min_p("#lblrestroid").text();

    var Orderid = jquery_min_p("#lblorderid").text();

    //var CardID = jquery_min_p("#txtstctransaction").text().trim();
    var PaymentMode = '';
    var LoalityPoints = 0;
    var PointsValue = 0.00;
    var OtherpaymentType = otherpaymentType

    var Oamnt = 0;
    if (OtherpaymentType == 'HSC') {

        PaymentMode = 'H'; //lblstationcash
        Oamnt= jquery_min_p("#lblstationcash").text().trim();
    }

    if (OtherpaymentType == 'HSD') {

        PaymentMode = 'D';
         Oamnt = jquery_min_p("#lblstationdebit").text().trim();
    }
    if (OtherpaymentType == 'IO') {

        PaymentMode = 'I';
         Oamnt = jquery_min_p("#lbloffer").text().trim();
    }
    if (OtherpaymentType == 'C') {

        PaymentMode = 'M';
         Oamnt = jquery_min_p("#lblchairman").text().trim();
    }
    if (OtherpaymentType == 'H') {

        PaymentMode = 'T';
         Oamnt = jquery_min_p("#lblhospitality").text().trim();

    }
    if (OtherpaymentType == 'CC') {

        PaymentMode = 'F';
         Oamnt = jquery_min_p("#lblcustcredit").text().trim();
    }
    if (OtherpaymentType == 'EC') {

        PaymentMode = 'E';
         Oamnt = jquery_min_p("#lblempcredit").text().trim();
    }




    var TableDataX = "<dtXml>";
    TableDataX += "<dtXml ";

    TableDataX += 'Orderid="' + Orderid + '" ';
    TableDataX += 'PaymentMode="' + PaymentMode + '" ';
    TableDataX += 'Amount="' + (parseInt(Oamnt) + parseInt(Amount)) + '" ';
    TableDataX += 'CardID="' + CardID + '" ';
    TableDataX += 'LoalityPoints="' + LoalityPoints + '" ';
    TableDataX += 'PointsValue="' + PointsValue + '" ';
    TableDataX += " />";
    TableDataX += "</dtXml>";

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/SaveOtherPayment",
        data: "{'restroid':'" + restroid + "','TableDataX':'" + TableDataX + "','Orderid':'" + Orderid + "','OtherpaymentType':'" + OtherpaymentType + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            var ArrayCount = result.length;
            tenderedamount = parseFloat(tenderedamount) + parseFloat(Amount);
            var balance = parseFloat(balanceamount) - parseFloat(Amount)
            jquery_min_p("#txtbalance").val(balance.toFixed(3));
            jquery_min_p('#txttendered').val(tenderedamount.toFixed(3));

            if (OtherpaymentType == 'HSC') {

                jquery_min_p("#lblstationcash").text(result[0].Amount);
            }

            if (OtherpaymentType == 'HSD') {

                jquery_min_p("#lblstationdebit").text(result[0].Amount);
            }
            if (OtherpaymentType == 'IO') {

                jquery_min_p("#lbloffer").text(result[0].Amount);
            }
            if (OtherpaymentType == 'C') {

                jquery_min_p("#lblchairman").text(result[0].Amount);
            }
            if (OtherpaymentType == 'H') {

                jquery_min_p("#lblhospitality").text(result[0].Amount);

            }
            if (OtherpaymentType == 'CC') {

                jquery_min_p("#lblcustcredit").text(result[0].Amount);
            }
            if (OtherpaymentType == 'EC') {

                jquery_min_p("#lblempcredit").text(result[0].Amount);
            }


            jquery_min_p("#other").modal('hide');
        },
        error: function () {

        }


    });


}




function AmountsplitPayment() {


    var duebalance = jquery_min_p("#txtdue").val().trim();
    var tenderedbalance = jquery_min_p("#txttendered").val().trim();
    var balance = jquery_min_p("#txtbalance").val().trim();
    var TotalTax = jquery_min_p("#txtvat").val().trim();
    var billAmount = jquery_min_p("#txtdue").val().trim();
    var totalAmount = jquery_min_p("#txtdue").val().trim();
    restroid = jquery_min_p("#lblrestroid").text();

    var Orderid = jquery_min_p("#lblorderid").text();
    // var SplitAmount = billAmount;
    var SplitAmount = jquery_min_p("#txttendered").val().trim();

    var discountAmount = jquery_min_p("#txtdiscount").text();
    var discountPercent = 0;
    var ReasonId = 0;
    var splitType = '';
    if (jquery_min_p('input[name=Splitbill]:checked').val() == "Item") {
        splitType = 'I';
    }
    else {
        splitType = 'A';
    }
   // alert(splitType);


    //  "@OrderID", "@billAmount", "@totalAmount", "@restroid", "@UserId", "@discountAmount", "@discountPercent", "@ReasonId", "@SplitAmount", "@TotalTax", "@ReceiptTax",


    //if (duebalance != tenderedbalance && balance != 0) {
    //    //jquery_min_p('#h6warning').text('Amount Should Be Equal To Actual Amount');
    //    //jquery_min_p('#dngwarn').modal('show');

    //}
    //else
    {
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Payment/SplitConFirmBill",
            data: "{'duebalance':'" + duebalance + "','restroid':'" + restroid + "','SplitAmount':'" + SplitAmount + "','Orderid':'" + Orderid + "','ReasonId':'" + ReasonId + "','discountPercent':'" + discountPercent + "','discountAmount':'" + discountAmount + "','TotalTax':'" + TotalTax + "','splitType':'" + splitType + "'}",
            dataType: "json",
            async: false,
            success: function (result) {


                var ArrayCount = result.length;

                if (result.length > 0) {
                    jquery_min_p('#popupsuccess').text('Information Send  Successfully');
                    jquery_min_p('#savePopup').modal('show');

                    DisableDiv();
                    // window.location.href = "/SalesBilling/RunningOrder";

                }

            },
            error: function () {

            }


        });

    }





}





function FinalPayment() {
    //alert('entered')
    var duebalance = jquery_min_p("#txtdue").val().trim();
    var tenderedbalance = jquery_min_p("#txttendered").val().trim();
    var balance = jquery_min_p("#txtbalance").val().trim();
    var TotalTax = jquery_min_p("#txtvat").val().trim();
    var billAmount = jquery_min_p("#txtdue").val().trim();
    var totalAmount = jquery_min_p("#txtdue").val().trim();
    restroid = jquery_min_p("#lblrestroid").text();

    var Orderid = jquery_min_p("#lblorderid").text();
    var SplitAmount = billAmount;
    var splitCount = jquery_min_p("#txtsplitcount").val();


    var discountAmount = jquery_min_p("#txtdiscount").text();
    var discountPercent = 0;
    var ReasonId = 0;


    var splitType = '';
    if (jquery_min_p('input[name=Splitbill]:checked').val() == "Item") {
        splitType = 'I';
    }
    else {
        splitType = 'A';
    }



    if (duebalance != tenderedbalance && balance != 0) {
        jquery_min_p('#h6warning').text('Amount Should Be Equal To Actual Amount');
        jquery_min_p('#dngwarn').modal('show');

    }
    else {
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Payment/ConFirmBill",
            data: "{'splitType':'" + splitType + "','splitCount':'" + splitCount + "','restroid':'" + restroid + "','SplitAmount':'" + SplitAmount + "','Orderid':'" + Orderid + "','ReasonId':'" + ReasonId + "','discountPercent':'" + discountPercent + "','discountAmount':'" + discountAmount + "','TotalTax':'" + TotalTax + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

                var billno = result[0].invoice;
                alert(billno)
                jquery_min_p("#lbltempbillno1").text(billno);
                var ArrayCount = result.length;

                if (result.length > 0) {
                    jquery_min_p('#popupsuccess').text('Payment completed successfully');
                    jquery_min_p('#savePopup').modal('show');

                    DisableDiv();
                    // window.location.href = "/SalesBilling/RunningOrder";

                }

            },
            error: function () {

            }


        });

    }


}


function ClearRecord() {


    restroid = jquery_min_p("#lblrestroid").text();

    var Orderid = jquery_min_p("#lblorderid").text();


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/ClearTempTable",
        data: "{'restroid':'" + restroid + "','Orderid':'" + Orderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            var ArrayCount = result.length;


        },
        error: function () {

        }


    });


}


function DisableDiv() {


    $("#divcalculator").addClass("disable");
    $("#MenuBoxCash").addClass("disable");
    $("#MenuBoxCard").addClass("disable");
    $("#MenuBoxLoyalty").addClass("disable");
    $("#MenuBoxCoupon").addClass("disable");
    $("#MenuBoxSTCPay").addClass("disable");
    $("#MenuBoxOther").addClass("disable");
    $("#MenuBoxSplitBill").addClass("disable");
    $("#MenuBoxCancel").addClass("disable");
    $("#MenuBoxConfirm").addClass("disable");

    $("#btnmanagerprivilege").addClass("disable");
    $("#btnexact").addClass("disable");
    $("#btnclear").addClass("disable");
    $("#btndifference").addClass("disable");


}

function bindReason() {



    var restroId = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/bindDiscountReason",
        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            jquery_min_p('#ddlreason').html("");
            jquery_min_p('#txtreason').html("");

            ///var newOption1 = newOption1 + "<select></select>"
            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";

            jquery_min_p('#ddlreason').append(newOption1);
            jquery_min_p('#txtreason').append(newOption1);
            for (var i = 0; i < result.length; i++) {

                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].ReasonId).text(result[i].Reason);


                jquery_min_p('#ddlreason').append(newOption);
                //jquery_min_p('#txtreason').append(newOption);

            }



            for (var i = 0; i < result.length; i++) {

                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].ReasonId).text(result[i].Reason);



                jquery_min_p('#txtreason').append(newOption);

            }


        },
        error: function () {

        }


    });


}



function DiscountValidation() {
    var flag = 0;

    if (jquery_min_p("#MDPersentage").val().trim() == '') {
        jquery_min_p("#MDPersentage").addClass('validate');
        flag = 1;
    }

    if (jquery_min_p("#txtMDamount").val().trim() == '') {
        jquery_min_p("#txtMDamount").addClass('validate');
        flag = 1;
    }


    if (jquery_min_p("#ddlreason").val().trim() == '0') {
        jquery_min_p("#ddlreason").addClass('validate');
        flag = 1;
    }

    if (flag == "1") {
        return false;

    }
    else {


        return true;
    }


}


function BindDropDown() {

    var restroId = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/BindDropDown",
        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            // var i = 0;
            var jsondata = result.Table;
            var jsondata1 = result.Table1;


            jquery_min_p('#txtCustCreditTransNo').html("");
            jquery_min_p('#EmployeeCreditTransNo').html("");
            //var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";

            //jquery_min_p('#txtCustCreditTransNo').append(newOption1);
            //jquery_min_p('#EmployeeCreditTransNo').append(newOption1);

            for (var i = 0; i < jsondata.length; i++) {

                var newOption = jquery_min_p('<option>');
                newOption.attr('value', jsondata[i].AccountNum).text(jsondata[i].CustName);


                jquery_min_p('#txtCustCreditTransNo').append(newOption);

            }



            for (var i = 0; i < jsondata1.length; i++) {

                var newOption = jquery_min_p('<option>');
                newOption.attr('value', jsondata1[i].EmpCode).text(jsondata1[i].EmpName);


                jquery_min_p('#EmployeeCreditTransNo').append(newOption);

            }


        },
        error: function () {

        }


    });


}



function RemoveClassOtherPayement() {
    if (jquery_min_p("#HungerstationTransactionNo").val().trim() != '') {
        jquery_min_p("#HungerstationTransactionNo").removeClass('validate');

    }

    if (jquery_min_p("#HungerstationAmount").val().trim() != '') {
        jquery_min_p("#HungerstationAmount").removeClass('validate');
    }
    if (jquery_min_p("#HungerstationdebitTranNo").val().trim() != '') {
        jquery_min_p("#HungerstationdebitTranNo").removeClass('validate');

    }

    if (jquery_min_p("#HungerstationdebitAmount").val().trim() != '') {
        jquery_min_p("#HungerstationdebitAmount").removeClass('validate');
    }

    if (jquery_min_p("#InvoiceTransNo").val().trim() != '') {
        jquery_min_p("#InvoiceTransNo").removeClass('validate');

    }

    if (jquery_min_p("#InvoiceTransAmount").val().trim() != '') {
        jquery_min_p("#InvoiceTransAmount").removeClass('validate');
    }
    if (jquery_min_p("#txtChairmanTransNo").val().trim() != '') {
        jquery_min_p("#txtChairmanTransNo").removeClass('validate');

    }

    if (jquery_min_p("#txtChairmanTransAmount").val().trim() != '') {
        jquery_min_p("#txtChairmanTransAmount").removeClass('validate');
    }



    if (jquery_min_p("#txtHospitalityTransNo").val().trim() != '') {
        jquery_min_p("#txtHospitalityTransNo").removeClass('validate');
    }

    if (jquery_min_p("#txtHospitalityTransAmount").val().trim() != '') {
        jquery_min_p("#txtHospitalityTransAmount").removeClass('validate');

    }

    if (jquery_min_p("#txtCustCreditTransNo").val() != '0') {
        jquery_min_p("#txtCustCreditTransNo").removeClass('validate');
    }
    if (jquery_min_p("#txtCustCreditTransAmount").val().trim() != '') {
        jquery_min_p("#txtCustCreditTransAmount").removeClass('validate');

    }

    if (jquery_min_p("#EmployeeCreditTransNo").val() != '0') {
        jquery_min_p("#EmployeeCreditTransNo").removeClass('validate');
    }
    if (jquery_min_p("#EmployeeCreditTransAmount").val().trim() != '') {
        jquery_min_p("#EmployeeCreditTransAmount").removeClass('validate');
    }



}

function ManagerDiscount() {

    var dueamount = jquery_min_p("#txtdue").val().trim();
    var tenderedamt = jquery_min_p("#txttendered").val().trim()
    var balamt = jquery_min_p("#txtbalance").val().trim();
    var discountpersentage = jquery_min_p("#MDPersentage").val().trim();
    var Amount = jquery_min_p("#txtMDamount").val().trim();
    var discountreason = jquery_min_p("#ddlreason").val();
    var discounttype = jquery_min_p('input[name=Manager]:checked').val();

    restroid = jquery_min_p("#lblrestroid").text();

    var Orderid = jquery_min_p("#lblorderid").text();

    var CardID = jquery_min_p("#textaccesscode").val().trim();
    var PaymentMode = 'O';
    var LoalityPoints = 0;
    var PointsValue = 0.00;

    var newvat = 0; //added by rishabh
    var oldvat = jquery_min_p("#txtvat").text();
    
    jquery_min_p("#lbltempvat").text(oldvat);
    var persentage = jquery_min_p("#MDPersentage").val();
    var discount = parseFloat(persentage);

    newvat = (parseFloat(oldvat) * discount / 100).toFixed(2);
    // alert(newvat)
    var tempvat = parseFloat(oldvat) - parseFloat(newvat)
    jquery_min_p("#txtvat").text(tempvat);






    var TableDataX = "<dtXml>";
    TableDataX += "<dtXml ";

    TableDataX += 'Orderid="' + Orderid + '" ';
    TableDataX += 'PaymentMode="' + PaymentMode + '" ';
    TableDataX += 'Amount="' + Amount + '" ';
    TableDataX += 'CardID="' + CardID + '" ';
    TableDataX += 'LoalityPoints="' + LoalityPoints + '" ';
    TableDataX += 'PointsValue="' + PointsValue + '" ';
    TableDataX += " />";
    TableDataX += "</dtXml>";

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/ManagerDiscount",
        data: "{'restroid':'" + restroid + "','TableDataX':'" + TableDataX + "','Orderid':'" + Orderid + "','discountpersentage':'" + discountpersentage + "','Amount':'" + Amount + "','discountreason':'" + discountreason + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            var ArrayCount = result.length;
            var tenderedamount = jquery_min_p('#txttendered').val().trim();
            if (tenderedamount == "") {
                tenderedamount = 0;
            }
            // tenderedamount = parseFloat(tenderedamount) + parseFloat(result[0].Amount);


            jquery_min_p("#txtdiscount").text((result[0].Amount).toFixed(3));

            var balance = parseFloat(balamt) - parseFloat(Amount);
            jquery_min_p("#txtbalance").val(balance.toFixed(3));
            dueamount = parseFloat(dueamount) - (parseFloat(Amount) + parseFloat(newvat)); //edited tempvat by rishabh
            jquery_min_p("#txtdue").val(dueamount.toFixed(3));
            jquery_min_p("#txttotal").text(dueamount.toFixed(3));
            // jquery_min_p('#txttendered').val(tenderedamount);
            jquery_min_p("#managerpri").modal('hide');

        },
        error: function () {

        }


    });


}

function BindItem() {


    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('orderId');
    restroid = jquery_min_p("#lblrestroid").text();
    var OrderId = myParam;

    jquery_min_p("#Itemtable tbody").html("");

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/BindOrderDetails",
        data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;
            var jsonData1 = result.Table;
            var jsonData2 = result.Table1;
            var jsonData3 = result.Table2;
            var jsonData4 = result.Table3;

            var Query = "";
            for (var i = 0; i < jsonData1.length; i++) {


                if (jsonData1[i].ISammend == "1") {


                    Query = Query + "<tr class='grdactive '>";
                    // Query = Query + "<tr class='strikeout'>";
                }
                else {
                    Query = Query + "<tr>";
                }
                Query = Query + "<td style='display:none'>" + jsonData1[i].orderId + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].orderitemsId + "</td>";
                Query = Query + "<td>" + jsonData1[i].ItemName + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].itemId + "</td>";
                if (jsonData1[i].ISammend == "1") {
                    Query = Query + "<td><input id='txtQty_" + jsonData3[i].orderitemsId + "' type='number' value='" + jsonData1[i].Quantity + "' class='Qty' onchange='textChange(this," + jsonData3[i].orderitemsId + ");' disabled='disabled'/></td>";
                    
                }
                else {
                    Query = Query + "<td><input id='txtQty_" + jsonData3[i].orderitemsId + "' type='number' value='" + jsonData1[i].Quantity + "' class='Qty' onchange='textChange(this," + jsonData3[i].orderitemsId + ");'/></td>";
                    
                }
                Query = Query + "<td style='display:none' class='ActualQty'>" + jsonData1[i].Quantity + "</td>";
                Query = Query + "<td>" + jsonData1[i].itemPrice + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].vat + "</td>";
                Query = Query + "</tr>";

            }
            jquery_min_p("#Itemtable tbody").append(Query);
        },

        error: function () {
        }
    });




}

//function SubItemQty(itemid,orderitemid,Quantity)
function SubItemQty(data, Id) {
    var ordersitemid = '';
    var ActualQty = '';
    var Qty = '';
    var price = '';
    var orderid = '';

    // jquery_min_p("#Itemtable tbody").find('tr').each(function () {
    var row = jquery_min_p(data).closest('tr');
    orderid = row.find('td:nth-child(1)').text().trim();
    ordersitemid = row.find('td:nth-child(2)').text().trim();
    Qty = row.find('td:nth-child(4)').text().trim();
    price = row.find('td:nth-child(5)').text().trim();
    UpdatedGridQuantity = (Qty - 1);
    IsUpdatedGridQuantity = Id;
    //  });
    BindItem();
}


function textChange(data, id) {

    var ActualQty = '';
    var newid = "#txtQty_" + id;

    var row = jquery_min_p(data).closest('tr');
    ActualQty = row.find('td:nth-child(6)').text().trim();
    orderid = row.find('td:nth-child(1)').text().trim();
    ordersitemid = row.find('td:nth-child(2)').text().trim();
    Qty = jquery_min_p(newid).val();
    // Qty = row.find('td:nth-child(4)').text().trim();
    price = row.find('td:nth-child(5)').text().trim();


    if (ActualQty < Qty) {

        jquery_min_p('#h6warning').text('Quantity can not be increase');
        jquery_min_p('#dngwarn').modal('show');

        jquery_min_p(newid).val(ActualQty);
    }
    else if (Qty < 0) {

        jquery_min_p('#h6warning').text('Quantity can not be negative');
        jquery_min_p('#dngwarn').modal('show');

        jquery_min_p(newid).val(ActualQty);
    }
    else {
        // alert('ok')
    }

}



function AmmendedValidation() {
    var flag = 0;



    if (jquery_min_p("#txtreason").val().trim() == '0') {
        jquery_min_p("#txtreason").addClass('validate');
        flag = 1;
    }

    if (flag == "1") {
        return false;

    }
    else {


        return true;
    }


}

function AmmendedItem() {
    var ActualQty = '';


    var Orderid = jquery_min_p("#lblorderid").text();

    restroid = jquery_min_p("#lblrestroid").text();

    var TableDataX = "<dtXml>";

    jquery_min_p("#Itemtable tbody").find('tr').each(function () {
        var row = jquery_min_p(this).closest('tr');
        var ActualQty = row.find('td:nth-child(6)').text().trim();
        var itemid = row.find('td:nth-child(4)').text().trim();
        var orderitemsId = row.find('td:nth-child(2)').text().trim();
        var itemstax = row.find('td:nth-child(8)').text().trim();
        //alert(itemstax)
        var qty = row.find(".Qty").val();
        if (ActualQty > qty) {
            TableDataX += "<dtXml ";
            TableDataX += 'itemid="' +  itemid + '" ';
            TableDataX += 'qty="' + (ActualQty-qty) + '" ';
            TableDataX += 'orderitemsId="' + orderitemsId + '" ';
           // TableDataX += 'itemstax="' + itemstax + '" '; //tax added by rishabh
            TableDataX += " />";
        }



    });

    TableDataX += "</dtXml>";




    //jquery_min_p("#Itemtable tbody").find('tr').each(function () {
    //    var row = jquery_min_p(this).closest('tr');
    //    var ActualQty = row.find('td:nth-child(6)').text().trim();
    //    var itemid = row.find('td:nth-child(4)').text().trim();
    //    var orderitemsId = row.find('td:nth-child(2)').text().trim();
    //    var qty = row.find(".Qty").val();
        
    //    //if (ActualQty > qty) {
           
            
    //    //}



    //});

    //alert(ActualQty + "" + qty)

    //alert(ActualQty);


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/AmmendedItem",
        data: "{'restroid':'" + restroid + "','Orderid':'" + Orderid + "','TableDataX':'" + TableDataX + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            if (result[0].result == '1') {

                jquery_min_p('#managerpri').modal('hide');

                jquery_min_p('#popupsuccess').text('Item Ammended Successfully');
                jquery_min_p('#savePopup').modal('show');

                BindOrderDetail();

            }
            else {
                alert('Error');
            }

        },

        error: function ()
        { }
    });


}


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function isNum(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



function splitAmountEqually() {

    jquery_min_p("#receiptdiv").html('');
    var splitCount = jquery_min_p('#txtsplitcount').val();
    var balamt = jquery_min_p("#txtsubtotal").text().trim();
    // alert(balamt)
    var vat = jquery_min_p("#txtvat").text();
    // alert(balamt + " " + vat);
    // alert(vat)
    // alert(balamt)
    var EsplitAmount = 0;
    var EsplitVat = 0;

    EsplitAmount = (balamt / splitCount).toFixed(3);
    EsplitVat = (vat / splitCount).toFixed(3);

    var Query = "";

    for (var i = 1; i <= splitCount; i++) {

        Query = Query + "<div class='receiptbox' id='" + i + "' onclick='SplitBindShow(" + EsplitAmount + "," + EsplitVat + ");'>";
        Query = Query + " <p class='fontBold text-center pt-2 plbl'>Receipt" + i + "</p>";
        Query = Query + "<div class='row'>";
        Query = Query + "<div class='col-md-12'>";
        Query = Query + "<label class='col-md-6 fontBold pr-0'>Amount:</label>";
        Query = Query + "<label class='col-md-5 fontBold' id=''>" + EsplitAmount + "</label>";
        Query = Query + " </div>";
        Query = Query + "<div class='col-md-12'>";
        Query = Query + "<label class='col-md-6 fontBold'>Tax:</label>";
        Query = Query + " <label class='col-md-5 fontBold' id=''>" + EsplitVat + "</label>";
        Query = Query + "</div>";
        Query = Query + "</div>";
        Query = Query + "</div>";
    }

    jquery_min_p("#receiptdiv").append(Query);

    jquery_min_p("#receiptdiv").css('display', 'block');

    jquery_min_p("#splitbill").modal('hide');


    jquery_min_p("#Disproportionatepopup").modal('hide');
    jquery_min_p('#MenuBoxSplitBill').removeClass('active');


    //    jquery_min_p("#tblrunningord").css('display', 'none');




}





//function ChangedAmount(textControl) {
//    document.getElementbyId('spnttlamount').value = textControl.value;
//}


function splitAmountDispropotionate() {

    jquery_min_p("#dvsplitdisp").html('');
    var splitCount = jquery_min_p('#txtsplitcount').val();
    var balamt = jquery_min_p("#txtsubtotal").text().trim();
    //var bal = jquery_min_p("#txtdue").val().trim();
    // alert(bal)
    //var vat = jquery_min_p("#txtvat").text();
    // alert(balamt + " " + vat);
    // alert(vat)
    // alert(balamt)
    var EsplitAmount = 0;
    var EsplitVat = 0;
    jquery_min_p('#spnttlamount').text(balamt);
    //EsplitAmount = (balamt / splitCount).toFixed(2);;
    // EsplitVat = (vat / splitCount).toFixed(2);;

    var Query = "";


    for (var i = 1; i <= splitCount; i++) {


        Query = Query + "<div class='col-md-6 mt-3 pl-0'>";
        Query = Query + " <label class='col-md-5'>Receipt " + i + ":</label>";
        Query = Query + " <div class='col-md-7 pull-right pl-0'>";
        Query = Query + "<input type='text' id='txtreceipt" + i + "' class='form-control' placeholder='' />";
        Query = Query + " </div>";
        Query = Query + " </div>";
    }

    jquery_min_p("#dvsplitdisp").append(Query);

    jquery_min_p("#receiptdiv").css('display', 'none');

    jquery_min_p("#splitbill").modal('hide');

    jquery_min_p('#Disproportionatepopup').modal('show');

    jquery_min_p('#MenuBoxSplitBill').removeClass('active');


    //    jquery_min_p("#tblrunningord").css('display', 'none');




}



function GridDispropotionate() {

    jquery_min_p("#receiptdiv").html('');
    var splitCount = jquery_min_p('#txtsplitcount').val();
    var balamt = jquery_min_p("#txtsubtotal").text().trim();
    // alert(balamt)var balamt = jquery_min_p("#txtsubtotal").text().trim();
    var vat = jquery_min_p("#txtvat").text();
    // alert(balamt + " " + vat);
    // alert(vat)
    // alert(balamt)
    var DsplitAmount = 0;
    var DsplitVat = 0;

    var total = (parseFloat(balamt)).toFixed(3);

    //DsplitAmount = (balamt / splitCount).toFixed(2);
    // DsplitVat = (vat / splitCount).toFixed(2);;

    var Query = "";

    for (var i = 1; i <= splitCount; i++) {

        var id = "#txtreceipt" + i + "";
        //console.log(id);
        var DsplitAmount = jquery_min_p(id).val();
        DsplitVat = ((vat * DsplitAmount) / balamt).toFixed(3);
        // alert(DsplitVat)
        var DsplitAmount1 = 0;
        for (var j = 1; j <= splitCount; j++) {
            var id = "#txtreceipt" + j + "";
            var a = jquery_min_p(id).val();
            // var v = ((vat * a) / balamt).toFixed(2);


            var DsplitAmount1 = (parseFloat(DsplitAmount1) + parseFloat(a)).toFixed(3);
            //var v1 = parseFloat(v1) + parseFloat(v);

        }
        // var TotalD = (parseFloat(DsplitAmount1) + parseFloat(vat)).toFixed(2);

        if (parseFloat(DsplitAmount1) != parseFloat(total)) {

            jquery_min_p('#h6warning').text('amount should be equal to actual amount!!');
            jquery_min_p('#dngwarn').modal('show');
            return false;
        }


        else {

            Query = Query + "<div class='receiptbox'  onclick='SplitBindShow(" + DsplitAmount + "," + DsplitVat + ");'>";
            Query = Query + " <p class='fontBold text-center pt-2 plbl'>Receipt" + i + "</p>";
            Query = Query + "<div class='row'>";
            Query = Query + "<div class='col-md-12'>";
            Query = Query + "<label class='col-md-6 fontBold pr-0'>Amount:</label>";
            Query = Query + "<label class='col-md-5 fontBold' id=''>" + DsplitAmount + "</label>";
            Query = Query + " </div>";
            Query = Query + "<div class='col-md-12'>";
            Query = Query + "<label class='col-md-6 fontBold'>Tax:</label>";
            Query = Query + " <label class='col-md-5 fontBold' id=''>" + DsplitVat + "</label>";
            Query = Query + "</div>";
            Query = Query + "</div>";
            Query = Query + "</div>";
        }

    }

    jquery_min_p("#receiptdiv").append(Query);



    // jquery_min_p("#splitbill").modal('hide');
    jquery_min_p("#dvsplitdisp").modal('hide');


    jquery_min_p("#Disproportionatepopup").modal('hide');

    //jquery_min_p("#receiptdiv").modal('show');

    jquery_min_p("#receiptdiv").css('display', 'block');

    jquery_min_p('#MenuBoxSplitBill').removeClass('active');


    //    jquery_min_p("#tblrunningord").css('display', 'none');




}



var textbox = document.getElementById("txttendered");

function Click(e) {
    var but = e.target;
    if (but.innerText != "=" && but.innerText != "delete") {
        if (but.innerText == ".") {
            if (!textbox.value.includes('.') && textbox.value != "") {
                textbox.value += "."
            }
        }
        else {
            textbox.value += but.innerText
        }
    }
}








function SplitRemoveClass() {


    if (jquery_min_p("#txtsplitcount").val() != "") {
        jquery_min_p("#txtsplitcount").removeClass('validate');

    }
}


function SplitBindShow(amount, vat) {
    var splitCount = jquery_min_p('#txtsplitcount').val();
    //alert(amount + "  " + vat);
    // var netamt = 0;  
    total = (parseFloat(amount) + parseFloat(vat)).toFixed(3);
    var tdamt = jquery_min_p("#txttendered").val();
    jquery_min_p("#txttendered").val(total);
    var netamt = (parseFloat(tdamt) + parseFloat(total)).toFixed(2);
    //IsOk++;
    //if (IsOk == splitCount) {

    //    jquery_min_p("#txttendered").val(netamt); var splitCount = jquery_min_p('#txtsplitcount').val();
    //}


    jquery_min_p("#receiptdiv .receiptbox").click(function () {

        jquery_min_p('#receiptdiv .receiptbox').removeClass('active');


        // jquery_min_p("#receiptdiv .receiptbox").removeClass('active');



        if ($('#receiptdiv .receiptbox').hasClass('active')) {
            jquery_min_p('#receiptdiv .receiptbox').removeClass('active');
            //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').removeClass('fa fa-trash deleteIcon');
        }
        jquery_min_p(this).addClass('active');






        //if(tdamt=="")
        //{
        //    //jquery_min_p("#txttendered").val(total);
        //    var t = total;

        //}
        //else
        //{

        //    var netamt = (parseFloat(tdamt) + parseFloat(total)).toFixed(2);
        //    //jquery_min_p("#txttendered").val(netamt);

        //}





    });
    //  IsOk = IsOk + 1;


}

//nodatafound

function SplitItemWise(count) {

    jquery_min_p("#splitbill").modal('hide');
    jquery_min_p("#proceeditem").modal('show');


    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('orderId');
    restroid = jquery_min_p("#lblrestroid").text();
    var OrderId = myParam;



    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/BindOrderDetails",
        data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            jquery_min_p("#itemnamesplittable tbody").html("");
            var i = 0;
            var jsonData1 = result.Table;
            var jsonData2 = result.Table1;
            var jsonData3 = result.Table2;
            var jsonData4 = result.Table3;
            var Query = "";
            for (var i = 0; i < jsonData1.length; i++) {

                if (jsonData1[i].ISammend == "1") {


                    Query = Query + "<tr style='display:none' class='grdactive strikeout'>";

                }
                else {  
                    Query = Query + "<tr  onClick='AddClass(this,"+i+");'>";
                }
                Query = Query + "<td style='display:none'>" + jsonData1[i].orderId + "</td>";

                //  Query = Query + "<td style='display:none  id = 'txtitemid" + i + "''>" + jsonData1[i].itemId + "</td>";
                Query = Query + "<td width='165px'>" + jsonData1[i].ItemName + "</td>";
                Query = Query + "<td>" + jsonData1[i].Quantity + "</td>";
                Query = Query + "<td id='tblsplititem'><input type='text' class='form-control col-md-8 pull-right ' value='0' id='txtqnty" + i + "' onblur=BindText(this," + i + "," + jsonData1[i].Quantity + ")></td>";
                Query = Query + "<td>" + jsonData1[i].itemPrice + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].itemPrice + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].Quantity + "</td>";
                Query = Query + "<td ><i class='fa fa-plus-circle' aria-hidden='true' onClick='IncQtyTable(this," + jsonData1[i].Quantity + ","+i+")'></i></td>";
                Query = Query + "<td><i class='fa fa-minus-circle' aria-hidden='true' onClick='DecQtyTable(this," + jsonData1[i].Quantity + "," + i + ")' ></i></td>";

                SplitQuantity = SplitQuantity + jsonData1[i].Quantity;
               
                Query = Query + "</tr>";

            }   
            var Query1 = "";
            for (var i = 1; i <= count; i++) { //AddClassB
                //if(IsProceed ==1 ){
                //Query1 = Query1 + " <div class='ml-1 width32' id='dvsplit" + i + "' onclick='AddClassB(this," + i + ")'>";
                //}
               // else {
                    Query1 = Query1 + " <div class='ml-1 width32 dvsplit' id='dvsplit" + i + "'>";
               // }
                Query1 = Query1 + "<button type='button' class='btn btn-success btn-sm bbutton' style='display:block' id='btnsplititembill" + i + "' onclick='BindBillItem(this," + i + ")'>Bill" + i + "</button>";
                Query1 = Query1 + "<div id='dvlblhide" + i + "'>";
                //alert(i)
                Query1 = Query1 + "<table class='tblbillch' id='splitbilltable" + i + "' style='display:none'>";
                Query1 = Query1 + "<thead>";
                Query1 = Query1 + "<tr>";
                Query1 = Query1 + "<th>Item Name</th>";
                Query1 = Query1 + "<th>Quantity</th>";
                Query1 = Query1 + "<th>Price</th>";


                Query1 = Query1 + "</tr>";
                Query1 = Query1 + "</thead>";
                Query1 = Query1 + "<tbody>";




                Query1 = Query1 + "</tbody>";
                Query1 = Query1 + "</table>";
                Query1 = Query1 + "<label id='lblspbillitem" + i + "'></label>";
                Query1 = Query1 + "<label style='margin-left:20px' id='lblspbillitemvat" + i + "'></label>";
                Query1 = Query1 + "</div>";
                Query1 = Query1 + "</div>";

            }












            SplitQuantity = 0;

            var SubTotal = 0;
            var taxAmount = jsonData2[0].tax;
            var OrderNo = jsonData4[0].OrderNo;
            for (var j = 0; j < jsonData1.length; j++) {
                SubTotal = SubTotal + jsonData1[j].itemPrice;
            }
            // var discount = 0;
            var balance = SubTotal + taxAmount;
            var total = balance;
            jquery_min_p("#lblorderNo").text(OrderNo);
            jquery_min_p("#txtsubtotal").text(SubTotal);
            // jquery_min_p("#txtsubtotal").attr("disabled", "disabled");
            jquery_min_p("#txtvat").text(taxAmount);
            //jquery_min_p("#txtvat").attr("disabled", "disabled");
            jquery_min_p("#txttotal").text(balance);
            //jquery_min_p("#txttotal").attr("disabled", "disabled");

            jquery_min_p("#txtdue").val(balance.toFixed(3));
            jquery_min_p("#txtdue").attr("disabled", "disabled");
            jquery_min_p("#txtbalance").val(balance.toFixed(3));
            jquery_min_p("#txtbalance").attr("disabled", "disabled");
            jquery_min_p("#itemnamesplittable tbody").append(Query);
            jquery_min_p("#dvsplititemwise").append(Query1);



            jquery_min_p("#itemnamesplittable tbody tr").each(function () {
                if (jquery_min_p(this).hasClass('grdactive')) {

                    row1 = jquery_min_p(this).closest('tr');
                    //alert(row);
                    row1.remove();  
                }
               
            });












            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },


        error: function () {
        }
    });



}



function IncQtyTable(data, actqty,i) {
    totalqty = actqty;
    // alert(totalqty)
    var row = jquery_min_p(data).closest('tr');
    var qty = row.find('input').val();
    ++qty;
    //alert(qty)
    var ActQty = row.find('td:nth-child(3)').text().trim();
    //alert(ActQty)
    var ActAmount = row.find('td:nth-child(5)').text().trim();
    var HAmount = row.find('td:nth-child(6)').text().trim();
    var HQuanty = row.find('td:nth-child(7)').text().trim();
    //alert(totalqty);
    //alert(qty);
    


    //if (IsShowBill == '1')
    //{
    //    var ISamnt = ((parseFloat(1) / parseFloat(ActQty)) * (parseFloat(ActAmount))).toFixed(3);
        
    //    var ISactqty = parseFloat(ActAmount) - parseFloat(ISamnt);
    //    row.find('td:nth-child(5)').text(ISactqty);
        
    //}

   if (ActQty <= 0) {
        jquery_min_p('#h6warning').text('Cannot Increament More');
        jquery_min_p('#dngwarn').modal('show');
    }
   else {

       //var Iamnt = ((parseFloat(qty) / parseFloat(HQuanty)) * (parseFloat(HAmount))).toFixed(3);
       var Iamnt = ((parseFloat(1) / parseFloat(ActQty)) * (parseFloat(ActAmount))).toFixed(3);
       //alert(amnt)
       // var Iactqty = parseFloat(HAmount) - parseFloat(Iamnt);
       var Iactqty = parseFloat(ActAmount) - parseFloat(Iamnt);
       row.find('td:nth-child(5)').text(Iactqty);








       // qty = parseInt(qty) + 1;
       var qty = jquery_min_p('#txtqnty' + i + '').val();
       qty = parseInt(qty) + 1;
        ActQty = parseInt(ActQty) - 1;

       // row.find('td:nth-child(4)').text(qty);
        jquery_min_p('#txtqnty' + i + '').val(qty);
        row.find('td:nth-child(3)').text(ActQty);

 
    }
    
}



function DecQtyTable(data, actqty,i) {


    var row = jquery_min_p(data).closest('tr');
   // var qty = row.find('td:nth-child(4)').text().trim();
    var ActQty = row.find('td:nth-child(3)').text().trim();
    var dec = ActQty;
    ++dec;
    // alert(qty, ActQty);
    var qty = jquery_min_p('#txtqnty' + i + '').val();
    var HQuanty = row.find('td:nth-child(7)').text().trim();
    var HAmount = row.find('td:nth-child(6)').text().trim();
    var Amount = row.find('td:nth-child(5)').text().trim();




    if (qty <= 0) {
        jquery_min_p('#h6warning').text('Cannot Decrement More');
        jquery_min_p('#dngwarn').modal('show');
    }

    else {
        // qty = jquery_min_p('#txtqnty' + i + '').val();
        qty = parseInt(qty) - 1;
        ActQty = parseInt(ActQty) + 1;


        // row.find('td:nth-child(4)').text(qty);
        jquery_min_p('#txtqnty' + i + '').val(qty);
        row.find('td:nth-child(3)').text(ActQty);


        var Damnt = ((parseFloat(dec) / parseFloat(HQuanty)) * (parseFloat(HAmount))).toFixed(3);
        ////alert(amnt)
        //var Dactqty = HAmount + Damnt;
        //var Dactqty = parseFloat(Amount) + parseFloat(Damnt);
        row.find('td:nth-child(5)').text(Damnt);
    }

    
}


function AddClass(data,i) {

    var qtyproc = "";
    var pnzero = "";
    qtyproc = jquery_min_p("#splittable tbody tr").closest('tr');
    var ro = qtyproc.find('td:nth-child(3)').text().trim();
     //alert(ro);
    var l = jquery_min_p("#splittable tbody tr").length;
    // alert(l);

    for (var i = 1; i <= l; i++) {
        pnzero = pnzero + '0';
    }


    jquery_min_p("#splittable tbody tr").each(function () {
        row1 = jquery_min_p(this).closest('tr');
        var actqnty = row1.find('td:nth-child(3)').text().trim();
        var qnty = row1.find('input').val();
        var amnt = row1.find('td:nth-child(5)').text().trim();
        
        if (actqnty == '0' && qnty == '0' && amnt == '0') {

            
            jquery_min_p(this).removeClass("active");
            jquery_min_p(this).addClass("disable");

        }
        else {
            jquery_min_p(this).removeClass('active');
            jquery_min_p(data).addClass('active');
        }
       
    });
    



    //if (ro != pnzero) {

        //jquery_min_p("#splittable tbody tr").each(function () {
        //    //tblsplititem


        //    jquery_min_p(this).removeClass('active');

        //});
        //jquery_min_p(data).addClass('active');

    //}
    //else {

    //    jquery_min_p("#splittable").removeClass('active');
    //}
    

    


}


function AddClassB(data,i)
{
    
    IsActiveBill = i;
    //'splitbilltable" + i + "'
    //alert(IsProceed)
    var k = 1;
    if (IsProceed == 1) {
        jquery_min_p("#dvshowitemsplit tbody tr").each(function () {


            jquery_min_p("#dvsplit" + k + "").removeClass('active');

            ++k;

    });
        jquery_min_p("#dvsplit" + i + "").addClass('active');

        var row1 = "";
        //jquery_min_p("#dvsplititemwise tbody tr").each(function () {
        //    if (jquery_min_p("#dvsplit" + i + "").hasclass('active')) {

        //        row1 = jquery_min_p("#dvsplit" + i + "").closest('tr');
        //        //alert(row);
        //    }

        //});
        //var itemname = row1.find('td:nth-child(3)').text().trim();
        //alert(itemname)

        //jquery_min_p("#splitbilltable" + i + " tbody tr").each(function (idx) {
        //    var a = jquery_min_p(this).children("td:eq(0)").html(idx + 1);
        //    alert(a)
        //});

        var TotalValue = 0;
        $("#dvsplit" + i + " tr").each(function () {
            row1 = jquery_min_p(this).closest('tr');
            var price = row1.find('td:nth-child(3)').text().trim();
            //alert(price)
            if (price != "") {
                (TotalValue) = parseFloat(TotalValue) + parseFloat(price);
            }
        });
       // TotalValue += parseFloat($(this).find('.totalprice').text());
       // alert(TotalValue);
        IsAmountSplit = 1;
        var balamt = jquery_min_p("#txtsubtotal").text().trim();
        var vat = jquery_min_p("#txtvat").text();
        DsplitItemVat = ((vat * TotalValue) / balamt).toFixed(3);

        var TotalItemSplit = parseFloat(TotalValue) + parseFloat(DsplitItemVat);

        jquery_min_p("#txttendered").val((TotalItemSplit).toFixed(3));



        
        
}
    else {

        jquery_min_p("#dvsplititemwise tbody tr").each(function () {


            jquery_min_p(this).removeClass('active');



        });
        jquery_min_p(data).addClass('active');

    }
    

}

function BindReverseOrder()
{
    var row1 = "";
    //  jquery_min_p("#dvsplititemwise tbody").find("tr").each(function () { splitbilltable1

    var scount = jquery_min_p("#txtsplitcount").val();

    var i=1
   // var Rcount = jquery_min_p("#splitbilltable" + i + " tbody tr").length;
    var j = 0;
    

    jquery_min_p("#dvsplititemwise tbody tr").each(function () {
        if (jquery_min_p(this).hasClass('active')) {
           
            row1 = jquery_min_p(this).closest('tr');
            //alert(row);
        }
       // jquery_min_p(this).addClass("enable");
    });



    var n = 0;
    var stvat = 0;
    var itemname = row1.find('td:nth-child(1)').text().trim();
    var Qty = row1.find('td:nth-child(2)').text().trim();
    var amount = row1.find('td:nth-child(3)').text().trim();
    
    
    var balamt = jquery_min_p("#txtsubtotal").text().trim();
    var vat = jquery_min_p("#txtvat").text();
    var splitItemVat = ((vat * amount) / balamt).toFixed(3);
   


    checkMainItemName(itemname, Qty, amount);
    var tempamnt = jquery_min_p("#lblspbillitem" + IsActiveBill + "").text();
    var tempvat = jquery_min_p("#lblspbillitemvat" + IsActiveBill + "").text();
    stamnt = tempamnt - amount;
    stvat = tempvat - splitItemVat;
    if (stamnt >= 0) {
        jquery_min_p("#lblspbillitem" + IsActiveBill + "").text(stamnt.toFixed(3));
    }

    if (stvat >= 0) {
        jquery_min_p("#lblspbillitemvat" + IsActiveBill + "").text(stvat.toFixed(3));
    }

        row1.remove();
    // ++BrCount; thead
        
        jquery_min_p("#dvsplititemwise tbody").each(function () {

            var Rcount = jquery_min_p("#splitbilltable" + i + " tbody tr").length;
            // alert(Rcount)
            ++j;
            if ((Rcount) <= 0) {
                //splitbilltable1
                //jquery_min_p("#splitbilltable" + i + "").css('display', 'none');
                jquery_min_p("#dvlblhide" + i + "").css('display', 'none');
            }

            if (j < scount) {
                ++i;
            }
        });

   


       
}





function checkMainItemName(itemname, Qty, amnt) {
   // Iscount = 0;
    var itemnameB = '';
    var QtyB = '';
    var rowB = '';
    var countB = '0';
    var ScountB = '0';

    jquery_min_p("#splittable tbody tr").each(function () {


        rowB = jquery_min_p(this).closest('tr');
        itemnameB = rowB.find('td:nth-child(2)').text().trim();
        QtyB = rowB.find('td:nth-child(3)').text().trim();
        amountB = rowB.find('td:nth-child(5)').text().trim();

        


        if ((itemname == itemnameB)) {

            var q = parseInt(Qty) + parseInt(QtyB);
            var am = parseInt(amnt) + parseInt(amountB);

            rowB.find('td:nth-child(3)').text(q);
            rowB.find('td:nth-child(5)').text(am);
            Iscount = 1;


            

        }
       
        
    });



    jquery_min_p("#splittable tbody tr").each(function () {


        rowB = jquery_min_p(this).closest('tr');
        itemnameB = rowB.find('td:nth-child(2)').text().trim();
        QtyB = rowB.find('td:nth-child(3)').text().trim();
        amountB = rowB.find('td:nth-child(5)').text().trim();
        //alert(QtyB)
        if (QtyB != 0 || amountB != 0) {
            jquery_min_p(this).removeClass("disable");
        }
    });
   // jquery_min_p(this).removeClass("disable");
}







function BindBillItem(data, i) {
    //alert(totalqty);
    var row = "";
    var row1 = "";
    IsShowBill = 1;
    // alert(amnt)
    jquery_min_p("#dvlblhide" + i + "").css('display', 'block');
    jquery_min_p("#splittable tbody tr").each(function () {
        if (jquery_min_p(this).hasClass('active')) {

            row = jquery_min_p(this).closest('tr');
            //alert(row); closest
        }


        

    });
    var n = 0;
    var itemname = row.find('td:nth-child(2)').text().trim();   //check
    var Qty = row.find('input').val();
    //alert(Qty)
    //jquery_min_p("#itemnamesplittable tbody").append(Query);
   // var Qty = jquery_min_p('#txtqnty'+ n +'').val();
    var ocount = jquery_min_p("#itemnamesplittable tbody tr").length;
  
    var ActualQty = row.find('td:nth-child(3)').text().trim();
    var Amount = row.find('td:nth-child(5)').text().trim();
    var HAmount = row.find('td:nth-child(6)').text().trim();
    var HQty = row.find('td:nth-child(7)').text().trim();
    var tempAmount = Amount;




    //alert(totalqty)
    //if (totalqty == '0') {

    //    totalqty = ActualQty;
    //    var actqty = ActualQty - Qty;
    //    row.find('td:nth-child(3)').text(actqty);
    //}


    //if(){
        jquery_min_p(this).addClass("disable");
    //}
    
        var amnt = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(HAmount))).toFixed(3);
       
   // var amnt = parseFloat(ActualQty) / parseFloat(Qty);
   // amnt = Amount/amnt;
  
    //alert(totalqty)
    
   // var actamnt = Amount - amnt;
        
   //row.find('td:nth-child(5)').text(actamnt);

    //if (parseInt(ActualQty) < parseInt(Qty))
    //{
    //    jquery_min_p('#hwarning').text('Qty can not be more than Actual Qty');
    //    jquery_min_p('#WarningPopup').modal('show');
    //    row.find('td:nth-child(4)').text(0);
    //    return false; 
    //}
   
    if ((jquery_min_p("#splitbilltable" + (i) + " tbody tr").length > 0)) {

        
        checkItemName(i, itemname, Qty, amnt);
        if (Iscount == '1') {

            //var q = parseInt(Qty) + parseInt(QtyB);

            //rowB.find('td:nth-child(2)').text(q);
            // countB = 1;

            jquery_min_p("#splittable tbody tr").each(function () {

                if (jquery_min_p(this).hasClass('active')) {

                    row = jquery_min_p(this).closest('tr');
                    //row.find('td:nth-child(4)').text(0);
                    row.find('input').val(0);
                    jquery_min_p(this).removeClass('active');


                   // row1 = jquery_min_p(this).closest('tr');
                    var actqnty = row.find('td:nth-child(3)').text().trim();
                    var qnty = row.find('input').val();
                    var amnt = row.find('td:nth-child(5)').text().trim();
                   // alert(actqnty + "" + qnty + "" + amnt)
                    if (actqnty == '0' && qnty == '0' && amnt == '0') {


                        jquery_min_p(this).removeClass("active");
                        jquery_min_p(this).addClass("disable");

                    }

                }
               
            });

        }
            

        else {
            if (Iscount == '0') {
                if (Qty == '0') {
                    if (Qty == '0' && ActualQty == '0') {
                       // row.remove();
                    }
                    else {

                        jquery_min_p('#hwarning').text('Please increament the Quantity');
                        jquery_min_p('#WarningPopup').modal('show');
                        
                        jquery_min_p("#dvlblhide"+i+"").css('display','none');
                    }
                    
                }
                    
                else {

                    var Query = "";
                   // var amnt = ((parseFloat(Qty) / parseFloat(totalqty)) * (parseFloat(Amount))).toFixed(3);
                    var amnt = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(HAmount))).toFixed(3);
                    Query = Query + "<tr onClick='AddClassB(this," + i + ");' id='trshowitemsplit"+i+"'>";
                    Query = Query + "<td>" + itemname + "</td>";
                    Query = Query + "<td id='tdspbillitem" + i + "'>" + Qty + "</td>";
                    Query = Query + "<td>" + amnt + "</td>";
                    Query = Query + "</tr>";
                    // var id = "#splitbilltable" + i;   dvsplititemwise


                    jquery_min_p("#splitbilltable" + i + " tbody").append(Query);
                    jquery_min_p("#splitbilltable" + i + "").css('display', 'block');
                    jquery_min_p("#splittable tbody tr").each(function () {

                        if (jquery_min_p(this).hasClass('active')) {

                            row = jquery_min_p(this).closest('tr');
                           // row.find('td:nth-child(4)').text(0);
                            row.find('input').val(0);
                            jquery_min_p(this).removeClass('active');


                            var actqnty = row.find('td:nth-child(3)').text().trim();
                            var qnty = row.find('input').val();
                            var amnt = row.find('td:nth-child(5)').text().trim();
                            //alert(actqnty + "" + qnty + "" + amnt)
                            if (actqnty == '0' && qnty == '0' && amnt == '0') {


                                jquery_min_p(this).removeClass("active");
                                jquery_min_p(this).addClass("disable");

                            }


                        }
                       

                    });

                   
                }

            }
        }




    }

    else {
        if (Qty == '0') {
            if(Qty =='0' && ActualQty =='0' )
            {
               // row.remove();
            }
        else{
   
            jquery_min_p('#hwarning').text('Please increament the Quantity');
            jquery_min_p('#WarningPopup').modal('show');
            jquery_min_p("#dvlblhide" + i + "").css('display', 'none');
        }
            

        }
            

        else {

            var Query = "";
            //var amnt = ((parseFloat(Qty) / parseFloat(totalqty)) * (parseFloat(Amount))).toFixed(3);
            var amnt = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(HAmount))).toFixed(3);
            Query = Query + "<tr onClick='AddClassB(this," + i + ");' id='trshowitemsplit" + i + "'>";
            Query = Query + "<td>" + itemname + "</td>";
            Query = Query + "<td id='tdspbillitem" + i + "'>" + Qty + "</td>";
            Query = Query + "<td>" + amnt + "</td>";
            Query = Query + "</tr>";
            // var id = "#splitbilltable" + i;   dvsplititemwise


            jquery_min_p("#splitbilltable" + i + " tbody").append(Query);
            jquery_min_p("#splitbilltable" + i + "").css('display', 'block');
            
            jquery_min_p("#splittable tbody tr").each(function () {

                if (jquery_min_p(this).hasClass('active')) {

                    row = jquery_min_p(this).closest('tr');
                    row.find('input').val(0);
                   // row.find('td:nth-child(4)').text(0);
                    jquery_min_p(this).removeClass('active');


                    var actqnty = row.find('td:nth-child(3)').text().trim();
                    var qnty = row.find('input').val();
                    var amnt = row.find('td:nth-child(5)').text().trim();
                   // alert(actqnty + "" + qnty + "" + amnt)
                    if (actqnty == '0' && qnty == '0' && amnt == '0') {


                        jquery_min_p(this).removeClass("active");
                        jquery_min_p(this).addClass("disable");

                    }



                }
                
            });
            
        }

    }

    //RemoveRow();
    // totalqty--;



    var rowb = '';
    var totalamntB = 0;
    var BsplitItemVat = 0;
    var totalvatB = 0;
    var balamt = jquery_min_p("#txtsubtotal").text().trim();
    var vat = jquery_min_p("#txtvat").text();






    if (Qty == '0') {
        if (Qty == '0' && ActualQty == '0') {
            // row.remove();
        }
        else {

            jquery_min_p('#hwarning').text('Please increament the Quantity');
            jquery_min_p('#WarningPopup').modal('show');
            jquery_min_p("#dvlblhide" + i + "").css('display', 'none');
        }


    }








    
    if (Qty != '0') {
        jquery_min_p("#splitbilltable" + i + " tbody tr").each(function () {
            rowb = jquery_min_p(this).closest('tr');
            //row.find('td:nth-child(4)').text(0);




            // row1 = jquery_min_p(this).closest('tr');
            var amntb = rowb.find('td:nth-child(3)').text().trim();
            var aqtyb = rowb.find('td:nth-child(3)').text().trim();
            totalamntB = parseFloat(totalamntB) + parseFloat(amntb);


            BsplitItemVat = ((parseFloat(vat) * parseFloat(amntb)) / parseFloat(balamt));
            totalvatB = parseFloat(totalvatB) + parseFloat(BsplitItemVat);
            // alert(BsplitItemVat)

        });
        //alert(totalvatB)
        jquery_min_p("#lblspbillitem" + i + "").text(totalamntB.toFixed(3));
        //alert(BsplitItemVat)
        jquery_min_p("#lblspbillitemvat" + i + "").text((totalvatB).toFixed(3));
    }

}







//function RemoveRow()
//{
//    jquery_min_p("#itemnamesplittable tbody").find("tr").each(function () {
        
//        rowB = jquery_min_p(this);
//        itemnameB = rowB.find('td:nth-child(1)').text();

//        AQty = rowB.find("td:nth-child(3)").text();
//        Qty = rowB.find("input").val();

//        if (AQty == '0' && Qty == '0') {
//            rowB.remove();
//        }
//    });
//}



function checkItemName(i, itemname, Qty,amnt) {
    Iscount = 0;
    var itemnameB = '';
    var QtyB = '';
    var rowB = '';
    var countB = '0';
    var ScountB = '0';
   
    jquery_min_p("#splitbilltable" + i + " tbody tr").each(function () {


        rowB = jquery_min_p(this).closest('tr');
        itemnameB = rowB.find('td:nth-child(1)').text().trim();
        QtyB = rowB.find('td:nth-child(2)').text().trim();
        amountB = rowB.find('td:nth-child(3)').text().trim();
        
        if ((itemname == itemnameB) && Qty != 0) {



            var q = parseInt(Qty) + parseInt(QtyB);
            var am = parseInt(amnt) + parseInt(amountB);

            rowB.find('td:nth-child(2)').text(q);
            rowB.find('td:nth-child(3)').text(am);
            Iscount = 1;

        }

    });


}







function ShowSplitItemWise() {

    // var count = jquery_min_p("#txtsplitcount").val();

    var i = 1;
    var rowB = '';
    var itemnameB = '';
    var QtyB = '';
    var PriceB = '';
    var j = 1;

    var count1 = jquery_min_p("#splitbilltable" + i + " tbody tr").length;
    // alert(count1);  
    var Query1 = '';
    var Query2 = '';
    var sFlag = '0';
    jquery_min_p("#dvsplititemwise tbody").find("tr").each(function () {
        // $("tr td:nth-child(2)") dvsplititemwise dvshowitemsplit
        rowB = jquery_min_p(this);
        itemnameB = rowB.find('td:nth-child(1)').text();

        //jquery_min_p("tr td:nth-child(3)").text();
        QtyB = rowB.find("td:nth-child(2)").text();
        PriceB = rowB.find("td:nth-child(3)").text();

        //Query1 = Query1 + " <div class='ml-1 boxwidth'  >";

        //Query1 = Query1 + "<table id='showsplititem" + i + "' >";
        //Query1 = Query1 + "<thead>";
        //Query1 = Query1 + "<tr>";
        //Query1 = Query1 + "<th>Item Name</th>";
        //Query1 = Query1 + "<th>Quantity</th>";
        //Query1 = Query1 + "<th>Price</th>";
        //Query1 = Query1 + "</tr>";
        //Query1 = Query1 + "</thead>";

        var count1 = jquery_min_p("#splitbilltable" + i + " tbody tr").length;
        if (sFlag == '0') {
            Query1 = Query1 + " <div class='ml-1 boxwidth'  >";

            Query1 = Query1 + "<table id='showsplititem" + i + "' >";
            Query1 = Query1 + "<thead>";
            Query1 = Query1 + "<tr>";
            Query1 = Query1 + "<th>Item Name</th>";
            Query1 = Query1 + "<th>Quantity</th>";
            Query1 = Query1 + "<th>Price</th>";
            Query1 = Query1 + "</tr>";
            Query1 = Query1 + "</thead>";
            Query1 = Query1 + "<tbody id='tblspitem" + i + "'>";
            Query1 = Query1 + "<tr>";
            Query1 = Query1 + "<td>" + itemnameB + "</td>";
            Query1 = Query1 + "<td>" + QtyB + "</td>";
            Query1 = Query1 + "<td>" + PriceB + "</td>";

            Query1 = Query1 + "</tr>";

            Query1 = Query1 + "</tbody>";
            Query1 = Query1 + "</table>";
            Query1 = Query1 + "</div>";

            sFlag = '1';
        }
        else {
            //Query2 = Query2 + "<tbody id='tblspitem " + i + "'>";
            Query2 = Query2 + "<tr>";
            Query2 = Query2 + "<td>" + itemnameB + "</td>";
            Query2 = Query2 + "<td>" + QtyB + "</td>";
            Query2 = Query2 + "<td>" + PriceB + "</td>";

            Query2 = Query2 + "</tr>";
            // Query2 = Query2 + "</tbody>";
            j = j + 1;

            var idq2 = "#tblspitem" + i + " tbody"
          //  var idq2 = "#showsplititem" + i + " tbody"
            jquery_min_p(idq2).append(Query2);

        }


        if (count1 == j) {
            i = i + 1;
            sFlag = '0';
            j = 1;
        }


    });
    
    jquery_min_p("#dvshowitemsplit").append(Query1);

    jquery_min_p("#dvshowitemsplit").css('display', 'block');

   

}
function BindText(data, i, rrqty)
{
    //alert(rrqty)
    totalqty = rrqty;
    var row = jquery_min_p(data).closest('tr');
    
    var ActQty = row.find('td:nth-child(3)').text().trim();
    var ActAmount = row.find('td:nth-child(5)').text().trim();
    var qty = row.find('input').val();
    var HAmount = row.find('td:nth-child(6)').text().trim();
    var HQuanty = row.find('td:nth-child(7)').text().trim();
    //alert(ActQty + " " + qty + " " + ActAmount)
    if (parseInt(ActQty) >= parseInt(qty))
    {
        var actqty = ActQty - qty;
        row.find('td:nth-child(3)').text(actqty);


        //var Bamnt = ((parseFloat(1) / parseFloat(ActQty)) * (parseFloat(ActAmount))).toFixed(3);
        var Bamnt = ((parseFloat(qty) / parseFloat(HQuanty)) * (parseFloat(HAmount))).toFixed(3);
        //alert(amnt)
        // var Iactqty = parseFloat(HAmount) - parseFloat(Iamnt);
        var Bactqty = parseFloat(ActAmount) - parseFloat(Bamnt);
        row.find('td:nth-child(5)').text(Bactqty);

    //    if (ActQty == '0' && qty == '0' && ActAmount == '0') {
    //    jquery_min_p(this).removeClass("active");
    //    jquery_min_p(this).addClass("disable");
    //}     
    //var Iamnt = ((parseFloat(qty) / parseFloat(HQuanty)) * (parseFloat(HAmount))).toFixed(3);
        var Iamnt = ((parseFloat(1) / parseFloat(ActQty)) * (parseFloat(ActAmount))).toFixed(3);
        //alert(amnt)
        // var Iactqty = parseFloat(HAmount) - parseFloat(Iamnt);

    }
    else {
        jquery_min_p('#hwarning').text('Qty can not be more than Actual Qty test');
        jquery_min_p('#WarningPopup').modal('show');
       // row.find('td:nth-child(4)').text(0);
        row.find('input').val(0);
        return false;

    }

}


function BindBookletCoupon() {
    jquery_min_p('#ddlpytmBooklet').html("");
    var restroId = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/BindBookletCoupon",
        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            jquery_min_p('#ddlpytmBooklet').append(newOption1);

            for (var i = 0; i < result.length; i++) {


                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].CustDetailId).text(result[i].bookletno);


                // Append that to the DropDownList.
                jquery_min_p('#ddlpytmBooklet').append(newOption);

            }

        }
    });
}




function FilterCouponNo() {
    jquery_min_p('#ddlpytmcupon').html("");
  //  var BookletNo = jquery_min_p('#ddlpytmBooklet').val();      //.replace('\'', '\\\'')

    var BookletNo = jquery_min_p("#ddlpytmBooklet option:selected").text();
    var restroid = jquery_min_p("#lblrestroid").text();
    var dataCompany = [];
    dataCompany = [];
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/FilterCouponNo",
        data: "{'BookletNo':'" + BookletNo + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            jquery_min_p('#ddlpytmcupon').append(newOption1);


            for (var i = 0; i < result.length; i++) {


                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].cardno).text(result[i].cardno);


                // Append that to the DropDownList.
                jquery_min_p('#ddlpytmcupon').append(newOption);

            }

        }
    });
}



function CouponValidation()
{
    var Flag=0;
    if (jquery_min_p('#ddlpytmBooklet').val() == '0') {
        jquery_min_p('#ddlpytmBooklet').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#ddlpytmcupon').val() == '0') {
        jquery_min_p('#ddlpytmcupon').addClass('validate');
        Flag = 1;
    }

    if (Flag == 1) {
        return false;
    }
    else {
        return true;
    }
}



function CouponRemoveClass() {
    if (jquery_min_p('#ddlpytmBooklet').val() != '0') {
        jquery_min_p('#ddlpytmBooklet').removeClass('validate');
    }
    if (jquery_min_p('#ddlpytmcupon').val() != '0') {
        jquery_min_p('#ddlpytmcupon').removeClass('validate');
    }
}


function CouponReset()
{
    jquery_min_p("#ddlpytmBooklet").val("0");
    jquery_min_p("#ddlpytmcupon").val("0");

    jquery_min_p('#ddlpytmBooklet').removeClass('validate');

    jquery_min_p('#ddlpytmcupon').removeClass('validate');


}



function Shownumber() {


    var BookletNo = jquery_min_p("#ddlpytmBooklet option:selected").text();
    var CouponNo = jquery_min_p("#ddlpytmcupon option:selected").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Payment/Shownumber",
        data: "{'BookletNo':'" + BookletNo + "','CouponNo':'" + CouponNo + "'}",                                  //'BookletNo':'" + BookletNo + "','CouponNo':'" + CouponNo + "'
        dataType: "json",
        async: false,
        success: function (result) {
            var number = result[0].Value;
            jquery_min_p("#lblnumber").text(number);

        },
        error: function () {

        }
    });
}


//function printpay()
//{
//    window.print();
   // var restroid = jquery_min_p("#lblrestroid").text();
   // const urlParams = new URLSearchParams(window.location.search);
   // const myParam = urlParams.get('orderId');
   // var billno = jquery_min_p("#lbltempbillno1").text();
   // alert(billno);
   //// restroid = jquery_min_p("#lblrestroid").text();
   // var OrderId = myParam;
   // jquery_min_p.ajax({
   //     type: "POST",
   //     contentType: "application/json; charset=utf-8",
   //     url: "/Payment/Paymentprint",
   //     data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "','billno':'" + billno + "'}",                                  //'BookletNo':'" + BookletNo + "','CouponNo':'" + CouponNo + "'
   //     dataType: "json",
   //     async: false,
   //     success: function (result) {
   //         //var number = result[0].Value;
   //         //jquery_min_p("#lblnumber").text(number);

   //     },
   //     error: function () {

   //     }
   // });


//}


function printpay() {
   qz.websocket.connect().then(function () {
        return qz.printers.find("MARVEL AF1001 (Copy 1)");              // Pass the printer name into the next Promise
    }).then(function (printer) {
        var config = qz.configs.create(printer);       // Create a default config for the found printer
        var data = [
       '\x1B' + '\x40',          // init
       '\x1B' + '\x61' + '\x31', // center align
       'Beverly Hills, CA  90210' + '\x0A',
       '\x0A',                   // line break
       'www.qz.io' + '\x0A',     // text and line break
       '\x0A',                   // line break
       '\x0A',                   // line break
       'May 18, 2016 10:30 AM' + '\x0A',
       '\x0A',                   // line break
       '\x0A',                   // line break    
       '\x0A',
       'Transaction # 123456 Register: 3' + '\x0A',
       '\x0A',
       '\x0A',
       '\x0A',
       '\x1B' + '\x61' + '\x30', // left align
       'Baklava (Qty 4)       9.00' + '\x1B' + '\x74' + '\x13' + '\xAA', //print special char symbol after numeric
       '\x0A',
       'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + '\x0A',
       '\x1B' + '\x45' + '\x0D', // bold on
       'Here\'s some bold text!',
       '\x1B' + '\x45' + '\x0A', // bold off
       '\x0A' + '\x0A',
       '\x1B' + '\x61' + '\x32', // right align
       '\x1B' + '\x21' + '\x30', // em mode on
       'DRINK ME',
       '\x1B' + '\x21' + '\x0A' + '\x1B' + '\x45' + '\x0A', // em mode off
       '\x0A' + '\x0A',
       '\x1B' + '\x61' + '\x30', // left align
       '------------------------------------------' + '\x0A',
       '\x1B' + '\x4D' + '\x31', // small text
       'EAT ME' + '\x0A',
       '\x1B' + '\x4D' + '\x30', // normal text
       '------------------------------------------' + '\x0A',
       'normal text',
       '\x1B' + '\x61' + '\x30', // left align
       '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A' + '\x0A',
       '\x1B' + '\x69',          // cut paper (old syntax)
    // '\x1D' + '\x56'  + '\x00' // full cut (new syntax)
    // '\x1D' + '\x56'  + '\x30' // full cut (new syntax)
    // '\x1D' + '\x56'  + '\x01' // partial cut (new syntax)
    // '\x1D' + '\x56'  + '\x31' // partial cut (new syntax)
       '\x10' + '\x14' + '\x01' + '\x00' + '\x05',  // Generate Pulse to kick-out cash drawer**
        ];   // Raw ZPL
        return qz.print(config, data);
    }).catch(function (e) { console.error(e); });

}
