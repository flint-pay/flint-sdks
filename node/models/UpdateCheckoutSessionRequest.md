[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCheckoutSessionRequest

The request body for: Update checkout session.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequest](../models/CheckoutBuyerContactRequest.md#checkoutbuyercontactrequest) | Checkout session credentials only. Saves the contact the buyer entered while the session is open. A patch object: omitted fields are unchanged, and null clears a field. A merchant credential that sends buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. |
| `expected_version` | Optional | integer string | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to leave unchanged; send null to clear. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsRequest](../models/CheckoutSubscriptionTermsRequest.md#checkoutsubscriptiontermsrequest) | Subscription plan sessions only. The billing interval and quantity the buyer chose from subscription_terms.billing_interval_options and quantity_options. Send billing_interval and billing_interval_count together. Accepted from your API key or the checkout credential. Subscription terms you set on a checkout session: billing interval, interval count, and quantity. |
| `timezone` | Optional | string | Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: `1`. maxLength: `64`. |

