const PASSWORDS = [
  ,"nova"
  ,"oregon"
  ,"rhythm"
  ,"tahoe"
  ,"harlem"
  ,"precious"
  ,"orange juice"
  ,"intel"
  ,"negated"
  ,"toothless"
  ,"northpoint"
]

const reveal = (i) => {
  let pinput = document.querySelector(`#i${i}`).value.toLowerCase()
  let expected = PASSWORDS[i]
  console.log(`Attempting question #${i} with password "${pinput}", expecting "${expected}"`)
  if (pinput == expected) {
    console.log("Success!")
    let next = document.querySelector(`#s${i}`)
    next.removeAttribute("hidden")
  }
  else console.log("Failure.")
}
