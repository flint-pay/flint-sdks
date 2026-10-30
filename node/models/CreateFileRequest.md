[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFileRequest

The request body for: Create a file.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `content_type` | Required | string | Values: `"image/jpeg"`, `"image/png"`, `"image/webp"`. |
| `purpose` | Required | string | What the image will be used for. Creating or completing merchant_logo and merchant_icon files changes shared branding and requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required. Partner installs support the five commerce purposes; merchant_logo and merchant_icon require merchants.profile.write, which partner installs cannot grant, so live install credentials receive INSUFFICIENT_SCOPE with scope_requirement. Values: `"product"`, `"product_variant"`, `"bundle"`, `"payment_link"`, `"subscription_plan"`, `"merchant_logo"`, `"merchant_icon"`. |
| `size_bytes` | Required | integer | Format: `int64`. minimum: `1`. maximum: `5242880`. |

