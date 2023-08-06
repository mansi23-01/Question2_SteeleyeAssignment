Solution 2:
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  // Convert plain text positions to HTML positions
  const htmlPositions = plainTextPositions.map(({ start, end }) => {
    const plainTextStart = plainText.slice(0, start);
    const plainTextEnd = plainText.slice(0, end);

    const htmlStart = htmlContent.indexOf(plainTextStart);
    const htmlEnd = htmlContent.indexOf(plainTextEnd) + plainTextEnd.length;

    return { start: htmlStart, end: htmlEnd };
  });

  // Highlight the content in HTML based on positions
  let highlightedHTML = htmlContent;
  for (const { start, end } of htmlPositions) {
    const highlightStart = '<span style="background-color: yellow">';
    const highlightEnd = '</span>';
    highlightedHTML =
      highlightedHTML.slice(0, start) +
      highlightStart +
      highlightedHTML.slice(start, end) +
      highlightEnd +
      highlightedHTML.slice(end);
  }

  return highlightedHTML;
}

const htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing...</span></p>';
const plainText = 'Hi David Headline: Energix Closes $520 Million Financing...';
const plainTextPositions = [
  {
    start: 0,
    end: 8,
  },
  {
    start: 16,
    end: 50,
  },
];

const highlightedContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
console.log(highlightedContent);
