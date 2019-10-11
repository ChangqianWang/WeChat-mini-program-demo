# wx
 ①page/index是主界面那条灰线上面部分是轮播图、下面是新闻，这个数据也暂时先不需要吧
 
 ②page/depage是主界面的新闻点击后的界面
 
 ③page/static是对应tabBar中统计界面的文件夹
 
 ④page/table是tabBar里统计那个页面里第二个按钮点击后显示的表单，这个具体还不知道要填什么所以先不需要数据
 
 ⑤page/map/map.wxml这里暂时只显示四个数值经度lat、纬度lng、设备名称name和设备情况condition，是从map.js里拿的数据
然后是map.js文件：marker是接收到gps定位后，将所有设备标在地图上，并提供详细信息。
map.js文件中wx.getLocation的that.setData里更改的数值是从服务器（wx.request里的url）拿到的，map.lat和map.lng是map接口必须拥有的数值（即及纬度）
markers里的是设备的经纬度、设备名称及设备状态，需要从后台拿。

⑥登录和注册：
  page/user/register是注册页面
  page/user/user是登录界面
  这两个里面都有注释
  超级用户我还没搞 搞完之后我再发给你啊
  
  
  老师说现在主要的就是地图的数据
