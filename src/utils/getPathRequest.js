function getPathRequest(type, url) {
  return type === "search" ? `${type}/${url.search.slice(1)}` : type;
}

export default getPathRequest;
