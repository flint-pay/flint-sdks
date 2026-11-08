[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFileRequest

The request body for: Create a file.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `content_type` | Required | string | Media type of the image you will upload. Values: `"image/jpeg"`, `"image/png"`, `"image/webp"`. |
| `purpose` | Required | string | What the image will be used for. Creating or completing merchant_logo and merchant_icon files changes shared branding and requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required. Partner install tokens need the purpose's scope too; merchant_logo and merchant_icon need merchants.profile.write and a live install token. Values: `"product"`, `"product_variant"`, `"bundle"`, `"payment_link"`, `"subscription_plan"`, `"merchant_logo"`, `"merchant_icon"`. |
| `size_bytes` | Required | integer | Size of the image you will upload, in bytes, from 1 to 5,242,880 (5 MiB). Format: `int64`. minimum: `1`. maximum: `5242880`. |

