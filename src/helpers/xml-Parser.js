// This file parses the XML response, to a JavaScript Object

export const xmlParser = (text) => {
  var parser, xmlDoc;

  parser = new DOMParser();
  xmlDoc = parser.parseFromString(text, "text/xml");

  const response = 
    JSON.parse(xmlDoc.getElementsByTagName("return")[0].childNodes[0].nodeValue);  
  return response;
};
