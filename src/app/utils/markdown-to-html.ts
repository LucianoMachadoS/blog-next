import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(
  markdown: string,
): Promise<string> {
  // O remark processa o markdown e o plugin html converte
  const result = await remark().use(html).process(markdown);

  return result.toString();
}
