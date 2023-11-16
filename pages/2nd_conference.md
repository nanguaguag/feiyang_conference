---
layout: quote
---

# Part2. 爬虫详解

- **简单概括**：自动从网络上收集信息的一种程序。
- **复杂点说**：就是一整套关于数据请求、处理、存储的程序。爬虫涉及到很多关于网络、前端的一些知识，非常杂。今天先讲其中一部分，之后也会分别详细介绍关于数据的采集、处理、存储这三方面的知识。

<br>

> 本课的目的也是，**快速入门**。撇去一切多余的代码，尽量让初学者保持学习的热情。

---
layout: two-cols-header
---

## 0. 爬虫简介

::left::

### Why Python？

爬虫并不是Python独有的，那我们为什么选择python？

~~因为我们只学了python啊~~。主要是因为下面几点：

- **开发效率高，代码简洁**，一行代码就可完成请求，100行可以完成一个复杂的爬虫任务；
- **爬虫对于代码执行效率要求不高**，网站IO才是最影响爬虫效率的。如一个网页请求可能需要100ms，数据处理10ms还是1ms影响不大；
- **非常多优秀的第三方库**，如requests，beautifulsoup，selenium等等；

::right::

### 爬虫是搜索引擎的一部分：

百度搜索的一部分工作，就是运行它自己的爬虫，从上千万的网站，采集到网页，然后存起来，等待你的搜索。

### 爬虫违法吗？

有关互联网法规正在逐步建立和完善中，就目前而言，如果抓取的数据仅供个人使用或者用于科研（机器学习、大数据）一般并无大碍；但如果数据抓取用于商业范畴，就要就事论事了，有可能属于违法也有可能并无大碍。

### 如何学好爬虫？

一句话：**多写代码，从小项目做起，别上来就一个劲地啃教程，消磨掉兴趣。**

---
layout: two-cols-header
---

## 1. 正则表达式

::left::

正则表达式是一种查找以及字符串替换操作。比如，我想要在编辑器里匹配所有的数字，怎么办？这就需要正则表达式了。

几乎所有的高级编程语言和代码编辑器都支持正则表达式。但是这玩意学习难度挺高。。。这里先不做介绍，留为回家作业自学（）

请在GitHub上找正则表达式（Regex）的教程，或者玩那种闯关模式的教学网站，比如 <https://regexlearn.com>

一些小工具：

- [Test RegEx](https://regexr-cn.com/)
- [I Hate Regex](https://ihateregex.io/)
- [常用正则表达式](https://stackoverflow.org.cn/regexdso/)
- [正则表达式可视化工具](https://c.runoob.com/front-end/7625)

::right::

![piYZBqI.png](https://z1.ax1x.com/2023/11/14/piYZBqI.png)

---

### 示例

|网址（URL）|`[a-zA-z]+://[^\s]*`|
|:--:|:--:|
|Email地址|`\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*`|
|QQ号码|`[1-9]\d{4,}`|
|HTML标记(包含内容或自闭合)|`<(.*)(.*)>.*<\/\1>\|<(.*)\/>`|
密码(由数字/大写字母/小写字母/标点符号组成，四种都必有，8位以上)|`(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$`|
|中文及全角标点符号(字符)|`[\u3000-\u301e\ufe10-\ufe19\ufe30-\ufe44\ufe50-\ufe6b\uff01-\uffee]`|
|正整数|`[0-9]*[1-9][0-9]*`|
|负整数|`-[0-9]*[1-9][0-9]*`|

001234.123

---

## 2. HTTP请求

要搞明白如何爬虫，先得知道什么是http请求。

> 拓展阅读：[从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](http://www.dailichun.com/2018/03/12/whenyouenteraurl.html)

当你在浏览器中输入一个网址或点击一个链接时，你实际上发起了一个**HTTP请求**，由以下几个部分组成：

- **HTTP方法**：`GET`（获取资源）、`POST`（提交数据）
- **URL（统一资源定位符）**：<http://www.fyscu.com>
- **HTTP标头**：它包含了一些额外的信息，用于描述请求的细节。下面会详细解释。

HTTP响应：

- **状态码**：你经常能看到浏览器显示`404 not found`、但是其实还有`502 bad gateway`、`403 forbidden`、`200`（成功）、和`500`（服务器错误）等等，其实都是服务器告诉我们的浏览器的。
- **HTTP标头**：它包含了一些额外的信息，用于描述响应的细节。
- **响应正文**：服务器返回的实际内容，可以是HTML页面、JSON数据等。

---
layout: two-cols-header
---

::left::

### HTTP标头

常见的HTTP标头包括：

- **User-Agent**：标识发送请求的用户代理（通常是浏览器）。
- **Content-Type**：指定请求或响应正文的媒体类型，例如text/html或application/json。
- **Content-Length**：指定请求或响应正文的长度。
- **Cookie**：**一段存储在用户计算机上的小型文本**，往往只有几Kb，用于在客户端和服务器之间传递状态信息。cookie可以帮助浏览器**保存登录状态**，也可以在浏览器本地记录用户自定义设置、主题（当然信息量不能太大）。
- **Cache-Control**：指定请求或响应的缓存行为。
- **Authorization**：用于在请求中发送身份验证凭据。

::right::

![](https://pic1.zhimg.com/v2-eda050b298b298fe356e6056bf6d3704_r.jpg)

![](https://pic4.zhimg.com/v2-bc4035d290f428e6c861fdfee94c9057_r.jpg)

---
layout: two-cols-header
---

## 3. JSON格式

::left::

如果我想给服务器发送信息，这个信息应该是什么格式的？这样看起来很合理吧：

```text
姓名：小明
学号：2022123456789
性别：男
```

唉？`key-value`的形式，这不就是**python字典**吗？那我们用字典把它写出来：

```json
{
    "姓名": "小明",
    "学号": 2022123456789,
    "性别": "男"
}
```

**基本上所有JSON都可以转变成Python字典**。传说当年有JSON和XML之争，最后JSON胜在简洁、轻量、易读、能够方便地转化成字典（便于计算机读取），于是JSON成了现在最流行的**数据交换格式**。

::right::

> 与python字典一样，JSON也可以嵌套。
> <br>
> 因此能够胜任很多**复杂的数据**：

```json
[
    {
        "姓名": "小明",
        "学号": 2022123456789,
        "性别": "男"
    },
    {
        "姓名": "小红",
        "学号": 2023123456789,
        "性别": [
            "女",
            "男"
        ]
    },
    {
        "姓名": "小军",
        "学号": 2024123456789,
        "性别": "男"
    }
]
```

---
layout: two-cols-header
---

::left::

## 4. HTML是什么

比如我们输入了 <https://www.zhihu.com>，向飞扬知乎的服务器发送了一个**请求**(request)，那么服务器就会给我们一个**响应**(response)。

这个响应就是一个HTML页面，如果你点击 **「查看网页源代码」** ，就能看到HTML大概长这样：

```html {monaco}
<html>
<head>
    <title>Title</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="http://www.xxx.com/xxx.css" />
    <script src="http://www.xxx.com/xxx.js"></script>
</head>
<body>
    <p class="title">
        <b>bold text</b>
        normal text
    </p>
</body>
</html>
```

::right::

**HTML标签**由很多个节点（Tag）组成。比如`<head>`,`<body>`,`<p>`,`<b>` 。这些节点之间的关系有**父子关系**、**兄弟关系**。

- **父子**关系：子节点被包括在父节点中。比如body内的所有标签，都是body的子节点。
- **兄弟**关系：两个节点位于同一层级，比如我们的所有的p标签。他们的直接父节点都是body。

所以，节点之间就像树一样（DOM树），再复杂的页面也是**标签套标签**形成的。每个标签都可以有自己的一些属性。

比如：`class`、`href`、`src`、`id`。这些属性决定了他们的特点。

---
layout: two-cols-header
---

## 5. 爬虫快速入门

::left::

我们需要安装三个模块，后面会介绍它们的用途：

```bash
pip install requests beautifulsoup4 lxml
```

安装好以后，运行下面这个程序，来爬取微博热搜：

```python
import requests
response = requests.get(
  'https://s.weibo.com/top/summary?cate=realtimehot')
print(response.text)
print(response.status_code)  # 200
```

`requests.get()`函数就对微博热搜的URL进行了一次get请求，注意到我们这里没有携带任何的headers和cookies，`response.text`就是一个字符串，整个网页的内容。

真的有这么简单吗？我们来看看输出了什么：

::right::

输出：

```html
<!DOCTYPE html>
<html>
  <head>
      <meta http-equiv="Content-type"
      content="text/html; charset=gb2312"/>
      <title>Sina Visitor System</title>
  </head>
  <body>
    <span id="message"></span>
    <script type="text/javascript"
    src="/js/visitor/mini_original.js?v=20161116">
    </script>
    <script type="text/javascript">
        一堆JS函数
    </script>
  </body>
</html>
```

怎么一个热搜都没有？这合理吗？为什么我用浏览器就可以？

---

这是因为，你第一次用浏览器访问这个页面的时候，服务器发现你没有cookie，所以也返回给浏览器这个东西，**但是这里面的JS代码让浏览器以游客的身份登录了微博**，并获得了一个cookie，作为身份的一个标识。浏览器有cookie了，下次访问的时候就畅通无阻了。

我们用python爬取了这个url以后，当然没法运行JS代码，那怎么办？

唉，就像我之前提到的，**我们可以「窃取」浏览器的cookie啊，那我们不就处于游客的登录状态了吗**？

于是把cookies加到请求中去：

> 关于如何获取浏览器的cookie...这个马上就说....

```python {all|3-6}
import requests

cookies = {
    'SUB': '_2AkMSD9vLf8NxqwFRmfoUymnraIhywwvEieKkUyoQJRMxHRl-yj9kqkJYtRB6OY_1JJbLkxq_V-5FsAoYEr7yOzTco-_r',
    'SUBP': '0033WrSXqPxfM72-Ws9jqgMF55529P9D9W5JoYoKxZJ1WiP3cS6-NBbL',
}

response = requests.get(
    'https://s.weibo.com/top/summary?cate=realtimehot', cookies=cookies)
print(response.text)
print(response.status_code)  # 200
```

---
layout: two-cols-header
---

::left::

### 指哪打哪

虽然我们能看到微博热搜了，但是是网页的源代码，看起来非常丑，也不是我们想要的数据格式。

那如何在这么长的字符串中匹配到这些微博热搜呢？

曾经，你**只能用正则表达式匹配**，写起来异常繁琐，可读性为0。但是现在有了BeautifulSoup4库，敲代码的幸福感直线上升。不过很多教程都把bs4的门槛拉的很高，这不应该啊，人家本来发明出来就是为了简化爬虫的难度的。。。

我的经验是，过一遍前端知识再来看这个，会好很多。

### CSS选择器

其实，定位/匹配一个或者一堆网页元素，也是CSS解决的痛点之一。那CSS是如何解决的呢？

```html
<p id="text_id" class="big bold">一段文字</p>
```

::right::

比如，匹配这个元素的，可以是：

- `p` 标签选择器
- `#text_id` ID选择器
- `.big` 类选择器（选择了一个类）
- `.bold` 类选择器（选择了一个类）
- `.big.bold` 类选择器（同时选择两个类）

HTML里面不会有两个相同的ID，identification嘛，像身份证一样唯一的。

一个选择器可以匹配很多元素，在CSS里面，这段表示了所有`class="bold"`的元素都加粗变红色：

<p style="font-weight: bold;color: #f92472;">一段文字</p>

```css
.bold {
  font-weight: bold;
  color: #f92472;
}
```

---
layout: two-cols-header
---

### 后代选择器

**后代选择器**的语法是：用空格分隔的多个选择器组合，`A B`

它的作用是在 A 选择器的**所有后代元素**中找到 B 选择器所指的元素。

::left::

```html
<div class="page">
  <div class="banner">
    <p id="banner_text">
      我是标题部分
    </p>
  </div>
  <div class="article">
    <h1>我是文章部分</h1>
    <p>黑化肥发灰，灰化肥发黑</p>
    <p>黑化肥发灰会挥发；灰化肥挥发会发黑</p>
    <p>黑化肥挥发发灰会花飞；灰化肥挥发发黑会飞花</p>
  </div>
  <p class="footer">我是footer脚注</p>
</div>
```

::right::

- `.page p`：表示在`.page`选定的区域里去找p标签，就找到了所有p标签，包括标题、文章、脚注。

假如我们只想查找 `class="article"` 元素里的 `p` 标签呢，就再套一层：

- `.page .article p`：`.page`里面的`.article`里面的p标签。

那如果我**只想选择儿子**，不要这些子子孙孙呢？

**子元素选择器**：用 `>` 表示父子关系。

- `.page > p`：选中「我是footer脚注」

---
layout: two-cols-header
---

::left::

讲了这么多，就是为了给这段代码做铺垫：

```python
### 接上面的代码
from bs4 import BeautifulSoup

soup = BeautifulSoup(response.text, "lxml")
print(soup.select(".td-02 a"))
```

解释一下：

- BeautifulSoup就是从bs4（刚刚下载的python库）中的一个解析函数
- lxml（也是刚刚下的）就相当于告诉BeautifulSoup如何解析：**按照html的语法解析**。
- 解析完了返回一个特殊的格式，存到soup里面
- `soup.select()` 就是选择器语法，我选择了所有含有`class="td-02"`的函数，又继续选择了所有`a`标签。

::right::

输出结果是一个List，里面都是我们想要的链接、热搜标题啥的：

```text
[<a href="/weibo?q=%23%E6%97%B6%E6%97
%B6%E6%94%BE%E5%BF%83%E4%B8%8D%E4%B8
%8B%E7%9A%84%E7%89%B5%E6%8C%82%23&amp;
Refer=new_time" target="_blank">
时时放心不下的牵挂</a>,
...,
...,
<a href="/weibo?q=%23LPL%E9%80%89%E6
%89%8B%E7%BA%A2%E6%AF%AF%E8%A5%BF%E8
%A3%85%E6%9D%80%23&amp;t=31&amp;
band_rank=50&amp;Refer=top" target="_blank">
LPL选手红毯西装杀</a>]
```

那`td-02`，`a`这些是如何找到的呢？

就是**网页调试模式**的功劳了。(大部分浏览器都是F12，审查元素)

---

## 6. 学会使用F12(审查元素)

![80f0ea9e9409b32f649c7427aa2abb30.png](/image_resources/80f0ea9e9409b32f649c7427aa2abb30.png)

---
layout: two-cols-header
---

::left::

### 6.1. 定位元素，复制css选择器

![79151112228e01f663f079bfc948447c.png](/image_resources/79151112228e01f663f079bfc948447c.png)

::right::

可以看到我们想要的元素，有个共同特点就是`class="td-02"`是吧？a标签在它里面，自然而然就想到了这个选择器：

- `.td-02 a`，完美取出所有匹配的元素！

![eb1eb7bfb2cef3a7b0c4380585bddc86.png](/image_resources/eb1eb7bfb2cef3a7b0c4380585bddc86.png)

---

### 6.2. 网络与资源嗅探

![bc7f95fa1e16cc991dc299d3f07fd5aa.png](/image_resources/bc7f95fa1e16cc991dc299d3f07fd5aa.png)

---
layout: two-cols-header
---

### Curl

::left::

- 复制Curl命令

![0749ae4242cbd83323e47e0db90e203e.png](/image_resources/0749ae4242cbd83323e47e0db90e203e.png)

**复制curl**非常有用，因为一个curl就里面包含了你的header、cookie这些，是**一个完整的http请求**，而如果直接用request去请求是没有这些的。

::right::

> 在Linux课上应该会学`curl`命令，命令行里常用的请求工具，但是由于过于丑陋，所以诞生了一些替代品，这里不多说。主要是看看这个小工具：<https://www.curlconverter.com>

![9a8c80908a6dc95e04703d51b345b028.png](/image_resources/9a8c80908a6dc95e04703d51b345b028.png)

---
layout: two-cols-header
---

::left::

获取了curl以后把它粘贴到这个网站里面，

就能获得**完全一样效果**的python代码：

![d5f3d372a77a54bbfd65d3b8880d8474.png](/image_resources/d5f3d372a77a54bbfd65d3b8880d8474.png)

这个代码当然是能跑的，这里的headers看起来很复杂，其实可以不用管它，**重要的是cookie**。

::right::

用了浏览器的cookie，我们就不是未登录状态了，相当于**借用了浏览器的游客身份**。

***

```python
headers = {
    'Cookie': 'your-cookie',
}

response = requests.get(
  'https://s.weibo.com/top/summary?cate=realtimehot',
  headers=headers)
```

***

```python
cookies = {
    'key1': 'value1',
    'key2': 'value2',
}

response = requests.get(
  'https://s.weibo.com/top/summary?cate=realtimehot',
  cookies=cookies)
```

<br>

> cookie本身就是header的一部分。

---
layout: two-cols-header
---

## 7. 处理数据


观察其中一个a标签，发现，链接在**href属性**里面，标题在`<a></a>`中间。

```html
<a href="/weibo?q=%23%E6%97%B6%E6%97%B6%E6%94%BE%E5%BF%83%E4%B8%8D%E4%B8%8B%E7%9A%84%E7%89%B5%E6%8C%82%23&amp;Refer=new_time" target="_blank">时时放心不下的牵挂</a>
```
::left::

`Beautifulsoup` 提供了很多方法来获取这些数据：

```python
>>> soup = BeautifulSoup('<a href="/weibo?\
q=%23%E6%97%B6%E6%97%B6%E6%94%BE%E5%BF%83\
%E4%B8%8D%E4%B8%8B%E7%9A%84%E7%89%B5%E6\
%8C%82%23&amp;Refer=new_time" target="_blank">\
时时放心不下的牵挂</a>', "lxml")
>>> print(soup.prettify())
<html>
 <body>
  <a href="/weibo?q=%23%E6%97%B6%E6%97%B6%E6\
%94%BE%E5%BF%83%E4%B8%8D%E4%B8%8B%E7%9A%84\
%E7%89%B5%E6%8C%82%23&amp;Refer=new_time"
target="_blank">
   时时放心不下的牵挂
  </a>
 </body>
</html>
```

::right::

```python
>>> tag = soup.a
>>> tag
<a href="/weibo?q=%23%E6%97%B6%E6%97%B6%E6%94\
%BE%E5%BF%83%E4%B8%8D%E4%B8%8B%E7%9A%84%E7%89\
%B5%E6%8C%82%23&amp;Refer=new_time"
target="_blank">时时放心不下的牵挂</a>
>>> type(tag)
<class 'bs4.element.Tag'>
>>> tag.string
'时时放心不下的牵挂'
>>> tag.attrs
{'href': '/weibo?q=%23%E6%97%B6%E6%97%B6%E6%94\
%BE%E5%BF%83%E4%B8%8D%E4%B8%8B%E7%9A%84%E7%89\
%B5%E6%8C%82%23&Refer=new_time',
'target': '_blank'}
>>> tag.attrs['href']
'/weibo?q=%23%E6%97%B6%E6%97%B6%E6%94%BE%E5%BF\
%83%E4%B8%8D%E4%B8%8B%E7%9A%84%E7%89%B5%E6%8C\
%82%23&Refer=new_time'
>>>

```
---
layout: two-cols-header
---

### Python取数据

::left::

> 这里需要注意的是，soup里面包含body、html节点，也就是说对于**不标准的HTML字符串**，BeautifulSoup可以自动更正格式（lxml解析器带来的好处）

- `tag.string`：是这个标签里面的所有文本。
- `tag.attrs`：是一个字典，一个标签所有的属性。
- `tag.a`：在tag里面找到的第一个a标签。

```python
list_of_all_tags = soup.select(".td-02 a")

for tag in list_of_all_tags:
    text = tag.string
    href = "https://s.weibo.com" + tag.attrs["href"]
    result = "- [{}]({})".format(text, href)
    print(result)
```

::right::

输出的就是我们喜闻乐见的markdown格式链接：

<div style="overflow: auto; width: 40%;">

```markdown
- [习主席旧金山之行](https://s.weibo.com/weibo?q=%23%E4%B9%A0%E4%B8%BB%E5%B8%AD%E6%97%A7%E9%87%91%E5%B1%B1%E4%B9%8B%E8%A1%8C%23&Refer=new_time)
- [中美元首会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%23&t=31&band_rank=1&Refer=top)
- [孙颖莎出现时全场的反应](https://s.weibo.com/weibo?q=%E5%AD%99%E9%A2%96%E8%8E%8E%E5%87%BA%E7%8E%B0%E6%97%B6%E5%85%A8%E5%9C%BA%E7%9A%84%E5%8F%8D%E5%BA%94&t=31&band_rank=2&Refer=top)
- [纯享版歼10C飞行表演大片](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E4%BA%AB%E7%89%88%E6%AD%BC10C%E9%A3%9E%E8%A1%8C%E8%A1%A8%E6%BC%94%E5%A4%A7%E7%89%87%23&t=31&band_rank=3&Refer=top)
- [孙颖莎虽迟但到](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%99%BD%E8%BF%9F%E4%BD%86%E5%88%B0%23&t=31&band_rank=4&Refer=top)
- [竞燃之夜](https://s.weibo.com/weibo?q=%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C&t=31&band_rank=5&Refer=top)
```

</div>

- [习主席旧金山之行](https://s.weibo.com/weibo?q=%23%E4%B9%A0%E4%B8%BB%E5%B8%AD%E6%97%A7%E9%87%91%E5%B1%B1%E4%B9%8B%E8%A1%8C%23&Refer=new_time)
- [中美元首会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%23&t=31&band_rank=1&Refer=top)
- [孙颖莎出现时全场的反应](https://s.weibo.com/weibo?q=%E5%AD%99%E9%A2%96%E8%8E%8E%E5%87%BA%E7%8E%B0%E6%97%B6%E5%85%A8%E5%9C%BA%E7%9A%84%E5%8F%8D%E5%BA%94&t=31&band_rank=2&Refer=top)
- [纯享版歼10C飞行表演大片](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E4%BA%AB%E7%89%88%E6%AD%BC10C%E9%A3%9E%E8%A1%8C%E8%A1%A8%E6%BC%94%E5%A4%A7%E7%89%87%23&t=31&band_rank=3&Refer=top)
- [孙颖莎虽迟但到](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%99%BD%E8%BF%9F%E4%BD%86%E5%88%B0%23&t=31&band_rank=4&Refer=top)
- [竞燃之夜](https://s.weibo.com/weibo?q=%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C&t=31&band_rank=5&Refer=top)

---

## 8. 爬虫伪装

网站可以通过IP和header确认你的身份。一旦发现你这个人不停地访问我的网站，完全可以把你这个IP封掉，于是**IP池**、**伪造请求头**这些技巧就诞生了。

- IP池的目的就是**允许我都用不同的IP**轮流去请求，服务器就会认为这个爬虫是很多人，就不会封我。再说了，封了一个IP，我不是还有一堆吗？当然，IP池很贵，一般的爬虫都不会用这个。
- 伪造请求头：这个更容易一些，目的就是模仿不同的人的请求（请求头里有你的浏览器、Referer等关键信息，如果每次都用同一个请求头，请求几千次，就容易露馅）`my-fake-useragent`是一个很好的库。

```bash
$ pip install my-fake-useragent
```

```python {monaco}
from my_fake_useragent import UserAgent
import requests

ua = UserAgent(family='chrome')
res = ua.random()
url = "https://www.baidu.com"
headers = {"User-Agent": res}
response = requests.get(url=url, headers=headers)
print(response.status_code)  # 打印状态码
print(response.request.headers)  # 打印自己的请求头
```
