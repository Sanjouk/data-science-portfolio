export const projectMeta = {
  siteName: 'Vlasov Oleksandr — Portfolio',
  titleSuffix: 'Vlasov Oleksandr',
  version: '1.0.0',
  description:
    'Portfolio of an AI & Data Science engineering student featuring projects in machine learning, data engineering, RAG systems, automation, and applied software development.',
  authors: [
    {
      name: 'Oleksandr Vlasov',
      role: 'Web Developer & Data Scientist',
    },
    {
      name: 'Olha Beshta',
      role: 'Designer UI/UX',
    },
  ],
  comment: 'This is a small portfolio project built to present my skills, real- world work, and growth as an AI & Data Science engineer.It will continue evolving with new projects, refinements, and production - level improvements.',
};

export const authorsMetaValue = projectMeta.authors.map((author) => author.name).join(', ');
