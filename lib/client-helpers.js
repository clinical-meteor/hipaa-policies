Session.setDefault("companyName", "");


Template.registerHelper("companyName", function(argument){
  return Session.get("companyName");
});
