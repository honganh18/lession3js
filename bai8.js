const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '15',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

console.log(characters.reduce((preValue, currentValue)=>{
  preValue.push(`${currentValue.name}`)
  return preValue;
},[]))

console.log(characters.reduce((preValue, currentValue)=>{
    preValue.push(`${currentValue.height}`)
    return preValue;
  },[]))

  const userHeight = characters.filter((item) =>{
    return item.height < 100
 })
 console.log(userHeight)

 const userMass = characters.filter((item) =>{
    return item.mass > 100
 })
 console.log(userMass)


 
 const sortHeight = characters;
sortHeight.sort((a,b)=>{
    if(a.height>b.height) return 1;
    else if (a.height === b.height) return 0;
    else return -1;
})
console.log(sortHeight)

const sortMass = characters;
sortMass.sort((a,b)=>{
    if(a.mass>b.mass) return 1;
    else if (a.mass === b.mass) return 0;
    else return -1;
})
console.log(sortMass)


