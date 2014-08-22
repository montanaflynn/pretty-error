module.exports = {
  "pretty-error > header > title > kind": {
    color: "bright-white",
    background: "red",
    padding: "2 1" 
   },

  "pretty-error > header > colon": {
    display: "none"
  },

  "pretty-error > header > message": {
    color: "white",
    padding: "2 1" 
  },

  "pretty-error > trace > item": {
    marginLeft: 2,
    color: "green",
    bullet: "'<green>♥</green>'"
  },

  "pretty-error > trace > item > header > pointer > file": {
    color: "green"
  },
  
  "pretty-error > trace > item > header > pointer > line": {
    color: "green",
    marginRight: 1
  },
  
  "pretty-error > trace > item > header > pointer > colon": {
    color: "white"
  },    
  
  "pretty-error > trace > item > header > what": {
    color: "white"
  },
  
  "pretty-error > trace > item > footer > addr": {
    display: "none"
  }
}