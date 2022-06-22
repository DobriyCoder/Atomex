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
