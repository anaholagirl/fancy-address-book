$(document).ready(function() {
  $("#add-info").click(function() {
    $("#new-contactInfo").append('<div class="new-info">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +

                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +

                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-phone">Phone Number</label>' +
                                   '<input type="text" class="form-control new-phone">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-email">Email</label>' +
                                   '<input type="text" class="form-control new-email">' +
                                 '</div>' +
                               '</div>');
  });

 $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

    $(".new-info").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedPhone = $(this).find("input.new-phone").val();
      var inputtedEmail = $(this).find("input.new-email").val();

      var newInfo = { street: inputtedStreet,
                      city: inputtedCity,
                      state: inputtedState,
                      phone: inputtedPhone,
                      email: inputtedEmail };
      newContact.addresses.push(newInfo);
    });


    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");


    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });

      newContact.addresses.forEach(function(address) {
        $(".phone").append("<li>" + address.phone + "</li>");
      });

      newContact.addresses.forEach(function(address) {
        $(".email").append("<li>" + address.email + "</li>");
      });


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-phone").val("");
    $("input.new-email").val("");
  });
});
});
