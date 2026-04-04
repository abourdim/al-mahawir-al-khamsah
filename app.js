/* المحاور الخمسة للقرآن الكريم — THE FIVE AXES OF THE QURAN — app.js v1.0 */
/* Based on "Al-Mahawir al-Khamsah lil-Quran al-Karim" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'المحاور الخمسة للقرآن الكريم',
    splashSub: 'رحلة في محاور القرآن للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة ص ٣٨: ٢٩',
    tabHome: 'الرئيسية', tabTraits: 'المحاور', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'محاور القرآن الكريم',
    traitsDesc: '١٥ موضوعاً من كتاب الشيخ محمد الغزالي — كل موضوع بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن محاور القرآن — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي القرآنية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة المحاور',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية قرآنية',
    dailyLabel: '✨ محور اليوم',
    searchPlaceholder: 'ابحث في المحاور...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ موضوعاً من كتاب المحاور الخمسة للقرآن',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'The Five Axes of the Quran',
    splashSub: 'A journey through the Quran\'s themes for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Sad 38:29',
    tabHome: 'Home', tabTraits: 'Axes', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Axes of the Holy Quran',
    traitsDesc: '15 themes from Sheikh al-Ghazali\'s book — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Quranic themes — 4 choices per question',
    progressTitle: 'My Quranic Journey',
    progressDesc: 'Your progress and achievements in the Quranic journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Quranic Duas',
    dailyLabel: "✨ Today's Axis",
    searchPlaceholder: 'Search axes...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 Quranic themes from The Five Axes of the Quran',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Les Cinq Axes du Coran',
    splashSub: 'Un voyage a travers les themes du Coran pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Sad 38:29',
    tabHome: 'Accueil', tabTraits: 'Axes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Les Axes du Saint Coran',
    traitsDesc: '15 themes du livre du Sheikh al-Ghazali — chacun avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur les themes coraniques — 4 choix par question',
    progressTitle: 'Mon Parcours Coranique',
    progressDesc: 'Vos progres et realisations dans le parcours coranique',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas Coraniques',
    dailyLabel: '✨ Axe du Jour',
    searchPlaceholder: 'Rechercher les axes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 themes coraniques du livre Les Cinq Axes du Coran',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 QURANIC AXES DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'☝️',
    ar:{title:'محور التوحيد',desc:'التوحيد هو المحور الأول والأعظم في القرآن الكريم. كل سورة وكل آية تدور حول إفراد الله بالعبادة. التوحيد ليس مجرد كلمة بل هو منهج حياة يحرر الإنسان من عبودية المخلوقات ويجعله حراً كريماً.',verse:'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ',verseRef:'الإخلاص ١-٢',hadith:'من قال لا إله إلا الله مخلصاً من قلبه دخل الجنة — متفق عليه',action:'تأمل اليوم في نعم الله من حولك وقل: لا إله إلا الله بتدبر وإخلاص',young:'الله واحد لا شريك له! كل شيء جميل حولك صنعه الله — السماء والنجوم والأزهار ☝️'},
    en:{title:'The Axis of Tawhid',desc:'Tawhid (Divine Unity) is the first and greatest axis of the Quran. Every surah and verse revolves around worshipping Allah alone. Tawhid is not just a word but a way of life that frees humans from serving anything other than God and makes them noble and free.',verse:'Say: He is Allah, the One. Allah, the Eternal Refuge',verseRef:'Al-Ikhlas 1-2',hadith:'Whoever says "There is no god but Allah" sincerely from the heart will enter Paradise — Agreed upon',action:'Reflect today on Allah\'s blessings around you and say La ilaha illa Allah with deep sincerity',young:'Allah is One with no partner! Everything beautiful around you — the sky, the stars, the flowers — Allah made it all ☝️'},
    fr:{title:'L\'Axe du Tawhid',desc:'Le Tawhid (Unicite Divine) est le premier et le plus grand axe du Coran. Chaque sourate et chaque verset tourne autour de l\'adoration d\'Allah seul. Le Tawhid n\'est pas qu\'un mot mais un mode de vie qui libere l\'humain de la servitude envers les creatures et le rend libre et noble.',verse:'Dis : Il est Allah, l\'Unique. Allah, le Refuge Eternel',verseRef:'Al-Ikhlas 1-2',hadith:'Quiconque dit « Il n\'y a de dieu qu\'Allah » sincerement entrera au Paradis — Unanimement reconnu',action:'Reflechissez aujourd\'hui aux bienfaits d\'Allah autour de vous et dites La ilaha illa Allah avec sincerite',young:'Allah est Un sans associe ! Tout ce qui est beau autour de toi — le ciel, les etoiles, les fleurs — c\'est Allah qui l\'a cree ☝️'}
  },
  {
    id:2, emoji:'🌍',
    ar:{title:'محور الكون والخلق',desc:'القرآن يدعونا للتأمل في الكون: السماوات والأرض والجبال والبحار والنجوم. كل ذرة في الكون تشهد بعظمة الخالق. العلم الحديث يكشف كل يوم عجائب تؤكد ما جاء في القرآن من حقائق كونية.',verse:'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ',verseRef:'آل عمران ١٩٠',hadith:'تفكروا في خلق الله ولا تتفكروا في ذات الله — رواه أبو نعيم',action:'اخرج اليوم وتأمل السماء والطبيعة — فكر في عظمة من خلق كل هذا',young:'انظر إلى السماء ليلاً! كل نجمة وكل قمر يخبرك عن عظمة الله الخالق 🌍'},
    en:{title:'The Creation and Universe Axis',desc:'The Quran invites us to reflect on the universe: the heavens, earth, mountains, seas, and stars. Every atom in the universe testifies to the greatness of the Creator. Modern science discovers wonders every day that confirm the cosmic truths revealed in the Quran.',verse:'Indeed, in the creation of the heavens and earth and the alternation of night and day are signs for those of understanding',verseRef:'Al Imran 190',hadith:'Reflect on the creation of Allah, but do not reflect on the essence of Allah — Abu Nuaym',action:'Go outside today and contemplate the sky and nature — think about the greatness of the One who created all this',young:'Look at the sky at night! Every star and every moon tells you about Allah\'s amazing creation 🌍'},
    fr:{title:'L\'Axe de la Creation et de l\'Univers',desc:'Le Coran nous invite a reflechir sur l\'univers : les cieux, la terre, les montagnes, les mers et les etoiles. Chaque atome de l\'univers temoigne de la grandeur du Createur. La science moderne decouvre chaque jour des merveilles qui confirment les verites cosmiques du Coran.',verse:'En verite, dans la creation des cieux et de la terre et dans l\'alternance de la nuit et du jour, il y a des signes pour les doues d\'intelligence',verseRef:'Al Imran 190',hadith:'Reflechissez a la creation d\'Allah, mais ne reflechissez pas a l\'essence d\'Allah — Abu Nuaym',action:'Sortez aujourd\'hui et contemplez le ciel et la nature — pensez a la grandeur de Celui qui a cree tout cela',young:'Regarde le ciel la nuit ! Chaque etoile et chaque lune te parle de la grandeur d\'Allah le Createur 🌍'}
  },
  {
    id:3, emoji:'📜',
    ar:{title:'محور قصص الأنبياء',desc:'القرآن يروي قصص الأنبياء ليستخلص منها العبر والدروس. هذه القصص ليست تاريخاً فقط بل هي منهج للحياة. كل نبي واجه تحديات وصبر حتى جاء نصر الله. القصص تربي النفوس وتثبت القلوب.',verse:'لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ',verseRef:'يوسف ١١١',hadith:'خيار الناس خيارهم في الجاهلية إذا فقهوا — متفق عليه',action:'اقرأ اليوم قصة نبي من القرآن واستخرج منها ثلاث دروس عملية لحياتك',young:'قصص الأنبياء مليئة بالمغامرات والدروس! اقرأ قصة نبي جديد كل أسبوع 📜'},
    en:{title:'The Prophetic Stories Axis',desc:'The Quran tells the stories of prophets to draw lessons and wisdom from them. These stories are not just history but a methodology for life. Every prophet faced challenges and remained patient until Allah\'s victory came. The stories nurture souls and strengthen hearts.',verse:'There was certainly in their stories a lesson for those of understanding',verseRef:'Yusuf 111',hadith:'The best of people are the best of them in the pre-Islamic period, if they gain understanding — Agreed upon',action:'Read a prophet\'s story from the Quran today and extract three practical lessons for your life',young:'Stories of the prophets are full of adventures and lessons! Read a new prophet\'s story every week 📜'},
    fr:{title:'L\'Axe des Histoires Prophetiques',desc:'Le Coran raconte les histoires des prophetes pour en tirer des lecons et de la sagesse. Ces histoires ne sont pas qu\'une histoire mais une methodologie de vie. Chaque prophete a fait face a des defis et a patiente jusqu\'a la victoire d\'Allah. Les histoires nourrissent les ames et renforcent les coeurs.',verse:'Il y avait certainement dans leurs histoires une lecon pour les doues d\'intelligence',verseRef:'Yusuf 111',hadith:'Les meilleurs des gens sont les meilleurs d\'entre eux a l\'epoque preislamique, s\'ils comprennent — Unanimement reconnu',action:'Lisez aujourd\'hui l\'histoire d\'un prophete dans le Coran et tirez-en trois lecons pratiques',young:'Les histoires des prophetes sont pleines d\'aventures et de lecons ! Lis une nouvelle histoire chaque semaine 📜'}
  },
  {
    id:4, emoji:'⚖️',
    ar:{title:'محور الآخرة',desc:'القرآن يذكّر الإنسان باليوم الآخر ليعيش حياته بمسؤولية. الموت ليس نهاية بل بداية حياة أبدية. من عمل صالحاً وجد ثوابه، ومن أساء وجد جزاءه. الإيمان بالآخرة يجعل الإنسان رقيباً على نفسه.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ',verseRef:'آل عمران ١٨٥',hadith:'أكثروا من ذكر هادم اللذات: الموت — رواه الترمذي',action:'تأمل اليوم في أعمالك: هل ستسعدك يوم القيامة؟ أصلح ما يحتاج إصلاحاً',young:'كل عمل جيد تفعله يُكتب لك عند الله! اجمع حسنات كثيرة كل يوم ⚖️'},
    en:{title:'The Afterlife Axis',desc:'The Quran reminds humans of the Last Day so they live responsibly. Death is not the end but the beginning of eternal life. Whoever does good finds their reward, and whoever does wrong finds their consequence. Belief in the afterlife makes a person their own watchful guardian.',verse:'Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection',verseRef:'Al Imran 185',hadith:'Remember often the destroyer of pleasures: death — Tirmidhi',action:'Reflect today on your deeds: will they make you happy on the Day of Judgment? Fix what needs fixing',young:'Every good deed you do is written down by Allah! Collect lots of good deeds every day ⚖️'},
    fr:{title:'L\'Axe de l\'Au-dela',desc:'Le Coran rappelle a l\'etre humain le Jour Dernier pour qu\'il vive de maniere responsable. La mort n\'est pas une fin mais le debut d\'une vie eternelle. Quiconque fait le bien trouve sa recompense, et quiconque fait le mal trouve sa consequence. La croyance en l\'au-dela fait de la personne son propre gardien vigilant.',verse:'Toute ame goutera la mort, et vous ne serez retribues pleinement que le Jour de la Resurrection',verseRef:'Al Imran 185',hadith:'Rappelez-vous souvent le destructeur des plaisirs : la mort — Tirmidhi',action:'Reflechissez aujourd\'hui a vos actions : vous rendront-elles heureux le Jour du Jugement ?',young:'Chaque bonne action que tu fais est inscrite aupres d\'Allah ! Accumule beaucoup de bonnes actions chaque jour ⚖️'}
  },
  {
    id:5, emoji:'📖',
    ar:{title:'محور الأحكام والتشريع',desc:'القرآن يتضمن تشريعات حكيمة تنظم حياة الفرد والمجتمع. الأحكام الإسلامية ليست قيوداً بل هي حماية للإنسان. كل حكم له حكمة عظيمة حتى لو لم ندركها فوراً. الشريعة جاءت لتحقيق مصالح العباد.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'ما نهيتكم عنه فاجتنبوه وما أمرتكم به فأتوا منه ما استطعتم — متفق عليه',action:'تعلم حكماً إسلامياً جديداً اليوم وابحث عن الحكمة وراءه',young:'أحكام الإسلام مثل قوانين المرور — تحمينا وتجعل حياتنا آمنة وسعيدة! 📖'},
    en:{title:'The Ethics and Legislation Axis',desc:'The Quran contains wise legislation that organizes individual and community life. Islamic rulings are not restrictions but protection for humans. Every ruling has a great wisdom even if we don\'t understand it immediately. The Sharia came to achieve people\'s welfare.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'What I have forbidden you, avoid it; and what I have commanded you, do as much of it as you can — Agreed upon',action:'Learn a new Islamic ruling today and explore the wisdom behind it',young:'Islamic rules are like traffic laws — they protect us and make our lives safe and happy! 📖'},
    fr:{title:'L\'Axe de l\'Ethique et de la Legislation',desc:'Le Coran contient une legislation sage qui organise la vie individuelle et communautaire. Les regles islamiques ne sont pas des restrictions mais une protection pour l\'humain. Chaque regle a une grande sagesse meme si nous ne la comprenons pas immediatement. La Charia est venue pour realiser le bien-etre des gens.',verse:'Et Nous ne t\'avons envoye qu\'en misericorde pour les mondes',verseRef:'Al-Anbiya 107',hadith:'Ce que je vous ai interdit, evitez-le ; et ce que je vous ai ordonne, faites-en ce que vous pouvez — Unanimement reconnu',action:'Apprenez une nouvelle regle islamique aujourd\'hui et explorez la sagesse derriere elle',young:'Les regles de l\'Islam sont comme le code de la route — elles nous protegent et rendent notre vie sure et heureuse ! 📖'}
  },
  {
    id:6, emoji:'🔗',
    ar:{title:'ترابط المحاور',desc:'المحاور الخمسة في القرآن مترابطة كالسلسلة المتينة. التوحيد يقود إلى فهم الكون، وقصص الأنبياء تعلمنا التطبيق، والآخرة تحفزنا، والأحكام تنظم حياتنا. لا يمكن فصل محور عن الآخر لأنها تشكّل وحدة متكاملة.',verse:'كِتَابٌ أُنْزِلَ إِلَيْكَ فَلَا يَكُنْ فِي صَدْرِكَ حَرَجٌ مِنْهُ',verseRef:'الأعراف ٢',hadith:'تركت فيكم ما إن تمسكتم به لن تضلوا: كتاب الله — رواه مسلم',action:'اقرأ سورة كاملة اليوم وحاول تحديد المحاور الخمسة فيها',young:'القرآن مثل لغز جميل — كل قطعة مرتبطة بالأخرى وتكمّلها! 🔗'},
    en:{title:'How the Axes Interconnect',desc:'The five axes in the Quran are interconnected like a strong chain. Tawhid leads to understanding creation, prophetic stories teach us application, the afterlife motivates us, and legislation organizes our lives. No axis can be separated from another because they form a complete unity.',verse:'A Book revealed to you — so let there not be in your breast any distress from it',verseRef:'Al-Araf 2',hadith:'I have left among you that which if you hold on to you will never go astray: the Book of Allah — Muslim',action:'Read a complete surah today and try to identify the five axes within it',young:'The Quran is like a beautiful puzzle — every piece connects to the others and completes them! 🔗'},
    fr:{title:'Comment les Axes s\'Interconnectent',desc:'Les cinq axes du Coran sont interconnectes comme une chaine solide. Le Tawhid mene a la comprehension de la creation, les histoires prophetiques nous enseignent l\'application, l\'au-dela nous motive, et la legislation organise notre vie. Aucun axe ne peut etre separe des autres car ils forment une unite complete.',verse:'Un Livre qui t\'a ete revele — qu\'il n\'y ait donc pas dans ta poitrine de gene a son sujet',verseRef:'Al-Araf 2',hadith:'Je vous ai laisse ce qui, si vous y tenez, vous ne vous egarerez jamais : le Livre d\'Allah — Muslim',action:'Lisez une sourate complete aujourd\'hui et essayez d\'identifier les cinq axes en elle',young:'Le Coran est comme un beau puzzle — chaque piece se connecte aux autres et les complete ! 🔗'}
  },
  {
    id:7, emoji:'🌱',
    ar:{title:'قصة آدم عليه السلام',desc:'آدم أول إنسان وأول نبي. خلقه الله من طين ونفخ فيه من روحه وعلّمه الأسماء كلها. قصته تعلمنا أن الخطأ وارد لكن التوبة تمحوه. إبليس تكبر فسقط، وآدم أخطأ فتاب فقُبل. الفرق بينهما هو التواضع.',verse:'وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا',verseRef:'البقرة ٣١',hadith:'كل بني آدم خطّاء وخير الخطائين التوابون — رواه الترمذي',action:'إذا أخطأت اليوم، لا تيأس — استغفر الله وابدأ من جديد كما فعل آدم',young:'آدم أبو البشر! أخطأ لكنه تاب فغفر الله له — إذا أخطأت قل أستغفر الله 🌱'},
    en:{title:'The Story of Adam',desc:'Adam was the first human and first prophet. Allah created him from clay, breathed His spirit into him, and taught him all the names. His story teaches us that mistakes happen but repentance erases them. Iblis was arrogant and fell, while Adam sinned but repented and was accepted. The difference between them is humility.',verse:'And He taught Adam the names — all of them',verseRef:'Al-Baqarah 31',hadith:'Every son of Adam makes mistakes, and the best of those who make mistakes are those who repent — Tirmidhi',action:'If you make a mistake today, don\'t despair — seek Allah\'s forgiveness and start fresh, just like Adam did',young:'Adam is the father of humanity! He made a mistake but repented and Allah forgave him — if you make a mistake, say Astaghfirullah 🌱'},
    fr:{title:'L\'Histoire d\'Adam',desc:'Adam fut le premier humain et le premier prophete. Allah l\'a cree d\'argile, a insuffle en lui de Son esprit et lui a enseigne tous les noms. Son histoire nous apprend que les erreurs arrivent mais que le repentir les efface. Iblis s\'est enorgueilli et est tombe, tandis qu\'Adam a peche puis s\'est repenti et a ete accepte. La difference entre eux est l\'humilite.',verse:'Et Il apprit a Adam tous les noms',verseRef:'Al-Baqarah 31',hadith:'Tout fils d\'Adam commet des erreurs, et les meilleurs sont ceux qui se repentent — Tirmidhi',action:'Si vous faites une erreur aujourd\'hui, ne desesperez pas — demandez pardon a Allah et recommencez, comme Adam',young:'Adam est le pere de l\'humanite ! Il a fait une erreur mais s\'est repenti et Allah lui a pardonne — si tu fais une erreur, dis Astaghfirullah 🌱'}
  },
  {
    id:8, emoji:'🚢',
    ar:{title:'قصة نوح عليه السلام',desc:'نوح دعا قومه ٩٥٠ سنة بلا ملل ولا يأس. بنى السفينة وسط سخرية الناس لكنه لم يتوقف. قصته تعلمنا الصبر والثبات على الحق مهما طال الطريق. النجاة كانت لمن آمن وركب السفينة.',verse:'وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا',verseRef:'العنكبوت ١٤',hadith:'أحب الأعمال إلى الله أدومها وإن قل — متفق عليه',action:'اثبت على عمل خير بدأته حتى لو لم ترَ نتائج فورية — مثل نوح',young:'نوح بنى سفينة ضخمة وصبر ٩٥٠ سنة! لا تستسلم أبداً مهما كان الأمر صعباً 🚢'},
    en:{title:'The Story of Noah',desc:'Noah called his people for 950 years without boredom or despair. He built the ark amid people\'s mockery but never stopped. His story teaches us patience and steadfastness on truth no matter how long the road. Salvation came to those who believed and boarded the ark.',verse:'And We certainly sent Noah to his people, and he remained among them a thousand years minus fifty',verseRef:'Al-Ankabut 14',hadith:'The deeds most beloved to Allah are those done consistently, even if small — Agreed upon',action:'Stay committed to a good deed you started even if you don\'t see immediate results — like Noah',young:'Noah built a huge ship and was patient for 950 years! Never give up no matter how hard things are 🚢'},
    fr:{title:'L\'Histoire de Noe',desc:'Noe a appele son peuple pendant 950 ans sans lassitude ni desespoir. Il a construit l\'arche au milieu des moqueries mais ne s\'est jamais arrete. Son histoire nous enseigne la patience et la constance sur la verite peu importe la duree du chemin. Le salut est venu a ceux qui ont cru et sont montes dans l\'arche.',verse:'Et Nous avons certes envoye Noe vers son peuple, il demeura parmi eux mille ans moins cinquante',verseRef:'Al-Ankabut 14',hadith:'Les actes les plus aimes d\'Allah sont les plus constants, meme s\'ils sont petits — Unanimement reconnu',action:'Restez engage dans une bonne action que vous avez commencee meme sans resultats immediats — comme Noe',young:'Noe a construit un enorme bateau et a ete patient pendant 950 ans ! N\'abandonne jamais peu importe la difficulte 🚢'}
  },
  {
    id:9, emoji:'🕋',
    ar:{title:'قصة إبراهيم عليه السلام',desc:'إبراهيم أبو الأنبياء. حطّم الأصنام وهو شاب، وأُلقي في النار فنجّاه الله. بنى الكعبة مع ابنه إسماعيل. قصته تعلمنا الشجاعة في مواجهة الباطل والتضحية في سبيل الله والتوكل عليه.',verse:'إِنَّ إِبْرَاهِيمَ كَانَ أُمَّةً قَانِتًا لِلَّهِ حَنِيفًا',verseRef:'النحل ١٢٠',hadith:'اتبعوا ملة إبراهيم حنيفاً — رواه البخاري',action:'كن شجاعاً اليوم في مواجهة خطأ تراه — مثل إبراهيم الذي واجه قومه وحده',young:'إبراهيم كان شجاعاً جداً! حطّم الأصنام وبنى الكعبة — كن شجاعاً مثله 🕋'},
    en:{title:'The Story of Ibrahim',desc:'Ibrahim is the father of prophets. He smashed idols as a young man and was thrown into fire but Allah saved him. He built the Kaaba with his son Ismail. His story teaches us courage in facing falsehood, sacrifice for Allah\'s sake, and trusting in Him.',verse:'Indeed, Ibrahim was a nation obedient to Allah, inclining toward truth',verseRef:'An-Nahl 120',hadith:'Follow the way of Ibrahim, inclining toward truth — Bukhari',action:'Be courageous today in facing a wrong you see — like Ibrahim who faced his people alone',young:'Ibrahim was super brave! He smashed idols and built the Kaaba — be brave like him 🕋'},
    fr:{title:'L\'Histoire d\'Ibrahim',desc:'Ibrahim est le pere des prophetes. Il a brise les idoles etant jeune et a ete jete dans le feu mais Allah l\'a sauve. Il a construit la Kaaba avec son fils Ismail. Son histoire nous enseigne le courage face au mensonge, le sacrifice pour Allah, et la confiance en Lui.',verse:'Certes, Ibrahim etait une communaute obeissante a Allah, voue a la verite',verseRef:'An-Nahl 120',hadith:'Suivez la voie d\'Ibrahim, voue a la verite — Bukhari',action:'Soyez courageux aujourd\'hui face a une injustice que vous voyez — comme Ibrahim qui a affronte son peuple seul',young:'Ibrahim etait super courageux ! Il a brise les idoles et construit la Kaaba — sois courageux comme lui 🕋'}
  },
  {
    id:10, emoji:'🌟',
    ar:{title:'قصة يوسف عليه السلام',desc:'يوسف تعرض للظلم من إخوته ثم من امرأة العزيز ثم من السجن. لكنه صبر وحفظ أمانته وعفته فرفعه الله إلى أعلى المناصب. قصته هي أحسن القصص كما وصفها القرآن. درس عظيم في الصبر على البلاء.',verse:'نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ',verseRef:'يوسف ٣',hadith:'استعينوا على قضاء حوائجكم بالكتمان — رواه الطبراني',action:'إذا تعرضت لظلم اليوم، اصبر وتمسك بأخلاقك — فالنصر قادم كما جاء ليوسف',young:'يوسف صبر على الظلم وبقي أميناً حتى أصبح حاكماً! الصبر ينتصر دائماً 🌟'},
    en:{title:'The Story of Yusuf',desc:'Yusuf was wronged by his brothers, then by the wife of the minister, then by prison. But he was patient, kept his integrity and modesty, so Allah raised him to the highest position. His story is described by the Quran as the best of stories. A great lesson in patience through trials.',verse:'We relate to you the best of stories',verseRef:'Yusuf 3',hadith:'Seek help in fulfilling your needs through secrecy — Tabarani',action:'If you face injustice today, be patient and hold on to your values — victory will come just as it came to Yusuf',young:'Yusuf was patient through injustice and stayed honest until he became a ruler! Patience always wins 🌟'},
    fr:{title:'L\'Histoire de Yusuf',desc:'Yusuf a ete lese par ses freres, puis par la femme du ministre, puis par la prison. Mais il a ete patient, a garde son integrite et sa pudeur, et Allah l\'a eleve au plus haut rang. Son histoire est decrite par le Coran comme le meilleur des recits. Une grande lecon de patience a travers les epreuves.',verse:'Nous te racontons le meilleur des recits',verseRef:'Yusuf 3',hadith:'Cherchez l\'aide pour accomplir vos besoins par la discretion — Tabarani',action:'Si vous faites face a une injustice aujourd\'hui, soyez patient et gardez vos valeurs — la victoire viendra comme pour Yusuf',young:'Yusuf a ete patient face a l\'injustice et est reste honnete jusqu\'a devenir gouverneur ! La patience gagne toujours 🌟'}
  },
  {
    id:11, emoji:'🔥',
    ar:{title:'قصة موسى عليه السلام',desc:'موسى أكثر نبي ذُكر في القرآن. واجه أعتى طاغية في التاريخ — فرعون — بشجاعة وتوكل على الله. قصته تعلمنا أن الحق ينتصر على الباطل مهما بدا الباطل قوياً. الله مع المستضعفين دائماً.',verse:'وَنُرِيدُ أَنْ نَمُنَّ عَلَى الَّذِينَ اسْتُضْعِفُوا فِي الْأَرْضِ',verseRef:'القصص ٥',hadith:'لا تخافوا من غير الله — رواه أحمد',action:'لا تخف من مواجهة الباطل اليوم — توكل على الله كما فعل موسى أمام فرعون',young:'موسى واجه فرعون بشجاعة! الله ينصر الحق دائماً — لا تخف من قول الحق 🔥'},
    en:{title:'The Story of Moses',desc:'Moses is the most mentioned prophet in the Quran. He faced the mightiest tyrant in history — Pharaoh — with courage and trust in Allah. His story teaches us that truth defeats falsehood no matter how powerful falsehood appears. Allah is always with the oppressed.',verse:'And We wanted to favor those who were oppressed in the land',verseRef:'Al-Qasas 5',hadith:'Do not fear anyone other than Allah — Ahmad',action:'Don\'t be afraid to stand against wrong today — trust in Allah as Moses did before Pharaoh',young:'Moses faced Pharaoh with bravery! Allah always supports the truth — don\'t be afraid to speak the truth 🔥'},
    fr:{title:'L\'Histoire de Moise',desc:'Moise est le prophete le plus mentionne dans le Coran. Il a affronte le plus puissant tyran de l\'histoire — Pharaon — avec courage et confiance en Allah. Son histoire nous enseigne que la verite vainc le mensonge, peu importe la puissance apparente du mensonge. Allah est toujours avec les opprimes.',verse:'Et Nous voulions favoriser ceux qui etaient opprimes sur terre',verseRef:'Al-Qasas 5',hadith:'Ne craignez personne d\'autre qu\'Allah — Ahmad',action:'N\'ayez pas peur de vous opposer au mal aujourd\'hui — faites confiance a Allah comme Moise devant Pharaon',young:'Moise a affronte Pharaon avec bravoure ! Allah soutient toujours la verite — n\'aie pas peur de dire la verite 🔥'}
  },
  {
    id:12, emoji:'🕊️',
    ar:{title:'عيسى في القرآن',desc:'عيسى ابن مريم رسول الله وكلمته. وُلد بمعجزة وتكلّم في المهد ونشر السلام والرحمة. القرآن يُكرّم عيسى ويبيّن حقيقته: عبد الله ورسوله، لا إله ولا ابن إله. سورة كاملة سُميت باسم أمه مريم.',verse:'إِنْ هُوَ إِلَّا عَبْدٌ أَنْعَمْنَا عَلَيْهِ',verseRef:'الزخرف ٥٩',hadith:'أنا أولى الناس بعيسى ابن مريم — رواه البخاري',action:'تأمل اليوم في كيف يُكرّم القرآن جميع الأنبياء بلا تفريق',young:'عيسى تكلّم وهو رضيع! الله يعطي معجزات لأنبيائه — كل نبي له معجزة خاصة 🕊️'},
    en:{title:'Jesus in the Quran',desc:'Jesus son of Mary is Allah\'s messenger and His word. He was born miraculously, spoke in the cradle, and spread peace and mercy. The Quran honors Jesus and clarifies his reality: a servant of Allah and His messenger, not a deity nor son of God. An entire surah is named after his mother Mary.',verse:'He is nothing but a servant upon whom We bestowed favor',verseRef:'Az-Zukhruf 59',hadith:'I am the closest of all people to Jesus son of Mary — Bukhari',action:'Reflect today on how the Quran honors all prophets without distinction',young:'Jesus spoke as a baby! Allah gives miracles to His prophets — every prophet has a special miracle 🕊️'},
    fr:{title:'Jesus dans le Coran',desc:'Jesus fils de Marie est le messager d\'Allah et Sa parole. Il est ne miraculeusement, a parle au berceau et a repandu la paix et la misericorde. Le Coran honore Jesus et clarifie sa realite : un serviteur d\'Allah et Son messager, ni divinite ni fils de Dieu. Une sourate entiere porte le nom de sa mere Marie.',verse:'Il n\'est qu\'un serviteur que Nous avons comble de bienfaits',verseRef:'Az-Zukhruf 59',hadith:'Je suis le plus proche de tous les gens de Jesus fils de Marie — Bukhari',action:'Reflechissez aujourd\'hui a comment le Coran honore tous les prophetes sans distinction',young:'Jesus a parle quand il etait bebe ! Allah donne des miracles a Ses prophetes — chaque prophete a un miracle special 🕊️'}
  },
  {
    id:13, emoji:'🌙',
    ar:{title:'رسالة محمد ﷺ',desc:'محمد ﷺ خاتم الأنبياء وخير البشر. جاء بالقرآن رحمةً للعالمين. رسالته جمعت خلاصة رسالات الأنبياء السابقين. هو القدوة الأعظم في كل جوانب الحياة: العبادة والأخلاق والمعاملات.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'إنما بُعثت لأتمم مكارم الأخلاق — رواه أحمد',action:'اقرأ اليوم عن سيرة النبي ﷺ وطبّق خُلقاً من أخلاقه في حياتك',young:'النبي محمد ﷺ أفضل إنسان عاش على الأرض! كان رحيماً وصادقاً ولطيفاً مع الجميع 🌙'},
    en:{title:'Muhammad\'s Mission',desc:'Muhammad (PBUH) is the seal of prophets and the best of humanity. He brought the Quran as a mercy to all worlds. His message gathered the essence of all previous prophetic messages. He is the greatest role model in every aspect of life: worship, character, and dealings.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'I was sent to perfect noble character — Ahmad',action:'Read about the Prophet\'s biography today and apply one of his character traits in your life',young:'Prophet Muhammad (PBUH) is the best person who ever lived! He was merciful, truthful, and kind to everyone 🌙'},
    fr:{title:'La Mission de Muhammad',desc:'Muhammad (PSL) est le sceau des prophetes et le meilleur de l\'humanite. Il a apporte le Coran comme misericorde pour tous les mondes. Son message a rassemble l\'essence de tous les messages prophetiques precedents. Il est le plus grand modele dans tous les aspects de la vie : adoration, caractere et relations.',verse:'Et Nous ne t\'avons envoye qu\'en misericorde pour les mondes',verseRef:'Al-Anbiya 107',hadith:'J\'ai ete envoye pour parfaire les nobles caracteres — Ahmad',action:'Lisez aujourd\'hui la biographie du Prophete et appliquez un de ses traits de caractere dans votre vie',young:'Le Prophete Muhammad (PSL) est la meilleure personne ayant vecu ! Il etait misericordieux, veridique et gentil avec tout le monde 🌙'}
  },
  {
    id:14, emoji:'🔔',
    ar:{title:'يوم القيامة',desc:'يوم القيامة يوم عظيم تُبعث فيه الخلائق للحساب. القرآن يصف مشاهده بتفصيل: الصور يُنفخ فيه، والأرض تتبدل، والكتب تُنشر، والموازين تُنصب. الاستعداد له يبدأ الآن بالعمل الصالح.',verse:'يَوْمَ يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ ۝ وَأُمِّهِ وَأَبِيهِ',verseRef:'عبس ٣٤-٣٥',hadith:'ما منكم من أحد إلا سيكلمه ربه ليس بينه وبينه ترجمان — رواه البخاري',action:'اعمل اليوم عملاً صالحاً تجده أمامك يوم القيامة — صدقة أو دعاء أو مساعدة',young:'يوم القيامة يوم مهم جداً — كل عمل خير تفعله اليوم ستجده هناك! افعل خيراً كل يوم 🔔'},
    en:{title:'The Day of Judgment',desc:'The Day of Judgment is a great day when all creation is resurrected for accounting. The Quran describes its scenes in detail: the trumpet is blown, the earth transforms, books are spread open, and scales are set up. Preparing for it starts now with good deeds.',verse:'The Day a man will flee from his brother, and his mother and father',verseRef:'Abasa 34-35',hadith:'There is no one among you but his Lord will speak to him with no interpreter between them — Bukhari',action:'Do a good deed today that you will find before you on the Day of Judgment — charity, dua, or helping someone',young:'The Day of Judgment is a very important day — every good deed you do today will be there! Do good every day 🔔'},
    fr:{title:'Le Jour du Jugement',desc:'Le Jour du Jugement est un grand jour ou toute la creation est ressuscitee pour le compte. Le Coran decrit ses scenes en detail : la trompette est soufflee, la terre se transforme, les livres sont ouverts et les balances sont dressees. S\'y preparer commence maintenant par les bonnes actions.',verse:'Le jour ou l\'homme fuira son frere, et sa mere et son pere',verseRef:'Abasa 34-35',hadith:'Il n\'y a personne parmi vous a qui son Seigneur ne parlera pas sans interprete entre eux — Bukhari',action:'Faites une bonne action aujourd\'hui que vous retrouverez le Jour du Jugement — charite, dua, ou aider quelqu\'un',young:'Le Jour du Jugement est un jour tres important — chaque bonne action que tu fais aujourd\'hui sera la ! Fais du bien chaque jour 🔔'}
  },
  {
    id:15, emoji:'💎',
    ar:{title:'حكمة التشريع الإسلامي',desc:'التشريع الإسلامي يهدف لتحقيق مصالح العباد في الدنيا والآخرة. كل حكم له حكمة: الصلاة تنهى عن الفحشاء، والزكاة تطهّر المال، والصوم يعلّم الصبر. الإسلام دين الوسطية والاعتدال لا إفراط ولا تفريط.',verse:'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ١٤٣',hadith:'يسروا ولا تعسروا وبشروا ولا تنفروا — متفق عليه',action:'طبّق حكماً إسلامياً اليوم بوعي وتأمل حكمته — كالصلاة في وقتها أو صدقة بنية',young:'كل حكم في الإسلام له سبب جميل! الصلاة تقوّيك، والصيام يعلّمك الصبر، والزكاة تساعد الفقراء 💎'},
    en:{title:'The Wisdom of Islamic Legislation',desc:'Islamic legislation aims to achieve the welfare of people in this life and the hereafter. Every ruling has wisdom: prayer prevents immorality, zakat purifies wealth, and fasting teaches patience. Islam is the religion of moderation and balance — no excess and no negligence.',verse:'And thus We have made you a middle nation',verseRef:'Al-Baqarah 143',hadith:'Make things easy and do not make them difficult, give glad tidings and do not repel — Agreed upon',action:'Apply an Islamic ruling today with awareness and reflect on its wisdom — like praying on time or giving charity with intention',young:'Every rule in Islam has a beautiful reason! Prayer makes you stronger, fasting teaches patience, and zakat helps the poor 💎'},
    fr:{title:'La Sagesse de la Legislation Islamique',desc:'La legislation islamique vise a realiser le bien-etre des gens dans cette vie et dans l\'au-dela. Chaque regle a une sagesse : la priere previent l\'immoralite, la zakat purifie la richesse, et le jeune enseigne la patience. L\'Islam est la religion de la moderation et de l\'equilibre — ni exces ni negligence.',verse:'Et ainsi Nous avons fait de vous une communaute du juste milieu',verseRef:'Al-Baqarah 143',hadith:'Facilitez et ne compliquez pas, annoncez de bonnes nouvelles et ne repoussez pas — Unanimement reconnu',action:'Appliquez une regle islamique aujourd\'hui avec conscience et reflechissez a sa sagesse — comme prier a l\'heure ou faire la charite avec intention',young:'Chaque regle en Islam a une belle raison ! La priere te renforce, le jeune t\'apprend la patience, et la zakat aide les pauvres 💎'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما المحور الأول والأعظم في القرآن الكريم؟',opts:['قصص الأنبياء','التوحيد','الأحكام','الآخرة'],correct:1,hint:'هذا المحور يدور حول إفراد الله بالعبادة',quran:'الإخلاص ١'},
    en:{q:'What is the first and greatest axis of the Holy Quran?',opts:['Prophetic stories','Tawhid','Legislation','Afterlife'],correct:1,hint:'This axis revolves around worshipping Allah alone',quran:'Al-Ikhlas 1'},
    fr:{q:'Quel est le premier et le plus grand axe du Saint Coran ?',opts:['Histoires prophetiques','Tawhid','Legislation','Au-dela'],correct:1,hint:'Cet axe tourne autour de l\'adoration d\'Allah seul',quran:'Al-Ikhlas 1'}
  },
  {
    ar:{q:'أكمل الآية: "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِ..."',opts:['المؤمنين','أولي الألباب','الصابرين','المتقين'],correct:1,hint:'هذه الآية في سورة يوسف',quran:'يوسف ١١١'},
    en:{q:'Complete the verse: "There was certainly in their stories a lesson for those of..."',opts:['The believers','Understanding','The patient','The pious'],correct:1,hint:'This verse is in Surah Yusuf',quran:'Yusuf 111'},
    fr:{q:'Completez le verset : « Il y avait dans leurs histoires une lecon pour les doues d\'... »',opts:['Les croyants','Intelligence','Les patients','Les pieux'],correct:1,hint:'Ce verset est dans la Sourate Yusuf',quran:'Yusuf 111'}
  },
  {
    ar:{q:'كم سنة دعا نوح عليه السلام قومه؟',opts:['٥٠٠ سنة','٨٠٠ سنة','٩٥٠ سنة','١٠٠٠ سنة'],correct:2,hint:'ألف سنة إلا خمسين عاماً',quran:'العنكبوت ١٤'},
    en:{q:'How many years did Noah call his people?',opts:['500 years','800 years','950 years','1000 years'],correct:2,hint:'A thousand years minus fifty',quran:'Al-Ankabut 14'},
    fr:{q:'Combien d\'annees Noe a-t-il appele son peuple ?',opts:['500 ans','800 ans','950 ans','1000 ans'],correct:2,hint:'Mille ans moins cinquante',quran:'Al-Ankabut 14'}
  },
  {
    ar:{q:'من هو النبي الأكثر ذكراً في القرآن الكريم؟',opts:['إبراهيم','محمد ﷺ','موسى','عيسى'],correct:2,hint:'واجه فرعون بشجاعة',quran:'القصص ٥'},
    en:{q:'Who is the most mentioned prophet in the Holy Quran?',opts:['Ibrahim','Muhammad (PBUH)','Moses','Jesus'],correct:2,hint:'He faced Pharaoh with courage',quran:'Al-Qasas 5'},
    fr:{q:'Qui est le prophete le plus mentionne dans le Saint Coran ?',opts:['Ibrahim','Muhammad (PSL)','Moise','Jesus'],correct:2,hint:'Il a affronte Pharaon avec courage',quran:'Al-Qasas 5'}
  },
  {
    ar:{q:'ما هي سورة "أحسن القصص"؟',opts:['سورة الكهف','سورة مريم','سورة يوسف','سورة الأنبياء'],correct:2,hint:'تروي قصة نبي ظلمه إخوته',quran:'يوسف ٣'},
    en:{q:'Which surah contains "the best of stories"?',opts:['Surah Al-Kahf','Surah Maryam','Surah Yusuf','Surah Al-Anbiya'],correct:2,hint:'It tells the story of a prophet wronged by his brothers',quran:'Yusuf 3'},
    fr:{q:'Quelle sourate contient « le meilleur des recits » ?',opts:['Sourate Al-Kahf','Sourate Maryam','Sourate Yusuf','Sourate Al-Anbiya'],correct:2,hint:'Elle raconte l\'histoire d\'un prophete lese par ses freres',quran:'Yusuf 3'}
  },
  {
    ar:{q:'من النبي الذي بنى الكعبة مع ابنه؟',opts:['نوح','موسى','إبراهيم','محمد ﷺ'],correct:2,hint:'يُلقّب بأبي الأنبياء',quran:'النحل ١٢٠'},
    en:{q:'Which prophet built the Kaaba with his son?',opts:['Noah','Moses','Ibrahim','Muhammad (PBUH)'],correct:2,hint:'He is called the father of prophets',quran:'An-Nahl 120'},
    fr:{q:'Quel prophete a construit la Kaaba avec son fils ?',opts:['Noe','Moise','Ibrahim','Muhammad (PSL)'],correct:2,hint:'Il est appele le pere des prophetes',quran:'An-Nahl 120'}
  },
  {
    ar:{q:'أكمل الآية: "وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً ..."',opts:['عظيمة','كريمة','وسطاً','صالحة'],correct:2,hint:'تصف الإسلام بالاعتدال',quran:'البقرة ١٤٣'},
    en:{q:'Complete the verse: "And thus We have made you a ... nation"',opts:['Great','Noble','Middle','Righteous'],correct:2,hint:'It describes Islam with moderation',quran:'Al-Baqarah 143'},
    fr:{q:'Completez le verset : « Et ainsi Nous avons fait de vous une communaute du ... »',opts:['Grande','Noble','Juste milieu','Vertueuse'],correct:2,hint:'Il decrit l\'Islam par la moderation',quran:'Al-Baqarah 143'}
  },
  {
    ar:{q:'ما الحديث الذي قال فيه النبي ﷺ عن رسالته؟',opts:['بُعثت لأتمم مكارم الأخلاق','بُعثت بالسيف','بُعثت للعرب','بُعثت بالمال'],correct:0,hint:'يتعلق بالأخلاق الحسنة',quran:'الأنبياء ١٠٧'},
    en:{q:'What did the Prophet (PBUH) say about his mission?',opts:['I was sent to perfect noble character','I was sent with the sword','I was sent to the Arabs','I was sent with wealth'],correct:0,hint:'It relates to good character',quran:'Al-Anbiya 107'},
    fr:{q:'Qu\'a dit le Prophete (PSL) sur sa mission ?',opts:['J\'ai ete envoye pour parfaire les nobles caracteres','J\'ai ete envoye avec l\'epee','J\'ai ete envoye aux Arabes','J\'ai ete envoye avec la richesse'],correct:0,hint:'Cela concerne le bon caractere',quran:'Al-Anbiya 107'}
  },
  {
    ar:{q:'في أي سورة وردت آية "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ..."؟',opts:['البقرة','آل عمران','الأنعام','الرعد'],correct:1,hint:'هذه السورة تُنسب لعائلة نبوية',quran:'آل عمران ١٩٠'},
    en:{q:'In which surah is the verse "Indeed, in the creation of the heavens and earth..."?',opts:['Al-Baqarah','Al Imran','Al-Anam','Ar-Rad'],correct:1,hint:'This surah is named after a prophetic family',quran:'Al Imran 190'},
    fr:{q:'Dans quelle sourate se trouve le verset « En verite, dans la creation des cieux et de la terre... » ?',opts:['Al-Baqarah','Al Imran','Al-Anam','Ar-Rad'],correct:1,hint:'Cette sourate porte le nom d\'une famille prophetique',quran:'Al Imran 190'}
  },
  {
    ar:{q:'ماذا قال القرآن عن عيسى ابن مريم؟',opts:['إله','ابن الله','عبد أنعم الله عليه','ملاك'],correct:2,hint:'وردت في سورة الزخرف',quran:'الزخرف ٥٩'},
    en:{q:'What did the Quran say about Jesus son of Mary?',opts:['A deity','Son of God','A servant whom Allah blessed','An angel'],correct:2,hint:'Mentioned in Surah Az-Zukhruf',quran:'Az-Zukhruf 59'},
    fr:{q:'Que dit le Coran sur Jesus fils de Marie ?',opts:['Une divinite','Fils de Dieu','Un serviteur qu\'Allah a comble','Un ange'],correct:2,hint:'Mentionne dans la Sourate Az-Zukhruf',quran:'Az-Zukhruf 59'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء فهم القرآن',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلالِ وَالإِكْرَامِ',tr:'رواه ابن حبان'},
    en:{label:'Dua for Understanding the Quran',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلالِ وَالإِكْرَامِ',tr:'O Allah, open for us Your wisdom and spread upon us Your mercy, O Possessor of Majesty and Honor — Ibn Hibban'},
    fr:{label:'Dua pour Comprendre le Coran',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلالِ وَالإِكْرَامِ',tr:'O Allah, ouvre-nous Ta sagesse et repands sur nous Ta misericorde, O Possesseur de Majeste et d\'Honneur — Ibn Hibban'} },
  { ar:{label:'دعاء قبل التلاوة',text:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',tr:'النحل ٩٨'},
    en:{label:'Dua Before Recitation',text:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',tr:'I seek refuge with Allah from the accursed Satan. In the name of Allah, the Most Gracious, the Most Merciful — An-Nahl 98'},
    fr:{label:'Dua Avant la Recitation',text:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',tr:'Je cherche refuge aupres d\'Allah contre Satan le maudit. Au nom d\'Allah, le Tout Misericordieux, le Tres Misericordieux — An-Nahl 98'} },
  { ar:{label:'دعاء حفظ القرآن',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'دعاء مأثور'},
    en:{label:'Dua for Memorizing Quran',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'O Allah, have mercy on me through the Quran and make it for me a guide, a light, a guidance, and a mercy'},
    fr:{label:'Dua pour Memoriser le Coran',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'O Allah, aie pitie de moi par le Coran et fais-en pour moi un guide, une lumiere, une direction et une misericorde'} },
  { ar:{label:'دعاء العلم النافع',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Beneficial Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir Utile',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التدبر',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'رواه أحمد'},
    en:{label:'Dua for Reflection',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'O Allah, make the Quran the spring of my heart, the light of my chest, the remover of my sadness, and the departure of my worry — Ahmad'},
    fr:{label:'Dua pour la Reflexion',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'O Allah, fais du Coran le printemps de mon coeur, la lumiere de ma poitrine, le dissipateur de ma tristesse et le depart de mon souci — Ahmad'} },
  { ar:{label:'دعاء الهداية',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'الفاتحة ٦'},
    en:{label:'Dua for Guidance',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Guide us to the straight path — Al-Fatiha 6'},
    fr:{label:'Dua pour la Guidance',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Guide-nous vers le droit chemin — Al-Fatiha 6'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'mahawir-xp';
const BADGES_KEY = 'mahawir-badges';
const READ_KEY = 'mahawir-read';
const STREAK_KEY = 'mahawir-streak';
const MODE_KEY = 'mahawir-mode';
const QUIZ_BEST_KEY = 'mahawir-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme];
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabTraits').textContent = t.tabTraits;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle;
  document.getElementById('traitsDesc').textContent = t.traitsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = document.getElementById('traitsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  document.getElementById('progressContainer').innerHTML = `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'محور مقروء':lang==='fr'?'Axes lus':'Axes Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«المحاور الخمسة للقرآن الكريم» كتاب يكشف البنية الموضوعية للقرآن. يبيّن الشيخ الغزالي أن القرآن يدور حول خمسة محاور أساسية: التوحيد، الكون والخلق، قصص الأنبياء، الآخرة، والأحكام التشريعية. يساعد القارئ على فهم القرآن فهماً شاملاً ومترابطاً.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "المحاور الخمسة للقرآن الكريم" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأحمد'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal and fighting rigidity.',
      bookTitle: 'About the Book',
      bookDesc: '"The Five Axes of the Holy Quran" reveals the thematic structure of the Quran. Sheikh al-Ghazali shows that the Quran revolves around five fundamental axes: Tawhid (Divine Unity), the Universe and Creation, Prophetic Stories, the Afterlife, and Legislation. It helps readers understand the Quran comprehensively.',
      sourcesTitle: 'Sources',
      sources: ['"The Five Axes of the Holy Quran" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Ahmad'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Les Cinq Axes du Saint Coran" revele la structure thematique du Coran. Le Sheikh al-Ghazali montre que le Coran tourne autour de cinq axes fondamentaux : le Tawhid, l\'Univers et la Creation, les Histoires Prophetiques, l\'Au-dela, et la Legislation. Il aide les lecteurs a comprendre le Coran de maniere globale.',
      sourcesTitle: 'Sources',
      sources: ['"Les Cinq Axes du Saint Coran" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Ahmad'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "المحاور الخمسة للقرآن الكريم" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ محوراً، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/al-mahawir-al-khamsah'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Five Axes of the Holy Quran" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 axes, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/al-mahawir-al-khamsah'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Les Cinq Axes du Saint Coran" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 axes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/al-mahawir-al-khamsah'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اكتشف محوراً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء عند قراءة القرآن','⭐ أكمل ١٥ محوراً لتصبح خبيراً'],
    en: ['📖 Discover a new axis every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua when reading Quran','⭐ Complete all 15 axes to become an Expert'],
    fr: ['📖 Decouvrez un nouvel axe chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas en lisant le Coran','⭐ Completez les 15 axes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
