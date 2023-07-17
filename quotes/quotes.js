var quote=document.getElementById("quotes")
var writer=document.getElementById("writers")
var color=document.getElementById("quotes").style.color="red"
var color=document.getElementById("writers").style.color="red"

var ourQuotes=[
 
   "hoho",
    "bbbbbbb",
    "kokoko",
    "lplplp",
    "lololo",
    "totot",
    "moommoo"
  
]

var word=document.getElementById("word")

function getNextQuote(){
    var activeVal = quote.innerHTML;
    var filteredArr = [];
    for(var i = 0 ; i < ourQuotes.length ; i++){
        if (ourQuotes[i]!== activeVal){
            filteredArr.push(ourQuotes[i])
        }
    }
    console.log();

  
    var random=Math.floor(Math.random()*filteredArr.length);


  quote.innerHTML=filteredArr[random]

}



//    var r=Math.floor(Math.random()*255)
//    var g=Math.floor(Math.random()*255)
//    var b=Math.floor(Math.random()*255)
//    var word=Math.floor(Math.random()*ourQuotes.length)
//     // word.style.color=`rgb(${r},${g},${b})`
// for(var i=0;i<ourQuotes.length;i++){
//     quote.innerHTML=ourQuotes[word]
// }
  









    // var res=[]
    // for(var i=1;i<ourQuotes.length;i++){
    //     var random=Math.floor(Math.random()*ourQuotes.length)
    //     res.push(ourQuotes[random])
    // }
    // console.log(res)
    //  var uniq=[]
    //  for(var i=0;i<res.length;i++){
    //     if(!uniq.includes(res[i])){
    //         uniq.push(res[i])
    //     }
    //  }
    //  console.log(uniq)
    //  for(var i=0;i<uniq.length;i++){
    //     quote.innerHTML=uniq[i]
        // for(var i=0;i<uniq.length;i++){
        //     if(quote.innerHTML.includes(uniq[i]) ){
        //       uniq[i]=""
        //            }
           
        // }    


        
    //    if(quote.innerHTML==uniq[uniq.length-1]){
    //     quote.innerHTML=uniq[uniq.length-2]
    //    }

//    }
//    console.log(quote.innerHTML)

    // return res
//     var arr=[]
//  var rr=Math.floor(Math.random()*ourQuotes.length)
//    var pluse=quote.innerHTML=ourQuotes[rr]
//  arr.push(pluse)
 
//  for(j=0;j<ourQuotes.length;j++){
//     for(i=0;i<arr.length;i++){
       
//         if(arr[i]===(ourQuotes[j])){
//             arr[i]=ourQuotes[j]
//         }
//    }
//    console.log('arr' + arr)
//    console.log("our"+ ourQuotes)
  
//  }

 //quote.innerHTML=pluse


 
 
 // var randomNumber;
    // for(var l=0; l<ourQuotes.length; l++) {
    //      randomNumber = Math.floor(Math.random()*ourQuotes.length);  
    //     quote.innerHTML=randomNumber[quote]
   

    // }
    // for (var i = 0; i < ourQuotes.length; i++) {
    //     var count = 0;
    //     for (var j = 0; j < Math.floor(Math.random() * ourQuotes.length); j++) {
    //         count++;
    //     }
    //     console.log(count);

    // }
    // quote.innerHTML=Math.floor(Math.random())
    // var result = [];
    // for (var i=0, l=ourQuotes.length; i<l; i++)
    //     if (result.indexOf(ourQuotes[i]) === -1 && ourQuotes[i] !== '')
    //         result.push(ourQuotes[i].quote);
            
    //         console.log(result)
    //         for(var i=0 ;i<Math.floor(Math.random()*result.length);i++){
    //             console.log(result[i])
    //            quote.innerHTML=result[i]
                 
    //            console.log('res'+res)
          
    //         }
    // return result;

      //  quote.innerHTML=Math.floor(Math.random()*ourQuotes.length)
//   for(var i=0;i<ourQuotes.length;i++){
//     var random=Math.floor(Math.random()*ourQuotes.length)
//      for(var j=0;j<random.length;j++){
//         if(j==j+1){
//              j=ourQuotes[0]
             
//         }
        
//      }
   
   
//      quote.innerHTML=ourQuotes[random].quote.split(2)
//   }

//    var arr=[]
//    var uni=[]
//    var random=Math.floor(Math.random()*ourQuotes.length)
//    var unuiqe=quote.innerHTML=ourQuotes[random]
//     arr.push(unuiqe)
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]==arr[i]+1)
//         uni.push(arr[i])
//     }
//     console.log(arr)
    



   //    arr.push(ourQuotes[random])
//    console.log(arr)
//    var out=[];
//    var count=0;
//    var start=false;
//    for(i=0;i<arr.length;i++){
//     for(j=0;j<out.length;j++){
//         if(arr[i]==out[j]){
//             start=true
//         }
//     }
//     count++
//     if(count==1&&start==false){
//         out.push(arr[i])
//     }
//     start=false;
//     count=0
//    }
//    console.log(out)
//    quote.innerHTML=ourQuotes[quote]
//    var unique=[];
//    for(i=0;i<random.length;i++){
//     if(unique.indexOf(random[i])===-1){
//         unique.push(random[i])
       
        
//     }
    
//    }
  
//    return unique
   

   // for(var i=0;i<random.length;i++) {
    //     for(var j=0;j<random.length;i++){
    //         if(random[j]==random[i+1]){
    //             random[j]==random[i+1]
    //             console.log("randjj"+random[j+1])
    //             console.log("randii"+random[i])
    //          }
    //     }
    // }
   
    // if(res.length[i]==res.length[i]){
    //     res++
    //     console.log("koko")
    // }
    //   if(ourQuotes[i]==res.length){
    //     res--
    //   }
   
    // for(var i=0;i<ouruuQuotes.length;i++){
    //     for(var j=0;j<ourQuotes.length;j++){
    //         if(ouruuQuotes[i].value===ourQuotes[j].value)
    //           ouruuQuotes++
    //     }
    // }
    // var ouruuQuotes=quote.innerHTML=ourQuotes[Math.floor(Math.random()*ourQuotes.length)]
    
    //  for(var i=0;i<ouruuQuotes.length;i++){
    //     if(ouruuQuotes[i]==ourQuotes[i]){
    //         ouruuQuotes[i]==ourQuotes[i]+1
    //     }
    //  }
    
    //  console.log('res'+ouruuQuotes)
    //  var nums = [1,2,3,4,5,6,7,8,9,10],
//     ranNums = [],
//     i = ourQuotes.length,
//     j = 0;

// while (i--) {
//     j = Math.floor(Math.random() * (i+1));
//     ranNums.push(ourQuotes[j]);
//     ourQuotes.splice(j,1);
    
// }
// quote.innerHTML=ourQuotes
// console.log("jojojo" +ourQuotes )
  
//  var res=[];
//  for(var i=0;i<ourQuotes.length;i++){
//      random =Math.floor(Math.random()*ourQuotes.length);
//     quote.innerHTML=res.push(ourQuotes[random])
//     console.log(res)
//  }

//  return res
   





