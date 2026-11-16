[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionExpiredMerchantEventDataPreviousAttributes

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
| `payment_collection` | Optional | [CheckoutSessionExpiredMerchantEventDataPreviousAttributesPaymentCollection](../models/CheckoutSessionExpiredMerchantEventDataPreviousAttributesPaymentCollection.md#checkoutsessionexpiredmerchanteventdatapreviousattributespaymentcollection) or null | Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. |
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
| `setup_collection` | Optional | [CheckoutSessionExpiredMerchantEventDataPreviousAttributesSetupCollection](../models/CheckoutSessionExpiredMerchantEventDataPreviousAttributesSetupCollection.md#checkoutsessionexpiredmerchanteventdatapreviousattributessetupcollection) or null | Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. |
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

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.can_apply_promotion_code

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.can_apply_promotion_code](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescan_apply_promotion_code).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.checkout_session_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.checkout_session_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescheckout_session_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.client_reference

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.client_reference](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.closed_reason_message

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.closed_reason_message](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclosed_reason_message).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.custom_field_answers

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.customer_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.delivery_method_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_method_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_method_ids).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.delivery_selection_required

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_selection_required](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_selection_required).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.expires_in_seconds

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.expires_in_seconds](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesexpires_in_seconds).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.inventory_reservation_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinventory_reservation_ids).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.invoice_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.is_in_recovery

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.is_in_recovery](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesis_in_recovery).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.order_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.page_origin

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.page_origin](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespage_origin).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.payment_intent_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intent_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intent_ids).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.payment_intents

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.payment_link_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.payment_return_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_return_url).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.problems

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesproblems).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.refunds

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesstatus).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.subscription_plan_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_plan_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_plan_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.subscription_terms

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.superseding_checkout_session_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.superseding_checkout_session_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessuperseding_checkout_session_id).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.supported_actions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.supported_actions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessupported_actions).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.surface

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.surface](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessurface).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.terminal_reason

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesterminal_reason).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.type

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.type](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestype).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionExpiredMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

