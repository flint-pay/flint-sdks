[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupWithAuthorizationCodesResponseInput

A response containing `MerchantSignupWithAuthorizationCodes` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [MerchantSignupWithAuthorizationCodesInput](../models/MerchantSignupWithAuthorizationCodesInput.md#merchantsignupwithauthorizationcodesinput) | Resource, collection, or operation result returned by this request. A completed merchant signup with the authorization codes to exchange for its grants' tokens. A platform's request to create a merchant for an owner, who confirms it with a code Flint emails them. Once verified, it is the record of the owner's consent, kept for as long as the merchant exists. A platform's request to create a merchant for an owner, who confirms it with a code Flint emails them. Once verified, it is the record of the owner's consent, kept for as long as the merchant exists. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

