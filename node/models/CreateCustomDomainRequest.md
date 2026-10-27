[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomDomainRequest

The request body for: Create a custom domain.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `hostname` | Required | string | Hostname to configure, such as checkout.example.com or account.example.com. minLength: `1`. maxLength: `253`. |
| `type` | Required | string | Whether the hostname serves checkout pages or the customer account Flint hosts. Values: `"checkout"`, `"customer_account"`. |

