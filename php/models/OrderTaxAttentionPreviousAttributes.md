[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxAttentionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Values: `"tax_commitment_failed"`. `code`: [declared alternatives](../models/OrderTaxAttentionPreviousAttributes.md#ordertaxattentionpreviousattributescode). |
| `message` | Optional | string or null | Merchant-facing explanation and next step. `message`: [declared alternatives](../models/OrderTaxAttentionPreviousAttributes.md#ordertaxattentionpreviousattributesmessage). |
| `started_at` | Optional | string or null | When this outstanding tax issue was first recorded, in UTC. `started_at`: [declared alternatives](../models/OrderTaxAttentionPreviousAttributes.md#ordertaxattentionpreviousattributesstarted_at). |

### OrderTaxAttentionPreviousAttributes.code

### OrderTaxAttentionPreviousAttributes.code variant 1

anyOf variant 1: tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added..

- Value shape: string. tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Values: `"tax_commitment_failed"`.

### OrderTaxAttentionPreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. 

### OrderTaxAttentionPreviousAttributes.message

### OrderTaxAttentionPreviousAttributes.message variant 1

anyOf variant 1: Merchant-facing explanation and next step..

- Value shape: string. Merchant-facing explanation and next step. 

### OrderTaxAttentionPreviousAttributes.message variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing explanation and next step. 

### OrderTaxAttentionPreviousAttributes.started_at

### OrderTaxAttentionPreviousAttributes.started_at variant 1

anyOf variant 1: When this outstanding tax issue was first recorded, in UTC..

- Value shape: string. When this outstanding tax issue was first recorded, in UTC. When this outstanding tax issue was first recorded, in UTC. Format: `date-time`. 

### OrderTaxAttentionPreviousAttributes.started_at variant 2

anyOf variant 2.

- Value shape: null. When this outstanding tax issue was first recorded, in UTC. 

