class Utils{
   static dateFormat(date){

        return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
        //estático
    }
}
//server side = PHP, ASP.NET e NODE.JS, quando a linguagem é executada no servidor