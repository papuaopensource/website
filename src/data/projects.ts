export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  headline: string;
  story: string[];
  experience: string[];
  connection: string;
  sourceNote?: string;
  repository: string;
  website?: string;
  featured: boolean;
}

// Project descriptions are based on their public repository READMEs.
export const projects: Project[] = [
  {
    slug: "dapoer-papoea",
    name: "Dapoer Papoea",
    category: "Food & heritage",
    summary:
      "A shared collection of Papuan recipes, made to be explored, cooked, and passed on.",
    headline: "Keep a connection to Papua through its food.",
    story: [
      "A recipe is an invitation to make something yourself. Dapoer Papoea brings recipes from Papua into an open collection that anyone can browse and try at home.",
      "The project documents staple dishes, side dishes, snacks, and drinks. Its purpose is to make Papuan cooking easier to discover and to give people a way to help keep that knowledge in circulation.",
    ],
    experience: [
      "Explore recipes by category, from everyday staples to drinks.",
      "Find something to cook and share with the people around you.",
      "Discover the ingredients and instructions behind each dish.",
    ],
    connection:
      "Cook something that catches your eye and share it with someone. If you notice a detail worth checking, send us its source and context.",
    sourceNote:
      "The repository credits the recipe book “Resep Masak Dapur Irian Jaya” by Marijke Werimon-Bakker, Hendrina Rumsaur, Dianne Gee, and Reggie Pangkatana, published by Pusat Latihan Pelayan Sosial GKI Padang Bulan, Abepura.",
    repository: "dapoerpapoea",
    website: "https://dapoerpapoea.web.id",
    featured: true,
  },
  {
    slug: "moy-dictionary",
    name: "Moy Dictionary",
    category: "Language & learning",
    summary:
      "An open dictionary connecting people with the Moy language of Jayapura, one word at a time.",
    headline: "Make room for Moy in everyday learning.",
    story: [
      "Maybe you’ve heard a word in Moy and wondered what it means, or you’d like to learn a phrase you can use. The Moy Dictionary gives you a place to look it up and keep learning.",
      "The website brings Moy vocabulary and Indonesian translations together with pronunciation information, definitions, and examples where available. It supports the ongoing work of learning and preserving the language, with room for speakers to correct and enrich the entries.",
    ],
    experience: [
      "Look up words and phrases in Moy or Indonesian.",
      "Browse vocabulary by initial letter and word class.",
      "Explore Moy song lyrics alongside their translations.",
    ],
    connection:
      "If you speak Moy and notice a meaning or spelling that needs another look, tell us about it. Examples and context help us review an entry with care.",
    sourceNote:
      "The initial vocabulary is adapted from Kamus Dwibahasa Mooi, published by Balai Bahasa Provinsi Papua. Digital entries remain open to correction.",
    repository: "kamusbahasamoy",
    website: "https://kamusbahasamoy.web.id",
    featured: true,
  },
  {
    slug: "moy-dictionary-mobile",
    name: "Moy Dictionary for Mobile",
    category: "Language & learning",
    summary:
      "A mobile companion for exploring Moy vocabulary, meanings, and examples.",
    headline: "Bring language learning a little closer.",
    story: [
      "Like the website, the mobile Moy Dictionary helps people get to know the Moy language of Jayapura. It brings that same idea to your phone.",
      "Designed as a mobile app, it brings vocabulary, pronunciation information, and example sentences into a format suited to a phone. The open code also offers a starting point for communities interested in building dictionaries for other languages.",
    ],
    experience: [
      "Browse words alphabetically.",
      "Read meanings, word classes, and pronunciation information.",
      "Explore example sentences with Indonesian translations.",
    ],
    connection:
      "Curious about using the app or adapting it for another language? Explore its source and license, or ask its maintainers about the current version.",
    sourceNote:
      "Vocabulary is drawn from Kamus Dwibahasa Mooi, published by Balai Bahasa Provinsi Papua. Adaptations must respect the project’s AGPL-3.0 license and attribution requirements.",
    repository: "kamusbahasamoy-mobile",
    featured: false,
  },
  {
    slug: "papuan-thought",
    name: "Papuan Thought",
    category: "Writing & perspectives",
    summary:
      "An open space for Papuans to share essays, reflections, and their own perspectives.",
    headline: "Papua, told by the people who call it home.",
    story: [
      "There is no single story of Papua. Papuan Thought makes space for Papuans to write about their experiences, questions, and ideas in their own words.",
      "The platform welcomes essays and reflections on culture, society, politics, technology, identity, and everyday life. Reading, writing, and discussion are all ways to take part in that exchange.",
    ],
    experience: [
      "Read essays and explore the people behind the writing.",
      "Follow authors and save pieces to return to.",
      "Share perspectives through writing and conversation.",
    ],
    connection:
      "Spend time with an essay, follow an author, or bring your own perspective to the writing. For questions about the platform, get in touch with us.",
    repository: "papuanthought",
    website: "https://papuanthought.com",
    featured: false,
  },
  {
    slug: "mops",
    name: "Mops",
    category: "Stories & humour",
    summary:
      "A home for the jokes and lighthearted stories known in Papua as mop.",
    headline: "Some stories are best shared with a laugh.",
    story: [
      "A mop is a humorous story, joke, or lighthearted tale told in Papuan dialect. Mops brings these stories together so people can enjoy them beyond the moment in which they are told.",
      "The collection is a way to share a part of Papuan everyday culture through its language and humour. It invites readers to spend a little time with the stories and pass the laughter along.",
    ],
    experience: [
      "Read a collection of Papuan mop stories.",
      "Discover the language and humour within each story.",
      "Share a favourite with someone who would enjoy it.",
    ],
    connection:
      "Enjoy a story and pass it along. If you have a correction or a story for us to consider, include its context and attribution.",
    repository: "mops",
    website: "https://ceritamop.com",
    featured: false,
  },
  {
    slug: "papua-chronicles",
    name: "Papua Chronicles",
    category: "Knowledge & history",
    summary:
      "A starting point for understanding Papua’s history, customary regions, people, and local terms.",
    headline: "A place for curiosity about Papua to grow.",
    story: [
      "A question about a place, a person, or an unfamiliar word can be the beginning of a much larger journey. Papua Chronicles offers approachable reference material for people who want to learn about Papua.",
      "Its collections include common questions, a glossary, a historical timeline, customary regions, and profiles of notable Papuan figures. Sources accompany historical, regional, and biographical entries so readers can follow the context and explore further.",
    ],
    experience: [
      "Start with concise answers to common questions.",
      "Explore a timeline, customary regions, and profiles of Papuan figures.",
      "Follow cited sources to explore a topic further.",
    ],
    connection:
      "Follow a question through the references. If you find a missing source or an error, send us the details so we can review it.",
    repository: "papuachronicles",
    website: "https://papuachronicles.com",
    featured: true,
  },
];
