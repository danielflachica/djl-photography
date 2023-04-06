var cbAccountId = "c2acw858";
var cbAppKeyPrefix = "51a4b000";
var cbDomain = 'https://' + cbAccountId + '.caspio.com';
var cbDataPagePrefix = cbDomain + "/dp/" + cbAppKeyPrefix;


// function - deploy DP asynchronously
function deployDP(containerID, appKey, params) {
    var params = params || "";
    var dataPageScript = "";

    var container = document.getElementById(containerID);
    container.innerHTML = "";

    //for multiple DataPages
    const appKeys = appKey.split(',');

    for (i = 0; i < appKeys.length; i++) {
        dataPageScript=document.createElement("script");
        dataPageScript.src = cbDataPagePrefix + appKeys[i].trim() + "/emb" + params;
        container.appendChild(dataPageScript);
    }

}

// function - deploy DP in modal
function openModal(modalTitle, appKey, params, size) {
    $("#cb-modal-body").html("");
    if (size) {
        $("#cb-modal .modal-dialog")
        .removeClass("modal-sm modal-md modal-lg modal-xl")
        .addClass(size);
    }

    deployDP("cb-modal-body", appKey, params);

    $("#cb-modal-title").html(modalTitle);
    $("#cb-modal").modal({
        backdrop: "static",
        keyboard: false,
    });
}

function closeModal() {
    $('#cb-modal').modal('hide');
}