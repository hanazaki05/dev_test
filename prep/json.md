# V2Ray 配置格式

V2Ray 的配置文件为 JSON 格式，Shadowsocks 的配置也是 JSON 格式，但是 V2Ray 由于支持许多功能不可避免导致配置相对复杂一些。因此在实际配置前建议还是了解一下 JSON 的格式。
关于 JSON 的格式，可以看 [V2Ray文档](https://www.v2ray.com/chapter_02/)，里面的介绍简单明了，只是配置一下 V2Ray 只看这里足够了（我在 Google 上搜索关于 JSON 的文章比较啰嗦，估计是给程序员看的，咱没必要弄的晕头转向的。另外针对文档的介绍我认为还要补充几点：

- JSON 所有标点符号都要用半角符号（英文符号）
- 所有字符串都要加双引号 `" "`，键是字符串，所以键也要加双引号，数字不用加双引号
- 布尔类型也不用加双引号，布尔值只有两个就是 true 和 false，意思就是真（是）和假（否）
- 对象没有顺序，即大括号 `{ }` 括起来的内容顺序是怎么样都没关系，如

  ```json
  {
    "ip":"8.8.8.8",
    "port":53,
    "isDNS":true
  }
  ```

  ```json
  {
    "ip":"8.8.8.8",
    "isDNS":true,
    "port":53
  }
  ```

  上面两个 JSON 实际上是等效的


  #### 更新历史

  - 2018-04-05 Update
  - 2018-07-08 Update
  
