const questions = {
  English: {
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
        question: "What is the meaning of the idiom 'barking up the wrong tree'?",
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
        question: "Identify the correct form of the verb in the sentence: 'He ___ his bicycle to school every day.'",
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
        question: "Choose the correct homophone for the sentence: 'I love to ___ books.'",
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
            explanation: "The correct past tense form of the verb 'swim' is 'swam.'",
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
            explanation: "The meaning of the word 'placid' is calm and peaceful.",
          },
          { text: 'loud and noisy', isCorrect: false },
          { text: 'angry and aggressive', isCorrect: false },
          { text: 'uncertain and doubtful', isCorrect: false },
        ],
      },
      {
        question: 'Choose the correct form of the pronoun to complete the sentence:',
        options: [
          { text: 'He', isCorrect: false },
          {
            text: 'They',
            isCorrect: true,
            explanation: "The correct form of the pronoun to complete the sentence is 'They.'",
          },
          { text: 'It', isCorrect: false },
          { text: 'She', isCorrect: false },
        ],
      },
    ],
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
            explanation: "The correct plural form of the word 'child' is 'children.'",
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
        question: 'What is the meaning of the idiom "barking up the wrong tree"?',
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
        question: 'Identify the correct form of the verb in the sentence: "He ________ his bike to school every day."',
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
        question: 'Choose the correct homophone for the sentence: "She is going to __________ her favorite book."',
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
            explanation: "The correct past tense form of the verb 'swim' is 'swam.'",
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
            explanation: "The correct pronoun to complete the sentence is 'They.'",
          },
          { text: 'It', isCorrect: false },
          { text: 'She', isCorrect: false },
        ],
      },
    ],
    Nine: [
      {
        question: "Identify the correct form of the verb in the sentence: 'They ________ to the beach every summer.'",
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
        question: 'Choose the correct homophone for the sentence: "Please set the ________ on the table."',
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
            explanation: "The correct pronoun to complete the sentence is 'She.'",
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
            explanation: "The correct past tense form of the verb 'rise' is 'risen.'",
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
            explanation: "The word 'pervasive' means widespread and present throughout an area or group.",
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
            explanation: "The antonym for 'ambitious' is 'lazy,' which means unwilling to work or use energy.",
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
        question: 'Choose the correct form of the pronoun to complete the sentence: "_________ are going to the park."',
        options: [
          {
            text: 'They',
            isCorrect: true,
            explanation: "The correct pronoun to complete the sentence is 'They.'",
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
            explanation: "The word 'vex' means to annoy, frustrate, or provoke someone to anger.",
          },
          { text: 'to understand completely', isCorrect: false },
          { text: 'to fail or lose', isCorrect: false },
        ],
      },
    ],
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
        question: 'Choose the correct form of the verb to complete the sentence: He __________ a book.',
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
        question: 'Choose the correct homophone for the sentence: We left _______ house early in the morning.',
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
        question: 'Identify the correct form of the verb to complete the sentence: She ________ the letter yesterday.',
        options: [
          {
            text: 'spoken',
            isCorrect: false,
          },
          {
            text: 'spoke',
            isCorrect: true,
            explanation: "The correct form is 'She spoke the letter yesterday.'",
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
            explanation: "The correct pronoun is 'himself,' as it reflects the action back to the subject, Mark.",
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
            explanation: "The correct form is 'The food had already been eaten by the time we arrived.'",
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
            explanation: "The correct form is 'We climbed the mountain last weekend.'",
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
        question: 'Choose the correct homophone for the sentence: The sun will _______ in the east.',
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
            explanation: "The correct past tense form of the verb 'begin' is 'begun.'",
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
        question: "Choose the correct form of the verb in the sentence: 'She ____ the cake for her birthday.'",
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
        question: "Identify the correct form of the verb in the sentence: 'They ____ to the party last night.'",
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
        question: "Choose the correct homophone for the sentence: 'I have a ___ of oranges in the fridge.'",
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
            explanation: "The correct sentence is 'Let's go to the beach.' The contraction 'Let's' means 'Let us.'",
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
        question: "Choose the correct form of the verb in the sentence: 'He ____ his guitar during the concert.'",
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
            explanation: "'Elated' means extremely happy and joyful, and 'joyful' is a synonym with the same meaning.",
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
            explanation: "The correct sentence is 'I have a cold, too.' It means that the speaker also has a cold.",
          },
          { text: 'I have a cold two', isCorrect: false },
          { text: 'I have a cold to.', isCorrect: false },
        ],
      },
      {
        question: "Choose the correct form of the verb in the sentence: 'They ____ their car at the mall.'",
        options: [
          {
            text: 'park',
            isCorrect: true,
            explanation: "The correct form is 'They park their car at the mall.' 'Park' is the base form of the verb.",
          },
          { text: 'parking', isCorrect: false },
          { text: 'parked', isCorrect: false },
          { text: 'parks', isCorrect: false },
        ],
      },
    ],
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
        question: "Choose the correct form of the verb in the sentence: 'She ____ her research paper yesterday.'",
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
        question: "Choose the correct homophone for the sentence: 'He's going to ___ the ball into the goal.'",
        options: [
          {
            text: 'kick',
            isCorrect: true,
            explanation: "The correct answer is 'kick.' A homophone for 'kick' is 'kik.'",
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
        question: "Choose the correct form of the verb in the sentence: 'The movie ____ by the audience.'",
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
  Science: {
    Seven: [
      {
        question: 'Which of the following is NOT a renewable energy source?',
        options: [
          { text: 'Solar energy', isCorrect: false },
          { text: 'Wind energy', isCorrect: false },
          { text: 'Natural gas', isCorrect: true },
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
          { text: 'Mars', isCorrect: true },
          { text: 'Jupiter', isCorrect: false },
          { text: 'Saturn', isCorrect: false },
        ],
      },
      {
        question: 'What is the smallest unit of life?',
        options: [
          { text: 'Cell', isCorrect: true },
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
          { text: 'To exchange gases and help us breathe', isCorrect: true },
        ],
      },
      {
        question: 'What is the process by which water changes from a liquid to a gas?',
        options: [
          { text: 'Melting', isCorrect: false },
          { text: 'Evaporation', isCorrect: true },
          { text: 'Condensation', isCorrect: false },
          { text: 'Freezing', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a conductor of electricity?',
        options: [
          { text: 'Plastic', isCorrect: false },
          { text: 'Wood', isCorrect: false },
          { text: 'Copper', isCorrect: true },
          { text: 'Rubber', isCorrect: false },
        ],
      },
      {
        question: 'Which gas do plants absorb from the atmosphere during photosynthesis?',
        options: [
          { text: 'Carbon dioxide', isCorrect: true },
          { text: 'Oxygen', isCorrect: false },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What type of energy transformation occurs in a blender?',
        options: [
          { text: 'Chemical to electrical', isCorrect: false },
          { text: 'Electrical to mechanical', isCorrect: true },
          { text: 'Mechanical to electrical', isCorrect: false },
          { text: 'Electrical to heat', isCorrect: false },
        ],
      },
      {
        question: "Which layer of the Earth's atmosphere is closest to the Earth's surface?",
        options: [
          { text: 'Stratosphere', isCorrect: false },
          { text: 'Mesosphere', isCorrect: false },
          { text: 'Troposphere', isCorrect: true },
          { text: 'Thermosphere', isCorrect: false },
        ],
      },
      {
        question: "What causes the tides in the Earth's oceans?",
        options: [
          { text: 'The rotation of the Earth', isCorrect: false },
          { text: "The pull of the Moon's gravity", isCorrect: true },
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
          { text: 'Water', isCorrect: true },
        ],
      },
      {
        question: 'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          { text: 'Weathering', isCorrect: true },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question: 'Which type of simple machine is a seesaw?',
        options: [
          { text: 'Wheel and axle', isCorrect: false },
          { text: 'Pulley', isCorrect: false },
          { text: 'Lever', isCorrect: true },
          { text: 'Inclined plane', isCorrect: false },
        ],
      },
      {
        question: 'What is the dense, solid, and hottest layer of the Earth?',
        options: [
          { text: 'Mantle', isCorrect: false },
          { text: 'Core', isCorrect: true },
          { text: 'Crust', isCorrect: false },
          { text: 'Outer core', isCorrect: false },
        ],
      },
    ],
    Eight: [
      {
        question: 'Which process is responsible for turning a caterpillar into a butterfly?',
        options: [
          { text: 'Germination', isCorrect: false },
          { text: 'Metamorphosis', isCorrect: true },
          { text: 'Transpiration', isCorrect: false },
          { text: 'Photosynthesis', isCorrect: false },
        ],
      },
      {
        question: 'What type of waves are used in sonar technology?',
        options: [
          { text: 'Sound waves', isCorrect: true },
          { text: 'Light waves', isCorrect: false },
          { text: 'Radio waves', isCorrect: false },
          { text: 'Microwaves', isCorrect: false },
        ],
      },
      {
        question: 'Which gas is essential for photosynthesis?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          { text: 'Carbon dioxide', isCorrect: true },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of white blood cells in the human body?',
        options: [
          { text: 'To transport oxygen', isCorrect: false },
          { text: 'To fight infections', isCorrect: true },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To digest food', isCorrect: false },
        ],
      },
      {
        question: 'What is the process of converting food into energy called?',
        options: [
          { text: 'Photosynthesis', isCorrect: false },
          { text: 'Digestion', isCorrect: true },
          { text: 'Respiration', isCorrect: false },
          { text: 'Transpiration', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the nucleus in a cell?',
        options: [
          { text: 'To store energy', isCorrect: false },
          { text: 'To control cell activities', isCorrect: true },
          { text: 'To produce proteins', isCorrect: false },
          { text: 'To break down waste', isCorrect: false },
        ],
      },
      {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: [
          { text: 'Venus', isCorrect: true },
          { text: 'Mars', isCorrect: false },
          { text: 'Jupiter', isCorrect: false },
          { text: 'Saturn', isCorrect: false },
        ],
      },
      {
        question: 'What type of energy transformation occurs in a solar-powered calculator?',
        options: [
          { text: 'Solar to mechanical', isCorrect: false },
          { text: 'Solar to electrical', isCorrect: true },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Chemical to electrical', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is an example of a chemical change?',
        options: [
          { text: 'Melting ice', isCorrect: false },
          { text: 'Burning wood', isCorrect: true },
          { text: 'Breaking a glass', isCorrect: false },
          { text: 'Mixing salt and water', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which plants release water vapor through their leaves?',
        options: [
          { text: 'Transpiration', isCorrect: true },
          { text: 'Condensation', isCorrect: false },
          { text: 'Evaporation', isCorrect: false },
          { text: 'Precipitation', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is an example of a renewable resource?',
        options: [
          { text: 'Coal', isCorrect: false },
          { text: 'Natural gas', isCorrect: false },
          { text: 'Solar energy', isCorrect: true },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the mitochondria in a cell?',
        options: [
          { text: 'To store water', isCorrect: false },
          { text: 'To produce energy', isCorrect: true },
          { text: 'To control cell division', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is an example of an inclined plane?',
        options: [
          { text: 'A door knob', isCorrect: false },
          { text: 'A seesaw', isCorrect: false },
          { text: 'A ramp', isCorrect: true },
          { text: 'A wheel and axle', isCorrect: false },
        ],
      },
      {
        question: 'What type of energy transformation occurs in a battery-powered toy car?',
        options: [
          { text: 'Chemical to electrical', isCorrect: true },
          { text: 'Electrical to mechanical', isCorrect: false },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Mechanical to electrical', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is NOT a method of heat transfer?',
        options: [
          { text: 'Conduction', isCorrect: false },
          { text: 'Reflection', isCorrect: true },
          { text: 'Convection', isCorrect: false },
          { text: 'Radiation', isCorrect: false },
        ],
      },
    ],
    Nine: [
      {
        question: 'Which of the following is NOT a primary color of light?',
        options: [
          { text: 'Red', isCorrect: false },
          { text: 'Green', isCorrect: false },
          { text: 'Blue', isCorrect: false },
          { text: 'Yellow', isCorrect: true },
        ],
      },
      {
        question: 'What is the chemical symbol for water?',
        options: [
          { text: 'Wo', isCorrect: false },
          { text: 'Wa', isCorrect: false },
          { text: 'Wt', isCorrect: false },
          { text: 'H2O', isCorrect: true },
        ],
      },
      {
        question: 'Which gas do plants absorb from the atmosphere during photosynthesis?',
        options: [
          { text: 'Carbon dioxide', isCorrect: true },
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
          { text: 'To synthesize proteins', isCorrect: true },
        ],
      },
      {
        question: 'Which of the following is a renewable energy source?',
        options: [
          { text: 'Natural gas', isCorrect: false },
          { text: 'Wind energy', isCorrect: true },
          { text: 'Coal', isCorrect: false },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the largest organ in the human body?',
        options: [
          { text: 'Heart', isCorrect: false },
          { text: 'Lungs', isCorrect: false },
          { text: 'Liver', isCorrect: true },
          { text: 'Brain', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a product of cellular respiration?',
        options: [
          { text: 'Carbon dioxide', isCorrect: true },
          { text: 'Oxygen', isCorrect: false },
          { text: 'Glucose', isCorrect: false },
          { text: 'Water', isCorrect: false },
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
        question: 'Which of the following is NOT a type of rock?',
        options: [
          { text: 'Igneous', isCorrect: false },
          { text: 'Metamorphic', isCorrect: false },
          { text: 'Sedimentary', isCorrect: false },
          { text: 'Gypsum', isCorrect: true },
        ],
      },
      {
        question: 'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          { text: 'Weathering', isCorrect: true },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: [
          { text: 'Venus', isCorrect: false },
          { text: 'Mars', isCorrect: true },
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
          { text: 'To exchange gases and help us breathe', isCorrect: true },
        ],
      },
      {
        question: 'What is the process by which water changes from a liquid to a gas?',
        options: [
          { text: 'Melting', isCorrect: false },
          { text: 'Evaporation', isCorrect: true },
          { text: 'Condensation', isCorrect: false },
          { text: 'Freezing', isCorrect: false },
        ],
      },
      {
        question: 'Which type of simple machine is a seesaw?',
        options: [
          { text: 'Wheel and axle', isCorrect: false },
          { text: 'Pulley', isCorrect: false },
          { text: 'Lever', isCorrect: true },
          { text: 'Inclined plane', isCorrect: false },
        ],
      },
      {
        question: 'What is the dense, solid, and hottest layer of the Earth?',
        options: [
          { text: 'Mantle', isCorrect: false },
          { text: 'Core', isCorrect: true },
          { text: 'Crust', isCorrect: false },
          { text: 'Outer core', isCorrect: false },
        ],
      },
    ],
    Ten: [
      {
        question: 'Which of the following is a chemical reaction?',
        options: [
          { text: 'Melting ice', isCorrect: false },
          { text: 'Boiling water', isCorrect: false },
          { text: 'Burning wood', isCorrect: true },
          { text: 'Crushing a can', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which plants release water vapor through their leaves?',
        options: [
          { text: 'Transpiration', isCorrect: true },
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
          },
        ],
      },
      {
        question: 'Which of the following is a renewable energy source?',
        options: [
          { text: 'Natural gas', isCorrect: false },
          { text: 'Solar energy', isCorrect: true },
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
          { text: 'To carry out photosynthesis', isCorrect: true },
        ],
      },
      {
        question: 'Which gas is essential for photosynthesis?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          { text: 'Carbon dioxide', isCorrect: true },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          { text: 'Weathering', isCorrect: true },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question: 'Which type of energy transformation occurs in a solar-powered calculator?',
        options: [
          { text: 'Solar to mechanical', isCorrect: false },
          { text: 'Solar to electrical', isCorrect: true },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Chemical to electrical', isCorrect: false },
        ],
      },
      {
        question: 'What is the dense, solid, and hottest layer of the Earth?',
        options: [
          { text: 'Mantle', isCorrect: false },
          { text: 'Core', isCorrect: true },
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
          { text: 'Gypsum', isCorrect: true },
        ],
      },
      {
        question:
          'What is the process by which an unstable nucleus releases energy in the form of particles and electromagnetic radiation?',
        options: [
          { text: 'Fission', isCorrect: true },
          { text: 'Fusion', isCorrect: false },
          { text: 'Condensation', isCorrect: false },
          { text: 'Sublimation', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a product of cellular respiration?',
        options: [
          { text: 'Carbon dioxide', isCorrect: true },
          { text: 'Oxygen', isCorrect: false },
          { text: 'Glucose', isCorrect: false },
          { text: 'Water', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the mitochondria in a cell?',
        options: [
          { text: 'To store water', isCorrect: false },
          { text: 'To produce energy', isCorrect: true },
          { text: 'To control cell division', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a property of acids?',
        options: [
          { text: 'Sour taste', isCorrect: true },
          { text: 'Bitter taste', isCorrect: false },
          { text: 'Slippery feel', isCorrect: false },
          { text: 'Red litmus turns blue', isCorrect: false },
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
    ],
    Eleven: [
      {
        question: 'Which of the following is a characteristic of an element?',
        options: [
          {
            text: 'Can be broken down into simpler substances',
            isCorrect: false,
          },
          { text: 'Contains only one type of atom', isCorrect: true },
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
          { text: 'Ampere', isCorrect: true },
        ],
      },
      {
        question: 'Which of the following is a type of electromagnetic wave with the shortest wavelength?',
        options: [
          { text: 'Radio waves', isCorrect: false },
          { text: 'Microwaves', isCorrect: false },
          { text: 'X-rays', isCorrect: true },
          { text: 'Visible light', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the red blood cells in the human body?',
        options: [
          { text: 'To fight infections', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: true },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To remove waste', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a renewable energy source?',
        options: [
          { text: 'Natural gas', isCorrect: false },
          { text: 'Coal', isCorrect: false },
          { text: 'Wind energy', isCorrect: true },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the ribosomes in a cell?',
        options: [
          { text: 'To control cell activities', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To break down waste', isCorrect: false },
          { text: 'To synthesize proteins', isCorrect: true },
        ],
      },
      {
        question: 'Which of the following is a type of nuclear decay that emits a beta particle?',
        options: [
          { text: 'Alpha decay', isCorrect: false },
          { text: 'Gamma decay', isCorrect: false },
          { text: 'Beta decay', isCorrect: true },
          { text: 'Electron decay', isCorrect: false },
        ],
      },
      {
        question:
          'What is the process by which an unstable nucleus releases energy in the form of particles and electromagnetic radiation?',
        options: [
          { text: 'Fission', isCorrect: true },
          { text: 'Fusion', isCorrect: false },
          { text: 'Condensation', isCorrect: false },
          { text: 'Sublimation', isCorrect: false },
        ],
      },
      {
        question: 'Which gas is essential for photosynthesis?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          { text: 'Carbon dioxide', isCorrect: true },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the mitochondria in a cell?',
        options: [
          { text: 'To store water', isCorrect: false },
          { text: 'To produce energy', isCorrect: true },
          { text: 'To control cell division', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a property of acids?',
        options: [
          { text: 'Sour taste', isCorrect: true },
          { text: 'Bitter taste', isCorrect: false },
          { text: 'Slippery feel', isCorrect: false },
          { text: 'Red litmus turns blue', isCorrect: false },
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
        question: 'What is the function of the white blood cells in the human body?',
        options: [
          { text: 'To fight infections', isCorrect: true },
          { text: 'To carry oxygen', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To remove waste', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          { text: 'Weathering', isCorrect: true },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question: 'Which type of energy transformation occurs in a solar-powered calculator?',
        options: [
          { text: 'Solar to mechanical', isCorrect: false },
          { text: 'Solar to electrical', isCorrect: true },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Chemical to electrical', isCorrect: false },
        ],
      },
    ],
    Twelve: [
      {
        question:
          'What is the process by which an unstable nucleus releases energy in the form of particles and electromagnetic radiation?',
        options: [
          { text: 'Fission', isCorrect: true },
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
          { text: 'Ampere', isCorrect: true },
        ],
      },
      {
        question: 'Which of the following is a type of electromagnetic wave with the longest wavelength?',
        options: [
          { text: 'Radio waves', isCorrect: true },
          { text: 'Microwaves', isCorrect: false },
          { text: 'X-rays', isCorrect: false },
          { text: 'Visible light', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the red blood cells in the human body?',
        options: [
          { text: 'To fight infections', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: true },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To remove waste', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a renewable energy source?',
        options: [
          { text: 'Natural gas', isCorrect: false },
          { text: 'Coal', isCorrect: false },
          { text: 'Wind energy', isCorrect: true },
          { text: 'Petroleum', isCorrect: false },
        ],
      },
      {
        question: 'What is the main function of the ribosomes in a cell?',
        options: [
          { text: 'To control cell activities', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To break down waste', isCorrect: false },
          { text: 'To synthesize proteins', isCorrect: true },
        ],
      },
      {
        question: 'Which of the following is a type of nuclear decay that emits a beta particle?',
        options: [
          { text: 'Alpha decay', isCorrect: false },
          { text: 'Gamma decay', isCorrect: false },
          { text: 'Beta decay', isCorrect: true },
          { text: 'Electron decay', isCorrect: false },
        ],
      },
      {
        question: 'Which gas is essential for photosynthesis?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          { text: 'Carbon dioxide', isCorrect: true },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
        ],
      },
      {
        question: 'What is the function of the mitochondria in a cell?',
        options: [
          { text: 'To store water', isCorrect: false },
          { text: 'To produce energy', isCorrect: true },
          { text: 'To control cell division', isCorrect: false },
          { text: 'To carry oxygen', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a property of bases?',
        options: [
          { text: 'Sour taste', isCorrect: false },
          { text: 'Bitter taste', isCorrect: true },
          { text: 'Slippery feel', isCorrect: true },
          { text: 'Red litmus turns blue', isCorrect: true },
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
        question: 'What is the function of the white blood cells in the human body?',
        options: [
          { text: 'To fight infections', isCorrect: true },
          { text: 'To carry oxygen', isCorrect: false },
          { text: 'To produce energy', isCorrect: false },
          { text: 'To remove waste', isCorrect: false },
        ],
      },
      {
        question: 'What is the process by which rocks are broken down into smaller pieces?',
        options: [
          { text: 'Melting', isCorrect: false },
          { text: 'Weathering', isCorrect: true },
          { text: 'Erosion', isCorrect: false },
          { text: 'Deposition', isCorrect: false },
        ],
      },
      {
        question: 'Which type of energy transformation occurs in a solar-powered calculator?',
        options: [
          { text: 'Solar to mechanical', isCorrect: false },
          { text: 'Solar to electrical', isCorrect: true },
          { text: 'Electrical to heat', isCorrect: false },
          { text: 'Chemical to electrical', isCorrect: false },
        ],
      },
      {
        question: 'What is the dense, solid, and hottest layer of the Earth?',
        options: [
          { text: 'Mantle', isCorrect: false },
          { text: 'Core', isCorrect: true },
          { text: 'Crust', isCorrect: false },
          { text: 'Outer core', isCorrect: false },
        ],
      },
    ],
  },
  Math: {
    Seven: [
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
        question: 'Simplify the expression: 4(3x + 2) - 5(2x - 1)',
        options: [
          { text: '2x + 3', isCorrect: false },
          { text: '11x + 9', isCorrect: false },
          { text: '10x + 13', isCorrect: true },
          { text: '12x + 7', isCorrect: false },
        ],
      },
      {
        question: 'What is the square root of 144?',
        options: [
          { text: '12', isCorrect: true },
          { text: '14', isCorrect: false },
          { text: '10', isCorrect: false },
          { text: '15', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: 5x + 8 = 23',
        options: [
          { text: 'x = 3', isCorrect: true },
          { text: 'x = 5', isCorrect: false },
          { text: 'x = 4', isCorrect: false },
          { text: 'x = 6', isCorrect: false },
        ],
      },
      {
        question: 'What is the area of a rectangle with length 8 units and width 5 units?',
        options: [
          { text: '13 square units', isCorrect: false },
          { text: '40 square units', isCorrect: true },
          { text: '26 square units', isCorrect: false },
          { text: '35 square units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the fraction: 18/24',
        options: [
          { text: '3/4', isCorrect: true },
          { text: '4/5', isCorrect: false },
          { text: '5/6', isCorrect: false },
          { text: '2/3', isCorrect: false },
        ],
      },
      {
        question: 'What is the value of 5² + 3³?',
        options: [
          { text: '32', isCorrect: false },
          { text: '44', isCorrect: true },
          { text: '25', isCorrect: false },
          { text: '36', isCorrect: false },
        ],
      },
      {
        question: 'If a = 4 and b = 7, what is the value of 2a + 3b?',
        options: [
          { text: '24', isCorrect: true },
          { text: '19', isCorrect: false },
          { text: '31', isCorrect: false },
          { text: '15', isCorrect: false },
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
        question: 'Solve for y: 2y + 5 = 17',
        options: [
          { text: 'y = 6', isCorrect: true },
          { text: 'y = 7', isCorrect: false },
          { text: 'y = 8', isCorrect: false },
          { text: 'y = 5', isCorrect: false },
        ],
      },
      {
        question: 'What is the perimeter of a square with sides of length 9 units?',
        options: [
          { text: '36 units', isCorrect: true },
          { text: '45 units', isCorrect: false },
          { text: '27 units', isCorrect: false },
          { text: '81 units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: 4 + 2(3 - 5) ÷ 2',
        options: [
          { text: '4', isCorrect: false },
          { text: '3', isCorrect: true },
          { text: '5', isCorrect: false },
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
        question: 'What is the volume of a cube with edges of length 6 units?',
        options: [
          { text: '24 cubic units', isCorrect: false },
          { text: '216 cubic units', isCorrect: true },
          { text: '36 cubic units', isCorrect: false },
          { text: '48 cubic units', isCorrect: false },
        ],
      },
    ],
    Eight: [
      {
        question: 'What is the value of 2² + 3³?',
        options: [
          { text: '11', isCorrect: false },
          { text: '17', isCorrect: true },
          { text: '13', isCorrect: false },
          { text: '15', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the expression: 3(4x - 2) + 2(3x + 1)',
        options: [
          { text: '18x + 1', isCorrect: false },
          { text: '23x + 4', isCorrect: false },
          { text: '18x + 4', isCorrect: true },
          { text: '21x + 3', isCorrect: false },
        ],
      },
      {
        question: 'Find the area of a rectangle with length 10 units and width 6 units.',
        options: [
          { text: '36 square units', isCorrect: false },
          { text: '16 square units', isCorrect: false },
          { text: '60 square units', isCorrect: true },
          { text: '26 square units', isCorrect: false },
        ],
      },
      {
        question: 'Simplify the fraction: 9/12',
        options: [
          { text: '3/4', isCorrect: true },
          { text: '4/5', isCorrect: false },
          { text: '5/6', isCorrect: false },
          { text: '2/3', isCorrect: false },
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
        question: 'Solve for x: 2x - 5 = 11',
        options: [
          { text: 'x = 3', isCorrect: true },
          { text: 'x = 5', isCorrect: false },
          { text: 'x = 6', isCorrect: false },
          { text: 'x = 4', isCorrect: false },
        ],
      },
      {
        question: 'What is the square root of 121?',
        options: [
          { text: '12', isCorrect: false },
          { text: '11', isCorrect: true },
          { text: '13', isCorrect: false },
          { text: '14', isCorrect: false },
        ],
      },
      {
        question: 'If a = 3 and b = 5, what is the value of 2a + 3b?',
        options: [
          { text: '13', isCorrect: true },
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
        question: 'What is the perimeter of a square with sides of length 12 units?',
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
        question: 'What is the volume of a rectangular prism with dimensions 4 units × 6 units × 8 units?',
        options: [
          { text: '24 cubic units', isCorrect: false },
          { text: '48 cubic units', isCorrect: false },
          { text: '192 cubic units', isCorrect: true },
          { text: '60 cubic units', isCorrect: false },
        ],
      },
    ],
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
        question: 'Find the slope of the line passing through the points (2, 5) and (4, 9).',
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
        question: 'What is the area of a triangle with base 12 units and height 8 units?',
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
        question: 'What is the circumference of a circle with a radius of 5 units (Use π = 3.14)?',
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
  },
  // Add more subjects (e.g., Math, Filipino, etc.) and grade levels if needed
};

const scopes = {
  English: {
    Seven: {
      scopeDescription:
        'The scope of the questions for grade Seven covers various aspects of the English language, including:',
      scopeDetails: [
        'Vocabulary: Word definitions and identifying synonyms and antonyms.',
        'Grammar: Identifying sentences written in passive voice and subjunctive mood.',
        'Spelling: Correct spelling of words.',
        'Verbs: Correct form of verbs in sentences.',
        'Idioms: Understanding the meaning of idiomatic expressions.',
        'Pronouns: Choosing the correct pronoun to complete a sentence.',
        'Language Comprehension: Understanding and interpreting sentences and phrases.',
      ],
      overallScope:
        "Overall, the scope of the questions covers a broad range of language skills, challenging students' understanding of the English language and their ability to apply grammar and vocabulary rules effectively.",
    },
    Eight: {
      scopeDescription:
        'The scope of the questions for grade Eight English covers various aspects of the language, focusing on vocabulary, grammar, spelling, verbs, idioms, pronouns, and language comprehension. The topics covered include word definitions, synonyms, antonyms, passive voice, subjunctive mood, correct spellings, homophones, and the meanings of idiomatic expressions.',
      scopeDetails: [
        'Vocabulary: Word definitions and identifying synonyms and antonyms.',
        'Grammar: Identifying sentences written in passive voice and subjunctive mood.',
        'Spelling: Correct spelling of words.',
        'Verbs: Correct form of verbs in sentences.',
        'Idioms: Understanding the meaning of idiomatic expressions.',
        'Pronouns: Choosing the correct pronoun to complete a sentence.',
        'Language Comprehension: Understanding and interpreting sentences and phrases.',
      ],
      overallScope:
        "Overall, the scope of the questions for grade Eight English covers a broad range of language skills, challenging students' understanding of the English language and their ability to apply grammar and vocabulary rules effectively.",
    },
  },
};

const quizQuestionsOptionsContainer = document.querySelector('#quizQuestionsOptionsContainer');
const userNameInput = document.querySelector('#inputUserName');

const userNameDisplay = document.querySelector('#userName');
const chosenSubjectDisplay = document.querySelector('#chosenSubject');
const chosenGradeDisplay = document.querySelector('#chosenGrade');
const scoreDisplay = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer');
const explanationDisplay = document.querySelector('#explanationDisplay');
const scopeDisplay = document.querySelector('#scope');

const quizMechanicsContainer = document.querySelector('#quizMechanicsContainer');
const quizBodyContainer = document.querySelector('#quizBodyContainer');
const quizScopeContainer = document.querySelector('#quizScopeContainer');
const quizScopeHeaderContainer = document.querySelector('#quizScopeHeaderContainer');

const subjects = {
  english: document.getElementById('englishSubject'),
  science: document.getElementById('scienceSubject'),
  math: document.getElementById('mathSubject'),
  filipino: document.getElementById('filipinoSubject'),
};

const grades = {
  Seven: document.getElementById('grade7'),
  Eight: document.getElementById('grade8'),
  Nine: document.getElementById('grade9'),
  Ten: document.getElementById('grade10'),
  Eleven: document.getElementById('grade11'),
  Twelve: document.getElementById('grade12'),
};

const answerButton = document.querySelectorAll('#answerButton');
const startGame = document.querySelector('#quizStartQuiz');
const nextQuestion = document.querySelector('#nextQuestion');

let quizStart = false;
let chosenSubject;
let chosenGrade;
let score = 0;
let currentQuestionIndex = 0;
let timer = 900; // 30 minutes * 60 seconds per minute

function getScope() {
  userNameDisplay.innerHTML = 'Name: ' + userNameInput.value;

  const selectedSubject = document.querySelector('input[name="subject"]:checked');

  if (selectedSubject) {
    chosenSubject = selectedSubject.value;
    chosenSubjectDisplay.innerHTML = 'Subject: ' + chosenSubject;
  } else {
    alert('Please choose subject to start');
    return;
  }

  const selectedGrade = document.querySelector('input[name="grade"]:checked');

  if (selectedGrade) {
    chosenGrade = selectedGrade.value;
    chosenGradeDisplay.innerHTML = 'Grade: ' + chosenGrade;
  } else {
    alert('Please choose Grade to start');
    return;
  }

  quizMechanicsContainer.style.display = 'none';
  quizScopeContainer.style.display = 'block';

  const scopeDescription = scopes[chosenSubject][chosenGrade].scopeDescription;
  const scopeDetails = scopes[chosenSubject][chosenGrade].scopeDetails;
  const overallScope = scopes[chosenSubject][chosenGrade].overallScope;

  // Generate the bullet points as a string using map
  const bulletPointsHTML = scopeDetails.map((detail) => `<li>${detail}</li>`).join(''); // Join the array elements into a single string

  const scopeHTML = `
  <p>${scopeDescription}</p>
  <ul><br>
    <li>${bulletPointsHTML}</li>
  </ul><br>
  <p>${overallScope}</p>
`;

  scopeDisplay.innerHTML = scopeHTML;
}

startGame.addEventListener('click', () => {
  score = 0; // Reset the score
  scoreDisplay.innerHTML = 'Score: ' + score;

  currentQuestionIndex = 0; // Reset the current question index

  quizQuestionsOptionsContainer.innerHTML = ''; // Clear the quiz container

  // Shuffle the questions only once when the quiz starts
  const shuffledQuestions = shuffleArray(
    questions[chosenSubject][chosenGrade].map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }))
  );

  quizScopeContainer.style.display = 'none';

  // Save the shuffled questions in a global variable to use throughout the quiz
  window.shuffledQuestions = shuffledQuestions;
  countDownTimer = setInterval(countDownTimer, 500);
  createQuestions(); // Create the first question
});

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    console.log(`Swapping elements at indices ${i} and ${j}:`);
    console.log('Before swap:', shuffledArray);
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    console.log('After swap:', shuffledArray);
  }
  return shuffledArray;
}

function handleOptionClick(currentQuestion, e) {
  const nextQuestionContainer = document.querySelector('#nextQuestionContainer');
  const answerButtons = document.querySelectorAll('.answer-button');

  if (e.target.nodeName === 'BUTTON') {
    answerButtons.forEach((button) => {
      // Disable all the answer buttons to prevent changing the answer
      button.disabled = true;
      if (button === e.target) {
        if (currentQuestion.options.find((option) => option.text === e.target.textContent.split(') ')[1]).isCorrect) {
          score++;
          scoreDisplay.innerHTML = 'Score: ' + score;
          // If the selected option is correct, turn the button green
          e.target.classList.add('correct-answer');
        } else {
          // Show the correct answer when the user selects the wrong option
          explanationDisplay.innerHTML = 'Explanation : ' + getCorrectAnswerExplanation(currentQuestion);
          // If the selected option is wrong, turn the button red
          e.target.classList.add('wrong-answer');
        }
      } else if (
        currentQuestion.options.find((option) => option.text === button.textContent.split(') ')[1]).isCorrect
      ) {
        // For other buttons, if the option is correct, turn it green
        button.classList.add('correct-answer');
      }
    });

    // Create Next Question Button
    const nextQuestionButton = document.createElement('button');
    nextQuestionButton.setAttribute('id', 'nextQuestion');
    nextQuestionButton.classList.add('quiz-next-question-button');
    nextQuestionButton.textContent = 'Proceed to next Question?';

    // Use appendChild to add the nextQuestionButton to the nextQuestionContainer
    nextQuestionContainer.appendChild(nextQuestionButton);

    nextQuestionButton.addEventListener('click', () => {
      // Clear visual indication and re-enable the answer buttons
      answerButtons.forEach((button) => {
        button.classList.remove('correct-answer', 'wrong-answer');
        button.disabled = false;
      });

      quizQuestionsOptionsContainer.innerHTML = '';
      currentQuestionIndex++;
      explanationDisplay.innerHTML = '';
      createQuestions();

      // Remove the "Next Question" button
      nextQuestionContainer.removeChild(nextQuestionButton);
    });
  }
}

function getCorrectAnswer(currentQuestion) {
  // Find the correct option in the options array of the current question
  const correctOption = currentQuestion.options.find((option) => option.isCorrect);
  console.log(correctOption);
  return correctOption.text;
}
function getCorrectAnswerExplanation(currentQuestion) {
  // Find the correct option in the options array of the current question
  const explanation = currentQuestion.options.find((option) => option.isCorrect);
  return explanation.explanation;
}

function createQuestions() {
  // Access the shuffled questions for the chosen subject and grade
  const shuffledQuestions = window.shuffledQuestions;

  if (shuffledQuestions && shuffledQuestions.length > 0 && currentQuestionIndex < shuffledQuestions.length) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    // Create a div to hold the question and options
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('quiz-question-container');

    // Display the question
    const questionElement = document.createElement('h2');
    questionElement.textContent = currentQuestionIndex + 1 + '.) ' + currentQuestion.question;
    questionDiv.appendChild(questionElement);

    quizQuestionsOptionsContainer.appendChild(questionDiv);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('quiz-options-container');

    const letters = ['a', 'b', 'c', 'd'];
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const option = currentQuestion.options[i];
      const optionItemElement = document.createElement('button');
      optionItemElement.setAttribute('id', 'answerButton');
      optionItemElement.classList.add('answer-button');
      optionItemElement.textContent = letters[i] + ') ' + option.text;

      optionItemElement.addEventListener('click', (e) => {
        handleOptionClick(currentQuestion, e);
      });
      optionsDiv.appendChild(optionItemElement);
    }

    quizQuestionsOptionsContainer.appendChild(optionsDiv);

    // Add the question div to the quiz container
  }
}

function countDownTimer() {
  timer--;
  timerDisplay.innerHTML = 'Time left: ' + formatTime(timer);

  if (currentQuestionIndex === shuffledQuestions.length) {
    clearInterval(countDownTimer);
    quizQuestionsOptionsContainer.innerHTML = '';
    alert('End of Question');
  } else if (timer === 0) {
    clearInterval(countDownTimer);
    quizQuestionsOptionsContainer.innerHTML = '';
    alert('Times up!');
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  return formattedTime;
}
