

//     // window.location.href = "searchMovie.html";

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("example").style.color = "#6366f1";
//     const search = document.getElementById('input');
//     // const resultDisplay = document.getElementById('example');
//     search.addEventListener('input', function () {
//         // resultDisplay.innerHTML = search.value;

//         fetch("package.json").
//         then((response => response.text())).
//         then(data => JSON.parse(data)).
//         then(data =>{

//      //         document.getElementById("finde").addEventListener("click", function() {
//     //             document.getElementById("example").style.color = "#6366f1"; 

//                 // search = document.getElementById("input").value;

//                 var index1;
//                 var index2;
//                 var index3;

//                 var count = 0;
//                 for(var i = 0; i < data.amazonMovies.length; i++){ 
//                     if(data.amazonMovies[i].name.includes(search) || data.amazonMovies[i].director.includes(search)){
//                         count ++;
//                         if(count == 1)
//                             index1 = i;
//                         if(count == 2)
//                             index2 = i;
//                         if(count == 3)
//                             index3 = i;
//                     }
//                     for(var j = 0; j < data.amazonMovies[i].actors.length; j++){
//                         if(data.amazonMovies[i].actors[j].includes(search)){
//                             count ++;
//                             if(count == 1)
//                             index1 = i;
//                         if(count == 2)
//                             index2 = i;
//                         if(count == 3)
//                             index3 = i;
//                             break;
//                         }
//                     }
//                 }
    
//                 if(count == 1){
//                         const movieImage1 = document.getElementById("imgCenter");
//                         movieImage1.src = data.amazonMovies[index1].pic;
            
//                         document.getElementById("nameCenter").innerHTML = data.amazonMovies[index1].name
//                         document.getElementById("directorCenter").innerHTML = data.amazonMovies[index1].director
//                         document.getElementById("actorsCenter").innerHTML = data.amazonMovies[index1].actors
//                         document.getElementById("imgCenter").innerHTML = movieImage1
//                 }
//                 else if(count == 2){
//                     for(var i = 0; i < data.amazonMovies.length; i++){

//                         const movieImage1 = document.getElementById("imgCenter");
//                         movieImage1.src = data.amazonMovies[index1].pic;

//                         document.getElementById("nameCenter").innerHTML = data.amazonMovies[index1].name
//                         document.getElementById("directorCenter").innerHTML = data.amazonMovies[index1].director
//                         document.getElementById("actorsCenter").innerHTML = data.amazonMovies[index1].actors
//                         document.getElementById("imgCenter").innerHTML = movieImage1


//                         const movieImage2 = document.getElementById("imgLeft");
//                         movieImage2.src = data.amazonMovies[index2].pic;
            
//                         document.getElementById("nameLeft").innerHTML = data.amazonMovies[index2].name
//                         document.getElementById("directorLeft").innerHTML = data.amazonMovies[index2].director
//                         document.getElementById("actorsLeft").innerHTML = data.amazonMovies[index2].actors
//                         document.getElementById("imgLeft").innerHTML = movieImage2

//                     }
//                 }
//                 else {
//                     for(var i = 0; i < data.amazonMovies.length; i++){
//                         const movieImage1 = document.getElementById("imgCenter");
//                         movieImage1.src = data.amazonMovies[index1].pic;

//                         document.getElementById("nameCenter").innerHTML = data.amazonMovies[index1].name
//                         document.getElementById("directorCenter").innerHTML = data.amazonMovies[index1].director
//                         document.getElementById("actorsCenter").innerHTML = data.amazonMovies[index1].actors
//                         document.getElementById("imgCenter").innerHTML = movieImage1


//                         const movieImage2 = document.getElementById("imgLeft");
//                         movieImage2.src = data.amazonMovies[index2].pic;
            
//                         document.getElementById("nameLeft").innerHTML = data.amazonMovies[index2].name
//                         document.getElementById("directorLeft").innerHTML = data.amazonMovies[index2].director
//                         document.getElementById("actorsLeft").innerHTML = data.amazonMovies[index2].actors
//                         document.getElementById("imgLeft").innerHTML = movieImage2


//                         const movieImage3 = document.getElementById("imgRight");
//                         movieImage3.src = data.amazonMovies[index3].pic;

//                         document.getElementById("nameRight").innerHTML = data.amazonMovies[index3].name
//                         document.getElementById("directorRight").innerHTML = data.amazonMovies[index3].director
//                         document.getElementById("actrosRight").innerHTML = data.amazonMovies[index3].actors
//                         document.getElementById("imgRight").innerHTML = movieImage3
//                     }
//                 }
//     //         });

            
//         })







//     });
// });



FetchSearch(); 

async function FetchSearch(){

    fetch("package.json").
        then((response => response.text())).
        then(data => JSON.parse(data)).
        then(data =>{

            //     Search();
            // async function Search(){
            //     var search;
            //     search = document.getElementById("input").value;
            //     document.getElementById("example").style.color = "#6366f1";
            //     for(var i = 0; i < data.amazonMovies.length; i++){
            //         if(search != "" && data.amazonMovies[i].name.includes(search)){
            //             document.getElementById("example").innerHTML = "yeesssss"; 
            //             break;
            //         }
            //     }
            // }

            var search;
            document.getElementById("finde").addEventListener("click", function() {
                document.getElementById("example").style.color = "#6366f1"; 

                search = document.getElementById("input").value;

                var index1;
                var index2;
                var index3;
                var count = 0;
                for(var i = 0; i < data.amazonMovies.length; i++){
                    if(search == data.amazonMovies[i].name || search == data.amazonMovies[i].director){
                        count ++;
                        if(count == 1)
                            index1 = i;
                        if(count == 2)
                            index2 = i;
                        if(count == 3)
                            index3 = i;
                    }
                    for(var j = 0; j < data.amazonMovies[i].actors.length; j++){
                        if(search == data.amazonMovies[i].actors[j]){
                            count ++;
                            if(count == 1)
                            index1 = i;
                        if(count == 2)
                            index2 = i;
                        if(count == 3)
                            index3 = i;
                            break;
                        }
                    }
                }
    
                if(count == 0){
                    alert("!!!   No Movies Found   !!!");
                } else if(count == 1){
                        const movieImage1 = document.getElementById("imgCenter");
                        movieImage1.src = data.amazonMovies[index1].pic;
            
                        document.getElementById("nameCenter").innerHTML = data.amazonMovies[index1].name
                        document.getElementById("directorCenter").innerHTML = data.amazonMovies[index1].director
                        document.getElementById("actorsCenter").innerHTML = data.amazonMovies[index1].actors
                        document.getElementById("imgCenter").innerHTML = movieImage1
                }
                else if(count == 2){
                    for(var i = 0; i < data.amazonMovies.length; i++){
                        const movieImage1 = document.getElementById("imgCenter");
                        movieImage1.src = data.amazonMovies[index1].pic;

                        document.getElementById("nameCenter").innerHTML = data.amazonMovies[index1].name
                        document.getElementById("directorCenter").innerHTML = data.amazonMovies[index1].director
                        document.getElementById("actorsCenter").innerHTML = data.amazonMovies[index1].actors
                        document.getElementById("imgCenter").innerHTML = movieImage1

                        const movieImage2 = document.getElementById("imgLeft");
                        movieImage2.src = data.amazonMovies[index2].pic;
            
                        document.getElementById("nameLeft").innerHTML = data.amazonMovies[index2].name
                        document.getElementById("directorLeft").innerHTML = data.amazonMovies[index2].director
                        document.getElementById("actorsLeft").innerHTML = data.amazonMovies[index2].actors
                        document.getElementById("imgLeft").innerHTML = movieImage2

                    }
                }
                else {
                    for(var i = 0; i < data.amazonMovies.length; i++){
                        const movieImage1 = document.getElementById("imgCenter");
                        movieImage1.src = data.amazonMovies[index1].pic;

                        document.getElementById("nameCenter").innerHTML = data.amazonMovies[index1].name
                        document.getElementById("directorCenter").innerHTML = data.amazonMovies[index1].director
                        document.getElementById("actorsCenter").innerHTML = data.amazonMovies[index1].actors
                        document.getElementById("imgCenter").innerHTML = movieImage1


                        const movieImage2 = document.getElementById("imgLeft");
                        movieImage2.src = data.amazonMovies[index2].pic;
            
                        document.getElementById("nameLeft").innerHTML = data.amazonMovies[index2].name
                        document.getElementById("directorLeft").innerHTML = data.amazonMovies[index2].director
                        document.getElementById("actorsLeft").innerHTML = data.amazonMovies[index2].actors
                        document.getElementById("imgLeft").innerHTML = movieImage2


                        const movieImage3 = document.getElementById("imgRight");
                        movieImage3.src = data.amazonMovies[index3].pic;

                        document.getElementById("nameRight").innerHTML = data.amazonMovies[index3].name
                        document.getElementById("directorRight").innerHTML = data.amazonMovies[index3].director
                        document.getElementById("actrosRight").innerHTML = data.amazonMovies[index3].actors
                        document.getElementById("imgRight").innerHTML = movieImage3
                    }
                }
            });

        })
    
}