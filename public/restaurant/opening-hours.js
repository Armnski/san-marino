(function(root){
  function getBonnStatus(date=new Date()){
    const parts=new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(date);
    const hour=Number(parts.find(p=>p.type==='hour').value);
    const minute=Number(parts.find(p=>p.type==='minute').value);
    const now=hour*60+minute;
    const open=(now>=660&&now<840)||(now>=1020&&now<1380);
    let detail;
    if(open) detail=now<840?'Bis 14:00 Uhr':'Bis 23:00 Uhr';
    else if(now<660) detail='Öffnet heute um 11:00 Uhr';
    else if(now<1020) detail='Öffnet heute um 17:00 Uhr';
    else detail='Öffnet morgen um 11:00 Uhr';
    return {open,label:open?'Geöffnet':'Geschlossen',detail};
  }
  root.getBonnStatus=getBonnStatus;
  if(typeof module!=='undefined'&&module.exports)module.exports={getBonnStatus};
})(globalThis);
