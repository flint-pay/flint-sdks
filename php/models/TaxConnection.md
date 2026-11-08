[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnection

The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `coverage` | Required | Array of [TaxCountryCoverage](../models/TaxCountryCoverage.md#taxcountrycoverage) | Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. `coverage[]`: [field definitions](../models/TaxConnectionResponse.md#taxconnectionresponsedatacoverage). |
| `created_at` | Optional | string | When the connection record was created. Format: `date-time`. |
| `disclosure` | Required | [TaxConnectionDisclosure](../models/TaxConnectionDisclosure.md#taxconnectiondisclosure) | Current statements the seller must agree to before connecting. Ordered seller disclosure rendered with the merchant's effective automatic tax fee. |
| `legal_address` | Required | [Address](../models/Address.md#address) or null | Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. |
| `legal_business_name` | Optional | string | Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. |
| `seller_attestation` | Required | [TaxConnectionSellerAttestation](../models/TaxConnectionSellerAttestation.md#taxconnectionsellerattestation) or null | The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. |
| `status` | Required | string | Whether automatic tax is connected and can calculate tax. Values: `"not_connected"`, `"provisioning"`, `"active"`, `"attention_required"`, `"disabled"`. |
| `status_reason` | Required | string or null | Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Values: [12 declared values](TaxConnectionInput.md#taxconnectioninput-status_reason-values). |
| `supported_actions` | Required | Array of string | Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. Items values: `"connect"`, `"disconnect"`. |
| `tax_connection_id` | Optional | string | Flint tax connection ID. Present once the first registration or connection creates a record. |
| `updated_at` | Optional | string | When the connection record's public state last changed. Format: `date-time`. |
| `version` | Optional | integer | Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. |

### TaxConnection.coverage[]

Field definitions: [TaxConnectionResponse.data.coverage[]](../models/TaxConnectionResponse.md#taxconnectionresponsedatacoverage).

