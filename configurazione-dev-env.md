# Configurare l'ambiente locale per lo sviluppo frontend
In questa breve guida vedremo come configurare l'ambiente di sviluppo locale per la creazione di applicazioni con Angular e Node.js. 

L'ideale sarebbe che arriviate alla prima lezione su HTML con l'ambiente configurato, in modo da intercettare per tempo eventuali problemi e avere la possibilità di risolverli prima che ci rallentino.

<p align="center">
<img src="https://user-images.githubusercontent.com/496417/170121595-4f1ace63-62ec-4780-9836-afaa9999a8f9.jpg" styl>
</p>

## Software necessari
Tutti i software di cui avrete bisogno sono multipiattaforma, per cui dovrete solamente stare attenti a scegliere la versione corretta per il vostro sistema operativo.
- [Firefox](https://www.mozilla.org/it/firefox/new/) o [Google Chrome](https://www.google.com/intl/it/chrome/) - Un browser internet, non ha bisogno di presentazioni
- [Visual Studio Code](https://code.visualstudio.com/) - Sarà il nostro editor di testo (se avete già installato Visual Studio dovrete installarlo comunque: nonostante il nome e il logo simili sono due cose completamente diverse)
  - [Estensione Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Lo useremo per visualizzare i cambiamenti al codice "in diretta" sul browser
- [Node.js](https://nodejs.org/en/download/) - Sarà il nostro runtime per una parte del backend e installerà _npm_, un package manager che useremo moltissimo
- [MAMP](https://www.mamp.info/en/downloads/) o [XAMPP](https://www.apachefriends.org/it/index.html) - Uno dei due dovreste averlo già, lo useremo per il db MySQL

**Nota importante:** durante l'installazione di Node.js su Windows, ricordate di selezionare la checkbox "Automatically install the necessary tools"

<p align="center">
<img src="https://user-images.githubusercontent.com/496417/170122248-caa3d8f3-bfc2-46a1-ac32-c404f82026cd.png" width="500">
</p>

## Installazione di Angular
In questo caso la procedura può variare tra Windows da una parte, e Mac e Linux dall'altra. Le riporto entrambe.

### Windows
Aprite il _Command Prompt_ o _Powershell_ e lanciate il seguente comando:

```bash
npm install -g @angular/cli
```

Questo dovrebbe essere sufficiente per l'installazione della command line interface di Angular, potete saltare direttamente alla sezione **Verifica dell'installazione** per controllare che sia tutto a posto.

In caso di errori è possibile che sia necessario modificare la [execution policy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.2) per gli script con il comando

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
```

### Mac e Linux
Aprite il terminale e lanciate il comando: 

```bash
npm install -g @angular/cli
```
Se non avete già installato e configurato _npm_ prima di questo corso, è molto probabile che otteniate questo errore o qualcosa di simile:

```
Missing write access to /usr/local/lib/node_modules
```

Nessun problema, questo accade perché l'utenza che state usando non ha i permessi per scrivere in quella directory. Molte guide e molti colleghi in futuro vi suggeriranno di lanciare il comando come amministratore utilizzando `sudo` per risolvere il problema. **Non fatelo!** Sebbene potrebbe essere una soluzione accettabile sulla vostra macchina personale, potrebbe non funzionare o creare addirittura problemi su una macchina non vostra o in ambiente server.

La procedura corretta consiste nell'istruire _npm_ per salvare i package in una directory per la quale abbiate tutti i permessi necessari.

Per prima cosa bisogna capire quale sia la shell (ovvero l'interprete dei comandi che gira nel vostro terminale) in uso sul vostro sistema, in modo da modificare il file di configurazione corretto. 

Lo facciamo stampando la variabile d'ambiente `$SHELL`:

```bash
echo $SHELL
```

Le due più comuni che potrete trovare sono `zsh` e `bash`. Nel primo caso dovrete modificare il file `.zshrc` mentre nel secondo caso il file si chiamerà `.bash_profile` se usate un Mac o `.bashrc` se usate Linux. 

Il file di configurazione si trova nella home del vostro utente, raggiungibile dando il comando `cd` senza argomenti. Una volta individuato potete utilizzare _vi_ o _nano_ per aggiungere queste righe in coda al file.

```
npm set prefix ~/.npm
PATH="$HOME/.npm/bin:$PATH"
PATH="./node_modules/.bin:$PATH"
```

Salvate e istruiamo la shell di rileggere il file di configurazione.

```
# Se usate zsh
source ~/.zshrc
# Se usate bash su Mac
source ~/.bashrc
# Se usate bash su Linux
source ~/.bashrc
```

A questo punto dovreste poter installare Angular (e tutti i package globali che installeremo in futuro) senza problemi:

```bash
npm install -g @angular/cli
```

## Verifica dell'installazione
Potete verificare che tutto sia installato correttamente lanciando uno alla volta i comandi:

```bash
node --version
npm --version
ng version
```

Se tutti e tre i comandi stampano la versione installata, significa che tutto è stato configurato correttamente. In caso contrario provate a seguire nuovamente la procedura dall'inizio. Se ci fossero ancora problemi cerchiamo di risolverli alla prima lezione.

A presto!
Michele
