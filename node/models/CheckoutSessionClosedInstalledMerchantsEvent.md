[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionClosedInstalledMerchantsEvent

The `checkout_session.closed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"checkout_session.closed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### CheckoutSessionClosedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookCheckoutSession](../models/WebhookCheckoutSession.md#webhookcheckoutsession) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`. `object`: [field definitions](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributes). |

### CheckoutSessionClosedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`.

Field definitions: [shared fields](WebhookCheckoutSession.md#webhookcheckoutsession).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.buyer_fields

Field definitions: [BuyerCheckoutSession.buyer_fields](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.custom_text

Field definitions: [BuyerCheckoutSession.custom_text](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.gift_card_challenge

Field definitions: [BuyerCheckoutSession.gift_card_challenge](../models/BuyerCheckoutSession.md#buyercheckoutsessiongift_card_challenge).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.legal

Field definitions: [BuyerCheckoutSession.legal](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.payments

Field definitions: [BuyerCheckoutSession.payments](../models/BuyerCheckoutSession.md#buyercheckoutsessionpayments).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.promotion_config

Field definitions: [BuyerCheckoutSession.promotion_config](../models/BuyerCheckoutSession.md#buyercheckoutsessionpromotion_config).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.redirects

Field definitions: [BuyerCheckoutSession.redirects](../models/BuyerCheckoutSession.md#buyercheckoutsessionredirects).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.tip

Field definitions: [BuyerCheckoutSession.tip](../models/BuyerCheckoutSession.md#buyercheckoutsessiontip).

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null | The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) or null | Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) or null | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesbuyer_fields). |
| `can_apply_promotion_code` | Optional | boolean or null | Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. `can_apply_promotion_code`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributescan_apply_promotion_code). |
| `checkout_session_id` | Optional | string or null | Unique identifier for this checkout session, prefixed `cs_`. `checkout_session_id`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributescheckout_session_id). |
| `client_reference` | Optional | string or null or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. `client_reference`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesclient_reference). |
| `closed_reason_message` | Optional | string or null | The note supplied when the checkout session was closed. `closed_reason_message`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesclosed_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `custom_field_answers` | Optional | Array of [CustomFieldAnswer](../models/CustomFieldAnswer.md#customfieldanswer) or null | The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `custom_field_answers`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributescustom_field_answers). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) or null | The custom text this session shows in checkout. `custom_text`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributescustom_text). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `delivery` | Optional | [CheckoutDerivedDeliveryResource](../models/CheckoutDerivedDeliveryResource.md#checkoutderiveddeliveryresource) or null | Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. |
| `delivery_method_ids` | Optional | Array of string or null | Immutable delivery method assignment captured when the checkout was created. `delivery_method_ids`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesdelivery_method_ids). |
| `delivery_selection_required` | Optional | boolean or null | Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. `delivery_selection_required`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesdelivery_selection_required). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `expires_in_seconds` | Optional | integer or null | The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. `expires_in_seconds`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesexpires_in_seconds). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `gift_card_challenge` | Optional | [CheckoutGiftCardChallenge](../models/CheckoutGiftCardChallenge.md#checkoutgiftcardchallenge) or null | Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. `gift_card_challenge`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesgift_card_challenge). |
| `inventory_reservation_ids` | Optional | Array of string or null | Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. `inventory_reservation_ids`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesinventory_reservation_ids). |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null or null | Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. |
| `invoice_id` | Optional | string or null | ID of the invoice a session of type `invoice` collects payment for. Absent for other types. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesinvoice_id). |
| `is_in_recovery` | Optional | boolean or null | Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. `is_in_recovery`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesis_in_recovery). |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) or null | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. `legal`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributeslegal). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. `order_id`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesorder_id). |
| `page_origin` | Optional | string or null | Origin of the page that renders this headless checkout. Omitted when not set. `page_origin`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespage_origin). |
| `payment_collection` | Optional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) or null | Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents for the session's order. Absent when the order has none. `payment_intent_ids`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. `payment_intents`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_intents). |
| `payment_link` | Optional | [ExpandedPaymentLinkSummary](../models/ExpandedPaymentLinkSummary.md#expandedpaymentlinksummary) or null or null | Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. |
| `payment_link_id` | Optional | string or null | ID of the payment link the session was started from. Absent when it was not started from a payment link. `payment_link_id`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_link_id). |
| `payment_return_url` | Optional | string or null | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. `payment_return_url`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_return_url). |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) or null | Configured payment options for merchant credentials; currently available payment options for the checkout credential. `payments`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayments). |
| `prefill` | Optional | [CheckoutPrefill](../models/CheckoutPrefill.md#checkoutprefill) or null | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `problems` | Optional | Array of [CheckoutProblemResource](../models/CheckoutProblemResource.md#checkoutproblemresource) or null | Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. `problems`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesproblems). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) or null | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. `promotion_config`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) or null | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesredirects). |
| `refunds` | Optional | Array of [BuyerRefund](../models/BuyerRefund.md#buyerrefund) or null | All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. `refunds`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesrefunds). |
| `setup_collection` | Optional | [SetupCollection](../models/SetupCollection.md#setupcollection) or null | Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. |
| `status` | Optional | string or null | Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. `status`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesstatus). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. `subscription_plan_id`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributessubscription_plan_id). |
| `subscription_terms` | Optional | [CheckoutSubscriptionTerms](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptionterms) or null | Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. |
| `superseding_checkout_session_id` | Optional | string or null | ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. `superseding_checkout_session_id`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributessuperseding_checkout_session_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. Items values: `"close"`. `supported_actions`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `surface` | Optional | string or null | How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Values: `"hosted"`, `"headless"`. `surface`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributessurface). |
| `tax` | Optional | [CheckoutSessionTax](../models/CheckoutSessionTax.md#checkoutsessiontax) or null | The session's tax settings. Omitted when the session sets none. |
| `terminal_reason` | Optional | string or null | Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Values: [11 declared values](BuyerCheckoutSession.md#buyercheckoutsession-terminal_reason-values). `terminal_reason`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesterminal_reason). |
| `theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) or null | The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) or null | The tip options this session offers the buyer. `tip`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributestip). |
| `type` | Optional | string or null | What the session collects payment for, fixed at creation. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. `type`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesversion). |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.buyer_fields

What checkout asks the buyer for. Each field you leave out uses your checkout settings.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_autocomplete_enabled` | Conditional | boolean | Whether checkout offers address suggestions while the buyer enters an address. |
| `require_billing_address` | Conditional | boolean | Whether checkout requires the buyer's billing address. |
| `require_email` | Conditional | boolean | Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. |
| `require_phone` | Conditional | boolean | Whether checkout requires the buyer's phone number. |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.buyer_fields variant 1

anyOf CheckoutBuyerFields: What checkout asks the buyer for. Each field you leave out uses your checkout settings..

- Optional: `address_autocomplete_enabled`, `require_billing_address`, `require_email`, `require_phone`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.buyer_fields variant 2

anyOf variant 2.

- Undeclared: `address_autocomplete_enabled`, `require_billing_address`, `require_email`, `require_phone`.
- Value shape: null. What checkout asks the buyer for. Each field you leave out uses your checkout settings. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.can_apply_promotion_code

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.can_apply_promotion_code variant 1

anyOf variant 1: Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply..

- Value shape: boolean. Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.can_apply_promotion_code variant 2

anyOf variant 2.

- Value shape: null. Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.checkout_session_id

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.checkout_session_id variant 1

anyOf variant 1: Unique identifier for this checkout session, prefixed `cs_`..

- Value shape: string. Unique identifier for this checkout session, prefixed `cs_`. Unique identifier for this checkout session, prefixed `cs_`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this checkout session, prefixed `cs_`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.client_reference

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.client_reference variant 1

anyOf variant 1: The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials..

- Value shape: (string or null). The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. minLength: `1`. maxLength: `255`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.client_reference variant 2

anyOf variant 2.

- Value shape: null. The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason_message

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason_message variant 1

anyOf variant 1: The note supplied when the checkout session was closed..

- Value shape: string. The note supplied when the checkout session was closed. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason_message variant 2

anyOf variant 2.

- Value shape: null. The note supplied when the checkout session was closed. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.custom_field_answers

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.custom_field_answers variant 1

anyOf variant 1: The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials..

- Value shape: Array of [CustomFieldAnswer](../models/CustomFieldAnswer.md#customfieldanswer). The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. maxItems: `20`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.custom_field_answers variant 2

anyOf variant 2.

- Value shape: null. The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.custom_text

The custom text this session shows in checkout.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Conditional | string | Message shown near the order summary in checkout. |
| `shipping_address_label` | Conditional | string | Label shown for the shipping address in checkout. |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.custom_text variant 1

anyOf CheckoutCustomTextConfig: The custom text this session shows in checkout..

- Optional: `order_summary_message`, `shipping_address_label`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.custom_text variant 2

anyOf variant 2.

- Undeclared: `order_summary_message`, `shipping_address_label`.
- Value shape: null. The custom text this session shows in checkout. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.customer_id

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer..

- Value shape: string. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids variant 1

anyOf variant 1: Immutable delivery method assignment captured when the checkout was created..

- Value shape: Array of string. Immutable delivery method assignment captured when the checkout was created. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Immutable delivery method assignment captured when the checkout was created. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.delivery_selection_required

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.delivery_selection_required variant 1

anyOf variant 1: Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment..

- Value shape: boolean. Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.delivery_selection_required variant 2

anyOf variant 2.

- Value shape: null. Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.expires_in_seconds

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.expires_in_seconds variant 1

anyOf variant 1: The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice..

- Value shape: integer. The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. Format: `int64`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.gift_card_challenge

Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `url` | Conditional | string | Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends. Format: `uri`. Example: `"https://example.com/receipt"`. |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.gift_card_challenge variant 1

anyOf CheckoutGiftCardChallenge: Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results..

- Required: `url`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.gift_card_challenge variant 2

anyOf variant 2.

- Undeclared: `url`.
- Value shape: null. Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.inventory_reservation_ids

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.inventory_reservation_ids variant 1

anyOf variant 1: Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle..

- Value shape: Array of string. Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. Items: Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.inventory_reservation_ids variant 2

anyOf variant 2.

- Value shape: null. Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.invoice_id

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.invoice_id variant 1

anyOf variant 1: ID of the invoice a session of type `invoice` collects payment for. Absent for other types..

- Value shape: string. ID of the invoice a session of type `invoice` collects payment for. Absent for other types. ID of the invoice a session of type `invoice` collects payment for. Absent for other types. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice a session of type `invoice` collects payment for. Absent for other types. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.is_in_recovery

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.is_in_recovery variant 1

anyOf variant 1: Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt..

- Value shape: boolean. Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.is_in_recovery variant 2

anyOf variant 2.

- Value shape: null. Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.legal

The terms and policy links this session shows the buyer, and whether the buyer must accept the terms.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Conditional | string | An `https://` URL of the contract the buyer agrees to, linked in checkout. |
| `refund_policy_url` | Conditional | string | An `https://` URL of your refund policy, linked in checkout. |
| `require_terms_of_service` | Conditional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Conditional | string | An `https://` URL of your shipping policy, linked in checkout. |
| `terms_of_service_url` | Conditional | string | An `https://` URL of your terms of service, linked in checkout. |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.legal variant 1

anyOf CheckoutLegalConfig: The terms and policy links this session shows the buyer, and whether the buyer must accept the terms..

- Optional: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.legal variant 2

anyOf variant 2.

- Undeclared: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.
- Value shape: null. The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata variant 1

anyOf MetadataMap: Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules..

- Value shape: Map of string. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Map values: maxLength: `4096`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.order_id

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.order_id variant 1

anyOf variant 1: ID of the order the session collects payment for, fixed at creation. Absent when the session has no order..

- Value shape: string. ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.page_origin

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.page_origin variant 1

anyOf variant 1: Origin of the page that renders this headless checkout. Omitted when not set..

- Value shape: string. Origin of the page that renders this headless checkout. Omitted when not set. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.page_origin variant 2

anyOf variant 2.

- Value shape: null. Origin of the page that renders this headless checkout. Omitted when not set. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_ids

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents for the session's order. Absent when the order has none..

- Value shape: Array of string. IDs of the payment intents for the session's order. Absent when the order has none. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the payment intents for the session's order. Absent when the order has none. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_intents

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_intents variant 1

anyOf variant 1: Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`..

- Value shape: Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary). Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_link_id

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_link_id variant 1

anyOf variant 1: ID of the payment link the session was started from. Absent when it was not started from a payment link..

- Value shape: string. ID of the payment link the session was started from. Absent when it was not started from a payment link. ID of the payment link the session was started from. Absent when it was not started from a payment link. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment link the session was started from. Absent when it was not started from a payment link. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_return_url

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_return_url variant 1

anyOf variant 1: Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters..

- Value shape: string. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_return_url variant 2

anyOf variant 2.

- Value shape: null. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payments

Configured payment options for merchant credentials; currently available payment options for the checkout credential.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Conditional | Array of string | Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Conditional | string | A note shown to the buyer with the payment options. |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payments variant 1

anyOf CheckoutPaymentConfig: Configured payment options for merchant credentials; currently available payment options for the checkout credential..

- Optional: `enabled_payment_options`, `payment_note`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payments variant 2

anyOf variant 2.

- Undeclared: `enabled_payment_options`, `payment_note`.
- Value shape: null. Configured payment options for merchant credentials; currently available payment options for the checkout credential. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.problems

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.problems variant 1

anyOf variant 1: Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error..

- Value shape: Array of [CheckoutProblemResource](../models/CheckoutProblemResource.md#checkoutproblemresource). Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.problems variant 2

anyOf variant 2.

- Value shape: null. Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.promotion_config

Whether automatic promotions apply to this session and whether the buyer can enter promotion codes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Conditional | boolean | Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. |
| `codes_enabled` | Conditional | boolean or null | Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.promotion_config variant 1

anyOf CheckoutPromotionConfig: Whether automatic promotions apply to this session and whether the buyer can enter promotion codes..

- Optional: `automatic_enabled`, `codes_enabled`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.promotion_config variant 2

anyOf variant 2.

- Undeclared: `automatic_enabled`, `codes_enabled`.
- Value shape: null. Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.redirects

Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_url` | Conditional | string | Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `expired_url` | Conditional | string | Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |
| `success_url` | Conditional | string | Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.redirects variant 1

anyOf CheckoutRedirects: Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url..

- Optional: `cancel_url`, `expired_url`, `success_url`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.redirects variant 2

anyOf variant 2.

- Undeclared: `cancel_url`, `expired_url`, `success_url`.
- Value shape: null. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.refunds

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.refunds variant 1

anyOf variant 1: All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back..

- Value shape: Array of [BuyerRefund](../models/BuyerRefund.md#buyerrefund). All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.refunds variant 2

anyOf variant 2.

- Value shape: null. All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.status

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended..

- Value shape: string. Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.subscription_plan_id

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types..

- Value shape: string. ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.superseding_checkout_session_id

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.superseding_checkout_session_id variant 1

anyOf variant 1: ID of the session that replaced this one. Present when `terminal_reason` is `superseded`..

- Value shape: string. ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.superseding_checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. Items values: `"close"`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.surface

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.surface variant 1

anyOf variant 1: How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page..

- Value shape: string. How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Values: `"hosted"`, `"headless"`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.surface variant 2

anyOf variant 2.

- Value shape: null. How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.terminal_reason

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.terminal_reason variant 1

anyOf variant 1: Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied..

- Value shape: string. Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Values: `"payment_succeeded"`, `"payment_partially_succeeded"`, `"expired"`, `"closed_by_merchant"`, `"order_mutated"`, `"superseded"`, `"order_paid_elsewhere"`, `"invoice_paid_elsewhere"`, `"invoice_voided"`, `"invoice_uncollectible"`, `"invoice_balance_changed"`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.terminal_reason variant 2

anyOf variant 2.

- Value shape: null. Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.tip

The tip options this session offers the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Conditional | boolean | Whether buyers can enter a custom tip amount. |
| `default_smart_tip_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `default_smart_tip_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money). |
| `default_tip_percent` | Conditional | number | The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `enabled` | Conditional | boolean | Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. |
| `smart_tip_money_options` | Conditional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. `smart_tip_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `smart_tips_enabled` | Conditional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Conditional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.tip variant 1

anyOf CheckoutTipConfig: The tip options this session offers the buyer..

- Optional: `custom_tip_enabled`, `default_smart_tip_money`, `default_tip_percent`, `enabled`, `smart_tip_money_options`, `smart_tips_enabled`, `tip_percent_options`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.tip variant 2

anyOf variant 2.

- Undeclared: `custom_tip_enabled`, `default_smart_tip_money`, `default_tip_percent`, `enabled`, `smart_tip_money_options`, `smart_tips_enabled`, `tip_percent_options`.
- Value shape: null. The tip options this session offers the buyer. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.tip variant 1.default_smart_tip_money

Field definitions: [BuyerCheckoutSession.tip.default_smart_tip_money](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money).

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.tip variant 1.smart_tip_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.type

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.type variant 1

anyOf variant 1: What the session collects payment for, fixed at creation..

- Value shape: string. What the session collects payment for, fixed at creation. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`.

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.type variant 2

anyOf variant 2.

- Value shape: null. What the session collects payment for, fixed at creation. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.version

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Persisted version of this resource's owned state. Expanded resources and external observations can change independently..

- Value shape: integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. 

### CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. 

### CheckoutSessionClosedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

