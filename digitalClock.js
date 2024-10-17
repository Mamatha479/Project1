function currentDate(){
    var date=new Date();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var am_pm="am";
    var dayImg=["asset/image/img1.jpg","asset/image/img2.jpg","asset/image/img3.jpg","asset/image/img4.jpg","asset/image/img5.jpg","asset/image/img6.jpg"]

    var days=["sunday","monday","tuesday","wednessday","thursday","friday","saturday"];
    day=days[day];
    var month=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    mo=month[mo];
    if(hh==0){
        hh=12;
    }
    if(hh>=12){
        am_pm="pm";
        if(hh>12){
            hh=hh-12;
        }
    }
    if(hh<10){
        hh=`0${hh}`
    }
    if(mm<10){
        mm=`0${mm}`
    }
    if(ss<10){
        ss=`0${ss}`
    }
    document.querySelector("#time").innerHTML=`${hh}:${mm}${am_pm}`
    document.querySelector("#date").innerHTML=`${dd}:${mo}${yy}`
    document.querySelector("#sec").innerHTML=`${ss}`

  setTimeout(currentDate,1000)

}
currentDate()