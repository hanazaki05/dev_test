# Mux

Mux 意为多路复用(multiplexing)，在目前的科学上网工具中仅 V2Ray 有此功能(2018-03-15注：也有其他软件实现了类似的功能)。它能够将多条 TCP 连接合并成一条，节省资源，提高并发能力。

听众：呃？什么鬼？

好吧，翻译成人话就是：

从前，有一个人叫小白，他是骑行爱好者，还是网购狂人、DIY玩家，因此手中有点闲钱总会网购，也喜欢自己买配件组装自行车。有一次他组装自行车，在网上骑行之家买了头盗、手套、码表，在x诺专卖店买了指拨、变速器，在x特专卖买了车架，在xx车行买了刹车、踏板、坐垫，在xxx买了轮组、曲柄……

    四天后……
    9 点小白手机响了，接通，小白：喂，你好。对方：你好，申x快递，来取一下包裹。小白兴兴冲地取快递了。    
    20 分钟后，小白：喂，你好。对方：你好，韵x，过来取快递。小白又去了。    
    又过 15 分钟，小白：喂，你好。对方：你好，天x，来取快递。小白又去了。    
    又过半个小时，小白：什么快递？对方：圆x，快点来。小白心里：我X。    
    10 分钟后……


如果是你是小白，你累不累？
电脑也差不多，但要干的活要小白多得多：

    浏览器：我要看 V2Ray 配置指南。
    电脑：好，我发起一条 TCP 连接。
    Telegram：我要进 V2Ray 的 Telegram 群向大佬学习。
    电脑：好，发起了连接。
    浏览器：我要看 V2Ray 的手册。
    电脑：好。
    浏览器：我要 Google 搜索 V2Ray 的教程。
    电脑：好。
    浏览器：我要……

如果正常的上网连接可以使用上面小白的例子类比的话，那么，V2Ray 的 Mux 就是：

小黑也与小白一样自行组装自行车，也是网购配件，但他无论什么东西都从xx车行这店里买。
    
    4 天后，小黑接起电话：你好。
    对方：你好，顺x，来取一下快递。
    小黑顺路买了瓶饮料：大哥，天气这么热，喝点水解解渴。嘿嘿，这箱子太沉，辛苦一下帮帮我搬到屋里吧。

Mux 实质上不能提高网速，但对并发连接比较有效，如浏览图片较多的网页，看直播等。从使用效果来说，V2Ray 的 Mux 应该类似于 Shadowsocks 的 TFO(TCP Fast Open)，因为两者的目的都是减小握手时间，只是实现方式不一样。只是 TFO 要设置系统内核才能打开，而 Mux 是纯粹在软件层面上实现，从配置难易度上 V2Ray 较好一些。（2018-09-19 注：刚更新这段话没多久，V2Ray 就加入了对 TFO 的支持，感觉要学不动了～）

## 配置

Mux 只需在客户端开启，服务器会自动识别，所以只给客户端的配置。也就是只要在 outbound 或 outboundDetour 加入 `"mux": {"enabled": true}` 即可：

```json
{
  "inbounds": [
    {
      "port": 1080, // 监听端口
      "protocol": "socks", // 入口协议为 SOCKS 5
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      },
      "settings": {
        "auth": "noauth"  // 不认证
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "vmess", // 出口协议
      "settings": {
        "vnext": [
          {
            "address": "serveraddr.com", // 服务器地址，请修改为你自己的服务器 ip 或域名
            "port": 16823,  // 服务器端口
            "users": [
              {
                "id": "b831381d-6324-4d53-ad4f-8cda48b30811",  // 用户 ID，必须与服务器端配置相同
                "alterId": 64 // 此处的值也应当与服务器相同
              }
            ]
          }
        ]
      },
      "mux": {"enabled": true}
    }
  ]
}

```

#### 更新历史

- 2018-08-30 修改排版、描述
- 2018-11-17 V4.0+ 配置
