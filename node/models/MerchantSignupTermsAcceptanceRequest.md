[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupTermsAcceptanceRequest

Your statement that the owner ticked Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to show it and to report real values.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ip_address` | Required | string | The owner's browser IP address, IPv4 or IPv6. Request logs redact it. minLength: `2`. maxLength: `64`. |
| `merchant_terms_version` | Required | string | Must equal the signup's `merchant_terms.version`. minLength: `1`. |
| `user_agent` | Required | string | The owner's browser user agent, 1 to 1,024 characters. Request logs redact it. minLength: `1`. maxLength: `1024`. |

