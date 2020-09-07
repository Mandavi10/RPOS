/// <reference path="D:\Rproject\FRD_Web\FRDWeb\FRDWeb\Views/SalesBilling/CustomerCoupon.cshtml" />
jquery_min_p(document).ready(function () {
    //alert(jquery_min_p("#lblRoleId").text());
    var query = "";

    if (jquery_min_p("#lblRoleId").text() == "1" || jquery_min_p("#lblRoleId").text() == "2" ){//|| jquery_min_p("#lblRoleId").text() == "3") { //Admin/Super Admin /Restro Admin

        
        jquery_min_p("#hmenulist").css('display', 'block');


        query = query + "<div class='row mb-2'>";
        query = query + "<div class='menuListing'>";
        query = query + "<div id='setupMenu'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs ' id='dvdefineRestro'>";
        query = query + " <a href='/Master/DefineRestaurant'>";
        query = query + " <img src='../../Content/images/restro-icon.png' />";
        query = query + " <span>Define Restaurant</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs' id='dvSectionTable'>";
        query = query + " <a href='/Master/SectionTable'>";
        query = query + " <img src='../../Content/images/section-table.png' />";
        query = query + " <span>Section Table</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Master/MenuCreation'>";
        query = query + " <img src='../../Content/images/menu-creation.png' />";
        query = query + " <span>Menu Creation</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs' id='dvdefineempdetails'>";
        query = query + " <a href='/Master/EmployeeDetails'>";
        query = query + " <img src='../../Content/images/emp-details.png' />";
        query = query + " <span>Employee Details</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Master/KitchenSection'>";
        query = query + " <img src='../../Content/images/kitchen-section.png' />";
        query = query + " <span>Kitchen Section</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Master/AddOn'>";
        query = query + " <img src='../../Content/images/add-ons.png' />";
        query = query + " <span>Add-ons</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " </div>";

        query = query + " <div id='salesBillingMenu' style='display:none'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs '>";
        query = query + " <a href='/SalesBilling/NewOrder'>";
        query = query + " <img src='../../Content/images/order-icon.png' />";
        query = query + " <span>New Order</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";


        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/SalesBilling/KitchenScreen'>";
        query = query + " <img src='../../Content/images/kitchen-screen-icon.png' />";
        query = query + " <span>Kitchen Screen</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/CustomerLoyalty/CustomerLoyalty'>";
        query = query + " <img src='../../Content/images/handshake-icon.png' />";
        query = query + " <span>Customer Loyalty</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/SalesBilling/RunningOrder'>";
        query = query + " <img src='../../Content/images/running-order-icon.png' />";
        query = query + " <span>Running Orders</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/CustomerLoyalty/CardActivation'>";
        query = query + " <img src='../../Content/images/card-activation-icon.png' />";
        query = query + " <span>Card Activation</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/SalesBilling/CustomerCoupon'>";
        query = query + " <img src='../../Content/images/dayend-icon.png' />";
        query = query + " <span>Customer Coupon</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";


        query = query + " <div id='salesReport' style='display:none'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs ' id='spdailysalesreport'>";
        query = query + " <a href='/Reports/DailySalesReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span >DailySalesReport</span>";
        query = query + " </a>";

        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/DailyRevenueReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='spdailyrevenuereport'>DailyRevenueReport</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/UserWiseItemReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='spitemwisereport'>User Wise Item Report</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/DiscountReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='spdiscountreport'>Discount Report</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/PaymentReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='sppaymentreport'>Payment Report</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/more'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='spmorereport'>More</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " </div>";

        query = query + " </div>";
        query = query + " <div class='menuHeading'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs masterTabs1'>";
        query = query + " <a href='#' id='setup' onclick=ChangeTab(1)>";
        query = query + " ";
        query = query + " <span class='downiconposi'><img src='../../Content/images/setup-icon.png' class='imgcard pr-1'/>Setup</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs masterTabs1'>";
        query = query + " <a href='#' id='salesBilling' onclick=ChangeTab(2)>";
        query = query + " ";
        query = query + " <span class='downiconposi'><img src='../../Content/images/sales-billing.png' class='imgcard pr-1'/>Sales And Billing</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs mb-0 masterTabs1'>";
        query = query + " <a href='#' id='Report'>";
        query = query + " ";
        query = query + " <span class='downiconposi'><img src='../../Content/images/reports-icon-sm.png' class='imgcard pr-1'/>Reports</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs mb-0 masterTabs1'>";

        query = query + " <a href='/Master/Home'>";
        query = query + " ";
        query = query + " <span class='downiconposi'><img src='../../Content/images/home-icon.png' class='imgcard pr-1'/>Home</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " </div>";
        query = query + " </div>";

    }
    else if (jquery_min_p("#lblRoleId").text() == "3") { //Restro Admin

        query = query + "<div class='row mb-2'>";
        query = query + "<div class='menuListing'>";
        query = query + "<div id='setupMenu'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs ' id='dvdefineRestro'>";
        query = query + " <a href='/Master/DefineRestaurant'>";
        query = query + " <img src='../../Content/images/restro-icon.png' />";
        query = query + " <span>Define Restaurant</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs' id='dvSectionTable'>";
        query = query + " <a href='/Master/SectionTable'>";
        query = query + " <img src='../../Content/images/section-table.png' />";
        query = query + " <span>Section Table</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Master/MenuCreation'>";
        query = query + " <img src='../../Content/images/menu-creation.png' />";
        query = query + " <span>Menu Creation</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs' id='dvdefineempdetails'>";
        query = query + " <a href='/Master/EmployeeDetails'>";
        query = query + " <img src='../../Content/images/emp-details.png' />";
        query = query + " <span>Employee Details</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Master/KitchenSection'>";
        query = query + " <img src='../../Content/images/kitchen-section.png' />";
        query = query + " <span>Kitchen Section</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Master/AddOn'>";
        query = query + " <img src='../../Content/images/add-ons.png' />";
        query = query + " <span>Add-ons</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " </div>";

        query = query + " <div id='salesBillingMenu' style='display:none'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs '>";
        query = query + " <a href='/SalesBilling/NewOrder'>";
        query = query + " <img src='../../Content/images/order-icon.png' />";
        query = query + " <span>New Order</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";


        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/SalesBilling/KitchenScreen'>";
        query = query + " <img src='../../Content/images/kitchen-screen-icon.png' />";
        query = query + " <span>Kitchen Screen</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/CustomerLoyalty/CustomerLoyalty'>";
        query = query + " <img src='../../Content/images/handshake-icon.png' />";
        query = query + " <span>Customer Loyalty</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/SalesBilling/RunningOrder'>";
        query = query + " <img src='../../Content/images/running-order-icon.png' />";
        query = query + " <span>Running Orders</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/CustomerLoyalty/CardActivation'>";
        query = query + " <img src='../../Content/images/card-activation-icon.png' />";
        query = query + " <span>Card Activation</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        //query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        //query = query + " <div class='masterTabs'>";
        //query = query + " <a href='#'>";
        //query = query + " <img src='../../Content/images/dayend-icon.png' />";
        //query = query + " <span>Day End</span>";
        //query = query + " </a>";
        //query = query + " </div>";
        //query = query + " </div>";
        query = query + " </div>";






        query = query + " <div id='salesReport' style='display:none'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs ' id='spdailysalesreport'>";
        query = query + " <a href='/Reports/DailySalesReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span >DailySalesReport</span>";
        query = query + " </a>";

        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/DailyRevenueReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='spdailyrevenuereport'>DailyRevenueReport</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/UserWiseItemReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='spitemwisereport'>User Wise Item Report</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/DiscountReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='spdiscountreport'>Discount Report</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/PaymentReport'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='sppaymentreport'>Payment Report</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/Reports/more'>";
        query = query + " <img src='../../Content/images/reports-icon.png'>";
        query = query + " <span id='spmorereport'>More</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " </div>";
        query = query + " <div class='menuHeading'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs masterTabs1'>";
        query = query + " <a href='#' id='setup' onclick=ChangeTab(1)>";
        query = query + " ";
        query = query + " <span class='downiconposi'><img src='../../Content/images/setup-icon.png' class='imgcard pr-1'/>Setup</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs masterTabs1'>";
        query = query + " <a href='#' id='salesBilling' onclick=ChangeTab(2)>";
        query = query + " ";
        query = query + " <span class='downiconposi'><img src='../../Content/images/sales-billing.png' class='imgcard pr-1'/>Sales And Billing</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs mb-0 masterTabs1'>";
        query = query + " <a href='#' id='Report'>";
        query = query + " ";
        query = query + " <span class='downiconposi'><img src='../../Content/images/reports-icon-sm.png' class='imgcard pr-1'/>Reports</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs mb-0 masterTabs1'>";

        query = query + " <a href='/Master/Home'>";
        query = query + " ";
        query = query + " <span class='downiconposi'><img src='../../Content/images/home-icon.png' class='imgcard pr-1'/>Home</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " </div>";
        query = query + " </div>";




    }



    else if (jquery_min_p("#lblRoleId").text() == "4")//Kitchen User
    {
        query = query + "<div class='row mb-2'>";
        query = query + "<div class='menuListing'>";
        query = query + " <div id='salesBillingMenu' style='display:contents'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/SalesBilling/KitchenScreen'>";
        query = query + " <img src='../../Content/images/kitchen-screen-icon.png' />";
        query = query + " <span>Kitchen Screen</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='menuHeading'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='#' id='salesBilling' >";
        query = query + " <img src='../../Content/images/sales-billing.png' />";
        query = query + " <span>Sales And Billing</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs mb-0'>";
        query = query + " <a href='/Master/Home'>";
        query = query + " <img src='../../Content/images/home-icon.png' />";
        query = query + " <span>Home</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";
    }
    else if (jquery_min_p("#lblRoleId").text() == "5")//Waiter
    {
        query = query + "<div class='row mb-2'>";
        query = query + "<div class='menuListing'>";
        query = query + " <div id='salesBillingMenu' style='display:contents'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs '>";
        query = query + " <a href='/SalesBilling/NewOrder'>";
        query = query + " <img src='../../Content/images/order-icon.png' />";
        query = query + " <span>New Order</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";


        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='menuHeading'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='#' class='active' id='salesBilling' >";
        query = query + " <img src='../../Content/images/sales-billing.png' />";
        query = query + " <span>Sales And Billing</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs mb-0'>";
        query = query + " <a href='/Master/Home'>";
        query = query + " <img src='../../Content/images/home-icon.png' />";
        query = query + " <span>Home</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";
    }
    else if (jquery_min_p("#lblRoleId").text() == "7" || jquery_min_p("#lblRoleId").text() == "6")//Billing User && Captain
    {
        query = query + "<div class='row mb-2'>";
        query = query + "<div class='menuListing'>";
        query = query + " <div id='salesBillingMenu' style='display:contents'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs '>";
        query = query + " <a href='/SalesBilling/NewOrder'>";
        query = query + " <img src='../../Content/images/order-icon.png' />";
        query = query + " <span>New Order</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='/SalesBilling/RunningOrder'>";
        query = query + " <img src='../../Content/images/running-order-icon.png' />";
        query = query + " <span>Running Orders</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='menuHeading'>";
        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs'>";
        query = query + " <a href='#' class='active' id='salesBilling' >";
        query = query + " <img src='../../Content/images/sales-billing.png' />";
        query = query + " <span>Sales And Billing</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";

        query = query + " <div class='col-md-6 col-sm-6 col-6 p-0 pull-left'>";
        query = query + " <div class='masterTabs mb-0'>";
        query = query + " <a href='/Master/Home'>";
        query = query + " <img src='../../Content/images/home-icon.png' />";
        query = query + " <span>Home</span>";
        query = query + " </a>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";
        query = query + " </div>";
    }

    else if (jquery_min_p("#lblRoleId").text() == "9")//Report User
    {

    }

    jquery_min_p("#dvMenuBinding").append(query);

});

//function ChangeTab(value) {
//    if (value == "1") {
//        jquery_min_p("#salesBillingMenu").css("display", "none");
//        jquery_min_p("#dvdefineRestro").css("display", "block");

//    }
//    if (value == "2") {
//        jquery_min_p("#salesBillingMenu").css("display", "block");
//        jquery_min_p("#dvdefineRestro").css("display", "none");
//    }
//}

function Logout() {
    jquery_min_p.ajax({
        type: "POST",
        url: "/Logout/Logout",
        contentType: "application/json; charset=utf-8",
        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            if (result == "0") {
                LogoutDone();
            }
        },
        error: LogoutFailed
    });
    function LogoutDone() {
        sessionStorage.setItem("UserPin", null);
        sessionStorage.setItem('CheckStatus', -1)
        location.href = "/Login/Login";
    }
    function LogoutFailed() {
        alert("fail");
    }
}