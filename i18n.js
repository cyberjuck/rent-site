/*
  Translations.
  Translated: header menu, white text blocks, ticket block title, footer.
  Black and pink poster blocks stay in English (they are written directly in index.html).
  Bold in body text: <b>...</b>. New paragraph: <p>...</p>.
*/
const EN = {
  nav_about: "what is rent",
  nav_team: "team",
  nav_expect: "what to expect",
  nav_buy: "buy a ticket",

  about_h: "WHAT IS “RENT”",
  about_p:
    "<p>RENT is a <b>rock musical</b> by Jonathan Larson about <b>a year in the life of a group of young artists in New York in the early nineties.</b> They can’t pay the rent, they fall in love, they lose each other, and they’re right in the middle of the AIDS crisis.</p>" +
    "<p>Larson wrote it about his own friends and neighbourhood. He died suddenly, at age 35, the night before the first preview of the show, and never saw what came next: RENT moved to <b>Broadway</b>, won the <b>Pulitzer Prize</b> and <b>four Tony Awards</b> (including Best Musical), ran for twelve years and became one of the most iconic musicals ever written.</p>" +
    "<p>People get sick, fall in and out of love, behave like complete assholes — often all in the same song. Somehow, you end up rooting for them. Larson took Puccini’s La Bohème and moved it to 1990s New York. <b>Thirty years later, we’re bringing his New York to Belgrade, and it feels just as relevant here and now.</b></p>",

  our_h: "OUR “RENT”",
  our_p:
    "<p>People who saw RENT when it first opened in New York in 1996 described it like watching your friends walk onto a stage and sing about the life you were all living. Over the years it has been polished into a beautiful, flawless Broadway production.</p>" +
    "<p><b>We wanted to bring that first feeling back.</b> We cast people who recognise their own lives in this story, and we let them stay themselves on stage. So every night they pour their hearts out, and the show comes out honest in a way you can’t rehearse, and that’s exactly how we like it.</p>" +
    "<p>A ticket costs 2,000 dinars (about 20 US dollars), the same price RENT charged for its famous front-row seats on Broadway in 1996.</p>",

  every_h: "EVERYTHING IS RENT",
  every_p:
    "<p>Not even the tiny font in the contracts mentions that not only the flat you live in, but everything is rent. The flat, the city, the people you call family on a Tuesday night. We take as much as our hearts, our health and our bank cards can manage, and we keep it until our hearts expire (or our visas do).</p>" +
    "<p>For the characters, the crisis was AIDS. Today, everyone in the room has a crisis of their own. For some of us, it came with a war and a packed suitcase. For others, it’s the slow realisation that the place you call home doesn’t feel like yours anymore. It often feels as though there’s nothing we can do. Trust people in power who haven’t listened to us in years? Work ourselves to death just to keep a roof over our heads on a burning planet? <b>RENT is about living right through it and not lowering your voice along the way.</b></p>" +
    "<p>We are also here to admit there is still love. There is still friendship. There is still sex (safe, please!) No war, no border and no breaking news can take that away, and we’re angry that anyone tried.</p>",

  team_h: "TEAM",
  team_p:
    "<p>We’re a cast and crew from Serbia, Russia and the US who decided to stage a Broadway musical with low budget, in whatever time our jobs leave us. We did it because we love this show deeply, and because right now Belgrade needs this story more than ever.</p>",

  expect_h: "WHAT TO EXPECT",
  expect_p:
    "<p>The first act is a standing one, so feel free to dance and move around, like at a gig. For the second act, you’ll have a seat, just like in a regular theatre. The bar is open before the show and during the intermission.</p>" +
    "<p>You’ll be close enough to see everything, and the actors won’t pretend you’re invisible. We’d love for you to be part of the show, and we’ll do our best to make you feel like you’re right inside the story.</p>",

  tickets_h: "buy a ticket",

  foot_xtix: "Tickets sold via xtix:",
  foot_terms: "Terms of service",
  foot_refund: "Refund policy",
};

const I18N = {
  en: EN,
  ru: { ...EN }, // TODO: русский перевод
  sr: { ...EN }, // TODO: српски превод
};
