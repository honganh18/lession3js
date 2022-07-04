const dataExample = [
    {
      id: 9,
      first_name: "Robin",
      last_name: "Picford",
      email: "rpicford8@typepad.com",
      gender: "Female",
      age: 55,
      salary: 14975,
    },
    {
      id: 10,
      first_name: "Patsy",
      last_name: "Ochterlonie",
      email: "pochterlonie9@latimes.com",
      gender: "Female",
      age: 93,
      salary: 9716,
    },
    {
      id: 11,
      first_name: "Madelina",
      last_name: "Henrion",
      email: "mhenriona@alibaba.com",
      gender: "Female",
      age: 81,
      salary: 12932,
    },
  ];
  let result = dataExample.reduce((preValue, currentValue)=>{
    if(currentValue.id % 2 == 0){
     preValue.push(`${currentValue.first_name} ${currentValue.last_name}`)
     return preValue
    }
    return preValue;
  },[])
  console.log(result)
  /*
  buoc 1: firstname + lastname
  buoc 2: cho vao mang preValue dung push
  i=0: initValue = [], preValue = [], currentValue = {
      id: 9,
      first_name: "Robin",
      last_name: "Picford",
      email: "rpicford8@typepad.com",
      gender: "Female",
      age: 55,
      salary: 14975,
    },
    firstnam + lastname = "Robin Picford"
    preValue.push("Robin Picford")
   */


 