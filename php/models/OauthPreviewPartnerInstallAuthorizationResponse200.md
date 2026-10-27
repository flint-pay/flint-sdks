[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OauthPreviewPartnerInstallAuthorizationResponse200

A response containing `PartnerAuthorizePreview` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAuthorizePreview](../models/PartnerAuthorizePreview.md#partnerauthorizepreview) | What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

