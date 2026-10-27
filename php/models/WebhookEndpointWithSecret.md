[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEndpointWithSecret

A webhook endpoint with its one-time signing secret, returned when the endpoint is created or its secret is rotated.

A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created it and receives only that environment's events. Partner endpoints select sources with event_sources and installed_merchant_modes.

Response model.

Fields, types, descriptions and enum values: [WebhookEndpointWithSecretInput](../models/WebhookEndpointWithSecretInput.md#webhookendpointwithsecretinput).

