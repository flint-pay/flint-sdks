[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_disposition_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `available_disposition_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the units were matched to. Absent for unverified units. `return_line_item_id`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesreturn_line_item_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt the line belongs to. `return_receipt_id`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesreturn_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | Unique identifier for this return receipt line item, prefixed `retrcli_`. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesreturn_receipt_line_item_id). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty. Items values: `"verify"`. `supported_actions`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributessupported_actions). |
| `unverified_item` | Optional | [ReturnUnverifiedItemPreviousAttributes](../models/ReturnUnverifiedItemPreviousAttributes.md#returnunverifieditempreviousattributes) or null | What the operator recorded for units that match no line. Present on `unverified` lines. |
| `verification_reason` | Optional | string or null | Why the units were verified against the line. Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. `verification_reason`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_reason). |
| `verification_reason_message` | Optional | string or null | Detail about `verification_reason`. `verification_reason_message`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_reason_message). |
| `verification_status` | Optional | string or null | Whether the units are matched to a line. Values: `"matched"`, `"unverified"`, `"excess"`. `verification_status`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_status). |
| `verified_at` | Optional | string or null | RFC3339 timestamp. `verified_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `verified_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who verified the line. |

### ReturnReceiptLineItemPreviousAttributes.available_disposition_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnReceiptLineItemPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnReceiptLineItemPreviousAttributes.return_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributes.return_id](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_id).

### ReturnReceiptLineItemPreviousAttributes.return_line_item_id

### ReturnReceiptLineItemPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the units were matched to. Absent for unverified units..

- Value shape: string. ID of the Return line the units were matched to. Absent for unverified units. ID of the Return line the units were matched to. Absent for unverified units. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnReceiptLineItemPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the units were matched to. Absent for unverified units. 

### ReturnReceiptLineItemPreviousAttributes.return_receipt_id

### ReturnReceiptLineItemPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: ID of the receipt the line belongs to..

- Value shape: string. ID of the receipt the line belongs to. ID of the receipt the line belongs to. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptLineItemPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt the line belongs to. 

### ReturnReceiptLineItemPreviousAttributes.return_receipt_line_item_id

### ReturnReceiptLineItemPreviousAttributes.return_receipt_line_item_id variant 1

anyOf variant 1: Unique identifier for this return receipt line item, prefixed `retrcli_`..

- Value shape: string. Unique identifier for this return receipt line item, prefixed `retrcli_`. Unique identifier for this return receipt line item, prefixed `retrcli_`. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. 

### ReturnReceiptLineItemPreviousAttributes.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return receipt line item, prefixed `retrcli_`. 

### ReturnReceiptLineItemPreviousAttributes.supported_actions

### ReturnReceiptLineItemPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty..

- Value shape: Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty. Items values: `"verify"`.

### ReturnReceiptLineItemPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty. 

### ReturnReceiptLineItemPreviousAttributes.verification_reason

### ReturnReceiptLineItemPreviousAttributes.verification_reason variant 1

anyOf variant 1: Why the units were verified against the line..

- Value shape: string. Why the units were verified against the line. Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`.

### ReturnReceiptLineItemPreviousAttributes.verification_reason variant 2

anyOf variant 2.

- Value shape: null. Why the units were verified against the line. 

### ReturnReceiptLineItemPreviousAttributes.verification_reason_message

### ReturnReceiptLineItemPreviousAttributes.verification_reason_message variant 1

anyOf variant 1: Detail about `verification_reason`..

- Value shape: string. Detail about `verification_reason`. 

### ReturnReceiptLineItemPreviousAttributes.verification_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `verification_reason`. 

### ReturnReceiptLineItemPreviousAttributes.verification_status

### ReturnReceiptLineItemPreviousAttributes.verification_status variant 1

anyOf variant 1: Whether the units are matched to a line..

- Value shape: string. Whether the units are matched to a line. Values: `"matched"`, `"unverified"`, `"excess"`.

### ReturnReceiptLineItemPreviousAttributes.verification_status variant 2

anyOf variant 2.

- Value shape: null. Whether the units are matched to a line. 

### ReturnReceiptLineItemPreviousAttributes.verified_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

