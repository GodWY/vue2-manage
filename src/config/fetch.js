import { baseUrl } from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	// if (window.fetch && method == 'fetch') {
	// 	let requestConfig = {
	// 		credentials: 'omit',
	// 		method: type,
	// 		headers: {
	// 			// 'Accept': 'application/json',
	// 			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	// 		},
	// 		mode: "no-cors",
	// 		// cache: "force-cache"
	// 	}

		if (type == 'POST') {
			// Object.defineProperty(requestConfig, 'body', {
			// 	value: JSON.stringify(data)
			// })
		}

	// 	try {	
	// 		const response = await fetch(url, requestConfig);
	// 		console.log("this response",response)
	// 		const responseJson = await response.json();
	// 		return responseJson
	// 	} catch (error) {
	// 		console.log("this is an error",error);
	// 		throw new Error(error)
	// 	}
	// } else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			console.log("send", sendData)

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						console.log("resp :", obj)
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	// }
}