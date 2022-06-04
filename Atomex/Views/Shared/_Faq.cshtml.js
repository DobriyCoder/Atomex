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
