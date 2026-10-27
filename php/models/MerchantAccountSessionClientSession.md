[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionClientSession

Short-lived browser initialization data for an embedded merchant account session.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Expiry of the embedded account session client secret in UTC. Connect.js calls fetchClientSecret to obtain a new secret when needed. Format: `date-time`. |
| `stripe` | Required | [MerchantAccountSessionStripe](../models/MerchantAccountSessionStripe.md#merchantaccountsessionstripe) | Stripe Connect initialization credentials and authorized component collection options. Connect initializes from the account session client secret and does not take a connected account ID. Stripe Connect initialization data for a merchant account session: the account session, publishable key, and authorized components. |

