[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFlintWalletCardInput

An independent card saved with Flint that the current buyer can set up at this store. Store copies have their own consent and lifecycle.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Required | [CardDetailsInput](../models/CardDetailsInput.md#carddetailsinput) | Brand, last four digits and expiry of the saved card. Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used. |
| `flint_wallet_card_id` | Required | string | Opaque handle for this card at this store. Handles differ across stores and cannot be used at another store. Example: `"fwc_EKAB7CMBXELKYMJUU2LYLJP5J25FESR6YR5WENVFIUZHTTG3BZWA"`. |
| `store_payment_method_id` | Required | string or null | The store's independent card copy. `null` when this store does not hold a copy. A pending copy still needs confirmation before use. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

