[toc]

本文是一篇面向全体小白的文章，图文兼备。为了让小白们知道如何使用GitHub，我努力将本文写得通俗易懂，尽量让刚刚上网的小白也能明白。所以各位程序员们都可以滑走了～

# 啥是GitHub？

百度百科会告诉你，

> GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。

啊？托管平台？Git？这都是什么玩意？其实并不复杂，大家可别被这些名词吓跑了，广大程序员特别喜欢造一些很高大上的词语，但这些词语背后往往是相当简单的概念。。。

要知道GitHub究竟是干什么用的，我们必须知道GitHub的使用群体都有哪些。程序员，大学生，企业……都是GitHub的用户。这些人有一个共同的特点，就是：**需要写代码**。

想象一下，你开发了一个软件，一开始很顺利。但后来你的好兄弟感觉这个软件不错，想要贡献点代码让它更屌一点。这时候问题来了，他在写代码的同时你也在写，他改完后把代码发给了你，你怎么知道他改了这个软件的哪些功能呢？怎么直观地看他改了哪些东西呢？怎么合并你的代码和他的代码呢？

如果后面又加入了几十个、几百个这样的好兄弟呢？如果又和你隔了十万八千里呢？

你将你的软件给大家用，大家都说好，但是就是有好多bug，通过什么渠道反馈呢？

这时候你的救星——GitHub，出现了，你将你的代码上传到了GitHub上，每一次改代码都标注好改动了哪些地方，添加了哪些功能，修复了哪些bug，这样就会使你的代码一目了然。

![7014791d90d5db2ae50f6be433a07766.png](:/59e7d4e3f93a4db69c1c7e6cc594e73e)

如果别人要改你的代码，只需要拷贝（Fork）你的代码，然后修修补补，最后再合并（Merge）进去。

![dffe5c301d2f03590635d331a5bedf37.png](:/4c24327708c94db7b12f5e9cf4e2fed9)

如果别人要反馈问题，或者提出新的需求，只需要在问题（Issue）一栏里提问，就会有大佬帮你解答或者实现相应的功能。

![c4e7a4cc94ad16bbe435c6834da83c90.png](:/574eff4f5e194769ae9610a613bef765)

（大雾，发错了）

应该差不多是这样的
![2a07808377b5fa8abdf6aaef02366e0d.png](:/fd76631229a342648784ac5c9aae7dec)

# 怎么逛GitHub？
在了解完GitHub的基本用途后，就可以看一下基本界面和功能了。

## 注册

首先点击[注册链接](https://github.com/signup?source=login)，填入邮箱：
![fa505f37e4000072820737b86c4eb17e.png](:/c6125567e1b447fbadc39cd596a42952)
填入密码和用户名：
![d7572a4159d94461b2c4abd830687653.png](:/ec09c4b5526544bf922b621ef5a100bf)
接着会有一个验证你是否是人类的环节，就是通常所说的验证码。
![12ea607d323f28ac91932e38e3612bb1.png](:/988f65bc793944608d8930a5d5a48ffb)
全部完成后即可创建账户，

验证好邮箱后GitHub会给你做个问卷，如实回答即可。当然也可以跳过哦。
![4104e59af2ec0e721b1f3864857f2729.png](:/5a959f4e8009421891086bf089707fbb)

接下来的主页就是这个界面啦。
![ef4dc8050f76dafe1da56c3d0d83d9a0.png](:/43e1807668254fbb8b4eefec13244d42)

你别看GitHub这英文很多，其实来来去去就这几个英文单词，记下意思就和中文差不多了。

## 代码界面

首先我们需要引入一个概念，叫“仓库”，英文名是`repository`，简称repo。仓库顾名思义就是用来放代码的。所谓代码托管，就是托管在仓库里面的。

下面就是一个仓库：[vs code的仓库链接](https://github.com/microsoft/vscode)

![416431d19fc9c59f1cbd3c52de59bc03.png](:/1af168a8deb64bb8a036f4857cc23237)
我们可以通过这个仓库了解到很多信息。

这个界面基本上每个地方都是可以点的……

![test.png](:/8471724d9ef34d4bb230dd5ae3881a6f)

star数量是我首先关注的点，在点star时，可以点击左边的下拉箭头选择你设定的不同栏目，所以star其实除了支持作者外，还有**收藏**的意思。

至于watch，其实要比star的人少很多，毕竟有谁希望提交个代码就要被通知一下呢？不过发布一个新版本还是有必要知道一下的，这样就可以体验最新版本。于是我们可以这样设置：
![cc9fa8a0c82b21f3fcfe0a303f7b235a.png](:/95162dd853644b89a24169a68f345fc8)
这样当vscode发布一些新版本的时候，GitHub就会发邮件通知你。

那如果我需要**了解更多信息**呢？那就需要看`readme.md`了。
所谓readme，其实就是仓库里的一个文件，叫readme.md（简称readme），然后GitHub自动识别了这个文件，直接在仓库页面显示了。

![1c4a4e599efa1c3db40b352b734d5f56.png](:/5835843ce13e43b8b52353a43af34357)

看完，我们可以可以知道（如果英文好的话）如何编译，如何下载，如何给vscode贡献代码等等。这样就可以对这个项目有更深入的了解。一个好的readme需要调理清晰，当然这不是我们小白需要考虑的事情了……

接下来讲一下什么是**分支**（branch）和**标签**（tag）。当你和队友们在写一个软件时，你的队友有不同的想法，如果他的想法不能说服你，他就可以直接做一个他的分支，这样你的代码因为他的想法就变成了两个分支。比如当年Vim和neovim，一个小伙子本来想给Vim做贡献的结果Bram没接受他的Pull request，于是小伙子直接Fork了Vim，成立了neovim，所以neovim其实是Vim的一个分支，当然这属于比较激进的做法。此外如果一个项目有一个长期维护版本（long time support简称LTS），那么也可以从仓库里分支出来，单独进行维护。

标签呢就很好理解了，就是你写着写着觉得这版代码很稳定很不错，就搞一个标签。通常来说tags就是版本号，在GitHub里，你可以找到代码的任何分支中的任何一个版本：

![Snipaste_2023-10-30_16-02-03.png](:/9214141c43d449148a8c12fc235d432a)


## Issue界面
另外一个很重要的功能就是GitHub的issue了。 Issue可以干很多事情，包括给开发者反映bug，向开发者求新功能，包括小白求助等等。
我们点击上面代码界面上方工具栏的issue，就可以看到：

![issue.png](:/e00f08f6c2b44035ace0936b1899a9c8)

可以看出issue的检索功能和分类功能都十分强大，所以甚至还有在用issue写个人博客的程序员。。。

![d167640f343a6b569678a69c940d7b2e.png](:/d3690f7e88984abbb9968592c206b835)

## PR界面
`Pull Request`，就是你兄弟改完代码后给你提交的东西，简称PR。PR代表着新的功能或者bug修复，但要不要接受这些PR就要看仓库的拥有者你了。

PR界面长得跟issue界面非常像：
![2899c41b7c08faf1946da0d287ca351c.png](:/2fca3ae949f94370bd77116a27527229)
但我点进去一个PR，界面就完全不同了。

conversation就是提交者对自己PR的介绍，以及和开发人员之间的交流。

commits就是这个代码被分出去以后经历的提交过程。

比如下面这个PR，只提交了一次。
![ac655c88999e1bf64cac622607ca9d18.png](:/372574c0424e47728d9f0ac17e73a642)
再看到file changed，就是详细地看到底改了哪些地方：
可以看到这位仁兄给`extensionHostStarter.ts`文件增加了一段代码：
![1a14e7b133cbdc23a33f53a686846bfd.png](:/e5768fa4048c48d295b7638eacbb6563)

至于Checks，就是GitHub的机器人干的事情了，这个不需要了解太多。

## Wiki界面
Wiki即维基，就是项目的小型文档。这可不是一般项目都有的，只有比较大型的项目才有维基，比如vscode。vscode的维基是给专业人士看的，告诉人们应该怎么贡献代码，如何写vscode插件等等，但是也有的项目的维基是给用户看的，因项目而异。
![f2577d4ead8e15e1a646ab14e11422ec.png](:/b84f5d1f7f814971b3c5380a28237724)

## insight界面
另外一个很重要的功能就是insight界面。这个给你了很多关于这个项目的统计数据，可以说是非常详细，你可以看到许多贡献者在这个项目里贡献了多少代码，什么时候贡献的。
![8621e496fc80fd4f57bd9738b6c07b62.png](:/b2865cfb578e43a58de8c5c1cd5c5849)

这里我愿称之为：大佬列表
![3b137c02035baf5b9820dc1ff149ff9b.png](:/37e40c9dcb2a4f178a57f75f1f19a7d2)

这是这个项目的Fork列表，看看都有谁抄袭（bushi）了这个项目：
![0ac8e9b75e2b0e3c3c1333dae2970308.png](:/11e8118d26ae473c8fffa11a2f6cb1dc)

其他栏目我就不一一列举了。

那么我能看到Fork列表，可不可以看star列表呢？答案是肯定的。入口就在项目主页中：
![1d975f99c21e44acf5b9de514b6dab45.png](:/e9055e1e5c6a451a82dd095db6989a99)

点开后就是：

![9ed65dd54615ffd7b16a7f92f84f1224.png](:/7d09d8bd8e4441f6a52b3336d1c45241)


## release界面
release界面是一个项目最有用的界面了，可谓伸手党的温床，白嫖怪的乐园。release就是发布的意思，一个软件稳定了，bug被修得差不多了就会到了发布的时候了。这时候大部分开发者就会把源代码（zip/tar.gz后缀的压缩文件）和编译好的软件都发布在这个页面，要用的话直接下载就行了。

此外我们还可以通过compare功能来比较不同版本之间的差异：
![ab70e578e4058eb611974627196fcf6d.png](:/21c23a5bf9304a8da9349018afcf0d74)
点进去以后GitHub给你详细地展示了两个版本之间经历了多少次提交，多少个文件改动，甚至哪些代码的增删都给你展示出来。
![4ca5a09fa0012647846910675782fdc4.png](:/c93cd33f2f724c2c93d65e0fe528091f)


## discussion界面
![5d33a1660a5f7fb67e27256fc7e79fea.png](:/12f2a09f65df43c886bc56dc8f1d19e1)
有的项目是有discussion的，是一个简易的论坛，里面有很多求助和公告等等。如果对项目有问题，就可以在discussion里发出来。

## 用户/公司主页
GitHub的用户分为两种，一种是个人用户，一种是企业用户。
比如这是Linus torvalds的个人主页
![37a6fa5537a14f7207291634f3a8ad2a.png](:/eaff1358fd5143c9bffd5b87fd67c049)
这些绿色的方块代表什么呢？就是你一天里提交的次数，包括提交issue/PR/代码等等，总之就是你给社区贡献的次数越多，你的方块就越深。当然每个方块都是可以点击的，下面的activity就会显示作者在这一天内的各种活动。

![153HGE4-0.png](:/5a0bc45fe53b4319a896f475d898012e)
（雾）

组织/公司的页面：
![b6c5b2fc986e7f6ba7bced16f9a208b5.png](:/4bde64ad4d4844309cee1250f8fbfdef)
组织/公司的主页就和个人主页很不一样了。但是我们的主要关注点在repository那一栏里，就是微软这个公司创建的仓库：
![repo.png](:/f70a22e3c0694406b783401325b9f26f)

可以看出巨硬不愧是巨硬，能同时维护这么多仓库，这几年对开源社区也贡献了不少。

## explore界面

explore界面就在：https://github.com/explore
![d281cd14be3697e5b9cb1dfa63c9bd24.png](:/9546315de23d4bdfb1ae9ba56de43ced)
我这个号由于没有star任何仓库，所以它没有东西给我看。如果你经常star仓库的话，它根据你的偏好给你推送各种仓库，是不是感觉和某某社交软件操作一样（笑），但个人感觉这推送质量我不是很认可……

Topics就是一个仓库简介下面写的蓝色的类似于标签一样的东西，用于给仓库分类。
![bcf3cfe6cd411d0818a3943e998079d4.png](:/4c102a87238c415c96c9039ca2522dbb)
点进一个topic以后，它默认的排序就是Most stars，是完完全全按照star的数量进行排序的，

![topics.png](:/8c469c248f89488c9351cbd3ae6c5f16)

这样我们就可以进入一个topic，按star排序，就可以发现很多有用的仓库（轮子），我通过这一功能发现了许多好用的仓库，而且事实上仓库就是靠添加topic来曝光自己的（不然你怎么定位一个仓库）

接下来就是著名的**GitHub Trending**了，
![f911290b2c65e65be5949cf24a650707.png](:/4513779dc23543ef80b6640d7801e900)

GitHub trending，译作GitHub趋势，仓库/作者一天内被star的次数越多，越有可能进这个榜单。这个榜单有很多明星项目，可以当日报每日刷刷。当然也可以筛选/排序，甚至选择语言。

collection就是GitHub的官方选集了，里面有很多正在维护的精品项目，而且还做好了分类，值得一看。

# 如何参与贡献
说到参与社区建设，就不得不提markdown了。

## Markdown
什么是markdown？它其实就是一个非常简单的语法，但可以让你打字更加方便，比如我这篇文章就是用markdown写的。markdown的流行GitHub简直功不可没，具体语法可以参考：https://zhuanlan.zhihu.com/p/270716843

强烈强烈建议各位学一下markdown，简直就是网页上的word，非常有用而且简单，5分钟就能学会。

## 创建仓库
首先需要配置一下token，进入[Token生成中心](https://github.com/settings/tokens)
![e29e0c8f1bfe3344e1d65818f3a3151f.png](:/a441e3c7f3194a9b84734b07a4d4d4ed)
然后会让你登陆一遍，接着就到了设置token的页面
![2cb552cc47b55dfa2fabd97e336fb183.png](:/10468206266f4ea9ad09897e6dc51aee)
其实只要选择`repo`就够用了，接下来点击`generate token`,一个token就生成好了，但注意这个只显示一次，要好好保存。
![c7b76815ce94e6c0dd74db940df48788.png](:/3356524f785b4c1f9c7e9868832414fb)

设置完token后就可以创建仓库了：
![c91c27def4bede5868cc3623afeae4eb.png](:/0fd6b8772cfa4221981f38ef74124373)

于是我们来到这个页面。
![create.png](:/8d008497785642dea2420c2c07076b02)
我新建了一个helloWord仓库，注意添加一下readme file，这样就可以创建一个仓库。
![99a8de26dff757db3bcb0761b57759d1.png](:/03c56996d3e34504ac90a7b144f2c5ef)

那如果我要改一下这个readme呢？注意这只是在GitHub这个网站上有这个仓库，而写代码则是在本地进行的，那么我们就需要将GitHub仓库和本地代码联系起来。所以**git**就闪亮登场了：

Windows用户可以安装git客户端，Mac用户可以通过homebrew安装：
`brew install git`

具体安装方法可以百度一下，每个系统都不太一样。

接下来在cmd或者终端里执行：
```
$ git clone https://github.com/meIonhu/HelloWord
Username: 你的用户名
Password: 刚刚生成的token
```

这样你就在本地有一个名叫`HelloWord`的文件夹了。这个文件夹可不是一般的文件夹，这是已经初始化的git仓库。因为这个文件夹里有一个叫`.git`的隐藏文件夹，就是git的所有设置和你的提交记录。当然如果你把`.git`删掉的话这就跟普通的文件夹没什么区别了。

然后你可以在这里面一通乱改，最后将代码上传到GitHub：
```
git add .
git commit -m "对于这次提交你想说的话"
git push -u origin main
```

这三段命令下去，你的改动记录就会被上传到GitHub上面，你的仓库也能看到你刚刚的commit了。

# 进阶技能
## Github gists
gist入口：
![d8afcd8c98bda638bb4a9f5c8331e900.png](:/42047bc2f396485f9f885f066d420543)
什么是gists？其实就是GitHub推出的一个小型的代码托管服务，它针对代码片段进行托管。比如你有一个很好的代码片段，需要时常用一下但写起来又麻烦，就可以用gists来备忘，gists还提供了很多丰富的标签等功能，帮助对代码片段进行分类。
![cd15061707c8f0c6a8fc25a720c66b44.png](:/4ea2dc0d8343490a94d2180cbb0f7be7)

## Github搜索进阶
*图形化的高级搜索入口：
https://github.com/search/advanced*

基本命令：

**In修饰词：**

`xxx in:name`：名字限定有xxx的仓库

`xxx in:description`：描述限定有xxx的仓库

`xxx in:topics`：在topics里有xxx的仓库

`xxx in:readme`：在readme里有xxx的仓库

**用户限制：**

`user:example`：获取所有来自example用户的仓库

`org:example`：获取所有来自example组织的仓库


**size修饰词**

`size:>n`：获取所有占用空间大于n kb的仓库

`size:<n`：获取所有占用空间小于n kb的仓库

`size:n1..n2`：获取所有占用空间在n1 kb到n2 kb之间的仓库

**star修饰词**
`size:>n`：获取所有star大于n的仓库

`size:<n`：获取所有star小于n的仓库

`size:n1..n2`：获取所有star在n1到n2之间的仓库

**license修饰词**

`license:apache-2.0`: 获取所有license是apache-2.0的仓库

**language修饰词**

`language:rails language:javascript`：获取所有语言是javascript的匹配仓库

**NOT关键词**

`NOT cat`：排除所有含cat的搜索结果。

![3dbc4f0d5707488f55523529f824c85f.png](:/2a6e9413a1db4737af3e5006ae7053ac)

修饰词还有很多，但是基本语法大同小异，具体可以参考[github文档](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)。

学废了嘛？让我们来实操一下吧～

很多同学会很好奇，GitHub star数top10的仓库是哪些呢？其实完全不需要爬取所有仓库，只需要简单地搜索一下就可以了：

在搜索栏键入：`stars:>200000`
![52659773a128bf246752ecd1403dfc74.png](:/3dd06137c6de45638d809be7c2eee7ed)

就得到最受欢迎的仓库名单了。

## GitHub快捷键
`ctrl+K`可直接打开命令栏：
![4e1879fe14d8efacf90371f9571c191a.png](:/aaa19931de074163b05abb054e9737ad)

默认是快捷跳转，或者搜索，我们通过键入`>`可以快速让GitHub执行我们的命令：
![a620a885a930a9a9ff8b44234c0a40a4.png](:/3c13bcc0fb584482ad7c68929d106830)

此外还通过g键可以快速跳转到各种地方:

`g d`:跳转到首页

`g n`:跳转到通知

`g i`:跳转到issue

`g p`:跳转到PR

`g a`:跳转到Actions

`g b`:跳转到Projects

`g w`:跳转到Wiki

`g g`:跳转到Discussions


参考：
https://jdhao.github.io/2020/01/12/vim_nvim_history_development/

https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories

https://docs.github.com/en/get-started/using-github/keyboard-shortcuts
