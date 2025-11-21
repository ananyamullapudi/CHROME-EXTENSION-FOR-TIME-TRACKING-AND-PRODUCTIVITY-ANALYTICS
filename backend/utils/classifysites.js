module.exports = function classify(site) {
  const productive = [
    "leetcode.com",
    "github.com",
    "stackoverflow.com",
    "w3schools.com",
    "geeksforgeeks.org"
  ];

  const unproductive = [
    "instagram.com",
    "facebook.com",
    "tiktok.com",
    "youtube.com",
    "reddit.com"
  ];

  if (productive.includes(site)) return "productive";
  if (unproductive.includes(site)) return "unproductive";

  return "neutral";
};
