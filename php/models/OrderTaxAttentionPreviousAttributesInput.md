[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxAttentionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Values: `"tax_commitment_failed"`. `code`: [declared alternatives](../models/OrderTaxAttentionPreviousAttributesInput.md#ordertaxattentionpreviousattributesinputcode). |
| `message` | Optional | string or null | Merchant-facing explanation and next step. `message`: [declared alternatives](../models/OrderTaxAttentionPreviousAttributesInput.md#ordertaxattentionpreviousattributesinputmessage). |
| `started_at` | Optional | string or null | When this outstanding tax issue was first recorded, in UTC. `started_at`: [declared alternatives](../models/OrderTaxAttentionPreviousAttributesInput.md#ordertaxattentionpreviousattributesinputstarted_at). |

### OrderTaxAttentionPreviousAttributesInput.code

### OrderTaxAttentionPreviousAttributesInput.code variant 1

anyOf variant 1: tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added..

- Value shape: string. tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Values: `"tax_commitment_failed"`.

### OrderTaxAttentionPreviousAttributesInput.code variant 2

anyOf variant 2.

- Value shape: null. tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. 

### OrderTaxAttentionPreviousAttributesInput.message

### OrderTaxAttentionPreviousAttributesInput.message variant 1

anyOf variant 1: Merchant-facing explanation and next step..

- Value shape: string. Merchant-facing explanation and next step. 

### OrderTaxAttentionPreviousAttributesInput.message variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing explanation and next step. 

### OrderTaxAttentionPreviousAttributesInput.started_at

### OrderTaxAttentionPreviousAttributesInput.started_at variant 1

anyOf variant 1: When this outstanding tax issue was first recorded, in UTC..

- Value shape: string. When this outstanding tax issue was first recorded, in UTC. When this outstanding tax issue was first recorded, in UTC. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderTaxAttentionPreviousAttributesInput.started_at variant 2

anyOf variant 2.

- Value shape: null. When this outstanding tax issue was first recorded, in UTC. 

