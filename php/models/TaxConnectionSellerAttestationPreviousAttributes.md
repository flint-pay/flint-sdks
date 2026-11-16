[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionSellerAttestationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attested_at` | Optional | string or null | When Flint recorded the seller's agreement. `attested_at`: [declared alternatives](../models/TaxConnectionSellerAttestationPreviousAttributes.md#taxconnectionsellerattestationpreviousattributesattested_at). |
| `disclosure_version` | Optional | string or null | Opaque version of the disclosure the seller agreed to. `disclosure_version`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesseller_attestation-variant-1disclosure_version). |

### TaxConnectionSellerAttestationPreviousAttributes.attested_at

### TaxConnectionSellerAttestationPreviousAttributes.attested_at variant 1

anyOf variant 1: When Flint recorded the seller's agreement..

- Value shape: string. When Flint recorded the seller's agreement. When Flint recorded the seller's agreement. Format: `date-time`. 

### TaxConnectionSellerAttestationPreviousAttributes.attested_at variant 2

anyOf variant 2.

- Value shape: null. When Flint recorded the seller's agreement. 

### TaxConnectionSellerAttestationPreviousAttributes.disclosure_version

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 1.disclosure_version](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesseller_attestation-variant-1disclosure_version).

