mongoose stoji izmedju aplikacije i MongoDB baze podataka.
mongoose je ODM (Object Data Modeling) biblioteka za MongoDB i Node.js.
mongoose omogućava aplikacijama da koriste MongoDB kao bazu podataka i pruža jednostavan način za rad sa podacima u bazi.
mongoose je liberary koja olakšava rad sa MongoDB bazom podataka i omogućava aplikacijama da koriste MongoDB kao bazu podataka.

Expressjs je web framework za Node.js koji olakšava izradu web aplikacija i API-ja.
Expressjs pruža jednostavan način za upravljanje HTTP zahtevima i odgovorima, kao i za upravljanje rutama i middleware-ima.


KREIRANJE NODEJS PROJEKTA
npm init ovo će da kreira package.json datoteku koja sadrži informacije o projektu i zavisnostima
npm init -y ovo će da kreira package.json datoteku sa podrazumevanim vrednostima
mi koristimo npm init i sami ćemo da dodamo sve zavisnosti koje su nam potrebne
kada napravimo folder sa imenom projekta, otvorimo terminal tako sto izaberemo opciju open in integrated terminal i u njemu ukucamo npm init

npm init

u package.json fajlu mozemo procitati da je "main": "index.js" glavni fajl projekta i moramo da napravimo taj fajl
tako što ćemo da napravimo novi fajl sa imenom index.js i da ga otvorimo u editoru  

Da bi pokrenuli app potrebno je da u package.json dodamo skriptu za pokretanje aplikacije 
"scripts": {
    "start": "node index.js"
  }, ova skriptu smo izmenili i dodali smo start umesto test.

  ovako je izgledala pre izmene 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  sada je ovako
"scripts": {
    "start": "node index.js"
  },

 DA bi pokrenuli aplikaciju u terminalu ukucamo npm run start

 dodajemo i type module u package.json da bi mogli da koristimo ES module

 INSTALIRAMO EXPRESS

npm install express

dobijamo folder node_modules i package-lock.json
u node_modules folderu se nalaze sve zavisnosti koje smo instalirali

kreiramo fajl .gitignore i dodajemo node_modules folder u njega da ne bi bio pratjen od strane git-a
i u njga dodajemo node_modules/ da bi git ignorisao taj folder

kada smo to uradili stavljamo projekat na github


app.get("/", (req, res) => {
  res.send("Hello World!");
}); ovo je home ruta koja se koristi za testiranje da li je server pokrenut

posle ovoga idemo na postman i testiramo da li je server pokrenut koristimo get metodu i idemo na localhost:127.0.0.1:3000/ 

ako je sve u redu dobijamo Hello World!

DODAJEMO NODEMON
nodemon je alat koji automatski ponovo pokreće aplikaciju kada se naprave izmene u kodu
da bi smo ga instalirali koristimo sledeću komandu npm i -D nodemon

u package.json dodajemo nodemon u skriptu start da bi smo mogli da koristimo nodemon umesto node
 "scripts": {
    "start": "node index.js"
    "dev": "nodemon index.js"
  },

sada možemo da pokrenemo aplikaciju sa nodemon-om tako što ćemo u terminalu ukucati npm run dev