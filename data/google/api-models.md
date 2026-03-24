# google api-models

Generated at: 2026-03-24T04:28:32.625Z

Source: https://ai.google.dev/gemini-api/docs/models.md
FetchMode: markdown
TimeoutSeconds: 20
PreferMarkdown: true
Tags: api, models

              Models  |  Gemini API  |  Google AI for Developers     { "@context": "https://schema.org", "@type": "Article", "headline": "Models" } { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": \[{ "@type": "ListItem", "position": 1, "name": "Gemini API", "item": "https://ai.google.dev/gemini-api" },{ "@type": "ListItem", "position": 2, "name": "Models", "item": "https://ai.google.dev/gemini-api/docs/models" }\] }  [Skip to main content](#main-content)

 [![Gemini API](https://ai.google.dev/_static/googledevai/images/gemini-api-logo.svg)](/)

/

*   English
*   Deutsch
*   Español – América Latina
*   Français
*   Indonesia
*   Italiano
*   Polski
*   Português – Brasil
*   Shqip
*   Tiếng Việt
*   Türkçe
*   Русский
*   עברית
*   العربيّة
*   فارسی
*   हिंदी
*   বাংলা
*   ภาษาไทย
*   中文 – 简体
*   中文 – 繁體
*   日本語
*   한국어

[Get API key](https://aistudio.google.com/apikey) [Cookbook](https://github.com/google-gemini/cookbook) [Community](https://discuss.ai.google.dev/c/gemini-api/) Sign in

[Docs](https://ai.google.dev/gemini-api/docs) [API reference](https://ai.google.dev/api) [![Gemini API](https://ai.google.dev/_static/googledevai/images/gemini-api-logo.svg)](/)

*   [Gemini API](/gemini-api/docs)
    *   [Docs](/gemini-api/docs)
    *   [API reference](/api)
*   [Get API key](https://aistudio.google.com/apikey)
*   [Cookbook](https://github.com/google-gemini/cookbook)
*   [Community](https://discuss.ai.google.dev/c/gemini-api/)

*   Get started
    
*   [Overview](/gemini-api/docs)
*   [Quickstart](/gemini-api/docs/quickstart)
*   [API keys](/gemini-api/docs/api-key)
*   [Libraries](/gemini-api/docs/libraries)
*   [Pricing](/gemini-api/docs/pricing)
*   [Batch API](/gemini-api/docs/batch-api)
*   [Interactions API](/gemini-api/docs/interactions)
*   Models
    
*   [All models](/gemini-api/docs/models)
*   [Gemini 3](/gemini-api/docs/gemini-3)
*   [Nano Banana](/gemini-api/docs/image-generation)
*   [Veo](/gemini-api/docs/video)
*   [Lyria](/gemini-api/docs/music-generation)
*   [Imagen](/gemini-api/docs/imagen)
*   [Text-to-speech](/gemini-api/docs/speech-generation)
*   [Embeddings](/gemini-api/docs/embeddings)
*   [Robotics](/gemini-api/docs/robotics-overview)
*   Agents
    
*   [Overview](/gemini-api/docs/agents)
*   [Deep Research Agent](/gemini-api/docs/deep-research)
*   Core capabilities
    
*   [Text](/gemini-api/docs/text-generation)
*   Image
    
    *   [Image generation 🍌](/gemini-api/docs/image-generation)
    *   [Image understanding](/gemini-api/docs/image-understanding)
    
*   Video
    
    *   [Video generation](/gemini-api/docs/video)
    *   [Video understanding](/gemini-api/docs/video-understanding)
    
*   [Documents](/gemini-api/docs/document-processing)
*   Speech and audio
    
    *   [Speech generation](/gemini-api/docs/speech-generation)
    *   [Audio understanding](/gemini-api/docs/audio)
    
*   Thinking
    
    *   [Thinking](/gemini-api/docs/thinking)
    *   [Thought signatures](/gemini-api/docs/thought-signatures)
    
*   [Structured outputs](/gemini-api/docs/structured-output)
*   [Function calling](/gemini-api/docs/function-calling)
*   [Long context](/gemini-api/docs/long-context)
*   Tools
    
*   [Overview](/gemini-api/docs/tools)
*   [Google Search](/gemini-api/docs/google-search)
*   [Google Maps](/gemini-api/docs/maps-grounding)
*   [Code execution](/gemini-api/docs/code-execution)
*   [URL context](/gemini-api/docs/url-context)
*   [Computer Use](/gemini-api/docs/computer-use)
*   [File Search](/gemini-api/docs/file-search)
*   [Combine Tools and Function calling](/gemini-api/docs/tool-combination)
*   Live API
    
*   [Overview](/gemini-api/docs/live-api)
*   Get started
    
    *   [Get started using the GenAI SDK](/gemini-api/docs/live-api/get-started-sdk)
    *   [Get started using raw WebSockets](/gemini-api/docs/live-api/get-started-websocket)
    
*   [Capabilities](/gemini-api/docs/live-api/capabilities)
*   [Tool use](/gemini-api/docs/live-api/tools)
*   [Session management](/gemini-api/docs/live-api/session-management)
*   [Ephemeral tokens](/gemini-api/docs/live-api/ephemeral-tokens)
*   [Best practices](/gemini-api/docs/live-api/best-practices)
*   Guides
    
*   [Coding agent skills](/gemini-api/docs/coding-agents)
*   File input
    
    *   [Input methods](/gemini-api/docs/file-input-methods)
    *   [Files API](/gemini-api/docs/files)
    
*   [Context caching](/gemini-api/docs/caching)
*   [OpenAI compatibility](/gemini-api/docs/openai)
*   [Media resolution](/gemini-api/docs/media-resolution)
*   [Token counting](/gemini-api/docs/tokens)
*   [Prompt engineering](/gemini-api/docs/prompting-strategies)
*   Logs and datasets
    
    *   [Get started with logs](/gemini-api/docs/logs-datasets)
    *   [Data logging and sharing](/gemini-api/docs/logs-policy)
    
*   Safety
    
    *   [Safety settings](/gemini-api/docs/safety-settings)
    *   [Safety guidance](/gemini-api/docs/safety-guidance)
    
*   Frameworks
    
    *   [LangChain & LangGraph](/gemini-api/docs/langgraph-example)
    *   [CrewAI](/gemini-api/docs/crewai-example)
    *   [LlamaIndex](/gemini-api/docs/llama-index)
    *   [Vercel AI SDK](/gemini-api/docs/vercel-ai-sdk-example)
    *   [Temporal](/gemini-api/docs/temporal-example)
    
*   Resources
    
*   [Release notes](/gemini-api/docs/changelog)
*   [Deprecations](/gemini-api/docs/deprecations)
*   [Rate limits](/gemini-api/docs/rate-limits)
*   [Billing info](/gemini-api/docs/billing)
*   [Migrate to Gen AI SDK](/gemini-api/docs/migrate)
*   [API troubleshooting](/gemini-api/docs/troubleshooting)
*   [Partner and library integrations](/gemini-api/docs/partner-integration)
*   Google AI Studio
    
    *   [Quickstart](/gemini-api/docs/ai-studio-quickstart)
    *   [Vibe code in Build mode](/gemini-api/docs/aistudio-build-mode)
    *   [Developing Full-Stack Apps](/gemini-api/docs/aistudio-fullstack)
    *   [Try out LearnLM](/gemini-api/docs/learnlm)
    *   [Troubleshooting](/gemini-api/docs/troubleshoot-ai-studio)
    *   [Access for Workspace users](/gemini-api/docs/workspace)
    
*   Google Cloud Platform
    
    *   [VertexAI Gemini API](/gemini-api/docs/migrate-to-cloud)
    *   [OAuth authentication](/gemini-api/docs/oauth)
    
*   Policies
    
*   [Terms of service](/gemini-api/terms)
*   [Available regions](/gemini-api/docs/available-regions)
*   [Abuse monitoring](/gemini-api/docs/usage-policies)
*   [Feedback information](/gemini-api/docs/feedback-policies)

/\* Styles inlined from /site-assets/css/models.css \*/ :root { --gemini-api-table-font-color: #3c4043; --gemini-api-model-font: 'Google Sans Text', Roboto, sans-serif; --gemini-api-card-width: 17rem; --gemini-api-elevation-1dp: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2); --gemini-api-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2); } body\[theme="googledevai-theme"\] { --googledevai-button-gradient: var(--googledevai-button-gradient-light); } body\[theme="googledevai-theme"\].color-scheme--dark { --googledevai-button-gradient: var(--googledevai-button-gradient-dark); } .google-symbols { background: -webkit-linear-gradient(45deg, var(--googledevai-blue), var(--googledevai-purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; user-select: none; vertical-align: bottom; } /\* Cards \*/ @media only screen and (min-width: 625px) { .gemini-api-recommended { display: grid; grid-template-columns: repeat(3, 1fr); /\* Three equal-width columns \*/ grid-column-gap: 3rem; /\* Keep the gap between columns \*/ } } .gemini-api-recommended { width: 100%; /\* Take full width of parent \*/ margin: 0 auto; } .gemini-api-card { background: var(--devsite-background-1); border: 1px solid var(--googledevai-border-color); border-radius: 9px; box-shadow: var(--gemini-api-elevation-1dp); height: 23rem; margin: 1rem .5rem; padding: 1rem; transition: box-shadow 0.3s ease-in-out; width: var(--gemini-api-card-width); } .color-scheme--dark .gemini-api-card { background: #131314; border-color: #444746; } .gemini-api-card:hover { box-shadow: var(--gemini-api-elevation-3dp); } .gemini-api-card a:empty { display: block; position: relative; height: 23rem; width: var(--gemini-api-card-width); top: -22.8rem; left: -1rem; } .gemini-api-card a:empty:focus { border: 2px solid var(--devsite-primary-color); border-radius: 9px; } .gemini-api-card-title { font-family: "Google Sans", Roboto, sans-serif; font-size: 1.3rem; font-weight: 500; height: 1.5rem; margin-bottom: 2.5rem; line-height: 1.3rem; } .gemini-api-card-description { font-size: .9rem; height: 7.5rem; overflow: hidden; text-overflow: ellipsis; white-space: normal; } .gemini-api-card-bulletpoints { color: #757575; font-size: .8rem; height: 8.2rem; margin-left: 1rem; padding: 0; } .color-scheme--dark .gemini-api-card-bulletpoints { color: var(--devsite-primary-text-color); } .gemini-api-card-description, .gemini-api-card-bulletpoints { font-family: var(--gemini-api-model-font); } .gemini-api-card-bulletpoints li { line-height: 1rem; margin: .3rem 0; } /\* Tables \*/ .gemini-api-model-table, .gemini-api-model-table th { color: var(--gemini-api-table-font-color); font: .95rem var(--gemini-api-model-font); } .color-scheme--dark .gemini-api-model-table, .color-scheme--dark .gemini-api-model-table th { color: var(--devsite-primary-text-color); } .gemini-api-model-table th { font-weight: 500; } .gemini-api-model-table td:first-child { max-width: 0; } .gemini-api-model-table-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); grid-gap: 1rem .5rem; } .gemini-api-model-table section { display: inline-grid; } .gemini-api-model-table p { margin: 0 0 .5rem; } .gemini-api-model-table li { margin: 0; } .gemini-api-model-table ul { margin-top: .5rem; } .gemini-api-model-table .google-symbols { margin-right: .7rem; vertical-align: middle; } .gemini-api-supported, .gemini-api-not-supported, .gemini-api-experimental, .gemini-api-new { border-radius: 8px; display: inline-block; font-size: .9rem; font-weight: 500; line-height: 1rem; padding: .3rem 0.5em; } .gemini-api-supported { background: #e6f4ea; /\* GM3 Green 50 \*/ color: #177d37; /\* GM3 Green 700 \*/ } .gemini-api-not-supported { background: #fce8e6; /\* GM3 Red 50 \*/ color: #c5221f; /\* GM3 Red 700 \*/ } .gemini-api-experimental { background: #e8def8; color: #4a4458; } .gemini-api-new { background: #c2e7ff; /\* GM3 Blue 100 \*/ color: #001d35; /\* GM3 Blue 900 \*/ margin-left: 0.5rem; white-space: nowrap; } .color-scheme--dark .gemini-api-supported { background: #177d37; /\* GM3 Green 700 \*/ color: #e6f4ea; /\* GM3 Green 50 \*/ } .color-scheme--dark .gemini-api-not-supported { background: #c5221f; /\* GM3 Red 700 \*/ color: #fce8e6; /\* GM3 Red 50 \*/ } .color-scheme--dark .gemini-api-new { background: #004a77; /\* GM3 Blue 800 \*/ color: #c2e7ff; /\* GM3 Blue 100 \*/ } /\* Buttons \*/ .gemini-api-model-button { background: var(--googledevai-button-gradient); background-size: 300% 300%; border-radius: 20rem; color: #001d35; font-family: var(--gemini-api-model-font); font-size: .9rem; font-weight: 500; padding: .6rem 1rem; text-align: center; text-decoration: none; transition: filter .2s ease-in-out, box-shadow .2s ease-in-out; } .gemini-api-model-button:hover{ animation: gradient 5s ease infinite; filter: brightness(.98); box-shadow: var(--gemini-api-elevation-1dp); } .gemini-api-model-button:focus { filter: brightness(.95); outline: #00639b solid 3px; outline-offset: 2px; text-decoration: none; } .gemini-api-model-button::before { content: 'spark'; font-family: 'Google Symbols'; padding-right: 0.5rem; vertical-align: middle; } @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } .model-card { display: flex; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); transition: box-shadow 0.3s ease; } .color-scheme--dark .model-card { background-color: #3c4043; } .model-card:hover { box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); } .card-content { padding: 2.5rem; flex: 1; } .sub-heading-model { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 0.5rem 0; } .color-scheme--dark .sub-heading-model { color: var(--devsite-primary-text-color); } .card-content h2 { font-size: 2rem; font-weight: 500; margin: 0 0 1rem 0; } .description { font-size: 1rem; line-height: 1.6; color: #3c4043; margin: 0 0 1.5rem 0; } .color-scheme--dark .description { color: var(--devsite-primary-text-color); } .card-content a:not(.gemini-api-model-button) { color: #1a73e8; text-decoration: none; font-weight: 600; } .card-content a:hover { text-decoration: underline; } @media (max-width: 768px) { .model-card { flex-direction: column; } .card-content { padding: 1.5rem; } h1 { font-size: 2rem; } .card-content h2 { font-size: 1.5rem; } } /\* --- COMPACT MODEL GRID (2 Columns) --- \*/ /\* Grid container to create the two-column layout \*/ .gemini-model-grid-compact { display: grid; grid-template-columns: repeat(2, 1fr); /\* Two equal columns \*/ grid-column-gap: 2rem; grid-row-gap: 1.5rem; margin: 2rem 0; } /\* Individual row styling with stretched-link support \*/ .gemini-model-row { display: flex; align-items: center; gap: 1rem; position: relative; /\* Essential for containing the stretched link \*/ padding: 0.75rem; border-radius: 12px; transition: background-color 0.2s ease; } /\* Row hover effect to indicate clickability \*/ .gemini-model-row:hover { background-color: rgba(0, 0, 0, 0.04); } .color-scheme--dark .gemini-model-row:hover { background-color: rgba(255, 255, 255, 0.05); } /\* The small square icon card with gradient background \*/ .gemini-icon-card-small { flex-shrink: 0; width: 56px; height: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--googledevai-button-gradient-light); /\* \[cite: 77\] \*/ border-radius: 12px; box-shadow: var(--gemini-api-elevation-1dp); /\* \[cite: 120\] \*/ z-index: 2; /\* Keeps icon above the clickable link layer \*/ } .color-scheme--dark .gemini-icon-card-small { background: var(--googledevai-button-gradient-dark); /\* \[cite: 77\] \*/ } /\* Icon styling \*/ .gemini-icon-card-small .google-symbols { font-size: 20px; color: #001d35; /\* Dark text for contrast against gradient \*/ -webkit-text-fill-color: initial; /\* Override transparent fill \[cite: 123\] \*/ } /\* Text details container \*/ .gemini-model-details { display: flex; flex-direction: column; } .gemini-model-name { font-family: var(--gemini-api-model-font); /\* \[cite: 119\] \*/ font-weight: 600; font-size: 1.1rem; margin: 0 0 2px 0; } /\* Stretched Link Logic \*/ .gemini-model-name a { text-decoration: none; color: inherit; } .gemini-model-name a::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; /\* Expands click area to the entire .gemini-model-row \*/ } /\* Style for optional status text (e.g., experimental, preview) \*/ .gemini-model-name .model-status, .title-large h3 .model-status { color: #bdc1c6; /\* Very light gray \*/ font-style: italic; margin-left: 0.4rem; } /\* Dark mode adjustment to ensure it stays "light" relative to the background \*/ .color-scheme--dark .gemini-model-name .model-status { color: #70757a; } .gemini-model-desc { font-family: var(--gemini-api-model-font); /\* \[cite: 133\] \*/ font-size: 0.85rem; line-height: 1.3; color: #5f6368; margin: 0; } .color-scheme--dark .gemini-model-desc { color: var(--devsite-primary-text-color); /\* \[cite: 54\] \*/ } /\* --- CENTERED MODEL GRID (3 Cards) --- \*/ .gemini-centered-model-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; margin: 2rem 0; } .gemini-card-centered { background: var(--devsite-background-1); /\* \[cite: 53\] \*/ border: 1px solid var(--googledevai-border-color); /\* \[cite: 76\] \*/ border-radius: 8px; padding: 1.5rem; text-align: center; display: flex; flex-direction: column; align-items: center; text-decoration: none; transition: box-shadow 0.3s ease-in-out; /\* \[cite: 54\] \*/ flex: 0 1 calc(33.333% - 1rem); box-sizing: border-box; } .gemini-card-centered:hover { box-shadow: var(--gemini-api-elevation-3dp); /\* \[cite: 121\] \*/ } .gemini-card-centered:active, .gemini-card-centered:focus { text-decoration: none; } .gemini-card-centered .title-large { font-family: var(--devsite-primary-font-family); /\* \[cite: 75\] \*/ font-size: 1.5rem; font-weight: 500; color: var(--devsite-primary-text-color); margin: 0.5rem 0 1rem 0; display: flex; align-items: center; justify-content: center; gap: 0.5rem; } .gemini-card-centered .description-centered { font-family: var(--gemini-api-model-font); /\* \[cite: 133\] \*/ font-size: 0.95rem; line-height: 1.5; color: #3c4043; margin: 0; } .color-scheme--dark .gemini-card-centered .description-centered { color: var(--devsite-primary-text-color); } /\* --- RESPONSIVE BREAKPOINTS --- \*/ @media (max-width: 840px) { .gemini-card-centered { flex-basis: 100%; } } @media (max-width: 768px) { .gemini-model-grid-compact { grid-template-columns: 1fr; } } /\* Ensure H3 tags within the model row don't use default large heading styles \*/ .gemini-model-details h3.gemini-model-name { font-family: var(--gemini-api-model-font); font-weight: 600; font-size: 1.1rem; margin: 0 0 0 0; border: none; /\* Removes default devsite heading borders if any \*/ padding: 0; line-height: 1.3; } /\* Maintain clickability for the heading \*/ .gemini-model-details h3.gemini-model-name a { text-decoration: none; color: inherit; } /\* Normalizes the H3 within centered cards to match your existing design \*/ .gemini-card-centered .title-large h3 { font-family: inherit; font-size: inherit; font-weight: inherit; color: inherit; margin: 0; display: inline; /\* Keeps it on the same line as the icon \*/ border: none; padding: 0; } .status-subtext { font-family: var(--gemini-api-model-font); font-style: italic; color: #bdc1c6; /\* Light gray to match model-status \*/ text-align: center; margin: 0.25rem 0 0 0; /\* Minimal top margin to stay close to description \*/ } /\* Dark mode adjustment \*/ .color-scheme--dark .status-subtext { color: #70757a; } /\* Styles inlined from /site-assets/css/overview.css \*/ .button-primary { border-radius: 0.375rem; } .code-snippet { background-color: #f5f5f5; padding: 1rem; border-radius: 4px; overflow: auto; } .code-snippet code { font-family: monospace; } .quickstart { align-items: center; display: flex; flex-direction: row; padding-bottom: 1rem; } .quickstart p { margin: 0; } .quickstart-blurb { margin-left: 1rem; padding-left: 1rem; border-left: 2px solid var(--googledevai-border-color); } .gemini-api-card-overview { background: var(--devsite-background-1); border: 1px solid var(--googledevai-border-color); border-radius: 8px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); color: var(--devsite-primary-text-color); padding: 1rem; text-decoration: none; transition: box-shadow 0.3s ease-in-out; } .gemini-api-card-overview:active, .gemini-api-card-overview:focus { text-decoration: none; border-color: var(--devsite-primary-color); } .gemini-api-card-overview:hover { box-shadow: var(--gemini-api-elevation-3dp); } .gemini-api-card-title { align-items: center; display: flex; font-size: 1rem; height: auto; /\* Override the setting for now in models.css \*/ margin: 0 0 0.75rem 0; } .gemini-api-card-overview .google-symbols { font-size: 18px; } .gemini-api-card-overview .google-symbols.spark { font-size: 16px; } .gemini-api-card-overview .ais-logo { height: 16px; user-select: none; } .gemini-api-card-overview .ais-logo, .gemini-api-card-overview .google-symbols, .gemini-api-card-overview .nano-banana { margin-right: 0.5rem; vertical-align: middle; } .gemini-api-card-overview.with-links { display: flex; flex-direction: column; justify-content: space-between; } .gemini-api-card-description { margin: 0; height: auto; /\* Override the setting for now in models.css \*/ } .gemini-api-card-description-cta { color: var(--devsite-link-color); margin: 1rem 0 0 0; } .blue-bold-card { display: flex; flex-direction: row; gap: 0.5rem; } .icon-background { display: flex; border-radius: 8px; padding: 0.5rem; background-color: rgb(from var(--devsite-link-background) r g b / 40%); } .icon-background .google-symbols { margin: 0; } /\* Add this to prevent the button from getting squashed on any screen size \*/ .quickstart .button-primary { flex-shrink: 0; /\* Critical: Never let this element shrink \*/ white-space: nowrap; /\* Critical: Keep text on one line \*/ min-width: max-content; /\* Ensure it takes up as much space as the text needs \*/ } @media only screen and (min-width: 625px) { .gemini-api-recommended { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; } } @media only screen and (max-width: 625px) { /\* 1. Standard Card Resets for Mobile \*/ .gemini-api-card-overview { display: block; margin: 1rem 0; } .gemini-api-card-title { margin: 0 0 0.25rem 0; } .blue-bold-card { display: flex; } /\* 2. Quickstart Split Layout (Text -> Button -> Text) \*/ .quickstart { flex-direction: column; align-items: flex-start; gap: 1rem; } /\* "Unwrap" the text container so we can reorder paragraphs individually \*/ .quickstart-blurb { display: contents; } /\* Order 1: The first paragraph ("Follow our Quickstart...") \*/ .quickstart-blurb p:first-child { order: 1; } /\* Order 2: The Button \*/ .quickstart .button-primary { order: 2; } /\* Order 3: The second paragraph ("For most models...") \*/ .quickstart-blurb p:last-child { order: 3; } } /\* Resources Footer Section \*/ .gemini-api-header-with-cta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; } .gemini-api-header-with-cta h2 { margin: 0; } .gemini-api-cta-link { font-size: 0.9rem; font-weight: 500; text-decoration: none; color: #5f6368; } .gemini-api-cta-link:hover { text-decoration: underline; color: var(--devsite-link-color); } .color-scheme--dark .gemini-api-cta-link { color: #9aa0a6; } .gemini-api-resources-footer { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin: 4rem 0 2rem; padding-top: 0; } .gemini-api-resource-item { display: flex; flex-direction: column; align-items: center; text-align: center; text-decoration: none; color: inherit; padding: 0 1rem; transition: opacity 0.2s ease-in-out; } .gemini-api-resource-item { display: flex; flex-direction: column; align-items: center; text-align: center; text-decoration: none; color: inherit; padding: 1rem; border-radius: 8px; transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out; } .gemini-api-resource-item:hover { text-decoration: none; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1); background-color: var(--devsite-background-1); } .color-scheme--dark .gemini-api-resource-item:hover { background-color: #1f1f1f; box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3); } .gemini-api-resource-item .icon-container { margin-bottom: 1rem; color: var(--devsite-primary-text-color); display: flex; align-items: center; justify-content: center; height: 24px; } .gemini-api-resource-item .google-symbols { font-size: 24px; } .gemini-api-resource-item .ais-logo { height: 24px; width: auto; } .gemini-api-resource-item .resource-title { font-family: "Google Sans", Roboto, sans-serif; font-weight: 600; font-size: 1rem; margin-bottom: 0.5rem; color: var(--devsite-primary-text-color); } .gemini-api-resource-item .resource-description { font-size: 0.875rem; color: #5f6368; line-height: 1.5; margin: 0; } .color-scheme--dark .gemini-api-resource-item .resource-description { color: #9aa0a6; } @media (max-width: 900px) { .gemini-api-resources-footer { grid-template-columns: repeat(2, 1fr); gap: 2rem; } } @media (max-width: 600px) { .gemini-api-resources-footer { grid-template-columns: 1fr; gap: 2rem; } }

Try the new [Built-in tools and Function calling combination](/gemini-api/docs/tool-combination) feature, and [Grounding with Google Maps](/gemini-api/docs/maps-grounding), now supported for Gemini 3 models.

*   [Home](https://ai.google.dev/)
*   [Gemini API](https://ai.google.dev/gemini-api)
*   [Docs](https://ai.google.dev/gemini-api/docs)

Send feedback

# Models

We have updated our [Terms of Service](https://ai.google.dev/gemini-api/terms).

* * *

**Warning:** Gemini 3 Pro Preview is [deprecated](/gemini-api/docs/deprecations) and has been shut down March 9, 2026. Migrate to [Gemini 3.1 Pro Preview](/gemini-api/docs/models/gemini-3.1-pro-preview) to avoid service disruption.

## Gemini 3

[

auto\_awesome

### Gemini 3.1 Pro

Advanced intelligence, complex problem-solving skills, and powerful agentic and vibe coding capabilities.

New Preview

](/gemini-api/docs/models/gemini-3.1-pro-preview)[

spark

### Gemini 3 Flash

Frontier-class performance rivaling larger models at a fraction of the cost.

Preview

](/gemini-api/docs/models/gemini-3-flash-preview)[

bolt

### Gemini 3.1 Flash-Lite

Frontier-class performance rivaling larger models at a fraction of the cost.

New Preview

](/gemini-api/docs/models/gemini-3.1-flash-lite-preview)[

🍌🍌

### Nano Banana 2

Powerful, high-efficiency image generation and editing, optimized for speed and high-volume use cases.

Preview

](/gemini-api/docs/models/gemini-3.1-flash-image-preview)[

🍌

### Nano Banana Pro

State-of-the-art image generation and editing models for highly contextual native image creation.

Preview

](/gemini-api/docs/models/gemini-3-pro-image-preview)

* * *

## Gemini 2.5 Flash

bolt

### [Gemini 2.5 Flash](/gemini-api/docs/models/gemini-2.5-flash)

Our best price-performance model for low-latency, high-volume tasks that require reasoning.

image\_search

### [Nano Banana](/gemini-api/docs/models/gemini-2.5-flash-image)

State-of-the-art native image generation and editing designed for fast, creative workflows.

settings\_voice

### [Gemini 2.5 Flash Live Preview](/gemini-api/docs/models/gemini-2.5-flash-native-audio-preview-12-2025)

Optimized for real-time conversational agents with sub-second native audio streaming.

record\_voice\_over

### [Gemini 2.5 Flash TTS Preview](/gemini-api/docs/models/gemini-2.5-flash-preview-tts)

Controllable text-to-speech audio generation with fine control over style and pacing.

* * *

## Gemini 2.5 Flash-Lite

speed

### [Gemini 2.5 Flash-Lite](/gemini-api/docs/models/gemini-2.5-flash-lite)

The fastest and most budget-friendly multimodal model in the 2.5 family.

* * *

## Gemini 2.5 Pro

psychology

### [Gemini 2.5 Pro](/gemini-api/docs/models/gemini-2.5-pro)

Our most advanced model for complex tasks, featuring deep reasoning and coding capabilities.

record\_voice\_over

### [Gemini 2.5 Pro TTS Preview](/gemini-api/docs/models/gemini-2.5-pro-preview-tts)

High-fidelity speech synthesis optimized for quality in structured workflows like podcasts and audiobooks.

* * *

## Audio models

_This section contains all audio models, including ones that may already be listed in other sections_

settings\_voice

### [Gemini 2.5 Flash Live Preview](/gemini-api/docs/models/gemini-2.5-flash-native-audio-preview-12-2025)

Our flagship Live API model for low-latency, bidirectional voice and video agents with native audio reasoning.

bolt

### [Gemini 2.5 Flash TTS Preview](/gemini-api/docs/models/gemini-2.5-flash-preview-tts)

Fast and controllable text-to-speech for low-latency, cost-efficient applications and real-time assistants.

record\_voice\_over

### [Gemini 2.5 Pro TTS Preview](/gemini-api/docs/models/gemini-2.5-pro-preview-tts)

High-fidelity speech synthesis optimized for quality in structured workflows like podcasts and audiobooks.

music\_note

### [Lyria Experimental](/gemini-api/docs/models/lyria-realtime-exp)

High-fidelity music generation model providing granular creative control over instruments, BPM, and complex compositions.

* * *

## Generative media models

_This section contains all generative media models, including ones that may already be listed in other sections_

blur\_on

### [Nano Banana 2 Preview](/gemini-api/docs/models/gemini-3.1-flash-image-preview)

High-efficiency production-scale visual creation, combining the intelligence of the Gemini 3 series with lightning-fast generation speeds.

movie\_filter

### [Veo 3.1 Preview](/gemini-api/docs/models/veo-3.1-generate-preview)

State-of-the-art cinematic video generation with advanced creative controls and natively synchronized audio.

image\_edit

### [Nano Banana Pro Preview](/gemini-api/docs/models/gemini-3-pro-image-preview)

A professional design engine with a reasoning core for studio-quality 4K visuals, complex layouts, and precise text rendering.

music\_note

### [Lyria Experimental](/gemini-api/docs/models/lyria-realtime-exp)

High-fidelity music generation model providing granular creative control over instruments, BPM, and complex compositions.

image\_search

### [Nano Banana](/gemini-api/docs/models/gemini-2.5-flash-image)

State-of-the-art native image generation and editing designed for fast, creative workflows.

palette

### [Imagen 4](/gemini-api/docs/models/imagen)

Text-to-image model yet, featuring fast and ultra-fast generation and exceptional clarity up to 2K resolution.

* * *

## Tool and agent models

desktop\_windows

### [Computer Use Preview](/gemini-api/docs/models/gemini-2.5-computer-use-preview-10-2025)

A specialized model that can "see" a digital screen and perform UI actions like clicking, typing, and navigating to automate complex browser tasks.

travel\_explore

### [Gemini Deep Research Preview](/gemini-api/docs/models/deep-research-pro-preview-12-2025)

An agentic model that autonomously plans and executes multi-step research across hundreds of sources to produce cited, interactive reports.

* * *

## Specialized task models

hub

### [Gemini Embedding 2 Preview](/gemini-api/docs/models/gemini-embedding-2-preview)

Our first multimodal embedding model, mapping text, images, video, audio, and PDFs into a unified embedding space for advanced semantic search and RAG systems.

hub

### [Gemini Embedding](/gemini-api/docs/models/gemini-embedding-001)

High-dimensional vector representations for advanced semantic search, text classification, and RAG systems.

precision\_manufacturing

### [Gemini Robotics Preview](/gemini-api/docs/models/gemini-robotics-er-1.5-preview)

Advanced embodied reasoning model that understands physical spaces and plans multi-step tasks for robotic agents.

* * *

## Previous models

These models are [deprecated](/gemini-api/docs/deprecations) and will be shut down soon; migrate to newer models to prevent service interruptions.

history

### [Gemini 2.0 Flash Deprecated](/gemini-api/docs/models/gemini-2.0-flash)

Our second generation workhorse model, with next-gen features and improved capabilities, including superior speed, native tool use, and a 1M token context window.

restore

### [Gemini 2.0 Flash-Lite Deprecated](/gemini-api/docs/models/gemini-2.0-flash-lite)

Our fastest second generation model, optimized for cost efficiency and low latency.

restore

### [Gemini 3 Pro Preview Shut down](/gemini-api/docs/models/gemini-3-pro-preview)

Our state-of-the-art reasoning model, with advanced multimodal understanding.

* * *

## Model version name patterns

Gemini models are available in either _stable_, _preview_, _latest_, or _experimental_ versions.

**Note:** The following list refers to the model string naming convention as of September, 2025. Models released prior to that may have different naming conventions. Refer to the exact model string if you are using an older model.

### Stable

Points to a specific stable model. Stable models usually don't change. Most production apps should use a specific stable model.

For example: `gemini-2.5-flash`.

### Preview

Points to a preview model which may be used for production. Preview models will typically have billing enabled, might come with more restrictive rate limits and will be deprecated with at least 2 weeks notice.

For example: `gemini-2.5-flash-preview-09-2025`.

### Latest

Points to the latest release for a specific model variation. This can be a stable, preview or experimental release. This alias will get hot-swapped with every new release of a specific model variation. A **2-week notice** will be provided through email before the version behind latest is changed.

For example: `gemini-flash-latest`.

### Experimental

Points to an experimental model which will typically be not be suitable for production use and come with more restrictive rate limits. We release experimental models to gather feedback and get our latest updates into the hands of developers quickly.

Experimental models are not stable and availability of model endpoints is subject to change.

## Model deprecations

For information about model deprecations, visit the [Gemini deprecations](/gemini-api/docs/deprecations) page.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-23 UTC.

*   [Terms](//policies.google.com/terms)
*   [Privacy](//policies.google.com/privacy)
*   [Manage cookies](#)

*   English
*   Deutsch
*   Español – América Latina
*   Français
*   Indonesia
*   Italiano
*   Polski
*   Português – Brasil
*   Shqip
*   Tiếng Việt
*   Türkçe
*   Русский
*   עברית
*   العربيّة
*   فارسی
*   हिंदी
*   বাংলা
*   ภาษาไทย
*   中文 – 简体
*   中文 – 繁體
*   日本語
*   한국어

\[\] {&#34;at&#34;: &#34;True&#34;, &#34;ga4&#34;: \[\], &#34;ga4p&#34;: \[\], &#34;gtm&#34;: \[{&#34;id&#34;: &#34;GTM-TC2MQKS8&#34;, &#34;purpose&#34;: 0}\], &#34;parameters&#34;: {&#34;internalUser&#34;: &#34;False&#34;, &#34;language&#34;: {&#34;machineTranslated&#34;: &#34;False&#34;, &#34;requested&#34;: &#34;en&#34;, &#34;served&#34;: &#34;en&#34;}, &#34;pageType&#34;: &#34;article&#34;, &#34;projectName&#34;: &#34;Gemini API&#34;, &#34;signedIn&#34;: &#34;False&#34;, &#34;tenant&#34;: &#34;googledevai&#34;, &#34;recommendations&#34;: {&#34;sourcePage&#34;: &#34;&#34;, &#34;sourceType&#34;: 0, &#34;sourceRank&#34;: 0, &#34;sourceIdenticalDescriptions&#34;: 0, &#34;sourceTitleWords&#34;: 0, &#34;sourceDescriptionWords&#34;: 0, &#34;experiment&#34;: &#34;&#34;}, &#34;experiment&#34;: {&#34;ids&#34;: &#34;&#34;}}} (function(d,e,v,s,i,t,E){d\['GoogleDevelopersObject'\]=i; t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)\[0\]; E.parentNode.insertBefore(t,E);})(window, document, 'script', 'https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd/googledevai/js/app\_loader.js', '\[59,"en",null,"/js/devsite\_app\_module.js","https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd","https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd/googledevai","https://googledevai-dot-devsite-v2-prod-3p.appspot.com",1,null,\["/\_pwa/googledevai/manifest.json","https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd/images/video-placeholder.svg","https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd/googledevai/images/favicon-new.png","/\_static/googledevai/images/gemini-api-logo.svg","https://fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Inter:400,500|Inter+Tight:300,500,600&display=swap"\],1,null,\[1,6,8,12,14,17,21,25,50,52,63,70,75,76,80,87,91,92,93,97,98,100,101,102,103,104,105,107,108,109,110,112,113,117,118,120,122,124,125,126,127,129,130,131,132,133,134,135,136,138,140,141,147,148,149,151,152,156,157,158,159,161,163,164,168,169,170,179,180,182,183,186,191,193,196\],"AIzaSyCNm9YxQumEXwGJgTDjxoxXK6m1F-9720Q","AIzaSyCc76DZePGtoyUjqKrLdsMGk\_ry7sljLbY","ai.google.dev","AIzaSyB9bqgQ2t11WJsOX8qNsCQ6U-w91mmqF-I","AIzaSyAdYnStPdzjcJJtQ0mvIaeaMKj7\_t6J\_Fg",null,null,null,\["DevPro\_\_enable\_g1\_integration","Analytics\_\_enable\_devpro\_interaction\_logging","Concierge\_\_enable\_pushui","Profiles\_\_enable\_page\_saving","EngEduTelemetry\_\_enable\_engedu\_telemetry","Profiles\_\_enable\_targeted\_hero","MiscFeatureFlags\_\_enable\_appearance\_cookies","MiscFeatureFlags\_\_enable\_llms\_txt","Profiles\_\_enable\_recognition\_badges","Cloud\_\_enable\_cloudx\_experiment\_ids","MiscFeatureFlags\_\_developers\_footer\_image","DevPro\_\_enable\_devpro\_offers","Cloud\_\_cache\_serialized\_dynamic\_content","Profiles\_\_enable\_release\_notes\_notifications","Search\_\_enable\_suggestions\_from\_borg","MiscFeatureFlags\_\_enable\_variable\_operator","TpcFeatures\_\_proxy\_prod\_host","Profiles\_\_enable\_profile\_collections","Profiles\_\_enable\_user\_type","DevPro\_\_remove\_eu\_tax\_intake\_form","MiscFeatureFlags\_\_enable\_project\_variables","Experiments\_\_reqs\_query\_experiments","MiscFeatureFlags\_\_enable\_view\_transitions","Profiles\_\_enable\_callout\_notifications","Search\_\_enable\_dynamic\_content\_confidential\_banner","Concierge\_\_enable\_remove\_info\_panel\_tags","DevPro\_\_enable\_credits\_banner","Profiles\_\_enable\_join\_program\_group\_endpoint","MiscFeatureFlags\_\_fix\_lower\_breadcrumbs","DevPro\_\_enable\_enterprise","BookNav\_\_enable\_tenant\_cache\_key","Analytics\_\_enable\_clearcut\_logging","Profiles\_\_enable\_dashboard\_curated\_recommendations","Concierge\_\_enable\_devsite\_llm\_tools","DevPro\_\_enable\_developer\_subscriptions","Profiles\_\_enable\_developer\_profile\_benefits\_ui\_redesign","MiscFeatureFlags\_\_enable\_framebox\_badge\_methods","Cloud\_\_enable\_free\_trial\_server\_call","Cloud\_\_fast\_free\_trial","Search\_\_enable\_page\_map","Profiles\_\_enable\_purchase\_prompts","DevPro\_\_enable\_code\_assist","Profiles\_\_enable\_stripe\_subscription\_management","SignIn\_\_enable\_l1\_signup\_flow","Cloud\_\_enable\_cloud\_shell","Profiles\_\_enable\_completecodelab\_endpoint","Profiles\_\_enable\_public\_developer\_profiles","DevPro\_\_enable\_google\_one\_card","OnSwitch\_\_enable","DevPro\_\_enable\_free\_benefits","Cloud\_\_enable\_cloud\_shell\_fte\_user\_flow","Profiles\_\_enable\_awarding\_url","MiscFeatureFlags\_\_enable\_variable\_operator\_index\_yaml","MiscFeatureFlags\_\_developers\_footer\_dark\_image","Concierge\_\_enable\_actions\_menu","CloudShell\_\_cloud\_code\_overflow\_menu","Cloud\_\_enable\_cloud\_dlp\_service","MiscFeatureFlags\_\_gdp\_dashboard\_reskin\_enabled","Profiles\_\_require\_profile\_eligibility\_for\_signin","DevPro\_\_enable\_firebase\_workspaces\_card","DevPro\_\_enable\_vertex\_credit\_card","Cloud\_\_enable\_llm\_concierge\_chat","Profiles\_\_enable\_playlist\_community\_acl","CloudShell\_\_cloud\_shell\_button","Profiles\_\_enable\_complete\_playlist\_endpoint","DevPro\_\_enable\_embed\_profile\_creation","MiscFeatureFlags\_\_remove\_cross\_domain\_tracking\_params","Search\_\_enable\_ai\_eligibility\_checks","DevPro\_\_enable\_cloud\_innovators\_plus","DevPro\_\_enable\_google\_payments\_buyflow","Search\_\_enable\_ai\_search\_summaries\_for\_all","TpcFeatures\_\_enable\_unmirrored\_page\_left\_nav","Profiles\_\_enable\_auto\_apply\_credits","MiscFeatureFlags\_\_enable\_firebase\_utm","DevPro\_\_enable\_nvidia\_credits\_card","MiscFeatureFlags\_\_enable\_explain\_this\_code","Cloud\_\_enable\_legacy\_calculator\_redirect","Profiles\_\_enable\_developer\_profiles\_callout","MiscFeatureFlags\_\_emergency\_css","MiscFeatureFlags\_\_enable\_explicit\_template\_dependencies","Profiles\_\_enable\_developer\_profile\_pages\_as\_content"\],null,null,"AIzaSyA58TaKli1DculwmAmbpzLVGuWc8eCQgQc","https://developerscontentserving-pa.googleapis.com","AIzaSyDWBU60w0P9hEkr29kkksYs8Z7gvZ8u\_wc","https://developerscontentsearch-pa.googleapis.com",2,4,null,"https://developerprofiles-pa.googleapis.com",\[59,"googledevai","Google AI for Developers","ai.google.dev",null,"googledevai-dot-devsite-v2-prod-3p.appspot.com",null,null,\[null,1,null,null,null,null,null,null,null,null,null,\[1\],null,null,null,null,null,null,\[1\],null,null,null,null,\[1\],\[1,1,null,1,1\],null,null,null,null,null,\[1\]\],null,\[73,null,null,null,null,null,"/images/lockup-new.svg","/images/touchicon-180-new.png",null,null,null,null,1,1,null,null,null,null,null,null,null,2,null,null,null,"/images/lockup-dark-theme-new.svg",\[\]\],\[\],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,\[44,2,4,6,7,12,14,15,17,18,20,21,22,23,28,29,32,37,39,40,43\],null,\[\[\],\[1,1\],null,1\],\[\[null,null,null,null,null,\["GTM-TC2MQKS8"\],null,null,null,null,null,\[\["GTM-TC2MQKS8",1\]\],1\]\],null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,\[\]\],null,null,1,null,"https://developerscontentinsights-pa.googleapis.com","AIzaSyC11xEGtFhkmSh\_iF6l\_itbxnFz2GrIBOg","AIzaSyAXJ10nRF73mmdSDINgkCNX5bbd2KPcWm8","https://developers.googleapis.com",\["https://aistudio.google.com"\],null,"AIzaSyCjP0KOnHfv8mwe38sfzZJMOnqE3HvrD4A",null,null,"https://developers.googleapis.com"\]')
