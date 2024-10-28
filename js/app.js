
$(document).ready(function() {
    // Function to load the page into the main content area
    function loadPage(page) {
        $('#mainContent').load(page);
    }

    // Event listeners for navigation links
    $('#itemManagementLink').click(function(e) {
        e.preventDefault();
        initForm();
        loadPage('./pages/item_management.html');

    });

    $('#inwardManagementLink').click(function(e) {
        e.preventDefault();
        initForm();
        loadPage('./pages/inward_management.html');
    });

    $('#outwardManagementLink').click(function(e) {
        e.preventDefault();
        initForm();
        loadPage('./pages/outward_management.html');
    });

    $('#reportPageLink').click(function(e) {
        e.preventDefault();
        initForm();
        loadPage('./pages/report_page.html');
    });
});

function initForm(){
    localStorage.removeItem('item_rec');
    localStorage.removeItem('rec');
    localStorage.removeItem('out_rec')
}

