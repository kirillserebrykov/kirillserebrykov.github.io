ball = document.querySelector("#ball");
let Check = () =>{
  let ques1 = document.myForm.q_1.value
  let ques2 = document.myForm.q_2.value 
  let ques3 = document.myForm.q_3.value
  let ques4 = document.myForm.q_3.value
  let ques5 = document.myForm.q_3.value
  let count = 0
  if (ques1 == "b")  count++
  if (ques2 == "a") count++
  if (ques3 == "a") count++ 
  if (ques4 == "a") count++
  if (ques5 == "a") count++
  console.log(count*2)
 
  ball.innerHTML = count
 
  
}
