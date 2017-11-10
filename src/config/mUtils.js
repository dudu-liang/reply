

export const setStore = (name , content) => {

    if(!name) return;
    if(typeof content != 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);

}

export const getStore = (name) => {

    if(!name) return;
    return window.localStorage.getItem(name);

}

export const clearStore = () => {
    
         window.localStorage.clear();
    
}

export const getQuery = (name)  => {

    if(!name) return;

    
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let exp = /\?/;
    let index = window.location.hash.match(exp).index + 1;
    let r = window.location.hash.substr(index).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;

}