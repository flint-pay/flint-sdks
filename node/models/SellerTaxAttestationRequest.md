[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SellerTaxAttestationRequest

The seller's agreement to the current automatic sales tax disclosure, recorded when connect succeeds.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disclosure_version` | Required | string | Current disclosure version from GET /v1/tax-connection. Send only after the seller agrees to every rendered statement. minLength: `1`. |

