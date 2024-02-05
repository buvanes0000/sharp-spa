function getImageURL(name) {
  return new URL(`../assets/services/${name}`, import.meta.url).href;
}

export { getImageURL };
