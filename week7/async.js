const promise = new Promise((resolve,reject)=>{
  const rand = Math.floor(Math.random()*2);
  console.log(rand);
  if(rand === 0){
    resolve();
  } else {
    reject();
  }
})


promise
.then(()=>{console.log('success')})
.catch(()=>{console.log('something went wrong')})

const fs = require('fs');

async function loadFile(){
  try {
    const data = await fs.promises.readFile('./test.txt',{encoding: 'utf-8'});
    console.log(data);
  } catch (error) {
    console.error(error)
  } finally {
    console.log('마침내')
  }
}

loadFile();