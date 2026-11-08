[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRuleListResponse

A page of `RiskRule` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [RiskRule](../models/RiskRule.md#riskrule) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/RiskRuleListResponse.md#riskrulelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RiskRuleListResponse.data[]

A rule for assessing and handling payment risk.

Field definitions: [shared fields](RiskRuleResponse.md#riskruleresponsedata).

### RiskRuleListResponse.data[].created_by

Declared alternatives: [RiskRuleResponse.data.created_by](../models/RiskRuleResponse.md#riskruleresponsedatacreated_by).

### RiskRuleListResponse.data[].predicate

Declared alternatives: [RiskRuleResponse.data.predicate](../models/RiskRuleResponse.md#riskruleresponsedatapredicate).

### RiskRuleListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

