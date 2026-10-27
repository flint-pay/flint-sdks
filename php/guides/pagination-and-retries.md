<!-- Package 5.0.0; API 2026-09-07 -->

# Pagination and retries

Cursor helpers follow `page_token` and `next_page_token` lazily and retain your filters. `listItems` yields resources; `listPages` yields page bodies with `data` and `next_page_token`. Use `WithResponse` companions for HTTP metadata. Pagination stops after 1,000 pages by default; set `maxPages` or `maxItems` explicitly for larger traversals. `deadlineMs` bounds each page request. Cancellation bounds the whole iteration.

All operations make one attempt by default. This release preserves caller-supplied idempotency keys and does not generate keys automatically. Persist a key for each business action and reuse it only when retrying that action. Operations with a required key reject calls without one before dispatch. See [runtime options](../RUNTIME.md) for request options and the API reference for each operation's declared idempotency contract.

`packages.listItems()` iterates packages; `packages.listPackageItems()` lists contents of a package. `riskLists.listItems()` iterates lists; `riskLists.listRiskListItems()` lists entries inside one risk list.

