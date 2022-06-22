jQuery(function ($) {
    //--------------------------------------
    // UI
    (function () {
        $('select').selectmenu({
            change: function (event, ui) {
                $(this).change();
            }
        });


            
    })();
    //--------------------------------------
    // download links
    (function () {
        const desktopReleasesUrl =
            "https://api.github.com/repos/atomex-me/atomex.client.desktop/releases";
        const baseDownloadLinkAddr =
            "https://github.com/atomex-me/atomex.client.desktop/releases/download";

        const winDownloadLinkElement = document.querySelector("#win-installer");
        const macDownloadLinkElement = document.querySelector("#mac-installer");
        const linuxDownloadLinkElement = document.querySelector("#linux-installer");

        fetch(desktopReleasesUrl)
            .then((response) => response.json())
            .then((releases) => releases.filter((release) => !release.prerelease))
            .then((response) => {
                const releaseVer = response[0].tag_name;
                const windowsInstallerFilename = `Atomex.Client-${releaseVer}.0-x64.msi`;
                const macInstallerFilename = `Atomex.${releaseVer}.dmg`;
                const linuxInstallerFilename = `Atomex_${releaseVer}_amd64.deb`;

                const winDownloadLinkAddress = `${baseDownloadLinkAddr}/${releaseVer}/${windowsInstallerFilename}`;
                const macDownloadLinkAddress = `${baseDownloadLinkAddr}/${releaseVer}/${macInstallerFilename}`;
                const linuxDownloadLinkAddress = `${baseDownloadLinkAddr}/${releaseVer}/${linuxInstallerFilename}`;

                /*winDownloadLinkElement.href = winDownloadLinkAddress;
                macDownloadLinkElement.href = macDownloadLinkAddress;
                linuxDownloadLinkElement.href = linuxDownloadLinkAddress;*/

                $(document).trigger("dc_download_links", {
                    win: winDownloadLinkAddress,
                    mac: macDownloadLinkAddress,
                    linux: linuxDownloadLinkAddress,
                });
            });
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

// benefit_one
jQuery('.dc-benefit_one').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /benefit_one
//--------------------------------------------

// benefit_three
jQuery('.dc-benefit_three').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /benefit_three
//--------------------------------------------

// benefit_two
jQuery('.dc-benefit_two').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /benefit_two
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

// coin-pair
jQuery('.dc-coin-pair').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /coin-pair
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

    /*$self.on("click", ".dcj-btn", function () {
        var $this = $(this);
        var url = $this.find('.dcj-link').attr('href');
        window.location.href = url;
    });*/
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

    var btn_css = '.dcj-btn';
    var curr_img_css = '.dcj-curr-img';
    var curr_link_css = '.dcj-curr-link';
    var select_css = '.dcj-select';
    var item_css = '.dcj-item';
    var win_css = '.dcj-win';
    var mac_css = '.dcj-mac';
    var linux_css = '.dcj-linux';
    var opened_class = 'dcg-opened';

    $(document).on("dc_download_links", function (e, data) {
        $self.find(win_css).attr('data-url', data.win);
        $self.find(mac_css).attr('data-url', data.mac);
        $self.find(linux_css).attr('data-url', data.linux);

        $self.find(curr_link_css).attr('href', data.win);
    });


    $self.on('click', btn_css, function (e) {
        e.stopPropagation();
        e.preventDefault();
        Export.toggle();
    });

    $('body').on('click', function () {
        Export.close();
    });

    $self.on('click', item_css, function (e) {
        var $this = $(this);
        e.preventDefault();
        var img = $this.attr('data-img');
        var url = $this.attr('data-url');
        var title = $this.attr('data-title');
        var $curr_img = $self.find(curr_img_css);
        var $curr_link = $self.find(curr_link_css);

        $curr_img.attr('src', img);
        $curr_img.attr('alt', title);
        $curr_link.attr('href', url);
        $curr_link.html(title);
    });

    Export.open = function () {
        $self.find(select_css).slideDown();
        $self.addClass(opened_class);
    };

    Export.close = function () {
        $self.find(select_css).slideUp();
        $self.removeClass(opened_class);
    }

    Export.toggle = function () {
        $self.find(select_css).slideToggle();
        $self.toggleClass(opened_class);
    }
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

// footer-additional
jQuery('.dc-footer-additional').dcTpl(function ($, Export) {
   var $self = $(this);
});
// /footer-additional
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

// seo-texts
jQuery('.dc-seo-texts').dcTpl(function ($, Export) {
    var $self = $(this);

    var more_css = '.dcj-more';
    var text_css = '.dcj-text';
    var height_attr = 'data-height';
    var delay = 300;

    var max_height = $self.attr('data-max');
    var expand_text = $self.attr('data-expand');
    var collapse_text = $self.attr('data-collapse');
    var collapsed_class = 'dc-seo-texts__text_collapsed';

    $self.find(text_css).each(function (i, item)
    {
        var $self = $(item);
        var height = $self.height();

        if (height < max_height - 5)
            $self.parent().find(more_css).hide();
        else {
            $self.addClass(collapsed_class);
            $self.attr(height_attr, height);
            $self.height(max_height);
        }
    });

    $self.on('click', more_css, function (e) {
        e.preventDefault();

        var $self = $(this);
        var $text = $self.parent().find(text_css);

        if ($text.hasClass(collapsed_class)) {
            var height = $text.attr(height_attr);
            $text.removeClass(collapsed_class);
            $text.height(height);
            $self.html(collapse_text);
        } else {
            $text.height(max_height);

            setTimeout(function () {
                $text.addClass(collapsed_class);
                $self.html(expand_text);
            }, delay);
        }
    });
});
// /seo-texts
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
    $self.on('change', 'select', function () {
        var val = $(this).val();
        console.log(window.location);
        window.location.search = '?order=' + val + '&order_type=desc';
    });
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
