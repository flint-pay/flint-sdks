[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupVersionRequestInput

Request input. Response: [CloseGiftCardRequest](../models/CloseGiftCardRequest.md#closegiftcardrequest).

The request body for: Cancel a merchant signup; Mint new authorization codes for a merchant signup; Send a new merchant signup code.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |

