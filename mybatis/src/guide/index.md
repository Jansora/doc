---
nav:
  title: 速查速记
  path: /guide
---
# 简介
## 什么是 MyBatis？
MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

## 如何在 Spring Boot 中引入 Mybatis
`MAVEN ` 引入
```xml
<!-- https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.2.0</version>
</dependency>
```
`Gradle` 引入
```
// https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter
implementation group: 'org.mybatis.spring.boot', name: 'mybatis-spring-boot-starter', version: '2.2.0'
```

更多版本请点击 [这里](https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter) 查看

## 优秀的 Mybatis 工具
### tk.mybatis
tk.mybatis 可以简化单表的增删改查操作. 告别低级重复代码, 更专注于业务.
`MAVEN ` 引入
```xml
<!-- https://mvnrepository.com/artifact/tk.mybatis/mapper-spring-boot-starter -->
<dependency>
    <groupId>tk.mybatis</groupId>
    <artifactId>mapper-spring-boot-starter</artifactId>
    <version>2.1.5</version>
</dependency>
```
`Gradle` 引入
```
implementation group: 'tk.mybatis', name: 'mapper-spring-boot-starter', version: '2.1.5'
```
更多版本请点击 [这里](https://mvnrepository.com/artifact/tk.mybatis/mapper-spring-boot-starter/2.1.5) 查看
