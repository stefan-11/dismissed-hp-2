# Vorbereitung
1. Git installieren
https://git-scm.com
2. node.js installieren  (immer LTS Version nehmen, z.B. 16.15.1)
https://nodejs.org/en/
3. GitHub Repository auf lokal klonen. Dazu in einer Commandline (z.B. Bash, das mit Git kommt)
```bash
git clone https://github.com/stefan-11/dismissed-hp-2.git
```
Dabei wird ein neues Verzeichnis `dismissed-hp-2`angelegt.

# Create Gallery JSON
Im galleryBuilder Ordner:
```bash
npm install
node create-gallery-json.js ../galleries target.json
```
Legt im Ordner galleryBuilder ein neues `target.json` an.  
Das müsste eigentlich nach Namen sortiert sein. Die `headline` kann noch angepasst werden.  
Evtl. auch einfach den neuen/zusätzlichen Teil in das aktuell verwendete `galleries.json` übernehmen, damit nicht alle Überschriften erneut angepasst werden müssen.

# Create Thumbnails
Im galleryBuilder Ordner:
```bash
npm install
node create-thumbs-in-subfolder.js ../Dismissed-Homepage/galleries/2022-06-12-testfolder/
```
Legt im Ordner `../Dismissed-Homepage/galleries/2022-06-12-testfolder/` einen `thumbs` Ordner an.  
In den `thumbs` Ordner werden die thumbnails von den `jpg` Bildern im angegebenen Ordner abgelegt.