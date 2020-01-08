window.dom = {
    find(string){
        return document.querySelectorAll(string)
    },
    style(element,name,value){
        if(arguments.length === 1){
            return element.style
        }else if(arguments.length === 2){
            return element.style[name]
        }else if(arguments.length === 3){
            element.style[name] = value
            return element.style[name]
        }
    },
    each(nodeList,fn){
        nodeList.forEach(fn)
    }
}
