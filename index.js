



function FetchData(){

    console.log(fetch("package.json").
        then((response => response.text())).
        then(data => JSON.parse(data)).
        then(data =>{

            const time = new Date();
    
        for(var i = 0; i < data.amazonMovies.length; i++){

            const movieImage = document.getElementById("pic" + i + "");
            movieImage.src = data.amazonMovies[i].pic;

            document.getElementById("name" + i + "").innerHTML = data.amazonMovies[i].name
            document.getElementById("director" + i + "").innerHTML = data.amazonMovies[i].director
            document.getElementById("actors" + i + "").innerHTML = data.amazonMovies[i].actors
            document.getElementById("year" + i + "").innerHTML = time.getFullYear() - data.amazonMovies[i].year
            document.getElementById("pic" + i + "").innerHTML = movieImage
            

        }
        })
    )
}

FetchData()





