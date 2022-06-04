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
