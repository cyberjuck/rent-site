/*
  Translations.
  Translated: header menu, white text blocks, ticket block title, footer.
  Black and pink poster blocks stay in English (they are written directly in index.html).
  Bold in body text: <b>...</b>. New paragraph: <p>...</p>.
*/
const EN = {

  team_more: "learn more",
  tp_cast: "cast", tp_band: "band", tp_creative: "creative team",
  band_keys: "keys", band_guitar: "guitar", band_bass: "bass", band_drums: "drums",
  cr_director: "director, plays maureen", cr_assistant: "assistant director, dramaturg", cr_vocal: "vocal coach",
  cr_choreo: "choreography coach", cr_art: "art director, designer", cr_marketing: "head of marketing",
  cr_producer: "producer", cr_set: "set designer", cr_smm: "smm manager", cr_tango: "tango coach",
  cr_soundeng: "sound engineer", cr_sounddes: "sound designer", cr_soundass: "sound assistant",
  nav_rent: "RENT",
  nav_about: "what is rent",
  nav_team: "team",
  nav_expect: "what to expect",
  nav_buy: "buy a ticket",

  about_h: "WHAT IS “RENT”",
  about_p:
    "<p>RENT is a <b>rock musical</b> by Jonathan Larson about <b>a year in the life of a group of young artists in New York in the early nineties.</b> They can’t pay the rent, they fall in love, they lose each other, and they’re right in the middle of the AIDS crisis.</p>" +
    "<p>Larson wrote it about his own friends and neighbourhood. He died suddenly, at age 35, the night before the first preview of the show, and never saw what came next: RENT moved to <b>Broadway</b>, won the <b>Pulitzer Prize</b> and <b>four Tony Awards</b> (including Best Musical), ran for twelve years and became one of the most iconic musicals ever written.</p>" +
    "<p>People get sick, fall in and out of love, behave like complete assholes — often all in the same song. Somehow, you end up rooting for them.</p>" +
    "<p>Larson took Puccini’s La Bohème and moved it to 1990s New York. <b>Thirty years later, we’re bringing his New York to Belgrade, and it feels just as relevant here and now.</b></p>",

  our_h: "OUR “RENT”",
  our_p:
    "<p>People who saw RENT when it first opened in New York in 1996 described it as watching your friends walk onto a stage and sing about the life you were all living. Over the years it has been polished into a beautiful, flawless Broadway production.</p>" +
    "<p><b>We wanted to bring that first feeling back.</b> We cast people who recognise their own lives in this story, and we let them be themselves on stage. Every night they pour their hearts out, and the show comes out honest in a way you can’t rehearse. That’s exactly how we like it.</p>" +
    "<p>A ticket costs 2,000 dinars (about 20 US dollars), the same price RENT charged for its famous front-row seats on Broadway in 1996.</p>",

  every_h: "EVERYTHING IS RENT",
  every_p:
    "<p>The small print in your contract doesn’t mention that everything is rent. The flat, the city, the people you call family on a Tuesday night. We take as much as our hearts, our health and our bank cards can manage, and we keep it until our hearts expire (or our visas do).</p>" +
    "<p>For the characters, the crisis was AIDS. Today, everyone in the room has a crisis of their own. For some of us, it came with a war and a packed suitcase. For others, it’s the slow realisation that the place you call home doesn’t feel like yours anymore. It often feels as though there’s nothing we can do. Trust people in power who haven’t listened to us in years? Work ourselves to death just to keep a roof over our heads on a burning planet? <b>RENT is about living right through it and not lowering your voice along the way.</b></p>" +
    "<p>We are also here to remind you there is still love. There is still friendship. There is still sex (safe, please!). No war, no border and no breaking news can take that away, and we’re angry that anyone tried.</p>",

  team_h: "TEAM",
  team_p:
    "<p>We’re a cast and crew from Serbia, Russia and the US who decided to stage a Broadway musical with whatever time and money we could offer. We did it because we love this show deeply, and because right now Belgrade needs this story more than ever.</p>",

  expect_h: "WHAT TO EXPECT",
  expect_p:
    "<p>During the first act, you’ll be standing, so feel free to dance and move around like you’re at a gig. For the second act, you’ll have a seat, just like in a regular theatre. The bar is open before the show and during intermission.</p>" +
    "<p>You’ll be much closer to the stage than usual, close enough to see everything, and the actors won’t pretend you’re invisible. We’d love for you to be part of the show, and we’ll do our best to make you feel like you’re right inside the story.</p>",

  tickets_h: "buy a ticket",

  support_h: "support us",
  support_p:
    "<p>We’re an independent team putting this show together entirely on our own. And we want to keep RENT affordable for as many people as possible. That’s why our <b>regular ticket costs 2000 RSD.</b> But to cover what this show actually costs, we need more. So we came up with <b>supporter tickets for 3000, 5000, 7000 or 10000 RSD.</b> You won’t get anything extra. Same show, no special seats. Your support will help us pay for equipment and venue rental, put on more performances of RENT in Belgrade, and hopefully even pay our cast and crew a little something.</p>" +
    "<p><b>And it works both ways.</b> If 2000 RSD is too much but you still want to see the show, just reach out to us. We’ll figure something out! And if you’d like to support our team in a bigger way, we’d love to hear from you too.</p>",
  offline_h: "paper tickets",
  offline_p:
    "<p>Soon you’ll be able to grab a real paper ticket from our friends at cafes and bars around Belgrade. No platform fees — every dinar goes straight to the show. The list of spots will be posted here and on <a class=\"u\" href=\"https://www.instagram.com/everything.is.rent/\" target=\"_blank\" rel=\"noopener\">Instagram</a> very soon.</p>",

  // pink ticket bars
  strip_buy: "buy a ticket",
  strip_from: "FROM 2,000 RSD",
  cta_buy: "BUY A TICKET",

  foot_xtix: "Tickets sold via xtix",
  foot_terms: "Terms of service",
  foot_refund: "Refund policy",
};

const SR = {
  ...EN,

  team_more: "saznaj više",
  tp_cast: "glumački ansambl", tp_band: "bend", tp_creative: "kreativni tim",
  band_keys: "klavijature", band_guitar: "gitara", band_bass: "bas", band_drums: "bubnjevi",
  cr_director: "režija, igra Maureen", cr_assistant: "dramaturgija, saradnica u&nbsp;režiji", cr_vocal: "vokalna priprema",
  cr_choreo: "koreografija", cr_art: "art direkcija, dizajn", cr_marketing: "marketing",
  cr_producer: "produkcija", cr_set: "scenografija", cr_smm: "društvene mreže", cr_tango: "tango koreografija",
  cr_soundeng: "ton majstor", cr_sounddes: "dizajn zvuka", cr_soundass: "saradnik za zvuk",
  nav_about: "ŠTA JE RENT",
  nav_team: "EKIPA",
  nav_expect: "ŠTA DA OČEKUJETE",
  nav_buy: "KUPI ULAZNICU",

  about_h: "ŠTA JE RENT",
  about_p:
    "<p>RENT je <b>rok mjuzikl</b> Džonatana Larsona koji prati <b>godinu dana iz života grupe mladih umetnika u Njujorku početkom devedesetih godina prošlog veka.</b> Oni nemaju novca za kiriju, zaljubljuju se, gube jedni druge i pokušavaju da žive usred epidemije side.</p>" +
    "<p>Larson je ovaj mjuzikl napisao inspirisan sopstvenim prijateljima i krajem u kom je živeo. Preminuo je iznenada u 35. godini, noć uoči premijere, i nikada nije video šta je usledilo: RENT je stigao na <b>Brodvej</b>, osvojio <b>Pulicerovu nagradu</b> i <b>četiri Toni nagrade</b> (uključujući onu za najbolji mjuzikl), izvodio se dvanaest godina i postao jedan od najupečatljivijih mjuzikala svih vremena.</p>" +
    "<p>Likovi se razboljevaju, zaljubljuju, odljubljuju i ponašaju kao potpuni kreteni – i sve to često u istoj pesmi. A nekako na kraju ipak navijaš za njih.</p>" +
    "<p>Larson je uzeo Pučinijevu operu La Bohème i preselio je u Njujork devedesetih. <b>Trideset godina kasnije, mi njegov Njujork dovodimo u Beograd. I ova priča je ovde i danas podjednako aktuelna.</b></p>",

  our_h: "NAŠ RENT",
  our_p:
    "<p>Ljudi koji su gledali RENT kada je prvi put izveden u Njujorku 1996. godine opisali su taj osećaj kao da su njihovi prijatelji izašli na scenu i počeli da pevaju o životu koji svi zajedno žive. Tokom godina, predstava je izbrušena do savršenstva klasične brodvejske produkcije.</p>" +
    "<p><b>Mi hoćemo da vratimo taj prvobitni osećaj.</b> Okupili smo ljude koji u ovoj priči prepoznaju sopstvene živote i pustili ih da na sceni budu ono što jesu. Zato svake večeri ostavljaju srce na sceni, a predstava postaje iskrena na način koji ne može da se uvežba. I baš tako nam se sviđa.</p>" +
    "<p>Ulaznica košta 2.000 dinara (oko 20 američkih dolara), isto koliko su 1996. godine koštale čuvene ulaznice za prvi red na Brodveju.</p>",

  every_h: "SVE JE RENT",
  every_p:
    "<p>Ni najsitnija slova u ugovorima ne pominju da iznajmljujemo mnogo više od stana u kom živimo. Zapravo, sve je pod kirijom. Stan, grad, ljudi koje jednog običnog utorka uveče zoveš porodicom. Uzimamo od života onoliko koliko nam srce, zdravlje i računi u banci dozvoljavaju. Držimo se toga dok nam ne istekne rok trajanja – ili viza.</p>" +
    "<p>Za likove iz RENT-a kriza je bila epidemija side. Danas, svako od nas nosi neku svoju krizu. Nekima je došla zajedno s ratom i spakovanim koferom. Drugima se polako uvukla u život kroz spoznaju da mesto koje zovu domom više ne osećaju kao svoje.</p>" +
    "<p>Često nam se čini da ne možemo ništa da promenimo. Da verujemo ljudima na vlasti koji nas godinama ne slušaju? Da radimo do iznemoglosti samo da bismo imali krov nad glavom, i to na planeti koja gori?</p>" +
    "<p><b>RENT je priča o tome kako živeti usred svega toga – i ne stišavati glas.</b></p>" +
    "<p>A tu smo i da priznamo nešto: ljubav još postoji. Prijateljstvo još postoji. I seks još postoji (bezbedan, molimo!). Nijedan rat, nijedna granica i nijedna udarna vest to ne mogu da nam oduzmu. I besni smo što je iko uopšte pokušao.</p>",

  team_h: "EKIPA",
  team_p:
    "<p>Mi smo ekipa umetnika iz Srbije, Rusije i SAD-a koji su odlučili da postave brodvejski mjuzikl sa malim budžetom, u ono malo slobodnog vremena koje nam ostaje posle posla.</p>" +
    "<p>Radimo to zato što iskreno volimo ovu predstavu. I zato što verujemo da je Beogradu baš sada ova priča potrebnija nego ikad.</p>",

  expect_h: "ŠTA DA OČEKUJETE",
  expect_p:
    "<p>Prvi čin se gleda stojeći, što znači da slobodno možeš da plešeš i da se krećeš, baš kao na svirci. Za drugi čin imaćeš svoje mesto za sedenje, kao u običnom pozorištu. Bar je otvoren pre predstave i tokom pauze između činova.</p>" +
    "<p>Bićeš mnogo bliže sceni nego inače, dovoljno blizu da vidiš baš sve. A glumci se neće praviti da ne postojiš. Želimo da budeš deo predstave i daćemo sve od sebe da se osećaš kao da si i sam ušao u ovu priču.</p>",

  tickets_h: "KUPI ULAZNICU",

  support_h: "podrži nas",
  support_p:
    "<p>Mi smo nezavisna ekipa i ovu predstavu pravimo potpuno sami. Želimo da RENT bude dostupan što većem broju ljudi. <b>Obična ulaznica košta 2000 RSD</b> – ali to ne pokriva sve troškove naše predstave. Zato su dostupne i <b>ulaznice podrške od 3000, 5000, 7000 ili 10000 RSD.</b> Uz njih ne dobijaš ništa dodatno: ista predstava, nema posebnih mesta. Tvoja podrška će nam pomoći da platimo opremu i najam prostora, organizujemo još izvođenja RENT-a u Beogradu i, nadamo se, damo bar nešto našoj ekipi.</p>" +
    "<p><b>A važi i obrnuto.</b> Ako ti je 2000 RSD previše, a ipak želiš da dođeš na predstavu, samo nam se javi. Naći ćemo rešenje! I ako želiš da podržiš našu ekipu na veći način, rado ćemo čuti tvoje ideje.</p>",
  offline_h: "papirne ulaznice",
  offline_p:
    "<p>Uskoro ćeš moći da kupiš pravu papirnu ulaznicu kod naših prijatelja u kafićima i barovima po Beogradu. Bez provizije platforme – svaki dinar ide pravo u predstavu. Spisak lokacija uskoro objavljujemo ovde i na <a class=\"u\" href=\"https://www.instagram.com/everything.is.rent/\" target=\"_blank\" rel=\"noopener\">Instagramu</a>.</p>",
  foot_xtix: "Ulaznice se prodaju preko xtix-a",

  strip_buy: "KUPI ULAZNICU",
  strip_from: "OD 2.000 RSD",
  cta_buy: "KUPI ULAZNICU",
};

const I18N = { en: EN, sr: SR };
