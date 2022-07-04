const person =
{
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
function displayName({ first, last, ...str }) {
    const { twitter, company } = str
    return `${first} ${last} ${twitter} ${company} `
}
console.log(displayName(person))