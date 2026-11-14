[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# apiRequestLogs

### apiRequestLogs.get

Returns one request with redacted headers, the redacted request and response bodies for write routes that capture them, and a curl reproduction. Detail older than 14 days has no headers or bodies.

`GET /v1/api-request-logs/{api_request_log_id}`

Signature: `get(string|Model $api_request_log_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string | Flint API request log ID. |

#### Response

Returned payload: [APIRequestLogDetail](../models/APIRequestLogDetail.md#apirequestlogdetail).

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
$result = $client->apiRequestLogs->get('rlog_01KEZF7C008XJCH6BHA224X46F', [], new RequestOptions());
```

[Complete runnable example](../examples/apiRequestLogs-get.php)

### apiRequestLogs.list

Returns request summaries, newest first. With developer.request_logs.read the list covers every caller in the credential's environment. With developer.request_logs.self.read it covers only the calling credential's requests. With partner_app_id naming a partner app your merchant owns, the list instead covers that app's partner app token requests in every merchant that installed it, in the credential's mode; the detail route still reads only the credential's environment. Headers, bodies and a reproduction are on the detail route. Default order: created_at descending, then api_request_log_id descending.

`GET /v1/api-request-logs`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `caller_type` | Optional | Array of string or string | Filter by one or more caller resource types. Requires developer.request_logs.read. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"api_key"`, `"user"`, `"partner_app_install"`, `"partner_app"`, `"checkout_session"`, `"customer_session"`, `"invoice"`, `"workload_identity"`. Values: `"api_key"`, `"user"`, `"partner_app_install"`, `"partner_app"`, `"checkout_session"`, `"customer_session"`, `"invoice"`, `"workload_identity"`. |
| `caller_id` | Optional | string | Filter by the exact public ID of the caller. Requires developer.request_logs.read. pattern: `^(cs\|cses\|inv\|key\|papp\|pinst\|usr\|wid)_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `customer_id` | Optional | string | Filter to requests made with this customer's sessions. Requires developer.request_logs.read. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `partner_app_id` | Optional | string | Filter to requests made with this partner app's tokens. For an app your merchant owns, the list covers the app's requests in every merchant that installed it, in the credential's mode; otherwise it covers the credential's environment. Requires developer.request_logs.read. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `request_id` | Optional | string | Filter by Flint request ID. To find your own X-Request-Id, use client_request_id. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `client_request_id` | Optional | string | Filter by the exact, case-sensitive X-Request-Id you sent. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Optional | string | Filter by a W3C traceparent trace ID, 32 lowercase hexadecimal characters, excluding all zeros. pattern: `^[0-9a-f]{32}$`. |
| `http_method` | Optional | Array of string or string | Filter by HTTP method. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"GET"`, `"HEAD"`, `"POST"`, `"PUT"`, `"PATCH"`, `"DELETE"`, `"OPTIONS"`, `"CONNECT"`, `"TRACE"`. Values: `"GET"`, `"HEAD"`, `"POST"`, `"PUT"`, `"PATCH"`, `"DELETE"`, `"OPTIONS"`, `"CONNECT"`, `"TRACE"`. |
| `query` | Optional | string | Case-insensitive substring search on path. The characters %, _, and backslash match literally. |
| `resource_type` | Optional | Array of string or string | Filter by resource type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [154 declared values](../models/APIRequestLogInput.md#apirequestloginput-resource_type-values). Values: [154 declared values](../models/APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `resource_id` | Optional | string | Filter by resource ID. pattern: `^((ad\|afri\|ba\|bag\|bal\|bam\|baoa\|basa\|bav\|bepevt\|betr\|bses\|btxn\|bue\|bun\|bunc\|bup\|busrc\|caddr\|cagr\|capsnap\|catid\|ccaevt\|ccop\|cdel\|cdom\|cecr\|ch\|clg\|clla\|cn\|cna\|cnart\|cnlease\|cnli\|cnmut\|cof\|cpoc\|cpop\|cs\|cscv\|cses\|cslimr\|csrt\|ctex\|ctg\|cus\|cver\|dca\|dcb\|dcbr\|dcgrp\|ddiag\|defc\|deff\|demo\|dev\|dleg\|dls\|dlsr\|dmet\|dmetr\|dms\|dmsevt\|dmslink\|dmsopen\|dopt\|dp\|dprof\|dprofr\|dqt\|drate\|drev\|dreval\|dsel\|dsle\|dti\|du\|dzone\|dzoner\|edat\|edel\|egrt\|fbc\|fbr\|fev\|file\|fnt\|frw\|fsu\|ful\|fw\|fwad\|fwcmd\|fwcon\|fwpm\|fwss\|gc\|gcg\|gcl\|gcn\|gcpra\|gcr\|gct\|gfd\|hat\|hce\|hcr\|hev\|hin\|hlk\|hnt\|hrp\|hsl\|hsr\|hth\|hwm\|iacr\|iaevt\|iksevt\|iksop\|img\|indel\|inevt\|inlf\|inv\|inv_cmd\|invadj\|invapp\|invart\|invc\|invcln\|invi\|invl\|invlease\|invli\|invm\|invp\|invpa\|invpay\|invpv\|invr\|invrea\|invrec\|invrecln\|invrln\|invse\|invt\|invtr\|invtrln\|iomevt\|ipt\|ivat\|key\|li\|loc\|mac\|mace\|mbbal\|mbclaim\|mbe\|mbin\|mbout\|mca\|mcdchg\|mcdsub\|mcfr\|mcr\|mcra\|mcrecon\|mcrve\|menv\|mer\|mfa\|mfce\|mg\|mod\|mpafc\|mpagr\|mpfa\|mpfc\|mre\|mrecv\|mrp\|ms\|msa\|msg\|msinv\|msinvl\|mso\|msu\|mtac\|ntc\|ntf\|oacr\|oact\|oalk\|och\|ocra\|oed\|olim\|olimas\|olra\|omp\|opahold\|opaleg\|opaobs\|opaop\|opard\|oparp\|opasd\|opasgen\|opasm\|opasp\|opat\|opaum\|opcred\|opra\|oprhold\|opsa\|opt\|optv\|ord\|ordisp\|org\|orp\|orr\|otpial\|otra\|ovst\|pac\|pacr\|pact\|paog\|papp\|pasg\|pat\|patok\|pava\|pavc\|pcae\|pcal\|pcb\|pcfg\|pchkr\|pcode\|pcri\|pcrr\|pcsch\|pdest\|peat\|pendact\|pfbal\|pfbt\|pfee\|pfhi\|pfhold\|pfi\|pfinc\|pfloss\|pflrec\|pfpo\|pfr\|pfrb\|pfrf\|pfs\|phold\|pi\|pia\|pilm\|pinst\|piop\|pipf\|pkg\|pki\|pl\|plan\|plcf\|ple\|plli\|plog\|pm\|pmcr\|pmdom\|po\|poe\|polog\|ppac\|ppd\|pppa\|pppr\|ppta\|pra\|pref\|prl\|prlp\|prod\|promo\|prrc\|prt\|prtn\|psact\|pses\|pset\|psetop\|psinc\|psplit\|psrev\|psu\|pvimg\|pvlaunch\|pvscn\|pvses\|pvshare\|pvw\|ra\|rbuy\|rcs\|rdl\|rdr\|rdrcfg\|rdrpres\|recon\|ref\|rep\|ret\|retact\|retadj\|retcmd\|retdsp\|retfx\|retinli\|retins\|retli\|retrc\|retrcli\|retrepli\|retres\|retresli\|retshli\|rev\|rl\|rli\|rlia\|rliar\|rlima\|rlog\|rpoe\|rpol\|rpolv\|rprev\|rra\|rrq\|rrsn\|rta\|rtba\|rule\|sdmig\|sdts\|sdtu\|set\|sfba\|sfpd\|shp\|sli\|smf\|soffer\|spc\|spcc\|spli\|spol\|sppd\|spr\|ssu\|sub\|tac\|tcae\|tcb\|tcbr\|tce\|tclk\|tcn\|test\|tip\|tkt\|trg\|txb\|usr\|var\|watt\|wdel\|whcl\|whep\|whev\|whout\|whrc\|wid\|ws)_[0-9A-HJKMNP-TV-Z]{26}\|fwa_[A-Z2-7]+\|fwc_[A-Z2-7]+\|fwin_[0-9a-f]+\|req_([0-9a-f]+\|caller_supplied_rate\|pickup_distance_loc_[0-9A-HJKMNP-TV-Z]{26}))$`. |
| `status_bucket` | Optional | Array of string or string | Filter by response status bucket. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"success"`, `"client_error"`, `"server_error"`. Values: `"success"`, `"client_error"`, `"server_error"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### Response

Returned payload: [APIRequestLogListResponse](../models/APIRequestLogListResponse.md#apirequestloglistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
$result = $client->apiRequestLogs->list([], new RequestOptions());
```

[Complete runnable example](../examples/apiRequestLogs-list.php)

