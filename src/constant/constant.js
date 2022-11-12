const INPUT_TEXT = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  BOUGHT: '개를 구매했습니다.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const STATS_TEXT = {
  WINNING_STATS: '당첨 통계',
  MATCH_THREE: '3개 일치 (5,000원) - ',
  MATCH_FOUR: '4개 일치 (50,000원) - ',
  MATCH_FIVE: '5개 일치 (1,500,000원) - ',
  MATCH_FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_SIX: '6개 일치 (2,000,000,000원) - ',
  YIELD: '총 수익률은 ',
  YIELD_ENDING: '%입니다.',
  HORIZONTAL_LINE: '---',
};

const ERROR = {
  AMOUNT: {
    UNDER_MONEY: '[ERROR] 1000원 이하의 금액은 입력할수 없습니다.',
    ONLY_NUMBER: '[ERROR] 숫자를 제외한 문자는 입력할수 없습니다.',
    NOT_EMPTY: '[ERROR] 공백은 입력할수 없습니다.',
  },
  BONUS: {
    NOT_OVERLAP: '[ERROR] 중복되지 않는 숫자만 입력할수 있습니다.',
    ONLY_SET_RANGE_NUMBER: '[ERROR] 1~45의 숫자만 입력할수 있습니다.',
  },
  LOTTO: {
    ONLY_SIX_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
    ONLY_SET_RANGE_NUMBER: '[ERROR] 로또 번호는 1~45자리의 숫자여야 합니다.',
  },
  WINNING: {
    NOT_EMPTY: '[ERROR] 공백은 입력할수 없습니다.',
    ONLY_NUMBER: '[ERROR] 숫자를 제외한 문자는 입력할수 없습니다.',
    COMMA_SEPARATED: '[ERROR] 1~45의 숫자만 쉼표로 구분하여 입력할수 있습니다.',
    ONLY_SIX_NUMBER: '[ERROR] 6개의 숫자만 입력할수있습니다.',
  },
};

const RANK = {
  ONE: 0,
  TWO: 1,
  THREE: 2,
  FOUR: 3,
  FIVE: 4,
};

const MATCH = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  FIVE_BONUS: 5.5,
  SIX: 6,
};

const MONEY = {
  RANK_ONE: 2000000000,
  RANK_TWO: 30000000,
  RANK_THREE: 1500000,
  RANK_FOUR: 50000,
  RANK_FIVE: 5000,
};

module.exports = { INPUT_TEXT, STATS_TEXT, ERROR, RANK, MATCH, MONEY };