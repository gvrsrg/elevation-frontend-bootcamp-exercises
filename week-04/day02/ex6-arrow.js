const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

const commentOnWeather = temp => "It`s " + determineWeather(temp)