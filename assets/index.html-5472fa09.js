import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-34010d88.js";const i={},l=e(`<h2 id="linux常用命令" tabindex="-1"><a class="header-anchor" href="#linux常用命令" aria-hidden="true">#</a> Linux常用命令</h2><h3 id="_1-常用命令" tabindex="-1"><a class="header-anchor" href="#_1-常用命令" aria-hidden="true">#</a> 1. 常用命令</h3><table><thead><tr><th>命令</th><th>对应英文</th><th>作用</th></tr></thead><tbody><tr><td>ls [目录名]</td><td>list</td><td>查看当前目录下的内容</td></tr><tr><td>pwd</td><td>print work directory</td><td>查看当前所在目录</td></tr><tr><td>cd [目录名]</td><td>change directory</td><td>切换目录</td></tr><tr><td>touch [文件名]</td><td>touch</td><td>如果文件不存在,创建文件</td></tr><tr><td>mkdir [目录名]</td><td>make directory</td><td>创建目录</td></tr><tr><td>rm [文件名]</td><td>remove</td><td>删除指定文件</td></tr></tbody></table><p>在执行Linux命令时，提示信息如果显示为乱码，是由于编码问题导致，只需要修改Linux的编码即可，命令如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;LANG=&quot;en_US.UTF-8&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
	
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-操作目录" tabindex="-1"><a class="header-anchor" href="#_2-操作目录" aria-hidden="true">#</a> 2. 操作目录</h3><ul><li><code>ls</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 显示指定目录下的内容
语法: <span class="token function">ls</span> <span class="token punctuation">[</span>-al<span class="token punctuation">]</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
说明: 
	<span class="token parameter variable">-a</span> 显示所有文件及目录 <span class="token punctuation">(</span>. 开头的隐藏文件也会列出<span class="token punctuation">)</span>
	<span class="token parameter variable">-l</span> 除文件名称外，同时将文件型态<span class="token punctuation">(</span>d表示目录，-表示文件<span class="token punctuation">)</span>、权限、拥有者、文件大小等信息详细列出
	
注意: 
	由于我们使用ls命令时经常需要加入-l选项，所以Linux为ls -l命令提供了一种简写方式，即ll
	
常见用法: 
	<span class="token function">ls</span> <span class="token parameter variable">-al</span> 	      查看当前目录的所有文件及目录详细信息
	<span class="token function">ls</span> <span class="token parameter variable">-al</span> /etc   查看/etc目录下所有文件及目录详细信息
	ll  	      查看当前目录文件及目录的详细信息 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li><code>cat</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 用于显示文件内容
语法: <span class="token function">cat</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> fileName

说明:
	-n: 由1开始对所有输出的行数编号

举例:
	<span class="token function">cat</span> /etc/profile		查看/etc目录下的profile文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li><code>more</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 以分页的形式显示文件内容
语法: <span class="token function">more</span> fileName

操作说明:
    回车键 	向下滚动一行
    空格键 	向下滚动一屏
    b 		  返回上一屏
    q或者Ctrl+C	退出more
	
举例：
	<span class="token function">more</span> /etc/profile		以分页方式显示/etc目录下的profile文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li><code>tail</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 查看文件末尾的内容
语法: <span class="token function">tail</span> <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> fileName

说明:
	<span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 动态读取文件末尾内容并显示，通常用于日志文件的内容输出
	
举例: 
<span class="token function">tail</span> /etc/profile		显示/etc目录下的profile文件末尾10行的内容
<span class="token function">tail</span> <span class="token parameter variable">-20</span> /etc/profile	显示/etc目录下的profile文件末尾20行的内容
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /ajplus/my.log	动态读取/ajplus目录下的my.log文件末尾内容并显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li><code>mkdir</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 创建目录
语法: <span class="token function">mkdir</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> dirName

说明: 
	-p: 确保目录名称存在，不存在的就创建一个；通过此选项，可以实现多层目录同时创建

举例: 
    <span class="token function">mkdir</span> ajplus  在当前目录下，建立一个名为ajplus的子目录
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ajplus/test   在工作目录下的ajplus目录中建立一个名为test的子目录，若ajplus目录不存在，则建立一个 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li><code>rmdir</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 删除空目录
语法: <span class="token function">rmdir</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> dirName

说明:
	-p: 当子目录被删除后使父目录为空目录的话，则一并删除

举例:
    <span class="token function">rmdir</span> ajplus   删除名为ajplus的空目录
    <span class="token function">rmdir</span> <span class="token parameter variable">-p</span> ajplus/test   删除ajplus目录中名为test的子目录，若test目录删除后ajplus目录变为空目录，则也被删除
    <span class="token function">rmdir</span> ajplus*   删除名称以ajplus开始的空目录
    <span class="token function">rmdir</span> *ajplus   删除以ajplus结尾的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li><code>rm</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 删除文件或者目录
语法: <span class="token function">rm</span> <span class="token punctuation">[</span>-rf<span class="token punctuation">]</span> name

说明: 
    -r: 将目录及目录中所有文件（目录）逐一删除，即递归删除
    -f: 无需确认，直接删除
	
举例: 
    <span class="token function">rm</span> <span class="token parameter variable">-r</span> ajplus/     删除名为ajplus的目录和目录中所有文件，删除前需确认
    <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ajplus/    无需确认，直接删除名为ajplus的目录和目录中所有文件
    <span class="token function">rm</span> <span class="token parameter variable">-f</span> hello.txt   无需确认，直接删除hello.txt文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-拷贝移动" tabindex="-1"><a class="header-anchor" href="#_3-拷贝移动" aria-hidden="true">#</a> 3. 拷贝移动</h3><ul><li><code>cp</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 用于复制文件或目录
语法: <span class="token function">cp</span> <span class="token punctuation">[</span>-r<span class="token punctuation">]</span> <span class="token builtin class-name">source</span> dest

说明: 
	-r: 如果复制的是目录需要使用此选项，此时将复制该目录下所有的子目录和文件

举例: 
    <span class="token function">cp</span> hello.txt ajplus/            将hello.txt复制到ajplus目录中
    <span class="token function">cp</span> hello.txt ./hi.txt           将hello.txt复制到当前目录，并改名为hi.txt
    <span class="token function">cp</span> <span class="token parameter variable">-r</span> ajplus/ ./ajplus/     	将ajplus目录和目录下所有文件复制到ajplus目录下
    <span class="token function">cp</span> <span class="token parameter variable">-r</span> ajplus/* ./ajplus/ 	 	将ajplus目录下所有文件复制到ajplus目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果拷贝的内容是目录，需要加上参数 -r</p><br><ul><li><code>mv</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 为文件或目录改名、或将文件或目录移动到其它位置
语法: <span class="token function">mv</span> <span class="token builtin class-name">source</span> dest

举例: 
    <span class="token function">mv</span> hello.txt hi.txt                 将hello.txt改名为hi.txt
    <span class="token function">mv</span> hi.txt ajplus/                  将文件hi.txt移动到ajplus目录中
    <span class="token function">mv</span> hi.txt ajplus/hello.txt   		将hi.txt移动到ajplus目录中，并改名为hello.txt
    <span class="token function">mv</span> ajplus/ ajplus/                 如果ajplus目录不存在，将ajplus目录改名为ajplus
    <span class="token function">mv</span> ajplus/ ajplus/                 如果ajplus目录存在，将ajplus目录移动到ajplus目录中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-打包压缩" tabindex="-1"><a class="header-anchor" href="#_4-打包压缩" aria-hidden="true">#</a> 4. 打包压缩</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 对文件进行打包、解包、压缩、解压
语法: <span class="token function">tar</span>  <span class="token punctuation">[</span>-zcxvf<span class="token punctuation">]</span>  fileName  <span class="token punctuation">[</span>files<span class="token punctuation">]</span>
    包文件后缀为.tar表示只是完成了打包，并没有压缩
    包文件后缀为.tar.gz表示打包的同时还进行了压缩

说明:
    -z: z代表的是gzip，通过gzip命令处理文件，gzip可以对文件压缩或者解压
    -c: c代表的是create，即创建新的包文件
    -x: x代表的是extract，实现从包文件中还原文件
    -v: v代表的是verbose，显示命令的执行过程
    -f: f代表的是file，用于指定包文件的名称

举例：
    打包
        <span class="token function">tar</span> <span class="token parameter variable">-cvf</span> hello.tar ./*		  		将当前目录下所有文件打包，打包后的文件名为hello.tar
        <span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> hello.tar.gz ./*		  	将当前目录下所有文件打包并压缩，打包后的文件名为hello.tar.gz
		
    解包
        <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> hello.tar		  			将hello.tar文件进行解包，并将解包后的文件放在当前目录
        <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> hello.tar.gz		  		将hello.tar.gz文件进行解压，并将解压后的文件放在当前目录
        <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> hello.tar.gz <span class="token parameter variable">-C</span> /usr/local     将hello.tar.gz文件进行解压，并将解压后的文件放在/usr/local目录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_5-文本编辑" tabindex="-1"><a class="header-anchor" href="#_5-文本编辑" aria-hidden="true">#</a> 5. 文本编辑</h3><p><code>vi</code>命令是Linux系统提供的一个文本编辑工具，可以对文件内容进行编辑，类似于Windows中的记事本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> fileName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>vim</code>是从<code>vi</code>发展来的一个功能更加强大的文本编辑工具，编辑文件时可以对文本内容进行着色，方便我们对文件进行编辑处理，所以实际工作中<code>vim</code>更加常用；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">vim</span> <span class="token comment">#安装vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>命令模式指令</th><th>含义</th></tr></thead><tbody><tr><td>gg</td><td>定位到文本内容的第一行</td></tr><tr><td>G</td><td>定位到文本内容的最后一行</td></tr><tr><td>dd</td><td>删除光标所在行的数据</td></tr><tr><td>ndd</td><td>删除当前光标所在行及之后的n行数据</td></tr><tr><td>u</td><td>撤销操作</td></tr><tr><td>shift+zz</td><td>保存并退出</td></tr><tr><td>i 或 a 或 o</td><td>进入插入模式</td></tr></tbody></table><table><thead><tr><th>底行模式命令</th><th>含义</th></tr></thead><tbody><tr><td>:wq</td><td>保存并退出</td></tr><tr><td>:q!</td><td>不保存退出</td></tr><tr><td>:set nu</td><td>显示行号</td></tr><tr><td>:set nonu</td><td>取消行号显示</td></tr><tr><td>:n</td><td>定位到第n行, 如 :10 就是定位到第10行</td></tr></tbody></table><br><h3 id="_6-查找" tabindex="-1"><a class="header-anchor" href="#_6-查找" aria-hidden="true">#</a> 6. 查找</h3><ul><li><code>find</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 在指定目录下查找文件
语法: <span class="token function">find</span> dirName <span class="token parameter variable">-option</span> fileName
举例:
    <span class="token function">find</span>  <span class="token builtin class-name">.</span>  –name <span class="token string">&quot;*.java&quot;</span>			在当前目录及其子目录下查找.java结尾文件
    <span class="token function">find</span>  /ajplus  <span class="token parameter variable">-name</span> <span class="token string">&quot;*.java&quot;</span>	在/ajplus目录及其子目录下查找.java结尾的文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li><code>grep</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>作用: 从指定文件中查找指定的文本内容
语法: <span class="token function">grep</span> word fileName
举例: 
    <span class="token function">grep</span> Hello HelloWorld.java	查找HelloWorld.java文件中出现的Hello字符串的位置
    <span class="token function">grep</span> hello *.java			查找当前目录中所有.java结尾的文件中包含hello字符串的位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,54),t=[l];function d(c,r){return s(),a("div",null,t)}const v=n(i,[["render",d],["__file","index.html.vue"]]);export{v as default};
