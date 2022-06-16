# Vorbereitung
node.js installieren  
https://nodejs.org/en/

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