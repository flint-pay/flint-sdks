[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisconnectTaxConnectionResultInput

The disconnected automatic tax connection and merchant settings after the requested default-tax change.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `settings` | Required | [SettingsInput](../models/SettingsInput.md#settingsinput) | Merchant settings, as returned by GET /v1/settings. The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping. |
| `tax_connection` | Required | [TaxConnectionInput](../models/TaxConnectionInput.md#taxconnectioninput) | The connection changed by this operation. Its version is the expected_version target. The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook. |

