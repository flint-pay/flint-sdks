[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileAssignment

Result of assigning a delivery profile to catalog items that had none, with counts of the product variants and bundle components updated.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components_updated` | Required | integer | Number of previously unconfigured catalog records updated. Format: `int64`. minimum: `0`. |
| `delivery_profile_id` | Required | string | Delivery profile assigned to each updated catalog item. |
| `product_variants_updated` | Required | integer | Number of previously unconfigured catalog records updated. Format: `int64`. minimum: `0`. |

