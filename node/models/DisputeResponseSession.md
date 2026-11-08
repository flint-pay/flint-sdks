[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSession

A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived `client_session` for the embedded response component.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [DisputeResponseSessionClientSession](../models/DisputeResponseSessionClientSession.md#disputeresponsesessionclientsession) | The browser session for the response component. It appears only in this response, never on the dispute, in lists, or in webhooks. Browser session for responding to a dispute, with its expiry and the Stripe details needed to load the embedded response component. |
| `dispute_id` | Required | string | ID of the dispute the session is for. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |

