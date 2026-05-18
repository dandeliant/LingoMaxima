var DEFAULT_QUOTES=[
  {id:1,text:"Nie ma nic trwałego oprócz zmiany.",author:"Heraklit",lang:"pl",cat:"Filozofia",tid:154},
  {id:2,text:"Żyj tak, jakbyś miał umrzeć jutro. Ucz się tak, jakbyś miał żyć wiecznie.",author:"Mahatma Gandhi",lang:"pl",cat:"Motywacja",tid:155},
  {id:3,text:"Jedyna droga do odkrycia granic możliwości jest próba przekroczenia tego, co niemożliwe.",author:"Arthur C. Clarke",lang:"pl",cat:"Sukces",tid:156},
  {id:4,text:"Miłość jest jedyną siłą zdolną zmienić wroga w przyjaciela.",author:"Martin Luther King Jr.",lang:"pl",cat:"Miłość",tid:157},
  {id:5,text:"Szczęście zależy wyłącznie od tego, co myślisz.",author:"Dale Carnegie",lang:"pl",cat:"Mądrość",tid:158},
  {id:6,text:"Życie jest tym, co się nam przydarza, gdy jesteśmy zajęci robieniem innych planów.",author:"John Lennon",lang:"pl",cat:"Życie",tid:1},
  {id:7,text:"Bądź zmianą, którą chcesz widzieć w świecie.",author:"Mahatma Gandhi",lang:"pl",cat:"Motywacja",tid:4},
  {id:8,text:"Jedynym sposobem na wielką pracę jest kochanie tego, co się robi.",author:"Steve Jobs",lang:"pl",cat:"Sukces",tid:3},
  {id:9,text:"Człowiek jest kowalem własnego losu.",author:"Appiusz Klaudiusz",lang:"pl",cat:"Mądrość",tid:159},
  {id:10,text:"W środku każdej trudności tkwi możliwość.",author:"Albert Einstein",lang:"pl",cat:"Motywacja",tid:2},
  {id:11,text:"Be yourself; everyone else is already taken.",author:"Oscar Wilde",lang:"en",cat:"Mądrość",tid:160},
  {id:12,text:"In the middle of every difficulty lies opportunity.",author:"Albert Einstein",lang:"en",cat:"Motywacja",tid:2},
  {id:13,text:"The only way to do great work is to love what you do.",author:"Steve Jobs",lang:"en",cat:"Sukces",tid:3},
  {id:14,text:"It is during our darkest moments that we must focus to see the light.",author:"Aristotle",lang:"en",cat:"Filozofia"},
  {id:15,text:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",author:"Mother Teresa",lang:"en",cat:"Miłość"},
  {id:16,text:"Always remember that you are absolutely unique. Just like everyone else.",author:"Margaret Mead",lang:"en",cat:"Mądrość"},
  {id:17,text:"Do not go where the path may lead; go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson",lang:"en",cat:"Filozofia"},
  {id:18,text:"You will face many defeats in life, but never let yourself be defeated.",author:"Maya Angelou",lang:"en",cat:"Sukces"},
  {id:19,text:"Life is what happens when you're busy making other plans.",author:"John Lennon",lang:"en",cat:"Życie",tid:1},
  {id:20,text:"The greatest glory lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela",lang:"en",cat:"Motywacja"},
  {id:21,text:"Das Leben ist zu kurz, um schlechten Wein zu trinken.",author:"Johann Wolfgang von Goethe",lang:"de",cat:"Życie"},
  {id:22,text:"Was mich nicht umbringt, macht mich stärker.",author:"Friedrich Nietzsche",lang:"de",cat:"Motywacja"},
  {id:23,text:"Man muss noch Chaos in sich haben, um einen tanzenden Stern gebären zu können.",author:"Friedrich Nietzsche",lang:"de",cat:"Filozofia"},
  {id:24,text:"Glück ist das einzige, das sich verdoppelt, wenn man es teilt.",author:"Albert Schweitzer",lang:"de",cat:"Mądrość"},
  {id:25,text:"Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.",author:"Ludwig Wittgenstein",lang:"de",cat:"Filozofia"},
  {id:26,text:"Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.",author:"Bertolt Brecht",lang:"de",cat:"Motywacja"},
  {id:27,text:"Das Herz hat seine Gründe, die die Vernunft nicht kennt.",author:"Blaise Pascal",lang:"de",cat:"Miłość"},
  {id:28,text:"In der Beschränkung zeigt sich erst der Meister.",author:"Johann Wolfgang von Goethe",lang:"de",cat:"Sukces"},
  {id:29,text:"Irren ist menschlich, aber im Irrtum beharren ist teuflisch.",author:"Cicero",lang:"de",cat:"Mądrość"},
  {id:30,text:"Tue, was du kannst, mit dem, was du hast, wo du auch bist.",author:"Theodore Roosevelt",lang:"de",cat:"Sukces"},
  {id:31,text:"Je pense, donc je suis.",author:"René Descartes",lang:"fr",cat:"Filozofia"},
  {id:32,text:"Il faut cultiver notre jardin.",author:"Voltaire",lang:"fr",cat:"Mądrość"},
  {id:33,text:"On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",author:"Antoine de Saint-Exupéry",lang:"fr",cat:"Filozofia"},
  {id:34,text:"Le courage, c'est de chercher la vérité et de la dire.",author:"Jean Jaurès",lang:"fr",cat:"Motywacja"},
  {id:35,text:"La vie, c'est ce qui arrive pendant qu'on fait d'autres projets.",author:"John Lennon",lang:"fr",cat:"Życie",tid:1},
  {id:36,text:"La simplicité est la sophistication suprême.",author:"Leonardo da Vinci",lang:"fr",cat:"Mądrość"},
  {id:37,text:"Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",author:"Winston Churchill",lang:"fr",cat:"Sukces"},
  {id:38,text:"L'amour n'est pas seulement un sentiment, c'est aussi un art.",author:"Honoré de Balzac",lang:"fr",cat:"Miłość"},
  {id:39,text:"La liberté commence où l'ignorance finit.",author:"Victor Hugo",lang:"fr",cat:"Filozofia"},
  {id:40,text:"Chaque saint a un passé, chaque pécheur a un avenir.",author:"Oscar Wilde",lang:"fr",cat:"Życie"},
  {id:41,text:"Dime con quién andas y te diré quién eres.",author:"Miguel de Cervantes",lang:"es",cat:"Mądrość"},
  {id:42,text:"No llores porque ya se acabó, sonríe porque sucedió.",author:"Gabriel García Márquez",lang:"es",cat:"Życie"},
  {id:43,text:"La vida no es la que uno vivió, sino la que uno recuerda.",author:"Gabriel García Márquez",lang:"es",cat:"Życie"},
  {id:44,text:"El secreto de avanzar es comenzar.",author:"Mark Twain",lang:"es",cat:"Motywacja"},
  {id:45,text:"La esperanza es el sueño del hombre despierto.",author:"Aristóteles",lang:"es",cat:"Filozofia"},
  {id:46,text:"El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje de continuar.",author:"Winston Churchill",lang:"es",cat:"Sukces"},
  {id:47,text:"Sé el cambio que quieres ver en el mundo.",author:"Mahatma Gandhi",lang:"es",cat:"Motywacja",tid:4},
  {id:48,text:"Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección.",author:"Antoine de Saint-Exupéry",lang:"es",cat:"Miłość"},
  {id:49,text:"El que no arriesga, no cruza el río.",author:"Proverbio español",lang:"es",cat:"Mądrość"},
  {id:50,text:"Mientras hay vida, hay esperanza.",author:"Cicerón",lang:"es",cat:"Motywacja"},
  {id:51,text:"Красота спасёт мир.",author:"Фёдор Достоевский",lang:"ru",cat:"Filozofia"},
  {id:52,text:"Человек — это звучит гордо.",author:"Максим Горький",lang:"ru",cat:"Filozofia"},
  {id:53,text:"Любить — значит жить жизнью того, кого любишь.",author:"Лев Толстой",lang:"ru",cat:"Miłość"},
  {id:54,text:"В человеке всё должно быть прекрасно: и лицо, и одежда, и душа, и мысли.",author:"Антон Чехов",lang:"ru",cat:"Mądrość"},
  {id:55,text:"Нельзя дважды войти в одну и ту же реку.",author:"Гераклит",lang:"ru",cat:"Filozofia"},
  {id:56,text:"Счастье — это когда тебя понимают.",author:"Лев Толстой",lang:"ru",cat:"Mądrość"},
  {id:57,text:"Жизнь прожить — не поле перейти.",author:"Русская пословица",lang:"ru",cat:"Życie"},
  {id:58,text:"Смелость — это не отсутствие страха, а победа над ним.",author:"Нельсон Мандела",lang:"ru",cat:"Motywacja"},
  {id:59,text:"Все счастливые семьи похожи друг на друга, каждая несчастливая — по-своему.",author:"Лев Толстой",lang:"ru",cat:"Życie"},
  {id:60,text:"Великие умы обсуждают идеи, средние — события, мелкие — людей.",author:"Элеонора Рузвельт",lang:"ru",cat:"Mądrość",tid:196},
  // Grupa 5 — Nietzsche, „A ci, którzy tańczyli…"
  {id:61,text:"A ci, którzy tańczyli, zostali uznani za szalonych przez tych, którzy nie słyszeli muzyki.",author:"Friedrich Nietzsche",lang:"pl",cat:"Filozofia",tid:5},
  {id:62,text:"And those who were seen dancing were thought to be insane by those who could not hear the music.",author:"Friedrich Nietzsche",lang:"en",cat:"Filozofia",tid:5},
  {id:63,text:"Und die, die tanzten, wurden von denen, die die Musik nicht hören konnten, für verrückt gehalten.",author:"Friedrich Nietzsche",lang:"de",cat:"Filozofia",tid:5},
  {id:64,text:"Et ceux qui dansaient étaient considérés comme fous par ceux qui n'entendaient pas la musique.",author:"Friedrich Nietzsche",lang:"fr",cat:"Filozofia",tid:5},
  {id:65,text:"Y aquellos que bailaban fueron considerados locos por quienes no podían escuchar la música.",author:"Friedrich Nietzsche",lang:"es",cat:"Filozofia",tid:5},
  {id:66,text:"А те, кто танцевал, считались безумцами теми, кто не слышал музыки.",author:"Фридрих Ницше",lang:"ru",cat:"Filozofia",tid:5},
  // Grupa 6 — Daniel Ostrowski, „Każde serce może skrywać iskrę…"
  {id:67,text:"Każde serce może skrywać iskrę, zdolną rozświetlić najciemniejsze zakątki. W życiu warto otaczać się ludźmi, którzy przecinają mrok naszych lęków i wątpliwości, stają się promieniem światła, który wskrzesza nadzieję i przynosi ulgę.",author:"Daniel Ostrowski",lang:"pl",cat:"Mądrość",tid:6},
  {id:68,text:"Every heart can hold a spark capable of illuminating the darkest corners. In life, it is worth surrounding yourself with people who cut through the darkness of our fears and doubts, becoming a ray of light that revives hope and brings relief.",author:"Daniel Ostrowski",lang:"en",cat:"Mądrość",tid:6},
  {id:69,text:"Jedes Herz kann einen Funken bergen, der selbst die dunkelsten Winkel zu erhellen vermag. Im Leben lohnt es sich, sich mit Menschen zu umgeben, die das Dunkel unserer Ängste und Zweifel durchbrechen und zu einem Lichtstrahl werden, der die Hoffnung neu erweckt und Erleichterung bringt.",author:"Daniel Ostrowski",lang:"de",cat:"Mądrość",tid:6},
  {id:70,text:"Chaque cœur peut renfermer une étincelle capable d'illuminer les recoins les plus sombres. Dans la vie, il vaut la peine de s'entourer de personnes qui percent l'obscurité de nos peurs et de nos doutes, devenant un rayon de lumière qui ranime l'espoir et apporte du soulagement.",author:"Daniel Ostrowski",lang:"fr",cat:"Mądrość",tid:6},
  {id:71,text:"Cada corazón puede ocultar una chispa capaz de iluminar los rincones más oscuros. En la vida vale la pena rodearse de personas que atraviesan la oscuridad de nuestros miedos y dudas, convirtiéndose en un rayo de luz que resucita la esperanza y trae alivio.",author:"Daniel Ostrowski",lang:"es",cat:"Mądrość",tid:6},
  {id:72,text:"Каждое сердце может таить в себе искру, способную осветить самые тёмные уголки. В жизни стоит окружать себя людьми, которые рассекают мрак наших страхов и сомнений, становясь лучом света, который воскрешает надежду и приносит облегчение.",author:"Даниэль Островский",lang:"ru",cat:"Mądrość",tid:6},
  // Grupa 7 — Daniel Ostrowski, „Przeszedłem przez piekło…"
  {id:73,text:"Przeszedłem przez piekło dawno temu, lecz do dziś zmagam się z demonami przeszłości, które wciąż sabotują mój rozwój.",author:"Daniel Ostrowski",lang:"pl",cat:"Życie",tid:7},
  {id:74,text:"I went through hell a long time ago, but to this day I struggle with the demons of the past that still sabotage my growth.",author:"Daniel Ostrowski",lang:"en",cat:"Życie",tid:7},
  {id:75,text:"Ich bin vor langer Zeit durch die Hölle gegangen, doch bis heute kämpfe ich mit den Dämonen der Vergangenheit, die meine Entwicklung noch immer sabotieren.",author:"Daniel Ostrowski",lang:"de",cat:"Życie",tid:7},
  {id:76,text:"Je suis passé par l'enfer il y a longtemps, mais jusqu'à aujourd'hui je lutte encore avec les démons du passé qui sabotent toujours mon développement.",author:"Daniel Ostrowski",lang:"fr",cat:"Życie",tid:7},
  {id:77,text:"Pasé por el infierno hace mucho tiempo, pero hasta el día de hoy lucho con los demonios del pasado que aún sabotean mi crecimiento.",author:"Daniel Ostrowski",lang:"es",cat:"Życie",tid:7},
  {id:78,text:"Я прошёл через ад давным-давно, но по сей день борюсь с демонами прошлого, которые всё ещё саботируют моё развитие.",author:"Даниэль Островский",lang:"ru",cat:"Życie",tid:7},
  // Grupa 8 — Autor nieznany, „Pensja to narkotyk…"
  {id:79,text:"Pensja z pracy na etacie to narkotyk, który daje ci pracodawca, abyś zapomniał o swoich marzeniach.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:8},
  {id:80,text:"A salary is the drug they give you to forget your dreams.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:8},
  {id:81,text:"Ein Gehalt aus einer Festanstellung ist die Droge, die dir der Arbeitgeber gibt, damit du deine Träume vergisst.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:8},
  {id:82,text:"Le salaire d'un emploi à plein temps est la drogue que l'employeur te donne pour que tu oublies tes rêves.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:8},
  {id:83,text:"El sueldo de un empleo fijo es la droga que el empleador te da para que olvides tus sueños.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:8},
  {id:84,text:"Зарплата на постоянной работе — это наркотик, который даёт тебе работодатель, чтобы ты забыл о своих мечтах.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:8},
  // Grupa 9 — Barry Finley, „Every mountain top is within reach…"
  {id:85,text:"Każdy szczyt góry jest w zasięgu ręki, jeśli tylko nie przestaniesz się wspinać.",author:"Barry Finley",lang:"pl",cat:"Motywacja",tid:9},
  {id:86,text:"Every mountain top is within reach, if you just keep climbing.",author:"Barry Finley",lang:"en",cat:"Motywacja",tid:9},
  {id:87,text:"Jeder Gipfel ist erreichbar, solange du einfach weiterkletterst.",author:"Barry Finley",lang:"de",cat:"Motywacja",tid:9},
  {id:88,text:"Chaque sommet de montagne est à portée, si vous continuez simplement à grimper.",author:"Barry Finley",lang:"fr",cat:"Motywacja",tid:9},
  {id:89,text:"Cada cima de montaña está al alcance, si solo sigues escalando.",author:"Barry Finley",lang:"es",cat:"Motywacja",tid:9},
  {id:90,text:"Каждая вершина горы под рукой, если продолжишь взбираться.",author:"Барри Финли",lang:"ru",cat:"Motywacja",tid:9},
  // Grupa 10 — Jimmy Dean, „Nie możesz zmienić kierunku wiatru…"
  {id:91,text:"Nie możesz zmienić kierunku wiatru, ale możesz dostosować żagle, by zawsze dopłynąć do celu. Rzuć się na głęboką wodę i podążaj za swoimi marzeniami.",author:"Jimmy Dean",lang:"pl",cat:"Motywacja",tid:10},
  {id:92,text:"You can't change the direction of the wind, but you can adjust your sails to always reach for your destination. Dive into deep waters and pursue your dreams.",author:"Jimmy Dean",lang:"en",cat:"Motywacja",tid:10},
  {id:93,text:"Du kannst die Richtung des Windes nicht ändern, aber du kannst deine Segel anpassen. Tauche in die tiefen Gewässer ein und verfolge deine Träume.",author:"Jimmy Dean",lang:"de",cat:"Motywacja",tid:10},
  {id:94,text:"On ne peut pas changer la direction du vent, mais on peut ajuster ses voiles. Plonge dans les eaux profondes et poursuis tes rêves.",author:"Jimmy Dean",lang:"fr",cat:"Motywacja",tid:10},
  {id:95,text:"No puedes cambiar la dirección del viento, pero puedes ajustar tus velas. Sumérgete en aguas profundas y persigue tus sueños.",author:"Jimmy Dean",lang:"es",cat:"Motywacja",tid:10},
  {id:96,text:"Вы не можете изменить направление ветра, но вы можете подстроить свои паруса. Погрузитесь в глубокие воды и следуйте за своими мечтами.",author:"Джимми Дин",lang:"ru",cat:"Motywacja",tid:10},
  // Grupa 11 — Autor nieznany, „Najlepszy czas na rozpoczęcie jest teraz."
  {id:97,text:"Najlepszy czas na rozpoczęcie jest teraz.",author:"Autor nieznany",lang:"pl",cat:"Motywacja",tid:11},
  {id:98,text:"The best time to start is now.",author:"Unknown author",lang:"en",cat:"Motywacja",tid:11},
  {id:99,text:"Die beste Zeit zum Starten ist jetzt.",author:"Unbekannter Autor",lang:"de",cat:"Motywacja",tid:11},
  {id:100,text:"Le meilleur moment pour commencer est maintenant.",author:"Auteur inconnu",lang:"fr",cat:"Motywacja",tid:11},
  {id:101,text:"El mejor momento para empezar es ahora.",author:"Autor desconocido",lang:"es",cat:"Motywacja",tid:11},
  {id:102,text:"Лучшее время для начала — сейчас.",author:"Автор неизвестен",lang:"ru",cat:"Motywacja",tid:11},
  // Grupa 12 — Autor nieznany, „Każdy sukces zaczyna się od decyzji…"
  {id:103,text:"Każdy sukces zaczyna się od decyzji podjętej przez Ciebie.",author:"Autor nieznany",lang:"pl",cat:"Sukces",tid:12},
  {id:104,text:"Every success begins with a decision made by you.",author:"Unknown author",lang:"en",cat:"Sukces",tid:12},
  {id:105,text:"Jeder Erfolg beginnt mit einer von Ihnen getroffenen Entscheidung.",author:"Unbekannter Autor",lang:"de",cat:"Sukces",tid:12},
  {id:106,text:"Chaque succès commence par une décision prise par vous.",author:"Auteur inconnu",lang:"fr",cat:"Sukces",tid:12},
  {id:107,text:"Cada éxito comienza con una decisión tomada por ti.",author:"Autor desconocido",lang:"es",cat:"Sukces",tid:12},
  {id:108,text:"Каждый успех начинается с принятого вами решения.",author:"Автор неизвестен",lang:"ru",cat:"Sukces",tid:12},
  // Grupa 13 — Autor nieznany, „Nigdy nie rezygnuj…"
  {id:109,text:"Nigdy nie rezygnuj. Czasami droga do sukcesu jest pełna przeszkód, ale warto walczyć.",author:"Autor nieznany",lang:"pl",cat:"Motywacja",tid:13},
  {id:110,text:"Never give up. Sometimes the road to success is full of obstacles, but it's worth fighting.",author:"Unknown author",lang:"en",cat:"Motywacja",tid:13},
  {id:111,text:"Gib niemals auf. Manchmal ist der Weg zum Erfolg voller Hindernisse, aber es lohnt sich zu kämpfen.",author:"Unbekannter Autor",lang:"de",cat:"Motywacja",tid:13},
  {id:112,text:"Ne renoncez jamais. Parfois, le chemin vers le succès est semé d'obstacles, mais cela vaut la peine de se battre.",author:"Auteur inconnu",lang:"fr",cat:"Motywacja",tid:13},
  {id:113,text:"Nunca te rindas. A veces el camino hacia el éxito está lleno de obstáculos, pero vale la pena luchar.",author:"Autor desconocido",lang:"es",cat:"Motywacja",tid:13},
  {id:114,text:"Никогда не сдавайся. Иногда путь к успеху полон препятствий, но стоит бороться.",author:"Автор неизвестен",lang:"ru",cat:"Motywacja",tid:13},
  // Grupa 14 — Jack Canfield, „Nie martw się o niepowodzenia…"
  {id:115,text:"Nie martw się o niepowodzenia. Martw się o szanse, które przegapisz, gdy nie spróbujesz.",author:"Jack Canfield",lang:"pl",cat:"Motywacja",tid:14},
  {id:116,text:"Don't worry about failures. Worry about the chances you miss when you don't even try.",author:"Jack Canfield",lang:"en",cat:"Motywacja",tid:14},
  {id:117,text:"Machen Sie sich keine Sorgen um Misserfolge. Sorgen Sie sich um die Chancen, die Sie verpassen, wenn Sie es nicht einmal versuchen.",author:"Jack Canfield",lang:"de",cat:"Motywacja",tid:14},
  {id:118,text:"Ne vous inquiétez pas des échecs. Inquiétez-vous des opportunités que vous manquez lorsque vous n'essayez même pas.",author:"Jack Canfield",lang:"fr",cat:"Motywacja",tid:14},
  {id:119,text:"No se preocupe por los fracasos. Preocúpese por las oportunidades que pierde cuando ni siquiera lo intenta.",author:"Jack Canfield",lang:"es",cat:"Motywacja",tid:14},
  {id:120,text:"Не беспокойтесь о неудачах. Беспокойтесь о шансах, которые вы упустите, даже не попробовав.",author:"Джек Кэнфилд",lang:"ru",cat:"Motywacja",tid:14},
  // Grupa 15 — Laozi, „Podróż tysiąca mil…"
  {id:121,text:"Podróż tysiąca mil zaczyna się od jednego kroku.",author:"Laozi",lang:"pl",cat:"Mądrość",tid:15},
  {id:122,text:"A journey of a thousand miles begins with a single step.",author:"Laozi",lang:"en",cat:"Mądrość",tid:15},
  {id:123,text:"Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.",author:"Laozi",lang:"de",cat:"Mądrość",tid:15},
  {id:124,text:"Un voyage de mille milles commence par un seul pas.",author:"Laozi",lang:"fr",cat:"Mądrość",tid:15},
  {id:125,text:"Un viaje de mil millas comienza con un solo paso.",author:"Laozi",lang:"es",cat:"Mądrość",tid:15},
  {id:126,text:"Путешествие тысячи миль начинается с одного шага.",author:"Лао-цзы",lang:"ru",cat:"Mądrość",tid:15},
  // Grupa 16 — Autor nieznany, „Człowiek nie jest ograniczony…"
  {id:127,text:"Człowiek nie jest ograniczony tym, kim jest. Jest ograniczony tym, kim myśli, że jest.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:16},
  {id:128,text:"A person is not limited by who they are. They are limited by who they think they are.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:16},
  {id:129,text:"Ein Mensch ist nicht durch das begrenzt, was er ist. Er ist begrenzt durch das, was er denkt, dass er ist.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:16},
  {id:130,text:"L'homme n'est pas limité par ce qu'il est. Il est limité par ce qu'il pense qu'il est.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:16},
  {id:131,text:"Una persona no está limitada por quien es. Está limitada por quien piensa que es.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:16},
  {id:132,text:"Человек не ограничен тем, кем он является. Он ограничен тем, кем он думает, что он является.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:16},
  // Grupa 17 — George Eliot, „Nigdy nie jest za późno…"
  {id:133,text:"Nigdy nie jest za późno, aby być tym, kim naprawdę chcesz być.",author:"George Eliot",lang:"pl",cat:"Motywacja",tid:17},
  {id:134,text:"It's never too late to be who you really want to be.",author:"George Eliot",lang:"en",cat:"Motywacja",tid:17},
  {id:135,text:"Es ist nie zu spät, die Person zu sein, die du wirklich sein möchtest.",author:"George Eliot",lang:"de",cat:"Motywacja",tid:17},
  {id:136,text:"Il n'est jamais trop tard pour être la personne que vous voulez vraiment être.",author:"George Eliot",lang:"fr",cat:"Motywacja",tid:17},
  {id:137,text:"Nunca es demasiado tarde para ser quien realmente quieres ser.",author:"George Eliot",lang:"es",cat:"Motywacja",tid:17},
  {id:138,text:"Никогда не слишком поздно быть тем, кем вы действительно хотите быть.",author:"Джордж Элиот",lang:"ru",cat:"Motywacja",tid:17},
  // Grupa 18 — Autor nieznany, „Twoje działania mówią głośniej…"
  {id:139,text:"Twoje działania mówią głośniej niż twoje słowa.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:18},
  {id:140,text:"Your actions speak louder than your words.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:18},
  {id:141,text:"Deine Taten sprechen lauter als deine Worte.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:18},
  {id:142,text:"Vos actions parlent plus fort que vos mots.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:18},
  {id:143,text:"Tus acciones hablan más fuerte que tus palabras.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:18},
  {id:144,text:"Ваши действия говорят громче, чем ваши слова.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:18},
  // Grupa 19 — Wayne Dyer, „Twoje jedyne ograniczenia…"
  {id:145,text:"Twoje jedyne ograniczenia to te, które akceptujesz i w które wierzysz.",author:"Wayne Dyer",lang:"pl",cat:"Motywacja",tid:19},
  {id:146,text:"Your only limitations are the ones you accept and believe in.",author:"Wayne Dyer",lang:"en",cat:"Motywacja",tid:19},
  {id:147,text:"Deine einzigen Begrenzungen sind diejenigen, die du akzeptierst und an die du glaubst.",author:"Wayne Dyer",lang:"de",cat:"Motywacja",tid:19},
  {id:148,text:"Vos seules limites sont celles que vous acceptez et croyez.",author:"Wayne Dyer",lang:"fr",cat:"Motywacja",tid:19},
  {id:149,text:"Tus únicas limitaciones son las que aceptas y en las que crees.",author:"Wayne Dyer",lang:"es",cat:"Motywacja",tid:19},
  {id:150,text:"Ваши единственные ограничения — это те, которые вы принимаете и в которые верите.",author:"Уэйн Дайер",lang:"ru",cat:"Motywacja",tid:19},
  // Grupa 20 — Autor nieznany, „Marzenia się spełniają…"
  {id:151,text:"Marzenia się spełniają tylko wtedy, gdy nie przestajesz w nie wierzyć.",author:"Autor nieznany",lang:"pl",cat:"Motywacja",tid:20},
  {id:152,text:"Dreams come true only when you never stop believing in them.",author:"Unknown author",lang:"en",cat:"Motywacja",tid:20},
  {id:153,text:"Träume werden nur wahr, wenn du niemals aufhörst, an sie zu glauben.",author:"Unbekannter Autor",lang:"de",cat:"Motywacja",tid:20},
  {id:154,text:"Les rêves se réalisent seulement lorsque vous ne cessez jamais d'y croire.",author:"Auteur inconnu",lang:"fr",cat:"Motywacja",tid:20},
  {id:155,text:"Los sueños se cumplen solo cuando nunca dejas de creer en ellos.",author:"Autor desconocido",lang:"es",cat:"Motywacja",tid:20},
  {id:156,text:"Мечты сбываются только тогда, когда ты не перестаёшь в них верить.",author:"Автор неизвестен",lang:"ru",cat:"Motywacja",tid:20},
  // Grupa 21 — Autor nieznany, „Twoje ograniczenia są tylko w twojej głowie…"
  {id:157,text:"Twoje ograniczenia są tylko w twojej głowie. Jeśli uwierzysz, że coś jest możliwe, znajdziesz sposób, aby to osiągnąć.",author:"Autor nieznany",lang:"pl",cat:"Motywacja",tid:21},
  {id:158,text:"Your limitations are only in your mind. If you believe something is possible, you will find a way to achieve it.",author:"Unknown author",lang:"en",cat:"Motywacja",tid:21},
  {id:159,text:"Deine Grenzen existieren nur in deinem Kopf. Wenn du glaubst, dass etwas möglich ist, wirst du einen Weg finden, es zu erreichen.",author:"Unbekannter Autor",lang:"de",cat:"Motywacja",tid:21},
  {id:160,text:"Tes limitations sont seulement dans ton esprit. Si tu crois que quelque chose est possible, tu trouveras un moyen de l'atteindre.",author:"Auteur inconnu",lang:"fr",cat:"Motywacja",tid:21},
  {id:161,text:"Tus limitaciones solo están en tu mente. Si crees que algo es posible, encontrarás la manera de lograrlo.",author:"Autor desconocido",lang:"es",cat:"Motywacja",tid:21},
  {id:162,text:"Твои ограничения существуют только в твоей голове. Если ты веришь, что что-то возможно, ты найдёшь способ это достичь.",author:"Автор неизвестен",lang:"ru",cat:"Motywacja",tid:21},
  // Grupa 22 — Albert Schweitzer, „Sukces to nie klucz do szczęścia…"
  {id:163,text:"Sukces to nie klucz do szczęścia. Szczęście to klucz do sukcesu. Jeśli kochasz to, co robisz, będziesz odnosić sukcesy.",author:"Albert Schweitzer",lang:"pl",cat:"Sukces",tid:22},
  {id:164,text:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",author:"Albert Schweitzer",lang:"en",cat:"Sukces",tid:22},
  {id:165,text:"Erfolg ist nicht der Schlüssel zum Glück. Glück ist der Schlüssel zum Erfolg. Wenn du liebst, was du tust, wirst du erfolgreich sein.",author:"Albert Schweitzer",lang:"de",cat:"Sukces",tid:22},
  {id:166,text:"Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous connaîtrez le succès.",author:"Albert Schweitzer",lang:"fr",cat:"Sukces",tid:22},
  {id:167,text:"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",author:"Albert Schweitzer",lang:"es",cat:"Sukces",tid:22},
  {id:168,text:"Успех — не ключ к счастью. Счастье — ключ к успеху. Если вы любите то, что делаете, вы будете успешны.",author:"Альберт Швейцер",lang:"ru",cat:"Sukces",tid:22},
  // Grupa 23 — Autor nieznany, „Czas, który ucieka…"
  {id:169,text:"Czas, który ucieka, to jedyna rzecz, której ludzie nie mogą kontrolować.",author:"Autor nieznany",lang:"pl",cat:"Filozofia",tid:23},
  {id:170,text:"Time that slips away is the only thing people cannot control.",author:"Unknown author",lang:"en",cat:"Filozofia",tid:23},
  {id:171,text:"Die Zeit, die entflieht, ist das Einzige, was Menschen nicht kontrollieren können.",author:"Unbekannter Autor",lang:"de",cat:"Filozofia",tid:23},
  {id:172,text:"Le temps qui s'échappe est la seule chose que les gens ne peuvent pas contrôler.",author:"Auteur inconnu",lang:"fr",cat:"Filozofia",tid:23},
  {id:173,text:"El tiempo que se escapa es lo único que las personas no pueden controlar.",author:"Autor desconocido",lang:"es",cat:"Filozofia",tid:23},
  {id:174,text:"Время, ускользающее, — единственное, что люди не могут контролировать.",author:"Автор неизвестен",lang:"ru",cat:"Filozofia",tid:23},
  // Grupa 24 — Autor nieznany, „Kiedyś przejmowałem się tym, co myślą o mnie inni…"
  {id:175,text:"Kiedyś przejmowałem się tym, co myślą o mnie inni, aż do momentu, kiedy chciałem zapłacić rachunki ich opiniami. Płatność została odrzucona.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:24},
  {id:176,text:"I used to care about what others think of me, until I wanted to pay my bills with their opinions. The payment was declined.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:24},
  {id:177,text:"Früher habe ich darauf geachtet, was andere von mir denken, bis ich meine Rechnungen mit ihren Meinungen bezahlen wollte. Die Zahlung wurde abgelehnt.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:24},
  {id:178,text:"Je me souciais de ce que les autres pensaient de moi, jusqu'à ce que je veuille payer mes factures avec leurs opinions. Le paiement a été refusé.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:24},
  {id:179,text:"Antes me importaba lo que los demás piensan de mí, hasta que quise pagar mis facturas con sus opiniones. El pago fue rechazado.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:24},
  {id:180,text:"Раньше меня волновало, что обо мне думают другие, пока я не захотел оплатить свои счета их мнениями. Оплата была отклонена.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:24},
  // Grupa 25 — Bangambiki Habyarimana, „W dniu twoich narodzin…"
  {id:181,text:"W dniu twoich narodzin otrzymałeś moc tworzenia samego siebie.",author:"Bangambiki Habyarimana",lang:"pl",cat:"Filozofia",tid:25},
  {id:182,text:"The day you were born you were given power to create yourself.",author:"Bangambiki Habyarimana",lang:"en",cat:"Filozofia",tid:25},
  {id:183,text:"Am Tag deiner Geburt hast du die Kraft erhalten, dich selbst zu erschaffen.",author:"Bangambiki Habyarimana",lang:"de",cat:"Filozofia",tid:25},
  {id:184,text:"Le jour de ta naissance, on t'a donné le pouvoir de te créer toi-même.",author:"Bangambiki Habyarimana",lang:"fr",cat:"Filozofia",tid:25},
  {id:185,text:"El día en que naciste, se te dio el poder de crearte a ti mismo.",author:"Bangambiki Habyarimana",lang:"es",cat:"Filozofia",tid:25},
  {id:186,text:"В день, когда ты родился, тебе была дана сила создать себя самого.",author:"Бангамбики Хабьяримана",lang:"ru",cat:"Filozofia",tid:25},
  // Grupa 26 — Emmanuel Apetsi, „Twoje życie to książka…"
  {id:187,text:"Twoje życie to książka, a ty jesteś jej autorem poprzez to, jak je przeżywasz. Napisz ją na tyle dobrze, że w przyszłości ty i twoje dziecko będziecie dumni, czytając ją. Proszę, zapewnij jej dobre zakończenie.",author:"Emmanuel Apetsi",lang:"pl",cat:"Życie",tid:26},
  {id:188,text:"Your life is a book, and you are its writer by how you live it. Write it well enough that your future self and child will be proud to read it. Please give it a good ending.",author:"Emmanuel Apetsi",lang:"en",cat:"Życie",tid:26},
  {id:189,text:"Dein Leben ist ein Buch, und du bist sein Autor durch die Art und Weise, wie du es lebst. Schreibe es gut genug, damit dein zukünftiges Ich und dein Kind stolz darauf sind, es zu lesen. Bitte gib ihm ein gutes Ende.",author:"Emmanuel Apetsi",lang:"de",cat:"Życie",tid:26},
  {id:190,text:"Votre vie est un livre, et vous en êtes l'auteur par la manière dont vous la vivez. Écrivez-la suffisamment bien pour que votre futur vous et votre enfant soient fiers de la lire. S'il vous plaît, offrez-lui une belle fin.",author:"Emmanuel Apetsi",lang:"fr",cat:"Życie",tid:26},
  {id:191,text:"Tu vida es un libro, y tú eres su autor por cómo la vives. Escríbela lo suficientemente bien como para que tu yo futuro y tu hijo estén orgullosos al leerla. Por favor, dale un buen final.",author:"Emmanuel Apetsi",lang:"es",cat:"Życie",tid:26},
  {id:192,text:"Ваша жизнь — это книга, а вы её автор тем, как вы её проживаете. Напишите её настолько хорошо, что ваше будущее «я» и ваш ребёнок будут гордиться, читая её. Пожалуйста, дайте ей хорошее завершение.",author:"Эммануэль Апетси",lang:"ru",cat:"Życie",tid:26},
  // Grupa 27 — Hiral Nagda, „Masz władzę tworzyć swoje wymarzone życie…"
  {id:193,text:"Masz władzę tworzyć swoje wymarzone życie, gdybyś tylko w to uwierzył/a.",author:"Hiral Nagda",lang:"pl",cat:"Motywacja",tid:27},
  {id:194,text:"You hold the power to create your dream life, if only you would believe it.",author:"Hiral Nagda",lang:"en",cat:"Motywacja",tid:27},
  {id:195,text:"Du hast die Kraft, dein Traumleben zu erschaffen, wenn du nur daran glauben würdest.",author:"Hiral Nagda",lang:"de",cat:"Motywacja",tid:27},
  {id:196,text:"Tu as le pouvoir de créer ta vie de rêve, si seulement tu y croyais.",author:"Hiral Nagda",lang:"fr",cat:"Motywacja",tid:27},
  {id:197,text:"Tienes el poder de crear la vida de tus sueños, si tan solo lo creyeras.",author:"Hiral Nagda",lang:"es",cat:"Motywacja",tid:27},
  {id:198,text:"У тебя есть сила создать свою мечту, если только ты поверишь в это.",author:"Хирал Нагда",lang:"ru",cat:"Motywacja",tid:27},
  // Grupa 28 — Anthon St. Maarten, „Twoja przyszłość nie zaczyna się jutro…"
  {id:199,text:"Twoja przyszłość nie zaczyna się jutro. Przyszłość to to, co tworzysz dzisiaj.",author:"Anthon St. Maarten",lang:"pl",cat:"Motywacja",tid:28},
  {id:200,text:"Your future is not tomorrow. The future is what you are creating today.",author:"Anthon St. Maarten",lang:"en",cat:"Motywacja",tid:28},
  {id:201,text:"Deine Zukunft ist nicht morgen. Die Zukunft ist das, was du heute erschaffst.",author:"Anthon St. Maarten",lang:"de",cat:"Motywacja",tid:28},
  {id:202,text:"Ton avenir n'est pas demain. L'avenir est ce que tu crées aujourd'hui.",author:"Anthon St. Maarten",lang:"fr",cat:"Motywacja",tid:28},
  {id:203,text:"Tu futuro no es mañana. El futuro es lo que estás creando hoy.",author:"Anthon St. Maarten",lang:"es",cat:"Motywacja",tid:28},
  {id:204,text:"Твоё будущее не завтра. Будущее — это то, что ты создаёшь сегодня.",author:"Антон Сент-Маартен",lang:"ru",cat:"Motywacja",tid:28},
  // Grupa 29 — Charles Darwin, „Człowiek, który ośmiela się zmarnować…"
  {id:205,text:"Człowiek, który ośmiela się zmarnować jedną godzinę swojego życia, nie odkrył jeszcze jego wartości.",author:"Charles Darwin",lang:"pl",cat:"Mądrość",tid:29},
  {id:206,text:"A man who dares to waste one hour of life has not discovered the value of life.",author:"Charles Darwin",lang:"en",cat:"Mądrość",tid:29},
  {id:207,text:"Ein Mensch, der es wagt, eine Stunde seines Lebens zu verschwenden, hat den Wert des Lebens nicht entdeckt.",author:"Charles Darwin",lang:"de",cat:"Mądrość",tid:29},
  {id:208,text:"L'homme qui ose gaspiller une heure de sa vie n'a pas découvert la valeur de la vie.",author:"Charles Darwin",lang:"fr",cat:"Mądrość",tid:29},
  {id:209,text:"El hombre que se atreve a perder una hora de la vida no ha descubierto el valor de la vida.",author:"Charles Darwin",lang:"es",cat:"Mądrość",tid:29},
  {id:210,text:"Человек, который осмелится потратить час жизни впустую, не открыл для себя ценности жизни.",author:"Чарльз Дарвин",lang:"ru",cat:"Mądrość",tid:29},
  // Grupa 30 — Edward Young, „Prokrastynacja to złodziej czasu."
  {id:211,text:"Prokrastynacja to złodziej czasu.",author:"Edward Young",lang:"pl",cat:"Mądrość",tid:30},
  {id:212,text:"Procrastination is the thief of time.",author:"Edward Young",lang:"en",cat:"Mądrość",tid:30},
  {id:213,text:"Prokrastination ist der Dieb der Zeit.",author:"Edward Young",lang:"de",cat:"Mądrość",tid:30},
  {id:214,text:"La procrastination est le voleur du temps.",author:"Edward Young",lang:"fr",cat:"Mądrość",tid:30},
  {id:215,text:"La procrastinación es el ladrón del tiempo.",author:"Edward Young",lang:"es",cat:"Mądrość",tid:30},
  {id:216,text:"Прокрастинация — вор времени.",author:"Эдвард Янг",lang:"ru",cat:"Mądrość",tid:30},
  // Grupa 31 — Przysłowie chińskie, „Ten, kto zadaje pytanie…"
  {id:217,text:"Ten, kto zadaje pytanie, jest głupcem przez pięć minut; ten, kto nie zadaje pytania, pozostaje głupcem na zawsze.",author:"Przysłowie chińskie",lang:"pl",cat:"Mądrość",tid:31},
  {id:218,text:"He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.",author:"Chinese proverb",lang:"en",cat:"Mądrość",tid:31},
  {id:219,text:"Wer eine Frage stellt, ist fünf Minuten lang ein Narr; wer keine Frage stellt, bleibt für immer ein Narr.",author:"Chinesisches Sprichwort",lang:"de",cat:"Mądrość",tid:31},
  {id:220,text:"Celui qui pose une question est un idiot pendant cinq minutes ; celui qui ne pose pas de question reste idiot pour toujours.",author:"Proverbe chinois",lang:"fr",cat:"Mądrość",tid:31},
  {id:221,text:"Quien hace una pregunta es un tonto por cinco minutos; quien no hace una pregunta permanece tonto para siempre.",author:"Proverbio chino",lang:"es",cat:"Mądrość",tid:31},
  {id:222,text:"Тот, кто задаёт вопрос, глупец пять минут; тот, кто не задаёт вопроса, остаётся глупцом навсегда.",author:"Китайская поговорка",lang:"ru",cat:"Mądrość",tid:31},
  // Grupa 32 — Jennifer Dukes Lee, „W świecie, gdzie możesz być kimkolwiek, bądź życzliwy."
  {id:223,text:"W świecie, gdzie możesz być kimkolwiek, bądź życzliwy.",author:"Jennifer Dukes Lee",lang:"pl",cat:"Mądrość",tid:32},
  {id:224,text:"In a world where you can be anything, be kind.",author:"Jennifer Dukes Lee",lang:"en",cat:"Mądrość",tid:32},
  {id:225,text:"In einer Welt, in der du alles sein kannst, sei freundlich.",author:"Jennifer Dukes Lee",lang:"de",cat:"Mądrość",tid:32},
  {id:226,text:"Dans un monde où tu peux être n'importe quoi, sois gentil.",author:"Jennifer Dukes Lee",lang:"fr",cat:"Mądrość",tid:32},
  {id:227,text:"En un mundo donde puedes ser cualquier cosa, sé amable.",author:"Jennifer Dukes Lee",lang:"es",cat:"Mądrość",tid:32},
  {id:228,text:"В мире, где ты можешь быть чем угодно, будь добрым.",author:"Дженнифер Дюкс Ли",lang:"ru",cat:"Mądrość",tid:32},
  // Grupa 33 — Elon Musk, „Myślę, że zwykli ludzie mogą wybrać…"
  {id:229,text:"Myślę, że zwykli ludzie mogą wybrać bycie nadzwyczajnymi.",author:"Elon Musk",lang:"pl",cat:"Motywacja",tid:33},
  {id:230,text:"I think it's possible for ordinary people to choose to be extraordinary.",author:"Elon Musk",lang:"en",cat:"Motywacja",tid:33},
  {id:231,text:"Ich denke, dass normale Menschen wählen können, außergewöhnlich zu sein.",author:"Elon Musk",lang:"de",cat:"Motywacja",tid:33},
  {id:232,text:"Je pense qu'il est possible pour les gens ordinaires de choisir d'être extraordinaires.",author:"Elon Musk",lang:"fr",cat:"Motywacja",tid:33},
  {id:233,text:"Creo que es posible para las personas ordinarias elegir ser extraordinarias.",author:"Elon Musk",lang:"es",cat:"Motywacja",tid:33},
  {id:234,text:"Я думаю, что обычные люди могут выбрать быть необычными.",author:"Илон Маск",lang:"ru",cat:"Motywacja",tid:33},
  // Grupa 34 — Beverly Sills, „Nie ma skrótów do każdego miejsca…"
  {id:235,text:"Nie ma skrótów do każdego miejsca, które warto odwiedzić.",author:"Beverly Sills",lang:"pl",cat:"Mądrość",tid:34},
  {id:236,text:"There are no shortcuts to any place worth going.",author:"Beverly Sills",lang:"en",cat:"Mądrość",tid:34},
  {id:237,text:"Es gibt keine Abkürzungen zu einem Ort, der es wert ist, besucht zu werden.",author:"Beverly Sills",lang:"de",cat:"Mądrość",tid:34},
  {id:238,text:"Il n'y a pas de raccourcis pour aller à un endroit qui en vaut la peine.",author:"Beverly Sills",lang:"fr",cat:"Mądrość",tid:34},
  {id:239,text:"No hay atajos para llegar a ningún lugar que valga la pena.",author:"Beverly Sills",lang:"es",cat:"Mądrość",tid:34},
  {id:240,text:"Нет коротких путей к любому месту, которое стоит посетить.",author:"Беверли Силлс",lang:"ru",cat:"Mądrość",tid:34},
  // Grupa 35 — Walt Disney, „Jeśli możesz marzyć…"
  {id:241,text:"Jeśli możesz o czymś pomarzyć, możesz to osiągnąć.",author:"Walt Disney",lang:"pl",cat:"Motywacja",tid:35},
  {id:242,text:"If you can dream it, you can do it.",author:"Walt Disney",lang:"en",cat:"Motywacja",tid:35},
  {id:243,text:"Wenn du von etwas träumen kannst, kannst du es erreichen.",author:"Walt Disney",lang:"de",cat:"Motywacja",tid:35},
  {id:244,text:"Si vous pouvez rêver de quelque chose, vous pouvez l'atteindre.",author:"Walt Disney",lang:"fr",cat:"Motywacja",tid:35},
  {id:245,text:"Si puedes soñar algo, puedes lograrlo.",author:"Walt Disney",lang:"es",cat:"Motywacja",tid:35},
  {id:246,text:"Если вы можете мечтать о чём-то, вы можете этого достичь.",author:"Уолт Дисней",lang:"ru",cat:"Motywacja",tid:35},
  // Grupa 36 — Walt Disney, „Sposób na rozpoczęcie to przestać mówić…"
  {id:247,text:"Sposób na rozpoczęcie to przestać mówić i zacząć działać.",author:"Walt Disney",lang:"pl",cat:"Motywacja",tid:36},
  {id:248,text:"The way to get started is to quit talking and begin doing.",author:"Walt Disney",lang:"en",cat:"Motywacja",tid:36},
  {id:249,text:"Der Weg, um anzufangen, ist aufzuhören zu reden und anzufangen zu handeln.",author:"Walt Disney",lang:"de",cat:"Motywacja",tid:36},
  {id:250,text:"Le moyen de commencer est d'arrêter de parler et de commencer à agir.",author:"Walt Disney",lang:"fr",cat:"Motywacja",tid:36},
  {id:251,text:"La forma de empezar es dejar de hablar y comenzar a actuar.",author:"Walt Disney",lang:"es",cat:"Motywacja",tid:36},
  {id:252,text:"Путь к началу — это перестать говорить и начать делать.",author:"Уолт Дисней",lang:"ru",cat:"Motywacja",tid:36},
  // Grupa 37 — Helen Hayes, „Ekspert w każdej dziedzinie był kiedyś początkującym."
  {id:253,text:"Ekspert w każdej dziedzinie był kiedyś początkującym.",author:"Helen Hayes",lang:"pl",cat:"Motywacja",tid:37},
  {id:254,text:"The expert in anything was once a beginner.",author:"Helen Hayes",lang:"en",cat:"Motywacja",tid:37},
  {id:255,text:"Der Experte in irgendetwas war einmal ein Anfänger.",author:"Helen Hayes",lang:"de",cat:"Motywacja",tid:37},
  {id:256,text:"L'expert en toute chose était autrefois un débutant.",author:"Helen Hayes",lang:"fr",cat:"Motywacja",tid:37},
  {id:257,text:"El experto en cualquier cosa fue una vez un principiante.",author:"Helen Hayes",lang:"es",cat:"Motywacja",tid:37},
  {id:258,text:"Эксперт в чём-либо когда-то был начинающим.",author:"Хелен Хейс",lang:"ru",cat:"Motywacja",tid:37},
  // Grupa 38 — B.B. King, „The beautiful thing about learning…"
  {id:259,text:"Piękne w uczeniu się jest to, że nikt nie może ci tego odebrać.",author:"B.B. King",lang:"pl",cat:"Mądrość",tid:38},
  {id:260,text:"The beautiful thing about learning is that no one can take it away from you.",author:"B.B. King",lang:"en",cat:"Mądrość",tid:38},
  {id:261,text:"Das Schöne am Lernen ist, dass niemand es dir wegnehmen kann.",author:"B.B. King",lang:"de",cat:"Mądrość",tid:38},
  {id:262,text:"Ce qui est beau dans l'apprentissage, c'est que personne ne peut vous l'enlever.",author:"B.B. King",lang:"fr",cat:"Mądrość",tid:38},
  {id:263,text:"Lo hermoso del aprendizaje es que nadie puede quitártelo.",author:"B.B. King",lang:"es",cat:"Mądrość",tid:38},
  {id:264,text:"Прекрасное в обучении то, что никто не может отнять его у тебя.",author:"Би Би Кинг",lang:"ru",cat:"Mądrość",tid:38},
  // Grupa 39 — Nelson Mandela (NIE B.B. King — typowa pomyłka), „Education is the most powerful weapon…"
  {id:265,text:"Edukacja jest najpotężniejszą bronią, której możesz użyć, by zmienić świat.",author:"Nelson Mandela",lang:"pl",cat:"Mądrość",tid:39},
  {id:266,text:"Education is the most powerful weapon you can use to change the world.",author:"Nelson Mandela",lang:"en",cat:"Mądrość",tid:39},
  {id:267,text:"Bildung ist die mächtigste Waffe, die du benutzen kannst, um die Welt zu verändern.",author:"Nelson Mandela",lang:"de",cat:"Mądrość",tid:39},
  {id:268,text:"L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde.",author:"Nelson Mandela",lang:"fr",cat:"Mądrość",tid:39},
  {id:269,text:"La educación es el arma más poderosa que puedes usar para cambiar el mundo.",author:"Nelson Mandela",lang:"es",cat:"Mądrość",tid:39},
  {id:270,text:"Образование — самое мощное оружие, которое вы можете использовать, чтобы изменить мир.",author:"Нельсон Мандела",lang:"ru",cat:"Mądrość",tid:39},
  // Grupa 40 — Plutarch, „The mind is not a vessel to be filled…"
  {id:271,text:"Umysł nie jest naczyniem, które należy napełnić, lecz ogniem, który należy rozpalić.",author:"Plutarch",lang:"pl",cat:"Filozofia",tid:40},
  {id:272,text:"The mind is not a vessel to be filled but a fire to be ignited.",author:"Plutarch",lang:"en",cat:"Filozofia",tid:40},
  {id:273,text:"Der Geist ist kein Gefäß, das gefüllt werden muss, sondern ein Feuer, das entzündet werden will.",author:"Plutarch",lang:"de",cat:"Filozofia",tid:40},
  {id:274,text:"L'esprit n'est pas un vase à remplir, mais un feu à allumer.",author:"Plutarque",lang:"fr",cat:"Filozofia",tid:40},
  {id:275,text:"La mente no es un recipiente que llenar, sino un fuego que encender.",author:"Plutarco",lang:"es",cat:"Filozofia",tid:40},
  {id:276,text:"Ум — не сосуд, который надо наполнить, а огонь, который надо зажечь.",author:"Плутарх",lang:"ru",cat:"Filozofia",tid:40},
  // Grupa 41 — Mason Cooley, „Procrastination makes easy things hard…"
  {id:277,text:"Prokrastynacja sprawia, że łatwe rzeczy stają się trudne, a trudne — jeszcze trudniejsze.",author:"Mason Cooley",lang:"pl",cat:"Mądrość",tid:41},
  {id:278,text:"Procrastination makes easy things hard and hard things harder.",author:"Mason Cooley",lang:"en",cat:"Mądrość",tid:41},
  {id:279,text:"Prokrastination macht leichte Dinge schwer und schwere Dinge noch schwerer.",author:"Mason Cooley",lang:"de",cat:"Mądrość",tid:41},
  {id:280,text:"La procrastination rend les choses faciles difficiles et les choses difficiles encore plus difficiles.",author:"Mason Cooley",lang:"fr",cat:"Mądrość",tid:41},
  {id:281,text:"La procrastinación hace que las cosas fáciles sean difíciles y las difíciles aún más difíciles.",author:"Mason Cooley",lang:"es",cat:"Mądrość",tid:41},
  {id:282,text:"Прокрастинация делает лёгкие вещи трудными, а трудные — ещё труднее.",author:"Мейсон Кули",lang:"ru",cat:"Mądrość",tid:41},
  // Grupa 42 — Stefan Żeromski, „Nauka jest jak niezmierne morze…"
  {id:283,text:"Nauka jest jak niezmierne morze. Im więcej jej pijesz, tym bardziej jesteś spragniony.",author:"Stefan Żeromski",lang:"pl",cat:"Mądrość",tid:42},
  {id:284,text:"Knowledge is like an immense sea. The more you drink of it, the thirstier you become.",author:"Stefan Żeromski",lang:"en",cat:"Mądrość",tid:42},
  {id:285,text:"Wissen ist wie ein unermessliches Meer. Je mehr du davon trinkst, desto durstiger wirst du.",author:"Stefan Żeromski",lang:"de",cat:"Mądrość",tid:42},
  {id:286,text:"Le savoir est comme une mer immense. Plus tu en bois, plus tu as soif.",author:"Stefan Żeromski",lang:"fr",cat:"Mądrość",tid:42},
  {id:287,text:"El saber es como un mar inmenso. Cuanto más bebes de él, más sediento estás.",author:"Stefan Żeromski",lang:"es",cat:"Mądrość",tid:42},
  {id:288,text:"Знание — как безбрежное море. Чем больше его пьёшь, тем больше жаждешь.",author:"Стефан Жеромский",lang:"ru",cat:"Mądrość",tid:42},
  // Grupa 43 — Robert Collier, „Sukces jest sumą małych wysiłków…"
  {id:289,text:"Sukces jest sumą małych wysiłków, powtarzanych dzień po dniu.",author:"Robert Collier",lang:"pl",cat:"Sukces",tid:43},
  {id:290,text:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier",lang:"en",cat:"Sukces",tid:43},
  {id:291,text:"Erfolg ist die Summe kleiner Anstrengungen, die Tag für Tag wiederholt werden.",author:"Robert Collier",lang:"de",cat:"Sukces",tid:43},
  {id:292,text:"Le succès est la somme des petits efforts, répétés jour après jour.",author:"Robert Collier",lang:"fr",cat:"Sukces",tid:43},
  {id:293,text:"El éxito es la suma de pequeños esfuerzos, repetidos día tras día.",author:"Robert Collier",lang:"es",cat:"Sukces",tid:43},
  {id:294,text:"Успех — это сумма малых усилий, повторяемых изо дня в день.",author:"Роберт Кольер",lang:"ru",cat:"Sukces",tid:43},
  // Grupa 44 — Les Brown, „Jeżeli robisz to, co łatwe…"
  {id:295,text:"Jeżeli robisz to, co łatwe, Twoje życie będzie trudne. Jeśli robisz to, co trudne, Twoje życie będzie łatwe.",author:"Les Brown",lang:"pl",cat:"Mądrość",tid:44},
  {id:296,text:"If you do what is easy, your life will be hard. If you do what is hard, your life will be easy.",author:"Les Brown",lang:"en",cat:"Mądrość",tid:44},
  {id:297,text:"Wenn du das Einfache tust, wird dein Leben schwer. Wenn du das Schwere tust, wird dein Leben einfach.",author:"Les Brown",lang:"de",cat:"Mądrość",tid:44},
  {id:298,text:"Si tu fais ce qui est facile, ta vie sera difficile. Si tu fais ce qui est difficile, ta vie sera facile.",author:"Les Brown",lang:"fr",cat:"Mądrość",tid:44},
  {id:299,text:"Si haces lo fácil, tu vida será difícil. Si haces lo difícil, tu vida será fácil.",author:"Les Brown",lang:"es",cat:"Mądrość",tid:44},
  {id:300,text:"Если ты делаешь то, что легко, твоя жизнь будет трудной. Если ты делаешь то, что трудно, твоя жизнь будет лёгкой.",author:"Лес Браун",lang:"ru",cat:"Mądrość",tid:44},
  // Grupa 45 — Bolesław Prus, „Najciężej w życiu ma ten…"
  {id:301,text:"Najciężej w życiu ma ten, kto usiłuje unikać trudności.",author:"Bolesław Prus",lang:"pl",cat:"Mądrość",tid:45},
  {id:302,text:"The hardest life is for the one who tries to avoid difficulties.",author:"Bolesław Prus",lang:"en",cat:"Mądrość",tid:45},
  {id:303,text:"Am schwersten im Leben hat es derjenige, der versucht, Schwierigkeiten zu vermeiden.",author:"Bolesław Prus",lang:"de",cat:"Mądrość",tid:45},
  {id:304,text:"C'est celui qui cherche à éviter les difficultés qui a la vie la plus dure.",author:"Bolesław Prus",lang:"fr",cat:"Mądrość",tid:45},
  {id:305,text:"La vida más dura es para quien intenta evitar las dificultades.",author:"Bolesław Prus",lang:"es",cat:"Mądrość",tid:45},
  {id:306,text:"Тяжелее всего в жизни тому, кто пытается избегать трудностей.",author:"Болеслав Прус",lang:"ru",cat:"Mądrość",tid:45},
  // Grupa 46 — Marcel Achard, „Dwie rzeczy są w życiu bardzo istotne…"
  {id:307,text:"Dwie rzeczy są w życiu bardzo istotne: dobre łóżko i wygodne buty. Człowiek jest bowiem albo w łóżku, albo w butach.",author:"Marcel Achard",lang:"pl",cat:"Życie",tid:46},
  {id:308,text:"Two things are very important in life: a good bed and comfortable shoes. Because a person is either in bed or in shoes.",author:"Marcel Achard",lang:"en",cat:"Życie",tid:46},
  {id:309,text:"Zwei Dinge sind im Leben sehr wichtig: ein gutes Bett und bequeme Schuhe. Denn ein Mensch ist entweder im Bett oder in Schuhen.",author:"Marcel Achard",lang:"de",cat:"Życie",tid:46},
  {id:310,text:"Deux choses sont très importantes dans la vie : un bon lit et des chaussures confortables. Car on est toujours soit dans un lit, soit dans des chaussures.",author:"Marcel Achard",lang:"fr",cat:"Życie",tid:46},
  {id:311,text:"Dos cosas son muy importantes en la vida: una buena cama y zapatos cómodos. Porque uno está siempre en la cama o en los zapatos.",author:"Marcel Achard",lang:"es",cat:"Życie",tid:46},
  {id:312,text:"Две вещи в жизни очень важны: хорошая кровать и удобная обувь. Ведь человек всегда либо в кровати, либо в обуви.",author:"Марсель Ашар",lang:"ru",cat:"Życie",tid:46},
  // Grupa 47 — Autor nieznany (przyp. Bob Marley), „Some people feel the rain…"
  {id:313,text:"Niektórzy ludzie czują deszcz. Inni po prostu mokną.",author:"Autor nieznany",lang:"pl",cat:"Filozofia",tid:47},
  {id:314,text:"Some people feel the rain. Others just get wet.",author:"Unknown author",lang:"en",cat:"Filozofia",tid:47},
  {id:315,text:"Manche Menschen spüren den Regen. Andere werden einfach nass.",author:"Unbekannter Autor",lang:"de",cat:"Filozofia",tid:47},
  {id:316,text:"Certaines personnes sentent la pluie. D'autres se contentent de se mouiller.",author:"Auteur inconnu",lang:"fr",cat:"Filozofia",tid:47},
  {id:317,text:"Algunas personas sienten la lluvia. Otras simplemente se mojan.",author:"Autor desconocido",lang:"es",cat:"Filozofia",tid:47},
  {id:318,text:"Одни люди чувствуют дождь. Другие просто намокают.",author:"Автор неизвестен",lang:"ru",cat:"Filozofia",tid:47},
  // Grupa 48 — Daniel Ostrowski, „Pewnego dnia twoje całe życie…"
  {id:319,text:"Pewnego dnia twoje całe życie przeleci przed twoimi oczami jak film w przyśpieszonym tempie. Od ciebie zależy, czy będzie to film inspirujący z głębszym przesłaniem, czy też płytki i bezwartościowy.",author:"Daniel Ostrowski",lang:"pl",cat:"Życie",tid:48},
  {id:320,text:"One day your entire life will flash before your eyes like a fast-forwarded film. It's up to you whether it will be an inspiring movie with a deeper message or a shallow and worthless one.",author:"Daniel Ostrowski",lang:"en",cat:"Życie",tid:48},
  {id:321,text:"Eines Tages wird dein ganzes Leben wie ein im Schnelldurchlauf abgespielter Film vor deinen Augen vorüberziehen. Es liegt an dir, ob es ein inspirierender Film mit einer tieferen Botschaft sein wird oder ein oberflächlicher und wertloser.",author:"Daniel Ostrowski",lang:"de",cat:"Życie",tid:48},
  {id:322,text:"Un jour, toute ta vie défilera devant tes yeux comme un film accéléré. Cela dépend de toi s'il s'agira d'un film inspirant avec un message profond ou d'un film superficiel et sans valeur.",author:"Daniel Ostrowski",lang:"fr",cat:"Życie",tid:48},
  {id:323,text:"Un día, toda tu vida pasará ante tus ojos como una película en avance rápido. Depende de ti si será una película inspiradora con un mensaje más profundo o una superficial y sin valor.",author:"Daniel Ostrowski",lang:"es",cat:"Życie",tid:48},
  {id:324,text:"Однажды вся твоя жизнь пробежит перед твоими глазами, словно ускоренный фильм. Это зависит от тебя, будет ли это вдохновляющий фильм с глубоким смыслом или поверхностный и бездарный.",author:"Даниэль Островский",lang:"ru",cat:"Życie",tid:48},
  // Grupa 49 — Gerard Way, „One day your life will flash…"
  {id:325,text:"Pewnego dnia twoje życie przemknie przed twoimi oczami. Upewnij się, że warto je obejrzeć.",author:"Gerard Way",lang:"pl",cat:"Życie",tid:49},
  {id:326,text:"One day your life will flash before your eyes. Make sure it's worth watching.",author:"Gerard Way",lang:"en",cat:"Życie",tid:49},
  {id:327,text:"Eines Tages wird dein Leben vor deinen Augen vorbeiziehen. Stelle sicher, dass es sehenswert ist.",author:"Gerard Way",lang:"de",cat:"Życie",tid:49},
  {id:328,text:"Un jour, ta vie défilera devant tes yeux. Assure-toi qu'elle vaut la peine d'être regardée.",author:"Gerard Way",lang:"fr",cat:"Życie",tid:49},
  {id:329,text:"Un día tu vida pasará ante tus ojos. Asegúrate de que valga la pena verla.",author:"Gerard Way",lang:"es",cat:"Życie",tid:49},
  {id:330,text:"Однажды твоя жизнь промелькнёт перед твоими глазами. Убедись, что её стоит смотреть.",author:"Джерард Уэй",lang:"ru",cat:"Życie",tid:49},
  // Grupa 50 — Autor nieznany, „Any man can be a father…"
  {id:331,text:"Każdy mężczyzna może być ojcem. Trzeba kogoś wyjątkowego, żeby być tatą.",author:"Autor nieznany",lang:"pl",cat:"Życie",tid:50},
  {id:332,text:"Any man can be a father. It takes someone special to be a dad.",author:"Unknown author",lang:"en",cat:"Życie",tid:50},
  {id:333,text:"Jeder Mann kann ein Vater sein. Es braucht jemand Besonderes, um ein Papa zu sein.",author:"Unbekannter Autor",lang:"de",cat:"Życie",tid:50},
  {id:334,text:"N'importe quel homme peut être un père. Il faut quelqu'un de spécial pour être un papa.",author:"Auteur inconnu",lang:"fr",cat:"Życie",tid:50},
  {id:335,text:"Cualquier hombre puede ser un padre. Se necesita alguien especial para ser un papá.",author:"Autor desconocido",lang:"es",cat:"Życie",tid:50},
  {id:336,text:"Любой мужчина может быть отцом. Чтобы быть папой, нужно быть особенным.",author:"Автор неизвестен",lang:"ru",cat:"Życie",tid:50},
  // Grupa 51 — Karen Lamb, „A year from now…"
  {id:337,text:"Za rok możesz żałować, że nie zacząłeś dzisiaj.",author:"Karen Lamb",lang:"pl",cat:"Motywacja",tid:51},
  {id:338,text:"A year from now you may wish you had started today.",author:"Karen Lamb",lang:"en",cat:"Motywacja",tid:51},
  {id:339,text:"In einem Jahr wirst du dir vielleicht wünschen, du hättest heute angefangen.",author:"Karen Lamb",lang:"de",cat:"Motywacja",tid:51},
  {id:340,text:"Dans un an, tu souhaiteras peut-être avoir commencé aujourd'hui.",author:"Karen Lamb",lang:"fr",cat:"Motywacja",tid:51},
  {id:341,text:"Dentro de un año puede que desees haber empezado hoy.",author:"Karen Lamb",lang:"es",cat:"Motywacja",tid:51},
  {id:342,text:"Через год ты, возможно, пожалеешь, что не начал сегодня.",author:"Карен Лэмб",lang:"ru",cat:"Motywacja",tid:51},
  // Grupa 52 — Will Rogers, „Too many people spend money…"
  {id:343,text:"Zbyt wielu ludzi wydaje pieniądze, których nie zarobili, na rzeczy, których nie chcą, by zaimponować ludziom, których nie lubią.",author:"Will Rogers",lang:"pl",cat:"Mądrość",tid:52},
  {id:344,text:"Too many people spend money they haven't earned, to buy things they don't want, to impress people they don't like.",author:"Will Rogers",lang:"en",cat:"Mądrość",tid:52},
  {id:345,text:"Zu viele Menschen geben Geld aus, das sie nicht verdient haben, um Dinge zu kaufen, die sie nicht wollen, um Leute zu beeindrucken, die sie nicht mögen.",author:"Will Rogers",lang:"de",cat:"Mądrość",tid:52},
  {id:346,text:"Trop de gens dépensent de l'argent qu'ils n'ont pas gagné pour acheter des choses dont ils n'ont pas besoin afin d'impressionner des gens qu'ils n'aiment pas.",author:"Will Rogers",lang:"fr",cat:"Mądrość",tid:52},
  {id:347,text:"Demasiada gente gasta dinero que no ha ganado, en cosas que no quiere, para impresionar a gente que no le cae bien.",author:"Will Rogers",lang:"es",cat:"Mądrość",tid:52},
  {id:348,text:"Слишком много людей тратит деньги, которых они не заработали, на вещи, которые им не нужны, чтобы произвести впечатление на людей, которые им не нравятся.",author:"Уилл Роджерс",lang:"ru",cat:"Mądrość",tid:52},
  // Grupa 53 — Larry Wilde, „Never worry about the size of your Christmas tree…"
  {id:349,text:"Nigdy nie martw się o wielkość choinki. W oczach dzieci wszystkie mają trzydzieści stóp wysokości.",author:"Larry Wilde",lang:"pl",cat:"Życie",tid:53},
  {id:350,text:"Never worry about the size of your Christmas tree. In the eyes of children, they are all 30 feet tall.",author:"Larry Wilde",lang:"en",cat:"Życie",tid:53},
  {id:351,text:"Mach dir nie Sorgen um die Größe deines Weihnachtsbaums. In den Augen der Kinder sind sie alle dreißig Fuß hoch.",author:"Larry Wilde",lang:"de",cat:"Życie",tid:53},
  {id:352,text:"Ne te soucie jamais de la taille de ton sapin de Noël. Aux yeux des enfants, ils mesurent tous trente pieds de haut.",author:"Larry Wilde",lang:"fr",cat:"Życie",tid:53},
  {id:353,text:"Nunca te preocupes por el tamaño de tu árbol de Navidad. A los ojos de los niños, todos miden treinta pies de altura.",author:"Larry Wilde",lang:"es",cat:"Życie",tid:53},
  {id:354,text:"Никогда не беспокойся о размере своей ёлки. В глазах детей они все тридцать футов в высоту.",author:"Ларри Уайлд",lang:"ru",cat:"Życie",tid:53},
  // Grupa 54 — Autor nieznany, „Don't care about what other people think…"
  {id:355,text:"Nie przejmuj się tym, co inni o tobie myślą. Zawsze będą tacy, którzy chcą, żebyś poniósł porażkę, bo sami nie potrafią odnieść sukcesu.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:54},
  {id:356,text:"Don't care about what other people think of you. There will always be those people who want to see you fail because they cannot succeed.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:54},
  {id:357,text:"Kümmere dich nicht darum, was andere über dich denken. Es wird immer Menschen geben, die dich scheitern sehen wollen, weil sie selbst nicht erfolgreich sein können.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:54},
  {id:358,text:"Ne te soucie pas de ce que les autres pensent de toi. Il y aura toujours des gens qui veulent te voir échouer parce qu'ils ne peuvent pas réussir eux-mêmes.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:54},
  {id:359,text:"No te importe lo que los demás piensen de ti. Siempre habrá personas que quieran verte fracasar porque ellos mismos no pueden tener éxito.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:54},
  {id:360,text:"Не беспокойся о том, что другие думают о тебе. Всегда найдутся те, кто хочет видеть твой провал, потому что сами не могут добиться успеха.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:54},
  // Grupa 55 — Dr Seuss, „The more you read…"
  {id:361,text:"Im więcej czytasz, tym więcej rzeczy będziesz wiedzieć. Im więcej się uczysz, tym więcej miejsc odwiedzisz.",author:"Dr Seuss",lang:"pl",cat:"Mądrość",tid:55},
  {id:362,text:"The more you read, the more things you will know. The more that you learn, the more places you'll go.",author:"Dr Seuss",lang:"en",cat:"Mądrość",tid:55},
  {id:363,text:"Je mehr du liest, desto mehr Dinge wirst du wissen. Je mehr du lernst, desto mehr Orte wirst du sehen.",author:"Dr Seuss",lang:"de",cat:"Mądrość",tid:55},
  {id:364,text:"Plus tu lis, plus tu sais de choses. Plus tu apprends, plus tu iras dans des endroits.",author:"Dr Seuss",lang:"fr",cat:"Mądrość",tid:55},
  {id:365,text:"Cuanto más lees, más cosas sabrás. Cuanto más aprendes, a más lugares irás.",author:"Dr Seuss",lang:"es",cat:"Mądrość",tid:55},
  {id:366,text:"Чем больше ты читаешь, тем больше узнаёшь. Чем больше учишься, тем больше мест посетишь.",author:"Доктор Сьюз",lang:"ru",cat:"Mądrość",tid:55},
  // Grupa 56 — Lord Chesterfield, „If we do not plant knowledge…"
  {id:367,text:"Jeśli nie zasiejemy wiedzy w młodości, nie da nam cienia w starości.",author:"Lord Chesterfield",lang:"pl",cat:"Mądrość",tid:56},
  {id:368,text:"If we do not plant knowledge when young, it will give us no shade when we are old.",author:"Lord Chesterfield",lang:"en",cat:"Mądrość",tid:56},
  {id:369,text:"Wenn wir in der Jugend kein Wissen säen, wird es uns im Alter keinen Schatten spenden.",author:"Lord Chesterfield",lang:"de",cat:"Mądrość",tid:56},
  {id:370,text:"Si nous ne plantons pas la connaissance dans la jeunesse, elle ne nous donnera pas d'ombre quand nous serons vieux.",author:"Lord Chesterfield",lang:"fr",cat:"Mądrość",tid:56},
  {id:371,text:"Si no plantamos el conocimiento de jóvenes, no nos dará sombra cuando seamos viejos.",author:"Lord Chesterfield",lang:"es",cat:"Mądrość",tid:56},
  {id:372,text:"Если мы не посеем знания в молодости, они не дадут нам тени в старости.",author:"Лорд Честерфилд",lang:"ru",cat:"Mądrość",tid:56},
  // Grupa 57 — Autor nieznany, „If there are no ups and downs…"
  {id:373,text:"Jeśli w twoim życiu nie ma wzlotów i upadków… to znaczy, że jesteś martwy.",author:"Autor nieznany",lang:"pl",cat:"Życie",tid:57},
  {id:374,text:"If there are no ups and downs in your life… it means you are dead.",author:"Unknown author",lang:"en",cat:"Życie",tid:57},
  {id:375,text:"Wenn es in deinem Leben keine Höhen und Tiefen gibt… bedeutet das, dass du tot bist.",author:"Unbekannter Autor",lang:"de",cat:"Życie",tid:57},
  {id:376,text:"S'il n'y a pas de hauts et de bas dans ta vie… cela signifie que tu es mort.",author:"Auteur inconnu",lang:"fr",cat:"Życie",tid:57},
  {id:377,text:"Si no hay altibajos en tu vida… significa que estás muerto.",author:"Autor desconocido",lang:"es",cat:"Życie",tid:57},
  {id:378,text:"Если в твоей жизни нет взлётов и падений… значит, ты мёртв.",author:"Автор неизвестен",lang:"ru",cat:"Życie",tid:57},
  // Grupa 58 — Autor nieznany, „Many opportunities are lost…"
  {id:379,text:"Wiele okazji jest traconych, bo ludzie szukają czterolistnych koniczyn.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:58},
  {id:380,text:"Many opportunities are lost because people are out looking for four-leaf clovers.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:58},
  {id:381,text:"Viele Gelegenheiten gehen verloren, weil die Menschen nach vierblättrigen Kleeblättern suchen.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:58},
  {id:382,text:"De nombreuses occasions sont perdues parce que les gens cherchent des trèfles à quatre feuilles.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:58},
  {id:383,text:"Se pierden muchas oportunidades porque la gente busca tréboles de cuatro hojas.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:58},
  {id:384,text:"Многие возможности упускаются, потому что люди ищут четырёхлистный клевер.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:58},
  // Grupa 59 — Autor nieznany, „Life is like a roller coaster…"
  {id:385,text:"Życie jest jak rollercoaster. Ma swoje wzloty i upadki, ale to TWÓJ wybór: krzyczeć czy cieszyć się jazdą.",author:"Autor nieznany",lang:"pl",cat:"Życie",tid:59},
  {id:386,text:"Life is like a roller coaster. It has its ups and downs, but it's your CHOICE to scream or to enjoy the ride.",author:"Unknown author",lang:"en",cat:"Życie",tid:59},
  {id:387,text:"Das Leben ist wie eine Achterbahn. Es hat seine Höhen und Tiefen, aber es ist DEINE Wahl, ob du schreist oder die Fahrt genießt.",author:"Unbekannter Autor",lang:"de",cat:"Życie",tid:59},
  {id:388,text:"La vie est comme des montagnes russes. Elle a ses hauts et ses bas, mais c'est TON choix de crier ou de profiter du voyage.",author:"Auteur inconnu",lang:"fr",cat:"Życie",tid:59},
  {id:389,text:"La vida es como una montaña rusa. Tiene sus altibajos, pero es TU elección gritar o disfrutar del viaje.",author:"Autor desconocido",lang:"es",cat:"Życie",tid:59},
  {id:390,text:"Жизнь — это американские горки. У неё есть взлёты и падения, но это ТВОЙ выбор — кричать или наслаждаться поездкой.",author:"Автор неизвестен",lang:"ru",cat:"Życie",tid:59},
  // Grupa 60 — Zig Ziglar, „There is no elevator to success…"
  {id:391,text:"Do sukcesu nie ma żadnej windy. Trzeba iść po schodach.",author:"Zig Ziglar",lang:"pl",cat:"Sukces",tid:60},
  {id:392,text:"There is no elevator to success. You have to take the stairs.",author:"Zig Ziglar",lang:"en",cat:"Sukces",tid:60},
  {id:393,text:"Es gibt keinen Fahrstuhl zum Erfolg. Du musst die Treppen nehmen.",author:"Zig Ziglar",lang:"de",cat:"Sukces",tid:60},
  {id:394,text:"Il n'y a pas d'ascenseur pour le succès. Vous devez prendre les escaliers.",author:"Zig Ziglar",lang:"fr",cat:"Sukces",tid:60},
  {id:395,text:"No hay ascensor al éxito. Tienes que subir las escaleras.",author:"Zig Ziglar",lang:"es",cat:"Sukces",tid:60},
  {id:396,text:"Нет лифта к успеху. Вы должны идти по лестнице.",author:"Зиг Зиглар",lang:"ru",cat:"Sukces",tid:60},
  // Grupa 61 — Autor nieznany, „There are three simple rules in life…"
  {id:397,text:"W życiu są trzy proste zasady: 1. Jeśli nie BĘDZIESZ dążyć do tego, czego pragniesz, nigdy tego nie zdobędziesz. 2. Jeśli nie ZAPYTASZ, odpowiedź zawsze będzie NIE. 3. Jeśli nie zrobisz KROKU naprzód, zawsze będziesz w tym samym miejscu.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:61},
  {id:398,text:"There are three simple rules in life: 1. If you do not GO after what you want, you'll never have it. 2. If you do not ASK, the answer will always be NO. 3. If you do not step FORWARD, you will always be in the same place.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:61},
  {id:399,text:"Es gibt drei einfache Regeln im Leben: 1. Wenn du nicht nach dem GREIFST, was du willst, wirst du es nie haben. 2. Wenn du nicht FRAGST, wird die Antwort immer NEIN sein. 3. Wenn du keinen Schritt nach VORN machst, wirst du immer am selben Ort sein.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:61},
  {id:400,text:"Il y a trois règles simples dans la vie : 1. Si tu ne POURSUIS pas ce que tu veux, tu ne l'auras jamais. 2. Si tu ne DEMANDES pas, la réponse sera toujours NON. 3. Si tu ne fais pas un pas en AVANT, tu resteras toujours au même endroit.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:61},
  {id:401,text:"Hay tres reglas simples en la vida: 1. Si no VAS tras lo que quieres, nunca lo tendrás. 2. Si no PREGUNTAS, la respuesta siempre será NO. 3. Si no DAS un paso al FRENTE, siempre estarás en el mismo lugar.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:61},
  {id:402,text:"В жизни есть три простых правила: 1. Если ты не ИДЁШЬ за тем, чего хочешь, ты никогда этого не получишь. 2. Если ты не СПРАШИВАЕШЬ, ответ всегда будет НЕТ. 3. Если ты не делаешь ШАГ вперёд, ты всегда будешь на том же месте.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:61},
  // Grupa 62 — Autor nieznany, „If you expect the world to be fair…"
  {id:403,text:"Jeśli oczekujesz, że świat będzie sprawiedliwy, bo ty jesteś sprawiedliwy wobec niego, to tak, jakbyś oczekiwał, że lew cię nie zje, bo ty nie jesz lwów!",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:62},
  {id:404,text:"If you expect the world to be fair with you because you are fair with them, it is like expecting a lion not to eat you because you don't eat lion!",author:"Unknown author",lang:"en",cat:"Mądrość",tid:62},
  {id:405,text:"Wenn du erwartest, dass die Welt fair zu dir ist, weil du fair zu ihr bist, ist das, als würdest du erwarten, dass ein Löwe dich nicht frisst, weil du keine Löwen isst!",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:62},
  {id:406,text:"Si tu t'attends à ce que le monde soit juste avec toi parce que tu es juste avec lui, c'est comme s'attendre à ce qu'un lion ne te mange pas parce que tu ne manges pas de lion !",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:62},
  {id:407,text:"Si esperas que el mundo sea justo contigo porque tú eres justo con él, es como esperar que un león no te coma porque tú no comes león.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:62},
  {id:408,text:"Если ты ожидаешь, что мир будет справедлив к тебе, потому что ты справедлив к нему, это как ожидать, что лев тебя не съест, потому что ты не ешь львов!",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:62},
  // Grupa 63 — Art Rios, „One of the things that defines kindness…"
  {id:409,text:"Jedną z rzeczy, które moim zdaniem definiują życzliwość, jest sprawianie, by inni czuli się ważni. A jednym z moich największych irytacji w życiu jest mówienie źle o innych. Jestem wielkim zwolennikiem zasady: «Jeśli nie masz nic miłego do powiedzenia, nie mów nic». Jeśli chcesz zacząć okazywać życzliwość, po prostu nie mów nic negatywnego o nikim.",author:"Art Rios",lang:"pl",cat:"Mądrość",tid:63},
  {id:410,text:"One of the things that I believe defines kindness is making others feel important. And one of my big pet peeves in life is speaking badly of other people. I'm a big proponent of: «If you don't have anything nice to say, don't say anything at all.» If you want to start showing kindness, simply do not say anything negative about anyone.",author:"Art Rios",lang:"en",cat:"Mądrość",tid:63},
  {id:411,text:"Eine der Eigenschaften, die meiner Meinung nach Freundlichkeit ausmacht, ist es, andere wichtig fühlen zu lassen. Und eine meiner größten Abneigungen im Leben ist es, schlecht über andere Menschen zu sprechen. Ich bin ein großer Befürworter des Spruchs: «Wenn du nichts Nettes zu sagen hast, sag gar nichts.» Wenn du anfangen willst, Freundlichkeit zu zeigen, sage einfach nichts Negatives über irgendjemanden.",author:"Art Rios",lang:"de",cat:"Mądrość",tid:63},
  {id:412,text:"Une des choses qui, à mon avis, définit la gentillesse, c'est de faire en sorte que les autres se sentent importants. Et une de mes plus grandes aversions dans la vie, c'est de dire du mal des autres. Je suis un grand partisan du principe : « Si tu n'as rien de gentil à dire, ne dis rien du tout. » Si tu veux commencer à montrer de la gentillesse, ne dis simplement rien de négatif sur personne.",author:"Art Rios",lang:"fr",cat:"Mądrość",tid:63},
  {id:413,text:"Una de las cosas que, en mi opinión, define la amabilidad es hacer que los demás se sientan importantes. Y uno de mis mayores fastidios en la vida es hablar mal de otras personas. Soy un gran defensor del dicho: «Si no tienes nada agradable que decir, no digas nada». Si quieres empezar a mostrar amabilidad, simplemente no digas nada negativo sobre nadie.",author:"Art Rios",lang:"es",cat:"Mądrość",tid:63},
  {id:414,text:"Одна из вещей, которая, по моему мнению, определяет доброту, — это давать другим почувствовать себя важными. И одна из моих самых больших антипатий в жизни — говорить плохо о других людях. Я большой сторонник принципа: «Если тебе нечего сказать хорошего, лучше не говори ничего». Если ты хочешь начать проявлять доброту, просто не говори ничего плохого ни о ком.",author:"Арт Риос",lang:"ru",cat:"Mądrość",tid:63},
  // Grupa 64 — Daniel Ostrowski, „Pink is just a stupid colour…"
  {id:415,text:"Różowy to po prostu głupi kolor, jak każdy inny. A ludzie wariują, gdy widzą chłopaka albo mężczyznę ubranego na różowo.",author:"Daniel Ostrowski",lang:"pl",cat:"Życie",tid:64},
  {id:416,text:"Pink is just a stupid colour, like the rest of them. And people just lose their mind when they see a boy or a man wearing something pink.",author:"Daniel Ostrowski",lang:"en",cat:"Życie",tid:64},
  {id:417,text:"Rosa ist einfach eine dumme Farbe, wie alle anderen auch. Und die Leute drehen einfach durch, wenn sie einen Jungen oder einen Mann sehen, der etwas Rosa trägt.",author:"Daniel Ostrowski",lang:"de",cat:"Życie",tid:64},
  {id:418,text:"Le rose est juste une couleur stupide, comme les autres. Et les gens perdent la tête quand ils voient un garçon ou un homme porter quelque chose de rose.",author:"Daniel Ostrowski",lang:"fr",cat:"Życie",tid:64},
  {id:419,text:"El rosa es simplemente un color tonto, como los demás. Y la gente pierde la cabeza cuando ve a un niño o a un hombre llevando algo rosa.",author:"Daniel Ostrowski",lang:"es",cat:"Życie",tid:64},
  {id:420,text:"Розовый — это просто глупый цвет, как и все остальные. А люди сходят с ума, когда видят мальчика или мужчину в чём-то розовом.",author:"Даниэль Островский",lang:"ru",cat:"Życie",tid:64},
  // Grupa 65 — Przysłowie, „Just when the caterpillar thought the world was ending…"
  {id:421,text:"Właśnie wtedy, gdy gąsienica myślała, że świat się kończy, stała się motylem.",author:"Przysłowie",lang:"pl",cat:"Mądrość",tid:65},
  {id:422,text:"Just when the caterpillar thought the world was ending, he turned into a butterfly.",author:"Proverb",lang:"en",cat:"Mądrość",tid:65},
  {id:423,text:"Gerade als die Raupe dachte, die Welt würde untergehen, verwandelte sie sich in einen Schmetterling.",author:"Sprichwort",lang:"de",cat:"Mądrość",tid:65},
  {id:424,text:"Au moment même où la chenille pensait que le monde allait finir, elle se transforma en papillon.",author:"Proverbe",lang:"fr",cat:"Mądrość",tid:65},
  {id:425,text:"Justo cuando la oruga pensaba que el mundo se acababa, se convirtió en mariposa.",author:"Proverbio",lang:"es",cat:"Mądrość",tid:65},
  {id:426,text:"Именно когда гусеница думала, что мир кончается, она превратилась в бабочку.",author:"Поговорка",lang:"ru",cat:"Mądrość",tid:65},
  // Grupa 66 — Les Brown, „Too many of us are not living our dreams…"
  {id:427,text:"Zbyt wielu z nas nie żyje swoimi marzeniami, bo żyje swoimi lękami.",author:"Les Brown",lang:"pl",cat:"Motywacja",tid:66},
  {id:428,text:"Too many of us are not living our dreams because we are living our fears.",author:"Les Brown",lang:"en",cat:"Motywacja",tid:66},
  {id:429,text:"Zu viele von uns leben nicht ihre Träume, weil sie ihre Ängste leben.",author:"Les Brown",lang:"de",cat:"Motywacja",tid:66},
  {id:430,text:"Trop d'entre nous ne vivent pas leurs rêves parce qu'ils vivent leurs peurs.",author:"Les Brown",lang:"fr",cat:"Motywacja",tid:66},
  {id:431,text:"Demasiados de nosotros no vivimos nuestros sueños porque vivimos nuestros miedos.",author:"Les Brown",lang:"es",cat:"Motywacja",tid:66},
  {id:432,text:"Слишком многие из нас не живут своими мечтами, потому что живут своими страхами.",author:"Лес Браун",lang:"ru",cat:"Motywacja",tid:66},
  // Grupa 67 — Theodore N. Vail, „Real difficulties can be overcome…"
  {id:433,text:"Prawdziwe trudności można pokonać; nie do pokonania są tylko te wyobrażone.",author:"Theodore N. Vail",lang:"pl",cat:"Mądrość",tid:67},
  {id:434,text:"Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.",author:"Theodore N. Vail",lang:"en",cat:"Mądrość",tid:67},
  {id:435,text:"Wirkliche Schwierigkeiten lassen sich überwinden; nur die eingebildeten sind unbezwingbar.",author:"Theodore N. Vail",lang:"de",cat:"Mądrość",tid:67},
  {id:436,text:"Les vraies difficultés peuvent être surmontées ; seules les imaginaires sont invincibles.",author:"Theodore N. Vail",lang:"fr",cat:"Mądrość",tid:67},
  {id:437,text:"Las dificultades reales pueden superarse; solo las imaginarias son invencibles.",author:"Theodore N. Vail",lang:"es",cat:"Mądrość",tid:67},
  {id:438,text:"Настоящие трудности можно преодолеть; непреодолимы лишь воображаемые.",author:"Теодор Н. Вейл",lang:"ru",cat:"Mądrość",tid:67},
  // Grupa 68 — Daniel Ostrowski (22.05.2020), „Demony przeszłości…"
  {id:439,text:"Demony przeszłości wciąż pukają do drzwi czasów współczesnych. Jeśli dobrze nie zaryglujemy tych drzwi mądrością i wiedzą, demony pożrą nas ponownie ze zdwojoną dzikością.",author:"Daniel Ostrowski",lang:"pl",cat:"Filozofia",tid:68},
  {id:440,text:"The demons of the past are still knocking on the door of modern times. If we do not bolt the door with wisdom and knowledge well, they will devour us again with doubled savagery.",author:"Daniel Ostrowski",lang:"en",cat:"Filozofia",tid:68},
  {id:441,text:"Die Dämonen der Vergangenheit klopfen immer noch an die Tür der modernen Zeiten. Wenn wir die Tür nicht mit Weisheit und Wissen gut verschließen, werden sie uns erneut mit verdoppelter Wildheit verschlingen.",author:"Daniel Ostrowski",lang:"de",cat:"Filozofia",tid:68},
  {id:442,text:"Les démons du passé frappent toujours à la porte des temps modernes. Si nous ne verrouillons pas la porte avec sagesse et connaissance, ils nous dévoreront à nouveau avec une férocité redoublée.",author:"Daniel Ostrowski",lang:"fr",cat:"Filozofia",tid:68},
  {id:443,text:"Los demonios del pasado siguen llamando a la puerta de los tiempos modernos. Si no cerramos bien esa puerta con sabiduría y conocimiento, los demonios nos devorarán de nuevo con redoblada ferocidad.",author:"Daniel Ostrowski",lang:"es",cat:"Filozofia",tid:68},
  {id:444,text:"Демоны прошлого всё ещё стучатся в двери современности. Если мы не запрём эту дверь мудростью и знанием, они вновь поглотят нас с удвоенной дикостью.",author:"Даниэль Островский",lang:"ru",cat:"Filozofia",tid:68},
  // Grupa 69 — David Letterman, „If what you've done is stupid but it works…"
  {id:445,text:"Jeśli to, co zrobiłeś, jest głupie, ale działa, to wcale nie jest takie głupie.",author:"David Letterman",lang:"pl",cat:"Mądrość",tid:69},
  {id:446,text:"If what you've done is stupid but it works, then it really isn't that stupid at all.",author:"David Letterman",lang:"en",cat:"Mądrość",tid:69},
  {id:447,text:"Wenn das, was du getan hast, dumm ist, aber funktioniert, dann ist es eigentlich gar nicht so dumm.",author:"David Letterman",lang:"de",cat:"Mądrość",tid:69},
  {id:448,text:"Si ce que tu as fait est stupide mais que ça fonctionne, alors ce n'est pas si stupide que ça.",author:"David Letterman",lang:"fr",cat:"Mądrość",tid:69},
  {id:449,text:"Si lo que has hecho es estúpido pero funciona, entonces no es tan estúpido en absoluto.",author:"David Letterman",lang:"es",cat:"Mądrość",tid:69},
  {id:450,text:"Если то, что ты сделал, глупо, но работает, значит, на самом деле это вовсе не так уж глупо.",author:"Дэвид Леттерман",lang:"ru",cat:"Mądrość",tid:69},
  // Grupa 70 — Autor nieznany, „To make a mistake is human…"
  {id:451,text:"Popełnić błąd jest rzeczą ludzką, ale zrzucić winę na kogoś innego — to jeszcze bardziej ludzkie.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:70},
  {id:452,text:"To make a mistake is human, but to blame it on someone else, that's even more human.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:70},
  {id:453,text:"Einen Fehler zu machen ist menschlich, aber ihn jemand anderem zuzuschreiben, das ist noch menschlicher.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:70},
  {id:454,text:"Faire une erreur est humain, mais en rejeter la faute sur quelqu'un d'autre, c'est encore plus humain.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:70},
  {id:455,text:"Cometer un error es humano, pero echarle la culpa a otro es aún más humano.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:70},
  {id:456,text:"Ошибаться — свойственно человеку, но свалить вину на другого — это ещё более человеческое.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:70},
  // Grupa 71 — Saadi z Szirazu, „Whoever recounts to you the faults of your neighbour…"
  {id:457,text:"Ktokolwiek szczegółowo opowiada ci wady bliźniego, bez wątpienia wyjawi innym twoje defekty.",author:"Saadi z Szirazu",lang:"pl",cat:"Mądrość",tid:71},
  {id:458,text:"Whoever recounts to you the faults of your neighbour will doubtless expose your defects to others.",author:"Saadi of Shiraz",lang:"en",cat:"Mądrość",tid:71},
  {id:459,text:"Wer dir die Fehler deines Nächsten aufzählt, wird ohne Zweifel anderen deine Mängel offenbaren.",author:"Saadi von Schiras",lang:"de",cat:"Mądrość",tid:71},
  {id:460,text:"Quiconque te raconte les défauts de ton prochain dévoilera sans doute les tiens aux autres.",author:"Saadi de Chiraz",lang:"fr",cat:"Mądrość",tid:71},
  {id:461,text:"Quien te cuenta los defectos de tu prójimo, sin duda expondrá los tuyos a los demás.",author:"Saadi de Shiraz",lang:"es",cat:"Mądrość",tid:71},
  {id:462,text:"Тот, кто пересказывает тебе недостатки твоего ближнего, несомненно, обнажит твои изъяны другим.",author:"Саади Ширази",lang:"ru",cat:"Mądrość",tid:71},
  // Grupa 72 — Osho, „When I say be creative…"
  {id:463,text:"Kiedy mówię: bądź kreatywny, nie mam na myśli tego, że wszyscy powinniście pójść i stać się wielkimi malarzami i wielkimi poetami. Mam na myśli po prostu: niech twoje życie będzie obrazem, niech twoje życie będzie wierszem.",author:"Osho",lang:"pl",cat:"Filozofia",tid:72},
  {id:464,text:"When I say be creative I don't mean that you should all go and become great painters and great poets. I simply mean let your life be a painting, let your life be a poem.",author:"Osho",lang:"en",cat:"Filozofia",tid:72},
  {id:465,text:"Wenn ich sage, sei kreativ, meine ich nicht, dass ihr alle hingehen und große Maler und große Dichter werden sollt. Ich meine einfach: lass dein Leben ein Gemälde sein, lass dein Leben ein Gedicht sein.",author:"Osho",lang:"de",cat:"Filozofia",tid:72},
  {id:466,text:"Quand je dis sois créatif, je ne veux pas dire que vous devez tous devenir de grands peintres et de grands poètes. Je veux simplement dire : que ta vie soit un tableau, que ta vie soit un poème.",author:"Osho",lang:"fr",cat:"Filozofia",tid:72},
  {id:467,text:"Cuando digo sé creativo, no quiero decir que todos debáis convertiros en grandes pintores y grandes poetas. Quiero decir simplemente: que tu vida sea una pintura, que tu vida sea un poema.",author:"Osho",lang:"es",cat:"Filozofia",tid:72},
  {id:468,text:"Когда я говорю «будь творческим», я не имею в виду, что все вы должны стать великими художниками и великими поэтами. Я просто имею в виду: пусть твоя жизнь будет картиной, пусть твоя жизнь будет стихотворением.",author:"Ошо",lang:"ru",cat:"Filozofia",tid:72},
  // Grupa 73 — Osho, „I live my life based on 2 principles…"
  {id:469,text:"Żyję według dwóch zasad. Pierwsza: żyję tak, jakby dzisiejszy dzień był moim ostatnim na ziemi. Druga: żyję dzisiejszy dzień tak, jakbym miał żyć wiecznie.",author:"Osho",lang:"pl",cat:"Życie",tid:73},
  {id:470,text:"I live my life based on 2 principles. One, I live as if today was my last day on earth. Two, I live today as if I am going to live forever.",author:"Osho",lang:"en",cat:"Życie",tid:73},
  {id:471,text:"Ich lebe mein Leben nach zwei Grundsätzen. Erstens: Ich lebe, als wäre der heutige Tag mein letzter auf Erden. Zweitens: Ich lebe diesen Tag, als würde ich für immer leben.",author:"Osho",lang:"de",cat:"Życie",tid:73},
  {id:472,text:"Je vis ma vie selon deux principes. Premièrement : je vis comme si aujourd'hui était mon dernier jour sur terre. Deuxièmement : je vis aujourd'hui comme si j'allais vivre éternellement.",author:"Osho",lang:"fr",cat:"Życie",tid:73},
  {id:473,text:"Vivo mi vida según dos principios. Primero: vivo como si hoy fuera mi último día en la tierra. Segundo: vivo este día como si fuera a vivir para siempre.",author:"Osho",lang:"es",cat:"Życie",tid:73},
  {id:474,text:"Я живу свою жизнь по двум принципам. Первый: я живу так, словно сегодня — мой последний день на земле. Второй: я живу сегодняшний день так, словно собираюсь жить вечно.",author:"Ошо",lang:"ru",cat:"Życie",tid:73},
  // Grupa 74 — Osho, „The real question is not whether life exists after death…"
  {id:475,text:"Prawdziwe pytanie nie brzmi, czy życie istnieje po śmierci. Prawdziwe pytanie brzmi: czy jesteś żywy, zanim umrzesz.",author:"Osho",lang:"pl",cat:"Filozofia",tid:74},
  {id:476,text:"The real question is not whether life exists after death. The real question is whether you are alive before death.",author:"Osho",lang:"en",cat:"Filozofia",tid:74},
  {id:477,text:"Die wirkliche Frage ist nicht, ob es Leben nach dem Tod gibt. Die wirkliche Frage ist, ob du vor dem Tod lebendig bist.",author:"Osho",lang:"de",cat:"Filozofia",tid:74},
  {id:478,text:"La vraie question n'est pas de savoir si la vie existe après la mort. La vraie question est de savoir si tu es vivant avant la mort.",author:"Osho",lang:"fr",cat:"Filozofia",tid:74},
  {id:479,text:"La verdadera pregunta no es si la vida existe después de la muerte. La verdadera pregunta es si estás vivo antes de la muerte.",author:"Osho",lang:"es",cat:"Filozofia",tid:74},
  {id:480,text:"Настоящий вопрос не в том, существует ли жизнь после смерти. Настоящий вопрос в том, жив ли ты до смерти.",author:"Ошо",lang:"ru",cat:"Filozofia",tid:74},
  // Grupa 75 — André Gide, „Dare to be yourself"
  {id:481,text:"Odważ się być sobą.",author:"André Gide",lang:"pl",cat:"Motywacja",tid:75},
  {id:482,text:"Dare to be yourself.",author:"André Gide",lang:"en",cat:"Motywacja",tid:75},
  {id:483,text:"Wage es, du selbst zu sein.",author:"André Gide",lang:"de",cat:"Motywacja",tid:75},
  {id:484,text:"Ose être toi-même.",author:"André Gide",lang:"fr",cat:"Motywacja",tid:75},
  {id:485,text:"Atrévete a ser tú mismo.",author:"André Gide",lang:"es",cat:"Motywacja",tid:75},
  {id:486,text:"Осмелься быть собой.",author:"Андре Жид",lang:"ru",cat:"Motywacja",tid:75},
  // Grupa 76 — André Gide, „Wszystko, co trzeba było powiedzieć…"
  {id:487,text:"Wszystko, co trzeba było powiedzieć, już zostało powiedziane. Ale ponieważ nikt nie słuchał, wszystko trzeba powiedzieć od nowa.",author:"André Gide",lang:"pl",cat:"Mądrość",tid:76},
  {id:488,text:"All that needed to be said has already been said. But since no one was listening, it must all be said again.",author:"André Gide",lang:"en",cat:"Mądrość",tid:76},
  {id:489,text:"Alles, was gesagt werden musste, ist schon gesagt worden. Aber da niemand zuhörte, muss alles noch einmal gesagt werden.",author:"André Gide",lang:"de",cat:"Mądrość",tid:76},
  {id:490,text:"Toutes choses sont dites déjà ; mais comme personne n'écoute, il faut toujours recommencer.",author:"André Gide",lang:"fr",cat:"Mądrość",tid:76},
  {id:491,text:"Todo lo que debía decirse ya se ha dicho. Pero como nadie escuchaba, hay que decirlo todo de nuevo.",author:"André Gide",lang:"es",cat:"Mądrość",tid:76},
  {id:492,text:"Всё, что надо было сказать, уже сказано. Но поскольку никто не слушал, всё надо говорить заново.",author:"Андре Жид",lang:"ru",cat:"Mądrość",tid:76},
  // Grupa 77 — Autor nieznany, „What scares you the most?…"
  {id:493,text:"Co cię najbardziej przeraża? Niepowstrzymany marsz czasu, który powoli prowadzi nas wszystkich ku nieuniknionej śmierci.",author:"Autor nieznany",lang:"pl",cat:"Filozofia",tid:77},
  {id:494,text:"What scares you the most? The unstoppable marching of time that is slowly guiding us all towards an inevitable death.",author:"Unknown author",lang:"en",cat:"Filozofia",tid:77},
  {id:495,text:"Was macht dir am meisten Angst? Der unaufhaltsame Marsch der Zeit, der uns alle langsam zu einem unvermeidlichen Tod führt.",author:"Unbekannter Autor",lang:"de",cat:"Filozofia",tid:77},
  {id:496,text:"Qu'est-ce qui t'effraie le plus ? La marche inarrêtable du temps qui nous guide tous lentement vers une mort inévitable.",author:"Auteur inconnu",lang:"fr",cat:"Filozofia",tid:77},
  {id:497,text:"¿Qué es lo que más te asusta? La marcha imparable del tiempo que nos guía lentamente a todos hacia una muerte inevitable.",author:"Autor desconocido",lang:"es",cat:"Filozofia",tid:77},
  {id:498,text:"Что пугает тебя больше всего? Неудержимое движение времени, медленно ведущее нас всех к неизбежной смерти.",author:"Автор неизвестен",lang:"ru",cat:"Filozofia",tid:77},
  // Grupa 78 — Richard Dawkins, „After sleeping through a hundred million centuries…"
  {id:499,text:"Po przespaniu stu milionów wieków wreszcie otworzyliśmy oczy na wspaniałą planetę, mieniącą się kolorami, bujnie obfitującą w życie. W ciągu dziesięcioleci musimy zamknąć oczy ponownie. Czy to nie jest szlachetny, oświecony sposób spędzania naszego krótkiego czasu w słońcu — pracować nad zrozumieniem wszechświata i tego, jak doszło do tego, że się w nim obudziliśmy? Tak właśnie odpowiadam, gdy mnie pytają — a pytają zaskakująco często — dlaczego w ogóle zadaję sobie trud, by rano wstać.",author:"Richard Dawkins",lang:"pl",cat:"Filozofia",tid:78},
  {id:500,text:"After sleeping through a hundred million centuries we have finally opened our eyes on a sumptuous planet, sparkling with color, bountiful with life. Within decades we must close our eyes again. Isn't it a noble, an enlightened way of spending our brief time in the sun, to work at understanding the universe and how we have come to wake up in it? This is how I answer when I am asked — as I am surprisingly often — why I bother to get up in the mornings.",author:"Richard Dawkins",lang:"en",cat:"Filozofia",tid:78},
  {id:501,text:"Nachdem wir hundert Millionen Jahrhunderte verschlafen haben, haben wir endlich unsere Augen auf einem prächtigen Planeten geöffnet, der vor Farben funkelt und vor Leben strotzt. Innerhalb von Jahrzehnten müssen wir unsere Augen wieder schließen. Ist es nicht eine edle, eine erleuchtete Art, unsere kurze Zeit in der Sonne zu verbringen, daran zu arbeiten, das Universum zu verstehen und wie wir dazu gekommen sind, in ihm zu erwachen? So antworte ich, wenn ich gefragt werde — und ich werde überraschend oft gefragt — warum ich mir die Mühe mache, morgens aufzustehen.",author:"Richard Dawkins",lang:"de",cat:"Filozofia",tid:78},
  {id:502,text:"Après avoir dormi pendant cent millions de siècles, nous avons enfin ouvert les yeux sur une planète somptueuse, étincelante de couleurs, débordante de vie. En quelques décennies, nous devrons refermer les yeux. N'est-ce pas une manière noble, éclairée, de passer notre bref temps au soleil que de travailler à comprendre l'univers et comment nous en sommes venus à nous y éveiller ? C'est ainsi que je réponds quand on me demande — et on me le demande étonnamment souvent — pourquoi je me donne la peine de me lever le matin.",author:"Richard Dawkins",lang:"fr",cat:"Filozofia",tid:78},
  {id:503,text:"Después de dormir durante cien millones de siglos, finalmente hemos abierto los ojos en un planeta suntuoso, resplandeciente de color, abundante en vida. En pocas décadas debemos cerrar los ojos de nuevo. ¿No es una forma noble, ilustrada, de pasar nuestro breve tiempo bajo el sol, trabajar para comprender el universo y cómo hemos llegado a despertar en él? Así es como respondo cuando me preguntan — y me lo preguntan sorprendentemente a menudo — por qué me molesto en levantarme por las mañanas.",author:"Richard Dawkins",lang:"es",cat:"Filozofia",tid:78},
  {id:504,text:"Проспав сто миллионов веков, мы наконец открыли глаза на роскошной планете, искрящейся красками, щедрой на жизнь. Через несколько десятилетий мы должны снова закрыть глаза. Разве это не благородный, не просвещённый способ провести наше краткое время под солнцем — работать над пониманием Вселенной и того, как мы оказались в ней пробуждёнными? Вот так я отвечаю, когда меня спрашивают — а меня спрашивают на удивление часто — зачем я вообще встаю по утрам.",author:"Ричард Докинз",lang:"ru",cat:"Filozofia",tid:78},
  // Grupa 79 — John Locke, „We are like chameleons…"
  {id:505,text:"Jesteśmy jak kameleony — przybieramy odcień i kolor naszego charakteru moralnego od tych, którzy nas otaczają.",author:"John Locke",lang:"pl",cat:"Mądrość",tid:79},
  {id:506,text:"We are like chameleons, we take our hue and the color of our moral character, from those who are around us.",author:"John Locke",lang:"en",cat:"Mądrość",tid:79},
  {id:507,text:"Wir sind wie Chamäleons — wir nehmen unseren Farbton und die Farbe unseres moralischen Charakters von denen an, die uns umgeben.",author:"John Locke",lang:"de",cat:"Mądrość",tid:79},
  {id:508,text:"Nous sommes comme des caméléons — nous prenons notre teinte et la couleur de notre caractère moral de ceux qui nous entourent.",author:"John Locke",lang:"fr",cat:"Mądrość",tid:79},
  {id:509,text:"Somos como camaleones: tomamos nuestro matiz y el color de nuestro carácter moral de quienes nos rodean.",author:"John Locke",lang:"es",cat:"Mądrość",tid:79},
  {id:510,text:"Мы подобны хамелеонам — мы перенимаем оттенок и цвет нашего нравственного характера у тех, кто нас окружает.",author:"Джон Локк",lang:"ru",cat:"Mądrość",tid:79},
  // Grupa 80 — Siergiej Łukjanienko, „Inteligentny człowiek, będąc w obcym mieszkaniu…"
  {id:511,text:"Inteligentny człowiek, będąc w obcym mieszkaniu, powinien najpierw obejrzeć książki, a potem dopiero resztę.",author:"Siergiej Łukjanienko",lang:"pl",cat:"Mądrość",tid:80},
  {id:512,text:"An intelligent person, when in someone else's apartment, should first examine the books and only then the rest.",author:"Sergei Lukyanenko",lang:"en",cat:"Mądrość",tid:80},
  {id:513,text:"Ein intelligenter Mensch sollte in einer fremden Wohnung zuerst die Bücher betrachten und erst dann den Rest.",author:"Sergei Lukianenko",lang:"de",cat:"Mądrość",tid:80},
  {id:514,text:"Une personne intelligente, dans l'appartement de quelqu'un d'autre, devrait d'abord examiner les livres et seulement ensuite le reste.",author:"Sergueï Loukianenko",lang:"fr",cat:"Mądrość",tid:80},
  {id:515,text:"Una persona inteligente, al estar en un apartamento ajeno, debería examinar primero los libros y solo después el resto.",author:"Serguéi Lukyanenko",lang:"es",cat:"Mądrość",tid:80},
  {id:516,text:"Умный человек, находясь в чужой квартире, должен сначала осмотреть книги, а уж потом всё остальное.",author:"Сергей Лукьяненко",lang:"ru",cat:"Mądrość",tid:80},
  // Grupa 81 — Richard M. DeVos, „It is impossible to win the race…"
  {id:517,text:"Nie można wygrać wyścigu, jeśli nie odważysz się biec; nie można odnieść zwycięstwa, jeśli nie odważysz się walczyć.",author:"Richard M. DeVos",lang:"pl",cat:"Sukces",tid:81},
  {id:518,text:"It is impossible to win the race unless you venture to run, impossible to win the victory unless you dare to battle.",author:"Richard M. DeVos",lang:"en",cat:"Sukces",tid:81},
  {id:519,text:"Es ist unmöglich, das Rennen zu gewinnen, wenn du dich nicht traust zu laufen; unmöglich, den Sieg zu erringen, wenn du dich nicht traust zu kämpfen.",author:"Richard M. DeVos",lang:"de",cat:"Sukces",tid:81},
  {id:520,text:"Il est impossible de gagner la course si tu n'oses pas courir, impossible de remporter la victoire si tu n'oses pas te battre.",author:"Richard M. DeVos",lang:"fr",cat:"Sukces",tid:81},
  {id:521,text:"Es imposible ganar la carrera si no te atreves a correr; imposible ganar la victoria si no te atreves a luchar.",author:"Richard M. DeVos",lang:"es",cat:"Sukces",tid:81},
  {id:522,text:"Невозможно выиграть гонку, если ты не осмелишься бежать; невозможно одержать победу, если ты не осмелишься сражаться.",author:"Ричард М. ДеВос",lang:"ru",cat:"Sukces",tid:81},
  // Grupa 82 — Daniel Ostrowski, „Chcę zabić myśli…"
  {id:523,text:"Chcę zabić myśli, które w nocy bez litości przysparzają snu trudności.",author:"Daniel Ostrowski",lang:"pl",cat:"Życie",tid:82},
  {id:524,text:"I want to kill the thoughts that at night without mercy make sleep so hard to find.",author:"Daniel Ostrowski",lang:"en",cat:"Życie",tid:82},
  {id:525,text:"Ich will die Gedanken töten, die in der Nacht ohne Erbarmen den Schlaf erschweren.",author:"Daniel Ostrowski",lang:"de",cat:"Życie",tid:82},
  {id:526,text:"Je veux tuer les pensées qui la nuit sans pitié rendent le sommeil difficile.",author:"Daniel Ostrowski",lang:"fr",cat:"Życie",tid:82},
  {id:527,text:"Quiero matar los pensamientos que en la noche sin piedad dificultan el sueño.",author:"Daniel Ostrowski",lang:"es",cat:"Życie",tid:82},
  {id:528,text:"Хочу убить мысли, которые ночью без жалости лишают меня сна.",author:"Даниэль Островский",lang:"ru",cat:"Życie",tid:82},
  // Grupa 83 — Karol (25.08.2017), „Komplement powinien być jak snajper…"
  {id:529,text:"Komplement powinien być jak snajper — celny i pojedynczy.",author:"Karol",lang:"pl",cat:"Mądrość",tid:83},
  {id:530,text:"A compliment should be like a sniper — accurate and single.",author:"Karol",lang:"en",cat:"Mądrość",tid:83},
  {id:531,text:"Ein Kompliment sollte wie ein Scharfschütze sein — präzise und einzeln.",author:"Karol",lang:"de",cat:"Mądrość",tid:83},
  {id:532,text:"Un compliment devrait être comme un sniper — précis et unique.",author:"Karol",lang:"fr",cat:"Mądrość",tid:83},
  {id:533,text:"Un cumplido debería ser como un francotirador: certero y único.",author:"Karol",lang:"es",cat:"Mądrość",tid:83},
  {id:534,text:"Комплимент должен быть как снайпер — точным и одиночным.",author:"Кароль",lang:"ru",cat:"Mądrość",tid:83},
  // Grupa 84 — Marian Turski, „Nie bądźcie obojętni…" (mowa w Auschwitz, 27.01.2020)
  {id:535,text:"Nie bądźcie obojętni, kiedy jakakolwiek mniejszość jest dyskryminowana. Istotą demokracji jest to, że większość rządzi, ale demokracja na tym polega, że prawa mniejszości muszą być chronione. Nie bądźcie obojętni, kiedy jakakolwiek władza narusza przyjęte umowy społeczne, już istniejące. Bądźcie wierni przykazaniu. Jedenaste przykazanie: nie bądź obojętny. Bo jeżeli będziesz, to nawet się nie obejrzycie, jak na was, na waszych potomków jakiś Auschwitz nagle spadnie z nieba.",author:"Marian Turski",lang:"pl",cat:"Mądrość",tid:84},
  {id:536,text:"Do not be indifferent when any minority is discriminated against. The essence of democracy is that the majority rules, but democracy means that the rights of the minority must be protected. Do not be indifferent when any authority violates already existing social contracts. Be faithful to the commandment. The eleventh commandment: do not be indifferent. Because if you are, you will not even notice when some Auschwitz suddenly falls from the sky on you, on your descendants.",author:"Marian Turski",lang:"en",cat:"Mądrość",tid:84},
  {id:537,text:"Seid nicht gleichgültig, wenn irgendeine Minderheit diskriminiert wird. Das Wesen der Demokratie ist, dass die Mehrheit regiert, aber Demokratie bedeutet, dass die Rechte der Minderheit geschützt werden müssen. Seid nicht gleichgültig, wenn irgendeine Macht die bereits bestehenden gesellschaftlichen Verträge verletzt. Seid dem Gebot treu. Das elfte Gebot: Sei nicht gleichgültig. Denn wenn ihr es seid, werdet ihr nicht einmal merken, wie irgendein Auschwitz plötzlich vom Himmel auf euch, auf eure Nachkommen herabfällt.",author:"Marian Turski",lang:"de",cat:"Mądrość",tid:84},
  {id:538,text:"Ne soyez pas indifférents quand une minorité, quelle qu'elle soit, est discriminée. L'essence de la démocratie est que la majorité gouverne, mais la démocratie signifie que les droits de la minorité doivent être protégés. Ne soyez pas indifférents quand un pouvoir, quel qu'il soit, viole les contrats sociaux déjà existants. Soyez fidèles au commandement. Le onzième commandement : ne sois pas indifférent. Car si vous l'êtes, vous ne verrez même pas comment un Auschwitz tombera soudain du ciel sur vous, sur vos descendants.",author:"Marian Turski",lang:"fr",cat:"Mądrość",tid:84},
  {id:539,text:"No seáis indiferentes cuando cualquier minoría sea discriminada. La esencia de la democracia es que la mayoría gobierna, pero la democracia significa que los derechos de la minoría deben ser protegidos. No seáis indiferentes cuando cualquier poder viole los contratos sociales ya existentes. Sed fieles al mandamiento. El undécimo mandamiento: no seas indiferente. Porque si lo sois, ni siquiera os daréis cuenta de cómo algún Auschwitz caerá de pronto del cielo sobre vosotros, sobre vuestros descendientes.",author:"Marian Turski",lang:"es",cat:"Mądrość",tid:84},
  {id:540,text:"Не будьте равнодушны, когда любое меньшинство подвергается дискриминации. Сущность демократии в том, что большинство правит, но демократия означает, что права меньшинства должны быть защищены. Не будьте равнодушны, когда любая власть нарушает уже существующие общественные договоры. Будьте верны заповеди. Одиннадцатая заповедь: не будь равнодушным. Потому что если вы будете, то даже не заметите, как на вас, на ваших потомков какой-то Аушвиц внезапно упадёт с неба.",author:"Мариан Турский",lang:"ru",cat:"Mądrość",tid:84},
  // Grupa 85 — Bartek Mróz (24.07.2015), „Gdy kogoś kochasz naprawdę…"
  {id:541,text:"Gdy kogoś kochasz naprawdę, to nie liczy się wygląd czy negatywne cechy. Wtedy wszystko staje się idealne.",author:"Bartek Mróz",lang:"pl",cat:"Miłość",tid:85},
  {id:542,text:"When you truly love someone, looks or negative traits don't matter. Then everything becomes ideal.",author:"Bartek Mróz",lang:"en",cat:"Miłość",tid:85},
  {id:543,text:"Wenn du jemanden wirklich liebst, spielen Aussehen oder negative Eigenschaften keine Rolle. Dann wird alles ideal.",author:"Bartek Mróz",lang:"de",cat:"Miłość",tid:85},
  {id:544,text:"Quand tu aimes vraiment quelqu'un, l'apparence ou les défauts ne comptent pas. Alors tout devient idéal.",author:"Bartek Mróz",lang:"fr",cat:"Miłość",tid:85},
  {id:545,text:"Cuando amas a alguien de verdad, el aspecto o las características negativas no importan. Entonces todo se vuelve ideal.",author:"Bartek Mróz",lang:"es",cat:"Miłość",tid:85},
  {id:546,text:"Когда любишь кого-то по-настоящему, не важны внешность или негативные черты. Тогда всё становится идеальным.",author:"Бартек Мруз",lang:"ru",cat:"Miłość",tid:85},
  // Grupa 86 — Michał Szczygielski (Mihir), „Przez jedną dziurę w płocie…"
  {id:547,text:"Przez jedną dziurę w płocie wszystkie kury uciekną.",author:"Michał Szczygielski (Mihir)",lang:"pl",cat:"Mądrość",tid:86},
  {id:548,text:"Through one hole in the fence all the chickens will escape.",author:"Michał Szczygielski (Mihir)",lang:"en",cat:"Mądrość",tid:86},
  {id:549,text:"Durch ein einziges Loch im Zaun entkommen alle Hühner.",author:"Michał Szczygielski (Mihir)",lang:"de",cat:"Mądrość",tid:86},
  {id:550,text:"Par un seul trou dans la clôture, toutes les poules s'échappent.",author:"Michał Szczygielski (Mihir)",lang:"fr",cat:"Mądrość",tid:86},
  {id:551,text:"Por un solo agujero en la cerca, todas las gallinas se escapan.",author:"Michał Szczygielski (Mihir)",lang:"es",cat:"Mądrość",tid:86},
  {id:552,text:"Через одну дыру в заборе все куры разбегутся.",author:"Михал Щигельский (Михир)",lang:"ru",cat:"Mądrość",tid:86},
  // Grupa 87 — Olga Tokarczuk, „Mówić do kogoś, kto nie zrozumie…"
  {id:553,text:"Mówić do kogoś, kto nie zrozumie, to próbować otworzyć zamek źdźbłem trawy, to kroić chleb gałązką bazylii, wkręcać żarówkę w ptasie gniazdo, wkładać dyskietkę między dwa kamienie. Daremnie.",author:"Olga Tokarczuk",lang:"pl",cat:"Mądrość",tid:87},
  {id:554,text:"To speak to someone who will not understand is to try to open a lock with a blade of grass, to slice bread with a sprig of basil, to screw a light bulb into a bird's nest, to insert a floppy disk between two stones. In vain.",author:"Olga Tokarczuk",lang:"en",cat:"Mądrość",tid:87},
  {id:555,text:"Mit jemandem zu sprechen, der nicht versteht, ist wie zu versuchen, ein Schloss mit einem Grashalm zu öffnen, Brot mit einem Basilikumzweig zu schneiden, eine Glühbirne in ein Vogelnest zu schrauben, eine Diskette zwischen zwei Steine zu stecken. Vergebens.",author:"Olga Tokarczuk",lang:"de",cat:"Mądrość",tid:87},
  {id:556,text:"Parler à quelqu'un qui ne comprendra pas, c'est essayer d'ouvrir une serrure avec un brin d'herbe, c'est couper du pain avec une branche de basilic, visser une ampoule dans un nid d'oiseau, insérer une disquette entre deux pierres. En vain.",author:"Olga Tokarczuk",lang:"fr",cat:"Mądrość",tid:87},
  {id:557,text:"Hablar con alguien que no entenderá es intentar abrir un cerrojo con una brizna de hierba, es cortar pan con una ramita de albahaca, atornillar una bombilla en un nido de pájaro, insertar un disquete entre dos piedras. En vano.",author:"Olga Tokarczuk",lang:"es",cat:"Mądrość",tid:87},
  {id:558,text:"Говорить с тем, кто не поймёт, — это пытаться открыть замок травинкой, резать хлеб веточкой базилика, вкручивать лампочку в птичье гнездо, вкладывать дискету между двух камней. Напрасно.",author:"Ольга Токарчук",lang:"ru",cat:"Mądrość",tid:87},
  // Grupa 88 — Rafał Trzaskowski (25.05.2025), „Nie lękajcie się, gdy mali ludzie rzucają wielkie cienie…"
  {id:559,text:"Nie lękajcie się, dlatego, że gdy mali ludzie rzucają wielkie cienie, to oznacza, że zachodzi nad nimi słońce.",author:"Rafał Trzaskowski",lang:"pl",cat:"Mądrość",tid:88},
  {id:560,text:"Do not be afraid, because when small people cast great shadows, it means the sun is setting over them.",author:"Rafał Trzaskowski",lang:"en",cat:"Mądrość",tid:88},
  {id:561,text:"Fürchtet euch nicht, denn wenn kleine Menschen große Schatten werfen, bedeutet das, dass die Sonne über ihnen untergeht.",author:"Rafał Trzaskowski",lang:"de",cat:"Mądrość",tid:88},
  {id:562,text:"N'ayez pas peur, parce que quand les petites gens projettent de grandes ombres, cela signifie que le soleil se couche au-dessus d'eux.",author:"Rafał Trzaskowski",lang:"fr",cat:"Mądrość",tid:88},
  {id:563,text:"No tengáis miedo, porque cuando las personas pequeñas proyectan grandes sombras, significa que el sol se está poniendo sobre ellas.",author:"Rafał Trzaskowski",lang:"es",cat:"Mądrość",tid:88},
  {id:564,text:"Не бойтесь, потому что когда маленькие люди отбрасывают большие тени, это означает, что над ними заходит солнце.",author:"Рафал Тшасковский",lang:"ru",cat:"Mądrość",tid:88},
  // Grupa 89 — Les Brown, „Dzisiaj jesteś, lecz jutro może Cię więcej tu nie być…"
  {id:565,text:"Dzisiaj jesteś, lecz jutro może Cię więcej tu nie być. Może zdarzyć się, że niespodziewanie odejdziesz stąd jeszcze dzisiaj. Dlatego konieczne jest, abyś dzisiaj realizował swoje marzenia.",author:"Les Brown",lang:"pl",cat:"Życie",tid:89},
  {id:566,text:"Today you are here, but tomorrow you may no longer be. It may happen that you unexpectedly leave today. That is why it is necessary that you pursue your dreams today.",author:"Les Brown",lang:"en",cat:"Życie",tid:89},
  {id:567,text:"Heute bist du hier, aber morgen bist du vielleicht nicht mehr da. Es kann passieren, dass du heute noch unerwartet von hier gehst. Deshalb ist es notwendig, dass du heute deine Träume verwirklichst.",author:"Les Brown",lang:"de",cat:"Życie",tid:89},
  {id:568,text:"Aujourd'hui tu es là, mais demain tu pourrais ne plus y être. Il peut arriver que tu partes d'ici de manière inattendue dès aujourd'hui. C'est pourquoi il est nécessaire que tu réalises tes rêves aujourd'hui.",author:"Les Brown",lang:"fr",cat:"Życie",tid:89},
  {id:569,text:"Hoy estás aquí, pero mañana puede que ya no estés. Puede ocurrir que te vayas de aquí inesperadamente hoy mismo. Por eso es necesario que hoy realices tus sueños.",author:"Les Brown",lang:"es",cat:"Życie",tid:89},
  {id:570,text:"Сегодня ты здесь, но завтра тебя может уже не быть. Может случиться так, что ты неожиданно уйдёшь отсюда ещё сегодня. Поэтому необходимо, чтобы ты сегодня осуществлял свои мечты.",author:"Лес Браун",lang:"ru",cat:"Życie",tid:89},
  // Grupa 90 — Les Brown, „Life has no limitations except the ones you make."
  {id:571,text:"Życie nie ma żadnych ograniczeń poza tymi, które sam tworzysz.",author:"Les Brown",lang:"pl",cat:"Motywacja",tid:90},
  {id:572,text:"Life has no limitations except the ones you make.",author:"Les Brown",lang:"en",cat:"Motywacja",tid:90},
  {id:573,text:"Das Leben hat keine Grenzen außer denen, die du selbst setzt.",author:"Les Brown",lang:"de",cat:"Motywacja",tid:90},
  {id:574,text:"La vie n'a pas de limites, sauf celles que tu te fixes.",author:"Les Brown",lang:"fr",cat:"Motywacja",tid:90},
  {id:575,text:"La vida no tiene limitaciones, salvo las que tú mismo creas.",author:"Les Brown",lang:"es",cat:"Motywacja",tid:90},
  {id:576,text:"У жизни нет ограничений, кроме тех, которые ты создаёшь сам.",author:"Лес Браун",lang:"ru",cat:"Motywacja",tid:90},
  // Grupa 91 — Les Brown, „In every day, there are 1,440 minutes…"
  {id:577,text:"W każdym dniu jest 1440 minut. To znaczy, że mamy codziennie 1440 okazji, by wywrzeć pozytywny wpływ.",author:"Les Brown",lang:"pl",cat:"Motywacja",tid:91},
  {id:578,text:"In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",author:"Les Brown",lang:"en",cat:"Motywacja",tid:91},
  {id:579,text:"In jedem Tag stecken 1.440 Minuten. Das bedeutet, wir haben täglich 1.440 Gelegenheiten, einen positiven Einfluss zu nehmen.",author:"Les Brown",lang:"de",cat:"Motywacja",tid:91},
  {id:580,text:"Dans chaque journée, il y a 1 440 minutes. Cela signifie que nous avons 1 440 occasions quotidiennes d'avoir un impact positif.",author:"Les Brown",lang:"fr",cat:"Motywacja",tid:91},
  {id:581,text:"En cada día hay 1440 minutos. Eso significa que tenemos 1440 oportunidades diarias de causar un impacto positivo.",author:"Les Brown",lang:"es",cat:"Motywacja",tid:91},
  {id:582,text:"В каждом дне 1440 минут. Это значит, что у нас есть 1440 ежедневных возможностей оказать положительное влияние.",author:"Лес Браун",lang:"ru",cat:"Motywacja",tid:91},
  // Grupa 92 — Les Brown, „If you are carrying strong feelings about something that happened in your past…"
  {id:583,text:"Jeśli nosisz w sobie silne uczucia związane z czymś, co wydarzyło się w twojej przeszłości, mogą one przeszkodzić ci w życiu teraźniejszością.",author:"Les Brown",lang:"pl",cat:"Mądrość",tid:92},
  {id:584,text:"If you are carrying strong feelings about something that happened in your past, they may hinder your ability to live in the present.",author:"Les Brown",lang:"en",cat:"Mądrość",tid:92},
  {id:585,text:"Wenn du starke Gefühle in dir trägst, die mit etwas aus deiner Vergangenheit zu tun haben, können sie dich daran hindern, in der Gegenwart zu leben.",author:"Les Brown",lang:"de",cat:"Mądrość",tid:92},
  {id:586,text:"Si tu portes en toi de forts sentiments liés à quelque chose qui s'est passé dans ton passé, ils peuvent t'empêcher de vivre dans le présent.",author:"Les Brown",lang:"fr",cat:"Mądrość",tid:92},
  {id:587,text:"Si llevas dentro de ti fuertes sentimientos por algo que ocurrió en tu pasado, pueden impedirte vivir en el presente.",author:"Les Brown",lang:"es",cat:"Mądrość",tid:92},
  {id:588,text:"Если ты несёшь в себе сильные чувства, связанные с чем-то, что произошло в твоём прошлом, они могут помешать тебе жить настоящим.",author:"Лес Браун",lang:"ru",cat:"Mądrość",tid:92},
  // Grupa 93 — Les Brown, „When your why is big enough you will find your how."
  {id:589,text:"Kiedy twoje «dlaczego» jest wystarczająco wielkie, znajdziesz swoje «jak».",author:"Les Brown",lang:"pl",cat:"Motywacja",tid:93},
  {id:590,text:"When your why is big enough you will find your how.",author:"Les Brown",lang:"en",cat:"Motywacja",tid:93},
  {id:591,text:"Wenn dein Warum groß genug ist, wirst du dein Wie finden.",author:"Les Brown",lang:"de",cat:"Motywacja",tid:93},
  {id:592,text:"Quand ton « pourquoi » est assez grand, tu trouveras ton « comment ».",author:"Les Brown",lang:"fr",cat:"Motywacja",tid:93},
  {id:593,text:"Cuando tu «porqué» es lo suficientemente grande, encontrarás tu «cómo».",author:"Les Brown",lang:"es",cat:"Motywacja",tid:93},
  {id:594,text:"Когда твоё «зачем» достаточно велико, ты найдёшь своё «как».",author:"Лес Браун",lang:"ru",cat:"Motywacja",tid:93},
  // Grupa 94 — Les Brown, „You are the only real obstacle in your path to a fulfilling life."
  {id:595,text:"Jesteś jedyną prawdziwą przeszkodą na drodze do spełnionego życia.",author:"Les Brown",lang:"pl",cat:"Motywacja",tid:94},
  {id:596,text:"You are the only real obstacle in your path to a fulfilling life.",author:"Les Brown",lang:"en",cat:"Motywacja",tid:94},
  {id:597,text:"Du bist das einzige wirkliche Hindernis auf deinem Weg zu einem erfüllten Leben.",author:"Les Brown",lang:"de",cat:"Motywacja",tid:94},
  {id:598,text:"Tu es le seul véritable obstacle sur ton chemin vers une vie épanouie.",author:"Les Brown",lang:"fr",cat:"Motywacja",tid:94},
  {id:599,text:"Tú eres el único verdadero obstáculo en tu camino hacia una vida plena.",author:"Les Brown",lang:"es",cat:"Motywacja",tid:94},
  {id:600,text:"Ты — единственное настоящее препятствие на пути к полноценной жизни.",author:"Лес Браун",lang:"ru",cat:"Motywacja",tid:94},
  // Grupa 95 — Les Brown, „You must remain focused on your journey to greatness."
  {id:601,text:"Musisz pozostać skupiony na swojej drodze do wielkości.",author:"Les Brown",lang:"pl",cat:"Sukces",tid:95},
  {id:602,text:"You must remain focused on your journey to greatness.",author:"Les Brown",lang:"en",cat:"Sukces",tid:95},
  {id:603,text:"Du musst auf deinem Weg zur Größe konzentriert bleiben.",author:"Les Brown",lang:"de",cat:"Sukces",tid:95},
  {id:604,text:"Tu dois rester concentré sur ton chemin vers la grandeur.",author:"Les Brown",lang:"fr",cat:"Sukces",tid:95},
  {id:605,text:"Debes mantenerte enfocado en tu camino hacia la grandeza.",author:"Les Brown",lang:"es",cat:"Sukces",tid:95},
  {id:606,text:"Ты должен оставаться сосредоточенным на своём пути к величию.",author:"Лес Браун",lang:"ru",cat:"Sukces",tid:95},
  // Grupa 96 — Les Brown, „Act the way you want to be and soon you'll be the way you act."
  {id:607,text:"Zachowuj się tak, jak chciałbyś być, a wkrótce staniesz się taki, jak się zachowujesz.",author:"Les Brown",lang:"pl",cat:"Mądrość",tid:96},
  {id:608,text:"Act the way you want to be and soon you'll be the way you act.",author:"Les Brown",lang:"en",cat:"Mądrość",tid:96},
  {id:609,text:"Verhalte dich so, wie du sein möchtest, und bald wirst du so sein, wie du dich verhältst.",author:"Les Brown",lang:"de",cat:"Mądrość",tid:96},
  {id:610,text:"Comporte-toi comme tu veux être, et bientôt tu seras comme tu te comportes.",author:"Les Brown",lang:"fr",cat:"Mądrość",tid:96},
  {id:611,text:"Compórtate como quieres ser y pronto serás como te comportas.",author:"Les Brown",lang:"es",cat:"Mądrość",tid:96},
  {id:612,text:"Веди себя так, как хочешь быть, и вскоре ты станешь таким, как себя ведёшь.",author:"Лес Браун",lang:"ru",cat:"Mądrość",tid:96},
  // Grupa 97 — Les Brown, „The greatest revenge is massive success."
  {id:613,text:"Największą zemstą jest spektakularny sukces.",author:"Les Brown",lang:"pl",cat:"Sukces",tid:97},
  {id:614,text:"The greatest revenge is massive success.",author:"Les Brown",lang:"en",cat:"Sukces",tid:97},
  {id:615,text:"Die größte Rache ist überwältigender Erfolg.",author:"Les Brown",lang:"de",cat:"Sukces",tid:97},
  {id:616,text:"La plus grande des vengeances est un succès retentissant.",author:"Les Brown",lang:"fr",cat:"Sukces",tid:97},
  {id:617,text:"La mejor venganza es un éxito rotundo.",author:"Les Brown",lang:"es",cat:"Sukces",tid:97},
  {id:618,text:"Лучшая месть — это огромный успех.",author:"Лес Браун",lang:"ru",cat:"Sukces",tid:97},
  // Grupa 98 — Les Brown, „Forgive yourself for your faults and your mistakes and move on."
  {id:619,text:"Wybacz sobie swoje wady i błędy, i idź dalej.",author:"Les Brown",lang:"pl",cat:"Mądrość",tid:98},
  {id:620,text:"Forgive yourself for your faults and your mistakes and move on.",author:"Les Brown",lang:"en",cat:"Mądrość",tid:98},
  {id:621,text:"Vergib dir deine Fehler und Irrtümer und geh weiter.",author:"Les Brown",lang:"de",cat:"Mądrość",tid:98},
  {id:622,text:"Pardonne-toi tes défauts et tes erreurs, et avance.",author:"Les Brown",lang:"fr",cat:"Mądrość",tid:98},
  {id:623,text:"Perdónate tus defectos y tus errores y sigue adelante.",author:"Les Brown",lang:"es",cat:"Mądrość",tid:98},
  {id:624,text:"Прости себе свои недостатки и ошибки и иди дальше.",author:"Лес Браун",lang:"ru",cat:"Mądrość",tid:98},
  // Grupa 99 — Les Brown, „Help others achieve their dreams and you will achieve yours."
  {id:625,text:"Pomóż innym spełnić ich marzenia, a spełnisz swoje.",author:"Les Brown",lang:"pl",cat:"Mądrość",tid:99},
  {id:626,text:"Help others achieve their dreams and you will achieve yours.",author:"Les Brown",lang:"en",cat:"Mądrość",tid:99},
  {id:627,text:"Hilf anderen, ihre Träume zu verwirklichen, und du wirst deine eigenen verwirklichen.",author:"Les Brown",lang:"de",cat:"Mądrość",tid:99},
  {id:628,text:"Aide les autres à réaliser leurs rêves, et tu réaliseras les tiens.",author:"Les Brown",lang:"fr",cat:"Mądrość",tid:99},
  {id:629,text:"Ayuda a los demás a alcanzar sus sueños y alcanzarás los tuyos.",author:"Les Brown",lang:"es",cat:"Mądrość",tid:99},
  {id:630,text:"Помогай другим достигать их мечтаний, и ты достигнешь своих.",author:"Лес Браун",lang:"ru",cat:"Mądrość",tid:99},
  // Grupa 100 — Les Brown, „Life takes on meaning…"
  {id:631,text:"Życie nabiera sensu, gdy stajesz się zmotywowany, wyznaczasz cele i dążysz do nich w niepowstrzymany sposób.",author:"Les Brown",lang:"pl",cat:"Motywacja",tid:100},
  {id:632,text:"Life takes on meaning when you become motivated, set goals and charge after them in an unstoppable manner.",author:"Les Brown",lang:"en",cat:"Motywacja",tid:100},
  {id:633,text:"Das Leben gewinnt an Bedeutung, wenn du motiviert wirst, dir Ziele setzt und sie auf unaufhaltsame Weise verfolgst.",author:"Les Brown",lang:"de",cat:"Motywacja",tid:100},
  {id:634,text:"La vie prend un sens lorsque tu deviens motivé, que tu te fixes des objectifs et que tu les poursuis de manière imparable.",author:"Les Brown",lang:"fr",cat:"Motywacja",tid:100},
  {id:635,text:"La vida cobra sentido cuando te motivas, te fijas metas y las persigues de manera imparable.",author:"Les Brown",lang:"es",cat:"Motywacja",tid:100},
  {id:636,text:"Жизнь обретает смысл, когда ты становишься мотивированным, ставишь цели и преследуешь их неудержимым образом.",author:"Лес Браун",lang:"ru",cat:"Motywacja",tid:100},
  // Grupa 101 — Les Brown, „Most people fail in life not because they aim too high…"
  {id:637,text:"Większość ludzi nie zawodzi w życiu dlatego, że celuje za wysoko i nie trafia, lecz dlatego, że celuje za nisko i trafia.",author:"Les Brown",lang:"pl",cat:"Sukces",tid:101},
  {id:638,text:"Most people fail in life not because they aim too high and miss, but because they aim too low and hit.",author:"Les Brown",lang:"en",cat:"Sukces",tid:101},
  {id:639,text:"Die meisten Menschen scheitern im Leben nicht, weil sie zu hoch zielen und verfehlen, sondern weil sie zu niedrig zielen und treffen.",author:"Les Brown",lang:"de",cat:"Sukces",tid:101},
  {id:640,text:"La plupart des gens échouent dans la vie non pas parce qu'ils visent trop haut et manquent, mais parce qu'ils visent trop bas et atteignent.",author:"Les Brown",lang:"fr",cat:"Sukces",tid:101},
  {id:641,text:"La mayoría de la gente fracasa en la vida no porque apunte demasiado alto y falle, sino porque apunta demasiado bajo y acierta.",author:"Les Brown",lang:"es",cat:"Sukces",tid:101},
  {id:642,text:"Большинство людей терпит неудачу в жизни не потому, что метят слишком высоко и промахиваются, а потому, что метят слишком низко и попадают.",author:"Лес Браун",lang:"ru",cat:"Sukces",tid:101},
  // Grupa 102 — Les Brown, „If you don't program yourself, life will program you."
  {id:643,text:"Jeśli sam się nie zaprogramujesz, to życie zaprogramuje ciebie.",author:"Les Brown",lang:"pl",cat:"Mądrość",tid:102},
  {id:644,text:"If you don't program yourself, life will program you.",author:"Les Brown",lang:"en",cat:"Mądrość",tid:102},
  {id:645,text:"Wenn du dich nicht selbst programmierst, wird das Leben dich programmieren.",author:"Les Brown",lang:"de",cat:"Mądrość",tid:102},
  {id:646,text:"Si tu ne te programmes pas toi-même, la vie te programmera.",author:"Les Brown",lang:"fr",cat:"Mądrość",tid:102},
  {id:647,text:"Si no te programas a ti mismo, la vida te programará.",author:"Les Brown",lang:"es",cat:"Mądrość",tid:102},
  {id:648,text:"Если ты сам себя не запрограммируешь, жизнь запрограммирует тебя.",author:"Лес Браун",lang:"ru",cat:"Mądrość",tid:102},
  // Grupa 103 — Les Brown, „If you take responsibility for yourself…"
  {id:649,text:"Jeśli weźmiesz odpowiedzialność za siebie, rozwinie się w tobie głód spełnienia swoich marzeń.",author:"Les Brown",lang:"pl",cat:"Motywacja",tid:103},
  {id:650,text:"If you take responsibility for yourself you will develop a hunger to accomplish your dream.",author:"Les Brown",lang:"en",cat:"Motywacja",tid:103},
  {id:651,text:"Wenn du Verantwortung für dich selbst übernimmst, wirst du einen Hunger entwickeln, deinen Traum zu verwirklichen.",author:"Les Brown",lang:"de",cat:"Motywacja",tid:103},
  {id:652,text:"Si tu prends la responsabilité de toi-même, tu développeras une faim pour accomplir ton rêve.",author:"Les Brown",lang:"fr",cat:"Motywacja",tid:103},
  {id:653,text:"Si te haces responsable de ti mismo, desarrollarás un hambre por cumplir tu sueño.",author:"Les Brown",lang:"es",cat:"Motywacja",tid:103},
  {id:654,text:"Если ты возьмёшь на себя ответственность за себя, в тебе разовьётся жажда осуществить свою мечту.",author:"Лес Браун",lang:"ru",cat:"Motywacja",tid:103},
  // Grupa 104 — Les Brown, „Shoot for the moon…"
  {id:655,text:"Celuj w księżyc, bo nawet jeśli nie trafisz, wylądujesz wśród gwiazd.",author:"Les Brown",lang:"pl",cat:"Motywacja",tid:104},
  {id:656,text:"Shoot for the moon, because even if you miss, you'll land among the stars.",author:"Les Brown",lang:"en",cat:"Motywacja",tid:104},
  {id:657,text:"Ziel auf den Mond, denn selbst wenn du ihn verfehlst, landest du unter den Sternen.",author:"Les Brown",lang:"de",cat:"Motywacja",tid:104},
  {id:658,text:"Vise la lune, car même si tu la manques, tu atterriras parmi les étoiles.",author:"Les Brown",lang:"fr",cat:"Motywacja",tid:104},
  {id:659,text:"Apunta a la luna, porque incluso si fallas, aterrizarás entre las estrellas.",author:"Les Brown",lang:"es",cat:"Motywacja",tid:104},
  {id:660,text:"Целься в луну, потому что даже если промахнёшься, окажешься среди звёзд.",author:"Лес Браун",lang:"ru",cat:"Motywacja",tid:104},
  // Grupa 105 — Les Brown, „Don't let someone else's opinion become your reality."
  {id:661,text:"Nie pozwól, by cudza opinia stała się twoją rzeczywistością.",author:"Les Brown",lang:"pl",cat:"Mądrość",tid:105},
  {id:662,text:"Don't let someone else's opinion become your reality.",author:"Les Brown",lang:"en",cat:"Mądrość",tid:105},
  {id:663,text:"Lass nicht zu, dass die Meinung eines anderen zu deiner Realität wird.",author:"Les Brown",lang:"de",cat:"Mądrość",tid:105},
  {id:664,text:"Ne laisse pas l'opinion de quelqu'un d'autre devenir ta réalité.",author:"Les Brown",lang:"fr",cat:"Mądrość",tid:105},
  {id:665,text:"No permitas que la opinión de otro se convierta en tu realidad.",author:"Les Brown",lang:"es",cat:"Mądrość",tid:105},
  {id:666,text:"Не позволяй чужому мнению стать твоей реальностью.",author:"Лес Браун",lang:"ru",cat:"Mądrość",tid:105},
  // Grupa 106 — Anthony de Mello, „Widzimy ludzi i rzeczy nie takimi, jakimi są…"
  {id:667,text:"Widzimy ludzi i rzeczy nie takimi, jakimi są, ale takimi, jakimi my jesteśmy.",author:"Anthony de Mello",lang:"pl",cat:"Filozofia",tid:106},
  {id:668,text:"We see people and things not as they are, but as we are.",author:"Anthony de Mello",lang:"en",cat:"Filozofia",tid:106},
  {id:669,text:"Wir sehen Menschen und Dinge nicht so, wie sie sind, sondern so, wie wir sind.",author:"Anthony de Mello",lang:"de",cat:"Filozofia",tid:106},
  {id:670,text:"Nous voyons les gens et les choses non pas tels qu'ils sont, mais tels que nous sommes.",author:"Anthony de Mello",lang:"fr",cat:"Filozofia",tid:106},
  {id:671,text:"Vemos a las personas y las cosas no como son, sino como somos nosotros.",author:"Anthony de Mello",lang:"es",cat:"Filozofia",tid:106},
  {id:672,text:"Мы видим людей и вещи не такими, какие они есть, а такими, какие мы сами.",author:"Энтони де Мелло",lang:"ru",cat:"Filozofia",tid:106},
  // Grupa 107 — Krzysztof Czubaszek, „Jesteśmy zdolni do wszystkiego…"
  {id:673,text:"Jesteśmy zdolni do wszystkiego. Przed erupcją zła nie chroni nas narodowość, religia, wykształcenie, czasy, w których żyjemy. Siedzimy, jak zawsze, na beczce prochu. Nie wiadomo, kiedy i z której strony padnie iskra. Wystrzegajmy się jej z całych sił. Może nas uratować tylko otwartość na inność, tolerancja dla cudzych zapatrywań, szacunek dla każdego bez względu na to, skąd pochodzi i jakie wartości wyznaje. Zapiekła wsobność prędzej czy później nas zabije.",author:"Krzysztof Czubaszek",lang:"pl",cat:"Filozofia",tid:107},
  {id:674,text:"We are capable of anything. Nothing protects us from the eruption of evil — neither nationality, religion, education, nor the times we live in. We sit, as always, on a barrel of gunpowder. It is not known when or from which direction the spark will fall. Let us guard against it with all our strength. We can only be saved by openness to otherness, tolerance for the views of others, respect for everyone regardless of where they come from and what values they hold. Stubborn insularity will sooner or later kill us.",author:"Krzysztof Czubaszek",lang:"en",cat:"Filozofia",tid:107},
  {id:675,text:"Wir sind zu allem fähig. Vor dem Ausbruch des Bösen schützen uns weder Nationalität, Religion, Bildung noch die Zeit, in der wir leben. Wir sitzen, wie immer, auf einem Pulverfass. Man weiß nicht, wann und von welcher Seite der Funke fallen wird. Hüten wir uns mit aller Kraft davor. Retten kann uns nur Offenheit für das Andersartige, Toleranz für die Ansichten anderer, Respekt für jeden, unabhängig davon, woher er kommt und welche Werte er vertritt. Verbissene Selbstbezogenheit wird uns früher oder später töten.",author:"Krzysztof Czubaszek",lang:"de",cat:"Filozofia",tid:107},
  {id:676,text:"Nous sommes capables de tout. Aucune nationalité, religion, éducation, ni l'époque dans laquelle nous vivons ne nous protège de l'éruption du mal. Nous sommes assis, comme toujours, sur un baril de poudre. On ne sait pas quand et de quel côté l'étincelle tombera. Gardons-nous-en de toutes nos forces. Seule peut nous sauver l'ouverture à l'altérité, la tolérance pour les opinions des autres, le respect pour chacun, indépendamment d'où il vient et des valeurs qu'il professe. L'enfermement obstiné nous tuera tôt ou tard.",author:"Krzysztof Czubaszek",lang:"fr",cat:"Filozofia",tid:107},
  {id:677,text:"Somos capaces de todo. Ni la nacionalidad, ni la religión, ni la educación, ni los tiempos en que vivimos nos protegen de la erupción del mal. Estamos sentados, como siempre, sobre un barril de pólvora. No se sabe cuándo ni de qué lado caerá la chispa. Guardémonos de ella con todas nuestras fuerzas. Solo nos puede salvar la apertura a lo diferente, la tolerancia hacia las opiniones ajenas, el respeto por cada persona, sin importar de dónde venga y qué valores profese. La cerrazón obstinada nos matará tarde o temprano.",author:"Krzysztof Czubaszek",lang:"es",cat:"Filozofia",tid:107},
  {id:678,text:"Мы способны на всё. От извержения зла нас не защищают ни национальность, ни религия, ни образование, ни эпоха, в которой мы живём. Мы сидим, как всегда, на пороховой бочке. Неизвестно, когда и с какой стороны упадёт искра. Будем избегать её всеми силами. Спасти нас может только открытость к инаковости, терпимость к чужим взглядам, уважение к каждому, независимо от того, откуда он родом и какие ценности исповедует. Ожесточённая замкнутость рано или поздно нас убьёт.",author:"Кшиштоф Чубашек",lang:"ru",cat:"Filozofia",tid:107},
  // Grupa 108 — Joanne Harris, „Z czekoladą jest jak z życiem…"
  {id:679,text:"Z czekoladą jest jak z życiem — nie poczulibyśmy w pełni jego słodkiego smaku, gdyby nie odrobina goryczy, której czasem musimy doświadczyć.",author:"Joanne Harris",lang:"pl",cat:"Życie",tid:108},
  {id:680,text:"Chocolate is like life — we wouldn't fully taste its sweet flavor if not for the bit of bitterness we sometimes must experience.",author:"Joanne Harris",lang:"en",cat:"Życie",tid:108},
  {id:681,text:"Mit Schokolade ist es wie mit dem Leben — wir würden seinen süßen Geschmack nicht voll spüren, wenn da nicht die Prise Bitterkeit wäre, die wir manchmal erfahren müssen.",author:"Joanne Harris",lang:"de",cat:"Życie",tid:108},
  {id:682,text:"Avec le chocolat, c'est comme avec la vie — nous ne sentirions pas pleinement son goût sucré sans la petite touche d'amertume que nous devons parfois éprouver.",author:"Joanne Harris",lang:"fr",cat:"Życie",tid:108},
  {id:683,text:"Con el chocolate ocurre como con la vida — no sentiríamos plenamente su sabor dulce si no fuera por la pizca de amargor que a veces debemos experimentar.",author:"Joanne Harris",lang:"es",cat:"Życie",tid:108},
  {id:684,text:"С шоколадом, как и с жизнью, — мы не ощутили бы в полной мере его сладкого вкуса, если бы не та доля горечи, которую иногда приходится испытать.",author:"Джоанн Харрис",lang:"ru",cat:"Życie",tid:108},
  // Grupa 109 — George Orwell, „Może to, czego człowiek pragnie najbardziej…"
  {id:685,text:"Może to, czego człowiek pragnie najbardziej, to nie tyle być kochanym, ile rozumianym.",author:"George Orwell",lang:"pl",cat:"Filozofia",tid:109},
  {id:686,text:"Perhaps what a person wants most is not so much to be loved as to be understood.",author:"George Orwell",lang:"en",cat:"Filozofia",tid:109},
  {id:687,text:"Vielleicht wünscht sich der Mensch am meisten, nicht so sehr geliebt, sondern verstanden zu werden.",author:"George Orwell",lang:"de",cat:"Filozofia",tid:109},
  {id:688,text:"Peut-être ce que l'homme désire le plus, ce n'est pas tant d'être aimé que d'être compris.",author:"George Orwell",lang:"fr",cat:"Filozofia",tid:109},
  {id:689,text:"Quizás lo que más desea una persona no es tanto ser amada como ser comprendida.",author:"George Orwell",lang:"es",cat:"Filozofia",tid:109},
  {id:690,text:"Возможно, больше всего человек хочет не столько быть любимым, сколько понятым.",author:"Джордж Оруэлл",lang:"ru",cat:"Filozofia",tid:109},
  // Grupa 110 — Vivian Greene, „Życie nie polega na biernym przeczekaniu burzy…"
  {id:691,text:"Życie nie polega na biernym przeczekaniu burzy. Życie to nauka tańca w deszczu nawet w największą nawałnicę.",author:"Vivian Greene",lang:"pl",cat:"Życie",tid:110},
  {id:692,text:"Life is not about passively waiting out the storm. Life is learning to dance in the rain even in the greatest tempest.",author:"Vivian Greene",lang:"en",cat:"Życie",tid:110},
  {id:693,text:"Das Leben besteht nicht darin, den Sturm passiv abzuwarten. Das Leben ist die Kunst, im Regen zu tanzen — auch im größten Unwetter.",author:"Vivian Greene",lang:"de",cat:"Życie",tid:110},
  {id:694,text:"La vie ne consiste pas à attendre passivement que la tempête passe. La vie, c'est apprendre à danser sous la pluie, même dans la pire tourmente.",author:"Vivian Greene",lang:"fr",cat:"Życie",tid:110},
  {id:695,text:"La vida no consiste en esperar pasivamente a que pase la tormenta. La vida es aprender a bailar bajo la lluvia, incluso en la peor tempestad.",author:"Vivian Greene",lang:"es",cat:"Życie",tid:110},
  {id:696,text:"Жизнь — это не пассивное ожидание окончания бури. Жизнь — это умение танцевать под дождём даже в самую сильную непогоду.",author:"Вивиан Грин",lang:"ru",cat:"Życie",tid:110},
  // Grupa 111 — Isaac Newton, „To, co my wiemy, to tylko kropelka…"
  {id:697,text:"To, co my wiemy, to tylko kropelka. To, czego nie wiemy, to cały ocean.",author:"Isaac Newton",lang:"pl",cat:"Filozofia",tid:111},
  {id:698,text:"What we know is a drop. What we don't know is an ocean.",author:"Isaac Newton",lang:"en",cat:"Filozofia",tid:111},
  {id:699,text:"Was wir wissen, ist ein Tropfen. Was wir nicht wissen, ist ein Ozean.",author:"Isaac Newton",lang:"de",cat:"Filozofia",tid:111},
  {id:700,text:"Ce que nous savons est une goutte d'eau. Ce que nous ignorons est un océan.",author:"Isaac Newton",lang:"fr",cat:"Filozofia",tid:111},
  {id:701,text:"Lo que sabemos es una gota. Lo que no sabemos es un océano.",author:"Isaac Newton",lang:"es",cat:"Filozofia",tid:111},
  {id:702,text:"То, что мы знаем, — это капля. То, чего мы не знаем, — это океан.",author:"Исаак Ньютон",lang:"ru",cat:"Filozofia",tid:111},
  // Grupa 112 — Autor nieznany, „Strach to najgorszy wróg postępu."
  {id:703,text:"Strach to najgorszy wróg postępu.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:112},
  {id:704,text:"Fear is the worst enemy of progress.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:112},
  {id:705,text:"Angst ist der schlimmste Feind des Fortschritts.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:112},
  {id:706,text:"La peur est le pire ennemi du progrès.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:112},
  {id:707,text:"El miedo es el peor enemigo del progreso.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:112},
  {id:708,text:"Страх — худший враг прогресса.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:112},
  // Grupa 113 — Daniel Ostrowski, „Trzeba się wysypiać, bo się posypiemy."
  {id:709,text:"Trzeba się wysypiać, bo się posypiemy.",author:"Daniel Ostrowski",lang:"pl",cat:"Mądrość",tid:113},
  {id:710,text:"We need to get enough sleep, otherwise we'll fall apart.",author:"Daniel Ostrowski",lang:"en",cat:"Mądrość",tid:113},
  {id:711,text:"Wir müssen ausreichend schlafen, sonst zerfallen wir.",author:"Daniel Ostrowski",lang:"de",cat:"Mądrość",tid:113},
  {id:712,text:"Il faut bien dormir, sinon nous allons nous effondrer.",author:"Daniel Ostrowski",lang:"fr",cat:"Mądrość",tid:113},
  {id:713,text:"Hay que dormir lo suficiente, o nos vendremos abajo.",author:"Daniel Ostrowski",lang:"es",cat:"Mądrość",tid:113},
  {id:714,text:"Нужно высыпаться, иначе мы рассыплемся.",author:"Даниэль Островский",lang:"ru",cat:"Mądrość",tid:113},
  // Grupa 114 — Salma Hayek, „If I start insulting you in another language…"
  {id:715,text:"Jeśli zacznę cię obrażać w innym języku, nic nie poczujesz. Te słowa nic dla ciebie nie znaczą, bo to ty nadajesz im znaczenie. Ja wiem, co znaczą. Ale nie ma znaczenia, jak głośno będę je do ciebie wykrzykiwać — możesz zacząć się śmiać. Weź ich słowa, odbierz im wartość i upuść je na podłogę. Jeśli to zrobisz, opadną na ziemię. Nigdy cię nie dotkną. Są niczym.",author:"Salma Hayek",lang:"pl",cat:"Mądrość",tid:114},
  {id:716,text:"If I start insulting you in another language, you feel nothing. They don't mean anything to you because it's you who puts the meaning to it. Me, I know what it means. But it doesn't matter how hard I scream them to you, you might start laughing. Take their words, take away the value of the words and drop them to the floor. If you take that away, they fall to the ground. They never get to touch you. They are nothing.",author:"Salma Hayek",lang:"en",cat:"Mądrość",tid:114},
  {id:717,text:"Wenn ich anfange, dich in einer anderen Sprache zu beleidigen, fühlst du nichts. Sie bedeuten dir nichts, denn du bist es, der ihnen Bedeutung verleiht. Ich weiß, was sie bedeuten. Aber egal, wie laut ich sie dir entgegenschreie — du könntest anfangen zu lachen. Nimm ihre Worte, nimm ihnen den Wert und lass sie auf den Boden fallen. Wenn du das tust, fallen sie zu Boden. Sie können dich nie berühren. Sie sind nichts.",author:"Salma Hayek",lang:"de",cat:"Mądrość",tid:114},
  {id:718,text:"Si je commence à t'insulter dans une autre langue, tu ne ressens rien. Ces mots ne signifient rien pour toi, parce que c'est toi qui leur donnes du sens. Moi, je sais ce qu'ils veulent dire. Mais peu importe avec quelle force je te les hurle — tu pourrais te mettre à rire. Prends leurs mots, retire-leur leur valeur et laisse-les tomber au sol. Si tu fais cela, ils tombent à terre. Ils ne peuvent jamais t'atteindre. Ils ne sont rien.",author:"Salma Hayek",lang:"fr",cat:"Mądrość",tid:114},
  {id:719,text:"Si empiezo a insultarte en otro idioma, no sientes nada. Esas palabras no significan nada para ti, porque eres tú quien les da significado. Yo sé lo que significan. Pero no importa con qué fuerza te las grite — podrías empezar a reír. Toma sus palabras, quítales su valor y déjalas caer al suelo. Si haces eso, caen al suelo. Nunca pueden tocarte. No son nada.",author:"Salma Hayek",lang:"es",cat:"Mądrość",tid:114},
  {id:720,text:"Если я начну оскорблять тебя на другом языке, ты ничего не почувствуешь. Эти слова для тебя ничего не значат, потому что именно ты придаёшь им значение. Я знаю, что они значат. Но неважно, как громко я буду их тебе кричать — ты можешь начать смеяться. Возьми их слова, отбери у них ценность и урони их на пол. Если ты это сделаешь, они упадут на землю. Они никогда не смогут тебя коснуться. Они ничто.",author:"Сальма Хайек",lang:"ru",cat:"Mądrość",tid:114},
  // Grupa 115 — Eduardo Galeano, „Żyjemy w świecie, w którym pogrzeb jest ważniejszy…"
  {id:721,text:"Żyjemy w świecie, w którym pogrzeb jest ważniejszy od zmarłego, wesele jest ważniejsze od miłości, wygląd ważniejszy jest od intelektu. Żyjemy w kulturze opakowań, która gardzi zawartością.",author:"Eduardo Galeano",lang:"pl",cat:"Filozofia",tid:115},
  {id:722,text:"We live in a world where the funeral matters more than the dead, the wedding more than love and the physical rather than the intellect. We live in the container culture, which despises the content.",author:"Eduardo Galeano",lang:"en",cat:"Filozofia",tid:115},
  {id:723,text:"Wir leben in einer Welt, in der die Beerdigung wichtiger ist als der Verstorbene, die Hochzeit wichtiger als die Liebe, das Äußere wichtiger als der Intellekt. Wir leben in einer Verpackungskultur, die den Inhalt verachtet.",author:"Eduardo Galeano",lang:"de",cat:"Filozofia",tid:115},
  {id:724,text:"Nous vivons dans un monde où l'enterrement compte plus que le défunt, le mariage plus que l'amour, l'apparence plus que l'intellect. Nous vivons dans la culture de l'emballage, qui méprise le contenu.",author:"Eduardo Galeano",lang:"fr",cat:"Filozofia",tid:115},
  {id:725,text:"Vivimos en un mundo donde el funeral importa más que el muerto, la boda más que el amor, la apariencia más que el intelecto. Vivimos en la cultura del envase, que desprecia el contenido.",author:"Eduardo Galeano",lang:"es",cat:"Filozofia",tid:115},
  {id:726,text:"Мы живём в мире, в котором похороны важнее умершего, свадьба важнее любви, внешность важнее интеллекта. Мы живём в культуре упаковок, которая презирает содержимое.",author:"Эдуардо Галеано",lang:"ru",cat:"Filozofia",tid:115},
  // Grupa 116 — Dwight Eisenhower, „Pesymizm nigdy nie wygrał żadnej bitwy."
  {id:727,text:"Pesymizm nigdy nie wygrał żadnej bitwy.",author:"Dwight Eisenhower",lang:"pl",cat:"Motywacja",tid:116},
  {id:728,text:"Pessimism never won any battle.",author:"Dwight Eisenhower",lang:"en",cat:"Motywacja",tid:116},
  {id:729,text:"Pessimismus hat noch nie eine Schlacht gewonnen.",author:"Dwight Eisenhower",lang:"de",cat:"Motywacja",tid:116},
  {id:730,text:"Le pessimisme n'a jamais gagné aucune bataille.",author:"Dwight Eisenhower",lang:"fr",cat:"Motywacja",tid:116},
  {id:731,text:"El pesimismo nunca ha ganado ninguna batalla.",author:"Dwight Eisenhower",lang:"es",cat:"Motywacja",tid:116},
  {id:732,text:"Пессимизм никогда не выигрывал ни одной битвы.",author:"Дуайт Эйзенхауэр",lang:"ru",cat:"Motywacja",tid:116},
  // Grupa 117 — Giacomo Casanova, „Strzeż się tego, kto czytał tylko jedną książkę."
  {id:733,text:"Strzeż się tego, kto czytał tylko jedną książkę.",author:"Giacomo Casanova",lang:"pl",cat:"Mądrość",tid:117},
  {id:734,text:"Beware the man who has read only one book.",author:"Giacomo Casanova",lang:"en",cat:"Mądrość",tid:117},
  {id:735,text:"Hüte dich vor dem, der nur ein einziges Buch gelesen hat.",author:"Giacomo Casanova",lang:"de",cat:"Mądrość",tid:117},
  {id:736,text:"Méfie-toi de celui qui n'a lu qu'un seul livre.",author:"Giacomo Casanova",lang:"fr",cat:"Mądrość",tid:117},
  {id:737,text:"Cuidado con el hombre que ha leído un solo libro.",author:"Giacomo Casanova",lang:"es",cat:"Mądrość",tid:117},
  {id:738,text:"Остерегайся того, кто прочитал лишь одну книгу.",author:"Джакомо Казанова",lang:"ru",cat:"Mądrość",tid:117},
  // Grupa 118 — Andrzej Sapkowski, „Ten, kto raz nie złamie w sobie tchórzostwa…"
  {id:739,text:"Ten, kto raz nie złamie w sobie tchórzostwa, będzie umierał ze strachu do końca swoich dni.",author:"Andrzej Sapkowski",lang:"pl",cat:"Mądrość",tid:118},
  {id:740,text:"He who does not break cowardice in himself once will die of fear until the end of his days.",author:"Andrzej Sapkowski",lang:"en",cat:"Mądrość",tid:118},
  {id:741,text:"Wer die Feigheit in sich nicht ein Mal bricht, wird bis ans Ende seiner Tage vor Angst sterben.",author:"Andrzej Sapkowski",lang:"de",cat:"Mądrość",tid:118},
  {id:742,text:"Celui qui ne brise pas une fois la lâcheté en lui mourra de peur jusqu'à la fin de ses jours.",author:"Andrzej Sapkowski",lang:"fr",cat:"Mądrość",tid:118},
  {id:743,text:"Quien no rompa una vez la cobardía en sí mismo, morirá de miedo hasta el fin de sus días.",author:"Andrzej Sapkowski",lang:"es",cat:"Mądrość",tid:118},
  {id:744,text:"Тот, кто хоть раз не сломит в себе трусость, будет умирать от страха до конца своих дней.",author:"Анджей Сапковский",lang:"ru",cat:"Mądrość",tid:118},
  // Grupa 119 — Brian Tracy, „Twoje życie staje się lepsze, tylko gdy Ty stajesz się lepszym"
  {id:745,text:"Twoje życie staje się lepsze, tylko gdy Ty stajesz się lepszym.",author:"Brian Tracy",lang:"pl",cat:"Motywacja",tid:119},
  {id:746,text:"Your life only gets better when you get better.",author:"Brian Tracy",lang:"en",cat:"Motywacja",tid:119},
  {id:747,text:"Dein Leben wird nur dann besser, wenn du selbst besser wirst.",author:"Brian Tracy",lang:"de",cat:"Motywacja",tid:119},
  {id:748,text:"Ta vie ne s'améliore que lorsque tu t'améliores toi-même.",author:"Brian Tracy",lang:"fr",cat:"Motywacja",tid:119},
  {id:749,text:"Tu vida solo mejora cuando tú mejoras.",author:"Brian Tracy",lang:"es",cat:"Motywacja",tid:119},
  {id:750,text:"Ваша жизнь станет лучше только после того, как лучше станете вы.",author:"Брайан Трейси",lang:"ru",cat:"Motywacja",tid:119},
  // Grupa 120 — Robert Makłowicz, „Europa to nasz wspólny dom…"
  {id:751,text:"Europa to nasz wspólny dom, do którego przez lata bezskutecznie pukaliśmy. Jesteśmy w nim w końcu i nie pozwólmy tego schrzanić. Chrzan jest dobry, ale nacjonalizm to zguba dobrego smaku.",author:"Robert Makłowicz",lang:"pl",cat:"Mądrość",tid:120},
  {id:752,text:"Europe is our common home, on whose door we knocked in vain for years. We are finally inside, and let's not screw this up. Horseradish is good, but nationalism is the ruin of good taste.",author:"Robert Makłowicz",lang:"en",cat:"Mądrość",tid:120},
  {id:753,text:"Europa ist unser gemeinsames Zuhause, an dessen Tür wir jahrelang vergeblich geklopft haben. Wir sind endlich darin — lassen wir es uns nicht verderben. Meerrettich ist gut, aber Nationalismus ist der Untergang des guten Geschmacks.",author:"Robert Makłowicz",lang:"de",cat:"Mądrość",tid:120},
  {id:754,text:"L'Europe est notre maison commune, à la porte de laquelle nous avons frappé en vain pendant des années. Nous y sommes enfin — ne gâchons pas tout. Le raifort est bon, mais le nationalisme est la perte du bon goût.",author:"Robert Makłowicz",lang:"fr",cat:"Mądrość",tid:120},
  {id:755,text:"Europa es nuestra casa común, a cuya puerta llamamos en vano durante años. Por fin estamos dentro — no lo estropeemos. El rábano picante es bueno, pero el nacionalismo es la ruina del buen gusto.",author:"Robert Makłowicz",lang:"es",cat:"Mądrość",tid:120},
  {id:756,text:"Европа — наш общий дом, в дверь которого мы много лет безуспешно стучались. Мы наконец-то внутри — давайте этого не испортим. Хрен — это хорошо, но национализм — это погибель хорошего вкуса.",author:"Роберт Макловиц",lang:"ru",cat:"Mądrość",tid:120},
  // Grupa 121 — C.J. Tudor, „Bycie dobrym człowiekiem nie polega na śpiewaniu hymnów…"
  {id:757,text:"Bycie dobrym człowiekiem nie polega na śpiewaniu hymnów czy modleniu się do jakiegoś mitycznego bóstwa. Nie chodzi o noszenie krzyżyka i chodzenie co niedziela do kościoła, ale o to, jak traktujesz innych ludzi.",author:"C.J. Tudor",lang:"pl",cat:"Mądrość",tid:121},
  {id:758,text:"Being a good person doesn't mean singing hymns or praying to some mythical deity. It's not about wearing a cross and going to church every Sunday — it's about how you treat other people.",author:"C.J. Tudor",lang:"en",cat:"Mądrość",tid:121},
  {id:759,text:"Ein guter Mensch zu sein bedeutet nicht, Hymnen zu singen oder zu einer mythischen Gottheit zu beten. Es geht nicht darum, ein Kreuz zu tragen und jeden Sonntag in die Kirche zu gehen, sondern darum, wie du andere Menschen behandelst.",author:"C.J. Tudor",lang:"de",cat:"Mądrość",tid:121},
  {id:760,text:"Être une bonne personne ne consiste pas à chanter des hymnes ou à prier une divinité mythique. Il ne s'agit pas de porter une croix et d'aller à l'église chaque dimanche, mais de la façon dont tu traites les autres.",author:"C.J. Tudor",lang:"fr",cat:"Mądrość",tid:121},
  {id:761,text:"Ser una buena persona no consiste en cantar himnos o rezar a alguna deidad mítica. No se trata de llevar una cruz e ir a la iglesia cada domingo, sino de cómo tratas a los demás.",author:"C.J. Tudor",lang:"es",cat:"Mądrość",tid:121},
  {id:762,text:"Быть хорошим человеком — это не петь гимны и не молиться какому-то мифическому божеству. Дело не в том, чтобы носить крестик и каждое воскресенье ходить в церковь, а в том, как ты относишься к другим людям.",author:"К. Дж. Тюдор",lang:"ru",cat:"Mądrość",tid:121},
  // Grupa 122 — Autor nieznany, „Las codziennie się zmniejszał…"
  {id:763,text:"Las codziennie się zmniejszał, ale drzewa z uporem głosowały na siekierę, bo miała uchwyt z drewna.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:122},
  {id:764,text:"The forest was shrinking every day, but the trees stubbornly voted for the axe, because it had a wooden handle.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:122},
  {id:765,text:"Der Wald schrumpfte jeden Tag, aber die Bäume stimmten beharrlich für die Axt, weil sie einen Stiel aus Holz hatte.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:122},
  {id:766,text:"La forêt diminuait chaque jour, mais les arbres votaient obstinément pour la hache, parce qu'elle avait un manche en bois.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:122},
  {id:767,text:"El bosque se reducía cada día, pero los árboles votaban tercamente por el hacha, porque tenía un mango de madera.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:122},
  {id:768,text:"Лес каждый день уменьшался, но деревья упрямо голосовали за топор, потому что у него была деревянная рукоятка.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:122},
  // Grupa 123 — Daniel Ostrowski (27.07.2018), „The sunrises and sunsets are always beautiful…"
  {id:769,text:"Wschody i zachody słońca są zawsze piękne, nowe i niepowtarzalne. Niebo jest malowane kolorami natury, których nie da się odtworzyć. Aparat może uchwycić część z tego, ale tego, co widzą nasze oczy, nigdy nie da się naprawdę zatrzymać.",author:"Daniel Ostrowski",lang:"pl",cat:"Życie",tid:123},
  {id:770,text:"The sunrises and sunsets are always beautiful, new and unique. The sky is painted with nature's colours that cannot be reproduced. A camera can catch some of it, but what our eyes are able to see can never truly be captured.",author:"Daniel Ostrowski",lang:"en",cat:"Życie",tid:123},
  {id:771,text:"Sonnenauf- und -untergänge sind immer schön, neu und einzigartig. Der Himmel ist mit den Farben der Natur gemalt, die sich nicht nachbilden lassen. Eine Kamera kann etwas davon einfangen, aber was unsere Augen zu sehen vermögen, lässt sich niemals wirklich festhalten.",author:"Daniel Ostrowski",lang:"de",cat:"Życie",tid:123},
  {id:772,text:"Les levers et couchers de soleil sont toujours beaux, nouveaux et uniques. Le ciel est peint avec les couleurs de la nature qui ne peuvent être reproduites. Un appareil photo peut en saisir une partie, mais ce que nos yeux peuvent voir ne peut jamais être véritablement capturé.",author:"Daniel Ostrowski",lang:"fr",cat:"Życie",tid:123},
  {id:773,text:"Los amaneceres y atardeceres siempre son hermosos, nuevos y únicos. El cielo está pintado con los colores de la naturaleza que no pueden reproducirse. Una cámara puede captar algo de ello, pero lo que nuestros ojos pueden ver nunca puede ser verdaderamente capturado.",author:"Daniel Ostrowski",lang:"es",cat:"Życie",tid:123},
  {id:774,text:"Восходы и закаты солнца всегда прекрасны, новы и неповторимы. Небо расписано красками природы, которые невозможно воссоздать. Камера может уловить часть этого, но того, что видят наши глаза, никогда нельзя по-настоящему запечатлеть.",author:"Даниэль Островский",lang:"ru",cat:"Życie",tid:123},
  // Grupa 124 — Sandy Gingras, „At the beach, life is different…"
  {id:775,text:"Na plaży życie jest inne. Czas nie biegnie z godziny na godzinę, ale od nastroju do chwili. Żyjemy zgodnie z prądami, planujemy według przypływów i podążamy za słońcem.",author:"Sandy Gingras",lang:"pl",cat:"Życie",tid:124},
  {id:776,text:"At the beach, life is different. Time doesn't move hour to hour but mood to moment. We live by the currents, plan by the tides and follow the sun.",author:"Sandy Gingras",lang:"en",cat:"Życie",tid:124},
  {id:777,text:"Am Strand ist das Leben anders. Die Zeit verläuft nicht von Stunde zu Stunde, sondern von Stimmung zu Augenblick. Wir leben nach den Strömungen, planen nach den Gezeiten und folgen der Sonne.",author:"Sandy Gingras",lang:"de",cat:"Życie",tid:124},
  {id:778,text:"À la plage, la vie est différente. Le temps ne s'écoule pas d'heure en heure, mais d'humeur en instant. Nous vivons au rythme des courants, planifions selon les marées et suivons le soleil.",author:"Sandy Gingras",lang:"fr",cat:"Życie",tid:124},
  {id:779,text:"En la playa, la vida es diferente. El tiempo no avanza de hora en hora, sino de estado de ánimo en momento. Vivimos según las corrientes, planeamos según las mareas y seguimos al sol.",author:"Sandy Gingras",lang:"es",cat:"Życie",tid:124},
  {id:780,text:"На пляже жизнь другая. Время течёт не с часа на час, а от настроения к мгновению. Мы живём по течениям, планируем по приливам и следуем за солнцем.",author:"Сэнди Гинграс",lang:"ru",cat:"Życie",tid:124},
  // Grupa 125 — Nikodem Marszałek, „Gdybyś usłyszał tysiąc razy — nie uda Ci się…"
  {id:781,text:"Gdybyś usłyszał tysiąc razy — nie uda Ci się. To wiesz co? Rób nadal wszystko jak najlepiej potrafisz i pokaż, jak bardzo się mylili. Sukces jest największą dostępną ludzką zemstą.",author:"Nikodem Marszałek",lang:"pl",cat:"Sukces",tid:125},
  {id:782,text:"Even if you hear a thousand times — you won't make it. You know what? Keep doing everything as best you can and show them how wrong they were. Success is the greatest human revenge available.",author:"Nikodem Marszałek",lang:"en",cat:"Sukces",tid:125},
  {id:783,text:"Selbst wenn du tausendmal hörst — du wirst es nicht schaffen. Weißt du was? Mach weiter alles so gut, wie du kannst, und zeig ihnen, wie sehr sie sich geirrt haben. Erfolg ist die größte menschliche Rache, die es gibt.",author:"Nikodem Marszałek",lang:"de",cat:"Sukces",tid:125},
  {id:784,text:"Même si tu entends mille fois — tu ne réussiras pas. Tu sais quoi ? Continue à faire tout du mieux que tu peux et montre-leur à quel point ils se sont trompés. Le succès est la plus grande vengeance humaine qui soit.",author:"Nikodem Marszałek",lang:"fr",cat:"Sukces",tid:125},
  {id:785,text:"Aunque escuches mil veces — no lo lograrás. ¿Sabes qué? Sigue haciendo todo lo mejor que puedas y demuéstrales cuánto se equivocaron. El éxito es la mayor venganza humana disponible.",author:"Nikodem Marszałek",lang:"es",cat:"Sukces",tid:125},
  {id:786,text:"Даже если ты услышишь тысячу раз — у тебя ничего не выйдет. Знаешь что? Продолжай делать всё как можно лучше и покажи им, как сильно они ошибались. Успех — самая великая человеческая месть, которая существует.",author:"Никодем Маршалек",lang:"ru",cat:"Sukces",tid:125},
  // Grupa 126 — Cornelia Funke, „Niektórych książek wystarczy skosztować…" (oryginalnie F. Bacon)
  {id:787,text:"Niektórych książek wystarczy skosztować, inne się połyka, a tylko nieliczne trzeba przeżuć i strawić do końca.",author:"Cornelia Funke",lang:"pl",cat:"Mądrość",tid:126},
  {id:788,text:"Some books are to be tasted, others to be swallowed, and only a few are to be chewed and digested to the end.",author:"Cornelia Funke",lang:"en",cat:"Mądrość",tid:126},
  {id:789,text:"Einige Bücher sollte man nur kosten, andere verschlingen, und nur wenige muss man kauen und bis zum Ende verdauen.",author:"Cornelia Funke",lang:"de",cat:"Mądrość",tid:126},
  {id:790,text:"Certains livres ne sont qu'à goûter, d'autres à avaler, et seuls quelques-uns sont à mâcher et à digérer jusqu'au bout.",author:"Cornelia Funke",lang:"fr",cat:"Mądrość",tid:126},
  {id:791,text:"Algunos libros basta con probarlos, otros se tragan, y solo unos pocos hay que masticarlos y digerirlos hasta el final.",author:"Cornelia Funke",lang:"es",cat:"Mądrość",tid:126},
  {id:792,text:"Некоторые книги достаточно попробовать на вкус, другие можно проглотить, и лишь немногие нужно прожевать и переварить до конца.",author:"Корнелия Функе",lang:"ru",cat:"Mądrość",tid:126},
  // Grupa 127 — Cornelia Funke (Atramentowe serce), „Jeśli weźmiesz w podróż książkę…"
  {id:793,text:"Jeśli weźmiesz w podróż książkę (...) wydarzy się coś dziwnego: książka zacznie gromadzić twoje wspomnienia. Potem wystarczy ją otworzyć i znów znajdziesz się tam, gdzie ją wtedy czytałaś. Ledwie przeczytasz pierwsze słowa, wrócą do ciebie obrazy, zapachy, smak lodów, które wówczas jadłaś... Wierz mi, książka jest jak muchołapka. Wspomnienia najlepiej trzymają się kart pokrytych drukiem.",author:"Cornelia Funke",lang:"pl",cat:"Mądrość",tid:127},
  {id:794,text:"If you take a book on a journey (...) something strange will happen: the book will begin to collect your memories. Then you only need to open it and you will find yourself again where you read it back then. As soon as you read the first words, images will return to you, smells, the taste of the ice cream you were eating then... Believe me, a book is like a flypaper. Memories cling best to pages covered with print.",author:"Cornelia Funke",lang:"en",cat:"Mądrość",tid:127},
  {id:795,text:"Wenn du ein Buch mit auf eine Reise nimmst (...) wird etwas Seltsames geschehen: Das Buch wird anfangen, deine Erinnerungen zu sammeln. Dann musst du es nur aufschlagen und du findest dich wieder dort, wo du es damals gelesen hast. Kaum liest du die ersten Worte, kommen dir die Bilder zurück, die Gerüche, der Geschmack des Eises, das du damals gegessen hast... Glaub mir, ein Buch ist wie ein Fliegenfänger. Erinnerungen halten sich am besten an Seiten voller Druck.",author:"Cornelia Funke",lang:"de",cat:"Mądrość",tid:127},
  {id:796,text:"Si tu emportes un livre en voyage (...) il se passera quelque chose d'étrange : le livre commencera à recueillir tes souvenirs. Ensuite, il te suffira de l'ouvrir et tu te retrouveras à l'endroit où tu le lisais alors. À peine auras-tu lu les premiers mots que les images te reviendront, les odeurs, le goût de la glace que tu mangeais alors... Crois-moi, un livre est comme un papier tue-mouches. Les souvenirs s'accrochent le mieux aux pages couvertes d'imprimés.",author:"Cornelia Funke",lang:"fr",cat:"Mądrość",tid:127},
  {id:797,text:"Si te llevas un libro de viaje (...) sucederá algo extraño: el libro empezará a recopilar tus recuerdos. Luego solo tendrás que abrirlo y volverás a estar donde lo leías entonces. En cuanto leas las primeras palabras, te volverán las imágenes, los olores, el sabor del helado que comías entonces... Créeme, un libro es como un papel matamoscas. Los recuerdos se aferran mejor a las páginas cubiertas de imprenta.",author:"Cornelia Funke",lang:"es",cat:"Mądrość",tid:127},
  {id:798,text:"Если ты возьмёшь в путешествие книгу (...) произойдёт нечто странное: книга начнёт собирать твои воспоминания. Потом достаточно её открыть — и снова окажешься там, где её тогда читала. Едва прочитаешь первые слова, к тебе вернутся образы, запахи, вкус мороженого, которое ты тогда ела... Поверь мне, книга — как липкая лента для мух. Воспоминания лучше всего держатся на страницах, покрытых печатью.",author:"Корнелия Функе",lang:"ru",cat:"Mądrość",tid:127},
  // Grupa 128 — Twyla Tharp, „Art is the only way to run away without leaving home"
  {id:799,text:"Sztuka to jedyny sposób, by uciec z domu, nie wychodząc z niego.",author:"Twyla Tharp",lang:"pl",cat:"Filozofia",tid:128},
  {id:800,text:"Art is the only way to run away without leaving home.",author:"Twyla Tharp",lang:"en",cat:"Filozofia",tid:128},
  {id:801,text:"Kunst ist die einzige Möglichkeit, davonzulaufen, ohne das Zuhause zu verlassen.",author:"Twyla Tharp",lang:"de",cat:"Filozofia",tid:128},
  {id:802,text:"L'art est le seul moyen de fuir sans quitter la maison.",author:"Twyla Tharp",lang:"fr",cat:"Filozofia",tid:128},
  {id:803,text:"El arte es la única forma de escapar sin salir de casa.",author:"Twyla Tharp",lang:"es",cat:"Filozofia",tid:128},
  {id:804,text:"Искусство — единственный способ убежать, не покидая дома.",author:"Туайла Тарп",lang:"ru",cat:"Filozofia",tid:128},
  // Grupa 129 — George Orwell, „Ludzie, którzy głosują na nieudaczników…"
  {id:805,text:"Ludzie, którzy głosują na nieudaczników, złodziei, zdrajców i oszustów, nie są ich ofiarami. Są ich wspólnikami.",author:"George Orwell",lang:"pl",cat:"Mądrość",tid:129},
  {id:806,text:"People who vote for losers, thieves, traitors and frauds are not their victims. They are their accomplices.",author:"George Orwell",lang:"en",cat:"Mądrość",tid:129},
  {id:807,text:"Menschen, die für Versager, Diebe, Verräter und Betrüger stimmen, sind nicht deren Opfer. Sie sind deren Komplizen.",author:"George Orwell",lang:"de",cat:"Mądrość",tid:129},
  {id:808,text:"Les gens qui votent pour des ratés, des voleurs, des traîtres et des escrocs n'en sont pas les victimes. Ils en sont les complices.",author:"George Orwell",lang:"fr",cat:"Mądrość",tid:129},
  {id:809,text:"Las personas que votan por fracasados, ladrones, traidores y estafadores no son sus víctimas. Son sus cómplices.",author:"George Orwell",lang:"es",cat:"Mądrość",tid:129},
  {id:810,text:"Люди, которые голосуют за неудачников, воров, предателей и мошенников, — не их жертвы. Они их сообщники.",author:"Джордж Оруэлл",lang:"ru",cat:"Mądrość",tid:129},
  // Grupa 130 — Andrzej Grabowski, „Oprócz wyższego wykształcenia…"
  {id:811,text:"Oprócz wyższego wykształcenia, dobrze byłoby posiadać jakieś średnie wyobrażenie. I co najmniej podstawowe wychowanie.",author:"Andrzej Grabowski",lang:"pl",cat:"Mądrość",tid:130},
  {id:812,text:"In addition to higher education, it would be good to have some average imagination. And at least primary upbringing.",author:"Andrzej Grabowski",lang:"en",cat:"Mądrość",tid:130},
  {id:813,text:"Neben einer höheren Bildung wäre es gut, eine gewisse mittlere Vorstellungskraft zu besitzen. Und zumindest eine grundlegende Erziehung.",author:"Andrzej Grabowski",lang:"de",cat:"Mądrość",tid:130},
  {id:814,text:"En plus de l'enseignement supérieur, il serait bon d'avoir quelque imagination moyenne. Et au moins une éducation primaire.",author:"Andrzej Grabowski",lang:"fr",cat:"Mądrość",tid:130},
  {id:815,text:"Además de la educación superior, sería bueno tener cierta imaginación media. Y al menos educación primaria.",author:"Andrzej Grabowski",lang:"es",cat:"Mądrość",tid:130},
  {id:816,text:"Помимо высшего образования, неплохо было бы иметь хоть какое-то среднее воображение. И как минимум начальное воспитание.",author:"Анджей Грабовский",lang:"ru",cat:"Mądrość",tid:130},
  // Grupa 131 — Wojciech Smarzowski, „Tak często wstydzę się za swój kraj…"
  {id:817,text:"Tak często wstydzę się za swój kraj, że na pewno jestem patriotą.",author:"Wojciech Smarzowski",lang:"pl",cat:"Filozofia",tid:131},
  {id:818,text:"I am so often ashamed of my country that I am surely a patriot.",author:"Wojciech Smarzowski",lang:"en",cat:"Filozofia",tid:131},
  {id:819,text:"Ich schäme mich so oft für mein Land, dass ich sicher ein Patriot bin.",author:"Wojciech Smarzowski",lang:"de",cat:"Filozofia",tid:131},
  {id:820,text:"J'ai si souvent honte de mon pays que je suis sûrement un patriote.",author:"Wojciech Smarzowski",lang:"fr",cat:"Filozofia",tid:131},
  {id:821,text:"Me avergüenzo tan a menudo de mi país que seguramente soy un patriota.",author:"Wojciech Smarzowski",lang:"es",cat:"Filozofia",tid:131},
  {id:822,text:"Я так часто стыжусь за свою страну, что наверняка я патриот.",author:"Войцех Смажовский",lang:"ru",cat:"Filozofia",tid:131},
  // Grupa 132 — ojciec Ludwik Wiśniewski, „Oto na naszych oczach umiera w Polsce chrześcijaństwo…"
  {id:823,text:"Oto na naszych oczach umiera w Polsce chrześcijaństwo. I nie jest to wynik propagandy libertyńskiej, zabiegów kół masońskich czy międzynarodowych spisków. Chrześcijaństwo wykorzeniamy my sami, duchowni i najgorliwsi członkowie Kościoła, własnymi rękami i na własne życzenie.",author:"ojciec Ludwik Wiśniewski",lang:"pl",cat:"Filozofia",tid:132},
  {id:824,text:"Here, before our eyes, Christianity is dying in Poland. And it is not the result of libertine propaganda, the manoeuvres of Masonic circles, or international conspiracies. Christianity is being uprooted by ourselves — clergy and the most zealous members of the Church — with our own hands and by our own request.",author:"Father Ludwik Wiśniewski",lang:"en",cat:"Filozofia",tid:132},
  {id:825,text:"Hier, vor unseren Augen, stirbt das Christentum in Polen. Und es ist nicht das Ergebnis libertärer Propaganda, der Bemühungen freimaurerischer Zirkel oder internationaler Verschwörungen. Das Christentum entwurzeln wir selbst — Geistliche und die eifrigsten Mitglieder der Kirche — mit eigenen Händen und auf eigenen Wunsch.",author:"Pater Ludwik Wiśniewski",lang:"de",cat:"Filozofia",tid:132},
  {id:826,text:"Voici sous nos yeux le christianisme qui meurt en Pologne. Et ce n'est pas le résultat d'une propagande libertine, des manœuvres des cercles maçonniques ou de complots internationaux. Le christianisme, nous le déracinons nous-mêmes — clergé et membres les plus zélés de l'Église — de nos propres mains et à notre propre demande.",author:"père Ludwik Wiśniewski",lang:"fr",cat:"Filozofia",tid:132},
  {id:827,text:"He aquí que ante nuestros ojos muere el cristianismo en Polonia. Y no es el resultado de propaganda libertina, de acciones de círculos masónicos o de conspiraciones internacionales. El cristianismo lo desarraigamos nosotros mismos — clérigos y los más fervorosos miembros de la Iglesia — con nuestras propias manos y por nuestro propio deseo.",author:"padre Ludwik Wiśniewski",lang:"es",cat:"Filozofia",tid:132},
  {id:828,text:"Вот на наших глазах умирает в Польше христианство. И это не результат либертинской пропаганды, действий масонских лож или международных заговоров. Христианство искореняем мы сами — духовенство и самые ревностные члены Церкви — собственными руками и по собственному желанию.",author:"отец Людвик Вишневский",lang:"ru",cat:"Filozofia",tid:132},
  // Grupa 133 — ojciec Ludwik Wiśniewski, „Co to są wartości chrześcijańskie?…"
  {id:829,text:"Co to są wartości chrześcijańskie? Ja nie wiem. Jeżeli chcemy budować świat, nie tylko naszą ojczyznę, ale świat — to nie możemy budować go ani na wartościach chrześcijańskich, ani na wartościach buddyjskich, ani na wartościach islamskich — tylko ludzkich, ogólnoludzkich.",author:"ojciec Ludwik Wiśniewski",lang:"pl",cat:"Filozofia",tid:133},
  {id:830,text:"What are Christian values? I don't know. If we want to build a world — not only our homeland, but the world — we cannot build it on Christian values, nor on Buddhist values, nor on Islamic values — only on human, universal values.",author:"Father Ludwik Wiśniewski",lang:"en",cat:"Filozofia",tid:133},
  {id:831,text:"Was sind christliche Werte? Ich weiß es nicht. Wenn wir die Welt bauen wollen — nicht nur unser Vaterland, sondern die Welt — dann können wir sie weder auf christlichen Werten, noch auf buddhistischen Werten, noch auf islamischen Werten errichten — sondern nur auf menschlichen, allgemeinmenschlichen Werten.",author:"Pater Ludwik Wiśniewski",lang:"de",cat:"Filozofia",tid:133},
  {id:832,text:"Que sont les valeurs chrétiennes ? Je ne sais pas. Si nous voulons construire un monde — pas seulement notre patrie, mais le monde — nous ne pouvons le construire ni sur les valeurs chrétiennes, ni sur les valeurs bouddhistes, ni sur les valeurs islamiques — mais seulement sur des valeurs humaines, universelles.",author:"père Ludwik Wiśniewski",lang:"fr",cat:"Filozofia",tid:133},
  {id:833,text:"¿Qué son los valores cristianos? No lo sé. Si queremos construir un mundo — no solo nuestra patria, sino el mundo — no podemos construirlo ni sobre valores cristianos, ni sobre valores budistas, ni sobre valores islámicos — sino solo sobre valores humanos, universales.",author:"padre Ludwik Wiśniewski",lang:"es",cat:"Filozofia",tid:133},
  {id:834,text:"Что такое христианские ценности? Я не знаю. Если мы хотим построить мир — не только нашу родину, но весь мир — мы не можем строить его ни на христианских ценностях, ни на буддийских ценностях, ни на исламских ценностях — а только на человеческих, общечеловеческих.",author:"отец Людвик Вишневский",lang:"ru",cat:"Filozofia",tid:133},
  // Grupa 134 — ojciec Ludwik Wiśniewski, „Kochać to znaczy…"
  {id:835,text:"Kochać to znaczy objawiać danemu człowiekowi, że jest wartościowy, jest godny miłości, jest piękny.",author:"ojciec Ludwik Wiśniewski",lang:"pl",cat:"Miłość",tid:134},
  {id:836,text:"To love is to reveal to a given person that they are valuable, worthy of love, beautiful.",author:"Father Ludwik Wiśniewski",lang:"en",cat:"Miłość",tid:134},
  {id:837,text:"Lieben heißt, einem Menschen zu offenbaren, dass er wertvoll ist, der Liebe würdig ist, schön ist.",author:"Pater Ludwik Wiśniewski",lang:"de",cat:"Miłość",tid:134},
  {id:838,text:"Aimer, c'est révéler à une personne donnée qu'elle a de la valeur, qu'elle est digne d'amour, qu'elle est belle.",author:"père Ludwik Wiśniewski",lang:"fr",cat:"Miłość",tid:134},
  {id:839,text:"Amar es revelar a una persona dada que es valiosa, digna de amor, hermosa.",author:"padre Ludwik Wiśniewski",lang:"es",cat:"Miłość",tid:134},
  {id:840,text:"Любить — это значит являть данному человеку, что он ценен, достоин любви, прекрасен.",author:"отец Людвик Вишневский",lang:"ru",cat:"Miłość",tid:134},
  // Grupa 135 — Daniel Ostrowski, „Natura maluje najpiękniejsze obrazy…"
  {id:841,text:"Natura maluje najpiękniejsze obrazy. Zawsze inne, niepowtarzalne, jedyne w swoim rodzaju, bez żadnych narzuconych ram ludzkiej ułomności.",author:"Daniel Ostrowski",lang:"pl",cat:"Życie",tid:135},
  {id:842,text:"Nature paints the most beautiful pictures. Always different, unique, one-of-a-kind, without any imposed limits of human imperfections.",author:"Daniel Ostrowski",lang:"en",cat:"Życie",tid:135},
  {id:843,text:"Die Natur malt die schönsten Bilder. Immer andere, unverwechselbare, einzigartige, ohne irgendwelche aufgezwungenen Schranken menschlicher Unvollkommenheit.",author:"Daniel Ostrowski",lang:"de",cat:"Życie",tid:135},
  {id:844,text:"La nature peint les plus beaux tableaux. Toujours différents, inimitables, uniques en leur genre, sans aucune contrainte imposée par l'imperfection humaine.",author:"Daniel Ostrowski",lang:"fr",cat:"Życie",tid:135},
  {id:845,text:"La naturaleza pinta los cuadros más bellos. Siempre diferentes, irrepetibles, únicos en su género, sin ningún marco impuesto por la imperfección humana.",author:"Daniel Ostrowski",lang:"es",cat:"Życie",tid:135},
  {id:846,text:"Природа рисует самые прекрасные картины. Всегда разные, неповторимые, единственные в своём роде, без всяких навязанных рамок человеческой ущербности.",author:"Даниэль Островский",lang:"ru",cat:"Życie",tid:135},
  // Grupa 136 — Martin Luther King, „Wierzę, że ostatnie słowo będzie należeć…"
  {id:847,text:"Wierzę, że ostatnie słowo będzie należeć do nieuzbrojonej prawdy i bezwarunkowej miłości.",author:"Martin Luther King",lang:"pl",cat:"Filozofia",tid:136},
  {id:848,text:"I believe that unarmed truth and unconditional love will have the final word in reality.",author:"Martin Luther King",lang:"en",cat:"Filozofia",tid:136},
  {id:849,text:"Ich glaube, dass die unbewaffnete Wahrheit und die bedingungslose Liebe das letzte Wort in der Wirklichkeit haben werden.",author:"Martin Luther King",lang:"de",cat:"Filozofia",tid:136},
  {id:850,text:"Je crois que la vérité non armée et l'amour inconditionnel auront le dernier mot dans la réalité.",author:"Martin Luther King",lang:"fr",cat:"Filozofia",tid:136},
  {id:851,text:"Creo que la verdad desarmada y el amor incondicional tendrán la última palabra en la realidad.",author:"Martin Luther King",lang:"es",cat:"Filozofia",tid:136},
  {id:852,text:"Я верю, что безоружная правда и безусловная любовь возьмут последнее слово в реальности.",author:"Мартин Лютер Кинг",lang:"ru",cat:"Filozofia",tid:136},
  // Grupa 137 — Przysłowie chińskie, „Zapomnieć o przodkach…"
  {id:853,text:"Zapomnieć o przodkach to jak być strumykiem bez źródła, drzewem bez korzeni.",author:"Przysłowie chińskie",lang:"pl",cat:"Mądrość",tid:137},
  {id:854,text:"To forget one's ancestors is to be a brook without a source, a tree without a root.",author:"Chinese proverb",lang:"en",cat:"Mądrość",tid:137},
  {id:855,text:"Seine Vorfahren zu vergessen ist, wie ein Bach ohne Quelle zu sein, ein Baum ohne Wurzel.",author:"Chinesisches Sprichwort",lang:"de",cat:"Mądrość",tid:137},
  {id:856,text:"Oublier ses ancêtres, c'est être un ruisseau sans source, un arbre sans racine.",author:"Proverbe chinois",lang:"fr",cat:"Mądrość",tid:137},
  {id:857,text:"Olvidar a los antepasados es ser un arroyo sin fuente, un árbol sin raíz.",author:"Proverbio chino",lang:"es",cat:"Mądrość",tid:137},
  {id:858,text:"Забыть о предках — это как быть ручьём без источника, деревом без корня.",author:"Китайская поговорка",lang:"ru",cat:"Mądrość",tid:137},
  // Grupa 138 — Lucy Larcom (NIE Laroom — typo), „He who plants a tree plants hope."
  {id:859,text:"Kto sadzi drzewo, ten sadzi nadzieję.",author:"Lucy Larcom",lang:"pl",cat:"Mądrość",tid:138},
  {id:860,text:"He who plants a tree plants hope.",author:"Lucy Larcom",lang:"en",cat:"Mądrość",tid:138},
  {id:861,text:"Wer einen Baum pflanzt, pflanzt Hoffnung.",author:"Lucy Larcom",lang:"de",cat:"Mądrość",tid:138},
  {id:862,text:"Celui qui plante un arbre plante l'espoir.",author:"Lucy Larcom",lang:"fr",cat:"Mądrość",tid:138},
  {id:863,text:"Quien planta un árbol planta esperanza.",author:"Lucy Larcom",lang:"es",cat:"Mądrość",tid:138},
  {id:864,text:"Кто сажает дерево, тот сажает надежду.",author:"Люси Ларком",lang:"ru",cat:"Mądrość",tid:138},
  // Grupa 139 — Magdalena Kozak, „Traktuj ludzi lepiej, niż na to zasługują…"
  {id:865,text:"Traktuj ludzi lepiej, niż na to zasługują, a zrobią wszystko, żeby sprostać swemu nowemu wizerunkowi.",author:"Magdalena Kozak",lang:"pl",cat:"Mądrość",tid:139},
  {id:866,text:"Treat people better than they deserve, and they will do everything to live up to their new image.",author:"Magdalena Kozak",lang:"en",cat:"Mądrość",tid:139},
  {id:867,text:"Behandle die Menschen besser, als sie es verdienen, und sie werden alles tun, um ihrem neuen Bild gerecht zu werden.",author:"Magdalena Kozak",lang:"de",cat:"Mądrość",tid:139},
  {id:868,text:"Traite les gens mieux qu'ils ne le méritent, et ils feront tout pour être à la hauteur de leur nouvelle image.",author:"Magdalena Kozak",lang:"fr",cat:"Mądrość",tid:139},
  {id:869,text:"Trata a las personas mejor de lo que merecen, y harán todo para estar a la altura de su nueva imagen.",author:"Magdalena Kozak",lang:"es",cat:"Mądrość",tid:139},
  {id:870,text:"Относись к людям лучше, чем они того заслуживают, и они сделают всё, чтобы соответствовать своему новому образу.",author:"Магдалена Козак",lang:"ru",cat:"Mądrość",tid:139},
  // Grupa 140 — Gretchen Rubin, „Bądź skarbnicą szczęśliwych wspomnień."
  {id:871,text:"Bądź skarbnicą szczęśliwych wspomnień.",author:"Gretchen Rubin",lang:"pl",cat:"Życie",tid:140},
  {id:872,text:"Be a storehouse of happy memories.",author:"Gretchen Rubin",lang:"en",cat:"Życie",tid:140},
  {id:873,text:"Sei ein Speicher glücklicher Erinnerungen.",author:"Gretchen Rubin",lang:"de",cat:"Życie",tid:140},
  {id:874,text:"Sois un réservoir de souvenirs heureux.",author:"Gretchen Rubin",lang:"fr",cat:"Życie",tid:140},
  {id:875,text:"Sé un depósito de recuerdos felices.",author:"Gretchen Rubin",lang:"es",cat:"Życie",tid:140},
  {id:876,text:"Будь сокровищницей счастливых воспоминаний.",author:"Гретхен Рубин",lang:"ru",cat:"Życie",tid:140},
  // Grupa 141 — Michael Levine, „Having children makes you no more a parent…"
  {id:877,text:"Posiadanie dzieci nie czyni cię rodzicem, tak jak posiadanie fortepianu nie czyni cię pianistą.",author:"Michael Levine",lang:"pl",cat:"Mądrość",tid:141},
  {id:878,text:"Having children makes you no more a parent than having a piano makes you a pianist.",author:"Michael Levine",lang:"en",cat:"Mądrość",tid:141},
  {id:879,text:"Kinder zu haben macht dich genauso wenig zu einem Elternteil, wie ein Klavier zu besitzen dich zum Pianisten macht.",author:"Michael Levine",lang:"de",cat:"Mądrość",tid:141},
  {id:880,text:"Avoir des enfants ne fait pas plus de toi un parent qu'avoir un piano fait de toi un pianiste.",author:"Michael Levine",lang:"fr",cat:"Mądrość",tid:141},
  {id:881,text:"Tener hijos no te convierte más en padre que tener un piano te convierte en pianista.",author:"Michael Levine",lang:"es",cat:"Mądrość",tid:141},
  {id:882,text:"Иметь детей не делает тебя родителем точно так же, как наличие фортепиано не делает тебя пианистом.",author:"Майкл Левин",lang:"ru",cat:"Mądrość",tid:141},
  // Grupa 142 — Mitch Albom, „Everyone knows they're going to die…"
  {id:883,text:"Każdy wie, że umrze, ale nikt w to nie wierzy. Gdybyśmy wierzyli, robilibyśmy rzeczy inaczej.",author:"Mitch Albom",lang:"pl",cat:"Filozofia",tid:142},
  {id:884,text:"Everyone knows they're going to die, but nobody believes it. If we did, we would do things differently.",author:"Mitch Albom",lang:"en",cat:"Filozofia",tid:142},
  {id:885,text:"Jeder weiß, dass er sterben wird, aber niemand glaubt es. Würden wir es glauben, würden wir die Dinge anders machen.",author:"Mitch Albom",lang:"de",cat:"Filozofia",tid:142},
  {id:886,text:"Tout le monde sait qu'il va mourir, mais personne ne le croit. Si nous y croyions, nous ferions les choses différemment.",author:"Mitch Albom",lang:"fr",cat:"Filozofia",tid:142},
  {id:887,text:"Todo el mundo sabe que va a morir, pero nadie lo cree. Si lo creyéramos, haríamos las cosas de otra manera.",author:"Mitch Albom",lang:"es",cat:"Filozofia",tid:142},
  {id:888,text:"Каждый знает, что умрёт, но никто в это не верит. Если бы мы верили, мы делали бы всё по-другому.",author:"Митч Элбом",lang:"ru",cat:"Filozofia",tid:142},
  // Grupa 143 — Phyllis Diller, „Always be nice to your children…"
  {id:889,text:"Zawsze bądź miły dla swoich dzieci, bo to one wybiorą ci dom spokojnej starości.",author:"Phyllis Diller",lang:"pl",cat:"Mądrość",tid:143},
  {id:890,text:"Always be nice to your children because they are the ones who will choose your rest home.",author:"Phyllis Diller",lang:"en",cat:"Mądrość",tid:143},
  {id:891,text:"Sei immer nett zu deinen Kindern, denn sie sind diejenigen, die dein Altersheim aussuchen werden.",author:"Phyllis Diller",lang:"de",cat:"Mądrość",tid:143},
  {id:892,text:"Sois toujours gentil avec tes enfants, car ce sont eux qui choisiront ta maison de retraite.",author:"Phyllis Diller",lang:"fr",cat:"Mądrość",tid:143},
  {id:893,text:"Sé siempre amable con tus hijos, porque son ellos quienes elegirán tu residencia de ancianos.",author:"Phyllis Diller",lang:"es",cat:"Mądrość",tid:143},
  {id:894,text:"Всегда будь добр к своим детям, потому что именно они выберут тебе дом престарелых.",author:"Филлис Диллер",lang:"ru",cat:"Mądrość",tid:143},
  // Grupa 144 — Autor nieznany, „If you don't go after what you want…" (UWAGA: zbliżona do tid:61)
  {id:895,text:"Jeśli nie pójdziesz za tym, czego chcesz, nigdy tego nie będziesz miał. Jeśli nie zapytasz, odpowiedź zawsze będzie negatywna. Jeśli nie zrobisz kroku naprzód, zawsze będziesz w tym samym miejscu.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:144},
  {id:896,text:"If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:144},
  {id:897,text:"Wenn du nicht dem nachgehst, was du willst, wirst du es nie haben. Wenn du nicht fragst, ist die Antwort immer Nein. Wenn du keinen Schritt nach vorne machst, bleibst du immer am selben Ort.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:144},
  {id:898,text:"Si tu ne vas pas chercher ce que tu veux, tu ne l'auras jamais. Si tu ne demandes pas, la réponse est toujours non. Si tu ne fais pas un pas en avant, tu restes toujours au même endroit.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:144},
  {id:899,text:"Si no vas tras lo que quieres, nunca lo tendrás. Si no preguntas, la respuesta siempre es no. Si no das un paso adelante, siempre estás en el mismo lugar.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:144},
  {id:900,text:"Если ты не идёшь за тем, чего хочешь, никогда этого не получишь. Если ты не спрашиваешь, ответ всегда будет нет. Если ты не делаешь шаг вперёд, всегда останешься на том же месте.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:144},
  // Grupa 145 — Autor nieznany, „When we die we become 'stories' in the minds of other people."
  {id:901,text:"Kiedy umieramy, stajemy się «opowieściami» w umysłach innych ludzi.",author:"Autor nieznany",lang:"pl",cat:"Filozofia",tid:145},
  {id:902,text:"When we die we become «stories» in the minds of other people.",author:"Unknown author",lang:"en",cat:"Filozofia",tid:145},
  {id:903,text:"Wenn wir sterben, werden wir zu «Geschichten» in den Köpfen anderer Menschen.",author:"Unbekannter Autor",lang:"de",cat:"Filozofia",tid:145},
  {id:904,text:"Quand nous mourons, nous devenons des « histoires » dans l'esprit des autres.",author:"Auteur inconnu",lang:"fr",cat:"Filozofia",tid:145},
  {id:905,text:"Cuando morimos, nos convertimos en «historias» en las mentes de otras personas.",author:"Autor desconocido",lang:"es",cat:"Filozofia",tid:145},
  {id:906,text:"Когда мы умираем, мы становимся «историями» в умах других людей.",author:"Автор неизвестен",lang:"ru",cat:"Filozofia",tid:145},
  // Grupa 146 — Robert A. Heinlein, „Those who forget their past…" (UWAGA: oryginał G. Santayana)
  {id:907,text:"Ci, którzy zapominają o swojej przeszłości, są skazani na jej powtórzenie.",author:"Robert A. Heinlein",lang:"pl",cat:"Filozofia",tid:146},
  {id:908,text:"Those who forget their past are destined to repeat it.",author:"Robert A. Heinlein",lang:"en",cat:"Filozofia",tid:146},
  {id:909,text:"Diejenigen, die ihre Vergangenheit vergessen, sind dazu verdammt, sie zu wiederholen.",author:"Robert A. Heinlein",lang:"de",cat:"Filozofia",tid:146},
  {id:910,text:"Ceux qui oublient leur passé sont condamnés à le répéter.",author:"Robert A. Heinlein",lang:"fr",cat:"Filozofia",tid:146},
  {id:911,text:"Quienes olvidan su pasado están condenados a repetirlo.",author:"Robert A. Heinlein",lang:"es",cat:"Filozofia",tid:146},
  {id:912,text:"Те, кто забывает своё прошлое, обречены его повторить.",author:"Роберт Хайнлайн",lang:"ru",cat:"Filozofia",tid:146},
  // Grupa 147 — Przysłowie rosyjskie, „You live as long as you are remembered."
  {id:913,text:"Żyjesz tak długo, jak długo cię pamiętają.",author:"Przysłowie rosyjskie",lang:"pl",cat:"Filozofia",tid:147},
  {id:914,text:"You live as long as you are remembered.",author:"Russian proverb",lang:"en",cat:"Filozofia",tid:147},
  {id:915,text:"Du lebst so lange, wie man sich an dich erinnert.",author:"Russisches Sprichwort",lang:"de",cat:"Filozofia",tid:147},
  {id:916,text:"Tu vis aussi longtemps que l'on se souvient de toi.",author:"Proverbe russe",lang:"fr",cat:"Filozofia",tid:147},
  {id:917,text:"Vives mientras te recuerden.",author:"Proverbio ruso",lang:"es",cat:"Filozofia",tid:147},
  {id:918,text:"Ты жив, пока тебя помнят.",author:"Русская пословица",lang:"ru",cat:"Filozofia",tid:147},
  // Grupa 148 — Dan Brown, „Gdyby przodkowie zobaczyli, jak daleko zaszliśmy…"
  {id:919,text:"Gdyby przodkowie zobaczyli, jak daleko zaszliśmy, uznaliby nas za bogów.",author:"Dan Brown",lang:"pl",cat:"Filozofia",tid:148},
  {id:920,text:"If our ancestors could see how far we have come, they would consider us gods.",author:"Dan Brown",lang:"en",cat:"Filozofia",tid:148},
  {id:921,text:"Wenn unsere Vorfahren sehen könnten, wie weit wir gekommen sind, würden sie uns für Götter halten.",author:"Dan Brown",lang:"de",cat:"Filozofia",tid:148},
  {id:922,text:"Si nos ancêtres pouvaient voir jusqu'où nous sommes parvenus, ils nous prendraient pour des dieux.",author:"Dan Brown",lang:"fr",cat:"Filozofia",tid:148},
  {id:923,text:"Si nuestros antepasados pudieran ver hasta dónde hemos llegado, nos considerarían dioses.",author:"Dan Brown",lang:"es",cat:"Filozofia",tid:148},
  {id:924,text:"Если бы наши предки увидели, как далеко мы зашли, они приняли бы нас за богов.",author:"Дэн Браун",lang:"ru",cat:"Filozofia",tid:148},
  // Grupa 149 — Robin Williams (z filmu „Jack" 1996), „Please, don't worry so much…"
  {id:925,text:"Proszę, nie martw się tak bardzo. Bo w końcu żadne z nas nie ma zbyt wiele czasu na tej Ziemi. Życie jest ulotne. A jeśli kiedykolwiek będziesz zmartwiony, skieruj swoje oczy na letnie niebo, gdy gwiazdy rozciągają się na aksamitnej nocy. A kiedy spadająca gwiazda przemknie przez ciemność, zamieniając noc w dzień... pomyśl życzenie i pomyśl o mnie. Spraw, aby Twoje życie było spektakularne.",author:"Robin Williams",lang:"pl",cat:"Życie",tid:149},
  {id:926,text:"Please, don't worry so much. Because in the end, none of us have very long on this Earth. Life is fleeting. And if you're ever distressed, cast your eyes to the summer sky when the stars are strung across the velvety night. And when a shooting star streaks through the blackness, turning night into day... make a wish and think of me. Make your life spectacular.",author:"Robin Williams",lang:"en",cat:"Życie",tid:149},
  {id:927,text:"Bitte, mach dir nicht so viele Sorgen. Denn am Ende hat keiner von uns sehr lange auf dieser Erde. Das Leben ist flüchtig. Und wenn du jemals bekümmert bist, wende deine Augen zum Sommerhimmel, wenn die Sterne über der samtenen Nacht gespannt sind. Und wenn eine Sternschnuppe durch die Dunkelheit zieht und die Nacht zum Tag macht... wünsche dir etwas und denke an mich. Mach dein Leben spektakulär.",author:"Robin Williams",lang:"de",cat:"Życie",tid:149},
  {id:928,text:"S'il te plaît, ne t'inquiète pas tant. Parce qu'au fond, aucun de nous n'a beaucoup de temps sur cette Terre. La vie est éphémère. Et si jamais tu es affligé, lève les yeux vers le ciel d'été, quand les étoiles sont parsemées sur la nuit de velours. Et lorsqu'une étoile filante traverse l'obscurité, transformant la nuit en jour... fais un vœu et pense à moi. Rends ta vie spectaculaire.",author:"Robin Williams",lang:"fr",cat:"Życie",tid:149},
  {id:929,text:"Por favor, no te preocupes tanto. Porque al final, ninguno de nosotros tiene mucho tiempo en esta Tierra. La vida es fugaz. Y si alguna vez estás afligido, alza los ojos al cielo de verano, cuando las estrellas están extendidas sobre la noche de terciopelo. Y cuando una estrella fugaz cruce la oscuridad, convirtiendo la noche en día... pide un deseo y piensa en mí. Haz que tu vida sea espectacular.",author:"Robin Williams",lang:"es",cat:"Życie",tid:149},
  {id:930,text:"Пожалуйста, не волнуйся так сильно. Потому что в конце концов никому из нас не отведено много времени на этой Земле. Жизнь скоротечна. И если ты когда-нибудь будешь огорчён, обрати глаза к летнему небу, когда звёзды раскинуты по бархатной ночи. И когда падающая звезда промелькнёт сквозь тьму, превращая ночь в день... загадай желание и подумай обо мне. Сделай свою жизнь незабываемой.",author:"Робин Уильямс",lang:"ru",cat:"Życie",tid:149},
  // Grupa 150 — Wisława Szymborska, „Człowiek, który nie poczuł smaku swoich łez…" (atrybucja sporna)
  {id:931,text:"Człowiek, który nie poczuł smaku swoich łez — nie jest prawdziwym człowiekiem.",author:"Wisława Szymborska",lang:"pl",cat:"Filozofia",tid:150},
  {id:932,text:"A person who has not tasted his own tears is not a true human being.",author:"Wisława Szymborska",lang:"en",cat:"Filozofia",tid:150},
  {id:933,text:"Ein Mensch, der den Geschmack seiner eigenen Tränen nicht gespürt hat, ist kein wahrer Mensch.",author:"Wisława Szymborska",lang:"de",cat:"Filozofia",tid:150},
  {id:934,text:"Un homme qui n'a pas goûté ses propres larmes n'est pas un véritable être humain.",author:"Wisława Szymborska",lang:"fr",cat:"Filozofia",tid:150},
  {id:935,text:"Una persona que no ha probado el sabor de sus propias lágrimas no es un verdadero ser humano.",author:"Wisława Szymborska",lang:"es",cat:"Filozofia",tid:150},
  {id:936,text:"Человек, который не ощутил вкуса своих слёз, — не настоящий человек.",author:"Вислава Шимборская",lang:"ru",cat:"Filozofia",tid:150},
  // Grupa 151 — Wisława Szymborska, „Umarłych wieczność dotąd trwa…" (z wiersza „Rehabilitacja")
  {id:937,text:"Umarłych wieczność dotąd trwa, dokąd pamięcią się im płaci.",author:"Wisława Szymborska",lang:"pl",cat:"Filozofia",tid:151},
  {id:938,text:"The eternity of the dead lasts as long as we pay them with memory.",author:"Wisława Szymborska",lang:"en",cat:"Filozofia",tid:151},
  {id:939,text:"Die Ewigkeit der Toten dauert so lange, wie man sie mit Erinnerung bezahlt.",author:"Wisława Szymborska",lang:"de",cat:"Filozofia",tid:151},
  {id:940,text:"L'éternité des morts dure aussi longtemps qu'on les paie avec le souvenir.",author:"Wisława Szymborska",lang:"fr",cat:"Filozofia",tid:151},
  {id:941,text:"La eternidad de los muertos dura mientras se les pague con la memoria.",author:"Wisława Szymborska",lang:"es",cat:"Filozofia",tid:151},
  {id:942,text:"Вечность умерших длится до тех пор, пока им платят памятью.",author:"Вислава Шимборская",lang:"ru",cat:"Filozofia",tid:151},
  // Grupa 152 — Daniel Ostrowski, „Rodzina to nie zawsze więzy krwi…"
  {id:943,text:"Rodzina to nie zawsze więzy krwi. Czasem rodzina to mocna więź przyjaźni.",author:"Daniel Ostrowski",lang:"pl",cat:"Miłość",tid:152},
  {id:944,text:"Family is not always about blood ties. Sometimes family is a strong bond of friendship.",author:"Daniel Ostrowski",lang:"en",cat:"Miłość",tid:152},
  {id:945,text:"Familie sind nicht immer Blutsbande. Manchmal ist Familie eine starke Bande der Freundschaft.",author:"Daniel Ostrowski",lang:"de",cat:"Miłość",tid:152},
  {id:946,text:"La famille n'est pas toujours une question de liens du sang. Parfois, la famille est un lien fort d'amitié.",author:"Daniel Ostrowski",lang:"fr",cat:"Miłość",tid:152},
  {id:947,text:"La familia no siempre son lazos de sangre. A veces la familia es un fuerte vínculo de amistad.",author:"Daniel Ostrowski",lang:"es",cat:"Miłość",tid:152},
  {id:948,text:"Семья — это не всегда кровные узы. Иногда семья — это крепкая дружеская связь.",author:"Даниэль Островский",lang:"ru",cat:"Miłość",tid:152},
  // Grupa 153 — „Walter" (atrybucja sporna), „By odkryć, kto tobą rządzi…"
  {id:949,text:"By odkryć, kto tobą rządzi, po prostu sprawdź, kogo nie wolno ci krytykować.",author:"Voltaire",lang:"pl",cat:"Filozofia",tid:153},
  {id:950,text:"To find out who rules over you, simply check whom you are not allowed to criticize.",author:"Voltaire",lang:"en",cat:"Filozofia",tid:153},
  {id:951,text:"Um herauszufinden, wer über dich herrscht, schau einfach, wen du nicht kritisieren darfst.",author:"Voltaire",lang:"de",cat:"Filozofia",tid:153},
  {id:952,text:"Pour découvrir qui te gouverne, vérifie simplement qui tu n'as pas le droit de critiquer.",author:"Voltaire",lang:"fr",cat:"Filozofia",tid:153},
  {id:953,text:"Para descubrir quién te gobierna, simplemente averigua a quién no se te permite criticar.",author:"Voltaire",lang:"es",cat:"Filozofia",tid:153},
  {id:954,text:"Чтобы понять, кто тобой правит, просто проверь, кого тебе нельзя критиковать.",author:"Вольтер",lang:"ru",cat:"Filozofia",tid:153},
  // Grupa 154 — Heraklit, „Nie ma nic trwałego oprócz zmiany." (PL już jest jako id:1)
  {id:955,text:"Nothing endures but change.",author:"Heraclitus",lang:"en",cat:"Filozofia",tid:154},
  {id:956,text:"Nichts ist beständig als der Wechsel.",author:"Heraklit",lang:"de",cat:"Filozofia",tid:154},
  {id:957,text:"Rien n'est permanent, sauf le changement.",author:"Héraclite",lang:"fr",cat:"Filozofia",tid:154},
  {id:958,text:"Nada perdura sino el cambio.",author:"Heráclito",lang:"es",cat:"Filozofia",tid:154},
  {id:959,text:"Ничто не вечно, кроме перемен.",author:"Гераклит",lang:"ru",cat:"Filozofia",tid:154},
  // Grupa 155 — Mahatma Gandhi, „Żyj tak, jakbyś miał umrzeć jutro…" (PL już jest jako id:2)
  {id:960,text:"Live as if you were to die tomorrow. Learn as if you were to live forever.",author:"Mahatma Gandhi",lang:"en",cat:"Motywacja",tid:155},
  {id:961,text:"Lebe, als ob du morgen sterben würdest. Lerne, als ob du ewig leben würdest.",author:"Mahatma Gandhi",lang:"de",cat:"Motywacja",tid:155},
  {id:962,text:"Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre éternellement.",author:"Mahatma Gandhi",lang:"fr",cat:"Motywacja",tid:155},
  {id:963,text:"Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre.",author:"Mahatma Gandhi",lang:"es",cat:"Motywacja",tid:155},
  {id:964,text:"Живи так, словно умрёшь завтра. Учись так, словно будешь жить вечно.",author:"Махатма Ганди",lang:"ru",cat:"Motywacja",tid:155},
  // Grupa 156 — Arthur C. Clarke, „Jedyna droga do odkrycia granic…" (PL już jest jako id:3)
  {id:965,text:"The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",author:"Arthur C. Clarke",lang:"en",cat:"Sukces",tid:156},
  {id:966,text:"Der einzige Weg, die Grenzen des Möglichen zu entdecken, ist, ein wenig über sie hinaus ins Unmögliche zu wagen.",author:"Arthur C. Clarke",lang:"de",cat:"Sukces",tid:156},
  {id:967,text:"La seule façon de découvrir les limites du possible est de s'aventurer un peu au-delà, dans l'impossible.",author:"Arthur C. Clarke",lang:"fr",cat:"Sukces",tid:156},
  {id:968,text:"La única forma de descubrir los límites de lo posible es aventurarse un poco más allá, hacia lo imposible.",author:"Arthur C. Clarke",lang:"es",cat:"Sukces",tid:156},
  {id:969,text:"Единственный способ узнать границы возможного — это решиться зайти немного за них, в невозможное.",author:"Артур Кларк",lang:"ru",cat:"Sukces",tid:156},
  // Grupa 157 — Martin Luther King Jr., „Miłość jest jedyną siłą…" (PL już jest jako id:4)
  {id:970,text:"Love is the only force capable of transforming an enemy into a friend.",author:"Martin Luther King Jr.",lang:"en",cat:"Miłość",tid:157},
  {id:971,text:"Liebe ist die einzige Kraft, die einen Feind in einen Freund verwandeln kann.",author:"Martin Luther King Jr.",lang:"de",cat:"Miłość",tid:157},
  {id:972,text:"L'amour est la seule force capable de transformer un ennemi en ami.",author:"Martin Luther King Jr.",lang:"fr",cat:"Miłość",tid:157},
  {id:973,text:"El amor es la única fuerza capaz de transformar un enemigo en amigo.",author:"Martin Luther King Jr.",lang:"es",cat:"Miłość",tid:157},
  {id:974,text:"Любовь — единственная сила, способная превратить врага в друга.",author:"Мартин Лютер Кинг — мл.",lang:"ru",cat:"Miłość",tid:157},
  // Grupa 158 — Dale Carnegie, „Szczęście zależy wyłącznie od tego, co myślisz." (PL już jest jako id:5)
  {id:975,text:"Happiness depends solely on what you think.",author:"Dale Carnegie",lang:"en",cat:"Mądrość",tid:158},
  {id:976,text:"Glück hängt allein davon ab, was du denkst.",author:"Dale Carnegie",lang:"de",cat:"Mądrość",tid:158},
  {id:977,text:"Le bonheur dépend uniquement de ce que tu penses.",author:"Dale Carnegie",lang:"fr",cat:"Mądrość",tid:158},
  {id:978,text:"La felicidad depende únicamente de lo que piensas.",author:"Dale Carnegie",lang:"es",cat:"Mądrość",tid:158},
  {id:979,text:"Счастье зависит исключительно от того, что вы думаете.",author:"Дейл Карнеги",lang:"ru",cat:"Mądrość",tid:158},
  // Uzupełnienie tid:1 (John Lennon) — PL (id:6), EN (id:19), FR (id:35) już istniały. Dodaję DE/ES/RU.
  {id:980,text:"Das Leben ist das, was passiert, während du eifrig dabei bist, andere Pläne zu machen.",author:"John Lennon",lang:"de",cat:"Życie",tid:1},
  {id:981,text:"La vida es lo que te pasa mientras estás ocupado haciendo otros planes.",author:"John Lennon",lang:"es",cat:"Życie",tid:1},
  {id:982,text:"Жизнь — это то, что происходит с тобой, пока ты занят строительством других планов.",author:"Джон Леннон",lang:"ru",cat:"Życie",tid:1},
  // Uzupełnienie tid:2 (Albert Einstein) — PL (id:10), EN (id:12) już istniały. Dodaję DE/FR/ES/RU.
  {id:983,text:"In der Mitte jeder Schwierigkeit liegt eine Möglichkeit.",author:"Albert Einstein",lang:"de",cat:"Motywacja",tid:2},
  {id:984,text:"Au milieu de chaque difficulté se trouve une opportunité.",author:"Albert Einstein",lang:"fr",cat:"Motywacja",tid:2},
  {id:985,text:"En medio de cada dificultad reside una oportunidad.",author:"Albert Einstein",lang:"es",cat:"Motywacja",tid:2},
  {id:986,text:"В середине каждой трудности кроется возможность.",author:"Альберт Эйнштейн",lang:"ru",cat:"Motywacja",tid:2},
  // Uzupełnienie tid:3 (Steve Jobs) — PL (id:8), EN (id:13) już istniały. Dodaję DE/FR/ES/RU.
  {id:987,text:"Der einzige Weg, großartige Arbeit zu leisten, ist das zu lieben, was man tut.",author:"Steve Jobs",lang:"de",cat:"Sukces",tid:3},
  {id:988,text:"La seule façon de faire du grand travail est d'aimer ce que l'on fait.",author:"Steve Jobs",lang:"fr",cat:"Sukces",tid:3},
  {id:989,text:"La única manera de hacer un gran trabajo es amar lo que uno hace.",author:"Steve Jobs",lang:"es",cat:"Sukces",tid:3},
  {id:990,text:"Единственный способ делать великую работу — любить то, что ты делаешь.",author:"Стив Джобс",lang:"ru",cat:"Sukces",tid:3},
  // Uzupełnienie tid:4 (Mahatma Gandhi) — PL (id:7), ES (id:47) już istniały. Dodaję EN/DE/FR/RU.
  {id:991,text:"Be the change you wish to see in the world.",author:"Mahatma Gandhi",lang:"en",cat:"Motywacja",tid:4},
  {id:992,text:"Sei du selbst die Veränderung, die du dir wünschst für diese Welt.",author:"Mahatma Gandhi",lang:"de",cat:"Motywacja",tid:4},
  {id:993,text:"Sois le changement que tu veux voir dans le monde.",author:"Mahatma Gandhi",lang:"fr",cat:"Motywacja",tid:4},
  {id:994,text:"Будь тем изменением, которое ты хочешь видеть в мире.",author:"Махатма Ганди",lang:"ru",cat:"Motywacja",tid:4},
  // Grupa 159 — Appius Claudius Caecus, „Człowiek jest kowalem własnego losu." (PL już jest jako id:9)
  {id:995,text:"Every man is the architect of his own fortune.",author:"Appius Claudius Caecus",lang:"en",cat:"Mądrość",tid:159},
  {id:996,text:"Jeder ist seines eigenen Glückes Schmied.",author:"Appius Claudius Caecus",lang:"de",cat:"Mądrość",tid:159},
  {id:997,text:"Chacun est l'artisan de sa propre fortune.",author:"Appius Claudius Caecus",lang:"fr",cat:"Mądrość",tid:159},
  {id:998,text:"Cada hombre es el arquitecto de su propio destino.",author:"Appius Claudius Caecus",lang:"es",cat:"Mądrość",tid:159},
  {id:999,text:"Каждый — кузнец своего счастья.",author:"Аппий Клавдий",lang:"ru",cat:"Mądrość",tid:159},
  // Grupa 160 — Oscar Wilde, „Be yourself; everyone else is already taken." (EN już jest jako id:11)
  {id:1000,text:"Bądź sobą; wszyscy inni są już zajęci.",author:"Oscar Wilde",lang:"pl",cat:"Mądrość",tid:160},
  {id:1001,text:"Sei du selbst; alle anderen sind schon vergeben.",author:"Oscar Wilde",lang:"de",cat:"Mądrość",tid:160},
  {id:1002,text:"Sois toi-même ; tous les autres sont déjà pris.",author:"Oscar Wilde",lang:"fr",cat:"Mądrość",tid:160},
  {id:1003,text:"Sé tú mismo; todos los demás ya están ocupados.",author:"Oscar Wilde",lang:"es",cat:"Mądrość",tid:160},
  {id:1004,text:"Будь собой; все остальные уже заняты.",author:"Оскар Уайльд",lang:"ru",cat:"Mądrość",tid:160},
  // Grupa 161 — Wojciech Młynarski, fragment piosenki „Idź swoją drogą"
  {id:1005,text:"Bo chociaż jest niejeden szlak, po którym trudniej iść, lecz idąc tak nie musisz brnąć w pochlebstwa dym i karku giąć przed byle kim. Rozważ tę myśl, a potem idź — idź swoją drogą.",author:"Wojciech Młynarski",lang:"pl",cat:"Mądrość",tid:161},
  {id:1006,text:"Though there is more than one path that is harder to walk, by going so you do not have to wade through the smoke of flattery nor bend your neck to anyone. Consider this thought — and then go, go your own way.",author:"Wojciech Młynarski",lang:"en",cat:"Mądrość",tid:161},
  {id:1007,text:"Denn obwohl es manchen Pfad gibt, auf dem es schwerer zu gehen ist, musst du auf diesem Weg nicht durch den Rauch der Schmeicheleien waten noch vor irgendwem den Nacken beugen. Bedenke diesen Gedanken — und dann geh, geh deinen eigenen Weg.",author:"Wojciech Młynarski",lang:"de",cat:"Mądrość",tid:161},
  {id:1008,text:"Bien qu'il existe plus d'un chemin par lequel il est plus difficile de marcher, en allant ainsi tu n'as pas à patauger dans la fumée des flatteries ni à courber la tête devant n'importe qui. Réfléchis à cette pensée — puis va, va ton propre chemin.",author:"Wojciech Młynarski",lang:"fr",cat:"Mądrość",tid:161},
  {id:1009,text:"Aunque hay más de un camino por el que es más difícil andar, yendo así no tienes que vadear el humo de las adulaciones ni inclinar la cabeza ante cualquiera. Reflexiona sobre este pensamiento — y luego ve, ve por tu propio camino.",author:"Wojciech Młynarski",lang:"es",cat:"Mądrość",tid:161},
  {id:1010,text:"Ибо хоть и не один есть путь, по которому идти труднее, но идя так, тебе не нужно брести сквозь дым лести и склонять голову перед кем попало. Обдумай эту мысль — а потом иди, иди своей дорогой.",author:"Войцех Млынарский",lang:"ru",cat:"Mądrość",tid:161},
  // Grupa 162 — John Connolly, „W każdym dorosłym mieszka dziecko…"
  {id:1011,text:"W każdym bowiem dorosłym mieszka dziecko, którym kiedyś był, a w każdym dziecku — dorosły, którym kiedyś będzie.",author:"John Connolly",lang:"pl",cat:"Filozofia",tid:162},
  {id:1012,text:"In every adult there dwells the child he once was, and in every child — the adult he will one day be.",author:"John Connolly",lang:"en",cat:"Filozofia",tid:162},
  {id:1013,text:"Denn in jedem Erwachsenen wohnt das Kind, das er einst war, und in jedem Kind — der Erwachsene, der er eines Tages sein wird.",author:"John Connolly",lang:"de",cat:"Filozofia",tid:162},
  {id:1014,text:"Car dans chaque adulte demeure l'enfant qu'il fut autrefois, et dans chaque enfant — l'adulte qu'il sera un jour.",author:"John Connolly",lang:"fr",cat:"Filozofia",tid:162},
  {id:1015,text:"Porque en cada adulto habita el niño que una vez fue, y en cada niño — el adulto que algún día será.",author:"John Connolly",lang:"es",cat:"Filozofia",tid:162},
  {id:1016,text:"Ибо в каждом взрослом живёт ребёнок, которым он когда-то был, а в каждом ребёнке — взрослый, которым он когда-нибудь станет.",author:"Джон Коннолли",lang:"ru",cat:"Filozofia",tid:162},
  // Grupa 163 — David Attenborough, „Jeżeli znikną pszczoły…"
  {id:1017,text:"Jeżeli znikną pszczoły z naszego świata, ludziom pozostanie 4 lata życia.",author:"David Attenborough",lang:"pl",cat:"Filozofia",tid:163},
  {id:1018,text:"If bees disappear from our world, humans will have 4 years of life left.",author:"David Attenborough",lang:"en",cat:"Filozofia",tid:163},
  {id:1019,text:"Wenn die Bienen aus unserer Welt verschwinden, bleiben den Menschen 4 Jahre Leben.",author:"David Attenborough",lang:"de",cat:"Filozofia",tid:163},
  {id:1020,text:"Si les abeilles disparaissent de notre monde, il restera aux humains 4 années à vivre.",author:"David Attenborough",lang:"fr",cat:"Filozofia",tid:163},
  {id:1021,text:"Si las abejas desaparecen de nuestro mundo, a los humanos les quedarán 4 años de vida.",author:"David Attenborough",lang:"es",cat:"Filozofia",tid:163},
  {id:1022,text:"Если пчёлы исчезнут из нашего мира, людям останется 4 года жизни.",author:"Дэвид Аттенборо",lang:"ru",cat:"Filozofia",tid:163},
  // Grupa 164 — Alejandro Jodorowsky, „Ptaki urodzone w klatce…"
  {id:1023,text:"Ptaki urodzone w klatce myślą, że latanie to choroba.",author:"Alejandro Jodorowsky",lang:"pl",cat:"Filozofia",tid:164},
  {id:1024,text:"Birds born in a cage think flying is an illness.",author:"Alejandro Jodorowsky",lang:"en",cat:"Filozofia",tid:164},
  {id:1025,text:"Vögel, die in einem Käfig geboren werden, denken, dass Fliegen eine Krankheit ist.",author:"Alejandro Jodorowsky",lang:"de",cat:"Filozofia",tid:164},
  {id:1026,text:"Les oiseaux nés en cage pensent que voler est une maladie.",author:"Alejandro Jodorowsky",lang:"fr",cat:"Filozofia",tid:164},
  {id:1027,text:"Los pájaros nacidos en una jaula creen que volar es una enfermedad.",author:"Alejandro Jodorowsky",lang:"es",cat:"Filozofia",tid:164},
  {id:1028,text:"Птицы, рождённые в клетке, думают, что полёт — это болезнь.",author:"Алехандро Ходоровский",lang:"ru",cat:"Filozofia",tid:164},
  // Grupa 165 — Autor nieznany, „Lepiej mieć nos wetknięty w książkę…"
  {id:1029,text:"Lepiej mieć nos wetknięty w książkę niż w cudze sprawy.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:165},
  {id:1030,text:"It's better to have your nose stuck in a book than in someone else's business.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:165},
  {id:1031,text:"Es ist besser, die Nase in einem Buch zu stecken als in fremden Angelegenheiten.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:165},
  {id:1032,text:"Mieux vaut avoir le nez plongé dans un livre que dans les affaires des autres.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:165},
  {id:1033,text:"Es mejor tener la nariz metida en un libro que en los asuntos de los demás.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:165},
  {id:1034,text:"Лучше уткнуться носом в книгу, чем в чужие дела.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:165},
  // Grupa 166 — Gilbert Keith Chesterton, „Pokój bez książek…" (atrybucja sporna — patrz Cicero)
  {id:1035,text:"Pokój bez książek to jak ciało bez duszy.",author:"Gilbert Keith Chesterton",lang:"pl",cat:"Mądrość",tid:166},
  {id:1036,text:"A room without books is like a body without a soul.",author:"Gilbert Keith Chesterton",lang:"en",cat:"Mądrość",tid:166},
  {id:1037,text:"Ein Raum ohne Bücher ist wie ein Körper ohne Seele.",author:"Gilbert Keith Chesterton",lang:"de",cat:"Mądrość",tid:166},
  {id:1038,text:"Une pièce sans livres est comme un corps sans âme.",author:"Gilbert Keith Chesterton",lang:"fr",cat:"Mądrość",tid:166},
  {id:1039,text:"Una habitación sin libros es como un cuerpo sin alma.",author:"Gilbert Keith Chesterton",lang:"es",cat:"Mądrość",tid:166},
  {id:1040,text:"Комната без книг — как тело без души.",author:"Гилберт Кит Честертон",lang:"ru",cat:"Mądrość",tid:166},
  // Grupa 167 — Emilia Clarke, „Mój ojciec zawsze mówił…"
  {id:1041,text:"Mój ojciec zawsze mówił: nigdy nie ufaj ludziom, których telewizor jest większy niż półka na książki.",author:"Emilia Clarke",lang:"pl",cat:"Mądrość",tid:167},
  {id:1042,text:"My father always said: never trust people whose television is bigger than their bookshelf.",author:"Emilia Clarke",lang:"en",cat:"Mądrość",tid:167},
  {id:1043,text:"Mein Vater sagte immer: Trau niemals Menschen, deren Fernseher größer ist als ihr Bücherregal.",author:"Emilia Clarke",lang:"de",cat:"Mądrość",tid:167},
  {id:1044,text:"Mon père disait toujours : ne fais jamais confiance aux gens dont la télévision est plus grande que leur bibliothèque.",author:"Emilia Clarke",lang:"fr",cat:"Mądrość",tid:167},
  {id:1045,text:"Mi padre siempre decía: nunca confíes en personas cuya televisión es más grande que su estantería de libros.",author:"Emilia Clarke",lang:"es",cat:"Mądrość",tid:167},
  {id:1046,text:"Мой отец всегда говорил: никогда не доверяй людям, у которых телевизор больше, чем книжная полка.",author:"Эмилия Кларк",lang:"ru",cat:"Mądrość",tid:167},
  // Grupa 168 — Andy Biersack, „Stań w obronie tego, w co wierzysz…"
  {id:1047,text:"Stań w obronie tego, w co wierzysz, nawet jeśli to oznacza, że będziesz stać samotnie.",author:"Andy Biersack",lang:"pl",cat:"Motywacja",tid:168},
  {id:1048,text:"Stand up, for what you believe in, even if it means standing alone.",author:"Andy Biersack",lang:"en",cat:"Motywacja",tid:168},
  {id:1049,text:"Stehe ein für das, woran du glaubst, auch wenn es bedeutet, allein dazustehen.",author:"Andy Biersack",lang:"de",cat:"Motywacja",tid:168},
  {id:1050,text:"Défends ce en quoi tu crois, même si cela signifie te tenir debout seul.",author:"Andy Biersack",lang:"fr",cat:"Motywacja",tid:168},
  {id:1051,text:"Defiende aquello en lo que crees, incluso si significa estar solo.",author:"Andy Biersack",lang:"es",cat:"Motywacja",tid:168},
  {id:1052,text:"Встань за то, во что веришь, даже если это значит, что ты будешь стоять один.",author:"Энди Биерсак",lang:"ru",cat:"Motywacja",tid:168},
  // Grupa 169 — anonim, „Każdy ma prawo do bycia kretynem…"
  {id:1053,text:"Każdy ma prawo do bycia kretynem. Ale po co się z tym obnosić?",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:169},
  {id:1054,text:"Everyone has the right to be a fool. But why flaunt it?",author:"Unknown author",lang:"en",cat:"Mądrość",tid:169},
  {id:1055,text:"Jeder hat das Recht, ein Idiot zu sein. Aber warum damit prahlen?",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:169},
  {id:1056,text:"Chacun a le droit d'être un idiot. Mais pourquoi s'en vanter ?",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:169},
  {id:1057,text:"Todos tienen derecho a ser idiotas. Pero ¿por qué presumir de ello?",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:169},
  {id:1058,text:"У каждого есть право быть кретином. Но зачем этим хвастать?",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:169},
  // Grupa 170 — Józef Piłsudski, „Kto nie szanuje i nie ceni swojej przeszłości…"
  {id:1059,text:"Kto nie szanuje i nie ceni swojej przeszłości, ten nie jest godzien szacunku teraźniejszości, ani nie ma prawa do przyszłości.",author:"Józef Piłsudski",lang:"pl",cat:"Filozofia",tid:170},
  {id:1060,text:"He who does not respect and value his past is not worthy of the respect of the present, nor has any right to the future.",author:"Józef Piłsudski",lang:"en",cat:"Filozofia",tid:170},
  {id:1061,text:"Wer seine Vergangenheit nicht achtet und schätzt, ist der Achtung der Gegenwart nicht würdig und hat kein Recht auf die Zukunft.",author:"Józef Piłsudski",lang:"de",cat:"Filozofia",tid:170},
  {id:1062,text:"Celui qui ne respecte et ne valorise pas son passé n'est pas digne du respect du présent, et n'a aucun droit à l'avenir.",author:"Józef Piłsudski",lang:"fr",cat:"Filozofia",tid:170},
  {id:1063,text:"Quien no respeta ni valora su pasado, no es digno del respeto del presente, ni tiene derecho al futuro.",author:"Józef Piłsudski",lang:"es",cat:"Filozofia",tid:170},
  {id:1064,text:"Тот, кто не уважает и не ценит своё прошлое, не достоин уважения настоящего и не имеет права на будущее.",author:"Юзеф Пилсудский",lang:"ru",cat:"Filozofia",tid:170},
  // Grupa 171 — ks. Jan Twardowski, „Śpieszmy się kochać ludzi…"
  {id:1065,text:"Śpieszmy się kochać ludzi, tak szybko odchodzą…",author:"ks. Jan Twardowski",lang:"pl",cat:"Miłość",tid:171},
  {id:1066,text:"Let us hurry to love people, they leave so quickly…",author:"Father Jan Twardowski",lang:"en",cat:"Miłość",tid:171},
  {id:1067,text:"Beeilen wir uns, die Menschen zu lieben — sie gehen so schnell fort…",author:"Pater Jan Twardowski",lang:"de",cat:"Miłość",tid:171},
  {id:1068,text:"Hâtons-nous d'aimer les gens — ils s'en vont si vite…",author:"père Jan Twardowski",lang:"fr",cat:"Miłość",tid:171},
  {id:1069,text:"Apresurémonos a amar a la gente — se van tan rápido…",author:"padre Jan Twardowski",lang:"es",cat:"Miłość",tid:171},
  {id:1070,text:"Поспешим любить людей, они так быстро уходят…",author:"ксёндз Ян Твардовский",lang:"ru",cat:"Miłość",tid:171},
  // Grupa 172 — Autor nieznany, „Rodzina jest jak gałęzie drzewa…"
  {id:1071,text:"Rodzina jest jak gałęzie drzewa, wszyscy rośniemy w różnych kierunkach, ale korzenie mamy wspólne.",author:"Autor nieznany",lang:"pl",cat:"Miłość",tid:172},
  {id:1072,text:"Family is like the branches of a tree — we all grow in different directions, but our roots are the same.",author:"Unknown author",lang:"en",cat:"Miłość",tid:172},
  {id:1073,text:"Familie ist wie die Äste eines Baumes — wir wachsen alle in verschiedene Richtungen, aber unsere Wurzeln sind dieselben.",author:"Unbekannter Autor",lang:"de",cat:"Miłość",tid:172},
  {id:1074,text:"La famille est comme les branches d'un arbre — nous grandissons tous dans des directions différentes, mais nos racines sont les mêmes.",author:"Auteur inconnu",lang:"fr",cat:"Miłość",tid:172},
  {id:1075,text:"La familia es como las ramas de un árbol — todos crecemos en diferentes direcciones, pero nuestras raíces son las mismas.",author:"Autor desconocido",lang:"es",cat:"Miłość",tid:172},
  {id:1076,text:"Семья — как ветви дерева: все мы растём в разных направлениях, но корни у нас общие.",author:"Автор неизвестен",lang:"ru",cat:"Miłość",tid:172},
  // Grupa 173 — Robert Heinlein, „Never attempt to teach a pig to sing…"
  {id:1077,text:"Nigdy nie próbuj uczyć świni śpiewać; tracisz czas i denerwujesz świnię.",author:"Robert Heinlein",lang:"pl",cat:"Mądrość",tid:173},
  {id:1078,text:"Never attempt to teach a pig to sing; it wastes your time and annoys the pig.",author:"Robert Heinlein",lang:"en",cat:"Mądrość",tid:173},
  {id:1079,text:"Versuche niemals, einem Schwein das Singen beizubringen; es verschwendet deine Zeit und ärgert das Schwein.",author:"Robert Heinlein",lang:"de",cat:"Mądrość",tid:173},
  {id:1080,text:"N'essaye jamais d'apprendre à chanter à un cochon ; tu perds ton temps et tu énerves le cochon.",author:"Robert Heinlein",lang:"fr",cat:"Mądrość",tid:173},
  {id:1081,text:"Nunca intentes enseñar a un cerdo a cantar; pierdes tu tiempo y molestas al cerdo.",author:"Robert Heinlein",lang:"es",cat:"Mądrość",tid:173},
  {id:1082,text:"Никогда не пытайся научить свинью петь: ты тратишь своё время и раздражаешь свинью.",author:"Роберт Хайнлайн",lang:"ru",cat:"Mądrość",tid:173},
  // Grupa 174 — W.E.B. Du Bois, „Children learn more from what you are than what you teach."
  {id:1083,text:"Dzieci uczą się więcej z tego, kim jesteś, niż z tego, czego je uczysz.",author:"W.E.B. Du Bois",lang:"pl",cat:"Mądrość",tid:174},
  {id:1084,text:"Children learn more from what you are than what you teach.",author:"W.E.B. Du Bois",lang:"en",cat:"Mądrość",tid:174},
  {id:1085,text:"Kinder lernen mehr daraus, wer du bist, als aus dem, was du lehrst.",author:"W.E.B. Du Bois",lang:"de",cat:"Mądrość",tid:174},
  {id:1086,text:"Les enfants apprennent plus de ce que tu es que de ce que tu enseignes.",author:"W.E.B. Du Bois",lang:"fr",cat:"Mądrość",tid:174},
  {id:1087,text:"Los niños aprenden más de lo que eres que de lo que enseñas.",author:"W.E.B. Du Bois",lang:"es",cat:"Mądrość",tid:174},
  {id:1088,text:"Дети учатся больше из того, кто ты есть, чем из того, чему ты учишь.",author:"У. Э. Б. Дюбуа",lang:"ru",cat:"Mądrość",tid:174},
  // Grupa 175 — Benjamin Franklin (atrybucja sporna — oryginalnie konfucjańskie), „Tell me and I forget…"
  {id:1089,text:"Powiedz mi, a zapomnę. Naucz mnie, a może zapamiętam. Zaangażuj mnie, a nauczę się.",author:"Benjamin Franklin",lang:"pl",cat:"Mądrość",tid:175},
  {id:1090,text:"Tell me and I forget, teach me and I may remember, involve me and I learn.",author:"Benjamin Franklin",lang:"en",cat:"Mądrość",tid:175},
  {id:1091,text:"Sag es mir und ich vergesse, lehre mich und ich werde mich vielleicht erinnern, beteilige mich und ich lerne.",author:"Benjamin Franklin",lang:"de",cat:"Mądrość",tid:175},
  {id:1092,text:"Dis-moi et j'oublie, enseigne-moi et je m'en souviendrai peut-être, implique-moi et j'apprendrai.",author:"Benjamin Franklin",lang:"fr",cat:"Mądrość",tid:175},
  {id:1093,text:"Dímelo y lo olvido, enséñame y puede que lo recuerde, implícame y lo aprenderé.",author:"Benjamin Franklin",lang:"es",cat:"Mądrość",tid:175},
  {id:1094,text:"Скажи мне — и я забуду, научи меня — и я, возможно, запомню, вовлеки меня — и я научусь.",author:"Бенджамин Франклин",lang:"ru",cat:"Mądrość",tid:175},
  // Grupa 176 — Autor nieznany, „Trust is like a matchstick…"
  {id:1095,text:"Zaufanie jest jak zapałka — raz spalona zamienia się w popiół i nie da się jej już naprawić…",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:176},
  {id:1096,text:"Trust is like a matchstick — once burnt, turns into ashes and cannot be reformed…",author:"Unknown author",lang:"en",cat:"Mądrość",tid:176},
  {id:1097,text:"Vertrauen ist wie ein Streichholz — einmal verbrannt, verwandelt es sich in Asche und kann nicht wiederhergestellt werden…",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:176},
  {id:1098,text:"La confiance est comme une allumette — une fois brûlée, elle se transforme en cendres et ne peut être reformée…",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:176},
  {id:1099,text:"La confianza es como una cerilla — una vez quemada, se convierte en cenizas y ya no puede recomponerse…",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:176},
  {id:1100,text:"Доверие — как спичка: один раз сгорев, превращается в пепел, и его уже не восстановить…",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:176},
  // Grupa 177 — Autor nieznany, „You're never fully dressed without a smile." (z musicalu „Annie")
  {id:1101,text:"Nigdy nie jesteś w pełni ubrany bez uśmiechu.",author:"Autor nieznany",lang:"pl",cat:"Życie",tid:177},
  {id:1102,text:"You're never fully dressed without a smile.",author:"Unknown author",lang:"en",cat:"Życie",tid:177},
  {id:1103,text:"Du bist nie vollständig angezogen ohne ein Lächeln.",author:"Unbekannter Autor",lang:"de",cat:"Życie",tid:177},
  {id:1104,text:"Tu n'es jamais complètement habillé sans un sourire.",author:"Auteur inconnu",lang:"fr",cat:"Życie",tid:177},
  {id:1105,text:"Nunca estás completamente vestido sin una sonrisa.",author:"Autor desconocido",lang:"es",cat:"Życie",tid:177},
  {id:1106,text:"Ты никогда не одет полностью без улыбки.",author:"Автор неизвестен",lang:"ru",cat:"Życie",tid:177},
  // Grupa 178 — Paweł Adamowicz (Pride 2017), „Jak słyszycie, że ktoś jest zboczony…"
  {id:1107,text:"Jak słyszycie, że ktoś jest zboczony, że ktoś jest zepsuty, to powiem tak: ten jest zboczony, który sieje nienawiść; ten jest zepsuty, który odnosi się do drugiego z wrogością, trzyma rękę wyciągniętą w nienawiści, chce rzucić kamieniem, chce potraktować go pałką; ten, który mówi złe słowa, złą energię wysyła do drugiego człowieka — ten jest, przepraszam, zboczony.",author:"Paweł Adamowicz",lang:"pl",cat:"Filozofia",tid:178},
  {id:1108,text:"If you're ever called perverted or broken, I have this to say: the real perverts are the ones who sow hatred, broken are those who raise their hands in hatred, ready to cast stones or hit you. Those who send bad words and energy are truly perverted.",author:"Paweł Adamowicz",lang:"en",cat:"Filozofia",tid:178},
  {id:1109,text:"Wenn man dich je als pervers oder kaputt bezeichnet, dann sage ich Folgendes: Die wahren Perversen sind diejenigen, die Hass säen; kaputt sind diejenigen, die ihre Hände im Hass erheben, bereit, Steine zu werfen oder zuzuschlagen. Diejenigen, die schlechte Worte und Energie senden, sind wirklich pervers.",author:"Paweł Adamowicz",lang:"de",cat:"Filozofia",tid:178},
  {id:1110,text:"Si l'on vous traite jamais de pervers ou de brisé, voici ce que je dis : les vrais pervers sont ceux qui sèment la haine ; brisés sont ceux qui lèvent les mains dans la haine, prêts à jeter des pierres ou à frapper. Ceux qui envoient de mauvais mots et de la mauvaise énergie sont vraiment pervers.",author:"Paweł Adamowicz",lang:"fr",cat:"Filozofia",tid:178},
  {id:1111,text:"Si alguna vez te llaman pervertido o roto, esto es lo que digo: los verdaderos pervertidos son los que siembran odio; rotos son los que alzan las manos con odio, dispuestos a tirar piedras o golpear. Quienes envían palabras y energía negativas son los verdaderamente pervertidos.",author:"Paweł Adamowicz",lang:"es",cat:"Filozofia",tid:178},
  {id:1112,text:"Если когда-нибудь вас назовут извращенцем или сломанным, я скажу так: настоящие извращенцы — это те, кто сеет ненависть; сломаны те, кто поднимает руки в ненависти, готовый бросать камни или бить. Те, кто посылает плохие слова и плохую энергию, — действительно извращенцы.",author:"Павел Адамович",lang:"ru",cat:"Filozofia",tid:178},
  // Grupa 179 — Daniel Ostrowski, „Czasem najlepszą zemstą jest okazanie dobroci…"
  {id:1113,text:"Czasem najlepszą zemstą jest okazanie dobroci największemu wrogowi.",author:"Daniel Ostrowski",lang:"pl",cat:"Mądrość",tid:179},
  {id:1114,text:"Sometimes the best revenge is showing kindness to one's greatest enemy.",author:"Daniel Ostrowski",lang:"en",cat:"Mądrość",tid:179},
  {id:1115,text:"Manchmal ist die beste Rache, dem größten Feind Freundlichkeit zu zeigen.",author:"Daniel Ostrowski",lang:"de",cat:"Mądrość",tid:179},
  {id:1116,text:"Parfois la meilleure vengeance est de montrer de la bonté à son plus grand ennemi.",author:"Daniel Ostrowski",lang:"fr",cat:"Mądrość",tid:179},
  {id:1117,text:"A veces la mejor venganza es mostrar amabilidad al mayor enemigo.",author:"Daniel Ostrowski",lang:"es",cat:"Mądrość",tid:179},
  {id:1118,text:"Иногда лучшая месть — это проявить доброту к своему злейшему врагу.",author:"Даниэль Островский",lang:"ru",cat:"Mądrość",tid:179},
  // Grupa 180 — Przysłowie chińskie, „Nauczyciele mogą otworzyć drzwi…"
  {id:1119,text:"Nauczyciele mogą otworzyć drzwi, ale my sami musimy przez nie przejść.",author:"Przysłowie chińskie",lang:"pl",cat:"Mądrość",tid:180},
  {id:1120,text:"Teachers can open the door, but you must enter it yourself.",author:"Chinese proverb",lang:"en",cat:"Mądrość",tid:180},
  {id:1121,text:"Lehrer können die Tür öffnen, aber du musst selbst eintreten.",author:"Chinesisches Sprichwort",lang:"de",cat:"Mądrość",tid:180},
  {id:1122,text:"Les enseignants peuvent ouvrir la porte, mais vous devez y entrer vous-même.",author:"Proverbe chinois",lang:"fr",cat:"Mądrość",tid:180},
  {id:1123,text:"Los maestros pueden abrir la puerta, pero tú debes entrar por ti mismo.",author:"Proverbio chino",lang:"es",cat:"Mądrość",tid:180},
  {id:1124,text:"Учителя могут открыть дверь, но вам нужно войти сами.",author:"Китайская поговорка",lang:"ru",cat:"Mądrość",tid:180},
  // Grupa 181 — Autor nieznany, „If you want to be somebody, somebody really special, be yourself!"
  {id:1125,text:"Jeśli chcesz być kimś, kimś naprawdę wyjątkowym — bądź sobą!",author:"Autor nieznany",lang:"pl",cat:"Motywacja",tid:181},
  {id:1126,text:"If you want to be somebody, somebody really special, be yourself!",author:"Unknown author",lang:"en",cat:"Motywacja",tid:181},
  {id:1127,text:"Wenn du jemand sein willst, jemand wirklich Besonderes — sei du selbst!",author:"Unbekannter Autor",lang:"de",cat:"Motywacja",tid:181},
  {id:1128,text:"Si tu veux être quelqu'un, quelqu'un de vraiment spécial — sois toi-même !",author:"Auteur inconnu",lang:"fr",cat:"Motywacja",tid:181},
  {id:1129,text:"Si quieres ser alguien, alguien realmente especial — ¡sé tú mismo!",author:"Autor desconocido",lang:"es",cat:"Motywacja",tid:181},
  {id:1130,text:"Хочешь быть кем-то, кем-то действительно особенным — будь собой!",author:"Автор неизвестен",lang:"ru",cat:"Motywacja",tid:181},
  // Grupa 182 — Jonathan Swift, „A wise man should have money in his head, but not in his heart."
  {id:1131,text:"Mądry człowiek powinien mieć pieniądze w głowie, ale nie w sercu.",author:"Jonathan Swift",lang:"pl",cat:"Mądrość",tid:182},
  {id:1132,text:"A wise man should have money in his head, but not in his heart.",author:"Jonathan Swift",lang:"en",cat:"Mądrość",tid:182},
  {id:1133,text:"Ein weiser Mann sollte Geld im Kopf haben, aber nicht im Herzen.",author:"Jonathan Swift",lang:"de",cat:"Mądrość",tid:182},
  {id:1134,text:"Un homme sage devrait avoir de l'argent dans la tête, mais pas dans le cœur.",author:"Jonathan Swift",lang:"fr",cat:"Mądrość",tid:182},
  {id:1135,text:"Un hombre sabio debería tener dinero en la cabeza, pero no en el corazón.",author:"Jonathan Swift",lang:"es",cat:"Mądrość",tid:182},
  {id:1136,text:"Мудрый человек должен иметь деньги в своей голове, но не в сердце.",author:"Джонатан Свифт",lang:"ru",cat:"Mądrość",tid:182},
  // Grupa 183 — Charlie Chaplin, „Nothing is permanent in this wicked world…"
  {id:1137,text:"Nic nie jest trwałe w tym przewrotnym świecie — nawet nasze kłopoty.",author:"Charlie Chaplin",lang:"pl",cat:"Filozofia",tid:183},
  {id:1138,text:"Nothing is permanent in this wicked world — not even our troubles.",author:"Charlie Chaplin",lang:"en",cat:"Filozofia",tid:183},
  {id:1139,text:"Nichts ist dauerhaft in dieser bösen Welt — nicht einmal unsere Probleme.",author:"Charlie Chaplin",lang:"de",cat:"Filozofia",tid:183},
  {id:1140,text:"Rien n'est permanent dans ce monde méchant — pas même nos ennuis.",author:"Charlie Chaplin",lang:"fr",cat:"Filozofia",tid:183},
  {id:1141,text:"Nada es permanente en este mundo perverso — ni siquiera nuestras dificultades.",author:"Charlie Chaplin",lang:"es",cat:"Filozofia",tid:183},
  {id:1142,text:"Ничто не вечно в нашем грешном мире, даже наши неприятности.",author:"Чарли Чаплин",lang:"ru",cat:"Filozofia",tid:183},
  // Grupa 184 — Ludwig Wittgenstein, „Uttering a word is like striking a note on the keyboard of the imagination."
  {id:1143,text:"Wypowiedzieć słowo to jak nacisnąć klawisz na klawiaturze wyobraźni.",author:"Ludwig Wittgenstein",lang:"pl",cat:"Filozofia",tid:184},
  {id:1144,text:"Uttering a word is like striking a note on the keyboard of the imagination.",author:"Ludwig Wittgenstein",lang:"en",cat:"Filozofia",tid:184},
  {id:1145,text:"Ein Wort auszusprechen ist wie das Anschlagen einer Taste auf der Klaviatur der Vorstellungskraft.",author:"Ludwig Wittgenstein",lang:"de",cat:"Filozofia",tid:184},
  {id:1146,text:"Prononcer un mot, c'est comme appuyer sur une touche du clavier de l'imagination.",author:"Ludwig Wittgenstein",lang:"fr",cat:"Filozofia",tid:184},
  {id:1147,text:"Pronunciar una palabra es como tocar una tecla del teclado de la imaginación.",author:"Ludwig Wittgenstein",lang:"es",cat:"Filozofia",tid:184},
  {id:1148,text:"Произнести слово — это всё равно что нажать клавишу на клавиатуре воображения.",author:"Людвиг Витгенштейн",lang:"ru",cat:"Filozofia",tid:184},
  // Grupa 185 — Autor nieznany, „Ludzie, którzy próbują uczynić ten świat gorszym…"
  {id:1149,text:"Ludzie, którzy próbują uczynić ten świat gorszym, nie biorą sobie wolnego dnia. Dlaczego ja miałbym brać?",author:"Autor nieznany",lang:"pl",cat:"Motywacja",tid:185},
  {id:1150,text:"The people who were trying to make this world worse are not taking the day off. Why should I?",author:"Unknown author",lang:"en",cat:"Motywacja",tid:185},
  {id:1151,text:"Die Menschen, die versuchen, diese Welt schlechter zu machen, nehmen sich keinen Tag frei. Warum sollte ich es tun?",author:"Unbekannter Autor",lang:"de",cat:"Motywacja",tid:185},
  {id:1152,text:"Les gens qui essaient de rendre ce monde pire ne prennent pas leur journée. Pourquoi devrais-je le faire ?",author:"Auteur inconnu",lang:"fr",cat:"Motywacja",tid:185},
  {id:1153,text:"Las personas que intentan empeorar este mundo no se toman el día libre. ¿Por qué debería hacerlo yo?",author:"Autor desconocido",lang:"es",cat:"Motywacja",tid:185},
  {id:1154,text:"Люди, которые пытаются сделать этот мир хуже, не берут себе выходных. Почему я должен брать?",author:"Автор неизвестен",lang:"ru",cat:"Motywacja",tid:185},
  // Grupa 186 — Bernard Baruch, „Never follow the crowd."
  {id:1155,text:"Nigdy nie podążaj za tłumem.",author:"Bernard Baruch",lang:"pl",cat:"Mądrość",tid:186},
  {id:1156,text:"Never follow the crowd.",author:"Bernard Baruch",lang:"en",cat:"Mądrość",tid:186},
  {id:1157,text:"Folge niemals der Masse.",author:"Bernard Baruch",lang:"de",cat:"Mądrość",tid:186},
  {id:1158,text:"Ne suis jamais la foule.",author:"Bernard Baruch",lang:"fr",cat:"Mądrość",tid:186},
  {id:1159,text:"Nunca sigas a la multitud.",author:"Bernard Baruch",lang:"es",cat:"Mądrość",tid:186},
  {id:1160,text:"Никогда не следуй за толпой.",author:"Бернард Барух",lang:"ru",cat:"Mądrość",tid:186},
  // Grupa 187 — Terry Pratchett, „...inside every old person is a young person wondering what happened."
  {id:1161,text:"...wewnątrz każdej starszej osoby jest młoda osoba zastanawiająca się, co się stało.",author:"Terry Pratchett",lang:"pl",cat:"Życie",tid:187},
  {id:1162,text:"...inside every old person is a young person wondering what happened.",author:"Terry Pratchett",lang:"en",cat:"Życie",tid:187},
  {id:1163,text:"...in jeder alten Person steckt eine junge Person, die sich fragt, was passiert ist.",author:"Terry Pratchett",lang:"de",cat:"Życie",tid:187},
  {id:1164,text:"...à l'intérieur de chaque personne âgée se trouve une jeune personne qui se demande ce qui s'est passé.",author:"Terry Pratchett",lang:"fr",cat:"Życie",tid:187},
  {id:1165,text:"...dentro de cada persona mayor hay una persona joven preguntándose qué pasó.",author:"Terry Pratchett",lang:"es",cat:"Życie",tid:187},
  {id:1166,text:"...внутри каждого пожилого человека есть молодой человек, который удивляется, что же случилось.",author:"Терри Пратчетт",lang:"ru",cat:"Życie",tid:187},
  // Grupa 188 — Terry Pratchett (Śmierć / Death — CAPS to literacka konwencja serii „Świat Dysku")
  {id:1167,text:"ISTOTY LUDZKIE CZYNIĄ ŻYCIE TAK INTERESUJĄCYM. WIESZ, ŻE WE WSZECHŚWIECIE TAK PEŁNYM CUDÓW UDAŁO IM SIĘ WYNALEŹĆ NUDĘ.",author:"Terry Pratchett (Śmierć)",lang:"pl",cat:"Filozofia",tid:188},
  {id:1168,text:"HUMAN BEINGS MAKE LIFE SO INTERESTING. DO YOU KNOW, THAT IN A UNIVERSE SO FULL OF WONDERS, THEY HAVE MANAGED TO INVENT BOREDOM.",author:"Terry Pratchett (Death)",lang:"en",cat:"Filozofia",tid:188},
  {id:1169,text:"MENSCHEN MACHEN DAS LEBEN SO INTERESSANT. WEISST DU, DASS SIE IN EINEM UNIVERSUM VOLLER WUNDER ES GESCHAFFT HABEN, LANGEWEILE ZU ERFINDEN.",author:"Terry Pratchett (Tod)",lang:"de",cat:"Filozofia",tid:188},
  {id:1170,text:"LES ÊTRES HUMAINS RENDENT LA VIE SI INTÉRESSANTE. SAIS-TU QUE DANS UN UNIVERS SI PLEIN DE MERVEILLES, ILS ONT RÉUSSI À INVENTER L'ENNUI.",author:"Terry Pratchett (la Mort)",lang:"fr",cat:"Filozofia",tid:188},
  {id:1171,text:"LOS SERES HUMANOS HACEN LA VIDA TAN INTERESANTE. ¿SABES QUE EN UN UNIVERSO TAN LLENO DE MARAVILLAS HAN LOGRADO INVENTAR EL ABURRIMIENTO?",author:"Terry Pratchett (la Muerte)",lang:"es",cat:"Filozofia",tid:188},
  {id:1172,text:"ЛЮДИ ДЕЛАЮТ ЖИЗНЬ ТАКОЙ ИНТЕРЕСНОЙ. ЗНАЕШЬ ЛИ ТЫ, ЧТО ВО ВСЕЛЕННОЙ, ПОЛНОЙ ЧУДЕС, ИМ УДАЛОСЬ ИЗОБРЕСТИ СКУКУ.",author:"Терри Пратчетт (Смерть)",lang:"ru",cat:"Filozofia",tid:188},
  // Grupa 189 — Marcus Tullius Cicero, „A room without books…" (UWAGA: dubluje tid:166 / Chesterton)
  {id:1173,text:"Pokój bez książek to jak ciało bez duszy.",author:"Marcus Tullius Cicero",lang:"pl",cat:"Mądrość",tid:189},
  {id:1174,text:"A room without books is like a body without a soul.",author:"Marcus Tullius Cicero",lang:"en",cat:"Mądrość",tid:189},
  {id:1175,text:"Ein Raum ohne Bücher ist wie ein Körper ohne Seele.",author:"Marcus Tullius Cicero",lang:"de",cat:"Mądrość",tid:189},
  {id:1176,text:"Une pièce sans livres est comme un corps sans âme.",author:"Marcus Tullius Cicero",lang:"fr",cat:"Mądrość",tid:189},
  {id:1177,text:"Una habitación sin libros es como un cuerpo sin alma.",author:"Marco Tulio Cicerón",lang:"es",cat:"Mądrość",tid:189},
  {id:1178,text:"Комната без книг — как тело без души.",author:"Марк Туллий Цицерон",lang:"ru",cat:"Mądrość",tid:189},
  // Grupa 190 — J.R.R. Tolkien (Gandalf, „Władca Pierścieni"), „Death is just another path…"
  {id:1179,text:"Śmierć to po prostu inna droga, którą wszyscy musimy przejść.",author:"J.R.R. Tolkien",lang:"pl",cat:"Filozofia",tid:190},
  {id:1180,text:"Death is just another path, one that we all must take.",author:"J.R.R. Tolkien",lang:"en",cat:"Filozofia",tid:190},
  {id:1181,text:"Der Tod ist nur ein anderer Weg, einer, den wir alle gehen müssen.",author:"J.R.R. Tolkien",lang:"de",cat:"Filozofia",tid:190},
  {id:1182,text:"La mort n'est qu'un autre chemin, un chemin que nous devons tous emprunter.",author:"J.R.R. Tolkien",lang:"fr",cat:"Filozofia",tid:190},
  {id:1183,text:"La muerte es solo otro camino, uno que todos debemos tomar.",author:"J.R.R. Tolkien",lang:"es",cat:"Filozofia",tid:190},
  {id:1184,text:"Смерть — это просто иной путь, по которому всем нам предстоит пройти.",author:"Дж. Р. Р. Толкин",lang:"ru",cat:"Filozofia",tid:190},
  // Grupa 191 — Stan Lee (Wuj Ben w „Spider-Manie"), „With great power comes great responsibility."
  {id:1185,text:"Z wielką mocą przychodzi wielka odpowiedzialność.",author:"Stan Lee (Wuj Ben)",lang:"pl",cat:"Mądrość",tid:191},
  {id:1186,text:"With great power comes great responsibility.",author:"Stan Lee (Uncle Ben)",lang:"en",cat:"Mądrość",tid:191},
  {id:1187,text:"Mit großer Kraft kommt große Verantwortung.",author:"Stan Lee (Onkel Ben)",lang:"de",cat:"Mądrość",tid:191},
  {id:1188,text:"Un grand pouvoir implique de grandes responsabilités.",author:"Stan Lee (Oncle Ben)",lang:"fr",cat:"Mądrość",tid:191},
  {id:1189,text:"Un gran poder conlleva una gran responsabilidad.",author:"Stan Lee (Tío Ben)",lang:"es",cat:"Mądrość",tid:191},
  {id:1190,text:"С большой силой приходит большая ответственность.",author:"Стэн Ли (Дядя Бен)",lang:"ru",cat:"Mądrość",tid:191},
  // Grupa 192 — Markus Herz (UWAGA: klasycznie atrybuowane Markowi Twainowi), „Be careful about reading health books…"
  {id:1191,text:"Uważaj z czytaniem książek o zdrowiu. Któregoś pięknego dnia umrzesz z powodu literówki.",author:"Markus Herz",lang:"pl",cat:"Mądrość",tid:192},
  {id:1192,text:"Be careful about reading health books. Some fine day you'll die of a misprint.",author:"Markus Herz",lang:"en",cat:"Mądrość",tid:192},
  {id:1193,text:"Sei vorsichtig beim Lesen von Gesundheitsbüchern. An einem schönen Tag wirst du an einem Druckfehler sterben.",author:"Markus Herz",lang:"de",cat:"Mądrość",tid:192},
  {id:1194,text:"Sois prudent avec les livres de santé. Un beau jour, tu mourras d'une faute d'impression.",author:"Markus Herz",lang:"fr",cat:"Mądrość",tid:192},
  {id:1195,text:"Ten cuidado al leer libros de salud. Algún día morirás de una errata.",author:"Markus Herz",lang:"es",cat:"Mądrość",tid:192},
  {id:1196,text:"Будьте осторожны при чтении книг о здоровье. В один прекрасный день вы умрёте от опечатки.",author:"Маркус Герц",lang:"ru",cat:"Mądrość",tid:192},
  // Grupa 193 — James Bond, „Shaken, not stirred." (kultowy zwrot z filmów 007)
  {id:1197,text:"Wstrząśnięte, niezmieszane.",author:"James Bond",lang:"pl",cat:"Życie",tid:193},
  {id:1198,text:"Shaken, not stirred.",author:"James Bond",lang:"en",cat:"Życie",tid:193},
  {id:1199,text:"Geschüttelt, nicht gerührt.",author:"James Bond",lang:"de",cat:"Życie",tid:193},
  {id:1200,text:"Au shaker, pas à la cuillère.",author:"James Bond",lang:"fr",cat:"Życie",tid:193},
  {id:1201,text:"Agitado, no revuelto.",author:"James Bond",lang:"es",cat:"Życie",tid:193},
  {id:1202,text:"Взболтать, но не смешивать.",author:"Джеймс Бонд",lang:"ru",cat:"Życie",tid:193},
  // Grupa 194 — William Shakespeare, „Hell is empty and all the devils are here." (z „Burzy")
  {id:1203,text:"Piekło jest puste, a wszystkie diabły są tutaj.",author:"William Shakespeare",lang:"pl",cat:"Filozofia",tid:194},
  {id:1204,text:"Hell is empty and all the devils are here.",author:"William Shakespeare",lang:"en",cat:"Filozofia",tid:194},
  {id:1205,text:"Die Hölle ist leer, und alle Teufel sind hier.",author:"William Shakespeare",lang:"de",cat:"Filozofia",tid:194},
  {id:1206,text:"L'enfer est vide, et tous les diables sont ici.",author:"William Shakespeare",lang:"fr",cat:"Filozofia",tid:194},
  {id:1207,text:"El infierno está vacío y todos los diablos están aquí.",author:"William Shakespeare",lang:"es",cat:"Filozofia",tid:194},
  {id:1208,text:"Ад пуст, а все черти здесь.",author:"Уильям Шекспир",lang:"ru",cat:"Filozofia",tid:194},
  // Grupa 195 — Lao Tzu, „Nature does not hurry, yet everything is accomplished."
  {id:1209,text:"Natura się nie spieszy, a wszystko zostaje dokonane.",author:"Laozi",lang:"pl",cat:"Filozofia",tid:195},
  {id:1210,text:"Nature does not hurry, yet everything is accomplished.",author:"Laozi",lang:"en",cat:"Filozofia",tid:195},
  {id:1211,text:"Die Natur eilt nicht, und doch wird alles vollbracht.",author:"Laozi",lang:"de",cat:"Filozofia",tid:195},
  {id:1212,text:"La nature ne se hâte pas, et pourtant tout s'accomplit.",author:"Laozi",lang:"fr",cat:"Filozofia",tid:195},
  {id:1213,text:"La naturaleza no se apresura, y sin embargo todo se cumple.",author:"Laozi",lang:"es",cat:"Filozofia",tid:195},
  {id:1214,text:"Природа не спешит, и всё же всё свершается.",author:"Лао-цзы",lang:"ru",cat:"Filozofia",tid:195},
  // Grupa 196 — Eleanor Roosevelt, „Great minds discuss ideas…" (RU już istnieje jako id:60)
  {id:1215,text:"Wielkie umysły rozmawiają o ideach; przeciętne umysły rozmawiają o wydarzeniach; małe umysły rozmawiają o ludziach.",author:"Eleanor Roosevelt",lang:"pl",cat:"Mądrość",tid:196},
  {id:1216,text:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt",lang:"en",cat:"Mądrość",tid:196},
  {id:1217,text:"Große Geister diskutieren Ideen; mittelmäßige Geister diskutieren Ereignisse; kleine Geister diskutieren Menschen.",author:"Eleanor Roosevelt",lang:"de",cat:"Mądrość",tid:196},
  {id:1218,text:"Les grands esprits discutent d'idées ; les esprits moyens discutent d'événements ; les petits esprits discutent des gens.",author:"Eleanor Roosevelt",lang:"fr",cat:"Mądrość",tid:196},
  {id:1219,text:"Las mentes grandes hablan de ideas; las mentes medianas hablan de eventos; las mentes pequeñas hablan de personas.",author:"Eleanor Roosevelt",lang:"es",cat:"Mądrość",tid:196},
  // Grupa 197 — Autor nieznany, „Sukces ma wielu ojców, porażka zawsze jest sierotą."
  {id:1220,text:"Sukces ma wielu ojców, porażka zawsze jest sierotą.",author:"Autor nieznany",lang:"pl",cat:"Sukces",tid:197},
  {id:1221,text:"Success has many fathers, while failure is an orphan.",author:"Unknown author",lang:"en",cat:"Sukces",tid:197},
  {id:1222,text:"Der Erfolg hat viele Väter, der Misserfolg ist immer ein Waisenkind.",author:"Unbekannter Autor",lang:"de",cat:"Sukces",tid:197},
  {id:1223,text:"Le succès a beaucoup de pères, l'échec est toujours orphelin.",author:"Auteur inconnu",lang:"fr",cat:"Sukces",tid:197},
  {id:1224,text:"El éxito tiene muchos padres, el fracaso siempre es huérfano.",author:"Autor desconocido",lang:"es",cat:"Sukces",tid:197},
  {id:1225,text:"У успеха много отцов, поражение всегда сирота.",author:"Автор неизвестен",lang:"ru",cat:"Sukces",tid:197},
  // Grupa 198 — Mae West, „You only live once, but if you do it right, once is enough."
  {id:1226,text:"Żyjemy tylko raz, ale jeśli zrobimy to dobrze, raz wystarczy.",author:"Mae West",lang:"pl",cat:"Życie",tid:198},
  {id:1227,text:"You only live once, but if you do it right, once is enough.",author:"Mae West",lang:"en",cat:"Życie",tid:198},
  {id:1228,text:"Man lebt nur einmal, aber wenn man es richtig macht, reicht einmal.",author:"Mae West",lang:"de",cat:"Życie",tid:198},
  {id:1229,text:"On ne vit qu'une fois, mais si on le fait bien, une fois suffit.",author:"Mae West",lang:"fr",cat:"Życie",tid:198},
  {id:1230,text:"Solo se vive una vez, pero si lo haces bien, una vez basta.",author:"Mae West",lang:"es",cat:"Życie",tid:198},
  {id:1231,text:"Мы живём один раз, но если правильно распорядиться жизнью, то и одного раза достаточно.",author:"Мэй Уэст",lang:"ru",cat:"Życie",tid:198},
  // Grupa 199 — Mae West, „Good girls go to heaven, bad girls go everywhere."
  {id:1232,text:"Dobre dziewczyny idą do nieba, złe dziewczyny idą wszędzie.",author:"Mae West",lang:"pl",cat:"Życie",tid:199},
  {id:1233,text:"Good girls go to heaven, bad girls go everywhere.",author:"Mae West",lang:"en",cat:"Życie",tid:199},
  {id:1234,text:"Gute Mädchen kommen in den Himmel, böse Mädchen kommen überall hin.",author:"Mae West",lang:"de",cat:"Życie",tid:199},
  {id:1235,text:"Les bonnes filles vont au paradis, les mauvaises filles vont partout.",author:"Mae West",lang:"fr",cat:"Życie",tid:199},
  {id:1236,text:"Las chicas buenas van al cielo, las chicas malas van a todas partes.",author:"Mae West",lang:"es",cat:"Życie",tid:199},
  {id:1237,text:"Хорошие девочки попадают на небеса, плохие — повсюду.",author:"Мэй Уэст",lang:"ru",cat:"Życie",tid:199},
  // Grupa 200 — Philip Pullman, „But you cannot change what you are, only what you do."
  {id:1238,text:"Ale nie możesz zmienić tego, kim jesteś, tylko to, co robisz.",author:"Philip Pullman",lang:"pl",cat:"Filozofia",tid:200},
  {id:1239,text:"But you cannot change what you are, only what you do.",author:"Philip Pullman",lang:"en",cat:"Filozofia",tid:200},
  {id:1240,text:"Aber du kannst nicht ändern, was du bist, nur was du tust.",author:"Philip Pullman",lang:"de",cat:"Filozofia",tid:200},
  {id:1241,text:"Mais tu ne peux pas changer ce que tu es, seulement ce que tu fais.",author:"Philip Pullman",lang:"fr",cat:"Filozofia",tid:200},
  {id:1242,text:"Pero no puedes cambiar lo que eres, solo lo que haces.",author:"Philip Pullman",lang:"es",cat:"Filozofia",tid:200},
  {id:1243,text:"Но ты не можешь изменить то, кем ты являешься, только то, что ты делаешь.",author:"Филип Пулман",lang:"ru",cat:"Filozofia",tid:200},
  // Grupa 201 — Adam Asnyk, „Miejcie odwagę!..."
  {id:1244,text:"Miejcie odwagę!... Nie tę jednodniową, co w rozpaczliwym przedsięwzięciu pryska, lecz tę, co wiecznie z podniesioną głową nie da się zepchnąć ze swego stanowiska.",author:"Adam Asnyk",lang:"pl",cat:"Motywacja",tid:201},
  {id:1245,text:"Have courage! Not the one-day kind that bursts in a desperate venture, but the kind that always with head held high refuses to be pushed from its position.",author:"Adam Asnyk",lang:"en",cat:"Motywacja",tid:201},
  {id:1246,text:"Habt Mut! Nicht jenen Mut für einen Tag, der in verzweifeltem Vorhaben zerschellt, sondern jenen, der stets erhobenen Hauptes sich nicht von seinem Posten verdrängen lässt.",author:"Adam Asnyk",lang:"de",cat:"Motywacja",tid:201},
  {id:1247,text:"Ayez du courage ! Pas le courage d'un jour qui éclate dans une entreprise désespérée, mais celui qui, la tête toujours haute, refuse d'être chassé de sa position.",author:"Adam Asnyk",lang:"fr",cat:"Motywacja",tid:201},
  {id:1248,text:"¡Tened coraje! No el coraje de un día que estalla en una empresa desesperada, sino aquel que, con la cabeza siempre en alto, se niega a ser empujado de su posición.",author:"Adam Asnyk",lang:"es",cat:"Motywacja",tid:201},
  {id:1249,text:"Имейте мужество!.. Не однодневное, что в отчаянном порыве разбивается, но то, что вечно с поднятой головой не даёт себя сбросить со своей позиции.",author:"Адам Аснык",lang:"ru",cat:"Motywacja",tid:201},
  // Grupa 202 — William Shakespeare, „There are more things in heaven and earth, Horatio…" (Hamlet)
  {id:1250,text:"Więcej jest rzeczy na ziemi i w niebie, niż się ich śniło waszym filozofom.",author:"William Shakespeare",lang:"pl",cat:"Filozofia",tid:202},
  {id:1251,text:"There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy.",author:"William Shakespeare",lang:"en",cat:"Filozofia",tid:202},
  {id:1252,text:"Es gibt mehr Dinge zwischen Himmel und Erde, Horatio, als eure Schulweisheit sich träumen lässt.",author:"William Shakespeare",lang:"de",cat:"Filozofia",tid:202},
  {id:1253,text:"Il y a plus de choses au ciel et sur la terre, Horatio, que n'en rêve votre philosophie.",author:"William Shakespeare",lang:"fr",cat:"Filozofia",tid:202},
  {id:1254,text:"Hay más cosas en el cielo y en la tierra, Horacio, que las que sueña tu filosofía.",author:"William Shakespeare",lang:"es",cat:"Filozofia",tid:202},
  {id:1255,text:"Есть многое на свете, друг Горацио, что и не снилось нашим мудрецам.",author:"Уильям Шекспир",lang:"ru",cat:"Filozofia",tid:202},
  // Grupa 203 — Autor nieznany, „Remember that the most dangerous prison is the one in your head."
  {id:1256,text:"Pamiętaj, że najgroźniejsze więzienie jest w twojej głowie.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:203},
  {id:1257,text:"Remember that the most dangerous prison is the one in your head.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:203},
  {id:1258,text:"Denk daran, dass das gefährlichste Gefängnis das in deinem Kopf ist.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:203},
  {id:1259,text:"Souviens-toi que la prison la plus dangereuse est celle dans ta tête.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:203},
  {id:1260,text:"Recuerda que la prisión más peligrosa es la de tu cabeza.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:203},
  {id:1261,text:"Помни, что нет тюрьмы, страшнее чем в голове.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:203},
  // Grupa 204 — Autor nieznany, „Be careful with your thoughts — they are the beginning of deeds."
  {id:1262,text:"Uważaj na swoje myśli — to początek czynów.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:204},
  {id:1263,text:"Be careful with your thoughts — they are the beginning of deeds.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:204},
  {id:1264,text:"Sei vorsichtig mit deinen Gedanken — sie sind der Anfang von Taten.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:204},
  {id:1265,text:"Sois prudent avec tes pensées — elles sont le début des actes.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:204},
  {id:1266,text:"Cuida tus pensamientos — son el comienzo de las acciones.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:204},
  {id:1267,text:"Будьте внимательны к своим мыслям — они начало поступков.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:204},
  // Grupa 205 — John Lennon, „Jeśli marnowanie czasu daje Ci radość…"
  {id:1268,text:"Jeśli marnowanie czasu daje Ci radość, to nie jest to czas zmarnowany.",author:"John Lennon",lang:"pl",cat:"Życie",tid:205},
  {id:1269,text:"If wasting time gives you joy, then it is not wasted time.",author:"John Lennon",lang:"en",cat:"Życie",tid:205},
  {id:1270,text:"Wenn Zeit zu verschwenden dir Freude bereitet, dann ist sie nicht verschwendet.",author:"John Lennon",lang:"de",cat:"Życie",tid:205},
  {id:1271,text:"Si perdre du temps te procure de la joie, alors ce n'est pas du temps perdu.",author:"John Lennon",lang:"fr",cat:"Życie",tid:205},
  {id:1272,text:"Si perder el tiempo te da alegría, entonces no es tiempo perdido.",author:"John Lennon",lang:"es",cat:"Życie",tid:205},
  {id:1273,text:"Если трата времени приносит тебе радость, то это не потраченное впустую время.",author:"Джон Леннон",lang:"ru",cat:"Życie",tid:205},
  // Grupa 206 — Donatien Alphonse François de Sade, „Rozum, mój przyjacielu…" (etyka świecka)
  {id:1274,text:"Rozum, mój przyjacielu, tak właśnie, sam rozum musi przekonać nas o tym, że szkodząc bliźnim nigdy nie staniemy się szczęśliwsi; samo nasze serce musi nas przekonać, że przyczynianie się do szczęścia bliźnich jest najbardziej wzniosłą rzeczą, jaką otrzymaliśmy od natury na tej ziemi. W tym jednym słowie zamyka się cała ludzka moralność: uczynić innych równie szczęśliwymi, jakbyśmy sami tego pragnęli i nie wyrządzać im nigdy zła większego niż takie, którego sami gotowi bylibyśmy doznać. Oto, mój przyjacielu, jedyne zasady, wedle których powinniśmy postępować i nie trzeba ani boga, ani religii, by zakosztować ich i je uznać: trzeba tylko dobrego serca.",author:"Donatien Alphonse François de Sade",lang:"pl",cat:"Filozofia",tid:206},
  {id:1275,text:"Reason, my friend, yes — reason alone must convince us that by harming our fellow men we shall never become happier; our own heart must convince us that contributing to the happiness of our fellow men is the most sublime thing we have received from nature on this earth. In this single word the whole of human morality is contained: to make others as happy as we ourselves would wish to be, and never to do them greater harm than we ourselves would be willing to endure. These, my friend, are the only principles by which we should act, and one needs neither god nor religion to savour them and acknowledge them: one needs only a good heart.",author:"Donatien Alphonse François de Sade",lang:"en",cat:"Filozofia",tid:206},
  {id:1276,text:"Die Vernunft, mein Freund, ja, die Vernunft allein muss uns davon überzeugen, dass wir, indem wir unseren Nächsten schaden, niemals glücklicher werden; unser eigenes Herz muss uns überzeugen, dass es das Erhabenste ist, was wir von der Natur auf dieser Erde empfangen haben, zum Glück unserer Nächsten beizutragen. In diesem einen Wort liegt die ganze menschliche Moral: andere ebenso glücklich zu machen, wie wir es selbst sein möchten, und ihnen niemals ein größeres Übel zuzufügen, als wir selbst zu erleiden bereit wären. Das, mein Freund, sind die einzigen Grundsätze, nach denen wir handeln sollten, und man braucht weder Gott noch Religion, um sie zu kosten und anzuerkennen: man braucht nur ein gutes Herz.",author:"Donatien Alphonse François de Sade",lang:"de",cat:"Filozofia",tid:206},
  {id:1277,text:"La raison, mon ami, oui, la raison seule doit nous convaincre qu'en nuisant à nos semblables nous ne serons jamais plus heureux ; notre propre cœur doit nous convaincre que contribuer au bonheur de nos semblables est la chose la plus sublime que nous ayons reçue de la nature sur cette terre. Dans ce seul mot se ferme toute la morale humaine : rendre les autres aussi heureux que nous-mêmes voudrions l'être, et ne jamais leur causer un mal plus grand que celui que nous serions prêts à subir. Voilà, mon ami, les seuls principes selon lesquels nous devrions agir, et il ne faut ni dieu ni religion pour les goûter et les reconnaître : il ne faut qu'un bon cœur.",author:"Donatien Alphonse François de Sade",lang:"fr",cat:"Filozofia",tid:206},
  {id:1278,text:"La razón, amigo mío, sí, la razón sola debe convencernos de que, perjudicando a nuestros semejantes, nunca seremos más felices; nuestro propio corazón debe convencernos de que contribuir a la felicidad de nuestros semejantes es la cosa más sublime que hemos recibido de la naturaleza en esta tierra. En esta sola palabra se encierra toda la moral humana: hacer a los demás tan felices como nosotros mismos quisiéramos serlo, y nunca causarles un mal mayor del que nosotros mismos estuviéramos dispuestos a sufrir. He aquí, amigo mío, los únicos principios según los cuales deberíamos actuar, y no se necesita ni dios ni religión para saborearlos y reconocerlos: solo se necesita un buen corazón.",author:"Donatien Alphonse François de Sade",lang:"es",cat:"Filozofia",tid:206},
  {id:1279,text:"Разум, мой друг, да, один лишь разум должен убедить нас в том, что, причиняя вред ближним, мы никогда не станем счастливее; само наше сердце должно убедить нас в том, что способствовать счастью ближних — самое возвышенное, что мы получили от природы на этой земле. В этом одном слове заключается вся человеческая мораль: сделать других столь же счастливыми, как мы сами того желали бы, и никогда не причинять им зла большего, чем такое, которое мы сами были бы готовы испытать. Вот, мой друг, единственные принципы, согласно которым мы должны поступать, и не нужно ни бога, ни религии, чтобы насладиться ими и признать их: нужно лишь доброе сердце.",author:"Донатьен Альфонс Франсуа де Сад",lang:"ru",cat:"Filozofia",tid:206},
  // Grupa 207 — Mehmet Murat İldan, „Księżyc w pełni to dobry wędkarz…"
  {id:1280,text:"Księżyc w pełni to dobry wędkarz. Z łatwością łowi spojrzenia w swoją sieć!",author:"Mehmet Murat İldan",lang:"pl",cat:"Życie",tid:207},
  {id:1281,text:"Full moon is a good fisherman; every eye is easily caught in his net!",author:"Mehmet Murat İldan",lang:"en",cat:"Życie",tid:207},
  {id:1282,text:"Der Vollmond ist ein guter Angler; alle Blicke werden mit Leichtigkeit in seinem Netz gefangen!",author:"Mehmet Murat İldan",lang:"de",cat:"Życie",tid:207},
  {id:1283,text:"La pleine lune est un bon pêcheur ; tous les regards sont facilement pris dans son filet !",author:"Mehmet Murat İldan",lang:"fr",cat:"Życie",tid:207},
  {id:1284,text:"La luna llena es un buen pescador; todas las miradas quedan fácilmente atrapadas en su red.",author:"Mehmet Murat İldan",lang:"es",cat:"Życie",tid:207},
  {id:1285,text:"Полнолуние — хороший рыбак; каждый взгляд легко ловится в его сети!",author:"Мехмет Мурат Илдан",lang:"ru",cat:"Życie",tid:207},
  // Grupa 208 — Antoine de Saint-Exupéry, „Kto poniża, sam jest niski."
  {id:1286,text:"Kto poniża, sam jest niski.",author:"Antoine de Saint-Exupéry",lang:"pl",cat:"Mądrość",tid:208},
  {id:1287,text:"He who humiliates others is himself small.",author:"Antoine de Saint-Exupéry",lang:"en",cat:"Mądrość",tid:208},
  {id:1288,text:"Wer andere demütigt, ist selbst klein.",author:"Antoine de Saint-Exupéry",lang:"de",cat:"Mądrość",tid:208},
  {id:1289,text:"Celui qui humilie autrui est lui-même bas.",author:"Antoine de Saint-Exupéry",lang:"fr",cat:"Mądrość",tid:208},
  {id:1290,text:"Quien humilla a otros es él mismo bajo.",author:"Antoine de Saint-Exupéry",lang:"es",cat:"Mądrość",tid:208},
  {id:1291,text:"Тот, кто унижает, сам низок.",author:"Антуан де Сент-Экзюпери",lang:"ru",cat:"Mądrość",tid:208},
  // Grupa 209 — św. Tomasz z Akwinu, „Strzeż się człowieka jednej księgi." (Hominem unius libri timeo)
  // UWAGA: zbliżona do tid:117 (Casanova). Akwinata jest historycznie pierwowzorem, Casanova późniejszym cytującym.
  {id:1292,text:"Strzeż się człowieka jednej księgi.",author:"św. Tomasz z Akwinu",lang:"pl",cat:"Mądrość",tid:209},
  {id:1293,text:"Beware the man of one book.",author:"Thomas Aquinas",lang:"en",cat:"Mądrość",tid:209},
  {id:1294,text:"Hüte dich vor dem Menschen eines einzigen Buches.",author:"Thomas von Aquin",lang:"de",cat:"Mądrość",tid:209},
  {id:1295,text:"Méfie-toi de l'homme d'un seul livre.",author:"Thomas d'Aquin",lang:"fr",cat:"Mądrość",tid:209},
  {id:1296,text:"Cuidado con el hombre de un solo libro.",author:"Tomás de Aquino",lang:"es",cat:"Mądrość",tid:209},
  {id:1297,text:"Остерегайся человека одной книги.",author:"Фома Аквинский",lang:"ru",cat:"Mądrość",tid:209},
  // Grupa 210 — Andrzej Eldrycz, „Tak, jak nasze niedoskonałe komputery…" (umysły a manipulacja)
  {id:1298,text:"Tak, jak nasze niedoskonałe komputery wymagają programów antywirusowych i zabezpieczeń przed atakami z zewnątrz, tak nasze umysły nie są z natury gotowe, by radzić sobie z podstępnymi, trudno wykrywalnymi atakami.",author:"Andrzej Eldrycz",lang:"pl",cat:"Filozofia",tid:210},
  {id:1299,text:"Just as our imperfect computers require antivirus programs and defenses against external attacks, so our minds are not by nature ready to cope with insidious, hard-to-detect attacks.",author:"Andrzej Eldrycz",lang:"en",cat:"Filozofia",tid:210},
  {id:1300,text:"So wie unsere unvollkommenen Computer Antivirenprogramme und Schutz vor Angriffen von außen benötigen, so sind unsere Köpfe von Natur aus nicht bereit, mit hinterhältigen, schwer erkennbaren Angriffen umzugehen.",author:"Andrzej Eldrycz",lang:"de",cat:"Filozofia",tid:210},
  {id:1301,text:"Tout comme nos ordinateurs imparfaits ont besoin de programmes antivirus et de protections contre les attaques extérieures, nos esprits ne sont pas naturellement prêts à faire face à des attaques insidieuses et difficiles à détecter.",author:"Andrzej Eldrycz",lang:"fr",cat:"Filozofia",tid:210},
  {id:1302,text:"Así como nuestros computadores imperfectos requieren programas antivirus y protección contra ataques externos, nuestras mentes no están preparadas por naturaleza para enfrentarse a ataques insidiosos y difíciles de detectar.",author:"Andrzej Eldrycz",lang:"es",cat:"Filozofia",tid:210},
  {id:1303,text:"Подобно тому, как наши несовершенные компьютеры нуждаются в антивирусных программах и защите от внешних атак, наши умы по природе не готовы справляться с коварными, трудно обнаруживаемыми атаками.",author:"Анджей Эльдрыч",lang:"ru",cat:"Filozofia",tid:210},
  // Grupa 211 — ks. Jan Kaczkowski, „Jeśli ktoś mówi, że dla dobra narodu…" (etyka i antysemityzm)
  {id:1304,text:"Jeśli ktoś mówi, że dla dobra narodu trzeba poświęcić jednostkę, to ja cały chodzę. Jak mi ktoś wmawia, że pewni ludzie są mniej wartościowi, jak katolik przyznaje, że jest antysemitą albo rasistą, to we mnie się wszystko burzy. Katolik nie może być anty drugi człowiek, zwłaszcza kiedy ten drugi jest słaby, chory. Im bardziej ktoś jest inny, im bardziej ktoś jest dziwny, tym bardziej ma twarz Chrystusa. Bywają tacy, którzy nawet katolicyzm uzasadniają swoim antysemityzmem. A przecież skoro Chrystus był Żydem, skoro Matka Najświętsza była Żydówką, to Żydzi są naszymi braćmi, których powinniśmy szanować i kochać. Oczywiście, że zdarzają się wśród jednych i drugich lepsi, a także gorsi ludzie, ale granica nie przebiega pomiędzy rasami i narodami, ale pomiędzy sumieniami, a czasami pośrodku sumień.",author:"ks. Jan Kaczkowski",lang:"pl",cat:"Filozofia",tid:211},
  {id:1305,text:"If someone says that for the good of the nation we must sacrifice the individual, I tremble all over. When someone tries to convince me that certain people are less valuable, when a Catholic admits to being anti-Semitic or a racist, everything boils inside me. A Catholic cannot be anti the other human being, especially when that other is weak or sick. The more someone is different, the more strange someone is, the more they have the face of Christ. There are those who even justify their Catholicism with their anti-Semitism. But since Christ was a Jew, since the Holy Mother was Jewish, then Jews are our brothers whom we should respect and love. Of course, among both groups there are better and worse people, but the boundary does not run between races and nations, but between consciences — and sometimes through the middle of consciences.",author:"Father Jan Kaczkowski",lang:"en",cat:"Filozofia",tid:211},
  {id:1306,text:"Wenn jemand sagt, dass man für das Wohl der Nation den Einzelnen opfern muss, dann zittere ich am ganzen Leib. Wenn mir jemand einreden will, dass bestimmte Menschen weniger wert seien, wenn ein Katholik zugibt, Antisemit oder Rassist zu sein, dann kocht alles in mir. Ein Katholik kann nicht gegen den anderen Menschen sein, besonders wenn dieser andere schwach oder krank ist. Je anders jemand ist, je seltsamer jemand ist, desto mehr trägt er das Gesicht Christi. Es gibt solche, die sogar ihren Katholizismus mit ihrem Antisemitismus begründen. Aber wenn Christus ein Jude war, wenn die Heilige Mutter Jüdin war, dann sind die Juden unsere Brüder, die wir achten und lieben sollen. Natürlich gibt es bessere und schlechtere Menschen auf beiden Seiten, aber die Grenze verläuft nicht zwischen Rassen und Nationen, sondern zwischen Gewissen — und manchmal mitten durch die Gewissen.",author:"Pater Jan Kaczkowski",lang:"de",cat:"Filozofia",tid:211},
  {id:1307,text:"Si quelqu'un dit que pour le bien de la nation il faut sacrifier l'individu, je tremble de tout mon être. Quand quelqu'un essaie de me convaincre que certaines personnes valent moins, quand un catholique avoue être antisémite ou raciste, tout bouillonne en moi. Un catholique ne peut pas être anti l'autre être humain, surtout quand cet autre est faible ou malade. Plus quelqu'un est différent, plus quelqu'un est étrange, plus il porte le visage du Christ. Il y a ceux qui justifient même leur catholicisme par leur antisémitisme. Pourtant, puisque le Christ était juif, puisque la Sainte Mère était juive, alors les juifs sont nos frères que nous devons respecter et aimer. Bien sûr, il y a parmi les uns et les autres de meilleures et de pires personnes, mais la frontière ne passe pas entre les races et les nations, mais entre les consciences — et parfois au milieu des consciences.",author:"père Jan Kaczkowski",lang:"fr",cat:"Filozofia",tid:211},
  {id:1308,text:"Si alguien dice que por el bien de la nación hay que sacrificar al individuo, yo entero me estremezco. Cuando alguien intenta convencerme de que ciertas personas son menos valiosas, cuando un católico admite ser antisemita o racista, todo se rebela en mí. Un católico no puede estar contra el otro ser humano, especialmente cuando ese otro es débil o está enfermo. Cuanto más diferente es alguien, cuanto más extraño es alguien, más lleva el rostro de Cristo. Hay quienes incluso justifican su catolicismo con su antisemitismo. Pero ya que Cristo era judío, ya que la Santísima Madre era judía, entonces los judíos son nuestros hermanos a quienes debemos respetar y amar. Por supuesto, entre unos y otros hay personas mejores y peores, pero la frontera no pasa entre razas y naciones, sino entre conciencias — y a veces en medio de las conciencias.",author:"padre Jan Kaczkowski",lang:"es",cat:"Filozofia",tid:211},
  {id:1309,text:"Если кто-то говорит, что ради блага народа нужно пожертвовать личностью, то меня всего трясёт. Когда мне кто-то внушает, что определённые люди менее ценны, когда католик признаётся, что он антисемит или расист, во мне всё кипит. Католик не может быть против другого человека, особенно когда этот другой слаб или болен. Чем больше кто-то иной, чем более странный, тем больше у него лицо Христа. Бывают такие, которые даже свой католицизм оправдывают антисемитизмом. А ведь раз Христос был евреем, раз Матерь Святейшая была еврейкой, то евреи — наши братья, которых мы должны уважать и любить. Конечно, среди одних и других бывают лучшие и худшие люди, но граница проходит не между расами и народами, а между совестями — а иногда посередине совестей.",author:"ксёндз Ян Качковский",lang:"ru",cat:"Filozofia",tid:211},
  // Grupa 212 — W. Clement Stone, „Aim for the moon. If you miss, you may hit a star." (zbliżona do tid:104 Les Brown)
  {id:1310,text:"Mierz w księżyc. Jeśli chybisz, możesz trafić w gwiazdę.",author:"W. Clement Stone",lang:"pl",cat:"Motywacja",tid:212},
  {id:1311,text:"Aim for the moon. If you miss, you may hit a star.",author:"W. Clement Stone",lang:"en",cat:"Motywacja",tid:212},
  {id:1312,text:"Ziele auf den Mond. Wenn du daneben triffst, könntest du einen Stern treffen.",author:"W. Clement Stone",lang:"de",cat:"Motywacja",tid:212},
  {id:1313,text:"Vise la lune. Si tu la rates, tu pourrais atteindre une étoile.",author:"W. Clement Stone",lang:"fr",cat:"Motywacja",tid:212},
  {id:1314,text:"Apunta a la luna. Si fallas, puede que des en una estrella.",author:"W. Clement Stone",lang:"es",cat:"Motywacja",tid:212},
  {id:1315,text:"Целься в луну. Если промахнёшься, можешь попасть в звезду.",author:"У. Клемент Стоун",lang:"ru",cat:"Motywacja",tid:212},
  // Grupa 213 — Wisława Szymborska, „Życie, choćby i długie, zawsze będzie krótkie."
  {id:1316,text:"Życie, choćby i długie, zawsze będzie krótkie.",author:"Wisława Szymborska",lang:"pl",cat:"Filozofia",tid:213},
  {id:1317,text:"Life, however long, will always be short.",author:"Wisława Szymborska",lang:"en",cat:"Filozofia",tid:213},
  {id:1318,text:"Das Leben, mag es auch lang sein, wird immer kurz sein.",author:"Wisława Szymborska",lang:"de",cat:"Filozofia",tid:213},
  {id:1319,text:"La vie, aussi longue soit-elle, sera toujours courte.",author:"Wisława Szymborska",lang:"fr",cat:"Filozofia",tid:213},
  {id:1320,text:"La vida, por larga que sea, siempre será corta.",author:"Wisława Szymborska",lang:"es",cat:"Filozofia",tid:213},
  {id:1321,text:"Жизнь, как бы ни была долгой, всегда будет короткой.",author:"Вислава Шимборская",lang:"ru",cat:"Filozofia",tid:213},
  // Grupa 214 — Autor nieznany, „Never be a prisoner of your own past…"
  {id:1322,text:"Nigdy nie bądź więźniem swojej przeszłości. To była tylko lekcja, nie wyrok dożywocia.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:214},
  {id:1323,text:"Never be a prisoner of your own past. It was just a lesson, not a life sentence.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:214},
  {id:1324,text:"Sei niemals ein Gefangener deiner eigenen Vergangenheit. Es war nur eine Lektion, keine lebenslange Strafe.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:214},
  {id:1325,text:"Ne sois jamais prisonnier de ton propre passé. Ce n'était qu'une leçon, pas une condamnation à perpétuité.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:214},
  {id:1326,text:"Nunca seas prisionero de tu propio pasado. Era solo una lección, no una cadena perpetua.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:214},
  {id:1327,text:"Никогда не будь пленником собственного прошлого. Это был лишь урок, а не пожизненный приговор.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:214},
  // Grupa 215 — Benedict Cumberbatch, „Live a life less ordinary." (nawiązanie do filmu D. Boyle'a, 1997)
  {id:1328,text:"Żyj życiem mniej zwyczajnym.",author:"Benedict Cumberbatch",lang:"pl",cat:"Motywacja",tid:215},
  {id:1329,text:"Live a life less ordinary.",author:"Benedict Cumberbatch",lang:"en",cat:"Motywacja",tid:215},
  {id:1330,text:"Lebe ein weniger gewöhnliches Leben.",author:"Benedict Cumberbatch",lang:"de",cat:"Motywacja",tid:215},
  {id:1331,text:"Vis une vie moins ordinaire.",author:"Benedict Cumberbatch",lang:"fr",cat:"Motywacja",tid:215},
  {id:1332,text:"Vive una vida menos ordinaria.",author:"Benedict Cumberbatch",lang:"es",cat:"Motywacja",tid:215},
  {id:1333,text:"Живи менее обычной жизнью.",author:"Бенедикт Камбербэтч",lang:"ru",cat:"Motywacja",tid:215},
  // Grupa 216 — Billy Cox, „Jeśli nie kochasz tego, co robisz…"
  {id:1334,text:"Jeśli nie kochasz tego, co robisz, to masz dwa wyjścia: zmień to, co robisz, albo zmień to, co kochasz.",author:"Billy Cox",lang:"pl",cat:"Motywacja",tid:216},
  {id:1335,text:"If you don't love what you do, you have two choices: change what you do, or change what you love.",author:"Billy Cox",lang:"en",cat:"Motywacja",tid:216},
  {id:1336,text:"Wenn du nicht liebst, was du tust, hast du zwei Möglichkeiten: ändere das, was du tust, oder ändere das, was du liebst.",author:"Billy Cox",lang:"de",cat:"Motywacja",tid:216},
  {id:1337,text:"Si tu n'aimes pas ce que tu fais, tu as deux choix : change ce que tu fais, ou change ce que tu aimes.",author:"Billy Cox",lang:"fr",cat:"Motywacja",tid:216},
  {id:1338,text:"Si no amas lo que haces, tienes dos opciones: cambia lo que haces, o cambia lo que amas.",author:"Billy Cox",lang:"es",cat:"Motywacja",tid:216},
  {id:1339,text:"Если ты не любишь то, что делаешь, у тебя есть два варианта: измени то, что делаешь, или измени то, что любишь.",author:"Билли Кокс",lang:"ru",cat:"Motywacja",tid:216},
  // Grupa 217 — Se7en (film, 1995, reż. David Fincher), słowa detektywa Somerseta na zakończenie filmu
  {id:1340,text:"Ernest Hemingway napisał kiedyś: «Świat to dobre miejsce i warto o niego walczyć». Zgadzam się z drugą częścią.",author:"David Fincher (Se7en, 1995)",lang:"pl",cat:"Filozofia",tid:217},
  {id:1341,text:"Ernest Hemingway once wrote, «The world is a fine place and worth fighting for.» I agree with the second part.",author:"David Fincher (Se7en, 1995)",lang:"en",cat:"Filozofia",tid:217},
  {id:1342,text:"Ernest Hemingway schrieb einmal: «Die Welt ist ein schöner Ort und es lohnt sich, für sie zu kämpfen.» Ich stimme dem zweiten Teil zu.",author:"David Fincher (Sieben, 1995)",lang:"de",cat:"Filozofia",tid:217},
  {id:1343,text:"Ernest Hemingway a écrit un jour : « Le monde est un bel endroit et vaut la peine qu'on se batte pour lui. » Je suis d'accord avec la deuxième partie.",author:"David Fincher (Seven, 1995)",lang:"fr",cat:"Filozofia",tid:217},
  {id:1344,text:"Ernest Hemingway escribió una vez: «El mundo es un buen lugar y vale la pena luchar por él.» Estoy de acuerdo con la segunda parte.",author:"David Fincher (Seven, 1995)",lang:"es",cat:"Filozofia",tid:217},
  {id:1345,text:"Эрнест Хемингуэй когда-то написал: «Мир — прекрасное место, и за него стоит сражаться.» Я согласен со второй частью.",author:"Дэвид Финчер (Семь, 1995)",lang:"ru",cat:"Filozofia",tid:217},
  // Grupa 218 — Zbigniew Herbert, „Idź wyprostowany wśród tych co na kolanach" (z „Przesłania Pana Cogito", 1974)
  {id:1346,text:"Idź wyprostowany wśród tych co na kolanach",author:"Zbigniew Herbert",lang:"pl",cat:"Motywacja",tid:218},
  {id:1347,text:"Go upright among those who are down on their knees",author:"Zbigniew Herbert",lang:"en",cat:"Motywacja",tid:218},
  {id:1348,text:"Geh aufrecht unter denen, die auf den Knien sind",author:"Zbigniew Herbert",lang:"de",cat:"Motywacja",tid:218},
  {id:1349,text:"Marche debout parmi ceux qui sont à genoux",author:"Zbigniew Herbert",lang:"fr",cat:"Motywacja",tid:218},
  {id:1350,text:"Camina erguido entre los que están de rodillas",author:"Zbigniew Herbert",lang:"es",cat:"Motywacja",tid:218},
  {id:1351,text:"Иди прямо среди тех, кто стоит на коленях",author:"Збигнев Херберт",lang:"ru",cat:"Motywacja",tid:218},
  // Grupa 219 — Giordano Bruno, „Truth does not change because…"
  {id:1352,text:"Prawda nie zmienia się dlatego, że wierzy w nią — lub w nią nie wierzy — większość ludzi.",author:"Giordano Bruno",lang:"pl",cat:"Filozofia",tid:219},
  {id:1353,text:"Truth does not change because it is, or is not, believed by a majority of the people.",author:"Giordano Bruno",lang:"en",cat:"Filozofia",tid:219},
  {id:1354,text:"Die Wahrheit ändert sich nicht, weil sie von der Mehrheit der Menschen geglaubt oder nicht geglaubt wird.",author:"Giordano Bruno",lang:"de",cat:"Filozofia",tid:219},
  {id:1355,text:"La vérité ne change pas parce qu'elle est, ou n'est pas, crue par la majorité des gens.",author:"Giordano Bruno",lang:"fr",cat:"Filozofia",tid:219},
  {id:1356,text:"La verdad no cambia porque sea, o no sea, creída por la mayoría de la gente.",author:"Giordano Bruno",lang:"es",cat:"Filozofia",tid:219},
  {id:1357,text:"Истина не меняется оттого, что в неё верит — или не верит — большинство людей.",author:"Джордано Бруно",lang:"ru",cat:"Filozofia",tid:219},
  // Grupa 220 — Tadeusz Kościuszko, „Największym zwycięstwem jest to, które odnosimy nad nami samymi."
  {id:1358,text:"Największym zwycięstwem jest to, które odnosimy nad nami samymi.",author:"Tadeusz Kościuszko",lang:"pl",cat:"Mądrość",tid:220},
  {id:1359,text:"The greatest victory is the one we achieve over ourselves.",author:"Tadeusz Kościuszko",lang:"en",cat:"Mądrość",tid:220},
  {id:1360,text:"Der größte Sieg ist jener, den wir über uns selbst erringen.",author:"Tadeusz Kościuszko",lang:"de",cat:"Mądrość",tid:220},
  {id:1361,text:"La plus grande victoire est celle que nous remportons sur nous-mêmes.",author:"Tadeusz Kościuszko",lang:"fr",cat:"Mądrość",tid:220},
  {id:1362,text:"La mayor victoria es aquella que conseguimos sobre nosotros mismos.",author:"Tadeusz Kościuszko",lang:"es",cat:"Mądrość",tid:220},
  {id:1363,text:"Величайшая победа — та, которую мы одерживаем над самими собой.",author:"Тадеуш Костюшко",lang:"ru",cat:"Mądrość",tid:220},
  // Grupa 221 — Tadeusz Kościuszko, „Kościół winien być oddzielony od państwa…" (radykalna laickość oświeceniowa)
  {id:1364,text:"Kościół winien być oddzielony od państwa, nie wolno mu zajmować się kształceniem młodzieży. Naród winien być panem własnego losu i jego prawa powinny być nadrzędne wobec praw Kościoła. Żadna religia nie może im przeczyć, odwołując się do prawa boskiego, przeciwnie, każda religia powinna być posłuszna prawom ustanowionym przez naród.",author:"Tadeusz Kościuszko",lang:"pl",cat:"Filozofia",tid:221},
  {id:1365,text:"The Church should be separated from the state and forbidden from educating the youth. The nation should be master of its own fate, and its laws should take precedence over the laws of the Church. No religion may contradict them by appealing to divine law; on the contrary, every religion should be obedient to the laws established by the nation.",author:"Tadeusz Kościuszko",lang:"en",cat:"Filozofia",tid:221},
  {id:1366,text:"Die Kirche soll vom Staat getrennt sein, und es ist ihr untersagt, sich mit der Erziehung der Jugend zu befassen. Die Nation soll Herrin ihres eigenen Schicksals sein, und ihre Gesetze sollen den Gesetzen der Kirche übergeordnet sein. Keine Religion darf ihnen unter Berufung auf göttliches Recht widersprechen — im Gegenteil, jede Religion soll den von der Nation erlassenen Gesetzen gehorchen.",author:"Tadeusz Kościuszko",lang:"de",cat:"Filozofia",tid:221},
  {id:1367,text:"L'Église doit être séparée de l'État, il ne lui est pas permis de s'occuper de l'éducation de la jeunesse. La nation doit être maîtresse de son propre destin, et ses lois doivent prévaloir sur les lois de l'Église. Aucune religion ne peut les contredire en se réclamant du droit divin — au contraire, toute religion doit obéir aux lois établies par la nation.",author:"Tadeusz Kościuszko",lang:"fr",cat:"Filozofia",tid:221},
  {id:1368,text:"La Iglesia debe estar separada del Estado y no le es permitido ocuparse de la educación de la juventud. La nación debe ser dueña de su propio destino, y sus leyes deben prevalecer sobre las leyes de la Iglesia. Ninguna religión puede contradecirlas apelando al derecho divino; al contrario, toda religión debe obedecer las leyes establecidas por la nación.",author:"Tadeusz Kościuszko",lang:"es",cat:"Filozofia",tid:221},
  {id:1369,text:"Церковь должна быть отделена от государства, и ей не дозволено заниматься воспитанием молодёжи. Нация должна быть хозяйкой своей судьбы, и её законы должны иметь верховенство над законами Церкви. Никакая религия не может им противоречить, ссылаясь на божественное право; напротив, всякая религия должна повиноваться законам, установленным нацией.",author:"Тадеуш Костюшко",lang:"ru",cat:"Filozofia",tid:221},
  // Grupa 222 — Navjot Singh Sidhu, „One who doesn't throw the dice…"
  {id:1370,text:"Ten, kto nie rzuca kostką, nigdy nie może oczekiwać, że wyrzuci szóstkę.",author:"Navjot Singh Sidhu",lang:"pl",cat:"Motywacja",tid:222},
  {id:1371,text:"One who doesn't throw the dice can never expect to score a six.",author:"Navjot Singh Sidhu",lang:"en",cat:"Motywacja",tid:222},
  {id:1372,text:"Wer nicht würfelt, kann niemals erwarten, eine Sechs zu werfen.",author:"Navjot Singh Sidhu",lang:"de",cat:"Motywacja",tid:222},
  {id:1373,text:"Celui qui ne lance pas les dés ne peut jamais espérer faire un six.",author:"Navjot Singh Sidhu",lang:"fr",cat:"Motywacja",tid:222},
  {id:1374,text:"Quien no tira los dados nunca puede esperar sacar un seis.",author:"Navjot Singh Sidhu",lang:"es",cat:"Motywacja",tid:222},
  {id:1375,text:"Тот, кто не бросает кости, никогда не может надеяться выбросить шестёрку.",author:"Навджот Сингх Сидху",lang:"ru",cat:"Motywacja",tid:222},
  // Grupa 223 — Emily Giffin, „Maybe the thing to do after you roll the dice…"
  {id:1376,text:"Może rzeczą, którą warto zrobić po tym, jak rzucisz kostkami — i przegrasz — jest po prostu podnieść je i rzucić znów.",author:"Emily Giffin",lang:"pl",cat:"Motywacja",tid:223},
  {id:1377,text:"Maybe the thing to do after you roll the dice — and lose — is simply pick them up and roll them again.",author:"Emily Giffin",lang:"en",cat:"Motywacja",tid:223},
  {id:1378,text:"Vielleicht ist das Richtige, nachdem du gewürfelt hast — und verloren — sie einfach aufzuheben und noch einmal zu würfeln.",author:"Emily Giffin",lang:"de",cat:"Motywacja",tid:223},
  {id:1379,text:"Peut-être que la chose à faire après avoir lancé les dés — et perdu — est simplement de les ramasser et de les relancer.",author:"Emily Giffin",lang:"fr",cat:"Motywacja",tid:223},
  {id:1380,text:"Quizá lo que hay que hacer después de tirar los dados — y perder — es simplemente recogerlos y volver a lanzarlos.",author:"Emily Giffin",lang:"es",cat:"Motywacja",tid:223},
  {id:1381,text:"Может быть, после того как ты бросил кости — и проиграл — стоит просто поднять их и бросить снова.",author:"Эмили Гиффин",lang:"ru",cat:"Motywacja",tid:223},
  // Grupa 224 — Juliusz Cezar, „Alea iacta est" / „Kości zostały rzucone"
  {id:1382,text:"Kości zostały rzucone.",author:"Juliusz Cezar",lang:"pl",cat:"Mądrość",tid:224},
  {id:1383,text:"The die has been cast.",author:"Julius Caesar",lang:"en",cat:"Mądrość",tid:224},
  {id:1384,text:"Die Würfel sind gefallen.",author:"Julius Cäsar",lang:"de",cat:"Mądrość",tid:224},
  {id:1385,text:"Le sort en est jeté.",author:"Jules César",lang:"fr",cat:"Mądrość",tid:224},
  {id:1386,text:"La suerte está echada.",author:"Julio César",lang:"es",cat:"Mądrość",tid:224},
  {id:1387,text:"Жребий брошен.",author:"Юлий Цезарь",lang:"ru",cat:"Mądrość",tid:224},
  // Grupa 225 — Shia LaBeouf, „You can prepare all you want…"
  {id:1388,text:"Możesz przygotowywać się ile chcesz, ale jeśli nigdy nie rzucisz kostkami, nigdy nie odniesiesz sukcesu.",author:"Shia LaBeouf",lang:"pl",cat:"Motywacja",tid:225},
  {id:1389,text:"You can prepare all you want, but if you never roll the dice you'll never be successful.",author:"Shia LaBeouf",lang:"en",cat:"Motywacja",tid:225},
  {id:1390,text:"Du kannst dich vorbereiten, so viel du willst, aber wenn du nie würfelst, wirst du nie erfolgreich sein.",author:"Shia LaBeouf",lang:"de",cat:"Motywacja",tid:225},
  {id:1391,text:"Tu peux te préparer autant que tu veux, mais si tu ne lances jamais les dés, tu ne réussiras jamais.",author:"Shia LaBeouf",lang:"fr",cat:"Motywacja",tid:225},
  {id:1392,text:"Puedes prepararte todo lo que quieras, pero si nunca tiras los dados, nunca tendrás éxito.",author:"Shia LaBeouf",lang:"es",cat:"Motywacja",tid:225},
  {id:1393,text:"Можешь готовиться сколько хочешь, но если никогда не бросишь кости, никогда не добьёшься успеха.",author:"Шайа ЛаБаф",lang:"ru",cat:"Motywacja",tid:225},
  // Grupa 226 — Julian Ejsmond, „Gdyby na wielkim świecie zabrakło uśmiechu dziecka…"
  {id:1394,text:"Gdyby na wielkim świecie zabrakło uśmiechu dziecka, byłoby ciemno i mroczno, ciemniej i mroczniej niż podczas nocy bezgwiezdnej i bezksiężycowej — mimo wszystkich słońc, gwiazd i sztucznych reflektorów. Ten jeden mały uśmiech rozwidnia życie.",author:"Julian Ejsmond",lang:"pl",cat:"Miłość",tid:226},
  {id:1395,text:"If the great world were missing a child's smile, it would be dark and gloomy — darker and gloomier than during a starless and moonless night — despite all suns, stars and artificial spotlights. That one small smile brightens life.",author:"Julian Ejsmond",lang:"en",cat:"Miłość",tid:226},
  {id:1396,text:"Wenn auf der großen Welt das Lächeln eines Kindes fehlte, wäre es dunkel und düster — dunkler und düsterer als in einer stern- und mondlosen Nacht — trotz aller Sonnen, Sterne und künstlicher Scheinwerfer. Dieses eine kleine Lächeln erhellt das Leben.",author:"Julian Ejsmond",lang:"de",cat:"Miłość",tid:226},
  {id:1397,text:"Si le grand monde était privé du sourire d'un enfant, il serait sombre et lugubre — plus sombre et plus lugubre que pendant une nuit sans étoiles et sans lune — malgré tous les soleils, étoiles et projecteurs artificiels. Ce petit sourire éclaire la vie.",author:"Julian Ejsmond",lang:"fr",cat:"Miłość",tid:226},
  {id:1398,text:"Si al gran mundo le faltara la sonrisa de un niño, sería oscuro y sombrío — más oscuro y sombrío que durante una noche sin estrellas y sin luna — a pesar de todos los soles, estrellas y reflectores artificiales. Esa sola pequeña sonrisa ilumina la vida.",author:"Julian Ejsmond",lang:"es",cat:"Miłość",tid:226},
  {id:1399,text:"Если бы в большом мире не хватило улыбки ребёнка, было бы темно и мрачно — темнее и мрачнее, чем в беззвёздную и безлунную ночь — несмотря на все солнца, звёзды и искусственные прожекторы. Эта одна маленькая улыбка освещает жизнь.",author:"Юлиан Эйсмонд",lang:"ru",cat:"Miłość",tid:226},
  // Grupa 227 — Marie von Ebner-Eschenbach, „Większość ludzi potrzebuje więcej miłości…"
  {id:1400,text:"Większość ludzi potrzebuje więcej miłości, niż na nią zasługuje.",author:"Marie von Ebner-Eschenbach",lang:"pl",cat:"Miłość",tid:227},
  {id:1401,text:"Most people need more love than they deserve.",author:"Marie von Ebner-Eschenbach",lang:"en",cat:"Miłość",tid:227},
  {id:1402,text:"Die meisten Menschen brauchen mehr Liebe, als sie verdienen.",author:"Marie von Ebner-Eschenbach",lang:"de",cat:"Miłość",tid:227},
  {id:1403,text:"La plupart des gens ont besoin de plus d'amour qu'ils n'en méritent.",author:"Marie von Ebner-Eschenbach",lang:"fr",cat:"Miłość",tid:227},
  {id:1404,text:"La mayoría de las personas necesita más amor del que merece.",author:"Marie von Ebner-Eschenbach",lang:"es",cat:"Miłość",tid:227},
  {id:1405,text:"Большинство людей нуждается в большей любви, чем заслуживает.",author:"Мария фон Эбнер-Эшенбах",lang:"ru",cat:"Miłość",tid:227},
  // Grupa 228 — Marie von Ebner-Eschenbach, „Mieć i nie dawać jest czasem gorsze od kradzieży."
  {id:1406,text:"Mieć i nie dawać jest czasem gorsze od kradzieży.",author:"Marie von Ebner-Eschenbach",lang:"pl",cat:"Mądrość",tid:228},
  {id:1407,text:"To have and not to give is sometimes worse than stealing.",author:"Marie von Ebner-Eschenbach",lang:"en",cat:"Mądrość",tid:228},
  {id:1408,text:"Haben und nicht geben ist in manchen Fällen schlimmer als stehlen.",author:"Marie von Ebner-Eschenbach",lang:"de",cat:"Mądrość",tid:228},
  {id:1409,text:"Avoir et ne pas donner est parfois pire que voler.",author:"Marie von Ebner-Eschenbach",lang:"fr",cat:"Mądrość",tid:228},
  {id:1410,text:"Tener y no dar es a veces peor que robar.",author:"Marie von Ebner-Eschenbach",lang:"es",cat:"Mądrość",tid:228},
  {id:1411,text:"Иметь и не давать иногда хуже, чем красть.",author:"Мария фон Эбнер-Эшенбах",lang:"ru",cat:"Mądrość",tid:228},
  // Grupa 229 — Tadeusz Boy-Żeleński, „Są bakterie, które zabija się światłem."
  {id:1412,text:"Są bakterie, które zabija się światłem.",author:"Tadeusz Boy-Żeleński",lang:"pl",cat:"Mądrość",tid:229},
  {id:1413,text:"There are bacteria that are killed by light.",author:"Tadeusz Boy-Żeleński",lang:"en",cat:"Mądrość",tid:229},
  {id:1414,text:"Es gibt Bakterien, die mit Licht getötet werden.",author:"Tadeusz Boy-Żeleński",lang:"de",cat:"Mądrość",tid:229},
  {id:1415,text:"Il existe des bactéries que l'on tue avec la lumière.",author:"Tadeusz Boy-Żeleński",lang:"fr",cat:"Mądrość",tid:229},
  {id:1416,text:"Hay bacterias que se matan con la luz.",author:"Tadeusz Boy-Żeleński",lang:"es",cat:"Mądrość",tid:229},
  {id:1417,text:"Есть бактерии, которые убиваются светом.",author:"Тадеуш Бой-Желеньский",lang:"ru",cat:"Mądrość",tid:229},
  // Grupa 230 — William Shakespeare (atrybucja sporna), „Love me or hate me — both are in my favor…"
  {id:1418,text:"Kochaj mnie lub nienawidź — obie postawy są dla mnie korzystne… Jeśli mnie kochasz, zawsze będę w twoim sercu… Jeśli mnie nienawidzisz, zawsze będę w twoich myślach.",author:"William Shakespeare",lang:"pl",cat:"Mądrość",tid:230},
  {id:1419,text:"Love me or hate me — both are in my favor… If you love me, I'll always be in your heart… If you hate me, I'll always be in your mind.",author:"William Shakespeare",lang:"en",cat:"Mądrość",tid:230},
  {id:1420,text:"Liebe mich oder hasse mich — beides spielt mir in die Hände… Wenn du mich liebst, werde ich immer in deinem Herzen sein… Wenn du mich hasst, werde ich immer in deinen Gedanken sein.",author:"William Shakespeare",lang:"de",cat:"Mądrość",tid:230},
  {id:1421,text:"Aime-moi ou hais-moi — les deux jouent en ma faveur… Si tu m'aimes, je serai toujours dans ton cœur… Si tu me hais, je serai toujours dans tes pensées.",author:"William Shakespeare",lang:"fr",cat:"Mądrość",tid:230},
  {id:1422,text:"Ámame u ódiame — ambas cosas me favorecen… Si me amas, siempre estaré en tu corazón… Si me odias, siempre estaré en tu mente.",author:"William Shakespeare",lang:"es",cat:"Mądrość",tid:230},
  {id:1423,text:"Люби меня или ненавидь — оба варианта мне на руку… Если ты меня любишь, я всегда буду в твоём сердце… Если ты меня ненавидишь, я всегда буду в твоих мыслях.",author:"Уильям Шекспир",lang:"ru",cat:"Mądrość",tid:230},
  // Grupa 231 — Stanisław Lem, „Książką można czytelnikowi głowę, owszem przemeblować…"
  {id:1424,text:"Książką można czytelnikowi głowę, owszem przemeblować o tyle, o ile jakieś meble już w niej przed lekturą stały.",author:"Stanisław Lem",lang:"pl",cat:"Mądrość",tid:231},
  {id:1425,text:"With a book one can rearrange a reader's head, sure — but only as much as some furniture was already there before the reading.",author:"Stanisław Lem",lang:"en",cat:"Mądrość",tid:231},
  {id:1426,text:"Mit einem Buch kann man dem Leser den Kopf umräumen — freilich nur insofern, als schon vor der Lektüre einige Möbel darin standen.",author:"Stanisław Lem",lang:"de",cat:"Mądrość",tid:231},
  {id:1427,text:"Avec un livre on peut réaménager la tête du lecteur — certes, mais seulement dans la mesure où quelques meubles s'y trouvaient déjà avant la lecture.",author:"Stanisław Lem",lang:"fr",cat:"Mądrość",tid:231},
  {id:1428,text:"Con un libro se puede reorganizar la cabeza del lector — sí, pero solo en la medida en que ya había algunos muebles antes de la lectura.",author:"Stanisław Lem",lang:"es",cat:"Mądrość",tid:231},
  {id:1429,text:"Книгой можно читателю голову, конечно, переставить — но лишь в той мере, в какой какая-то мебель уже стояла там до чтения.",author:"Станислав Лем",lang:"ru",cat:"Mądrość",tid:231},
  // Grupa 232 — Lisa Ugner, „Sexy doesn't impress me. Smart impresses me…" (o życzliwości)
  {id:1430,text:"Seksowność mnie nie imponuje. Bystrość mi imponuje, siła charakteru mi imponuje. Ale przede wszystkim imponuje mi życzliwość. Życzliwość, jak sądzę, pochodzi z dobrego nauczenia się trudnych lekcji, z upadania i podnoszenia się. Pochodzi z przetrwania porażki i straty. Implikuje zrozumienie ludzkiej kondycji, wybaczając jej liczne wady i dziwactwa. Kiedy widzę to w kimś, napełnia mnie podziwem.",author:"Lisa Ugner",lang:"pl",cat:"Mądrość",tid:232},
  {id:1431,text:"Sexy doesn't impress me. Smart impresses me, strength of character impresses me. But most of all, I am impressed by kindness. Kindness, I think, comes from learning hard lessons well, from falling and picking yourself up. It comes from surviving failure and loss. It implies an understanding of the human condition, forgives its many flaws and quirks. When I see that in someone, it fills me with admiration.",author:"Lisa Ugner",lang:"en",cat:"Mądrość",tid:232},
  {id:1432,text:"Sex Appeal beeindruckt mich nicht. Klugheit beeindruckt mich, Charakterstärke beeindruckt mich. Aber vor allem beeindruckt mich Freundlichkeit. Freundlichkeit, denke ich, kommt vom guten Lernen schwerer Lektionen, vom Fallen und Wiederaufstehen. Sie kommt vom Überleben von Misserfolg und Verlust. Sie setzt ein Verständnis der menschlichen Lage voraus und vergibt ihre vielen Fehler und Eigenheiten. Wenn ich das in jemandem sehe, erfüllt es mich mit Bewunderung.",author:"Lisa Ugner",lang:"de",cat:"Mądrość",tid:232},
  {id:1433,text:"Le sexy ne m'impressionne pas. L'intelligence m'impressionne, la force de caractère m'impressionne. Mais surtout, je suis impressionné par la bonté. La bonté, je pense, vient du fait d'avoir bien appris des leçons difficiles, de tomber et de se relever. Elle vient de la survie de l'échec et de la perte. Elle implique une compréhension de la condition humaine, pardonne ses nombreux défauts et bizarreries. Quand je vois cela chez quelqu'un, cela me remplit d'admiration.",author:"Lisa Ugner",lang:"fr",cat:"Mądrość",tid:232},
  {id:1434,text:"Lo sexy no me impresiona. La inteligencia me impresiona, la fuerza de carácter me impresiona. Pero sobre todo, me impresiona la amabilidad. La amabilidad, creo, viene de aprender bien lecciones difíciles, de caer y levantarse. Viene de sobrevivir al fracaso y a la pérdida. Implica una comprensión de la condición humana, perdona sus muchos defectos y rarezas. Cuando veo eso en alguien, me llena de admiración.",author:"Lisa Ugner",lang:"es",cat:"Mądrość",tid:232},
  {id:1435,text:"Сексуальность меня не впечатляет. Ум впечатляет меня, сила характера впечатляет. Но больше всего меня впечатляет доброта. Доброта, я думаю, происходит из хорошо усвоенных трудных уроков, из падений и подниманий. Она приходит от переживания неудач и потерь. Она подразумевает понимание человеческого состояния, прощает его многие недостатки и причуды. Когда я вижу это в ком-то, это наполняет меня восхищением.",author:"Лиза Угнер",lang:"ru",cat:"Mądrość",tid:232},
  // Grupa 233 — Lisa Ugner (atrybucja sporna — popularnie Bil Keane / Master Oogway), „The past is history…"
  {id:1436,text:"Przeszłość to historia. Przyszłość to tajemnica. Teraźniejszość to dar.",author:"Lisa Ugner",lang:"pl",cat:"Filozofia",tid:233},
  {id:1437,text:"The past is history. The future is a mystery. The present is a gift.",author:"Lisa Ugner",lang:"en",cat:"Filozofia",tid:233},
  {id:1438,text:"Die Vergangenheit ist Geschichte. Die Zukunft ist ein Geheimnis. Die Gegenwart ist ein Geschenk.",author:"Lisa Ugner",lang:"de",cat:"Filozofia",tid:233},
  {id:1439,text:"Le passé est de l'histoire. L'avenir est un mystère. Le présent est un cadeau.",author:"Lisa Ugner",lang:"fr",cat:"Filozofia",tid:233},
  {id:1440,text:"El pasado es historia. El futuro es un misterio. El presente es un regalo.",author:"Lisa Ugner",lang:"es",cat:"Filozofia",tid:233},
  {id:1441,text:"Прошлое — это история. Будущее — это тайна. Настоящее — это дар.",author:"Лиза Угнер",lang:"ru",cat:"Filozofia",tid:233},
  // Grupa 234 — Maria Czubaszek, „Ja już się boję tego 11 listopada…"
  {id:1442,text:"Ja już się boję tego 11 listopada. Bardziej niż przebierańców na Halloween boję się tych, którzy 11 listopada przebiorą się za patriotów i pójdą w miasto…",author:"Maria Czubaszek",lang:"pl",cat:"Filozofia",tid:234},
  {id:1443,text:"I am already afraid of November 11. More than Halloween costumes, I'm afraid of those who on November 11 will dress up as patriots and march through the city…",author:"Maria Czubaszek",lang:"en",cat:"Filozofia",tid:234},
  {id:1444,text:"Ich habe schon Angst vor diesem 11. November. Mehr als vor Halloween-Verkleidungen fürchte ich mich vor denen, die sich am 11. November als Patrioten verkleiden und durch die Stadt marschieren werden…",author:"Maria Czubaszek",lang:"de",cat:"Filozofia",tid:234},
  {id:1445,text:"J'ai déjà peur du 11 novembre. Plus que des déguisements d'Halloween, je crains ceux qui, le 11 novembre, se déguiseront en patriotes et marcheront dans la ville…",author:"Maria Czubaszek",lang:"fr",cat:"Filozofia",tid:234},
  {id:1446,text:"Ya tengo miedo de este 11 de noviembre. Más que de los disfraces de Halloween, temo a aquellos que el 11 de noviembre se disfrazarán de patriotas y saldrán a la ciudad…",author:"Maria Czubaszek",lang:"es",cat:"Filozofia",tid:234},
  {id:1447,text:"Я уже боюсь этого 11 ноября. Больше, чем переодеваний на Хэллоуин, я боюсь тех, кто 11 ноября переоденется патриотами и пойдёт в город…",author:"Мария Чубашек",lang:"ru",cat:"Filozofia",tid:234},
  // Grupa 235 — Autor nieznany, „Religious freedom should be just as meaningful…" (analogia z kolorem)
  {id:1448,text:"«Wolność religijna» powinna mieć dokładnie taką samą wagę i moc jak «wolność ulubionego koloru». Lubisz zieleń. Nikt nie może ci powiedzieć, że nie wolno ci lubić zieleni. Możesz ubierać się na zielono, możesz pomalować swój dom na zielono, możesz wytatuować sobie «Zielona moc» na piersi i możesz nawet powstrzymywać się od jedzenia zielonych warzyw, bo to dla ciebie grzech. Ale nie możesz zmusić innych, żeby lubili zieleń. Nie możesz ich zmusić, żeby ubierali się na zielono, nie możesz tatuować nowo narodzonego, decydując za niego, że on też będzie lubił zieleń. Nie możesz oczekiwać, że pomalujesz swój dom na zielono za pieniądze podatników, i nie możesz oczekiwać, że ludzie przestaną jeść zielone jedzenie lub żądać, by zostało zdelegalizowane. Nie możesz powodować cierpienia zwierząt, bo lubisz zieleń — więc żadnego malowania psa na zielono. Nie możesz decydować, kto się z kim żeni, na podstawie ich ulubionych kolorów. I nie możesz zmuszać szkół publicznych, by uczyły, że zieleń to najlepszy kolor. Możesz lubić zieleń ile chcesz, ale nie możesz używać tego jako wymówki do łamania prawa lub żądania wyłączeń od niego. I zdecydowanie nie możesz zmuszać innych, by dostosowywali się do twojej preferencji.",author:"Autor nieznany",lang:"pl",cat:"Filozofia",tid:235},
  {id:1449,text:"«Religious freedom» should be just as meaningful and as powerful as «favorite color freedom». You like green. No one can tell you you're not allowed to like green. You can dress in green, you can paint your house green, you can tattoo «Greenpower» on your chest, and you can even refrain from eating green vegetables because it's a sin to you. But you can't force others to like green. You can't force them to dress in green, you can't tattoo a newborn deciding for them that they would also like green. You can't expect to paint your house green using tax dollars, and you can't expect people to stop eating green food or demand that it be outlawed. You can't make animals suffer because you like green — so no painting your dog green. You can't decide who marries whom based on their favorite colors. And you can't force public schools to teach that green is the best color. You can like green all you want, but you can't use it as an excuse to break the law or demand exemption from it. And you definitely can't force others to conform to your preference.",author:"Unknown author",lang:"en",cat:"Filozofia",tid:235},
  {id:1450,text:"«Religiöse Freiheit» sollte genauso bedeutsam und mächtig sein wie die «Lieblingsfarben-Freiheit». Du magst Grün. Niemand kann dir sagen, dass du Grün nicht mögen darfst. Du kannst dich in Grün kleiden, dein Haus grün streichen, dir «Grüne Macht» auf die Brust tätowieren und sogar darauf verzichten, grünes Gemüse zu essen, weil es für dich Sünde ist. Aber du kannst andere nicht zwingen, Grün zu mögen. Du kannst sie nicht zwingen, sich grün zu kleiden, du kannst kein Neugeborenes tätowieren und für es entscheiden, dass es auch Grün mögen wird. Du kannst nicht erwarten, dein Haus mit Steuergeldern grün zu streichen, und du kannst nicht erwarten, dass die Leute aufhören, grüne Lebensmittel zu essen, oder fordern, dass sie verboten werden. Du kannst keine Tiere leiden lassen, weil du Grün magst — also keinen Hund grün streichen. Du kannst nicht entscheiden, wer wen heiratet, basierend auf seiner Lieblingsfarbe. Und du kannst öffentliche Schulen nicht zwingen, zu lehren, dass Grün die beste Farbe sei. Du kannst Grün mögen, soviel du willst, aber du kannst es nicht als Ausrede benutzen, das Gesetz zu brechen oder eine Ausnahme davon zu fordern. Und du kannst definitiv andere nicht zwingen, sich deiner Vorliebe zu beugen.",author:"Unbekannter Autor",lang:"de",cat:"Filozofia",tid:235},
  {id:1451,text:"La « liberté religieuse » devrait être tout aussi significative et puissante que la « liberté de couleur préférée ». Tu aimes le vert. Personne ne peut te dire que tu n'as pas le droit d'aimer le vert. Tu peux t'habiller en vert, peindre ta maison en vert, te tatouer « Force verte » sur la poitrine, et tu peux même t'abstenir de manger des légumes verts parce que c'est un péché pour toi. Mais tu ne peux pas forcer les autres à aimer le vert. Tu ne peux pas les forcer à s'habiller en vert, tu ne peux pas tatouer un nouveau-né en décidant pour lui qu'il aimera aussi le vert. Tu ne peux pas t'attendre à peindre ta maison en vert avec l'argent des contribuables, et tu ne peux pas t'attendre à ce que les gens cessent de manger des aliments verts ou exiger qu'ils soient interdits. Tu ne peux pas faire souffrir les animaux parce que tu aimes le vert — donc pas de chien peint en vert. Tu ne peux pas décider qui épouse qui en fonction de leurs couleurs préférées. Et tu ne peux pas forcer les écoles publiques à enseigner que le vert est la meilleure couleur. Tu peux aimer le vert autant que tu veux, mais tu ne peux pas l'utiliser comme excuse pour enfreindre la loi ou exiger une exemption. Et tu ne peux certainement pas forcer les autres à se conformer à ta préférence.",author:"Auteur inconnu",lang:"fr",cat:"Filozofia",tid:235},
  {id:1452,text:"La «libertad religiosa» debería tener exactamente el mismo significado y poder que la «libertad de color favorito». Te gusta el verde. Nadie puede decirte que no puedes gustar del verde. Puedes vestirte de verde, pintar tu casa de verde, tatuarte «Poder Verde» en el pecho, e incluso puedes abstenerte de comer verduras verdes porque es un pecado para ti. Pero no puedes obligar a otros a gustar del verde. No puedes forzarlos a vestirse de verde, no puedes tatuar a un recién nacido decidiendo por él que también le gustará el verde. No puedes esperar pintar tu casa de verde con el dinero de los impuestos, y no puedes esperar que la gente deje de comer comida verde o exigir que se prohíba. No puedes hacer sufrir a los animales porque te guste el verde — así que nada de pintar tu perro de verde. No puedes decidir quién se casa con quién basándote en sus colores favoritos. Y no puedes obligar a las escuelas públicas a enseñar que el verde es el mejor color. Puedes gustar del verde todo lo que quieras, pero no puedes usarlo como excusa para romper la ley o exigir una exención. Y definitivamente no puedes obligar a otros a conformarse con tu preferencia.",author:"Autor desconocido",lang:"es",cat:"Filozofia",tid:235},
  {id:1453,text:"«Религиозная свобода» должна иметь ровно такое же значение и силу, как и «свобода любимого цвета». Тебе нравится зелёный. Никто не может сказать тебе, что тебе нельзя любить зелёный. Ты можешь одеваться в зелёное, можешь покрасить свой дом в зелёный, можешь набить себе татуировку «Зелёная сила» на груди и можешь даже воздерживаться от поедания зелёных овощей, потому что для тебя это грех. Но ты не можешь заставить других любить зелёный. Ты не можешь заставить их одеваться в зелёное, не можешь татуировать новорождённого, решая за него, что он тоже будет любить зелёный. Ты не можешь ожидать, что покрасишь свой дом в зелёный за счёт налогоплательщиков, и не можешь ожидать, что люди перестанут есть зелёную еду или требовать, чтобы её запретили. Ты не можешь причинять страдания животным из-за того, что любишь зелёный — поэтому никакого крашения собаки в зелёный. Ты не можешь решать, кто на ком женится, основываясь на их любимых цветах. И ты не можешь заставлять государственные школы учить, что зелёный — лучший цвет. Можешь любить зелёный сколько хочешь, но ты не можешь использовать это как оправдание для нарушения закона или требования исключения из него. И ты определённо не можешь заставлять других подчиняться твоим предпочтениям.",author:"Автор неизвестен",lang:"ru",cat:"Filozofia",tid:235},
  // Grupa 236 — Cyprian Kamil Norwid, „Naród, który się oburza, ma prawo do nadziei…"
  {id:1454,text:"Naród, który się oburza, ma prawo do nadziei, ale biada temu, który gnije w milczeniu.",author:"Cyprian Kamil Norwid",lang:"pl",cat:"Filozofia",tid:236},
  {id:1455,text:"A nation that is outraged has a right to hope, but woe to the one that rots in silence.",author:"Cyprian Kamil Norwid",lang:"en",cat:"Filozofia",tid:236},
  {id:1456,text:"Eine Nation, die empört ist, hat ein Recht auf Hoffnung; doch wehe der, die im Schweigen verfault.",author:"Cyprian Kamil Norwid",lang:"de",cat:"Filozofia",tid:236},
  {id:1457,text:"Une nation qui s'indigne a droit à l'espoir, mais malheur à celle qui pourrit dans le silence.",author:"Cyprian Kamil Norwid",lang:"fr",cat:"Filozofia",tid:236},
  {id:1458,text:"Una nación que se indigna tiene derecho a la esperanza, pero ay de aquella que se pudre en silencio.",author:"Cyprian Kamil Norwid",lang:"es",cat:"Filozofia",tid:236},
  {id:1459,text:"Народ, который возмущается, имеет право на надежду, но горе тому, кто гниёт в молчании.",author:"Циприан Камил Норвид",lang:"ru",cat:"Filozofia",tid:236},
  // Grupa 237 — Earl Nightingale, „Nigdy nie rezygnuj z celu…"
  {id:1460,text:"Nigdy nie rezygnuj z celu tylko dlatego, że osiągnięcie go wymaga czasu. Czas i tak upłynie.",author:"Earl Nightingale",lang:"pl",cat:"Motywacja",tid:237},
  {id:1461,text:"Never give up on a goal just because achieving it takes time. The time will pass anyway.",author:"Earl Nightingale",lang:"en",cat:"Motywacja",tid:237},
  {id:1462,text:"Gib niemals ein Ziel auf, nur weil sein Erreichen Zeit braucht. Die Zeit vergeht sowieso.",author:"Earl Nightingale",lang:"de",cat:"Motywacja",tid:237},
  {id:1463,text:"N'abandonne jamais un objectif simplement parce que l'atteindre prend du temps. Le temps passera de toute façon.",author:"Earl Nightingale",lang:"fr",cat:"Motywacja",tid:237},
  {id:1464,text:"Nunca renuncies a una meta solo porque alcanzarla requiera tiempo. El tiempo pasará de todos modos.",author:"Earl Nightingale",lang:"es",cat:"Motywacja",tid:237},
  {id:1465,text:"Никогда не отказывайся от цели только потому, что её достижение требует времени. Время всё равно пройдёт.",author:"Эрл Найтингейл",lang:"ru",cat:"Motywacja",tid:237},
  // Grupa 238 — Arystoteles, „He who has overcome his fears will truly be free."
  {id:1466,text:"Ten, kto pokonał swoje lęki, naprawdę będzie wolny.",author:"Arystoteles",lang:"pl",cat:"Filozofia",tid:238},
  {id:1467,text:"He who has overcome his fears will truly be free.",author:"Aristotle",lang:"en",cat:"Filozofia",tid:238},
  {id:1468,text:"Wer seine Ängste überwunden hat, wird wahrhaft frei sein.",author:"Aristoteles",lang:"de",cat:"Filozofia",tid:238},
  {id:1469,text:"Celui qui a vaincu ses peurs sera vraiment libre.",author:"Aristote",lang:"fr",cat:"Filozofia",tid:238},
  {id:1470,text:"Quien ha superado sus miedos será verdaderamente libre.",author:"Aristóteles",lang:"es",cat:"Filozofia",tid:238},
  {id:1471,text:"Тот, кто преодолел свои страхи, по-настоящему будет свободен.",author:"Аристотель",lang:"ru",cat:"Filozofia",tid:238},
  // Grupa 239 — Alex Hershaft (Holocaust survivor i działacz praw zwierząt), „Nie ma znaczenia, czy ofiarami są Żydzi…"
  {id:1472,text:"Nie ma znaczenia, czy ofiarami są Żydzi, czy też krowy, świnie, kury lub inne zwierzęta.",author:"Alex Hershaft",lang:"pl",cat:"Filozofia",tid:239},
  {id:1473,text:"It doesn't matter whether the victims are Jews or cows, pigs, chickens or other animals.",author:"Alex Hershaft",lang:"en",cat:"Filozofia",tid:239},
  {id:1474,text:"Es spielt keine Rolle, ob die Opfer Juden sind oder Kühe, Schweine, Hühner oder andere Tiere.",author:"Alex Hershaft",lang:"de",cat:"Filozofia",tid:239},
  {id:1475,text:"Peu importe que les victimes soient des Juifs ou des vaches, des cochons, des poules ou d'autres animaux.",author:"Alex Hershaft",lang:"fr",cat:"Filozofia",tid:239},
  {id:1476,text:"No importa si las víctimas son judíos o vacas, cerdos, gallinas u otros animales.",author:"Alex Hershaft",lang:"es",cat:"Filozofia",tid:239},
  {id:1477,text:"Не имеет значения, являются ли жертвами евреи или коровы, свиньи, куры или другие животные.",author:"Алекс Хершафт",lang:"ru",cat:"Filozofia",tid:239},
  // Grupa 240 — Autor nieznany, „Never tell anyone your plans, show them your results instead."
  {id:1478,text:"Nigdy nie mów nikomu o swoich planach — pokaż im swoje rezultaty.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:240},
  {id:1479,text:"Never tell anyone your plans, show them your results instead.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:240},
  {id:1480,text:"Erzähle niemandem von deinen Plänen — zeige ihnen stattdessen deine Ergebnisse.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:240},
  {id:1481,text:"Ne dis jamais tes plans à personne — montre-leur plutôt tes résultats.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:240},
  {id:1482,text:"Nunca le cuentes a nadie tus planes — muéstrales tus resultados en su lugar.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:240},
  {id:1483,text:"Никогда не рассказывай никому о своих планах — вместо этого покажи им свои результаты.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:240},
  // Grupa 241 — Autor nieznany, „Najgorsze w słabych ludziach…"
  {id:1484,text:"Najgorsze w słabych ludziach jest to, że muszą upokarzać innych, by poczuć się silniejszymi.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:241},
  {id:1485,text:"The worst thing about weak people is that they have to humiliate others to feel stronger.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:241},
  {id:1486,text:"Das Schlimmste an schwachen Menschen ist, dass sie andere demütigen müssen, um sich stärker zu fühlen.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:241},
  {id:1487,text:"Le pire chez les gens faibles, c'est qu'ils doivent humilier les autres pour se sentir plus forts.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:241},
  {id:1488,text:"Lo peor de las personas débiles es que tienen que humillar a otros para sentirse más fuertes.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:241},
  {id:1489,text:"Худшее в слабых людях то, что им приходится унижать других, чтобы почувствовать себя сильнее.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:241},
  // Grupa 242 — William Gibson (popularna misatrybucja), „Zanim zdiagnozujesz u siebie depresję…"
  {id:1490,text:"Zanim zdiagnozujesz u siebie depresję lub niskie poczucie własnej wartości, upewnij się najpierw, czy nie otaczasz się po prostu dupkami.",author:"William Gibson",lang:"pl",cat:"Mądrość",tid:242},
  {id:1491,text:"Before diagnosing yourself with depression or low self-esteem, first make sure you are not, in fact, just surrounded by assholes.",author:"William Gibson",lang:"en",cat:"Mądrość",tid:242},
  {id:1492,text:"Bevor du bei dir selbst eine Depression oder ein geringes Selbstwertgefühl diagnostizierst, vergewissere dich zuerst, ob du nicht einfach von Arschlöchern umgeben bist.",author:"William Gibson",lang:"de",cat:"Mądrość",tid:242},
  {id:1493,text:"Avant de te diagnostiquer une dépression ou une faible estime de soi, assure-toi d'abord que tu n'es pas simplement entouré de connards.",author:"William Gibson",lang:"fr",cat:"Mądrość",tid:242},
  {id:1494,text:"Antes de diagnosticarte depresión o baja autoestima, asegúrate primero de que no estás, simplemente, rodeado de imbéciles.",author:"William Gibson",lang:"es",cat:"Mądrość",tid:242},
  {id:1495,text:"Прежде чем ставить себе диагноз депрессии или низкой самооценки, сначала убедись, что ты просто не окружён козлами.",author:"Уильям Гибсон",lang:"ru",cat:"Mądrość",tid:242},
  // Grupa 243 — Jim Valvano, „Life changes when you least expect it…"
  {id:1496,text:"Życie zmienia się, kiedy najmniej się tego spodziewasz. Przyszłość jest niepewna. Więc chwytaj ten dzień, chwytaj tę chwilę i wykorzystaj ją jak najlepiej.",author:"Jim Valvano",lang:"pl",cat:"Życie",tid:243},
  {id:1497,text:"Life changes when you least expect it to. The future is uncertain. So, seize this day, seize this moment, and make the most of it.",author:"Jim Valvano",lang:"en",cat:"Życie",tid:243},
  {id:1498,text:"Das Leben ändert sich, wenn du es am wenigsten erwartest. Die Zukunft ist ungewiss. Also ergreife diesen Tag, ergreife diesen Augenblick und mach das Beste daraus.",author:"Jim Valvano",lang:"de",cat:"Życie",tid:243},
  {id:1499,text:"La vie change quand tu t'y attends le moins. L'avenir est incertain. Alors saisis ce jour, saisis ce moment, et profites-en au maximum.",author:"Jim Valvano",lang:"fr",cat:"Życie",tid:243},
  {id:1500,text:"La vida cambia cuando menos lo esperas. El futuro es incierto. Así que aprovecha este día, aprovecha este momento, y sácale el máximo provecho.",author:"Jim Valvano",lang:"es",cat:"Życie",tid:243},
  {id:1501,text:"Жизнь меняется, когда ты этого меньше всего ожидаешь. Будущее неопределённо. Поэтому хватай этот день, хватай это мгновение и используй его по максимуму.",author:"Джим Валвано",lang:"ru",cat:"Życie",tid:243},
  // Grupa 244 — Autor nieznany (klasycznie misatrybuowane Einsteinowi), „Insanity is doing the same thing…"
  {id:1502,text:"Szaleństwem jest robić wciąż to samo i oczekiwać różnych rezultatów.",author:"Autor nieznany",lang:"pl",cat:"Mądrość",tid:244},
  {id:1503,text:"Insanity is doing the same thing over and over again and expecting different results.",author:"Unknown author",lang:"en",cat:"Mądrość",tid:244},
  {id:1504,text:"Wahnsinn ist, immer wieder dasselbe zu tun und unterschiedliche Ergebnisse zu erwarten.",author:"Unbekannter Autor",lang:"de",cat:"Mądrość",tid:244},
  {id:1505,text:"La folie, c'est de faire toujours la même chose et d'en attendre des résultats différents.",author:"Auteur inconnu",lang:"fr",cat:"Mądrość",tid:244},
  {id:1506,text:"Locura es hacer lo mismo una y otra vez y esperar resultados diferentes.",author:"Autor desconocido",lang:"es",cat:"Mądrość",tid:244},
  {id:1507,text:"Безумие — делать то же самое снова и снова, ожидая различные результаты.",author:"Автор неизвестен",lang:"ru",cat:"Mądrość",tid:244},
  // Grupa 245 — Damian Maliszewski, „Gdyby to ode mnie zależało, cały świat pomalowałbym na jaskrawe barwy…"
  {id:1508,text:"Gdyby to ode mnie zależało, cały świat pomalowałbym na jaskrawe barwy. Ludzie, którzy boją się kolorów, dogorywają w popiele. Ich wnętrza są szare, ich myśli są szare, ich miłość do świata także jest szara. A życie ucieka i zmarnowanych na szarość lat nikt wam nie zwróci.",author:"Damian Maliszewski",lang:"pl",cat:"Życie",tid:245},
  {id:1509,text:"If it depended on me, I would paint the whole world in bright colors. People who fear colors are dying in ashes. Their interiors are gray, their thoughts are gray, their love for the world is also gray. And life is fleeting, and no one will give you back the years wasted on grayness.",author:"Damian Maliszewski",lang:"en",cat:"Życie",tid:245},
  {id:1510,text:"Wenn es nach mir ginge, würde ich die ganze Welt in leuchtenden Farben anmalen. Menschen, die Angst vor Farben haben, verkümmern in der Asche. Ihre Inneren sind grau, ihre Gedanken sind grau, ihre Liebe zur Welt ist auch grau. Und das Leben verrinnt, und die in Grau verschwendeten Jahre wird euch niemand zurückgeben.",author:"Damian Maliszewski",lang:"de",cat:"Życie",tid:245},
  {id:1511,text:"Si cela ne tenait qu'à moi, je peindrais le monde entier de couleurs vives. Les gens qui ont peur des couleurs s'éteignent dans les cendres. Leurs intérieurs sont gris, leurs pensées sont grises, leur amour pour le monde est aussi gris. Et la vie s'enfuit, et personne ne vous rendra les années perdues dans la grisaille.",author:"Damian Maliszewski",lang:"fr",cat:"Życie",tid:245},
  {id:1512,text:"Si dependiera de mí, pintaría el mundo entero con colores vivos. Las personas que temen los colores se consumen en las cenizas. Sus interiores son grises, sus pensamientos son grises, su amor por el mundo también es gris. Y la vida se escapa, y nadie os devolverá los años perdidos en la grisura.",author:"Damian Maliszewski",lang:"es",cat:"Życie",tid:245},
  {id:1513,text:"Если бы это зависело от меня, я бы покрасил весь мир в яркие краски. Люди, которые боятся цветов, угасают в пепле. Их внутренний мир сер, их мысли серы, их любовь к миру тоже серая. А жизнь утекает, и потраченных на серость лет никто вам не вернёт.",author:"Дамиан Малишевский",lang:"ru",cat:"Życie",tid:245},
  // Grupa 246 — Papież Franciszek, „Bóg nie potrzebuje być przez nikogo broniony…"
  {id:1514,text:"Bóg nie potrzebuje być przez nikogo broniony i nie chce, aby Jego imię było używane do terroryzowania ludzi. Proszę wszystkich o zaprzestanie używania religii w celu budzenia nienawiści, przemocy, ekstremizmu i ślepego fanatyzmu.",author:"papież Franciszek",lang:"pl",cat:"Filozofia",tid:246},
  {id:1515,text:"God has no need to be defended by anyone and does not want His name to be used to terrorize people. We call upon everyone to stop using religions to incite hatred, violence, extremism and blind fanaticism.",author:"Pope Francis",lang:"en",cat:"Filozofia",tid:246},
  {id:1516,text:"Gott braucht nicht von irgendjemandem verteidigt zu werden und will nicht, dass sein Name dazu benutzt wird, Menschen zu terrorisieren. Wir rufen alle dazu auf, aufzuhören, Religionen zu benutzen, um Hass, Gewalt, Extremismus und blinden Fanatismus zu schüren.",author:"Papst Franziskus",lang:"de",cat:"Filozofia",tid:246},
  {id:1517,text:"Dieu n'a besoin d'être défendu par personne et ne veut pas que son nom soit utilisé pour terroriser les gens. Nous appelons tout le monde à cesser d'utiliser les religions pour inciter à la haine, à la violence, à l'extrémisme et au fanatisme aveugle.",author:"pape François",lang:"fr",cat:"Filozofia",tid:246},
  {id:1518,text:"Dios no necesita ser defendido por nadie y no quiere que su nombre sea utilizado para aterrorizar a las personas. Hacemos un llamado a todos para que dejen de usar las religiones para incitar al odio, la violencia, el extremismo y el fanatismo ciego.",author:"papa Francisco",lang:"es",cat:"Filozofia",tid:246},
  {id:1519,text:"Бог не нуждается в том, чтобы кто-либо его защищал, и не хочет, чтобы Его имя использовалось для устрашения людей. Призываем всех прекратить использовать религии для разжигания ненависти, насилия, экстремизма и слепого фанатизма.",author:"папа Франциск",lang:"ru",cat:"Filozofia",tid:246},
  // Grupa 247 — Autor nieznany, „One bad chapter doesn't mean your story is over."
  {id:1520,text:"Jeden zły rozdział nie oznacza, że twoja historia się skończyła.",author:"Autor nieznany",lang:"pl",cat:"Motywacja",tid:247},
  {id:1521,text:"One bad chapter doesn't mean your story is over.",author:"Unknown author",lang:"en",cat:"Motywacja",tid:247},
  {id:1522,text:"Ein schlechtes Kapitel bedeutet nicht, dass deine Geschichte zu Ende ist.",author:"Unbekannter Autor",lang:"de",cat:"Motywacja",tid:247},
  {id:1523,text:"Un mauvais chapitre ne signifie pas que ton histoire est terminée.",author:"Auteur inconnu",lang:"fr",cat:"Motywacja",tid:247},
  {id:1524,text:"Un mal capítulo no significa que tu historia haya terminado.",author:"Autor desconocido",lang:"es",cat:"Motywacja",tid:247},
  {id:1525,text:"Один плохой раздел не означает, что твоя история закончилась.",author:"Автор неизвестен",lang:"ru",cat:"Motywacja",tid:247},
  // Grupa 248 — bł. ks. Jerzy Popiełuszko, „Tylko ten może zwyciężyć zło, kto sam jest bogaty w dobro."
  {id:1526,text:"Tylko ten może zwyciężyć zło, kto sam jest bogaty w dobro.",author:"bł. ks. Jerzy Popiełuszko",lang:"pl",cat:"Mądrość",tid:248},
  {id:1527,text:"Only one who is rich in good can overcome evil.",author:"Bl. Fr. Jerzy Popiełuszko",lang:"en",cat:"Mądrość",tid:248},
  {id:1528,text:"Nur wer selbst reich an Gutem ist, kann das Böse besiegen.",author:"sel. Pater Jerzy Popiełuszko",lang:"de",cat:"Mądrość",tid:248},
  {id:1529,text:"Seul celui qui est riche en bien peut vaincre le mal.",author:"bx. père Jerzy Popiełuszko",lang:"fr",cat:"Mądrość",tid:248},
  {id:1530,text:"Solo quien es rico en bondad puede vencer al mal.",author:"beato padre Jerzy Popiełuszko",lang:"es",cat:"Mądrość",tid:248},
  {id:1531,text:"Только тот может победить зло, кто сам богат добром.",author:"блаженный ксёндз Ежи Попелушко",lang:"ru",cat:"Mądrość",tid:248},
  // Grupa 249 — bł. ks. Jerzy Popiełuszko, „Każda rzecz, każda sprawa wielka musi kosztować…"
  {id:1532,text:"Każda rzecz, każda sprawa wielka musi kosztować i musi być trudna. Tylko rzeczy małe i liche są łatwe.",author:"bł. ks. Jerzy Popiełuszko",lang:"pl",cat:"Mądrość",tid:249},
  {id:1533,text:"Every great thing, every great matter must cost and must be difficult. Only small and worthless things are easy.",author:"Bl. Fr. Jerzy Popiełuszko",lang:"en",cat:"Mądrość",tid:249},
  {id:1534,text:"Jede Sache, jede große Angelegenheit muss kosten und muss schwierig sein. Nur kleine und nichtige Dinge sind leicht.",author:"sel. Pater Jerzy Popiełuszko",lang:"de",cat:"Mądrość",tid:249},
  {id:1535,text:"Toute chose, toute affaire grande doit coûter et doit être difficile. Seules les choses petites et insignifiantes sont faciles.",author:"bx. père Jerzy Popiełuszko",lang:"fr",cat:"Mądrość",tid:249},
  {id:1536,text:"Toda cosa, toda gran obra debe costar y debe ser difícil. Solo las cosas pequeñas y mezquinas son fáciles.",author:"beato padre Jerzy Popiełuszko",lang:"es",cat:"Mądrość",tid:249},
  {id:1537,text:"Каждое дело, каждое великое дело должно стоить и должно быть трудным. Только мелкие и ничтожные вещи легки.",author:"блаженный ксёндз Ежи Попелушко",lang:"ru",cat:"Mądrość",tid:249},
  // Grupa 250 — bł. ks. Jerzy Popiełuszko (cytując św. Pawła, Rz 12:21), „Nie daj się zwyciężyć złu…"
  {id:1538,text:"Nie daj się zwyciężyć złu, lecz zło dobrem zwyciężaj.",author:"bł. ks. Jerzy Popiełuszko",lang:"pl",cat:"Mądrość",tid:250},
  {id:1539,text:"Do not be overcome by evil, but overcome evil with good.",author:"Bl. Fr. Jerzy Popiełuszko",lang:"en",cat:"Mądrość",tid:250},
  {id:1540,text:"Lass dich nicht vom Bösen besiegen, sondern besiege das Böse durch das Gute.",author:"sel. Pater Jerzy Popiełuszko",lang:"de",cat:"Mądrość",tid:250},
  {id:1541,text:"Ne te laisse pas vaincre par le mal, mais vaincs le mal par le bien.",author:"bx. père Jerzy Popiełuszko",lang:"fr",cat:"Mądrość",tid:250},
  {id:1542,text:"No te dejes vencer por el mal; al contrario, vence al mal con el bien.",author:"beato padre Jerzy Popiełuszko",lang:"es",cat:"Mądrość",tid:250},
  {id:1543,text:"Не будь побеждён злом, но побеждай зло добром.",author:"блаженный ксёндз Ежи Попелушко",lang:"ru",cat:"Mądrość",tid:250},
  // Grupa 251 — bł. ks. Jerzy Popiełuszko, „Być wolnym, to żyć zgodnie ze swym sumieniem."
  {id:1544,text:"Być wolnym, to żyć zgodnie ze swym sumieniem.",author:"bł. ks. Jerzy Popiełuszko",lang:"pl",cat:"Filozofia",tid:251},
  {id:1545,text:"To be free means to live in accordance with one's conscience.",author:"Bl. Fr. Jerzy Popiełuszko",lang:"en",cat:"Filozofia",tid:251},
  {id:1546,text:"Frei zu sein bedeutet, im Einklang mit dem eigenen Gewissen zu leben.",author:"sel. Pater Jerzy Popiełuszko",lang:"de",cat:"Filozofia",tid:251},
  {id:1547,text:"Être libre, c'est vivre en accord avec sa conscience.",author:"bx. père Jerzy Popiełuszko",lang:"fr",cat:"Filozofia",tid:251},
  {id:1548,text:"Ser libre es vivir de acuerdo con la propia conciencia.",author:"beato padre Jerzy Popiełuszko",lang:"es",cat:"Filozofia",tid:251},
  {id:1549,text:"Быть свободным — значит жить в согласии со своей совестью.",author:"блаженный ксёндз Ежи Попелушко",lang:"ru",cat:"Filozofia",tid:251},
  // Grupa 252 — bł. ks. Jerzy Popiełuszko, „Nawet gdy wydaje się nam, że kogoś drugiego dobrze znamy…"
  {id:1550,text:"Nawet gdy wydaje się nam, że kogoś drugiego dobrze znamy, nie spieszmy się z ocenami.",author:"bł. ks. Jerzy Popiełuszko",lang:"pl",cat:"Mądrość",tid:252},
  {id:1551,text:"Even when we think we know another person well, let us not be quick to judge.",author:"Bl. Fr. Jerzy Popiełuszko",lang:"en",cat:"Mądrość",tid:252},
  {id:1552,text:"Selbst wenn es uns scheint, dass wir einen anderen Menschen gut kennen, sollten wir mit Urteilen nicht eilen.",author:"sel. Pater Jerzy Popiełuszko",lang:"de",cat:"Mądrość",tid:252},
  {id:1553,text:"Même quand il nous semble que nous connaissons bien autrui, ne nous hâtons pas de juger.",author:"bx. père Jerzy Popiełuszko",lang:"fr",cat:"Mądrość",tid:252},
  {id:1554,text:"Incluso cuando nos parece que conocemos bien a otra persona, no nos apresuremos a juzgar.",author:"beato padre Jerzy Popiełuszko",lang:"es",cat:"Mądrość",tid:252},
  {id:1555,text:"Даже когда нам кажется, что мы хорошо знаем другого человека, не будем спешить с оценками.",author:"блаженный ксёндз Ежи Попелушко",lang:"ru",cat:"Mądrość",tid:252},
  // Grupa 253 — bł. ks. Jerzy Popiełuszko, „Zasadniczą sprawą przy wyzwoleniu człowieka i narodu…"
  {id:1556,text:"Zasadniczą sprawą przy wyzwoleniu człowieka i narodu jest przezwyciężenie lęku.",author:"bł. ks. Jerzy Popiełuszko",lang:"pl",cat:"Filozofia",tid:253},
  {id:1557,text:"The essential matter in liberating a person and a nation is overcoming fear.",author:"Bl. Fr. Jerzy Popiełuszko",lang:"en",cat:"Filozofia",tid:253},
  {id:1558,text:"Die wesentliche Sache bei der Befreiung des Menschen und der Nation ist das Überwinden der Angst.",author:"sel. Pater Jerzy Popiełuszko",lang:"de",cat:"Filozofia",tid:253},
  {id:1559,text:"L'affaire essentielle dans la libération de l'homme et de la nation est de surmonter la peur.",author:"bx. père Jerzy Popiełuszko",lang:"fr",cat:"Filozofia",tid:253},
  {id:1560,text:"La cuestión esencial en la liberación del hombre y de la nación es la superación del miedo.",author:"beato padre Jerzy Popiełuszko",lang:"es",cat:"Filozofia",tid:253},
  {id:1561,text:"Главное в освобождении человека и народа — преодоление страха.",author:"блаженный ксёндз Ежи Попелушко",lang:"ru",cat:"Filozofia",tid:253},
  // Grupa 254 — Margaret Thatcher, „Państwo niczego nie daje…"
  {id:1562,text:"Państwo niczego nie daje, bo niczego nie ma. Jeśli rząd twierdzi, że daje komuś, znaczy, że zabiera Tobie. Rząd nie ma własnych pieniędzy!",author:"Margaret Thatcher",lang:"pl",cat:"Filozofia",tid:254},
  {id:1563,text:"The state gives nothing because it has nothing. If the government claims it gives to someone, it means it takes from you. The government has no money of its own!",author:"Margaret Thatcher",lang:"en",cat:"Filozofia",tid:254},
  {id:1564,text:"Der Staat gibt nichts, weil er nichts hat. Wenn die Regierung behauptet, sie gebe jemandem etwas, dann bedeutet das, dass sie es dir nimmt. Die Regierung hat kein eigenes Geld!",author:"Margaret Thatcher",lang:"de",cat:"Filozofia",tid:254},
  {id:1565,text:"L'État ne donne rien, car il n'a rien. Si le gouvernement prétend donner à quelqu'un, cela signifie qu'il te prend. Le gouvernement n'a pas son propre argent !",author:"Margaret Thatcher",lang:"fr",cat:"Filozofia",tid:254},
  {id:1566,text:"El Estado no da nada, porque no tiene nada. Si el gobierno afirma que le da algo a alguien, significa que te lo quita a ti. ¡El gobierno no tiene dinero propio!",author:"Margaret Thatcher",lang:"es",cat:"Filozofia",tid:254},
  {id:1567,text:"Государство ничего не даёт, потому что у него ничего нет. Если правительство утверждает, что что-то кому-то даёт, это значит, что оно забирает у тебя. У правительства нет своих денег!",author:"Маргарет Тэтчер",lang:"ru",cat:"Filozofia",tid:254},
  // Grupa 255 — Autor nieznany, „Człowiek naprawdę bogaty…"
  {id:1568,text:"Człowiek naprawdę bogaty to taki, którego dzieci biegną do niego, kiedy ma puste ręce.",author:"Autor nieznany",lang:"pl",cat:"Miłość",tid:255},
  {id:1569,text:"A truly rich person is one whose children run to him when his hands are empty.",author:"Unknown author",lang:"en",cat:"Miłość",tid:255},
  {id:1570,text:"Ein wirklich reicher Mensch ist derjenige, zu dem die Kinder laufen, wenn er leere Hände hat.",author:"Unbekannter Autor",lang:"de",cat:"Miłość",tid:255},
  {id:1571,text:"Une personne vraiment riche est celle vers qui les enfants courent quand ses mains sont vides.",author:"Auteur inconnu",lang:"fr",cat:"Miłość",tid:255},
  {id:1572,text:"Una persona verdaderamente rica es aquella a quien sus hijos corren cuando tiene las manos vacías.",author:"Autor desconocido",lang:"es",cat:"Miłość",tid:255},
  {id:1573,text:"По-настоящему богат тот человек, к которому дети бегут даже когда у него пустые руки.",author:"Автор неизвестен",lang:"ru",cat:"Miłość",tid:255},
  // Grupa 256 — Autor nieznany, „Trzeba nie mieć serca…"
  {id:1574,text:"Trzeba nie mieć serca, żeby uważać, że dziecku będzie lepiej w domu dziecka, niż w kochającej go rodzinie.",author:"Autor nieznany",lang:"pl",cat:"Miłość",tid:256},
  {id:1575,text:"One must be heartless to believe that a child will be better off in an orphanage than with a family that loves it.",author:"Unknown author",lang:"en",cat:"Miłość",tid:256},
  {id:1576,text:"Man muss herzlos sein, um zu glauben, dass es einem Kind in einem Waisenhaus besser geht als in einer Familie, die es liebt.",author:"Unbekannter Autor",lang:"de",cat:"Miłość",tid:256},
  {id:1577,text:"Il faut être sans cœur pour croire qu'un enfant sera mieux dans un orphelinat qu'avec une famille qui l'aime.",author:"Auteur inconnu",lang:"fr",cat:"Miłość",tid:256},
  {id:1578,text:"Hay que ser sin corazón para creer que un niño estará mejor en un orfanato que en una familia que lo ama.",author:"Autor desconocido",lang:"es",cat:"Miłość",tid:256},
  {id:1579,text:"Надо не иметь сердца, чтобы считать, что ребёнку будет лучше в детском доме, чем в любящей его семье.",author:"Автор неизвестен",lang:"ru",cat:"Miłość",tid:256},
  // Grupa 257 — Vanny Angel, „Be careful who you trust…"
  {id:1580,text:"Uważaj, komu ufasz i komu opowiadasz o swoich problemach. Nie każdy, kto się do ciebie uśmiecha, jest twoim przyjacielem.",author:"Vanny Angel",lang:"pl",cat:"Mądrość",tid:257},
  {id:1581,text:"Be careful who you trust and tell your problems to. Not everyone who smiles at you is your friend.",author:"Vanny Angel",lang:"en",cat:"Mądrość",tid:257},
  {id:1582,text:"Sei vorsichtig, wem du vertraust und wem du von deinen Problemen erzählst. Nicht jeder, der dir zulächelt, ist dein Freund.",author:"Vanny Angel",lang:"de",cat:"Mądrość",tid:257},
  {id:1583,text:"Fais attention à qui tu fais confiance et à qui tu racontes tes problèmes. Tous ceux qui te sourient ne sont pas tes amis.",author:"Vanny Angel",lang:"fr",cat:"Mądrość",tid:257},
  {id:1584,text:"Ten cuidado en quién confías y a quién le cuentas tus problemas. No todos los que te sonríen son tus amigos.",author:"Vanny Angel",lang:"es",cat:"Mądrość",tid:257},
  {id:1585,text:"Будь осторожен в том, кому доверяешь и кому рассказываешь о своих проблемах. Не каждый, кто улыбается тебе, твой друг.",author:"Ванни Эйнджел",lang:"ru",cat:"Mądrość",tid:257},
  // Grupa 258 — David Orr, „Ziemia nie potrzebuje już 'ludzi sukcesu'…"
  {id:1586,text:"Ziemia nie potrzebuje już «ludzi sukcesu». Natomiast rozpaczliwie potrzebuje ludzi czyniących dobro. Potrzebuje więcej uzdrowicieli, odnowicieli, bajarzy oraz miłośników wszelkiej maści. Potrzebuje ludzi, którzy pięknie żyją. Potrzebuje ludzi wielkiej odwagi gotowych włączyć się do walki o bardziej ludzki świat. A te wszystkie wartości mają niewiele wspólnego z sukcesem tak, jak go rozumie nasza kultura.",author:"David Orr",lang:"pl",cat:"Filozofia",tid:258},
  {id:1587,text:"The Earth does not need any more «people of success». It desperately needs people who do good. It needs more healers, restorers, storytellers and lovers of every kind. It needs people who live beautifully. It needs people of great courage ready to join the fight for a more human world. And all these values have little to do with success as our culture understands it.",author:"David Orr",lang:"en",cat:"Filozofia",tid:258},
  {id:1588,text:"Die Erde braucht keine «Menschen des Erfolgs» mehr. Sie braucht verzweifelt Menschen, die Gutes tun. Sie braucht mehr Heiler, Erneuerer, Geschichtenerzähler und Liebende jeder Art. Sie braucht Menschen, die schön leben. Sie braucht Menschen großer Tapferkeit, die bereit sind, sich am Kampf für eine menschlichere Welt zu beteiligen. Und all diese Werte haben wenig mit Erfolg zu tun, wie ihn unsere Kultur versteht.",author:"David Orr",lang:"de",cat:"Filozofia",tid:258},
  {id:1589,text:"La Terre n'a plus besoin de « gens à succès ». Elle a désespérément besoin de gens qui font le bien. Elle a besoin de plus de guérisseurs, de restaurateurs, de conteurs et d'amoureux de toutes sortes. Elle a besoin de gens qui vivent magnifiquement. Elle a besoin de gens d'un grand courage, prêts à s'engager dans la lutte pour un monde plus humain. Et toutes ces valeurs ont peu à voir avec le succès tel que notre culture le comprend.",author:"David Orr",lang:"fr",cat:"Filozofia",tid:258},
  {id:1590,text:"La Tierra ya no necesita «gente de éxito». Necesita desesperadamente personas que hagan el bien. Necesita más sanadores, restauradores, narradores y amantes de toda clase. Necesita personas que vivan hermosamente. Necesita personas de gran valentía, dispuestas a sumarse a la lucha por un mundo más humano. Y todos estos valores tienen poco que ver con el éxito tal como lo entiende nuestra cultura.",author:"David Orr",lang:"es",cat:"Filozofia",tid:258},
  {id:1591,text:"Земля больше не нуждается в «людях успеха». Она отчаянно нуждается в людях, творящих добро. Она нуждается в большем числе целителей, восстановителей, сказителей и любящих всякого рода. Она нуждается в людях, которые красиво живут. Она нуждается в людях великой смелости, готовых включиться в борьбу за более человечный мир. А все эти ценности имеют мало общего с успехом, как его понимает наша культура.",author:"David Orr",lang:"ru",cat:"Filozofia",tid:258},
  // Grupa 259 — Olga Tokarczuk, „Ci, którzy czytają, poszerzają swoją świadomość…"
  {id:1592,text:"Ci, którzy czytają, poszerzają swoją świadomość, a zmniejsza im się ego. Tym, którzy nie czytają, puchnie ego i kurczy się świadomość.",author:"Olga Tokarczuk",lang:"pl",cat:"Mądrość",tid:259},
  {id:1593,text:"Those who read expand their consciousness and their ego shrinks. Those who don't read have a swelling ego and shrinking consciousness.",author:"Olga Tokarczuk",lang:"en",cat:"Mądrość",tid:259},
  {id:1594,text:"Wer liest, erweitert sein Bewusstsein, und sein Ego schrumpft. Wer nicht liest, dem schwillt das Ego an, und das Bewusstsein schrumpft.",author:"Olga Tokarczuk",lang:"de",cat:"Mądrość",tid:259},
  {id:1595,text:"Ceux qui lisent élargissent leur conscience et leur ego rétrécit. Ceux qui ne lisent pas ont un ego qui gonfle et une conscience qui rétrécit.",author:"Olga Tokarczuk",lang:"fr",cat:"Mądrość",tid:259},
  {id:1596,text:"Quienes leen amplían su conciencia y su ego se reduce. A quienes no leen, se les hincha el ego y se les encoge la conciencia.",author:"Olga Tokarczuk",lang:"es",cat:"Mądrość",tid:259},
  {id:1597,text:"Те, кто читает, расширяют своё сознание, а эго у них уменьшается. У тех, кто не читает, эго раздувается, а сознание сжимается.",author:"Ольга Токарчук",lang:"ru",cat:"Mądrość",tid:259},
  // Grupa 260 — Olga Tokarczuk, „Nauczyciele są dla społeczeństw trampoliną…"
  {id:1598,text:"Nauczyciele są dla społeczeństw trampoliną do lepszego jutra. Kiedy są pełni pasji i energii, dostrzegają talenty w uczniach, będą ich wspierać i ciągnąc w górę, a wtedy może narodzić się siła, która pchnie świat do przodu.",author:"Olga Tokarczuk",lang:"pl",cat:"Mądrość",tid:260},
  {id:1599,text:"Teachers are a trampoline for societies to a better tomorrow. When they are full of passion and energy, they notice talents in students, will support and pull them up — and then a power may be born that pushes the world forward.",author:"Olga Tokarczuk",lang:"en",cat:"Mądrość",tid:260},
  {id:1600,text:"Lehrer sind für Gesellschaften ein Sprungbrett zu einem besseren Morgen. Wenn sie voller Leidenschaft und Energie sind, erkennen sie Talente bei den Schülern, unterstützen sie und ziehen sie nach oben — und dann kann eine Kraft entstehen, die die Welt voranbringt.",author:"Olga Tokarczuk",lang:"de",cat:"Mądrość",tid:260},
  {id:1601,text:"Les enseignants sont pour les sociétés un tremplin vers un meilleur lendemain. Quand ils sont pleins de passion et d'énergie, ils détectent les talents chez les élèves, les soutiennent et les tirent vers le haut — et alors peut naître une force qui pousse le monde en avant.",author:"Olga Tokarczuk",lang:"fr",cat:"Mądrość",tid:260},
  {id:1602,text:"Los maestros son para las sociedades un trampolín hacia un mejor mañana. Cuando están llenos de pasión y energía, detectan talentos en los alumnos, los apoyan y los empujan hacia arriba — y entonces puede nacer una fuerza que empuje al mundo hacia adelante.",author:"Olga Tokarczuk",lang:"es",cat:"Mądrość",tid:260},
  {id:1603,text:"Учителя — для обществ трамплин в лучшее завтра. Когда они полны страсти и энергии, замечают таланты в учениках, будут их поддерживать и подтягивать вверх — и тогда может родиться сила, которая толкнёт мир вперёд.",author:"Ольга Токарчук",lang:"ru",cat:"Mądrość",tid:260},
  // Grupa 261 — Olga Tokarczuk, „Coś, co się wydarza, a nie zostaje opowiedziane…"
  {id:1604,text:"Coś, co się wydarza, a nie zostaje opowiedziane, przestaje istnieć i umiera.",author:"Olga Tokarczuk",lang:"pl",cat:"Filozofia",tid:261},
  {id:1605,text:"Something that happens but is not told ceases to exist and dies.",author:"Olga Tokarczuk",lang:"en",cat:"Filozofia",tid:261},
  {id:1606,text:"Etwas, das geschieht, aber nicht erzählt wird, hört auf zu existieren und stirbt.",author:"Olga Tokarczuk",lang:"de",cat:"Filozofia",tid:261},
  {id:1607,text:"Quelque chose qui se produit mais qui n'est pas raconté cesse d'exister et meurt.",author:"Olga Tokarczuk",lang:"fr",cat:"Filozofia",tid:261},
  {id:1608,text:"Algo que ocurre, pero no se cuenta, deja de existir y muere.",author:"Olga Tokarczuk",lang:"es",cat:"Filozofia",tid:261},
  {id:1609,text:"То, что происходит, но не рассказано, перестаёт существовать и умирает.",author:"Ольга Токарчук",lang:"ru",cat:"Filozofia",tid:261},
  // Grupa 262 — Olga Tokarczuk, „Bóg stworzył człowieka z oczami z przodu…"
  {id:1610,text:"Bóg stworzył człowieka z oczami z przodu, a nie z tyłu głowy, co znaczy, że człowiek ma się zajmować tym co będzie, a nie tym co było.",author:"Olga Tokarczuk",lang:"pl",cat:"Filozofia",tid:262},
  {id:1611,text:"God created man with eyes in front, not at the back of the head, which means that man is to occupy himself with what will be, not what was.",author:"Olga Tokarczuk",lang:"en",cat:"Filozofia",tid:262},
  {id:1612,text:"Gott schuf den Menschen mit Augen vorn, nicht hinten am Kopf, was bedeutet, dass der Mensch sich mit dem beschäftigen soll, was sein wird, nicht mit dem, was war.",author:"Olga Tokarczuk",lang:"de",cat:"Filozofia",tid:262},
  {id:1613,text:"Dieu a créé l'homme avec les yeux devant, et non derrière la tête, ce qui signifie que l'homme doit s'occuper de ce qui sera, et non de ce qui fut.",author:"Olga Tokarczuk",lang:"fr",cat:"Filozofia",tid:262},
  {id:1614,text:"Dios creó al hombre con los ojos delante, no detrás de la cabeza, lo que significa que el hombre debe ocuparse de lo que será, no de lo que fue.",author:"Olga Tokarczuk",lang:"es",cat:"Filozofia",tid:262},
  {id:1615,text:"Бог создал человека с глазами впереди, а не сзади головы — что означает, что человек должен заниматься тем, что будет, а не тем, что было.",author:"Ольга Токарчук",lang:"ru",cat:"Filozofia",tid:262},
  // Grupa 263 — Olga Tokarczuk, „Więzienie nie tkwi na zewnątrz…"
  {id:1616,text:"Więzienie nie tkwi na zewnątrz, ale jest w środku każdego z nas. Może jest tak, że nie umiemy bez niego żyć.",author:"Olga Tokarczuk",lang:"pl",cat:"Filozofia",tid:263},
  {id:1617,text:"The prison is not outside but inside each of us. Maybe it is that we cannot live without it.",author:"Olga Tokarczuk",lang:"en",cat:"Filozofia",tid:263},
  {id:1618,text:"Das Gefängnis steckt nicht draußen, sondern in jedem von uns. Vielleicht ist es so, dass wir nicht ohne es leben können.",author:"Olga Tokarczuk",lang:"de",cat:"Filozofia",tid:263},
  {id:1619,text:"La prison n'est pas à l'extérieur, mais à l'intérieur de chacun de nous. Peut-être ne savons-nous pas vivre sans elle.",author:"Olga Tokarczuk",lang:"fr",cat:"Filozofia",tid:263},
  {id:1620,text:"La prisión no está fuera, sino dentro de cada uno de nosotros. Quizá es que no sabemos vivir sin ella.",author:"Olga Tokarczuk",lang:"es",cat:"Filozofia",tid:263},
  {id:1621,text:"Тюрьма находится не снаружи, а внутри каждого из нас. Может быть, мы не умеем без неё жить.",author:"Ольга Токарчук",lang:"ru",cat:"Filozofia",tid:263},
  // Grupa 264 — Friedrich Dessauer, „Być człowiekiem znaczy: każdego dnia starać się być lepszym."
  {id:1622,text:"Być człowiekiem znaczy: każdego dnia starać się być lepszym.",author:"Friedrich Dessauer",lang:"pl",cat:"Mądrość",tid:264},
  {id:1623,text:"To be human means: every day trying to be better.",author:"Friedrich Dessauer",lang:"en",cat:"Mądrość",tid:264},
  {id:1624,text:"Mensch sein heißt: jeden Tag versuchen, besser zu werden.",author:"Friedrich Dessauer",lang:"de",cat:"Mądrość",tid:264},
  {id:1625,text:"Être humain, cela signifie : chaque jour essayer d'être meilleur.",author:"Friedrich Dessauer",lang:"fr",cat:"Mądrość",tid:264},
  {id:1626,text:"Ser humano significa: cada día intentar ser mejor.",author:"Friedrich Dessauer",lang:"es",cat:"Mądrość",tid:264},
  {id:1627,text:"Быть человеком — значит: каждый день стараться быть лучше.",author:"Фридрих Дессауэр",lang:"ru",cat:"Mądrość",tid:264},
  // Grupa 265 — Dr. Seuss, „Be who you are and say what you feel…"
  {id:1628,text:"Bądź sobą i mów, co czujesz, bo ci, którym to przeszkadza, nie mają znaczenia, a ci, którzy mają znaczenie — nie przeszkadza im to.",author:"Dr. Seuss",lang:"pl",cat:"Mądrość",tid:265},
  {id:1629,text:"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",author:"Dr. Seuss",lang:"en",cat:"Mądrość",tid:265},
  {id:1630,text:"Sei, wer du bist, und sag, was du fühlst, denn diejenigen, die sich daran stören, haben keine Bedeutung, und diejenigen, die Bedeutung haben, stört es nicht.",author:"Dr. Seuss",lang:"de",cat:"Mądrość",tid:265},
  {id:1631,text:"Sois qui tu es et dis ce que tu ressens, car ceux que cela dérange n'ont pas d'importance, et ceux qui ont de l'importance ne s'en soucient pas.",author:"Dr. Seuss",lang:"fr",cat:"Mądrość",tid:265},
  {id:1632,text:"Sé quien eres y di lo que sientes, porque a quienes les molesta no importan, y a quienes importan no les molesta.",author:"Dr. Seuss",lang:"es",cat:"Mądrość",tid:265},
  {id:1633,text:"Будь тем, кто ты есть, и говори, что чувствуешь, потому что те, кому это мешает, не имеют значения, а тем, кто имеет значение, это не мешает.",author:"Доктор Сьюз",lang:"ru",cat:"Mądrość",tid:265},
  // Grupa 266 — Napoleon Hill, „A goal is a dream with a deadline."
  {id:1634,text:"Cel to marzenie z terminem.",author:"Napoleon Hill",lang:"pl",cat:"Sukces",tid:266},
  {id:1635,text:"A goal is a dream with a deadline.",author:"Napoleon Hill",lang:"en",cat:"Sukces",tid:266},
  {id:1636,text:"Ein Ziel ist ein Traum mit einer Frist.",author:"Napoleon Hill",lang:"de",cat:"Sukces",tid:266},
  {id:1637,text:"Un but est un rêve avec une date limite.",author:"Napoleon Hill",lang:"fr",cat:"Sukces",tid:266},
  {id:1638,text:"Una meta es un sueño con una fecha límite.",author:"Napoleon Hill",lang:"es",cat:"Sukces",tid:266},
  {id:1639,text:"Цель — это мечта со сроком.",author:"Наполеон Хилл",lang:"ru",cat:"Sukces",tid:266},
  // Grupa 267 — DaShanne Stokes, „A person with true power doesn't need to attack…"
  {id:1640,text:"Osoba z prawdziwą władzą nie musi atakować. Osoba bez władzy atakuje nieustannie.",author:"DaShanne Stokes",lang:"pl",cat:"Mądrość",tid:267},
  {id:1641,text:"A person with true power doesn't need to attack. A person without power attacks constantly.",author:"DaShanne Stokes",lang:"en",cat:"Mądrość",tid:267},
  {id:1642,text:"Eine Person mit wahrer Macht muss nicht angreifen. Eine Person ohne Macht greift ständig an.",author:"DaShanne Stokes",lang:"de",cat:"Mądrość",tid:267},
  {id:1643,text:"Une personne avec un véritable pouvoir n'a pas besoin d'attaquer. Une personne sans pouvoir attaque constamment.",author:"DaShanne Stokes",lang:"fr",cat:"Mądrość",tid:267},
  {id:1644,text:"Una persona con verdadero poder no necesita atacar. Una persona sin poder ataca constantemente.",author:"DaShanne Stokes",lang:"es",cat:"Mądrość",tid:267},
  {id:1645,text:"Человек, обладающий настоящей властью, не нуждается в нападении. Человек без власти нападает постоянно.",author:"Дэшен Стоукс",lang:"ru",cat:"Mądrość",tid:267},
  // Grupa 268 — DaShanne Stokes, „Thoughts and prayers won't stop a speeding bullet."
  {id:1646,text:"Modlitwy i myśli nie zatrzymają lecącej kuli.",author:"DaShanne Stokes",lang:"pl",cat:"Filozofia",tid:268},
  {id:1647,text:"Thoughts and prayers won't stop a speeding bullet.",author:"DaShanne Stokes",lang:"en",cat:"Filozofia",tid:268},
  {id:1648,text:"Gedanken und Gebete halten keine fliegende Kugel auf.",author:"DaShanne Stokes",lang:"de",cat:"Filozofia",tid:268},
  {id:1649,text:"Pensées et prières n'arrêtent pas une balle en mouvement.",author:"DaShanne Stokes",lang:"fr",cat:"Filozofia",tid:268},
  {id:1650,text:"Pensamientos y oraciones no detienen una bala en movimiento.",author:"DaShanne Stokes",lang:"es",cat:"Filozofia",tid:268},
  {id:1651,text:"Мысли и молитвы не остановят летящую пулю.",author:"Дэшен Стоукс",lang:"ru",cat:"Filozofia",tid:268},
  // Grupa 269 — DaShanne Stokes, „If guns don't kill people, why do mass killers arm themselves with guns?"
  {id:1652,text:"Jeśli broń nie zabija ludzi, to dlaczego masowi mordercy uzbrajają się w broń?",author:"DaShanne Stokes",lang:"pl",cat:"Filozofia",tid:269},
  {id:1653,text:"If guns don't kill people, why do mass killers arm themselves with guns?",author:"DaShanne Stokes",lang:"en",cat:"Filozofia",tid:269},
  {id:1654,text:"Wenn Waffen keine Menschen töten, warum bewaffnen sich Massenmörder mit Waffen?",author:"DaShanne Stokes",lang:"de",cat:"Filozofia",tid:269},
  {id:1655,text:"Si les armes ne tuent pas les gens, pourquoi les tueurs de masse s'arment-ils d'armes ?",author:"DaShanne Stokes",lang:"fr",cat:"Filozofia",tid:269},
  {id:1656,text:"Si las armas no matan a la gente, ¿por qué los asesinos en masa se arman con armas?",author:"DaShanne Stokes",lang:"es",cat:"Filozofia",tid:269},
  {id:1657,text:"Если оружие не убивает людей, почему массовые убийцы вооружаются оружием?",author:"Дэшен Стоукс",lang:"ru",cat:"Filozofia",tid:269},
  // Grupa 270 — DaShanne Stokes, „If you lay with a scorpion…"
  {id:1658,text:"Jeśli położysz się ze skorpionem, nie zdziw się, gdy w końcu cię użądli.",author:"DaShanne Stokes",lang:"pl",cat:"Mądrość",tid:270},
  {id:1659,text:"If you lay with a scorpion, don't be surprised when it finally stings you.",author:"DaShanne Stokes",lang:"en",cat:"Mądrość",tid:270},
  {id:1660,text:"Wenn du dich mit einem Skorpion hinlegst, sei nicht überrascht, wenn er dich schließlich sticht.",author:"DaShanne Stokes",lang:"de",cat:"Mądrość",tid:270},
  {id:1661,text:"Si tu te couches avec un scorpion, ne sois pas surpris quand il finit par te piquer.",author:"DaShanne Stokes",lang:"fr",cat:"Mądrość",tid:270},
  {id:1662,text:"Si te acuestas con un escorpión, no te sorprendas cuando finalmente te pique.",author:"DaShanne Stokes",lang:"es",cat:"Mądrość",tid:270},
  {id:1663,text:"Если ты ляжешь со скорпионом, не удивляйся, когда он в конце концов тебя ужалит.",author:"Дэшен Стоукс",lang:"ru",cat:"Mądrość",tid:270},
  // Grupa 271 — DaShanne Stokes, „Never be content to sit back and watch as others' rights are trampled upon."
  {id:1664,text:"Nigdy nie pozwalaj sobie siedzieć i patrzeć, jak depcze się prawa innych. Twoje prawa mogą być następne.",author:"DaShanne Stokes",lang:"pl",cat:"Filozofia",tid:271},
  {id:1665,text:"Never be content to sit back and watch as others' rights are trampled upon. Your rights could be next.",author:"DaShanne Stokes",lang:"en",cat:"Filozofia",tid:271},
  {id:1666,text:"Sei niemals zufrieden damit, zurückzulehnen und zuzusehen, wie die Rechte anderer mit Füßen getreten werden. Deine Rechte könnten die nächsten sein.",author:"DaShanne Stokes",lang:"de",cat:"Filozofia",tid:271},
  {id:1667,text:"Ne te contente jamais de t'asseoir et de regarder pendant qu'on piétine les droits des autres. Tes droits pourraient être les prochains.",author:"DaShanne Stokes",lang:"fr",cat:"Filozofia",tid:271},
  {id:1668,text:"Nunca te conformes con sentarte y mirar cómo se pisotean los derechos de otros. Tus derechos podrían ser los siguientes.",author:"DaShanne Stokes",lang:"es",cat:"Filozofia",tid:271},
  {id:1669,text:"Никогда не довольствуйся тем, чтобы сидеть и наблюдать, как попираются права других. Твои права могут быть следующими.",author:"Дэшен Стоукс",lang:"ru",cat:"Filozofia",tid:271},
  // Grupa 272 — Maria Cristina Mena, „The piano keys are black and white…"
  {id:1670,text:"Klawisze pianina są czarne i białe, ale w twoim umyśle brzmią jak milion kolorów.",author:"Maria Cristina Mena",lang:"pl",cat:"Filozofia",tid:272},
  {id:1671,text:"The piano keys are black and white but they sound like a million colors in your mind.",author:"Maria Cristina Mena",lang:"en",cat:"Filozofia",tid:272},
  {id:1672,text:"Die Klaviertasten sind schwarz und weiß, aber sie klingen wie eine Million Farben in deinem Kopf.",author:"Maria Cristina Mena",lang:"de",cat:"Filozofia",tid:272},
  {id:1673,text:"Les touches du piano sont noires et blanches, mais elles sonnent comme un million de couleurs dans ton esprit.",author:"Maria Cristina Mena",lang:"fr",cat:"Filozofia",tid:272},
  {id:1674,text:"Las teclas del piano son blancas y negras, pero suenan como un millón de colores en tu mente.",author:"Maria Cristina Mena",lang:"es",cat:"Filozofia",tid:272},
  {id:1675,text:"Клавиши пианино чёрные и белые, но в твоём уме они звучат как миллион цветов.",author:"Мария Кристина Мена",lang:"ru",cat:"Filozofia",tid:272},
  // Grupa 273 — Voltaire, „Reading nurtures the soul…"
  {id:1676,text:"Czytanie karmi duszę, a oświecony przyjaciel niesie jej ukojenie.",author:"Voltaire",lang:"pl",cat:"Mądrość",tid:273},
  {id:1677,text:"Reading nurtures the soul, and an enlightened friend brings it solace.",author:"Voltaire",lang:"en",cat:"Mądrość",tid:273},
  {id:1678,text:"Lesen nährt die Seele, und ein erleuchteter Freund bringt ihr Trost.",author:"Voltaire",lang:"de",cat:"Mądrość",tid:273},
  {id:1679,text:"La lecture nourrit l'âme, et un ami éclairé lui apporte du réconfort.",author:"Voltaire",lang:"fr",cat:"Mądrość",tid:273},
  {id:1680,text:"La lectura nutre el alma, y un amigo ilustrado le aporta consuelo.",author:"Voltaire",lang:"es",cat:"Mądrość",tid:273},
  {id:1681,text:"Чтение питает душу, а просвещённый друг приносит ей утешение.",author:"Вольтер",lang:"ru",cat:"Mądrość",tid:273},
  // Grupa 274 — Voltaire, „Dare to think for yourself."
  {id:1682,text:"Odważ się myśleć samodzielnie.",author:"Voltaire",lang:"pl",cat:"Filozofia",tid:274},
  {id:1683,text:"Dare to think for yourself.",author:"Voltaire",lang:"en",cat:"Filozofia",tid:274},
  {id:1684,text:"Wage es, selbst zu denken.",author:"Voltaire",lang:"de",cat:"Filozofia",tid:274},
  {id:1685,text:"Ose penser par toi-même.",author:"Voltaire",lang:"fr",cat:"Filozofia",tid:274},
  {id:1686,text:"Atrévete a pensar por ti mismo.",author:"Voltaire",lang:"es",cat:"Filozofia",tid:274},
  {id:1687,text:"Осмелься мыслить самостоятельно.",author:"Вольтер",lang:"ru",cat:"Filozofia",tid:274},
  // Grupa 275 — Voltaire, „Every man is guilty of all the good he did not do."
  {id:1688,text:"Każdy człowiek jest winny całego dobra, którego nie uczynił.",author:"Voltaire",lang:"pl",cat:"Filozofia",tid:275},
  {id:1689,text:"Every man is guilty of all the good he did not do.",author:"Voltaire",lang:"en",cat:"Filozofia",tid:275},
  {id:1690,text:"Jeder Mensch ist schuldig an all dem Guten, das er nicht getan hat.",author:"Voltaire",lang:"de",cat:"Filozofia",tid:275},
  {id:1691,text:"Tout homme est coupable de tout le bien qu'il n'a pas fait.",author:"Voltaire",lang:"fr",cat:"Filozofia",tid:275},
  {id:1692,text:"Todo hombre es culpable de todo el bien que no hizo.",author:"Voltaire",lang:"es",cat:"Filozofia",tid:275},
  {id:1693,text:"Каждый человек виновен во всём добре, которого он не сделал.",author:"Вольтер",lang:"ru",cat:"Filozofia",tid:275},
  // Grupa 276 — Voltaire, „Those who can make you believe absurdities, can make you commit atrocities."
  {id:1694,text:"Ci, którzy mogą sprawić, że uwierzysz w absurdy, mogą sprawić, że popełnisz okrucieństwa.",author:"Voltaire",lang:"pl",cat:"Filozofia",tid:276},
  {id:1695,text:"Those who can make you believe absurdities, can make you commit atrocities.",author:"Voltaire",lang:"en",cat:"Filozofia",tid:276},
  {id:1696,text:"Diejenigen, die dich an Absurditäten glauben lassen können, können dich Gräueltaten begehen lassen.",author:"Voltaire",lang:"de",cat:"Filozofia",tid:276},
  {id:1697,text:"Ceux qui peuvent te faire croire à des absurdités peuvent te faire commettre des atrocités.",author:"Voltaire",lang:"fr",cat:"Filozofia",tid:276},
  {id:1698,text:"Quienes pueden hacerte creer absurdos pueden hacerte cometer atrocidades.",author:"Voltaire",lang:"es",cat:"Filozofia",tid:276},
  {id:1699,text:"Те, кто способен заставить тебя верить в нелепости, способны заставить тебя совершать злодеяния.",author:"Вольтер",lang:"ru",cat:"Filozofia",tid:276},
  // Grupa 277 — Mitch Albom, „Holding anger is a poison…"
  {id:1700,text:"Trzymanie w sobie gniewu jest jak trucizna… Pożera cię od środka… Sądzimy, że nienawidząc kogoś, krzywdzimy go… Ale nienawiść to zakrzywione ostrze… i krzywda, którą wyrządzamy innym… wyrządzamy także sobie.",author:"Mitch Albom",lang:"pl",cat:"Mądrość",tid:277},
  {id:1701,text:"Holding anger is a poison… It eats you from inside… We think that by hating someone we hurt them… But hatred is a curved blade… and the harm we do to others… we also do to ourselves.",author:"Mitch Albom",lang:"en",cat:"Mądrość",tid:277},
  {id:1702,text:"Wut in sich zu tragen ist ein Gift… Es zerfrisst dich von innen… Wir denken, dass wir jemandem schaden, indem wir ihn hassen… Aber Hass ist eine gebogene Klinge… und der Schaden, den wir anderen zufügen… fügen wir auch uns selbst zu.",author:"Mitch Albom",lang:"de",cat:"Mądrość",tid:277},
  {id:1703,text:"Garder la colère est un poison… Elle te dévore de l'intérieur… Nous pensons qu'en haïssant quelqu'un nous lui faisons du mal… Mais la haine est une lame courbe… et le mal que nous faisons aux autres… nous nous le faisons aussi.",author:"Mitch Albom",lang:"fr",cat:"Mądrość",tid:277},
  {id:1704,text:"Guardar ira es un veneno… Te corroe por dentro… Pensamos que al odiar a alguien lo herimos… Pero el odio es una hoja curva… y el daño que hacemos a otros… también nos lo hacemos a nosotros mismos.",author:"Mitch Albom",lang:"es",cat:"Mądrość",tid:277},
  {id:1705,text:"Хранить в себе гнев — это яд… Он съедает тебя изнутри… Мы думаем, что, ненавидя кого-то, мы причиняем ему боль… Но ненависть — это изогнутый клинок… и вред, который мы наносим другим… мы наносим и себе.",author:"Митч Элбом",lang:"ru",cat:"Mądrość",tid:277},
  // Grupa 278 — Anne Lamott, „Not forgiving is like drinking rat poison…"
  {id:1706,text:"Niewybaczanie jest jak picie szczurzej trutki w nadziei, że szczur zdechnie.",author:"Anne Lamott",lang:"pl",cat:"Mądrość",tid:278},
  {id:1707,text:"Not forgiving is like drinking rat poison and then waiting for the rat to die.",author:"Anne Lamott",lang:"en",cat:"Mądrość",tid:278},
  {id:1708,text:"Nicht zu vergeben ist wie Rattengift zu trinken und dann darauf zu warten, dass die Ratte stirbt.",author:"Anne Lamott",lang:"de",cat:"Mądrość",tid:278},
  {id:1709,text:"Ne pas pardonner, c'est comme boire du poison à rats en attendant que le rat meure.",author:"Anne Lamott",lang:"fr",cat:"Mądrość",tid:278},
  {id:1710,text:"No perdonar es como beber veneno para ratas y luego esperar a que la rata muera.",author:"Anne Lamott",lang:"es",cat:"Mądrość",tid:278},
  {id:1711,text:"Не прощать — это как пить крысиный яд и ждать, что крыса умрёт.",author:"Энн Ламотт",lang:"ru",cat:"Mądrość",tid:278},
  // Grupa 279 — Douglas Adams, „Isn't it enough to see that a garden is beautiful…"
  {id:1712,text:"Czy nie wystarczy widzieć, że ogród jest piękny, bez konieczności wierzenia, że na jego dnie są wróżki?",author:"Douglas Adams",lang:"pl",cat:"Filozofia",tid:279},
  {id:1713,text:"Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",author:"Douglas Adams",lang:"en",cat:"Filozofia",tid:279},
  {id:1714,text:"Reicht es nicht zu sehen, dass ein Garten schön ist, ohne dass man glauben muss, dass am Ende davon auch Feen sind?",author:"Douglas Adams",lang:"de",cat:"Filozofia",tid:279},
  {id:1715,text:"Ne suffit-il pas de voir qu'un jardin est beau sans avoir à croire qu'il y a aussi des fées au fond ?",author:"Douglas Adams",lang:"fr",cat:"Filozofia",tid:279},
  {id:1716,text:"¿No basta con ver que un jardín es hermoso sin tener que creer que también hay hadas en el fondo?",author:"Douglas Adams",lang:"es",cat:"Filozofia",tid:279},
  {id:1717,text:"Разве не достаточно видеть, что сад красив, без необходимости верить, что в глубине его ещё и феи?",author:"Дуглас Адамс",lang:"ru",cat:"Filozofia",tid:279},
  // Grupa 280 — Nelson Mandela, „Resentment is like drinking poison and then hoping it will kill your enemies."
  {id:1718,text:"Żywienie urazy jest jak picie trucizny i oczekiwanie, że zabije ona twoich wrogów.",author:"Nelson Mandela",lang:"pl",cat:"Mądrość",tid:280},
  {id:1719,text:"Resentment is like drinking poison and then hoping it will kill your enemies.",author:"Nelson Mandela",lang:"en",cat:"Mądrość",tid:280},
  {id:1720,text:"Groll zu hegen ist wie Gift zu trinken und zu hoffen, dass es deine Feinde tötet.",author:"Nelson Mandela",lang:"de",cat:"Mądrość",tid:280},
  {id:1721,text:"Le ressentiment, c'est comme boire du poison en espérant qu'il tuera tes ennemis.",author:"Nelson Mandela",lang:"fr",cat:"Mądrość",tid:280},
  {id:1722,text:"El resentimiento es como beber veneno y esperar que mate a tus enemigos.",author:"Nelson Mandela",lang:"es",cat:"Mądrość",tid:280},
  {id:1723,text:"Обида — это как пить яд и надеяться, что он убьёт твоих врагов.",author:"Нельсон Мандела",lang:"ru",cat:"Mądrość",tid:280},
  // Grupa 281 — George R.R. Martin, „Laughter is poison to fear."
  {id:1724,text:"Śmiech jest trucizną dla strachu.",author:"George R.R. Martin",lang:"pl",cat:"Mądrość",tid:281},
  {id:1725,text:"Laughter is poison to fear.",author:"George R.R. Martin",lang:"en",cat:"Mądrość",tid:281},
  {id:1726,text:"Lachen ist Gift für die Angst.",author:"George R.R. Martin",lang:"de",cat:"Mądrość",tid:281},
  {id:1727,text:"Le rire est un poison pour la peur.",author:"George R.R. Martin",lang:"fr",cat:"Mądrość",tid:281},
  {id:1728,text:"La risa es veneno para el miedo.",author:"George R.R. Martin",lang:"es",cat:"Mądrość",tid:281},
  {id:1729,text:"Смех — яд для страха.",author:"Джордж Р. Р. Мартин",lang:"ru",cat:"Mądrość",tid:281},
  // Grupa 282 — Johann Wolfgang von Goethe, „Jakże trudno na tym świecie człowiekowi…"
  {id:1730,text:"Jakże trudno na tym świecie człowiekowi zrozumieć drugiego człowieka.",author:"Johann Wolfgang von Goethe",lang:"pl",cat:"Filozofia",tid:282},
  {id:1731,text:"How difficult it is in this world for one person to understand another.",author:"Johann Wolfgang von Goethe",lang:"en",cat:"Filozofia",tid:282},
  {id:1732,text:"Wie schwer ist es auf dieser Welt für einen Menschen, einen anderen zu verstehen.",author:"Johann Wolfgang von Goethe",lang:"de",cat:"Filozofia",tid:282},
  {id:1733,text:"Comme il est difficile en ce monde pour un homme de comprendre un autre.",author:"Johann Wolfgang von Goethe",lang:"fr",cat:"Filozofia",tid:282},
  {id:1734,text:"Qué difícil es en este mundo para un hombre entender a otro.",author:"Johann Wolfgang von Goethe",lang:"es",cat:"Filozofia",tid:282},
  {id:1735,text:"Как трудно в этом мире одному человеку понять другого.",author:"Иоганн Вольфганг фон Гёте",lang:"ru",cat:"Filozofia",tid:282}
];

// Wersja seed-bazy. Bump przy KAŻDYM dodaniu cytatów do DEFAULT_QUOTES.
// loadQuotes używa tego, by dosiać brakujące cytaty istniejącym użytkownikom.
var DB_SEED_VERSION=40;

// Punktowe poprawki istniejących cytatów (np. literówki). Klucz = wersja, w której patch został wprowadzony.
// loadQuotes aplikuje tylko patche z zakresu (savedVer, DB_SEED_VERSION], więc każda poprawka pójdzie raz.
var DB_TEXT_PATCHES={
  4:[
    // typo "leków" → "lęków" + dopięcie tid grupy tłumaczeń dla cytatu #67
    {id:67,field:"text",value:"Każde serce może skrywać iskrę, zdolną rozświetlić najciemniejsze zakątki. W życiu warto otaczać się ludźmi, którzy przecinają mrok naszych lęków i wątpliwości, stają się promieniem światła, który wskrzesza nadzieję i przynosi ulgę."},
    {id:67,field:"tid",value:6}
  ],
  27:[
    // Dopięcie tid:154 do Heraklita (id:1 — „Nie ma nic trwałego oprócz zmiany"),
    // żeby istniejący użytkownicy zobaczyli powiązanie z nowymi tłumaczeniami (ID 955–959).
    {id:1,field:"tid",value:154}
  ],
  28:[
    // Dopięcie tid do 4 istniejących cytatów polskich, żeby istniejący użytkownicy
    // zobaczyli powiązanie z nowymi tłumaczeniami (ID 960–979).
    {id:2,field:"tid",value:155},  // Gandhi
    {id:3,field:"tid",value:156},  // Clarke
    {id:4,field:"tid",value:157},  // MLK Jr.
    {id:5,field:"tid",value:158}   // Carnegie
  ],
  29:[
    // Dopięcie tid do Klaudiusza (id:9) i Wilde'a (id:11) — by istniejący użytkownicy
    // zobaczyli powiązanie z nowymi tłumaczeniami (ID 995–1004).
    {id:9,field:"tid",value:159},  // Appius Claudius Caecus
    {id:11,field:"tid",value:160}  // Oscar Wilde
  ],
  33:[
    // Dopięcie tid:196 do Eleanor Roosevelt (id:60) — by istniejący użytkownicy
    // zobaczyli powiązanie z 5 nowymi tłumaczeniami (ID 1215–1219).
    {id:60,field:"tid",value:196}  // Eleanor Roosevelt
  ]
};

// === BAZA DANYCH (localStorage) ===
// Cytaty trzymamy w localStorage pod kluczem "ql_quotes".
// Pierwszy start → seed z DEFAULT_QUOTES. Każda zmiana → saveQuotes().
var quotes=loadQuotes();
var nextId=quotes.reduce(function(m,q){return q.id>m?q.id:m},0)+1;

function loadQuotes(){
  try{
    var raw=localStorage.getItem("ql_quotes");
    if(raw){
      var arr=JSON.parse(raw);
      if(Array.isArray(arr)&&arr.length){
        var changed=false;
        // Migracja 1: dopisz tid z DEFAULT_QUOTES po id (dla baz sprzed wprowadzenia tłumaczeń)
        var defaultsById={};
        DEFAULT_QUOTES.forEach(function(q){defaultsById[q.id]=q});
        arr.forEach(function(q){
          var d=defaultsById[q.id];
          if(d&&d.tid&&q.tid===undefined){q.tid=d.tid;changed=true}
        });
        // Migracja 2: dosiej cytaty dodane w nowszej wersji DEFAULT_QUOTES (po wersji)
        var savedVer=parseInt(localStorage.getItem("ql_db_seed_version")||"1",10);
        if(savedVer<DB_SEED_VERSION){
          var existing={};
          arr.forEach(function(q){existing[q.id]=true});
          var added=0;
          DEFAULT_QUOTES.forEach(function(q){
            if(!existing[q.id]){arr.push(Object.assign({},q));changed=true;added++}
          });
          // Migracja 3: aplikuj punktowe poprawki tekstu / pól dla zakresu wersji
          var patched=0;
          for(var v=savedVer+1;v<=DB_SEED_VERSION;v++){
            var patches=(typeof DB_TEXT_PATCHES!=="undefined"&&DB_TEXT_PATCHES[v])||[];
            patches.forEach(function(p){
              var q=arr.find(function(x){return x.id===p.id});
              if(q){q[p.field]=p.value;changed=true;patched++}
            });
          }
          localStorage.setItem("ql_db_seed_version",String(DB_SEED_VERSION));
          if(added||patched)console.log("LingoMaxima: dosiano "+added+" nowych cytatów, zastosowano "+patched+" poprawek (seed v"+savedVer+"→v"+DB_SEED_VERSION+")");
        }
        if(changed)localStorage.setItem("ql_quotes",JSON.stringify(arr));
        return arr;
      }
    }
  }catch(e){}
  localStorage.setItem("ql_quotes",JSON.stringify(DEFAULT_QUOTES));
  localStorage.setItem("ql_db_seed_version",String(DB_SEED_VERSION));
  return DEFAULT_QUOTES.slice();
}

// === TŁUMACZENIA ===
function getTranslations(q){
  if(!q||!q.tid)return [q];
  return quotes.filter(function(x){return x.tid===q.tid});
}

function openTranslationsModal(id){
  var q=quotes.find(function(x){return x.id===id});
  if(!q)return;
  var trs=getTranslations(q);
  if(trs.length<=1){showToast("ℹ️ Brak tłumaczeń tego cytatu");return}
  var order={};LANGS.forEach(function(L,i){order[L.code]=i});
  trs.sort(function(a,b){return (order[a.lang]||99)-(order[b.lang]||99)});
  var list=document.getElementById("tr-list");
  list.innerHTML="";
  trs.forEach(function(t){
    var L=getLang(t.lang);
    var row=document.createElement("div");
    row.className="tr-row"+(t.id===id?" tr-current":"");
    var head=document.createElement("div");
    head.className="tr-head";head.style.color=L.color;
    head.textContent=L.flag+" "+L.label;
    var text=document.createElement("div");
    text.className="tr-text";
    makeClickableWords(t.text,t.lang,text);
    var foot=document.createElement("div");
    foot.className="tr-foot";
    var author=document.createElement("div");
    author.className="tr-author";author.textContent="— "+t.author;
    var btns=document.createElement("div");btns.style.display="flex";btns.style.gap="4px";
    var sBtn=document.createElement("button");sBtn.className="icon-btn";sBtn.title="Odsłuchaj";sBtn.textContent="🔊";
    (function(tt){sBtn.onclick=function(e){e.stopPropagation();speakText(tt.text,tt.lang,this)}})(t);
    var fBtn=document.createElement("button");fBtn.className="icon-btn"+(favorites.indexOf(t.id)!==-1?" fav-on":"");
    fBtn.title="Ulubione";fBtn.textContent="♥";
    (function(tt){fBtn.onclick=function(e){e.stopPropagation();toggleFavorite(tt.id);this.classList.toggle("fav-on",favorites.indexOf(tt.id)!==-1)}})(t);
    btns.appendChild(sBtn);btns.appendChild(fBtn);
    foot.appendChild(author);foot.appendChild(btns);
    row.appendChild(head);row.appendChild(text);row.appendChild(foot);
    list.appendChild(row);
  });
  document.getElementById("tr-modal-title").textContent="🌐 Tłumaczenia · "+trs.length+" "+(trs.length===1?"wersja":"wersje");
  document.getElementById("tr-modal").classList.add("open");
}
function saveQuotes(){
  localStorage.setItem("ql_quotes",JSON.stringify(quotes));
}

// === KONTA ADMINÓW ===
// Hasła trzymane jako SHA-256 (Web Crypto API).
// Kod nie zawiera haseł w postaci jawnej — tylko skróty.
var ADMINS=[
  // Daniel / Cytaty17!
  {user:"Daniel",hash:"5c3c965ef0d38d58fdf3206646231998aaa709da291295d326570b00cdeecd66"}
];

function sha256(text){
  var enc=new TextEncoder().encode(text);
  return crypto.subtle.digest("SHA-256",enc).then(function(buf){
    return Array.from(new Uint8Array(buf))
      .map(function(b){return b.toString(16).padStart(2,"0")}).join("");
  });
}

var LANGS=[
  {code:"pl",label:"Polski",  flag:"🇵🇱",voice:"pl-PL",rvVoice:"Polish Female",      color:"#e63946"},
  {code:"en",label:"English", flag:"🇬🇧",voice:"en-GB",rvVoice:"UK English Female",   color:"#457b9d"},
  {code:"de",label:"Deutsch", flag:"🇩🇪",voice:"de-DE",rvVoice:"Deutsch Female",      color:"#f4a261"},
  {code:"fr",label:"Français",flag:"🇫🇷",voice:"fr-FR",rvVoice:"French Female",       color:"#2a9d8f"},
  {code:"es",label:"Español", flag:"🇪🇸",voice:"es-ES",rvVoice:"Spanish Female",      color:"#e9c46a"},
  {code:"ru",label:"Русский", flag:"🇷🇺",voice:"ru-RU",rvVoice:"Russian Female",      color:"#c77dff"}
];

var favorites=JSON.parse(localStorage.getItem("ql_fav")||"[]");
var activeLangs=JSON.parse(localStorage.getItem("ql_langs")||JSON.stringify(LANGS.map(function(l){return l.code})));
var currentQuotePerLang={};
var adminIn=false;
var browseFilt={lang:"all",cat:"all",level:"all"};
var isSpeaking=false;

// === SŁOWNICTWO (vocabulary store) ===
// Wpis: {word, lang, status:"learning"|"known", trs:{en:"life",...}, addedAt, stats:{ok,bad}}
var vocab=JSON.parse(localStorage.getItem("ql_vocab")||"[]");

// === STAŁE NAUKI ===
var CEFR_LEVELS=["A1","A2","B1","B2","C1","C2"];
var CEFR_LABELS={A1:"Początkujący",A2:"Podstawowy",B1:"Średniozaawansowany",B2:"Średnio-wyższy",C1:"Zaawansowany",C2:"Biegły"};
// Algorytm SM-2 lite — uproszczona wersja SuperMemo 2.
// Interwały (w dniach) dla poziomów oceny: again=0 (jutro), hard=1, good=interval*ease, easy=interval*ease*1.3
function srsNextReview(item,quality){
  // quality: 0=again, 1=hard, 2=good, 3=easy
  if(!item.srs)item.srs={interval:1,ease:2.5,reps:0,lapses:0};
  var s=item.srs;
  if(quality===0){s.interval=1;s.reps=0;s.lapses++;s.ease=Math.max(1.3,s.ease-0.2)}
  else if(quality===1){s.interval=Math.max(1,Math.round(s.interval*1.2));s.reps++;s.ease=Math.max(1.3,s.ease-0.15)}
  else if(quality===2){s.interval=s.reps===0?1:s.reps===1?3:Math.round(s.interval*s.ease);s.reps++}
  else if(quality===3){s.interval=s.reps===0?2:s.reps===1?5:Math.round(s.interval*s.ease*1.3);s.reps++;s.ease=Math.min(3.0,s.ease+0.1)}
  var d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()+s.interval);
  s.nextReview=d.toISOString().slice(0,10);
  return s;
}
function srsDueDates(){var d=new Date();d.setHours(0,0,0,0);return d.toISOString().slice(0,10)}
function srsDueVocab(){
  var today=srsDueDates();
  return vocab.filter(function(v){
    if(v.status==="known")return false; // znane słowa nie są w kolejce SRS
    if(!v.srs||!v.srs.nextReview)return true; // nowe słowo
    return v.srs.nextReview<=today;
  });
}

// === STREAK (seria dni z aplikacją) ===
var streakData=JSON.parse(localStorage.getItem("ql_streak")||'{"current":0,"longest":0,"lastVisit":null,"totalDays":0}');
function saveStreak(){localStorage.setItem("ql_streak",JSON.stringify(streakData))}
function updateStreak(){
  var today=srsDueDates();
  if(streakData.lastVisit===today)return; // już zaliczono dzisiaj
  if(streakData.lastVisit){
    var yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);yesterday.setHours(0,0,0,0);
    if(streakData.lastVisit===yesterday.toISOString().slice(0,10)){
      streakData.current++;
    } else {
      streakData.current=1;
    }
  } else {
    streakData.current=1;
  }
  streakData.longest=Math.max(streakData.longest,streakData.current);
  streakData.lastVisit=today;
  streakData.totalDays++;
  saveStreak();
  checkAchievements();
}

// === ACHIEVEMENTS (odznaki) ===
var ACHIEVEMENTS=[
  {id:"first_fav",name:"Pierwsze ulubione",desc:"Polub swój pierwszy cytat",emoji:"💝",check:function(){return favorites.length>=1}},
  {id:"fav_10",name:"Kolekcjoner",desc:"10 ulubionych cytatów",emoji:"📚",check:function(){return favorites.length>=10}},
  {id:"fav_50",name:"Bibliofil",desc:"50 ulubionych cytatów",emoji:"📖",check:function(){return favorites.length>=50}},
  {id:"vocab_1",name:"Pierwsze słówko",desc:"Dodaj pierwsze słowo do listy nauki",emoji:"⭐",check:function(){return vocab.length>=1}},
  {id:"vocab_25",name:"Słownictwowy zapaleniec",desc:"25 słów na liście",emoji:"📝",check:function(){return vocab.length>=25}},
  {id:"vocab_100",name:"Mistrz słownictwa",desc:"100 słów na liście",emoji:"🎓",check:function(){return vocab.length>=100}},
  {id:"known_10",name:"Pierwsze 10 znanych",desc:"Oznacz 10 słów jako znane",emoji:"🟢",check:function(){return vocab.filter(function(v){return v.status==="known"}).length>=10}},
  {id:"known_50",name:"50 słów w pamięci",desc:"50 znanych słów",emoji:"🧠",check:function(){return vocab.filter(function(v){return v.status==="known"}).length>=50}},
  {id:"streak_3",name:"Trzy dni z rzędu",desc:"Korzystaj z aplikacji 3 dni z rzędu",emoji:"🔥",check:function(){return streakData.current>=3}},
  {id:"streak_7",name:"Tydzień nauki",desc:"7-dniowa seria",emoji:"⚡",check:function(){return streakData.current>=7}},
  {id:"streak_30",name:"Miesiąc systematyczności",desc:"30-dniowa seria",emoji:"🏆",check:function(){return streakData.current>=30}},
  {id:"polyglot",name:"Poliglota",desc:"Aktywne wszystkie 6 języków",emoji:"🌍",check:function(){return activeLangs.length===6}},
  {id:"explorer",name:"Odkrywca",desc:"Przeczytaj 100 cytatów (otwórz w słowniku/karuzeli)",emoji:"🔍",check:function(){return (JSON.parse(localStorage.getItem("ql_seen")||"[]")).length>=100}}
];
var unlockedAchievements=JSON.parse(localStorage.getItem("ql_achievements")||"[]");
function saveAchievements(){localStorage.setItem("ql_achievements",JSON.stringify(unlockedAchievements))}
function checkAchievements(){
  var newOnes=[];
  ACHIEVEMENTS.forEach(function(a){
    if(unlockedAchievements.indexOf(a.id)===-1 && a.check()){
      unlockedAchievements.push(a.id);
      newOnes.push(a);
    }
  });
  if(newOnes.length){
    saveAchievements();
    newOnes.forEach(function(a){
      setTimeout(function(){showToast(a.emoji+" Odznaka: "+a.name)},200);
    });
  }
}

function saveVocab(){localStorage.setItem("ql_vocab",JSON.stringify(vocab))}
function vocabKey(w,l){return w.toLowerCase()+"|"+l}
function findVocab(w,l){var k=vocabKey(w,l);return vocab.find(function(v){return vocabKey(v.word,v.lang)===k})}
function addVocab(w,l,trs){
  if(findVocab(w,l))return false;
  vocab.push({word:w,lang:l,status:"learning",trs:trs||{},addedAt:Date.now(),stats:{ok:0,bad:0}});
  saveVocab();return true;
}
function removeVocab(w,l){
  var k=vocabKey(w,l);
  var i=vocab.findIndex(function(v){return vocabKey(v.word,v.lang)===k});
  if(i!==-1){vocab.splice(i,1);saveVocab();return true}
  return false;
}
function setVocabStatus(w,l,status){
  var v=findVocab(w,l);if(!v)return;
  v.status=status;saveVocab();
}
function setVocabTrs(w,l,trs){
  var v=findVocab(w,l);if(!v)return;
  v.trs=Object.assign(v.trs||{},trs);saveVocab();
}

// === KLIKALNE SŁOWA ===
// Rozbija tekst na słowa, każde owija w <span class="word"> z eventem otwierającym Słownik.
// Punktuacja zostaje przy słowie wizualnie, ale nie trafia do zapytania słownika.
function makeClickableWords(text,lang,container){
  container.innerHTML="";
  var parts=String(text).split(/(\s+)/);
  parts.forEach(function(part){
    if(!part)return;
    if(/^\s+$/.test(part)){container.appendChild(document.createTextNode(part));return}
    var clean;
    try{clean=part.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,"")}
    catch(e){clean=part.replace(/^[^\wÀ-žА-я]+|[^\wÀ-žА-я]+$/g,"")}
    if(!clean){container.appendChild(document.createTextNode(part));return}
    var span=document.createElement("span");
    span.className="word";
    var v=findVocab(clean,lang);
    if(v)span.classList.add("vocab-"+v.status);
    span.textContent=part;
    span.dataset.w=clean;
    span.dataset.l=lang;
    span.title=v?("Słowo na liście · "+(v.status==="known"?"znane":"do nauki")):"Otwórz w słowniku";
    span.onclick=function(e){e.stopPropagation();openDictionary(this.dataset.w,this.dataset.l)};
    container.appendChild(span);
  });
}

function showView(name){
  document.querySelectorAll(".view").forEach(function(v){v.classList.remove("active")});
  document.querySelectorAll(".nav-links a").forEach(function(a){a.classList.remove("active")});
  document.getElementById(name).classList.add("active");
  var el=document.getElementById("nav-"+name);
  if(el)el.classList.add("active");
  if(name==="browse")renderBrowse();
  if(name==="favorites")renderFavorites();
  if(name==="admin")renderAdmin();
  if(name==="dict")renderDict();
  if(name==="learn")renderLearn();
  if(name==="parallel")renderParallel();
}

// =================== PARALLEL READING ===================
var parallelFilter="all";

function setParallelFilter(cat,btn){
  parallelFilter=cat;
  document.querySelectorAll("[data-fpc]").forEach(function(c){
    c.classList.toggle("active",c.getAttribute("data-fpc")===cat);
  });
  renderParallel();
}

function renderParallel(){
  var leftLang=document.getElementById("par-left-lang").value;
  var rightLang=document.getElementById("par-right-lang").value;
  var grid=document.getElementById("par-grid");
  var statsEl=document.getElementById("par-stats");
  // Znajdź wszystkie cytaty z tid, które mają wersje w obu wybranych językach
  var tidMap={};
  quotes.forEach(function(q){
    if(!q.tid)return;
    if(parallelFilter!=="all"&&q.cat!==parallelFilter)return;
    if(!tidMap[q.tid])tidMap[q.tid]={};
    tidMap[q.tid][q.lang]=q;
  });
  var pairs=[];
  Object.keys(tidMap).forEach(function(tid){
    var group=tidMap[tid];
    if(group[leftLang]&&group[rightLang]&&leftLang!==rightLang){
      pairs.push({left:group[leftLang],right:group[rightLang]});
    }
  });
  statsEl.innerHTML=leftLang===rightLang
    ?'⚠️ Wybierz dwa <strong>różne</strong> języki'
    :'Znalezione pary: <strong style="color:var(--gold)">'+pairs.length+'</strong>'
      +(parallelFilter!=="all"?' (kategoria: '+getCatEmoji(parallelFilter)+' '+parallelFilter+')':'');
  grid.innerHTML="";
  if(leftLang===rightLang)return;
  if(!pairs.length){
    grid.innerHTML='<div class="empty-state"><div class="empty-icon">📖</div><div>Brak cytatów z tłumaczeniami w tej parze języków</div><div style="color:var(--text3);font-size:.78rem">Spróbuj zmienić kategorię albo wybrać inny język</div></div>';
    return;
  }
  pairs.forEach(function(pair,idx){
    var Ll=getLang(pair.left.lang);
    var Lr=getLang(pair.right.lang);
    var row=document.createElement("div");
    row.className="par-row";
    row.style.animationDelay=((idx%10)*0.05)+"s";
    row.innerHTML=
      '<div class="par-side">'+
        '<div class="par-side-head"><div><span class="par-side-flag">'+Ll.flag+'</span>'+Ll.label+'</div><button class="icon-btn" onclick="speakText(\''+pair.left.text.replace(/'/g,"\\'").replace(/"/g,'\\"')+'\',\''+pair.left.lang+'\',this)">🔊</button></div>'+
        '<div class="par-side-text" id="par-l-'+idx+'"></div>'+
        '<div class="par-side-foot">— '+pair.left.author+'</div>'+
      '</div>'+
      '<div class="par-side">'+
        '<div class="par-side-head"><div><span class="par-side-flag">'+Lr.flag+'</span>'+Lr.label+'</div><button class="icon-btn" onclick="speakText(\''+pair.right.text.replace(/'/g,"\\'").replace(/"/g,'\\"')+'\',\''+pair.right.lang+'\',this)">🔊</button></div>'+
        '<div class="par-side-text" id="par-r-'+idx+'"></div>'+
        '<div class="par-side-foot">— '+pair.right.author+'</div>'+
      '</div>';
    grid.appendChild(row);
    makeClickableWords(pair.left.text,pair.left.lang,document.getElementById("par-l-"+idx));
    makeClickableWords(pair.right.text,pair.right.lang,document.getElementById("par-r-"+idx));
  });
}

// === NAUKA — sub-taby ===
var currentLearnTab="vocab";

function switchLearnTab(panel){
  currentLearnTab=panel;
  document.querySelectorAll(".learn-tab").forEach(function(t){
    t.classList.toggle("active",t.getAttribute("data-panel")===panel);
  });
  ["vocab","srs","quiz","cloze","dictation","pronunciation","freq"].forEach(function(p){
    var el=document.getElementById("learn-"+p);
    if(el)el.style.display=p===panel?"":"none";
  });
  if(panel==="vocab")renderVocab();
  if(panel==="srs")renderSRS();
  if(panel==="quiz")renderQuizConfig();
  if(panel==="freq")renderFreq();
}

function renderLearn(){switchLearnTab(currentLearnTab)}

// === SŁOWNICTWO — lista ===
function renderVocab(){
  var grid=document.getElementById("vocab-grid");
  var empty=document.getElementById("vocab-empty");
  var lang=document.getElementById("vocab-lang-filter").value;
  var status=document.getElementById("vocab-status-filter").value;
  var filtered=vocab.filter(function(v){
    if(lang!=="all"&&v.lang!==lang)return false;
    if(status!=="all"&&v.status!==status)return false;
    return true;
  });
  // statystyki
  var learning=vocab.filter(function(v){return v.status==="learning"}).length;
  var known=vocab.filter(function(v){return v.status==="known"}).length;
  document.getElementById("vocab-stats").innerHTML=
    '<div>Razem: <strong>'+vocab.length+'</strong></div>'
    +'<div>🟠 Do nauki: <strong style="color:#f4a261">'+learning+'</strong></div>'
    +'<div>🟢 Znane: <strong style="color:#5fb777">'+known+'</strong></div>'
    +(filtered.length!==vocab.length?'<div>Wyświetlone: <strong>'+filtered.length+'</strong></div>':'');
  grid.innerHTML="";
  if(!filtered.length){empty.style.display="flex";return}
  empty.style.display="none";
  filtered.forEach(function(v){grid.appendChild(buildVocabCard(v))});
}

function buildVocabCard(v){
  var L=getLang(v.lang);
  var card=document.createElement("div");
  card.className="vocab-card";
  // tłumaczenia preview
  var trs=v.trs||{};
  var trHtml="";
  Object.keys(trs).forEach(function(code){
    var TL=getLang(code);if(!TL)return;
    trHtml+='<span data-flag="'+TL.flag+'">'+trs[code]+'</span>';
  });
  var editedBadge=hasDictEdits(v.word,v.lang)?'<span class="tre-edited" title="Tłumaczenia ręcznie poprawione">✎ edyt.</span>':'';
  card.innerHTML='<div class="vc-top">'
    +'<div>'
      +'<div class="vc-word">'+v.word+editedBadge+'</div>'
      +'<div class="vc-lang" style="color:'+L.color+'">'+L.flag+' '+L.label+'</div>'
    +'</div>'
    +'<div class="vc-actions">'
      +'<button class="icon-btn" title="Odsłuchaj" data-act="speak">🔊</button>'
      +'<button class="icon-btn" title="Popraw tłumaczenia" data-act="edit">✎</button>'
      +'<button class="icon-btn" title="Otwórz w słowniku" data-act="dict">📖</button>'
      +'<button class="icon-btn" title="Usuń z listy" data-act="del">✕</button>'
    +'</div></div>'
    +'<div class="vc-trs">'+(trHtml||'<span style="color:var(--text3)">brak tłumaczeń · otwórz w słowniku, aby pobrać</span>')+'</div>'
    +'<div class="vc-status">'
      +'<button class="vc-status-btn '+(v.status==="learning"?"active learning":"")+'" data-act="setLearning">🟠 Do nauki</button>'
      +'<button class="vc-status-btn '+(v.status==="known"?"active known":"")+'" data-act="setKnown">🟢 Znane</button>'
    +'</div>';
  card.querySelector('[data-act="speak"]').onclick=function(){speakText(v.word,v.lang,this)};
  card.querySelector('[data-act="edit"]').onclick=function(){openTranslationsEditor(v.word,v.lang)};
  card.querySelector('[data-act="dict"]').onclick=function(){openDictionary(v.word,v.lang)};
  card.querySelector('[data-act="del"]').onclick=function(){
    if(confirm("Usunąć „"+v.word+"” z listy?")){removeVocab(v.word,v.lang);renderVocab();refreshAllVisibleQuotes()}
  };
  card.querySelector('[data-act="setLearning"]').onclick=function(){setVocabStatus(v.word,v.lang,"learning");renderVocab();refreshAllVisibleQuotes()};
  card.querySelector('[data-act="setKnown"]').onclick=function(){setVocabStatus(v.word,v.lang,"known");renderVocab();refreshAllVisibleQuotes()};
  return card;
}

// === QUIZ ===
var quizState=null;

function renderQuizConfig(){
  // wypełnij dropdowny językami obecnymi w vocab
  var fromSel=document.getElementById("quiz-from");
  var toSel=document.getElementById("quiz-to");
  var langsInVocab={};
  vocab.forEach(function(v){langsInVocab[v.lang]=true});
  fromSel.innerHTML="";toSel.innerHTML="";
  LANGS.forEach(function(L){
    var opt='<option value="'+L.code+'">'+L.flag+' '+L.label+'</option>';
    fromSel.insertAdjacentHTML("beforeend",opt);
    toSel.insertAdjacentHTML("beforeend",opt);
  });
  // domyślnie pytanie w pierwszym języku z vocab, odpowiedź w drugim/angielskim
  var langs=Object.keys(langsInVocab);
  if(langs.length){fromSel.value=langs[0]}
  toSel.value=fromSel.value==="en"?(langs[1]||"pl"):"en";
  var warn=document.getElementById("quiz-warn");
  if(!vocab.length){
    warn.innerHTML="⚠️ Lista słownictwa jest pusta. Otwórz Słownik, kliknij ⭐ przy słowie i wróć tutaj.";
  } else {
    warn.innerHTML="Słownictwo zawiera "+vocab.length+" słów w językach: "+langs.map(function(c){var L=getLang(c);return L?L.flag:""}).join(" ");
  }
  document.getElementById("quiz-config").style.display="";
  document.getElementById("quiz-session").style.display="none";
  document.getElementById("quiz-results").style.display="none";
}

function startQuiz(){
  var from=document.getElementById("quiz-from").value;
  var to=document.getElementById("quiz-to").value;
  var mode=document.querySelector('input[name="quiz-mode"]:checked').value;
  var set=document.querySelector('input[name="quiz-set"]:checked').value;
  var count=parseInt(document.getElementById("quiz-count").value,10);
  if(from===to){showToast("⚠️ Wybierz dwa różne języki");return}
  // pula słów: ze źródłowego języka, mające tłumaczenie w docelowym
  var pool=vocab.filter(function(v){
    if(v.lang!==from)return false;
    if(set==="learning"&&v.status!=="learning")return false;
    return v.trs&&v.trs[to];
  });
  if(!pool.length){
    showToast("⚠️ Brak słów z "+getLang(from).label+" z tłumaczeniem na "+getLang(to).label);
    return;
  }
  // shuffle, weź count
  pool=shuffle(pool).slice(0,Math.min(count,pool.length));
  // zbuduj pulę dystraktorów (wszystkie tłumaczenia w docelowym z całego vocab)
  var distractorPool=[];
  vocab.forEach(function(v){if(v.trs&&v.trs[to])distractorPool.push(v.trs[to])});
  quizState={from:from,to:to,mode:mode,questions:pool,idx:0,correct:0,distractorPool:distractorPool};
  document.getElementById("quiz-config").style.display="none";
  document.getElementById("quiz-results").style.display="none";
  document.getElementById("quiz-session").style.display="";
  document.getElementById("qq-total").textContent=pool.length;
  showQuizQuestion();
}

function showQuizQuestion(){
  var s=quizState;
  var q=s.questions[s.idx];
  document.getElementById("qq-num").textContent=s.idx+1;
  document.getElementById("qq-correct").textContent=s.correct;
  document.getElementById("qq-bar").style.width=((s.idx/s.questions.length)*100)+"%";
  document.getElementById("qq-source").textContent=getLang(s.from).flag+" "+getLang(s.from).label;
  document.getElementById("qq-word").textContent=q.word;
  document.getElementById("qq-target").textContent="→ przetłumacz na "+getLang(s.to).flag+" "+getLang(s.to).label;
  document.getElementById("qq-feedback").style.display="none";
  if(s.mode==="multi"){
    document.getElementById("qq-input").style.display="none";
    var opts=document.getElementById("qq-options");opts.style.display="grid";opts.innerHTML="";
    var correct=q.trs[s.to];
    var others=s.distractorPool.filter(function(t){return t.toLowerCase()!==correct.toLowerCase()});
    others=shuffle(others).slice(0,3);
    while(others.length<3)others.push("…");
    var all=shuffle([correct].concat(others));
    all.forEach(function(opt){
      var btn=document.createElement("button");
      btn.className="quiz-opt";btn.textContent=opt;
      btn.onclick=function(){answerQuiz(opt,correct,btn)};
      opts.appendChild(btn);
    });
  } else {
    document.getElementById("qq-options").style.display="none";
    var inp=document.getElementById("qq-input");
    inp.style.display="block";inp.value="";inp.disabled=false;
    setTimeout(function(){inp.focus()},50);
  }
}

function answerQuiz(picked,correct,btn){
  var s=quizState;
  var ok=picked.toLowerCase().trim()===correct.toLowerCase().trim();
  if(ok){s.correct++;if(btn)btn.classList.add("correct")}
  else if(btn){btn.classList.add("wrong");
    document.querySelectorAll(".quiz-opt").forEach(function(b){if(b.textContent===correct)b.classList.add("correct")})}
  // statystyki w vocab
  var v=s.questions[s.idx];
  var ve=findVocab(v.word,v.lang);
  if(ve){if(!ve.stats)ve.stats={ok:0,bad:0};ok?ve.stats.ok++:ve.stats.bad++;saveVocab()}
  document.querySelectorAll(".quiz-opt").forEach(function(b){b.disabled=true});
  var fb=document.getElementById("qq-feedback");
  fb.className="quiz-feedback "+(ok?"ok":"bad");
  fb.innerHTML=ok?"✓ Dobrze!":"✗ Poprawnie: <strong>"+correct+"</strong>";
  fb.style.display="block";
  setTimeout(function(){
    s.idx++;
    if(s.idx>=s.questions.length)showQuizResults();
    else showQuizQuestion();
  },ok?900:1700);
}

function submitQuizText(){
  var s=quizState;if(!s)return;
  var inp=document.getElementById("qq-input");
  if(inp.disabled)return;
  var picked=inp.value;
  var correct=s.questions[s.idx].trs[s.to];
  inp.disabled=true;
  answerQuiz(picked,correct,null);
}

function showQuizResults(){
  var s=quizState;
  document.getElementById("quiz-session").style.display="none";
  document.getElementById("quiz-results").style.display="block";
  document.getElementById("qr-correct").textContent=s.correct;
  document.getElementById("qr-total").textContent=s.questions.length;
  var pct=Math.round((s.correct/s.questions.length)*100);
  document.getElementById("qr-percent").textContent=pct+"% poprawnie · "+(pct>=80?"świetnie!":pct>=50?"dobrze, ale można lepiej":"powtórz materiał");
}

function resetQuiz(){quizState=null;renderQuizConfig()}

function shuffle(arr){
  var a=arr.slice();
  for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}
  return a;
}

// === CLOZE — cytat z luką ===
var clozeStats={ok:0,bad:0};
var clozeState=null;

function startCloze(){
  var lang=document.getElementById("cloze-lang").value;
  // tylko cytaty z minimum 5 słowami
  var pool=quotes.filter(function(q){
    if(q.lang!==lang)return false;
    var words=q.text.split(/\s+/).filter(function(w){return w.length>2});
    return words.length>=5;
  });
  if(!pool.length){showToast("⚠️ Brak cytatów w "+getLang(lang).label);return}
  var q=pool[Math.floor(Math.random()*pool.length)];
  // wybierz losowe "ważne" słowo (długość >=4, nie pierwsze/ostatnie)
  var tokens=q.text.split(/(\s+)/);
  var indices=[];
  tokens.forEach(function(t,i){
    if(/^\s+$/.test(t))return;
    var clean;
    try{clean=t.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,"")}
    catch(e){clean=t.replace(/^[^\wÀ-žА-я]+|[^\wÀ-žА-я]+$/g,"")}
    if(clean.length>=4)indices.push({i:i,clean:clean});
  });
  if(!indices.length){showToast("⚠️ Cytat zbyt krótki, próbuję inny");return startCloze()}
  var pick=indices[Math.floor(Math.random()*indices.length)];
  // zbuduj dystraktory: losowe słowa o podobnej długości z innych cytatów w tym języku
  var allWords={};
  quotes.filter(function(x){return x.lang===lang&&x.id!==q.id}).forEach(function(x){
    x.text.split(/\s+/).forEach(function(w){
      var c;
      try{c=w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,"")}
      catch(e){c=w.replace(/^[^\wÀ-žА-я]+|[^\wÀ-žА-я]+$/g,"")}
      if(c.length>=3&&c.toLowerCase()!==pick.clean.toLowerCase())allWords[c]=true;
    });
  });
  var distractors=shuffle(Object.keys(allWords)).filter(function(w){
    return Math.abs(w.length-pick.clean.length)<=3;
  }).slice(0,3);
  while(distractors.length<3)distractors.push("…");
  var options=shuffle([pick.clean].concat(distractors));
  // render
  document.getElementById("cloze-empty").style.display="none";
  document.getElementById("cloze-session").style.display="block";
  document.getElementById("cloze-feedback").style.display="none";
  document.getElementById("cloze-next").style.display="none";
  var quoteEl=document.getElementById("cloze-quote");
  quoteEl.innerHTML="";
  tokens.forEach(function(t,i){
    if(i===pick.i){
      var blank=document.createElement("span");
      blank.className="cloze-blank";blank.id="cloze-blank";blank.textContent="________";
      quoteEl.appendChild(blank);
    } else {
      quoteEl.appendChild(document.createTextNode(t));
    }
  });
  document.getElementById("cloze-author").textContent="— "+q.author;
  var optsEl=document.getElementById("cloze-options");
  optsEl.innerHTML="";
  options.forEach(function(opt){
    var btn=document.createElement("button");
    btn.className="quiz-opt";btn.textContent=opt;
    btn.onclick=function(){answerCloze(opt,pick.clean,btn)};
    optsEl.appendChild(btn);
  });
  clozeState={correct:pick.clean,quote:q};
  renderClozeStats();
}

function answerCloze(picked,correct,btn){
  var ok=picked.toLowerCase()===correct.toLowerCase();
  var blank=document.getElementById("cloze-blank");
  blank.textContent=correct;
  blank.classList.add(ok?"filled-correct":"filled-wrong");
  document.querySelectorAll("#cloze-options .quiz-opt").forEach(function(b){
    b.disabled=true;
    if(b.textContent===correct)b.classList.add("correct");
    else if(b===btn&&!ok)b.classList.add("wrong");
  });
  var fb=document.getElementById("cloze-feedback");
  fb.className="quiz-feedback "+(ok?"ok":"bad");
  fb.innerHTML=ok?"✓ Brawo!":"✗ Poprawne słowo: <strong>"+correct+"</strong>";
  fb.style.display="block";
  document.getElementById("cloze-next").style.display="";
  ok?clozeStats.ok++:clozeStats.bad++;
  renderClozeStats();
}

function renderClozeStats(){
  var t=clozeStats.ok+clozeStats.bad;
  document.getElementById("cloze-stats").innerHTML=t?
    '<div>Poprawnie: <strong style="color:#7fc890">'+clozeStats.ok+'</strong> / '+t+' (<strong>'+Math.round(clozeStats.ok/t*100)+'%</strong>)</div>':
    '<div>Brak prób w tej sesji</div>';
}

// === FREQUENCY — chmura słów ===
function renderFreq(){
  var lang=document.getElementById("freq-lang").value;
  var top=parseInt(document.getElementById("freq-top").value,10);
  var counts={};
  quotes.filter(function(q){return q.lang===lang}).forEach(function(q){
    q.text.split(/\s+/).forEach(function(w){
      var c;
      try{c=w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,"")}
      catch(e){c=w.replace(/^[^\wÀ-žА-я]+|[^\wÀ-žА-я]+$/g,"")}
      if(c.length<3)return;
      var lc=c.toLowerCase();
      counts[lc]=(counts[lc]||0)+1;
    });
  });
  var arr=Object.keys(counts).map(function(k){return {word:k,n:counts[k]}});
  arr.sort(function(a,b){return b.n-a.n});
  arr=arr.slice(0,top);
  document.getElementById("freq-stats").innerHTML='<div>Unikalnych słów: <strong>'+Object.keys(counts).length+'</strong></div><div>Pokazane: <strong>'+arr.length+'</strong></div>';
  var cloud=document.getElementById("freq-cloud");
  cloud.innerHTML="";
  if(!arr.length){cloud.innerHTML='<div style="color:var(--text3);font-family:var(--ff-u);font-size:.85rem">Brak danych</div>';return}
  var maxN=arr[0].n;var minN=arr[arr.length-1].n;
  arr.forEach(function(item){
    var ratio=maxN===minN?1:(item.n-minN)/(maxN-minN);
    var size=0.85+ratio*1.6;
    var tag=document.createElement("span");
    tag.className="freq-tag";
    tag.style.fontSize=size+"rem";
    tag.innerHTML=item.word+'<span class="freq-n">'+item.n+'</span>';
    tag.onclick=function(){openDictionary(item.word,lang)};
    cloud.appendChild(tag);
  });
}

function getLang(code){return LANGS.find(function(l){return l.code===code})}

function rollAll(animate){
  if(animate===undefined)animate=true;
  activeLangs.forEach(function(code){rollLang(code,animate)});
}

function rollLang(code,animate){
  if(animate===undefined)animate=true;
  var pool=quotes.filter(function(q){return q.lang===code});
  if(!pool.length)return;
  var q=pool[Math.floor(Math.random()*pool.length)];
  currentQuotePerLang[code]=q.id;
  updateLangCard(code,q,animate);
}

function updateLangCard(code,q,animate){
  var card=document.getElementById("lqc-"+code);
  if(!card)return;
  if(animate){
    card.classList.remove("rolling");
    void card.offsetWidth;
    card.classList.add("rolling");
    card.addEventListener("animationend",function(){card.classList.remove("rolling")},{once:true});
  }
  makeClickableWords(q.text,q.lang,card.querySelector(".lang-card-quote"));
  card.querySelector(".lang-card-author").textContent=q.author;
  card.querySelector(".lang-card-cat").textContent=getCatEmoji(q.cat)+" "+q.cat;
  var favBtn=card.querySelector(".fav-btn");
  favBtn.classList.toggle("fav-on",favorites.indexOf(q.id)!==-1);
  // przycisk 🌐 — pokaż tylko jeśli cytat ma tłumaczenia
  var trBtn=card.querySelector(".tr-btn");
  var trCount=q.tid?quotes.filter(function(x){return x.tid===q.tid}).length:1;
  if(trCount>1){
    trBtn.style.display="";
    trBtn.querySelector(".tr-badge").textContent=trCount;
    trBtn.title="Tłumaczenia ("+trCount+" jęz.)";
  } else {
    trBtn.style.display="none";
  }
}

function openTranslationsForCard(code){
  var id=currentQuotePerLang[code];
  if(id)openTranslationsModal(id);
}

function buildLangCards(){
  var grid=document.getElementById("lang-cards-grid");
  grid.innerHTML="";
  var delay=0;
  LANGS.forEach(function(L){
    if(activeLangs.indexOf(L.code)===-1)return;
    var card=document.createElement("div");
    card.className="lang-quote-card";
    card.id="lqc-"+L.code;
    card.style.animationDelay=(delay*0.07)+"s";
    delay++;
    card.innerHTML='<div class="accent-bar" style="background:'+L.color+'33;border-top:2px solid '+L.color+'77"></div>'
      +'<div class="lang-card-header">'
      +'<div class="lang-label" style="color:'+L.color+'">'+L.flag+' '+L.label+'</div>'
      +'<div class="card-btns">'
      +'<button class="icon-btn" title="Losuj ponownie" onclick="rollLang(\''+L.code+'\')">'
      +'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>'
      +'</button>'
      +'<button class="icon-btn tr-btn" title="Tłumaczenia" onclick="openTranslationsForCard(\''+L.code+'\')" style="display:none">🌐<span class="tr-badge"></span></button>'
      +'<button class="icon-btn" title="Odsłuchaj" onclick="speakCard(\''+L.code+'\',this)">🔊</button>'
      +'<button class="icon-btn fav-btn" title="Ulubione" onclick="toggleCardFav(\''+L.code+'\',this)">♥</button>'
      +'</div></div>'
      +'<div class="lang-card-quote"></div>'
      +'<div class="lang-card-footer"><div class="lang-card-author"></div><div class="lang-card-cat"></div></div>';
    grid.appendChild(card);
    rollLang(L.code,false);
  });
}

function buildLangToggles(){
  var wrap=document.getElementById("lang-toggles");
  wrap.innerHTML="";
  LANGS.forEach(function(L){
    var on=activeLangs.indexOf(L.code)!==-1;
    var item=document.createElement("div");
    item.className="lang-toggle-item "+(on?"on":"off");
    item.id="lt-"+L.code;
    item.innerHTML='<div class="toggle-flag">'+L.flag+'</div>'
      +'<div class="toggle-name">'+L.label+'</div>'
      +'<div class="toggle-switch"></div>';
    (function(code){item.onclick=function(){toggleLang(code)}})(L.code);
    wrap.appendChild(item);
  });
}

function toggleLang(code){
  var idx=activeLangs.indexOf(code);
  if(idx===-1){
    activeLangs.push(code);
  } else {
    if(activeLangs.length<=1){showToast("⚠️ Musi być aktywny co najmniej jeden język");return}
    activeLangs.splice(idx,1);
  }
  localStorage.setItem("ql_langs",JSON.stringify(activeLangs));
  var item=document.getElementById("lt-"+code);
  var on=activeLangs.indexOf(code)!==-1;
  item.classList.toggle("on",on);
  item.classList.toggle("off",!on);
  buildLangCards();
}

function toggleSettings(){
  var body=document.getElementById("settings-body");
  var arrow=document.getElementById("settings-arrow");
  var row=document.getElementById("settings-row");
  var open=body.classList.toggle("open");
  arrow.classList.toggle("open",open);
  row.classList.toggle("open",open);
}

function speakCard(code,btn){
  var id=currentQuotePerLang[code];
  var q=quotes.find(function(q){return q.id===id});
  if(q)speakText(q.text,q.lang,btn);
}

function speakText(text,lang,btn){
  var L=getLang(lang);
  if(!L)return;
  // Zatrzymaj jeśli coś gra
  if(window.responsiveVoice&&responsiveVoice.isPlaying()){
    responsiveVoice.cancel();
    if(window._rvBtn)window._rvBtn.classList.remove("speaking");
    if(window._rvBtn===btn){isSpeaking=false;window._rvBtn=null;return}
  }
  if(window.responsiveVoice){
    // ResponsiveVoice = Google TTS — naturalny głos
    isSpeaking=true;
    window._rvBtn=btn||null;
    if(btn)btn.classList.add("speaking");
    responsiveVoice.speak(text,L.rvVoice,{
      rate:0.92,
      onend:function(){isSpeaking=false;if(btn)btn.classList.remove("speaking");window._rvBtn=null},
      onerror:function(){isSpeaking=false;if(btn)btn.classList.remove("speaking");window._rvBtn=null;showToast("⚠️ Błąd TTS — sprawdź połączenie")}
    });
  } else {
    // Fallback: głosy wbudowane w przeglądarkę
    if(!window.speechSynthesis){showToast("Brak obsługi TTS");return}
    if(isSpeaking)window.speechSynthesis.cancel();
    var u=new SpeechSynthesisUtterance(text);
    u.lang=L.voice;u.rate=0.9;
    var voices=window.speechSynthesis.getVoices();
    var v=voices.find(function(v){return v.lang===L.voice})||voices.find(function(v){return v.lang.startsWith(lang)});
    if(v)u.voice=v;
    if(btn){
      btn.classList.add("speaking");
      var done=function(){isSpeaking=false;btn.classList.remove("speaking")};
      u.onend=done;u.onerror=done;
    }
    isSpeaking=true;
    window.speechSynthesis.speak(u);
  }
}

function toggleFavorite(id){
  var i=favorites.indexOf(id);
  if(i===-1){favorites.push(id);showToast("♥ Dodano do ulubionych")}
  else{favorites.splice(i,1);showToast("Usunięto z ulubionych")}
  localStorage.setItem("ql_fav",JSON.stringify(favorites));
  updateFavCount();
  checkAchievements();
}

function toggleCardFav(code,btn){
  var id=currentQuotePerLang[code];
  if(!id)return;
  toggleFavorite(id);
  btn.classList.toggle("fav-on",favorites.indexOf(id)!==-1);
}

function updateFavCount(){
  document.getElementById("fav-count-num").textContent=favorites.length;
}

function updateStreakUI(){
  var el=document.getElementById("streak-num");
  if(el)el.textContent=streakData.current||0;
  var pill=document.getElementById("streak-pill");
  if(pill)pill.classList.toggle("streak-hot",streakData.current>=3);
}

function showAchievements(){
  checkAchievements();
  document.getElementById("ach-count").textContent=unlockedAchievements.length;
  document.getElementById("ach-total").textContent=ACHIEVEMENTS.length;
  var display=document.getElementById("streak-display");
  display.innerHTML=
    '<div class="streak-stat"><div class="streak-stat-num streak-fire">🔥 '+streakData.current+'</div><div class="streak-stat-lbl">Obecna seria</div></div>'+
    '<div class="streak-stat"><div class="streak-stat-num">'+streakData.longest+'</div><div class="streak-stat-lbl">Najdłuższa seria</div></div>'+
    '<div class="streak-stat"><div class="streak-stat-num">'+streakData.totalDays+'</div><div class="streak-stat-lbl">Łącznie dni</div></div>';
  var grid=document.getElementById("achievement-grid");
  grid.innerHTML="";
  ACHIEVEMENTS.forEach(function(a){
    var unlocked=unlockedAchievements.indexOf(a.id)!==-1;
    var div=document.createElement("div");
    div.className="achievement"+(unlocked?" unlocked":"");
    div.innerHTML='<div class="achievement-emoji">'+a.emoji+'</div>'
      +'<div class="achievement-name">'+a.name+'</div>'
      +'<div class="achievement-desc">'+a.desc+'</div>';
    grid.appendChild(div);
  });
  document.getElementById("achievements-modal").classList.add("open");
}

function setFilter(type,val,btn){
  browseFilt[type]=val;
  var attr=type==="lang"?"data-fl":type==="cat"?"data-fc":"data-flevel";
  document.querySelectorAll("["+attr+"]").forEach(function(c){
    c.classList.toggle("active",c.getAttribute(attr)===val);
  });
  renderBrowse();
}

function renderBrowse(){
  var grid=document.getElementById("quotes-grid");
  var search=(document.getElementById("search-input").value||"").toLowerCase();
  grid.innerHTML="";
  var filtered=quotes.filter(function(q){
    if(browseFilt.lang!=="all"&&q.lang!==browseFilt.lang)return false;
    if(browseFilt.cat!=="all"&&q.cat!==browseFilt.cat)return false;
    if(browseFilt.level&&browseFilt.level!=="all"&&q.level!==browseFilt.level)return false;
    if(search&&q.text.toLowerCase().indexOf(search)===-1&&q.author.toLowerCase().indexOf(search)===-1&&!(q.tags&&q.tags.some(function(t){return t.toLowerCase().indexOf(search)!==-1})))return false;
    return true;
  });
  filtered.forEach(function(q,i){grid.appendChild(buildBrowseCard(q,i))});
  var sb=document.getElementById("stats-bar");
  sb.innerHTML='<div class="stat-item"><div class="stat-num">'+quotes.length+'</div><div class="stat-lbl">Cytatów łącznie</div></div>'
    +'<div class="stat-item"><div class="stat-num">'+filtered.length+'</div><div class="stat-lbl">Wyników</div></div>'
    +'<div class="stat-item"><div class="stat-num">6</div><div class="stat-lbl">Języków</div></div>'
    +'<div class="stat-item"><div class="stat-num">'+favorites.length+'</div><div class="stat-lbl">Ulubionych</div></div>';
}

function buildBrowseCard(q,delay){
  var L=getLang(q.lang);
  var card=document.createElement("div");
  card.className="quote-card";
  card.style.animationDelay=((delay||0)*0.04)+"s";
  var isFav=favorites.indexOf(q.id)!==-1;
  var trCount=q.tid?quotes.filter(function(x){return x.tid===q.tid}).length:1;
  var trBtn=trCount>1?'<button class="icon-btn tr-btn" title="Tłumaczenia ('+trCount+' jęz.)" onclick="openTranslationsModal('+q.id+')">🌐<span class="tr-badge">'+trCount+'</span></button>':'';
  var levelBadge=q.level?'<span class="cefr-badge cefr-'+q.level.toLowerCase()+'" title="'+(CEFR_LABELS[q.level]||q.level)+'">'+q.level+'</span>':'';
  var tagsHtml='';
  if(q.tags&&q.tags.length){
    tagsHtml='<div class="card-tags">'+q.tags.map(function(t){return '<span class="card-tag" onclick="event.stopPropagation();searchByTag(\''+t.replace(/'/g,"\\'")+'\')">#'+t+'</span>'}).join('')+'</div>';
  }
  card.innerHTML='<div class="card-top">'
    +'<div class="card-lang" style="color:'+L.color+'">'+L.flag+' '+L.label+levelBadge+'</div>'
    +'<div class="card-actions">'
    +trBtn
    +'<button class="icon-btn" onclick="speakBrowse('+q.id+',this)">🔊</button>'
    +'<button class="icon-btn'+(isFav?' fav-on':'')+'" onclick="toggleBrowseFav('+q.id+',this)">♥</button>'
    +'</div></div>'
    +'<div class="card-quote"></div>'
    +'<div class="card-footer"><div class="card-author" onclick="event.stopPropagation();openAuthorProfile(\''+q.author.replace(/'/g,"\\'")+'\')">'+q.author+'</div><div class="card-cat">'+getCatEmoji(q.cat)+' '+q.cat+'</div></div>'
    +tagsHtml;
  makeClickableWords(q.text,q.lang,card.querySelector(".card-quote"));
  return card;
}

function searchByTag(tag){
  showView("browse");
  var search=document.getElementById("search-input");
  search.value=tag;
  renderBrowse();
}

function openAuthorProfile(authorName){
  renderAuthorProfile(authorName);
}

// Mapa nazwisk: różne formy językowe → kanoniczna forma
// Pozwala znaleźć wszystkie cytaty tego samego autora niezależnie od języka
var AUTHOR_VARIANTS={
  "John Lennon":["John Lennon","Джон Леннон"],
  "Mahatma Gandhi":["Mahatma Gandhi","Махатма Ганди"],
  "Steve Jobs":["Steve Jobs","Стив Джобс"],
  "Albert Einstein":["Albert Einstein","Альберт Эйнштейн"],
  "Wisława Szymborska":["Wisława Szymborska","Вислава Шимборская"],
  "Olga Tokarczuk":["Olga Tokarczuk","Ольга Токарчук"],
  "Daniel Ostrowski":["Daniel Ostrowski","Даниэль Островский"],
  "Friedrich Nietzsche":["Friedrich Nietzsche","Фридрих Ницше"],
  "Voltaire":["Voltaire","Вольтер"],
  "William Shakespeare":["William Shakespeare","Уильям Шекспир"],
  "Les Brown":["Les Brown","Лес Браун"],
  "Steve Jobs":["Steve Jobs","Стив Джобс"],
  "Heraklit":["Heraklit","Heraclitus","Héraclite","Heráclito","Гераклит"],
  "Laozi":["Laozi","Лао-цзы"]
};

function canonicalAuthor(name){
  for(var k in AUTHOR_VARIANTS){
    if(AUTHOR_VARIANTS[k].indexOf(name)!==-1)return k;
  }
  return name;
}

function findAuthorQuotes(authorName){
  var canonical=canonicalAuthor(authorName);
  var variants=AUTHOR_VARIANTS[canonical]||[authorName];
  return quotes.filter(function(q){return variants.indexOf(q.author)!==-1});
}

function renderAuthorProfile(authorName){
  showView("author-profile");
  var all=findAuthorQuotes(authorName);
  var canonical=canonicalAuthor(authorName);
  document.getElementById("ap-name").textContent=canonical;
  // Metadane
  var langSet={},catSet={},tidSet={};
  all.forEach(function(q){
    langSet[q.lang]=true;
    catSet[q.cat]=(catSet[q.cat]||0)+1;
    if(q.tid)tidSet[q.tid]=true;
  });
  var langs=Object.keys(langSet).map(function(c){var L=getLang(c);return L?L.flag:""}).join(" ");
  document.getElementById("ap-meta").textContent="Autor w "+Object.keys(langSet).length+" językach · "+all.length+" cytatów łącznie";
  // Statystyki
  var stats=document.getElementById("ap-stats");
  stats.innerHTML="";
  function statBlock(num,lbl){
    return '<div style="text-align:center;padding:.5rem 1.2rem;background:var(--bg3);border-radius:8px;border:1px solid var(--border)">'
      +'<div style="font-family:var(--ff-d);font-size:1.8rem;color:var(--gold2)">'+num+'</div>'
      +'<div style="font-size:.7rem;color:var(--text3);letter-spacing:.08em;text-transform:uppercase">'+lbl+'</div></div>';
  }
  stats.innerHTML=statBlock(all.length,"cytatów")
    +statBlock(Object.keys(tidSet).length,"grup tłumaczeń")
    +statBlock(Object.keys(langSet).length,"języków")
    +statBlock(langs,"flagi");
  // Statystyki per kategoria
  var catStats=document.createElement("div");
  catStats.style.cssText="margin-top:.5rem;font-family:var(--ff-u);font-size:.78rem;color:var(--text2)";
  catStats.innerHTML="<strong>Kategorie:</strong> "+Object.keys(catSet).map(function(c){return getCatEmoji(c)+" "+c+" ("+catSet[c]+")"}).join(" · ");
  stats.appendChild(catStats);
  // Lista wszystkich cytatów (pogrupowane po tid jeśli istnieje, inaczej osobno)
  var grid=document.getElementById("ap-quotes");
  grid.innerHTML="";
  // Najpierw grupy tłumaczeń (jedna karta = pierwszy cytat z grupy, gdy aktywny jego lang lub pierwszy aktywny)
  var seenTids={};
  all.forEach(function(q,i){
    if(q.tid){
      if(seenTids[q.tid])return;
      seenTids[q.tid]=true;
    }
    grid.appendChild(buildBrowseCard(q,i));
  });
}

function speakBrowse(id,btn){var q=quotes.find(function(q){return q.id===id});if(q)speakText(q.text,q.lang,btn)}
function toggleBrowseFav(id,btn){toggleFavorite(id);btn.classList.toggle("fav-on",favorites.indexOf(id)!==-1)}

function renderFavorites(){
  var grid=document.getElementById("fav-grid");
  var empty=document.getElementById("fav-empty");
  grid.innerHTML="";
  var favQ=quotes.filter(function(q){return favorites.indexOf(q.id)!==-1});
  document.getElementById("fav-sub").textContent=favQ.length+" "+(favQ.length===1?"cytat":"cytatów")+" w kolekcji";
  if(!favQ.length){empty.style.display="flex";return}
  empty.style.display="none";
  favQ.forEach(function(q,i){grid.appendChild(buildBrowseCard(q,i))});
}

function adminLogin(){
  var user=document.getElementById("admin-user").value.trim();
  var pass=document.getElementById("admin-pass").value;
  var acc=ADMINS.find(function(a){return a.user===user});
  if(!acc){
    showToast("❌ Nieprawidłowy login lub hasło");
    document.getElementById("admin-pass").value="";
    return;
  }
  sha256(pass).then(function(h){
    if(h===acc.hash){
      adminIn=true;
      document.getElementById("admin-login").style.display="none";
      document.getElementById("admin-panel").style.display="block";
      renderAdminList();
    } else {
      showToast("❌ Nieprawidłowy login lub hasło");
      document.getElementById("admin-pass").value="";
    }
  });
}
function adminLogout(){
  adminIn=false;
  document.getElementById("admin-login").style.display="flex";
  document.getElementById("admin-panel").style.display="none";
  document.getElementById("admin-user").value="";
  document.getElementById("admin-pass").value="";
}
function renderAdmin(){if(adminIn)renderAdminList()}
function renderAdminList(){
  var list=document.getElementById("admin-list");
  list.innerHTML="";
  document.getElementById("admin-count").textContent=quotes.length;
  quotes.forEach(function(q){
    var L=getLang(q.lang);
    var row=document.createElement("div");
    row.className="admin-quote-row";
    var tidBadge=q.tid?'<div class="admin-tid" title="Grupa tłumaczeń">🌐 '+q.tid+'</div>':'';
    row.innerHTML='<div style="font-size:1.2rem;flex-shrink:0">'+L.flag+'</div>'
      +'<div class="admin-qt">'+q.text+'</div>'
      +tidBadge
      +'<div style="font-family:var(--ff-u);font-size:.7rem;color:var(--text3);flex-shrink:0">'+q.author+'</div>'
      +'<button class="edit-btn" onclick="adminEdit('+q.id+')">✎ Edytuj</button>'
      +'<button class="del-btn" onclick="adminDel('+q.id+')">✕</button>';
    list.appendChild(row);
  });
}
function adminAdd(){
  var text=document.getElementById("nq-text").value.trim();
  var author=document.getElementById("nq-author").value.trim();
  var lang=document.getElementById("nq-lang").value;
  var cat=document.getElementById("nq-cat").value;
  var tidRaw=document.getElementById("nq-tid").value.trim();
  var levelEl=document.getElementById("nq-level");
  var tagsEl=document.getElementById("nq-tags");
  var level=levelEl?levelEl.value:"";
  var tagsRaw=tagsEl?tagsEl.value.trim():"";
  if(!text||!author){showToast("⚠️ Wypełnij treść i autora");return}
  var q={id:nextId++,text:text,author:author,lang:lang,cat:cat};
  if(tidRaw){var t=parseInt(tidRaw,10);if(!isNaN(t))q.tid=t}
  if(level)q.level=level;
  if(tagsRaw){q.tags=tagsRaw.split(",").map(function(s){return s.trim()}).filter(function(s){return s})}
  quotes.push(q);
  saveQuotes();
  document.getElementById("nq-text").value="";
  document.getElementById("nq-author").value="";
  document.getElementById("nq-tid").value="";
  if(levelEl)levelEl.value="";
  if(tagsEl)tagsEl.value="";
  renderAdminList();
  buildLangCards();
  showToast("✦ Cytat dodany do bazy");
}
function adminEdit(id){
  var q=quotes.find(function(q){return q.id===id});
  if(!q)return;
  document.getElementById("eq-id").value=q.id;
  document.getElementById("eq-text").value=q.text;
  document.getElementById("eq-author").value=q.author;
  document.getElementById("eq-lang").value=q.lang;
  document.getElementById("eq-cat").value=q.cat;
  document.getElementById("eq-tid").value=q.tid||"";
  var levelEl=document.getElementById("eq-level");
  var tagsEl=document.getElementById("eq-tags");
  if(levelEl)levelEl.value=q.level||"";
  if(tagsEl)tagsEl.value=(q.tags||[]).join(", ");
  updateTidHint("eq-tid-hint",q.tid);
  document.getElementById("edit-modal").classList.add("open");
}
function adminSaveEdit(){
  var id=parseInt(document.getElementById("eq-id").value,10);
  var text=document.getElementById("eq-text").value.trim();
  var author=document.getElementById("eq-author").value.trim();
  var lang=document.getElementById("eq-lang").value;
  var cat=document.getElementById("eq-cat").value;
  var tidRaw=document.getElementById("eq-tid").value.trim();
  var levelEl=document.getElementById("eq-level");
  var tagsEl=document.getElementById("eq-tags");
  var level=levelEl?levelEl.value:"";
  var tagsRaw=tagsEl?tagsEl.value.trim():"";
  if(!text||!author){showToast("⚠️ Wypełnij treść i autora");return}
  var q=quotes.find(function(q){return q.id===id});
  if(!q)return;
  q.text=text;q.author=author;q.lang=lang;q.cat=cat;
  if(tidRaw){var t=parseInt(tidRaw,10);q.tid=isNaN(t)?undefined:t} else delete q.tid;
  if(level)q.level=level; else delete q.level;
  if(tagsRaw)q.tags=tagsRaw.split(",").map(function(s){return s.trim()}).filter(function(s){return s}); else delete q.tags;
  saveQuotes();
  document.getElementById("edit-modal").classList.remove("open");
  renderAdminList();
  Object.keys(currentQuotePerLang).forEach(function(code){
    if(currentQuotePerLang[code]===id)updateLangCard(code,q,false);
  });
  showToast("✦ Cytat zaktualizowany");
}

// Pokazuje, jakie cytaty są w danej grupie tłumaczeń (podpowiedź pod polem tid)
function updateTidHint(elId,tid){
  var el=document.getElementById(elId);if(!el)return;
  if(!tid){el.textContent="";return}
  var members=quotes.filter(function(q){return q.tid===parseInt(tid,10)});
  if(!members.length){el.innerHTML='<span style="color:var(--gold)">✦ Nowa grupa tłumaczeń</span>';return}
  var langs=members.map(function(q){var L=getLang(q.lang);return L?L.flag+" "+L.label:q.lang}).join(" · ");
  el.textContent="Grupa zawiera: "+langs;
}
function adminDuplicateForTranslation(){
  var id=parseInt(document.getElementById("eq-id").value,10);
  var orig=quotes.find(function(q){return q.id===id});
  if(!orig)return;
  // Zapisz aktualne pola edycji do oryginału (żeby zmiany nie przepadły)
  orig.text=document.getElementById("eq-text").value.trim();
  orig.author=document.getElementById("eq-author").value.trim();
  orig.lang=document.getElementById("eq-lang").value;
  orig.cat=document.getElementById("eq-cat").value;
  var tidRaw=document.getElementById("eq-tid").value.trim();
  if(tidRaw){var t=parseInt(tidRaw,10);orig.tid=isNaN(t)?undefined:t}
  // Jeżeli oryginał nie ma tid, nadaj nowy (max+1)
  if(!orig.tid){
    var maxTid=quotes.reduce(function(m,q){return q.tid&&q.tid>m?q.tid:m},0);
    orig.tid=maxTid+1;
  }
  // Wybierz pierwszy język, który jeszcze nie ma tłumaczenia w grupie
  var inGroup=quotes.filter(function(q){return q.tid===orig.tid}).map(function(q){return q.lang});
  var nextLang=null;
  for(var i=0;i<LANGS.length;i++){
    if(inGroup.indexOf(LANGS[i].code)===-1){nextLang=LANGS[i];break}
  }
  if(!nextLang){showToast("⚠️ Wszystkie 6 języków już ma tłumaczenie");return}
  var newQ={id:nextId++,text:"",author:orig.author,lang:nextLang.code,cat:orig.cat,tid:orig.tid};
  quotes.push(newQ);
  saveQuotes();
  renderAdminList();
  document.getElementById("edit-modal").classList.remove("open");
  setTimeout(function(){adminEdit(newQ.id);showToast("✦ Powielono — uzupełnij treść po "+nextLang.label.toLowerCase())},150);
}

// === EKSPORT/IMPORT USTAWIEŃ UŻYTKOWNIKA ===
// Bez logowania admina — to dane osobiste użytkownika.
// Zawiera: ulubione, słownictwo, ręczne korekty tłumaczeń, aktywne języki.
// NIE zawiera: bazy cytatów (to robi adminExportJson), hasła admina, modal-promo flagi.
function exportSettings(){
  var data={
    app:"LingoMaxima",
    version:1,
    exported:new Date().toISOString(),
    favorites:favorites,
    vocab:vocab,
    dictEdits:dictEdits,
    activeLangs:activeLangs
  };
  var json=JSON.stringify(data,null,2);
  var blob=new Blob([json],{type:"application/json"});
  var url=URL.createObjectURL(blob);
  var a=document.createElement("a");
  a.href=url;
  a.download="lingomaxima-ustawienia-"+new Date().toISOString().slice(0,10)+".json";
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
  var summary=favorites.length+" ulubionych · "+vocab.length+" słów · "+Object.keys(dictEdits).length+" korekt · "+activeLangs.length+" języków";
  showToast("✦ Eksport: "+summary);
}

function importSettings(file){
  if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var data=JSON.parse(e.target.result);
      // Sprawdzenie pochodzenia (delikatne ostrzeżenie, nie blokujące)
      if(data.app&&data.app!=="LingoMaxima"){
        if(!confirm("Plik pochodzi z aplikacji „"+data.app+"”, nie LingoMaxima.\nKontynuować?"))return;
      }
      // Podgląd zmian — pokaż użytkownikowi co zostanie nadpisane
      var msg="Import zastąpi Twoje obecne ustawienia:\n\n";
      if(Array.isArray(data.favorites))
        msg+="• Ulubione: "+favorites.length+" → "+data.favorites.length+"\n";
      if(Array.isArray(data.vocab))
        msg+="• Słownictwo: "+vocab.length+" → "+data.vocab.length+"\n";
      if(data.dictEdits&&typeof data.dictEdits==="object")
        msg+="• Korekty tłumaczeń: "+Object.keys(dictEdits).length+" → "+Object.keys(data.dictEdits).length+"\n";
      if(Array.isArray(data.activeLangs)&&data.activeLangs.length)
        msg+="• Aktywne języki: "+activeLangs.length+" → "+data.activeLangs.length+"\n";
      msg+="\nKontynuować?";
      if(!confirm(msg))return;
      // Aplikacja zmian — każde pole niezależnie (jeśli nie ma w pliku, lokalne zostają)
      var changed=[];
      if(Array.isArray(data.favorites)){
        favorites=data.favorites.slice();
        localStorage.setItem("ql_fav",JSON.stringify(favorites));
        changed.push(favorites.length+" ulubionych");
      }
      if(Array.isArray(data.vocab)){
        vocab=data.vocab.slice();
        saveVocab();
        changed.push(vocab.length+" słów");
      }
      if(data.dictEdits&&typeof data.dictEdits==="object"&&!Array.isArray(data.dictEdits)){
        dictEdits=Object.assign({},data.dictEdits);
        saveDictEdits();
        // wyczyść cache pamięciowy, żeby nowe edycje były aktywne natychmiast
        dictCache={};
        changed.push(Object.keys(dictEdits).length+" korekt");
      }
      if(Array.isArray(data.activeLangs)&&data.activeLangs.length){
        // bezpieczeństwo: tylko znane kody języków
        var knownCodes=LANGS.map(function(L){return L.code});
        activeLangs=data.activeLangs.filter(function(c){return knownCodes.indexOf(c)!==-1});
        if(!activeLangs.length)activeLangs=["pl"];
        localStorage.setItem("ql_langs",JSON.stringify(activeLangs));
        changed.push(activeLangs.length+" języków");
      }
      // Odśwież wszystkie widoki
      updateFavCount();
      buildLangCards();
      buildLangToggles();
      var v=document.querySelector(".view.active");
      if(v){
        if(v.id==="favorites")renderFavorites();
        else if(v.id==="browse")renderBrowse();
        else if(v.id==="learn")renderLearn();
        else if(v.id==="dict"&&dictCurrent.word)fetchTranslations(dictCurrent.word,dictCurrent.lang);
      }
      showToast("✦ Zaimportowano: "+(changed.length?changed.join(" · "):"brak danych"));
    }catch(err){
      showToast("❌ Błąd importu: "+err.message);
    }
  };
  reader.readAsText(file);
}

function adminExportJson(){
  var data=JSON.stringify(quotes,null,2);
  var blob=new Blob([data],{type:"application/json"});
  var url=URL.createObjectURL(blob);
  var a=document.createElement("a");
  a.href=url;
  a.download="lingomaxima-baza-"+new Date().toISOString().slice(0,10)+".json";
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("✦ Wyeksportowano "+quotes.length+" cytatów");
}

function adminImportJson(file){
  if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var data=JSON.parse(e.target.result);
      if(!Array.isArray(data))throw new Error("Plik nie zawiera tablicy cytatów");
      data.forEach(function(q,i){
        if(!q.text||!q.author||!q.lang||!q.cat)throw new Error("Cytat #"+(i+1)+" nie ma wymaganych pól (text/author/lang/cat)");
      });
      if(!confirm("Import zastąpi obecną bazę.\nObecnie: "+quotes.length+" cytatów\nW pliku: "+data.length+" cytatów\n\nKontynuować?"))return;
      var maxId=0;
      data.forEach(function(q){if(q.id&&q.id>maxId)maxId=q.id});
      data.forEach(function(q){if(!q.id)q.id=++maxId});
      quotes=data;
      nextId=maxId+1;
      saveQuotes();
      // odśwież wszystko
      renderAdminList();buildLangCards();updateFavCount();
      showToast("✦ Zaimportowano "+data.length+" cytatów");
    }catch(err){showToast("❌ Błąd importu: "+err.message)}
  };
  reader.readAsText(file);
}

function adminDel(id){
  quotes=quotes.filter(function(q){return q.id!==id});
  saveQuotes();
  favorites=favorites.filter(function(f){return f!==id});
  localStorage.setItem("ql_fav",JSON.stringify(favorites));
  updateFavCount();
  renderAdminList();
  showToast("Cytat usunięty");
}

// === SŁOWNIK ===
var dictCache={}; // pamięciowy cache: word|sourceLang -> [{lang,text}]
// Trwałe ręczne poprawki tłumaczeń (zapisują się w localStorage). Mają priorytet nad API.
var dictEdits=JSON.parse(localStorage.getItem("ql_dict_edits")||"{}");
function saveDictEdits(){localStorage.setItem("ql_dict_edits",JSON.stringify(dictEdits))}
function dictEditKey(w,l){return w.toLowerCase()+"|"+l}
function getDictEdits(w,l){return dictEdits[dictEditKey(w,l)]||null}
function hasDictEdits(w,l){return !!dictEdits[dictEditKey(w,l)]}

function renderDict(){
  // pierwszy raz: pokaż empty state
  if(!document.getElementById("dict-content").style.display||document.getElementById("dict-content").style.display==="none"){
    document.getElementById("dict-empty").style.display="flex";
    document.getElementById("dict-content").style.display="none";
  }
}

function dictSearch(){
  var word=(document.getElementById("dict-search").value||"").trim();
  var lang=document.getElementById("dict-source").value;
  if(!word){showToast("⚠️ Wpisz słowo");return}
  openDictionary(word,lang);
}

function openDictionary(word,sourceLang){
  showView("dict");
  dictCurrent={word:word,lang:sourceLang};
  document.getElementById("dict-search").value=word;
  document.getElementById("dict-source").value=sourceLang;
  document.getElementById("dict-empty").style.display="none";
  document.getElementById("dict-content").style.display="block";
  document.getElementById("dict-word").textContent=word;
  document.getElementById("dict-word-2").textContent=word;
  var L=getLang(sourceLang);
  document.getElementById("dict-source-lang").textContent="Język źródłowy: "+(L?L.flag+" "+L.label:sourceLang);
  dictRefreshStarBtn();
  fetchTranslations(word,sourceLang);
  showQuotesWithWord(word);
}

function fetchTranslations(word,sourceLang){
  var box=document.getElementById("dict-translations");
  box.innerHTML="";
  var targets=LANGS.filter(function(L){return L.code!==sourceLang});
  // wstępne wiersze "loading"
  targets.forEach(function(L){
    var row=document.createElement("div");
    row.className="dict-tr-row";
    row.id="dtr-"+L.code;
    row.innerHTML='<div class="dict-tr-lang" style="color:'+L.color+'">'+L.flag+' '+L.label+'</div>'
      +'<div class="dict-tr-text dict-loading">Pobieram…</div>'
      +'<button class="icon-btn">🔊</button>';
    box.appendChild(row);
  });
  // odznacz badge "ręcznie poprawione" — refreshuje się poniżej
  var badge=document.getElementById("dict-edit-badge");
  if(badge)badge.style.display=hasDictEdits(word,sourceLang)?"":"none";
  // 1) ręczne poprawki mają najwyższy priorytet
  var edits=getDictEdits(word,sourceLang);
  if(edits){
    targets.forEach(function(L){fillTrRow(L,edits[L.code]||null)});
    // zsynchronizuj cache pamięciowy
    dictCache[word.toLowerCase()+"|"+sourceLang]=targets.map(function(L){return {lang:L,text:edits[L.code]||null}});
    return;
  }
  var cacheKey=word.toLowerCase()+"|"+sourceLang;
  if(dictCache[cacheKey]){
    dictCache[cacheKey].forEach(function(r){fillTrRow(r.lang,r.text)});
    return;
  }
  var results=[];
  targets.forEach(function(L){
    var url="https://api.mymemory.translated.net/get?q="+encodeURIComponent(word)+"&langpair="+sourceLang+"|"+L.code;
    fetch(url).then(function(r){return r.json()}).then(function(d){
      var t=(d&&d.responseData&&d.responseData.translatedText)?d.responseData.translatedText:null;
      // MyMemory zwraca błąd jako tekst — odfiltruj typowe komunikaty
      if(t&&/MYMEMORY WARNING|INVALID|NOT FOUND/i.test(t))t=null;
      fillTrRow(L,t);
      results.push({lang:L,text:t});
      if(results.length===targets.length){
        dictCache[cacheKey]=results;
        // Jeśli słowo jest na liście vocab, dograj brakujące tłumaczenia
        var v=findVocab(word,sourceLang);
        if(v){
          var fresh={};results.forEach(function(r){if(r.text)fresh[r.lang.code]=r.text});
          setVocabTrs(word,sourceLang,fresh);
        }
      }
    }).catch(function(){
      fillTrRow(L,null);
      results.push({lang:L,text:null});
    });
  });
}

// === GWIAZDKA W SŁOWNIKU ===
var dictCurrent={word:null,lang:null};

function dictRefreshStarBtn(){
  var btn=document.getElementById("dict-star-btn");if(!btn)return;
  if(!dictCurrent.word){btn.style.display="none";return}
  btn.style.display="";
  var v=findVocab(dictCurrent.word,dictCurrent.lang);
  btn.classList.remove("starred","starred-known");
  if(!v){btn.textContent="⭐ Dodaj do nauki"}
  else if(v.status==="learning"){btn.classList.add("starred");btn.textContent="🟠 Na liście · klik = oznacz jako znane"}
  else {btn.classList.add("starred-known");btn.textContent="🟢 Znane · klik = usuń z listy"}
}

function dictToggleStar(){
  if(!dictCurrent.word)return;
  var v=findVocab(dictCurrent.word,dictCurrent.lang);
  if(!v){
    // dodaj — przytnij z dostępnych tłumaczeń z dictCache
    var cacheKey=dictCurrent.word.toLowerCase()+"|"+dictCurrent.lang;
    var trs={};
    if(dictCache[cacheKey])dictCache[cacheKey].forEach(function(r){if(r.text)trs[r.lang.code]=r.text});
    addVocab(dictCurrent.word,dictCurrent.lang,trs);
    showToast("⭐ Dodano do listy 'Do nauki'");
  } else if(v.status==="learning"){
    setVocabStatus(dictCurrent.word,dictCurrent.lang,"known");
    showToast("🟢 Oznaczono jako znane");
  } else {
    removeVocab(dictCurrent.word,dictCurrent.lang);
    showToast("Usunięto z listy");
  }
  dictRefreshStarBtn();
  refreshAllVisibleQuotes();
}

// === EDYTOR TŁUMACZEŃ ===
function openTranslationsEditor(word,sourceLang){
  if(!word||!sourceLang){showToast("⚠️ Najpierw wybierz słowo");return}
  var modal=document.getElementById("tre-modal");
  modal.dataset.word=word;
  modal.dataset.lang=sourceLang;
  document.getElementById("tre-word").textContent=word;
  var L=getLang(sourceLang);
  document.getElementById("tre-source-lang").textContent=L?(L.flag+" "+L.label):sourceLang;
  // zbierz aktualne wartości — kolejność priorytetu: dictEdits > vocab.trs > dictCache
  var trs={};
  var ed=getDictEdits(word,sourceLang);
  if(ed)Object.assign(trs,ed);
  else {
    var v=findVocab(word,sourceLang);
    if(v&&v.trs)Object.assign(trs,v.trs);
    var ck=word.toLowerCase()+"|"+sourceLang;
    if(dictCache[ck])dictCache[ck].forEach(function(r){if(r.text&&!trs[r.lang.code])trs[r.lang.code]=r.text});
  }
  // zbuduj pola
  var fields=document.getElementById("tre-fields");
  fields.innerHTML="";
  LANGS.filter(function(L2){return L2.code!==sourceLang}).forEach(function(L2){
    var row=document.createElement("div");
    row.className="tre-row";
    var label=document.createElement("div");
    label.className="tre-row-lang";
    label.style.color=L2.color;
    label.innerHTML=L2.flag+" "+L2.label;
    var input=document.createElement("input");
    input.type="text";
    input.className="tre-input";
    input.dataset.lang=L2.code;
    input.value=trs[L2.code]||"";
    input.placeholder="np. tłumaczenie po "+L2.label.toLowerCase();
    row.appendChild(label);row.appendChild(input);
    fields.appendChild(row);
  });
  modal.classList.add("open");
  setTimeout(function(){var first=fields.querySelector(".tre-input");if(first)first.focus()},80);
}

function saveTranslationsEdit(){
  var modal=document.getElementById("tre-modal");
  var word=modal.dataset.word;
  var lang=modal.dataset.lang;
  if(!word||!lang)return;
  var newTrs={};
  document.querySelectorAll(".tre-input").forEach(function(inp){
    var val=inp.value.trim();
    if(val)newTrs[inp.dataset.lang]=val;
  });
  // zapisz w trwałym store edycji
  dictEdits[dictEditKey(word,lang)]=newTrs;
  saveDictEdits();
  // zsynchronizuj vocab jeśli słowo jest na liście
  var v=findVocab(word,lang);
  if(v){v.trs=Object.assign({},newTrs);saveVocab()}
  // zsynchronizuj cache pamięciowy
  dictCache[word.toLowerCase()+"|"+lang]=LANGS.filter(function(L){return L.code!==lang})
    .map(function(L){return {lang:L,text:newTrs[L.code]||null}});
  modal.classList.remove("open");
  // odśwież widoki
  if(dictCurrent.word===word&&dictCurrent.lang===lang){
    fetchTranslations(word,lang);
  }
  // jeśli vocab jest aktywny, przerysuj listę (zaktualizuje preview tłumaczeń)
  if(document.getElementById("learn").classList.contains("active")&&currentLearnTab==="vocab"){
    renderVocab();
  }
  showToast("✦ Tłumaczenia zaktualizowane");
}

function resetTranslationsEdit(){
  var modal=document.getElementById("tre-modal");
  var word=modal.dataset.word;
  var lang=modal.dataset.lang;
  if(!word||!lang)return;
  if(!hasDictEdits(word,lang)){showToast("ℹ️ Brak zapisanych poprawek dla tego słowa");return}
  if(!confirm("Usunąć ręczne poprawki dla „"+word+"”?\nTłumaczenia będą ponownie pobrane z API."))return;
  delete dictEdits[dictEditKey(word,lang)];
  saveDictEdits();
  // wyczyść cache, żeby kolejne wejście pobrało świeże z API
  delete dictCache[word.toLowerCase()+"|"+lang];
  modal.classList.remove("open");
  if(dictCurrent.word===word&&dictCurrent.lang===lang){
    fetchTranslations(word,lang);
  }
  if(document.getElementById("learn").classList.contains("active")&&currentLearnTab==="vocab"){
    renderVocab();
  }
  showToast("↺ Poprawki usunięte — ładuję z API");
}

// Po zmianie statusu słowa odśwież podświetlenia we wszystkich widokach
function refreshAllVisibleQuotes(){
  // home cards
  Object.keys(currentQuotePerLang).forEach(function(code){
    var q=quotes.find(function(x){return x.id===currentQuotePerLang[code]});
    if(q)updateLangCard(code,q,false);
  });
  // browse, favorites, dict-quotes — przerenderuj jeśli widoczne
  var v=document.querySelector(".view.active");
  if(!v)return;
  if(v.id==="browse")renderBrowse();
  else if(v.id==="favorites")renderFavorites();
  else if(v.id==="dict")showQuotesWithWord(dictCurrent.word||"");
}

function fillTrRow(L,text){
  var row=document.getElementById("dtr-"+L.code);
  if(!row)return;
  var t=row.querySelector(".dict-tr-text");
  var btn=row.querySelector(".icon-btn");
  if(text){
    t.classList.remove("dict-loading","dict-na");
    t.textContent=text;
    btn.style.display="";
    btn.onclick=function(){speakText(text,L.code,this)};
  } else {
    t.className="dict-tr-text dict-na";
    t.textContent="brak tłumaczenia";
    btn.style.display="none";
  }
}

function showQuotesWithWord(word){
  var grid=document.getElementById("dict-quotes-grid");
  var noRes=document.getElementById("dict-no-quotes");
  grid.innerHTML="";
  var lower=word.toLowerCase();
  var matches=quotes.filter(function(q){
    var re;
    try{re=new RegExp("(^|[^\\p{L}\\p{N}])"+escapeRegExp(lower)+"([^\\p{L}\\p{N}]|$)","iu")}
    catch(e){re=new RegExp("\\b"+escapeRegExp(lower)+"\\b","i")}
    return re.test(q.text);
  });
  document.getElementById("dict-quotes-count").textContent=matches.length;
  if(!matches.length){noRes.style.display="block";return}
  noRes.style.display="none";
  matches.forEach(function(q,i){grid.appendChild(buildBrowseCard(q,i))});
}

function escapeRegExp(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}

// === WYDRUK ===
var printSource=[];
var printSourceType="quotes"; // "quotes" lub "vocab"

function openPrintModal(source){
  printSourceType=(source==="vocab")?"vocab":"quotes";
  if(source==="favorites"){
    printSource=quotes.filter(function(q){return favorites.indexOf(q.id)!==-1});
  } else if(source==="browse"){
    var search=(document.getElementById("search-input").value||"").toLowerCase();
    printSource=quotes.filter(function(q){
      if(browseFilt.lang!=="all"&&q.lang!==browseFilt.lang)return false;
      if(browseFilt.cat!=="all"&&q.cat!==browseFilt.cat)return false;
      if(search&&q.text.toLowerCase().indexOf(search)===-1&&q.author.toLowerCase().indexOf(search)===-1)return false;
      return true;
    });
  } else if(source==="vocab"){
    // dla słownictwa wykorzystaj filtry z panelu Słownictwo
    var lf=document.getElementById("vocab-lang-filter");
    var sf=document.getElementById("vocab-status-filter");
    var lang=lf?lf.value:"all";
    var status=sf?sf.value:"all";
    printSource=vocab.filter(function(v){
      if(lang!=="all"&&v.lang!==lang)return false;
      if(status!=="all"&&v.status!==status)return false;
      return true;
    });
    if(!printSource.length){showToast("⚠️ Brak słów do wydruku");return}
    // dla vocab automatycznie ustaw tryb fiszki i ukryj tryby cytatów
    var fiszkiRadio=document.querySelector('input[name="print-mode"][value="flashcards"]');
    if(fiszkiRadio)fiszkiRadio.checked=true;
  } else {
    printSource=quotes.slice();
  }
  if(!printSource.length){showToast("⚠️ Brak elementów do wydruku");return}
  buildPrintLangs();
  updatePrintCount();
  document.getElementById("print-modal").classList.add("open");
}

function buildPrintLangs(){
  var wrap=document.getElementById("print-langs");
  wrap.innerHTML="";
  var present={};
  printSource.forEach(function(item){present[item.lang]=true});
  LANGS.forEach(function(L){
    if(!present[L.code])return;
    var opt=document.createElement("label");
    opt.className="print-lang-opt";
    opt.innerHTML='<input type="checkbox" class="print-lang" value="'+L.code+'" checked>'
      +'<span>'+L.flag+' '+L.label+'</span>';
    opt.querySelector("input").addEventListener("change",updatePrintCount);
    wrap.appendChild(opt);
  });
}

function getPrintSelectedLangs(){
  return Array.prototype.slice.call(document.querySelectorAll(".print-lang:checked"))
    .map(function(c){return c.value});
}

function updatePrintCount(){
  var langs=getPrintSelectedLangs();
  var n=printSource.filter(function(item){return langs.indexOf(item.lang)!==-1}).length;
  var label=printSourceType==="vocab"?(n===1?"słowo":"słów"):(n===1?"cytat":"cytatów");
  document.getElementById("print-count").innerHTML="Do wydruku: <strong>"+n+"</strong> "+label;
}

function doPrint(){
  var mode=(document.querySelector('input[name="print-mode"]:checked')||{}).value||"cards";
  var langs=getPrintSelectedLangs();
  var grouped=document.getElementById("print-grouped").checked;
  if(!langs.length){showToast("⚠️ Wybierz przynajmniej jeden język");return}
  var items=printSource.filter(function(item){return langs.indexOf(item.lang)!==-1});
  if(!items.length){showToast("⚠️ Brak elementów dla wybranych języków");return}
  buildPrintView(items,mode,grouped);
  document.getElementById("print-modal").classList.remove("open");
  setTimeout(function(){window.print()},120);
}

function buildPrintCard(item){
  var L=getLang(item.lang);
  var card=document.createElement("div");
  card.className="print-card";
  var flag=document.createElement("div");
  flag.className="pc-flag";flag.textContent=L.flag+" "+L.label;
  card.appendChild(flag);
  if(printSourceType==="vocab"){
    // Fiszka: słowo + linia + tłumaczenia
    var front=document.createElement("div");
    front.className="pc-vocab-front";front.textContent=item.word;
    card.appendChild(front);
    var div=document.createElement("div");div.className="pc-vocab-divider";
    card.appendChild(div);
    var back=document.createElement("div");back.className="pc-vocab-back";
    Object.keys(item.trs||{}).forEach(function(code){
      var TL=getLang(code);if(!TL)return;
      var row=document.createElement("div");
      row.textContent=TL.flag+" "+item.trs[code];
      back.appendChild(row);
    });
    if(!Object.keys(item.trs||{}).length){
      var noTr=document.createElement("div");noTr.style.fontStyle="italic";noTr.style.color="#999";
      noTr.textContent="(brak tłumaczeń)";back.appendChild(noTr);
    }
    card.appendChild(back);
  } else {
    var text=document.createElement("div");
    text.className="pc-text";text.textContent=item.text;
    var author=document.createElement("div");
    author.className="pc-author";author.textContent="— "+item.author;
    var cat=document.createElement("div");
    cat.className="pc-cat";cat.textContent=getCatEmoji(item.cat)+" "+item.cat;
    card.appendChild(text);card.appendChild(author);card.appendChild(cat);
  }
  return card;
}

function buildPrintView(qs,mode,grouped){
  var area=document.getElementById("print-view");
  area.className="print-mode-"+mode+(grouped?" print-grouped":"");
  area.innerHTML="";
  var header=document.createElement("div");
  header.className="print-header";
  var title=document.createElement("div");
  title.className="print-title";title.textContent="LingoMaxima";
  var sub=document.createElement("div");
  sub.className="print-sub";
  sub.textContent=qs.length+" "+(qs.length===1?"cytat":"cytatów")+" · "+new Date().toLocaleDateString("pl-PL");
  header.appendChild(title);header.appendChild(sub);
  area.appendChild(header);

  var langOrder={};LANGS.forEach(function(L,i){langOrder[L.code]=i});

  if(grouped&&mode==="cards2"){
    // Grupuj po tid; cytaty bez tid trafiają jako pojedyncze grupy
    var groups={},singles=[];
    qs.forEach(function(q){
      if(q.tid){if(!groups[q.tid])groups[q.tid]=[];groups[q.tid].push(q)}
      else singles.push([q]);
    });
    var allGroups=Object.keys(groups).map(function(k){return groups[k]}).concat(singles);
    allGroups.forEach(function(group){
      group.sort(function(a,b){return (langOrder[a.lang]||99)-(langOrder[b.lang]||99)});
      var wrap=document.createElement("div");
      wrap.className="print-card-group";
      group.forEach(function(q){wrap.appendChild(buildPrintCard(q))});
      area.appendChild(wrap);
    });
  } else {
    qs.forEach(function(q){area.appendChild(buildPrintCard(q))});
  }
}

function getCatEmoji(c){
  return{Filozofia:"🧠",Miłość:"❤️",Życie:"🌿",Sukces:"🏆",Motywacja:"⚡",Mądrość:"✨"}[c]||"✦";
}
function showToast(msg){
  var t=document.getElementById("toast");
  t.textContent=msg;t.classList.add("show");
  clearTimeout(window._tt);
  window._tt=setTimeout(function(){t.classList.remove("show")},2800);
}

// =================== SRS — Spaced Repetition ===================
var srsState=null; // {queue:[vocab items], idx:0, done:0}

function renderSRS(){
  var due=srsDueVocab();
  var emp=document.getElementById("srs-empty");
  var stats=document.getElementById("srs-stats");
  var sess=document.getElementById("srs-session");
  var done=document.getElementById("srs-done");
  if(done)done.style.display="none";
  if(sess)sess.style.display="none";
  if(!due.length){
    if(emp)emp.style.display="flex";
    if(stats)stats.style.display="none";
    return;
  }
  if(emp)emp.style.display="none";
  if(stats){
    stats.style.display="block";
    var newCount=due.filter(function(v){return !v.srs||!v.srs.nextReview}).length;
    var dueCount=due.length-newCount;
    stats.innerHTML='<div class="vocab-stats" style="margin:0">'
      +'<div>Do powtórki: <strong>'+due.length+'</strong></div>'
      +'<div>🆕 Nowe: <strong style="color:#5fb777">'+newCount+'</strong></div>'
      +'<div>📅 Zaplanowane: <strong style="color:#f4a261">'+dueCount+'</strong></div>'
      +'<button class="btn btn-primary" style="margin-left:auto" onclick="srsStart()">▶ Rozpocznij sesję</button>'
      +'</div>';
  }
}

function srsStart(){
  var due=srsDueVocab();
  if(!due.length){renderSRS();return}
  // tasuj
  due=shuffle(due);
  srsState={queue:due,idx:0,done:0};
  document.getElementById("srs-empty").style.display="none";
  document.getElementById("srs-stats").style.display="none";
  document.getElementById("srs-session").style.display="block";
  document.getElementById("srs-done").style.display="none";
  document.getElementById("srs-total").textContent=due.length;
  srsShowQuestion();
}

function srsShowQuestion(){
  var v=srsState.queue[srsState.idx];
  var L=getLang(v.lang);
  document.getElementById("srs-num").textContent=srsState.idx+1;
  document.getElementById("srs-bar").style.width=((srsState.idx/srsState.queue.length)*100)+"%";
  document.getElementById("srs-lang").innerHTML=(L?L.flag+" "+L.label:v.lang);
  document.getElementById("srs-word").textContent=v.word;
  // ukryj odpowiedź
  document.getElementById("srs-translations").style.display="none";
  document.getElementById("srs-show-btn").style.display="block";
  document.getElementById("srs-rate-buttons").style.display="none";
  // Aktualizuj podpisy interwałów na przyciskach
  var ints=document.querySelectorAll(".srs-rate-int");
  if(ints.length===4){
    // szybka symulacja każdej oceny żeby pokazać interval
    var preview=function(qty){
      var clone={srs:v.srs?JSON.parse(JSON.stringify(v.srs)):null};
      var s=srsNextReview(clone,qty);
      return s.interval;
    };
    ints[0].textContent="+1 dzień";
    ints[1].textContent="+"+preview(1)+(preview(1)===1?" dzień":" dni");
    ints[2].textContent="+"+preview(2)+(preview(2)===1?" dzień":" dni");
    ints[3].textContent="+"+preview(3)+(preview(3)===1?" dzień":" dni");
  }
}

function srsShowAnswer(){
  var v=srsState.queue[srsState.idx];
  var trs=v.trs||{};
  var html="";
  Object.keys(trs).forEach(function(code){
    var TL=getLang(code);if(!TL)return;
    html+='<div class="srs-tr-row"><span class="srs-tr-flag">'+TL.flag+'</span>'+trs[code]+'</div>';
  });
  if(!html)html='<div style="color:var(--text3);font-style:italic">Brak tłumaczeń (otwórz słowo w Słowniku, by pobrać)</div>';
  document.getElementById("srs-trs-content").innerHTML=html;
  document.getElementById("srs-translations").style.display="block";
  document.getElementById("srs-show-btn").style.display="none";
  document.getElementById("srs-rate-buttons").style.display="block";
}

function srsRate(quality){
  var v=srsState.queue[srsState.idx];
  // zastosuj SM-2
  srsNextReview(v,quality);
  // statystyki
  if(!v.stats)v.stats={ok:0,bad:0};
  if(quality>=2)v.stats.ok++; else v.stats.bad++;
  saveVocab();
  srsState.done++;
  srsState.idx++;
  if(srsState.idx>=srsState.queue.length){
    // koniec sesji
    document.getElementById("srs-session").style.display="none";
    document.getElementById("srs-done").style.display="block";
    document.getElementById("srs-done-count").textContent=srsState.done;
    checkAchievements();
  } else {
    srsShowQuestion();
  }
}

// =================== AUDIO DYKTANDO ===================
var dictationState=null;

function startDictation(){
  var lang=document.getElementById("dict-lang-sel").value;
  var pool=quotes.filter(function(q){
    if(q.lang!==lang)return false;
    var words=q.text.split(/\s+/);
    return words.length>=3&&words.length<=20; // dyktando: krótkie cytaty
  });
  if(!pool.length){showToast("⚠️ Brak cytatów w "+getLang(lang).label);return}
  var q=pool[Math.floor(Math.random()*pool.length)];
  dictationState={quote:q,attempts:0};
  document.getElementById("dictation-empty").style.display="none";
  document.getElementById("dictation-session").style.display="block";
  document.getElementById("dictation-input").value="";
  document.getElementById("dictation-result").style.display="none";
  // Odtwórz cytat
  setTimeout(function(){speakText(q.text,q.lang,null)},300);
}

function dictationReplay(){
  if(dictationState)speakText(dictationState.quote.text,dictationState.quote.lang,null);
}

function checkDictation(){
  if(!dictationState)return;
  var orig=dictationState.quote.text;
  var typed=document.getElementById("dictation-input").value.trim();
  if(!typed){showToast("⚠️ Wpisz tekst zanim sprawdzisz");return}
  // Porównanie słowo po słowie
  var origWords=orig.split(/\s+/);
  var typedWords=typed.split(/\s+/);
  var maxLen=Math.max(origWords.length,typedWords.length);
  var correct=0,wrong=0,missing=0;
  var diffHtml="<div class='dictation-diff'>";
  // Najprostsze porównanie pozycyjne
  for(var i=0;i<maxLen;i++){
    var ow=origWords[i]||"";
    var tw=typedWords[i]||"";
    var owClean=ow.replace(/[.,;:!?„"'…—]/g,"").toLowerCase();
    var twClean=tw.replace(/[.,;:!?„"'…—]/g,"").toLowerCase();
    if(!tw){diffHtml+='<span class="miss">'+ow+'</span> ';missing++}
    else if(owClean===twClean){diffHtml+='<span class="ok">'+ow+'</span> ';correct++}
    else {diffHtml+='<span class="bad">'+tw+'</span><sub style="color:#7fc890">('+ow+')</sub> ';wrong++}
  }
  diffHtml+='</div>';
  var pct=Math.round((correct/maxLen)*100);
  var verdict=pct>=90?"🎉 Świetnie!":pct>=70?"👍 Dobrze":pct>=50?"😊 Nieźle":"📝 Powtórz";
  document.getElementById("dictation-result").innerHTML=
    '<div class="dictation-result-card">'+
      '<div style="text-align:center;font-family:var(--ff-d);font-size:2.2rem;color:var(--gold3);font-style:italic">'+pct+'%</div>'+
      '<div style="text-align:center;font-family:var(--ff-u);font-size:.85rem;color:var(--text2);margin-bottom:1rem">'+verdict+' · '+correct+' poprawnie · '+wrong+' z błędem · '+missing+' brak</div>'+
      '<div style="font-family:var(--ff-u);font-size:.75rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem">Analiza:</div>'+
      diffHtml+
      '<div style="margin-top:1rem;font-family:var(--ff-u);font-size:.75rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em">Oryginał:</div>'+
      '<div style="font-family:var(--ff-d);font-style:italic;font-size:1.1rem;color:var(--cream);margin-top:.5rem">'+orig+'</div>'+
      '<div style="margin-top:1.2rem;text-align:center">'+
        '<button class="btn btn-primary" onclick="startDictation()">▶ Następny cytat</button>'+
      '</div>'+
    '</div>';
  document.getElementById("dictation-result").style.display="block";
  // statystyki sesji
  var st=document.getElementById("dictation-stats");
  if(st){
    var prevText=st.textContent;
    var nMatch=prevText.match(/(\d+)\/(\d+)/);
    var prev=nMatch?{ok:parseInt(nMatch[1]),total:parseInt(nMatch[2])}:{ok:0,total:0};
    prev.total++;if(pct>=70)prev.ok++;
    st.innerHTML='<div>Dyktanda: <strong style="color:#7fc890">'+prev.ok+'</strong> / '+prev.total+'</div>';
  }
}

function dictationGiveUp(){
  if(!dictationState)return;
  document.getElementById("dictation-input").value=dictationState.quote.text;
  document.getElementById("dictation-result").innerHTML=
    '<div class="dictation-result-card">'+
      '<div style="font-family:var(--ff-u);font-size:.85rem;color:var(--text3);text-align:center">Oryginał:</div>'+
      '<div style="font-family:var(--ff-d);font-style:italic;font-size:1.15rem;color:var(--cream);margin-top:.5rem;text-align:center">'+dictationState.quote.text+'</div>'+
      '<div style="margin-top:1.2rem;text-align:center">'+
        '<button class="btn btn-primary" onclick="startDictation()">▶ Następny cytat</button>'+
      '</div>'+
    '</div>';
  document.getElementById("dictation-result").style.display="block";
}

// =================== PRONUNCIATION RECORDING ===================
var pronState=null;
var pronRecognition=null;

function startPronunciation(){
  var lang=document.getElementById("pron-lang-sel").value;
  var pool=quotes.filter(function(q){
    if(q.lang!==lang)return false;
    var words=q.text.split(/\s+/);
    return words.length>=3&&words.length<=15;
  });
  if(!pool.length){showToast("⚠️ Brak cytatów w "+getLang(lang).label);return}
  var q=pool[Math.floor(Math.random()*pool.length)];
  pronState={quote:q};
  document.getElementById("pron-empty").style.display="none";
  document.getElementById("pron-session").style.display="block";
  document.getElementById("pron-result").style.display="none";
  document.getElementById("pron-quote").textContent=q.text;
}

function pronListen(){
  if(pronState)speakText(pronState.quote.text,pronState.quote.lang,null);
}

function pronRecord(){
  if(!pronState){showToast("⚠️ Najpierw wylosuj cytat");return}
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){
    showToast("❌ Twoja przeglądarka nie wspiera rozpoznawania mowy. Spróbuj Chrome/Edge.");
    return;
  }
  var btn=document.getElementById("pron-record-btn");
  if(pronRecognition){
    try{pronRecognition.stop()}catch(e){}
    pronRecognition=null;
    btn.classList.remove("recording");
    btn.textContent="🎙️ Nagraj swoją wymowę";
    return;
  }
  pronRecognition=new SR();
  var L=getLang(pronState.quote.lang);
  pronRecognition.lang=L.voice;
  pronRecognition.continuous=false;
  pronRecognition.interimResults=false;
  pronRecognition.maxAlternatives=1;
  btn.classList.add("recording");
  btn.textContent="🔴 Mów teraz… (klik = stop)";
  pronRecognition.onresult=function(e){
    var transcript=e.results[0][0].transcript;
    var confidence=e.results[0][0].confidence;
    pronShowResult(transcript,confidence);
  };
  pronRecognition.onerror=function(e){
    showToast("❌ Błąd: "+e.error);
    btn.classList.remove("recording");
    btn.textContent="🎙️ Nagraj swoją wymowę";
    pronRecognition=null;
  };
  pronRecognition.onend=function(){
    btn.classList.remove("recording");
    btn.textContent="🎙️ Nagraj swoją wymowę";
    pronRecognition=null;
  };
  pronRecognition.start();
}

function pronShowResult(transcript,confidence){
  var orig=pronState.quote.text;
  // Normalizacja: małe litery, bez znaków interpunkcyjnych
  function norm(s){return s.toLowerCase().replace(/[.,;:!?„"'…—()]/g,"").replace(/\s+/g," ").trim()}
  var nOrig=norm(orig);
  var nTrans=norm(transcript);
  // Levenshtein similarity
  var dist=levenshtein(nOrig,nTrans);
  var maxLen=Math.max(nOrig.length,nTrans.length);
  var similarity=Math.round(((maxLen-dist)/maxLen)*100);
  var score=Math.max(0,Math.round(similarity*0.7 + (confidence||0.5)*30)); // mix similarity + confidence
  var verdict=score>=85?"great":score>=70?"good":score>=50?"fair":"poor";
  var verdictText=score>=85?"🎉 Świetna wymowa!":score>=70?"👍 Dobra wymowa":score>=50?"😊 Nieźle, popraw":"📝 Powtórz wzorzec";
  document.getElementById("pron-result").innerHTML=
    '<div class="dictation-result-card">'+
      '<div class="pron-score '+verdict+'">'+score+'%</div>'+
      '<div style="text-align:center;font-family:var(--ff-u);font-size:.85rem;color:var(--text2);margin-bottom:1.5rem">'+verdictText+'</div>'+
      '<div style="font-family:var(--ff-u);font-size:.75rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em">Co usłyszała apka:</div>'+
      '<div class="pron-transcript">'+transcript+'</div>'+
      '<div style="font-family:var(--ff-u);font-size:.75rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-top:.5rem">Oryginał:</div>'+
      '<div class="pron-transcript" style="background:rgba(201,168,76,.05);border:1px solid rgba(201,168,76,.2)">'+orig+'</div>'+
      '<div style="margin-top:1.2rem;text-align:center">'+
        '<button class="btn btn-ghost" onclick="pronListen()">🔊 Wzorzec</button>'+
        '<button class="btn btn-primary" onclick="startPronunciation()">▶ Następny</button>'+
      '</div>'+
    '</div>';
  document.getElementById("pron-result").style.display="block";
}

function levenshtein(a,b){
  if(a===b)return 0;
  if(!a.length)return b.length;
  if(!b.length)return a.length;
  var m=[];for(var i=0;i<=b.length;i++)m[i]=[i];
  for(var j=0;j<=a.length;j++)m[0][j]=j;
  for(i=1;i<=b.length;i++){
    for(j=1;j<=a.length;j++){
      if(b.charAt(i-1)===a.charAt(j-1))m[i][j]=m[i-1][j-1];
      else m[i][j]=Math.min(m[i-1][j-1]+1,m[i][j-1]+1,m[i-1][j]+1);
    }
  }
  return m[b.length][a.length];
}

window.addEventListener("load",function(){
  updateFavCount();
  updateStreak();
  updateStreakUI();
  checkAchievements();
  buildLangToggles();
  buildLangCards();
  // Podpowiedzi przy polach tid w panelu admina
  var nqTid=document.getElementById("nq-tid");
  if(nqTid)nqTid.addEventListener("input",function(){updateTidHint("nq-tid-hint",this.value)});
  var eqTid=document.getElementById("eq-tid");
  if(eqTid)eqTid.addEventListener("input",function(){updateTidHint("eq-tid-hint",this.value)});
  if(window.speechSynthesis){
    window.speechSynthesis.onvoiceschanged=function(){};
    window.speechSynthesis.getVoices();
  }
  if(!localStorage.getItem("ql_promo")){
    setTimeout(function(){
      document.getElementById("promo-modal").classList.add("open");
      localStorage.setItem("ql_promo","1");
    },35000);
  }
});
