# google api-structured-output

Generated at: 2026-03-24T04:28:32.625Z

Source: https://ai.google.dev/gemini-api/docs/structured-output.md
FetchMode: markdown
TimeoutSeconds: 20
PreferMarkdown: true
Tags: api, format

              Structured outputs  |  Gemini API  |  Google AI for Developers     { "@context": "https://schema.org", "@type": "Article", "headline": "Structured outputs" } { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": \[{ "@type": "ListItem", "position": 1, "name": "Gemini API", "item": "https://ai.google.dev/gemini-api" },{ "@type": "ListItem", "position": 2, "name": "Structured outputs", "item": "https://ai.google.dev/gemini-api/docs/structured-output" }\] }  [Skip to main content](#main-content)

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

Try the new [Built-in tools and Function calling combination](/gemini-api/docs/tool-combination) feature, and [Grounding with Google Maps](/gemini-api/docs/maps-grounding), now supported for Gemini 3 models.

*   [Home](https://ai.google.dev/)
*   [Gemini API](https://ai.google.dev/gemini-api)
*   [Docs](https://ai.google.dev/gemini-api/docs)

Send feedback

# Structured outputs

You can configure Gemini models to generate responses that adhere to a provided JSON Schema. This ensures predictable, type-safe results and simplifies extracting structured data from unstructured text.

Using structured outputs is ideal for:

*   **Data extraction:** Pull specific information like names and dates from text.
*   **Structured classification:** Classify text into predefined categories.
*   **Agentic workflows:** Generate structured inputs for tools or APIs.

In addition to supporting JSON Schema in the REST API, the Google GenAI SDKs make it easy to define schemas using [Pydantic](https://docs.pydantic.dev/latest/) (Python) and [Zod](https://zod.dev/) (JavaScript).

Recipe Extractor Content Moderation Recursive Structures

This example demonstrates how to extract structured data from text using basic JSON Schema types like `object`, `array`, `string`, and `integer`.

### Python

```
from google import genai
from pydantic import BaseModel, Field
from typing import List, Optional

class Ingredient(BaseModel):
    name: str = Field(description="Name of the ingredient.")
    quantity: str = Field(description="Quantity of the ingredient, including units.")

class Recipe(BaseModel):
    recipe_name: str = Field(description="The name of the recipe.")
    prep_time_minutes: Optional[int] = Field(description="Optional time in minutes to prepare the recipe.")
    ingredients: List[Ingredient]
    instructions: List[str]

client = genai.Client()

prompt = """
Please extract the recipe from the following text.
The user wants to make delicious chocolate chip cookies.
They need 2 and 1/4 cups of all-purpose flour, 1 teaspoon of baking soda,
1 teaspoon of salt, 1 cup of unsalted butter (softened), 3/4 cup of granulated sugar,
3/4 cup of packed brown sugar, 1 teaspoon of vanilla extract, and 2 large eggs.
For the best part, they'll need 2 cups of semisweet chocolate chips.
First, preheat the oven to 375°F (190°C). Then, in a small bowl, whisk together the flour,
baking soda, and salt. In a large bowl, cream together the butter, granulated sugar, and brown sugar
until light and fluffy. Beat in the vanilla and eggs, one at a time. Gradually beat in the dry
ingredients until just combined. Finally, stir in the chocolate chips. Drop by rounded tablespoons
onto ungreased baking sheets and bake for 9 to 11 minutes.
"""

response = client.models.generate_content(
    model="gemini-3-flash-preview",
    contents=prompt,
    config={
        "response_mime_type": "application/json",
        "response_json_schema": Recipe.model_json_schema(),
    },
)

recipe = Recipe.model_validate_json(response.text)
print(recipe)
```

### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const ingredientSchema = z.object({
  name: z.string().describe("Name of the ingredient."),
  quantity: z.string().describe("Quantity of the ingredient, including units."),
});

const recipeSchema = z.object({
  recipe_name: z.string().describe("The name of the recipe."),
  prep_time_minutes: z.number().optional().describe("Optional time in minutes to prepare the recipe."),
  ingredients: z.array(ingredientSchema),
  instructions: z.array(z.string()),
});

const ai = new GoogleGenAI({});

const prompt = `
Please extract the recipe from the following text.
The user wants to make delicious chocolate chip cookies.
They need 2 and 1/4 cups of all-purpose flour, 1 teaspoon of baking soda,
1 teaspoon of salt, 1 cup of unsalted butter (softened), 3/4 cup of granulated sugar,
3/4 cup of packed brown sugar, 1 teaspoon of vanilla extract, and 2 large eggs.
For the best part, they'll need 2 cups of semisweet chocolate chips.
First, preheat the oven to 375°F (190°C). Then, in a small bowl, whisk together the flour,
baking soda, and salt. In a large bowl, cream together the butter, granulated sugar, and brown sugar
until light and fluffy. Beat in the vanilla and eggs, one at a time. Gradually beat in the dry
ingredients until just combined. Finally, stir in the chocolate chips. Drop by rounded tablespoons
onto ungreased baking sheets and bake for 9 to 11 minutes.
`;

const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: prompt,
  config: {
    responseMimeType: "application/json",
    responseJsonSchema: zodToJsonSchema(recipeSchema),
  },
});

const recipe = recipeSchema.parse(JSON.parse(response.text));
console.log(recipe);
```

### Go

```
package main

import (
    "context"
    "fmt"
    "log"

    "google.golang.org/genai"
)

func main() {
    ctx := context.Background()
    client, err := genai.NewClient(ctx, nil)
    if err != nil {
        log.Fatal(err)
    }

    prompt := `
  Please extract the recipe from the following text.
  The user wants to make delicious chocolate chip cookies.
  They need 2 and 1/4 cups of all-purpose flour, 1 teaspoon of baking soda,
  1 teaspoon of salt, 1 cup of unsalted butter (softened), 3/4 cup of granulated sugar,
  3/4 cup of packed brown sugar, 1 teaspoon of vanilla extract, and 2 large eggs.
  For the best part, they'll need 2 cups of semisweet chocolate chips.
  First, preheat the oven to 375°F (190°C). Then, in a small bowl, whisk together the flour,
  baking soda, and salt. In a large bowl, cream together the butter, granulated sugar, and brown sugar
  until light and fluffy. Beat in the vanilla and eggs, one at a time. Gradually beat in the dry
  ingredients until just combined. Finally, stir in the chocolate chips. Drop by rounded tablespoons
  onto ungreased baking sheets and bake for 9 to 11 minutes.
  `
    config := &genai.GenerateContentConfig{
        ResponseMIMEType: "application/json",
        ResponseJsonSchema: map[string]any{
            "type": "object",
            "properties": map[string]any{
                "recipe_name": map[string]any{
                    "type":        "string",
                    "description": "The name of the recipe.",
                },
                "prep_time_minutes": map[string]any{
                    "type":        "integer",
                    "description": "Optional time in minutes to prepare the recipe.",
                },
                "ingredients": map[string]any{
                    "type": "array",
                    "items": map[string]any{
                        "type": "object",
                        "properties": map[string]any{
                            "name": map[string]any{
                                "type":        "string",
                                "description": "Name of the ingredient.",
                            },
                            "quantity": map[string]any{
                                "type":        "string",
                                "description": "Quantity of the ingredient, including units.",
                            },
                        },
                        "required": []string{"name", "quantity"},
                    },
                },
                "instructions": map[string]any{
                    "type":  "array",
                    "items": map[string]any{"type": "string"},
                },
            },
            "required": []string{"recipe_name", "ingredients", "instructions"},
        },
    }

    result, err := client.Models.GenerateContent(
        ctx,
        "gemini-3-flash-preview",
        genai.Text(prompt),
        config,
    )
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(result.Text())
}
```

### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
    -H "x-goog-api-key: $GEMINI_API_KEY" \
    -H 'Content-Type: application/json' \
    -X POST \
    -d '{
      "contents": [{
        "parts":[
          { "text": "Please extract the recipe from the following text.\nThe user wants to make delicious chocolate chip cookies.\nThey need 2 and 1/4 cups of all-purpose flour, 1 teaspoon of baking soda,\n1 teaspoon of salt, 1 cup of unsalted butter (softened), 3/4 cup of granulated sugar,\n3/4 cup of packed brown sugar, 1 teaspoon of vanilla extract, and 2 large eggs.\nFor the best part, they will need 2 cups of semisweet chocolate chips.\nFirst, preheat the oven to 375°F (190°C). Then, in a small bowl, whisk together the flour,\nbaking soda, and salt. In a large bowl, cream together the butter, granulated sugar, and brown sugar\nuntil light and fluffy. Beat in the vanilla and eggs, one at a time. Gradually beat in the dry\ningredients until just combined. Finally, stir in the chocolate chips. Drop by rounded tablespoons\nonto ungreased baking sheets and bake for 9 to 11 minutes." }
        ]
      }],
      "generationConfig": {
        "responseMimeType": "application/json",
        "responseJsonSchema": {
          "type": "object",
          "properties": {
            "recipe_name": {
              "type": "string",
              "description": "The name of the recipe."
            },
            "prep_time_minutes": {
                "type": "integer",
                "description": "Optional time in minutes to prepare the recipe."
            },
            "ingredients": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": { "type": "string", "description": "Name of the ingredient."},
                  "quantity": { "type": "string", "description": "Quantity of the ingredient, including units."}
                },
                "required": ["name", "quantity"]
              }
            },
            "instructions": {
              "type": "array",
              "items": { "type": "string" }
            }
          },
          "required": ["recipe_name", "ingredients", "instructions"]
        }
      }
    }'
```

**Example Response:**

```
{
  "recipe_name": "Delicious Chocolate Chip Cookies",
  "ingredients": [
    {
      "name": "all-purpose flour",
      "quantity": "2 and 1/4 cups"
    },
    {
      "name": "baking soda",
      "quantity": "1 teaspoon"
    },
    {
      "name": "salt",
      "quantity": "1 teaspoon"
    },
    {
      "name": "unsalted butter (softened)",
      "quantity": "1 cup"
    },
    {
      "name": "granulated sugar",
      "quantity": "3/4 cup"
    },
    {
      "name": "packed brown sugar",
      "quantity": "3/4 cup"
    },
    {
      "name": "vanilla extract",
      "quantity": "1 teaspoon"
    },
    {
      "name": "large eggs",
      "quantity": "2"
    },
    {
      "name": "semisweet chocolate chips",
      "quantity": "2 cups"
    }
  ],
  "instructions": [
    "Preheat the oven to 375°F (190°C).",
    "In a small bowl, whisk together the flour, baking soda, and salt.",
    "In a large bowl, cream together the butter, granulated sugar, and brown sugar until light and fluffy.",
    "Beat in the vanilla and eggs, one at a time.",
    "Gradually beat in the dry ingredients until just combined.",
    "Stir in the chocolate chips.",
    "Drop by rounded tablespoons onto ungreased baking sheets and bake for 9 to 11 minutes."
  ]
}
```

## Streaming

You can stream structured outputs, which allows you to start processing the response as it's being generated, without having to wait for the entire output to be complete. This can improve the perceived performance of your application.

The streamed chunks will be valid partial JSON strings, which can be concatenated to form the final, complete JSON object.

### Python

```
from google import genai
from pydantic import BaseModel, Field
from typing import Literal

class Feedback(BaseModel):
    sentiment: Literal["positive", "neutral", "negative"]
    summary: str

client = genai.Client()
prompt = "The new UI is incredibly intuitive and visually appealing. Great job. Add a very long summary to test streaming!"

response_stream = client.models.generate_content_stream(
    model="gemini-3-flash-preview",
    contents=prompt,
    config={
        "response_mime_type": "application/json",
        "response_json_schema": Feedback.model_json_schema(),
    },
)

for chunk in response_stream:
    print(chunk.candidates[0].content.parts[0].text)
```

### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const ai = new GoogleGenAI({});
const prompt = "The new UI is incredibly intuitive and visually appealing. Great job! Add a very long summary to test streaming!";

const feedbackSchema = z.object({
  sentiment: z.enum(["positive", "neutral", "negative"]),
  summary: z.string(),
});

const stream = await ai.models.generateContentStream({
  model: "gemini-3-flash-preview",
  contents: prompt,
  config: {
    responseMimeType: "application/json",
    responseJsonSchema: zodToJsonSchema(feedbackSchema),
  },
});

for await (const chunk of stream) {
  console.log(chunk.candidates[0].content.parts[0].text)
}
```

## Structured outputs with tools

**Preview:** This feature is available only to Gemini 3 series models, `gemini-3.1-pro-preview` and `gemini-3-flash-preview`.

Gemini 3 lets you combine Structured Outputs with built-in tools, including [Grounding with Google Search](/gemini-api/docs/google-search), [URL Context](/gemini-api/docs/url-context), [Code Execution](/gemini-api/docs/code-execution), [File Search](/gemini-api/docs/file-search#structured-output), and [Function Calling](/gemini-api/docs/function-calling).

### Python

```
from google import genai
from pydantic import BaseModel, Field
from typing import List

class MatchResult(BaseModel):
    winner: str = Field(description="The name of the winner.")
    final_match_score: str = Field(description="The final match score.")
    scorers: List[str] = Field(description="The name of the scorer.")

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.1-pro-preview",
    contents="Search for all details for the latest Euro.",
    config={
        "tools": [
            {"google_search": {}},
            {"url_context": {}}
        ],
        "response_mime_type": "application/json",
        "response_json_schema": MatchResult.model_json_schema(),
    },  
)

result = MatchResult.model_validate_json(response.text)
print(result)
```

### JavaScript

```
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const ai = new GoogleGenAI({});

const matchSchema = z.object({
  winner: z.string().describe("The name of the winner."),
  final_match_score: z.string().describe("The final score."),
  scorers: z.array(z.string()).describe("The name of the scorer.")
});

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: "Search for all details for the latest Euro.",
    config: {
      tools: [
        { googleSearch: {} },
        { urlContext: {} }
      ],
      responseMimeType: "application/json",
      responseJsonSchema: zodToJsonSchema(matchSchema),
    },
  });

  const match = matchSchema.parse(JSON.parse(response.text));
  console.log(match);
}

run();
```

### REST

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
    "contents": [{
      "parts": [{"text": "Search for all details for the latest Euro."}]
    }],
    "tools": [
      {"googleSearch": {}},
      {"urlContext": {}}
    ],
    "generationConfig": {
        "responseMimeType": "application/json",
        "responseJsonSchema": {
            "type": "object",
            "properties": {
                "winner": {"type": "string", "description": "The name of the winner."},
                "final_match_score": {"type": "string", "description": "The final score."},
                "scorers": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "The name of the scorer."
                }
            },
            "required": ["winner", "final_match_score", "scorers"]
        }
    }
  }'
```

## JSON schema support

To generate a JSON object, set the `response_mime_type` in the generation configuration to `application/json` and provide a `response_json_schema`. The schema must be a valid [JSON Schema](https://json-schema.org/) that describes the desired output format.

The model will then generate a response that is a syntactically valid JSON string matching the provided schema. When using structured outputs, the model will produce outputs in the same order as the keys in the schema.

Gemini's structured output mode supports a subset of the [JSON Schema](https://json-schema.org) specification.

The following values of `type` are supported:

*   **`string`**: For text.
*   **`number`**: For floating-point numbers.
*   **`integer`**: For whole numbers.
*   **`boolean`**: For true/false values.
*   **`object`**: For structured data with key-value pairs.
*   **`array`**: For lists of items.
*   **`null`**: To allow a property to be null, include `"null"` in the type array (e.g., `{"type": ["string", "null"]}`).

These descriptive properties help guide the model:

*   **`title`**: A short description of a property.
*   **`description`**: A longer and more detailed description of a property.

### Type-specific properties

**For `object` values:**

*   **`properties`**: An object where each key is a property name and each value is a schema for that property.
*   **`required`**: An array of strings, listing which properties are mandatory.
*   **`additionalProperties`**: Controls whether properties not listed in `properties` are allowed. Can be a boolean or a schema.

**For `string` values:**

*   **`enum`**: Lists a specific set of possible strings for classification tasks.
*   **`format`**: Specifies a syntax for the string, such as `date-time`, `date`, `time`.

**For `number` and `integer` values:**

*   **`enum`**: Lists a specific set of possible numeric values.
*   **`minimum`**: The minimum inclusive value.
*   **`maximum`**: The maximum inclusive value.

**For `array` values:**

*   **`items`**: Defines the schema for all items in the array.
*   **`prefixItems`**: Defines a list of schemas for the first N items, allowing for tuple-like structures.
*   **`minItems`**: The minimum number of items in the array.
*   **`maxItems`**: The maximum number of items in the array.

## Model support

The following models support structured output:

Model

Structured Outputs

Gemini 3.1 Pro Preview

✔️

Gemini 3 Flash Preview

✔️

Gemini 2.5 Pro

✔️

Gemini 2.5 Flash

✔️

Gemini 2.5 Flash-Lite

✔️

Gemini 2.0 Flash

✔️\*

Gemini 2.0 Flash-Lite

✔️\*

_\* Note that Gemini 2.0 requires an explicit `propertyOrdering` list within the JSON input to define the preferred structure. You can find an example in this [cookbook](https://github.com/google-gemini/cookbook/blob/main/examples/Pdf_structured_outputs_on_invoices_and_forms.ipynb)._

## Structured outputs vs. function calling

Both structured outputs and function calling use JSON schemas, but they serve different purposes:

Feature

Primary Use Case

**Structured Outputs**

**Formatting the final response to the user.** Use this when you want the model's _answer_ to be in a specific format (e.g., extracting data from a document to save to a database).

**Function Calling**

**Taking action during the conversation.** Use this when the model needs to _ask you_ to perform a task (e.g., "get current weather") before it can provide a final answer.

## Best practices

*   **Clear descriptions:** Use the `description` field in your schema to provide clear instructions to the model about what each property represents. This is crucial for guiding the model's output.
*   **Strong typing:** Use specific types (`integer`, `string`, `enum`) whenever possible. If a parameter has a limited set of valid values, use an `enum`.
*   **Prompt engineering:** Clearly state in your prompt what you want the model to do. For example, "Extract the following information from the text..." or "Classify this feedback according to the provided schema...".
*   **Validation:** While structured output guarantees syntactically correct JSON, it does not guarantee the values are semantically correct. Always validate the final output in your application code before using it.
*   **Error handling:** Implement robust error handling in your application to gracefully manage cases where the model's output, while schema-compliant, may not meet your business logic requirements.

## Limitations

*   **Schema subset:** Not all features of the JSON Schema specification are supported. The model ignores unsupported properties.
*   **Schema complexity:** The API may reject very large or deeply nested schemas. If you encounter errors, try simplifying your schema by shortening property names, reducing nesting, or limiting the number of constraints.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-26 UTC.

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

\[\] {&#34;at&#34;: &#34;True&#34;, &#34;ga4&#34;: \[\], &#34;ga4p&#34;: \[\], &#34;gtm&#34;: \[{&#34;id&#34;: &#34;GTM-TC2MQKS8&#34;, &#34;purpose&#34;: 0}\], &#34;parameters&#34;: {&#34;internalUser&#34;: &#34;False&#34;, &#34;language&#34;: {&#34;machineTranslated&#34;: &#34;False&#34;, &#34;requested&#34;: &#34;en&#34;, &#34;served&#34;: &#34;en&#34;}, &#34;pageType&#34;: &#34;article&#34;, &#34;projectName&#34;: &#34;Gemini API&#34;, &#34;signedIn&#34;: &#34;False&#34;, &#34;tenant&#34;: &#34;googledevai&#34;, &#34;recommendations&#34;: {&#34;sourcePage&#34;: &#34;&#34;, &#34;sourceType&#34;: 0, &#34;sourceRank&#34;: 0, &#34;sourceIdenticalDescriptions&#34;: 0, &#34;sourceTitleWords&#34;: 0, &#34;sourceDescriptionWords&#34;: 0, &#34;experiment&#34;: &#34;&#34;}, &#34;experiment&#34;: {&#34;ids&#34;: &#34;&#34;}}} (function(d,e,v,s,i,t,E){d\['GoogleDevelopersObject'\]=i; t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)\[0\]; E.parentNode.insertBefore(t,E);})(window, document, 'script', 'https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd/googledevai/js/app\_loader.js', '\[59,"en",null,"/js/devsite\_app\_module.js","https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd","https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd/googledevai","https://googledevai-dot-devsite-v2-prod-3p.appspot.com",null,null,\["/\_pwa/googledevai/manifest.json","https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd/images/video-placeholder.svg","https://www.gstatic.com/devrel-devsite/prod/v8b8ef181e1dc913802015af34f7ea88ee446e0cb5daec5c977ac4c46a7a372bd/googledevai/images/favicon-new.png","/\_static/googledevai/images/gemini-api-logo.svg","https://fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Inter:400,500|Inter+Tight:300,500,600&display=swap"\],1,null,\[1,6,8,12,14,17,21,25,50,52,63,70,75,76,80,87,91,92,93,97,98,100,101,102,103,104,105,107,108,109,110,112,113,116,117,118,120,122,124,125,126,127,129,130,131,132,133,134,135,136,138,140,141,147,148,149,151,152,156,157,158,159,161,163,164,168,169,170,179,180,182,183,186,191,193,196\],"AIzaSyCNm9YxQumEXwGJgTDjxoxXK6m1F-9720Q","AIzaSyCc76DZePGtoyUjqKrLdsMGk\_ry7sljLbY","ai.google.dev","AIzaSyB9bqgQ2t11WJsOX8qNsCQ6U-w91mmqF-I","AIzaSyAdYnStPdzjcJJtQ0mvIaeaMKj7\_t6J\_Fg",null,null,null,\["Analytics\_\_enable\_devpro\_interaction\_logging","Cloud\_\_enable\_cloudx\_experiment\_ids","Concierge\_\_enable\_remove\_info\_panel\_tags","MiscFeatureFlags\_\_enable\_project\_variables","CloudShell\_\_cloud\_shell\_button","TpcFeatures\_\_proxy\_prod\_host","MiscFeatureFlags\_\_gdp\_dashboard\_reskin\_enabled","Profiles\_\_enable\_profile\_collections","MiscFeatureFlags\_\_enable\_explicit\_template\_dependencies","MiscFeatureFlags\_\_remove\_cross\_domain\_tracking\_params","Profiles\_\_enable\_completecodelab\_endpoint","Cloud\_\_enable\_cloud\_shell\_fte\_user\_flow","DevPro\_\_remove\_eu\_tax\_intake\_form","DevPro\_\_enable\_developer\_subscriptions","Profiles\_\_enable\_purchase\_prompts","DevPro\_\_enable\_code\_assist","BookNav\_\_enable\_tenant\_cache\_key","Profiles\_\_enable\_playlist\_community\_acl","Search\_\_enable\_page\_map","Profiles\_\_enable\_developer\_profile\_benefits\_ui\_redesign","MiscFeatureFlags\_\_emergency\_css","Concierge\_\_enable\_pushui","Profiles\_\_enable\_awarding\_url","Profiles\_\_enable\_user\_type","DevPro\_\_enable\_cloud\_innovators\_plus","Profiles\_\_enable\_auto\_apply\_credits","Concierge\_\_enable\_librarian\_rag\_retrieval\_for\_concierge","DevPro\_\_enable\_devpro\_offers","MiscFeatureFlags\_\_enable\_variable\_operator\_index\_yaml","Profiles\_\_enable\_developer\_profiles\_callout","Profiles\_\_enable\_release\_notes\_notifications","MiscFeatureFlags\_\_developers\_footer\_image","DevPro\_\_enable\_enterprise","Concierge\_\_enable\_actions\_menu","Profiles\_\_enable\_developer\_profile\_pages\_as\_content","Profiles\_\_enable\_dashboard\_curated\_recommendations","MiscFeatureFlags\_\_enable\_explain\_this\_code","Analytics\_\_enable\_clearcut\_logging","Profiles\_\_enable\_page\_saving","Cloud\_\_enable\_free\_trial\_server\_call","CloudShell\_\_cloud\_code\_overflow\_menu","Profiles\_\_require\_profile\_eligibility\_for\_signin","Cloud\_\_enable\_cloud\_shell","Search\_\_enable\_ai\_search\_summaries\_for\_all","Cloud\_\_enable\_legacy\_calculator\_redirect","DevPro\_\_enable\_google\_payments\_buyflow","MiscFeatureFlags\_\_fix\_lower\_breadcrumbs","Profiles\_\_enable\_stripe\_subscription\_management","Profiles\_\_enable\_complete\_playlist\_endpoint","DevPro\_\_enable\_nvidia\_credits\_card","MiscFeatureFlags\_\_enable\_firebase\_utm","MiscFeatureFlags\_\_enable\_framebox\_badge\_methods","Profiles\_\_enable\_callout\_notifications","TpcFeatures\_\_enable\_unmirrored\_page\_left\_nav","Profiles\_\_enable\_public\_developer\_profiles","DevPro\_\_enable\_firebase\_workspaces\_card","DevPro\_\_enable\_g1\_integration","MiscFeatureFlags\_\_enable\_variable\_operator","MiscFeatureFlags\_\_enable\_llms\_txt","Cloud\_\_enable\_cloud\_dlp\_service","Concierge\_\_enable\_devsite\_llm\_tools","MiscFeatureFlags\_\_enable\_view\_transitions","Cloud\_\_fast\_free\_trial","DevPro\_\_enable\_credits\_banner","SignIn\_\_enable\_l1\_signup\_flow","DevPro\_\_enable\_google\_one\_card","Cloud\_\_cache\_serialized\_dynamic\_content","EngEduTelemetry\_\_enable\_engedu\_telemetry","DevPro\_\_enable\_free\_benefits","OnSwitch\_\_enable","MiscFeatureFlags\_\_enable\_appearance\_cookies","Profiles\_\_enable\_join\_program\_group\_endpoint","Search\_\_enable\_dynamic\_content\_confidential\_banner","Experiments\_\_reqs\_query\_experiments","Search\_\_enable\_suggestions\_from\_borg","Search\_\_enable\_ai\_eligibility\_checks","Profiles\_\_enable\_recognition\_badges","DevPro\_\_enable\_embed\_profile\_creation","MiscFeatureFlags\_\_developers\_footer\_dark\_image","Profiles\_\_enable\_targeted\_hero","Cloud\_\_enable\_llm\_concierge\_chat","DevPro\_\_enable\_vertex\_credit\_card","DevPro\_\_enable\_payments\_init"\],null,null,"AIzaSyA58TaKli1DculwmAmbpzLVGuWc8eCQgQc","https://developerscontentserving-pa.googleapis.com","AIzaSyDWBU60w0P9hEkr29kkksYs8Z7gvZ8u\_wc","https://developerscontentsearch-pa.googleapis.com",2,4,null,"https://developerprofiles-pa.googleapis.com",\[59,"googledevai","Google AI for Developers","ai.google.dev",null,"googledevai-dot-devsite-v2-prod-3p.appspot.com",null,null,\[null,1,null,null,null,null,null,null,null,null,null,\[1\],null,null,null,null,null,null,\[1\],null,null,null,null,\[1\],\[1,1,null,1,1\],null,null,null,null,null,\[1\]\],null,\[73,null,null,null,null,null,"/images/lockup-new.svg","/images/touchicon-180-new.png",null,null,null,null,1,1,null,null,null,null,null,null,null,2,null,null,null,"/images/lockup-dark-theme-new.svg",\[\]\],\[\],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,\[44,2,4,6,7,12,14,15,17,18,20,21,22,23,28,29,32,37,39,40,43\],null,\[\[\],\[1,1\],null,1\],\[\[null,null,null,null,null,\["GTM-TC2MQKS8"\],null,null,null,null,null,\[\["GTM-TC2MQKS8",1\]\],1\]\],null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,\[\]\],null,null,1,1,"https://developerscontentinsights-pa.googleapis.com","AIzaSyC11xEGtFhkmSh\_iF6l\_itbxnFz2GrIBOg","AIzaSyAXJ10nRF73mmdSDINgkCNX5bbd2KPcWm8","https://developers.googleapis.com",\["https://aistudio.google.com"\],null,"AIzaSyCjP0KOnHfv8mwe38sfzZJMOnqE3HvrD4A",null,null,"https://developers.googleapis.com"\]')
