const { LottoBuilder } = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
const { amountValidation } = require('./validation/amountValidation');
const { winningValidation } = require('./validation/winningValidation');
const { bonusValidation } = require('./validation/bonusValidation');

class App {
  constructor() {
    this.LottoBuilder = new LottoBuilder();
  }

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    this.readLine('', (input) => {
      if (amountValidation(input)) {
        const lottoList = this.LottoBuilder.creatLottoList(input);
        this.showLottoList(lottoList);
        this.setWinningNumber();
      }
    });
  }

  setWinningNumber() {
    this.print('당첨 번호를 입력해 주세요.');
    this.readLine('', (input) => {
      if (winningValidation(input)) {
        this.LottoBuilder.WinningNumber = input.split(',');
        this.setBonusNumber();
      }
    });
  }

  setBonusNumber() {
    this.print('보너스 번호를 입력해 주세요.');
    this.readLine('', (input) => {
      if (bonusValidation(input, this.LottoBuilder.WinningNumber)) {
        this.LottoBuilder.bonusNumber = input;
        this.setLotto();
        this.finish();
      }
    });
  }

  setLotto() {
    const lotto = this.LottoBuilder.build();
    lotto.progress();
    this.setOutputStats(lotto.stats, lotto.yield);
  }

  setOutputStats(lottoRanks, lottoYield) {
    this.print(`당첨 통계`);
    this.print(`---`);
    this.showRankList(lottoRanks);
    this.showYield(lottoYield);
  }

  showLottoList(lists) {
    this.print(`${lists.length}개를 구매했습니다.`);
    lists.forEach((list) => {
      this.print(`[${list.join(', ')}]`);
    });
  }

  showRankList(lottoRanks) {
    this.print(`3개 일치 (5,000원) - ${lottoRanks[4]}개`);
    this.print(`4개 일치 (50,000원) - ${lottoRanks[3]}개`);
    this.print(`5개 일치 (1,500,000원) - ${lottoRanks[2]}개`);
    this.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoRanks[1]}개`);
    this.print(`6개 일치 (2,000,000,000원) - ${lottoRanks[0]}개`);
  }

  showYield(lottoYield) {
    this.print(`총 수익률은 ${lottoYield}%입니다.`);
  }

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  print(message) {
    return MissionUtils.Console.print(message);
  }

  finish() {
    return MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
