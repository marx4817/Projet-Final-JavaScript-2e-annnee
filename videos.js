//tableau d'objet chaque objet represente une video et ses infos
const dbVideo = [
    {
        "titre" : "Kreyo la Peyem ",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        "photo": "1.jpg",
        "video": "KREYOL_LA_-_PEYE'M_FEAT._TONYMIX_(OFFICIAL_MUSIC_VIDEO).mp4",
        "date" : "2011-10-05T14:48:00.000",
        "poster" : "1.png"
    },

    {
        "titre" : "What is Lorem Ipsum?",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        "photo": "./Loisir/picture/2.png",
        "video": "./Loisir/VID-20200423-WA0016.mp4",
        "date" : "2019-10-05T14:48:00.000",
        "poster" : "./Loisir/picture/2.png"
    },

    {
        "titre" : "Kreyol la ca viendra",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        "photo": "./Loisir/picture/3.PNG",
        "video": "./Loisir/Kreyol_La_-_Ça_Viendra_(Lyrics_Video)_#Remake.mp4",
        "date" : "2011-10-05T14:48:00.000",
        "poster" : "./Loisir/picture/3.png"
    },

    {
        "titre" : "Kreyol la mw pako jwenn li",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        "photo": "./Loisir/picture/dekameron.jfif",
        "video": "./Loisir/KREYOL_LA_-_MWEN_POKO_JWENN_LI_feat_RUTSHELLE_GUILLAUME_(OFFICIAL_VIDEO).mp4",
        "date" : "2011-10-05T14:48:00.000",
        "poster" : "./Loisir/picture/dekameron.jfij"
    },

    {
        "titre" : "Kreyol la ca viendra",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        "photo": "./Loisir/picture/cap.jfif",
        "video": "./Loisir/Kreyol_La_-_Ça_Viendra_(Lyrics_Video)_#Remake.mp4",
        "date" : "2011-10-05T14:48:00.000",
        "poster" : "./Loisir/picturecap.jfif"
    },

    {
        "titre" : "Kreyol la peyem",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        "photo": "./Loisir/picture/4.png",
        "video": "KREYOL_LA_-_PEYE'M_FEAT._TONYMIX_(OFFICIAL_MUSIC_VIDEO).mp4",
        "date" : "2010-12-05T14:48:00.000",
        "poster" : "./Loisir/picture/4.png"
    },

    {
        "titre" : "What is Lorem Ipsum?",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        "photo": "./Loisir/picture/1.png",
        "video": "./Loisir/KREYOL_LA_-_PEYE'M_FEAT._TONYMIX_(OFFICIAL_MUSIC_VIDEO).mp4",
        "date" : "2020-10-23T14:48:00.000",
        "poster" : "./Loisir/picture/1.png"
    },

    {
        "titre" : "What is Lorem Ipsum?",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        "photo":"./Loisir/picture/4.png",
        "video": "./Loisir/VID-20200529-WA0003.mp4",
        "date" : "2021-09-08T14:48:00.000",
        "poster" : "./Loisir/picture/4.png"
    },
]

//tableau de couleur 
const colorArray = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
	  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
	  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
	  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
	  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
	  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
	  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
	  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
	  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
	  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];

// tableau des noms utilisateur 
//chaque video poste par un user aleatoire
const nameArray = ["Marx", "Jean", "Chaido", "Lordeus", "Vonise", "Maxia"]

function nameF(...nom){
    nom = nom[0]
    let c = Math.floor(Math.random() * 6)
    return nom[c]
}

function koule(...koule){
    koule = koule[0]
    let c = Math.floor(Math.random() * 45)

    return koule[c]
}

function generateVideo(...video){
    video = video[0]
    let tableVideo = []
    let valueID = 0
    for(let i of video){
        const div = document.createElement("div")
        div.setAttribute("class", "video")
        div.setAttribute("value", valueID)
        
        const divImage = document.createElement("div")
        divImage.innerHTML = `<img src="${i.photo}" width="100%" height="100%">`
        divImage.setAttribute("class", "image")
        
        let d = new Date(i.date)
        let date = dateComplete(d)
        div.append(divImage)

        let color1 = koule(colorArray)
        let color2 = koule(colorArray)
        let name1 = nameF(nameArray)
        div.innerHTML +=`<div id="profComm"><svg height="50" width="50"><circle cx="25" cy="25" r="20" stroke="${color1}" stroke-width="3" fill="${color1}" /></svg><div><span><strong></strong></span><br><span >${name1}</span></div></div>`
        div.innerHTML += `<p class="text"><strong>${i.titre}</strong><br>${i.description}<br>${date}</p>`
        //div.innerHTML += `<div"><svg height="50" width="50"><circle cx="25" cy="25" r="20" stroke="#d838f2" stroke-width="3" fill="#d838f2" /></svg><div id="svg"><span><strong>${i.titre}</strong></span><br><span >${i.description}</div></div>`
    
        tableVideo.push(div)
        valueID ++
    }

    return tableVideo
}

let tab = generateVideo(dbVideo)
const idRight = document.querySelector("#right");
i =0;
for(let video of tab){
    
    idRight.append(video)
    i++;
}


const divVideo = document.querySelectorAll(".video");
const cache = document.getElementById("videos")
divVideo.forEach((el) => {
    el.onclick = (event) => {
        
       cache.style.display = 'none'
        const b = el.getAttribute("value")
        let listVideo = document.getElementById("listeVideo")
        let lire = document.getElementById("lire")
        listVideo.style.display = "block"
        lire.style.display = "block"
        let count =0

        let bas = lireVideo(parseInt(b))
        lire.insertBefore(bas, lire.firstElementChild)
        const tab1 = listeVideo(dbVideo)

        for(let video of tab1){
            listVideo.append(video)

            if(count ==3){
                break
            }
           
            count ++  
        }
        replaceVideo()
    }

    el.onmousemove = (event) => {
        el.style.position = "relative"
        el.style.top = "30px"
        el.title = "Clickez pour lire la video"
    }

    el.onmouseleave = (event) => {
        el.style.position = "relative"
        el.style.top = ""
        
    }

})

//Remplace une la video an cours 
function replaceVideo(){
    const remplacement = document.querySelectorAll(".remplace")

    remplacement.forEach((el) => {
        el.onclick = (event) => {
            let val = el.getAttribute("value");
            let vid = lireVideo(parseInt(val))
            let vidRemp = lire.firstElementChild
            lire.firstElementChild = vid
            lire.replaceChild(vid, vidRemp)
        }

        el.onmousemove = (event) => {
            el.style.position = "relative"
            el.style.top = "30px"
            el.title = "Clickez pour lire la video"
        }
    
        el.onmouseleave = (event) => {
            el.style.position = "relative"
            el.style.top = ""
            
        }
    })

}



//Commentaire
const form = document.getElementById("commentForm")
form.onsubmit = (event) => {
    event.preventDefault()
    
    const data = new FormData(form)
    const resultat = document.getElementById("result")
    resultat.innerHTML += `<div id="profComm"><svg height="50" width="50"><circle cx="25" cy="25" r="20" stroke="#d838f2" stroke-width="3" fill="#d838f2" /></svg><div><span><strong>${data.get("surnom")}</strong></span><br><span >${data.get("area")}</span></div></div>`
    
    document.querySelector("input[name=surnom]").value = ""
    document.querySelector("textarea[name=area]").value = ""
    
}

//fonction Pour lire la video
function lireVideo(num){
    const vid = dbVideo[num]
    const div = document.createElement("div")
    let d = new Date(vid.date)
    let date = dateComplete(d)
    div.innerHTML = `<video src="${vid.video}" poster="${vid.poster}" controls width="100%" height="500px"></video>`
    //div.innerHTML += `<p class="description">${vid.titre}<br>${vid.description}<br>${date}</p>`
    div.innerHTML += `<div id="profComm" class="description"><svg height="50" width="50"><circle cx="25" cy="25" r="20" stroke="#d838f2" stroke-width="3" fill="#000" /></svg><div><span><strong>${vid.titre}</strong></span><br><span >${vid.description}</span><br><span>${date}</span></div></div>`
    return div
}

//Liste video
function listeVideo(...video){
    video = video[0]
    let tableVideo = []
    let valueID = 0
    for(let i of video){
        const div = document.createElement("div")
        div.setAttribute("class", "remplace")
        div.setAttribute("value", valueID)
        
        const divImage = document.createElement("div")
        divImage.innerHTML = `<img src="${i.photo}" width="100%" height="100%">`
        divImage.setAttribute("class", "image")
        
        let d = new Date(i.date)
        let date = dateComplete(d)
        div.append(divImage)

        
        let color1 = koule(colorArray)
        let color2 = koule(colorArray)
        let name1 = nameF(nameArray)

        div.innerHTML +=`<div id="profComm"><svg height="50" width="50"><circle cx="25" cy="25" r="20" stroke="${color1}" stroke-width="3" fill="${color1}" /></svg><div><span><strong></strong></span><br><span >${name1}</span></div></div>`
        div.innerHTML += `<p class="text"><strong>${i.titre}</strong><br>${i.description}<br>${date}</p>`
        tableVideo.push(div)
        valueID ++
    }

    return tableVideo
}

//const bv = document.getElementsByClassName("")


//fonction pour convertir la date
function dateComplete(dat){
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    let numeroMois = dat.getMonth()
    let jour = dat.getDate()
  
    let annee = dat.getFullYear()
    let heure = dat.getHours()
    let minute = dat.getMinutes()
  
    let opsyon ="AM"
    if(heure >12){
      heure = heure - 12
      opsyon ="PM"
    }
  
    return `${jour} ${month[numeroMois]} ${annee}, ${heure}:${minute} ${opsyon}`
  }



  ///https://alvarotrigo.com/blog/website-footers/