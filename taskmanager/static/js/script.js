document.addEventListener('DOMContentLoaded', function() {
    // Sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

  // Modal trigger intialization
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    // Date picker init
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // Dropdown init
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // Collapsible init
    let collapse = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapse);
  });