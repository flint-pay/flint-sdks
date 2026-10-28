[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConnectTaxConnectionRequestInput

The request body for: Connect automatic tax.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Omit to apply the change to the current resource. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `seller_attestation` | Required | [SellerTaxAttestationRequestInput](../models/SellerTaxAttestationRequestInput.md#sellertaxattestationrequestinput) | Presence records the seller's agreement to the named disclosure version. The seller's agreement to the current automatic sales tax disclosure, recorded when connect succeeds. |

