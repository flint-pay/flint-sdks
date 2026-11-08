[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LinkCustomerGuestPurchasesRequest

The request body for: Link guest purchases to a customer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_verification_id` | Required | string | ID of a confirmed customer verification with purpose `link_guest_purchases`. Linking uses it up. minLength: `1`. Example: `"cver_01KEZF7C00E7S01991S7457CVK"`. |

