[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentity

Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Required | string or null | minLength: `1`. maxLength: `255`. |
| `registered_address` | Required | [Address](../models/Address.md#address) or null | Replaced as a whole: send every field you want to keep. `registered_address`: [declared alternatives](../models/TaxIdentity.md#taxidentityregistered_address). |
| `tax_ids` | Required | Array of [DocumentTaxID](../models/DocumentTaxID.md#documenttaxid) | maxItems: `20`. |

### TaxIdentity.registered_address

Replaced as a whole: send every field you want to keep.

Field definitions: [shared fields](SubscriptionDeliveryDestination.md#subscriptiondeliverydestinationaddress).

### TaxIdentity.registered_address variant 1

anyOf variant 1: A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients..

- Required: `city`, `country`, `line1`, `postal_code`, `state`.
- Optional: `line2`.

### TaxIdentity.registered_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Replaced as a whole: send every field you want to keep. 

