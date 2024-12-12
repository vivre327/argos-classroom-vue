<template>
  <div class="docs-container">
    <!-- 사이드바 -->
    <aside class="docs-sidebar">
      <h1 class="docs-logo"><i>💠</i>Argos Classroom<br>Design System</h1>
      <ul>
        <li v-for="(item, index) in SidebarPubLinks" :key="index">
          <a href="#" @click.prevent="activePubComponent = item.component" 
             :class="{ active: activePubComponent === item.component }">
            <span v-if="item.del"><del>{{ item.name }}</del></span>
            <span v-else>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </aside>

    <!-- 메인 콘텐츠 -->
    <main class="docs-main">

      <div v-show="activePubComponent === 'token'" class="component-section">
        <section class="component-header">
          <h2>Design Tokens</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
          </ul>
        </section>
        <section class="component-main">
          
          <!-- Black and White Colors -->
          <h3>Color System</h3>
          <h4>Black &amp; White</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-black);" >Black<br>#000000</div>
            <div class="color-chip" style="background-color: var(--color-white); color: var(--color-black); border:1px solid var(--color-gray-02)" >White<br>#FFFFFF</div>
          </div>
          
          <!-- Grayscale Colors -->
          <h4>Grayscale Colors</h4>
          <p class="docs-desc">Grayscale은 주로 Text, Line에 사용</p>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-gray-10);" >color-gray-10<br>#141426</div>
            <div class="color-chip" style="background-color: var(--color-gray-09);" >color-gray-09<br>#1C283E</div>
            <div class="color-chip" style="background-color: var(--color-gray-08);" >color-gray-08<br>#3D4A62</div>
            <div class="color-chip" style="background-color: var(--color-gray-07);" >color-gray-07<br>#65728A</div>
            <div class="color-chip" style="background-color: var(--color-gray-06);" >color-gray-06<br>#808998</div>
            <div class="color-chip" style="background-color: var(--color-gray-05);" >color-gray-05<br>#AAB0BB</div>
            <div class="color-chip" style="background-color: var(--color-gray-04);" >color-gray-04<br>#C6CAD1</div>
            <div class="color-chip" style="background-color: var(--color-gray-03); color: #555;" >color-gray-03<br>#D9DBE0</div>
            <div class="color-chip" style="background-color: var(--color-gray-02); color: #555;" >color-gray-02<br>#EDF1F1</div>
            <div class="color-chip" style="background-color: var(--color-gray-01); color: #555;" >color-gray-01<br>#F9FAFA</div>
          </div>
      
          <!-- Primary Colors -->
          <h4>Primary Colors</h4>
          <p class="docs-desc">Primary color는 버튼,  활성 상태와 같은 UI 전체의 주요 구성 요소에 사용</p>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-blue-10);" >color-blue-10<br>#0F2D63</div>
            <div class="color-chip" style="background-color: var(--color-blue-09);" >color-blue-09<br>#143B81</div>
            <div class="color-chip" style="background-color: var(--color-blue-08);" >color-blue-08<br>#1A4CA7</div>
            <div class="color-chip" style="background-color: var(--color-blue-07);" >color-blue-07<br>#2161D6</div>
            <div class="color-chip" style="background-color: var(--color-blue-06);" >color-blue-06<br>#246BEB</div>
            <div class="color-chip" style="background-color: var(--color-blue-05);" >color-blue-05<br>#5089EF</div>
            <div class="color-chip" style="background-color: var(--color-blue-04);" >color-blue-04<br>#6C9CF2</div>
            <div class="color-chip" style="background-color: var(--color-blue-03); color: #555;" >color-blue-03<br>#9ABBF6</div>
            <div class="color-chip" style="background-color: var(--color-blue-02); color: #555;" >color-blue-02<br>#BBD1F9</div>
            <div class="color-chip" style="background-color: var(--color-blue-01); color: #555;" >color-blue-01<br>#E9F0FD</div>
          </div>
      
          <!-- Text Colors -->
          <h4>Text Colors</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-text-01); color: #fff;" >color-text-01<br>#141426</div>
            <div class="color-chip" style="background-color: var(--color-text-02); color: #fff;" >color-text-02<br>#1C283E</div>
            <div class="color-chip" style="background-color: var(--color-text-03); color: #fff;" >color-text-03<br>#3D4A62</div>
            <div class="color-chip" style="background-color: var(--color-text-04); color: #fff;" >color-text-04<br>#65728A</div>
            <div class="color-chip" style="background-color: var(--color-text-05-disabled); color: #fff;" >color-text-05-disabled<br>#808998</div>
          </div>
      
          <!-- Background Colors -->
          <h4>Background Colors</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--bg-white); color: #333;">bg-white<br>#FFFFFF</div>
            <div class="color-chip" style="background-color: var(--bg-blue); color: #333;">bg-blue<br>#DDEBFF</div>
            <div class="color-chip" style="background-color: var(--bg-light-blue); color: #333;">bg-light-blue<br>#E7EDF6</div>
            <div class="color-chip" style="background-color: var(--gray); color: #333;">gray<br>#F4F4F5</div>
          </div>

          <!-- System Colors -->
          <h4>System Colors</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-badge-red);">color-badge-red<br>#DA0000</div>
            <div class="color-chip" style="background-color: var(--color-red);">color-red<br>#DA1E28</div>
            <div class="color-chip" style="background-color: var(--color-yellow); color:#333;">color-yellow<br>#FFD400</div>
            <div class="color-chip" style="background-color: var(--color-green);">color-green<br>#008A1E</div>
          </div>

          <!-- Mark Colors -->
          <h4>Mark Colors</h4>
          <div class="color-group">
              <div class="color-chip" style="background-color: var(--color-mark-badge-red); color:#333;">
                  color-mark-badge-red<br>#FFECFA
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-red); color:#333;">
                  color-mark-red<br>#FFE4D6
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-yellow); color:#333;">
                  color-mark-yellow<br>#FEF9DD
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-green); color:#333;">
                  color-mark-green<br>#E2F6EA
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-blue); color:#333;">
                  color-mark-blue<br>#E5F6FE
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-violet); color:#333;">
                  color-mark-violet<br>#F6F3FD
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-turquoise); color:#333;">
                  color-mark-turquoise<br>#D7F6F5
              </div>
          </div>

          <!-- Mark Text Colors Section -->
          <h4>Mark Text Colors</h4>
          <div class="color-group">
              <div class="color-chip" style="background-color: var(--color-mark-text-badge-red);">
                  color-mark-text-badge-red<br>rgba(251, 95, 106, 0.9)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-text-red);">
                  color-mark-text-red<br>rgba(255, 154, 74, 0.9)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-text-yellow);">
                  color-mark-text-yellow<br>rgba(250, 209, 85, 0.9)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-text-green);">
                  color-mark-text-green<br>rgba(125, 199, 92, 0.9)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-text-blue);">
                  color-mark-text-blue<br>rgba(20, 180, 242, 0.9)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-text-violet);">
                  color-mark-text-violet<br>rgba(157, 98, 218, 0.9)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-text-turquoise);">
                  color-mark-text-turquoise<br>rgba(82, 209, 190, 0.9)
              </div>
          </div>

          <!-- Mark Text Background Colors Section -->
          <h4>Mark Text Bg Colors</h4>
          <div class="color-group">
              <div class="color-chip" style="background-color: var(--color-mark-bg-badge-red); color:#333;">
                  color-mark-bg-badge-red<br>rgba(255, 236, 250, 0.8)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-bg-red); color:#333;">
                  color-mark-bg-red<br>rgba(255, 228, 214, 0.8)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-bg-yellow); color:#333;">
                  color-mark-bg-yellow<br>rgba(254, 249, 221, 0.8)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-bg-green); color:#333;">
                  color-mark-bg-green<br>rgba(226, 246, 234, 0.8)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-bg-blue); color:#333;">
                  color-mark-bg-blue<br>rgba(229, 246, 254, 0.8)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-bg-violet); color:#333;">
                  color-mark-bg-violet<br>rgba(246, 243, 253, 0.8)
              </div>
              <div class="color-chip" style="background-color: var(--color-mark-bg-turquoise); color:#333;">
                  color-mark-bg-turquoise<br>rgba(229, 246, 254, 0.8)
              </div>
          </div>

          <!-- Pointer Colors Section -->
          <h4>Pointer Colors</h4>
          <div class="color-group">
              <div class="color-chip" style="background-color: var(--color-draw-red);">
                  color-draw-red<br>#EE0000
              </div>
              <div class="color-chip" style="background-color: var(--color-draw-yellow);">
                  color-draw-yellow<br>#FF9900
              </div>
              <div class="color-chip" style="background-color: var(--color-draw-green);">
                  color-draw-green<br>#32CD32
              </div>
              <div class="color-chip" style="background-color: var(--color-draw-blue);">
                  color-draw-blue<br>#0074E5
              </div>
              <div class="color-chip" style="background-color: var(--color-draw-black);">
                  color-draw-black<br>#000000
              </div>
          </div>

          <!-- Badge Colors Section -->
          <h4>Badge Colors</h4>
          <div class="color-group">
              <div class="color-chip" style="background-color: var(--color-badge-tomato);">
                  color-badge-tomato<br>#FB5F6A
              </div>
              <div class="color-chip" style="background-color: var(--color-badge-orange);">
                  color-badge-orange<br>#FF9322
              </div>
              <div class="color-chip" style="background-color: var(--color-badge-yellow); color:#333;">
                  color-badge-yellow<br>#FFE773
              </div>
              <div class="color-chip" style="background-color: var(--color-badge-purple);">
                  color-badge-purple<br>#9D62DA
              </div>
          </div>

          <!-- New Divider Section -->
          <h4>Divider</h4>
          <div class="color-group">
              <div class="color-chip" style="background-color: var(--color-line-divider); color:#333;">
                  color-line-divider<br>#E6E6E6
              </div>
          </div>

          <!-- Border Radius -->
           <h3>Border Radius</h3>
           <div class="radius-group">
            <div class="radius-chip radius-1">
              <span>radius-1</span>
              <span>0.25rem (4px)</span>
            </div>
            <div class="radius-chip radius-2">
              <span>radius-2</span>
              <span>0.5rem (8px)</span>
            </div>
            <div class="radius-chip radius-3">
              <span>radius-3</span>
              <span>0.75rem (12px)</span>
            </div>
            <div class="radius-chip radius-4">
              <span>radius-4</span>
              <span>1rem (16px)</span>
            </div>
            <div class="radius-chip radius-circle">
              <span>radius-circle</span>
              <span>100%</span>
            </div>
            <div class="radius-chip radius-pill">
              <span>radius-pill</span>
              <span>999px</span>
            </div>
          </div>

          <!-- Typography -->
           <h3>Typography</h3>
           <h4>Title</h4>
           <div class="typography-group">
            <!-- Title Section -->
            <div class="font-item heading-04">
              <span>Heading-04</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item heading-03">
              <span>Heading-03</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item heading-02">
              <span>Heading-02</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item heading-01">
              <span>Heading-01</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item title-02-b">
              <span>Title-02-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item title-02-m">
              <span>Title-02-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item title-01-b">
              <span>Title-01-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item title-01-m">
              <span>Title-01-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item sub-title-01">
              <span>Sub Title-01</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            
            <!-- Body Section -->
            <h4>Body</h4>
            
            <div class="font-item body-02-b">
              <span>Body-02-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item body-02-m">
              <span>Body-02-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item body-01-b">
              <span>Body-01-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item body-01-m">
              <span>Body-01-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item caption-02-b">
              <span>Caption-02-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item caption-02-m">
              <span>Caption-02-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item caption-01-b">
              <span>Caption-01-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item caption-01-m">
              <span>Caption-01-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item label-01-b">
              <span>Label-01-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item label-01-m">
              <span>Label-01-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
          </div>
      
        </section>
      </div>

      <div v-show="activePubComponent === 'icon'" class="component-section">
        <section class="component-header">
          <h2>Icons</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Color</h3>
          <h4>Default</h4>
          <p class="docs-desc">아이콘의 기본 색상으로 변경하려는 경우 <code class="doc">.icon-default</code>를 추가한다.</p>
          <div class="component-preview"><span class="icon-container" title="Link icon"><svg
                class="icon icon-default">
                <use xlink:href="@/assets/images/icons/symbols.svg#link"></use>
              </svg></span></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class="icon-container" title="Description of icon when needed"&gt;
  &lt;svg class="icon icon-default"&gt;
    &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/span&gt;
            </code></pre>
          </div>
          <h4>Current</h4>
          <p class="docs-desc">아이콘 색상을 부모와 동일하게 변경하려는 경우 <code class="doc">.current-color</code>를 아이콘의 컨테이너에 추가한다.
          </p>
          <div class="component-preview"><span style="color:purple"><span class="icon-container current-color"
                title="Link icon"><svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#link_on"></use>
                </svg></span></span></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span style="color: purple;"&gt;
  &lt;span class="icon-container current-color" title="Description of icon when needed"&gt;
    &lt;svg class="icon"&gt;
      &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
    &lt;/svg&gt;
  &lt;/span&gt;
&lt;/span&gt;
            </code></pre>
          </div>
          <!-- <h4>Success</h4>
          <p class="docs-desc">아이콘 색상을 Success로 변경하려는 경우 <code class="doc">.icon-success</code>를 추가한다.</p>
          <div class="component-preview"><span class="icon-container" title="Link icon"><svg
                class="icon icon-success">
                <use xlink:href="@/assets/images/icons/symbols.svg#link_on"></use>
              </svg></span></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class="icon-container" title="Link icon"&gt;
  &lt;svg class="icon icon-success"&gt;
    &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/span&gt;
            </code></pre>
          </div> -->
          <!-- <h4>Error</h4>
          <p class="docs-desc">아이콘 색상을 Error로 변경하려는 경우 <code class="doc">.icon-error</code>를 추가한다.</p>
          <div class="component-preview"><span class="icon-container" title="Link icon"><svg
                class="icon icon-error">
                <use xlink:href="@/assets/images/icons/symbols.svg#link_on"></use>
              </svg></span></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class="icon-container" title="Link icon"&gt;
  &lt;svg class="icon icon-error"&gt;
    &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/span&gt;
            </code></pre>
          </div> -->
          <h3>Sizes</h3>
          <h4>Default</h4>
          <div class="component-preview">
            <svg class="icon">
              <use xlink:href="@/assets/images/icons/symbols.svg#link"></use>
            </svg>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;svg class="icon"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
&lt;/svg&gt;
            </code></pre>
          </div>

          <h4>Sizing</h4>
          <ul class="docs-list">
            <li>icon_x-small: 16px</li>
            <li>icon_small: 20px</li>
            <li>default: 24px</li>
            <li>icon_large: 32px</li>
            <li>icon_x-large: 40px</li>
          </ul>
          <div class="component-preview" style="display:flex; align-items:center">
            <svg class="icon icon_x-small">
              <use xlink:href="@/assets/images/icons/symbols.svg#link"></use>
            </svg>
            <svg class="icon icon_small">
              <use xlink:href="@/assets/images/icons/symbols.svg#link"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="@/assets/images/icons/symbols.svg#link"></use>
            </svg>
            <svg class="icon icon_large">
              <use xlink:href="@/assets/images/icons/symbols.svg#link"></use>
            </svg>
            <svg class="icon icon_x-large">
              <use xlink:href="@/assets/images/icons/symbols.svg#link"></use>
            </svg>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;svg class="icon icon_x-small"&gt;
  &lt;use xlink:href="#link"&gt;&lt;/use&gt;
&lt;/svg&gt;
&lt;svg class="icon icon_small"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
&lt;/svg&gt;
&lt;svg class="icon"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
&lt;/svg&gt;
&lt;svg class="icon icon_large"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
&lt;/svg&gt;
&lt;svg class="icon icon_x-large"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#link"&gt;&lt;/use&gt;
&lt;/svg&gt;
            </code></pre>
          </div>
          
          <h3>Icons</h3>
          <ol style="list-style-type: style; margin-left:18px; color:#5a76aa">
            <li>아이콘을 symbols.svg 파일에 &lt;symbol&gt; 태그로 추가.</li> 
            <li>&lt;use&gt; 태그로 `xlink:href` 경로와 id를 참조하여 아이콘 삽입.</li>
            <!-- <li>fill과 stroke를 `currentColor`로 변경해 부모 요소의 텍스트 색상과 연동.</li>
            <li>hover, focus, active 상태별로 CSS에서 색상 변경 가능.</li> -->
            <!-- <li>필요 시 `aria-hidden` 등 접근성 속성 추가.</li> -->
          </ol>
          <div class="component-preview">
            <ul class="docs-icon">
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-link" title="Link icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#link"></use>
                    </svg></span>
                  <figcaption>link</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-lock" title="Lock icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#lock"></use>
                    </svg></span>
                  <figcaption>lock</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-maximize" title="Maximize icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#maximize"></use>
                    </svg></span>
                  <figcaption>maximize</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-message-text" title="Message text icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#message_text"></use>
                    </svg></span>
                  <figcaption>message_text</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-mobile" title="Mobile icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#mobile"></use>
                    </svg></span>
                  <figcaption>mobile</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-pin" title="Pin icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#pin"></use>
                    </svg></span>
                  <figcaption>pin</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-myshare" title="Myshare icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#myshare"></use>
                    </svg></span>
                  <figcaption>myshare</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-share" title="Share icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#share"></use>
                    </svg></span>
                  <figcaption>share</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-print" title="Print icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#print"></use>
                    </svg></span>
                  <figcaption>print</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-pin" title="Pin icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#pin_fill"></use>
                    </svg></span>
                  <figcaption>pin_fill</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-more" title="More icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#more"></use>
                    </svg></span>
                  <figcaption>more</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-user-edit" title="User edit icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#user_edit"></use>
                    </svg></span>
                  <figcaption>user_edit</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-folder-open" title="Folder open icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#folder_open"></use>
                    </svg></span>
                  <figcaption>folder_open</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-chat" title="Chat icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#chat"></use>
                    </svg></span>
                  <figcaption>chat</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-info" title="Info icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#info"></use>
                    </svg></span>
                  <figcaption>info</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-student" title="Student icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#student"></use>
                    </svg></span>
                  <figcaption>student</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-arrow-right" title="Arrow Right icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#arrow_right"></use>
                    </svg></span>
                  <figcaption>arrow_right</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-export" title="Export icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#export"></use>
                    </svg></span>
                  <figcaption>export</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-reset" title="Reset icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#reset"></use>
                    </svg></span>
                  <figcaption>reset</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-menu" title="Menu Off icon"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#menu_off"></use>
                    </svg></span>
                  <figcaption>menu_off</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-search" title="Search icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#search"></use>
                    </svg></span>
                  <figcaption>search</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-arrow_down" title="Arrow Down icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"></use>
                    </svg></span>
                  <figcaption>arrow down</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-time" title="Time icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#time"></use>
                    </svg></span>
                  <figcaption>time</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-check" title="Check icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#check"></use>
                    </svg></span>
                  <figcaption>Check</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-not-attend" title="not attend icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#not_attend"></use>
                    </svg></span>
                  <figcaption>not_attend</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-connecting" title="connecting icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#connecting"></use>
                    </svg></span>
                  <figcaption>connecting</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-off" title="off icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#off"></use>
                    </svg></span>
                  <figcaption>off</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-start" title="start icon"><svg
                      class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#start"></use>
                    </svg></span>
                  <figcaption>start</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-card" title="card icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#card"></use>
                    </svg>
                  </span>
                  <figcaption>card</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-list" title="list icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#list"></use>
                    </svg>
                  </span>
                  <figcaption>list</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-more-circle-default" title="more_circle_default icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#more_circle_default"></use>
                    </svg>
                  </span>
                  <figcaption>more_circle_default</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-more-circle-actived" title="more_circle_actived icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#more_circle_actived"></use>
                    </svg>
                  </span>
                  <figcaption>more_circle_actived</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-filter" title="filter icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#filter"></use>
                    </svg>
                  </span>
                  <figcaption>filter</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-danger" title="Danger icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#danger"></use>
                    </svg>
                  </span>
                  <figcaption>danger</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-success" title="Success icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#success"></use>
                    </svg>
                  </span>
                  <figcaption>success</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-print" title="Print icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#print_16"></use>
                    </svg>
                  </span>
                  <figcaption>print_16</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-share" title="Share icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#share_16"></use>
                    </svg>
                  </span>
                  <figcaption>share_16</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-edit" title="Edit icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#edit"></use>
                    </svg>
                  </span>
                  <figcaption>edit</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-apply" title="Apply icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#apply"></use>
                    </svg>
                  </span>
                  <figcaption>apply</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-sort" title="Sort icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sort"></use>
                    </svg>
                  </span>
                  <figcaption>sort</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-calendar" title="Calendar icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#calendar"></use>
                    </svg>
                  </span>
                  <figcaption>calendar</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-download" title="Download icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#download"></use>
                    </svg>
                  </span>
                  <figcaption>download</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-file" title="File icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#file"></use>
                    </svg>
                  </span>
                  <figcaption>file</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-delete" title="Delete icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#delete"></use>
                    </svg>
                  </span>
                  <figcaption>delete</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-arrow_extend" title="Arrow Extend icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"></use>
                    </svg>
                  </span>
                  <figcaption>arrow_extend</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-cs" title="CS icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#cs"></use>
                    </svg>
                  </span>
                  <figcaption>cs</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-my" title="My icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#my"></use>
                    </svg>
                  </span>
                  <figcaption>my</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-close" title="Close icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                    </svg>
                  </span>
                  <figcaption>close</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-close_20" title="Close icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close_20"></use>
                    </svg>
                  </span>
                  <figcaption>close_20</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-maximize_line" title="Maximize line icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#maximize_line"></use>
                    </svg>
                  </span>
                  <figcaption>maximize_line</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-send" title="send icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#send"></use>
                    </svg>
                  </span>
                  <figcaption>send</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-setting" title="setting icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#setting"></use>
                    </svg>
                  </span>
                  <figcaption>setting</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-emoji" title="emoji icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#emoji"></use>
                    </svg>
                  </span>
                  <figcaption>emoji</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-attach" title="attach icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#attach"></use>
                    </svg>
                  </span>
                  <figcaption>attach</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-menu" title="Menu On icon"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#menu_on"></use>
                    </svg></span>
                  <figcaption>menu_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-user_circle" title="User"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#user_circle"></use>
                    </svg></span>
                  <figcaption>user_circle</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-user" title="User"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#user"></use>
                    </svg></span>
                  <figcaption>user</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-reset_20" title="Reset_20"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#reset_20"></use>
                    </svg></span>
                  <figcaption>reset_20</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-reset_16" title="Reset_16"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#reset_16"></use>
                    </svg></span>
                  <figcaption>reset_16</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-days" title="Days"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#days"></use>
                    </svg></span>
                  <figcaption>days</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-voice" title="Voice"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#voice"></use>
                    </svg></span>
                  <figcaption>voice</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-users" title="Users"><svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#users"></use>
                    </svg></span>
                  <figcaption>users</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-link" title="Link icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#link_on"></use>
                    </svg></span>
                  <figcaption>link_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-lock" title="Lock icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#lock_on"></use>
                    </svg></span>
                  <figcaption>lock_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-maximize" title="Maximize icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#maximize_on"></use>
                    </svg></span>
                  <figcaption>maximize_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-message-text" title="Message text icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#message_text_on"></use>
                    </svg></span>
                  <figcaption>message_text_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-mobile" title="Mobile icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#mobile_on"></use>
                    </svg></span>
                  <figcaption>mobile_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-pin" title="Pin icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#pin_on"></use>
                    </svg></span>
                  <figcaption>pin_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-myshare" title="Myshare icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#myshare_on"></use>
                    </svg></span>
                  <figcaption>myshare_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-user-edit" title="User edit icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#user_edit_on"></use>
                    </svg></span>
                  <figcaption>user_edit_on</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure><span class="icon-container icon-folder-open" title="Folder open icon"><svg
                      class="icon icon-success">
                      <use xlink:href="@/assets/images/icons/symbols.svg#folder_open_on"></use>
                    </svg></span>
                  <figcaption>folder_open_on</figcaption>
                </figure>
              </li>
              <!-- <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-smile" title="smile icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#smile"></use>
                    </svg>
                  </span>
                  <figcaption>smile</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-blush" title="blush icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#blush"></use>
                    </svg>
                  </span>
                  <figcaption>blush</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-hearteyes" title="hearteyes icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#hearteyes"></use>
                    </svg>
                  </span>
                  <figcaption>hearteyes</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-surprised" title="surprised icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#surprised"></use>
                    </svg>
                  </span>
                  <figcaption>surprised</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-neutral" title="neutral icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#neutral"></use>
                    </svg>
                  </span>
                  <figcaption>neutral</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-sad" title="sad icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sad"></use>
                    </svg>
                  </span>
                  <figcaption>sad</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-frown" title="frown icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#frown"></use>
                    </svg>
                  </span>
                  <figcaption>frown</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-crying" title="crying icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#crying"></use>
                    </svg>
                  </span>
                  <figcaption>crying</figcaption>
                </figure>
              </li> -->
            </ul>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'button'" class="component-section">
        <section class="component-header">
          <h2>Buttons</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Buttons</h3>
          <div class="component-preview">
            <button class="button">Button</button> 
            <button class="button button_primary">Primary Button</button> 
            <button class="button button_secondary">Secondary Button</button>
            <button class="button button_tertiary">Tertiary Button</button>
            <button class="button button_dark">Dark Button</button>
            <button class="button button_outline-primary">Outline Primary Button</button>
            <button class="button button_outline-secondary">Outline Secondary Button</button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button"&gt;Button&lt;/button&gt;
&lt;button class="button button_primary"&gt;Primary Button&lt;/button&gt;
&lt;button class="button button_secondary"&gt;Secondary Button&lt;/button&gt;
&lt;button class="button button_tertiary"&gt;Tertiary Button&lt;/button&gt;
&lt;button class="button button_dark"&gt;Dark Button&lt;/button&gt;
&lt;button class="button button_outline-primary"&gt;Outline Primary Button&lt;/button&gt;
&lt;button class="button button_outline-secondary"&gt;Outline Secondary Button&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Links</h3>
          <div class="component-preview">
            <a href="#" class="button">Button</a>
            <a href="#" class="button button_primary">Primary Button</a>
            <a href="#" class="button button_secondary">Secondary Button</a>
            <a href="#" class="button button_tertiary">Tertiary Button</a>
            <a href="#" class="button button_dark">Dark Button</a>
            <a href="#" class="button button_outline-primary">Outline Primary Button</a>
            <a href="#" class="button button_outline-secondary">Outline Secondary Button</a>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;a href="#" class="button"&gt;Button&lt;/a&gt;
&lt;a href="#" class="button button_primary"&gt;Primary Button&lt;/a&gt;
&lt;a href="#" class="button button_secondary"&gt;Secondary Button&lt;/a&gt;
&lt;a href="#" class="button button_tertiary"&gt;Tertiary Button&lt;/a&gt;
&lt;a href="#" class="button button_dark"&gt;Dark Button&lt;/a&gt;
&lt;a href="#" class="button button_outline-primary"&gt;Outline Primary Button&lt;/a&gt;         
&lt;a href="#" class="button button_outline-secondary"&gt;Outline Secondary Button&lt;/a&gt;         
            </code></pre>
          </div>

          <h3>Base</h3>
          <p class="docs-desc">버튼의 모든 스타일을 제거한 <code class="doc">.button</code> 클래스</p>
          <ul class="docs-list">
            <li>화면 바닥페이지에서 단일버튼 사용될 경우, 최소 width값 160px</li>
          </ul>
          <div class="component-preview"><button class="button">Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button"&gt;Button&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Sizing</h3>
          <h4>Default</h4>
          <ul class="docs-list">
            <li>height: 40px</li>
          </ul>
          <p class="docs-desc"></p>
          <div class="component-preview"><button class="button button_primary">Primary Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_primary"&gt;Primary Button&lt;/button&gt;
            </code></pre>
          </div>

          <h4>Small</h4>
          <p class="docs-desc">사이즈를 small로 변경하기 위해 <code class="doc">.button_small</code> 를 추가한다.</p>
          <ul class="docs-list">
            <li>height: 32px</li>
          </ul>
          <div class="component-preview"><button class="button button_primary button_small">Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_primary"&gt;Primary Button&lt;/button&gt;
            </code></pre>
          </div>

          <h4>Large</h4>
          <p class="docs-desc">사이즈를 Large로 변경하기 위해 <code class="doc">.button_large</code> 를 추가한다.</p>
          <ul class="docs-list">
            <li>height: 48px</li>
          </ul>
          <div class="component-preview"><button class="button button_primary button_large">Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_primary button_large"&gt;Button&lt;/button&gt;
            </code></pre>
          </div>

          <h4>X-Large</h4>
          <p class="docs-desc">사이즈를 X-Large로 변경하기 위해 <code class="doc">.button_x-large</code> 를 추가한다.</p>
          <ul class="docs-list">
            <li>height: 56px</li>
          </ul>
          <div class="component-preview"><button class="button button_primary button_x-large">Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_primary button_x-large"&gt;Button&lt;/button&gt;
            </code></pre>
          </div>

          <h4>Stretch</h4>
          <p class="docs-desc">Stretch로 변경하기 위해 <code class="doc">.button_stretch</code> 를 추가한다.</p>
          <ul class="docs-list">
            <li>height: 56px</li>
          </ul>
          <div class="component-preview"><button class="button button_primary button_stretch">Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_primary button_stretch"&gt;Button&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Variations</h3>
          <h4>Primary</h4>
          <p class="docs-desc">색상을 Primary로 변경하기 위해 <code class="doc">.button_primary</code> 를 추가한다.</p>
          <div class="component-preview"><button class="button button_primary">Primary Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_primary"&gt;Primary Button&lt;/button&gt;
            </code></pre>
          </div>
          <h4>Secondary</h4>
          <p class="docs-desc">색상을 Secondary로 변경하기 위해 <code class="doc">.button_secondary</code> 를 추가한다.</p>
          <div class="component-preview"><button class="button button_secondary">Secondary Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_secondary"&gt;Secondary Button&lt;/button&gt;
            </code></pre>
          </div>
          <h4>Tertiary</h4>
          <p class="docs-desc">색상을 Tertiary 변경하기 위해 <code class="doc">.button_tertiary</code> 를 추가한다.</p>
          <div class="component-preview"><button class="button button_tertiary">Tertiary Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_tertiary"&gt;Tertiary Button&lt;/button&gt;
            </code></pre>
          </div>
          <h4>Dark</h4>
          <p class="docs-desc">색상을 Dark로 변경하기 위해 <code class="doc">.button_dark</code> 를 추가한다.</p>
          <div class="component-preview"><button class="button button_dark">Dark Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_dark"&gt;Dark Button&lt;/button&gt;
            </code></pre>
          </div>

          <h4>Outline</h4>
          <p class="docs-desc">Outline 으로 변경하기 위해 <code class="doc">.button_outline-primary</code> 또는 <code class="doc">.button_outline-secondary</code> 를 추가한다.</p>
          <div class="component-preview">
            <button class="button button_outline-primary">Outline Primary Button</button>
            <button class="button button_outline-secondary">Outline Secondary Button</button>
            </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_outline-primary"&gt;Outline Primary Button&lt;/button&gt;
&lt;button class="button button_outline-secondary"&gt;Outline Secondary Button&lt;/button&gt;
            </code></pre>
          </div>

          <h3>With Icons</h3>
          <h4>Left Icon</h4>
          <p class="docs-desc">버튼 내부에 아이콘을 배치한다. <code class="doc">.icon_left</code> 또는 <code class="doc">.icon_right</code> 를 사용하여 아이콘을 왼쪽 또는 오른쪽에 배치할 수 있다.</p>
          <div class="component-preview">
            <button class="button button_primary">
              <svg class="icon icon_left">
                <use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"></use>
              </svg>Primary Button
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_primary"&gt;
  &lt;svg class="icon icon_left"&gt;
    &lt;use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"&gt;&lt;/use&gt;
  &lt;/svg&gt;Primary Button
&lt;/button&gt;
            </code></pre>
          </div>
          <h4>Right Icon</h4>
          <div class="component-preview"><button class="button button_outline-primary">Primary Button <svg
                class="icon icon_right">
                <use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"></use>
              </svg></button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_outline-primary"&gt;Outline Primary Button
  &lt;svg class="icon icon_right"&gt;
    &lt;use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;             
            </code></pre>
          </div>

          <h3>Text</h3>
          <p class="docs-desc">Text 버튼으로 변경하기 위해 <code class="doc">.button_text</code> 를 추가한다.</p>
          <div class="component-preview">
            <div style="display:flex; gap:30px; align-items:center;">
              <button class="button button_text">Text</button>
              <button class="button button_text">Text with Icon
                <svg class="icon icon_right">
                  <use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"></use>
                </svg>
              </button>
              <button class="button button_text">
                <svg class="icon icon_left">
                  <use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"></use>
                </svg>Text with Icon
              </button>
              <button class="button button_text button_underline">Text</button>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_text"&gt;Text&lt;/button&gt;
&lt;button class="button button_text"&gt;Text with Icon
  &lt;svg class="icon icon_right"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#arrow_extend"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
&lt;button class="button button_text"&gt;
  &lt;svg class="icon icon_left"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#arrow_extend"&gt;&lt;/use&gt;
  &lt;/svg&gt;Text with Icon
&lt;/button&gt;
&lt;button class="button button_text button_underline"&gt;Text&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Disabled</h3>
          <div class="component-preview" style="display:flex; flex-wrap:wrap; gap:8px 0; align-items:center;">
            <button class="button" disabled>Button</button> 
            <button class="button button_primary" disabled>Primary Button</button> 
            <button class="button button_secondary" disabled>Secondary Button</button>
            <button class="button button_outline-primary" disabled>Outline Primary Button</button>
            <button class="button button_outline-secondary" disabled>Outline Secondary Button</button>
            <button class="button button_outline-primary" disabled>Button With Icon
              <svg class="icon icon_right">
                <use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"></use>
              </svg>
            </button>
            <button class="button button_text" disabled>Text</button>
            <button class="button button_text" disabled>Text with Icon
              <svg class="icon icon_right">
                <use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"></use>
              </svg>
            </button>
            <button class="button button_text" disabled>
              <svg class="icon icon_left">
                <use xlink:href="@/assets/images/icons/symbols.svg#arrow_extend"></use>
              </svg>Text with Icon
            </button>
            <button class="button button_text button_underline" disabled>Text</button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button" disabled&gt;Button&lt;/button&gt;
&lt;button class="button button_primary" disabled&gt;Primary Button&lt;/button&gt;
&lt;button class="button button_secondary" disabled&gt;Secondary Button&lt;/button&gt;
&lt;button class="button button_outline-primary" disabled&gt;Outline Primary Button&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Button Wrap</h3>
          <h4>Default</h4>
          <ul class="docs-list">
            <li>기본 우측정렬</li>
            <li>간격 8px</li>
          </ul>
          <p class="docs-desc">버튼의 컨테이너 <code class="doc">.btn-area</code> 를 추가</p>
          <div class="component-preview">
            <div class="btn-area">
              <button class="button button_outline-primary">Primary Button</button>
              <button class="button button_primary">Primary Button</button>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="btn-area"&gt;
  &lt;button class="button button_outline-primary"&gt;Primary Button&lt;/button&gt;
  &lt;button class="button button_primary"&gt;Primary Button&lt;/button&gt;
&lt;/div&gt;
            </code></pre>
          </div>

          <h4>좌측정렬</h4>
          <p class="docs-desc"><code class="doc">.left</code> 적용</p>
          <div class="component-preview">
            <div class="btn-area left">
              <button class="button button_outline-primary">Primary Button</button>
              <button class="button button_primary">Primary Button</button>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;btn-area left&quot;&gt;
  &lt;button class=&quot;button button_outline-primary&quot;&gt;Primary Button&lt;/button&gt;
  &lt;button class=&quot;button button_primary&quot;&gt;Primary Button&lt;/button&gt;
&lt;/div&gt;
            </code></pre>
          </div>

          <h4>중앙정렬</h4>
          <p class="docs-desc"><code class="doc">.center</code> 적용</p>
          <div class="component-preview">
            <div class="btn-area center">
              <button class="button button_outline-primary">Primary Button</button>
              <button class="button button_primary">Primary Button</button>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;btn-area center&quot;&gt;
  &lt;button class=&quot;button button_outline-primary&quot;&gt;Primary Button&lt;/button&gt;
  &lt;button class=&quot;button button_primary&quot;&gt;Primary Button&lt;/button&gt;
&lt;/div&gt;
            </code></pre>
          </div>

        </section>
      </div>

      <div v-show="activePubComponent === 'buttonicons'" class="component-section">
        <section class="component-header">
          <h2>Button Icons</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview">
            <button class="button button_icon" title="Button Title" aria-label="Button Title">
              <svg class="button__icon" aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#myshare"></use>
              </svg> 
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_icon" title="Button Title" aria-label="Button Title"&gt;
  &lt;svg class="button__icon" aria-hidden="true"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#myshare"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;                 
              </code></pre>
          </div>
          <h3>Sizes</h3>
          <ul class="docs-list">
            <li>default: 24px</li>
            <li>button_icon-x-small: 16px</li>
            <li>button_icon-small: 20px</li>
            <li>button_icon-large: 32px</li>
            <li>button_icon-x-large: 40px</li>
          </ul>
          <div class="component-preview">
            <button class="button button_icon button_icon-x-small" title="button_icon-x-small" aria-label="Button Title">
              <svg class="button__icon" aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#myshare"></use>
              </svg> 
            </button>
            <button class="button button_icon button_icon-small" title="button_icon-small" aria-label="Button Title">
              <svg class="button__icon" aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#myshare"></use>
              </svg> 
            </button>
            <button class="button button_icon" title="Default" aria-label="Button Title">
              <svg class="button__icon" aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#myshare"></use>
              </svg> 
            </button>
            <button class="button button_icon button_icon-large" title="button_icon-large" aria-label="Button Title">
              <svg class="button__icon" aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#myshare"></use>
              </svg> 
            </button>
            <button class="button button_icon button_icon-x-large" title="button_icon-x-large" aria-label="Button Title">
              <svg class="button__icon" aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#myshare"></use>
              </svg> 
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_icon button_icon-x-small" title="Button Title" aria-label="Button Title"&gt;
  &lt;svg class="button__icon" aria-hidden="true"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#myshare"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;    
              </code></pre>
          </div>
          <h3>Icon Container</h3>
          <ul class="docs-list">
            <li>button_icon-border: 40px</li>
          </ul>
          <p class="docs-desc">Button에 <code class="doc">.button_icon-border</code> 적용</p>
          <div class="component-preview">
            <div style="color:#246beb">
              <button class="button button_outline-primary button_icon button_icon-border" title="Button Title" aria-label="Button Title">
                <svg class="button__icon" aria-hidden="true">
                  <use xlink:href="@/assets/images/icons/symbols.svg#reset"></use>
                </svg> 
                <span class="assistive-text">Reset</span>
              </button>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_outline-primary button_icon button_icon-border" title="Button Title" aria-label="Button Title"&gt;
  &lt;svg class="button__icon" aria-hidden="true"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#reset"&gt;&lt;/use&gt;
  &lt;/svg&gt;
  &lt;span class="assistive-text"&gt;Reset&lt;/span&gt;
&lt;/button&gt;                         
              </code></pre>
          </div>
          <h3>States</h3>
          <h4>Diabled</h4>
          <div class="component-preview">
            <button class="button button_icon" title="Button Title" aria-label="Button Title" disabled>
              <svg class="button__icon" aria-hidden="true">
                <use xlink:href="@/assets/images/icons/symbols.svg#myshare"></use>
              </svg> 
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="button button_icon" title="Button Title" aria-label="Button Title" disabled&gt;
  &lt;svg class="button__icon" aria-hidden="true"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#myshare"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;                      
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'form'" class="component-section">
        <section class="component-header">
          <h2>Form controls</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Input</h3>
          <div class="component-preview" style="background-color:#f5f5f5">
            <div class="form-element">
              <label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control">
                <input type="text" class="input" id="text-input-id-0" placeholder="Placeholder text…">
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
    &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;/label&gt;
    &lt;div class="form-element__control"&gt;
        &lt;input type="text" class="input" id="text-input-id-0" placeholder="Placeholder text…"&gt;
    &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>

          <h3>Textarea</h3>
          <div class="component-preview" style="background-color:#f5f5f5">
            <div class="form-element">
              <label class="form-element__label" for="text-area-id-0">Textarea Label</label>
              <div class="form-element__control">
                <textarea class="input" id="text-area-id-0" rows="3" placeholder="Placeholder text…"></textarea>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
    &lt;label class="form-element__label" for="text-area-id-0"&gt;Textarea Label&lt;/label&gt;
    &lt;div class="form-element__control"&gt;
        &lt;textarea class="input" id="text-area-id-0" rows="3" placeholder="Placeholder text…"&gt;&lt;/textarea&gt;
    &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>

          <h3>Variations</h3>
          <h4>Default</h4>
          <p class="docs-desc">화이트 배경</p>
          <div class="component-preview" style="background-color:#f5f5f5">
            <div class="form-element"><label class="form-element__label" for="text-input-id-0">Input
                Label</label>
              <div class="form-element__control"><input id="text-input-id-0" placeholder="Placeholder text…"
                  class="input"></div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;label class=&quot;form-element__label&quot; for=&quot;text-input-id-0&quot;&gt;Input Label&lt;/label&gt;
  &lt;div class=&quot;form-element__control&quot;&gt;
    &lt;input id=&quot;text-input-id-0&quot; placeholder=&quot;Placeholder text…&quot; type=&quot;text&quot; class=&quot;input&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;              
              </code></pre>
          </div>

          <h4>Outline</h4>
          <p class="docs-desc">투명 배경에 Outline 추가  <code class="doc">.input-outline</code> 클래스 적용</p>
          <div class="component-preview" style="background-color:#f5f5f5">
            <div class="form-element"><label class="form-element__label" for="text-input-id-0">Input
                Label</label>
              <div class="form-element__control">
                <input id="text-input-id-0" placeholder="Placeholder text…" class="input input-outline">
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
  &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;/label&gt;
  &lt;div class="form-element__control"&gt;
    &lt;input id="text-input-id-0" placeholder="Placeholder text…" class="input input-outline"&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code></pre>
          </div>

          <h4>Readonly</h4>
          <div class="component-preview">
            <div class="form-element"><label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control">
                <input type="text" readonly class="input input-outline" id="text-input-id-0" value="과학수업">
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
  &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;/label&gt;
  &lt;div class="form-element__control"&gt;
    &lt;input type="text" readonly class="input input-outline" id="text-input-id-0" value="과학수업"&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code></pre>
          </div>

          <h4>Required</h4>
          <p class="docs-desc">label에 <code class="doc">abbr</code> 로 required 표시 추가 </p>
          <div class="component-preview">
            <div class="form-element">
              <label class="form-element__label" for="text-input-id-0">Input Label<abbr class="required" title="필수 항목">* </abbr></label>
              <div class="form-element__control">
                <input type="text" required class="input input-outline" id="text-input-id-0" aria-required="true" placeholder="Placeholder text…">
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
  &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;abbr class="required" title="필수 항목"&gt;* &lt;/abbr&gt;&lt;/label&gt;
  &lt;div class="form-element__control"&gt;
    &lt;input type="text" required class="input input-outline" id="text-input-id-0" aria-required="true" placeholder="Placeholder text…"&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code></pre>
          </div>

          <h4>Disabled(사용 안함)</h4>
          <p class="docs-desc">필요시 추후 수정하기..</p>
          <div class="component-preview">
            <div class="form-element"><label class="form-element__label" for="text-input-id-0">Input
                Label</label>
              <div class="form-element__control"><input id="text-input-id-0" placeholder="Placeholder text…"
                  disabled class="input input-outline"></div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;label class=&quot;form-element__label&quot; for=&quot;text-input-id-0&quot;&gt;Input Label&lt;/label&gt;
  &lt;div class=&quot;form-element__control&quot;&gt;
    &lt;input id=&quot;text-input-id-0&quot; placeholder=&quot;Placeholder text…&quot; disabled type=&quot;text&quot; class=&quot;input input-outline&quot; value=&quot;&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;                        
              </code></pre>
          </div>

          <h3>Validation</h3>
          <h4>Error</h4>
          <p class="docs-desc">컨테이너에 <code class="doc">.is-error</code> 추가 </p>
          <div class="component-preview" style="display:flex; flex-direction:column; gap:40px;">
            <div class="form-element is-error">
              <label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control">
                <input type="text" required class="input" id="text-input-id-0" placeholder="Placeholder text…" aria-describedby="error-message-id-0" aria-invalid="true">
              </div>
              <p class="form-feedback" id="error-message-id-0">Enter a value.</p>
            </div>
            <div class="form-element is-error">
              <label class="form-element__label" for="text-area-id-0">Textarea Label</label>
              <div class="form-element__control">
                <textarea class="input" id="text-area-id-0" rows="3" placeholder="Placeholder text…"></textarea>
              </div>
               <p class="form-feedback" id="error-message-id-0">Enter a value.</p>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element is-error"&gt;
  &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;/label&gt;
  &lt;div class="form-element__control"&gt;
    &lt;input id="text-input-id-0" placeholder="Placeholder text…" required aria-describedby="error-message-id-0" class="input" aria-invalid="true"&gt;
  &lt;/div&gt;
  &lt;p class="form-feedback" id="error-message-id-0"&gt;Enter a value.&lt;/p&gt;
&lt;/div&gt; 
              </code></pre>
          </div>

          <h3>Search</h3>
          <h4>Base</h4>
          <div class="component-preview">
            <div class="form-element"><label class="form-element__label" for="text-input-id-0">Input
                Label</label>
              <div class="form-element__control input-has-icon input-has-icon_right"><input
                  id="text-input-id-0" placeholder="Placeholder text…" class="input"> <button
                  class="button button_icon" title="검색"><svg class="button__icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#search"></use>
                  </svg></button></div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;label class=&quot;form-element__label&quot; for=&quot;text-input-id-0&quot;&gt;Input Label&lt;/label&gt;
  &lt;div class=&quot;form-element__control input-has-icon input-has-icon_right&quot;&gt;
    &lt;input type=&quot;text&quot; id=&quot;text-input-id-0&quot; placeholder=&quot;Placeholder text…&quot; class=&quot;input&quot; /&gt;
    &lt;button class=&quot;button button_icon&quot; title=&quot;검색&quot;&gt;
      &lt;svg class=&quot;button__icon&quot; aria-hidden=&quot;true&quot;&gt;
        &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#search&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;                                     
              </code></pre>
          </div>

          <h4>Multiple Icon</h4>
          <p class="docs-desc">container에 <code class="doc">.multiple</code> 추가</p>
          <div class="component-preview">
            <div class="form-element">
              <label class="blind" for="text-input-id-0">Input Label</label>
              <div class="form-element__control input-has-icon input-has-icon_right multiple">
                <input type="text" id="text-input-id-0" placeholder="Placeholder text…" class="input" />
                <button class="button button_icon" title="상세 검색">
                  <svg class="button__icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#filter"></use>
                  </svg>
                </button>
                <button class="button button_icon search" title="검색">
                  <svg class="button__icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#search"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
    &lt;label class="blind" for="text-input-id-0"&gt;Input Label&lt;/label&gt;
    &lt;div class="form-element__control input-has-icon input-has-icon_right multiple"&gt;
        ...
    &lt;/div&gt;
&lt;/div&gt;        
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'select'" class="component-section">
        <section class="component-header">
          <h2>Select</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Select</h3>
          <h4>Default</h4>
          <div class="component-preview" style="background-color:#f5f5f5">
            <div class="form-element">
              <label class="form-element__label" for="select-01">Select Label</label>
              <div class="select_container">
                <select class="select" id="select-01">
                  <option value="">Select…</option>
                  <option value="option1">Option One</option>
                  <option value="option2">Option Two</option>
                  <option value="option3">Option </option>
                </select>
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
  &lt;label class="form-element__label" for="select-01"&gt;Select Label&lt;/label&gt;
  &lt;div class="select_container"&gt;
    &lt;select class="select" id="select-01"&gt;
      &lt;option value=""&gt;Select…&lt;/option&gt;
      &lt;option value="option1"&gt;Option One&lt;/option&gt;
      &lt;option value="option2"&gt;Option Two&lt;/option&gt;
      &lt;option value="option3"&gt;Option &lt;/option&gt;
    &lt;/select&gt;
    &lt;svg class="icon"&gt;
      &lt;use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"&gt;&lt;/use&gt;
    &lt;/svg&gt;
  &lt;/div&gt;
&lt;/div&gt;            
              </code></pre>
          </div>

          <h4>Filter Select</h4>
          <p class="docs-desc">교실화면의 검색 기능에 사용함. 컨테이너에 <code class="doc">filter</code> 클래스 추가</p>
          <div class="component-preview">
            <div class="select_container filter" style="width:172px">
              <select class="select opened selected" id="select-01">
                <option>접속 시간</option>
                <option value="option1">참여 시간</option>
                <option value="option2">이름</option>
                <option value="option3">번호</option>
                <option value="option4">오름차순</option>
                <option value="option5">내림차순</option>
              </select>
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"></use>
              </svg>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="select_container filter"&gt;
  &lt;select class="select opened selected" id="select-01"&gt;
    &lt;option&gt;접속 시간&lt;/option&gt;
    &lt;option value="option1"&gt;참여 시간&lt;/option&gt;
    &lt;option value="option2"&gt;이름&lt;/option&gt;
    &lt;option value="option3"&gt;번호&lt;/option&gt;
    &lt;option value="option4"&gt;오름차순&lt;/option&gt;
    &lt;option value="option5"&gt;내림차순&lt;/option&gt;
  &lt;/select&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/div&gt;      
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'checkbox'" class="component-section">
        <section class="component-header">
          <h2>Checkbox</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview">
            <div class="form-element">
              <div class="form-element__control">
                <div class="checkbox">
                  <input type="checkbox" name="options" id="checkbox-unique-id-3" value="checkbox-unique-id-3" checked>
                  <label class="checkbox__label" for="checkbox-unique-id-3">
                    <span class="checkbox_faux">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#check"></use>
                      </svg>
                    </span> 
                  <span class="form-element__label">Checkbox Label</span></label>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
  &lt;div class="form-element__control"&gt;
    &lt;div class="checkbox"&gt;
      &lt;input type="checkbox" name="options" id="checkbox-unique-id-3" value="checkbox-unique-id-3" checked&gt;
      &lt;label class="checkbox__label" for="checkbox-unique-id-3"&gt;
        &lt;span class="checkbox_faux"&gt;
          &lt;svg class="icon"&gt;
            &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#check"&gt;&lt;/use&gt;
          &lt;/svg&gt;
        &lt;/span&gt; 
        &lt;span class="form-element__label"&gt;Checkbox Label&lt;/span&gt;
      &lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;          
              </code></pre>
          </div>

          <h3>Sizing</h3>
          <h4>Default</h4>
          <div class="component-preview">
            <div class="form-element">
              <div class="form-element__control">
                <div class="checkbox">
                  <input type="checkbox" name="options" id="checkbox-unique-id-4" value="checkbox-unique-id-3" checked>
                  <label class="checkbox__label" for="checkbox-unique-id-4">
                    <span class="checkbox_faux">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#check"></use>
                      </svg>
                    </span>
                    <span class="form-element__label">Checkbox Label</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element__control&quot;&gt;
  &lt;div class=&quot;checkbox&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;   
              </code></pre>
          </div>

          <h4>Small</h4>
          <p class="docs-desc">.checkbox에 <code class="doc">sm</code> 추가 </p>
          <div class="component-preview">
            <div class="form-element">
              <div class="form-element__control">
                <div class="checkbox sm">
                  <input type="checkbox" name="options" id="checkbox-unique-id-5" value="checkbox-unique-id-5" checked>
                  <label class="checkbox__label" for="checkbox-unique-id-5">
                    <span class="checkbox_faux">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#check"></use>
                      </svg>
                    </span>
                    <span class="form-element__label">Checkbox Label</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element__control&quot;&gt;
  &lt;div class=&quot;checkbox sm&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;   
              </code></pre>
          </div>

          <h3>Switch</h3>
          <p class="docs-desc">.checkbox에 label <code class="doc">.switch</code> 를 추가 </p>
          <div class="component-preview">
            <div class="form-element">
              <div class="form-element__control">
                <div class="checkbox left_label">
                  <span class="form-element__label">{{ isAllowed ? 'Enabled' : 'Disabled' }}</span>
                  <label class="switch" for="permissionSwitch">
                    <input
                      type="checkbox"
                      id="permissionSwitch"
                      v-model="isAllowed"
                    >
                    <span class="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;div class=&quot;form-element__control&quot;&gt;
    &lt;div class=&quot;checkbox left_label&quot;&gt;
      &lt;span class=&quot;form-element__label&quot;&gt;{{ isAllowed ? &#39;Enabled&#39; : &#39;Disabled&#39; }}&lt;/span&gt;
      &lt;label class=&quot;switch&quot; for=&quot;permissionSwitch&quot;&gt;
        &lt;input
          type=&quot;checkbox&quot;
          id=&quot;permissionSwitch&quot;
          v-model=&quot;isAllowed&quot;
        &gt;
        &lt;span class=&quot;slider&quot;&gt;&lt;/span&gt;
      &lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'checkbutton'" class="component-section">
        <section class="component-header">
          <h2>Checkbox Button Group</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview" style="background-color:#E7EDF6">
            <fieldset class="form-element">
              <legend class="form-element__legend form-element__label">요일</legend>
              <div class="checkbox_button-group">
                <span class="button checkbox_button">
                  <input id="unique-id-monday-1" name="checkbox" type="checkbox" value="unique-id-monday-1">
                  <label class="checkbox_button__label" for="unique-id-monday-1">
                    <span class="checkbox_faux">월</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-tuesday-1" name="checkbox" type="checkbox" value="unique-id-tuesday-1">
                  <label class="checkbox_button__label" for="unique-id-tuesday-1">
                    <span class="checkbox_faux">화</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-wednesday-1" name="checkbox" type="checkbox" value="unique-id-wednesday-1">
                  <label class="checkbox_button__label" for="unique-id-wednesday-1">
                    <span class="checkbox_faux">수</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-thursday-1" name="checkbox" type="checkbox" value="unique-id-thursday-1">
                  <label class="checkbox_button__label" for="unique-id-thursday-1">
                    <span class="checkbox_faux">목</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-friday-1" name="checkbox" type="checkbox" value="unique-id-friday-1">
                  <label class="checkbox_button__label" for="unique-id-friday-1">
                    <span class="checkbox_faux">금</span>
                  </label>
                </span>
              </div>
            </fieldset>            
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;fieldset class=&quot;form-element&quot;&gt;
  &lt;legend class=&quot;form-element__legend form-element__label&quot;&gt;요일&lt;/legend&gt;
  &lt;div class=&quot;checkbox_button-group&quot;&gt;
    &lt;span class=&quot;button checkbox_button&quot;&gt;
      &lt;input id=&quot;unique-id-monday-1&quot; name=&quot;checkbox&quot; type=&quot;checkbox&quot; value=&quot;unique-id-monday-1&quot;&gt;
      &lt;label class=&quot;checkbox_button__label&quot; for=&quot;unique-id-monday-1&quot;&gt;
        &lt;span class=&quot;checkbox_faux&quot;&gt;월&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class=&quot;button checkbox_button&quot;&gt;
      &lt;input id=&quot;unique-id-tuesday-1&quot; name=&quot;checkbox&quot; type=&quot;checkbox&quot; value=&quot;unique-id-tuesday-1&quot;&gt;
      &lt;label class=&quot;checkbox_button__label&quot; for=&quot;unique-id-tuesday-1&quot;&gt;
        &lt;span class=&quot;checkbox_faux&quot;&gt;화&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class=&quot;button checkbox_button&quot;&gt;
      &lt;input id=&quot;unique-id-wednesday-1&quot; name=&quot;checkbox&quot; type=&quot;checkbox&quot; value=&quot;unique-id-wednesday-1&quot;&gt;
      &lt;label class=&quot;checkbox_button__label&quot; for=&quot;unique-id-wednesday-1&quot;&gt;
        &lt;span class=&quot;checkbox_faux&quot;&gt;수&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class=&quot;button checkbox_button&quot;&gt;
      &lt;input id=&quot;unique-id-thursday-1&quot; name=&quot;checkbox&quot; type=&quot;checkbox&quot; value=&quot;unique-id-thursday-1&quot;&gt;
      &lt;label class=&quot;checkbox_button__label&quot; for=&quot;unique-id-thursday-1&quot;&gt;
        &lt;span class=&quot;checkbox_faux&quot;&gt;목&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class=&quot;button checkbox_button&quot;&gt;
      &lt;input id=&quot;unique-id-friday-1&quot; name=&quot;checkbox&quot; type=&quot;checkbox&quot; value=&quot;unique-id-friday-1&quot;&gt;
      &lt;label class=&quot;checkbox_button__label&quot; for=&quot;unique-id-friday-1&quot;&gt;
        &lt;span class=&quot;checkbox_faux&quot;&gt;금&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;              
              </code></pre>
          </div>

          <h3>Variations</h3>
          <h4>Outline</h4>
          <p class="docs-desc"><code class="doc">.outline</code> 추가</p>
          <div class="component-preview" style="background-color:#E7EDF6">
            <fieldset class="form-element">
              <legend class="form-element__legend form-element__label">요일</legend>
              <div class="checkbox_button-group outline">
                <span class="button checkbox_button">
                  <input id="unique-id-monday-5" name="checkbox" type="checkbox" value="unique-id-monday-5">
                  <label class="checkbox_button__label" for="unique-id-monday-5">
                    <span class="checkbox_faux">월</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-tuesday-5" name="checkbox" type="checkbox" value="unique-id-tuesday-5">
                  <label class="checkbox_button__label" for="unique-id-tuesday-5">
                    <span class="checkbox_faux">화</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-wednesday-5" name="checkbox" type="checkbox" value="unique-id-wednesday-5">
                  <label class="checkbox_button__label" for="unique-id-wednesday-5">
                    <span class="checkbox_faux">수</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-thursday-5" name="checkbox" type="checkbox" value="unique-id-thursday-5">
                  <label class="checkbox_button__label" for="unique-id-thursday-5">
                    <span class="checkbox_faux">목</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-friday-5" name="checkbox" type="checkbox" value="unique-id-friday-5">
                  <label class="checkbox_button__label" for="unique-id-friday-5">
                    <span class="checkbox_faux">금</span>
                  </label>
                </span>
              </div>
            </fieldset>            
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;fieldset class=&quot;form-element&quot;&gt;
  &lt;legend class=&quot;form-element__legend form-element__label&quot;&gt;요일&lt;/legend&gt;
  &lt;div class=&quot;checkbox_button-group outline&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/fieldset&gt;              
              </code></pre>
          </div>

          <h3>Validation</h3>
          <h4>Error</h4>
          <p class="docs-desc">컨테이너에 <code class="doc">.is-error</code> 추가 </p>
          <div class="component-preview" style="background-color:#E7EDF6">
            <fieldset class="form-element is-error">
              <legend class="form-element__legend form-element__label">요일</legend>
              <div class="checkbox_button-group">
                <span class="button checkbox_button">
                  <input id="unique-id-monday-2" name="checkbox" type="checkbox" value="unique-id-monday-2" aria-describedby="error-message-id-0">
                  <label class="checkbox_button__label" for="unique-id-monday-2">
                    <span class="checkbox_faux">월</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-tuesday-2" name="checkbox" type="checkbox" value="unique-id-tuesday-2" aria-describedby="error-message-id-0">
                  <label class="checkbox_button__label" for="unique-id-tuesday-2">
                    <span class="checkbox_faux">화</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-wednesday-2" name="checkbox" type="checkbox" value="unique-id-wednesday-2" aria-describedby="error-message-id-0">
                  <label class="checkbox_button__label" for="unique-id-wednesday-2">
                    <span class="checkbox_faux">수</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-thursday-2" name="checkbox" type="checkbox" value="unique-id-thursday-2" aria-describedby="error-message-id-0">
                  <label class="checkbox_button__label" for="unique-id-thursday-2">
                    <span class="checkbox_faux">목</span>
                  </label>
                </span>
                <span class="button checkbox_button">
                  <input id="unique-id-friday-2" name="checkbox" type="checkbox" value="unique-id-friday-2" aria-describedby="error-message-id-0">
                  <label class="checkbox_button__label" for="unique-id-friday-2">
                    <span class="checkbox_faux">금</span>
                  </label>
                </span>
              </div>
              <p class="form-feedback" id="error-message-id-0">요일을 선택해 주세요.</p>
            </fieldset>            
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;fieldset class=&quot;form-element is-error&quot;&gt;
  &lt;legend class=&quot;form-element__legend form-element__label&quot;&gt;요일&lt;/legend&gt;
  &lt;div class=&quot;checkbox_button-group&quot;&gt;
    ...
  &lt;/div&gt;
  &lt;p class="form-feedback" id="error-message-id-0"&gt;요일을 선택해 주세요.&lt;/p&gt;
&lt;/fieldset&gt;              
              </code></pre>
          </div>

        </section>
      </div>

      <div v-show="activePubComponent === 'radiobutton'" class="component-section">
        <section class="component-header">
          <h2>Radio Button Group</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Mark</h3>
          <p class="docs-desc">수업 콘솔 페이지에서 사용함</p>
          <!-- <ul class="docs-list">
            <li>red : var(--color-mark-red)</li>
            <li>badge-red : var(--color-mark-badge-red)</li>
            <li>yellow : var(--color-mark-yellow)</li>
            <li>green : var(--color-mark-green)</li>
            <li>blue : var(--color-mark-blue)</li>
          </ul> -->
          <div class="component-preview" style="background-color:#E7EDF6">
            <fieldset class="form-element">
              <legend class="form-element__legend form-element__label">수업 카드 이미지 선택</legend>
              <div class="radio_button-group outline theme">
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-199" name="example-unique-name-1" value="red" checked>
                  <label class="radio_button__label" for="example-unique-id-199" data-label="Label Text">
                    <span class="radio_faux blind">red</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-200" name="example-unique-name-1" value="badge-red">
                  <label class="radio_button__label" for="example-unique-id-200" data-label="Label Text">
                    <span class="radio_faux blind">badge-red</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-201" name="example-unique-name-1" value="yellow">
                  <label class="radio_button__label" for="example-unique-id-201" data-label="Label Text">
                    <span class="radio_faux blind">yellow</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-202" name="example-unique-name-1" value="green">
                  <label class="radio_button__label" for="example-unique-id-202" data-label="Label Text">
                    <span class="radio_faux blind">green</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-203" name="example-unique-name-1" value="blue">
                  <label class="radio_button__label" for="example-unique-id-203" data-label="Label Text">
                    <span class="radio_faux blind">blue</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-204" name="example-unique-name-1" value="violet">
                  <label class="radio_button__label" for="example-unique-id-204" data-label="Label Text">
                    <span class="radio_faux blind">violet</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-205" name="example-unique-name-1" value="turquoise">
                  <label class="radio_button__label" for="example-unique-id-205" data-label="Label Text">
                    <span class="radio_faux blind">turquoise</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-206" name="example-unique-name-1" value="색상명8" disabled>
                  <label class="radio_button__label" for="example-unique-id-206">
                    <span class="radio_faux blind">색상명8</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-207" name="example-unique-name-1" value="색상명9" disabled>
                  <label class="radio_button__label" for="example-unique-id-207">
                    <span class="radio_faux blind">색상명9</span>
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-unique-id-208" name="example-unique-name-1" value="색상명10" disabled>
                  <label class="radio_button__label" for="example-unique-id-208">
                    <span class="radio_faux blind">색상명10</span>
                  </label>
                </span>
              </div>
            </fieldset>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;fieldset class="form-element"&gt;
  &lt;legend class="form-element__legend form-element__label"&gt;수업 카드 이미지 선택&lt;/legend&gt;
  &lt;div class="radio_button-group outline theme"&gt;
    &lt;span class="button radio_button"&gt;
      &lt;input type="radio" id="example-unique-id-199" name="example-unique-name-1" value="red" checked&gt;
      &lt;label class="radio_button__label" for="example-unique-id-199" data-label="Label Text"&gt;
        &lt;span class="radio_faux blind"&gt;red&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class="button radio_button"&gt;
      &lt;input type="radio" id="example-unique-id-200" name="example-unique-name-1" value="badge-red"&gt;
      &lt;label class="radio_button__label" for="example-unique-id-200" data-label="Label Text"&gt;
        &lt;span class="radio_faux blind"&gt;badge-red&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class="button radio_button"&gt;
      &lt;input type="radio" id="example-unique-id-201" name="example-unique-name-1" value="yellow"&gt;
      &lt;label class="radio_button__label" for="example-unique-id-201" data-label="Label Text"&gt;
        &lt;span class="radio_faux blind"&gt;yellow&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class="button radio_button"&gt;
      &lt;input type="radio" id="example-unique-id-202" name="example-unique-name-1" value="green"&gt;
      &lt;label class="radio_button__label" for="example-unique-id-202" data-label="Label Text"&gt;
        &lt;span class="radio_faux blind"&gt;green&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class="button radio_button"&gt;
      &lt;input type="radio" id="example-unique-id-203" name="example-unique-name-1" value="blue"&gt;
      &lt;label class="radio_button__label" for="example-unique-id-203" data-label="Label Text"&gt;
        &lt;span class="radio_faux blind"&gt;blue&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class="button radio_button"&gt;
      &lt;input type="radio" id="example-unique-id-204" name="example-unique-name-1" value="violet"&gt;
      &lt;label class="radio_button__label" for="example-unique-id-204" data-label="Label Text"&gt;
        &lt;span class="radio_faux blind"&gt;violet&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class="button radio_button"&gt;
      &lt;input type="radio" id="example-unique-id-205" name="example-unique-name-1" value="turquoise"&gt;
      &lt;label class="radio_button__label" for="example-unique-id-205" data-label="Label Text"&gt;
        &lt;span class="radio_faux blind"&gt;turquoise&lt;/span&gt;
      &lt;/label&gt;
    &lt;/span&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;   
              </code></pre>
          </div>

          <h3>Draw</h3>
          <p class="docs-desc">화면 공유의 그리기 도구 모음에서 사용함 <br>라벨과 버튼 그룹에 <code class="doc">.draw</code> 추가</p>
          <ul class="docs-list">
            <li>draw-red : var(--color-draw-red)</li>
            <li>draw-yellow : var(--color-draw-yellow)</li>
            <li>draw-green : var(--color-draw-green)</li>
            <li>draw-blue : var(--color-draw-blue)</li>
            <li>draw-black : var(--color-draw-black)</li>
          </ul>
          <div class="component-preview" style="background-color:#E7EDF6">
            <fieldset class="form-element">
              <legend class="form-element__legend form-element__label draw">색상</legend>
              <div class="radio_button-group draw">
                <span class="button radio_button">
                  <input type="radio" id="example-id-01" name="example-name-01" value="draw-red" checked>
                  <label class="radio_button__label" for="example-id-01">
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-id-02" name="example-name-01" value="draw-yellow">
                  <label class="radio_button__label" for="example-id-02">
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-id-03" name="example-name-01" value="draw-green">
                  <label class="radio_button__label" for="example-id-03">
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-id-04" name="example-name-01" value="draw-blue">
                  <label class="radio_button__label" for="example-id-04">
                  </label>
                </span>
                <span class="button radio_button">
                  <input type="radio" id="example-id-05" name="example-name-01" value="draw-black">
                  <label class="radio_button__label" for="example-id-05">
                  </label>
                </span>
              </div>
            </fieldset>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;fieldset class=&quot;form-element&quot;&gt;
  &lt;legend class=&quot;form-element__legend form-element__label draw&quot;&gt;색상&lt;/legend&gt;
  &lt;div class=&quot;radio_button-group draw&quot;&gt;
    &lt;span class=&quot;button radio_button&quot;&gt;
      &lt;input type=&quot;radio&quot; id=&quot;example-id-01&quot; name=&quot;example-name-01&quot; value=&quot;draw-red&quot; checked&gt;
      &lt;label class=&quot;radio_button__label&quot; for=&quot;example-id-01&quot;&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class=&quot;button radio_button&quot;&gt;
      &lt;input type=&quot;radio&quot; id=&quot;example-id-02&quot; name=&quot;example-name-01&quot; value=&quot;draw-yellow&quot;&gt;
      &lt;label class=&quot;radio_button__label&quot; for=&quot;example-id-02&quot;&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class=&quot;button radio_button&quot;&gt;
      &lt;input type=&quot;radio&quot; id=&quot;example-id-03&quot; name=&quot;example-name-01&quot; value=&quot;draw-green&quot;&gt;
      &lt;label class=&quot;radio_button__label&quot; for=&quot;example-id-03&quot;&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class=&quot;button radio_button&quot;&gt;
      &lt;input type=&quot;radio&quot; id=&quot;example-id-04&quot; name=&quot;example-name-01&quot; value=&quot;draw-blue&quot;&gt;
      &lt;label class=&quot;radio_button__label&quot; for=&quot;example-id-04&quot;&gt;
      &lt;/label&gt;
    &lt;/span&gt;
    &lt;span class=&quot;button radio_button&quot;&gt;
      &lt;input type=&quot;radio&quot; id=&quot;example-id-05&quot; name=&quot;example-name-01&quot; value=&quot;draw-black&quot;&gt;
      &lt;label class=&quot;radio_button__label&quot; for=&quot;example-id-05&quot;&gt;
      &lt;/label&gt;
    &lt;/span&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'badge'" class="component-section">
        <section class="component-header">
          <h2>Badges</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Default</h3>
          <div class="component-preview" style="display:flex; gap:8px;">
            <span class="badge">공유중</span>
            <span class="badge focus">관심</span>
            <span class="badge restrict">채팅제한</span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class=&quot;badge&quot;&gt;공유중&lt;/span&gt;
&lt;span class=&quot;badge focus&quot;&gt;관심&lt;/span&gt;
&lt;span class=&quot;badge restrict&quot;&gt;채팅제한&lt;/span&gt;
            </code></pre>
          </div>

          <h3>Status</h3>
          <div class="component-preview" style="display:flex; gap:8px;">
            <span class="badge status">수업중</span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class=&quot;badge status&quot;&gt;수업중&lt;/span&gt;
            </code></pre>
          </div>

          <h3>Count</h3>
          <div class="component-preview" style="display:flex; gap:8px;">
            <span class="badge count" aria-live="polite" aria-label="24개의 새로운 메시지">24</span>
            <span class="badge count" aria-live="polite" aria-label="300개 이상의 새로운 메시지">300+</span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class="badge count" aria-live="polite" aria-label="24개의 새로운 메시지"&gt;24&lt;/span&gt;
&lt;span class="badge count" aria-live="polite" aria-label="300개 이상의 새로운 메시지"&gt;300+&lt;/span&gt;
            </code></pre>
          </div>

          <h3>Unread</h3>
          <div class="component-preview" style="display:flex; gap:8px;">
            <span class="badge unread" aria-live="polite" aria-label="읽지 않은 메시지"></span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class="badge unread" aria-live="polite" aria-label="읽지 않은 메시지"&gt;&lt;/span&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'toast'" class="component-section">
        <section class="component-header">
          <h2>Toast</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview">
            <div class="toast-container relative">
              <div class="toast" role="status">
                <p class="toast-content">
                  <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#success"></use>
                  </svg>
                  <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                </p>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="toast-container relative"&gt;
  &lt;div class="toast" role="status"&gt;
    &lt;p class="toast-content"&gt;
      &lt;svg class="icon"&gt;
        &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#success"&gt;&lt;/use&gt;
      &lt;/svg&gt;
      &lt;span&gt;‘아르고스의 과학수업’ 수업을 추가 했습니다.&lt;/span&gt;
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;       
            </code></pre>
          </div>
          
          <h3>Toast Closeable</h3>
          <div class="component-preview relative">
            <article class="toast-container" aria-live="polite" style="position:relative; left:50%;">
              <section class="toast closeable" role="status">
                <p class="toast-content">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#success"></use>
                  </svg>
                  <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                </p>
                <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="showToast = false">
                  <svg class="button__icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                  </svg>
                </button>
              </section>
            </article>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;article class="toast-container" aria-live="polite"&gt;
  &lt;section class="toast closeable" role="status"&gt;
    &lt;p class="toast-content"&gt;
      &lt;svg class="icon" aria-hidden="true"&gt;
        &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#success"&gt;&lt;/use&gt;
      &lt;/svg&gt;
      &lt;span&gt;‘아르고스의 과학수업’ 수업을 추가 했습니다.&lt;/span&gt;
    &lt;/p&gt;
    &lt;button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="showToast = false"&gt;
      &lt;svg class="button__icon" aria-hidden="true"&gt;
        &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#close"&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/section&gt;
&lt;/article&gt;     
            </code></pre>
          </div>

          <h3>Transition</h3>
          <h4>Top</h4>
          <div class="component-preview relative">
            <button class="button button_outline-primary" @click="triggerToast2">Show Toast</button>
            <Transition name="toast">
              <article v-if="showToast2" class="toast-container top" aria-live="polite">
                <section class="toast closeable" role="status">
                  <p class="toast-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#success"></use>
                    </svg>
                    <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                  </p>
                  <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="showToast2 = false">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                    </svg>
                  </button>
                </section>
              </article>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="toast"&gt;
  &lt;article v-if="showToast" class="toast-container top" aria-live="polite"&gt;
    &lt;section class="toast closeable" role="status"&gt;
      ...
    &lt;/section&gt;
  &lt;/article&gt;
&lt;/Transition&gt;              
            </code></pre>
          </div>

          <h4>Bottom</h4>
          <div class="component-preview relative">
            <button class="button button_outline-primary" @click="triggerToast">Show Toast</button>
            <Transition name="toast">
              <article v-if="showToast" class="toast-container bottom" aria-live="polite">
                <section class="toast closeable" role="status">
                  <p class="toast-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#success"></use>
                    </svg>
                    <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                  </p>
                  <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="showToast = false">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                    </svg>
                  </button>
                </section>
              </article>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="toast"&gt;
  &lt;article v-if="showToast" class="toast-container bottom" aria-live="polite"&gt;
    &lt;section class="toast closeable" role="status"&gt;
      ...
    &lt;/section&gt;
  &lt;/article&gt;
&lt;/Transition&gt;          
            </code></pre>
          </div>

          <h4>With SNB</h4>
          <p class="docs-desc">사이드바가 있는 화면에서 포지션 변경을 위해 <code class="doc">.with-snb</code> 적용 </p>
          <div class="component-preview relative">
            <button class="button button_outline-primary" @click="triggerToast3">Show Toast</button>
            <Transition name="toast">
              <article v-if="showToast3" class="toast-container bottom with-snb" aria-live="polite">
                <section class="toast" role="status">
                  <p class="toast-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#success"></use>
                    </svg>
                    <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                  </p>
                </section>
              </article>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="toast"&gt;
  &lt;article v-if="showToast" class="toast-container bottom with-snb" aria-live="polite"&gt;
    &lt;section class="toast" role="status"&gt;
      ...
    &lt;/section&gt;
  &lt;/article&gt;
&lt;/Transition&gt;              
            </code></pre>
          </div>

        </section>
      </div>

      <div v-show="activePubComponent === 'dialog'" class="component-section">
        <section class="component-header">
          <h2>Dialog</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal1 = true">Modal Open</button>
            <Transition name="fade">
              <section v-if="showModal1" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달 제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal1 = false">
                        취소
                      </button>
                      <button class="button button_primary button_large">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="fade"&gt;
  &lt;section v-if="showModal1" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
    &lt;div class="modal-dialog lg"&gt;
      &lt;div class="modal-content"&gt;
        &lt;div class="modal-header"&gt;
          &lt;h5 id="modal-heading-01" class="modal-title" tabindex="-1"&gt;
            모달 제목
          &lt;/h5&gt;
        &lt;/div&gt;
        &lt;div class="modal-body" id="modal-content-id-1"&gt;
          &lt;p&gt;모달 내용&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="modal-footer"&gt;
          &lt;button class="button button_outline-primary button_large" @click="showModal1 = false"&gt;
            취소
          &lt;/button&gt;
          &lt;button class="button button_primary button_large"&gt;
            확인
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/Transition&gt;

            </code></pre>
          </div>

          <h3>Sizing</h3>
          <h4>Small</h4>
          <p class="docs-desc">Alert에 사용되는 Small 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>320px</li>
            <li>요소 간격 24px과 중앙 정렬 스타일이 포함됨</li>
            <li>버튼 사이즈 default (40px)</li>
            <li>modal-dialog 에 <code class="doc">sm</code> 클래스 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal2 = true">Modal Open</button>
            <!-- Small 사이즈: Alert 모달 -->
            <Transition name="fade">
              <section v-if="showModal2" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog sm">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달 제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_primary" @click="showModal2 = false">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog sm"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>Medium</h4>
          <p class="docs-desc">채팅방 설정, 파일 전송 시 사용되는 Medium 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>360px</li>
            <li>modal-dialog 에 <code class="doc">md</code> 클래스 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal3 = true">Modal Open</button>
            <!-- Medium 사이즈: 채팅 설정, 파일 첨부 모달 -->
            <Transition name="fade">
              <section v-if="showModal3" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달 제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_primary button_large" @click="showModal3 = false">
                        전송
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog md"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>Large</h4>
          <p class="docs-desc">Confirm 또는 사용자 입력(예: 폼 작성)에 사용되는 Large 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>480px</li>
            <li>modal-dialog 에 <code class="doc">lg</code> 클래스 적용</li>
          </ul> 
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal4 = true">Modal Open</button>
            <!-- Large 사이즈: Confirm 및 사용자 입력 모달 -->
            <Transition name="fade">
              <section v-if="showModal4" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달 제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal4 = false">
                        취소
                      </button>
                      <button class="button button_primary button_large">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog lg"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>X-Large</h4>
          <p class="docs-desc">내 화면 공유에 사용되는 X-Large 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>720px</li>
            <li>modal-dialog 에 <code class="doc">x-lg</code> 클래스 적용</li>
          </ul> 
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal5 = true">Modal Open</button>
            <!-- X-Large 사이즈: 화면 공유 모달 -->
            <Transition name="fade">
              <section v-if="showModal5" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog x-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal5 = false">
                        취소
                      </button>
                      <button class="button button_primary button_large">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog x-lg"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>XX-Large</h4>
          <p class="docs-desc">페이징 테이블에 사용되는 XX-Large 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>960px</li>
            <li>modal-dialog 에 <code class="doc">xx-lg</code> 클래스 적용</li>
          </ul> 
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal5 = true">Modal Open</button>
            <!-- XX-Large 사이즈: 페이징 테이블 모달 -->
            <Transition name="fade">
              <section v-if="showModal5" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog xx-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal5 = false">
                        취소
                      </button>
                      <button class="button button_primary button_large">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog xx-lg"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h3>Transition</h3>
          <h4>Default (Fade In/Out)</h4>
          <p class="docs-desc"></p>
          <ul class="docs-list">
            <li>Transition에 <code class="doc">fade</code> 적용</li>
          </ul> 
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal6 = true">Modal Open</button>
            <Transition name="fade">
              <section v-if="showModal6" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal6 = false">
                        취소
                      </button>
                      <button class="button button_primary button_large">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="fade"&gt;
  ...
&lt;/Transition&gt;
            </code></pre>
          </div>

          <h4>Zoom In/Out</h4>
          <p class="docs-desc">등장 시 확대(Zoom In), 퇴장 시 축소(Zoom Out)</p>
          <ul class="docs-list">
            <li>Transition에 <code class="doc">zoom</code> 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal7 = true">Modal Open</button>
            <Transition name="zoom">
              <section v-if="showModal7" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal7 = false">
                        취소
                      </button>
                      <button class="button button_primary button_large">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="zoom"&gt;
  ...
&lt;/Transition&gt;
            </code></pre>
          </div>

          <h4>Zoom Out/In</h4>
          <p class="docs-desc">등장 시 축소(Zoom Out), 퇴장 시 확대(Zoom In)</p>
          <ul class="docs-list">
            <li>Transition에 <code class="doc">zoom-reverse</code> 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal8 = true">Modal Open</button>
            <Transition name="zoom-reverse">
              <section v-if="showModal8" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">
                        모달제목
                      </h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal8 = false">
                        취소
                      </button>
                      <button class="button button_primary button_large">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="zoom-reverse"&gt;
  ...
&lt;/Transition&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'alert'" class="component-section">
        <section class="component-header">
          <h2>Alert</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Alert</h3>
          <div class="component-preview">
            <Transition name="alert">
              <article v-show="isAlert" class="alert-container" aria-live="polite" style="max-width: 100%">
                <section class="alert closeable" role="alert">
                  <p class="alert-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#warning"></use>
                    </svg>
                    <span>라이선스가 초과되어 더 이상 학생들이 수업에 참여할 수 없습니다.</span>
                  </p>
                  <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="closeAlert">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                    </svg>
                  </button>
                </section>
              </article>
            </Transition>
            <p style="padding:10px"></p>
            <Transition name="alert">
              <article v-show="isAlert" class="alert-container" aria-live="polite" style="max-width: 100%">
                <section class="alert closeable" role="alert">
                  <p class="alert-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#warning"></use>
                    </svg>
                    <span>서비스 기간 곧 만료됩니다.</span>
                    <small>서비스가 2024년 12월 31일에 만료 예정입니다. 서비스를 계속 이용하시려면 라이선스를 구매해 주세요.</small>
                  </p>
                  <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="closeAlert">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                    </svg>
                  </button>
                </section>
              </article>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="alert"&gt;
  &lt;article v-show="isAlert" class="alert-container" aria-live="polite" style="max-width: 100%"&gt;
    &lt;section class="alert closeable" role="alert"&gt;
      &lt;p class="alert-content"&gt;
        &lt;svg class="icon" aria-hidden="true"&gt;
          &lt;use xlink:href="@/assets/images/icons/symbols.svg#warning"&gt;&lt;/use&gt;
        &lt;/svg&gt;
        &lt;span&gt;서비스 기간 곧 만료됩니다.&lt;/span&gt;
        &lt;small&gt;서비스가 2024년 12월 31일에 만료 예정입니다. 서비스를 계속 이용하시려면 라이선스를 구매해 주세요.&lt;/small&gt;
      &lt;/p&gt;
      &lt;button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="closeAlert"&gt;
        &lt;svg class="button__icon" aria-hidden="true"&gt;
          &lt;use xlink:href="@/assets/images/icons/symbols.svg#close"&gt;&lt;/use&gt;
        &lt;/svg&gt;
      &lt;/button&gt;
    &lt;/section&gt;
  &lt;/article&gt;
&lt;/Transition&gt;
            </code></pre>
          </div>

        </section>
      </div>

      <div v-show="activePubComponent === 'chat'" class="component-section">
        <section class="component-header">
          <h2>Chat</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Chat messages</h3>
          <p class="docs-desc"> <code class="doc">.chat-txt</code>요소의 CSS속성 
            <code class="doc">white-space: break-spaces;</code> <code class="doc">white-space: pre-line;</code> 
            추후 수정하기@ </p>
            <p class="docs-desc">채팅 길어질 경우 스크롤 추가.,</p>
          <ul class="docs-list">
            <li>break-spaces: 여러 개의 연속된 공백을 모두 유지합니다. 텍스트가 너무 길어서 줄을 넘어가야 할 경우, 공백에서도 줄바꿈이 가능합니다.</li>
            <li>pre-line: 여러 개의 연속된 공백은 한 개의 공백으로 처리, 줄바꿈 문자(\n)는 인식하여 줄을 나눕니다.</li>
          </ul>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat">
                <!-- 채팅목록:s -->
                <ul class="chat-list">
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">[학생 이름]이 들어왔습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>Definitely.</span>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>In fact, you might recognize one of them.</span>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                  <li class="chat-msg inbound">
                    <span class="chat-author">정사랑</span>
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>What is it?</span>
                      </p>
                      <small class="chat-meta">오전 10:53</small>
                    </div>
                  </li>
                  <li class="chat-msg inbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>Oh! Yes! Teacher.</span>
                      </p>
                      <small class="chat-meta">오후 1:54</small>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-marker">여기까지 읽으셨습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>In fact, you might recognize one of them.</span>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                </ul>
                <!-- 채팅목록:e -->
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role=&quot;log&quot; class=&quot;chat&quot;&gt;
  &lt;ul class=&quot;chat-list&quot;&gt;
    &lt;li class=&quot;chat-msg log&quot;&gt;
      ...
    &lt;/li&gt;
    &lt;li class=&quot;chat-msg outbound&quot;&gt;
      ...
    &lt;/li&gt;
    &lt;li class=&quot;chat-msg inbound&quot;&gt;
      ...
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h3>Message Input</h3>
          <p class="docs-desc">메시지 전송 textarea</p>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat scroll">
                <ul class="chat-list">
                  <li class="chat-msg inbound">
                    <span class="chat-author">정사랑</span>
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>What is it?</span>
                      </p>
                      <small class="chat-meta">오전 10:53</small>
                    </div>
                  </li>
                  <li class="chat-msg inbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>Oh! Yes! Teacher.</span>
                      </p>
                      <small class="chat-meta">오전 10:54</small>
                    </div>
                  </li>
                </ul>
                <article class="chat-input">
                  <div class="chat-input-box">
                    <div class="input-area">
                      <div class="form-element">
                        <div class="form-element__control">
                            <textarea class="input scroll" id="text-area-id-0" rows="2" placeholder="메시지를 입력하세요."></textarea>
                        </div>
                      </div>
                      <button class="button button_icon" title="메시지 전송" aria-label="메시지 전송">
                        <svg class="button__icon" aria-hidden="true">
                          <use xlink:href="@/assets/images/icons/symbols.svg#send"></use>
                        </svg>
                      </button>
                    </div>
                    <div class="actions-area">
                      <button class="button button_icon" title="Button Title" aria-label="Button Title">
                        <svg class="button__icon" aria-hidden="true">
                          <use xlink:href="@/assets/images/icons/symbols.svg#emoji"></use>
                        </svg>
                      </button>
                      <button class="button button_icon" title="Button Title" aria-label="Button Title">
                        <svg class="button__icon" aria-hidden="true">
                          <use xlink:href="@/assets/images/icons/symbols.svg#attach"></use>
                        </svg>
                      </button>
                      <button class="button button_icon" title="Button Title" aria-label="Button Title">
                        <svg class="button__icon" aria-hidden="true">
                          <use xlink:href="@/assets/images/icons/symbols.svg#setting"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
      
            </code></pre>
          </div>

          <h3>Inbound messages</h3>
          <p class="docs-desc"> <code class="doc">li</code> 에 <code class="doc">.inbound</code> 클래스 추가</p>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat">
                <ul class="chat-list">
                  <li class="chat-msg inbound">
                    <span class="chat-author">정사랑</span>
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>What is it?</span>
                      </p>
                      <small class="chat-meta">오전 10:53</small>
                    </div>
                  </li>
                  <li class="chat-msg inbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>Oh! Yes! Teacher.</span>
                      </p>
                      <small class="chat-meta">오전 10:54</small>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;li class=&quot;chat-msg inbound&quot;&gt;
  &lt;span class=&quot;chat-author&quot;&gt;정사랑&lt;/span&gt;
  &lt;div class=&quot;chat-body&quot;&gt;
    &lt;p class=&quot;chat-txt&quot;&gt;
      &lt;span&gt;What is it?&lt;/span&gt;
    &lt;/p&gt;
    &lt;small class=&quot;chat-meta&quot;&gt;오전 10:53&lt;/small&gt;
  &lt;/div&gt;
&lt;/li&gt;
&lt;li class=&quot;chat-msg inbound&quot;&gt;
  &lt;div class=&quot;chat-body&quot;&gt;
    &lt;p class=&quot;chat-txt&quot;&gt;
      &lt;span&gt;Oh! Yes! Teacher.&lt;/span&gt;
    &lt;/p&gt;
    &lt;small class=&quot;chat-meta&quot;&gt;오전 10:54&lt;/small&gt;
  &lt;/div&gt;
&lt;/li&gt;          
            </code></pre>
          </div>

          <h3>Outbound messages</h3>
          <p class="docs-desc"> <code class="doc">li</code> 에 <code class="doc">.outbound</code> 클래스 추가</p>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat">
                <ul class="chat-list">
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>Definitely.</span>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>In fact, you might recognize one of them.</span>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;li class="chat-msg outbound"&gt;
  &lt;div class="chat-body"&gt;
    &lt;p class="chat-txt"&gt;
      &lt;span&gt;Definitely.&lt;/span&gt;
    &lt;/p&gt;
    &lt;small class="chat-meta"&gt;오후 1:55&lt;/small&gt;
  &lt;/div&gt;
&lt;/li&gt;
&lt;li class="chat-msg outbound"&gt;
  &lt;div class="chat-body"&gt;
    &lt;p class="chat-txt"&gt;
      &lt;span&gt;In fact, you might recognize one of them.&lt;/span&gt;
    &lt;/p&gt;
    &lt;small class="chat-meta"&gt;오후 1:55&lt;/small&gt;
  &lt;/div&gt;
&lt;/li&gt;
            </code></pre>
          </div>

          <h3>File attachment</h3>
          <h4>FIle</h4>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat">
                <ul class="chat-list">
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <div class="chat-txt file">
                        <!-- 파일 리스트 시작 -->
                        <ul class="file-list">
                          <li class="file-item">
                            <div class="file-info">
                              <figure class="file-icon">
                                <svg class="icon icon-default">
                                  <use xlink:href="@/assets/images/icons/symbols.svg#file"></use>
                                </svg>
                              </figure>
                              <p class="file-name" title="파일이름.확장자">파일이름.확장자</p>
                            </div>
                            <div class="file-actions">
                              <button class="button button_text button_underline">열기</button> 
                              <button class="button button_text button_underline">폴더 열기</button>
                            </div>
                          </li>
                          <!-- <li class="file-item">
                            <div class="file-info">
                              <figure class="file-icon">
                                <svg class="icon icon-default">
                                  <use xlink:href="@/assets/images/icons/symbols.svg#file"></use>
                                </svg>
                              </figure>
                              <p class="file-name" title="두 줄로 넘어가는 파일 이름 긴 버전.pdf">두 줄로 넘어가는 파일 이름 긴 버전.pdf</p>
                            </div>
                            <div class="file-actions">
                              <button class="button button_text button_underline">열기</button>
                              <button class="button button_text button_underline">폴더 열기</button>
                            </div>
                          </li> -->
                        </ul>
                      </div>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;li class="chat-msg outbound"&gt;
  &lt;div class="chat-body"&gt;
    &lt;div class="chat-txt file"&gt;
      &lt;!-- 파일 리스트 시작 --&gt;
      &lt;ul class="file-list"&gt;
        &lt;li class="file-item"&gt;
          &lt;div class="file-info"&gt;
            &lt;figure class="file-icon"&gt;
              &lt;svg class="icon icon-default"&gt;
                &lt;use xlink:href="@@/assets/images/icons/symbols.svg#file"&gt;&lt;/use&gt;
              &lt;/svg&gt;
            &lt;/figure&gt;
            &lt;p class="file-name" title="파일이름.확장자"&gt;파일이름.확장자&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class="file-actions"&gt;
            &lt;button class="button button_text button_underline"&gt;열기&lt;/button&gt; 
            &lt;button class="button button_text button_underline"&gt;폴더 열기&lt;/button&gt;
          &lt;/div&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
    &lt;small class="chat-meta"&gt;오후 1:55&lt;/small&gt;
  &lt;/div&gt;
&lt;/li&gt;

            </code></pre>
          </div>

          <h4>Image</h4>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat">
                <ul class="chat-list">
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>세로로 긴 이미지</span>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt image">
                        <a href="" class="file-figure">
                          <img src="@/assets/images/temp/chat_thumb_vertical.webp" alt="">
                        </a>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                  <li class="chat-msg inbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>가로로 긴 이미지</span>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                  <li class="chat-msg inbound">
                    <div class="chat-body">
                      <p class="chat-txt image">
                        <a href="" class="file-figure">
                          <img src="@/assets/images/temp/chat_thumb_horizon.webp" alt="">
                        </a>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>작은 이미지 50x50</span>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                  <li class="chat-msg outbound">
                    <div class="chat-body">
                      <p class="chat-txt image">
                        <a href="" class="file-figure">
                          <img src="@/assets/images/temp/chat_thumb_minimum.webp" alt="">
                        </a>
                      </p>
                      <small class="chat-meta">오후 1:55</small>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;li class="chat-msg inbound"&gt;
  &lt;div class="chat-body"&gt;
    &lt;p class="chat-txt image"&gt;
      &lt;a href="" class="file-figure"&gt;
        &lt;img src="@/assets/images/temp/chat_thumb_horizon.webp" alt=""&gt;
      &lt;/a&gt;
    &lt;/p&gt;
    &lt;small class="chat-meta"&gt;오후 1:55&lt;/small&gt;
  &lt;/div&gt;
&lt;/li&gt;
            </code></pre>
          </div>

          <h3>Read Marker</h3>
          <p class="docs-desc"><code class="doc">.log</code> <code class="doc">.chat-marker</code> 클래스 추가</p>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat">
                <ul class="chat-list">
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-marker">여기까지 읽으셨습니다.</p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;li class=&quot;chat-msg log&quot;&gt;
  &lt;div class=&quot;chat-body&quot;&gt;
    &lt;p class=&quot;chat-marker&quot;&gt;여기까지 읽으셨습니다.&lt;/p&gt;
  &lt;/div&gt;
&lt;/li&gt;
            </code></pre>
          </div>

          <h3>Action log</h3>
          <p class="docs-desc"> <code class="doc">.log</code> <code class="doc">.chat-log</code> 클래스 추가</p>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat">
                <ul class="chat-list">
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">[학생 이름]이 들어왔습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">[학생 이름]이 나갔습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">[학생 이름]이 화면 공유를 시작했습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">[학생 이름]이 화면 공유를 종료했습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">선생님이 화면 공유를 시작했습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">선생님이 화면 공유를 종료했습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">선생님이 N대 기기 화면을 잠궜습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">선생님이 [앱 이름] 앱을 실행했습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">선생님이 N대 기기 화면 잠금을 해제했습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">선생님이 [url]을 실행했습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">[학생 이름]의 메시지 입력이 제한되었습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">전체 학생의 메시지 입력이 제한되었습니다.</p>
                    </div>
                  </li>
                  <li class="chat-msg log">
                    <div class="chat-body">
                      <p class="chat-log">라이선스가 초과되어 [학생 이름]이 접속 실패되었습니다.</p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;ul class="chat-list"&gt;
  &lt;li class="chat-msg log"&gt;
    &lt;div class="chat-body"&gt;
      &lt;p class="chat-log"&gt;[학생 이름]이 들어왔습니다.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  ...
&lt;/ul&gt;
            </code></pre>
          </div>

          <h3>Empty</h3>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat">
                <div class="chat-empty">
                  <i class="pic-empty"></i>
                  <p>학생들과 함께 채팅을<br>시작해 보세요.</p>
                </div>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role=&quot;log&quot; class=&quot;chat&quot;&gt;
  &lt;div class=&quot;chat-empty&quot;&gt;
    &lt;i class=&quot;pic-empty&quot;&gt;&lt;/i&gt;
    &lt;p&gt;학생들과 함께 채팅을&lt;br&gt;시작해 보세요.&lt;/p&gt;
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>expands up to 10 lines</h4>
          <p class="docs-desc">사용 안함. 퍼블 확인용</p>
          <div class="component-preview">
            <div style="width: 320px; height: fit-content;">
              <section role="log" class="chat scroll">
                <ul class="chat-list">
                  <li class="chat-msg inbound">
                    <span class="chat-author">정사랑</span>
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>What is it?</span>
                      </p>
                      <small class="chat-meta">오전 10:53</small>
                    </div>
                  </li>
                  <li class="chat-msg inbound">
                    <div class="chat-body">
                      <p class="chat-txt">
                        <span>Oh! Yes! Teacher.</span>
                      </p>
                      <small class="chat-meta">오전 10:54</small>
                    </div>
                  </li>
                </ul>
                  <article class="chat-input">
                    <div class="chat-input-box">
                      <div class="input-area">
                        <div class="form-element">
                          <div class="form-element__control">
                            <textarea
                              class="input scroll"
                              id="text-area-id-0"
                              :value="message"
                              @input="updateMessage"
                              placeholder="메시지를 입력하세요."
                              ref="textArea"
                            ></textarea>
                          </div>
                        </div>
                        <button class="button button_icon" title="메시지 전송" aria-label="메시지 전송">
                          <svg class="button__icon" aria-hidden="true">
                            <use xlink:href="@/assets/images/icons/symbols.svg#send"></use>
                          </svg>
                        </button>
                      </div>
                      <div class="actions-area">
                        <button class="button button_icon" title="Button Title" aria-label="Button Title">
                          <svg class="button__icon" aria-hidden="true">
                            <use xlink:href="@/assets/images/icons/symbols.svg#emoji"></use>
                          </svg>
                        </button>
                        <button class="button button_icon" title="Button Title" aria-label="Button Title">
                          <svg class="button__icon" aria-hidden="true">
                            <use xlink:href="@/assets/images/icons/symbols.svg#attach"></use>
                          </svg>
                        </button>
                        <button class="button button_icon" title="Button Title" aria-label="Button Title">
                          <svg class="button__icon" aria-hidden="true">
                            <use xlink:href="@/assets/images/icons/symbols.svg#setting"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
              </section>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
      
            </code></pre>
          </div>

        </section>
      </div>

      <div v-show="activePubComponent === 'globalheader'" class="component-section">
        <section class="component-header">
          <h2>Global Header</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">

          <h3>Console Header</h3>
          <h4>Default</h4>
          <div class="component-preview demo-viewport">
            <header class="global-header_container">
              <a href="#main" ref="skipLink" class="assistive-text assistive-text_focus">주요 컨텐츠로 건너뛰기</a>
              <div class="global-header global-header_console">
                <div class="global-header__item">
                  <h1 class="global-header__logo">
                    <img src="@/assets/images/logo/logo_header.svg" alt="아르고스 클래스룸" width="204" height="25">
                  </h1>
                </div>
                <div class="global-header__item global-header--flex">
                  <ul class="global-actions">
                    <!-- <li class="global-actions__item">
                      <button type="button" class="button button_icon button_icon-large" title="도움말" aria-label="도움말">
                        <svg class="button__icon" aria-hidden="true">
                          <use xlink:href="@/assets/images/icons/symbols.svg#cs"></use>
                        </svg>
                      </button>
                    </li> -->
                    <li class="global-actions__item my">
                      <button type="button" class="button button_text user" title="내 정보" aria-label="내 정보" @click="isMyVisible = !isMyVisible">
                        <svg class="icon icon_x-large icon_left" aria-hidden="true">
                          <use xlink:href="@/assets/images/icons/symbols.svg#user_circle"></use>
                        </svg>김나나
                      </button>
                      <Transition name="accordion">
                        <div v-show="isMyVisible" class="context gray">
                          <ul class="context-list">
                            <li><span role="button" tabindex="0">Argos123</span></li>
                            <li><span role="button" tabindex="0" class="button button_text button_underline">로그아웃</span></li>
                          </ul>
                        </div>
                      </Transition>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>

          <h3>Class Room Header</h3>
          <h4>수업 시작 전</h4>
          <div class="component-preview demo-viewport">
            <header class="global-header_container">
              <a href="#" class="assistive-text assistive-text_focus">Skip to Navigation</a>
              <a href="#" class="assistive-text assistive-text_focus">Skip to Main Content</a>
              <div class="global-header">
                <div class="global-header__item left">
                  <ul class="global-actions">
                    <li class="global-actions__item">
                      <button id="toggle-snb" class="button button_icon toggle-snb closed" title="Menu Icon" @click="clickTogg">
                        <span class="assistive-text">Menu</span>
                      </button>
                      <span class="badge unread" aria-live="polite" aria-label="읽지 않은 메시지"></span>
                    </li>
                  </ul>
                </div>
                <div class="global-header__item center">
                  <ul class="global-actions">
                    <li class="global-actions__item">
                      <div class="global__text">Argos의 영어교실</div>
                    </li>
                    <!-- 24.12.02 수업코드 버튼 삭제 -->
                  </ul>
                </div>
                <div class="global-header__item right">
                  <ul class="global-actions">
                    <!-- 24.12.02 나가기 버튼 변경-->
                    <li class="global-actions__item">
                      <button class="button button_outline-secondary button_large">
                        <svg class="icon icon_small icon_left">
                          <use xlink:href="@/assets/images/icons/symbols.svg#export_out"></use>
                        </svg>
                        나가기
                      </button>
                    </li>
                    <!-- 24.12.02 수업 시작 버튼 클래스명 변경 -->
                    <li class="global-actions__item">
                      <button class="button button_dark button_large single" @click="clickClassStatus">
                        <svg class="icon icon_small icon_left">
                          <use xlink:href="@/assets/images/icons/symbols.svg#start"></use>
                        </svg>
                        수업 시작
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>

          <h4>수업 진행 중</h4>
          <div class="component-preview demo-viewport">
            <header class="global-header_container">
              <a href="#" class="assistive-text assistive-text_focus">Skip to Navigation</a>
              <a href="#" class="assistive-text assistive-text_focus">Skip to Main Content</a>
              <div class="global-header">
                <div class="global-header__item left">
                  <ul class="global-actions">
                    <li class="global-actions__item">
                      <button
                        id="toggle-snb"
                        class="button button_icon toggle-snb"
                        title="Menu"
                        aria-label="Menu"
                        :class="{ closed: !isSnbMenu }"
                        @click="onSnbClick"
                      ></button>
                      <span class="badge unread" aria-live="polite" aria-label="읽지 않은 메시지"></span>
                    </li>
                  </ul>
                </div>
                <div class="global-header__item center">
                  <ul class="global-actions">
                    <li class="global-actions__item">
                      <div class="global__text">Argos의 영어교실</div>
                    </li>
                    <!-- 24.12.02 수업코드 버튼 삭제 -->
                  </ul>
                </div>
                <div class="global-header__item right">
                  <ul class="global-actions">
                    <li class="global-header__time">
                      <svg class="icon icon_x-small gray07">
                        <use xlink:href="@/assets/images/icons/symbols.svg#time"></use>
                      </svg>
                      <span class="text">00 : 45 : 01</span>
                    </li>
                    <li class="global-actions__item">
                      <!-- 24.12.02 수업종료 버튼의 클래스명 변경 -->
                      <button class="button button_primary button_large single" @click="clickClassStatus">
                        <svg class="icon icon_small icon_left">
                          <use xlink:href="@/assets/images/icons/symbols.svg#export"></use>
                        </svg>
                        수업 종료
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>

          <h4>종료</h4>
          <div class="component-preview demo-viewport">
            <header class="global-header_container">
              <a href="#" class="assistive-text assistive-text_focus">Skip to Navigation</a>
              <a href="#" class="assistive-text assistive-text_focus">Skip to Main Content</a>
              <div class="global-header">
                <div class="global-header__item left">
                  <ul class="global-actions">
                    <li class="global-actions__item">
                      <button
                        id="toggle-snb"
                        class="button button_icon toggle-snb"
                        title="Menu"
                        aria-label="Menu"
                        :class="{ closed: !isSnbMenu }"
                        @click="onSnbClick"
                      ></button>
                      <span class="badge unread" aria-live="polite" aria-label="읽지 않은 메시지"></span>
                    </li>
                  </ul>
                </div>
                <div class="global-header__item center">
                  <ul class="global-actions">
                    <li class="global-actions__item">
                      <div class="global__text">Argos의 영어교실</div>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'pageheader'" class="component-section">
        <section class="component-header">
          <h2>Page Header</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Classroom</h3>
          <div class="component-preview" style="background-color: #E7EDF6;">
            <div class="page-header page-header__row">
              <div class="page-header__actions">
                <div class="page-header__control">
                  <div class="form-element form-element__control">
                    <div class="checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-1" value="checkbox-unique-id-1"
                        checked="" />
                      <label class="checkbox__label" for="checkbox-unique-id-1">
                        <span class="checkbox_faux"><svg class="icon"><use xlink:href="@/assets/images/icons/symbols.svg#check"></use></svg></span>
                        <span class="form-element__label">전체선택</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="page-header__meta item-count">
                  <em class="primary06">1</em>/15
                </div>
              </div>
              <div class="page-header__controls">
                <div class="page-header__control">
                  <div class="form-element">
                    <label class="blind" for="text-input-id-0">학생 번호 이름 검색</label>
                    <div class="form-element__control input-has-icon input-has-icon_right">
                      <input type="text" id="text-input-id-0" placeholder="학생 번호 이름을 입력하세요." class="input" />
                      <button class="button button_icon" title="Menu Icon">
                        <svg class="button__icon" aria-hidden="true">
                          <use xlink:href="@/assets/images/icons/symbols.svg#search"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="page-header__control">
                  <div class="select_container">
                    <select class="select" id="select-01">
                      <option>이름순</option>
                      <option value="option1">참여 시간 (내림차순/오름차순)</option>
                      <option value="option2">이름 (내림차순/오름차순)</option>
                      <option value="option3">번호 (내림차순/오름차순)</option>
                    </select>
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"></use>
                    </svg>
                  </div>
                </div>
                <div class="page-header__control">
                  <button class="button button_outline button_icon button_icon-border refreshButton" title="새로고침">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#reset"></use>
                    </svg>
                    <span class="assistive-text">Reset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>

          <h3>Console</h3>
          <div class="component-preview" style="background-color: #E7EDF6;">
            <Transition name="alert">
              <article v-show="isAlert" class="alert-container" aria-live="polite" style="max-width: 100%">
                <section class="alert closeable" role="alert">
                  <p class="alert-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#warning"></use>
                    </svg>
                    <!-- Case1: -->
                    <span>라이선스가 초과되어 더 이상 학생들이 수업에 참여할 수 없습니다.</span>
                    <!-- Case 2: -->
                    <!-- <span>서비스 기간 곧 만료됩니다.</span>
                    <small>서비스가 2024년 12월 31일에 만료 예정입니다. 서비스를 계속 이용하시려면 라이선스를 구매해 주세요.</small> -->
                  </p>
                  <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="closeAlert">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                    </svg>
                  </button>
                </section>
              </article>
            </Transition>
            <!-- 상단 검색헤더 -->
            <div class="page-header">
              <div class="page-header__row">
                <div class="page-header__actions column">
                  <h2 class="page-header__title">서울대학교사범대학부설 초등학교</h2>
                </div>
                <div class="page-header__controls">
                  <div class="page-header__control">
                    <div class="form-element">
                      <label class="blind" for="text-input-id-0">수업,교사 이름 검색</label>
                      <div class="form-element__control input-has-icon input-has-icon_right multiple">
                        <input type="text" id="text-input-id-0" placeholder="수업,교사 이름 검색" class="input" />
                        <button type="button" class="button button_icon" title="상세 검색" :class="{'active':isContext3}" @click="onContextClick3">
                          <svg class="button__icon" aria-hidden="true">
                            <use xlink:href="@/assets/images/icons/symbols.svg#filter"></use>
                          </svg>
                        </button>
                        <button class="button button_icon search" title="검색">
                          <svg class="button__icon" aria-hidden="true">
                            <use xlink:href="@/assets/images/icons/symbols.svg#search"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="page-header__control">
                    <button type="button" class="button button_primary button_large single" @click="showModal1 = true">
                      <svg class="icon icon_left">
                        <use xlink:href="@/assets/images/icons/symbols.svg#add"></use>
                      </svg>수업 추가
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="page-header__row">
                <div class="page-header__actions">
                  <div class="page-header__meta item-count">총 <em>N</em>개</div>
                </div>
                <div class="page-header__controls">
                  <div class="page-header__control">
                    <button type="button" class="button button_icon" :class="{ active: viewMode === 'Card' }" title="그리드 레이아웃" aria-label="그리드 레이아웃" @click="changeViewMode('Card')">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#card"></use>
                      </svg>
                    </button>
                  </div>
                  <div class="page-header__control">
                    <button type="button" class="button button_icon" :class="{ active: viewMode === 'Table' }" title="리스트 레이아웃" aria-label="리스트 레이아웃" @click="changeViewMode('Table')">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#list"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'code'" class="component-section">
        <section class="component-header">
          <h2>QR Code</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Default</h3>
          <div class="component-preview">
            <div style="width: 480px; padding: 32px;">
              <div class="code">
                <img src="@/assets/images/temp/QR_code_sample.png" alt="수업 코드의 QR code" class="code_qr">
                <div class="code_text">
                  <em>1234</em>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>
<!-- 
          <h3>Color</h3>
          <h4>Primary</h4>
          <div class="component-preview">
            <div style="width: 480px; padding: 32px;">
              <div class="code code-blue">
                <img src="@/assets/images/temp/QR_code_sample.png" alt="수업 코드의 QR code" class="code_qr">
                <div class="code_text">
                  <em>1234</em>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div> -->

          <h3>Sizing</h3>
          <h4>Small</h4>
          <div class="component-preview" style="background-color: #E7EDF6;">
            <div style="width: 320px; padding: 30px;">
              <div class="code code_small">
                <img src="@/assets/images/temp/QR_code_sample.png" alt="수업 코드의 QR code" class="code_qr">
                <div class="code_text">
                  <em>1234</em>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>

          <h4>Large</h4>
          <div class="component-preview" style="background-color: #E7EDF6;">
            <div class="code code_large">
              <div class="left">
                <div class="code_text">
                  <em>1234</em>
                </div>
              </div>
              <div class="right">
                <div class="code_qr_box"><img src="@/assets/images/temp/QR_code_sample.png" alt="수업 코드의 QR code" class="code_qr"></div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'tabs'" class="component-section">
        <section class="component-header">
          <h2>Tabs</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <p class="docs-desc">사용안함 (퍼블 확인용)</p>
          <div class="component-preview">
            <div class="tabs">
              <ul class="tabs__nav" role="tablist">
                <li class="tabs__item is-active" title="Item One" role="presentation">
                  <button class="tabs__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-1" id="tab-1__item">Item One</button>
                </li>
                <li class="tabs__item" title="Item Two" role="presentation">
                  <button class="tabs__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-2" id="tab-2__item">Item Two</button>
                </li>
                <li class="tabs__item" title="Item " role="presentation">
                  <button class="tabs__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-3" id="tab-3__item">Item </button>
                </li>
              </ul>
              <div id="tab-1" class="tabs__content show" role="tabpanel" aria-labelledby="tab-1__item">Item One Content</div>
              <div id="tab-2" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-2__item">Item Two Content</div>
              <div id="tab-3" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-3__item">Item  Content</div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="tabs"&gt;
  &lt;ul class="tabs__nav" role="tablist"&gt;
    &lt;li class="tabs__item is-active" title="Item One" role="presentation"&gt;
      &lt;button class="tabs__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-1" id="tab-1__item"&gt;Item One&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" title="Item Two" role="presentation"&gt;
      &lt;button class="tabs__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-2" id="tab-2__item"&gt;Item Two&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" title="Item " role="presentation"&gt;
      &lt;button class="tabs__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-3" id="tab-3__item"&gt;Item &lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;div id="tab-1" class="tabs__content show" role="tabpanel" aria-labelledby="tab-1__item"&gt;
    Item One Content
  &lt;/div&gt;
  &lt;div id="tab-2" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-2__item"&gt;
    Item Two Content
  &lt;/div&gt;
  &lt;div id="tab-3" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-3__item"&gt;
    Item  Content
  &lt;/div&gt;
&lt;/div&gt;            
            </code></pre>
          </div>
          <h3>With Icon</h3>
          <p class="docs-desc">탭의 컨테이너에 flex속성 <code class="doc">.tabs_flex</code>를 추가한다. 아이콘 탭으로 변경하기 위해 <code
              class="doc">.tabs__with-icon</code>를 추가한다.</p>
          <div class="component-preview">
            <div style="width:320px">
              <div class="tabs tabs_flex">
                <ul class="tabs__nav" role="tablist">
                  <li class="tabs__item" :class="{ 'is-active': activeTabIcon === 0 }" title="채팅" role="presentation">
                    <button
                      class="tabs__link tabs__with-icon"
                      role="tab"
                      tabindex="0"
                      :aria-selected="activeTabIcon === 0"
                      aria-controls="tab-1"
                      id="tab-1__item"
                      @click="activeTabIcon = 0"
                    >
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#chat"></use>
                      </svg>
                      <b class="tabs__label">채팅</b>
                    </button>
                  </li>
                  <li class="tabs__item" :class="{ 'is-active': activeTabIcon === 1 }" title="학생" role="presentation">
                    <button
                      class="tabs__link tabs__with-icon"
                      role="tab"
                      tabindex="-1"
                      :aria-selected="activeTabIcon === 1"
                      aria-controls="tab-2"
                      id="tab-2__item"
                      @click="activeTabIcon = 1"
                    >
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#student"></use>
                      </svg>
                      <b class="tabs__label">학생</b>
                    </button>
                  </li>
                  <li class="tabs__item" :class="{ 'is-active': activeTabIcon === 2 }" title="정보" role="presentation">
                    <button
                      class="tabs__link tabs__with-icon"
                      role="tab"
                      tabindex="-1"
                      :aria-selected="activeTabIcon === 2"
                      aria-controls="tab-3"
                      id="tab-3__item"
                      @click="activeTabIcon = 2"
                    >
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#info"></use>
                      </svg>
                      <b class="tabs__label">정보</b>
                    </button>
                  </li>
                </ul>
                <div id="tab-1" class="tabs__content" role="tabpanel" aria-labelledby="tab-1__item" v-show="activeTabIcon === 0">Item One Content</div>
                <div id="tab-2" class="tabs__content" role="tabpanel" aria-labelledby="tab-2__item" v-show="activeTabIcon === 1">Item Two Content</div>
                <div id="tab-3" class="tabs__content" role="tabpanel" aria-labelledby="tab-3__item" v-show="activeTabIcon === 2">Item  Content</div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="tabs tabs_flex"&gt;
  &lt;ul class="tabs__nav" role="tablist"&gt;
    &lt;li class="tabs__item is-active" title="채팅" role="presentation"&gt;
      &lt;button class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-1" id="tab-1__item"&gt;
        &lt;svg class="icon"&gt;
          &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#chat"&gt;&lt;/use&gt;
        &lt;/svg&gt;
        &lt;b class="tabs__label"&gt;채팅&lt;/b&gt;
      &lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" title="학생" role="presentation"&gt;
      &lt;button class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-2" id="tab-2__item"&gt;
        &lt;svg class="icon"&gt;
          &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#student"&gt;&lt;/use&gt;
        &lt;/svg&gt;
        &lt;b class="tabs__label"&gt;학생&lt;/b&gt;
      &lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" title="정보" role="presentation"&gt;
      &lt;button class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-3" id="tab-3__item"&gt;
        &lt;svg class="icon"&gt;
          &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#info"&gt;&lt;/use&gt;
        &lt;/svg&gt;
        &lt;b class="tabs__label"&gt;정보&lt;/b&gt;
      &lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;div id="tab-1" class="tabs__content show" role="tabpanel" aria-labelledby="tab-1__item"&gt;
    Item One Content
  &lt;/div&gt;
  &lt;div id="tab-2" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-2__item"&gt;
    Item Two Content
  &lt;/div&gt;
  &lt;div id="tab-3" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-3__item"&gt;
    Item  Content
  &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>

          <h3>화면공유 탭</h3>
          <p class="docs-desc">탭의 컨테이너에 <code class="doc">.share</code> 추가됨 </p>
          <div class="component-preview">
            <div class="tabs share" style="max-width:656px">
              <ul class="tabs__nav" role="tablist">
                <li class="tabs__item" :class="{ 'is-active': activeTab === 0 }" role="presentation">
                  <button
                    class="tabs__link"
                    role="tab"
                    tabindex="0"
                    :aria-selected="activeTab === 0"
                    aria-controls="tab-1"
                    id="tab-1__item"
                    @click="activeTab = 0"
                  >
                    <span>모니터</span>
                    <i class="icon-check"></i>
                  </button>
                </li>
                <li class="tabs__item" :class="{ 'is-active': activeTab === 1 }" role="presentation">
                  <button
                    class="tabs__link"
                    role="tab"
                    tabindex="-1"
                    :aria-selected="activeTab === 1"
                    aria-controls="tab-2"
                    id="tab-2__item"
                    @click="activeTab = 1"
                  >
                    <span>창</span>
                    <i class="icon-check"></i>
                  </button>
                </li>
              </ul>

              <div id="tab-1" class="tabs__content" role="tabpanel" aria-labelledby="tab-1__item" v-show="activeTab === 0">
                <p style="text-align:center">Contents1</p>
              </div>
              <div id="tab-2" class="tabs__content" role="tabpanel" aria-labelledby="tab-2__item" v-show="activeTab === 1">
                <p style="text-align:center">Contents2</p>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="tabs share"&gt;
  &lt;ul class="tabs__nav" role="tablist"&gt;
    &lt;li class="tabs__item" :class="{ 'is-active': activeTab === 0 }" role="presentation"&gt;
      &lt;button
        class="tabs__link"
        role="tab"
        tabindex="0"
        :aria-selected="activeTab === 0"
        aria-controls="tab-1"
        id="tab-1__item"
        @click="activeTab = 0"
      &gt;
        &lt;span&gt;모니터&lt;/span&gt;
        &lt;i class="icon-check"&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" :class="{ 'is-active': activeTab === 1 }" role="presentation"&gt;
      &lt;button
        class="tabs__link"
        role="tab"
        tabindex="-1"
        :aria-selected="activeTab === 1"
        aria-controls="tab-2"
        id="tab-2__item"
        @click="activeTab = 1"
      &gt;
        &lt;span&gt;창&lt;/span&gt;
        &lt;i class="icon-check"&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;

  &lt;div id="tab-1" class="tabs__content" role="tabpanel" aria-labelledby="tab-1__item" v-show="activeTab === 0"&gt;
    &lt;section class="share-container"&gt;
      Contents1
    &lt;/section&gt;
  &lt;/div&gt;
  &lt;div id="tab-2" class="tabs__content" role="tabpanel" aria-labelledby="tab-2__item" v-show="activeTab === 1"&gt;
    &lt;section class="share-container"&gt;
      Contents2
    &lt;/section&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <!-- <div v-show="activePubComponent === 'color'" class="component-section">
        <section class="component-header">
          <h2>Color System</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
          </ul>
        </section>
        <section class="component-main">
          <div class="palette-wrap">
            <div class="color-palette">
              <h3>Black & White</h3>
              <ul>
                <li class="color-item" data-color="#000" style="color:#fff"><button class="color-title">black</button>
                  <button class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#fff" style="border:1px solid #ddd"><button
                    class="color-title">white</button> <button class="hex-button">Hex</button></li>
              </ul>
            </div>
            <div class="color-palette">
              <h3>Grayscale</h3>
              <p class="docs-desc">GRAYSCALE은 정보전달과 위계를 나타내는 중요한 역할을 한다. 주로 BG, Text, line에 사용되며 특히 텍스트는 가독성을 고려해야 하기
                때문에 배경과의 명암비를 고려해야 한다.</p>
              <ul>
                <li class="color-item" data-color="#F9FAFA"><button class="color-title">gray01</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#EDEFF1"><button class="color-title">gray02</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#D9DBE0"><button class="color-title">gray03</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#C6CAD1"><button class="color-title">gray04</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#AAB0BB"><button class="color-title">gray05</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#808998"><button class="color-title">gray06</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#65728A"><button class="color-title">gray07</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#3D4A62"><button class="color-title">gray08</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#1C283E"><button class="color-title">gray09</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#141426"><button class="color-title">gray10</button> <button
                    class="hex-button">Hex</button></li>
              </ul>
            </div>
            <div class="color-palette">
              <h3>Primary Color</h3>
              <p class="docs-desc">Primary color는 버튼, 활성 상태와 같은 UI 전체의 주요 구성 요소에 사용된다.</p>
              <ul>
                <li class="color-item" data-color="#E9F0FD"><button class="color-title">primary01</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#BBD1F9"><button class="color-title">primary02</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#9ABBF6"><button class="color-title">primary03</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#6C9CF2"><button class="color-title">primary04</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#5089EF"><button class="color-title">primary05</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#246BEB"><button class="color-title">primary06</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#2161D6"><button class="color-title">primary07</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#1A4CA7"><button class="color-title">primary08</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#143B81"><button class="color-title">primary09</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#0F2D63"><button class="color-title">primary10</button> <button
                    class="hex-button">Hex</button></li>
              </ul>
            </div>
            <div class="color-palette">
              <h3>Text Color</h3>
              <ul>
                <li class="color-item" data-color="#141426" style="color:#fff"><button
                    class="color-title">text01</button> <button class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#1C283E" style="color:#fff"><button
                    class="color-title">text02</button> <button class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#3D4A62" style="color:#fff"><button
                    class="color-title">text03</button> <button class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#65728A" style="color:#fff"><button
                    class="color-title">text04</button> <button class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#808998" style="color:#fff"><button
                    class="color-title">text05</button> <button class="hex-button">Hex</button></li>
              </ul>
            </div>
            <div class="color-palette">
              <h3>Background Color</h3>
              <ul>
                <li class="color-item" data-color="#fff" style="border:1px solid #ddd"><button
                    class="color-title">bg-white</button> <button class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#DDEBFF"><button class="color-title">bg-blue</button> <button
                    class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#E7EDF6"><button class="color-title">bg-light-blue</button> <button
                    class="hex-button">Hex</button></li>
              </ul>
            </div>
            <div class="color-palette">
              <h3>System Color</h3>
              <ul>
                <li class="color-item" data-color="#DA1E28"><button class="color-title" style="color:#fff">red</button>
                  <button class="hex-button">Hex</button></li>
                <li class="color-item" data-color="#FFD400"><button class="color-title">accent</button> <button
                    class="hex-button">Hex</button></li>
              </ul>
            </div>
          </div>
        </section>
      </div> -->

      <div v-show="activePubComponent === 'context'" class="component-section">
        <section class="component-header">
          <h2>Context Menu</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview">
            <div class="context-container" style="position:relative">
              <button class="button button_outline-primary" style="width:154px" @click="onContextClick">Context Open</button>
              <Transition name="accordion">
                <div v-if="isContext" ref="context" class="context" style="z-index:2">
                  <ul class="context-list">
                    <li><span role="button" tabindex="0">메뉴명 1</span></li>
                    <li><span role="button" tabindex="0">메뉴명 2</span></li>
                    <li><span role="button" tabindex="0">메뉴명 3</span></li>
                    <li><span role="button" tabindex="0">메뉴명 4</span></li>
                    <li><span role="button" tabindex="0">메뉴명 5</span></li>
                    <li><span role="button" tabindex="0">메뉴명 6</span></li>
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="accordion"&gt;
  &lt;div v-if="isContext" ref="context" class="context"&gt;
    &lt;ul class="context-list"&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 1&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 2&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 3&lt;/span&gt;&lt;/li&gt;
      ...
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/Transition&gt;
            </code></pre>
          </div>
          
          <h3>Color</h3>
          <h4>Blue</h4>
          <p class="docs-desc">context 에 클래스 <code class="doc">blue</code> 추가</p>
          <div class="component-preview">
            <div class="context-container" style="position:relative">
              <button class="button button_outline-primary" style="width:154px" @click="onContextClick2">Context Open</button>
              <Transition name="accordion">
                <div v-if="isContext2" ref="context2" class="context blue" style="z-index:2">
                  <ul class="context-list">
                    <li><span role="button" tabindex="0">메뉴명 1</span></li>
                    <li><span role="button" tabindex="0">메뉴명 2</span></li>
                    <li><span role="button" tabindex="0">메뉴명 3</span></li>
                    <li><span role="button" tabindex="0">메뉴명 4</span></li>
                    <li><span role="button" tabindex="0">메뉴명 5</span></li>
                    <li><span role="button" tabindex="0">메뉴명 6</span></li>
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="accordion"&gt;
  &lt;div v-if="isContext" ref="context" class="context blue"&gt;
    &lt;ul class="context-list"&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 1&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 2&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 3&lt;/span&gt;&lt;/li&gt;
      ...
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/Transition&gt;
            </code></pre>
          </div>

          <h4>Gray</h4>
          <p class="docs-desc">context 에 클래스 <code class="doc">gray</code> 추가</p>
          <div class="component-preview">
            <div class="context-container" style="position:relative">
              <button class="button button_outline-primary" style="width:154px" @click="onContextClick5">Context Open</button>
              <Transition name="accordion">
                <div v-if="isContext5" ref="context2" class="context gray" style="z-index:2">
                  <ul class="context-list">
                    <li><span role="button" tabindex="0">메뉴명 1</span></li>
                    <li><span role="button" tabindex="0">메뉴명 2</span></li>
                    <li><span role="button" tabindex="0">메뉴명 3</span></li>
                    <li><span role="button" tabindex="0">메뉴명 4</span></li>
                    <li><span role="button" tabindex="0">메뉴명 5</span></li>
                    <li><span role="button" tabindex="0">메뉴명 6</span></li>
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="accordion"&gt;
  &lt;div v-if="isContext" ref="context" class="context blue"&gt;
    &lt;ul class="context-list"&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 1&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 2&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 3&lt;/span&gt;&lt;/li&gt;
      ...
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/Transition&gt;
            </code></pre>
          </div>

          <h3>그리기 도구 모음</h3>
          <p class="docs-desc">context 에 클래스 <code class="doc">draw</code> 추가</p>
          <div class="component-preview">
            <div class="context-container" style="position:relative">
              <button class="button button_outline-primary" style="width:154px" @click="onContextClick4">Context Open</button>
              <Transition name="accordion-top">
                <div v-if="isContext4" class="context draw" style="z-index:2; left:0; transform:initial">
                  <ul class="context-list">
                    <li><span role="button" tabindex="0">레이저 포인터</span></li>
                    <li><span role="button" tabindex="0">펜</span></li>
                    <li>
                      <span role="button" tabindex="0">
                        <fieldset class="form-element">
                          <legend class="form-element__legend form-element__label draw">색상</legend>
                          <div class="radio_button-group draw">
                            <span class="button radio_button">
                              <input type="radio" id="example-id-11" name="example-name-01" value="draw-red" checked>
                              <label class="radio_button__label" for="example-id-11">
                              </label>
                            </span>
                            <span class="button radio_button">
                              <input type="radio" id="example-id-12" name="example-name-01" value="draw-yellow">
                              <label class="radio_button__label" for="example-id-12">
                              </label>
                            </span>
                            <span class="button radio_button">
                              <input type="radio" id="example-id-13" name="example-name-01" value="draw-green">
                              <label class="radio_button__label" for="example-id-13">
                              </label>
                            </span>
                            <span class="button radio_button">
                              <input type="radio" id="example-id-14" name="example-name-01" value="draw-blue">
                              <label class="radio_button__label" for="example-id-14">
                              </label>
                            </span>
                            <span class="button radio_button">
                              <input type="radio" id="example-id-15" name="example-name-01" value="draw-black">
                              <label class="radio_button__label" for="example-id-15">
                              </label>
                            </span>
                          </div>
                        </fieldset>
                      </span>
                    </li>
                    <li><span role="button" tabindex="0">지우개</span></li>
                    <li><span role="button" tabindex="0">전체 지우기</span></li>
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="accordion-top"&gt;
  &lt;div v-if="isContext" ref="context" class="context draw"&gt;
    &lt;ul class="context-list"&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 1&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 2&lt;/span&gt;&lt;/li&gt;
      &lt;li&gt;&lt;span role="button" tabindex="0"&gt;메뉴명 3&lt;/span&gt;&lt;/li&gt;
      ...
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/Transition&gt;
            </code></pre>
          </div>

          <h3>상세검색</h3>
          <p class="docs-desc"> <code class="doc">.context-form</code> </p>
          <div class="component-preview">
            <div class="context-container" style="position:relative">
              <button class="button button_outline-primary" style="width:154px" @click="onContextClick3">Context Open</button>
              <Transition name="zoom-context">
                <div v-if="isContext3" ref="context3" class="context" style="z-index:2">
                  <div class="context-form">
                    <div class="context-header">
                      <button class="button button_icon button_icon-small" title="닫기" aria-label="닫기" @click="isContext3 = false">
                        <svg class="button__icon" aria-hidden="true">
                          <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                        </svg>
                      </button>
                    </div>
                    <div class="context-body">
                      <div class="form-element">
                        <label class="form-element__label" for="select-01">수업 범위</label>
                        <div class="select_container">
                          <select class="select" id="select-01">
                            <option value="option1" selected>내 수업</option>
                            <option value="option2">전체 수업</option>
                          </select>
                          <svg class="icon">
                            <use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"></use>
                          </svg>
                        </div>
                      </div>
                      <div role="group" class="form-element">
                        <legend class="form-element__legend form-element__label">요일</legend>
                        <div class="checkbox_button-group outline">
                          <span class="button checkbox_button">
                            <input id="unique-id-monday-3" name="checkbox" type="checkbox" value="unique-id-monday-3">
                            <label class="checkbox_button__label" for="unique-id-monday-3">
                              <span class="checkbox_faux">월</span>
                            </label>
                          </span>
                          <span class="button checkbox_button">
                            <input id="unique-id-tuesday-3" name="checkbox" type="checkbox" value="unique-id-tuesday-3">
                            <label class="checkbox_button__label" for="unique-id-tuesday-3">
                              <span class="checkbox_faux">화</span>
                            </label>
                          </span>
                          <span class="button checkbox_button">
                            <input id="unique-id-wednesday-3" name="checkbox" type="checkbox" value="unique-id-wednesday-3">
                            <label class="checkbox_button__label" for="unique-id-wednesday-3">
                              <span class="checkbox_faux">수</span>
                            </label>
                          </span>
                          <span class="button checkbox_button">
                            <input id="unique-id-thursday-3" name="checkbox" type="checkbox" value="unique-id-thursday-3">
                            <label class="checkbox_button__label" for="unique-id-thursday-3">
                              <span class="checkbox_faux">목</span>
                            </label>
                          </span>
                          <span class="button checkbox_button">
                            <input id="unique-id-friday-3" name="checkbox" type="checkbox" value="unique-id-friday-3">
                            <label class="checkbox_button__label" for="unique-id-friday-3">
                              <span class="checkbox_faux">금</span>
                            </label>
                          </span>
                          <span class="button checkbox_button">
                            <input id="select-all" name="checkbox" type="checkbox">
                            <label class="checkbox_button__label underline" for="select-all">
                              <span class="checkbox_faux">전체 선택</span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="context-footer">
                      <button class="button button_secondary">검색</button>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="zoom-context"&gt;
  &lt;div v-if="isContext" ref="context" class="context blue"&gt;
    &lt;ul class="context-form"&gt;
      &lt;div class="context-header"&gt;
        ...
      &lt;/div&gt;
      &lt;div class="context-body"&gt;
        ...
      &lt;/div&gt;
      &lt;div class="context-header"&gt;
        ...
      &lt;/div&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/Transition&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'card'" class="component-section">
        <section class="component-header">
          <h2>Cards</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Adaptive for PC screens</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Card Item</h3>
          <div class="component-preview">
            <div style="width: 280px; display:flex; gap:10px;">
              <!-- State: 기본형 -->
              <article class="card-item">
                <div class="video-wrapper">
                  <video height="100%" poster="@/assets/images/temp/video_sample.png" autoplay>
                    <!-- <source src="videoSource" type="video/mp4" /> -->
                    <source type="video/mp4" />
                  </video>
                </div>
                <div class="card-controls">
                  <div class="card-control flex-end">
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#pin_fill"></use>
                      </svg>
                      <span class="assistive-text">상단고정</span>
                    </button>
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#more"></use>
                      </svg>
                      <span class="assistive-text">더보기</span>
                    </button>
                  </div>
                  <div class="card-meta flex-start">
                    <div class="name" title="김나나">김나나</div>
                    <div class="badge">공유중</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
          
            </code></pre>
          </div>
          <h4>Active</h4>
          <div class="component-preview">
            <div style="width: 280px; display:flex; gap:10px;">
            <article class="card-item" :class="{'active': isCardActive, 'open': isContextOpen}">
              <div class="video-wrapper" @click="onCardClick">
                <video height="100%" poster="@/assets/images/temp/video_sample.png" autoplay>
                  <!-- <source :src="videoSource" type="video/mp4" /> -->
                  <source type="video/mp4" />
                </video>
              </div>
              <div class="card-controls">
                <!-- ======== 2024.09.19 :class="{visible: isContextOpen}" 삭제 -->
                <div class="card-control flex-end">
                  <button class="button button_icon" tabindex="0" :class="{'active': isPinActive}" @click="onPinClick">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#pin_fill"></use>
                    </svg>
                    <span class="assistive-text">상단고정</span>
                  </button>
                  <button class="button button_icon" tabindex="0" :class="{'active': isContextOpen}" @click="onMoreClick">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#more"></use>
                    </svg>
                    <span class="assistive-text">더보기</span>
                  </button>
                  <!-- ======== 2024.09.19 Transition 태그 추가 -->
                  <Transition name="accordion">
                    <!-- ======== 2024.09.19 :class="['context', {open: isContextOpen}]" 삭제 -->
                    <div v-show="isContextOpen" ref="contextMenu" class="context">
                      <ul class="context-list">
                        <li><span role="button" tabindex="0">크게보기</span></li>
                        <li><span role="button" tabindex="0">학생 화면 공유</span></li>
                        <li><span role="button" tabindex="0">URL 실행</span></li>
                        <li><span role="button" tabindex="0">앱 공유</span></li>
                        <li><span role="button" tabindex="0">메시지 전송</span></li>
                        <li><span role="button" tabindex="0">파일 전송</span></li>
                        <li><span role="button" tabindex="0">화면 잠금/해제</span></li>
                        <li><span role="button" tabindex="0">상단 고정/해제</span></li>
                      </ul>
                    </div>
                  </Transition>
                </div>
                <div class="card-meta flex-start">
                  <div class="name" title="김나나">김나나</div>
                  <div class="badge">공유중</div>
                </div>
              </div>
            </article>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">  
            </code></pre>
          </div>
          <h3>States</h3>
          <div class="component-preview">
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(0, 280px)); gap:14px">
              <!-- State: OFF기기 -->
              <article class="card-item">
                <div class="no-media gray">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#off"></use>
                  </svg>
                  <p>OFF</p>
                </div>
                <div class="card-controls">
                  <div class="card-control flex-end">
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#pin_fill"></use>
                      </svg>
                      <span class="assistive-text">상단고정</span>
                    </button>
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#more"></use>
                      </svg>
                      <span class="assistive-text">더보기</span>
                    </button>
                  </div>
                  <div class="card-meta flex-start">
                    <div class="name" title="김나나">김나나</div>
                  </div>
                </div>
              </article>  

              <!-- State: 화면 연결 중 -->
              <article class="card-item">
                <div class="no-media">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#connecting"></use>
                  </svg>
                  <p>화면 연결 중</p>
                </div>
                <div class="card-controls">
                  <div class="card-control flex-end">
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#pin_fill"></use>
                      </svg>
                      <span class="assistive-text">상단고정</span>
                    </button>
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#more"></use>
                      </svg>
                      <span class="assistive-text">더보기</span>
                    </button>
                  </div>
                  <div class="card-meta flex-start">
                    <div class="name" title="김나나">김나나</div>
                  </div>
                </div>
              </article>  

              <!-- State: 미참여 -->
              <article class="card-item">
                <div class="no-media">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#not_attend"></use>
                  </svg>
                  <p>미 참여</p>
                </div>
                <div class="card-controls">
                  <div class="card-control flex-end">
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#pin_fill"></use>
                      </svg>
                      <span class="assistive-text">상단고정</span>
                    </button>
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#more"></use>
                      </svg>
                      <span class="assistive-text">더보기</span>
                    </button>
                  </div>
                  <div class="card-meta flex-start">
                    <div class="name" title="김나나">김나나</div>
                  </div>
                </div>
              </article>  

              <!-- State: 화면 잠금 -->
              <article class="card-item">
                <div class="no-media">
                  <svg class="icon"> 
                    <use xlink:href="@/assets/images/icons/symbols.svg#lock_blue"></use>
                  </svg>
                  <p>선생님이 화면을 잠궜습니다.</p>
                </div>
                <div class="card-controls">
                  <div class="card-control flex-end">
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#pin_fill"></use>
                      </svg>
                      <span class="assistive-text">상단고정</span>
                    </button>
                    <button class="button button_icon" tabindex="0">
                      <svg class="button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/images/icons/symbols.svg#more"></use>
                      </svg>
                      <span class="assistive-text">더보기</span>
                    </button>
                  </div>
                  <div class="card-meta flex-start">
                    <div class="name" title="김나나">김나나</div>
                  </div>
                </div>
              </article>  
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
        
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'datetime'" class="component-section">
        <section class="component-header">
          <h2>Datetime Picker</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>PC only</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <p class="docs-desc">
            <del>날짜 선택 Input vue 라이브러리?</del>
          </p>
          <div class="component-preview" style="background-color:#f5f5f5">
            <div class="form-element"><label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control">
                <input type="text" id="datepicker" placeholder="Select Date/Time" data-input class="input input_date">
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;label class=&quot;form-element__label&quot; for=&quot;text-input-id-0&quot;&gt;Input Label&lt;/label&gt;
  &lt;div class=&quot;form-element__control&quot;&gt;
    &lt;input id=&quot;text-input-id-0&quot; placeholder=&quot;Placeholder text…&quot; type=&quot;text&quot; class=&quot;input&quot; value=&quot;&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;              
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'z-index'" class="component-section">
        <section class="component-header">
          <h2>z-index</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>z-index</h3>
          <h4>40</h4>
          <ul class="docs-list">
            <li>spinner-container (내 화면 공유 스피너)</li>
          </ul>
          <h4>30</h4>
          <ul class="docs-list">
            <li>toast-container (토스트)</li>
          </ul>
          <h4>21</h4>
          <ul class="docs-list">
            <li>modal-dialog (팝업)</li>
          </ul>
          <h4>20</h4>
          <ul class="docs-list">
            <li>modal (팝업 배경)</li>
          </ul>
          <h4>10</h4>
          <ul class="docs-list">
            <li>calendar (Datepicker 캘린더)</li>
          </ul>
          <h4>4</h4>
          <ul class="docs-list">
            <li>global-header_container (헤더 컨테이너)</li>
          </ul>
          <h4>3</h4>
          <ul class="docs-list">
            <li>toolbar (하단 툴바)</li>
            <li>card-control (상단고정,더보기 버튼)</li>
          </ul>
          <h4>2</h4>
          <ul class="docs-list">
            <li>card-meta (학생이름, 공유중 뱃지)</li>
          </ul>
          <h4>1</h4>
          <ul class="docs-list">
            <li>context (컨텍스트 메뉴)</li>
          </ul>
        </section>
      </div>

      <!-- 추가 섹션들 -->
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';
// ## 퍼블리싱 작업용 의존성 설치
// - Prism.js는 퍼블리싱 작업에서 사용되며, package.json에 기록안됨
// - 다음 명령어로 설치: `npm install prismjs --no-save`
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-coy.css';

// 카드
const isCardActive = ref(false);
const isContextOpen = ref(false);
const isPinActive = ref(false);

// 모달
const showModal1 = ref(false);
const showModal2 = ref(false);
const showModal3 = ref(false);
const showModal4 = ref(false);
const showModal5 = ref(false);
const showModal6 = ref(false);
const showModal7 = ref(false);
const showModal8 = ref(false);

// 컨텍스트 메뉴
const isContext = ref(false);
const isContext2 = ref(false);
const isContext3 = ref(false);
const isContext4 = ref(false);
const isContext5 = ref(false);
const context = ref(false);
const context2 = ref(false);
const context3 = ref(false);
const contextMenu = ref(false);

// 토스트 팝업
const showToast = ref(false);
const showToast2 = ref(false);
const showToast3 = ref(false);

// 토스트
const triggerToast = () => {
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
}

const triggerToast2 = () => {
  showToast2.value = true;
  setTimeout(() => {
    showToast2.value = false;
  }, 3000);
}

const triggerToast3 = () => {
  showToast3.value = true;
  setTimeout(() => {
    showToast3.value = false;
  }, 3000);
}

// Alert
const isAlert = ref(true);

// 알럿 배너 닫기
const closeAlert = () => {
  isAlert.value = false;
};

// Tabs
const activeTab = ref(0)
const activeTabIcon = ref(0)

// 카드 아이템
// 카드선택
const onCardClick = (event) => {
  // 컨텍스트 메뉴가 열렸을 때, 메뉴를 닫아줌
  if (isContextOpen.value) {
    event.stopPropagation();
    isContextOpen.value = false;
    return;
  }
  // 컨텍스트 메뉴가 닫혔을 때, 카드의 선택 상태를 토글
  isCardActive.value = !isCardActive.value;
};

// 상단고정
const onPinClick = (event) => {
  event.stopPropagation();
  isPinActive.value = !isPinActive.value;
};

// 더보기 메뉴가 열렸을 때, 바깥 클릭을 감지하여 메뉴를 닫기 위한 전역 클릭 이벤트 추가
const handleClickOutside3 = (event) => {
  if (contextMenu.value && !contextMenu.value.contains(event.target)) {
    isContextOpen.value = false;
    console.log('컨텍스트 바깥 영역 클릭됨');
  }
};

// 더보기
const onMoreClick = (event) => {
  event.stopPropagation();
  isContextOpen.value = !isContextOpen.value;

  if (isContextOpen.value) {
    document.addEventListener('click', handleClickOutside3);
  } else {
    document.removeEventListener('click', handleClickOutside3);
  }
};

//내가 클릭한요소가 context 안에 포함되는지 확인하는 함수 정의
const handleClickOutside = (event) => {
  if (context.value && !context.value.contains(event.target)) {
    isContext.value = false;
  }
};
const handleClickOutside2 = (event) => {
  if (context2.value && !context2.value.contains(event.target)) {
    isContext2.value = false;
  }
};

const onContextClick = (event) => {
  event.stopPropagation();
  isContext.value = !isContext.value;

  // 더보기 메뉴가 열렸을 때만 전역 클릭 이벤트 추가, 닫힐 때 제거
  if (isContext.value) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
};

const onContextClick2 = (event) => {
  event.stopPropagation();
  isContext2.value = !isContext2.value;

  // 더보기 메뉴가 열렸을 때만 전역 클릭 이벤트 추가, 닫힐 때 제거
  if (isContext2.value) {
    document.addEventListener('click', handleClickOutside2);
  } else {
    document.removeEventListener('click', handleClickOutside2);
  }
};

const onContextClick3 = (event) => {
  event.stopPropagation();
  isContext3.value = !isContext3.value;
};

const onContextClick4 = (event) => {
  event.stopPropagation();
  isContext4.value = !isContext4.value;
};

const onContextClick5 = (event) => {
  event.stopPropagation();
  isContext5.value = !isContext5.value;
};

// 스위치
const isAllowed = ref(false)


// 사이드바 링크
const activePubComponent = ref('token');
const SidebarPubLinks = [
  { name: 'Design Tokens', component: 'token' },
  { name: 'Icons', component: 'icon' },
  { name: 'Buttons', component: 'button' },
  { name: 'Button Icons', component: 'buttonicons' },
  { name: 'Form Controls', component: 'form' },
  { name: 'Select', component: 'select' },
  { name: 'Checkbox', component: 'checkbox' },
  { name: 'Checkbox Button Group', component: 'checkbutton' },
  { name: 'Radio Button Group', component: 'radiobutton' },
  { name: 'Badges', component: 'badge' },
  { name: 'Toast', component: 'toast' },
  { name: 'Dialog', component: 'dialog' },
  { name: 'Alert', component: 'alert' },
  { name: 'Chat', component: 'chat' },
  { name: 'Global Header', component: 'globalheader' },
  { name: 'Page Header', component: 'pageheader' },
  { name: 'QR Code', component: 'code' },
  { name: 'Tabs', component: 'tabs' },
  { name: 'Context Menu', component: 'context' },
  { name: 'z-index', component: 'z-index' },
  { name: 'Cards', component: 'card', del: true },
  { name: 'Datetime Picker', component: 'datetime', del: true }
];

// 코드 블록 하이라이팅
const highlightPubCode = () => {
  const codeBlocks = document.querySelectorAll('code');
  codeBlocks.forEach((block) => {
    Prism.highlightElement(block);
  });
};


// 클립보드에 복사
const copyToClipboardPub = (event) => {
  const codeBlock = event.target.closest('.code-block').querySelector('code').innerText.trim();

  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = codeBlock;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  const button = event.target;
  const originalText = button.innerText;
  button.innerText = 'Copied!';
  setTimeout(() => {
    button.innerText = originalText;
  }, 1000);
};


// active 상태 해제 함수
// const removeActive = (event) => {
//   const button = event.currentTarget;
//   // active 클래스 제거
//   button.classList.remove('active');
// };

// 채팅 인풋 텍스트
const message = ref('Hello! I\'m a stretchy text area that can grow up to 10 lines. I\'m here to take your message, whether it\'s a profound thought or just "Hello!" repeated 50 times. Feel free to write, but don\'t get too carried away—I\'m only human... well, sort of. :D');
const textArea = ref(null)

const updateMessage = (e) => {
  message.value = e.target.value
  adjustTextAreaHeight()
}

const adjustTextAreaHeight = () => {
  const textarea = textArea.value
  textarea.style.height = 'auto'
  textarea.style.height = `${Math.min(textarea.scrollHeight, 10 * 24)}px` // 20px는 한 줄의 대략적인 높이
}

// 라이프사이클 훅
onMounted(() => {
  highlightPubCode();
  adjustTextAreaHeight()
});

onUpdated(() => {
  highlightPubCode();
  adjustTextAreaHeight()
});
</script>

<style lang="scss" scoped>
  .input {
  min-height: 48px; /* 2줄의 대략적인 높이 */
  max-height: 240px; /* 10줄의 대략적인 높이 */
  resize: none;
  overflow-y: auto;
  transition: height 0.1s ease-out;
}
.chat-list {
  padding-block: 20px;
  max-height: fit-content;
}
.chat-input {
  padding-top: 20px;
}
</style>