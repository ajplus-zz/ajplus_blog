import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as e,b as l,a as r,w as d,d as t,e as s}from"./app-34010d88.js";const p={},u=t('<p>Linux系统的版本分为 <code>内核版</code> 和 <code>发行版</code>；</p><p>内核版</p><ul><li><p>由Linus Torvalds及其团队开发、维护</p></li><li><p>免费、开源</p></li><li><p>负责控制硬件</p></li></ul><p>发行版</p><ul><li><p>基于Linux内核版进行扩展</p></li><li><p>由各个Linux厂商开发、维护</p></li><li><p>有收费版本和免费版本</p></li></ul><p>我们使用Linux操作系统，实际上选择的是Linux的发行版本；在linux系统中，有各种各样的发行版本，具体如下：</p><table><thead><tr><th>发行版本</th><th>特点</th></tr></thead><tbody><tr><td><code>Ubuntu</code></td><td>以桌面应用为主</td></tr><tr><td><code>RedHat</code></td><td>应用最广泛、收费</td></tr><tr><td><code>CentOS</code></td><td>RedHat的社区版、免费</td></tr><tr><td><code>openSUSE</code></td><td>对个人完全免费、图形界面华丽</td></tr><tr><td><code>Fedora</code></td><td>功能完备、快速更新、免费</td></tr><tr><td><code>红旗Linux</code></td><td>北京中科红旗软件技术有限公司开发</td></tr></tbody></table><br><h3 id="_1-安装-vmware" tabindex="-1"><a class="header-anchor" href="#_1-安装-vmware" aria-hidden="true">#</a> 1. 安装 VMware</h3><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (1).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (2).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h3 id="_2-安装linux" tabindex="-1"><a class="header-anchor" href="#_2-安装linux" aria-hidden="true">#</a> 2. 安装Linux</h3><p>VMware虚拟机安装完毕之后，我们就可以打开VMware，并在上面来安装Linux操作系统；具体步骤如下：</p><p><strong>1). 选择创建新的虚拟机</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (3).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>2). 选择&quot;典型&quot;配置</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (4).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>3). 选择&quot;稍后安装操作系统(S)&quot;</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (5).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>4). 选择&quot;Linux&quot;操作系统,&quot;CentOS7 64位&quot;版本</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (6).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>5). 设置虚拟机的名称及系统文件存放路径</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (7).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>6). 设置磁盘容量</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (8).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>7). 自定义硬件信息</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (9).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>8). 启动上述创建的新虚拟机</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (10).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>9). 选择&quot;Install CentOS7&quot;</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (11).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>进入到Linux系统里面, 我们发现光标无法移动到windows操作系统中了, 这个时候, 我们可以通过快捷键 &quot;Ctrl+Alt&quot; 切换光标到windows系统中；</p></blockquote><br><p><strong>10). 选择语言为 &quot;简体中文&quot;</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (12).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>11). 选择&quot;自动配置分区&quot;</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (13).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p>12). 选择&quot;最小安装&quot;</p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (14).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><p><strong>13). 设置&quot;root&quot;用户密码</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (15).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装完毕后，点击窗口中的蓝色的 &quot;重启&quot; 按钮，重启Linux系统；</p><br><p><strong>14). 登录系统</strong></p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (16).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',57),c=t(`<br><h3 id="_3-网卡设置" tabindex="-1"><a class="header-anchor" href="#_3-网卡设置" aria-hidden="true">#</a> 3. 网卡设置</h3><p>服务器重启完成之后，我们可以通过linux的指令 <code>ip addr</code> 来查询Linux系统的IP地址，具体信息如下:</p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (17).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从图中我们可以看到，并没有获取到linux系统的IP地址，这是为什么呢？这是由于启动服务器时未加载网卡，导致IP地址初始化失败而造成的；那么接下来我们就需要来修改网络初始化配置，设定网卡在系统启动时初始化；</p><p><strong>具体操作步骤如下：</strong></p><p>1). 修改网卡的配置项</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cd <span class="token operator">/</span>				进入根目录
cd etc				进入etc目录
cd sysconfig		进入sysconfig目录
cd network<span class="token operator">-</span>scripts	进入network<span class="token operator">-</span>scripts
vi ifcfg<span class="token operator">-</span>ens33		编辑ifcfg<span class="token operator">-</span>ens33文件


进入文件后执行如下操作<span class="token operator">:</span> 
①<span class="token punctuation">.</span> 按 i 键 		 进入编辑状态
②<span class="token punctuation">.</span> 按↑↓键来移动光标<span class="token punctuation">,</span> 删除no<span class="token punctuation">,</span>输入yes 
③<span class="token punctuation">.</span> 按 <span class="token constant">ESC</span> 键
④<span class="token punctuation">.</span> 输入 <span class="token operator">:</span>wq
⑤<span class="token punctuation">.</span> 按 <span class="token constant">ENTER</span>	保存退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (18).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>备注: 在上述的操作中用到了Linux中的相关指令, 目前大家不用深究, 后面会详细讲解, 目前大家只需要把这个文件的配置项ONBOOT的值有no改为yes即可；</p></blockquote><br><p>2). 重新启动虚拟机</p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (19).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>重启之后, 再次输入root的用户名密码，登录到Linux系统之后，可以通过指令 <code>ip addr</code> 来查看IP地址；</p><figure><img src="http://manufactory.ajplus.cn/blog/linux/ajplus_linux (20).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h3 id="_4-安装yum-wget" tabindex="-1"><a class="header-anchor" href="#_4-安装yum-wget" aria-hidden="true">#</a> 4. 安装yum&amp;wget</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
yum <span class="token function">install</span> <span class="token function">wget</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用户可以使用 yum 来搜索、安装、更新、删除系统中的软件包，而无需手动解决各个软件包之间的依赖问题；</p><p>wget 是一个网络下载工具，它允许用户在命令行界面下从互联网上下载文件；</p><br><h3 id="_5-本机安装ssh连接工具" tabindex="-1"><a class="header-anchor" href="#_5-本机安装ssh连接工具" aria-hidden="true">#</a> 5. 本机安装SSH连接工具</h3><p>SSH（Secure Shell），建立在应用层基础上的安全协议；常用的SSH连接工具:</p><table><thead><tr><th>SSH工具</th><th>说明</th></tr></thead><tbody><tr><td>putty</td><td>免费, 界面简单, 功能单一</td></tr><tr><td>secureCRT</td><td>收费, 功能强大</td></tr><tr><td>xshell</td><td>收费版/免费版</td></tr><tr><td>finalshell</td><td>免费, 功能强大, 界面效果好 (课程中采用)</td></tr></tbody></table><br><h3 id="_6-linux目录结构" tabindex="-1"><a class="header-anchor" href="#_6-linux目录结构" aria-hidden="true">#</a> 6. Linux目录结构</h3><table><thead><tr><th>目录</th><th>含义</th></tr></thead><tbody><tr><td><code>/bin</code></td><td>存放二进制可执行文件</td></tr><tr><td><code>/boot</code></td><td>存放系统引导时使用的各种文件</td></tr><tr><td><code>/dev</code></td><td>存放设备文件</td></tr><tr><td><code>/etc</code></td><td>存放系统配置文件</td></tr><tr><td><code>/home</code></td><td>存放系统用户的文件</td></tr><tr><td><code>/lib</code></td><td>存放程序运行所需的共享库和内核模块</td></tr><tr><td><code>/opt</code></td><td>额外安装的可选应用程序包所放置的位置</td></tr><tr><td><code>/root</code></td><td>超级用户目录</td></tr><tr><td><code>/sbin</code></td><td>存放二进制可执行文件，只有root用户才能访问</td></tr><tr><td><code>/tmp</code></td><td>存放临时文件</td></tr><tr><td><code>/usr</code></td><td>存放系统应用程序</td></tr><tr><td><code>/var</code></td><td>存放运行时需要改变数据的文件，例如日志文件</td></tr></tbody></table><br>`,28);function g(f,b){const n=i("font");return o(),e("div",null,[u,l("blockquote",null,[r(n,{color:"red"},{default:d(()=>[s("注意 : 在Linux系统中，在命令行中输入密码信息，为了保证安全性，密码是不显示的(看似没有输入，实际已经输入了)；")]),_:1})]),c])}const m=a(p,[["render",g],["__file","index.html.vue"]]);export{m as default};