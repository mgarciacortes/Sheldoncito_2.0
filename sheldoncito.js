/* ===== Diseño estilo WhatsApp (adaptado) ===== */
:root{
--bg:#ece5dd;
--wh-msg:#ffffff;
--bot-msg:#d93636; /* rojo bot */
--header:#075e54;
--accent:#075e54;
--muted:#6b6b6b;
--card:#f7f7f7;
--maxw:900px;
}
*{box-sizing:border-box}
body{
margin:0;
font-family: "Helvetica Neue", Arial, sans-serif;
background:var(--bg);
display:flex;
justify-content:center;
padding:12px;
color:#111;
}

/* contenedor principal */
.wa-app{
width:100%;
max-width:var(--maxw);
background:transparent;
}

/* header */
.wa-header{
display:flex;
align-items:center;
gap:12px;
background:var(--header);
color:white;
padding:10px 12px;
border-radius:10px;
}
.wa-logo{
width:28px; /* más pequeño pero minimalista */
height:28px;
object-fit:contain;
filter:brightness(0) invert(1);
}
.wa-title .name{
font-weight:700;
font-size:18px;
letter-spacing:1px;
}
.wa-title .subtitle{
font-size:12px;
color:#d7f2ee;
}
.mode-controls{margin-left:auto; display:flex; gap:8px; align-items:center;}
.mode-controls select{padding:6px;border-radius:6px;border:none;}

/* layout: side + chat */
.wa-main{
display:flex;
gap:12px;
margin-top:12px;
}

/* sidebar */
.wa-side{
width:220px;
background:var(--card);
border-radius:10px;
padding:10px;
box-shadow:0 6px 14px rgba(15,15,20,0.06);
height:600px;
overflow:auto;
}
.wa-side h4{margin:0 0 8px 0}
.wa-side ul{list-style:none;padding:0;margin:0 0 10px 0}
.wa-side li{padding:8px;border-radius:8px;cursor:pointer;color:#073642}
.wa-side li:hover{background:#f1fbfb}
.side-actions{display:flex;flex-direction:column;gap:8px;margin-top:8px}
.side-actions button{padding:8px;border-radius:6px;border:none;background:var(--accent);color:white;cursor:pointer}
.side-opt{display:block;margin-top:10px;font-size:13px;color:var(--muted)}

/* chat area */
.wa-chat{flex:1; display:flex; flex-direction:column; gap:10px}
.chat-window{
background: #f0f0f0;
border-radius:12px;
padding:16px;
height:600px;
overflow:auto;
box-shadow:0 6px 14px rgba(15,15,20,0.04);
}

/* burbujas */
.msg{
display:inline-block;
padding:10px 14px;
margin:8px 0;
border-radius:12px;
max-width:72%;
line-height:1.3;
word-wrap:break-word;
font-size:15px;
}

/* usuario: blanco */
.user-msg{
background:var(--wh-msg);
margin-left:auto;
color:#111;
border:1px solid #e6e6e6;
border-bottom-right-radius:4px;
}

/* bot: rojo */
.bot-msg{
background:var(--bot-msg);
color:white;
margin-right:auto;
border-bottom-left-radius:4px;
}

/* composer (input) */
.composer{
display:flex;
gap:8px;
margin-top:6px;
}
input#userInput{
flex:1;
padding:12px;
border-radius:20px;
border:none;
font-size:15px;
}
button#sendBtn{
padding:10px 14px;
border-radius:12px;
border:none;
background:var(--header);
color:white;
cursor:pointer;
}

/* responsive */
@media (max-width:900px){
.wa-main{flex-direction:column}
.wa-side{width:100%; height:auto}
.chat-window{height:54vh}
}
