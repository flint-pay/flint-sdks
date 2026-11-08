[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CloseGiftCardRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | minimum: `1`. |

### CloseGiftCardRequest variant 1

anyOf ApplyInventoryCountRequest: Declared schema ApplyInventoryCountRequest. Sets inventory levels to the counted quantities of an open physical count. Every line needs an observation. VERSION_CONFLICT also covers a stale saved physical observation with no corresponding field in this request; these details omit param. Recount affected items and save the complete observations before applying again. Physical changes after observation require recounts, including at a trading location; holds and commitments alone do not invalidate observations..

- Constraints for `expected_version`: Optional resource version the caller last read. Enforced when sent. Format: `uint64`.

### CloseGiftCardRequest variant 2

anyOf variant 2: Declared schema ApplyOrderGiftCardRequest. The request body for: Apply a gift card to an order..

- Constraints for `expected_version`: Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`.

### CloseGiftCardRequest variant 3

anyOf variant 3: Declared schema AssignToUnconfiguredDeliveryProfileRequest. The request body for: Assign unconfigured catalog entries..

- Constraints for `expected_version`: Current version of the delivery profile. Format: `uint64`.

### CloseGiftCardRequest variant 4

anyOf CancelInventoryCountRequest: Declared schema CancelInventoryCountRequest. Closes an open physical count without changing stock..

- Constraints for `expected_version`: Optional resource version the caller last read. Enforced when sent. Format: `uint64`.

### CloseGiftCardRequest variant 5

anyOf variant 5: Declared schema UnfreezeGiftCardRequest. An optional version fence for removing the merchant freeze..

- Constraints for `expected_version`: The gift card version last read. The command changes this card only when its current version matches. Format: `int64`.

### CloseGiftCardRequest variant 6

anyOf variant 6: Declared schema SkipMeSubscriptionCycleRequest. The request body for: Skip subscription cycle..

- Constraints for `expected_version`: Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`.

### CloseGiftCardRequest variant 7

anyOf variant 7: Declared schema ResourceVersionRequest. The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice..

- Constraints for `expected_version`: Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`.

### CloseGiftCardRequest variant 8

anyOf variant 8: Declared schema GiftCardVersionRequest. Optional version fence for the redemption being captured or canceled..

- Constraints for `expected_version`: The redemption version last read. Capture or cancel changes the redemption only when its current version matches. Format: `int64`.

### CloseGiftCardRequest variant 9

anyOf variant 9: Declared schema RepriceDiscountsRequest. The request body for: Reprice discounts..

- Constraints for `expected_version`: Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`.

### CloseGiftCardRequest variant 10

anyOf variant 10: Declared schema TicketVersionRequest. An optional version fence for the ticket..

- Constraints for `expected_version`: The ticket version last read. The change applies only while the ticket is at this version; a stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse the change. Door scanners usually omit it. Format: `uint64`.

