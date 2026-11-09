const display = document.querySelector("#display"); // 화면에 표시할 요소를 찾습니다.
const buttons = document.querySelector(".buttons"); // 버튼 묶음을 찾아 클릭을 처리합니다.
let displayValue = "0"; // 화면에 표시 중인 숫자를 저장합니다.
let savedValue = null; // 연산 전에 입력한 숫자를 저장합니다.
let savedOperator = null; // 선택한 사칙연산 기호를 저장합니다.
let startNewNumber = false; // 다음 숫자 입력 때 화면을 새로 시작할지 저장합니다.
const numberWords = { "0": "영", "1": "하나", "2": "둘", "3": "셋", "4": "넷", "5": "다섯", "6": "여섯", "7": "일곱", "8": "여덟", "9": "아홉" }; // 숫자 버튼별 한국어 읽기를 저장합니다.
const operatorWords = { "+": "더하기", "-": "빼기", "*": "곱하기", "/": "나누기" }; // 연산 버튼별 한국어 읽기를 저장합니다.
function speakButtonText(text) { // 버튼 이름을 한국어 음성으로 읽습니다.
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) { // 브라우저가 음성 합성을 지원하는지 확인합니다.
    console.warn("이 브라우저에서는 한국어 음성 안내를 지원하지 않습니다."); // 음성 기능을 사용할 수 없음을 알립니다.
    return; // 지원하지 않으면 소리 재생을 건너뜁니다.
  } // 음성 기능 확인을 마칩니다.
  const speech = new SpeechSynthesisUtterance(text); // 읽을 내용을 음성 안내로 준비합니다.
  speech.lang = "ko-KR"; // 한국어 발음으로 읽도록 설정합니다.
  window.speechSynthesis.speak(speech); // 버튼 이름을 음성으로 재생합니다.
} // 한국어 음성 안내 함수를 마칩니다.
function updateDisplay() { // 현재 숫자를 화면에 표시하는 함수입니다.
  display.textContent = displayValue; // 표시 요소의 글자를 현재 숫자로 바꿉니다.
} // 화면 표시 함수를 마칩니다.
function enterDigit(digit) { // 버튼으로 누른 숫자를 입력하는 함수입니다.
  if (startNewNumber) { // 새 숫자를 입력할 차례인지 확인합니다.
    displayValue = digit; // 이전 숫자 대신 새 숫자를 표시합니다.
    startNewNumber = false; // 새 숫자 입력 상태를 끝냅니다.
  } else if (displayValue === "0") { // 화면이 0이면 앞에 0이 붙지 않게 확인합니다.
    displayValue = digit; // 화면의 0을 입력한 숫자로 바꿉니다.
  } else { // 이미 숫자가 입력된 상태를 처리합니다.
    displayValue += digit; // 새 숫자를 현재 숫자 뒤에 붙입니다.
  } // 숫자 입력 조건을 마칩니다.
  updateDisplay(); // 바뀐 숫자를 화면에 표시합니다.
} // 숫자 입력 함수를 마칩니다.
function calculate() { // 저장한 숫자와 현재 숫자로 계산하는 함수입니다.
  if (savedValue === null || savedOperator === null) { // 계산에 필요한 값이 있는지 확인합니다.
    return; // 연산 기호나 첫 숫자가 없으면 계산하지 않습니다.
  } // 계산 준비 확인을 마칩니다.
  const currentValue = Number(displayValue); // 화면의 숫자를 계산용 숫자로 바꿉니다.
  let result; // 계산 결과를 담을 변수를 준비합니다.
  if (savedOperator === "+") { // 더하기 연산인지 확인합니다.
    result = savedValue + currentValue; // 두 숫자를 더합니다.
  } else if (savedOperator === "-") { // 빼기 연산인지 확인합니다.
    result = savedValue - currentValue; // 두 번째 숫자를 첫 번째 숫자에서 뺍니다.
  } else if (savedOperator === "*") { // 곱하기 연산인지 확인합니다.
    result = savedValue * currentValue; // 두 숫자를 곱합니다.
  } else if (currentValue === 0) { // 나누기에서 0으로 나누는지 확인합니다.
    displayValue = "0으로 나눌 수 없습니다"; // 잘못된 계산임을 화면에 표시합니다.
    savedValue = null; // 이전 숫자를 지웁니다.
    savedOperator = null; // 이전 연산 기호를 지웁니다.
    startNewNumber = true; // 다음 숫자 입력이 새 계산을 시작하게 합니다.
    updateDisplay(); // 오류 안내를 화면에 표시합니다.
    return; // 0 나누기 계산을 중단합니다.
  } else { // 나누기 연산을 처리합니다.
    result = savedValue / currentValue; // 첫 번째 숫자를 두 번째 숫자로 나눕니다.
  } // 사칙연산을 마칩니다.
  displayValue = String(Number(result.toFixed(10))); // 결과의 불필요한 소수 자릿수를 줄입니다.
  savedValue = null; // 계산이 끝난 첫 번째 숫자를 지웁니다.
  savedOperator = null; // 계산이 끝난 연산 기호를 지웁니다.
  startNewNumber = true; // 다음 숫자 입력이 새 계산을 시작하게 합니다.
  updateDisplay(); // 계산 결과를 화면에 표시합니다.
} // 계산 함수를 마칩니다.
function clearCalculator() { // 계산기 입력과 상태를 모두 지우는 함수입니다.
  displayValue = "0"; // 화면 값을 처음 상태로 되돌립니다.
  savedValue = null; // 저장한 숫자를 지웁니다.
  savedOperator = null; // 저장한 연산 기호를 지웁니다.
  startNewNumber = false; // 새 숫자 입력 상태를 초기화합니다.
  updateDisplay(); // 초기 숫자 0을 화면에 표시합니다.
} // 전체 지우기 함수를 마칩니다.
function chooseOperator(operator) { // 다음에 실행할 사칙연산을 선택하는 함수입니다.
  if (!Number.isFinite(Number(displayValue))) { // 화면에 오류 문구가 있으면 숫자로 계산하지 않게 확인합니다.
    clearCalculator(); // 숫자 상태를 초기화해 다음 연산을 안전하게 시작합니다.
  } // 오류 화면 확인을 마칩니다.
  if (savedValue !== null && savedOperator !== null && !startNewNumber) { // 중간 계산이 필요한지 확인합니다.
    calculate(); // 연산자를 바꾸기 전에 앞선 계산을 먼저 처리합니다.
  } // 중간 계산 확인을 마칩니다.
  savedValue = Number(displayValue); // 현재 숫자를 다음 계산의 첫 숫자로 저장합니다.
  savedOperator = operator; // 누른 연산 기호를 저장합니다.
  startNewNumber = true; // 다음 숫자를 두 번째 숫자로 입력하게 합니다.
} // 연산 선택 함수를 마칩니다.
buttons.addEventListener("click", function (event) { // 버튼 묶음의 클릭을 한곳에서 처리합니다.
  const button = event.target.closest("button"); // 실제로 눌린 버튼을 찾습니다.
  if (!button) { // 버튼 바깥 영역을 눌렀는지 확인합니다.
    return; // 버튼이 아니면 아무 동작도 하지 않습니다.
  } // 버튼 확인을 마칩니다.
  if (button.dataset.digit !== undefined) { // 숫자 버튼인지 확인합니다.
    speakButtonText(numberWords[button.dataset.digit]); // 숫자를 요청한 한국어 읽기로 말합니다.
  } else if (button.dataset.operator) { // 사칙연산 버튼인지 확인합니다.
    speakButtonText(operatorWords[button.dataset.operator]); // 연산 기호를 한국어로 읽습니다.
  } else if (button.dataset.action === "equals") { // 계산 버튼인지 확인합니다.
    speakButtonText("결과"); // 계산 버튼을 누른 것을 음성으로 안내합니다.
  } else if (button.dataset.action === "clear") { // 지우기 버튼인지 확인합니다.
    speakButtonText("지우기"); // 초기화 버튼을 누른 것을 음성으로 안내합니다.
  } // 버튼 종류별 음성 안내를 마칩니다.
  if (button.dataset.digit !== undefined) { // 숫자 버튼인지 확인합니다.
    enterDigit(button.dataset.digit); // 누른 숫자를 입력합니다.
  } else if (button.dataset.operator) { // 사칙연산 버튼인지 확인합니다.
    chooseOperator(button.dataset.operator); // 누른 연산 기호를 선택합니다.
  } else if (button.dataset.action === "equals") { // 계산 버튼인지 확인합니다.
    calculate(); // 저장된 계산을 실행합니다.
  } else if (button.dataset.action === "clear") { // 지우기 버튼인지 확인합니다.
    clearCalculator(); // 모든 입력과 계산을 지웁니다.
  } // 버튼 종류별 동작을 마칩니다.
}); // 버튼 클릭 처리를 마칩니다.
