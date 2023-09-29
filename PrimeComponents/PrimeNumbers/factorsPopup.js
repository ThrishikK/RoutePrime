import Popup from 'reactjs-popup'
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

const renderPrimeFactors = value => {
  const factsList = [1, value]
  return factsList.join(' , ')
}

const renderNonPrimeFactors = number => {
  const factors = []

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      factors.push(i)
    }
  }

  return factors.join(' , ')
}

const factorsPrimeNumbers = props => {
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
    <div className="new-main-added">
      <h1 className="main-head">{`Total Primes in the range  ${
        value * 250 + 1
      } to ${(value + 1) * 250} is ${primesCount}`}</h1>

      <div className="main-container-p">
        {primesList.map(eachObj => {
          if (eachObj.num[1] === 'Prime') {
            return (
              <Popup
                modal
                trigger={
                  <button
                    className="number prime-num"
                    key={eachObj.num[0]}
                    type="button"
                  >
                    {eachObj.num[0]}
                  </button>
                }
              >
                {close => (
                  <div className="popup-container-factors">
                    <h1>{renderPrimeFactors(eachObj.num[0])}</h1>
                    <button
                      className="popup-close-btn"
                      type="button"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </div>
                )}
              </Popup>
            )
          }
          return (
            <Popup
              modal
              trigger={
                <button
                  className="number non-prime-num"
                  key={eachObj.num[0]}
                  type="button"
                >
                  {eachObj.num[0]}
                </button>
              }
            >
              {close => (
                <div className="popup-container-factors">
                  <h1>Factors of {eachObj.num[0]} are</h1>
                  <h1>{renderNonPrimeFactors(eachObj.num[0])}</h1>
                  <button
                    className="popup-close-btn"
                    type="button"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
              )}
            </Popup>
          )
        })}
      </div>
    </div>
  )
}

export default factorsPrimeNumbers
