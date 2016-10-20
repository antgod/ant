###编写文档

所有功能点必须提交配套文档，文档须满足以下要求

- 必须说清楚问题的几个方面：what（是什么），why（为什么），how（怎么做），可根据问题的特性有所侧重。
- how 部分必须包含详尽完整的操作步骤，必要时附上 足够简单，可运行 的范例代码，所有范例代码放在 chair/examples 库中。
- 提供必要的链接，如申请流程，术语解释和参考文档等。

####代码风格

你的代码风格必须通过 jslint，你可以运行 npm run lint 本地测试。

####Commit 提交规范

根据 angular 规范提交 commit，这样 history 看起来更加清晰，还可以自动生成 changelog。
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
1. type

    提交 commit 的类型，包括以下几种
    
    1. feat: 新功能
    2. fix: 修复问题
    3. docs: 修改文档
    4. style: 修改代码格式，不影响代码逻辑
    5. refactor: 重构代码，理论上不影响现有功能
    6. perf: 提升性能
    7. test: 增加修改测试用例
    8. chore: 修改工具相关（包括但不限于文档、代码生成，Makefile 修改）
    9. deps: 升级依赖

2. scope

    修改文件的范围（包括但不限于 doc, middleware, proxy, core, config）

3. subject

    用一句话清楚的描述这次提交做了什么

4. body

    补充 subject，适当增加原因、目的等相关因素，也可不写。

5. footer

    当有非兼容修改时可在这里描述清楚
    关联相关 issue，如 Closes #1, #2, #3
    如果功能点有新增或修改的，还需要关联 chair-handbook 和 chair-init 的 MR

示例
```
fix($compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

