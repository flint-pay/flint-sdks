[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFileRequestInput

The request body for: Create a file.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `content_type` | Required | string | Values: `"image/jpeg"`, `"image/png"`, `"image/webp"`. |
| `purpose` | Required | string | What the image will be used for. Partner installs support the five commerce purposes; merchant_logo and merchant_icon require merchants.profile.write, which partner installs cannot grant, and return INSUFFICIENT_SCOPE with scope_requirement. Values: `"product"`, `"product_variant"`, `"bundle"`, `"payment_link"`, `"subscription_plan"`, `"merchant_logo"`, `"merchant_icon"`. |
| `size_bytes` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `5242880`. |

