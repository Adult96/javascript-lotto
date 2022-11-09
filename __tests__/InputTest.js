const { checkAmountNumber } = require('../src/validation/inputValidation');

describe('사용자 입력 테스트', () => {
  test('입력한 금액이 1000원 단위가 아닐경우 예외가 발생한다.', () => {
    const input = '1001';

    expect(() => {
      checkAmountUnits(input);
    }).toThrow('[ERROR]');
  });
});
