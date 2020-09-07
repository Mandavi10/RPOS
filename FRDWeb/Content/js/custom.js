

jquery_min_p(document).ready(function () {
    //jquery_min_p('.RestaurantInfra .sectionBox').click(function () {
        
    //    jquery_min_p(this).toggleClass('active');
    //})
    
    jquery_min_p('#divsittingsection .sectionBox').click(function () {
        jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
        jquery_min_p(this).addClass('active');
    })

      //jquery_min_p('.masterTabs').click(function () {
      //    jquery_min_p('.masterTabs').removeClass('active');
      //  jquery_min_p(this).addClass('active');

      //});
      //jquery_min_p('.masterTabs').on('click', function () {
      //    jquery_min_p('.masterTabs').find('.active').removeClass('active');
      //    jquery_min_p(this).parent('.masterTabs').addClass('active');
      //  });
    jquery_min_p(".menuHeading .masterTabs a").click(function () {
        jquery_min_p('.menuHeading .masterTabs a').removeClass('active');
        jquery_min_p(this).addClass('active');

    })
    jquery_min_p("#setup").click(function () {
        jquery_min_p('.menuListing #salesBillingMenu').css('display', 'none');
        jquery_min_p('.menuListing #salesReport').css('display', 'none');
        jquery_min_p('.menuListing #setupMenu').css('display', 'contents');


    })


    
    jquery_min_p(".navbar-toggler").click(function () {
        //jquery_min_p('#navContent').css('display', 'block');
        jquery_min_p('#navContent').toggle();

    })
    jquery_min_p("#salesBilling").click(function () {
        jquery_min_p('.menuListing #setupMenu').css('display', 'none');
        jquery_min_p('.menuListing #salesReport').css('display', 'none');
        jquery_min_p('.menuListing #salesBillingMenu').css('display', 'contents');

    })

    jquery_min_p("#Report").click(function () {
        jquery_min_p('.menuListing #setupMenu').css('display', 'none');
        jquery_min_p('.menuListing #salesBillingMenu').css('display', 'none');
        jquery_min_p('.menuListing #salesReport').css('display', 'contents');

    })
   
    jquery_min_p(function () {
        var pgurl = window.location.href;
        jquery_min_p(".menuListing .masterTabs a").each(function () {
            if (this.href === pgurl) {
                jquery_min_p(this).addClass('active');
            }
        })
        if (jquery_min_p('.menuListing #salesBillingMenu .masterTabs a').hasClass('active'))
        {
            jquery_min_p('.menuListing #setupMenu').css('display', 'none');
            jquery_min_p('.menuListing #salesBillingMenu').css('display', 'contents');
            jquery_min_p('#salesBilling').addClass('active');
            jquery_min_p('#setup').removeClass('active');
        }

        if (jquery_min_p('.menuListing #salesReport .masterTabs a').hasClass('active')) {
            jquery_min_p('.menuListing #setupMenu').css('display', 'none');
            jquery_min_p('.menuListing #salesBillingMenu').css('display', 'none');
            jquery_min_p('.menuListing #salesReport').css('display', 'contents');
            jquery_min_p('#salesReport').addClass('active');
            jquery_min_p('#salesBilling').removeClass('active');
            jquery_min_p('#setup').removeClass('active');
        }
    });
   

});
