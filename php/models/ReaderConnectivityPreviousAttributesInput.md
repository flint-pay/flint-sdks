[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectivityPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `last_seen_at` | Optional | string or null or null | When the reader last reached Stripe. Omitted when it never has. `last_seen_at`: [declared alternatives](../models/ReaderConnectivityPreviousAttributesInput.md#readerconnectivitypreviousattributesinputlast_seen_at). |
| `observed_at` | Optional | string or null | When Flint observed this. `observed_at`: [declared alternatives](../models/ReaderConnectivityPreviousAttributesInput.md#readerconnectivitypreviousattributesinputobserved_at). |
| `status` | Optional | string or null | Whether the reader was reaching Stripe when Flint last observed it. Values: `"online"`, `"offline"`. `status`: [declared alternatives](../models/ReaderConnectivityPreviousAttributesInput.md#readerconnectivitypreviousattributesinputstatus). |

### ReaderConnectivityPreviousAttributesInput.last_seen_at

### ReaderConnectivityPreviousAttributesInput.last_seen_at variant 1

anyOf variant 1: When the reader last reached Stripe. Omitted when it never has..

- Value shape: (string or null). When the reader last reached Stripe. Omitted when it never has. When the reader last reached Stripe. Omitted when it never has. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReaderConnectivityPreviousAttributesInput.last_seen_at variant 2

anyOf variant 2.

- Value shape: null. When the reader last reached Stripe. Omitted when it never has. 

### ReaderConnectivityPreviousAttributesInput.observed_at

### ReaderConnectivityPreviousAttributesInput.observed_at variant 1

anyOf variant 1: When Flint observed this..

- Value shape: string. When Flint observed this. When Flint observed this. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReaderConnectivityPreviousAttributesInput.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint observed this. 

### ReaderConnectivityPreviousAttributesInput.status

### ReaderConnectivityPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the reader was reaching Stripe when Flint last observed it..

- Value shape: string. Whether the reader was reaching Stripe when Flint last observed it. Values: `"online"`, `"offline"`.

### ReaderConnectivityPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the reader was reaching Stripe when Flint last observed it. 

