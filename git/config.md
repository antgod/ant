
```

$ cd ~/.gitconfig //查看用户配置文件,全局使用 /etc/gitconfig 

$ git config --list  //查看用户配置

//每次 Git 提交时都会引用这两条信息，说明是谁提交了更新，所以会随更新内容一起被永久纳入历史记,如果不需要全局修改，去掉global
 
$ git config --global user.name "John Doe” //配置用户名

$ git config --global user.email johndoe@example.com //配置邮箱
```