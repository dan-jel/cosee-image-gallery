# React-Docker-Blueprint

<br />

Dieses Repository beinhaltet ein etwas abgespecktes "create-react-app" Projekt, welches zusammen mit einem Nginx Webserver in einem Docker Container ausgeführt werden soll.
Dieses Projekt dient ausschließlich als Startpunkt für jegliche React-Anwendungen, welche schnell und unkompliziert gehostet werden sollen.

<br />

---

<br />
Nach dem Clonen des Git-Repositorys und der Installation der benötigten `node_modules` via

```bash
npm install
```

kann man den Docker Container mit den folgenden zwei Befehlen zum laufen bringen:

<br />

1. Mit Hilfe des Dockerfiles ein Docker-Image bauen:

```bash
docker build -f Dockerfile.prod -t blueprint .
```

2.  Das Docker-Image ausführen und auf Port `80` des `localhosts` exposen:

```bash
docker run -d -p 80:80 --rm blueprint
```
