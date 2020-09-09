const ghpages = require("gh-pages")

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/cphillips17/cphillips17.github.io.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
