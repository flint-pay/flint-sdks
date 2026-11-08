[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionResponse

A response containing `TaxConnection` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TaxConnection](../models/TaxConnection.md#taxconnection) | Resource, collection, or operation result returned by this request. The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook. `data`: [field definitions](../models/TaxConnectionResponse.md#taxconnectionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TaxConnectionResponse.data

Resource, collection, or operation result returned by this request. The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `coverage` | Required | Array of [TaxCountryCoverage](../models/TaxCountryCoverage.md#taxcountrycoverage) | Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. `coverage[]`: [field definitions](../models/TaxConnectionResponse.md#taxconnectionresponsedatacoverage). |
| `created_at` | Optional | string | When the connection record was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `disclosure` | Required | [TaxConnectionDisclosure](../models/TaxConnectionDisclosure.md#taxconnectiondisclosure) | Current statements the seller must agree to before connecting. Ordered seller disclosure rendered with the merchant's effective automatic tax fee. |
| `legal_address` | Required | [Address](../models/Address.md#address) or null | Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. `legal_address`: [declared alternatives](../models/TaxConnectionResponse.md#taxconnectionresponsedatalegal_address). |
| `legal_business_name` | Optional | string | Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. |
| `seller_attestation` | Required | [TaxConnectionSellerAttestation](../models/TaxConnectionSellerAttestation.md#taxconnectionsellerattestation) or null | The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. `seller_attestation`: [declared alternatives](../models/TaxConnectionResponse.md#taxconnectionresponsedataseller_attestation). |
| `status` | Required | string | Whether automatic tax is connected and can calculate tax. Values: `"not_connected"`, `"provisioning"`, `"active"`, `"attention_required"`, `"disabled"`. |
| `status_reason` | Required | string or null | Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Values: [12 declared values](TaxConnectionInput.md#taxconnectioninput-status_reason-values). |
| `supported_actions` | Required | Array of string | Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. Items values: `"connect"`, `"disconnect"`. |
| `tax_connection_id` | Optional | string | Flint tax connection ID. Present once the first registration or connection creates a record. Example: `"tcn_01KEZF7C007Y42FMVNHV3P27QN"`. |
| `updated_at` | Optional | string | When the connection record's public state last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Optional | integer | Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. |

### TaxConnectionResponse.data.coverage[]

A country and the categories automatic tax can calculate there.

Field definitions: [shared fields](TaxCountryCoverageInput.md#taxcountrycoverageinput).

### TaxConnectionResponse.data.legal_address

Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatadeliverydestinationaddress).

### TaxConnectionResponse.data.legal_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### TaxConnectionResponse.data.legal_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. 

### TaxConnectionResponse.data.seller_attestation

The seller's recorded agreement to the disclosure. `null` when no connect has recorded one.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attested_at` | Conditional | string | When Flint recorded the seller's agreement. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `disclosure_version` | Conditional | string | Opaque version of the disclosure the seller agreed to. |

### TaxConnectionResponse.data.seller_attestation variant 1

anyOf TaxConnectionSellerAttestation: The disclosure the seller agreed to and when Flint recorded that agreement..

- Required: `attested_at`, `disclosure_version`.

### TaxConnectionResponse.data.seller_attestation variant 2

anyOf variant 2.

- Undeclared: `attested_at`, `disclosure_version`.
- Value shape: null. The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. 

### TaxConnectionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

