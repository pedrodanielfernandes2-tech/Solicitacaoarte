<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width,initial-scale=1.0" name="viewport"/>
<title>Solicitação de Artes — Assembleia de Deus Louveira</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<style>
:root{--bg:#f0f4f7;--sur:#fff;--sur2:#f2f5f8;--bor:#cdd6de;--teal:#3aafa9;--td:#267d79;--tl:#60c8c3;--tbg:rgba(58,175,169,.08);--tx:#1b2d35;--tm:#577080;--acc:#e05555;--r:7px}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);font-family:Lato,sans-serif;color:var(--tx);min-height:100vh;padding:36px 20px 80px}
.wrap{max-width:780px;margin:0 auto}
.banner{display:flex;align-items:center;justify-content:center;gap:16px;background:#3aafa9;border-radius:10px 10px 0 0;padding:20px 32px}
.logo{width:56px;height:56px;object-fit:contain;border-radius:8px;flex-shrink:0}
.bn-title{font-family:"Playfair Display",serif;font-size:clamp(16px,3.5vw,24px);font-weight:700;color:#fff;line-height:1.2}
.bn-sub{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.8);margin-top:4px}
.hdr{text-align:center;padding:24px 32px 20px;background:#fff;border:1px solid var(--bor);border-top:none;position:relative}
.hdr::after{content:"";position:absolute;bottom:0;left:8%;right:8%;height:2px;background:linear-gradient(90deg,transparent,var(--teal),transparent)}
.hdr h1{font-family:"Playfair Display",serif;font-size:clamp(14px,2.8vw,20px);font-weight:700;color:var(--td);line-height:1.3}
.hdr p{margin-top:6px;font-size:13px;color:var(--tm);font-weight:300}
.fbody{background:#fff;border:1px solid var(--bor);border-top:none;padding:32px 40px}
.sec{font-family:"Playfair Display",serif;font-size:15px;color:var(--td);margin:30px 0 14px;padding-bottom:8px;border-bottom:2px solid var(--tl);display:flex;align-items:center;gap:10px}
.sec::before{content:"";width:4px;height:18px;background:var(--teal);border-radius:2px;flex-shrink:0}
.sec:first-of-type{margin-top:0}
.row{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.row.one{grid-template-columns:1fr}
.field{display:flex;flex-direction:column;gap:6px;margin-bottom:14px}
label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--tm)}
label .req{color:var(--teal);margin-left:3px}
input[type=text],input[type=date],input[type=time],textarea,select{background:var(--sur2);border:1px solid var(--bor);border-radius:var(--r);color:var(--tx);font-family:Lato,sans-serif;font-size:14px;padding:10px 14px;outline:none;transition:border-color .2s,box-shadow .2s;width:100%}
input:focus,textarea:focus,select:focus{border-color:var(--teal);box-shadow:0 0 0 3px rgba(58,175,169,.15)}
textarea{resize:vertical;min-height:86px}
select{cursor:pointer}
.date-row{display:grid;grid-template-columns:1fr 1fr auto;gap:10px;align-items:end;margin-bottom:10px}
.date-row .field{margin-bottom:0}
.ic{width:38px;height:38px;border-radius:var(--r);border:1px solid var(--bor);background:var(--sur2);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0}
.ic.add{background:var(--teal);color:#fff;border-color:var(--teal)}
.ic.add:hover{background:var(--td)}
.ic.rem{color:var(--acc);border-color:#f5c0c0}
.ic.rem:hover{background:#fdecea}
.add-row{display:flex;align-items:center;gap:8px;margin:2px 0 16px;cursor:pointer;width:fit-content}
.add-row span{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--teal)}
.pb{background:var(--tbg);border:1px solid rgba(58,175,169,.25);border-radius:var(--r);padding:14px 18px;margin-bottom:14px}
.pb-title{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--td);margin-bottom:10px}
.rg{display:flex;gap:22px;margin-top:4px}
.rg label{font-size:13px;font-weight:400;letter-spacing:0;text-transform:none;color:var(--tx);display:flex;align-items:center;gap:8px;cursor:pointer}
.rg input[type=radio]{accent-color:var(--teal);width:16px;height:16px;cursor:pointer}
.ph{font-size:12px;color:var(--tm);font-style:italic;line-height:1.6;padding:9px 13px;background:var(--tbg);border-left:3px solid var(--teal);border-radius:0 4px 4px 0;margin-top:6px}
.upa{border:2px dashed var(--bor);border-radius:var(--r);padding:24px 20px;text-align:center;cursor:pointer;position:relative;transition:border-color .2s,background .2s}
.upa:hover{border-color:var(--teal);background:var(--tbg)}
.upa input[type=file]{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
.upi{font-size:24px;margin-bottom:6px}
.upl{font-size:13px;color:var(--tm)}
.upl strong{color:var(--td)}
.prev{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px}
.thumb{position:relative;width:78px;height:78px}
.thumb img{width:100%;height:100%;object-fit:cover;border-radius:4px;border:1px solid var(--bor)}
.thumb button{position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;background:var(--acc);border:none;color:#fff;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.lhint{font-size:12px;color:#7a5800;font-style:italic;padding:8px 12px;background:#fffbec;border-left:3px solid #f0ad00;border-radius:0 4px 4px 0;margin-bottom:8px}
.ibox{background:var(--tbg);border:1px solid rgba(58,175,169,.3);border-radius:var(--r);padding:18px 22px;margin-top:8px}
.ibox-t{font-family:"Playfair Display",serif;font-size:14px;color:var(--td);margin-bottom:12px;display:flex;align-items:center;gap:8px}
.irow{display:flex;align-items:flex-start;gap:12px;margin-bottom:10px}
.irow:last-child{margin-bottom:0}
.bdg{background:var(--teal);color:#fff;font-size:10px;font-weight:700;letter-spacing:1px;padding:3px 9px;border-radius:20px;white-space:nowrap;margin-top:2px;flex-shrink:0}
.bdg.or{background:#e08a2a}
.irow p{font-size:13px;color:var(--tx);line-height:1.5}
.acts{background:#fff;border:1px solid var(--bor);border-top:none;border-radius:0 0 10px 10px;padding:22px 40px;display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 24px;border-radius:var(--r);font-family:Lato,sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;border:none;transition:all .2s}
.btn-p{background:var(--teal);color:#fff}
.btn-p:hover{background:var(--td);transform:translateY(-1px);box-shadow:0 5px 16px rgba(58,175,169,.3)}
.btn-d{background:transparent;color:#c04040;border:1.5px solid #f0c0c0}
.btn-d:hover{background:#fdecea}
.btn:disabled{opacity:.6;cursor:not-allowed;transform:none!important}
/* popup */
.pop{position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;z-index:10000;opacity:0;pointer-events:none;transition:opacity .25s}
.pop.on{opacity:1;pointer-events:all}
.pbox{background:#fff;border-radius:12px;padding:36px 40px;text-align:center;max-width:360px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.2);transform:scale(.9);transition:transform .25s}
.pop.on .pbox{transform:scale(1)}
.picon{font-size:48px;margin-bottom:10px}
.ptit{font-family:"Playfair Display",serif;font-size:22px;color:var(--td);margin-bottom:8px}
.pmsg{font-size:14px;color:var(--tm);margin-bottom:22px;line-height:1.5}
.pok{background:var(--teal);color:#fff;border:none;border-radius:var(--r);padding:12px 40px;font-family:Lato,sans-serif;font-weight:700;font-size:14px;letter-spacing:1px;cursor:pointer}
.pok:hover{background:var(--td)}
/* toast */
#toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--teal);color:#fff;padding:10px 22px;border-radius:30px;font-weight:700;font-size:13px;opacity:0;pointer-events:none;transition:all .3s;z-index:9999}
#toast.on{opacity:1;transform:translateX(-50%) translateY(0)}
@media(max-width:580px){.fbody,.acts{padding:20px 16px}.row{grid-template-columns:1fr}.date-row{grid-template-columns:1fr 1fr}}
</style>
</head>
<body>
<div class="wrap" id="main-wrap">

<!-- popup -->
<div class="pop" id="pop">
  <div class="pbox">
    <div class="picon">✅</div>
    <div class="ptit">Solicitação Enviada!</div>
    <div class="pmsg">Sua solicitação foi registrada com sucesso.<br>Em breve nossa equipe entrará em contato.</div>
    <button class="pok" onclick="document.getElementById('pop').classList.remove('on')">OK</button>
  </div>
</div>

<!-- banner -->
<div class="banner">
  <img class="logo" src="data:image/jpeg;base64,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" alt="AD Louveira"/>
  <div>
    <div class="bn-title">Assembleia de Deus Louveira</div>
    <div class="bn-sub">Comunicação &amp; Mídia</div>
  </div>
</div>

<!-- header -->
<div class="hdr">
  <h1>Questionário para Solicitação de<br/>Artes / Post / Material para Eventos</h1>
  <p>Preencha todos os campos com atenção antes de enviar</p>
</div>

<!-- form body -->
<div class="fbody" id="fbody">

  <div class="sec">Identificação</div>
  <div class="row">
    <div class="field">
      <label>Congregação <span class="req">*</span></label>
      <select id="congregacao">
        <option value="">Selecione…</option>
        <option>Cavalli</option>
        <option>Colinas São José</option>
        <option>Estiva</option>
        <option>Sede</option>
        <option>Lago Azul</option>
        <option>Monterrey</option>
      </select>
    </div>
    <div class="field">
      <label>Data da Solicitação</label>
      <input id="data-sol" type="text" readonly style="background:#e8f5f4;color:var(--td);font-weight:700;cursor:default;border-color:#b0dbd8"/>
    </div>
  </div>
  <div class="row one">
    <div class="field">
      <label>Solicitante <span class="req">*</span></label>
      <input id="solicitante" type="text" placeholder="Nome completo de quem está fazendo a solicitação"/>
    </div>
  </div>

  <div class="sec">Dados do Evento</div>
  <div class="row one">
    <div class="field">
      <label>Nome do Trabalho / Evento <span class="req">*</span></label>
      <input id="nome-trab" type="text" placeholder="Ex: Culto de Celebração, Conferência de Jovens…"/>
    </div>
  </div>

  <div id="datas-cont"></div>
  <div class="add-row" onclick="addData()">
    <button class="ic add" type="button">+</button>
    <span>Adicionar outra data / horário</span>
  </div>

  <div class="row one">
    <div class="field">
      <label>Local <span class="req">*</span></label>
      <select id="local" onchange="toggleOutros()">
        <option value="">Selecione o local…</option>
        <option value="TODAS AS CONGREGAÇÕES">TODAS AS CONGREGAÇÕES</option>
        <option value="Cavalli — Rua da Liberdade, 41-17 – Jardim Vista Alegre – Louveira/SP">Cavalli — Rua da Liberdade, 41-17 – Louveira/SP</option>
        <option value="Colinas São José — Rua Guerino Furlan, 333 – Louveira/SP">Colinas São José — Rua Guerino Furlan, 333 – Louveira/SP</option>
        <option value="Estiva — Bairro Leitão – Louveira/SP">Estiva — Bairro Leitão – Louveira/SP</option>
        <option value="Lago Azul — Rua Giácomo J Nechio, 114 – Louveira/SP">Lago Azul — Rua Giácomo J Nechio, 114 – Louveira/SP</option>
        <option value="Monterrey — Avenida Escorial, 50 – Louveira/SP">Monterrey — Avenida Escorial, 50 – Louveira/SP</option>
        <option value="Sede — Rua Deolindo Nichi, 105 – Vila Pasti – Louveira/SP">Sede — Rua Deolindo Nichi, 105 – Vila Pasti – Louveira/SP</option>
        <option value="OUTROS">OUTROS (informar endereço)</option>
      </select>
      <div id="outros-sec" style="display:none;margin-top:10px">
        <div class="lhint">📍 Informe o endereço completo: Rua, número, bairro e cidade.</div>
        <input id="outros-inp" type="text" placeholder="Ex: Rua das Flores, 100 – Centro – Louveira/SP"/>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="field">
      <label>Tema <span class="req">*</span></label>
      <input id="tema" type="text" placeholder="Tema do evento"/>
    </div>
    <div class="field">
      <label>Referência Bíblica</label>
      <input id="ref" type="text" placeholder="Ex: João 3:16"/>
    </div>
  </div>

  <div class="sec">Pregador / Ministro</div>
  <div id="preg-cont"></div>

  <div class="sec">Informações Complementares</div>
  <div class="row one">
    <div class="field">
      <label>Mais Informações (caso queira acrescentar)</label>
      <textarea id="mais-info" placeholder="Acrescente aqui qualquer informação adicional relevante…"></textarea>
    </div>
  </div>
  <div class="row one">
    <div class="field">
      <label>Observações (caso tenha)</label>
      <textarea id="obs" placeholder="Observações gerais sobre a arte ou o evento…"></textarea>
    </div>
  </div>

  <div class="sec">Referência Visual / Paleta de Cores</div>
  <div class="field">
    <label>Imagem(ns) de referência de cor ou estilo <em style="font-weight:400;text-transform:none;letter-spacing:0">(opcional)</em></label>
    <div class="ph" style="margin-bottom:10px">🎨 Envie imagens que sirvam de referência para as cores ou estilo da arte desejada. Pode ser um print, paleta, foto ou qualquer inspiração visual.</div>
    <div class="upa" id="dz-paleta">
      <input type="file" id="paleta-input" accept="image/*" multiple onchange="hPaleta(this.files)"/>
      <div class="upi">🖼️</div>
      <div class="upl">Clique ou arraste as imagens aqui<br/><strong>JPG, PNG ou WEBP — múltiplas imagens aceitas</strong></div>
    </div>
    <div class="prev" id="pv-paleta"></div>
    <input id="cores-hid" type="hidden"/>
  </div>

  <div class="sec">Campo Informativo — Prazos</div>
  <div class="ibox">
    <div class="ibox-t">⏱ Prazos para Solicitação de Arte</div>
    <div class="irow"><span class="bdg">✔ IDEAL</span><p><strong>60 dias</strong> de antecedência do evento. Prazo recomendado para garantir qualidade e revisões.</p></div>
    <div class="irow"><span class="bdg or">⚠ MÍNIMO</span><p><strong>30 dias</strong> de antecedência do evento. Prazo aceitável, sujeito à disponibilidade da equipe.</p></div>
  </div>

</div><!-- /fbody -->

<div class="acts">
  <button class="btn btn-p" type="button" onclick="gerarPDF()">📄 Exportar PDF</button>
  <button class="btn btn-p btn-send" type="button" onclick="enviar()">📨 Enviar Formulário</button>
  <button class="btn btn-d" type="button" onclick="limpar()">🗑 Limpar</button>
</div>

</div><!-- /wrap -->
<div id="toast"></div>

<script>
var GAS = 'https://script.google.com/macros/s/AKfycbxnMj6jt6R5O2kvjulKCiHjcHo6ZCl8urGC87hcbZ3KK8p1uAy75NHoIjoZd32uVpXAWA/exec';

// ── Data de hoje ──
(function(){
  var n=new Date();
  var d=String(n.getDate()).padStart(2,'0');
  var mo=String(n.getMonth()+1).padStart(2,'0');
  document.getElementById('data-sol').value=d+'/'+mo+'/'+n.getFullYear();
})();

// ── Datas dinâmicas ──
var numDatas=0;
function addData(){
  numDatas++;
  var c=document.getElementById('datas-cont');
  var row=document.createElement('div');
  row.className='date-row';
  row.dataset.n=numDatas;
  var label1=numDatas===1?'Data do Evento <span class="req">*</span>':'Data do Evento ('+numDatas+'ª)';
  var label2=numDatas===1?'Horário <span class="req">*</span>':'Horário ('+numDatas+'ª)';
  row.innerHTML=
    '<div class="field"><label>'+label1+'</label><input type="date" class="c-data" onchange="renderPreg()"/></div>'+
    '<div class="field"><label>'+label2+'</label><input type="time" class="c-hora" onchange="renderPreg()"/></div>'+
    '<button class="ic rem" type="button" onclick="remData(this)" style="display:none">✕</button>';
  c.appendChild(row);
  updBtns();
  renderPreg();
}
function remData(btn){btn.closest('.date-row').remove();updBtns();renderPreg();}
function updBtns(){
  var rs=document.querySelectorAll('.date-row');
  rs.forEach(function(r){r.querySelector('.ic.rem').style.display=rs.length>1?'flex':'none';});
}

// ── Local outros ──
function toggleOutros(){
  document.getElementById('outros-sec').style.display=
    document.getElementById('local').value==='OUTROS'?'block':'none';
}

// ── Pregadores dinâmicos ──
var fMap={};
function renderPreg(){
  var rows=document.querySelectorAll('.date-row');
  var n=rows.length;
  var cont=document.getElementById('preg-cont');
  // salva valores existentes
  var saved={};
  cont.querySelectorAll('.pb').forEach(function(b){
    var i=parseInt(b.dataset.i);
    var cm=b.querySelector('.cm');
    var rs=b.querySelectorAll('input[type=radio]');
    saved[i]={
      min:cm?cm.value:'',
      sim:rs[0]?rs[0].checked:false,
      nao:rs[1]?rs[1].checked:false
    };
  });
  cont.innerHTML='';
  rows.forEach(function(row,i){
    var dv=row.querySelector('.c-data').value;
    var hv=row.querySelector('.c-hora').value;
    var dlbl=dv?fmtDate(dv):'Data '+(i+1);
    if(hv) dlbl+=' às '+hv;
    var sv=saved[i]||{};
    var mult=n>1;
    var fotoLbl=mult
      ?'Haverá foto do(a) pregador(a)? <em style="font-weight:400;text-transform:none;letter-spacing:0">(opcional)</em>'
      :'A arte terá foto do(a) pregador(a)? <span class="req">*</span>';
    var sc=fMap[i]?'block':'none';
    var block=document.createElement('div');
    block.className='pb';
    block.dataset.i=i;
    block.innerHTML=
      '<div class="pb-title">'+(mult?'📋 Pregador — '+dlbl:'📋 Pregador / Ministro')+'</div>'+
      '<div class="field"><label>'+(mult?'Nome e Cidade — <span style="color:var(--td)">'+dlbl+'</span>':'Nome e Cidade de quem irá ministrar <span class="req">*</span>')+'</label>'+
      '<input type="text" class="cm" placeholder="Nome completo — Cidade/UF" value="'+(sv.min||'')+'"/></div>'+
      '<div class="field"><label>'+fotoLbl+'</label>'+
      '<div class="rg">'+
      '<label><input type="radio" name="fp'+i+'" value="sim"'+(sv.sim?' checked':'')+'onchange="tgFoto('+i+')"/> Sim</label>'+
      '<label><input type="radio" name="fp'+i+'" value="nao"'+(sv.nao?' checked':'')+'onchange="tgFoto('+i+')"/> Não</label>'+
      '</div></div>'+
      '<div id="fs'+i+'" style="display:'+sc+'">'+
      '<div class="ph">📸 Foto com boa resolução, da cintura para cima, ombros aparecendo, sem cortar a cabeça. <strong>Não aceitamos selfies.</strong></div>'+
      '<div class="field" style="margin-top:10px"><label>Foto(s)</label>'+
      '<div class="upa" id="dz'+i+'"><input type="file" accept="image/*" multiple onchange="hFiles(this.files,'+i+')"/>'+
      '<div class="upi">🖼️</div><div class="upl">Clique ou arraste aqui<br/><strong>JPG, PNG ou WEBP</strong></div></div>'+
      '<div class="prev" id="pv'+i+'"></div></div></div>';
    cont.appendChild(block);
    if(fMap[i]) renderPv(i);
  });
}
function tgFoto(i){
  var r=document.querySelector('input[name="fp'+i+'"]:checked');
  var s=document.getElementById('fs'+i);
  if(s) s.style.display=(r&&r.value==='sim')?'block':'none';
}
function hFiles(files,i){
  if(!fMap[i]) fMap[i]=[];
  Array.from(files).forEach(function(f){
    if(!f.type.startsWith('image/')) return;
    var r=new FileReader();
    r.onload=function(e){fMap[i].push({n:f.name,s:e.target.result});renderPv(i);};
    r.readAsDataURL(f);
  });
}
function renderPv(i){
  var p=document.getElementById('pv'+i);
  if(!p) return;
  p.innerHTML='';
  (fMap[i]||[]).forEach(function(f,j){
    var d=document.createElement('div');
    d.className='thumb';
    d.innerHTML='<img src="'+f.s+'" alt="'+f.n+'"/>'+
      '<button type="button" onclick="remF('+i+','+j+')">✕</button>';
    p.appendChild(d);
  });
}
function remF(i,j){if(fMap[i])fMap[i].splice(j,1);renderPv(i);}

// ── Paleta / Referência visual ──
var paletaFiles=[];
function hPaleta(files){
  Array.from(files).forEach(function(f){
    if(!f.type.startsWith('image/')) return;
    var r=new FileReader();
    r.onload=function(e){paletaFiles.push({n:f.name,s:e.target.result});renderPvPaleta();};
    r.readAsDataURL(f);
  });
}
function renderPvPaleta(){
  var p=document.getElementById('pv-paleta');
  p.innerHTML='';
  paletaFiles.forEach(function(f,i){
    var d=document.createElement('div');
    d.className='thumb';
    d.innerHTML='<img src="'+f.s+'" alt="'+f.n+'" title="'+f.n+'"/>'+
      '<button type="button" onclick="remPaleta('+i+')">✕</button>';
    p.appendChild(d);
  });
  document.getElementById('cores-hid').value=paletaFiles.map(function(f){return f.n;}).join(', ');
}
function remPaleta(i){paletaFiles.splice(i,1);renderPvPaleta();}

// ── ENVIAR → Google Sheets ──
function enviar(){
  var cong  =document.getElementById('congregacao').value;
  var solit =document.getElementById('solicitante').value.trim();
  var dsol  =document.getElementById('data-sol').value;
  var nome  =document.getElementById('nome-trab').value.trim();
  var localV=document.getElementById('local').value;
  var localF=localV==='OUTROS'
    ?(document.getElementById('outros-inp').value.trim()||'Outros')
    :localV;
  var tema  =document.getElementById('tema').value.trim();
  var ref   =document.getElementById('ref').value.trim();
  var mais  =document.getElementById('mais-info').value.trim();
  var obs   =document.getElementById('obs').value.trim();

  if(!cong||!nome||!localV){
    toast('Preencha Congregação, Nome do Evento e Local.',true);return;
  }

  var datas=[];
  document.querySelectorAll('.date-row').forEach(function(r,i){
    datas.push('Data '+(i+1)+': '+(fmtDate(r.querySelector('.c-data').value)||'—')+' | '+(r.querySelector('.c-hora').value||'—'));
  });

  var pregs=[];
  var fotosBase64=[];
  document.querySelectorAll('.pb').forEach(function(b,i){
    var m=b.querySelector('.cm')?b.querySelector('.cm').value.trim():'—';
    var fp=b.querySelector('input[name="fp'+i+'"]:checked');
    var ft=fp?(fp.value==='sim'?'Sim':'Não'):'—';
    pregs.push('Pregador '+(i+1)+': '+m+' | Foto: '+ft);
    // Coleta fotos base64 deste pregador
    if(fMap[i] && fMap[i].length>0){
      fMap[i].forEach(function(f,j){
        fotosBase64.push({
          pregador: i+1,
          nome: f.n,
          data: f.s  // base64 completo (data:image/jpeg;base64,...)
        });
      });
    }
  });

  var payload={
    data_solicitacao:dsol,
    congregacao:cong,
    solicitante:solit,
    nome_trabalho:nome,
    local:localF,
    tema:tema,
    referencia:ref,
    datas:datas.join(' || '),
    pregadores:pregs.join(' || '),
    paleta_cores: paletaFiles.length>0 ? paletaFiles.map(function(f){return f.n;}).join(', ') : '',
    paleta_fotos_json: paletaFiles.length>0 ? JSON.stringify(paletaFiles.map(function(f){return {nome:f.n,data:f.s};})) : '',
    mais_info:mais,
    observacoes:obs,
    fotos_json: fotosBase64.length>0 ? JSON.stringify(fotosBase64) : ''
  };

  var btn=document.querySelector('.btn-send');
  if(btn){btn.disabled=true;btn.textContent='⏳ Enviando...';}
  toast('Enviando solicitação...');

  // Envio via iframe oculto — único método que popula e.parameter corretamente no GAS
  // sem precisar de CORS configurado
  var iframeId = 'gas-iframe';
  var existingIframe = document.getElementById(iframeId);
  if (existingIframe) existingIframe.remove();

  var iframe = document.createElement('iframe');
  iframe.id = iframeId;
  iframe.name = iframeId;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  var form = document.createElement('form');
  form.method = 'POST';
  form.action = GAS;
  form.target = iframeId;
  form.style.display = 'none';

  Object.keys(payload).forEach(function(k){
    var inp = document.createElement('input');
    inp.type = 'hidden';
    inp.name = k;
    inp.value = payload[k];
    form.appendChild(inp);
  });

  document.body.appendChild(form);

  iframe.onload = function(){
    if(btn){btn.disabled=false;btn.textContent='📨 Enviar Formulário';}
    document.getElementById('pop').classList.add('on');
    setTimeout(function(){
      form.remove();
      iframe.remove();
    }, 2000);
  };

  // Fallback timeout caso onload não dispare (no-cors)
  setTimeout(function(){
    if(btn && btn.disabled){
      btn.disabled=false;
      btn.textContent='📨 Enviar Formulário';
    }
    document.getElementById('pop').classList.add('on');
    setTimeout(function(){ try{form.remove();iframe.remove();}catch(e){} }, 1000);
  }, 4000);

  form.submit();
}

// ── PDF — constrói clone limpo fora do viewport ──
function gerarPDF(){
  toast('Gerando PDF...');

  var acts=document.querySelector('.acts');
  var pop =document.getElementById('pop');
  acts.style.display='none';
  if(pop) pop.style.display='none';

  var src=document.getElementById('main-wrap');

  html2canvas(src,{
    scale:2,
    useCORS:true,
    backgroundColor:'#f0f4f7',
    logging:false,
    windowWidth:src.scrollWidth,
    windowHeight:src.scrollHeight,
    x:0,y:0,
    scrollX:0,scrollY:0
  }).then(function(canvas){
    var imgData=canvas.toDataURL('image/jpeg',0.92);
    var pdf=new jspdf.jsPDF({unit:'mm',format:'a4',orientation:'portrait'});
    var pw=pdf.internal.pageSize.getWidth();
    var ph=pdf.internal.pageSize.getHeight();
    var ratio=canvas.width/canvas.height;
    var imgW=pw;
    var imgH=pw/ratio;
    var pos=0;
    // Se maior que uma página, adiciona páginas
    if(imgH<=ph){
      pdf.addImage(imgData,'JPEG',0,0,imgW,imgH);
    } else {
      var remaining=imgH;
      var yOffset=0;
      while(remaining>0){
        var sliceH=Math.min(ph,remaining);
        var srcY=yOffset*(canvas.height/imgH);
        var srcH=sliceH*(canvas.height/imgH);
        var sliceCanvas=document.createElement('canvas');
        sliceCanvas.width=canvas.width;
        sliceCanvas.height=srcH;
        var ctx=sliceCanvas.getContext('2d');
        ctx.drawImage(canvas,0,srcY,canvas.width,srcH,0,0,canvas.width,srcH);
        var sliceData=sliceCanvas.toDataURL('image/jpeg',0.92);
        if(yOffset>0) pdf.addPage();
        pdf.addImage(sliceData,'JPEG',0,0,imgW,sliceH);
        remaining-=ph;
        yOffset+=ph;
      }
    }
    pdf.save('Solicitacao-Arte-ADLouveira.pdf');
    acts.style.display='';
    if(pop) pop.style.display='';
    toast('PDF exportado com sucesso! ✓');
  }).catch(function(err){
    console.error(err);
    acts.style.display='';
    if(pop) pop.style.display='';
    toast('Erro ao gerar PDF.',true);
  });
}

// ── Limpar ──
function limpar(){
  if(!confirm('Deseja realmente limpar todos os campos?')) return;
  ['congregacao','local','nome-trab','tema','ref','mais-info','obs','solicitante']
    .forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
  document.getElementById('outros-sec').style.display='none';
  document.getElementById('outros-inp').value='';
  document.getElementById('datas-cont').innerHTML='';
  numDatas=0; fMap={}; paletaFiles=[];
  renderPvPaleta();
  document.getElementById('pv-paleta').innerHTML='';
  addData();
  toast('Formulário limpo ✓');
}

function fmtDate(d){if(!d)return'';var p=d.split('-');return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:d;}

function toast(msg,warn){
  var t=document.getElementById('toast');
  t.textContent=msg;
  t.style.background=warn?'#e08a2a':'#3aafa9';
  t.classList.add('on');
  setTimeout(function(){t.classList.remove('on');},3200);
}

// Init
addData();
</script>
</body>
</html>
