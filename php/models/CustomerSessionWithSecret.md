[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionWithSecret

A customer session with its `secret` and `refresh_token`, returned only when the session is created or refreshed.

A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion.

Response model.

Fields, types, descriptions and enum values: [CustomerSessionWithSecretInput](../models/CustomerSessionWithSecretInput.md#customersessionwithsecretinput).

