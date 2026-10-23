/** Imagen por defecto (SVG en data-URI) para elementos sin imagen en la API. */
export const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
      '<rect width="100%" height="100%" fill="#dee2e6"/>' +
      '<text x="50%" y="50%" font-size="72" text-anchor="middle" dominant-baseline="central">⚡</text></svg>'
  );
