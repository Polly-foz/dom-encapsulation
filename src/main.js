const div = dom.find('#test>.red')[0] // 获取对应的元素
console.log(div)
dom.style(div, 'color', 'red') // 设置 div.style.color
console.log('div.style.color:',dom.style(div, 'color')) // 获取div.style.color
dom.style(div,'width','100px') // 设置div.style.width
console.log('div.style: ',dom.style(div)) //获取div.style

const divList = dom.find('.red') // 获取多个 .red 元素
console.log('divList: ',divList)
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素