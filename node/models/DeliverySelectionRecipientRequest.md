[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionRecipientRequest

Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | Recipient email address. Limited to 254 characters (Unicode code points), counted before surrounding whitespace is trimmed. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. Send null to clear it. Format: `email`. minLength: `1`. maxLength: `254`. |
| `name` | Optional | string or null | Recipient name. Limited to 200 characters (Unicode code points), counted before surrounding whitespace is trimmed. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. Send null to clear it. minLength: `1`. maxLength: `200`. |
| `phone` | Optional | string or null | Recipient phone number. After surrounding whitespace is trimmed, use + followed by 7 through 15 ASCII digits, with a nonzero first digit. Limited to 16 characters (Unicode code points), counted before trimming. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. Send null to clear it. minLength: `1`. maxLength: `16`. |

