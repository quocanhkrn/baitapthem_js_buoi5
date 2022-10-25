// EXERCISE 01
function ex01() {
  const RATE01 = 0.05
  const RATE02 = 0.1
  const RATE03 = 0.15
  const RATE04 = 0.2
  const RATE05 = 0.25
  const RATE06 = 0.3
  const RATE07 = 0.35

  let name = document.getElementById("name").value
  let totalIncome = parseInt(document.getElementById("totalIncome").value)
  let dependent = parseInt(document.getElementById("dependent").value)
  let result = document.getElementById("ex01_result")
  let taxedIncome = (totalIncome - 4 - dependent * 1.6)
  let tax01 = 0
  let tax02 = 0
  let tax03 = 0
  let tax04 = 0
  let tax05 = 0
  let tax06 = 0
  let tax07 = 0

  if (taxedIncome > 960) {
    tax01 = 60 * RATE01
    tax02 = 60 * RATE02
    tax03 = 90 * RATE03
    tax04 = 174 * RATE04
    tax05 = 240 * RATE05
    tax06 = 336 * RATE06
    tax07 = (taxedIncome - 960) * RATE07
  } else if (taxedIncome > 624) {
    tax01 = 60 * RATE01
    tax02 = 60 * RATE02
    tax03 = 90 * RATE03
    tax04 = 174 * RATE04
    tax05 = 240 * RATE05
    tax06 = (taxedIncome - 624) * RATE06
  } else if (taxedIncome > 384) {
    tax01 = 60 * RATE01
    tax02 = 60 * RATE02
    tax03 = 90 * RATE03
    tax04 = 174 * RATE04
    tax05 = (taxedIncome - 384) * RATE05
  } else if (taxedIncome > 210) {
    tax01 = 60 * RATE01
    tax02 = 60 * RATE02
    tax03 = 90 * RATE03
    tax04 = (taxedIncome - 210) * RATE04
  } else if (taxedIncome > 120) {
    tax01 = 60 * RATE01
    tax02 = 60 * RATE02
    tax03 = (taxedIncome - 120) * RATE03
  } else if (taxedIncome > 60) {
    tax01 = 60 * RATE01
    tax02 = (taxedIncome - 60) * RATE02
  } else {
    tax01 = taxedIncome * RATE01
  }

  let individualIncomeTax = (tax01 + tax02 + tax03 + tax04 + tax05 + tax06 + tax07) * 1000000
  individualIncomeTax = individualIncomeTax.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  taxedIncome = taxedIncome * 1000000
  taxedIncome = taxedIncome.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  result.classList.add("alert")
  result.innerHTML = `Thu nhập chịu thuế: ${taxedIncome} ₫`
  result.innerHTML += `<br/>`
  result.innerHTML += `Thuế TNCN: ${individualIncomeTax} ₫`
}

// EXERCISE 02
function checkClient() {
  if (clientGroup[0].checked) {
    connQttForm.style.display = "none"
  } else if (clientGroup[1].checked) {
    connQttForm.style.display = "block"
  }
}

globalThis.clientGroup = document.getElementsByName("clientGroup")
globalThis.connQttForm = document.getElementById("connQttForm")
clientGroup.forEach(radio => {
  radio.addEventListener("click", checkClient)
});

function ex02() {
  const familyFee = {
    receiptHandle: 4.5,
    basicService: 20.5,
    premChannel: 7.5
  }

  const enterpriseFee = {
    receiptHandle: 15,
    basicService01: 7.5,
    basicService02: 5,
    premChannel: 5
  }

  let clientID = document.getElementById("clientID").value
  let connQtt = parseInt(document.getElementById("connQtt").value)
  let channQtt = parseInt(document.getElementById("channQtt").value)
  let result = document.getElementById("ex02_result")
  let total = 0

  if (clientGroup[0].checked) {
    total = familyFee.receiptHandle + familyFee.basicService + familyFee.premChannel * channQtt
  } else if (clientGroup[1].checked) {
    let totalBasicService = 0
    if (connQtt > 10) {
      totalBasicService = enterpriseFee.basicService01 * 10 + enterpriseFee.basicService02 * (connQtt - 10)
      total = enterpriseFee.receiptHandle + totalBasicService + enterpriseFee.premChannel * channQtt
    }
  }
  result.classList.add("alert")
  result.innerHTML = `Tổng cộng tiền cáp: ${total.toLocaleString("en-US")
    }$`
}