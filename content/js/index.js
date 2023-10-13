console.log("成功加载自己开发的插件");
// setTimeout(function(){
//     alert("三秒后");
// },3000);

const findClosestWebComponents = (event) =>  {
	// if (!event.altKey) {
	// 	return
	// }

	// const host = event.composedPath()[0].getRootNode().host
	// if (!host) return

	// alert(host.outerHTML)

	var domain = window.location.hostname;  
	console.log(domain);
}

chrome.runtime.onMessage.addListener((message) => {
	if (message.extension === 'ON') {
		document.addEventListener('click', findClosestWebComponents)
	} else {
		document.removeEventListener('click', findClosestWebComponents)
	}
})