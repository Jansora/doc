---
title: Mybatis 学习手册 - Jansora
order: 10
hero:
  title: Mybatis 学习手册
  desc: 📖 学习 Mybatis 的点点滴滴
  actions:
    - text: 快速开始
      link: /guide/query
---
# 简介
## 什么是 MyBatis？
MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

## 如何在 Spring Boot 中引入 Mybatis
`MAVEN` 引入
```xml
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.2.0</version>
</dependency>
```
`Gradle` 引入
```bash
implementation group: 'org.mybatis.spring.boot', name: 'mybatis-spring-boot-starter', version: '2.2.0'
```
<Alert type="info">
更多版本请点击 <a target="_blank" href="https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter"> 这里 </a> 查看
</Alert>


## 什么是 tk.mybatis? 

[tk.mybatis](https://github.com/abel533/Mapper) 是一个增强 Mybatis 基础功能的工具, 可以简化单表的增删改查操作, 告别低级重复代码, 更专注于业务.

`MAVEN` 引入
```xml
<dependency>
    <groupId>tk.mybatis</groupId>
    <artifactId>mapper-spring-boot-starter</artifactId>
    <version>2.1.5</version>
</dependency>
```
`Gradle` 引入
```bash
implementation group: 'tk.mybatis', name: 'mapper-spring-boot-starter', version: '2.1.5'
```

<Alert type="info">
更多版本请点击 <a target="_blank" href="https://mvnrepository.com/artifact/tk.mybatis/mapper-spring-boot-starter/2.1.5"> 这里 </a> 查看
</Alert>