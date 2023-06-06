function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    let text = node.textContent;
    text = text.replace(/\bcloud\b|\biCloud\b/gi, matched => {
      // Determine the case of the matched word
      if (matched === 'cloud') return 'clown';
      if (matched === 'Cloud') return 'Clown';
      if (matched === 'CLOUD') return 'CLOWN';
      if (matched === 'iCloud') return 'iClown';
    });
    node.textContent = text;
  } else {
    node.childNodes.forEach(replaceText);
  }
}

replaceText(document.body);
