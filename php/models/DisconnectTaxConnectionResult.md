[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisconnectTaxConnectionResult

The disconnected automatic tax connection and merchant settings after the requested default-tax change.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `settings` | Required | [Settings](../models/Settings.md#settings) | Merchant settings, as returned by GET /v1/settings. The settings for one merchant environment. `settings`: [field definitions](../models/DisconnectTaxConnectionResult.md#disconnecttaxconnectionresultsettings). |
| `tax_connection` | Required | [TaxConnection](../models/TaxConnection.md#taxconnection) | The connection changed by this operation. Its version is the expected_version target. The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook. `tax_connection`: [field definitions](../models/DisconnectTaxConnectionResult.md#disconnecttaxconnectionresulttax_connection). |

### DisconnectTaxConnectionResult.settings

Merchant settings, as returned by GET /v1/settings. The settings for one merchant environment.

Field definitions: [shared fields](SettingsResponse.md#settingsresponsedata).

### DisconnectTaxConnectionResult.settings.checkout

Field definitions: [SettingsResponse.data.checkout](../models/SettingsResponse.md#settingsresponsedatacheckout).

### DisconnectTaxConnectionResult.settings.inventory

Field definitions: [SettingsResponse.data.inventory](../models/SettingsResponse.md#settingsresponsedatainventory).

### DisconnectTaxConnectionResult.settings.invoices

Field definitions: [SettingsResponse.data.invoices](../models/SettingsResponse.md#settingsresponsedatainvoices).

### DisconnectTaxConnectionResult.settings.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### DisconnectTaxConnectionResult.settings.tax

Field definitions: [SettingsResponse.data.tax](../models/SettingsResponse.md#settingsresponsedatatax).

### DisconnectTaxConnectionResult.settings.tax_identity

Declared alternatives: [SettingsResponse.data.tax_identity](../models/SettingsResponse.md#settingsresponsedatatax_identity).

### DisconnectTaxConnectionResult.settings.tipping

Field definitions: [SettingsResponse.data.tipping](../models/SettingsResponse.md#settingsresponsedatatipping).

### DisconnectTaxConnectionResult.tax_connection

The connection changed by this operation. Its version is the expected_version target. The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.

Field definitions: [shared fields](TaxConnectionResponse.md#taxconnectionresponsedata).

### DisconnectTaxConnectionResult.tax_connection.coverage[]

Field definitions: [TaxConnectionResponse.data.coverage[]](../models/TaxConnectionResponse.md#taxconnectionresponsedatacoverage).

### DisconnectTaxConnectionResult.tax_connection.legal_address

Declared alternatives: [TaxConnectionResponse.data.legal_address](../models/TaxConnectionResponse.md#taxconnectionresponsedatalegal_address).

### DisconnectTaxConnectionResult.tax_connection.seller_attestation

Declared alternatives: [TaxConnectionResponse.data.seller_attestation](../models/TaxConnectionResponse.md#taxconnectionresponsedataseller_attestation).

