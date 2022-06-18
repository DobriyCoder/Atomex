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
