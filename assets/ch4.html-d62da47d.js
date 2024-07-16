import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-34010d88.js";const c={},t=e(`<p>泛型，就是类型的参数化，类型不再固定，而是根据使用时传入的类的类型而定；</p><p>泛型统一并约束类型，提升代码复用性和安全性；在编译时才进行类型检查，即提前发现类型转换错误，又消除强制类型转换，代码更简洁安全；</p><p>泛型未明确指定时，默认为Object类型；不支持基本类型，需使用包装类；接受类型及其子类，增强灵活性；</p><p>泛型的标识可以是任意字母，但是为了规范，行业内有默认的规则：</p><ul><li><code>T</code>：代表通用类型，常用作首个泛型参数，表示任意类型；</li><li><code>S</code>, <code>U</code>, <code>V</code>：当需要额外的泛型类型参数时，依次使用这些字母，以支持多类型参数的需求；</li><li><code>E</code>：特指集合（<code>Collection</code>）中的元素类型（<code>Element</code>），适用于定义集合类的泛型；</li><li><code>K</code>, <code>V</code>：在映射（<code>Map</code>）类型中，分别代表键（<code>Key</code>）和值（<code>Value</code>）的泛型类型；</li><li><code>N</code>：较少见，有时用于表示数值类型（<code>Number</code>）的泛型约束；</li></ul><p>泛型的使用分为三种类型：泛型类、泛型接口、泛型方法</p><ul><li><strong>泛型类</strong>（<code>Generic Class</code>）：指在类定义中使用一个或多个类型参数的类；例如，定义一个可以持有任意类型对象的容器类：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">T</span> t<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>t <span class="token operator">=</span> t<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> t<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，<code>T</code> 是类型参数，实际使用时可以替换成任何具体类型，如 <code>Box&lt;String&gt;</code> 或 <code>Box&lt;Integer&gt;</code>；</p><ul><li><strong>泛型接口</strong>（<code>Generic Interface</code>）：接口也可以定义为泛型的，允许接口的实现者决定具体类型；</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">T</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>泛型方法</strong>（<code>Generic Method</code>）：在非泛型类中，也可以定义泛型方法；泛型方法独立于类的泛型参数，有自己的类型参数列表；</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Util</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">makeList</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> elements<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">T</span> elem <span class="token operator">:</span> elements<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，<code>&lt;T&gt;</code> 定义在方法名前，表明这是一个泛型方法，可以处理任何类型的数组并返回相应类型的列表；</p><p><strong>类型通配符</strong>（<code>Wildcard</code>）：用于表示未知类型或者一组特定类型的父类；</p><p>主要有两种形式：无界通配符（<code>?</code>）和有界通配符（如 <code>? extends Number</code> 或 <code>? super Integer</code>）；</p><ul><li><code>List&lt;?&gt;</code> 可以接受任何类型的<code>List</code>；</li><li><code>List&lt;? extends Number&gt;</code> 可接受<code>Number</code>及其子类的<code>List</code>；</li><li><code>List&lt;? super Integer&gt;</code> 可接受<code>Integer</code>及其父类的<code>List</code>；</li></ul>`,17),p=[t];function o(l,i){return s(),a("div",null,p)}const k=n(c,[["render",o],["__file","ch4.html.vue"]]);export{k as default};