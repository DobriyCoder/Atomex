jQuery(function ($) {
    //--------------------------------------
    // UI
    (function () {
        $('select').selectmenu();
    })();
    
    //--------------------------------------
});

// benefit
jQuery('.dc-benefit').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /benefit
//--------------------------------------------

// benefits
jQuery('.dc-benefits').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /benefits
//--------------------------------------------

// breadcrumbs
jQuery('.dc-breadcrumbs').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /breadcrumbs
//--------------------------------------------

// coin
jQuery('.dc-coin').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /coin
//--------------------------------------------

// coin-desc
jQuery('.dc-coin-desc').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /coin-desc
//--------------------------------------------

// coin-info
jQuery('.dc-coin-info').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /coin-info
//--------------------------------------------

// coins-line
jQuery('.dc-coins-line').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /coins-line
//--------------------------------------------

// coins-table
jQuery('.dc-coins-table').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /coins-table
//--------------------------------------------

// copyright
jQuery('.dc-copyright').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /copyright
//--------------------------------------------

// download-btn
jQuery('.dc-download-btn').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /download-btn
//--------------------------------------------

// download-wallet
jQuery('.dc-download-wallet').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /download-wallet
//--------------------------------------------

// exchange-widget
jQuery('.dc-exchange-widget').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /exchange-widget
//--------------------------------------------

// faq
jQuery('.dc-faq').dcTpl(function ($, Export) {
    var $self = $(this);

    $self.on("click", ".dcj-btn", function () {
        var $this = $(this);
        $this.toggleClass("dcg-active");
        $this.find(".dcj-content").slideToggle();
    });
});
// /faq
//--------------------------------------------

// filter
jQuery('.dc-filter').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /filter
//--------------------------------------------

// filter-form
jQuery('.dc-filter-form').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /filter-form
//--------------------------------------------

// footer
jQuery('.dc-footer').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /footer
//--------------------------------------------

// footer-desc
jQuery('.dc-footer-desc').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /footer-desc
//--------------------------------------------

// footer-menu
jQuery('.dc-footer-menu').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /footer-menu
//--------------------------------------------

// graph-widget
jQuery('.dc-graph-widget').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /graph-widget
//--------------------------------------------

// header
jQuery('.dc-header').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /header
//--------------------------------------------

// highlight
jQuery('.dc-highlight').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /highlight
//--------------------------------------------

// highlights
jQuery('.dc-highlights').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /highlights
//--------------------------------------------

// items-count-menu
jQuery('.dc-items-count-menu').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /items-count-menu
//--------------------------------------------

// logo
jQuery('.dc-logo').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /logo
//--------------------------------------------

// main-btn-menu
jQuery('.dc-main-btn-menu').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /main-btn-menu
//--------------------------------------------

// main-menu
jQuery('.dc-main-menu').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /main-menu
//--------------------------------------------

// main-title
jQuery('.dc-main-title').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /main-title
//--------------------------------------------

// main-title-info
jQuery('.dc-main-title-info').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /main-title-info
//--------------------------------------------

// mob-main-menu
jQuery('.dc-mob-main-menu').dcTpl(function ($, Export) {
    var $self = $(this);

    $self.on('click', '.dcj-btn', function () {
        $self.find('.dcj-slide').slideToggle();
        $(this).toggleClass('dcg-opened');
    });
});
// /mob-main-menu
//--------------------------------------------

// multy-table
jQuery('.dc-multy-table').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /multy-table
//--------------------------------------------

// pagination
jQuery('.dc-pagination').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /pagination
//--------------------------------------------

// pair-info
jQuery('.dc-pair-info').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /pair-info
//--------------------------------------------

// pairs-table
jQuery('.dc-pairs-table').dcTpl(function ($, Export) {
    var $self = $(this);

    $self.on("click", ".dcj-btn", function () {
        var $this = $(this);
        var url = $this.find('.dcj-link').attr('href');
        window.location.href = url;
    });
});
// /pairs-table
//--------------------------------------------

// popular-pairs
jQuery('.dc-popular-pairs').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /popular-pairs
//--------------------------------------------

// report
jQuery('.dc-report').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /report
//--------------------------------------------

// reports
jQuery('.dc-reports').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /reports
//--------------------------------------------

// soc-btns
jQuery('.dc-soc-btns').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /soc-btns
//--------------------------------------------

// sort
jQuery('.dc-sort').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /sort
//--------------------------------------------

// table-order-icons
jQuery('.dc-table-order-icons').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /table-order-icons
//--------------------------------------------

// test
jQuery('.dc-test').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /test
//--------------------------------------------

// title-menu
jQuery('.dc-title-menu').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /title-menu
//--------------------------------------------
