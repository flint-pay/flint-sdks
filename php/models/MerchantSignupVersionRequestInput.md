[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupVersionRequestInput

The request body for: Cancel a merchant signup; Mint new authorization codes for a merchant signup; Send a new merchant signup code.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |

