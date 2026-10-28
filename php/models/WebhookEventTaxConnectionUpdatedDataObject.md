[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventTaxConnectionUpdatedDataObject

The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.

Response model.

Fields, types, descriptions and enum values: [TaxConnection](../models/TaxConnection.md#taxconnection).

