[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisconnectTaxConnectionResult

The disconnected automatic tax connection and merchant settings after the requested default-tax change.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `settings` | Required | [Settings](../models/Settings.md#settings) | Merchant settings, as returned by GET /v1/settings. The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping. `settings`: [field definitions](../models/DisconnectTaxConnectionResult.md#disconnecttaxconnectionresultsettings). |
| `tax_connection` | Required | [TaxConnection](../models/TaxConnection.md#taxconnection) | The connection changed by this operation. Its version is the expected_version target. The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook. |

### DisconnectTaxConnectionResult.settings

Merchant settings, as returned by GET /v1/settings. The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping.

Field definitions: [shared fields](SettingsGetEffectiveResponse200.md#settingsgeteffectiveresponse200data).

### DisconnectTaxConnectionResult.settings.metadata

Field definitions: [ReturnsCancelResponse200.data.metadata](../models/ReturnsCancelResponse200.md#returnscancelresponse200datametadata).

### DisconnectTaxConnectionResult.settings.tax_identity

Declared alternatives: [CustomersCreateResponse200.data.tax_identity](../models/CustomersCreateResponse200.md#customerscreateresponse200datatax_identity).

### DisconnectTaxConnectionResult.settings.tipping

Field definitions: [SettingsGetEffectiveResponse200.data.tipping](../models/SettingsGetEffectiveResponse200.md#settingsgeteffectiveresponse200datatipping).

