export function getImagePoster (string,size) {
	//return string ? 'http://192.168.82.13:8888/hzgj/upload'+string : ''

	if(string==null||string==''){
		return '';
	}	
	if(size==null){
		size="414x414";
	}
	var index = string.indexOf('/',7)
	var pre = string.substring(0,index)
	var fix =string.substring(index);
	return pre+'/resize_'+size+fix;
		
}

export function formatDate (str) {
	if(str==null)
		return str;
	else 
		return str.substring(0,10);
}
