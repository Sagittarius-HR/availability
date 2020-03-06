import React from 'react';
import Dog from './dog.js';
import MeetThem from './meetThem.js'
import style from 'styled-components'

const StyledDiv = style.div`
  width: 100%;
  height: 320px;
  position absolute;
  left: 50%;
  margin-left: -600px;
  overflow: hidden;
`;

function Dogs(props) {

  const dogs = props.dogs;

  //if no location is given
  if (!props.location.on) {
    console.log('on is false')
    const refinedDogs = dogs.slice(0,4);

    const dogList = refinedDogs.map((dog) => {
      return <Dog dog={dog} key={dog._id}/>
    })
  
    return (
      <StyledDiv>
        <div className='dogList'>
          {dogList}
          <MeetThem dogs={props.dogs} breedId={props.breedId} />
        </div>
      </StyledDiv>
    );
  
    //if user location is given
  } else {
    console.log('on is true')
    //for now going to make the cut-off for nearby 200miles given the mock data

      //calculates the distance between two coordinates
    function findDistance(userLat, userLong, dogLat, dogLong) {
      var degDist = Math.sqrt(Math.pow(userLong-dogLong, 2) + Math.pow(userLat-dogLat, 2));

      //Note: 1 degree of latitude or longitude is approximately 69.2 miles 
      var mileDist = degDist*69.2

      return mileDist;
    }
      
    const locateDogs = props.dogs.map((dog)=>{
      var latAndLongitude = dog.location.split('/');
      var dist = findDistance(props.location.latitude, props.location.longitude, Number(latAndLongitude[0]), Number(latAndLongitude[1]));
      dog.dist = dist;
      return dog;
    });

    function sortByDistance(array) {
      var firstSwapIndex = 0;
      var swapped;
      var sorterCount = 0;
      var sorter = function(firstSwapIndex) {
        swapped = false;
        sorterCount+=1;

        for (var i = firstSwapIndex; i < array.length - 1; i++) { 
          if (array[i].dist > array[i+1].dist) {
            var temporary = array[i];
            array[i] = array[i+1];
            array[i+1] = temporary;
            //check if this is the first swap of the loop
            if (!swapped) {
              firstSwapIndex = 0 //going to have to look into this wanted to bypass some of the earlier numbers if a swap came later but duplicates make this idea break
            }
            //set swapped to true
            swapped = true;
            }
        }
        //if there are any swaps run the looping function again with the new position variable
        if (swapped || sorterCount === 0) {
          sorter(firstSwapIndex);
        }
        //else return the array
        return array;
      };
      return (sorter(firstSwapIndex));
    };

    var nearbyDogs = sortByDistance(locateDogs);
    var onlyNearbyDogs = [];

    //later when refactoring should put this before the sort to make 'n' smaller
    for (var i = 0; i < nearbyDogs.length; i++) {
      if (nearbyDogs[i].dist < 200) {
        onlyNearbyDogs.push(nearbyDogs[i]);
      }
    }


    const refinedDogs = onlyNearbyDogs.slice(0,4);

    const dogList = refinedDogs.map((dog) => {
      return <Dog dog={dog} key={dog._id}/>
    })
  
    return (
      <StyledDiv>
        <div className='dogList'>
          {dogList}
          <MeetThem dogs={props.dogs} breedId={props.breedId} />
        </div>
      </StyledDiv>
    );
  };

  

  

}

export default Dogs;