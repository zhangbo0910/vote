'use strict';
const db = uniCloud.database();
const collection = db.collection('hot_list');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {
		page,
		limit
	} = event.paging;
	
	let skip = (page - 1) * limit;
	// 查询
	let res = await collection.skip(skip).limit(limit).orderBy("_id", "desc").get();
	//返回数据给客户端
	return res;
};
