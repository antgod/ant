### 子程序
- 子程序是抽象出来的方法或者过程，使得代码变得更加容易维护，也是节约内存空间和提高性能的重要手段。
- 子程序最重要的不在于内容的好坏，而在于如何使用。包括名字，参数与文档。子程序的名字是最好的注解。
- 子程序必须为纯函数，不要改变参数与全局变量。这样才能做到单元测试。
- 子程序例子：初始变量-写入数据-计算-渲染。这些没有任何联系，更改拆解。
- 子程序必须做好防御错误，既对输入参数做检查。
- 子程序中不应该出现魔法数字/字符串。
- 子程序的参数越少越好，合理的增加增加注释。

#### 何时应该抽象子程序
- 了解需求（举例导航菜单）
    如果需求是经常改变的时候，我们应该抽象子程序。当需求需要实现几套类似的功能并且频繁改动的时候，我们应该抽象出多套子程序而不应该在一套子程序中做判断。
- 降低复杂度
    如果子程序没有抽象能力，将会让人很难理解与管理复杂的程序。
    当我们需要隐藏一些实现细节，可以直接封装成子程序，而以后就不用关心实现细节。比如内部循环或判断层次复杂时，就应该提取出新的子程序。
- 避免重复代码
    如果在两段子程序出现类似的代码，意味着代码分解出现了差错。可以把相同代码写入同一个子程序或者基类中，实现放入子程序或者派生类中。
- 隐藏顺序
    当我们的代码非常长并且复杂时，那我们很难搞清楚代码的顺序。如果我们不希望关心代码运行的顺序，就可以封装成子程序。
- 提高可移植性
    当我们有一段代码需要重复利用时，我们可以包装成子程序。发布成公共服务。
- 改善性能
    当我们修改需求时，必须修改多出代码，这时候就应该考虑修改子程序。
- 其他
    达到重构的目的，形成中央控制点，隐藏全局数据。限制变化带来的影响，子程序不是越小越好。

### 如何抽取子程序
- 高内聚：内聚是从功能角度来度量模块内的联系，一个好的内聚模块应当恰好做一件事。

    经过随机抽样的450份子程序调查发现，高内聚的子程序50%没有任何错误，而低内聚的子程序只有18%没有任何错误（1986）。而内聚性低的子程序比内聚性高的子程序比最高的出问题的几率高出7倍，修正成本高出20倍（越改越复杂）。

- 功能内聚
子程序应该达到高度内聚，最好只处理一件事情，如sin,getCustomerName等。
    - 顺序内聚
        某个子程序需要依赖其他子程序完成功能，这样的子程序就有顺序内聚性。
    - 过程的内聚性
        比较常见的内聚之一，指子程序的操作按指定的顺序进行。每个子程序返回下个子程序的参数。
    - 通信内聚
        子程序中的不同操作使用了相同的数据，但是不存在任何联系。通信内聚的子程序需要调用时候有顺序性，比如先初始化数据的子程序调用后再调用打印列表的子程序。所以这不是比较好的内聚方式。

### 不推荐使用的内聚：
- 逻辑内聚
通过传入控制标示（type,flag）等把若干操作放在同一子程序中。被称为“缺乏逻辑的内聚性”，应该避免这样的子程序出现。
- 巧合内聚
子程序中的各个操作没有任何关联，也被称为“无内聚”或“混乱的内聚”，应该避免这样的子程序出现。

#### 子程序名字

- 描述子程序所做所有属性，最好描述清楚输出值。
- 不要通过数字，或者不清晰的计算机术语，模糊的动词命名。
- 最佳长度为9~15个
- 强烈的动宾形式，不要写成宾动形式。在有对象调用的情况下，宾语有时可以省略，宾语即为this。

#### 子程序长度
- 10~50行最佳，一屏能显示下。

#### 参数
- 明确指定参数，而不要大量使用map,object这样的隐含参数。
- 按照输入-修改-输出的顺序排列。状态、易错的参数放到最后。
- 参数最多7个以内，如果超过7个应该拆解子程序。
- 如果要传递某个对象的一些值，要看具体情况，如果经常变动的参数列表，就应该传递对象，否则传递对象的属性。