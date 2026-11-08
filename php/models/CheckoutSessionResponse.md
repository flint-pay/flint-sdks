[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionResponse

A response containing `CheckoutSession` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | Resource, collection, or operation result returned by this request. A session in which a buyer completes an order's payment. `data`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CheckoutSessionResponse.data

Resource, collection, or operation result returned by this request. A session in which a buyer completes an order's payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | An attempt to pay an order. `active_payment_attempt`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataactive_payment_attempt). |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. Buyer contact supplied with payment or saved during checkout. `buyer_contact`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatabuyer_contact). |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `can_save_payment_method` | Optional | boolean | Whether checkout offers the buyer the option to save the card they type for faster checkout at this merchant. When true and save_payment_method_requires_verification is false, PayOrder accepts save_payment_method: true for one newly collected card. False when the merchant turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an available payment option, the checkout collects an invoice, a subscription, or a return, or the checkout acts for no customer and Flint cannot email the buyer a verification code. Returned only to the checkout credential; never in webhook payloads. |
| `can_save_payment_method_with_phone` | Optional | boolean | Whether the buyer can save the card they type by giving a US or Canadian mobile phone number with the payment, in save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True while Flint can send texts and either save_payment_method_requires_verification is true, so the number replaces confirming an email before paying, or the checkout acts for the customer whose email the buyer confirmed with this credential, so the number joins that customer's saved details once the buyer confirms it. Returned only to the checkout credential; never in webhook payloads. |
| `checkout_session_id` | Required | string | Unique identifier for this checkout session, prefixed `cs_`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `client_reference` | Required | string or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: `1`. maxLength: `255`. |
| `closed_reason_message` | Optional | string | The note supplied when the checkout session was closed. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `custom_field_answers` | Required | Array of (object and Alternative shapes (see declared variants)) | The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. maxItems: `20`. `custom_field_answers[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatacustom_field_answers). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | The custom text this session shows in checkout. Custom text shown in checkout: an order summary message and a shipping address label. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatacustomer). |
| `customer_id` | Optional | string | The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_prefill` | Optional | [CheckoutCustomerPrefill](../models/CheckoutCustomerPrefill.md#checkoutcustomerprefill) | Contact and default addresses of the customer the checkout acts for, with the recipient name on its default shipping address: the customer the merchant created the session for, or the customer whose email the buyer confirmed in it. Present on GET and PATCH responses while the session is open and acts for a customer. Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the checkout credential; never in webhook payloads. Details the buyer's checkout can prefill from the customer it acts for. |
| `delivery` | Optional | [CheckoutDerivedDeliveryResource](../models/CheckoutDerivedDeliveryResource.md#checkoutderiveddeliveryresource) | Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input requirements, and evaluation status. `delivery`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadelivery). |
| `delivery_method_ids` | Required | Array of string | Immutable delivery method assignment captured when the checkout was created. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_selection_required` | Required | boolean | Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_in_seconds` | Optional | integer | The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. Format: `int64`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_challenge` | Optional | [CheckoutGiftCardChallenge](../models/CheckoutGiftCardChallenge.md#checkoutgiftcardchallenge) | Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. `gift_card_challenge`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatagift_card_challenge). |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. `invoice`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatainvoice). |
| `invoice_id` | Optional | string | ID of the invoice a session of type `invoice` collects payment for. Absent for other types. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `is_in_recovery` | Required | boolean | Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. |
| `legal` | Optional | [CheckoutLegalConfig](../models/CheckoutLegalConfig.md#checkoutlegalconfig) | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `merchant_icon` | Optional | [Image](../models/Image.md#image) | The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and webhooks omit it. An image with its URL, size, and alt text. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `merchant_logo` | Optional | [Image](../models/Image.md#image) | The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and webhooks omit it. An image with its URL, size, and alt text. |
| `merchant_name` | Optional | string | The merchant's business name, which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it. |
| `merchant_support` | Optional | [CheckoutMerchantSupport](../models/CheckoutMerchantSupport.md#checkoutmerchantsupport) | How the buyer can reach the merchant for help: the support email, phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at least one of them. Show it where your checkout tells the buyer to contact the merchant, such as an expired or closed checkout, or your receipt. Returned only to the checkout credential; never in webhook payloads. The merchant's support contact. Each field is omitted when the merchant has not set it. `merchant_support`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatamerchant_support). |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedataorder). |
| `order_id` | Optional | string | ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `page_origin` | Optional | string | Origin of the page that renders this embedded checkout. Omitted when not set. |
| `payment_collection` | Optional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `payment_intent_ids` | Optional | Array of string | IDs of the payment intents for the session's order. Absent when the order has none. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) | Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedatapayment_intents). |
| `payment_link` | Optional | [ExpandedPaymentLinkSummary](../models/ExpandedPaymentLinkSummary.md#expandedpaymentlinksummary) or null | Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. `payment_link`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_link). |
| `payment_link_id` | Optional | string | ID of the payment link the session was started from. Absent when it was not started from a payment link. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_image` | Optional | [Image](../models/Image.md#image) | The current image of the payment link that opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses and webhooks omit it. An image with its URL, size, and alt text. |
| `payment_method_save` | Optional | [CheckoutPaymentMethodSave](../models/CheckoutPaymentMethodSave.md#checkoutpaymentmethodsave) | The card the buyer saved with this checkout's payment by giving a mobile phone number, and whether they confirmed it. Present on GET and PATCH responses after a payment that paid the order in full, or that was approved for the merchant to capture later, and saved a card this way. A checkout whose payment is approved stays open until the capture. Returned only to the checkout credential; never in webhook payloads. A card the buyer saved with the checkout's payment by giving a mobile phone number. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method. `payment_method_save`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_method_save). |
| `payment_return_url` | Optional | string | Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Configured payment options for merchant credentials; currently available payment options for the checkout credential. Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `prefill` | Optional | [CheckoutPrefill](../models/CheckoutPrefill.md#checkoutprefill) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `problems` | Required | Array of [CheckoutProblemResource](../models/CheckoutProblemResource.md#checkoutproblemresource) | Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `recovery_expires_at` | Optional | string or null | When the restricted payment-attempt recovery window ends. `null` when the session has no recovery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `recovery_payment_attempt_id` | Optional | string | Payment attempt that this checkout credential may recover while is_in_recovery is true. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. `redirects`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataredirects). |
| `save_payment_method_requires_verification` | Optional | boolean | Whether the buyer must confirm their email with a code before the checkout can save their card or use their saved cards. True when can_save_payment_method is true and the checkout acts for no customer for this credential: the merchant created it without one, and either the buyer has not confirmed an email with this credential, or the customer whose email they confirmed has since changed that email or been deleted. A credential other than the one a confirmation returned, such as the hosted checkout link opened on another device, reads true. Send the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout acts for a customer, and whenever can_save_payment_method is false. Returned only to the checkout credential; never in webhook payloads. |
| `save_payment_method_types` | Optional | Array of string | What save_payment_method keeps, present when can_save_payment_method is true: card, a card the buyer types into checkout. Show the save option with that payment method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token created with setup_future_usage none, still pays, and its payment attempt's payment_method_save reports not_saved. The values can grow. Returned only to the checkout credential; never in webhook payloads. Items values: `"card"`. |
| `setup_collection` | Optional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `show_flint_mark` | Optional | boolean | Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it. |
| `status` | Required | string | Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. |
| `subscription_plan_id` | Optional | string | ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTerms](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptionterms) | Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. `subscription_terms`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_terms). |
| `superseding_checkout_session_id` | Optional | string | ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Items values: `"close"`. |
| `surface` | Required | string | How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; an embedded one is rendered on your own page. Values: `"hosted"`, `"embedded"`. |
| `tax` | Optional | [CheckoutSessionTax](../models/CheckoutSessionTax.md#checkoutsessiontax) | The session's tax settings. Omitted when the session sets none. Tax settings of a checkout session: whether it collects tax and any tax location the merchant fixed. |
| `terminal_reason` | Optional | string | Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and embedded sessions open. A session already past expires_at ends with expired before the edit is applied. Values: [11 declared values](BuyerCheckoutSessionInput.md#buyercheckoutsessioninput-terminal_reason-values). |
| `theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) | The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | The tip options this session offers the buyer. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the session collects payment for, fixed at creation. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Optional | string | Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay. Present only for hosted sessions read with a merchant credential that can manage checkout sessions. Launch results include it for hosted sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted for embedded sessions. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### CheckoutSessionResponse.data.active_payment_attempt

An attempt to pay an order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_redemptions` | Required | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) | `gift_card_redemptions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions). |
| `is_resumable` | Required | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error). |
| `mode` | Required | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Required | string | Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `payment_intents` | Required | Array of [PaymentAttemptPaymentIntent](../models/PaymentAttemptPaymentIntent.md#paymentattemptpaymentintent) | `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intents). |
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card saved with a mobile phone number. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Required | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | `pending_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions). |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Values: [10 declared values](#checkoutsessionresponsedataactive_payment_attempt-status-values). |
| `status_reason` | Optional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [27 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

#### CheckoutSessionResponse.data.active_payment_attempt status values

- `"processing"`
- `"requires_action"`
- `"requires_capture"`
- `"partially_succeeded"`
- `"requires_retry"`
- `"finalizing"`
- `"succeeded"`
- `"failed"`
- `"expired"`
- `"canceled"`

### CheckoutSessionResponse.data.active_payment_attempt.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### CheckoutSessionResponse.data.active_payment_attempt.last_payment_error

Field definitions: [OrderResponse.data.active_payment_attempt.last_payment_error](../models/OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error).

### CheckoutSessionResponse.data.active_payment_attempt.payment_intents[]

Field definitions: [OrderResponse.data.active_payment_attempt.payment_intents[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intents).

### CheckoutSessionResponse.data.active_payment_attempt.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### CheckoutSessionResponse.data.buyer_contact

Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. Buyer contact supplied with payment or saved during checkout.

Field definitions: [shared fields](CheckoutBuyerContactInput.md#checkoutbuyercontactinput).

### CheckoutSessionResponse.data.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### CheckoutSessionResponse.data.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### CheckoutSessionResponse.data.delivery

Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input requirements, and evaluation status.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_reasons` | Required | Array of string |  |
| `choice_groups` | Required | Array of [DeliveryQuoteChoiceGroupResource](../models/DeliveryQuoteChoiceGroupResource.md#deliveryquotechoicegroupresource) | `choice_groups[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groups). |
| `delivery_quote_id` | Optional | string | Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `delivery_selection_id` | Required | string or null | Current delivery selection ID after reconciliation, or null when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Always present with an API key or dashboard credential. `merchant_diagnostics[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics). |

### CheckoutSessionResponse.data.delivery.choice_groups[]

One group of order items in a delivery quote, with the delivery options the buyer can choose, its availability status, and any input still needed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResource](../models/DeliveryAddressAdvisoryResource.md#deliveryaddressadvisoryresource) | Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. |
| `allowed_types` | Optional | Array of string |  |
| `availability_status` | Required | string | Values: `"ready"`, `"needs_input"`, `"needs_checkout_context"`, `"unavailable"`. |
| `candidate_outcomes` | Optional | Map of (object and Alternative shapes (see declared variants)) | `candidate_outcomes{}`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomes). |
| `delivery_choice_group_id` | Required | string | Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource) | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs). |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `line_items` | Required | Array of [DeliveryQuoteLineItemResource](../models/DeliveryQuoteLineItemResource.md#deliveryquotelineitemresource) | `line_items[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupsline_items). |
| `method_types` | Required | Array of string | Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `options` | Required | Array of [DeliveryOptionProjection](../models/DeliveryOptionProjection.md#deliveryoptionprojection) | `options[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoption). |
| `previously_selected_delivery_method_id` | Optional | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `stable_key` | Required | string |  |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}

The result of evaluating one delivery method for a choice group, selected by `type`: available with an option, unavailable, input required, cannot calculate, or requires checkout context.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResource](../models/DeliveryAddressAdvisoryResource.md#deliveryaddressadvisoryresource) |  |
| `failure_category` | Conditional | string | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). |
| `input_requirements` | Conditional | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `option` | Conditional | [DeliveryOptionProjection](../models/DeliveryOptionProjection.md#deliveryoptionprojection) | A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. `option`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoption). |
| `retryable` | Conditional | boolean |  |
| `type` | Required | string | Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. |
| `unavailable_reason` | Conditional | string | Why the method is unavailable and the action that can make it eligible. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [8 declared values](#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomes-unavailable_reason-values). |

#### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{} unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{} variant 1: `type` = `"available"`

oneOf with type: "available": The `available` variant of `DeliveryCandidateOutcomeResource`..

- Required: `option`.
- Optional: `failure_category`, `input_requirements`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"available"`.

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{} variant 2: `type` = `"unavailable"`

oneOf with type: "unavailable": The `unavailable` variant of `DeliveryCandidateOutcomeResource`..

- Required: `unavailable_reason`.
- Optional: `failure_category`, `input_requirements`, `option`, `retryable`.
- Constraints for `type`: Values: `"unavailable"`.

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{} variant 3: `type` = `"input_required"`

oneOf with type: "input_required": The `input_required` variant of `DeliveryCandidateOutcomeResource`..

- Required: `input_requirements`.
- Optional: `failure_category`, `option`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"input_required"`.

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{} variant 4: `type` = `"cannot_calculate"`

oneOf with type: "cannot_calculate": The `cannot_calculate` variant of `DeliveryCandidateOutcomeResource`..

- Required: `failure_category`, `retryable`.
- Optional: `input_requirements`, `option`, `unavailable_reason`.
- Constraints for `type`: Values: `"cannot_calculate"`.

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{} variant 5: `type` = `"requires_checkout_context"`

oneOf with type: "requires_checkout_context": The `requires_checkout_context` variant of `DeliveryCandidateOutcomeResource`..

- Optional: `failure_category`, `input_requirements`, `option`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"requires_checkout_context"`.

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]

An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Required | [DeliveryInputConstraint](../models/DeliveryInputConstraint.md#deliveryinputconstraint) | The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows. `constraint`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraint). |
| `delivery_choice_group_ids` | Optional | Array of string | Items: Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_input_requirement_id` | Required | string | Example: `"req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580"`. |
| `delivery_method_ids` | Optional | Array of string | Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_option_ids` | Optional | Array of string | Items: Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `field_path` | Required | string | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [20 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). |
| `purpose` | Required | string | Values: `"quote"`, `"selection"`, `"pickup_availability"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[].constraint

The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Optional | Array of string |  |
| `earliest_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `format` | Optional | string |  |
| `latest_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `maximum_length` | Optional | integer | Format: `int32`. |
| `minimum_length` | Optional | integer | Format: `int32`. |
| `offered_windows` | Optional | Array of [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource) | `offered_windows[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows). |
| `supported_countries` | Optional | Array of string | Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. |
| `type` | Required | string | Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[].constraint.offered_windows[]

A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_window_id` | Required | string | Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. |
| `end_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `start_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimate](../models/DeliveryArrivalEstimate.md#deliveryarrivalestimate) | The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. `arrival_estimate`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionarrival_estimate). |
| `buyer_instructions` | Required | [BuyerInstructionsConfig](../models/BuyerInstructionsConfig.md#buyerinstructionsconfig) | Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `consumed_by_delivery_selection_id` | Optional | string | Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `delivery_method_id` | Required | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Optional | string | Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `delivery_option_id` | Optional | string | Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `delivery_plan` | Required | [DeliveryPlan](../models/DeliveryPlan.md#deliveryplan) | Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. `delivery_plan`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptiondelivery_plan). |
| `description` | Optional | string |  |
| `display_position` | Required | integer | Format: `int32`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource) | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs). |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetails](../models/DeliveryLocalDeliveryDetails.md#deliverylocaldeliverydetails) | Details of a local delivery option: instructions and service level. |
| `name` | Required | string |  |
| `offered_windows` | Optional | Array of [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource) | `offered_windows[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows). |
| `pickup` | Optional | [DeliveryPickupDetails](../models/DeliveryPickupDetails.md#deliverypickupdetails) | Pickup details of a delivery option: the pickup mode and the pickup location. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement) | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. |
| `recommended` | Required | boolean |  |
| `shipment` | Optional | [DeliveryShipmentDetails](../models/DeliveryShipmentDetails.md#deliveryshipmentdetails) | Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `taxable` | Required | boolean |  |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_pricing` | Optional | string | Values: `"uniform"`, `"varies"`. |
| `window_selection` | Required | string | Values: `"none"`, `"offered"`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.arrival_estimate

The estimated arrival date range for a delivery option, as calendar dates in the option's timezone.

Field definitions: [shared fields](DeliveryArrivalEstimateInput.md#deliveryarrivalestimateinput).

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.delivery_plan

Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.

Field definitions: [shared fields](DeliveryPlanInput.md#deliveryplaninput).

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.execution_legs[]

One leg of a delivery choice group, identifying the origin Location the group's items leave from.

Field definitions: [shared fields](DeliveryQuoteExecutionLegResourceInput.md#deliveryquoteexecutionlegresourceinput).

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.offered_windows[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[].constraint.offered_windows[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows).

### CheckoutSessionResponse.data.delivery.choice_groups[].execution_legs[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.execution_legs[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs).

### CheckoutSessionResponse.data.delivery.choice_groups[].input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### CheckoutSessionResponse.data.delivery.choice_groups[].line_items[]

An order line item, or one bundle component of it, and the quantity covered by a delivery choice group.

Field definitions: [shared fields](DeliveryPickupAvailabilityQuantityResourceInput.md#deliverypickupavailabilityquantityresourceinput).

### CheckoutSessionResponse.data.delivery.choice_groups[].options[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoption).

### CheckoutSessionResponse.data.delivery.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### CheckoutSessionResponse.data.delivery.merchant_diagnostics[]

A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`. |
| `delivery_method_id` | Optional | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Optional | string | Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `diagnostic_id` | Required | string | Example: `"ddiag_01KEZF7C002JPVD08857RGDGPC"`. |
| `eligibility_mismatches` | Optional | Array of [DeliveryEligibilityMismatch](../models/DeliveryEligibilityMismatch.md#deliveryeligibilitymismatch) | Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `outcome` | Required | string | Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. |
| `recommended_action` | Required | string | Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`. |
| `retryable` | Required | boolean |  |
| `scope` | Required | string | Values: `"method"`. |
| `summary` | Required | string |  |

### CheckoutSessionResponse.data.gift_card_challenge

Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.

Field definitions: [shared fields](CheckoutGiftCardChallengeInput.md#checkoutgiftcardchallengeinput).

### CheckoutSessionResponse.data.invoice

Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice.

Field definitions: [shared fields](PaymentIntentResponse.md#paymentintentresponsedatainvoice).

### CheckoutSessionResponse.data.invoice variant 1

anyOf ExpandedInvoiceSummary: An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded..

- Required: `invoice_id`, `is_overdue`, `outstanding_money`, `paid_money`, `refunded_money`, `status`, `supported_actions`, `total_money`.
- Optional: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_number`, `order_id`, `refund_status`, `updated_at`.

### CheckoutSessionResponse.data.invoice variant 2

anyOf variant 2.

- Undeclared: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `outstanding_money`, `paid_money`, `refund_status`, `refunded_money`, `status`, `supported_actions`, `total_money`, `updated_at`.
- Value shape: null. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. 

### CheckoutSessionResponse.data.merchant_support

How the buyer can reach the merchant for help: the support email, phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at least one of them. Show it where your checkout tells the buyer to contact the merchant, such as an expired or closed checkout, or your receipt. Returned only to the checkout credential; never in webhook payloads. The merchant's support contact. Each field is omitted when the merchant has not set it.

Field definitions: [shared fields](CheckoutMerchantSupportInput.md#checkoutmerchantsupportinput).

### CheckoutSessionResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CheckoutSessionResponse.data.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### CheckoutSessionResponse.data.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### CheckoutSessionResponse.data.payment_link

Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Conditional | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Conditional | string | Text about what the link sells, returned to buyers when they open it. |
| `name` | Conditional | string | Name of the payment link. |
| `payment_link_id` | Conditional | string | Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_type` | Conditional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `status` | Conditional | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Conditional | string | Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Conditional | string | URL buyers open to use the link. |

### CheckoutSessionResponse.data.payment_link variant 1

anyOf ExpandedPaymentLinkSummary: A payment link's summary fields, including name, type, status, and URL, returned when the payment link is expanded..

- Required: `completed_count`, `name`, `payment_link_id`, `status`.
- Optional: `created_at`, `description`, `payment_link_type`, `subscription_plan_id`, `updated_at`, `url`.

### CheckoutSessionResponse.data.payment_link variant 2

anyOf variant 2.

- Undeclared: `completed_count`, `created_at`, `description`, `name`, `payment_link_id`, `payment_link_type`, `status`, `subscription_plan_id`, `updated_at`, `url`.
- Value shape: null. Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. 

### CheckoutSessionResponse.data.payment_method_save

The card the buyer saved with this checkout's payment by giving a mobile phone number, and whether they confirmed it. Present on GET and PATCH responses after a payment that paid the order in full, or that was approved for the merchant to capture later, and saved a card this way. A checkout whose payment is approved stays open until the capture. Returned only to the checkout credential; never in webhook payloads. A card the buyer saved with the checkout's payment by giving a mobile phone number. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method.

Field definitions: [shared fields](CheckoutPaymentMethodSaveInput.md#checkoutpaymentmethodsaveinput).

### CheckoutSessionResponse.data.redirects

Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.

Field definitions: [shared fields](CheckoutRedirectsInput.md#checkoutredirectsinput).

### CheckoutSessionResponse.data.subscription_terms

Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing intervals between recurring charges. Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | minItems: `1`. |
| `contract_term_months` | Optional | integer | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. |
| `delivery_required` | Required | boolean | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of object | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_termsline_items). |
| `plan_name` | Required | string | Plan name shown to the buyer. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `quantity_options` | Required | Array of integer | minItems: `1`. Items: Format: `int32`. |
| `recurring_shipping` | Optional | [CheckoutSubscriptionRecurringShipping](../models/CheckoutSubscriptionRecurringShipping.md#checkoutsubscriptionrecurringshipping) | Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount. |
| `recurring_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge for one billing interval before tax: each line's unit price times its quantity, plus modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_plan_id` | Required | string | Flint subscription plan ID the terms come from. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Optional | integer | Days before the first recurring charge, when the plan has a trial. Format: `int32`. |

### CheckoutSessionResponse.data.subscription_terms.line_items[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Required | boolean | Whether the buyer may adjust this line quantity. |
| `max_quantity` | Required | integer | Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `min_quantity` | Required | integer | Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `name` | Required | string | The captured line name. |
| `quantity` | Required | integer | The line quantity, before the subscription quantity multiplier. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `subscription_plan_line_item_id` | Optional | string | The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The captured unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CheckoutSessionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

