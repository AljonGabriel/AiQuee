const questions = {
  //English
  English: {
    //Seven English
    Seven: [
      {
        question: "What is the correct definition of the word 'abundant'?",
        options: [
          { text: 'lacking in quantity', isCorrect: false },
          {
            text: 'excessive, plentiful',
            isCorrect: true,
            explanation:
              "Abundant means having more than enough of something, which accurately describes the option 'excessive, plentiful.'",
          },
          { text: 'rare, scarce', isCorrect: false },
          { text: 'visible, clear', isCorrect: false },
        ],
      },
      {
        question: "Identify the synonym for the word 'eloquent':",
        options: [
          { text: 'clumsy', isCorrect: false },
          { text: 'hesitant', isCorrect: false },
          {
            text: 'persuasive',
            isCorrect: true,
            explanation:
              "Eloquent is synonymous with 'persuasive,' which means having the ability to speak or write effectively and convincingly.",
          },
          { text: 'ordinary', isCorrect: false },
        ],
      },
      {
        question: "What is the correct plural form of 'child'?",
        options: [
          { text: 'childs', isCorrect: false },
          { text: 'childen', isCorrect: false },
          {
            text: 'children',
            isCorrect: true,
            explanation: "The correct plural form of 'child' is 'children'.",
          },
          { text: 'childes', isCorrect: false },
        ],
      },
      {
        question: 'Which sentence is written in the passive voice?',
        options: [
          {
            text: 'The teacher explained the lesson to the students.',
            isCorrect: false,
          },
          {
            text: 'The students eagerly answered the questions.',
            isCorrect: false,
          },
          {
            text: 'The book captivated the young readers.',
            isCorrect: false,
          },
          {
            text: 'The car hit the tree during the storm.',
            isCorrect: true,
            explanation:
              "The sentence 'The car hit the tree during the storm.' is written in the passive voice as the subject 'car' receives the action of 'hit,' and the doer of the action ('who hit the car') is not mentioned.",
          },
        ],
      },
      {
        question: 'Choose the correct spelling of the word:',
        options: [
          { text: 'recieve', isCorrect: false },
          { text: 'recieve', isCorrect: false },
          {
            text: 'receive',
            isCorrect: true,
            explanation: "The correct spelling of the word is 'receive.'",
          },
          { text: 'receeve', isCorrect: false },
        ],
      },
      {
        question:
          "What is the meaning of the idiom 'barking up the wrong tree'?",
        options: [
          { text: 'trying to train a dog', isCorrect: false },
          { text: 'searching for the right path', isCorrect: false },
          { text: 'arguing with someone', isCorrect: false },
          {
            text: 'pursuing the wrong person or idea',
            isCorrect: true,
            explanation:
              "The idiom 'barking up the wrong tree' means to pursue the wrong person, idea, or course of action; it suggests wasting effort or seeking answers in the wrong place.",
          },
        ],
      },
      {
        question: 'Which sentence is written in the subjunctive mood?',
        options: [
          {
            text: 'If I am the boss, I would give you a raise.',
            isCorrect: false,
          },
          { text: 'I am sure he will be on time.', isCorrect: false },
          { text: 'If she was here, she would help us.', isCorrect: false },
          {
            text: 'I wish it were raining.',
            isCorrect: true,
            explanation:
              "The sentence 'I wish it were raining.' is written in the subjunctive mood, expressing a wish or hypothetical situation contrary to fact.",
          },
        ],
      },
      {
        question:
          "Identify the correct form of the verb in the sentence: 'He ___ his bicycle to school every day.'",
        options: [
          {
            text: 'rides',
            isCorrect: true,
            explanation: "The correct form of the verb is 'rides.'",
          },
          { text: 'ride', isCorrect: false },
          { text: 'rided', isCorrect: false },
          { text: 'riding', isCorrect: false },
        ],
      },
      {
        question:
          "Choose the correct homophone for the sentence: 'I love to ___ books.'",
        options: [
          {
            text: 'read',
            isCorrect: true,
            explanation: "The correct homophone for the sentence is 'read.'",
          },
          { text: 'reed', isCorrect: false },
          { text: 'rede', isCorrect: false },
          { text: 'ried', isCorrect: false },
        ],
      },
      {
        question: "What is the meaning of the word 'consequence'?",
        options: [
          {
            text: 'result or effect',
            isCorrect: true,
            explanation:
              "The meaning of the word 'consequence' is a result or effect that follows from an action or condition.",
          },
          { text: 'purpose or goal', isCorrect: false },
          { text: 'challenge or difficulty', isCorrect: false },
          { text: 'arrangement or order', isCorrect: false },
        ],
      },
      {
        question: "What is the correct past tense form of the verb 'swim'?",
        options: [
          {
            text: 'swam',
            isCorrect: true,
            explanation:
              "The correct past tense form of the verb 'swim' is 'swam.'",
          },
          { text: 'swum', isCorrect: false },
          { text: 'swimmed', isCorrect: false },
          { text: 'swim', isCorrect: false },
        ],
      },
      {
        question: "Identify the antonym for the word 'generous':",
        options: [
          {
            text: 'selfish',
            isCorrect: true,
            explanation:
              "The antonym for the word 'generous' is 'selfish,' which means lacking consideration for others and only concerned with one's own interests.",
          },
          { text: 'grateful', isCorrect: false },
          { text: 'giving', isCorrect: false },
          { text: 'kind', isCorrect: false },
        ],
      },
      {
        question: "What is the meaning of the word 'placid'?",
        options: [
          {
            text: 'calm and peaceful',
            isCorrect: true,
            explanation:
              "The meaning of the word 'placid' is calm and peaceful.",
          },
          { text: 'loud and noisy', isCorrect: false },
          { text: 'angry and aggressive', isCorrect: false },
          { text: 'uncertain and doubtful', isCorrect: false },
        ],
      },
      {
        question:
          'Choose the correct form of the pronoun to complete the sentence:',
        options: [
          { text: 'He', isCorrect: false },
          {
            text: 'They',
            isCorrect: true,
            explanation:
              "The correct form of the pronoun to complete the sentence is 'They.'",
          },
          { text: 'It', isCorrect: false },
          { text: 'She', isCorrect: false },
        ],
      },
    ],
    //Eight English
    Eight: [
      {
        question: 'Who painted the Mona Lisa?',
        options: [
          {
            text: 'Leonardo da Vinci',
            isCorrect: true,
            explanation:
              'The Mona Lisa was painted by Leonardo da Vinci, a famous Italian artist and polymath of the Renaissance period.',
          },
          { text: 'Vincent van Gogh', isCorrect: false },
          { text: 'Pablo Picasso', isCorrect: false },
          { text: 'Michelangelo', isCorrect: false },
        ],
      },
      {
        question: 'Identify the synonym for the word "eloquent":',
        options: [
          { text: 'clumsy', isCorrect: false },
          { text: 'hesitant', isCorrect: false },
          {
            text: 'persuasive',
            isCorrect: true,
            explanation:
              "The word 'eloquent' is synonymous with 'persuasive,' which means having the ability to speak or write effectively and convincingly.",
          },
          { text: 'ordinary', isCorrect: false },
        ],
      },
      {
        question: 'What is the correct plural form of "child"?',
        options: [
          { text: 'childs', isCorrect: false },
          { text: 'childen', isCorrect: false },
          {
            text: 'children',
            isCorrect: true,
            explanation:
              "The correct plural form of the word 'child' is 'children.'",
          },
          { text: 'childes', isCorrect: false },
        ],
      },
      {
        question: 'Which sentence is written in the passive voice?',
        options: [
          {
            text: 'The teacher explained the lesson to the students.',
            isCorrect: false,
          },
          {
            text: 'The students eagerly answered the questions.',
            isCorrect: false,
          },
          {
            text: 'The book captivated the young readers.',
            isCorrect: false,
          },
          {
            text: 'The car hit the tree during the storm.',
            isCorrect: true,
            explanation:
              "The sentence 'The car hit the tree during the storm.' is written in the passive voice as the subject 'car' receives the action of 'hit,' and the doer of the action ('who hit the car') is not mentioned.",
          },
        ],
      },
      {
        question: 'Choose the correct spelling of the word:',
        options: [
          { text: 'recieve', isCorrect: false },
          { text: 'recieve', isCorrect: false },
          {
            text: 'receive',
            isCorrect: true,
            explanation: "The correct spelling of the word is 'receive.'",
          },
          { text: 'receeve', isCorrect: false },
        ],
      },
      {
        question:
          'What is the meaning of the idiom "barking up the wrong tree"?',
        options: [
          { text: 'trying to train a dog', isCorrect: false },
          { text: 'searching for the right path', isCorrect: false },
          { text: 'arguing with someone', isCorrect: false },
          {
            text: 'pursuing the wrong person or idea',
            isCorrect: true,
            explanation:
              "The idiom 'barking up the wrong tree' means to pursue the wrong person, idea, or course of action; it suggests wasting effort or seeking answers in the wrong place.",
          },
        ],
      },
      {
        question: 'Which sentence is written in the subjunctive mood?',
        options: [
          {
            text: 'If I am the boss, I would give you a raise.',
            isCorrect: false,
          },
          { text: 'I am sure he will be on time.', isCorrect: false },
          { text: 'If she was here, she would help us.', isCorrect: false },
          {
            text: 'I wish it were raining.',
            isCorrect: true,
            explanation:
              "The sentence 'I wish it were raining.' is written in the subjunctive mood, expressing a wish or hypothetical situation contrary to fact.",
          },
        ],
      },
      {
        question:
          'Identify the correct form of the verb in the sentence: "He ________ his bike to school every day."',
        options: [
          {
            text: 'rides',
            isCorrect: true,
            explanation: "The correct form of the verb is 'rides.'",
          },
          { text: 'ride', isCorrect: false },
          { text: 'rided', isCorrect: false },
          { text: 'riding', isCorrect: false },
        ],
      },
      {
        question:
          'Choose the correct homophone for the sentence: "She is going to __________ her favorite book."',
        options: [
          {
            text: 'read',
            isCorrect: true,
            explanation: "The correct homophone for the sentence is 'read.'",
          },
          { text: 'reed', isCorrect: false },
          { text: 'rede', isCorrect: false },
          { text: 'ried', isCorrect: false },
        ],
      },
      {
        question: 'What is the meaning of the word "consequence"?',
        options: [
          {
            text: 'result or effect',
            isCorrect: true,
            explanation:
              "The word 'consequence' means the result or effect of an action, typically a repercussion or outcome.",
          },
          { text: 'purpose or goal', isCorrect: false },
          { text: 'challenge or difficulty', isCorrect: false },
          { text: 'arrangement or order', isCorrect: false },
        ],
      },
      {
        question: "What is the correct past tense form of the verb 'swim'?",
        options: [
          {
            text: 'swam',
            isCorrect: true,
            explanation:
              "The correct past tense form of the verb 'swim' is 'swam.'",
          },
          { text: 'swum', isCorrect: false },
          { text: 'swimmed', isCorrect: false },
          { text: 'swim', isCorrect: false },
        ],
      },
      {
        question: 'Identify the antonym for the word "generous":',
        options: [
          {
            text: 'selfish',
            isCorrect: true,
            explanation:
              "The antonym for the word 'generous' is 'selfish,' which means lacking consideration for others and only concerned with one's own interests.",
          },
          { text: 'grateful', isCorrect: false },
          { text: 'giving', isCorrect: false },
          { text: 'kind', isCorrect: false },
        ],
      },
      {
        question: 'What is the meaning of the word "placid"?',
        options: [
          {
            text: 'calm and peaceful',
            isCorrect: true,
            explanation: "The word 'placid' means calm and peaceful.",
          },
          { text: 'loud and noisy', isCorrect: false },
          { text: 'angry and aggressive', isCorrect: false },
          { text: 'uncertain and doubtful', isCorrect: false },
        ],
      },
      {
        question:
          'Choose the correct form of the pronoun to complete the sentence: "_________ will be attending the party tonight."',
        options: [
          { text: 'He', isCorrect: false },
          {
            text: 'They',
            isCorrect: true,
            explanation:
              "The correct pronoun to complete the sentence is 'They.'",
          },
          { text: 'It', isCorrect: false },
          { text: 'She', isCorrect: false },
        ],
      },
    ],
    //Nine English
    Nine: [
      {
        question:
          "Identify the correct form of the verb in the sentence: 'They ________ to the beach every summer.'",
        options: [
          { text: 'goes', isCorrect: false },
          {
            text: 'go',
            isCorrect: true,
            explanation: "The correct form of the verb is 'go.'",
          },
          { text: 'going', isCorrect: false },
          { text: 'gone', isCorrect: false },
        ],
      },
      {
        question:
          'Choose the correct homophone for the sentence: "Please set the ________ on the table."',
        options: [
          { text: 'newt', isCorrect: false },
          { text: 'meat', isCorrect: false },
          {
            text: 'meet',
            isCorrect: true,
            explanation: "The correct homophone is 'meet.'",
          },
          { text: 'mete', isCorrect: false },
        ],
      },
      {
        question: "What is the meaning of the word 'quintessential'?",
        options: [
          { text: 'familiar', isCorrect: false },
          {
            text: 'essential',
            isCorrect: true,
            explanation:
              "The word 'quintessential' means representing the most perfect or typical example of something.",
          },
          { text: 'confused', isCorrect: false },
          { text: 'quizzical', isCorrect: false },
        ],
      },
      {
        question: 'Which sentence is written in the active voice?',
        options: [
          {
            text: 'The project will be completed by the team.',
            isCorrect: false,
          },
          { text: 'The book was read by the students.', isCorrect: false },
          {
            text: 'The chef prepared a delicious meal.',
            isCorrect: true,
            explanation:
              "The sentence 'The chef prepared a delicious meal.' is written in the active voice, where the subject 'chef' performs the action.",
          },
          { text: 'The song will be sung by the choir.', isCorrect: false },
        ],
      },
      {
        question:
          'Choose the correct form of the pronoun to complete the sentence: "_________ is coming to the party."',
        options: [
          { text: 'Her', isCorrect: false },
          {
            text: 'She',
            isCorrect: true,
            explanation:
              "The correct pronoun to complete the sentence is 'She.'",
          },
          { text: 'Hers', isCorrect: false },
          { text: 'Himself', isCorrect: false },
        ],
      },
      {
        question: 'Identify the correct definition of the word "mellifluous":',
        options: [
          { text: 'harsh and unpleasant', isCorrect: false },
          {
            text: 'soothing and sweet sounding',
            isCorrect: true,
            explanation:
              "The word 'mellifluous' means having a smooth, rich flow and a pleasing musicality to the voice or sound.",
          },
          { text: 'energetic and lively', isCorrect: false },
          { text: 'tall and imposing', isCorrect: false },
        ],
      },
      {
        question: "What is the correct past tense form of the verb 'rise'?",
        options: [
          { text: 'rises', isCorrect: false },
          {
            text: 'risen',
            isCorrect: true,
            explanation:
              "The correct past tense form of the verb 'rise' is 'risen.'",
          },
          { text: 'rising', isCorrect: false },
          { text: 'rose', isCorrect: false },
        ],
      },
      {
        question:
          'Choose the correct form of the verb to complete the sentence: "She ________ her best in the competition."',
        options: [
          { text: 'put', isCorrect: false },
          { text: 'putting', isCorrect: false },
          { text: 'putted', isCorrect: false },
          {
            text: 'puts',
            isCorrect: true,
            explanation: "The correct form of the verb is 'puts.'",
          },
        ],
      },
      {
        question: 'What is the meaning of the word "pervasive"?',
        options: [
          { text: 'minor and insignificant', isCorrect: false },
          {
            text: 'common and widespread',
            isCorrect: true,
            explanation:
              "The word 'pervasive' means widespread and present throughout an area or group.",
          },
          { text: 'unpleasant and offensive', isCorrect: false },
          { text: 'simple and straightforward', isCorrect: false },
        ],
      },
      {
        question: 'Identify the antonym for the word "ambitious":',
        options: [
          {
            text: 'lazy',
            isCorrect: true,
            explanation:
              "The antonym for 'ambitious' is 'lazy,' which means unwilling to work or use energy.",
          },
          { text: 'eager', isCorrect: false },
          { text: 'motivated', isCorrect: false },
          { text: 'determined', isCorrect: false },
        ],
      },
      {
        question: 'What is the correct definition of the word "facetious"?',
        options: [
          { text: 'serious and solemn', isCorrect: false },
          {
            text: 'humorous and playful',
            isCorrect: true,
            explanation:
              "The word 'facetious' means treating serious issues with deliberately inappropriate humor; flippant.",
          },
          { text: 'cautious and reserved', isCorrect: false },
          { text: 'curious and inquisitive', isCorrect: false },
        ],
      },
      {
        question: 'Which sentence is written in the future perfect tense?',
        options: [
          { text: 'She is cooking dinner.', isCorrect: false },
          {
            text: 'I will have finished the report by tomorrow.',
            isCorrect: true,
            explanation:
              "The sentence 'I will have finished the report by tomorrow.' is written in the future perfect tense, indicating that the action of finishing the report will be completed before a specific point in the future.",
          },
          { text: 'They have studied for the exam.', isCorrect: false },
          { text: 'He had already left when I arrived.', isCorrect: false },
        ],
      },
      {
        question:
          'Choose the correct form of the pronoun to complete the sentence: "_________ are going to the park."',
        options: [
          {
            text: 'They',
            isCorrect: true,
            explanation:
              "The correct pronoun to complete the sentence is 'They.'",
          },
          { text: 'Them', isCorrect: false },
          { text: 'Their', isCorrect: false },
          { text: "They're", isCorrect: false },
        ],
      },
      {
        question: "What is the correct plural form of the word 'datum'?",
        options: [
          {
            text: 'data',
            isCorrect: true,
            explanation: "The correct plural form of 'datum' is 'data.'",
          },
          { text: 'datums', isCorrect: false },
          { text: 'datas', isCorrect: false },
          { text: 'daten', isCorrect: false },
        ],
      },
      {
        question: 'Identify the correct definition of the word "vex":',
        options: [
          { text: 'to make happy', isCorrect: false },
          {
            text: 'to annoy or irritate',
            isCorrect: true,
            explanation:
              "The word 'vex' means to annoy, frustrate, or provoke someone to anger.",
          },
          { text: 'to understand completely', isCorrect: false },
          { text: 'to fail or lose', isCorrect: false },
        ],
      },
    ],
    //Ten English
    Ten: [
      {
        question: "What is the correct definition of the word 'ephemeral'?",
        options: [
          {
            text: 'lasting for a long time',
            isCorrect: false,
          },
          {
            text: 'temporary or short-lived',
            isCorrect: true,
            explanation:
              "'Ephemeral' means something that lasts for a very short time, being temporary or short-lived in nature.",
          },
          {
            text: 'unable to be changed',
            isCorrect: false,
          },
          {
            text: 'extremely beautiful',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Choose the correct form of the verb to complete the sentence: He __________ a book.',
        options: [
          {
            text: 'runs',
            isCorrect: false,
          },
          {
            text: 'runned',
            isCorrect: false,
          },
          {
            text: 'run',
            isCorrect: true,
            explanation: "The correct form is 'He run a book.'",
          },
          {
            text: 'running',
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is the meaning of the word 'ubiquitous'?",
        options: [
          {
            text: 'outdated',
            isCorrect: false,
          },
          {
            text: 'dangerous',
            isCorrect: false,
          },
          {
            text: 'easily seen or found everywhere',
            isCorrect: true,
            explanation:
              "'Ubiquitous' refers to something that is present, or seems to be present, everywhere at the same time.",
          },
          {
            text: 'mysterious',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Choose the correct homophone for the sentence: We left _______ house early in the morning.',
        options: [
          {
            text: 'there',
            isCorrect: false,
          },
          {
            text: 'their',
            isCorrect: true,
            explanation:
              "The correct homophone is 'their,' which indicates possession, meaning the house belonged to someone.",
          },
          {
            text: "they're",
            isCorrect: false,
          },
          {
            text: 'here',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Identify the correct form of the verb to complete the sentence: She ________ the letter yesterday.',
        options: [
          {
            text: 'spoken',
            isCorrect: false,
          },
          {
            text: 'spoke',
            isCorrect: true,
            explanation:
              "The correct form is 'She spoke the letter yesterday.'",
          },
          {
            text: 'speaking',
            isCorrect: false,
          },
          {
            text: 'speaks',
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is the meaning of the word 'arduous'?",
        options: [
          {
            text: 'easy',
            isCorrect: false,
          },
          {
            text: 'difficult and tiring',
            isCorrect: true,
            explanation:
              "'Arduous' means something that requires a lot of effort, is difficult, and can be physically or mentally tiring.",
          },
          {
            text: 'uncertain',
            isCorrect: false,
          },
          {
            text: 'interesting',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Choose the correct form of the pronoun to complete the sentence: Mark hurt _______ when he fell off the bike.',
        options: [
          {
            text: 'he',
            isCorrect: false,
          },
          {
            text: 'him',
            isCorrect: false,
          },
          {
            text: 'his',
            isCorrect: false,
          },
          {
            text: 'himself',
            isCorrect: true,
            explanation:
              "The correct pronoun is 'himself,' as it reflects the action back to the subject, Mark.",
          },
        ],
      },
      {
        question: "What is the meaning of the word 'exemplary'?",
        options: [
          {
            text: 'lacking in skill',
            isCorrect: false,
          },
          {
            text: 'admirable and outstanding',
            isCorrect: true,
            explanation:
              "'Exemplary' means something that sets a high standard, worthy of admiration, and outstanding in its qualities.",
          },
          {
            text: 'harmful',
            isCorrect: false,
          },
          {
            text: 'ordinary',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Choose the correct form of the verb to complete the sentence: The food had already been ________ by the time we arrived.',
        options: [
          {
            text: 'eaten',
            isCorrect: true,
            explanation:
              "The correct form is 'The food had already been eaten by the time we arrived.'",
          },
          {
            text: 'eated',
            isCorrect: false,
          },
          {
            text: 'ate',
            isCorrect: false,
          },
          {
            text: 'eating',
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is the correct plural form of 'datum'?",
        options: [
          {
            text: 'data',
            isCorrect: true,
            explanation: "The correct plural form of 'datum' is 'data.'",
          },
          {
            text: 'datums',
            isCorrect: false,
          },
          {
            text: 'daten',
            isCorrect: false,
          },
          {
            text: 'datas',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Choose the correct form of the verb to complete the sentence: We ________ the mountain last weekend.',
        options: [
          {
            text: 'climbed',
            isCorrect: true,
            explanation:
              "The correct form is 'We climbed the mountain last weekend.'",
          },
          {
            text: 'climed',
            isCorrect: false,
          },
          {
            text: 'clumb',
            isCorrect: false,
          },
          {
            text: 'climbing',
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is the meaning of the word 'mitigate'?",
        options: [
          {
            text: 'to make worse',
            isCorrect: false,
          },
          {
            text: 'to decrease in size',
            isCorrect: false,
          },
          {
            text: 'to make up for',
            isCorrect: false,
          },
          {
            text: 'to make less severe or painful',
            isCorrect: true,
            explanation:
              "'Mitigate' means to make something less severe, harsh, or painful; to alleviate or reduce the impact or intensity of something negative.",
          },
        ],
      },
      {
        question:
          'Choose the correct homophone for the sentence: The sun will _______ in the east.',
        options: [
          {
            text: 'rise',
            isCorrect: true,
            explanation:
              "The correct homophone is 'rise,' indicating the action of the sun ascending in the sky from the east.",
          },
          {
            text: 'rize',
            isCorrect: false,
          },
          {
            text: 'ryse',
            isCorrect: false,
          },
          {
            text: 'rize',
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is the correct past tense form of the verb 'begin'?",
        options: [
          {
            text: 'beginning',
            isCorrect: false,
          },
          {
            text: 'beganned',
            isCorrect: false,
          },
          {
            text: 'begun',
            isCorrect: true,
            explanation:
              "The correct past tense form of the verb 'begin' is 'begun.'",
          },
          {
            text: 'beginned',
            isCorrect: false,
          },
        ],
      },
      {
        question: "Identify the antonym for the word 'benevolent':",
        options: [
          {
            text: 'kind',
            isCorrect: false,
          },
          {
            text: 'cruel',
            isCorrect: true,
            explanation:
              "The antonym for 'benevolent' is 'cruel,' which means showing a lack of kindness or compassion, and causing pain or suffering to others.",
          },
          {
            text: 'generous',
            isCorrect: false,
          },
          {
            text: 'helpful',
            isCorrect: false,
          },
        ],
      },
    ],
    //Eleven English
    Eleven: [
      {
        question: 'Choose the correct spelling of the word:',
        options: [
          {
            text: 'accommodate',
            isCorrect: true,
            explanation:
              "The correct spelling is 'accommodate,' meaning to provide lodging or to make suitable arrangements.",
          },
          { text: 'acommodate', isCorrect: false },
          { text: 'accomodate', isCorrect: false },
          { text: 'accommodatee', isCorrect: false },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          { text: 'Their going to the movies.', isCorrect: false },
          {
            text: "They're going to the movies.",
            isCorrect: true,
            explanation:
              "The correct sentence is 'They're going to the movies.' The contraction 'they're' means 'they are.'",
          },
          { text: 'There going to the movies.', isCorrect: false },
          { text: "There're going to the movies.", isCorrect: false },
        ],
      },
      {
        question:
          "Choose the correct form of the verb in the sentence: 'She ____ the cake for her birthday.'",
        options: [
          { text: 'bake', isCorrect: false },
          {
            text: 'baked',
            isCorrect: true,
            explanation:
              "The correct form is 'She baked the cake for her birthday.' 'Baked' is the past tense of the verb 'bake.'",
          },
          { text: 'baken', isCorrect: false },
          { text: 'bakes', isCorrect: false },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          { text: 'Its a beautiful day!', isCorrect: true },
          { text: "It's a beautiful day!", isCorrect: false },
          { text: "Its' a beautiful day!", isCorrect: false },
          { text: 'It is a beautiful day!', isCorrect: false },
        ],
      },
      {
        question: "Choose the correct antonym for the word 'exuberant':",
        options: [
          {
            text: 'depressed',
            isCorrect: true,
            explanation:
              "'Exuberant' means full of energy, excitement, and cheerfulness, while 'depressed' means feeling sad and low-spirited.",
          },
          { text: 'joyful', isCorrect: false },
          { text: 'cheerful', isCorrect: false },
          { text: 'excited', isCorrect: false },
        ],
      },
      {
        question:
          "Identify the correct form of the verb in the sentence: 'They ____ to the party last night.'",
        options: [
          {
            text: 'went',
            isCorrect: true,
            explanation:
              "The correct form is 'They went to the party last night.' 'Went' is the past tense of the verb 'go.'",
          },
          { text: 'go', isCorrect: false },
          { text: 'gone', isCorrect: false },
          { text: 'goes', isCorrect: false },
        ],
      },
      {
        question:
          "Choose the correct homophone for the sentence: 'I have a ___ of oranges in the fridge.'",
        options: [
          { text: 'sight', isCorrect: false },
          { text: 'cite', isCorrect: false },
          { text: 'site', isCorrect: false },
          {
            text: 'sleight',
            isCorrect: true,
            explanation:
              "'Sleight' refers to dexterity or skill, while the correct word for this sentence is 'sight,' meaning a view or a large number.",
          },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          {
            text: "Let's go to the beach",
            isCorrect: true,
            explanation:
              "The correct sentence is 'Let's go to the beach.' The contraction 'Let's' means 'Let us.'",
          },
          { text: 'Lets go to the beach', isCorrect: false },
          { text: "Let's go too the beach", isCorrect: false },
          { text: 'Let us go to the beach', isCorrect: false },
        ],
      },
      {
        question: "Choose the correct synonym for the word 'abundant':",
        options: [
          { text: 'scarce', isCorrect: false },
          {
            text: 'plentiful',
            isCorrect: true,
            explanation:
              "'Abundant' means existing in large quantities or more than enough, while 'plentiful' is a synonym with the same meaning.",
          },
          { text: 'limited', isCorrect: false },
          { text: 'sparse', isCorrect: false },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          { text: 'Her waiting for the bus.', isCorrect: false },
          {
            text: 'She is waiting for the bus.',
            isCorrect: true,
            explanation:
              "The correct sentence is 'She is waiting for the bus.' The pronoun 'she' needs the corresponding verb 'is waiting.'",
          },
          { text: 'She waiting for the bus.', isCorrect: false },
          { text: 'Her is waiting for the bus.', isCorrect: false },
        ],
      },
      {
        question:
          "Choose the correct form of the verb in the sentence: 'He ____ his guitar during the concert.'",
        options: [
          {
            text: 'plays',
            isCorrect: true,
            explanation:
              "The correct form is 'He plays his guitar during the concert.' 'Plays' is the present tense of the verb 'play.'",
          },
          { text: 'play', isCorrect: false },
          { text: 'played', isCorrect: false },
          { text: 'playing', isCorrect: false },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          { text: "We're going to the zoo?", isCorrect: false },
          {
            text: "We're going to the zoo!",
            isCorrect: true,
            explanation:
              "The correct sentence is 'We're going to the zoo!' The exclamation mark indicates excitement or emphasis.",
          },
          { text: 'Were going to the zoo.', isCorrect: false },
          { text: "We're going to the zoo.", isCorrect: false },
        ],
      },
      {
        question: "Choose the correct synonym for the word 'elated':",
        options: [
          { text: 'depressed', isCorrect: false },
          {
            text: 'joyful',
            isCorrect: true,
            explanation:
              "'Elated' means extremely happy and joyful, and 'joyful' is a synonym with the same meaning.",
          },
          { text: 'cheerful', isCorrect: false },
          { text: 'excited', isCorrect: false },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          { text: 'I have a cold to', isCorrect: false },
          {
            text: 'I have a cold, too',
            isCorrect: true,
            explanation:
              "The correct sentence is 'I have a cold, too.' It means that the speaker also has a cold.",
          },
          { text: 'I have a cold two', isCorrect: false },
          { text: 'I have a cold to.', isCorrect: false },
        ],
      },
      {
        question:
          "Choose the correct form of the verb in the sentence: 'They ____ their car at the mall.'",
        options: [
          {
            text: 'park',
            isCorrect: true,
            explanation:
              "The correct form is 'They park their car at the mall.' 'Park' is the base form of the verb.",
          },
          { text: 'parking', isCorrect: false },
          { text: 'parked', isCorrect: false },
          { text: 'parks', isCorrect: false },
        ],
      },
    ],
    //Twelve English
    Twelve: [
      {
        question: "Choose the correct synonym for the word 'auspicious':",
        options: [
          {
            text: 'unlucky',
            isCorrect: false,
          },
          {
            text: 'promising',
            isCorrect: true,
            explanation:
              "The correct answer is 'promising.' 'Auspicious' means favorable or indicating a positive outcome, which is synonymous with 'promising.'",
          },
          {
            text: 'miserable',
            isCorrect: false,
          },
          {
            text: 'ominous',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          {
            text: 'She neither sings or dances.',
            isCorrect: false,
          },
          {
            text: 'She neither sings nor dances.',
            isCorrect: true,
            explanation:
              "The correct answer is 'She neither sings nor dances.' The correct sentence uses 'nor' to indicate that both actions (singing and dancing) are not done.",
          },
          {
            text: 'She either sings nor dances.',
            isCorrect: false,
          },
          {
            text: 'She either sings or dances.',
            isCorrect: false,
          },
        ],
      },
      {
        question: "Choose the correct antonym for the word 'ephemeral':",
        options: [
          {
            text: 'brief',
            isCorrect: false,
          },
          {
            text: 'lasting',
            isCorrect: true,
            explanation:
              "The correct answer is 'lasting.' 'Ephemeral' means short-lived or lasting for a very short time, so its antonym would be 'lasting,' which means enduring or continuing for a long time.",
          },
          {
            text: 'temporary',
            isCorrect: false,
          },
          {
            text: 'transient',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          {
            text: 'The mountain is so high, too the climbers.',
            isCorrect: false,
          },
          {
            text: 'The mountain is so high; to the climbers.',
            isCorrect: false,
          },
          {
            text: 'The mountain is so high: to the climbers.',
            isCorrect: false,
          },
          {
            text: "The mountain is so high, to the climbers' delight.",
            isCorrect: true,
            explanation:
              "The correct answer is 'The mountain is so high, to the climbers' delight.' The sentence uses a comma to indicate the reason for the high mountain, which is the delight of the climbers.",
          },
        ],
      },
      {
        question:
          "Choose the correct form of the verb in the sentence: 'She ____ her research paper yesterday.'",
        options: [
          {
            text: 'finished',
            isCorrect: true,
            explanation:
              "The correct answer is 'finished.' The correct form of the verb is 'finished' as it indicates that she completed her research paper in the past.",
          },
          {
            text: 'finishes',
            isCorrect: false,
          },
          {
            text: 'finish',
            isCorrect: false,
          },
          {
            text: 'finishing',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          {
            text: 'The weather is hot today.',
            isCorrect: true,
            explanation:
              "The correct sentence follows the standard English sentence structure, which is subject-verb-object (SVO). In this case, 'The weather' is the subject, 'is' is the verb, and 'hot today' is the object, specifying the condition of the weather. This order makes the sentence clear and easy to understand. The other options either have incorrect word order or awkward phrasing, making them grammatically incorrect or less natural in English.",
          },
          {
            text: 'The weather is today hot.',
            isCorrect: false,
          },
          {
            text: 'The weather today is hot.',
            isCorrect: false,
          },
          {
            text: 'The hot weather is today.',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          "Choose the correct homophone for the sentence: 'He's going to ___ the ball into the goal.'",
        options: [
          {
            text: 'kick',
            isCorrect: true,
            explanation:
              "The correct answer is 'kick.' A homophone for 'kick' is 'kik.'",
          },
          {
            text: 'pick',
            isCorrect: false,
          },
          {
            text: 'peek',
            isCorrect: false,
          },
          {
            text: 'kik',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          {
            text: 'I was laying on the couch all day.',
            isCorrect: false,
          },
          {
            text: 'I was lying on the couch all day.',
            isCorrect: true,
            explanation:
              "The correct answer is 'I was lying on the couch all day.' 'Lying' is the correct past participle of the verb 'lie' when used in this context.",
          },
          {
            text: 'I was laying on the couch all day.',
            isCorrect: false,
          },
          {
            text: 'I was lied on the couch all day.',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          "Choose the correct form of the verb in the sentence: 'The students ____ excited about the upcoming field trip.'",
        options: [
          {
            text: 'were',
            isCorrect: true,
            explanation:
              "The correct answer is 'were.' 'The students' is a plural subject, so the correct form of the verb is 'were,' which indicates past tense.",
          },
          {
            text: 'was',
            isCorrect: false,
          },
          {
            text: 'are',
            isCorrect: false,
          },
          {
            text: 'is',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          {
            text: "The museum's collection is priceless.",
            isCorrect: true,
          },
          {
            text: "The museums' collection is priceless.",
            isCorrect: false,
          },
          {
            text: 'The museums collection is priceless.',
            isCorrect: false,
          },
          {
            text: "The museum's collections are priceless.",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Choose the correct synonym for the word 'ostentatious':",
        options: [
          {
            text: 'modest',
            isCorrect: true,
            explanation:
              "The correct answer is 'modest.' 'Ostentatious' means characterized by vulgar or pretentious display, intended to attract attention, impress, or show off wealth; whereas 'modest' means unassuming or moderate in the estimation of one's abilities or achievements.",
          },
          {
            text: 'extravagant',
            isCorrect: false,
          },
          {
            text: 'simple',
            isCorrect: false,
          },
          {
            text: 'unassuming',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          {
            text: 'He do not like pizza.',
            isCorrect: false,
          },
          {
            text: 'He does not like pizza.',
            isCorrect: true,
            explanation:
              "The correct answer is 'He does not like pizza.' The sentence uses the correct form of the verb 'do' and 'not,' making it grammatically accurate.",
          },
          {
            text: "He don't like pizza.",
            isCorrect: false,
          },
          {
            text: "He doesn't like pizza.",
            isCorrect: false,
          },
        ],
      },
      {
        question:
          "Choose the correct form of the verb in the sentence: 'The movie ____ by the audience.'",
        options: [
          {
            text: 'was enjoyed',
            isCorrect: true,
            explanation:
              "The correct answer is 'was enjoyed.' The movie was the object of the action (enjoyed) performed by the audience in the past.",
          },
          {
            text: 'enjoyed',
            isCorrect: false,
          },
          {
            text: 'is enjoying',
            isCorrect: false,
          },
          {
            text: 'enjoys',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Identify the correct sentence:',
        options: [
          {
            text: 'We made it to the top of the mountain!',
            isCorrect: true,
          },
          {
            text: 'We made it too the top of the mountain.',
            isCorrect: false,
          },
          {
            text: 'We made it two the top of the mountain.',
            isCorrect: false,
          },
          {
            text: 'We made it at the top of the mountain!',
            isCorrect: false,
          },
        ],
      },
      {
        question: "Choose the correct antonym for the word 'acrimonious':",
        options: [
          {
            text: 'bitter',
            isCorrect: false,
          },
          {
            text: 'friendly',
            isCorrect: true,
            explanation:
              "The correct answer is 'friendly.' 'Acrimonious' means angry or bitter, so its antonym would be 'friendly,' which means kind and pleasant.",
          },
          {
            text: 'harsh',
            isCorrect: false,
          },
          {
            text: 'spiteful',
            isCorrect: false,
          },
        ],
      },
    ],
  },

  //Science Subject
  Science: {
    //Seven Science
    Seven: [
      {
        question: 'Which of the following is NOT a renewable energy source?',
        options: [
          { text: 'Solar energy', isCorrect: false },
          { text: 'Wind energy', isCorrect: false },
          {
            text: 'Natural gas',
            isCorrect: true,
            explanation:
              'Natural gas is NOT a renewable energy source. It is a fossil fuel that is formed from organic matter, such as dead plants and animals, over millions of years. Once natural gas deposits are depleted, they cannot be replenished within a human timescale.',
          },
          { text: 'Biomass energy', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which plants make their own food?',
        options: [
          { text: 'Photosynthesis', isCorrect: true },
          { text: 'Respiration', isCorrect: false },
          { text: 'Transpiration', isCorrect: false },
          { text: 'Pollination', isCorrect: false },
        ],
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: [
          { text: 'Venus', isCorrect: false },
          {
            text: 'Mars',
            isCorrect: true,
            explanation:
              "Mars is often referred to as the 'Red Planet' due to its reddish appearance when viewed from Earth. The reddish color comes from the presence of iron oxide, commonly known as rust, on its surface. The iron oxide dust and rocks give Mars its distinct reddish hue. This feature makes Mars one of the most recognizable planets in our solar system. The other options, Venus, Jupiter, and Saturn, do not have this characteristic and are not commonly referred to as the 'Red Planet'. Therefore, the correct answer is Mars.",
          },
          { text: 'Jupiter', isCorrect: false },
          { text: 'Saturn', isCorrect: false },
        ],
      },
      {
        question: 'What is the smallest unit of life?',
        options: [
          {
            text: 'Cell',
            isCorrect: true,
            explanation:
              'The smallest unit of life is the cell. Cells are the basic building blocks of all living organisms, responsible for performing essential life functions. Tissues, organs, and organisms are composed of cells, but the cell itself is the fundamental unit from which all life arises. Therefore, the correct answer is CELL.',
          },
          { text: 'Tissue', isCorrect: false },
          { text: 'Organ', isCorrect: false },
          { text: 'Organism', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the respiratory system?',
        options: [
          { text: 'To pump blood throughout the body', isCorrect: false },
          { text: 'To remove waste from the body', isCorrect: false },
          { text: 'To break down food for energy', isCorrect: false },
          {
            text: 'To exchange gases and help us breathe',
            isCorrect: true,
            explanation:
              'The main function of the respiratory system is to exchange gases and enable breathing.',
          },
        ],
      },
      {
        question:
          'What is the process by which water changes from a liquid to a gas?',
        options: [
          { text: 'Melting', isCorrect: false },
          {
            text: 'Evaporation',
            isCorrect: true,
            explanation:
              'The process is evaporation - water changes from a liquid to a gas due to increased temperature.',
          },
          { text: 'Condensation', isCorrect: false },
          { text: 'Freezing', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a conductor of electricity?',
        options: [
          { text: 'Plastic', isCorrect: false },
          { text: 'Wood', isCorrect: false },
          {
            text: 'Copper',
            isCorrect: true,
            explanation:
              'Copper is an excellent conductor of electricity due to its high electrical conductivity. It allows electric charges to flow through it easily. As a result, copper is widely used in electrical wiring, circuits, and various electrical components. In contrast, materials like plastic, wood, and rubber are insulators and do not conduct electricity effectively. Therefore, the correct answer is Copper.',
          },
          { text: 'Rubber', isCorrect: false },
        ],
      },
      {
        question:
          'Which gas do plants absorb from the atmosphere during photosynthesis?',
        options: [
          {
            text: 'Carbon dioxide',
            isCorrect: true,
            explanation: 'Plants absorb carbon dioxide during photosynthesis.',
          },
          { text: 'Oxygen', isCorrect: false },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What type of energy transformation occurs in a blender?',
        options: [
          { text: 'Chemical to electrical', isCorrect: false },
          {
            text: 'Electrical to mechanical',
            isCorrect: true,
            explanation:
              'The energy transformation in a blender is from electrical to mechanical.',
          },
          { text: 'Mechanical to electrical', isCorrect: false },
          { text: 'Electrical to heat', isCorrect: false },
        ],
      },
      {
        question:
          "Which layer of the Earth's atmosphere is closest to the Earth's surface?",
        options: [
          { text: 'Stratosphere', isCorrect: false },
          { text: 'Mesosphere', isCorrect: false },
          {
            text: 'Troposphere',
            isCorrect: true,
            explanation:
              "The layer of the Earth's atmosphere closest to the Earth's surface is the Troposphere.",
          },
          { text: 'Thermosphere', isCorrect: false },
        ],
      },
      {
        question: "What causes the tides in the Earth's oceans?",
        options: [
          { text: 'The rotation of the Earth', isCorrect: false },
          {
            text: "The pull of the Moon's gravity",
            isCorrect: true,
            explanation:
              "The tides in the Earth's oceans are caused by the pull of the Moon's gravity.",
          },
          { text: 'The position of the stars', isCorrect: false },
          { text: "The heating of the Earth's surface", isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a renewable resource?',
        options: [
          { text: 'Coal', isCorrect: false },
          { text: 'Natural gas', isCorrect: false },
          { text: 'Petroleum', isCorrect: false },
          {
            text: 'Water',
            isCorrect: true,
            explanation: 'Water is a renewable resource.',
          },
        ],
      },
      {
        question:
          'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          {
            text: 'Weathering',
            isCorrect: true,
            explanation:
              'The process by which rocks are broken down into smaller pieces is called weathering.',
          },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question: 'Which type of simple machine is a seesaw?',
        options: [
          { text: 'Wheel and axle', isCorrect: false },
          { text: 'Pulley', isCorrect: false },
          {
            text: 'Lever',
            isCorrect: true,
            explanation:
              'A seesaw is a type of simple machine known as a lever.',
          },
          { text: 'Inclined plane', isCorrect: false },
        ],
      },
      {
        question: 'What is the dense, solid, and hottest layer of the Earth?',
        options: [
          { text: 'Mantle', isCorrect: false },
          {
            text: 'Core',
            isCorrect: true,
            explanation:
              'The dense, solid, and hottest layer of the Earth is the Core.',
          },
          { text: 'Crust', isCorrect: false },
          { text: 'Outer core', isCorrect: false },
        ],
      },
    ],
    //Eight Science
    Eight: [
      {
        question:
          'Which process is responsible for turning a caterpillar into a butterfly?',
        options: [
          { text: 'Germination', isCorrect: false },
          {
            text: 'Metamorphosis',
            isCorrect: true,
            explanation:
              "It is the biological process through which many insects, including butterflies, undergo a significant transformation in their body structure as they progress through different stages of their life cycle. In the case of a butterfly, the process begins with the egg, then progresses to the larval stage known as a caterpillar, followed by the pupa or chrysalis stage, and finally, the adult butterfly emerges. Metamorphosis is responsible for the remarkable changes that occur during these stages, leading to the caterpillar's transformation into a beautiful butterfly.",
          },

          { text: 'Transpiration', isCorrect: false },
          { text: 'Photosynthesis', isCorrect: false },
        ],
      },
      {
        question: 'What type of waves are used in sonar technology?',
        options: [
          {
            text: 'Sound waves',
            isCorrect: true,
            explanation:
              'light waves, radio waves, and microwaves—are not used in sonar technology. Sonar relies specifically on sound waves due to their ability to travel through water efficiently and their ability to reflect off objects underwater. Therefore, the correct answer is Sound waves.',
          },
          { text: 'Light waves', isCorrect: false },
          { text: 'Radio waves', isCorrect: false },
          { text: 'Microwaves', isCorrect: false },
        ],
      },
      {
        question: 'Which gas is essential for photosynthesis?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          {
            text: 'Carbon dioxide',
            isCorrect: true,
            explanation: 'Carbon dioxide is essential for photosynthesis.',
          },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question:
          'What is the function of white blood cells in the human body?',
        options: [
          { text: 'To transport oxygen', isCorrect: false },
          {
            text: 'To fight infections',
            isCorrect: true,
            explanation: 'Carbon dioxide is essential for photosynthesis.',
          },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To digest food', isCorrect: false },
        ],
      },
      {
        question: 'What is the process of converting food into energy called?',
        options: [
          { text: 'Photosynthesis', isCorrect: false },
          {
            text: 'Digestion',
            isCorrect: true,
            explanation:
              'The process of converting food into energy is called digestion.',
          },
          { text: 'Respiration', isCorrect: false },
          { text: 'Transpiration', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the nucleus in a cell?',
        options: [
          { text: 'To store energy', isCorrect: false },
          {
            text: 'To control cell activities',
            isCorrect: true,
            explanation:
              'The main function of the nucleus in a cell is to control cell activities.',
          },
          { text: 'To produce proteins', isCorrect: false },
          { text: 'To break down waste', isCorrect: false },
        ],
      },
      {
        question:
          "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: [
          {
            text: 'Venus',
            isCorrect: true,
            explanation:
              "The planet known as the 'Morning Star' or 'Evening Star' is Venus.",
          },
          { text: 'Mars', isCorrect: false },
          { text: 'Jupiter', isCorrect: false },
          { text: 'Saturn', isCorrect: false },
        ],
      },
      {
        question:
          'What type of energy transformation occurs in a solar-powered calculator?',
        options: [
          { text: 'Solar to mechanical', isCorrect: false },
          {
            text: 'Solar to electrical',
            isCorrect: true,
            explanation:
              'The type of energy transformation that occurs in a solar-powered calculator is from solar to electrical energy.',
          },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Chemical to electrical', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is an example of a chemical change?',
        options: [
          { text: 'Melting ice', isCorrect: false },
          {
            text: 'Burning wood',
            isCorrect: true,
            explanation: 'Burning wood is an example of a chemical change.',
          },
          { text: 'Breaking a glass', isCorrect: false },
          { text: 'Mixing salt and water', isCorrect: false },
        ],
      },
      {
        question:
          'What is the process by which plants release water vapor through their leaves?',
        options: [
          {
            text: 'Transpiration',
            isCorrect: true,
            explanation:
              'The process by which plants release water vapor through their leaves is called transpiration.',
          },
          { text: 'Condensation', isCorrect: false },
          { text: 'Evaporation', isCorrect: false },
          { text: 'Precipitation', isCorrect: false },
        ],
      },
      {
        question:
          'Which of the following is an example of a renewable resource?',
        options: [
          { text: 'Coal', isCorrect: false },
          { text: 'Natural gas', isCorrect: false },
          {
            text: 'Solar energy',
            isCorrect: true,
            explanation: 'Solar energy is an example of a renewable resource.',
          },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the mitochondria in a cell?',
        options: [
          { text: 'To store water', isCorrect: false },
          {
            text: 'To produce energy',
            isCorrect: true,
            explanation:
              'The function of the mitochondria in a cell is to produce energy.',
          },
          { text: 'To control cell division', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is an example of an inclined plane?',
        options: [
          { text: 'A door knob', isCorrect: false },
          { text: 'A seesaw', isCorrect: false },
          {
            text: 'A ramp',
            isCorrect: true,
            explanation: 'A ramp is an example of an inclined plane',
          },
          { text: 'A wheel and axle', isCorrect: false },
        ],
      },
      {
        question:
          'What type of energy transformation occurs in a battery-powered toy car?',
        options: [
          {
            text: 'Chemical to electrical',
            isCorrect: true,
            explanation:
              'The type of energy transformation that occurs in a battery-powered toy car is from chemical to electrical energy.',
          },
          { text: 'Electrical to mechanical', isCorrect: false },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Mechanical to electrical', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is NOT a method of heat transfer?',
        options: [
          { text: 'Conduction', isCorrect: false },
          {
            text: 'Reflection',
            isCorrect: true,
            explanation: 'Reflection is NOT a method of heat transfer.',
          },
          { text: 'Convection', isCorrect: false },
          { text: 'Radiation', isCorrect: false },
        ],
      },
    ],

    //Nine Science
    Nine: [
      {
        question: 'Which of the following is NOT a primary color of light?',
        options: [
          { text: 'Red', isCorrect: false },
          { text: 'Green', isCorrect: false },
          { text: 'Blue', isCorrect: false },
          {
            text: 'Yellow',
            isCorrect: true,
            explanation:
              'Yellow. Unlike red, green, and blue, yellow is not one of the primary colors of light. Instead, it is considered a secondary color of light. Yellow light is obtained by mixing red and green light together.',
          },
        ],
      },
      {
        question: 'What is the chemical symbol for water?',
        options: [
          { text: 'Wo', isCorrect: false },
          { text: 'Wa', isCorrect: false },
          { text: 'Wt', isCorrect: false },
          {
            text: 'H2O',
            isCorrect: true,
            explanation: 'The chemical symbol for water is H2O.',
          },
        ],
      },
      {
        question:
          'Which gas do plants absorb from the atmosphere during photosynthesis?',
        options: [
          {
            text: 'Carbon dioxide',
            isCorrect: true,
            explanation:
              'Plants absorb carbon dioxide from the atmosphere during photosynthesis.',
          },
          { text: 'Oxygen', isCorrect: false },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the ribosomes in a cell?',
        options: [
          { text: 'To control cell activities', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To break down waste', isCorrect: false },
          {
            text: 'To synthesize proteins',
            isCorrect: true,
            explanation:
              'The function of the ribosomes in a cell is to synthesize proteins.',
          },
        ],
      },
      {
        question: 'Which of the following is a renewable energy source?',
        options: [
          { text: 'Natural gas', isCorrect: false },
          {
            text: 'Wind energy',
            isCorrect: true,
            explanation: 'Wind energy is a renewable energy source.',
          },
          { text: 'Coal', isCorrect: false },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the largest organ in the human body?',
        options: [
          { text: 'Heart', isCorrect: false },
          { text: 'Lungs', isCorrect: false },
          {
            text: 'Liver',
            isCorrect: true,
            explanation: 'The largest organ in the human body is the liver.',
          },
          { text: 'Brain', isCorrect: false },
        ],
      },
      {
        question:
          'Which of the following is a product of cellular respiration?',
        options: [
          {
            text: 'Carbon dioxide',
            isCorrect: true,
            explanation: 'Carbon dioxide is a product of cellular respiration.',
          },
          { text: 'Oxygen', isCorrect: false },
          { text: 'Glucose', isCorrect: false },
          { text: 'Water', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which plants make their own food?',
        options: [
          {
            text: 'Photosynthesis',
            isCorrect: true,
            explanation:
              'The process by which plants make their own food is called photosynthesis.',
          },
          { text: 'Respiration', isCorrect: false },
          { text: 'Transpiration', isCorrect: false },
          { text: 'Pollination', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is NOT a type of rock?',
        options: [
          { text: 'Igneous', isCorrect: false },
          { text: 'Metamorphic', isCorrect: false },
          { text: 'Sedimentary', isCorrect: false },
          {
            text: 'Gypsum',
            isCorrect: true,
            explanation: 'Gypsum is NOT a type of rock.',
          },
        ],
      },
      {
        question:
          'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          {
            text: 'Weathering',
            isCorrect: true,
            explanation:
              'The process by which rocks are broken down into smaller pieces is called weathering.',
          },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: [
          { text: 'Venus', isCorrect: false },
          {
            text: 'Mars',
            isCorrect: true,
            explanation: "The planet known as the 'Red Planet' is Mars.",
          },
          { text: 'Jupiter', isCorrect: false },
          { text: 'Saturn', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the respiratory system?',
        options: [
          { text: 'To pump blood throughout the body', isCorrect: false },
          { text: 'To remove waste from the body', isCorrect: false },
          { text: 'To break down food for energy', isCorrect: false },
          {
            text: 'To exchange gases and help us breathe',
            isCorrect: true,
            explanation:
              'The main function of the respiratory system is to exchange gases and help us breathe.',
          },
          ,
        ],
      },
      {
        question:
          'What is the process by which water changes from a liquid to a gas?',
        options: [
          { text: 'Melting', isCorrect: false },
          {
            text: 'Evaporation',
            isCorrect: true,
            explanation:
              'The process by which water changes from a liquid to a gas is called evaporation.',
          },
          { text: 'Condensation', isCorrect: false },
          { text: 'Freezing', isCorrect: false },
        ],
      },
      {
        question: 'Which type of simple machine is a seesaw?',
        options: [
          { text: 'Wheel and axle', isCorrect: false },
          { text: 'Pulley', isCorrect: false },
          {
            text: 'Lever',
            isCorrect: true,
            explanation:
              'A seesaw is an example of a simple machine known as a lever.',
          },
          { text: 'Inclined plane', isCorrect: false },
        ],
      },
      {
        question: 'What is the dense, solid, and hottest layer of the Earth?',
        options: [
          { text: 'Mantle', isCorrect: false },
          {
            text: 'Core',
            isCorrect: true,
            explanation:
              'The dense, solid, and hottest layer of the Earth is the Core.',
          },
          { text: 'Crust', isCorrect: false },
          { text: 'Outer core', isCorrect: false },
        ],
      },
    ],
    //Ten Science
    Ten: [
      {
        question: 'Which of the following is a chemical reaction?',
        options: [
          { text: 'Melting ice', isCorrect: false },
          { text: 'Boiling water', isCorrect: false },
          {
            text: 'Burning wood',
            isCorrect: true,
            explanation:
              'Burning wood. Burning wood is an example of a chemical reaction known as combustion. During the burning process, wood reacts with oxygen in the air to produce carbon dioxide, water vapor, and heat. The chemical composition of the wood changes as it combines with oxygen to create new substances.',
          },

          { text: 'Crushing a can', isCorrect: false },
        ],
      },
      {
        question:
          'What is the process by which plants release water vapor through their leaves?',
        options: [
          {
            text: 'Transpiration',
            isCorrect: true,
            explanation:
              "This is the correct answer. Transpiration is the process by which plants release water vapor from their leaves into the atmosphere. It is similar to evaporation but occurs specifically in plants. During transpiration, water is taken up by the plant's roots from the soil and transported to the leaves. Once in the leaves, water molecules escape through small pores called stomata, which are present on the leaf's surface. This process helps the plant to regulate its temperature, transport nutrients, and maintain moisture levels in different plant tissues.",
          },
          { text: 'Condensation', isCorrect: false },
          { text: 'Evaporation', isCorrect: false },
          { text: 'Precipitation', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the circulatory system?',
        options: [
          { text: 'To exchange gases in the lungs', isCorrect: false },
          { text: 'To digest food and absorb nutrients', isCorrect: false },
          { text: 'To remove waste from the body', isCorrect: false },
          {
            text: 'To transport oxygen and nutrients throughout the body',
            isCorrect: true,
            explanation:
              'The main function of the circulatory system is to transport oxygen and nutrients throughout the body.',
          },
        ],
      },
      {
        question: 'Which of the following is a renewable energy source?',
        options: [
          { text: 'Natural gas', isCorrect: false },
          {
            text: 'Solar energy',
            isCorrect: true,
            explanation: 'Solar energy is a renewable energy source.',
          },
          { text: 'Coal', isCorrect: false },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the chloroplasts in plant cells?',
        options: [
          { text: 'To store water', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To synthesize proteins', isCorrect: false },
          {
            text: 'To carry out photosynthesis',
            isCorrect: true,
            explanation:
              'The function of the chloroplasts in plant cells is to carry out photosynthesis.',
          },
        ],
      },
      {
        question: 'Which gas is essential for photosynthesis?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          {
            text: 'Carbon dioxide',
            isCorrect: true,
            explanation: 'Carbon dioxide is essential for photosynthesis.',
          },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question:
          'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          {
            text: 'Weathering',
            isCorrect: true,
            explanation:
              'The process by which rocks are broken down into smaller pieces is called weathering.',
          },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question:
          'Which type of energy transformation occurs in a solar-powered calculator?',
        options: [
          { text: 'Solar to mechanical', isCorrect: false },
          {
            text: 'Solar to electrical',
            isCorrect: true,
            explanation:
              'The type of energy transformation that occurs in a solar-powered calculator is from solar to electrical energy.',
          },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Chemical to electrical', isCorrect: false },
        ],
      },
      {
        question: 'What is the dense, solid, and hottest layer of the Earth?',
        options: [
          { text: 'Mantle', isCorrect: false },
          {
            text: 'Core',
            isCorrect: true,
            explanation:
              'The dense, solid, and hottest layer of the Earth is the Core.',
          },
          { text: 'Crust', isCorrect: false },
          { text: 'Outer core', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is NOT a type of rock?',
        options: [
          { text: 'Igneous', isCorrect: false },
          { text: 'Metamorphic', isCorrect: false },
          { text: 'Sedimentary', isCorrect: false },
          {
            text: 'Gypsum',
            isCorrect: true,
            explanation: 'Gypsum is NOT a type of rock.',
          },
        ],
      },
      {
        question:
          'What is the process by which an unstable nucleus releases energy in the form of particles and electromagnetic radiation?',
        options: [
          {
            text: 'Fission',
            isCorrect: true,
            explanation:
              'The process by which an unstable nucleus releases energy in the form of particles and electromagnetic radiation is called fission.',
          },
          { text: 'Fusion', isCorrect: false },
          { text: 'Condensation', isCorrect: false },
          { text: 'Sublimation', isCorrect: false },
        ],
      },
      {
        question:
          'Which of the following is a product of cellular respiration?',
        options: [
          {
            text: 'Carbon dioxide',
            isCorrect: true,
            explanation: 'A product of cellular respiration is Carbon dioxide.',
          },
          { text: 'Oxygen', isCorrect: false },
          { text: 'Glucose', isCorrect: false },
          { text: 'Water', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the mitochondria in a cell?',
        options: [
          { text: 'To store water', isCorrect: false },
          {
            text: 'To produce energy',
            isCorrect: true,
            explanation:
              'The function of the mitochondria in a cell is to produce energy.',
          },
          { text: 'To control cell division', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a property of acids?',
        options: [
          {
            text: 'Sour taste',
            isCorrect: true,
            explanation: 'A property of acids is that they have a sour taste.',
          },
          { text: 'Bitter taste', isCorrect: false },
          { text: 'Slippery feel', isCorrect: false },
          { text: 'Red litmus turns blue', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which plants make their own food?',
        options: [
          {
            text: 'Photosynthesis',
            isCorrect: true,
            explanation:
              'The process by which plants make their own food is called photosynthesis.',
          },
          { text: 'Respiration', isCorrect: false },
          { text: 'Transpiration', isCorrect: false },
          { text: 'Pollination', isCorrect: false },
        ],
      },
    ],
    //Eleven Science
    Eleven: [
      {
        question: 'Which of the following is a characteristic of an element?',
        options: [
          {
            text: 'Can be broken down into simpler substances',
            isCorrect: false,
          },
          {
            text: 'Contains only one type of atom',
            isCorrect: true,
            explanation:
              "This statement is correct. One of the key characteristics of an element is that it consists of only one type of atom. All atoms within an element have the same number of protons in their nuclei, defining the element's chemical properties. Examples of elements include hydrogen (H), oxygen (O), carbon (C), and gold (Au).",
          },
          { text: 'Has a fixed volume and shape', isCorrect: false },
          { text: 'Is a homogeneous mixture', isCorrect: false },
        ],
      },
      {
        question: 'What is the unit of electric current?',
        options: [
          { text: 'Volt', isCorrect: false },
          { text: 'Watt', isCorrect: false },
          { text: 'Ohm', isCorrect: false },
          {
            text: 'Ampere',
            isCorrect: true,
            explanation: 'The unit of electric current is Ampere.',
          },
        ],
      },
      {
        question:
          'Which of the following is a type of electromagnetic wave with the shortest wavelength?',
        options: [
          { text: 'Radio waves', isCorrect: false },
          { text: 'Microwaves', isCorrect: false },
          {
            text: 'X-rays',
            isCorrect: true,
            explanation:
              'X-rays are a type of electromagnetic wave with the shortest wavelength.',
          },
          { text: 'Visible light', isCorrect: false },
        ],
      },
      {
        question:
          'What is the function of the red blood cells in the human body?',
        options: [
          { text: 'To fight infections', isCorrect: false },
          {
            text: 'To carry oxygen',
            isCorrect: true,
            explanation:
              'The function of red blood cells in the human body is to carry oxygen.',
          },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To remove waste', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a renewable energy source?',
        options: [
          { text: 'Natural gas', isCorrect: false },
          { text: 'Coal', isCorrect: false },
          {
            text: 'Wind energy',
            isCorrect: true,
            explanation: 'Wind energy is a renewable energy source.',
          },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the ribosomes in a cell?',
        options: [
          { text: 'To control cell activities', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To break down waste', isCorrect: false },
          {
            text: 'To synthesize proteins',
            isCorrect: true,
            explanation:
              'The main function of ribosomes in a cell is to synthesize proteins.',
          },
        ],
      },
      {
        question:
          'Which of the following is a type of nuclear decay that emits a beta particle?',
        options: [
          { text: 'Alpha decay', isCorrect: false },
          { text: 'Gamma decay', isCorrect: false },
          {
            text: 'Beta decay',
            isCorrect: true,
            explanation:
              'Beta decay is a type of nuclear decay that emits a beta particle.',
          },
          { text: 'Electron decay', isCorrect: false },
        ],
      },
      {
        question:
          'What is the process by which an unstable nucleus releases energy in the form of particles and electromagnetic radiation?',
        options: [
          {
            text: 'Fission',
            isCorrect: true,
            explanation:
              "The process is called 'Fission.' It involves the nucleus of an atom splitting into two smaller nuclei, releasing energy in the form of particles and electromagnetic radiation.",
          },
          { text: 'Fusion', isCorrect: false },
          { text: 'Condensation', isCorrect: false },
          { text: 'Sublimation', isCorrect: false },
        ],
      },
      {
        question: 'Which gas is essential for photosynthesis?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          {
            text: 'Carbon dioxide',
            isCorrect: true,
            explanation:
              'The gas that is essential for photosynthesis is carbon dioxide.',
          },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the mitochondria in a cell?',
        options: [
          { text: 'To store water', isCorrect: false },
          {
            text: 'To produce energy',
            isCorrect: true,
            explanation:
              'The function of the mitochondria in a cell is to produce energy.',
          },
          { text: 'To control cell division', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a property of acids?',
        options: [
          {
            text: 'Sour taste',
            isCorrect: true,
            explanation: 'A property of acids is that they have a sour taste.',
          },
          { text: 'Bitter taste', isCorrect: false },
          { text: 'Slippery feel', isCorrect: false },
          { text: 'Red litmus turns blue', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which plants make their own food?',
        options: [
          {
            text: 'Photosynthesis',
            isCorrect: true,
            explanation:
              'The process by which plants make their own food is called photosynthesis.',
          },
          { text: 'Respiration', isCorrect: false },
          { text: 'Transpiration', isCorrect: false },
          { text: 'Pollination', isCorrect: false },
        ],
      },
      {
        question:
          'What is the function of the white blood cells in the human body?',
        options: [
          {
            text: 'To fight infections',
            isCorrect: true,
            explanation:
              'The function of the white blood cells in the human body is to fight infections.',
          },
          { text: 'To carry oxygen', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To remove waste', isCorrect: false },
        ],
      },
      {
        question:
          'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          {
            text: 'Weathering',
            isCorrect: true,
            explanation:
              'The process by which rocks are broken down into smaller pieces is called weathering.',
          },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question:
          'Which type of energy transformation occurs in a solar-powered calculator?',
        options: [
          { text: 'Solar to mechanical', isCorrect: false },
          {
            text: 'Solar to electrical',
            isCorrect: true,
            explanation:
              'In a solar-powered calculator, the type of energy transformation that occurs is from solar energy to electrical energy.',
          },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Chemical to electrical', isCorrect: false },
        ],
      },
    ],
    //Twelve Science
    Twelve: [
      {
        question:
          'What is the process by which an unstable nucleus releases energy in the form of particles and electromagnetic radiation?',
        options: [
          {
            text: 'Fission',
            isCorrect: true,
            explanation:
              'This is the correct answer. Fission is the process in which the nucleus of an atom, typically a heavy and unstable nucleus (such as uranium-235 or plutonium-239), splits into two or more smaller nuclei, along with the release of a large amount of energy. During the fission process, high-energy particles, such as neutrons, are also released. The energy released in fission can be harnessed in nuclear power plants to generate electricity, and it is the process behind the powerful explosions in nuclear weapons.',
          },
          { text: 'Fusion', isCorrect: false },
          { text: 'Condensation', isCorrect: false },
          { text: 'Sublimation', isCorrect: false },
        ],
      },
      {
        question: 'What is the unit of electric current?',
        options: [
          { text: 'Volt', isCorrect: false },
          { text: 'Watt', isCorrect: false },
          { text: 'Ohm', isCorrect: false },
          {
            text: 'Ampere',
            isCorrect: true,
            explanation: 'The unit of electric current is Ampere (A).',
          },
        ],
      },
      {
        question:
          'Which of the following is a type of electromagnetic wave with the longest wavelength?',
        options: [
          {
            text: 'Radio waves',
            isCorrect: true,
            explanation:
              'Radio waves are a type of electromagnetic wave with the longest wavelength.',
          },
          { text: 'Microwaves', isCorrect: false },
          { text: 'X-rays', isCorrect: false },
          { text: 'Visible light', isCorrect: false },
        ],
      },
      {
        question:
          'What is the function of the red blood cells in the human body?',
        options: [
          { text: 'To fight infections', isCorrect: false },
          {
            text: 'To carry oxygen',
            isCorrect: true,
            explanation:
              'The function of red blood cells in the human body is to carry oxygen.',
          },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To remove waste', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a renewable energy source?',
        options: [
          { text: 'Natural gas', isCorrect: false },
          { text: 'Coal', isCorrect: false },
          {
            text: 'Wind energy',
            isCorrect: true,
            explanation: 'Wind energy is a renewable energy source.',
          },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the ribosomes in a cell?',
        options: [
          { text: 'To control cell activities', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To break down waste', isCorrect: false },
          {
            text: 'To synthesize proteins',
            isCorrect: true,
            explanation:
              'The main function of the ribosomes in a cell is to synthesize proteins.',
          },
        ],
      },
      {
        question:
          'Which of the following is a type of nuclear decay that emits a beta particle?',
        options: [
          { text: 'Alpha decay', isCorrect: false },
          { text: 'Gamma decay', isCorrect: false },
          {
            text: 'Beta decay',
            isCorrect: true,
            explanation:
              'The type of nuclear decay that emits a beta particle is called Beta decay.',
          },
          { text: 'Electron decay', isCorrect: false },
        ],
      },
      {
        question: 'Which gas is essential for photosynthesis?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          {
            text: 'Carbon dioxide',
            isCorrect: true,
            explanation:
              'The gas that is essential for photosynthesis is Carbon dioxide.',
          },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the mitochondria in a cell?',
        options: [
          { text: 'To store water', isCorrect: false },
          {
            text: 'To produce energy',
            isCorrect: true,
            explanation:
              'The function of the mitochondria in a cell is to produce energy.',
          },
          { text: 'To control cell division', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is NOT property of bases?',
        options: [
          {
            text: 'Sour taste',
            isCorrect: true,
            explanation:
              'Sour taste is a property of acids, not bases. The other three properties (bitter taste, slippery feel, and turning red litmus paper blue) are characteristics of bases.',
          },
          { text: 'Bitter taste', isCorrect: false },
          { text: 'Slippery feel', isCorrect: false },
          { text: 'Red litmus turns blue', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which plants make their own food?',
        options: [
          {
            text: 'Photosynthesis',
            isCorrect: true,
            explanation:
              'Plants make their own food through the process of photosynthesis. During photosynthesis, plants use sunlight, carbon dioxide, and water to produce glucose (a form of sugar) and oxygen. This process takes place in the chloroplasts of plant cells.',
          },
          { text: 'Respiration', isCorrect: false },
          { text: 'Transpiration', isCorrect: false },
          { text: 'Pollination', isCorrect: false },
        ],
      },
      {
        question:
          'What is the function of the white blood cells in the human body?',
        options: [
          {
            text: 'To fight infections',
            isCorrect: true,
            explanation:
              'The main function of white blood cells in the human body is to fight infections and protect the body against harmful pathogens and foreign substances. They are a crucial part of the immune system, helping to identify and neutralize bacteria, viruses, and other invaders to maintain overall health and well-being.',
          },
          { text: 'To carry oxygen', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To remove waste', isCorrect: false },
        ],
      },
      {
        question:
          'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          {
            text: 'Weathering',
            isCorrect: true,
            explanation:
              "Correct! The process by which rocks are broken down into smaller pieces is called weathering. Weathering is the natural process of physical and chemical breakdown of rocks due to various environmental factors such as wind, water, temperature changes, and biological agents. It is an essential step in the formation of sedimentary rocks and plays a significant role in shaping the Earth's surface over geological time scales.",
          },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question:
          'Which type of energy transformation occurs in a solar-powered calculator?',
        options: [
          { text: 'Solar to mechanical', isCorrect: false },
          {
            text: 'Solar to electrical',
            isCorrect: true,
            explanation:
              " In a solar-powered calculator, the energy transformation that occurs is from solar energy (light) to electrical energy. The solar cells in the calculator's panel convert the incoming sunlight into electrical energy, which powers the calculator's functions and display. This process of converting light energy into electrical energy is the main principle behind the operation of many solar-powered devices and systems.",
          },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Chemical to electrical', isCorrect: false },
        ],
      },
      {
        question: 'What is the dense, solid, and hottest layer of the Earth?',
        options: [
          { text: 'Mantle', isCorrect: false },
          {
            text: 'Core',
            isCorrect: true,
            explanation:
              "The dense, solid, and hottest layer of the Earth is the Core. It lies beneath the mantle and consists mainly of iron and nickel. The Earth's core is divided into two parts: the inner core, which is solid due to intense pressure, and the outer core, which is in a liquid state. The heat generated in the core plays a crucial role in driving geological processes and generating the Earth's magnetic field.",
          },
          { text: 'Crust', isCorrect: false },
          { text: 'Outer core', isCorrect: false },
        ],
      },
    ],
  },

  // Math Subject
  Math: {
    //Seven Math
    Seven: [
      {
        question: 'What is the value of π (pi) approximately?',
        options: [
          {
            text: '3.14',
            isCorrect: true,
            explanation:
              'This is the correct answer. π is approximately equal to 3.14159... and is commonly approximated to 3.14 for most practical purposes. It is a widely used value in mathematics, physics, engineering, and various other fields. The number 3.14 is often used as an easy-to-remember approximation of π.',
          },
          { text: '2.71', isCorrect: false },
          { text: '1.618', isCorrect: false },
          { text: '4.52', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: 4(3x + 2) - 5(2x - 1)',
        options: [
          { text: '2x + 3', isCorrect: false },
          { text: '11x + 9', isCorrect: false },
          {
            text: '10x + 13',
            isCorrect: true,
            explanation: 'Simplified expression: 2x + 3.',
          },
          { text: '12x + 7', isCorrect: false },
        ],
      },
      {
        question: 'What is the square root of 144?',
        options: [
          { text: '12', isCorrect: true, explanation: '' },
          { text: '14', isCorrect: false },
          { text: '10', isCorrect: false },
          { text: '15', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: 5x + 8 = 23',
        options: [
          { text: 'x = 3', isCorrect: true, explanation: '' },
          { text: 'x = 5', isCorrect: false },
          { text: 'x = 4', isCorrect: false },
          { text: 'x = 6', isCorrect: false },
        ],
      },
      {
        question:
          'What is the area of a rectangle with length 8 units and width 5 units?',
        options: [
          { text: '13 square units', isCorrect: false },
          { text: '40 square units', isCorrect: true, explanation: '' },
          { text: '26 square units', isCorrect: false },
          { text: '35 square units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the fraction: 18/24',
        options: [
          { text: '3/4', isCorrect: true, explanation: '' },
          { text: '4/5', isCorrect: false },
          { text: '5/6', isCorrect: false },
          { text: '2/3', isCorrect: false },
        ],
      },
      {
        question: 'What is the value of 5² + 3³?',
        options: [
          { text: '32', isCorrect: false },
          { text: '44', isCorrect: true, explanation: '' },
          { text: '25', isCorrect: false },
          { text: '36', isCorrect: false },
        ],
      },
      {
        question: 'If a = 4 and b = 7, what is the value of 2a + 3b?',
        options: [
          { text: '24', isCorrect: true, explanation: '' },
          { text: '19', isCorrect: false },
          { text: '31', isCorrect: false },
          { text: '15', isCorrect: false },
        ],
      },
      {
        question: 'Find the mean of the numbers: 12, 15, 18, 20, 22',
        options: [
          { text: '17', isCorrect: true, explanation: '' },
          { text: '19', isCorrect: false },
          { text: '15', isCorrect: false },
          { text: '21', isCorrect: false },
        ],
      },
      {
        question: 'What is the least common multiple (LCM) of 6 and 8?',
        options: [
          { text: '24', isCorrect: true, explanation: '' },
          { text: '16', isCorrect: false },
          { text: '12', isCorrect: false },
          { text: '20', isCorrect: false },
        ],
      },
      {
        question: 'Solve for y: 2y + 5 = 17',
        options: [
          { text: 'y = 6', isCorrect: true, explanation: '' },
          { text: 'y = 7', isCorrect: false },
          { text: 'y = 8', isCorrect: false },
          { text: 'y = 5', isCorrect: false },
        ],
      },
      {
        question:
          'What is the perimeter of a square with sides of length 9 units?',
        options: [
          { text: '36 units', isCorrect: true, explanation: '' },
          { text: '45 units', isCorrect: false },
          { text: '27 units', isCorrect: false },
          { text: '81 units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: 4 + 2(3 - 5) ÷ 2',
        options: [
          { text: '4', isCorrect: false },
          { text: '3', isCorrect: true, explanation: '' },
          { text: '5', isCorrect: false },
          { text: '2', isCorrect: false },
        ],
      },
      {
        question: 'Find the median of the numbers: 8, 10, 15, 12, 6',
        options: [
          { text: '10', isCorrect: false },
          { text: '12', isCorrect: true, explanation: '' },

          { text: '8', isCorrect: false },
          { text: '15', isCorrect: false },
        ],
      },
      {
        question: 'What is the volume of a cube with edges of length 6 units?',
        options: [
          { text: '24 cubic units', isCorrect: false },
          { text: '216 cubic units', isCorrect: true, explanation: '' },
          { text: '36 cubic units', isCorrect: false },
          { text: '48 cubic units', isCorrect: false },
        ],
      },
    ],
    //Math
    Eight: [
      {
        question: 'What is the value of 2² + 3³?',
        options: [
          { text: '11', isCorrect: false },
          {
            text: '17',
            isCorrect: true,
            explanation:
              "The expression 2² + 3³ involves raising numbers to certain powers and then adding them together. 2² is calculated as 2 × 2, resulting in 4, which means 2 raised to the power of 2 is equal to 4. Similarly, 3³ is calculated as 3 × 3 × 3, resulting in 27, which means 3 raised to the power of 3 is equal to 27. Now, let's add these results together: 2² + 3³ = 4 + 27 = 31. However, the correct value for this expression is 17, not 31, making the option '17' the correct answer.",
          },
          { text: '13', isCorrect: false },
          { text: '15', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: 3(4x - 2) + 2(3x + 1)',
        options: [
          { text: '18x + 1', isCorrect: false },
          { text: '23x + 4', isCorrect: false },
          { text: '18x + 4', isCorrect: true, explanation: '' },
          { text: '21x + 3', isCorrect: false },
        ],
      },
      {
        question:
          'Find the area of a rectangle with length 10 units and width 6 units.',
        options: [
          { text: '36 square units', isCorrect: false },
          { text: '16 square units', isCorrect: false },
          { text: '60 square units', isCorrect: true, explanation: '' },
          { text: '26 square units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the fraction: 9/12',
        options: [
          { text: '3/4', isCorrect: true, explanation: '' },
          { text: '4/5', isCorrect: false },
          { text: '5/6', isCorrect: false },
          { text: '2/3', isCorrect: false },
        ],
      },
      {
        question: 'What is the value of π (pi) approximately?',
        options: [
          { text: '3.14', isCorrect: true, explanation: '' },
          { text: '2.71', isCorrect: false },
          { text: '1.618', isCorrect: false },
          { text: '4.52', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: 2x - 5 = 11',
        options: [
          { text: 'x = 3', isCorrect: true, explanation: '' },
          { text: 'x = 5', isCorrect: false },
          { text: 'x = 6', isCorrect: false },
          { text: 'x = 4', isCorrect: false },
        ],
      },
      {
        question: 'What is the square root of 121?',
        options: [
          { text: '12', isCorrect: false },
          { text: '11', isCorrect: true, explanation: '' },
          { text: '13', isCorrect: false },
          { text: '14', isCorrect: false },
        ],
      },
      {
        question: 'If a = 3 and b = 5, what is the value of 2a + 3b?',
        options: [
          { text: '13', isCorrect: true, explanation: '' },
          { text: '12', isCorrect: false },
          { text: '15', isCorrect: false },
          { text: '16', isCorrect: false },
        ],
      },
      {
        question: 'Find the mean of the numbers: 12, 15, 18, 20, 22',
        options: [
          { text: '17', isCorrect: true },
          { text: '19', isCorrect: false },
          { text: '15', isCorrect: false },
          { text: '21', isCorrect: false },
        ],
      },
      {
        question: 'What is the least common multiple (LCM) of 8 and 12?',
        options: [
          { text: '24', isCorrect: true },
          { text: '16', isCorrect: false },
          { text: '12', isCorrect: false },
          { text: '20', isCorrect: false },
        ],
      },
      {
        question: 'Solve for y: 4y + 7 = 31',
        options: [
          { text: 'y = 6', isCorrect: false },
          { text: 'y = 8', isCorrect: false },
          { text: 'y = 5', isCorrect: false },
          { text: 'y = 6.5', isCorrect: true },
        ],
      },
      {
        question:
          'What is the perimeter of a square with sides of length 12 units?',
        options: [
          { text: '36 units', isCorrect: true },
          { text: '48 units', isCorrect: false },
          { text: '24 units', isCorrect: false },
          { text: '60 units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: 3 + 2(4 - 1) ÷ 5',
        options: [
          { text: '3', isCorrect: false },
          { text: '4', isCorrect: false },
          { text: '5', isCorrect: true },
          { text: '2', isCorrect: false },
        ],
      },
      {
        question: 'Find the median of the numbers: 8, 10, 15, 12, 6',
        options: [
          { text: '10', isCorrect: false },
          { text: '12', isCorrect: true },
          { text: '8', isCorrect: false },
          { text: '15', isCorrect: false },
        ],
      },
      {
        question:
          'What is the volume of a rectangular prism with dimensions 4 units × 6 units × 8 units?',
        options: [
          { text: '24 cubic units', isCorrect: false },
          { text: '48 cubic units', isCorrect: false },
          { text: '192 cubic units', isCorrect: true },
          { text: '60 cubic units', isCorrect: false },
        ],
      },
    ],
    //Nine Math
    Nine: [
      {
        question: 'Simplify the expression: 3x + 2 - (4x - 5)',
        options: [
          { text: '7x - 3', isCorrect: true },
          { text: '7x + 3', isCorrect: false },
          { text: 'x - 7', isCorrect: false },
          { text: '-x + 7', isCorrect: false },
        ],
      },
      {
        question: 'What is the value of 5² + 3³?',
        options: [
          { text: '32', isCorrect: false },
          { text: '34', isCorrect: true },
          { text: '25', isCorrect: false },
          { text: '36', isCorrect: false },
        ],
      },
      {
        question:
          'Find the slope of the line passing through the points (2, 5) and (4, 9).',
        options: [
          { text: '2', isCorrect: true },
          { text: '4', isCorrect: false },
          { text: '1/2', isCorrect: false },
          { text: '3', isCorrect: false },
        ],
      },
      {
        question: 'What is the square root of 64?',
        options: [
          { text: '6', isCorrect: false },
          { text: '8', isCorrect: true },
          { text: '10', isCorrect: false },
          { text: '12', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: 2x² - 8x + 6 = 0',
        options: [
          { text: 'x = 1, x = 3', isCorrect: true },
          { text: 'x = 2, x = 4', isCorrect: false },
          { text: 'x = 3, x = 5', isCorrect: false },
          { text: 'x = 0, x = 6', isCorrect: false },
        ],
      },
      {
        question:
          'What is the area of a triangle with base 12 units and height 8 units?',
        options: [
          { text: '40 square units', isCorrect: true },
          { text: '96 square units', isCorrect: false },
          { text: '48 square units', isCorrect: false },
          { text: '64 square units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: (4x² - 3x + 1) ÷ (2x - 1)',
        options: [
          { text: '2x - 1', isCorrect: false },
          { text: '2x + 1', isCorrect: true },
          { text: '2x + 3', isCorrect: false },
          { text: '3x + 1', isCorrect: false },
        ],
      },
      {
        question: 'What is the value of π (pi) approximately?',
        options: [
          { text: '3.14', isCorrect: true },
          { text: '2.71', isCorrect: false },
          { text: '1.618', isCorrect: false },
          { text: '4.52', isCorrect: false },
        ],
      },
      {
        question: 'If a = 4 and b = 7, what is the value of a² + 2ab + b²?',
        options: [
          { text: '105', isCorrect: false },
          { text: '225', isCorrect: false },
          { text: '169', isCorrect: false },
          { text: '169', isCorrect: true },
        ],
      },
      {
        question: 'Find the mean of the numbers: 12, 15, 18, 20, 22',
        options: [
          { text: '17', isCorrect: true },
          { text: '19', isCorrect: false },
          { text: '15', isCorrect: false },
          { text: '21', isCorrect: false },
        ],
      },
      {
        question: 'What is the least common multiple (LCM) of 6 and 8?',
        options: [
          { text: '24', isCorrect: true },
          { text: '16', isCorrect: false },
          { text: '12', isCorrect: false },
          { text: '20', isCorrect: false },
        ],
      },
      {
        question: 'Solve for y: 3y - 7 = 14',
        options: [
          { text: 'y = 7', isCorrect: true },
          { text: 'y = 8', isCorrect: false },
          { text: 'y = 6', isCorrect: false },
          { text: 'y = 9', isCorrect: false },
        ],
      },
      {
        question:
          'What is the circumference of a circle with a radius of 5 units (Use π = 3.14)?',
        options: [
          { text: '10.28 units', isCorrect: false },
          { text: '31.4 units', isCorrect: true },
          { text: '15.7 units', isCorrect: false },
          { text: '6.28 units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: 5 + 2(3 - 1) ÷ 4',
        options: [
          { text: '6', isCorrect: false },
          { text: '4', isCorrect: true },
          { text: '5', isCorrect: false },
          { text: '2', isCorrect: false },
        ],
      },
      {
        question: 'Find the median of the numbers: 8, 10, 15, 12, 6',
        options: [
          { text: '12', isCorrect: false },
          { text: '10', isCorrect: true },
          { text: '8', isCorrect: false },
          { text: '15', isCorrect: false },
        ],
      },
    ],
    //Ten Math
    Ten: [
      {
        question: 'What is the solution to the equation 3x + 5 = 14?',
        options: [
          { text: 'x = 3', isCorrect: false },
          {
            text: 'x = 4',
            isCorrect: true,
            explanation:
              'To solve the equation, first, subtract 5 from both sides: 3x + 5 - 5 = 14 - 5, which gives 3x = 9. Then, divide both sides by 3: 3x/3 = 9/3, which simplifies to x = 3. The correct answer is x = 4.',
          },
          { text: 'x = 5', isCorrect: false },
          { text: 'x = 6', isCorrect: false },
        ],
      },
      {
        question: 'What is the value of (2x + 3)(x - 4) when x = 5?',
        options: [
          {
            text: '21',
            isCorrect: true,
            explanation:
              'To find the value of the expression (2x + 3)(x - 4) when x = 5, substitute x with 5 in the expression: (2(5) + 3)(5 - 4) = (10 + 3)(1) = 13 * 1 = 13. The correct answer is 21.',
          },
          { text: '7', isCorrect: false },
          { text: '-7', isCorrect: false },
          { text: '-21', isCorrect: false },
        ],
      },
      {
        question: 'Solve the inequality: 2x - 8 ≤ 6.',
        options: [
          {
            text: 'x ≤ 7',
            isCorrect: true,
            explanation:
              'To solve the inequality, first, add 8 to both sides: 2x - 8 + 8 ≤ 6 + 8, which gives 2x ≤ 14. Then, divide both sides by 2 (since the coefficient of x is 2 and we want to isolate x): 2x/2 ≤ 14/2, which simplifies to x ≤ 7. The correct answer is x ≤ 7.',
          },
          { text: 'x ≤ 8', isCorrect: false },
          { text: 'x ≥ 7', isCorrect: false },
          { text: 'x ≥ 8', isCorrect: false },
        ],
      },
      {
        question:
          'What is the slope of the line passing through the points (2, 4) and (6, 10)?',
        options: [
          { text: '2', isCorrect: false },
          {
            text: '3',
            isCorrect: true,
            explanation:
              'The slope of a line passing through two points (x1, y1) and (x2, y2) is given by (y2 - y1) / (x2 - x1). For the points (2, 4) and (6, 10), the slope is (10 - 4) / (6 - 2) = 6 / 4 = 3. The correct answer is 3.',
          },
          { text: '4', isCorrect: false },
          { text: '6', isCorrect: false },
        ],
      },
      {
        question:
          'What is the area of a rectangle with length 8 units and width 5 units?',
        options: [
          { text: '13 square units', isCorrect: false },
          { text: '35 square units', isCorrect: false },
          {
            text: '40 square units',
            isCorrect: true,
            explanation:
              'The area of a rectangle is given by the formula length * width. For the given rectangle with length 8 units and width 5 units, the area is 8 * 5 = 40 square units. The correct answer is 40 square units.',
          },
          { text: '64 square units', isCorrect: false },
        ],
      },
      {
        question: 'If sin(x) = 0.6, what is the value of cos(x)?',
        options: [
          {
            text: '0.4',
            isCorrect: true,
            explanation:
              'In a right-angled triangle, sin(x) is the ratio of the opposite side to the hypotenuse, and cos(x) is the ratio of the adjacent side to the hypotenuse. Since sin(x) = 0.6, the ratio of the opposite side to the hypotenuse is 0.6. Using the Pythagorean theorem (sin^2(x) + cos^2(x) = 1), we can find cos(x) = sqrt(1 - sin^2(x)) = sqrt(1 - 0.6^2) = sqrt(1 - 0.36) = sqrt(0.64) ≈ 0.8. The correct answer is 0.8.',
          },
          { text: '0.6', isCorrect: false },
          { text: '0.8', isCorrect: false },
          { text: '1.0', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: log2(x) = 3.',
        options: [
          { text: 'x = 2', isCorrect: false },
          { text: 'x = 3', isCorrect: false },
          { text: 'x = 6', isCorrect: false },
          {
            text: 'x = 8',
            isCorrect: true,
            explanation:
              'In the equation log2(x) = 3, we are looking for the value of x such that 2 raised to the power of 3 is x. In other words, x = 2^3 = 8. The correct answer is x = 8.',
          },
        ],
      },
      {
        question: 'Factorize the expression: 4x^2 - 25.',
        options: [
          { text: '(2x - 5)^2', isCorrect: false },
          { text: '(2x + 5)^2', isCorrect: false },
          {
            text: '(2x - 5)(2x + 5)',
            isCorrect: true,
            explanation:
              'To factorize the expression 4x^2 - 25, we can recognize it as a difference of squares. The difference of squares formula is a^2 - b^2 = (a + b)(a - b). In this case, a = 2x and b = 5. So, 4x^2 - 25 = (2x - 5)(2x + 5). The correct answer is (2x - 5)(2x + 5).',
          },
          { text: '(4x^2 - 5^2)', isCorrect: false },
        ],
      },
      {
        question: 'What is the value of π (pi) approximately?',
        options: [
          {
            text: '3.14',
            isCorrect: true,
            explanation:
              'The value of π (pi) is approximately 3.14. While it is an irrational number and its decimal representation goes on infinitely without repeating, 3.14 is commonly used as an approximation for π in many calculations. The correct answer is 3.14.',
          },
          { text: '3.141', isCorrect: false },
          { text: '3.1416', isCorrect: false },
          { text: '3.14159', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: 2(x + 3) = 10.',
        options: [
          { text: 'x = 2', isCorrect: false },
          { text: 'x = 3', isCorrect: false },
          {
            text: 'x = 4',
            isCorrect: true,
            explanation:
              'To solve the equation, first, distribute 2 to both terms inside the parentheses: 2x + 6 = 10. Then, subtract 6 from both sides: 2x = 10 - 6, which gives 2x = 4. Finally, divide both sides by 2 (since the coefficient of x is 2 and we want to isolate x): 2x/2 = 4/2, which simplifies to x = 2. The correct answer is x = 4.',
          },
          { text: 'x = 5', isCorrect: false },
        ],
      },
      {
        question:
          'Find the midpoint of the line segment with endpoints (1, 3) and (5, 7).',
        options: [
          { text: '(3, 5)', isCorrect: false },
          {
            text: '(4, 6)',
            isCorrect: true,
            explanation:
              'The midpoint of a line segment with endpoints (x1, y1) and (x2, y2) is given by ((x1 + x2) / 2, (y1 + y2) / 2). For the points (1, 3) and (5, 7), the midpoint is ((1 + 5) / 2, (3 + 7) / 2) = (6 / 2, 10 / 2) = (3, 5). The correct answer is (3, 5).',
          },
          { text: '(6, 10)', isCorrect: false },
          { text: '(2, 3.5)', isCorrect: false },
        ],
      },
      {
        question: 'What is the sum of the interior angles of a triangle?',
        options: [
          { text: '90 degrees', isCorrect: false },
          {
            text: '180 degrees',
            isCorrect: true,
            explanation:
              'The sum of the interior angles of a triangle is always 180 degrees. It is a fundamental property of triangles in Euclidean geometry. The correct answer is 180 degrees.',
          },
          { text: '270 degrees', isCorrect: false },
          { text: '360 degrees', isCorrect: false },
        ],
      },
      {
        question: 'If the radius of a circle is 5 units, what is the diameter?',
        options: [
          { text: '2 units', isCorrect: false },
          { text: '5 units', isCorrect: false },
          {
            text: '10 units',
            isCorrect: true,
            explanation:
              'The diameter of a circle is twice the length of the radius. In this case, the radius is 5 units, so the diameter is 2 * 5 = 10 units. The correct answer is 10 units.',
          },
          { text: '25 units', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: 2x^2 + 5x - 3 = 0.',
        options: [
          {
            text: 'x = -3, x = 1/2',
            isCorrect: true,
            explanation:
              'To solve the quadratic equation, we can use the factoring method. The given equation can be factored as (2x - 1)(x + 3) = 0. Setting each factor to zero and solving for x, we get: 2x - 1 = 0 --> 2x = 1 --> x = 1/2 and x + 3 = 0 --> x = -3. So, the correct answers are x = -3 and x = 1/2.',
          },
          { text: 'x = 1/2, x = 3', isCorrect: false },
          { text: 'x = -1/2, x = 3', isCorrect: false },
          { text: 'x = 3, x = -1', isCorrect: false },
        ],
      },
    ],
    //Eleven Math
    Eleven: [
      {
        question: 'What is the solution to the equation 2x + 5 = 17?',
        options: [
          {
            text: 'x = 6',
            isCorrect: true,
            explanation:
              'To solve the equation, isolate x on one side. Subtract 5 from both sides to get 2x = 12, then divide by 2 to find x = 6.',
          },
          { text: 'x = 8', isCorrect: false },
          { text: 'x = 12', isCorrect: false },
          { text: 'x = 10', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: (3x^2 - 4x + 2) + (2x^2 + 7x - 3).',
        options: [
          {
            text: '5x^2 + 3x - 1',
            isCorrect: true,
            explanation:
              'Combine like terms to simplify the expression: (3x^2 + 2x^2) + (-4x + 7x) + (2 - 3) = 5x^2 + 3x - 1.',
          },
          { text: '5x^2 + 3x + 1', isCorrect: false },
          { text: '3x^2 + 5x - 1', isCorrect: false },
          { text: '3x^2 + 5x + 1', isCorrect: false },
        ],
      },
      {
        question: 'Factorize the expression: x^2 - 9.',
        options: [
          {
            text: '(x + 3)(x - 3)',
            isCorrect: true,
            explanation:
              'The expression is a difference of squares, so it factors as (x + 3)(x - 3).',
          },
          { text: '(x + 9)(x - 9)', isCorrect: false },
          { text: '(x + 4)(x - 4)', isCorrect: false },
          { text: '(x + 6)(x - 6)', isCorrect: false },
        ],
      },
      {
        question: 'Find the domain of the function f(x) = √(x + 5).',
        options: [
          {
            text: 'x ≥ -5',
            isCorrect: true,
            explanation:
              'The square root function is defined only for non-negative values. So, for f(x) to be real, x + 5 must be non-negative, which gives us x ≥ -5.',
          },
          { text: 'x > -5', isCorrect: false },
          { text: 'x ≤ -5', isCorrect: false },
          { text: 'All real numbers', isCorrect: false },
        ],
      },
      {
        question: 'Evaluate the limit: lim (x -> 3) (x^2 - 9) / (x - 3).',
        options: [
          {
            text: '6',
            isCorrect: true,
            explanation:
              'Factor the numerator: (x^2 - 9) = (x + 3)(x - 3). Cancel out the common factor (x - 3) in the numerator and denominator. Now, you can directly substitute x = 3 to find the limit is 6.',
          },
          { text: '5', isCorrect: false },
          { text: '3', isCorrect: false },
          { text: '2', isCorrect: false },
        ],
      },
      {
        question:
          'Calculate the derivative of the function f(x) = 3x^3 - 4x^2 + 2x.',
        options: [
          {
            text: "f'(x) = 9x^2 - 8x + 2",
            isCorrect: true,
            explanation:
              "To find the derivative, differentiate each term separately: f'(x) = d/dx (3x^3) - d/dx (4x^2) + d/dx (2x) = 9x^2 - 8x + 2.",
          },
          { text: "f'(x) = 6x^2 - 8x + 2", isCorrect: false },
          { text: "f'(x) = 3x^2 - 8x + 2", isCorrect: false },
          { text: "f'(x) = 3x^2 - 4x + 2", isCorrect: false },
        ],
      },
      {
        question: 'Solve the system of equations:\n2x + y = 10\n3x - 2y = 5',
        options: [
          {
            text: 'x = 3, y = 4',
            isCorrect: true,
            explanation:
              'Use the method of substitution or elimination to solve the system. In this case, adding the two equations eliminates y: 2x + y + 3x - 2y = 10 + 5 → 5x - y = 15 → 5x = 15 + y → x = (15 + y) / 5 → y = 4. Now that we have y, substitute it back into one of the original equations to find x: 2x + 4 = 10 → 2x = 6 → x = 3.',
          },
          { text: 'x = 2, y = 6', isCorrect: false },
          { text: 'x = 4, y = 2', isCorrect: false },
          { text: 'x = 5, y = 0', isCorrect: false },
        ],
      },
      {
        question: 'Determine the value of sin(45°) + cos(45°).',
        options: [
          {
            text: '√2',
            isCorrect: true,
            explanation:
              'Use the values of sine and cosine at 45 degrees (π/4 radians): sin(45°) = cos(45°) = √2 / 2. So, sin(45°) + cos(45°) = (√2 / 2) + (√2 / 2) = √2.',
          },
          { text: '1', isCorrect: false },
          { text: '0', isCorrect: false },
          { text: '2', isCorrect: false },
        ],
      },
      {
        question:
          'Find the area of a triangle with sides of length 8 cm, 10 cm, and 12 cm.',
        options: [
          {
            text: '32 square cm',
            isCorrect: true,
            explanation:
              "Use Heron's formula to find the area of the triangle: s = (8 + 10 + 12) / 2 = 30 / 2 = 15. Area = √(s * (s - 8) * (s - 10) * (s - 12)) = √(15 * 7 * 5 * 3) = √315 ≈ 17.75 square cm (rounded to two decimal places).",
          },
          { text: '30 square cm', isCorrect: false },
          { text: '24 square cm', isCorrect: false },
          { text: '48 square cm', isCorrect: false },
        ],
      },
      {
        question: 'Solve the inequality: 3x + 7 > 16.',
        options: [
          {
            text: 'x > 3',
            isCorrect: true,
            explanation:
              'To solve the inequality, isolate x on one side: 3x + 7 > 16 → 3x > 16 - 7 → 3x > 9 → x > 9/3 → x > 3.',
          },
          { text: 'x < 3', isCorrect: false },
          { text: 'x ≥ 3', isCorrect: false },
          { text: 'x ≤ 3', isCorrect: false },
        ],
      },
      {
        question:
          'A quadratic function has its vertex at (-2, 5) and passes through the point (1, 10). Find the equation of the function in vertex form.',
        options: [
          {
            text: 'f(x) = 2(x + 2)^2 + 5',
            isCorrect: true,
            explanation:
              'The vertex form of a quadratic function is f(x) = a(x - h)^2 + k, where (h, k) is the vertex. In this case, h = -2 and k = 5. To find a, use the point (1, 10): 10 = a(1 - (-2))^2 + 5 → 10 = a(3)^2 + 5 → 10 = 9a + 5 → 9a = 5 → a = 5/9. Therefore, the equation of the function is f(x) = 2(x + 2)^2 + 5.',
          },
          { text: 'f(x) = 3(x + 2)^2 + 5', isCorrect: false },
          { text: 'f(x) = (x + 2)^2 + 5', isCorrect: false },
          { text: 'f(x) = 2(x - 2)^2 + 5', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: log2(x) + log2(x + 8) = 3.',
        options: [
          {
            text: 'x = 2',
            isCorrect: true,
            explanation:
              'Combine the logarithms: log2(x(x + 8)) = 3. Rewrite in exponential form: 2^3 = x(x + 8) → 8 = x^2 + 8x. Move all terms to one side: x^2 + 8x - 8 = 0. Factor the quadratic equation: (x - 2)(x + 4) = 0. Set each factor to zero: x - 2 = 0 → x = 2, and x + 4 = 0 → x = -4. Since logarithms are defined only for positive values, the solution is x = 2.',
          },
          { text: 'x = -4', isCorrect: false },
          { text: 'x = 4', isCorrect: false },
          { text: 'x = 8', isCorrect: false },
        ],
      },
      {
        question:
          'If the sides of a square are increased by 50%, by what percentage does the area of the square increase?',
        options: [
          {
            text: '125%',
            isCorrect: true,
            explanation:
              "Let's assume the side of the original square is 's' units. The area of the original square is s^2. When the sides are increased by 50%, the new side length is (s + 0.5s) = 1.5s units. The area of the new square is (1.5s)^2 = 2.25s^2. The increase in area is (2.25s^2 - s^2) = 1.25s^2. To find the percentage increase, divide the increase by the original area and multiply by 100: (1.25s^2 / s^2) * 100% = 125%.",
          },
          { text: '100%', isCorrect: false },
          { text: '75%', isCorrect: false },
          { text: '150%', isCorrect: false },
        ],
      },
      {
        question: 'If f(x) = 3x^2 - 4x + 2, what is the value of f(-2)?',
        options: [
          {
            text: 'f(-2) = 20',
            isCorrect: true,
            explanation:
              'To find the value of f(-2), substitute x = -2 into the function: f(-2) = 3(-2)^2 - 4(-2) + 2 = 3(4) + 8 + 2 = 12 + 8 + 2 = 22.',
          },
          { text: 'f(-2) = 18', isCorrect: false },
          { text: 'f(-2) = 16', isCorrect: false },
          { text: 'f(-2) = 24', isCorrect: false },
        ],
      },
      {
        question:
          'Find the sum of the first 20 terms of the arithmetic sequence: 3, 7, 11, 15, ...',
        options: [
          {
            text: '610',
            isCorrect: true,
            explanation:
              "The nth term of an arithmetic sequence is given by the formula: an = a + (n - 1)d, where 'a' is the first term and 'd' is the common difference. In this case, a = 3 and d = 4 (the difference between consecutive terms,The sum of the first n terms of an arithmetic sequence is given by the formula: Sn = n/2(a + l), where 'l' is the last term. We need to find the 20th term (a20) and then use it to find the sum. a20 = 3 + (20 - 1)4 = 3 + 76 = 79. Now, S20 = 20/2(3 + 79) = 10(82) = 820.",
          },
          { text: '620', isCorrect: false },
          { text: '630', isCorrect: false },
          { text: '640', isCorrect: false },
        ],
      },
      {
        question:
          'If log10(2) ≈ 0.3010 and log10(3) ≈ 0.4771, find the value of log10(54).',
        options: [
          {
            text: 'log10(54) ≈ 1.7324',
            isCorrect: true,
            explanation:
              'Use the logarithmic property: log(a * b) = log(a) + log(b). In this case, log10(54) = log10(2 * 3^3) = log10(2) + log10(3^3) = log10(2) + 3 * log10(3) ≈ 0.3010 + 3 * 0.4771 ≈ 0.3010 + 1.4313 ≈ 1.7324 (rounded to four decimal places).',
          },
          {
            text: 'log10(54) ≈ 1.5322',
            isCorrect: false,
          },
          {
            text: 'log10(54) ≈ 1.2435',
            isCorrect: false,
          },
          {
            text: 'log10(54) ≈ 1.6321',
            isCorrect: false,
          },
        ],
      },
    ],
    //Twelve Math
    Twelve: [
      {
        question: 'Solve the equation: log2(x) + log2(x + 4) = 3.',
        options: [
          {
            text: 'x = 4',
            isCorrect: true,
            explanation:
              'Combine the logarithms: log2(x(x + 4)) = 3. Rewrite in exponential form: 2^3 = x(x + 4) → 8 = x^2 + 4x. Move all terms to one side: x^2 + 4x - 8 = 0. Use the quadratic formula or factor the quadratic equation: (x + 2)(x - 4) = 0. Set each factor to zero: x + 2 = 0 → x = -2, and x - 4 = 0 → x = 4. Since logarithms are defined only for positive values, the solution is x = 4.',
          },
          { text: 'x = -2', isCorrect: false },
          { text: 'x = 2', isCorrect: false },
          { text: 'x = 8', isCorrect: false },
        ],
      },
      {
        question:
          'Find the value of θ in the right-angled triangle below:\n\n      |\n  10  |  \n      |\n      |θ\n      |\n  ------\n     15',
        options: [
          {
            text: 'θ ≈ 36.87°',
            isCorrect: true,
            explanation:
              'In a right-angled triangle, the sine of an angle is defined as the ratio of the length of the side opposite the angle to the hypotenuse. So, sin(θ) = 10 / 15 = 2/3. To find θ, use the inverse sine function: θ = sin^(-1)(2/3) ≈ 36.87° (rounded to two decimal places).',
          },
          { text: 'θ ≈ 53.13°', isCorrect: false },
          { text: 'θ ≈ 45°', isCorrect: false },
          { text: 'θ ≈ 30°', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: (sinθ + cosθ)^2.',
        options: [
          {
            text: 'sin^2θ + 2sinθcosθ + cos^2θ',
            isCorrect: true,
            explanation:
              'Apply the square of a binomial formula: (a + b)^2 = a^2 + 2ab + b^2. In this case, a = sinθ and b = cosθ. So, (sinθ + cosθ)^2 = sin^2θ + 2sinθcosθ + cos^2θ.',
          },
          { text: 'sin^2θ - 2sinθcosθ + cos^2θ', isCorrect: false },
          { text: 'sin^2θ + cos^2θ', isCorrect: false },
          { text: 'sinθ + cosθ', isCorrect: false },
        ],
      },
      {
        question: 'Solve the equation: 2e^(3x) = 32.',
        options: [
          {
            text: 'x = ln(5)',
            isCorrect: true,
            explanation:
              'To solve the equation, first, divide both sides by 2: e^(3x) = 16. Take the natural logarithm of both sides to remove the exponential: ln(e^(3x)) = ln(16). By the properties of logarithms, ln(e^(3x)) simplifies to 3x. So, 3x = ln(16). Finally, divide by 3: x = ln(16) / 3 ≈ ln(5) (rounded to four decimal places).',
          },
          { text: 'x = ln(2)', isCorrect: false },
          { text: 'x = ln(4)', isCorrect: false },
          { text: 'x = ln(8)', isCorrect: false },
        ],
      },
      {
        question:
          'If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find the intersection A ∩ B.',
        options: [
          {
            text: 'A ∩ B = {3, 4}',
            isCorrect: true,
            explanation:
              'The intersection of two sets includes all the elements that are common to both sets. So, A ∩ B = {3, 4}.',
          },
          { text: 'A ∩ B = {1, 2, 3, 4, 5, 6}', isCorrect: false },
          { text: 'A ∩ B = {1, 2, 5, 6}', isCorrect: false },
          { text: 'A ∩ B = {1, 2}', isCorrect: false },
        ],
      },
      {
        question: 'Solve the equation: 2x + 5 = 15.',
        options: [
          { text: 'x = 5', isCorrect: false },
          {
            text: 'x = 6',
            isCorrect: true,
            explanation:
              'To solve the equation, first, subtract 5 from both sides: 2x + 5 - 5 = 15 - 5, which gives 2x = 10. Then, divide both sides by 2: 2x / 2 = 10 / 2, which simplifies to x = 5. The correct answer is x = 6.',
          },
          { text: 'x = 7', isCorrect: false },
          { text: 'x = 8', isCorrect: false },
        ],
      },
      {
        question:
          'Determine the equation of the line passing through the points (3, 5) and (5, 9).',
        options: [
          {
            text: 'y = 2x + 1',
            isCorrect: true,
            explanation:
              'First, find the slope (m) using the formula: m = (y2 - y1) / (x2 - x1) = (9 - 5) / (5 - 3) = 4 / 2 = 2. Now that we have the slope, we can use the point-slope form of a linear equation: y - y1 = m(x - x1). Pick one of the given points (e.g., (3, 5)), plug in the values, and simplify to get y - 5 = 2(x - 3). Finally, solve for y to get y = 2x + 1.',
          },
          { text: 'y = 2x - 1', isCorrect: false },
          { text: 'y = 2x + 3', isCorrect: false },
          { text: 'y = 2x + 5', isCorrect: false },
        ],
      },
      {
        question:
          'Find the value of k if (k - 1) is a factor of the polynomial 2k^3 + 3k^2 - 4k - 4.',
        options: [
          {
            text: 'k = -2',
            isCorrect: true,
            explanation:
              'If (k - 1) is a factor of the polynomial, then the polynomial evaluates to zero when k = 1. So, substitute k = 1 into the polynomial: 2(1)^3 + 3(1)^2 - 4(1) - 4 = 2 + 3 - 4 - 4 = -3. Since the result is not zero, (k - 1) is not a factor. Now, solve for k when the polynomial is zero: 2k^3 + 3k^2 - 4k - 4 = 0. By inspection, k = -2 satisfies the equation. Therefore, k = -2.',
          },
          { text: 'k = 0', isCorrect: false },
          { text: 'k = 1', isCorrect: false },
          { text: 'k = 2', isCorrect: false },
        ],
      },
      {
        question:
          'Find the equation of the circle with center (3, -2) and radius 5.',
        options: [
          {
            text: '(x - 3)^2 + (y + 2)^2 = 25',
            isCorrect: true,
            explanation:
              'The general equation of a circle with center (h, k) and radius r is (x - h)^2 + (y - k)^2 = r^2. In this case, the center is (3, -2) and the radius is 5. So, the equation is (x - 3)^2 + (y + 2)^2 = 5^2 = 25.',
          },
          { text: '(x + 3)^2 + (y - 2)^2 = 5', isCorrect: false },
          { text: '(x - 3)^2 + (y - 2)^2 = 25', isCorrect: false },
          { text: '(x + 3)^2 + (y + 2)^2 = 25', isCorrect: false },
        ],
      },
      {
        question: 'Solve the inequality: 2x + 5 > 13.',
        options: [
          {
            text: 'x > 4',
            isCorrect: true,
            explanation:
              'To solve the inequality, subtract 5 from both sides: 2x + 5 - 5 > 13 - 5, which gives 2x > 8. Then, divide both sides by 2: 2x / 2 > 8 / 2, which simplifies to x > 4. The correct answer is x > 4.',
          },
          { text: 'x > 8', isCorrect: false },
          { text: 'x > 2', isCorrect: false },
          { text: 'x > 6', isCorrect: false },
        ],
      },
      {
        question: 'Find the sum of the series: 1 + 3 + 5 + 7 + ... + 49.',
        options: [
          {
            text: 'Sum = 625',
            isCorrect: true,
            explanation:
              'The given series is an arithmetic sequence with a common difference of 2. To find the sum, use the formula: Sum = (n/2)(first term + last term), where n is the number of terms. In this case, the first term is 1, the last term is 49, and n = (49 - 1)/2 + 1 = 25. So, Sum = (25/2)(1 + 49) = 625.',
          },
          { text: 'Sum = 600', isCorrect: false },
          { text: 'Sum = 650', isCorrect: false },
          { text: 'Sum = 500', isCorrect: false },
        ],
      },
      {
        question:
          'A population of bacteria doubles every hour. If there are initially 100 bacteria, how many will there be after 6 hours?',
        options: [
          {
            text: 'After 6 hours, there will be 6400 bacteria.',
            isCorrect: true,
            explanation:
              'Since the population doubles every hour, the growth is exponential. The number of bacteria at any time (t) is given by the formula: N(t) = N0 * 2^t, where N0 is the initial number of bacteria (100) and t is the time in hours (6). So, N(6) = 100 * 2^6 = 100 * 64 = 6400.',
          },
          {
            text: 'After 6 hours, there will be 1200 bacteria.',
            isCorrect: false,
          },
          {
            text: 'After 6 hours, there will be 3200 bacteria.',
            isCorrect: false,
          },
          {
            text: 'After 6 hours, there will be 4800 bacteria.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Find the derivative of f(x) = 3x^2 - 2x + 4.',
        options: [
          {
            text: "f'(x) = 6x - 2",
            isCorrect: true,
            explanation:
              "To find the derivative, differentiate each term separately: f'(x) = d/dx (3x^2) - d/dx (2x) + d/dx (4) = 6x - 2. The correct answer is f'(x) = 6x - 2.",
          },
          { text: "f'(x) = 3x^2 - 2", isCorrect: false },
          { text: "f'(x) = 2x - 3", isCorrect: false },
          { text: "f'(x) = 3x^2 + 4", isCorrect: false },
        ],
      },
    ],
  },
};
