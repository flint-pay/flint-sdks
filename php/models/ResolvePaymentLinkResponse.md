[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkResponse

A response containing `BuyerCheckoutSessionWithSecret` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCheckoutSessionWithSecret](../models/BuyerCheckoutSessionWithSecret.md#buyercheckoutsessionwithsecret) | The buyer checkout session and its checkout credential, created from the payment link. The checkout session with any newly issued checkout credential. Hosted launches return url without checkout_auth_token. Embedded launches return checkout_auth_token without url. Customer binding confirmation returns its newly issued credential for either surface. A session in which a buyer completes an order's payment. A session in which a buyer completes an order's payment. `data`: [field definitions](../models/ResolvePaymentLinkResponse.md#resolvepaymentlinkresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ResolvePaymentLinkResponse.data

The buyer checkout session and its checkout credential, created from the payment link. The checkout session with any newly issued checkout credential. Hosted launches return url without checkout_auth_token. Embedded launches return checkout_auth_token without url. Customer binding confirmation returns its newly issued credential for either surface. A session in which a buyer completes an order's payment.

Field definitions: [shared fields](BuyerReturnResolutionCheckoutSessionResponse.md#buyerreturnresolutioncheckoutsessionresponsedata).

### ResolvePaymentLinkResponse.data.active_payment_attempt

Field definitions: [BuyerReturnResolutionCheckoutSessionResponse.data.active_payment_attempt](../models/BuyerReturnResolutionCheckoutSessionResponse.md#buyerreturnresolutioncheckoutsessionresponsedataactive_payment_attempt).

### ResolvePaymentLinkResponse.data.buyer_contact

Field definitions: [CheckoutSessionResponse.data.buyer_contact](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatabuyer_contact).

### ResolvePaymentLinkResponse.data.delivery

Field definitions: [CheckoutSessionResponse.data.delivery](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadelivery).

### ResolvePaymentLinkResponse.data.gift_card_challenge

Field definitions: [CheckoutSessionResponse.data.gift_card_challenge](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatagift_card_challenge).

### ResolvePaymentLinkResponse.data.merchant_support

Field definitions: [CheckoutSessionResponse.data.merchant_support](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatamerchant_support).

### ResolvePaymentLinkResponse.data.payment_method_save

Field definitions: [CheckoutSessionResponse.data.payment_method_save](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_method_save).

### ResolvePaymentLinkResponse.data.redirects

Field definitions: [CheckoutSessionResponse.data.redirects](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataredirects).

### ResolvePaymentLinkResponse.data.subscription_terms

Field definitions: [CheckoutSessionResponse.data.subscription_terms](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_terms).

### ResolvePaymentLinkResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

