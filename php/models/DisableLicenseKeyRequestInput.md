[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisableLicenseKeyRequestInput

The request body for: Disable a license key.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `reason` | Optional | string | Why the merchant disabled the key. Defaults to other. Default: `"other"`. Values: `"suspected_abuse"`, `"customer_request"`, `"other"`. |

