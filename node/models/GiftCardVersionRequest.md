[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardVersionRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | minimum: `1`. |

### GiftCardVersionRequest variant 1

anyOf variant 1: Declared schema ApplyOrderGiftCardRequest. The request body for: Apply a gift card to an order..

- Constraints for `expected_version`: Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`.

### GiftCardVersionRequest variant 2

anyOf variant 2: Declared schema AssignToUnconfiguredDeliveryProfileRequest. The request body for: Assign unconfigured catalog entries..

- Constraints for `expected_version`: Current version of the delivery profile. Format: `uint64`.

### GiftCardVersionRequest variant 3

anyOf variant 3: Declared schema SkipMeSubscriptionCycleRequest. The request body for: Skip subscription cycle..

- Constraints for `expected_version`: Format: `uint64`.

### GiftCardVersionRequest variant 4

anyOf variant 4: Declared schema ResourceVersionRequest. The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice..

- Constraints for `expected_version`: Format: `int64`.

### GiftCardVersionRequest variant 5

anyOf variant 5: Declared schema GiftCardVersionRequest. Optional version fence for the redemption being captured or canceled..

- Constraints for `expected_version`: The redemption version last read. Capture or cancel changes the redemption only when its current version matches. Format: `int64`.

### GiftCardVersionRequest variant 6

anyOf variant 6: Declared schema RepriceDiscountsRequest. The request body for: Reprice discounts..

- Constraints for `expected_version`: Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`.

