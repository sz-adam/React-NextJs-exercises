# Todo API

Ez az alkalmazás egy egyszerű Todo API, amely NodeJs, Express.js-t használ backendként, MySQL adatbázist, és a Prisma ORM-et az adatbázis kezelésére.

## Telepítés

### Klónozd le a repót
Telepítsd a szükséges függőségeket
Futtasd a Prisma migrációkat, hogy létrehozd az adatbázis sémáját:
## npx prisma migrate dev 

### Indítás :
 node index

API végpontok
Az API a következő végpontokkal rendelkezik:

GET /todos – Az összes todo lekérdezése
POST /todos – Új todo létrehozása
PUT /todos/:id – Todo frissítése
PUT /todos/complete/:id – Todo állapotának befejezésre állítása
DELETE /todos/:id – Todo törlése
GET /todos/priorities – A todo priorizálásának lehetőségei
GET /todos/categories – A todo kategóriák listája
GET /todos/category/:category – Az adott kategóriákra való szűrés