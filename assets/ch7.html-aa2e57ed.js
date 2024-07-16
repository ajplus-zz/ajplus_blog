const e=JSON.parse('{"key":"v-3222e660","path":"/code_note/java/01_base/ch7.html","title":"7）悲观锁和乐观锁","lang":"zh-CN","frontmatter":{"icon":"markdown","title":"7）悲观锁和乐观锁","category":["java"],"tag":["basic"],"description":"悲观锁和乐观锁是在并发编程中用于解决数据竞争问题的两种不同的策略；它们的主要区别基于对共享资源（如数据）被并发修改的概率的不同假设，以及对冲突解决的方法； 悲观锁：（Pessimistic Locking） 悲观锁假设在多数情况下，多个事务并发访问同一数据时可能会发生冲突，因此在实际修改数据之前，它会先获取数据锁；这样做可以保证同一时间只有一个事务能修改数据，从而防止了冲突；如果在获取锁时遇到其他事务已经持有了该锁，那么当前事务会被阻塞，直到锁被释放； 在数据库层面，悲观锁通常通过SELECT FOR UPDATE语句实现，它会锁定选中的数据行，直到事务结束； 在编程语言中，如java，可以通过synchronized关键字或ReentrantLock实现悲观锁；","head":[["meta",{"property":"og:url","content":"https://ajplus.cn/code_note/java/01_base/ch7.html"}],["meta",{"property":"og:title","content":"7）悲观锁和乐观锁"}],["meta",{"property":"og:description","content":"悲观锁和乐观锁是在并发编程中用于解决数据竞争问题的两种不同的策略；它们的主要区别基于对共享资源（如数据）被并发修改的概率的不同假设，以及对冲突解决的方法； 悲观锁：（Pessimistic Locking） 悲观锁假设在多数情况下，多个事务并发访问同一数据时可能会发生冲突，因此在实际修改数据之前，它会先获取数据锁；这样做可以保证同一时间只有一个事务能修改数据，从而防止了冲突；如果在获取锁时遇到其他事务已经持有了该锁，那么当前事务会被阻塞，直到锁被释放； 在数据库层面，悲观锁通常通过SELECT FOR UPDATE语句实现，它会锁定选中的数据行，直到事务结束； 在编程语言中，如java，可以通过synchronized关键字或ReentrantLock实现悲观锁；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ajplus"}],["meta",{"property":"article:tag","content":"basic"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7）悲观锁和乐观锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ajplus\\",\\"url\\":\\"https://github.com/ajplus-zz/\\",\\"email\\":\\"ajplusdd@gmail.com\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.09,"words":626},"filePathRelative":"code_note/java/01_base/ch7.md","excerpt":"<p>悲观锁和乐观锁是在并发编程中用于解决数据竞争问题的两种不同的策略；它们的主要区别基于对共享资源（如数据）被并发修改的概率的不同假设，以及对冲突解决的方法；</p>\\n<p><strong>悲观锁</strong>：（<code>Pessimistic Locking</code>）</p>\\n<p>悲观锁假设在多数情况下，多个事务并发访问同一数据时可能会发生冲突，因此在实际修改数据之前，它会先获取数据锁；这样做可以保证同一时间只有一个事务能修改数据，从而防止了冲突；如果在获取锁时遇到其他事务已经持有了该锁，那么当前事务会被阻塞，直到锁被释放；</p>\\n<ul>\\n<li>在数据库层面，悲观锁通常通过<code>SELECT FOR UPDATE</code>语句实现，它会锁定选中的数据行，直到事务结束；</li>\\n<li>在编程语言中，如java，可以通过<code>synchronized</code>关键字或<code>ReentrantLock</code>实现悲观锁；</li>\\n</ul>","autoDesc":true}');export{e as data};