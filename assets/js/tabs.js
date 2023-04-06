let $btnListView = $('#btn-list-view');
let $btnPhotoView = $('#btn-photo-view');
let $listViewCont = $('#gallery-list-view-container');
let $photoViewCont = $('#gallery-photo-view-container');

function toggleActiveState($btn1, $btn2) {
    if ($btn1.hasClass('btn-primary')) {
        $btn2.addClass('btn-primary').removeClass('btn-outline-primary');
        $btn1.removeClass('btn-primary').addClass('btn-outline-primary');
    }
}

function toggleSectionVisibility($sec1, $sec2) {
    if ($sec1.hasClass('d-none')) {
        $sec1.removeClass('d-none');
        $sec2.addClass('d-none');
    }
    else {
        $sec1.addClass('d-none');
        $sec2.removeClass('d-none');
    }
}

$btnListView.click(function () {
    toggleActiveState($btnPhotoView, $(this));
    toggleSectionVisibility($listViewCont, $photoViewCont);
});

$btnPhotoView.click(function () {
    toggleActiveState($btnListView, $(this));
    toggleSectionVisibility($listViewCont, $photoViewCont);
});