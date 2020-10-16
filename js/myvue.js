var jobs =[
  {"organization":"Special Olympics International",
  "position":"Web Developer / Content Manager",
  "dates":"Jun '19 - xx",},

  {"organization":"American Road Builders Transportation Assn.",
  "position":"Web Developer / Digital Marketing spec.",
  "dates":"Jun '17 - Dec '18",},

  {"organization":"Tsunami Wholesale Group LLC",
  "position":"Customer Support",
  "dates":"Jun '16 - Nov '16",},

  {"organization":"B&L Biotech USA",
  "position":"Admin Associate / Systems Admin",
  "dates":"May '15 - Jan '16",},


]
var skills =["Python, Django, HTML, CSS, Vue.js, JQuery", "Adobe Illustrator", "Web Content Management", "E-Commerce Management", "Digital Marketing", "Analytics Reporting", "UI/UX Research",]

var projects =[
  {
    "name":"Inclusive Health Center",
    "url":"https://inclusivehealth.specialolympics.org/",
    "description":"",
  },
  {
    "name":"Label Noir Shopping Directory",
    "url":"https://labelnoir.org/brands/",
    "description":"",
  },
  {
    "name":"American Road Builders Transportation Association",
    "url":"https://artba.org/",
    "description":"",
  },
  {
    "name":"Council of University Transportation Centers",
    "url":"https://www.mycutc.com/",
    "description":"",
  },
  {
    "name":"Library of Synth POC",
    "url":"libraryofsynth.pdf",
    "description":"Under Construction",
  },
  {
    "name":"",
    "url":"",
    "description":"",
  },

]

var menu=[
  {"name":"Work Experience",
  "active":false,
  "jobs":jobs},


  {"name":"Skills",
  "active":false,
  "skills":skills},

  {"name":"Projects",
  "active":false,
  "projects":projects},
]
var seal = "img/gmuseal.svg"

var home=[

]
var app = new Vue({
  el:'#app',
  data:{
    menu:menu,
    seal:seal,
  },
  methods:{
    resumejump: function(str){
      var name = str

      for(k=0; k< this.menu.length;k++){
        if(this.menu[k].name == name){
          this.menu[k].active = true;
        }
        else{
          this.menu[k].active=false;
        }
      }
      this.seal = "img/gmusealdark.svg";
    },
    sealClick:function(){
      for(k=0; k< this.menu.length;k++){
          this.menu[k].active = false;
      }
      this.seal = "img/gmuseal.svg";

    },

    getActive: function(){

      for(k=0; k< this.menu.length;k++){
          if(this.menu[k].active){
            var active = this.menu[k].name
            return active;
          }
      }
    },
    language: function(){
      alert("I took 4 years of Spanish through Highschool. I do not interact with the language much, and most of what I have retained applies to present tense communication. I am in the early stages of learning French. As youth, I studied French for 1 year before switching to Spanish. I consider myslf a true beginner with the French language.");
    },
  },

})
