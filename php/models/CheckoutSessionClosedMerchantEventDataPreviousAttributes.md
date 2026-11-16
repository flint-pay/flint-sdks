[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null | The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) or null | Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) or null | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `can_apply_promotion_code` | Optional | boolean or null | Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. `can_apply_promotion_code`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescan_apply_promotion_code). |
| `checkout_session_id` | Optional | string or null | Unique identifier for this checkout session, prefixed `cs_`. `checkout_session_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescheckout_session_id). |
| `client_reference` | Optional | string or null or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. `client_reference`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference). |
| `closed_reason_message` | Optional | string or null | The note supplied when the checkout session was closed. `closed_reason_message`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclosed_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `custom_field_answers` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `custom_field_answers`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) or null | The custom text this session shows in checkout. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer_id). |
| `delivery` | Optional | [CheckoutDerivedDeliveryResource](../models/CheckoutDerivedDeliveryResource.md#checkoutderiveddeliveryresource) or null | Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. |
| `delivery_method_ids` | Optional | Array of string or null | Immutable delivery method assignment captured when the checkout was created. `delivery_method_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_method_ids). |
| `delivery_selection_required` | Optional | boolean or null | Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. `delivery_selection_required`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_selection_required). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expires_in_seconds` | Optional | integer or null | The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. `expires_in_seconds`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesexpires_in_seconds). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_card_challenge` | Optional | [CheckoutGiftCardChallenge](../models/CheckoutGiftCardChallenge.md#checkoutgiftcardchallenge) or null | Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. |
| `inventory_reservation_ids` | Optional | Array of string or null | Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. `inventory_reservation_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinventory_reservation_ids). |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null or null | Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. |
| `invoice_id` | Optional | string or null | ID of the invoice a session of type `invoice` collects payment for. Absent for other types. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice_id). |
| `is_in_recovery` | Optional | boolean or null | Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. `is_in_recovery`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesis_in_recovery). |
| `legal` | Optional | [CheckoutLegalConfig](../models/CheckoutLegalConfig.md#checkoutlegalconfig) or null | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder_id). |
| `page_origin` | Optional | string or null | Origin of the page that renders this headless checkout. Omitted when not set. `page_origin`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespage_origin). |
| `payment_collection` | Optional | [CheckoutSessionClosedMerchantEventDataPreviousAttributesPaymentCollection](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributesPaymentCollection.md#checkoutsessionclosedmerchanteventdatapreviousattributespaymentcollection) or null | Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents for the session's order. Absent when the order has none. `payment_intent_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. `payment_intents`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents). |
| `payment_link` | Optional | [ExpandedPaymentLinkSummary](../models/ExpandedPaymentLinkSummary.md#expandedpaymentlinksummary) or null or null | Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. |
| `payment_link_id` | Optional | string or null | ID of the payment link the session was started from. Absent when it was not started from a payment link. `payment_link_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link_id). |
| `payment_return_url` | Optional | string or null | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. `payment_return_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_return_url). |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) or null | Configured payment options for merchant credentials; currently available payment options for the checkout credential. |
| `prefill` | Optional | [CheckoutPrefill](../models/CheckoutPrefill.md#checkoutprefill) or null | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `problems` | Optional | Array of [CheckoutProblemResource](../models/CheckoutProblemResource.md#checkoutproblemresource) or null | Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. `problems`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesproblems). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) or null | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) or null | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. |
| `refunds` | Optional | Array of [BuyerRefund](../models/BuyerRefund.md#buyerrefund) or null | All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. `refunds`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds). |
| `setup_collection` | Optional | [CheckoutSessionClosedMerchantEventDataPreviousAttributesSetupCollection](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributesSetupCollection.md#checkoutsessionclosedmerchanteventdatapreviousattributessetupcollection) or null | Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. |
| `status` | Optional | string or null | Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. `status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesstatus). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. `subscription_plan_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_plan_id). |
| `subscription_terms` | Optional | [CheckoutSubscriptionTerms](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptionterms) or null | Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. `subscription_terms`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms). |
| `superseding_checkout_session_id` | Optional | string or null | ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. `superseding_checkout_session_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessuperseding_checkout_session_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. Items values: `"close"`. `supported_actions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessupported_actions). |
| `surface` | Optional | string or null | How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Values: `"hosted"`, `"headless"`. `surface`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessurface). |
| `tax` | Optional | [CheckoutSessionTax](../models/CheckoutSessionTax.md#checkoutsessiontax) or null | The session's tax settings. Omitted when the session sets none. |
| `terminal_reason` | Optional | string or null | Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Values: [11 declared values](BuyerCheckoutSessionInput.md#buyercheckoutsessioninput-terminal_reason-values). `terminal_reason`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesterminal_reason). |
| `theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) or null | The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) or null | The tip options this session offers the buyer. |
| `type` | Optional | string or null | What the session collects payment for, fixed at creation. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.can_apply_promotion_code

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.can_apply_promotion_code variant 1

anyOf variant 1: Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply..

- Value shape: boolean. Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.can_apply_promotion_code variant 2

anyOf variant 2.

- Value shape: null. Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.checkout_session_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.checkout_session_id variant 1

anyOf variant 1: Unique identifier for this checkout session, prefixed `cs_`..

- Value shape: string. Unique identifier for this checkout session, prefixed `cs_`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this checkout session, prefixed `cs_`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.client_reference

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.client_reference variant 1

anyOf variant 1: The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials..

- Value shape: (string or null). The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. minLength: `1`. maxLength: `255`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.client_reference variant 2

anyOf variant 2.

- Value shape: null. The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.closed_reason_message

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.closed_reason_message variant 1

anyOf variant 1: The note supplied when the checkout session was closed..

- Value shape: string. The note supplied when the checkout session was closed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.closed_reason_message variant 2

anyOf variant 2.

- Value shape: null. The note supplied when the checkout session was closed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1

anyOf variant 1: The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials..

- Value shape: Array of (object and Alternative shapes (see declared variants)). The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. maxItems: `20`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 2

anyOf variant 2.

- Value shape: null. The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer..

- Value shape: string. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_method_ids

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_method_ids variant 1

anyOf variant 1: Immutable delivery method assignment captured when the checkout was created..

- Value shape: Array of string. Immutable delivery method assignment captured when the checkout was created. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Immutable delivery method assignment captured when the checkout was created. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_selection_required

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_selection_required variant 1

anyOf variant 1: Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment..

- Value shape: boolean. Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_selection_required variant 2

anyOf variant 2.

- Value shape: null. Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.expires_in_seconds

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.expires_in_seconds variant 1

anyOf variant 1: The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice..

- Value shape: integer. The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. Format: `int64`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids variant 1

anyOf variant 1: Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle..

- Value shape: Array of string. Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids variant 2

anyOf variant 2.

- Value shape: null. Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: ID of the invoice a session of type `invoice` collects payment for. Absent for other types..

- Value shape: string. ID of the invoice a session of type `invoice` collects payment for. Absent for other types. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice a session of type `invoice` collects payment for. Absent for other types. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.is_in_recovery

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.is_in_recovery variant 1

anyOf variant 1: Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt..

- Value shape: boolean. Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.is_in_recovery variant 2

anyOf variant 2.

- Value shape: null. Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMap: Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules..

- Value shape: Map of string. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Map values: maxLength: `4096`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order the session collects payment for, fixed at creation. Absent when the session has no order..

- Value shape: string. ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.page_origin

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.page_origin variant 1

anyOf variant 1: Origin of the page that renders this headless checkout. Omitted when not set..

- Value shape: string. Origin of the page that renders this headless checkout. Omitted when not set. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.page_origin variant 2

anyOf variant 2.

- Value shape: null. Origin of the page that renders this headless checkout. Omitted when not set. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intent_ids

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents for the session's order. Absent when the order has none..

- Value shape: Array of string. IDs of the payment intents for the session's order. Absent when the order has none. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the payment intents for the session's order. Absent when the order has none. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1

anyOf variant 1: Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`..

- Value shape: Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary). Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id variant 1

anyOf variant 1: ID of the payment link the session was started from. Absent when it was not started from a payment link..

- Value shape: string. ID of the payment link the session was started from. Absent when it was not started from a payment link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment link the session was started from. Absent when it was not started from a payment link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url variant 1

anyOf variant 1: Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters..

- Value shape: string. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url variant 2

anyOf variant 2.

- Value shape: null. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems variant 1

anyOf variant 1: Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error..

- Value shape: Array of [CheckoutProblemResource](../models/CheckoutProblemResource.md#checkoutproblemresource). Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems variant 2

anyOf variant 2.

- Value shape: null. Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1

anyOf variant 1: All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back..

- Value shape: Array of [BuyerRefund](../models/BuyerRefund.md#buyerrefund). All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 2

anyOf variant 2.

- Value shape: null. All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1

Field definitions: [CheckoutSessionResponse.data.refunds[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefunds).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended..

- Value shape: string. Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_plan_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types..

- Value shape: string. ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms

Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Number of billing intervals between recurring charges. Format: `int32`. |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Billing intervals the buyer can choose from, frozen from the plan when the session was created. minItems: `1`. |
| `contract_term_months` | Conditional | integer | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. |
| `deliveries_per_period` | Conditional | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Conditional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Conditional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `delivery_required` | Conditional | boolean | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. |
| `early_termination_fee_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_recipient` | Conditional | [SubscriptionGiftRecipient](../models/SubscriptionGiftRecipient.md#subscriptiongiftrecipient) or null | Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. |
| `gifts_enabled` | Conditional | boolean | Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. |
| `line_items` | Conditional | Array of object | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items[]`: [field definitions](../models/CheckoutSubscriptionTermsLineItemsItem.md#checkoutsubscriptiontermslineitemsitem). |
| `plan_name` | Conditional | string | Plan name shown to the buyer. |
| `recurring_shipping` | Conditional | [CheckoutSubscriptionRecurringShipping](../models/CheckoutSubscriptionRecurringShipping.md#checkoutsubscriptionrecurringshipping) | Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount. |
| `recurring_total_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `setup_fee_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_plan_id` | Conditional | string | Flint subscription plan ID the terms come from. |
| `trial_period_days` | Conditional | integer | Days before the first recurring charge, when the plan has a trial. Format: `int32`. |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1

anyOf CheckoutSubscriptionTerms: Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription..

- Required: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `delivery_required`, `gift_recipient`, `gifts_enabled`, `line_items`, `plan_name`, `recurring_total_money`, `subscription_plan_id`.
- Optional: `contract_term_months`, `early_termination_fee_money`, `recurring_shipping`, `setup_fee_money`, `trial_period_days`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `contract_term_months`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `delivery_required`, `early_termination_fee_money`, `gift_recipient`, `gifts_enabled`, `line_items`, `plan_name`, `recurring_shipping`, `recurring_total_money`, `setup_fee_money`, `subscription_plan_id`, `trial_period_days`.
- Value shape: null. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items[]

Field definitions: [CheckoutSubscriptionTermsLineItemsItem](../models/CheckoutSubscriptionTermsLineItemsItem.md#checkoutsubscriptiontermslineitemsitem).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.superseding_checkout_session_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.superseding_checkout_session_id variant 1

anyOf variant 1: ID of the session that replaced this one. Present when `terminal_reason` is `superseded`..

- Value shape: string. ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.superseding_checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.supported_actions

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. Items values: `"close"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.surface

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.surface variant 1

anyOf variant 1: How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page..

- Value shape: string. How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Values: `"hosted"`, `"headless"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.surface variant 2

anyOf variant 2.

- Value shape: null. How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason variant 1

anyOf variant 1: Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied..

- Value shape: string. Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Values: `"payment_succeeded"`, `"payment_partially_succeeded"`, `"expired"`, `"closed_by_merchant"`, `"order_mutated"`, `"superseded"`, `"order_paid_elsewhere"`, `"invoice_paid_elsewhere"`, `"invoice_voided"`, `"invoice_uncollectible"`, `"invoice_balance_changed"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason variant 2

anyOf variant 2.

- Value shape: null. Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.type variant 1

anyOf variant 1: What the session collects payment for, fixed at creation..

- Value shape: string. What the session collects payment for, fixed at creation. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. What the session collects payment for, fixed at creation. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

