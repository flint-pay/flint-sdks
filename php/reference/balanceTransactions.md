[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# balanceTransactions

### balanceTransactions.get

Returns one balance transaction by ID, with optional related order expansion.

`GET /v1/balance-transactions/{balance_transaction_id}`

Signature: `get(string|Model $balance_transaction_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balance_transaction_id` | Required | string | Flint balance transaction ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Expansion requires money_movement.balance_transactions.read plus commerce.orders.read. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->balanceTransactions->get('btxn_01KEZF7C00H1Z82CMFWWXMZGHZ', [], new RequestOptions());
```

[Complete runnable example](../examples/balanceTransactions-get.php)

### balanceTransactions.list

Returns a paginated ledger of balance-affecting transactions, including availability timing and related public resources. Default order: occurred_at descending, then balance_transaction_id descending.

`GET /v1/balance-transactions`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `payout_id` | Optional | string | Lists the balance transactions this payout carried, newest first. Their `net_money` sums to the payout's `amount_money`. Works in any payout status once the payout's contents are prepared, usually minutes after it is created. Returns `503 SERVICE_UNAVAILABLE` with `Retry-After` while they are prepared, and `409 ACTION_NOT_ALLOWED` with `reason: not_itemized` for a payout that doesn't list its contents, such as a manual payout. pattern: `^po_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_id` | Optional | string | Exact-match filter on `order_id`. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Each expansion resolves with one batched lookup per page. Expansion requires money_movement.balance_transactions.read plus commerce.orders.read. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `type` | Optional | Array of string or string | Optional balance transaction type filter. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [27 declared values](../models/BalanceTransactionInput.md#balancetransactioninput-type-values). Values: [27 declared values](../models/BalanceTransactionInput.md#balancetransactioninput-type-values). |
| `related_resource_type` | Optional | Array of string or string | Filter by related_resource.resource_type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"payment_intent"`, `"refund"`, `"dispute"`, `"payout"`, `"payout_destination"`, `"merchant_billing_invoice"`, `"platform_fee_payout"`, `"payment_split"`. Values: `"payment_intent"`, `"refund"`, `"dispute"`, `"payout"`, `"payout_destination"`, `"merchant_billing_invoice"`, `"platform_fee_payout"`, `"payment_split"`. |
| `related_resource_id` | Optional | string | Filter by related_resource.resource_id. pattern: `^((ad\|afri\|ba\|bag\|bal\|bam\|baoa\|basa\|bav\|bepevt\|betr\|bses\|btxn\|bue\|bun\|bunc\|bup\|busrc\|caddr\|cagr\|capsnap\|catid\|ccaevt\|ccop\|cdel\|cdom\|cecr\|ch\|clg\|clla\|cn\|cna\|cnart\|cnlease\|cnli\|cnmut\|cof\|cpoc\|cpop\|cs\|cscv\|cses\|cslimr\|csrt\|ctex\|ctg\|cus\|cver\|dca\|dcb\|dcbr\|dcgrp\|ddiag\|defc\|deff\|demo\|dev\|dleg\|dls\|dlsr\|dmet\|dmetr\|dms\|dmsevt\|dmslink\|dmsopen\|dopt\|dp\|dprof\|dprofr\|dqt\|drate\|drev\|dreval\|dsel\|dsle\|dti\|du\|dzone\|dzoner\|edat\|edel\|egrt\|fbc\|fbr\|fev\|file\|fnt\|frw\|fsu\|ful\|fw\|fwad\|fwcmd\|fwcon\|fwpm\|fwss\|gc\|gcg\|gcl\|gcn\|gcpra\|gcr\|gct\|gfd\|hat\|hce\|hcr\|hev\|hin\|hlk\|hnt\|hrp\|hsl\|hsr\|hth\|hwm\|iacr\|iaevt\|iksevt\|iksop\|img\|indel\|inevt\|inlf\|inv\|inv_cmd\|invadj\|invapp\|invart\|invc\|invcln\|invi\|invl\|invlease\|invli\|invm\|invp\|invpa\|invpay\|invpv\|invr\|invrea\|invrec\|invrecln\|invrln\|invse\|invt\|invtr\|invtrln\|iomevt\|ipt\|ivat\|key\|li\|loc\|mac\|mace\|mbbal\|mbclaim\|mbe\|mbin\|mbout\|mca\|mcdchg\|mcdsub\|mcfr\|mcr\|mcra\|mcrecon\|mcrve\|menv\|mer\|mfa\|mfce\|mg\|mod\|mpafc\|mpagr\|mpfa\|mpfc\|mre\|mrecv\|mrp\|ms\|msa\|msg\|msinv\|msinvl\|mso\|msu\|mtac\|ntc\|ntf\|oacr\|oact\|oalk\|och\|ocra\|oed\|olim\|olimas\|olra\|omp\|opahold\|opaleg\|opaobs\|opaop\|opard\|oparp\|opasd\|opasgen\|opasm\|opasp\|opat\|opaum\|opcred\|opra\|oprhold\|opsa\|opt\|optv\|ord\|ordisp\|org\|orp\|orr\|otpial\|otra\|ovst\|pac\|pacr\|pact\|paog\|papp\|pasg\|pat\|patok\|pava\|pavc\|pcae\|pcal\|pcb\|pcfg\|pchkr\|pcode\|pcri\|pcrr\|pcsch\|pdest\|peat\|pendact\|pfbal\|pfbt\|pfee\|pfhi\|pfhold\|pfi\|pfinc\|pfloss\|pflrec\|pfpo\|pfr\|pfrb\|pfrf\|pfs\|phold\|pi\|pia\|pilm\|pinst\|piop\|pipf\|pkg\|pki\|pl\|plan\|plcf\|ple\|plli\|plog\|pm\|pmcr\|pmdom\|po\|poe\|polog\|ppac\|ppd\|pppa\|pppr\|ppta\|pra\|pref\|prl\|prlp\|prod\|promo\|prrc\|prt\|prtn\|psact\|pses\|pset\|psetop\|psinc\|psplit\|psrev\|psu\|pvimg\|pvlaunch\|pvscn\|pvses\|pvshare\|pvw\|ra\|rbuy\|rcs\|rdl\|rdr\|rdrcfg\|rdrpres\|recon\|ref\|rep\|ret\|retact\|retadj\|retcmd\|retdsp\|retfx\|retinli\|retins\|retli\|retrc\|retrcli\|retrepli\|retres\|retresli\|retshli\|rev\|rl\|rli\|rlia\|rliar\|rlima\|rlog\|rpoe\|rpol\|rpolv\|rprev\|rra\|rrq\|rrsn\|rta\|rtba\|rule\|sdmig\|sdts\|sdtu\|set\|sfba\|sfpd\|shp\|sli\|smf\|soffer\|spc\|spcc\|spli\|spol\|sppd\|spr\|ssu\|sub\|tac\|tcae\|tcb\|tcbr\|tce\|tclk\|tcn\|test\|tip\|tkt\|trg\|txb\|usr\|var\|watt\|wdel\|whcl\|whep\|whev\|whout\|whrc\|wid\|ws)_[0-9A-HJKMNP-TV-Z]{26}\|fwa_[A-Z2-7]+\|fwc_[A-Z2-7]+\|fwin_[0-9a-f]+\|req_([0-9a-f]+\|caller_supplied_rate\|pickup_distance_loc_[0-9A-HJKMNP-TV-Z]{26}))$`. |
| `status` | Optional | Array of string or string | Optional balance transaction status filter. Without it, the list returns transactions in every status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"available"`. Values: `"pending"`, `"available"`. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `available_after` | Optional | string | Inclusive lower bound on available_at. Format: `date-time`. |
| `available_before` | Optional | string | Exclusive upper bound on available_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [BalanceTransactionListResponse](../models/BalanceTransactionListResponse.md#balancetransactionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->balanceTransactions->list([], new RequestOptions());
```

[Complete runnable example](../examples/balanceTransactions-list.php)

