class RedirectEasterEgg {
    constructor(pattern, url) {
        this.pattern = pattern;
        this.url = url;
    }
};

var redirect_easter_eggs = [
    new RedirectEasterEgg("c,r,o,u,t,o,n", "https://crouton.net"),
    new RedirectEasterEgg("m,c,r,i,b", "https://twitter.com/PointyyESM/status/1364715306611073032"),
    new RedirectEasterEgg("m,r,b,u,r,n,s", "https://www.youtube.com/watch?v=RtJ9YB-wTqw"),
    new RedirectEasterEgg("s,e,n,p,a,i", "https://ayetsg.github.io/files/senpai_is_real.mp4"),
    new RedirectEasterEgg("s,u,s", "https://whentheimposteriss.us")
]

var egg = new Egg();

for (let redirect of redirect_easter_eggs) {
    egg.addCode(redirect.pattern, function() {
        window.location.replace(redirect.url);
    }).listen();
}