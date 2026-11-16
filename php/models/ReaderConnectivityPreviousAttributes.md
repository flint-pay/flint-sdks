[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectivityPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `last_seen_at` | Optional | string or null | When the reader last reached Stripe. Omitted when it never has. `last_seen_at`: [declared alternatives](../models/ReaderConnectivityPreviousAttributes.md#readerconnectivitypreviousattributeslast_seen_at). |
| `observed_at` | Optional | string or null | When Flint observed this. `observed_at`: [declared alternatives](../models/ReaderConnectivityPreviousAttributes.md#readerconnectivitypreviousattributesobserved_at). |
| `status` | Optional | string or null | Whether the reader was reaching Stripe when Flint last observed it. Values: `"online"`, `"offline"`. `status`: [declared alternatives](../models/ReaderConnectivityPreviousAttributes.md#readerconnectivitypreviousattributesstatus). |

### ReaderConnectivityPreviousAttributes.last_seen_at

### ReaderConnectivityPreviousAttributes.last_seen_at variant 1

anyOf variant 1: When the reader last reached Stripe. Omitted when it never has..

- Value shape: string. When the reader last reached Stripe. Omitted when it never has. When the reader last reached Stripe. Omitted when it never has. Format: `date-time`. 

### ReaderConnectivityPreviousAttributes.last_seen_at variant 2

anyOf variant 2.

- Value shape: null. When the reader last reached Stripe. Omitted when it never has. 

### ReaderConnectivityPreviousAttributes.observed_at

### ReaderConnectivityPreviousAttributes.observed_at variant 1

anyOf variant 1: When Flint observed this..

- Value shape: string. When Flint observed this. When Flint observed this. Format: `date-time`. 

### ReaderConnectivityPreviousAttributes.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint observed this. 

### ReaderConnectivityPreviousAttributes.status

### ReaderConnectivityPreviousAttributes.status variant 1

anyOf variant 1: Whether the reader was reaching Stripe when Flint last observed it..

- Value shape: string. Whether the reader was reaching Stripe when Flint last observed it. Values: `"online"`, `"offline"`.

### ReaderConnectivityPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the reader was reaching Stripe when Flint last observed it. 

