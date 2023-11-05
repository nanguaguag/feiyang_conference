# 飞扬研发部第一次例会

<!-- [toc]

## Part1. Python 光速入门

> 写在前面：本教程只是带你过一遍 python 的基础语法，最最浅显的那种，目的就是为了让每个读者看完以后，都有能力**安装并使用第三方模块**，从而快速获得写 python 的快感，大大降低学习曲线。
>
> 总言之，我的建议是「先快速上手，找个好玩的东西做，然后再考虑往深里学」。比如我这篇教程好多都是照搬[廖雪峰的python教程](https://www.liaoxuefeng.com/wiki/1016959663602400)的内容，讲的真的很好啊，但是这一系列文章没有几个礼拜你啃不完啊，等你啃完了，学习的热情早就没了。
>
> 当然，大佬另说嗷，不在本文的考虑范围内。

### 0. 安装 python 与开发环境推荐

#### python 的安装非常简单。

- Windows下安装python

1. 在[官网](https://www.python.org/downloads/windows/)下载 python 安装包，安装时一定记得勾选**Add Python 3.8 to PATH**
2. ![fefd7e5318b8c576625f4d980d90a3df.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/fefd7e5318b8c576625f4d980d90a3df.png)
3. 菜单栏里打开命令提示符，输入 python 后回车，如果出现 >>> ，即所谓的「python 解释器」或者「python 交互环境」，则可视为安装成功。
4. ![b61fb7381b658d061a328938cbb2c1fe.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/b61fb7381b658d061a328938cbb2c1fe.png)

- Mac下安装python

在[python官网](https://www.python.org/downloads/macos/)下载macOS安装包，一步步按提示安装：

![3986344867ed159384080864ea7cb93b.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/3986344867ed159384080864ea7cb93b.png)

输入 python 后发生了什么？首先系统会在你的 path 中（也就是环境变量里，环境变量是由一堆文件夹组成的，都可以在设置里设置）寻找 python 可执行程序。然后在命令提示符中运行它，看到 >>> 后说明你已经进入了 python 解释器，也就是 python 交互式环境。

这里提一嘴 anaconda：除非你有同时安装多个 python 版本的需求（一般来说是不需要的），非常不建议使用 anaconda，因为下载、安装、使用等等对新手太不友好了，非常容易劝退，真不如直接在官网下载 python 安装包并安装。

#### 开发环境配置

我们推荐微软出品的[Visual Studio Code](https://code.visualstudio.com/)，它不是那个大块头的 Visual Studio，它是一个精简版的迷你 Visual Studio，并且，Visual Studio Code 可以跨！平！台！Windows、Mac 和 Linux 通用。

也可以用高颜值的[sublime text4](http://www.sublimetext.com/)。同样跨平台，比 vscode 启动更快，缺点是不开源。

请注意，不要用 Word 和 Windows 自带的记事本。Word 保存的不是纯文本文件，而记事本会自作聪明地在文件开始的地方加上几个特殊字符（UTF-8 BOM），结果会导致程序运行出现莫名其妙的错误。

安装完编辑器后，新建后缀名为`.py`的文本文件（大部分编辑器根据后缀名识别文件执行方式，比如`.c`文件编辑器会选择编译运行），比如 helloword.py，文件名可以随便取。里面就可以编辑 python 语句了，比如我写一句

```python
print(100+200)
```

然后在编辑器里直接运行。可以看到结果为 300。如果看不到结果，反而报什么 python 不是可执行程序的话，说明你上一步「add python to path」没有勾选。

### 1. Python 是一种什么语言？

首先，我们普及一下编程语言的基础知识。用任何编程语言来开发程序，都是为了让计算机干活，比如下载一个 MP3，编写一个文档等等，而计算机干活的 CPU 只认识机器指令，所以，尽管不同的编程语言差异极大，最后都得“翻译”成 CPU 可以执行的机器指令。而不同的编程语言，干同一个活，编写的代码量，差距也很大。

比如，完成同一个任务，C 语言要写 1000 行代码，Java 只需要写 100 行，而 Python 可能只要 20 行。

这是 C 语言的 hello world：

```c
#include <stdio.h>
int main()
{
   printf("Hello World!");
   return 0;
}
```

Java：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

python：

```python
print("Hello World!")
```

所以 Python 是一种相当高级的语言。

你也许会问，代码少还不好？代码少的代价是运行速度慢，C 程序运行 1 秒钟，Java 程序可能需要 2 秒，而 Python 程序可能就需要 10 秒。

这里说明一点，你可以在命令行里看到，python 解释器中的 python 语句是一行一行的：

![0e884a826c2cffaf26775d1195de9ec2.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/0e884a826c2cffaf26775d1195de9ec2.png)

```python
>>> print("hello world!")
hello world!
>>> print(100+200)
300
>>>
```

同样的，你的`.py`文件中的代码在执行时会一行一行地翻译成 CPU 能理解的机器码，这个翻译过程非常耗时，所以很慢。而 C 程序是运行前直接编译成 CPU 能执行的机器码，所以非常快。

但是，看在开发 python 如此舒适的分上，运行慢一点完全可以接受啊。

![8a571075ea57f74a1299d8ee09171f8a.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/8a571075ea57f74a1299d8ee09171f8a.png)

此外，运行`.py`文件和在 Python 交互式环境下直接运行 Python 代码一点点不同。Python 交互式环境会把每一行 Python 代码的结果自动打印出来，但是，直接运行 Python 代码却不会。

PS: 我都是把 python 解释器当简易计算器用的，非常好用，毕竟支持所有常见的表达式，演示一下：

```python
>>> a = -8080
>>> b = 1.234e9
>>> b
1234000000.0
>>> 2**100 # 2的100次方
1267650600228229401496703205376
>>> b**0.5 # 对b开根
35128.33614050059
>>> a + b
1233991920.0
>>> b/a
-152722.77227722772
>>>
```

### 2. 基本语法详解

> “#”是注释的意思，它后面的文字会被 Python 忽略。

#### 2.0 变量

我们可以把数据存到变量里。使用方法如下：

```python
>>> a = 100
>>> b = 3.1415926
>>> c = "一串字符串，里面可以是任意文本"
>>> a + b # 103.1415926
>>> a = 10 # a的值可以改变
>>> a + b # 13.1415926
```

> **所有名称（变量名称，包括后面要学的函数名称、类名称）都是完全自定义的，你想取什么名字就可以取什么名字。**

c 是一串字符串。python 里，用“引号”扩起来的文字**被标记为**字符串，字符串顾名思义，就是把字符串起来。`c = "I'm OK"`，那 c 里面包含的字符就是`I`、`'`、`m`、空格、`O`、`K`这 6 个字符。

```python
>>> b = 3.1415926 # b是小数（浮点数）
>>> c = "3.1415926" # c和b不一样，
```

那么如果我想让 c 的内容是`"hello"`怎么办？注意到 c 头尾两个字符是 python 默认「定义字符串」用的双引号，难道这样写吗？

```python
>>> c = ""hello""
  File "<stdin>", line 1
    c = ""hello""
          ^^^^^
SyntaxError: invalid syntax
```

看代码颜色就一目了然：字符串内部的`"`和 python 语法冲突了，那怎么办呢？

天才的程序员们想到了这两个办法：

1. 包裹字符串的双引号可以换成单引号，这样就没有歧义了：`c = '"hello"'`
2. 使用转义字符 `\`

```python
>>> c = "\"hello\""
>>> c
'"hello"'
```

我当时学到转义字符的时候也是懵逼的，其实可以这样理解：python 挑选了很不常用的，但是可以在键盘上打出来的字符：`\`，作为「转义字符」，即如果在字符串里看到了这个，就不能当成正常的字符 `\` 处理了，而是看成一个标记——**代表`\`后面的那个字符需要转义**——就是告诉计算机，`\`后面那个字符是特殊的。

解释一下`c = "\"hello\""`：引号里扩起来的两个`\`后面都是`"`，说明什么？说明`"`不应该正常的把它视为字符串的终止符号，而是字符串的一部分。于是`\"`才算做一个字符。那问题来了，虽然`\`不常用，但是还是在某些系统的路径中频繁出现，如果我想要在字符串中加上`\`怎么办？不是说计算机不会把`\`看作正常字符吗？

其实，我们只需要用`\`转义一下`\`就行了，听起来有点绕，就是用转义字符标记`\`为特殊的，计算机就不会把`\`当成转义字符来看待，而是正常字符。有负负得正的味道了。于是：

```python
>>> print("\\")
\
```

这里我给出一个常用转义字符对照表：

| 转义字符 | 意义                   | ASCII |
| -------- | ---------------------- | ----- |
| `\0`     | 空字符(NUL)            | 0     |
| `\t`     | 制表符                 | 9     |
| `\n`     | 换行符                 | 10    |
| `\"`     | 代表一个双引号字符     | 34    |
| `\'`     | 代表一个单引号         | 39    |
| `\\`     | 代表一个反斜线字符'\\' | 92    |

我们可以使用`type()`来查看变量的数据类型：

```python
>>> type(a)  # 整数
<class 'int'>
>>> type(b) # 浮点数
<class 'float'>
>>> type(c) # 字符串
<class 'str'>
>>> type(True) # 布尔值
<class 'bool'>
```

可以看到，还一种数据类型叫做「布尔值」，布尔值是音译的英语“bool”，其实比整数啥的更简单，因为布尔值只有两个值： True 和 False。

**！一定要注意 True 和 False 的首字母大写！**

布尔值的运算和数字稍微有点不同，但是基本上高中数学老师都教过：

```python
>>> True
True
>>> False
False
>>> 3 > 2
True
>>> 3 > 5
False
>>> True and True # 与运算
True
>>> True and False
False
>>> False and False
False
>>> 5 > 3 and 3 > 1
True
>>> True or True # 或运算
True
>>> True or False
True
>>> False or False
False
>>> 5 > 3 or 1 > 3
True
>>> not True # 非运算
False
>>> not False
True
>>> not 1 > 2
True
```

布尔值经常会用到条件判断语句中，后面会提到的。

**请不要把赋值语句的等号等同于数学的等号**。比如下面的代码：

```python
x = 10
x = x + 2
```

如果从数学上理解`x = x + 2`那无论如何是不成立的，在程序中，赋值语句先计算右侧的表达式`x + 2`，得到结果 12，再赋给变量 x。由于 x 之前的值是 10，重新赋值后，x 的值变成 12。

其实 python 提供的「数据类型」不止小数、整数、字符串、布尔值，还有下面会讲的「数组」「元组」「字典」都是 python 自带的数据类型，其实你完全可以自定义一个新的数据类型，我们叫做定义「类」。

#### 2.1 输入输出

python 中负责输入输出的函数是`print`。注意到我用了一个还没讲到的概念：函数。

函数，就像数学里面的函数一样，我扔给它好几个输入，它就用我给的输入做一些事情。

学编程语言其实应该试着去理解。

比如学 C 语言，不能死记硬背`#include <stdio.h>`，应该理解成「把'stdio.h'里面所有的东西都给我拿来（包括进来）」为什么是`stdio.h`？std -> standard; io -> input output。连起来就是「标准输入输出文件」。干什么用的？原来你的 hello world 程序里面有一步是「在命令行黑框框里打印出一行 hello world」，必须要用到`printf`函数啊。不把`stdio`文件“拿过来”，哪来的`printf`函数呢？所以，其实你只要不输出，把这行引用删掉也无所谓。

再回到 python，python 给我们内置了一些常用函数，不用像 C 一样 include（当然有些不常用的函数还是需要从别的地方拿过来的）。print 的意思就是打印嘛，打印到哪？打印到控制台。我可以传给 print 任何东西（记得用逗号隔开，就和数学里的`f(x, y, z)`一样），它就负责把它获得的所有输入展现在命令行黑框框里：

```python
print("100+200 =", 100+200)
# 100+200 = 300
```

同样的，python 中的输入函数是`input()`，不用给它传参数，当然也可以传一个“输入提示”：

```python
name = input('please enter your name: ')
print('hello,', name)
```

```bash
~/myWorkspace> python hello.py
please enter your name: Michael
hello, Michael
```

**注意一点**，`input()`获取到的永远是**字符串**，无论用户有没有输入数字，因为`"1234"`也是字符串文本。你可以通过`int()` 把字符串变成数字（前提当然是这个字符串能变成数字，你要是想把`"abcd"`变成数字那当我没说。）

```python
>>> number=input("请输入数字:")
请输入数字:1234
>>> type(number)
<class 'str'>
>>> number=int(number)
>>> number
1234
>>> type(number)
<class 'int'>
>>>
```

#### 2.2 List（数组）、Tuple（元组）与 Dict（字典）

python 中除了有数字、字符串这些数据类型外，还有「数组」类型。顾名思义，你可以把“一组数字”存到一个变量中。具体如下：

```python
>>> numbers = [2, 4, 7, 3, 9, 10]
```

`len()`函数可以获得 list 元素的个数：

```python
>>> len(numbers)
6
```

除了数字意外，「数组还可以存放任意数据类型」，比如字符串：

```python
>>> classmates = ['Michael', 'Bob', 'Tracy']
>>> classmates
['Michael', 'Bob', 'Tracy']
```

用「索引」来访问 list 中每一个位置的元素，记得索引是从 0 开始的：

```python
>>> classmates[0]
'Michael'
>>> classmates[1]
'Bob'
>>> classmates[2]
'Tracy'
>>> classmates[3]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

当索引超出了范围时，Python 会报一个 IndexError 错误，所以，要确保索引不要越界，记得最后一个元素的索引是`len(classmates) - 1`。

如果要取最后一个元素，除了计算索引位置外，还可以用-1 做索引，直接获取最后一个元素：

```python
>>> classmates[-1]
'Tracy'
```

list 是一个可变的有序表，所以，可以往 list 中追加元素到末尾：

```python
>>> classmates.append('Adam')
>>> classmates
['Michael', 'Bob', 'Tracy', 'Adam']
```

也可以把元素插入到指定的位置，比如索引号为 1 的位置：

```python
>>> classmates.insert(1, 'Jack')
>>> classmates
['Michael', 'Jack', 'Bob', 'Tracy', 'Adam']
```

要删除 list 末尾的元素，请用`pop()`：

```python
>>> classmates.pop()
'Adam'
>>> classmates
['Michael', 'Jack', 'Bob', 'Tracy']
```

要删除指定位置的元素，用`pop(i)`，其中 i 是索引位置：

```python
>>> classmates.pop(1)
'Jack'
>>> classmates
['Michael', 'Bob', 'Tracy']
```

要把某个元素替换成别的元素，可以直接赋值给对应的索引位置：

```python
>>> classmates[1] = 'Sarah'
>>> classmates
['Michael', 'Sarah', 'Tracy']
```

这里再说回之前的「字符串」，字符串虽然和数组是两个不同的数据类型，但是它其实就是「字符」构成的数组，字符串也可以用索引：

```python
>>> c = '"hello"'
>>> c[0]
'"'
>>> c[-1]
'"'
>>> c[1]
'h'
```

---

Tuple 和 list 几乎一样，也是一个有序列表。定义方式也非常类似：

```python
numbers_list = [2, 4, 7, 3, 9, 10]
tuple_list = (2, 4, 7, 3, 9, 10)
```

重点在于，**当你定义一个 tuple 时，在定义的时候，tuple 的元素就必须被确定下来**，换句话说，tuple 无法被更改，只能查看 tuple 中的元素！

这样做的好处在于，tuple 不可变，所以代码更安全。如果可能，能用 tuple 代替 list 就尽量用 tuple。

---

数组根据索引，按照 0, 1, 2, . . . 的顺序存储值，而字典则以键值对（key-value）的形式存储数据。字典就像《新华字典》那样，将单词和它的含义对应着存储起来。

```python
>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
>>> d['Michael']
95
```

把数据放入 dict 的方法，除了初始化时指定外，还可以通过 key 放入：

```python
>>> d['Adam'] = 67
>>> d['Adam']
67
```

由于一个 key 只能对应一个 value，所以，多次对一个 key 放入 value，后面的值会把前面的值冲掉：

```python
>>> d['Jack'] = 90
>>> d['Jack']
90
>>> d['Jack'] = 88
>>> d['Jack']
88
>>> d['Thomas'] # 如果key不存在，dict就会报错：
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Thomas'
```

#### 2.3. 条件判断

非常好理解，因为条件判断基本就是在说人话。比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 if 语句实现：

```python
age = 20
if age >= 18:
    print('your age is', age)
    print('adult')
```

只需要注意一下 `≥` 在 python 中用 `>=` 替代，就行了。还有，**不要少写了冒号！！**

```python
age = 3
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
```

- else: 字面意思，不满足`age >= 18`也不满足`age >= 6`
- elif: else if 的简称，也是字面意思。

所以 if 语句的完整形式就是：

```python
if <条件判断1>:
    <执行1>
elif <条件判断2>:
    <执行2>
elif <条件判断3>:
    <执行3>
else:
    <执行4>
```

其中 elif, else 都是可有可无的，就是说删了 elif 这个条件判断分支，代码是不会报错的。

#### 2.4. Python 的严格缩进机制

python的缩进非常严格。缩进是什么？其实就是代码前面空出来一块就是一个缩进，python的一个缩进可以是4空格，也可以是一个Tab。python通过缩进区分是否在条件判断/循环语句内，而且不允许空格/Tab混用，这就是为什么我推荐使用现代编辑器的原因，现代编辑器可以直接将Tab转换为4空格，再也不会出现缩进问题了。

![a6bb70bd67da42925e1e3796d1ddc980.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/a6bb70bd67da42925e1e3796d1ddc980.png)

![30ff48140581660ee3dcfeeef185e646.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/30ff48140581660ee3dcfeeef185e646.png)

这两段代码有什么不同？？为什么上面会报错？？

#### 2.5. 循环

要计算 1+2+3，我们可以直接写表达式：

```python
>>> 1 + 2 + 3
6
```

但是，要计算 1+2+3+...+10000，直接写表达式就不可能了。为了让计算机能计算成千上万次的重复运算，我们就需要循环语句。

```python
names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)
```

执行这段代码，会依次打印 names 的每一个元素：

```text
Michael
Bob
Tracy
```

所以`for x in ...`循环就是把每个元素代入变量 x，然后执行后面的语句。

`range(101)`是使用 python 提供的`range()`函数，生成 0-100 的整数序列（0-100 嘛，101 个数），你可以理解为用`range(10)`代替了`[0,1,2,3,4,5,6,7,8,9]`

```python
sum = 0
# 生成涵盖0～100的数组
for x in range(101):
    sum = sum + x
print(sum)
# 5050
```

除了 for 循环外，还有 while 循环：

```python
sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)
```

这里`while n > 0:`表示，只要满足 n>0, 循环就会一直进行下去，直到发现 n<=0 了，退出循环，打印 sum 的值。

### 3. 函数

#### 3.0 函数简介

### 3.0 函数简介

上面其实已经出现了很多函数了，但都是 python 内置的

- `len()`: 用于计算数组的长度
- `range()`: 生成整数序列
- `print()`: 把东西打印到控制台
- `type()`: 来查看变量的数据类型

**Q:** `list.pop()`不是删除 List 末尾的一个元素嘛？那 pop 算函数吗？

**A:** `pop()`单独用会报错啊！只有`pop()`前面加一个点，变成`numbers.pop()`才能正常运行。这是因为 pop 是「数组」这个数据类型提供的一个「**方法**」，如果你深入了解的话，会在面向对象中学到。虽然长得像函数，定义也很像，但是得做出区分。

#### 3.1 使用函数

试试看直接调用 python 的内置函数之一，abs 函数：

```python
>>> abs(100)
100
>>> abs(-20)
20
>>> abs(12.34)
12.34
```

调用函数的时候，如果传入的参数数量不对，会报 TypeError 的错误，并且 Python 会明确地告诉你：abs()有且仅有 1 个参数，但给出了两个：

```python
>>> abs(1, 2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: abs() takes exactly one argument (2 given)
```

如果传入的参数数量是对的，但参数类型不能被函数所接受，也会报 TypeError 的错误，并且给出错误信息：str 是错误的参数类型：

```python
>>> abs('a')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: bad operand type for abs(): 'str'
```

而 max 函数`max()`可以接收任意多个参数，并返回最大的那个：

```python
>>> max(1, 2)
2
>>> max(2, 3, 1, -5)
3
```

#### 3.2 定义函数

我们以自定义一个求绝对值的 my_abs 函数为例：

```python
def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x
```

很好理解，因为 def 就是 define（定义）的意思。就是这里有个 return 需要理解一下，众所周知，**一个函数不能有两个返回值**，高中数学教的对吧？所以，一个函数只要执行了一个 return，就停下来了，不可能执行其他 return 了。

```python
>>> my_abs(-9)
9
```

如果函数有多个参数也是一样的：

```python
def calculate_distance(x1, y1, x2, y2):
    """
    计算两点之间的距离

    参数:
    x1 (float): 第一个点的 x 坐标
    y1 (float): 第一个点的 y 坐标
    x2 (float): 第二个点的 x 坐标
    y2 (float): 第二个点的 y 坐标

    返回值:
    float: 两点之间的距离
    """
    # 计算 x 轴上的差值
    x_diff = x2 - x1
    # 计算 y 轴上的差值
    y_diff = y2 - y1
    # 计算两点之间的直线距离
    distance = (x_diff ** 2 + y_diff ** 2) ** 0.5
    return distance
```

使用方法：

```python
# 调用函数计算两点之间的距离
distance = calculate_distance(1, 2, 4, 6)

# 打印结果： 5.0
print("两点之间的距离为:", distance)
```

### 4. 使用模块

Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。

#### 4.0 用 math 模块

math 模块可以看作一个数学工具箱，里面什么函数都有。比如，计算 log 的，开根的，三角函数等等。举个例子，比如在游戏中经常需要从一个点移动到另一个点，给出坐标、位移和角度，就可以计算出新的坐标：

```python
# 导入math包，import就是进口的意思
import math

def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny
```

`import math`语句表示导入 math 包，并允许后续代码引用 math 包里的 sin、cos 等函数。

发现什么问题没有？之前不是说**函数不可能有两个返回值**吗？这是什么？`return nx, ny` 这不是两个吗？

其实这只是 python 为了写起来更方便，制造的一种假象。move 函数仍然返回的是单一值！我们调用它看看：

```python
>>> r = move(100, 100, 60, math.pi / 6)
>>> print(r)
(151.96152422706632, 70.0)
```

原来返回值是一个 tuple！在 tuple 里面一个个取值太麻烦了，于是 python 提供了一个可以让写代码舒适度提高很多的语法：

```python
>>> x, y = move(100, 100, 60, math.pi / 6)
>>> print(x, y)
151.96152422706632 70.0
```

---

从下面开始，python 才开始变得有意思起来。

#### 4.1 使用 turtle 模块

turtle 就是鼎鼎有名的海龟作图模块。

```python
# 导入turtle包
import turtle

# 设置笔刷宽度:
turtle.width(4)

# 前进:
turtle.forward(200)
# 右转90度:
turtle.right(90)

# 设置笔刷颜色:
turtle.pencolor('red')
turtle.forward(100)
turtle.right(90)

turtle.pencolor('green')
turtle.forward(200)
turtle.right(90)

turtle.pencolor('blue')
turtle.forward(100)
turtle.right(90)

# turtle.调用done()使得窗口等待被关闭，否则将立刻关闭窗口:
turtle.done()
```

![bbf1c1b1ae4f8114d83a31d7a45c78a4.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/bbf1c1b1ae4f8114d83a31d7a45c78a4.png)

turtle 包本身只是一个绘图库，可以理解为就是一个可以让你的程序画画的「画笔」，但是配合 Python 代码，比如循环、函数等就可以绘制各种复杂的图形：

```python
import turtle

# 一个在(x, y)坐标画出一个五角星的函数
def drawStar(x, y):
    # 抬起画笔，不留轨迹
    turtle.penup()
    # 去给定坐标
    turtle.goto(x, y)
    # 落下画笔，开始绘画
    turtle.pendown()
    # 设置箭头朝向（0代表向正右方）
    turtle.setheading(0)
    for i in range(5):
        turtle.forward(40)
        # 向右旋转144度
        turtle.right(144)

for x in range(0, 250, 50):
    drawStar(x, 0)

turtle.done()
```

![ffed385a89147f863e6e266315b6e884.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/ffed385a89147f863e6e266315b6e884.png)

#### 4.2 安装第三方模块

所有的第三方模块都会在[PyPI - the Python Package Index](https://pypi.org/)上注册，只要找到对应的模块名字，即可用 pip 安装。

如果你已经正确地安装了 python，那 pip 应该也是装上了的，如果命令行报错，可以试着重新安装 python，把安装 pip 勾选一下。

比如爬虫必备的 requests 库。没有安装的时候，运行 import 语句会报错。

```python
>>> import requests
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'requests'
>>>
```

但是当你打开命令提示符（终端），输入这行命令以后，如果没有报错就是安装完成了。

```bash
~$ pip install requests
...
Successfully installed certifi-2023.7.22 charset-normalizer-3.3.1 idna-3.4 requests-2.31.0 urllib3-2.0.7
```

**注意！！如果出现红色的字，或者没有看到 Successfully installed requests，说明安装失败了，此时 90%以上的可能是“网络问题”，pypi 服务器有点不太稳定。因此我们可以用 pypi 镜像站代替。**

镜像站指的是把 pypi 所有东西都放到了国内的服务器上，可以更加稳定快速的下载。常见镜像站有：

- 清华：https://pypi.tuna.tsinghua.edu.cn/simple/
- 阿里云：http://mirrors.aliyun.com/pypi/simple/
- 中国科技大学：https://pypi.mirrors.ustc.edu.cn/simple/
- 华中科技大学：http://pypi.hustunique.com/simple/
- 上海交通大学：https://mirror.sjtu.edu.cn/pypi/web/simple/
- 豆瓣：http://pypi.douban.com/simple/

那如何让 pip 不从 pypi 服务器下载，改用我们提供的镜像网址呢？很简单，用 -i 参数指定一下就行了

```bash
~$ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple requests
```

安装成功后再次 import 就能看到结果了：

```python
>>> import requests
>>>
```

。。。好吧没有结果。要知道，没有消息才是最好的消息（）

#### 4.3. 练手：安装并运行pygame

想要用python写游戏的同学，推荐pygame，以及最详细的pygame教程

同样的，安装pygame只用一行：

```bash
~$ pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pygame
```

## Part2. Markdown语法

![a02f45c027d438575a9c15f7ee0476c6.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/a02f45c027d438575a9c15f7ee0476c6.png)

markdown语法，可以说就是这类技能的典型代表。

### 2.0 Markdown的诞生原因

> git每次**只标记改动**，这意味着git更适合处理一行行的文本，比如你有一个1000行的python代码，只改了其中一行，你觉得是记录哪一行改动好呢，还是把整个文件备份一下好？面对二进制文件，比如exe、word、pdf（它们可以理解为只有一行）git只能每次记录文件的所有内容，所以，把word、pdf、exe这些用git托管是很不明智的，会导致版本库体积不可控地增大。

我们常用的文档格式，像word和pdf这些，都是二进制格式，你改一个字，git就会记录整个文件的内容，太浪费资源了。于是，「文本标记语言」就诞生了。常见的文本标记语言有markdown（最流行没有之一）、ASCIIDoc、textile、html（超文本标记语言）

html比markdown复杂多了，所以叫它超文本标记语言。不要误会了，不管它有多复杂，它还是一种「标记语言」，而不是「编程语言」。

文本标记语言的本质就是给文本做记号，然后在相对应的解析器中把你做的记号呈现出来，呈现的过程不需要我们操心。比如你随便创建一个`test.html`文件，里面写入

```html
这是普通文本
<h1>Hello, world!</h1>
```

保存后拖到浏览器中打开，就能看到一行小小的普通文本和一个大大的hello world了。所以 `<h1></h1>` 就相当于对其中包裹的文本进行了标记，浏览器这个解析器认出了这个标记。html有自带的浏览器进行解析，markdown则需要下载编辑器了。

### 2.1 markdown有什么优势？

1. **通用性**：你写了一篇博客，你可以发布在任何地方：知乎、CSDN、GitHub、简书、Wiki。
2. **专注于文本**：markdown作为纯文本，可以用记事本打开，完全没有阅读障碍。
3. **代码支持**：markdown对代码的显示和排版吊打word，所以程序员都爱用。
4. **简洁易上手**：程序员很喜欢用markdown写文章和博客（比如这篇文章）

下面我们将详细地介绍MD的语法：

### 2.2 MD标准语法

#### 标题

要创建标题，请在单词或短语前面添加井号 `#`。`#` 的数量代表了标题的级别。（记得在井号后加空格）

![5ef286ed84d1ce4375a371b3154a22ac.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/5ef286ed84d1ce4375a371b3154a22ac.png)

#### 段落

段落就正常的文本就行，最好不要在前面加空格（搞得像写作文一样）。

#### 强调

一个星号或下划线包裹的文本被标记为*斜体*：

![98e9a1a3a2109c8d8ddc034b9f07f3e9.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/98e9a1a3a2109c8d8ddc034b9f07f3e9.png)

两个星号或下划线包裹的文本将会**加粗**：

![598604dd317cbf33ef7da0bae876fe50.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/598604dd317cbf33ef7da0bae876fe50.png)

三个星号或下划线标记***粗斜体***：

![ec6b1da9a0a1ab69b63ff5dfc30403a7.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/ec6b1da9a0a1ab69b63ff5dfc30403a7.png)

#### 引用

```text
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

markdown支持标记之间的**嵌套**：

![cca5ab4c79e87210601ca77d3ac02706.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/cca5ab4c79e87210601ca77d3ac02706.png)

#### 列表

有序列表：

![f129d754764306b6e6d41cc482615f65.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/f129d754764306b6e6d41cc482615f65.png)

无序列表：

![03647a3585d4aa762c02e645f68c4c06.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/03647a3585d4aa762c02e645f68c4c06.png)

列表嵌套：

![703669201335c504815ba9088af73758.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/703669201335c504815ba9088af73758.png)

#### 代码

行内代码：

要将单词或短语表示为代码，请将其包裹在反引号 `` ` `` 中。

![59d6c0ca21ccab999dc1622925a9c080.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/59d6c0ca21ccab999dc1622925a9c080.png)

代码块：

`` ``` ``后面注明语言，可以进行代码高亮：

    ```java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }
    ```

![747bea9f3fe6a4d9e87da99cba1004aa.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/747bea9f3fe6a4d9e87da99cba1004aa.png)

#### 分割线

```markdown
***

---

3个及以上的"-"都可以：

-------------
```

![2a33c018c12053f52d6cb8c2d7a7d42e.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/2a33c018c12053f52d6cb8c2d7a7d42e.png)

#### 链接

超链接Markdown语法代码：

```markdown
[超链接显示名](超链接地址 "超链接title")
```

```markdown
飞扬官网 [四川大学飞扬俱乐部](https://www.fyscu.com "飞扬俱乐部官网")
```

![de9831646665e3ff74e5204710c07b70.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/de9831646665e3ff74e5204710c07b70.png)

把网址or邮箱变成可以点击的链接，只需要把网址用尖括号包起来：

```
<https://www.fyscu.com>
<fake@example.com>
```

<https://www.fyscu.com>
<fake@example.com>

引用类型链接：

```markdown
[hobbit-hole][1]

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
```

![fba76d2ac96bfb55bf689f214fb2c094.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/fba76d2ac96bfb55bf689f214fb2c094.png)

#### 图片

- 图片替代文本是在图片找不到时显示的文本，可以不填
- 图片title当你鼠标悬浮时显示的文本，也可以不填

```markdown
![图片替代文本](图片链接 "图片title")
```

```markdown
![这是图片](https://markdown.com.cn/assets/img/philly-magic-garden.9c0b4415.jpg "Magic Gardens")
```

链接图片：

就是把图片嵌套到链接里：

```markdown
[图片](链接)

[![这是图片](图片链接 "图片title")](链接)
```

### 2.3 MD扩展语法

可选语法指的是有些编辑器支持，有些不支持的语法。

#### 标题

![c44fa3a6c9c8485782596ea9549dbd67.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/c44fa3a6c9c8485782596ea9549dbd67.png)

#### 表格

```markdown
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

![4d92057b8e2ef2cb3fb63ed5ba29c5c1.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/4d92057b8e2ef2cb3fb63ed5ba29c5c1.png)

表格对齐：

```markdown
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```

![479b5ead948d02cee0911076c130e82b.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/479b5ead948d02cee0911076c130e82b.png)

#### 脚注

```markdown
脚注示例,[^1]，另一个脚注, [^2]

[^1]: 这是一个简单的脚注

[^2]: 这个脚注带有markdown格式：
    `行内代码`，**粗体**，*斜体*
```

![55a58e44c76acfa57b454a716673e136.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/55a58e44c76acfa57b454a716673e136.png)

#### 删除线

```markdown
~~世界是平坦的。~~ 我们现在知道世界是圆的。
```

~~世界是平坦的。~~ 我们现在知道世界是圆的。

#### 任务列表

```
- [x] 吃饭
- [x] 睡觉
- [ ] 打豆豆
```

![b09226f90e29fcca1273d9391d324756.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/b09226f90e29fcca1273d9391d324756.png)

#### $\LaTeX$公式

行内公式：用`$`包裹，可以显示在一行内：

```
易见一元三次方程的求根公式为：$x = \sqrt[3]{\frac{-d}{a} + \sqrt{\left(\frac{-d}{a}\right)^2 + \left(\frac{c}{a}\right)^3}} + \sqrt[3]{\frac{-d}{a} - \sqrt{\left(\frac{-d}{a}\right)^2 + \left(\frac{c}{a}\right)^3}} - \frac{b}{3a}$
```

![96eebce141e8084419f3ef5bc59698c2.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/96eebce141e8084419f3ef5bc59698c2.png)

```latex
$$
\begin{align*}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0\varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{align*}
$$
```

![1a51ab4259d6f727ebd2652282e11b34.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/1a51ab4259d6f727ebd2652282e11b34.png)

### 2.4. Markdown编辑器推荐

推荐阅读：[markdown编辑器测评——下了31个markdown编辑器，我就不信选不出一个好用的](https://zhuanlan.zhihu.com/p/208791140)

markdown编辑器有很多，这里只推荐开源编辑器，这三个最强：

- [Joplin](https://joplinapp.org/)：开源免费、跨平台、功能强大，笔者在用
- [Obsidian](https://obsidian.md/)：开源免费、跨平台、功能强大，插件生态丰富
- [Logseq](https://www.logseq.com/)：开源免费、跨平台。没用过，但是功能应该很强大
- [Markor](https://github.com/gsantner/markor)：开源免费，安卓端最好用

## Part3. GitHub 使用完全教程

很多开源软件，百度上搜出来一堆乱七八糟的，下载发现还要钱。其实，用开源软件卖钱的挣得就是一个信息差，很多人不知道github是什么，他们才能赚钱。

那我们今天就来讲讲什么是github。用git开发同一个项目的开发者们，需要一个可以**交换他们改动**的网站。github就诞生了，作为一个项目托管平台，它提供了良好的代码管理体验。唯一不足的是在github上托管的仓库的**私有性**得不到保障，因此，还有一种流行的方案是在自己的服务器上部署gitlab，构建一个类似github的网站，很多公司都会在他们的内网服务器上搭建gitlab。因为一切都部署在内网，所以在代码的隐私和仓库的自由度上都比github稍胜一筹。

---

本文是一篇面向全体小白的文章，图文兼备。为了让小白们知道如何使用GitHub，我努力将本文写得通俗易懂，尽量让刚刚上网的小白也能明白。所以各位程序员们都可以滑走了～

### 啥是GitHub？

百度百科会告诉你，
> GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。

啊？托管平台？Git？这都是什么玩意？其实并不复杂，大家可别被这些名词吓跑了，广大程序员特别喜欢造一些很高大上的词语，但这些词语背后往往是相当简单的概念。。。

要知道GitHub究竟是干什么用的，我们必须知道GitHub的使用群体都有哪些。程序员，大学生，企业……都是GitHub的用户。这些人有一个共同的特点，就是：**需要写代码**。

想象一下，你开发了一个软件，一开始很顺利。但后来你的好兄弟感觉这个软件不错，想要贡献点代码让它更屌一点。这时候问题来了，他在写代码的同时你也在写，他改完后把代码发给了你，你怎么知道他改了这个软件的哪些功能呢？怎么直观地看他改了哪些东西呢？怎么合并你的代码和他的代码呢？

如果后面又加入了几十个、几百个这样的好兄弟呢？如果又和你隔了十万八千里呢？

你将你的软件给大家用，大家都说好，但是就是有好多bug，通过什么渠道反馈呢？

这时候你的救星——GitHub，出现了，你将你的代码上传到了GitHub上，每一次改代码都标注好改动了哪些地方，添加了哪些功能，修复了哪些bug，这样就会使你的代码一目了然。

![7014791d90d5db2ae50f6be433a07766.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/7014791d90d5db2ae50f6be433a07766.png)

如果别人要改你的代码，只需要拷贝（Fork）你的代码，然后修修补补，最后再合并（Merge）进去。

![dffe5c301d2f03590635d331a5bedf37.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/dffe5c301d2f03590635d331a5bedf37.png)

如果别人要反馈问题，或者提出新的需求，只需要在问题（Issue）一栏里提问，就会有大佬帮你解答或者实现相应的功能。

![c4e7a4cc94ad16bbe435c6834da83c90.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/c4e7a4cc94ad16bbe435c6834da83c90.png)

（大雾，发错了）

应该差不多是这样的
![2a07808377b5fa8abdf6aaef02366e0d.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/2a07808377b5fa8abdf6aaef02366e0d.png)

### 怎么逛GitHub？

在了解完GitHub的基本用途后，就可以看一下基本界面和功能了。

#### 注册

首先点击[注册链接](https://github.com/signup?source=login)，填入邮箱：

![fa505f37e4000072820737b86c4eb17e.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/fa505f37e4000072820737b86c4eb17e.png)

填入密码和用户名：

![d7572a4159d94461b2c4abd830687653.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/d7572a4159d94461b2c4abd830687653.png)

接着会有一个验证你是否是人类的环节，就是通常所说的验证码。

![12ea607d323f28ac91932e38e3612bb1.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/12ea607d323f28ac91932e38e3612bb1.png)

全部完成后即可创建账户，

验证好邮箱后GitHub会给你做个问卷，如实回答即可。当然也可以跳过哦。

![4104e59af2ec0e721b1f3864857f2729.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/4104e59af2ec0e721b1f3864857f2729.png)

接下来的主页就是这个界面啦。

![ef4dc8050f76dafe1da56c3d0d83d9a0.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/ef4dc8050f76dafe1da56c3d0d83d9a0.png)

你别看GitHub这英文很多，其实来来去去就这几个英文单词，记下意思就和中文差不多了。

#### 代码界面

首先我们需要引入一个概念，叫“仓库”，英文名是`repository`，简称repo。仓库顾名思义就是用来放代码的。所谓代码托管，就是托管在仓库里面的。

下面就是一个仓库：[vs code的仓库链接](https://github.com/microsoft/vscode)

![416431d19fc9c59f1cbd3c52de59bc03.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/416431d19fc9c59f1cbd3c52de59bc03.png)
我们可以通过这个仓库了解到很多信息。

这个界面基本上每个地方都是可以点的……

![test.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/test.png)

star数量是我首先关注的点，在点star时，可以点击左边的下拉箭头选择你设定的不同栏目，所以star其实除了支持作者外，还有**收藏**的意思。

至于watch，其实要比star的人少很多，毕竟有谁希望提交个代码就要被通知一下呢？不过发布一个新版本还是有必要知道一下的，这样就可以体验最新版本。于是我们可以这样设置：

![cc9fa8a0c82b21f3fcfe0a303f7b235a.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/cc9fa8a0c82b21f3fcfe0a303f7b235a.png)

这样当vscode发布一些新版本的时候，GitHub就会发邮件通知你。

那如果我需要**了解更多信息**呢？那就需要看`readme.md`了。
所谓readme，其实就是仓库里的一个文件，叫readme.md（简称readme），然后GitHub自动识别了这个文件，直接在仓库页面显示了。

![1c4a4e599efa1c3db40b352b734d5f56.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/1c4a4e599efa1c3db40b352b734d5f56.png)

看完，我们可以可以知道（如果英文好的话）如何编译，如何下载，如何给vscode贡献代码等等。这样就可以对这个项目有更深入的了解。一个好的readme需要调理清晰，当然这不是我们小白需要考虑的事情了……

接下来讲一下什么是**分支**（branch）和**标签**（tag）。当你和队友们在写一个软件时，你的队友有不同的想法，如果他的想法不能说服你，他就可以直接做一个他的分支，这样你的代码因为他的想法就变成了两个分支。比如当年Vim和neovim，一个小伙子本来想给Vim做贡献的结果Bram没接受他的Pull request，于是小伙子直接Fork了Vim，成立了neovim，所以neovim其实是Vim的一个分支，当然这属于比较激进的做法。此外如果一个项目有一个长期维护版本（long time support简称LTS），那么也可以从仓库里分支出来，单独进行维护。

标签呢就很好理解了，就是你写着写着觉得这版代码很稳定很不错，就搞一个标签。通常来说tags就是版本号，在GitHub里，你可以找到代码的任何分支中的任何一个版本：

![Snipaste_2023-10-30_16-02-03.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/Snipaste_2023-10-30_16-02-03.png)

#### Issue界面

另外一个很重要的功能就是GitHub的issue了。 Issue可以干很多事情，包括给开发者反映bug，向开发者求新功能，包括小白求助等等。

我们点击上面代码界面上方工具栏的issue，就可以看到：

![issue.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/issue.png)

可以看出issue的检索功能和分类功能都十分强大，所以甚至还有在用issue写个人博客的程序员。。。

![d167640f343a6b569678a69c940d7b2e.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/d167640f343a6b569678a69c940d7b2e.png)

#### PR界面

`Pull Request`，就是你兄弟改完代码后给你提交的东西，简称PR。PR代表着新的功能或者bug修复，但要不要接受这些PR就要看仓库的拥有者你了。

PR界面长得跟issue界面非常像：

![2899c41b7c08faf1946da0d287ca351c.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/2899c41b7c08faf1946da0d287ca351c.png)

但我点进去一个PR，界面就完全不同了。

conversation就是提交者对自己PR的介绍，以及和开发人员之间的交流。

commits就是这个代码被分出去以后经历的提交过程。

比如下面这个PR，只提交了一次。

![ac655c88999e1bf64cac622607ca9d18.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/ac655c88999e1bf64cac622607ca9d18.png)

再看到file changed，就是详细地看到底改了哪些地方：
可以看到这位仁兄给`extensionHostStarter.ts`文件增加了一段代码：

![1a14e7b133cbdc23a33f53a686846bfd.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/1a14e7b133cbdc23a33f53a686846bfd.png)

至于Checks，就是GitHub的机器人干的事情了，这个不需要了解太多。

#### Wiki界面

Wiki即维基，就是项目的小型文档。这可不是一般项目都有的，只有比较大型的项目才有维基，比如vscode。vscode的维基是给专业人士看的，告诉人们应该怎么贡献代码，如何写vscode插件等等，但是也有的项目的维基是给用户看的，因项目而异。

![f2577d4ead8e15e1a646ab14e11422ec.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/f2577d4ead8e15e1a646ab14e11422ec.png)

#### insight界面

另外一个很重要的功能就是insight界面。这个给你了很多关于这个项目的统计数据，可以说是非常详细，你可以看到许多贡献者在这个项目里贡献了多少代码，什么时候贡献的。

![8621e496fc80fd4f57bd9738b6c07b62.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/8621e496fc80fd4f57bd9738b6c07b62.png)

这里我愿称之为：大佬列表

![3b137c02035baf5b9820dc1ff149ff9b.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/3b137c02035baf5b9820dc1ff149ff9b.png)

这是这个项目的Fork列表，看看都有谁抄袭（bushi）了这个项目：

![0ac8e9b75e2b0e3c3c1333dae2970308.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/0ac8e9b75e2b0e3c3c1333dae2970308.png)

其他栏目我就不一一列举了。

那么我能看到Fork列表，可不可以看star列表呢？答案是肯定的。入口就在项目主页中：

![1d975f99c21e44acf5b9de514b6dab45.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/1d975f99c21e44acf5b9de514b6dab45.png)

点开后就是：

![9ed65dd54615ffd7b16a7f92f84f1224.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/9ed65dd54615ffd7b16a7f92f84f1224.png)

#### release界面

release界面是一个项目最有用的界面了，可谓伸手党的温床，白嫖怪的乐园。release就是发布的意思，一个软件稳定了，bug被修得差不多了就会到了发布的时候了。这时候大部分开发者就会把源代码（zip/tar.gz后缀的压缩文件）和编译好的软件都发布在这个页面，要用的话直接下载就行了。

此外我们还可以通过compare功能来比较不同版本之间的差异：

![ab70e578e4058eb611974627196fcf6d.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/ab70e578e4058eb611974627196fcf6d.png)

点进去以后GitHub给你详细地展示了两个版本之间经历了多少次提交，多少个文件改动，甚至哪些代码的增删都给你展示出来。

![4ca5a09fa0012647846910675782fdc4.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/4ca5a09fa0012647846910675782fdc4.png)

#### discussion界面

![5d33a1660a5f7fb67e27256fc7e79fea.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/5d33a1660a5f7fb67e27256fc7e79fea.png)

有的项目是有discussion的，是一个简易的论坛，里面有很多求助和公告等等。如果对项目有问题，就可以在discussion里发出来。

#### 用户/公司主页

GitHub的用户分为两种，一种是个人用户，一种是企业用户。
比如这是Linus torvalds的个人主页

![37a6fa5537a14f7207291634f3a8ad2a.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/37a6fa5537a14f7207291634f3a8ad2a.png)

这些绿色的方块代表什么呢？就是你一天里提交的次数，包括提交issue/PR/代码等等，总之就是你给社区贡献的次数越多，你的方块就越深。当然每个方块都是可以点击的，下面的activity就会显示作者在这一天内的各种活动。

![153HGE4-0.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/153HGE4-0.png)
（雾）

组织/公司的页面：

![b6c5b2fc986e7f6ba7bced16f9a208b5.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/b6c5b2fc986e7f6ba7bced16f9a208b5.png)

组织/公司的主页就和个人主页很不一样了。但是我们的主要关注点在repository那一栏里，就是微软这个公司创建的仓库：

![repo.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/repo.png)

可以看出巨硬不愧是巨硬，能同时维护这么多仓库，这几年对开源社区也贡献了不少。

#### explore界面

explore界面就在：https://github.com/explore
![d281cd14be3697e5b9cb1dfa63c9bd24.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/d281cd14be3697e5b9cb1dfa63c9bd24.png)

我这个号由于没有star任何仓库，所以它没有东西给我看。如果你经常star仓库的话，它根据你的偏好给你推送各种仓库，是不是感觉和某某社交软件操作一样（笑），但个人感觉这推送质量我不是很认可……

Topics就是一个仓库简介下面写的蓝色的类似于标签一样的东西，用于给仓库分类。

![bcf3cfe6cd411d0818a3943e998079d4.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/bcf3cfe6cd411d0818a3943e998079d4.png)

点进一个topic以后，它默认的排序就是Most stars，是完完全全按照star的数量进行排序的，

![topics.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/topics.png)

这样我们就可以进入一个topic，按star排序，就可以发现很多有用的仓库（轮子），我通过这一功能发现了许多好用的仓库，而且事实上仓库就是靠添加topic来曝光自己的（不然你怎么定位一个仓库）

接下来就是著名的**GitHub Trending**了，
![f911290b2c65e65be5949cf24a650707.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/f911290b2c65e65be5949cf24a650707.png)

GitHub trending，译作GitHub趋势，仓库/作者一天内被star的次数越多，越有可能进这个榜单。这个榜单有很多明星项目，可以当日报每日刷刷。当然也可以筛选/排序，甚至选择语言。

collection就是GitHub的官方选集了，里面有很多正在维护的精品项目，而且还做好了分类，值得一看。

### 如何参与贡献

#### 创建仓库

首先需要配置一下token，进入[Token生成中心](https://github.com/settings/tokens)

![e29e0c8f1bfe3344e1d65818f3a3151f.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/e29e0c8f1bfe3344e1d65818f3a3151f.png)

然后会让你登陆一遍，接着就到了设置token的页面

![2cb552cc47b55dfa2fabd97e336fb183.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/2cb552cc47b55dfa2fabd97e336fb183.png)

其实只要选择`repo`就够用了，接下来点击`generate token`,一个token就生成好了，但注意这个只显示一次，要好好保存。

![c7b76815ce94e6c0dd74db940df48788.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/c7b76815ce94e6c0dd74db940df48788.png)

设置完token后就可以创建仓库了：

![c91c27def4bede5868cc3623afeae4eb.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/c91c27def4bede5868cc3623afeae4eb.png)

于是我们来到这个页面。

![create.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/create.png)

我新建了一个helloWord仓库，注意添加一下readme file，这样就可以创建一个仓库。

![99a8de26dff757db3bcb0761b57759d1.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/99a8de26dff757db3bcb0761b57759d1.png)

那如果我要改一下这个readme呢？注意这只是在GitHub这个网站上有这个仓库，而写代码则是在本地进行的，那么我们就需要将GitHub仓库和本地代码联系起来。所以**git**就闪亮登场了：

接下来在cmd或者终端里执行：

```
$ git clone https://github.com/meIonhu/HelloWord
Username: 你的用户名
Password: 刚刚生成的token
```

这样你就在本地有一个名叫`HelloWord`的文件夹了。这个文件夹可不是一般的文件夹，这是已经初始化的git仓库。因为这个文件夹里有一个叫`.git`的隐藏文件夹，就是git的所有设置和你的提交记录。当然如果你把`.git`删掉的话这就跟普通的文件夹没什么区别了。

然后你可以在这里面一通乱改（这不就和刚才讲的git入门联动了吗？），最后将代码上传到GitHub：

```
git add .
git commit -m "对于这次提交你想说的话"
git push -u origin main
```

这三段命令下去，你的改动记录就会被上传到GitHub上面，你的仓库也能看到你刚刚的commit了。

### 进阶技能

#### Github gists

gist入口：

![d8afcd8c98bda638bb4a9f5c8331e900.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/d8afcd8c98bda638bb4a9f5c8331e900.png)

什么是gists？其实就是GitHub推出的一个小型的代码托管服务，它针对代码片段进行托管。比如你有一个很好的代码片段，需要时常用一下但写起来又麻烦，就可以用gists来备忘，gists还提供了很多丰富的标签等功能，帮助对代码片段进行分类。

![cd15061707c8f0c6a8fc25a720c66b44.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/cd15061707c8f0c6a8fc25a720c66b44.png)

#### Github搜索进阶

图形化的高级搜索入口：
https://github.com/search/advanced

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

![3dbc4f0d5707488f55523529f824c85f.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/3dbc4f0d5707488f55523529f824c85f.png)

修饰词还有很多，但是基本语法大同小异，具体可以参考[github文档](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)。

学废了嘛？让我们来实操一下吧～

很多同学会很好奇，GitHub star数top10的仓库是哪些呢？其实完全不需要爬取所有仓库，只需要简单地搜索一下就可以了：

在搜索栏键入：`stars:>200000`
![52659773a128bf246752ecd1403dfc74.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/52659773a128bf246752ecd1403dfc74.png)

就得到最受欢迎的仓库名单了。

#### GitHub快捷键

`ctrl+K`可直接打开命令栏：
![4e1879fe14d8efacf90371f9571c191a.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/4e1879fe14d8efacf90371f9571c191a.png)

默认是快捷跳转，或者搜索，我们通过键入`>`可以快速让GitHub执行我们的命令：

![a620a885a930a9a9ff8b44234c0a40a4.png](https://dongguaguaguagua.github.io/feiyang-1st-conference/dist/image_resources/a620a885a930a9a9ff8b44234c0a40a4.png)

此外还通过g键可以快速跳转到各种地方:

`g d`:跳转到首页

`g n`:跳转到通知

`g i`:跳转到issue

`g p`:跳转到PR

`g a`:跳转到Actions

`g b`:跳转到Projects

`g w`:跳转到Wiki

`g g`:跳转到Discussions


### 参考

- https://jdhao.github.io/2020/01/12/vim_nvim_history_development/
- https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories
- https://docs.github.com/en/get-started/using-github/keyboard-shortcuts

-->

## 作业

1. 注册GitHub账号，star几个仓库
2. 新建一个仓库，随便提交一些代码上去
3. 随意挑选一个比较有名的python库，如tkinter/turtle/pyautogui/pygame库，并成功运行网上找的一些示例
4. 用pip安装Jupyter，并学习如何使用

选做：

1. 用作业#3中的python库自己写一个程序
2. 把你的程序放到GitHub中长期维护
3. 进一步深入学习python

以上作业的过程用markdown格式记录下来，发到邮箱<2694536263@qq.com>







