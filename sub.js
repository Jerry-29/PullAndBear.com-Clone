function runProgram(input) {
      input=input.trim().split("\n")
      var [N,K]=input[0].trim().split(" ").map(Number)
      var arr=input[1].trim().split(" ").map(Number)
      myfunction(N,arr,K)
      
      
  }
  function myfunction(N,arr,K){
      // first i will check for whole array
      var sum=0;
      for(var i=0;i<N;i++){
          sum+=arr[i]
      }
      if(sum%K!==0){
          console.log(1);
      }else{
          // i am checking for all elements
          var start=0
          var end=N-1
          var count=0;
          var sum=0;
          while(start<N && arr[start]%K==0){
              start++;
          }
          while(end>=0 && arr[end]%K==0){
              end--;
          }
          if(start==end){
              console.log(-1); // i get 0 subarray
          }else{
              var length=Math.max(N-1-start,end)
          }
       
          for(var i=0;i<length;i++){
              sum+=arr[i]
          }
          if(sum%K!==0){
              count++;
          }
          // for remianing window
          for(var i=length;i<N;i++){
              sum+=arr[i]
              sum-=arr[i-length]
              if(sum%K!==0){
                count++;
            }
          }
         
          console.log(count);
      }
      
      
      
  }
  if (process.env.USERNAME === "govin") {
    runProgram(`5 3
    2 4 3 5 1`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }