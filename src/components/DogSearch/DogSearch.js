import React from "react";
import "./DogSearch.css";
import Request from 'react-http-request';

const DogSearch = props =>


  <div
    className="hero text-center"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
  </div>;

	var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

	breedNames = [];

		//Loops through and returns the length of an object
		function countProperties (obj) {
		    var count = 0;

		    for (var property in obj) {
		        if (Object.prototype.hasOwnProperty.call(obj, property)) {
		            count++;
		        }
		    }

		    return count;
		}


		function testing() {
		    

		    var queryURL = "https://api.rescuegroups.org/http/v2.json";

		    var data = {
			  "apikey":"jvRBDfNp", // Use your API key here
			  "objectType":"animalBreeds",
   			"objectAction":"publicSearch",

			  "search":
				   {
				       "resultStart": "0",
				       "resultLimit": "5000",
				       "resultSort": "breedName",
				       "resultOrder": "asc",
				       "filters":
				       [
				           {
				               "fieldName": "breedSpecies",
				               "operation": "equals",
				               "criteria": "Dog"
				               
				           }
				       ],
				       "filterProcessing": "1",
				       "fields": ["breedID","breedName","breedSpecies","breedSpeciesID"]
				   }
			};

			var jsonData = JSON.stringify(data);
		    $.ajax({
		        url: queryURL,
		        method: "POST",
		        data: jsonData,
		        dataType: "json",
		        success: function (msg, status, jqXHR) {
		        	results = msg
				}

		      }).done(function(results) {
		      		console.log(results);

		      		function breedNameLoop() {
		      			var number = parseInt(results.foundRows);
		      			console.log("NUMBER IS " + number);


		      			//receives the length of the object by calling the countProperties
						var breedNameData = countProperties(results.data);

						var actualBreedName = results.data;

						console.log("The Number of breeds there are is " + breedNameData);
		      			
						//returns the names of all the breeds and pushes them into breedNames array
		      			if(breedNames.length <= number){
			      			for(i = 74; i <= 976; i++)	{
			      				if(actualBreedName[i] == undefined) {
			     					
			      					continue;

			      				}
			      				else {
			      					breedNames.push(actualBreedName[i].breedName);
			      				}
				      		}
		      			}
		      			else{console.log(breedNames.length);}

		      		}
		      		breedNameLoop();
		      		console.log(breedNames)
		        
		      });

		}
		testing();
export default DogSearch;
