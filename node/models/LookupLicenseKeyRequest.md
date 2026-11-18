[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LookupLicenseKeyRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Required | string |  |

### LookupLicenseKeyRequest variant 1

anyOf variant 1: Declared schema InventoryReservationOwnerRequest. The owner of a merchant inventory reservation you create: your `key` for what holds the stock..

- Constraints for `key`: Your stable identifier for what holds the stock, such as a cart ID. One active reservation per key. minLength: `1`. maxLength: `255`.

### LookupLicenseKeyRequest variant 2

anyOf variant 2: Declared schema LookupLicenseKeyRequest. The full key to look up..

- Constraints for `key`: The full bearer key. Generated keys ignore case, spaces and hyphens and use the last 25 characters after normalization. Pool keys match exactly after surrounding whitespace is trimmed. minLength: `1`.

