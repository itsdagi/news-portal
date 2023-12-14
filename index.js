const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-14&sortBy=publishedAt&apiKey=b7c134c9560e48a3ab450f3d2ab5b63b";

async function dataRequest(){
  try{const response = await fetch(url);
  const data = response.json();

  return data;
     }catch(error){
    console.log(error);
     }
}

dataRequest(url).then(data => {
    data.articles.forEach(item =>{console.log(item)})
})