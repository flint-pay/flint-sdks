[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeCheckoutSessionRequestInput

The request body for: Create a checkout session for the current buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Conditional | string | The open invoice whose balance due now this checkout collects. An open session for the invoice's current collection is reused and returned with 200. With an invoice access token, it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session, it must be one of the buyer's invoices. minLength: `1`. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_schedule_entry_id` | Optional | string | Optional. The schedule entry to collect. Only the earliest entry that is due and still has an outstanding balance can be collected; omit it to collect that entry. Not allowed on an invoice without a schedule. minLength: `1`. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `page_origin` | Optional | string | Origin of the page where you render this headless checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: `1`. maxLength: `255`. |
| `payment_return_url` | Optional | string | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. |
| `return_resolution_id` | Conditional | string | One of the buyer's return resolutions with a buyer payment pending on its replacement order. Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open session with the same surface is reused and returned with 200. minLength: `1`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `return_url` | Optional | string | Where the checkout sends the buyer after paying, such as the invoice's or Return's page in the customer account. Limited to 2048 characters (Unicode code points) before trimming surrounding whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the host of customer_account.merchant_account_url when the merchant hosts the account. In test mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or payment_return_url on headless checkout; keep them consistent when sending both. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `surface` | Optional | string | Defaults to hosted. The same surface reuses the open checkout. A different surface replaces it only while no payment is in progress; otherwise the request returns 409 ACTION_NOT_ALLOWED with reason in_progress. Default: `"hosted"`. Values: `"hosted"`, `"headless"`. |
| `type` | Required | string | What the checkout collects payment for. return_resolution: the buyer's balance on one of their return resolutions; send return_resolution_id. invoice: what is due now on one of the buyer's invoices; send invoice_id. Values: `"return_resolution"`, `"invoice"`. |

### CreateMeCheckoutSessionRequestInput variant 1: `type` = `"return_resolution"`

oneOf with type: "return_resolution": The `return_resolution` variant of `CreateMeCheckoutSessionRequest`..

- Condition: not (at least one(present(`invoice_id`); present(`invoice_schedule_entry_id`))).
- Required: `return_resolution_id`.
- Optional: `invoice_id`.
- Constraints for `type`: Values: `"return_resolution"`.

### CreateMeCheckoutSessionRequestInput variant 2: `type` = `"invoice"`

oneOf with type: "invoice": The `invoice` variant of `CreateMeCheckoutSessionRequest`..

- Condition: not (at least one(present(`return_resolution_id`))).
- Required: `invoice_id`.
- Optional: `return_resolution_id`.
- Constraints for `type`: Values: `"invoice"`.

