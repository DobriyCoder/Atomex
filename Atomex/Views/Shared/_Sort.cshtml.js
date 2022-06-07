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
