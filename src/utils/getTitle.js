function getTitle(type, url) {
  if (type === "movie") return "Popular Movies";
  if (type === "tv") return "Popular Tv Shows";
  if (type === "search")
    return `Results for "${url.search.split("=")[1].split("+").join(" ")}"`;
}

export default getTitle;
