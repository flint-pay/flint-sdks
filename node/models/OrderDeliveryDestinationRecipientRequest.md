[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationRecipientRequest

The recipient name and phone you supply for an order delivery. Send null to clear a field. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string or null | Send null to clear it. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `phone` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `30`. |

