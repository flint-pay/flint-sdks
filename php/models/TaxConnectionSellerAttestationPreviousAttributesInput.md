[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionSellerAttestationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attested_at` | Optional | string or null | When Flint recorded the seller's agreement. `attested_at`: [declared alternatives](../models/TaxConnectionSellerAttestationPreviousAttributesInput.md#taxconnectionsellerattestationpreviousattributesinputattested_at). |
| `disclosure_version` | Optional | string or null | Opaque version of the disclosure the seller agreed to. `disclosure_version`: [declared alternatives](../models/TaxConnectionSellerAttestationPreviousAttributesInput.md#taxconnectionsellerattestationpreviousattributesinputdisclosure_version). |

### TaxConnectionSellerAttestationPreviousAttributesInput.attested_at

### TaxConnectionSellerAttestationPreviousAttributesInput.attested_at variant 1

anyOf variant 1: When Flint recorded the seller's agreement..

- Value shape: string. When Flint recorded the seller's agreement. When Flint recorded the seller's agreement. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TaxConnectionSellerAttestationPreviousAttributesInput.attested_at variant 2

anyOf variant 2.

- Value shape: null. When Flint recorded the seller's agreement. 

### TaxConnectionSellerAttestationPreviousAttributesInput.disclosure_version

### TaxConnectionSellerAttestationPreviousAttributesInput.disclosure_version variant 1

anyOf variant 1: Opaque version of the disclosure the seller agreed to..

- Value shape: string. Opaque version of the disclosure the seller agreed to. 

### TaxConnectionSellerAttestationPreviousAttributesInput.disclosure_version variant 2

anyOf variant 2.

- Value shape: null. Opaque version of the disclosure the seller agreed to. 

