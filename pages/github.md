---
layout: intro
---

<style>
.image-with-shadow {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 80%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>


# Part1. Github入门

> GitHub是一个面向开源及私有软件项目的托管平台，因为只支持**Git作为唯一的版本库格式**进行托管，故名GitHub。
>
> 想象一下，你开发了一个软件，一开始很顺利。但后来你的好兄弟感觉这个软件不错，想要贡献点代码让它更屌一点。这时候问题来了，他在写代码的同时你也在写，他改完后把代码发给了你，你怎么知道他改了这个软件的哪些功能呢？怎么直观地看他改了哪些东西呢？怎么合并你的代码和他的代码呢？
> <br>
> <br>
> 如果后面又加入了几十个、几百个这样的好兄弟呢？如果又和你隔了十万八千里呢？
>
> 你将你的软件给大家用，大家都说好，但是就是有好多bug，通过什么渠道反馈呢？
> <br>
> <br>
> **你需要GitHub**：<https://www.github.com>

---

将你的代码上传到了GitHub上，每一次改代码都标注好改动了哪些地方，添加了哪些功能，修复了哪些Bug……

**使你的代码一目了然。**

<img class='image-with-shadow' src='/image_resources/7014791d90d5db2ae50f6be433a07766.png' />

---

如果别人要改你的代码，只需要拷贝（Fork）你的代码，然后修修补补，最后再合并（Merge）进去。

<img class='image-with-shadow' src='/image_resources/dffe5c301d2f03590635d331a5bedf37.png' />

---
transition: none
---

如果别人要反馈问题，或者提出新的需求，只需要在问题（Issue）一栏里提问，就会有大佬帮你解答或者实现相应的功能。

<img class='image-with-shadow' src='/image_resources/c4e7a4cc94ad16bbe435c6834da83c90.png' />

---

如果别人要反馈问题，或者提出新的需求，只需要在问题（Issue）一栏里提问，就会有大佬帮你解答或者实现相应的功能。（不好意思，放错图了）应该差不多是这样的：

<img  class='image-with-shadow' src='/image_resources/2a07808377b5fa8abdf6aaef02366e0d.png' />

---
layout: two-cols-header
---

## 怎么逛GitHub？

在了解完GitHub的基本用途后，就可以看一下基本界面和功能了：

::left::

（注册就不讲了，相信大家已经把作业做了）

- 代码界面
- Issue界面
- PR界面
- Wiki界面
- Insight界面
- Release界面
- Discussion界面
- 用户/公司主页
- Explore界面
- Topics

::right::

<img class='image-with-shadow' src="https://th.bing.com/th/id/OIP.eaNty4-p2nNxs-7VAHypzQHaDt?rs=1&pid=ImgDetMain" />

---

### 代码界面

首先我们需要引入一个概念，叫“仓库”，英文名是`Repository`，简称`repo`。仓库顾名思义就是用来放代码的。所谓代码托管，就是托管在仓库里面的。下面就是一个仓库：[VSCode - Github](https://github.com/microsoft/vscode)

<img class="image-with-shadow" src="/image_resources/416431d19fc9c59f1cbd3c52de59bc03.png" />

---
layout: two-cols-header
---

### 代码界面

::left::

我们可以通过这个仓库了解到很多信息，这个界面基本上每个地方都是可以点的：

- Star数量：所以Star其实除了支持作者外，还有**收藏**的意思。
- Watch：关注项目

<img class="image-with-shadow" style="max-width: 90%;" src="/image_resources/cc9fa8a0c82b21f3fcfe0a303f7b235a.png" />

- README.md：包含如何编译，如何下载，如何给VSCode贡献代码等等必要信息。

::right::

<img class="image-with-shadow" style="max-height: 100%;" src="/image_resources/test.png" />

---

**README**：GitHub自动识别渲染的Markdown文件。一个好的readme需要调理清晰，这样就可以让浏览者对这个项目有更深入的了解。

<img class="image-with-shadow" src="/image_resources/1c4a4e599efa1c3db40b352b734d5f56.png" />

---

[**标签（Tags）**](https://github.com/microsoft/vscode/tags)：通常来说Tags就是版本号（稳定版），在GitHub里，你可以找到代码的任何分支中的任何一个版本。

<img class="image-with-shadow" src="/image_resources/Snipaste_2023-10-30_16-02-03.png" />

---

### [Issue界面](https://github.com/microsoft/vscode/issues)

Issue可以干很多事情，包括给开发者反映Bug，向开发者求新功能，包括小白求助等等。

<img class="image-with-shadow" src="/image_resources/issue.png" />

---

可以看出Issue的检索功能和分类功能都十分强大，所以甚至还有在[用Issue写个人博客](https://github.com/yygmind/blog/issues)的程序员。。。

<img class="image-with-shadow" src="/image_resources/d167640f343a6b569678a69c940d7b2e.png" />

---

### [PR界面](https://github.com/microsoft/vscode/pulls)

`Pull Request`，就是你兄弟改完代码后给你提交的东西，简称PR。PR代表着新的功能或者Bug修复，但要不要接受这些PR就要看仓库的拥有者你了。（长得跟Issue界面非常像）

<img class="image-with-shadow" src="/image_resources/2899c41b7c08faf1946da0d287ca351c.png" />

---

比如[下面这个PR](https://github.com/microsoft/vscode/pull/196811)，只提交了一次。

- [**Conversation**](https://github.com/microsoft/vscode/pull/196811)：提交者对自己PR的介绍，以及和开发人员之间的交流。
- [**Commits**](https://github.com/microsoft/vscode/pull/196811/commits)：这个代码被分出去以后经历的提交过程。
- 至于[**Checks**](https://github.com/microsoft/vscode/pull/196811/checks)，就是GitHub的机器人干的事情了，这个不需要了解太多。


<br>

<img class="image-with-shadow" src="/image_resources/ac655c88999e1bf64cac622607ca9d18.png" />

---

再看到 [**File Changed**](https://github.com/microsoft/vscode/pull/196811/files)，就是详细地看到底改了哪些地方：
可以看到这位仁兄给`extensionHostStarter.ts`文件增加了一段代码：

<img class="image-with-shadow" src="/image_resources/1a14e7b133cbdc23a33f53a686846bfd.png" />

---

### [Wiki界面](https://github.com/microsoft/vscode/wiki)

Wiki即维基，就是项目的小型文档。这可不是一般项目都有的，只有比较大型的项目才有维基，比如VSCode。VSCode的维基是给专业人士看的，告诉人们应该怎么贡献代码，如何写VSCode插件等等，但是也有的项目的维基是给用户看的，因项目而异。

<img class="image-with-shadow" src="/image_resources/f2577d4ead8e15e1a646ab14e11422ec.png" />

---

### [Insight界面](https://github.com/microsoft/vscode/pulse)

关于这个项目的统计数据，可以说是非常详细，你可以看到许多贡献者在这个项目里贡献了多少代码，什么时候贡献的。

<img class="image-with-shadow" src="/image_resources/8621e496fc80fd4f57bd9738b6c07b62.png" />

---

[**Contributors**](https://github.com/microsoft/vscode/graphs/contributors)：大佬列表

<img class="image-with-shadow" src="/image_resources/3b137c02035baf5b9820dc1ff149ff9b.png" />

---

[**Forks**](https://github.com/microsoft/vscode/forks)：看看都有谁克隆了这个项目？

<img class="image-with-shadow" src="/image_resources/0ac8e9b75e2b0e3c3c1333dae2970308.png" />

---
layout: two-cols-header
---

那么我能看到Fork列表，可不可以看Star列表呢？答案是肯定的。入口就在项目主页中：

::left::

<img class="image-with-shadow" src="/image_resources/1d975f99c21e44acf5b9de514b6dab45.png" />

::right::

<img class="image-with-shadow" src="/image_resources/9ed65dd54615ffd7b16a7f92f84f1224.png" />

---

### [Release界面](https://github.com/microsoft/vscode/releases)

Release界面是一个项目最有用的界面了，Release就是发布的意思，一个软件稳定了，bug被修得差不多了就会到了发布的时候了。这时候大部分开发者就会把源代码（zip/tar.gz后缀的压缩文件）和编译好的软件都发布在这个页面，要用的话直接下载就行了。我们还可以通过compare功能来比较不同版本之间的差异：

<img class="image-with-shadow" src="/image_resources/ab70e578e4058eb611974627196fcf6d.png" />

---

点进去以后GitHub给你详细地展示了两个版本之间经历了多少次提交，多少个文件改动，甚至哪些代码的增删都给你展示出来。

<img class="image-with-shadow" src="/image_resources/4ca5a09fa0012647846910675782fdc4.png" />

---

### [Discussion界面](https://github.com/yt-dlp/yt-dlp/discussions)

有的项目是有Discussion的，是一个简易的**论坛**，里面有很多求助和公告等等。如果对项目有问题，就可以在Discussion里发出来。

<img class="image-with-shadow" src="/image_resources/5d33a1660a5f7fb67e27256fc7e79fea.png" />

---

### 用户/公司主页

GitHub的用户分为两种，一种是**个人用户**，一种是**企业用户**。
比如这是[Linus Torvalds的个人主页](https://github.com/torvalds)：

<img class="image-with-shadow" src="/image_resources/37a6fa5537a14f7207291634f3a8ad2a.png" />

---

这些绿色的方块代表什么呢？就是你一天里提交的次数，包括提交Issue/PR/代码等等，总之就是你给社区贡献的次数越多，你的方块就越深。当然每个方块都是可以点击的，下面的Activity就会显示作者在这一天内的各种活动。

<img class="image-with-shadow" src="/image_resources/153HGE4-0.png" />

---

组织/公司的页面：

在Repository那一栏里，就是[微软](https://github.com/microsoft/)这个公司创建的仓库（5.9k………

<img class="image-with-shadow" src="/image_resources/b6c5b2fc986e7f6ba7bced16f9a208b5.png" />

---

### [Explore界面](https://github.com/explore)

如果你经常Star仓库的话，它会根据你的偏好给你推送各种仓库，和社交软件一样……

<img class="image-with-shadow" src="/image_resources/d281cd14be3697e5b9cb1dfa63c9bd24.png" />

---

### [Topics](https://github.com/topics/)

Topics就是一个仓库简介下面写的蓝色的类似于标签一样的东西，用于给仓库分类。

<img class="image-with-shadow" src="/image_resources/bcf3cfe6cd411d0818a3943e998079d4.png" />

---

点进[Android Topic](https://github.com/topics/android)以后，它默认的排序就是Most Stars，是完完全全按照star的数量进行排序的。可以在Topic榜上发现很多有用的仓库（轮子）。事实上仓库就是靠添加Topic来曝光自己的（不然你怎么定位一个仓库）

<img class="image-with-shadow" src="/image_resources/topics.png" />

---

### [GitHub Trending](https://github.com/trending)

GitHub Trending，译作GitHub趋势，仓库/作者一天内被star的次数越多，越有可能进这个榜单。这个榜单有很多明星项目，可以当日报每日刷刷。当然也可以筛选/排序，甚至选择语言。

<img class="image-with-shadow" src="/image_resources/f911290b2c65e65be5949cf24a650707.png" />

