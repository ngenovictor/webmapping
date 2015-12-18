$("#searchform").submit(function(event){
          alert($("#query").val());
            var coordinates=getCordinates($("#query").val());
            searchre();
            
        });
        function getCordinates(searchTerm)
        {
          var coordinates = [];
          $(function() {
            var availableTags = ["victor","Kenyatta"];
             // create array here
            $.each(building.features, function (index,properties) {
              if(properties.properties.name===searchTerm)
              {
                coordinates=properties.geometry.coordinates;
                console.log(coordinates)
              }

            });
          });
          return coordinates;

        }
        $(function(event) {
          var availableTags = ["victor","Kenyatta"];
          var locations = []; // create array here
          $.each(building.features, function (index,properties) {
            if(properties.properties.name)
            {
              locations.push(properties.properties.name);
            }

          });

          $( "#query" ).autocomplete({
            source: locations
          });
          

        });