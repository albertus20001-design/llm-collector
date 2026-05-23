---
title: 2026-05-22 OpenRouter 上架 Qwen3.7 Max
---

# 2026-05-22 OpenRouter 上架 Qwen3.7 Max

## 事实快照

- 平台：OpenRouter
- 模型 ID：`qwen/qwen3.7-max`
- OpenRouter created：2026-05-21 15:21 UTC
- 上下文：1M tokens
- 模态：text -> text
- 能力标注：tools、structured outputs、reasoning、include reasoning
- 价格：$2.50 / 1M input tokens；$7.50 / 1M output tokens；cache write $3.125 / 1M tokens
- 定位描述：agent-centric workloads，重点 coding、office、productivity

## 判断

这是 Qwen 新一代 Max 级模型进入聚合平台的早期信号，OpenRouter 能力标注明确偏向 agent 工具调用、结构化输出和 reasoning 可见性。后续需要继续核验 Qwen 官方源是否同步确认模型、接口能力和定价。

## 对 r9s 的影响

- 可列入 agent/coding 路由候选池，和 Gemini 3.5 Flash、Grok Build 0.1、Claude/Codex 系列比较。
- 重点观察长上下文成本、工具调用稳定性、reasoning 输出兼容性，以及官方/聚合平台价格是否存在漂移。
- 若官方源确认，应补充到模型价格与能力对照表。

## 来源

- OpenRouter Models / `qwen/qwen3.7-max` 页面，巡检时间：2026-05-22 05:49 Asia/Shanghai。
