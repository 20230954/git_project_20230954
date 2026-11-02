// 화면에서 로또 번호와 생성 횟수를 표시할 요소를 저장합니다.
const numberList = document.querySelector("#numbers");
const drawCount = document.querySelector("#draw-count");
const message = document.querySelector("#message");

// 번호를 뽑거나 화면을 초기화하는 버튼 요소를 저장합니다.
const drawButton = document.querySelector("#draw-button");
const resetButton = document.querySelector("#reset-button");
// 1~45 각 번호가 지금까지 나온 횟수를 같은 번호의 배열 칸에 저장합니다.
const frequencyList = document.querySelector("#frequency-list");
const mostFrequent = document.querySelector("#most-frequent");
const numberCounts = Array(46).fill(0);

// 사용자가 번호 뽑기를 누른 횟수를 보관하며 초기화하면 0으로 되돌립니다.
let totalDraws = 0;

/**
 * 1부터 45까지의 숫자 중 중복 없는 번호 6개를 만들어 오름차순으로 반환합니다.
 * Fisher-Yates 방식으로 배열 일부만 섞어 번호를 선택합니다.
 * @returns {number[]} 작은 숫자부터 정렬된 로또 번호 6개
 */
function createNumbers() {
  // 1부터 45까지의 모든 숫자를 담아 번호 추첨에 사용할 배열을 만듭니다.
  const availableNumbers = Array.from({ length: 45 }, (_, index) => index + 1);

  // 앞의 여섯 자리에 무작위 숫자를 배치해 중복 없이 번호를 선택합니다.
  for (let index = 0; index < 6; index += 1) {
    // 아직 뽑히지 않은 위치 중 하나를 무작위로 선택합니다.
    const randomIndex = index + Math.floor(Math.random() * (45 - index));
    // 선택한 숫자를 현재 추첨 위치의 숫자와 바꿔 중복 선택을 막습니다.
    [availableNumbers[index], availableNumbers[randomIndex]] =
      [availableNumbers[randomIndex], availableNumbers[index]];
  }

  // 선택된 숫자 여섯 개를 오름차순으로 정렬해 반환합니다.
  return availableNumbers.slice(0, 6).sort((first, second) => first - second);
}

/**
 * 번호 여섯 개를 색상 공 모양으로 화면에 표시합니다.
 * @param {number[]} numbers 화면에 표시할 오름차순 로또 번호
 */
function showNumbers(numbers) {
  // 기존 번호나 안내용 물음표를 지워 새 번호만 표시할 수 있게 합니다.
  numberList.replaceChildren();

  // 번호별 공 요소를 만들고 숫자 구간에 맞는 색상을 적용합니다.
  numbers.forEach((number) => {
    // 번호 하나를 담을 목록 항목을 만들고 공 스타일과 번호를 설정합니다.
    const ball = document.createElement("li");
    // 번호의 구간별 색상을 지정해 공을 빠르게 구분할 수 있게 합니다.
    const color = number <= 10 ? "yellow" : number <= 20 ? "blue" :
      number <= 30 ? "red" : number <= 40 ? "gray" : "green";
    ball.className = color;
    ball.textContent = number;
    // 번호 항목에 스크린 리더용 설명을 붙이고 결과 목록에 추가합니다.
    ball.setAttribute("aria-label", `번호 ${number}`);
    numberList.append(ball);
  });
}

/**
 * 번호를 새로 추첨하고 생성 횟수와 안내 문구를 갱신합니다.
 */
function drawLottoNumbers() {
  // 중복 없는 새 번호 여섯 개를 만들어 결과 영역에 출력합니다.
  const numbers = createNumbers();
  showNumbers(numbers);
  // 이번 추첨에 포함된 번호만 각자의 누적 출현 횟수에 더합니다.
  numbers.forEach((number) => {
    numberCounts[number] += 1;
  });
  // 번호별 횟수와 가장 많이 나온 번호를 새 누적 기록으로 갱신합니다.
  showFrequency();
  // 추첨 횟수를 1회 올리고 화면의 횟수 표시도 함께 갱신합니다.
  totalDraws += 1;
  drawCount.textContent = totalDraws;
  // 추첨이 완료되었음을 사용자에게 안내합니다.
  message.textContent = "행운의 번호를 뽑았어요!";
}

/**
 * 1~45 번호의 누적 횟수와 상위 6개 번호, 비율별 막대를 표시합니다.
 */
function showFrequency() {
  // 기존 통계 행을 비우고 현재 누적 횟수를 기준으로 막대를 다시 그립니다.
  frequencyList.replaceChildren();
  const highestCount = Math.max(...numberCounts.slice(1));
  // 횟수가 많은 순으로 정렬하고 동률이면 번호가 작은 순으로 정리합니다.
  const rankedNumbers = numberCounts.slice(1)
    .map((count, index) => ({ number: index + 1, count }))
    .sort((first, second) => second.count - first.count || first.number - second.number);
  // 정렬된 결과 중 상위 여섯 번호를 최다 출현 번호로 표시합니다.
  const topNumbers = rankedNumbers.slice(0, 6);

  for (let number = 1; number <= 45; number += 1) {
    // 번호, 막대 그래프, 누적 횟수를 담을 통계 행을 만듭니다.
    const item = document.createElement("li");
    const label = document.createElement("span");
    const count = document.createElement("strong");
    const track = document.createElement("span");
    const bar = document.createElement("span");

    // 각 번호의 출현 횟수에 맞춰 최대 막대 대비 너비를 계산합니다.
    label.textContent = number;
    count.textContent = numberCounts[number];
    track.className = "bar-track";
    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-label", `${number}번 출현 횟수`);
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", highestCount || 1);
    track.setAttribute("aria-valuenow", numberCounts[number]);
    bar.className = "bar";
    bar.style.width = `${highestCount ? numberCounts[number] / highestCount * 100 : 0}%`;
    track.append(bar);
    item.append(label, track, count);

    // 상위 여섯 번호를 그래프에서도 강조해 쉽게 찾을 수 있게 합니다.
    if (highestCount > 0 && topNumbers.some((entry) => entry.number === number)) {
      item.classList.add("top");
    }
    frequencyList.append(item);
  }

  // 기록이 있으면 상위 여섯 번호와 최고 출현 횟수를 함께 안내합니다.
  mostFrequent.textContent = highestCount === 0
    ? "아직 추첨 기록이 없습니다."
    : `최다 출현: ${topNumbers.map(({ number }) => number).join(", ")}번 (최고 ${highestCount}회)`;
}

/**
 * 번호 공을 물음표 상태로 되돌리고 생성 횟수를 0으로 초기화합니다.
 */
function resetLotto() {
  // 기존 번호 여섯 개 대신 초기 상태를 나타내는 물음표 공을 생성합니다.
  const placeholders = Array.from({ length: 6 }, () => {
    // 초기 상태용 공을 만들고 기본 색상과 물음표를 설정합니다.
    const ball = document.createElement("li");
    ball.className = "placeholder";
    ball.textContent = "?";
    return ball;
  });
  // 화면의 번호, 횟수, 안내 문구를 처음 상태로 되돌립니다.
  numberList.replaceChildren(...placeholders);
  totalDraws = 0;
  // 모든 번호의 누적 출현 횟수를 0으로 되돌려 이전 통계를 지웁니다.
  numberCounts.fill(0);
  showFrequency();
  drawCount.textContent = totalDraws;
  message.textContent = "번호 뽑기를 눌러 시작하세요.";
}

// 각 버튼의 클릭 동작을 해당 기능에 연결합니다.
drawButton.addEventListener("click", drawLottoNumbers);
resetButton.addEventListener("click", resetLotto);
// 첫 화면에도 1~45 번호의 초기 출현 횟수 0을 모두 표시합니다.
showFrequency();
