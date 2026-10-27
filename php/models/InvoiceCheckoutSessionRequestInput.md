[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCheckoutSessionRequestInput

The request body for: Create an invoice checkout session for the current buyer; Get or create invoice checkout collection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_schedule_entry_id` | Optional | string | minLength: `1`. |
| `page_origin` | Optional | string | Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `return_url` | Optional | string | Where the checkout sends the buyer after paying, such as the invoice's page in the customer account. Limited to 2048 characters (Unicode code points) before trimming surrounding whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the host of customer_account.merchant_account_url when the merchant hosts the account. HTTP is accepted only for localhost in test mode. Anything else fails with INVALID_RETURN_URL. An alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout; keep them consistent when sending both. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `surface` | Optional | string | Defaults to hosted. The same surface reuses the open checkout. A different surface replaces it only while no payment is in progress; otherwise the request returns CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED. Default: `"hosted"`. Values: `"hosted"`, `"embedded"`. |

