1. 组件库：
    - 增加Taggroup/CheckboxGroup组件与新增/修复组件文档
    - DropDown增加按钮样式；Icon,Col,Row增加点击事件；表单组件全部增加rquired,label,help属性；日期组件增加时分秒等
    - 修复Table组件全选bug，onSelect参数顺序。修复Tree展开/收起bug，并增加isLeaf属性。

2. 业务组件重构剩余问题修改，增加图标样式。

3. 热键包部分功能与引擎文档编写中

CR：

关于代码重构：

1. 右键菜单

    constructor=> getter
    去掉enables,让用户自己编写compose函数合并初始化enables函数
    
2. 代码重构会遗漏之前的部分功能

   增加caution

3. 经常修改的东西不要以json中键作为字段

    数据格式改成平铺

4. 函数参数问题

    {固定参数},其他参数平铺 

5. listenCommon逻辑太多，以后要拆文件

6. 同步修改state与修改深度对象后不刷新页面store bug

7. store没有bind导致报错，treetool鼠标滑过，我觉得没有必要走一遍createFlagTree

8. 业务组件需求提出过于频繁

单开个issue记录需求