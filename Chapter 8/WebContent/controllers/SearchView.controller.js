sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller){
 return Controller.extend("my.namespace.controllers.SearchView",{
   onInit:function(){
    this.getView()
     .byId('flightsList')
      .setModel(
       new sap.ui.model.json.JSONModel(
        {
          'FlightsSet':[]
        }
       ),
      'filteredFlights'
     );
  },

 searchButtonPressed:function(oEvent){
   var sValue = this.getView().byId('searchInput').getValue();
   this.getView().getModel().read('/FlightsSet',{
    filters:[new sap.ui.model.Filter({
     path: 'DepartureAirport',
     operator: sap.ui.model.FilterOperator.EQ,
     value1: sValue
    })],
   success:jQuery.proxy(this.handleValuesFetched,this),
   error:jQuery.proxy(this.handleError,this)
  });
 },
 
 handleValuesFetched: function(data){
   this.getView()
    .getModel('filteredFlights')
     .setProperty('/FlightsSet',data.results);
 },

 handleError: function(error){
  console.error(error);
 }
})
});
