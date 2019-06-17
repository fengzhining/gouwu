## 用户列表 users = [user1, user2, ...]
```javascript
user1 : {
	uid: '用户id',
	phone: '手机号用户登录账号',
	pwd: '用户密码',
	registerTime: '注册时间 2019-03-10 12:10:19'
}
```

## vue-axios
```txt
官方 https://www.npmjs.com/package/vue-axios

安装 axios vue-axios
npm i axios vue-axios -S

在main.js使用 vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

以上配置完成后可以在其他组件使用axios
this.axios(options)
this.$http(options)

vue-axios: ajax请求, 返回一盒promise

axios({
	methods: 请求类型, //(get 或者 post)

	data: 参数字符串或者对象 //name=kevin&age=10,

	url: 请求路径
}).then(result => {
		//请求成功后, 响应数据保存在回调函数第一个参数中

	})
	.catch((err) => {
			//请求失败
		})

```

### 多个点击事件
```txt
原生点击
@click.native

```

```txt
保存用户登录状态
loginInfo: {
	userid: 手机号,
	loginStatus: true
}
```

```txt
购物车
{
id: 商品id
type: 商品类型
name: 商品名称
price: 商品价格
count: 商品数量
color: 商品规格
time: 添加时间
thumbnail: 商品缩图片
userId: 用户id
}

```

```
window.onload = function () {
	//调用时this才会指向
}

window.onload = () => {

	//箭头函数的this在定义时已经指向

}
```

```txt
逻辑删除: 假删
物理删除: 真删
```
```txt
0: 待发货
1: 已发货
2: 已收货

order
{
	address: 地址
	phone: 联系电话
	username: 联系人姓名
	userId: 联系人id
	count: 商品数量
	name: 商品名称
	color: 商品规则
	price: 商品价格
	thumbnail: 商品缩略图
	id: 商品
	orderId: 订单id
	orderTime: 订单时间
	status: 订单状态
}
```

```txt
地址管理
address
{
	id: 地址id,
	userId: 用户id,
	name: 收货人,
	tel: 收货电话,
	province: 省份,
	city: 市,
	county: 区县,
	addressDetail: 详细地址,
	isDefault: 默认,
	areaCode: 地区编号,
	country: 国家,
	postalCode: 邮编,
	addTime: 添加地址日期,
	editTime: 编辑地址日期
	address: 全称地址
}
```

```txt
	搜索历史
	searchHistory

	{
		userId: ['关键词1', '关键词2'],
		userId: ['关键词1', '关键词2'],
		userId: ['关键词1', '关键词2']
	}
```

https://github.com/fengzhining/gouwu.git

margin-top: calc(~"1.3333rem / 2 - 9PX"); vue打包无法识别 9PX