/* ==================== TAROT CARDS DATA (22 Major Arcana Full Set) ==================== */
const TAROT_DECK = [
    {
        id: 0,
        nameKo: "0. 바보 (The Fool)",
        nameEn: "The Fool",
        number: "0",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
        keywordsUp: ["새로운 시작", "순수함", "자유", "모험", "직관"],
        keywordsRev: ["경솔함", "무모함", "위험한 모험", "주저함"],
        upright: {
            general: "새로운 시작의 기운이 감돕니다. 두려움을 내려놓고 순수한 직관을 믿고 모험을 시작할 때입니다.",
            love: "새로운 인연과의 설레는 만남이나 자유롭고 열린 마음의 연애가 펼쳐집니다.",
            career: "새로운 프로젝트나 과감한 도전에 정면으로 나설 타이밍입니다. 자유로운 사고가 열쇠입니다.",
            wealth: "새로운 투자 기회나 수입원이 생깁니다. 유연하게 탐색해 보세요.",
            advice: "선입견 없이 마음을 열고 가벼운 발걸음으로 첫 도전을 내딛으세요."
        },
        reversed: {
            general: "대책 없는 경솔함이나 준비 부족으로 인한 시행착오가 우려됩니다. 신중함이 필요합니다.",
            love: "무책임한 태도나 일시적인 충동으로 상대를 혼란스럽게 할 수 있습니다.",
            career: "충동적인 결정이나 퇴사는 자제하고 계획을 다시점검하세요.",
            wealth: "무모한 지출이나 검증되지 않은 투자에 주의가 필요합니다.",
            advice: "자유를 추구하되 최소한의 준비와 안전장치를 갖추는 신중함을 보이세요."
        }
    },
    {
        id: 1,
        nameKo: "I. 마법사 (The Magician)",
        nameEn: "The Magician",
        number: "I",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        keywordsUp: ["창조력", "능숙함", "자신감", "의지력", "실현"],
        keywordsRev: ["속임수", "재능 재워둠", "자만심", "의욕 저하"],
        upright: {
            general: "원하는 것을 성취할 모든 재능과 도구가 준비되어 있습니다. 자신감을 가지고 구체화하세요.",
            love: "당신의 매력이 최고조에 달하는 시기입니다. 적극적인 대화와 표현이 인연을 이끕니다.",
            career: "탁월한 기획력과 실행력으로 인정을 받고 주도권을 잡게 됩니다.",
            wealth: "당신의 재능과 아이디어가 직접적인 재정적 이익으로 연결됩니다.",
            advice: "자신의 능력을 믿고 머릿속 구상을 적극적으로 실행에 옮기세요."
        },
        reversed: {
            general: "능력은 있으나 자신감이 부족하거나, 의도가 불명확하여 혼란을 겪을 수 있습니다.",
            love: "겉모습에 치중하거나 진실되지 못한 언행으로 신뢰를 잃을 수 있습니다.",
            career: "말로만 그치고 실천이 부족할 수 있으니 실속을 챙기세요.",
            wealth: "감언이설이나 불확실한 제안에 넘어가 손실을 보지 않도록 주의하세요.",
            advice: "허세나 과장을 버리고 잔재주보다는 진정성 있는 태도를 보이세요."
        }
    },
    {
        id: 2,
        nameKo: "II. 여사제 (The High Priestess)",
        nameEn: "The High Priestess",
        number: "II",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
        keywordsUp: ["통찰력", "직관", "비밀", "내면의 지혜", "신중함"],
        keywordsRev: ["감정 기복", "비밀 폭로", "비현실적", "폐쇄성"],
        upright: {
            general: "외부의 소음에서 벗어나 내면의 직관과 목소리에 귀를 기울여야 하는 때입니다.",
            love: "깊은 정신적 교감이 일어납니다. 조용히 서로를 차분하게 알아가는 시기입니다.",
            career: "학업, 연구, 비밀 유지, 데이터 분석 등에 깊은 성과가 따릅니다.",
            wealth: "무모한 행보보다는 상황을 관망하며 신중하게 자금을 유지하는 것이 길합니다.",
            advice: "서두르지 말고 자신의 내면 깊은 곳에서 나오는 감정과 직관을 신뢰하세요."
        },
        reversed: {
            general: "내면의 균형이 깨지거나 예민함으로 인해 냉정한 판단력을 잃을 수 있습니다.",
            love: "속마음을 꽁꽁 숨기거나 오해로 인해 관계에 벽이 생길 수 있습니다.",
            career: "정보가 부족하거나 타인과의 소통 거부로 차질이 생길 수 있습니다.",
            wealth: "지나치게 보수적인 태도로 좋은 기회를 놓칠 수 있습니다.",
            advice: "혼자 고립되기보다 마음을 조금 열고 필요한 정보를 유연하게 수용하세요."
        }
    },
    {
        id: 3,
        nameKo: "III. 여황제 (The Empress)",
        nameEn: "The Empress",
        number: "III",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
        keywordsUp: ["풍요", "결실", "포용력", "편안함", "번영"],
        keywordsRev: ["낭비", "지나친 집착", "게으름", "정체"],
        upright: {
            general: "풍요로움과 행복이 찾아오는 시기입니다. 당신의 노력이 성과와 결실을 맺습니다.",
            love: "따뜻하고 헌신적인 사랑이 결실을 맺어 더욱 깊은 연대감과 편안함을 선사합니다.",
            career: "창의적인 프로젝트가 빛을 발하고 주변의 인정과 협력을 한몸에 받습니다.",
            wealth: "재물운이 매우 좋으며 금전적인 만족과 따뜻한 풍요를 누립니다.",
            advice: "주변 사람들에게 따뜻한 베풂과 포용을 보여주고 지금의 풍요를 누리세요."
        },
        reversed: {
            general: "지나친 과소비나 과도한 감정적 집착으로 안정이 흔들릴 수 있습니다.",
            love: "상대방을 지나치게 구속하거나 과도한 기대감으로 부담을 줄 수 있습니다.",
            career: "나태함이나 일의 미루기로 인해 성과가 지연될 수 있습니다.",
            wealth: "불필요한 과소비와 사치에 주의가 필요합니다.",
            advice: "감정적 조절과 절제를 통해 자기 자율성을 회복하세요."
        }
    },
    {
        id: 4,
        nameKo: "IV. 황제 (The Emperor)",
        nameEn: "The Emperor",
        number: "IV",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
        keywordsUp: ["권위", "리더십", "안정성", "체계", "책임감"],
        keywordsRev: ["독선", "권위주의", "통제 불능", "고집"],
        upright: {
            general: "체계와 질서를 바로잡을 때입니다. 강한 리더십과 책임감으로 상황을 주도하세요.",
            love: "든든하고 책임감 있는 신뢰의 관계를 형성합니다.",
            career: "조직이나 사업에서 견고한 위치를 확립하고 목표를 달성해 냅니다.",
            wealth: "체계적인 자산 관리와 규율 있는 지출로 자정이 탄탄해집니다.",
            advice: "명확한 원칙을 세우고 흔들림 없이 과감하게 추진하세요."
        },
        reversed: {
            general: "고집이나 완고함으로 주변과의 마찰이 생기거나 상황이 경직될 수 있습니다.",
            love: "지배하려 하거나 권위적인 태도로 인해 갈등이 심화됩니다.",
            career: "독단적인 판단으로 팀워크가 깨지거나 리더십에 타격을 입을 수 있습니다.",
            wealth: "경직된 자금 운용으로 유동성 위기가 생길 수 있습니다.",
            advice: "타인의 의견에 귀를 기울이고 원통함보다는 유연함을 발휘하세요."
        }
    },
    {
        id: 5,
        nameKo: "V. 교황 (The Hierophant)",
        nameEn: "The Hierophant",
        number: "V",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
        keywordsUp: ["전통", "조언", "멘토", "신념", "협력"],
        keywordsRev: ["편협함", "잘못된 조언", "속박", "독단"],
        upright: {
            general: "귀인이나 연륜 있는 멘토의 조언이 최선의 해결책이 되어 줄 것입니다.",
            love: "주변의 축복을 받는 진중하고 예의 바른 관계가 형성됩니다.",
            career: "규칙과 원칙을 지키고 전문가나 선배의 가르침을 수용하는 것이 유익합니다.",
            wealth: "안정적이고 검증된 기관/방법을 통한 자산 보존이 안전합니다.",
            advice: "혼자 고민하지 말고 경험자의 지혜와 자문을 구하세요."
        },
        reversed: {
            general: "고리타분한 형식을 강요받거나 잘못된 선입견으로 판단이 흐려질 수 있습니다.",
            love: "타인의 참견이나 주변의 시선 때문에 스트레스를 받습니다.",
            career: "비효율적인 절차나 융통성 없는 규정에 답답함을 느낍니다.",
            wealth: "잘못된 자문이나 검증되지 않은 소문에 유의하세요.",
            advice: "맹목적인 관습에 얽매이지 말고 독립적인 사고를 하세요."
        }
    },
    {
        id: 6,
        nameKo: "VI. 연인 (The Lovers)",
        nameEn: "The Lovers",
        number: "VI",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg",
        keywordsUp: ["사랑", "조화", "현명한 선택", "파트너십", "결합"],
        keywordsRev: ["불화", "우유부단", "유혹", "선택 장애"],
        upright: {
            general: "마음이 이끄는 중요한 선택의 순간이자 깊은 조화와 결합을 경험하게 됩니다.",
            love: "운명 같은 애정과 끌림이 생기며 관계가 극적으로 진전됩니다.",
            career: "최고의 파트너십을 맺거나 만족스러운 협상이 타결됩니다.",
            wealth: "올바른 협력 관계를 통해 서로에게 이득이 되는 기회가 생깁니다.",
            advice: "자신의 본심과 진정한 가치관에 충실한 선택을 하세요."
        },
        reversed: {
            general: "마음의 불일치나 유혹으로 인해 올바른 선택을 내리기 어려울 수 있습니다.",
            love: "사소한 섭섭함이나 소통 불능으로 관계의 균열이 생길 수 있습니다.",
            career: "동업자와의 의견 충돌이나 무책임한 결정을 유의하세요.",
            wealth: "단기적인 유혹이나 순간의 기분에 이끌린 지출을 삼가세요.",
            advice: "유혹에 휘둘리지 말고 관계의 신뢰를 복원하는 데 집중하세요."
        }
    },
    {
        id: 7,
        nameKo: "VII. 전차 (The Chariot)",
        nameEn: "The Chariot",
        number: "VII",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
        keywordsUp: ["승리", "돌파", "강한 의지", "전진", "자제력"],
        keywordsRev: ["통제 상실", "조급함", "좌절", "방향 상실"],
        upright: {
            general: "강력한 추진력과 의지력으로 상충되는 장애물을 기어코 극복해 냅니다.",
            love: "적극적인 주도권과 직진 행보로 원하는 사랑을 얻어냅니다.",
            career: "경쟁을 뚫고 승진, 합격, 계약 등 확실한 성과를 취하게 됩니다.",
            wealth: "과감하고 신속한 결정이 경제적 이익과 승리로 이어집니다.",
            advice: "목표를 향해 두려움 없이 매진하되 통제력을 유지하세요."
        },
        reversed: {
            general: "너무 조급하게 서두르다 자멸하거나 제어 능력을 잃을 위험이 있습니다.",
            love: "상대를 고려하지 않은 일방적인 밀어붙이기식 태도로 반발을 부릅니다.",
            career: "목표 의식 없이 무리한 강행군을 하다가 번아웃이 올 수 있습니다.",
            wealth: "무리한 확장이나 무분별한 조급한 투자는 금물입니다.",
            advice: "속도를 잠시 줄이고 방향성을 재점검하며 정돈하세요."
        }
    },
    {
        id: 8,
        nameKo: "VIII. 힘 (Strength)",
        nameEn: "Strength",
        number: "VIII",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
        keywordsUp: ["인내", "부드러운 조율", "용기", "자제력", "포용"],
        keywordsRev: ["자신감 결여", "자제력 상실", "무력감", "타협"],
        upright: {
            general: "강압이 아닌 부드러운 포용과 끊임없는 인내심으로 난관을 유연하게 해결합니다.",
            love: "서로의 다름을 차분하게 보듬어주는 성숙하고 견고한 사랑입니다.",
            career: "갈등을 온화하게 중재하고 장기적인 인내로 값진 성과를 냅니다.",
            wealth: "감정적인 충동을 다스리고 차분하게 지출을 제어합니다.",
            advice: "유연하고 따뜻한 태도가 거친 강함보다 훨씬 힘이 셉니다."
        },
        reversed: {
            general: "스스로에 대한 믿음이 흔들리거나 상황을 감당하지 못해 무력감을 느낍니다.",
            love: "감정이 폭발하거나 우유부단한 태도로 상대의 신뢰를 잃습니다.",
            career: "어려움 앞에서 자폭하거나 스트레스를 견디지 못할 수 있습니다.",
            wealth: "충동적인 쇼핑이나 절제력 상실로 자금이 샐 수 있습니다.",
            advice: "자신의 내면의 가치를 다시 되새기며 용기를 북돋우세요."
        }
    },
    {
        id: 9,
        nameKo: "IX. 은둔자 (The Hermit)",
        nameEn: "The Hermit",
        number: "IX",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
        keywordsUp: ["성찰", "탐구", "조용한 침묵", "진리", "고독"],
        keywordsRev: ["외로움", "고립", "고집", "소통 거부"],
        upright: {
            general: "소음에서 잠시 떨어져 진정한 나 자신과 지혜를 찾는 성찰의 시간입니다.",
            love: "혼자만의 충전 시간이 필요하거나 사랑의 내면적 의미를 깊게 헤아립니다.",
            career: "전문적인 학문, 연구, 내실 다지기에 최고의 성과가 따릅니다.",
            wealth: "지출을 극도로 아끼고 내실을 기하는 보수적인 운용이 요구됩니다.",
            advice: "조용히 자신을 돌아보고 내면의 등불을 밝히는 시간을 가지세요."
        },
        reversed: {
            general: "지나친 고립이나 고집으로 주변 사람들과의 소통이 단절될 수 있습니다.",
            love: "마음의 문을 닫아 상대를 답답하게 하거나 외로움에 빠집니다.",
            career: "팀워크를 외면하고 독단적으로 행동하다 손실을 볼 수 있습니다.",
            wealth: "너무 움켜쥐려다 오히려 필요한 유동성을 잃을 수 있습니다.",
            advice: "자신의 세계에 갇히지 말고 적절히 세상과 교류하세요."
        }
    },
    {
        id: 10,
        nameKo: "X. 운명의 수레바퀴 (Wheel of Fortune)",
        nameEn: "Wheel of Fortune",
        number: "X",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
        keywordsUp: ["행운", "터닝포인트", "변화", "순환", "기회"],
        keywordsRev: ["불운", "변화에 저항", "악순환", "지연"],
        upright: {
            general: "삶의 커다란 변화와 호운의 물결이 들어오는 결정적 전환점입니다.",
            love: "우연한 계기로 거부할 수 없는 운명적인 인연을 만나게 됩니다.",
            career: "예기치 못한 긍정적인 기회나 환경 변화로 정체되었던 일들이 풀립니다.",
            wealth: "뜻밖의 재물운이나 유용한 경제적 전화위복이 기다립니다.",
            advice: "다가오는 운명의 흐름을 기꺼이 타고 기회를 적극 잡으세요."
        },
        reversed: {
            general: "흐름이 나쁘게 바뀌거나 피할 수 없는 정체기를 만날 수 있습니다.",
            love: "과거의 안 좋은 패턴이 반복되거나 타이밍이 어긋날 수 있습니다.",
            career: "예상치 못한 외부 변수로 진행되던 일이 일시 지연될 수 있습니다.",
            wealth: "자금 순환의 막힘이 생길 수 있으므로 미리 대비하세요.",
            advice: "억지로 흐름을 바꾸려 하지 말고 잠시 대기하며 때를 기다리세요."
        }
    },
    {
        id: 11,
        nameKo: "XI. 정의 (Justice)",
        nameEn: "Justice",
        number: "XI",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
        keywordsUp: ["공정함", "균형", "원인과 결과", "결단", "진실"],
        keywordsRev: ["불공정", "편견", "법적 문제", "책임 회피"],
        upright: {
            general: "감정에 치우치지 않고 객관적이고 냉철한 균형 감각을 발휘해야 할 때입니다.",
            love: "서로에 대한 존중과 평등한 기브 앤 테이크가 요구되는 명확한 관계입니다.",
            career: "공정한 평가, 계약 완수, 합리적인 조율에서 좋은 결실을 맺습니다.",
            wealth: "정직한 자금 흐름과 원칙에 맞는 투자가 이익을 가져옵니다.",
            advice: "모든 결정에서 주관을 빼고 명확한 사실과 원칙에 기반하세요."
        },
        reversed: {
            general: "치우친 판단이나 편견으로 불이익을 당하거나 그릇된 결정을 내릴 수 있습니다.",
            love: "서로 탓을 하거나 공평하지 못한 희생으로 갈등이 발생합니다.",
            career: "불합리한 대우를 받거나 계약상의 실수가 발생할 수 있습니다.",
            wealth: "금전적 서류나 계약을 꼼꼼히 확인하여 손실을 막으세요.",
            advice: "감정적인 변명보다는 상황을 정직하게 바라보는 용기를 가지세요."
        }
    },
    {
        id: 12,
        nameKo: "XII. 매달린 사람 (The Hanged Man)",
        nameEn: "The Hanged Man",
        number: "XII",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
        keywordsUp: ["희생", "관점 전환", "인내", "정체 속 성찰", "수용"],
        keywordsRev: ["무의미한 고통", "지체", "이기심", "변화 거부"],
        upright: {
            general: "잠시 멈추어 세상을 다른 각도로 바라보아야 하는 지혜로운 정체기입니다.",
            love: "상대를 위해 양보하고 기다려주는 인내의 사랑이 요구됩니다.",
            career: "당장의 성과보다는 내실을 다지고 관점을 바꾸는 준비의 시간입니다.",
            wealth: "적극적인 투자보다는 지출을 멈추고 현상을 유지하세요.",
            advice: "억지로 상황을 돌파하려 하지 말고 다른 관점으로 재해석하세요."
        },
        reversed: {
            general: "아무런 보상 없는 쓸데없는 희생을 치르거나 자포자기에 빠질 수 있습니다.",
            love: "한쪽만 일방적으로 희생하는 불균형한 관계에 지칠 수 있습니다.",
            career: "방향성 없는 무기력함으로 발전 없이 시간만 허비할 수 있습니다.",
            wealth: "헛된 곳에 자금이 묶여 답답한 상황이 계속됩니다.",
            advice: "더 이상의 무의미한 희생을 멈추고 자신을 위한 결단을 내리세요."
        }
    },
    {
        id: 13,
        nameKo: "XIII. 죽음 (Death)",
        nameEn: "Death",
        number: "XIII",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
        keywordsUp: ["종결", "새로운 시작", "변화", "과거 청산", "재생"],
        keywordsRev: ["변화 미련", "정체", "과거 집착", "지연"],
        upright: {
            general: "낡은 것은 끝나고 완전히 새로운 단계가 시작되는 필연적인 변혁입니다.",
            love: "소모적인 관계의 종식 혹은 미련을 털고 새 출발을 하게 됩니다.",
            career: "기존 방식을 과감히 폐기하고 새로운 분야나 구조로 탈바꿈합니다.",
            wealth: "손실 나는 투자를 깔끔하게 정리하고 새로운 자산 기반을 만듭니다.",
            advice: "과거에 집착하지 말고 미련 없이 문을 닫아야 새 문이 열립니다."
        },
        reversed: {
            general: "이미 끝난 일에 미련을 버리지 못해 괴로움과 정체가 길어집니다.",
            love: "끝난 인연을 붙잡거나 나쁜 관계를 끊어내지 못해 지칩니다.",
            career: "비효율적인 일이나 사업을 정리하지 못해 끌려다닙니다.",
            wealth: "손절매 타이밍을 놓쳐 손실이 늘어날 위험이 있습니다.",
            advice: "더 이상 미루지 말고 필요 없는 것들을 과감히 정리하세요."
        }
    },
    {
        id: 14,
        nameKo: "XIV. 절제 (Temperance)",
        nameEn: "Temperance",
        number: "XIV",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
        keywordsUp: ["절제", "조화", "균형", "중용", "치유"],
        keywordsRev: ["불균형", "과도함", "자제력 상실", "마찰"],
        upright: {
            general: "양극단의 감정과 상황을 유연하게 조율하여 평온을 유지하는 절묘한 균형입니다.",
            love: "서로에게 자극적이지 않지만 온화하고 조화로운 안정을 줍니다.",
            career: "타협과 협상을 통해 완벽한 타협점을 찾아 일의 완성도를 높입니다.",
            wealth: "지출과 수입의 균형이 잘 맞고 자금이 유연하게 순환합니다.",
            advice: "감정을 극단으로 몰고 가지 말고 차분하게 가운데 길을 택하세요."
        },
        reversed: {
            general: "감정 컨트롤이나 절제력이 무너져 유흥, 과소비, 과식 등에 빠질 수 있습니다.",
            love: "사소한 일로 소통이 엇갈리고 극단적인 언행으로 상처를 줍니다.",
            career: "협상이 결렬되거나 무리한 계획 추진으로 조화를 깹니다.",
            wealth: "절제 없는 지출로 자금 흐름에 빨간불이 켜집니다.",
            advice: "생활 습관과 감정의 수위를 낮추고 자제력을 회복하세요."
        }
    },
    {
        id: 15,
        nameKo: "XV. 악마 (The Devil)",
        nameEn: "The Devil",
        number: "XV",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
        keywordsUp: ["유혹", "집착", "속박", "중독", "물질주의"],
        keywordsRev: ["속박 벗어남", "자유", "집착 청산", "자각"],
        upright: {
            general: "강렬한 유혹이나 끊어내기 힘든 집착에 사로잡혀 자율성을 잃기 쉽습니다.",
            love: "치명적인 끌림이지만 위험하거나 중독적인 관계일 수 있습니다.",
            career: "눈앞의 단기 이익이나 물질적 욕심에 혹해 잘못된 계약을 맺지 않도록 하세요.",
            wealth: "일시적인 욕심이나 일확천금을 노린 위험한 투자를 경계하세요.",
            advice: "달콤한 유혹 뒤에 숨겨진 속박을 경계하고 이성을 되찾으세요."
        },
        reversed: {
            general: "나를 구속하던 나쁜 습관, 집착, 악연으로부터 드디어 탈출하게 됩니다.",
            love: "유해했던 관계를 깔끔히 정리하고 스스로의 존엄을 되찾습니다.",
            career: "부당한 억압이나 스트레스 받는 환경에서 벗어날 기회가 생깁니다.",
            wealth: "낭비 벽을 바로잡고 안정을 찾기 시작합니다.",
            advice: "자유를 얻은 만큼 다시 유혹에 빠지지 않도록 경계하세요."
        }
    },
    {
        id: 16,
        nameKo: "XVI. 탑 (The Tower)",
        nameEn: "The Tower",
        number: "XVI",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
        keywordsUp: ["갑작스러운 변화", "붕괴", "충격", "진실 규명", "해방"],
        keywordsRev: ["긴장 고조", "지연된 위기", "불안", "파국 회피"],
        upright: {
            general: "거짓된 자만이나 위선이 갑작스러운 충격과 함께 일시에 무너져 내립니다.",
            love: "숨겨진 비밀이 드러나거나 갑작스러운 다툼으로 관계가 급변합니다.",
            career: "진행 중인 일의 전면 수정이나 예상치 못한 구조조정이 일어납니다.",
            wealth: "갑작스러운 지출이나 손실에 대비한 비상금이 필요합니다.",
            advice: "충격을 겸허히 수용하고 나쁜 기반을 기초부터 다시 차근차근 쌓으세요."
        },
        reversed: {
            general: "위기를 아슬아슬하게 피하지만 여전히 불안한 긴장감이 감돕니다.",
            love: "갈등의 근본적인 원인을 해결하지 못하고 억지로 덮어두고 있습니다.",
            career: "피할 수 없는 변화에 저항하다 스트레스가 더 커집니다.",
            wealth: "리스크가 계속 누적되고 있으니 점검이 시급합니다.",
            advice: "임시방편으로 때우려 하지 말고 근본 원인을 수술하세요."
        }
    },
    {
        id: 17,
        nameKo: "XVII. 별 (The Star)",
        nameEn: "The Star",
        number: "XVII",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
        keywordsUp: ["희망", "영감", "치유", "긍정적 비전", "평화"],
        keywordsRev: ["절망감", "비관적 판단", "실망", "비현실적"],
        upright: {
            general: "어둠을 걷어내는 밝은 희망과 평화가 찾아옵니다. 마음의 치유를 경험합니다.",
            love: "순수하고 이상적인 교류가 이어지며 서로에게 치유가 되는 인연입니다.",
            career: "창의적 영감이 샘솟고 원하던 비전이 선명하게 눈앞에 구현됩니다.",
            wealth: "장기적으로 재정 상황이 차츰 투명하고 건강하게 회복됩니다.",
            advice: "긍정적인 비전을 마음에 품고 희망의 빛을 따라가세요."
        },
        reversed: {
            general: "헛된 기대에 과도하게 매달리거나 무기력감에 빠져 낙담할 수 있습니다.",
            love: "상대에게 비현실적인 기대를 갖다가 실망할 수 있습니다.",
            career: "목표가 아득하게 느껴져 의욕을 잃을 수 있습니다.",
            wealth: "기대에 못 미치는 성과로 막막함을 느낄 수 있습니다.",
            advice: "막연한 환상을 버리고 현실적인 소소한 과제부터 해결하세요."
        }
    },
    {
        id: 18,
        nameKo: "XVIII. 달 (The Moon)",
        nameEn: "The Moon",
        number: "XVIII",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
        keywordsUp: ["불안", "모호함", "환상", "무의식", "혼란"],
        keywordsRev: ["오해 해소", "진실 드러남", "두려움 극복", "명확함"],
        upright: {
            general: "상황이 불투명하여 앞이 잘 보이지 않고 마음속 두려움과 불안이 피어납니다.",
            love: "상대의 속마음을 알 수 없거나 비밀과 오해 때문에 머리가 아픕니다.",
            career: "정보가 불확실하므로 중요한 계약이나 즉흥적 결정은 뒤로 미루세요.",
            wealth: "금융 보이스피싱이나 불투명한 투자 상품에 각별히 주의하세요.",
            advice: "보이지 않는 두려움에 왜곡되지 말고 상황이 명확해질 때까지 관망하세요."
        },
        reversed: {
            general: "나를 괴롭히던 안개가 걷히고 거짓과 오해가 명백히 밝혀집니다.",
            love: "서로 간의 오해가 풀리고 솔직한 대화의 문이 열립니다.",
            career: "숨겨졌던 악재나 비리가 드러나 대처할 수 있게 됩니다.",
            wealth: "재정적 안개 속에서 벗어나 합리적인 계획을 세웁니다.",
            advice: "마침내 드러난 진실을 인지하고 안도하며 앞으로 나아가세요."
        }
    },
    {
        id: 19,
        nameKo: "XIX. 태양 (The Sun)",
        nameEn: "The Sun",
        number: "XIX",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
        keywordsUp: ["성공", "기쁨", "명확함", "활력", "축복"],
        keywordsRev: ["일시적 먹구름", "자만심", "과열", "지연"],
        upright: {
            general: "밝은 태양빛처럼 순수한 기쁨과 성공, 활력이 삶 전반을 환히 비춥니다.",
            love: "숨김없이 솔직하며 축복 속에서 더욱 환하게 밝아지는 사랑입니다.",
            career: "모든 오해와 장애물이 사라지고 커다란 성과와 명예를 얻습니다.",
            wealth: "금전적 풍요로움과 만족스러운 결실이 가득한 시기입니다.",
            advice: "매사를 긍정하고 당신의 활기찬 에너지를 마음껏 펼치세요."
        },
        reversed: {
            general: "기쁨이 다소 반감되거나 일시적인 걱정 구름이 햇살을 가릴 수 있습니다.",
            love: "소소한 다툼이나 과도한 자존심으로 햇살 같은 관계가 서먹해집니다.",
            career: "성과가 나쁜 것은 아니나 기대보다 조금 지연될 수 있습니다.",
            wealth: "과도한 낙관주의로 지출이 커지는 것을 주의하세요.",
            advice: "지나친 낙관을 경계하되, 희망을 잃지 말고 페이스를 유지하세요."
        }
    },
    {
        id: 20,
        nameKo: "XX. 심판 (Judgement)",
        nameEn: "Judgement",
        number: "XX",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
        keywordsUp: ["부활", "보상", "결단", "소명", "새 출발"],
        keywordsRev: ["자기 비난", "기회 놓침", "망설임", "지연"],
        upright: {
            general: "그간의 노력에 대해 정당한 평가와 보상이 내려지는 부활의 때입니다.",
            love: "헤어졌던 인연과의 재회나 오랜 진심이 결실을 맺게 됩니다.",
            career: "합격 통지, 승진, 재기 기회 등 기다리던 반가운 소식이 찾아옵니다.",
            wealth: "동결되었던 자금이 풀리거나 보상금을 받게 됩니다.",
            advice: "운명의 호출에 망설이지 말고 기회를 꽉 잡으세요."
        },
        reversed: {
            general: "스스로를 자책하거나 결단을 미루다 결정적인 기회를 놓칠 수 있습니다.",
            love: "과거의 상처에 갇혀 새 출발이나 재회의 기회를 날려버립니다.",
            career: "과거의 실패 경험 때문에 도전하기를 주저합니다.",
            wealth: "자금 손실에 대한 두려움으로 필요한 투자를 못 합니다.",
            advice: "지나간 일에 대한 자책을 멈추고 용기를 가지고 결단하세요."
        }
    },
    {
        id: 21,
        nameKo: "XXI. 세계 (The World)",
        nameEn: "The World",
        number: "XXI",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
        keywordsUp: ["완성", "성취", "해피엔딩", "통합", "새 원동력"],
        keywordsRev: ["미완성", "지연", "마무리 부족", "정체"],
        upright: {
            general: "긴 여정이 성공적으로 완성되었습니다. 완벽한 결실과 축복을 누릴 때입니다.",
            love: "완벽한 이해와 결실을 맺는 안정적이고 해피엔딩에 도달한 관계입니다.",
            career: "프로젝트를 완벽하게 완수하고 최고의 보상과 호평을 받습니다.",
            wealth: "안정적이고 수확이 가득한 재정적 기쁨과 보상이 주어집니다.",
            advice: "하나의 커다란 성공을 축하하고 그 성취 위에서 새 목표를 꿈꾸세요."
        },
        reversed: {
            general: "거의 다 이루었으나 2%의 부족함으로 완성이 미뤄질 수 있습니다.",
            love: "매듭짓지 못한 과거의 문제나 미련으로 마무리가 깔끔하지 못합니다.",
            career: "마지막 디테일 점검을 소홀히 하여 마무리가 지연됩니다.",
            wealth: "목표했던 재정 성과에 약간 못 미쳐 아쉬움이 남을 수 있습니다.",
            advice: "끝까지 방심하지 말고 디테일을 꼼꼼하게 메워 완결짓도록 하세요."
        }
    }
];

/* ==================== APP STATE MANAGEMENT ==================== */
let appState = {
    spreadType: 'single',
    category: 'general',
    question: '',
    requiredCount: 1,
    selectedCards: [],
    isShuffling: false,
    audioEnabled: false
};

/* ==================== MP3 AUDIO CONTROL ==================== */
function toggleAudio() {
    appState.audioEnabled = !appState.audioEnabled;

    const icon = document.getElementById('audio-icon');
    const label = document.getElementById('audio-label');
    const bgm = document.getElementById('bgm-audio');

    if (appState.audioEnabled) {
        icon.className = "fa-solid fa-volume-high text-gold-400 animate-pulse";
        label.innerText = "배경음악 ON";
        if (bgm) {
            bgm.volume = 0.6;
            bgm.play().catch(err => {
                console.log("오디오 재생 오류:", err);
            });
        }
        playMagicChimeSFX();
    } else {
        icon.className = "fa-solid fa-volume-xmark text-slate-400";
        label.innerText = "배경음악 OFF";
        if (bgm) {
            bgm.pause();
        }
    }
}

function playCardFlipSFX() {
    if (!appState.audioEnabled) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.15);
        
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
    } catch(e){}
}

function playMagicChimeSFX() {
    if (!appState.audioEnabled) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const freqs = [523.25, 659.25, 783.99, 1046.50];
        freqs.forEach((f, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, audioCtx.currentTime + i * 0.08);
            
            gain.gain.setValueAtTime(0.04, audioCtx.currentTime + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.08 + 0.6);

            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + i * 0.08);
            osc.stop(audioCtx.currentTime + i * 0.08 + 0.6);
        });
    } catch(e){}
}


/* ==================== INITIALIZATION & PARTICLES ==================== */
window.addEventListener('DOMContentLoaded', () => {
    initStars();
    initSidePreviews();
});

function initStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    starsContainer.innerHTML = '';
    const count = 80;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2.5 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        star.style.setProperty('--delay', `${Math.random() * 3}s`);
        starsContainer.appendChild(star);
    }
}


/* ==================== SIDE PREVIEWS (MOUSEOVER / MOUSEOUT) ==================== */
function initSidePreviews() {
    setupPreviewCard('left-preview-card', 'left-card-content', '<div class="w-full h-full border border-gold-500/10 rounded flex items-center justify-center"><span class="text-[10px] font-cinzel text-gold-500/30 tracking-widest">TAROT</span></div>');
    setupPreviewCard('right-preview-card', 'right-card-content', '<div class="w-full h-full border border-gold-500/10 rounded flex items-center justify-center"><span class="text-[10px] font-cinzel text-gold-500/30 tracking-widest">TAROT</span></div>');
}

function setupPreviewCard(containerId, contentId, defaultHTML) {
    const container = document.getElementById(containerId);
    const content = document.getElementById(contentId);
    if (!container || !content) return;

    container.addEventListener('mouseenter', () => {
        if (typeof TAROT_DECK === 'undefined' || TAROT_DECK.length === 0) return;
        const randomCard = TAROT_DECK[Math.floor(Math.random() * TAROT_DECK.length)];
        
        content.innerHTML = `
            <img src="${randomCard.imgUrl}" alt="${randomCard.nameKo}" class="w-full h-full object-cover rounded-lg">
            <div class="absolute inset-x-0 bottom-0 bg-mystic-950/90 py-1 text-center backdrop-blur border-t border-gold-500/30">
                <span class="text-[10px] font-batang text-gold-200 font-bold">${randomCard.nameKo}</span>
            </div>
        `;
    });

    container.addEventListener('mouseleave', () => {
        content.innerHTML = defaultHTML;
    });
}


/* ==================== STEP 1 LOGIC ==================== */
function selectSpread(type) {
    appState.spreadType = type;
    appState.requiredCount = (type === 'single') ? 1 : 3;

    const buttons = {
        single: document.getElementById('btn-spread-single'),
        love: document.getElementById('btn-spread-love'),
        career: document.getElementById('btn-spread-career')
    };

    Object.keys(buttons).forEach(key => {
        if (key === type) {
            buttons[key].className = "spread-option relative border-2 border-gold-500/60 bg-mystic-700/80 p-4 rounded-xl text-left transition duration-200 flex flex-col justify-between group cursor-pointer gold-glow";
        } else {
            buttons[key].className = "spread-option relative border-2 border-mystic-600 bg-mystic-700/30 hover:bg-mystic-600/50 p-4 rounded-xl text-left transition duration-200 flex flex-col justify-between group cursor-pointer";
        }
    });

    if (type === 'love') selectCategory('love');
    else if (type === 'career') selectCategory('career');
}

function selectCategory(cat) {
    appState.category = cat;
    const categories = ['general', 'love', 'career', 'wealth'];
    categories.forEach(c => {
        const btn = document.getElementById(`cat-${c}`);
        if (!btn) return;
        if (c === cat) {
            btn.className = "cat-btn py-2.5 px-3 rounded-lg border border-gold-500/60 bg-gold-500/20 text-gold-200 font-medium text-xs sm:text-sm transition text-center flex flex-col items-center gap-1 shadow";
        } else {
            btn.className = "cat-btn py-2.5 px-3 rounded-lg border border-mystic-600 bg-mystic-700/40 text-slate-300 font-medium text-xs sm:text-sm transition text-center flex flex-col items-center gap-1 hover:border-slate-500";
        }
    });
}

function startShufflePhase() {
    appState.isShuffling = false; 
    appState.question = getDefaultQuestion(appState.category);
    appState.selectedCards = [];

    document.getElementById('step-setup').classList.add('hidden');
    document.getElementById('step-result').classList.add('hidden');
    document.getElementById('step-draw').classList.remove('hidden');

    renderSlotIndicators();
    renderFanDeck();

    appState.isShuffling = true;
    const loadingInd = document.getElementById('shuffle-loading-indicator');
    if (loadingInd) loadingInd.classList.remove('hidden');

    setTimeout(() => {
        appState.isShuffling = false;
        if (loadingInd) loadingInd.classList.add('hidden');
        
        const shuffleStatus = document.getElementById('shuffle-status');
        if (shuffleStatus) {
            shuffleStatus.innerHTML = `
                <p class="text-gold-300 font-batang text-sm sm:text-base animate-pulse flex items-center gap-2">
                    ✨ 18장의 타로 카드가 완전히 펼쳐졌습니다. 원하시는 카드를 ${appState.requiredCount}장 골라주세요!
                </p>
            `;
        }
        playMagicChimeSFX();
    }, 1000);
}

function getDefaultQuestion(category) {
    switch(category) {
        case 'love': return "우리의 만남과 애정운 흐름은 어떻게 될까요?";
        case 'career': return "학업 및 일의 성과와 최선의 선택은 무엇일까요?";
        case 'wealth': return "나의 경제적 상황과 금전운의 향방은 어떨까요?";
        default: return "오늘 나에게 필요한 영혼의 메시지와 종합 운세는 어떨까요?";
    }
}


/* ==================== STEP 2 LOGIC ==================== */
function renderSlotIndicators() {
    const container = document.getElementById('selected-slots-bar');
    if (!container) return;
    container.innerHTML = '';

    let titles = [];
    if (appState.spreadType === 'single') {
        titles = ['오늘의 카운슬링 카드'];
    } else if (appState.spreadType === 'love') {
        titles = ['1. 과거 (인연의 시작)', '2. 현재 (관계의 속마음)', '3. 미래 (관계의 향방)'];
    } else {
        titles = ['1. 현재 상황', '2. 조언 행동', '3. 최종 결과'];
    }

    titles.forEach((t, i) => {
        const slot = document.createElement('div');
        slot.id = `slot-indicator-${i}`;
        slot.className = "flex-1 py-2 px-3 bg-mystic-800/80 border border-mystic-600 rounded-xl text-center text-xs font-batang text-slate-400 backdrop-blur transition-all duration-300";
        slot.innerHTML = `<span>${t}</span>`;
        container.appendChild(slot);
    });
}

function renderFanDeck() {
    const container = document.getElementById('fan-deck-container');
    if (!container) return;
    container.innerHTML = '';

    const shuffledDeck = [...TAROT_DECK].sort(() => 0.5 - Math.random()).slice(0, 18);

    shuffledDeck.forEach((cardData, idx) => {
        const isReversed = Math.random() < 0.25;

        const cardEl = document.createElement('div');
        cardEl.id = `fan-card-${idx}`;
        cardEl.className = "grid-card w-24 h-38 sm:w-28 sm:h-44 bg-mystic-800 border-2 border-gold-500/60 rounded-xl p-2 shadow-xl cursor-pointer flex flex-col justify-between select-none";

        cardEl.innerHTML = `
            <div class="w-full h-full border border-gold-500/30 rounded-lg p-1.5 flex flex-col items-center justify-between bg-mystic-950/80 pointer-events-none">
                <div class="text-gold-400/40 text-[9px] font-cinzel">✨ TAROT ✨</div>
                <div class="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-300 bg-mystic-800/80 shadow-inner">
                    <i class="fa-solid fa-moon text-sm"></i>
                </div>
                <div class="text-gold-400/40 text-[9px] font-cinzel">MYSTICAL</div>
            </div>
        `;

        cardEl.onclick = () => pickCardFromGrid(idx, cardData, isReversed, cardEl);
        container.appendChild(cardEl);
    });
}

function pickCardFromGrid(fanIndex, cardData, isReversed, cardEl) {
    if (appState.isShuffling) return;
    if (appState.selectedCards.length >= appState.requiredCount) return;
    if (cardEl.classList.contains('picked-card')) return;

    playCardFlipSFX();
    cardEl.classList.add('picked-card', 'opacity-20', 'pointer-events-none');
    cardEl.style.transform = 'translateY(-10px) scale(0.95)';

    let positionTitles = [];
    if (appState.spreadType === 'single') {
        positionTitles = ['오늘의 카운슬링 카드'];
    } else if (appState.spreadType === 'love') {
        positionTitles = ['과거 흐름', '현재 상태', '미래 및 조언'];
    } else {
        positionTitles = ['현재 상황', '행동 지침', '최종 결과'];
    }

    const currentSlotIndex = appState.selectedCards.length;
    appState.selectedCards.push({
        card: cardData,
        isReversed: isReversed,
        positionTitle: positionTitles[currentSlotIndex]
    });

    const slotInd = document.getElementById(`slot-indicator-${currentSlotIndex}`);
    if (slotInd) {
        slotInd.className = "flex-1 py-2 px-3 bg-gold-500/20 border border-gold-400 rounded-xl text-center text-xs font-batang text-gold-200 gold-glow font-bold animate-pulse";
        slotInd.innerHTML = `<i class="fa-solid fa-check text-gold-400"></i> ${cardData.nameKo.split(' ')[1] || cardData.nameKo}`;
    }

    if (appState.selectedCards.length === appState.requiredCount) {
        setTimeout(() => {
            playMagicChimeSFX();
            showDetailedResult();
        }, 800);
    }
}


/* ==================== STEP 3 LOGIC ==================== */
function showDetailedResult() {
    document.getElementById('step-draw').classList.add('hidden');
    document.getElementById('step-result').classList.remove('hidden');

    const catNames = { general: "종합 운세", love: "연애/애정운", career: "학업/커리어", wealth: "금전/재물운" };
    const spreadNames = { single: "오늘의 1카드", love: "관계 3카드", career: "결정 3카드" };

    document.getElementById('result-category-badge').innerText = catNames[appState.category];
    document.getElementById('result-spread-badge').innerText = spreadNames[appState.spreadType];
    document.getElementById('result-question-display').innerText = `"${appState.question}"`;

    const grid = document.getElementById('result-cards-grid');
    grid.innerHTML = '';

    appState.selectedCards.forEach((item, idx) => {
        const c = item.card;
        const orientationText = item.isReversed ? "역방향 (Reversed)" : "정방향 (Upright)";
        const orientationClass = item.isReversed ? "text-amber-400 bg-amber-500/10 border-amber-500/30" : "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";

        const cardHTML = `
            <div class="bg-mystic-800/80 border border-gold-500/30 rounded-2xl p-4 flex flex-col items-center gold-glow backdrop-blur w-full max-w-xs transition transform hover:scale-[1.02]">
                <span class="text-xs font-batang text-gold-300 mb-3 px-3 py-1 bg-mystic-900 rounded-full border border-gold-500/30 font-semibold">
                    ${item.positionTitle}
                </span>

                <div class="card-container mb-4 cursor-pointer" onclick="this.classList.toggle('flipped')">
                    <div class="card-inner">
                        <div class="card-front ${item.isReversed ? 'reversed-card' : ''} bg-mystic-950 border-2 border-gold-400 rounded-xl shadow-2xl relative">
                            <img src="${c.imgUrl}" alt="${c.nameKo}" class="w-full h-full object-cover rounded-lg">
                            <div class="absolute bottom-0 inset-x-0 bg-mystic-950/80 py-1 text-center border-t border-gold-500/30 backdrop-blur">
                                <span class="font-batang font-bold text-xs text-gold-200">${c.nameKo}</span>
                            </div>
                        </div>
                        <div class="card-back bg-mystic-900 border-2 border-gold-500/60 rounded-xl p-3 flex flex-col items-center justify-between">
                            <div class="w-full h-full border border-gold-500/30 rounded-lg p-2 flex flex-col items-center justify-between bg-mystic-950">
                                <div class="text-gold-400/50 text-[10px]">MYSTICAL</div>
                                <i class="fa-solid fa-moon text-2xl text-gold-400"></i>
                                <div class="text-gold-400/50 text-[10px]">TAROT</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${orientationClass} mb-2">
                    ${orientationText}
                </div>

                <div class="flex flex-wrap gap-1 justify-center">
                    ${(item.isReversed ? c.keywordsRev : c.keywordsUp).map(kw => `<span class="text-[10px] bg-mystic-900/90 text-slate-300 px-2 py-0.5 rounded-full border border-mystic-700">#${kw}</span>`).join('')}
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });

    setTimeout(() => {
        document.querySelectorAll('#result-cards-grid .card-container').forEach(c => c.classList.add('flipped'));
    }, 300);

    buildDetailedReportText();
}

function buildDetailedReportText() {
    const container = document.getElementById('detailed-interpretations');
    if (!container) return;
    container.innerHTML = '';

    let fullSummaryAdvices = [];

    appState.selectedCards.forEach((item, idx) => {
        const c = item.card;
        const reading = item.isReversed ? c.reversed : c.upright;
        const appliedCategoryMeaning = reading[appState.category] || reading.general;

        fullSummaryAdvices.push(reading.advice);

        const sectionHTML = `
            <div class="border-l-2 border-gold-500/70 pl-4 py-1.5 space-y-2">
                <div class="flex items-center gap-2">
                    <span class="font-batang text-gold-300 font-bold text-base sm:text-lg">${item.positionTitle} : ${c.nameKo}</span>
                    <span class="text-xs px-2 py-0.5 rounded ${item.isReversed ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}">
                        ${item.isReversed ? '역방향' : '정방향'}
                    </span>
                </div>
                
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    <strong class="text-gold-200 font-medium">[기본 해석]</strong> ${reading.general}
                </p>
                
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-light bg-mystic-900/50 p-3 rounded-lg border border-mystic-700/50">
                    <strong class="text-gold-400 font-medium">[맞춤 테마 리딩]</strong> ${appliedCategoryMeaning}
                </p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', sectionHTML);
    });

    const overallAdviceBox = document.getElementById('overall-advice-text');
    if (!overallAdviceBox) return;
    let synthesisText = "";

    if (appState.spreadType === 'single') {
        synthesisText = `✨ 오늘 타로 카드가 전하는 명쾌한 핵심 가이드:\n"${fullSummaryAdvices[0]}"\n\n당신의 직관을 믿고 매 순간 솔직하고 용기 있게 행동해 보세요.`;
    } else {
        synthesisText = `✨ 영혼의 운세 통합 가이드:\n` +
        `1. 과거 및 현재 흐름: ${fullSummaryAdvices[0]}\n` +
        `2. 핵심 행동 지침: ${fullSummaryAdvices[1]}\n` +
        `3. 미래 및 결실 조언: ${fullSummaryAdvices[2]}\n\n` +
        `이 카드는 당신의 선택과 마음가짐에 따라 미래가 더욱 빛나게 변화할 수 있음을 상징합니다.`;
    }

    overallAdviceBox.innerText = synthesisText;
}


/* ==================== ACTION UTILITIES ==================== */
function resetAll() {
    appState.selectedCards = [];
    appState.isShuffling = false;

    document.getElementById('step-result').classList.add('hidden');
    document.getElementById('step-draw').classList.add('hidden');
    document.getElementById('step-setup').classList.remove('hidden');
}

function copyReadingResult() {
    const question = appState.question;
    let text = `[✨ Mystical Tarot 점괘 보고서 ✨]\n질문: "${question}"\n\n`;

    appState.selectedCards.forEach(item => {
        const c = item.card;
        const reading = item.isReversed ? c.reversed : c.upright;
        text += `■ ${item.positionTitle}: ${c.nameKo} (${item.isReversed ? '역방향' : '정방향'})\n`;
        text += `- 키워드: ${(item.isReversed ? c.keywordsRev : c.keywordsUp).join(', ')}\n`;
        text += `- 핵심 조언: ${reading.advice}\n\n`;
    });

    const adviceEl = document.getElementById('overall-advice-text');
    text += `종합 가이드:\n${adviceEl ? adviceEl.innerText : ''}\n\n© Mystical Tarot Reading`;

    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert("타로 리딩 결과가 클립보드에 복사되었습니다.");
    } catch (err) {
        alert("복사 중 오류가 발생했습니다.");
    }
    document.body.removeChild(textarea);
}

function saveAsImage() {
    const printableArea = document.getElementById('report-printable-area');
    if (!printableArea) return;

    html2canvas(printableArea, {
        backgroundColor: '#070512',
        scale: 2,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Tarot-Reading-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        console.error("이미지 저장 중 오류 발생:", err);
    });
}