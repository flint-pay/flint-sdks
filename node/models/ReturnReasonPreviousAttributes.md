[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReasonPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string or null | Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. `category_handles`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributescategory_handles). |
| `created_at` | Optional | string or null | When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. `created_at`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributescreated_at). |
| `description` | Optional | string or null | Longer explanation of when to use the reason. `description`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `handle` | Optional | string or null | Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. `handle`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributeshandle). |
| `is_note_required` | Optional | boolean or null | Whether a Return line with this reason needs a buyer_note. `is_note_required`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesis_note_required). |
| `name` | Optional | string or null | Name buyers and staff see. `name`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesname). |
| `return_reason_id` | Optional | string or null | Flint's ID for the reason. Send it as return_reason_id on a Return line. `return_reason_id`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesreturn_reason_id). |
| `source` | Optional | string or null | Whether Flint provides the reason or you created it. Values: `"flint"`, `"merchant"`. `source`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributessource). |
| `status` | Optional | string or null | Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Values: `"active"`, `"archived"`, `"inactive"`. `status`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. `version`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesversion). |

### ReturnReasonPreviousAttributes.category_handles

### ReturnReasonPreviousAttributes.category_handles variant 1

anyOf variant 1: Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories..

- Value shape: Array of string. Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. 

### ReturnReasonPreviousAttributes.category_handles variant 2

anyOf variant 2.

- Value shape: null. Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. 

### ReturnReasonPreviousAttributes.created_at

### ReturnReasonPreviousAttributes.created_at variant 1

anyOf variant 1: When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged..

- Value shape: string. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReturnReasonPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. 

### ReturnReasonPreviousAttributes.description

### ReturnReasonPreviousAttributes.description variant 1

anyOf variant 1: Longer explanation of when to use the reason..

- Value shape: string. Longer explanation of when to use the reason. 

### ReturnReasonPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Longer explanation of when to use the reason. 

### ReturnReasonPreviousAttributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnReasonPreviousAttributes.handle

### ReturnReasonPreviousAttributes.handle variant 1

anyOf variant 1: Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved..

- Value shape: string. Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. minLength: `1`. maxLength: `100`. pattern: `^[a-z][a-z0-9_]{0,99}$`. 

### ReturnReasonPreviousAttributes.handle variant 2

anyOf variant 2.

- Value shape: null. Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. 

### ReturnReasonPreviousAttributes.is_note_required

### ReturnReasonPreviousAttributes.is_note_required variant 1

anyOf variant 1: Whether a Return line with this reason needs a buyer_note..

- Value shape: boolean. Whether a Return line with this reason needs a buyer_note. 

### ReturnReasonPreviousAttributes.is_note_required variant 2

anyOf variant 2.

- Value shape: null. Whether a Return line with this reason needs a buyer_note. 

### ReturnReasonPreviousAttributes.name

### ReturnReasonPreviousAttributes.name variant 1

anyOf variant 1: Name buyers and staff see..

- Value shape: string. Name buyers and staff see. 

### ReturnReasonPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name buyers and staff see. 

### ReturnReasonPreviousAttributes.return_reason_id

### ReturnReasonPreviousAttributes.return_reason_id variant 1

anyOf variant 1: Flint's ID for the reason. Send it as return_reason_id on a Return line..

- Value shape: string. Flint's ID for the reason. Send it as return_reason_id on a Return line. Flint's ID for the reason. Send it as return_reason_id on a Return line. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. 

### ReturnReasonPreviousAttributes.return_reason_id variant 2

anyOf variant 2.

- Value shape: null. Flint's ID for the reason. Send it as return_reason_id on a Return line. 

### ReturnReasonPreviousAttributes.source

### ReturnReasonPreviousAttributes.source variant 1

anyOf variant 1: Whether Flint provides the reason or you created it..

- Value shape: string. Whether Flint provides the reason or you created it. Values: `"flint"`, `"merchant"`.

### ReturnReasonPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Whether Flint provides the reason or you created it. 

### ReturnReasonPreviousAttributes.status

### ReturnReasonPreviousAttributes.status variant 1

anyOf variant 1: Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive..

- Value shape: string. Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Values: `"active"`, `"archived"`, `"inactive"`.

### ReturnReasonPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. 

### ReturnReasonPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReasonPreviousAttributes.version

### ReturnReasonPreviousAttributes.version variant 1

anyOf variant 1: Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it..

- Value shape: integer. Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. Format: `int64`. minimum: `1`. 

### ReturnReasonPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. 

