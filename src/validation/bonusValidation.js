function bonusValidation(input, WinningNumber) {
  return true;
}

function DoubleCheckBonus(input, WinningNumber) {
  const includes = WinningNumber.split(',').includes(input);

  if (includes) {
    throw new Error('[ERROR] 중복되지 않는 숫자만 입력할수 있습니다.');
  }
}

function checkBonusOnlyNumber(input) {
  if (Number(input) < 1 || Number(input) > 45) {
    throw new Error('[ERROR] 1~45의 숫자만 입력할수 있습니다.');
  }
}

module.exports = {
  bonusValidation,
  DoubleCheckBonus,
  checkBonusOnlyNumber,
};
