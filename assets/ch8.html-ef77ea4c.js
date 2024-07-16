import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as c,c as l,b as e,e as o}from"./app-34010d88.js";const n={},a=e("p",null,[e("code",null,"JVM"),o("：Java程序的运行环境，管理线程的整个生命周期，包括创建、调度、同步和销毁，适用于Tomcat上的Web应用等；它内置线程调度器，根据系统策略分配CPU时间给线程；操作系统主要提供基本的资源分配，如内存、CPU时间片等，而不直接干涉到"),e("code",null,"jvm"),o("内部；")],-1),s=e("p",null,[e("code",null,"Tomcat"),o("：一个Java应用服务器，专注于处理HTTP请求、Web应用管理和Servlet/JSP运行；它虽自行创建线程处理任务如监听和调度，但实际上依赖JVM进行线程管理，从而在更高层面上实现了对并发请求的有效处理和资源调度；")],-1),_=e("p",null,"简而言之，JVM是线程管理的底层基础设施，而Tomcat则是在JVM之上，利用这些基础设施来实现Web应用的并发处理和任务调度；",-1),r=e("p",null,"在具体场景如外卖项目，用户交互如登录、浏览商品、退出登录等，每个操作触发的请求由Tomcat使用线程池中的线程来响应：线程池分配线程处理请求，执行相关逻辑后线程返回池中待用，而非频繁创建销毁，以此提升效率和资源利用；线程的生命周期随请求开始而激活，完成任务后归还，仅在Tomcat关闭或特殊配置下线程才被销毁；",-1),d=[a,s,_,r];function m(u,i){return c(),l("div",null,d)}const f=t(n,[["render",m],["__file","ch8.html.vue"]]);export{f as default};
