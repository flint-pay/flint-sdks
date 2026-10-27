[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GrantOrganizationMembershipRequest

The request body for: Grant organization membership.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Required | string | Values: `"admin"`, `"operator"`, `"viewer"`. |
| `user_id` | Required | string | minLength: `1`. |

