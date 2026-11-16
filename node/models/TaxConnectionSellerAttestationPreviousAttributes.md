[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionSellerAttestationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attested_at` | Optional | string or null | When Flint recorded the seller's agreement. `attested_at`: [declared alternatives](../models/TaxConnectionSellerAttestationPreviousAttributes.md#taxconnectionsellerattestationpreviousattributesattested_at). |
| `disclosure_version` | Optional | string or null | Opaque version of the disclosure the seller agreed to. `disclosure_version`: [declared alternatives](../models/TaxConnectionSellerAttestationPreviousAttributes.md#taxconnectionsellerattestationpreviousattributesdisclosure_version). |

### TaxConnectionSellerAttestationPreviousAttributes.attested_at

### TaxConnectionSellerAttestationPreviousAttributes.attested_at variant 1

anyOf variant 1: When Flint recorded the seller's agreement..

- Value shape: string. When Flint recorded the seller's agreement. When Flint recorded the seller's agreement. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TaxConnectionSellerAttestationPreviousAttributes.attested_at variant 2

anyOf variant 2.

- Value shape: null. When Flint recorded the seller's agreement. 

### TaxConnectionSellerAttestationPreviousAttributes.disclosure_version

### TaxConnectionSellerAttestationPreviousAttributes.disclosure_version variant 1

anyOf variant 1: Opaque version of the disclosure the seller agreed to..

- Value shape: string. Opaque version of the disclosure the seller agreed to. 

### TaxConnectionSellerAttestationPreviousAttributes.disclosure_version variant 2

anyOf variant 2.

- Value shape: null. Opaque version of the disclosure the seller agreed to. 

