import{b as E,j as F,a as u,N as C}from"./index.91cb39e1.js";const B="_container_agm83_1",A={container:B},e=()=>(E(),F("div",{className:A.container,children:[u(C,{back:!0}),F("main",{children:[u("h3",{children:u("center",{children:"\u7528\u6237\u670D\u52A1\u534F\u8BAE"})}),F("ul",{children:[u("li",{children:F("section",{children:[u("h3",{children:"\u60A8\u4F20\u9012\u7ED9\u7684 React \u6811hydrateRoot\u9700\u8981\u4EA7\u751F\u4E0E\u670D\u52A1\u5668\u4E0A\u76F8\u540C\u7684\u8F93\u51FA\u3002"}),"\u8FD9\u5BF9\u7528\u6237\u4F53\u9A8C\u5F88\u91CD\u8981\u3002\u5728\u60A8\u7684 JavaScript \u4EE3\u7801\u52A0\u8F7D\u4E4B\u524D\uFF0C\u7528\u6237\u4F1A\u82B1\u4E00\u4E9B\u65F6\u95F4\u67E5\u770B\u670D\u52A1\u5668\u751F\u6210\u7684 HTML\u3002\u670D\u52A1\u5668\u6E32\u67D3\u901A\u8FC7\u663E\u793A\u5176\u8F93\u51FA\u7684 HTML \u5FEB\u7167\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\u52A0\u8F7D\u66F4\u5FEB\u7684\u9519\u89C9\u3002\u7A81\u7136\u663E\u793A\u4E0D\u540C\u7684\u5185\u5BB9\u6253\u7834\u4E86\u8FD9\u79CD\u5E7B\u60F3\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u5728\u6C34\u5408\u4F5C\u7528\u671F\u95F4\u670D\u52A1\u5668\u6E32\u67D3\u8F93\u51FA\u5FC5\u987B\u4E0E\u5BA2\u6237\u7AEF\u4E0A\u7684\u521D\u59CB\u6E32\u67D3\u8F93\u51FA\u76F8\u5339\u914D\u3002 \u5BFC\u81F4\u6C34\u5408\u4F5C\u7528\u9519\u8BEF\u7684\u6700\u5E38\u89C1\u539F\u56E0\u5305\u62EC\uFF1A \u6839\u8282\u70B9\u5185 React \u751F\u6210\u7684 HTML \u5468\u56F4\u7684\u989D\u5916\u7A7A\u683C\uFF08\u5982\u6362\u884C\u7B26\uFF09\u3002 typeof window !== 'undefined'\u5728\u60A8\u7684\u6E32\u67D3\u903B\u8F91\u4E2D\u4F7F\u7528\u68C0\u67E5\u3002 window.matchMedia\u5728\u60A8\u7684\u6E32\u67D3\u903B\u8F91\u4E2D\u4F7F\u7528\u4EC5\u9650\u6D4F\u89C8\u5668\u7684 API \u3002 \u5728\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4E0A\u5448\u73B0\u4E0D\u540C\u7684\u6570\u636E\u3002 React \u53EF\u4EE5\u4ECE\u4E00\u4E9B\u6C34\u5408\u4F5C\u7528\u9519\u8BEF\u4E2D\u6062\u590D\uFF0C\u4F46\u4F60\u5FC5\u987B\u50CF\u4FEE\u590D\u5176\u4ED6\u9519\u8BEF\u4E00\u6837\u4FEE\u590D\u5B83\u4EEC\u3002\u5728\u6700\u597D\u7684\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4EEC\u4F1A\u5BFC\u81F4\u5E94\u7528\u7A0B\u5E8F\u53D8\u6162\uFF1B\u5728\u6700\u574F\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F1A\u9644\u52A0\u5230\u9519\u8BEF\u7684\u5143\u7D20\u3002"]})}),u("li",{children:F("section",{children:[u("h3",{children:"root \u5B8C\u6210 hydrating \u540E\uFF0C\u4F60\u53EF\u4EE5\u8C03\u7528root.render\u66F4\u65B0 root React"}),"\u7EC4\u4EF6\u3002\u4E0E \u4E0D\u540CcreateRoot\uFF0C\u60A8\u901A\u5E38\u4E0D\u9700\u8981\u8FD9\u6837\u505A\uFF0C\u56E0\u4E3A\u521D\u59CB\u5185\u5BB9\u5DF2\u7ECF\u5448\u73B0\u4E3A HTML\u3002 \u5982\u679C\u4F60root.render\u5728 hydration \u4E4B\u540E\u7684\u67D0\u4E2A\u65F6\u523B\u8C03\u7528\uFF0C\u5E76\u4E14\u7EC4\u4EF6\u6811\u7ED3\u6784\u4E0E\u4E4B\u524D\u6E32\u67D3\u7684\u76F8\u5339\u914D\uFF0CReact \u5C06\u4FDD\u7559\u72B6\u6001\u3002\u8BF7\u6CE8\u610F\u60A8\u5982\u4F55\u8F93\u5165\u8F93\u5165\uFF0C\u8FD9\u610F\u5473\u7740render\u5728\u6B64\u793A\u4F8B\u4E2D\u6BCF\u79D2\u91CD\u590D\u8C03\u7528\u7684\u66F4\u65B0\u4E0D\u662F\u7834\u574F\u6027\u7684\uFF1A index.html index.js"]})}),u("li",{children:F("section",{children:[u("h3",{children:"\u53C2\u6570 domNode\uFF1A\u5728\u670D\u52A1\u5668\u4E0A\u5448\u73B0\u4E3A\u6839\u5143\u7D20\u7684DOM \u5143\u7D20\u3002"}),"reactNode\uFF1A\u7528\u4E8E\u5448\u73B0\u73B0\u6709 HTML \u7684\u201CReact \u8282\u70B9\u201D\u3002\u8FD9\u901A\u5E38\u662F\u4E00\u6BB5 JSX \uFF0C\u7C7B\u4F3C\u4E8E \u4F7F\u7528.ReactDOM ServerrenderToPipeableStream optional options\uFF1A\u4E00\u4E2A\u5BF9\u8C61\u5305\u542B\u6B64 React \u6839\u7684\u9009\u9879\u3002 onRecoverableError\uFF1A\u5F53 React \u81EA\u52A8\u4ECE\u9519\u8BEF\u4E2D\u6062\u590D\u65F6\u8C03\u7528\u7684\u53EF\u9009\u56DE\u8C03\u3002 identifierPrefix: \u53EF\u9009\u524D\u7F00 React \u7528\u4E8EuseId. \u5728\u540C\u4E00\u9875\u9762\u4E0A\u4F7F\u7528\u591A\u4E2A\u6839\u76EE\u5F55\u65F6\uFF0C\u6709\u52A9\u4E8E\u907F\u514D\u51B2\u7A81\u3002\u5FC5\u987B\u4E0E\u670D\u52A1\u5668\u4E0A\u4F7F\u7528\u7684\u524D\u7F00\u76F8\u540C\u3002 \u9000\u8D27 hydrateRoot\u8FD4\u56DE\u5177\u6709\u4E24\u4E2A\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF1Arender\u548Cunmount\u3002 \u6CE8\u610F\u4E8B\u9879 hydrateRoot()\u671F\u671B\u5448\u73B0\u7684\u5185\u5BB9\u4E0E\u670D\u52A1\u5668\u5448\u73B0\u7684\u5185\u5BB9\u76F8\u540C\u3002\u60A8\u5E94\u8BE5\u5C06\u4E0D\u5339\u914D\u89C6\u4E3A\u9519\u8BEF\u5E76\u4FEE\u590D\u5B83\u4EEC\u3002 \u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\uFF0CReact \u4F1A\u5728\u6C34\u5408\u4F5C\u7528\u671F\u95F4\u8B66\u544A\u4E0D\u5339\u914D\u3002\u4E0D\u4FDD\u8BC1\u5728\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u4E0B\u4F1A\u4FEE\u8865\u5C5E\u6027\u5DEE\u5F02\u3002\u51FA\u4E8E\u6027\u80FD\u539F\u56E0\uFF0C\u8FD9\u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u5728\u5927\u591A\u6570\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u5F88\u5C11\u89C1\uFF0C\u56E0\u6B64\u9A8C\u8BC1\u6240\u6709\u6807\u8BB0\u7684\u6210\u672C\u975E\u5E38\u9AD8\u3002 \u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u53EF\u80FD\u53EA\u6709\u4E00\u6B21hydrateRoot\u8C03\u7528\u3002\u5982\u679C\u60A8\u4F7F\u7528\u6846\u67B6\uFF0C\u5B83\u53EF\u80FD\u4F1A\u4E3A\u60A8\u6267\u884C\u6B64\u8C03\u7528\u3002 \u5982\u679C\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u662F\u5BA2\u6237\u7AEF\u5448\u73B0\u7684\uFF0C\u4F46\u5C1A\u672A\u5448\u73B0 HTML\uFF0ChydrateRoot()\u5219\u4E0D\u652F\u6301\u4F7F\u7528\u3002\u6539\u7528createRoot()\u3002"]})}),u("li",{children:F("section",{children:[u("h3",{children:"\u60A8\u4F20\u9012\u7ED9\u7684 React \u6811hydrateRoot\u9700\u8981\u4EA7\u751F\u4E0E\u670D\u52A1\u5668\u4E0A\u76F8\u540C\u7684\u8F93\u51FA\u3002"}),"\u8FD9\u5BF9\u7528\u6237\u4F53\u9A8C\u5F88\u91CD\u8981\u3002\u5728\u60A8\u7684 JavaScript \u4EE3\u7801\u52A0\u8F7D\u4E4B\u524D\uFF0C\u7528\u6237\u4F1A\u82B1\u4E00\u4E9B\u65F6\u95F4\u67E5\u770B\u670D\u52A1\u5668\u751F\u6210\u7684 HTML\u3002\u670D\u52A1\u5668\u6E32\u67D3\u901A\u8FC7\u663E\u793A\u5176\u8F93\u51FA\u7684 HTML \u5FEB\u7167\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\u52A0\u8F7D\u66F4\u5FEB\u7684\u9519\u89C9\u3002\u7A81\u7136\u663E\u793A\u4E0D\u540C\u7684\u5185\u5BB9\u6253\u7834\u4E86\u8FD9\u79CD\u5E7B\u60F3\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u5728\u6C34\u5408\u4F5C\u7528\u671F\u95F4\u670D\u52A1\u5668\u6E32\u67D3\u8F93\u51FA\u5FC5\u987B\u4E0E\u5BA2\u6237\u7AEF\u4E0A\u7684\u521D\u59CB\u6E32\u67D3\u8F93\u51FA\u76F8\u5339\u914D\u3002 \u5BFC\u81F4\u6C34\u5408\u4F5C\u7528\u9519\u8BEF\u7684\u6700\u5E38\u89C1\u539F\u56E0\u5305\u62EC\uFF1A \u6839\u8282\u70B9\u5185 React \u751F\u6210\u7684 HTML \u5468\u56F4\u7684\u989D\u5916\u7A7A\u683C\uFF08\u5982\u6362\u884C\u7B26\uFF09\u3002 typeof window !== 'undefined'\u5728\u60A8\u7684\u6E32\u67D3\u903B\u8F91\u4E2D\u4F7F\u7528\u68C0\u67E5\u3002 window.matchMedia\u5728\u60A8\u7684\u6E32\u67D3\u903B\u8F91\u4E2D\u4F7F\u7528\u4EC5\u9650\u6D4F\u89C8\u5668\u7684 API \u3002 \u5728\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4E0A\u5448\u73B0\u4E0D\u540C\u7684\u6570\u636E\u3002 React \u53EF\u4EE5\u4ECE\u4E00\u4E9B\u6C34\u5408\u4F5C\u7528\u9519\u8BEF\u4E2D\u6062\u590D\uFF0C\u4F46\u4F60\u5FC5\u987B\u50CF\u4FEE\u590D\u5176\u4ED6\u9519\u8BEF\u4E00\u6837\u4FEE\u590D\u5B83\u4EEC\u3002\u5728\u6700\u597D\u7684\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4EEC\u4F1A\u5BFC\u81F4\u5E94\u7528\u7A0B\u5E8F\u53D8\u6162\uFF1B\u5728\u6700\u574F\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F1A\u9644\u52A0\u5230\u9519\u8BEF\u7684\u5143\u7D20\u3002"]})}),u("li",{children:F("section",{children:[u("h3",{children:"root \u5B8C\u6210 hydrating \u540E\uFF0C\u4F60\u53EF\u4EE5\u8C03\u7528root.render\u66F4\u65B0 root React"}),"\u7EC4\u4EF6\u3002\u4E0E \u4E0D\u540CcreateRoot\uFF0C\u60A8\u901A\u5E38\u4E0D\u9700\u8981\u8FD9\u6837\u505A\uFF0C\u56E0\u4E3A\u521D\u59CB\u5185\u5BB9\u5DF2\u7ECF\u5448\u73B0\u4E3A HTML\u3002 \u5982\u679C\u4F60root.render\u5728 hydration \u4E4B\u540E\u7684\u67D0\u4E2A\u65F6\u523B\u8C03\u7528\uFF0C\u5E76\u4E14\u7EC4\u4EF6\u6811\u7ED3\u6784\u4E0E\u4E4B\u524D\u6E32\u67D3\u7684\u76F8\u5339\u914D\uFF0CReact \u5C06\u4FDD\u7559\u72B6\u6001\u3002\u8BF7\u6CE8\u610F\u60A8\u5982\u4F55\u8F93\u5165\u8F93\u5165\uFF0C\u8FD9\u610F\u5473\u7740render\u5728\u6B64\u793A\u4F8B\u4E2D\u6BCF\u79D2\u91CD\u590D\u8C03\u7528\u7684\u66F4\u65B0\u4E0D\u662F\u7834\u574F\u6027\u7684\uFF1A index.html index.js"]})}),u("li",{children:F("section",{children:[u("h3",{children:"\u53C2\u6570 domNode\uFF1A\u5728\u670D\u52A1\u5668\u4E0A\u5448\u73B0\u4E3A\u6839\u5143\u7D20\u7684DOM \u5143\u7D20\u3002"}),"reactNode\uFF1A\u7528\u4E8E\u5448\u73B0\u73B0\u6709 HTML \u7684\u201CReact \u8282\u70B9\u201D\u3002\u8FD9\u901A\u5E38\u662F\u4E00\u6BB5 JSX \uFF0C\u7C7B\u4F3C\u4E8E \u4F7F\u7528.ReactDOM ServerrenderToPipeableStream optional options\uFF1A\u4E00\u4E2A\u5BF9\u8C61\u5305\u542B\u6B64 React \u6839\u7684\u9009\u9879\u3002 onRecoverableError\uFF1A\u5F53 React \u81EA\u52A8\u4ECE\u9519\u8BEF\u4E2D\u6062\u590D\u65F6\u8C03\u7528\u7684\u53EF\u9009\u56DE\u8C03\u3002 identifierPrefix: \u53EF\u9009\u524D\u7F00 React \u7528\u4E8EuseId. \u5728\u540C\u4E00\u9875\u9762\u4E0A\u4F7F\u7528\u591A\u4E2A\u6839\u76EE\u5F55\u65F6\uFF0C\u6709\u52A9\u4E8E\u907F\u514D\u51B2\u7A81\u3002\u5FC5\u987B\u4E0E\u670D\u52A1\u5668\u4E0A\u4F7F\u7528\u7684\u524D\u7F00\u76F8\u540C\u3002 \u9000\u8D27 hydrateRoot\u8FD4\u56DE\u5177\u6709\u4E24\u4E2A\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF1Arender\u548Cunmount\u3002 \u6CE8\u610F\u4E8B\u9879 hydrateRoot()\u671F\u671B\u5448\u73B0\u7684\u5185\u5BB9\u4E0E\u670D\u52A1\u5668\u5448\u73B0\u7684\u5185\u5BB9\u76F8\u540C\u3002\u60A8\u5E94\u8BE5\u5C06\u4E0D\u5339\u914D\u89C6\u4E3A\u9519\u8BEF\u5E76\u4FEE\u590D\u5B83\u4EEC\u3002 \u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\uFF0CReact \u4F1A\u5728\u6C34\u5408\u4F5C\u7528\u671F\u95F4\u8B66\u544A\u4E0D\u5339\u914D\u3002\u4E0D\u4FDD\u8BC1\u5728\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u4E0B\u4F1A\u4FEE\u8865\u5C5E\u6027\u5DEE\u5F02\u3002\u51FA\u4E8E\u6027\u80FD\u539F\u56E0\uFF0C\u8FD9\u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u5728\u5927\u591A\u6570\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u5F88\u5C11\u89C1\uFF0C\u56E0\u6B64\u9A8C\u8BC1\u6240\u6709\u6807\u8BB0\u7684\u6210\u672C\u975E\u5E38\u9AD8\u3002 \u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u53EF\u80FD\u53EA\u6709\u4E00\u6B21hydrateRoot\u8C03\u7528\u3002\u5982\u679C\u60A8\u4F7F\u7528\u6846\u67B6\uFF0C\u5B83\u53EF\u80FD\u4F1A\u4E3A\u60A8\u6267\u884C\u6B64\u8C03\u7528\u3002 \u5982\u679C\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u662F\u5BA2\u6237\u7AEF\u5448\u73B0\u7684\uFF0C\u4F46\u5C1A\u672A\u5448\u73B0 HTML\uFF0ChydrateRoot()\u5219\u4E0D\u652F\u6301\u4F7F\u7528\u3002\u6539\u7528createRoot()\u3002"]})})]})]})]}));export{e as default};
