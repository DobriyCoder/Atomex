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
