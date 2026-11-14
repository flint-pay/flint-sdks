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
| `active_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. An attempt to pay an order. `active_payment_attempt`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataactive_payment_attempt). |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. Buyer contact supplied with payment or saved during checkout. `buyer_contact`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatabuyer_contact). |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `can_apply_promotion_code` | Required | boolean | Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. |
| `can_save_payment_method` | Optional | boolean | Whether checkout offers the buyer the option to save the card they type for faster checkout at this merchant. When true, PayOrder accepts save_payment_method: true for one newly collected card. False when the merchant turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an available payment option, the checkout collects an invoice, a subscription, or a return, or the checkout acts for no customer and Flint cannot email the buyer a verification code. Returned only to the checkout credential; never in webhook payloads. |
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
| `inventory_reservation_ids` | Optional | Array of string | Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. Items: Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
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
| `page_origin` | Optional | string | Origin of the page that renders this headless checkout. Omitted when not set. |
| `pay_to_new_address_requires_verification` | Optional | boolean | Whether at least one saved card this checkout lists would be refused for the current delivery destination because the paying credential last confirmed a code more than 15 minutes ago. Request a code with purpose pay_to_new_address, without email or channel, and confirm it with this credential before paying. A Flint wallet card can still pay to an address in that wallet while this is true for a store saved card. Pickup and orders that ship nothing never require this verification. Returned only to the checkout credential. Returned only to the checkout credential; never in webhook payloads. |
| `payment_collection` | Optional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `payment_intent_ids` | Optional | Array of string | IDs of the payment intents for the session's order. Absent when the order has none. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) | Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedatapayment_intents). |
| `payment_link` | Optional | [ExpandedPaymentLinkSummary](../models/ExpandedPaymentLinkSummary.md#expandedpaymentlinksummary) or null | Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. `payment_link`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_link). |
| `payment_link_id` | Optional | string | ID of the payment link the session was started from. Absent when it was not started from a payment link. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_image` | Optional | [Image](../models/Image.md#image) | The current image of the payment link that opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses and webhooks omit it. An image with its URL, size, and alt text. |
| `payment_method_save` | Optional | [CheckoutPaymentMethodSave](../models/CheckoutPaymentMethodSave.md#checkoutpaymentmethodsave) | The card the buyer saved pending with this checkout's payment, and whether they confirmed it. Present on GET and PATCH responses after a payment that paid the order in full, or that was approved for the merchant to capture later, and saved a card this way. Without a number, confirmation requires an emailed code. A checkout whose payment is approved stays open until the capture. Returned only to the checkout credential; never in webhook payloads. A card the buyer saved with this checkout's payment that waits for a code. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method. `payment_method_save`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_method_save). |
| `payment_return_url` | Optional | string | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Configured payment options for merchant credentials; currently available payment options for the checkout credential. Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `platform_fee` | Optional | [CheckoutSessionPlatformFee](../models/CheckoutSessionPlatformFee.md#checkoutsessionplatformfee) | The platform fee the partner app requested when it created the session with an install token. Each payment intent the session creates carries its own platform_fee, lowered to fit that payment. Absent when the session has none. The platform fee the partner app requested when it created the session. Each payment the session creates carries its own platform_fee, lowered to fit that payment. `platform_fee`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataplatform_fee). |
| `prefill` | Optional | [CheckoutPrefill](../models/CheckoutPrefill.md#checkoutprefill) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `problems` | Required | Array of [CheckoutProblemResource](../models/CheckoutProblemResource.md#checkoutproblemresource) | Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `recovery_expires_at` | Optional | string or null | When the restricted payment-attempt recovery window ends. `null` when the session has no recovery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `recovery_payment_attempt_id` | Optional | string | Payment attempt that this checkout credential may recover while is_in_recovery is true. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataredirects). |
| `refunds` | Optional | Array of [BuyerRefund](../models/BuyerRefund.md#buyerrefund) | All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. `refunds[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefunds). |
| `save_payment_method_requires_verification` | Optional | boolean | Whether saving a new card or using saved cards needs the buyer to confirm their email with a code. A new card can be saved pending with the payment and confirmed on the receipt; using saved cards still needs the code before paying. True when can_save_payment_method is true and the checkout acts for no customer for this credential: the merchant created it without one, and either the buyer has not confirmed an email with this credential, or the customer whose email they confirmed has since changed that email or been deleted. A credential other than the one a confirmation returned, such as the hosted checkout link opened on another device, reads true. Send the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout acts for a customer, and whenever can_save_payment_method is false. Returned only to the checkout credential; never in webhook payloads. |
| `save_payment_method_types` | Optional | Array of string | What save_payment_method keeps, present when can_save_payment_method is true: card, a card the buyer types into checkout. Show the save option with that payment method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token created with setup_future_usage none, still pays, and its payment attempt's payment_method_save reports not_saved. The values can grow. Returned only to the checkout credential; never in webhook payloads. Items values: `"card"`. |
| `setup_collection` | Optional | [SetupCollection](../models/SetupCollection.md#setupcollection) | Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client guidance for saving a payment method on the merchant's connected account. |
| `show_flint_mark` | Optional | boolean | Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it. |
| `status` | Required | string | Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. |
| `subscription_plan_id` | Optional | string | ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `subscription_terms` | Optional | [CheckoutSubscriptionTerms](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptionterms) | Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. `subscription_terms`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_terms). |
| `superseding_checkout_session_id` | Optional | string | ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Items values: `"close"`. |
| `surface` | Required | string | How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Values: `"hosted"`, `"headless"`. |
| `tax` | Optional | [CheckoutSessionTax](../models/CheckoutSessionTax.md#checkoutsessiontax) | The session's tax settings. Omitted when the session sets none. Tax settings of a checkout session: whether it collects tax and any tax location the merchant fixed. |
| `terminal_reason` | Optional | string | Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Values: [11 declared values](BuyerCheckoutSessionInput.md#buyercheckoutsessioninput-terminal_reason-values). |
| `theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) | The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | The tip options this session offers the buyer. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `type` | Required | string | What the session collects payment for, fixed at creation. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Optional | string | Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay. Present only for hosted sessions read with a merchant credential that can manage checkout sessions. Launch results include it for hosted sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted for headless sessions. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### CheckoutSessionResponse.data.active_payment_attempt

The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. An attempt to pay an order.

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
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Required | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | `pending_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions). |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Values: [10 declared values](#checkoutsessionresponsedataactive_payment_attempt-status-values). |
| `status_reason` | Optional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [30 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

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
| `buyer_reasons` | Required | Array of string | Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. |
| `choice_groups` | Required | Array of [DeliveryQuoteChoiceGroupResource](../models/DeliveryQuoteChoiceGroupResource.md#deliveryquotechoicegroupresource) | Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. `choice_groups[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groups). |
| `delivery_quote_id` | Optional | string | ID of the checkout's current delivery quote. Omitted until the checkout has one. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `delivery_selection_id` | Required | string or null | Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `evaluation_status` | Required | string | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Always present with an API key or dashboard credential. `merchant_diagnostics[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics). |

### CheckoutSessionResponse.data.delivery.choice_groups[]

One group of order items in a delivery quote, with the delivery options the buyer can choose, its availability status, and any input still needed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResource](../models/DeliveryAddressAdvisoryResource.md#deliveryaddressadvisoryresource) | Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. |
| `allowed_types` | Optional | Array of string | Delivery types permitted by this group's items. |
| `availability_status` | Required | string | Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`. |
| `candidate_outcomes` | Optional | Map of (object and Alternative shapes (see declared variants)) | Evaluation result for each candidate delivery method, keyed by its method ID. `candidate_outcomes{}`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomes). |
| `delivery_choice_group_id` | Required | string | Identifier used to choose one option for this group. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `evaluation_status` | Required | string | How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource) | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs). |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs this group's delivery methods need before they can be priced or selected. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `line_items` | Required | Array of [DeliveryQuoteLineItemResource](../models/DeliveryQuoteLineItemResource.md#deliveryquotelineitemresource) | Order line items, or bundle components, this group covers, with the quantity covered. `line_items[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupsline_items). |
| `method_types` | Required | Array of string | Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `options` | Required | Array of [DeliveryOptionProjection](../models/DeliveryOptionProjection.md#deliveryoptionprojection) | Delivery options the buyer can choose now. Items: A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. `options[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupsoptions). |
| `previously_selected_delivery_method_id` | Optional | string | Method chosen for this group in the previous selection. Omitted when there is none. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `stable_key` | Required | string | Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}

The result of evaluating one delivery method for a choice group, selected by `type`: available with an option, unavailable, input required, cannot calculate, or requires checkout context.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResource](../models/DeliveryAddressAdvisoryResource.md#deliveryaddressadvisoryresource) | Address verification results that affected this method. Omitted when there are none. |
| `expected_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `failure_category` | Conditional | string | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). |
| `input_requirements` | Conditional | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `option` | Conditional | [DeliveryOptionProjection](../models/DeliveryOptionProjection.md#deliveryoptionprojection) | The option the method produced. Set only when `type` is `available`. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. `option`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoption). |
| `retryable` | Conditional | boolean | Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. |
| `type` | Required | string | What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. |
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

- Condition: not (present(`expected_amount_money`)).
- Required: `option`.
- Optional: `failure_category`, `input_requirements`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"available"`.

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{} variant 2: `type` = `"unavailable"`

oneOf with type: "unavailable": The `unavailable` variant of `DeliveryCandidateOutcomeResource`..

- Condition: not (present(`expected_amount_money`)).
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

- Condition: not (present(`expected_amount_money`)).
- Required: `failure_category`, `retryable`.
- Optional: `input_requirements`, `option`, `unavailable_reason`.
- Constraints for `type`: Values: `"cannot_calculate"`.

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{} variant 5: `type` = `"requires_checkout_context"`

oneOf with type: "requires_checkout_context": The `requires_checkout_context` variant of `DeliveryCandidateOutcomeResource`..

- Condition: not (present(`expected_amount_money`)).
- Optional: `failure_category`, `input_requirements`, `option`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"requires_checkout_context"`.

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]

An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Required | [DeliveryInputConstraint](../models/DeliveryInputConstraint.md#deliveryinputconstraint) | The rules the input must follow. The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows. `constraint`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraint). |
| `delivery_choice_group_ids` | Optional | Array of string | Choice groups that need this input. Items: Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_input_requirement_id` | Required | string | Unique ID of this requirement. Example: `"req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580"`. |
| `delivery_method_ids` | Optional | Array of string | Delivery methods that need this input. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_option_ids` | Optional | Array of string | Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. Items: Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `field_path` | Required | string | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [20 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). |
| `purpose` | Required | string | When the input is needed. Values: `"quote"`, `"selection"`, `"pickup_availability"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[].constraint

The rules the input must follow. The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Optional | Array of string | Values the input must be one of. |
| `earliest_at` | Optional | string | Earliest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `format` | Optional | string | Format the input must follow. |
| `latest_at` | Optional | string | Latest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `maximum_length` | Optional | integer | Most characters the input can have. Format: `int32`. |
| `minimum_length` | Optional | integer | Fewest characters the input can have. Format: `int32`. |
| `offered_windows` | Optional | Array of [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource) | Delivery windows the buyer can choose from. `offered_windows[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows). |
| `supported_countries` | Optional | Array of string | Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. |
| `type` | Required | string | Kind of input the requirement asks for. Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[].constraint.offered_windows[]

A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of delivery in this window. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_window_id` | Required | string | ID of this window. The buyer sends it to choose the window. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. |
| `end_at` | Required | string | End of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `start_at` | Required | string | Start of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option

The option the method produced. Set only when `type` is `available`. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Delivery charge for this option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimate](../models/DeliveryArrivalEstimate.md#deliveryarrivalestimate) | Estimated arrival dates. Omitted when the method makes no timing promise. The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. `arrival_estimate`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionarrival_estimate). |
| `buyer_instructions` | Required | [BuyerInstructionsConfig](../models/BuyerInstructionsConfig.md#buyerinstructionsconfig) | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `consumed_by_delivery_selection_id` | Optional | string | ID of the delivery selection that chose this option. Omitted until a selection does. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `delivery_method_id` | Required | string | ID of the delivery method that produced this option. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Optional | string | ID of the method revision this option was priced from. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `delivery_option_id` | Optional | string | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `delivery_plan` | Required | [DeliveryPlan](../models/DeliveryPlan.md#deliveryplan) | How the option divides the items into deliveries. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. `delivery_plan`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptiondelivery_plan). |
| `description` | Optional | string | Buyer-visible description of the option. Omitted when the method has none. |
| `display_position` | Required | integer | Position in which this option displays among the others. Lower values display first. Format: `int32`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource) | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs). |
| `expires_at` | Optional | string | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetails](../models/DeliveryLocalDeliveryDetails.md#deliverylocaldeliverydetails) | Local delivery details. Set only when `type` is `local_delivery`. Details of a local delivery option: instructions and service level. |
| `name` | Required | string | Buyer-visible name of the option. |
| `offered_windows` | Optional | Array of [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource) | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows). |
| `pickup` | Optional | [DeliveryPickupDetails](../models/DeliveryPickupDetails.md#deliverypickupdetails) | Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the pickup mode and the pickup location. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement) | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. |
| `recommended` | Required | boolean | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. |
| `shipment` | Optional | [DeliveryShipmentDetails](../models/DeliveryShipmentDetails.md#deliveryshipmentdetails) | Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `taxable` | Required | boolean | Whether tax applies to the delivery charge. |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. |
| `type` | Required | string | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_pricing` | Optional | string | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. |
| `window_selection` | Required | string | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. |
| `window_start_at` | Optional | string | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.arrival_estimate

Estimated arrival dates. Omitted when the method makes no timing promise. The estimated arrival date range for a delivery option, as calendar dates in the option's timezone.

Field definitions: [shared fields](DeliveryArrivalEstimateInput.md#deliveryarrivalestimateinput).

### CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.delivery_plan

How the option divides the items into deliveries. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.

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

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Delivery charge for this option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimate](../models/DeliveryArrivalEstimate.md#deliveryarrivalestimate) | Estimated arrival dates. Omitted when the method makes no timing promise. The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. `arrival_estimate`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionarrival_estimate). |
| `buyer_instructions` | Required | [BuyerInstructionsConfig](../models/BuyerInstructionsConfig.md#buyerinstructionsconfig) | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `consumed_by_delivery_selection_id` | Optional | string | ID of the delivery selection that chose this option. Omitted until a selection does. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `delivery_method_id` | Required | string | ID of the delivery method that produced this option. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Optional | string | ID of the method revision this option was priced from. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `delivery_option_id` | Required | string | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `delivery_plan` | Required | [DeliveryPlan](../models/DeliveryPlan.md#deliveryplan) | How the option divides the items into deliveries. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. `delivery_plan`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptiondelivery_plan). |
| `description` | Optional | string | Buyer-visible description of the option. Omitted when the method has none. |
| `display_position` | Required | integer | Position in which this option displays among the others. Lower values display first. Format: `int32`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource) | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs). |
| `expires_at` | Optional | string | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetails](../models/DeliveryLocalDeliveryDetails.md#deliverylocaldeliverydetails) | Local delivery details. Set only when `type` is `local_delivery`. Details of a local delivery option: instructions and service level. |
| `name` | Required | string | Buyer-visible name of the option. |
| `offered_windows` | Optional | Array of [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource) | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows). |
| `pickup` | Optional | [DeliveryPickupDetails](../models/DeliveryPickupDetails.md#deliverypickupdetails) | Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the pickup mode and the pickup location. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement) | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. |
| `recommended` | Required | boolean | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. |
| `shipment` | Optional | [DeliveryShipmentDetails](../models/DeliveryShipmentDetails.md#deliveryshipmentdetails) | Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `taxable` | Required | boolean | Whether tax applies to the delivery charge. |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. |
| `type` | Required | string | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_pricing` | Optional | string | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. |
| `window_selection` | Required | string | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. |
| `window_start_at` | Optional | string | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CheckoutSessionResponse.data.delivery.choice_groups[].options[].arrival_estimate

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.arrival_estimate](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionarrival_estimate).

### CheckoutSessionResponse.data.delivery.choice_groups[].options[].delivery_plan

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.delivery_plan](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptiondelivery_plan).

### CheckoutSessionResponse.data.delivery.choice_groups[].options[].execution_legs[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.execution_legs[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs).

### CheckoutSessionResponse.data.delivery.choice_groups[].options[].offered_windows[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[].constraint.offered_windows[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows).

### CheckoutSessionResponse.data.delivery.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### CheckoutSessionResponse.data.delivery.merchant_diagnostics[]

A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`. |
| `delivery_method_id` | Optional | string | ID of the method that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Optional | string | ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `diagnostic_id` | Required | string | ID to quote when you ask Flint about this diagnostic. Example: `"ddiag_01KEZF7C002JPVD08857RGDGPC"`. |
| `eligibility_mismatches` | Optional | Array of [DeliveryEligibilityMismatch](../models/DeliveryEligibilityMismatch.md#deliveryeligibilitymismatch) | Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. |
| `occurred_at` | Required | string | Time Flint recorded this diagnostic. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `outcome` | Required | string | What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. |
| `recommended_action` | Required | string | What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`. |
| `retryable` | Required | boolean | Whether trying again later can succeed. |
| `scope` | Required | string | What the diagnostic is about. Values: `"method"`. |
| `summary` | Required | string | Plain-language explanation for the merchant. |

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

The card the buyer saved pending with this checkout's payment, and whether they confirmed it. Present on GET and PATCH responses after a payment that paid the order in full, or that was approved for the merchant to capture later, and saved a card this way. Without a number, confirmation requires an emailed code. A checkout whose payment is approved stays open until the capture. Returned only to the checkout credential; never in webhook payloads. A card the buyer saved with this checkout's payment that waits for a code. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method.

Field definitions: [shared fields](CheckoutPaymentMethodSaveInput.md#checkoutpaymentmethodsaveinput).

### CheckoutSessionResponse.data.platform_fee

The platform fee the partner app requested when it created the session with an install token. Each payment intent the session creates carries its own platform_fee, lowered to fit that payment. Absent when the session has none. The platform fee the partner app requested when it created the session. Each payment the session creates carries its own platform_fee, lowered to fit that payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee the partner app requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `partner_app_id` | Required | string | The partner app that requested the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |

### CheckoutSessionResponse.data.redirects

Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.

Field definitions: [shared fields](CheckoutRedirectsInput.md#checkoutredirectsinput).

### CheckoutSessionResponse.data.refunds[]

Money returned against a collected payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded across all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_note_id` | Optional | string | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `customer`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundscustomer). |
| `customer_id` | Optional | string | ID of the customer on the refunded order or payment. Absent when neither has one. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `failure_reason` | Optional | string | A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`. |
| `idempotency_key` | Optional | string | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. |
| `invoice_id` | Optional | string | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation) | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations). |
| `order` | Optional | [BuyerExpandedOrderSummary](../models/BuyerExpandedOrderSummary.md#buyerexpandedordersummary) or null | The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `order`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundsorder). |
| `order_edit_id` | Optional | string | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Optional | string | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `payment_intent`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundspayment_intent). |
| `payment_intent_id` | Optional | string | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_refunds` | Optional | Array of [BuyerPaymentRefund](../models/BuyerPaymentRefund.md#buyerpaymentrefund) | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundspayment_refunds). |
| `pending_reason` | Required | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. |
| `processed_by` | Required | string | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. |
| `reason` | Required | string or null | `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`. |
| `reason_message` | Optional | string | Note explaining the refund, up to 1,024 characters. |
| `refund_id` | Required | string | Unique identifier for this refund, prefixed `ref_`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_reference` | Optional | string | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: `1`. maxLength: `255`. |
| `refunded_at` | Optional | string | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refunded_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Share of `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string | ID of the return this refund paid out. Present only on refunds issued by a return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_resolution_id` | Optional | string | ID of the return resolution that issued this refund. Present only on refunds issued by a return. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `status` | Required | string | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `succeeded_at` | Optional | string | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocation](../models/RefundTenderAllocation.md#refundtenderallocation) | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### CheckoutSessionResponse.data.refunds[].customer

The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedatacustomer).

### CheckoutSessionResponse.data.refunds[].customer variant 1

anyOf ExpandedCustomerSummary: A customer's summary fields, returned in place of a customer ID when the customer is expanded..

- Required: `customer_id`, `email`, `name`, `phone`, `status`.
- Optional: `created_at`, `updated_at`.

### CheckoutSessionResponse.data.refunds[].customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. 

### CheckoutSessionResponse.data.refunds[].line_item_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### CheckoutSessionResponse.data.refunds[].order

The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Conditional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_reason` | Conditional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `created_at` | Conditional | string | When the order was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Customer associated with the order, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `deferred_promotions` | Conditional | Array of [DeferredPromotion](../models/DeferredPromotion.md#deferredpromotion) | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions[]`: [field definitions](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions). |
| `fulfillment_status` | Conditional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `governing_delivery_selection_id` | Conditional | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `order_id` | Conditional | string | Stable identifier of the expanded order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Conditional | string | Human-readable order number for receipts and merchant reference. |
| `paid_at` | Conditional | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_intent_ids` | Conditional | Array of string | Payment intents associated with the order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_status` | Conditional | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `pricing_amounts` | Conditional | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | Order totals before accounting for collected payments and refunds. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_status` | Conditional | string | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `settlement_amounts` | Conditional | [OrderSettlementAmounts](../models/OrderSettlementAmounts.md#ordersettlementamounts) | Payments, refunds, credits, and amounts still owed for the order. The bill settlement amounts plus order overpayments, settled tips, debt discharged by final capture, and value order edits removed. Money collected, returned, waived, and still owed on a bill. Money collected, returned, waived, and still owed on a bill. |
| `status` | Conditional | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `updated_at` | Conditional | string | When the order was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CheckoutSessionResponse.data.refunds[].order variant 1

anyOf BuyerExpandedOrderSummary: An order summary in a buyer response, with order status and totals. Recorded buyer contact is omitted..

- Required: `deferred_promotions`, `governing_delivery_selection_id`, `order_id`, `paid_at`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`.
- Optional: `closed_at`, `closed_reason`, `created_at`, `customer_id`, `fulfillment_status`, `order_number`, `payment_intent_ids`, `updated_at`.

### CheckoutSessionResponse.data.refunds[].order variant 2

anyOf variant 2.

- Undeclared: `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `updated_at`.
- Value shape: null. The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. 

### CheckoutSessionResponse.data.refunds[].order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### CheckoutSessionResponse.data.refunds[].payment_intent

The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Conditional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `dispute_status` | Conditional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#checkoutsessionresponsedatarefundspayment_intent-dispute_status-values). |
| `order_id` | Conditional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Conditional | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_source` | Conditional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `refund_status` | Conditional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `status` | Conditional | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Conditional | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### CheckoutSessionResponse.data.refunds[].payment_intent dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

### CheckoutSessionResponse.data.refunds[].payment_intent variant 1

anyOf ExpandedPaymentIntentSummary: A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded..

- Required: `amount_money`, `dispute_status`, `payment_intent_id`, `status`, `version`.
- Optional: `capture_method`, `created_at`, `customer_id`, `order_id`, `payment_source`, `refund_status`, `updated_at`.

### CheckoutSessionResponse.data.refunds[].payment_intent variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `capture_method`, `created_at`, `customer_id`, `dispute_status`, `order_id`, `payment_intent_id`, `payment_source`, `refund_status`, `status`, `updated_at`, `version`.
- Value shape: null. The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. 

### CheckoutSessionResponse.data.refunds[].payment_refunds[]

The part of a refund returned through one payment, with the amount, tip, status, and any failure reason.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount refunded through this payment, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned cannot be retried through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `payment_intent`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundspayment_intent). |
| `payment_intent_id` | Optional | string | The payment this part of the refund returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refunded_platform_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Share of `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CheckoutSessionResponse.data.refunds[].payment_refunds[].payment_intent

Declared alternatives: [CheckoutSessionResponse.data.refunds[].payment_intent](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundspayment_intent).

### CheckoutSessionResponse.data.refunds[].tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### CheckoutSessionResponse.data.refunds[].tender_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

### CheckoutSessionResponse.data.subscription_terms

Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing intervals between recurring charges. Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | minItems: `1`. |
| `contract_term_months` | Optional | integer | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `delivery_required` | Required | boolean | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_recipient` | Required | [SubscriptionGiftRecipient](../models/SubscriptionGiftRecipient.md#subscriptiongiftrecipient) or null | Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. `gift_recipient`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_termsgift_recipient). |
| `gifts_enabled` | Required | boolean | Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. |
| `line_items` | Required | Array of object | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_termsline_items). |
| `plan_name` | Required | string | Plan name shown to the buyer. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `quantity_options` | Required | Array of integer | minItems: `1`. Items: Format: `int32`. |
| `recurring_shipping` | Optional | [CheckoutSubscriptionRecurringShipping](../models/CheckoutSubscriptionRecurringShipping.md#checkoutsubscriptionrecurringshipping) | Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount. |
| `recurring_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_plan_id` | Required | string | Flint subscription plan ID the terms come from. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Optional | integer | Days before the first recurring charge, when the plan has a trial. Format: `int32`. |

### CheckoutSessionResponse.data.subscription_terms.gift_recipient

Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatagift_recipient).

### CheckoutSessionResponse.data.subscription_terms.gift_recipient variant 1

anyOf SubscriptionGiftRecipient: Who receives a gift subscription. The customer stays the purchaser, who pays, gets receipts and reminders, and manages the subscription. delivery.recipient stays the ship-to address..

- Required: `email`, `message`, `name`.

### CheckoutSessionResponse.data.subscription_terms.gift_recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `message`, `name`.
- Value shape: null. Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. 

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

