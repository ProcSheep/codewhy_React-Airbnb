import hyRequest from "@/service";

export function getHomeGoodPriceData(){
  return hyRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighscoreData(){
  return hyRequest.get({
    url: '/home/highscore'
  })
}

