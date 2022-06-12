function zoom(src){
    const zoom_ = $("<div>").attr('id', 'zoom')
    zoom_.append($("<img>").attr('src', src))
    zoom_.on('click', function(){
        //zoom_.remove()
        zoom_.fadeOut(100, function(){ $(this).remove();});
    })
    $("body").append(zoom_)
}

$(function(){
    $('.images-list img').on('click', function(){
        zoom($(this).attr('src'))
    })
})