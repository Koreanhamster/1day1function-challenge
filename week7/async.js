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