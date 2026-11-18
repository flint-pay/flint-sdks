[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConnectTaxConnectionRequest

The request body for: Connect automatic tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Resource version last read by the caller. Omit to apply the change to the current resource. Format: `uint64`. minimum: `1`. |
| `legal_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) | Test mode only. Business address to use as the sandbox tax origin, overriding verified live details or the merchant profile on initial setup. Omit to use those defaults. Retries and reconnects retain the attested address; after the tax account exists, an explicit address must match it. Live mode rejects this field with INVALID_REQUEST. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `seller_attestation` | Required | [SellerTaxAttestationRequest](../models/SellerTaxAttestationRequest.md#sellertaxattestationrequest) | Presence records the seller's agreement to the named disclosure version. The seller's agreement to the current automatic sales tax disclosure, recorded when connect succeeds. |

