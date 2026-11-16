[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReasonPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string or null | Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. `category_handles`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputcategory_handles). |
| `created_at` | Optional | string or null | When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. `created_at`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputcreated_at). |
| `description` | Optional | string or null | Longer explanation of when to use the reason. `description`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `handle` | Optional | string or null | Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. `handle`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputhandle). |
| `is_note_required` | Optional | boolean or null | Whether a Return line with this reason needs a buyer_note. `is_note_required`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputis_note_required). |
| `name` | Optional | string or null | Name buyers and staff see. `name`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputname). |
| `return_reason_id` | Optional | string or null | Flint's ID for the reason. Send it as return_reason_id on a Return line. `return_reason_id`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputreturn_reason_id). |
| `source` | Optional | string or null | Whether Flint provides the reason or you created it. Values: `"flint"`, `"merchant"`. `source`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputsource). |
| `status` | Optional | string or null | Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Values: `"active"`, `"archived"`, `"inactive"`. `status`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. `version`: [declared alternatives](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinputversion). |

### ReturnReasonPreviousAttributesInput.category_handles

### ReturnReasonPreviousAttributesInput.category_handles variant 1

anyOf variant 1: Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories..

- Value shape: Array of string. Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. 

### ReturnReasonPreviousAttributesInput.category_handles variant 2

anyOf variant 2.

- Value shape: null. Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. 

### ReturnReasonPreviousAttributesInput.created_at

### ReturnReasonPreviousAttributesInput.created_at variant 1

anyOf variant 1: When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged..

- Value shape: string. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReturnReasonPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. 

### ReturnReasonPreviousAttributesInput.description

### ReturnReasonPreviousAttributesInput.description variant 1

anyOf variant 1: Longer explanation of when to use the reason..

- Value shape: string. Longer explanation of when to use the reason. 

### ReturnReasonPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Longer explanation of when to use the reason. 

### ReturnReasonPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnReasonPreviousAttributesInput.handle

### ReturnReasonPreviousAttributesInput.handle variant 1

anyOf variant 1: Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved..

- Value shape: string. Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. minLength: `1`. maxLength: `100`. pattern: `^[a-z][a-z0-9_]{0,99}$`. 

### ReturnReasonPreviousAttributesInput.handle variant 2

anyOf variant 2.

- Value shape: null. Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. 

### ReturnReasonPreviousAttributesInput.is_note_required

### ReturnReasonPreviousAttributesInput.is_note_required variant 1

anyOf variant 1: Whether a Return line with this reason needs a buyer_note..

- Value shape: boolean. Whether a Return line with this reason needs a buyer_note. 

### ReturnReasonPreviousAttributesInput.is_note_required variant 2

anyOf variant 2.

- Value shape: null. Whether a Return line with this reason needs a buyer_note. 

### ReturnReasonPreviousAttributesInput.name

### ReturnReasonPreviousAttributesInput.name variant 1

anyOf variant 1: Name buyers and staff see..

- Value shape: string. Name buyers and staff see. 

### ReturnReasonPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name buyers and staff see. 

### ReturnReasonPreviousAttributesInput.return_reason_id

### ReturnReasonPreviousAttributesInput.return_reason_id variant 1

anyOf variant 1: Flint's ID for the reason. Send it as return_reason_id on a Return line..

- Value shape: string. Flint's ID for the reason. Send it as return_reason_id on a Return line. Flint's ID for the reason. Send it as return_reason_id on a Return line. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. 

### ReturnReasonPreviousAttributesInput.return_reason_id variant 2

anyOf variant 2.

- Value shape: null. Flint's ID for the reason. Send it as return_reason_id on a Return line. 

### ReturnReasonPreviousAttributesInput.source

### ReturnReasonPreviousAttributesInput.source variant 1

anyOf variant 1: Whether Flint provides the reason or you created it..

- Value shape: string. Whether Flint provides the reason or you created it. Values: `"flint"`, `"merchant"`.

### ReturnReasonPreviousAttributesInput.source variant 2

anyOf variant 2.

- Value shape: null. Whether Flint provides the reason or you created it. 

### ReturnReasonPreviousAttributesInput.status

### ReturnReasonPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive..

- Value shape: string. Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Values: `"active"`, `"archived"`, `"inactive"`.

### ReturnReasonPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. 

### ReturnReasonPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReasonPreviousAttributesInput.version

### ReturnReasonPreviousAttributesInput.version variant 1

anyOf variant 1: Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it..

- Value shape: integer. Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. Format: `int64`. minimum: `1`. 

### ReturnReasonPreviousAttributesInput.version variant 2

anyOf variant 2.

- Value shape: null. Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. 

