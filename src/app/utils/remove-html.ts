export const removeHtml = (text: string): string => {
  if (!text) return '';

  return (
    text
      // 1. Remove tags HTML (ex: <p>, </div>, <br />)
      .replace(/<[^>]*>?/gm, '')
      // 2. (Opcional) Remove caracteres de Markdown comuns se seu Strapi mandar MD
      .replace(/#{1,6}\s/g, '') // Remove cabeçalhos #
      .replace(/(\*\*|__)(.*?)\1/g, '$2') // Remove negrito **texto**
      .replace(/\*([^*]+)\*/g, '$1') // Remove itálico *texto*
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1') // Remove links [texto](url) -> texto
      // 3. Remove espaços extras e quebras de linha duplicadas
      .replace(/\s+/g, ' ')
      .trim()
  );
};
