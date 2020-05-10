export const getLocalstorage = (key) => {
    return window.localStorage.getItem(key);
    
}

export const setLocalstorage = (o) => {
    Object.keys(o).map((k)=>{
        if(o[k]) {
            window.localStorage.setItem(k, o[k])
        }        
    });    
}

export const dateFormat = (date, fmt) => {
    var o = { 
        "M+" : date.getMonth()+1,                 //月份 
        "d+" : date.getDate(),                    //日 
        "h+" : date.getHours(),                   //小时 
        "m+" : date.getMinutes(),                 //分 
        "s+" : date.getSeconds(),                 //秒 
        "q+" : Math.floor((date.getMonth()+3)/3), //季度 
        "S"  : date.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt;
}

export const exportFile = (data, fileName) => {
    // 声明blob对象
    const streamData = new Blob([data], { type: 'application/octet-stream' });
    // ie || edge 浏览器
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      // msSaveOrOpenBlob => 提供保存和打开按钮
      // msSaveBlob => 只提供一个保存按钮
      window.navigator.msSaveOrOpenBlob(streamData, fileName);
    } else {
      // 创建隐藏的可下载链接
      const link = document.createElement('a');
      // 下载文件名称
      link.download = fileName;
      // link.style.visibility = 'hidden';
      link.style.display = 'none';
      // 字符内容转变为blob地址
      link.href = window.URL.createObjectURL(streamData);
      // 触发点击
      document.body.appendChild(link);
      link.click();
      // 移除
      document.body.removeChild(link);
    }
  }