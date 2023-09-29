import './index.css'

function isPrime(number) {
  if (number <= 1) {
    return false
  }
  if (number <= 3) {
    return true
  }

  // Check if the number is divisible by 2 or 3
  if (number % 2 === 0 || number % 3 === 0) {
    return false
  }

  // Check for prime factors up to the square root of the number
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false
    }
  }

  return true
}

// ========================
let numsList = []

const addNumbers = value => {
  numsList = []
  for (let i = 1; i <= 250; i += 1) {
    numsList.push(value * 250 + i)
  }
}

const PrimeNumbers = props => {
  const {match} = props
  const {params} = match
  const {value} = params
  let primesCount = 0
  addNumbers(value)
  console.log(numsList)
  console.log(value)
  const primesList = numsList.map(eachNum => {
    if (isPrime(eachNum)) {
      primesCount += 1
      return {num: [eachNum, 'Prime']}
    }
    return {num: [eachNum, 'Not a Prime']}
  })
  console.log(primesList)
  return (
    <div className="main-container-p">
      {primesList.map(eachObj => {
        if (eachObj.num[1] === 'Prime') {
          return (
            <button
              className="number prime-num"
              key={eachObj.num[0]}
              type="button"
            >
              {eachObj.num[0]}
            </button>
          )
        }
        return (
          <button
            className="number non-prime-num"
            key={eachObj.num[0]}
            type="button"
          >
            {eachObj.num[0]}
          </button>
        )
      })}
    </div>
  )
}

export default PrimeNumbers
