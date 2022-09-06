 
 let num=1234321;

   let bag="";
   
   let bag2="";
   
   bag=bag+num;
   
   for(let i=bag.length-1;i>=0;i--){
       bag2=bag2+bag[i];
   }
   
   if(bag2==num){
       console.log("Yes");
   }else {
       console.log("No");
   } 