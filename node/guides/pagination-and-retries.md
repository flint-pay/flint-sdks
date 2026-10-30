<!-- Package 8.0.0-beta.1; API 2026-09-07 -->

# Pagination and retries

Cursor helpers follow `page_token` and `next_page_token` lazily and retain your filters. `listItems` yields resources; `listPages` yields page bodies with `data` and `next_page_token`. Read each page's `lastResponse` (PHP `lastResponse()`) for HTTP metadata. Pagination throws `PaginationLimitError` when the implicit 1,000-page cap leaves a continuation; an explicit `maxPages` stops quietly. Set `maxItems` to bound the number of items. `deadlineMs` bounds each page request. Cancellation bounds the whole iteration.

See [retries and idempotency](../RUNTIME.md#retries-and-idempotency) for retry behavior and request options.

`packages.listItems()` iterates packages; `packages.listPackageItems()` lists contents of a package. `riskLists.listItems()` iterates lists; `riskLists.listRiskListItems()` lists entries inside one risk list.

