// sort
jQuery('.dc-sort').dcTpl(function ($, Export) {
    var $self = $(this);
    $self.on('change', 'select', function () {
        var val = $(this).val();
        window.location.href += '?order=' + val + '&order_type=desk';
    });
});
// /sort
//--------------------------------------------
