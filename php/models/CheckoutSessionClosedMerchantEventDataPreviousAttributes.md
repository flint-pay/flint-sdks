[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | Alternative shapes (see declared variants) | The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. `active_payment_attempt`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt). |
| `buyer_contact` | Optional | Alternative shapes (see declared variants) | Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. `buyer_contact`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_contact). |
| `buyer_fields` | Optional | Alternative shapes (see declared variants) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_fields). |
| `can_apply_promotion_code` | Optional | boolean or null | Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. `can_apply_promotion_code`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescan_apply_promotion_code). |
| `checkout_session_id` | Optional | string or null | Unique identifier for this checkout session, prefixed `cs_`. `checkout_session_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescheckout_session_id). |
| `client_reference` | Optional | string or null or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. `client_reference`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference). |
| `closed_reason_message` | Optional | string or null | The note supplied when the checkout session was closed. `closed_reason_message`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclosed_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `custom_field_answers` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `custom_field_answers`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers). |
| `custom_text` | Optional | Alternative shapes (see declared variants) | The custom text this session shows in checkout. `custom_text`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_text). |
| `customer` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer_id). |
| `delivery` | Optional | Alternative shapes (see declared variants) | Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. `delivery`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery). |
| `delivery_method_ids` | Optional | Array of string or null | Immutable delivery method assignment captured when the checkout was created. `delivery_method_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_method_ids). |
| `delivery_selection_required` | Optional | boolean or null | Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. `delivery_selection_required`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_selection_required). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expires_in_seconds` | Optional | integer or null | The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. `expires_in_seconds`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesexpires_in_seconds). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_card_challenge` | Optional | Alternative shapes (see declared variants) | Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. `gift_card_challenge`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesgift_card_challenge). |
| `inventory_reservation_ids` | Optional | Array of string or null | Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. `inventory_reservation_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinventory_reservation_ids). |
| `invoice` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. `invoice`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice). |
| `invoice_id` | Optional | string or null | ID of the invoice a session of type `invoice` collects payment for. Absent for other types. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice_id). |
| `is_in_recovery` | Optional | boolean or null | Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. `is_in_recovery`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesis_in_recovery). |
| `legal` | Optional | Alternative shapes (see declared variants) | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. `legal`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributeslegal). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder_id). |
| `page_origin` | Optional | string or null | Origin of the page that renders this headless checkout. Omitted when not set. `page_origin`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespage_origin). |
| `payment_collection` | Optional | Alternative shapes (see declared variants) | Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. `payment_collection`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents for the session's order. Absent when the order has none. `payment_intent_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. `payment_intents`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents). |
| `payment_link` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. `payment_link`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link). |
| `payment_link_id` | Optional | string or null | ID of the payment link the session was started from. Absent when it was not started from a payment link. `payment_link_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link_id). |
| `payment_return_url` | Optional | string or null | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Query strings are deliberately excluded so credentials and provider state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048 characters. `payment_return_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_return_url). |
| `payments` | Optional | Alternative shapes (see declared variants) | Configured payment options for merchant credentials; currently available payment options for the checkout credential. `payments`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayments). |
| `prefill` | Optional | Alternative shapes (see declared variants) | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. `prefill`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesprefill). |
| `problems` | Optional | Array of [CheckoutProblemResourcePreviousAttributes](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributes) or null | Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. `problems`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesproblems). |
| `promotion_config` | Optional | Alternative shapes (see declared variants) | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. `promotion_config`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespromotion_config). |
| `redirects` | Optional | Alternative shapes (see declared variants) | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects). |
| `refunds` | Optional | Array of [BuyerRefundPreviousAttributes](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributes) or null | All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. `refunds`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds). |
| `setup_collection` | Optional | Alternative shapes (see declared variants) | Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. `setup_collection`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessetup_collection). |
| `status` | Optional | string or null | Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. `status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesstatus). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. `subscription_plan_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_plan_id). |
| `subscription_terms` | Optional | Alternative shapes (see declared variants) | Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. `subscription_terms`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms). |
| `superseding_checkout_session_id` | Optional | string or null | ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. `superseding_checkout_session_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessuperseding_checkout_session_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. Items values: `"close"`. `supported_actions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessupported_actions). |
| `surface` | Optional | string or null | How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Values: `"hosted"`, `"headless"`. `surface`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessurface). |
| `tax` | Optional | Alternative shapes (see declared variants) | The session's tax settings. Omitted when the session sets none. `tax`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestax). |
| `terminal_reason` | Optional | string or null | Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Values: [11 declared values](BuyerCheckoutSessionInput.md#buyercheckoutsessioninput-terminal_reason-values). `terminal_reason`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesterminal_reason). |
| `theme` | Optional | Alternative shapes (see declared variants) | The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. `theme`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestheme). |
| `tip` | Optional | Alternative shapes (see declared variants) | The tip options this session offers the buyer. `tip`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestip). |
| `type` | Optional | string or null | What the session collects payment for, fixed at creation. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt

The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Conditional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `expected_outstanding_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. |
| `gift_card_redemptions` | Conditional | Array of object or null | Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. `gift_card_redemptions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions). |
| `is_resumable` | Conditional | boolean or null | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. `is_resumable`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1is_resumable). |
| `last_payment_error` | Conditional | Alternative shapes (see declared variants) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. `last_payment_error`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error). |
| `mode` | Conditional | string or null | Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Values: `"payment"`, `"setup"`, `"settlement"`. `mode`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1mode). |
| `order_id` | Conditional | string or null | The order this payment attempt collects money for or saves a payment method for. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1order_id). |
| `order_payment_attempt_id` | Conditional | string or null | Unique identifier for this order payment attempt, prefixed `opat_`. `order_payment_attempt_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1order_payment_attempt_id). |
| `payment_intents` | Conditional | Array of object or null | The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. `payment_intents`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1payment_intents). |
| `payment_method_save` | Conditional | Alternative shapes (see declared variants) | Reports only a checkout buyer's skipped save when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A merchant save has no entry here; read payment_source.card.payment_method_id on the payment intent. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. `payment_method_save`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1payment_method_save). |
| `pending_actions` | Conditional | Array of object or null | Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. `pending_actions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions). |
| `started_at` | Conditional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `status` | Conditional | string or null | Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Values: `"processing"`, `"requires_action"`, `"requires_capture"`, `"partially_succeeded"`, `"succeeded"`, `"failed"`, `"expired"`, `"canceled"`. `status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1status). |
| `status_reason` | Conditional | string or null | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [30 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). `status_reason`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1status_reason). |
| `supported_actions` | Conditional | Array of string or null | Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1supported_actions). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1

anyOf OrderPaymentAttemptPreviousAttributes.

- Optional: `completed_at`, `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `last_payment_error`, `mode`, `order_id`, `order_payment_attempt_id`, `payment_intents`, `payment_method_save`, `pending_actions`, `started_at`, `status`, `status_reason`, `supported_actions`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 2

anyOf variant 2.

- Undeclared: `completed_at`, `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `last_payment_error`, `mode`, `order_id`, `order_payment_attempt_id`, `payment_intents`, `payment_method_save`, `pending_actions`, `started_at`, `status`, `status_reason`, `supported_actions`.
- Value shape: null. The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.completed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1

anyOf variant 1: Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used..

- Value shape: Array of object. Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 2

anyOf variant 2.

- Value shape: null. Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. |
| `gift_card_id` | Optional | string or null | ID of the gift card redeemed. `gift_card_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1gift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that holds this amount on the gift card. `gift_card_redemption_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1gift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1last4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of `amount_money` that is a tip. Zero when the redemption carries no tip. |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.gift_card_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.gift_card_id variant 1

anyOf variant 1: ID of the gift card redeemed..

- Value shape: string. ID of the gift card redeemed. ID of the gift card redeemed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card redeemed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.gift_card_redemption_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that holds this amount on the gift card..

- Value shape: string. ID of the redemption that holds this amount on the gift card. ID of the redemption that holds this amount on the gift card. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption that holds this amount on the gift card. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.last4

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.last4 variant 1

anyOf variant 1: Last four characters of the card's current code..

- Value shape: string. Last four characters of the card's current code. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the card's current code. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.is_resumable

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.is_resumable variant 1

anyOf variant 1: Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress..

- Value shape: boolean. Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.is_resumable variant 2

anyOf variant 2.

- Value shape: null. Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error

The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Conditional | string or null | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [27 declared values](ErrorDetailInput.md#errordetailinput-failure_code-values). `code`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1code). |
| `failed_at` | Conditional | string or null | Time the payment attempt concluded in failure. `failed_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1failed_at). |
| `message` | Conditional | string or null | Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. `message`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1message). |
| `remediation` | Conditional | Alternative shapes (see declared variants) | Guidance for resolving the payment failure before trying to collect again. `remediation`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1remediation). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.code

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.code variant 1

anyOf variant 1: Flint-normalized payment failure code. Unknown provider values are returned as payment_failed..

- Value shape: string. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: `"card_declined"`, `"card_declined_do_not_retry"`, `"card_details_outdated"`, `"insufficient_funds"`, `"bank_account_closed"`, `"bank_account_not_found"`, `"bank_debit_not_authorized"`, `"bank_account_restricted"`, `"bank_debit_limit_exceeded"`, `"authentication_required"`, `"payment_blocked"`, `"expired_card"`, `"incorrect_cvc"`, `"lost_card"`, `"stolen_card"`, `"do_not_honor"`, `"fraudulent"`, `"processing_error"`, `"payment_method_unavailable"`, `"payment_method_declined"`, `"payment_not_completed"`, `"payment_action_expired"`, `"payment_method_temporarily_unavailable"`, `"incorrect_pin"`, `"pin_try_exceeded"`, `"pin_required"`, `"payment_failed"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.code variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.failed_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.failed_at variant 1

anyOf variant 1: Time the payment attempt concluded in failure..

- Value shape: string. Time the payment attempt concluded in failure. Time the payment attempt concluded in failure. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.failed_at variant 2

anyOf variant 2.

- Value shape: null. Time the payment attempt concluded in failure. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.message

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.message variant 1

anyOf variant 1: Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy..

- Value shape: string. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.message variant 2

anyOf variant 2.

- Value shape: null. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation

Guidance for resolving the payment failure before trying to collect again.

Field definitions: [shared fields](CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation variant 1

anyOf ErrorRemediationPreviousAttributes.

- Optional: `next_actions`, `next_steps`, `retry`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation variant 2

anyOf variant 2.

- Undeclared: `next_actions`, `next_steps`, `retry`.
- Value shape: null. Guidance for resolving the payment failure before trying to collect again. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation variant 1.next_actions

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation variant 1.next_steps

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_steps](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_steps).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation variant 1.retry

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.retry](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1retry).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.mode

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.mode variant 1

anyOf variant 1: Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment..

- Value shape: string. Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Values: `"payment"`, `"setup"`, `"settlement"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.mode variant 2

anyOf variant 2.

- Value shape: null. Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.order_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.order_id variant 1

anyOf variant 1: The order this payment attempt collects money for or saves a payment method for..

- Value shape: string. The order this payment attempt collects money for or saves a payment method for. The order this payment attempt collects money for or saves a payment method for. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. The order this payment attempt collects money for or saves a payment method for. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.order_payment_attempt_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.order_payment_attempt_id variant 1

anyOf variant 1: Unique identifier for this order payment attempt, prefixed `opat_`..

- Value shape: string. Unique identifier for this order payment attempt, prefixed `opat_`. Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.order_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order payment attempt, prefixed `opat_`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1

anyOf variant 1: The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone..

- Value shape: Array of object. The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 2

anyOf variant 2.

- Value shape: null. The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `authorization_expires_at` | Optional | string or null | Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. `authorization_expires_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1payment_intents-variant-1-fields-1authorization_expires_at). |
| `capturable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. |
| `captured_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected through this payment, once nothing more can be collected. Positive when money was collected, including a payment Flint couldn't accept and is refunding (the payment intent's cancellation_reason is payment_returned). Zero when nothing was collected, for example after a decline or a released authorization. Absent while the outcome can still change, such as an ACH debit that hasn't settled or an open hold. |
| `last_payment_error` | Optional | Alternative shapes (see declared variants) | The most recent payment error recorded on this payment, when it has a public error code. Absent when none is recorded. `last_payment_error`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1payment_intents-variant-1-fields-1last_payment_error). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1payment_intent_id). |
| `reader_id` | Optional | string or null | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. `reader_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1payment_intents-variant-1-fields-1reader_id). |
| `selected_payment_option` | Optional | string or null | Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `selected_payment_option`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1payment_intents-variant-1-fields-1selected_payment_option). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesstatus). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of `amount_money` that is a tip. Zero when the payment carries no tip. |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.authorization_expires_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.authorization_expires_at variant 1

anyOf variant 1: Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed..

- Value shape: string. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.authorization_expires_at variant 2

anyOf variant 2.

- Value shape: null. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.last_payment_error

The most recent payment error recorded on this payment, when it has a public error code. Absent when none is recorded.

Field definitions: [shared fields](#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. The most recent payment error recorded on this payment, when it has a public error code. Absent when none is recorded. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.last_payment_error variant 1.code

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.code](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1code).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.last_payment_error variant 1.failed_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.failed_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1failed_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.last_payment_error variant 1.message

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.message](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1message).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.last_payment_error variant 1.remediation

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1remediation).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.payment_intent_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.payment_intent_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1payment_intent_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.reader_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.reader_id variant 1

anyOf variant 1: The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now..

- Value shape: string. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.reader_id variant 2

anyOf variant 2.

- Value shape: null. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.selected_payment_option

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.selected_payment_option variant 1

anyOf variant 1: Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected..

- Value shape: string. Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.selected_payment_option variant 2

anyOf variant 2.

- Value shape: null. Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_intents variant 1.[] fields 1.status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesstatus).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save

Reports only a checkout buyer's skipped save when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A merchant save has no entry here; read payment_source.card.payment_method_id on the payment intent. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Conditional | string or null | payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. Values: `"payment_method_not_saveable"`, `"other"`. `reason`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1payment_method_save-variant-1reason). |
| `status` | Conditional | string or null | not_saved: the payment went ahead without saving the payment method. The values can grow. Values: `"not_saved"`. `status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1payment_method_save-variant-1status). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save variant 1: `status` = `"not_saved"`

anyOf OrderPaymentAttemptPaymentMethodSavePreviousAttributes.

- Optional: `reason`, `status`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save variant 2

anyOf variant 2.

- Undeclared: `reason`, `status`.
- Value shape: null. Reports only a checkout buyer's skipped save when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A merchant save has no entry here; read payment_source.card.payment_method_id on the payment intent. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save variant 1.reason

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save variant 1.reason variant 1

anyOf variant 1: payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow..

- Value shape: string. payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. Values: `"payment_method_not_saveable"`, `"other"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save variant 1.reason variant 2

anyOf variant 2.

- Value shape: null. payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save variant 1.status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save variant 1.status variant 1

anyOf variant 1: not_saved: the payment went ahead without saving the payment method. The values can grow..

- Value shape: string. not_saved: the payment went ahead without saving the payment method. The values can grow. Values: `"not_saved"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.payment_method_save variant 1.status variant 2

anyOf variant 2.

- Value shape: null. not_saved: the payment went ahead without saving the payment method. The values can grow. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1

anyOf variant 1: Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt..

- Value shape: Array of object. Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 2

anyOf variant 2.

- Value shape: null. Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`. `action_type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1action_type). |
| `client_action` | Optional | Alternative shapes (see declared variants) or null | How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. `client_action`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action). |
| `expires_at` | Optional | string or null | When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. `expires_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1expires_at). |
| `pending_action_id` | Optional | string or null | Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. `pending_action_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1pending_action_id). |
| `subject` | Optional | Alternative shapes (see declared variants) | The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. `subject`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1subject). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.action_type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.action_type variant 1

anyOf variant 1: Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app..

- Value shape: string. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.action_type variant 2

anyOf variant 2.

- Value shape: null. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action

How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Conditional | string or null | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-1type), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2type). |
| `url` | Conditional | string or null | Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. `url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-1url). |
| `stripe` | Conditional | Alternative shapes (see declared variants) | Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. `stripe`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 1: `type` = `"url"`

anyOf PaymentClientActionPreviousAttributes; anyOf PaymentClientActionURLPreviousAttributes.

- Optional: `type`, `url`.
- Undeclared: `stripe`.
- Constraints for `type`: Values: `"url"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2: `type` = `"stripe"`

anyOf PaymentClientActionPreviousAttributes; anyOf PaymentClientActionStripePreviousAttributes.

- Optional: `stripe`, `type`.
- Undeclared: `url`.
- Constraints for `type`: Values: `"stripe"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 3

anyOf variant 2.

- Undeclared: `type`, `url`, `stripe`.
- Value shape: null. How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 1.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 1.type variant 1

anyOf variant 1: Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction..

- Value shape: string. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"url"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 1.url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 1.url variant 1

anyOf variant 1: Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2..

- Value shape: string. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. minLength: `1`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 1.url variant 2

anyOf variant 2.

- Value shape: null. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe

Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Conditional | string or null or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. `account_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1account_id). |
| `payment_intent` | Conditional | Alternative shapes (see declared variants) | PaymentIntent authority for an order payment authentication action. `payment_intent`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1payment_intent). |
| `publishable_key` | Conditional | string or null | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. `publishable_key`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1publishable_key). |
| `setup_intent` | Conditional | Alternative shapes (see declared variants) | SetupIntent authority for a saved-payment-method authentication action. `setup_intent`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1setup_intent). |
| `terminal_payment_intent` | Conditional | Alternative shapes (see declared variants) | Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. `terminal_payment_intent`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1terminal_payment_intent). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1

anyOf StripePaymentClientActionPreviousAttributes.

- Optional: `account_id`, `payment_intent`, `publishable_key`, `setup_intent`, `terminal_payment_intent`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 2

anyOf variant 2.

- Undeclared: `account_id`, `payment_intent`, `publishable_key`, `setup_intent`, `terminal_payment_intent`.
- Value shape: null. Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.account_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field..

- Value shape: (string or null). Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Example: `"acct_1234567890"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent

PaymentIntent authority for an order payment authentication action.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Conditional | string or null | PaymentIntent client secret to pass to Stripe.js handleNextAction. `client_secret`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1payment_intent-variant-1client_secret). |
| `stripe_js_call` | Conditional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1payment_intent-variant-1stripe_js_call). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 1: `stripe_js_call` = `"handle_next_action"`

anyOf StripePaymentIntentClientActionPreviousAttributes.

- Optional: `client_secret`, `stripe_js_call`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 2

anyOf variant 2.

- Undeclared: `client_secret`, `stripe_js_call`.
- Value shape: null. PaymentIntent authority for an order payment authentication action. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 1.client_secret

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 1.client_secret variant 1

anyOf variant 1: PaymentIntent client secret to pass to Stripe.js handleNextAction..

- Value shape: string. PaymentIntent client secret to pass to Stripe.js handleNextAction. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 1.client_secret variant 2

anyOf variant 2.

- Value shape: null. PaymentIntent client secret to pass to Stripe.js handleNextAction. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 1.stripe_js_call

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 1.stripe_js_call variant 1

anyOf variant 1: Stripe.js operation to perform. Today this is handle_next_action..

- Value shape: string. Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 1.stripe_js_call variant 2

anyOf variant 2.

- Value shape: null. Stripe.js operation to perform. Today this is handle_next_action. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.publishable_key

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.publishable_key variant 1

anyOf variant 1: Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field..

- Value shape: string. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.publishable_key variant 2

anyOf variant 2.

- Value shape: null. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.setup_intent

SetupIntent authority for a saved-payment-method authentication action.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Conditional | string or null | SetupIntent client secret to pass to Stripe.js handleNextAction. `client_secret`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1setup_intent-variant-1client_secret). |
| `stripe_js_call` | Conditional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1payment_intent-variant-1stripe_js_call). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.setup_intent variant 1: `stripe_js_call` = `"handle_next_action"`

anyOf StripeSetupIntentClientActionPreviousAttributes.

- Optional: `client_secret`, `stripe_js_call`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.setup_intent variant 2

anyOf variant 2.

- Undeclared: `client_secret`, `stripe_js_call`.
- Value shape: null. SetupIntent authority for a saved-payment-method authentication action. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.setup_intent variant 1.client_secret

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.setup_intent variant 1.client_secret variant 1

anyOf variant 1: SetupIntent client secret to pass to Stripe.js handleNextAction..

- Value shape: string. SetupIntent client secret to pass to Stripe.js handleNextAction. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.setup_intent variant 1.client_secret variant 2

anyOf variant 2.

- Value shape: null. SetupIntent client secret to pass to Stripe.js handleNextAction. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.setup_intent variant 1.stripe_js_call

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.payment_intent variant 1.stripe_js_call](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1payment_intent-variant-1stripe_js_call).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent

Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Conditional | string or null | Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. `client_secret`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1terminal_payment_intent-variant-1client_secret). |
| `stripe_terminal_sdk_call` | Conditional | string or null | Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Values: `"collect_and_confirm_payment_intent"`. `stripe_terminal_sdk_call`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1client_action-variant-2stripe-variant-1terminal_payment_intent-variant-1stripe_terminal_sdk_call). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1: `stripe_terminal_sdk_call` = `"collect_and_confirm_payment_intent"`

anyOf StripeTerminalPaymentIntentClientActionPreviousAttributes.

- Optional: `client_secret`, `stripe_terminal_sdk_call`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent variant 2

anyOf variant 2.

- Undeclared: `client_secret`, `stripe_terminal_sdk_call`.
- Value shape: null. Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.client_secret

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.client_secret variant 1

anyOf variant 1: Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader..

- Value shape: string. Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.client_secret variant 2

anyOf variant 2.

- Value shape: null. Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.stripe_terminal_sdk_call

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.stripe_terminal_sdk_call variant 1

anyOf variant 1: Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment..

- Value shape: string. Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Values: `"collect_and_confirm_payment_intent"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.stripe_terminal_sdk_call variant 2

anyOf variant 2.

- Value shape: null. Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.type variant 1

anyOf variant 1: Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction..

- Value shape: string. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"stripe"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.client_action variant 2.type variant 2

anyOf variant 2.

- Value shape: null. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.expires_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.expires_at variant 1

anyOf variant 1: When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled..

- Value shape: string. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.pending_action_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.pending_action_id variant 1

anyOf variant 1: Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt..

- Value shape: string. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Example: `"pendact_01KEZF7C00SVMRXWKVZX6R9822"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.pending_action_id variant 2

anyOf variant 2.

- Value shape: null. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject

The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent` | Conditional | Alternative shapes (see declared variants) | PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. `payment_intent`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1subject-variant-1payment_intent). |
| `setup_payment_source` | Conditional | Alternative shapes (see declared variants) | Future-billing payment method setup that requires buyer authentication. `setup_payment_source`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1subject-variant-1setup_payment_source). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1

anyOf PendingPaymentActionSubjectPreviousAttributes.

- Optional: `payment_intent`, `setup_payment_source`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 2

anyOf variant 2.

- Undeclared: `payment_intent`, `setup_payment_source`.
- Value shape: null. The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.payment_intent

PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Conditional | string or null | ID of the payment intent that needs the buyer's action. `payment_intent_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1subject-variant-1payment_intent-variant-1payment_intent_id). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.payment_intent variant 1

anyOf PendingPaymentActionPaymentIntentSubjectPreviousAttributes.

- Optional: `payment_intent_id`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.payment_intent variant 2

anyOf variant 2.

- Undeclared: `payment_intent_id`.
- Value shape: null. PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.payment_intent variant 1.payment_intent_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.payment_intent variant 1.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that needs the buyer's action..

- Value shape: string. ID of the payment intent that needs the buyer's action. ID of the payment intent that needs the buyer's action. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.payment_intent variant 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that needs the buyer's action. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.setup_payment_source

Future-billing payment method setup that requires buyer authentication.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Conditional | string or null | ID of the payment method being saved, which needs the buyer's authentication first. `payment_method_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1pending_actions-variant-1-fields-1subject-variant-1setup_payment_source-variant-1payment_method_id). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.setup_payment_source variant 1

anyOf PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes.

- Optional: `payment_method_id`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.setup_payment_source variant 2

anyOf variant 2.

- Undeclared: `payment_method_id`.
- Value shape: null. Future-billing payment method setup that requires buyer authentication. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.setup_payment_source variant 1.payment_method_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.setup_payment_source variant 1.payment_method_id variant 1

anyOf variant 1: ID of the payment method being saved, which needs the buyer's authentication first..

- Value shape: string. ID of the payment method being saved, which needs the buyer's authentication first. ID of the payment method being saved, which needs the buyer's authentication first. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions variant 1.[] fields 1.subject variant 1.setup_payment_source variant 1.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment method being saved, which needs the buyer's authentication first. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.started_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.status variant 1

anyOf variant 1: Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final..

- Value shape: string. Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Values: `"processing"`, `"requires_action"`, `"requires_capture"`, `"partially_succeeded"`, `"succeeded"`, `"failed"`, `"expired"`, `"canceled"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.status_reason

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.status_reason variant 1

anyOf variant 1: Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added..

- Value shape: string. Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: `"authorization_canceled"`, `"canceled_on_reader"`, `"reader_unavailable"`, `"coupon_reservation_failed"`, `"gift_card_hold_acquisition_failed"`, `"invalid_payment_source"`, `"inventory_unavailable"`, `"order_changed_before_payment"`, `"order_payment_customer_mismatch"`, `"other"`, `"payment_authorization_canceled"`, `"payment_authorization_expired"`, `"payment_confirmation_rejected"`, `"payment_link_capacity_claim_failed"`, `"payment_link_capacity_validation_failed"`, `"payment_method_activation_pending"`, `"payment_method_required"`, `"payment_option_not_allowed"`, `"payment_option_unavailable"`, `"payment_returned"`, `"payment_source_binding_failed"`, `"payment_source_conflict"`, `"payment_source_not_updatable"`, `"payment_source_ownership_mismatch"`, `"resource_guarantee_failed"`, `"setup_action_unavailable"`, `"setup_hold_acquisition_failed"`, `"setup_result_incomplete"`, `"tip_allocation_sync_failed"`, `"zero_balance_hold_acquisition_failed"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.status_reason variant 2

anyOf variant 2.

- Value shape: null. Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.supported_actions

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. Items values: `"cancel"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact

Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1

anyOf CheckoutBuyerContactPreviousAttributes.

- Optional: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 2

anyOf variant 2.

- Undeclared: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.
- Value shape: null. Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.email

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.email](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1email).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.is_email_cleared

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.is_email_cleared](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1is_email_cleared).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.is_phone_cleared

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.is_phone_cleared](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1is_phone_cleared).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.phone

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.phone](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1phone).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1updated_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields

What checkout asks the buyer for. Each field you leave out uses your checkout settings.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_autocomplete_enabled` | Conditional | boolean or null | Whether checkout offers address suggestions while the buyer enters an address. `address_autocomplete_enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_fields-variant-1address_autocomplete_enabled). |
| `require_billing_address` | Conditional | boolean or null | Whether checkout requires the buyer's billing address. `require_billing_address`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_fields-variant-1require_billing_address). |
| `require_email` | Conditional | boolean or null | Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. `require_email`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_fields-variant-1require_email). |
| `require_phone` | Conditional | boolean or null | Whether checkout requires the buyer's phone number. `require_phone`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_fields-variant-1require_phone). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1

anyOf CheckoutBuyerFieldsPreviousAttributes.

- Optional: `address_autocomplete_enabled`, `require_billing_address`, `require_email`, `require_phone`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 2

anyOf variant 2.

- Undeclared: `address_autocomplete_enabled`, `require_billing_address`, `require_email`, `require_phone`.
- Value shape: null. What checkout asks the buyer for. Each field you leave out uses your checkout settings. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.address_autocomplete_enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.address_autocomplete_enabled variant 1

anyOf variant 1: Whether checkout offers address suggestions while the buyer enters an address..

- Value shape: boolean. Whether checkout offers address suggestions while the buyer enters an address. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.address_autocomplete_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout offers address suggestions while the buyer enters an address. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_billing_address

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_billing_address variant 1

anyOf variant 1: Whether checkout requires the buyer's billing address..

- Value shape: boolean. Whether checkout requires the buyer's billing address. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_billing_address variant 2

anyOf variant 2.

- Value shape: null. Whether checkout requires the buyer's billing address. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_email

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_email variant 1

anyOf variant 1: Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan..

- Value shape: boolean. Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_email variant 2

anyOf variant 2.

- Value shape: null. Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_phone

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_phone variant 1

anyOf variant 1: Whether checkout requires the buyer's phone number..

- Value shape: boolean. Whether checkout requires the buyer's phone number. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_fields variant 1.require_phone variant 2

anyOf variant 2.

- Value shape: null. Whether checkout requires the buyer's phone number. 

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

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. maxItems: `20`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 2

anyOf variant 2.

- Value shape: null. The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | (string or null) | The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`. `custom_field_type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1-variant-1custom_field_type), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1-variant-2custom_field_type), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1-variant-3custom_field_type), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1-variant-4custom_field_type). |
| `key` | Optional | string or null | The field's `key` when checkout started. `key`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1key). |
| `label` | Optional | string or null | The question the buyer saw: the field's `label` when checkout started. `label`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1label). |
| `payment_link_custom_field_id` | Optional | string or null | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. `payment_link_custom_field_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1payment_link_custom_field_id). |
| `value` | Optional | Varies by condition | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `value`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1-variant-1value), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1-variant-3value), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1-variant-4value). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1: `custom_field_type` = `"text"`

anyOf CustomFieldAnswerTextPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"text"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The buyer's answer exactly as entered, from 1 to the field's `max_length` characters.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 2: `custom_field_type` = `"textarea"`

anyOf CustomFieldAnswerTextareaPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"textarea"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The buyer's answer exactly as entered, from 1 to the field's `max_length` characters.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3: `custom_field_type` = `"dropdown"`

anyOf CustomFieldAnswerDropdownPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"dropdown"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The option the buyer chose, exactly as the link listed it when checkout started.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4: `custom_field_type` = `"checkbox"`

anyOf CustomFieldAnswerCheckboxPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"checkbox"`.
- Constraints for `value`: ((string or boolean) or null) and (boolean or null). `true` when the buyer checked the box, `false` when they left an optional box unchecked.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.custom_field_type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.key

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.key variant 1

anyOf variant 1: The field's `key` when checkout started..

- Value shape: string. The field's `key` when checkout started. The field's `key` when checkout started. minLength: `1`. maxLength: `243`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.key variant 2

anyOf variant 2.

- Value shape: null. The field's `key` when checkout started. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.label

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.label variant 1

anyOf variant 1: The question the buyer saw: the field's `label` when checkout started..

- Value shape: string. The question the buyer saw: the field's `label` when checkout started. The question the buyer saw: the field's `label` when checkout started. minLength: `1`. maxLength: `255`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.label variant 2

anyOf variant 2.

- Value shape: null. The question the buyer saw: the field's `label` when checkout started. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.payment_link_custom_field_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.payment_link_custom_field_id variant 1

anyOf variant 1: ID of the payment link custom field the buyer answered. The link may have changed or removed the field since..

- Value shape: string. ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. pattern: `^plcf_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plcf_01KEZF7C00JBQMP98WBXZA3RHS"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1.payment_link_custom_field_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.value

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.value variant 1

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.value variant 2

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.value variant 3, 5

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.value variant 4

anyOf group 2 variant 1: The buyer's answer exactly as entered, from 1 to the field's `max_length` characters..

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 2.custom_field_type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 2.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 2.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 2.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"textarea"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 2.value

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 1.value](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1-variant-1value).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.custom_field_type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"dropdown"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.value

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.value variant 1

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.value variant 2

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.value variant 3, 5

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 3.value variant 4

anyOf group 2 variant 1: The option the buyer chose, exactly as the link listed it when checkout started..

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.custom_field_type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"checkbox"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.value

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.value variant 1

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. minLength: `1`. maxLength: `4096`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.value variant 2

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.value variant 3, 5

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1 variant 4.value variant 4

anyOf group 2 variant 1: `true` when the buyer checked the box, `false` when they left an optional box unchecked..

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text

The custom text this session shows in checkout.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Conditional | string or null | Message shown near the order summary in checkout. `order_summary_message`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_text-variant-1order_summary_message). |
| `shipping_address_label` | Conditional | string or null | Label shown for the shipping address in checkout. `shipping_address_label`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_text-variant-1shipping_address_label). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text variant 1

anyOf CheckoutCustomTextConfigPreviousAttributes.

- Optional: `order_summary_message`, `shipping_address_label`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text variant 2

anyOf variant 2.

- Undeclared: `order_summary_message`, `shipping_address_label`.
- Value shape: null. The custom text this session shows in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text variant 1.order_summary_message

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text variant 1.order_summary_message variant 1

anyOf variant 1: Message shown near the order summary in checkout..

- Value shape: string. Message shown near the order summary in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text variant 1.order_summary_message variant 2

anyOf variant 2.

- Value shape: null. Message shown near the order summary in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text variant 1.shipping_address_label

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text variant 1.shipping_address_label variant 1

anyOf variant 1: Label shown for the shipping address in checkout..

- Value shape: string. Label shown for the shipping address in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_text variant 1.shipping_address_label variant 2

anyOf variant 2.

- Value shape: null. Label shown for the shipping address in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer

Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1

anyOf variant 1: Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.; anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 2, 3

anyOf variant 1: Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.; anyOf variant 2; anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.email

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.email](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1email).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.name

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.name](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1name).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.phone

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.phone](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1phone).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.status

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer..

- Value shape: string. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery

Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_reasons` | Conditional | Array of string or null | Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. `buyer_reasons`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1buyer_reasons). |
| `choice_groups` | Conditional | Array of object or null | Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. `choice_groups`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups). |
| `delivery_quote_id` | Conditional | string or null | ID of the checkout's current delivery quote. Omitted until the checkout has one. `delivery_quote_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1delivery_quote_id). |
| `delivery_selection_id` | Conditional | string or null or null | Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. `delivery_selection_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1delivery_selection_id). |
| `evaluation_status` | Conditional | string or null | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. `evaluation_status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1evaluation_status). |
| `expires_at` | Conditional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `input_requirements` | Conditional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. `input_requirements`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1input_requirements). |
| `merchant_diagnostics` | Conditional | Array of object or null | Always present with an API key or dashboard credential. `merchant_diagnostics`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1

anyOf CheckoutDerivedDeliveryResourcePreviousAttributes.

- Optional: `buyer_reasons`, `choice_groups`, `delivery_quote_id`, `delivery_selection_id`, `evaluation_status`, `expires_at`, `input_requirements`, `merchant_diagnostics`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 2

anyOf variant 2.

- Undeclared: `buyer_reasons`, `choice_groups`, `delivery_quote_id`, `delivery_selection_id`, `evaluation_status`, `expires_at`, `input_requirements`, `merchant_diagnostics`.
- Value shape: null. Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.buyer_reasons

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.buyer_reasons variant 1

anyOf variant 1: Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available..

- Value shape: Array of string. Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.buyer_reasons variant 2

anyOf variant 2.

- Value shape: null. Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1

anyOf variant 1: Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote..

- Value shape: Array of object. Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 2

anyOf variant 2.

- Value shape: null. Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of object or null | Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. `address_advisories`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1address_advisories). |
| `allowed_types` | Optional | Array of string or null | Delivery types permitted by this group's items. `allowed_types`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1allowed_types). |
| `availability_status` | Optional | string or null | Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`. `availability_status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1availability_status). |
| `candidate_outcomes` | Optional | Map of (object and Alternative shapes (see declared variants)) or null | Evaluation result for each candidate delivery method, keyed by its method ID. `candidate_outcomes`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes). |
| `delivery_choice_group_id` | Optional | string or null | Identifier used to choose one option for this group. `delivery_choice_group_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1delivery_choice_group_id). |
| `evaluation_status` | Optional | string or null | How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. `evaluation_status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1evaluation_status). |
| `execution_legs` | Optional | Array of object or null | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1execution_legs). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs this group's delivery methods need before they can be priced or selected. `input_requirements`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1input_requirements). |
| `line_items` | Optional | Array of object or null | Order line items, or bundle components, this group covers, with the quantity covered. `line_items`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1line_items). |
| `method_types` | Optional | Array of string or null | Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`. `method_types`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1method_types). |
| `options` | Optional | Array of object or null | Delivery options the buyer can choose now. `options`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1options). |
| `previously_selected_delivery_method_id` | Optional | string or null | Method chosen for this group in the previous selection. Omitted when there is none. `previously_selected_delivery_method_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1previously_selected_delivery_method_id). |
| `stable_key` | Optional | string or null | Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. `stable_key`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1stable_key). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1

anyOf variant 1: Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently..

- Value shape: Array of object. Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 2

anyOf variant 2.

- Value shape: null. Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Optional | string or null | Which address the advisory is about. Values: `"destination_address"`, `"buyer_location"`. `role`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1address_advisories-variant-1-fields-1role). |
| `suggested_address` | Optional | Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `suggested_address`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1address_advisories-variant-1-fields-1suggested_address). |
| `verification_state` | Optional | string or null | How far address verification got. Values: `"needs_review"`, `"unverifiable"`. `verification_state`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1address_advisories-variant-1-fields-1verification_state). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.role

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.role variant 1

anyOf variant 1: Which address the advisory is about..

- Value shape: string. Which address the advisory is about. Values: `"destination_address"`, `"buyer_location"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.role variant 2

anyOf variant 2.

- Value shape: null. Which address the advisory is about. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address

Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.verification_state

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.verification_state variant 1

anyOf variant 1: How far address verification got..

- Value shape: string. How far address verification got. Values: `"needs_review"`, `"unverifiable"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.verification_state variant 2

anyOf variant 2.

- Value shape: null. How far address verification got. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.allowed_types

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.allowed_types variant 1

anyOf variant 1: Delivery types permitted by this group's items..

- Value shape: Array of string. Delivery types permitted by this group's items. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.allowed_types variant 2

anyOf variant 2.

- Value shape: null. Delivery types permitted by this group's items. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.availability_status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.availability_status variant 1

anyOf variant 1: Whether this group has a delivery option the buyer can choose..

- Value shape: string. Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.availability_status variant 2

anyOf variant 2.

- Value shape: null. Whether this group has a delivery option the buyer can choose. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1

anyOf variant 1.

- Value shape: Map of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). Evaluation result for each candidate delivery method, keyed by its method ID. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 2

anyOf variant 2.

- Value shape: null. Evaluation result for each candidate delivery method, keyed by its method ID. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of object or null | Address verification results that affected this method. Omitted when there are none. `address_advisories`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1address_advisories). |
| `expected_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field. |
| `failure_category` | Optional | string or null | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). `failure_category`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1failure_category). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. `input_requirements`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements). |
| `option` | Optional | Alternative shapes (see declared variants) | The option the method produced. Set only when `type` is `available`. `option`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option). |
| `retryable` | Optional | boolean or null | Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. `retryable`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1retryable). |
| `type` | Optional | (string or null) | What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1-variant-1type), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1-variant-2type), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1-variant-3type), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1-variant-4type), [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1-variant-5type). |
| `unavailable_reason` | Optional | string or null | Why the method is unavailable and the action that can make it eligible. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [8 declared values](#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1-unavailable_reason-values). `unavailable_reason`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1unavailable_reason). |

#### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 1: `type` = `"available"`

anyOf DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.

- Constraints for `type`: Values: `"available"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 2: `type` = `"unavailable"`

anyOf DeliveryCandidateOutcomeResourceUnavailablePreviousAttributes.

- Constraints for `type`: Values: `"unavailable"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 3: `type` = `"input_required"`

anyOf DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributes.

- Constraints for `type`: Values: `"input_required"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 4: `type` = `"cannot_calculate"`

anyOf DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributes.

- Constraints for `type`: Values: `"cannot_calculate"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 5: `type` = `"requires_checkout_context"`

anyOf DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributes.

- Constraints for `type`: Values: `"requires_checkout_context"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.address_advisories

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.address_advisories variant 1

anyOf variant 1: Address verification results that affected this method. Omitted when there are none..

- Value shape: Array of object. Address verification results that affected this method. Omitted when there are none. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.address_advisories variant 2

anyOf variant 2.

- Value shape: null. Address verification results that affected this method. Omitted when there are none. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.address_advisories variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1address_advisories-variant-1-fields-1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.failure_category

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.failure_category variant 1

anyOf variant 1: Why Flint could not calculate the method and the action that can make calculation succeed.
- `dependency_failure`: Retry after the dependent service recovers.
- `timeout`: Retry after the timed-out dependency recovers.
- `malformed_response`: Fix the callback response so it matches the documented response schema, then retry.
- `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry.
- `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
- `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry.
- `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy.
- `pricing_failure`: Fix the method pricing configuration or matching rate, then retry.
- `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry.
- `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes.
- `geography_failure`: Fix the destination, origin, or geographic configuration, then retry.
- `routing_failure`: Fix inventory routing or origin assignment, then retry.
- `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry.
- `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry.
- `address_verification_failed`: Correct the address fields rejected by verification, then retry.
- `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available..

- Value shape: string. Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: `"dependency_failure"`, `"timeout"`, `"malformed_response"`, `"callback_transport_failure"`, `"callback_circuit_open"`, `"callback_result_invalid"`, `"callback_unavailable"`, `"pricing_failure"`, `"schedule_failure"`, `"option_lifetime_too_short"`, `"geography_failure"`, `"routing_failure"`, `"invalid_configuration"`, `"invalid_buyer_input"`, `"address_verification_failed"`, `"address_could_not_be_verified"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.failure_category variant 2

anyOf variant 2.

- Value shape: null. Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1

anyOf variant 1: Inputs the method needs before Flint can price it. Set only when `type` is `input_required`..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Optional | Alternative shapes (see declared variants) | The rules the input must follow. `constraint`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint). |
| `delivery_choice_group_ids` | Optional | Array of string or null | Choice groups that need this input. `delivery_choice_group_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1delivery_choice_group_ids). |
| `delivery_input_requirement_id` | Optional | string or null | Unique ID of this requirement. `delivery_input_requirement_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1delivery_input_requirement_id). |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods that need this input. `delivery_method_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1delivery_method_ids). |
| `delivery_option_ids` | Optional | Array of string or null | Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. `delivery_option_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1delivery_option_ids). |
| `field_path` | Optional | string or null | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [20 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). `field_path`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1field_path). |
| `purpose` | Optional | string or null | When the input is needed. Values: `"quote"`, `"selection"`, `"pickup_availability"`. `purpose`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1purpose). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint

The rules the input must follow.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Conditional | Array of string or null | Values the input must be one of. `allowed_values`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1allowed_values). |
| `earliest_at` | Conditional | string or null | Earliest time the input can name. `earliest_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1earliest_at). |
| `format` | Conditional | string or null | Format the input must follow. `format`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1format). |
| `latest_at` | Conditional | string or null | Latest time the input can name. `latest_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1latest_at). |
| `maximum_length` | Conditional | integer or null | Most characters the input can have. `maximum_length`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1maximum_length). |
| `minimum_length` | Conditional | integer or null | Fewest characters the input can have. `minimum_length`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1minimum_length). |
| `offered_windows` | Conditional | Array of object or null | Delivery windows the buyer can choose from. `offered_windows`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1offered_windows). |
| `supported_countries` | Conditional | Array of string or null | Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. `supported_countries`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1supported_countries). |
| `type` | Conditional | string or null | Kind of input the requirement asks for. Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1type). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1

anyOf DeliveryInputConstraintPreviousAttributes.

- Optional: `allowed_values`, `earliest_at`, `format`, `latest_at`, `maximum_length`, `minimum_length`, `offered_windows`, `supported_countries`, `type`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 2

anyOf variant 2.

- Undeclared: `allowed_values`, `earliest_at`, `format`, `latest_at`, `maximum_length`, `minimum_length`, `offered_windows`, `supported_countries`, `type`.
- Value shape: null. The rules the input must follow. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.allowed_values

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.allowed_values variant 1

anyOf variant 1: Values the input must be one of..

- Value shape: Array of string. Values the input must be one of. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.allowed_values variant 2

anyOf variant 2.

- Value shape: null. Values the input must be one of. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.earliest_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.earliest_at variant 1

anyOf variant 1: Earliest time the input can name..

- Value shape: string. Earliest time the input can name. Earliest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.earliest_at variant 2

anyOf variant 2.

- Value shape: null. Earliest time the input can name. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.format

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.format variant 1

anyOf variant 1: Format the input must follow..

- Value shape: string. Format the input must follow. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.format variant 2

anyOf variant 2.

- Value shape: null. Format the input must follow. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.latest_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.latest_at variant 1

anyOf variant 1: Latest time the input can name..

- Value shape: string. Latest time the input can name. Latest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.latest_at variant 2

anyOf variant 2.

- Value shape: null. Latest time the input can name. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.maximum_length

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.maximum_length variant 1

anyOf variant 1: Most characters the input can have..

- Value shape: integer. Most characters the input can have. Most characters the input can have. Format: `int32`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.maximum_length variant 2

anyOf variant 2.

- Value shape: null. Most characters the input can have. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.minimum_length

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.minimum_length variant 1

anyOf variant 1: Fewest characters the input can have..

- Value shape: integer. Fewest characters the input can have. Fewest characters the input can have. Format: `int32`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.minimum_length variant 2

anyOf variant 2.

- Value shape: null. Fewest characters the input can have. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1

anyOf variant 1: Delivery windows the buyer can choose from..

- Value shape: Array of object. Delivery windows the buyer can choose from. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 2

anyOf variant 2.

- Value shape: null. Delivery windows the buyer can choose from. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of delivery in this window. |
| `delivery_window_id` | Optional | string or null | ID of this window. The buyer sends it to choose the window. `delivery_window_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1offered_windows-variant-1-fields-1delivery_window_id). |
| `end_at` | Optional | string or null | End of this delivery window. `end_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1offered_windows-variant-1-fields-1end_at). |
| `expires_at` | Optional | string or null | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. `expires_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1offered_windows-variant-1-fields-1expires_at). |
| `start_at` | Optional | string or null | Start of this delivery window. `start_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1offered_windows-variant-1-fields-1start_at). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.delivery_window_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.delivery_window_id variant 1

anyOf variant 1: ID of this window. The buyer sends it to choose the window..

- Value shape: string. ID of this window. The buyer sends it to choose the window. ID of this window. The buyer sends it to choose the window. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of this window. The buyer sends it to choose the window. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.end_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.end_at variant 1

anyOf variant 1: End of this delivery window..

- Value shape: string. End of this delivery window. End of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.end_at variant 2

anyOf variant 2.

- Value shape: null. End of this delivery window. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.expires_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.expires_at variant 1

anyOf variant 1: Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier..

- Value shape: string. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.start_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.start_at variant 1

anyOf variant 1: Start of this delivery window..

- Value shape: string. Start of this delivery window. Start of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1.start_at variant 2

anyOf variant 2.

- Value shape: null. Start of this delivery window. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.supported_countries

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.supported_countries variant 1

anyOf variant 1: Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them..

- Value shape: Array of string. Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.supported_countries variant 2

anyOf variant 2.

- Value shape: null. Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.type variant 1

anyOf variant 1: Kind of input the requirement asks for..

- Value shape: string. Kind of input the requirement asks for. Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Kind of input the requirement asks for. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_choice_group_ids

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_choice_group_ids variant 1

anyOf variant 1: Choice groups that need this input..

- Value shape: Array of string. Choice groups that need this input. Items: Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_choice_group_ids variant 2

anyOf variant 2.

- Value shape: null. Choice groups that need this input. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_input_requirement_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_input_requirement_id variant 1

anyOf variant 1: Unique ID of this requirement..

- Value shape: string. Unique ID of this requirement. Unique ID of this requirement. Example: `"req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_input_requirement_id variant 2

anyOf variant 2.

- Value shape: null. Unique ID of this requirement. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_method_ids

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_method_ids variant 1

anyOf variant 1: Delivery methods that need this input..

- Value shape: Array of string. Delivery methods that need this input. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods that need this input. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_option_ids

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_option_ids variant 1

anyOf variant 1: Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole..

- Value shape: Array of string. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. Items: Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_option_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.field_path

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.field_path variant 1

anyOf variant 1: Request property to fill in, using the same path as error params. Array templates use [] in place of an index..

- Value shape: string. Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: `"destination_address"`, `"destination_address.line1"`, `"destination_address.line2"`, `"destination_address.city"`, `"destination_address.country"`, `"destination_address.state"`, `"destination_address.postal_code"`, `"buyer_location"`, `"buyer_location.address.line1"`, `"buyer_location.address.line2"`, `"buyer_location.address.city"`, `"buyer_location.address.country"`, `"buyer_location.address.state"`, `"buyer_location.address.postal_code"`, `"buyer_location.coordinate"`, `"recipient.name"`, `"recipient.email"`, `"recipient.phone"`, `"choices[].input.delivery_window_id"`, `"method_results"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.field_path variant 2

anyOf variant 2.

- Value shape: null. Request property to fill in, using the same path as error params. Array templates use [] in place of an index. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.purpose

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.purpose variant 1

anyOf variant 1: When the input is needed..

- Value shape: string. When the input is needed. Values: `"quote"`, `"selection"`, `"pickup_availability"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.purpose variant 2

anyOf variant 2.

- Value shape: null. When the input is needed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option

The option the method produced. Set only when `type` is `available`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery charge for this option. |
| `arrival_estimate` | Conditional | Alternative shapes (see declared variants) | Estimated arrival dates. Omitted when the method makes no timing promise. `arrival_estimate`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate). |
| `buyer_instructions` | Conditional | Alternative shapes (see declared variants) | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. `buyer_instructions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions). |
| `charge_tax_category` | Conditional | string or null | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1charge_tax_category). |
| `consumed_by_delivery_selection_id` | Conditional | string or null | ID of the delivery selection that chose this option. Omitted until a selection does. `consumed_by_delivery_selection_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1consumed_by_delivery_selection_id). |
| `delivery_method_id` | Conditional | string or null | ID of the delivery method that produced this option. `delivery_method_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_method_id). |
| `delivery_method_revision_id` | Conditional | string or null | ID of the method revision this option was priced from. `delivery_method_revision_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_method_revision_id). |
| `delivery_option_id` | Conditional | string or null | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. `delivery_option_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_option_id). |
| `delivery_plan` | Conditional | Alternative shapes (see declared variants) | How the option divides the items into deliveries. `delivery_plan`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_plan). |
| `description` | Conditional | string or null | Buyer-visible description of the option. Omitted when the method has none. `description`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1description). |
| `display_position` | Conditional | integer or null | Position in which this option displays among the others. Lower values display first. `display_position`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1display_position). |
| `execution_legs` | Conditional | Array of object or null | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1execution_legs). |
| `expires_at` | Conditional | string or null | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. `expires_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1expires_at). |
| `local_delivery` | Conditional | Alternative shapes (see declared variants) | Local delivery details. Set only when `type` is `local_delivery`. `local_delivery`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery). |
| `name` | Conditional | string or null | Buyer-visible name of the option. `name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1name). |
| `offered_windows` | Conditional | Array of object or null | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1offered_windows). |
| `pickup` | Conditional | Alternative shapes (see declared variants) | Pickup details. Set only when `type` is `pickup`. `pickup`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup). |
| `recipient_requirements` | Conditional | Array of object or null | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recipient_requirements). |
| `recommended` | Conditional | boolean or null | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. `recommended`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recommended). |
| `shipment` | Conditional | Alternative shapes (see declared variants) | Shipment details. Set only when `type` is `shipment`. `shipment`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1shipment). |
| `taxable` | Conditional | boolean or null | Whether tax applies to the delivery charge. `taxable`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1taxable). |
| `timezone` | Conditional | string or null | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. `timezone`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1timezone). |
| `type` | Conditional | string or null | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1type). |
| `window_end_at` | Conditional | string or null | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_end_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_end_at). |
| `window_pricing` | Conditional | string or null | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. `window_pricing`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_pricing). |
| `window_selection` | Conditional | string or null | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. `window_selection`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_selection). |
| `window_start_at` | Conditional | string or null | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_start_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_start_at). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1

anyOf DeliveryOptionProjectionPreviousAttributes.

- Optional: `amount_money`, `arrival_estimate`, `buyer_instructions`, `charge_tax_category`, `consumed_by_delivery_selection_id`, `delivery_method_id`, `delivery_method_revision_id`, `delivery_option_id`, `delivery_plan`, `description`, `display_position`, `execution_legs`, `expires_at`, `local_delivery`, `name`, `offered_windows`, `pickup`, `recipient_requirements`, `recommended`, `shipment`, `taxable`, `timezone`, `type`, `window_end_at`, `window_pricing`, `window_selection`, `window_start_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `arrival_estimate`, `buyer_instructions`, `charge_tax_category`, `consumed_by_delivery_selection_id`, `delivery_method_id`, `delivery_method_revision_id`, `delivery_option_id`, `delivery_plan`, `description`, `display_position`, `execution_legs`, `expires_at`, `local_delivery`, `name`, `offered_windows`, `pickup`, `recipient_requirements`, `recommended`, `shipment`, `taxable`, `timezone`, `type`, `window_end_at`, `window_pricing`, `window_selection`, `window_start_at`.
- Value shape: null. The option the method produced. Set only when `type` is `available`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate

Estimated arrival dates. Omitted when the method makes no timing promise.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `earliest_date` | Conditional | string or null | Calendar date in the option timezone. Do not parse it as a UTC timestamp. `earliest_date`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate-variant-1earliest_date). |
| `latest_date` | Conditional | string or null | Calendar date in the option timezone. Do not parse it as a UTC timestamp. `latest_date`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate-variant-1earliest_date). |
| `timezone` | Conditional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate-variant-1timezone). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1

anyOf DeliveryArrivalEstimatePreviousAttributes.

- Optional: `earliest_date`, `latest_date`, `timezone`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 2

anyOf variant 2.

- Undeclared: `earliest_date`, `latest_date`, `timezone`.
- Value shape: null. Estimated arrival dates. Omitted when the method makes no timing promise. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.earliest_date

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.earliest_date variant 1

anyOf variant 1: Calendar date in the option timezone. Do not parse it as a UTC timestamp..

- Value shape: string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: `date`. Example: `"2026-08-02"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.earliest_date variant 2

anyOf variant 2.

- Value shape: null. Calendar date in the option timezone. Do not parse it as a UTC timestamp. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.latest_date

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.earliest_date](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate-variant-1earliest_date).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.timezone

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.timezone variant 1

anyOf variant 1: Uses an IANA time zone name..

- Value shape: string. Uses an IANA time zone name. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.timezone variant 2

anyOf variant 2.

- Value shape: null. Uses an IANA time zone name. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions

The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Conditional | boolean or null | Whether checkout collects buyer instructions. `enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions-variant-1enabled). |
| `label` | Conditional | string or null | Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. `label`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions-variant-1label). |
| `placeholder` | Conditional | string or null | Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. `placeholder`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions-variant-1placeholder). |
| `required` | Conditional | boolean or null | Whether the buyer must enter instructions before selecting the option. Requires enabled=true. `required`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions-variant-1required). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1

anyOf BuyerInstructionsConfigPreviousAttributes.

- Optional: `enabled`, `label`, `placeholder`, `required`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 2

anyOf variant 2.

- Undeclared: `enabled`, `label`, `placeholder`, `required`.
- Value shape: null. The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.enabled variant 1

anyOf variant 1: Whether checkout collects buyer instructions..

- Value shape: boolean. Whether checkout collects buyer instructions. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout collects buyer instructions. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.label

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.label variant 1

anyOf variant 1: Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted..

- Value shape: string. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: `1`. maxLength: `255`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.label variant 2

anyOf variant 2.

- Value shape: null. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.placeholder

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.placeholder variant 1

anyOf variant 1: Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted..

- Value shape: string. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: `1`. maxLength: `500`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.placeholder variant 2

anyOf variant 2.

- Value shape: null. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.required

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.required variant 1

anyOf variant 1: Whether the buyer must enter instructions before selecting the option. Requires enabled=true..

- Value shape: boolean. Whether the buyer must enter instructions before selecting the option. Requires enabled=true. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.required variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer must enter instructions before selecting the option. Requires enabled=true. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.charge_tax_category

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.charge_tax_category variant 1

anyOf variant 1: Flint charge tax category..

- Value shape: string. Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint charge tax category. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that chose this option. Omitted until a selection does..

- Value shape: string. ID of the delivery selection that chose this option. Omitted until a selection does. ID of the delivery selection that chose this option. Omitted until a selection does. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that chose this option. Omitted until a selection does. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method that produced this option..

- Value shape: string. ID of the delivery method that produced this option. ID of the delivery method that produced this option. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method that produced this option. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision this option was priced from..

- Value shape: string. ID of the method revision this option was priced from. ID of the method revision this option was priced from. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision this option was priced from. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id variant 1

anyOf variant 1: ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected..

- Value shape: string. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan

How the option divides the items into deliveries.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `complete_by_at` | Conditional | string or null | RFC3339 timestamp. `complete_by_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `first_arrival_at` | Conditional | string or null | RFC3339 timestamp. `first_arrival_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `planned_delivery_count` | Conditional | integer or null | Number of deliveries the plan makes. `planned_delivery_count`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_plan-variant-1planned_delivery_count). |
| `type` | Conditional | string or null | Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_plan-variant-1type). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1

anyOf DeliveryPlanPreviousAttributes.

- Optional: `complete_by_at`, `first_arrival_at`, `planned_delivery_count`, `type`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 2

anyOf variant 2.

- Undeclared: `complete_by_at`, `first_arrival_at`, `planned_delivery_count`, `type`.
- Value shape: null. How the option divides the items into deliveries. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.complete_by_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.first_arrival_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.planned_delivery_count

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.planned_delivery_count variant 1

anyOf variant 1: Number of deliveries the plan makes..

- Value shape: integer. Number of deliveries the plan makes. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.planned_delivery_count variant 2

anyOf variant 2.

- Value shape: null. Number of deliveries the plan makes. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.type variant 1

anyOf variant 1: Whether the items arrive together..

- Value shape: string. Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Whether the items arrive together. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.description

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.description variant 1

anyOf variant 1: Buyer-visible description of the option. Omitted when the method has none..

- Value shape: string. Buyer-visible description of the option. Omitted when the method has none. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible description of the option. Omitted when the method has none. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.display_position

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.display_position variant 1

anyOf variant 1: Position in which this option displays among the others. Lower values display first..

- Value shape: integer. Position in which this option displays among the others. Lower values display first. Position in which this option displays among the others. Lower values display first. Format: `int32`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.display_position variant 2

anyOf variant 2.

- Value shape: null. Position in which this option displays among the others. Lower values display first. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1

anyOf variant 1: Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs..

- Value shape: Array of object. Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 2

anyOf variant 2.

- Value shape: null. Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_execution_leg_id` | Optional | string or null | Unique ID of this leg. `delivery_execution_leg_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1execution_legs-variant-1-fields-1delivery_execution_leg_id). |
| `origin_location_id` | Optional | string or null | ID of the Location the items leave from. `origin_location_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1execution_legs-variant-1-fields-1origin_location_id). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1.[] fields 1.delivery_execution_leg_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1.[] fields 1.delivery_execution_leg_id variant 1

anyOf variant 1: Unique ID of this leg..

- Value shape: string. Unique ID of this leg. Unique ID of this leg. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1.[] fields 1.delivery_execution_leg_id variant 2

anyOf variant 2.

- Value shape: null. Unique ID of this leg. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1.[] fields 1.origin_location_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1.[] fields 1.origin_location_id variant 1

anyOf variant 1: ID of the Location the items leave from..

- Value shape: string. ID of the Location the items leave from. ID of the Location the items leave from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1.[] fields 1.origin_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the items leave from. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at variant 1

anyOf variant 1: Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected..

- Value shape: string. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery

Local delivery details. Set only when `type` is `local_delivery`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Conditional | string or null | Buyer-facing instructions for this delivery service. `instructions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery-variant-1instructions). |
| `service_level` | Conditional | string or null | Merchant's service-level label. Flint does not enforce the timing implied by the label. `service_level`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery-variant-1service_level). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1

anyOf DeliveryLocalDeliveryDetailsPreviousAttributes.

- Optional: `instructions`, `service_level`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 2

anyOf variant 2.

- Undeclared: `instructions`, `service_level`.
- Value shape: null. Local delivery details. Set only when `type` is `local_delivery`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.instructions

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.instructions variant 1

anyOf variant 1: Buyer-facing instructions for this delivery service..

- Value shape: string. Buyer-facing instructions for this delivery service. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing instructions for this delivery service. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.service_level

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.service_level variant 1

anyOf variant 1: Merchant's service-level label. Flint does not enforce the timing implied by the label..

- Value shape: string. Merchant's service-level label. Flint does not enforce the timing implied by the label. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.service_level variant 2

anyOf variant 2.

- Value shape: null. Merchant's service-level label. Flint does not enforce the timing implied by the label. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.name

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.name variant 1

anyOf variant 1: Buyer-visible name of the option..

- Value shape: string. Buyer-visible name of the option. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible name of the option. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.offered_windows

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.offered_windows variant 1

anyOf variant 1: Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`..

- Value shape: Array of object. Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.offered_windows variant 2

anyOf variant 2.

- Value shape: null. Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.offered_windows variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint variant 1.offered_windows variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint-variant-1offered_windows-variant-1-fields-1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup

Pickup details. Set only when `type` is `pickup`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Conditional | Alternative shapes (see declared variants) | Location where the buyer collects the items. `location`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup-variant-1location). |
| `pickup_mode` | Conditional | string or null | How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup-variant-1pickup_mode). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1

anyOf DeliveryPickupDetailsPreviousAttributes.

- Optional: `location`, `pickup_mode`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 2

anyOf variant 2.

- Undeclared: `location`, `pickup_mode`.
- Value shape: null. Pickup details. Set only when `type` is `pickup`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location

Location where the buyer collects the items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | Alternative shapes (see declared variants) | Street address of the Location. `address`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup-variant-1location-variant-1address). |
| `instructions` | Conditional | string or null | Buyer-visible pickup instructions for the Location. `instructions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup-variant-1location-variant-1instructions). |
| `location_id` | Conditional | string or null | ID of the Location buyers can collect from. `location_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup-variant-1location-variant-1location_id). |
| `name` | Conditional | string or null | Name of the Location, as buyers see it when choosing pickup. `name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup-variant-1location-variant-1name). |
| `timezone` | Conditional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate-variant-1timezone). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1

anyOf DeliveryLocationSummaryResourcePreviousAttributes.

- Optional: `address`, `instructions`, `location_id`, `name`, `timezone`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 2

anyOf variant 2.

- Undeclared: `address`, `instructions`, `location_id`, `name`, `timezone`.
- Value shape: null. Location where the buyer collects the items. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address

Street address of the Location.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Street address of the Location. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.instructions

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.instructions variant 1

anyOf variant 1: Buyer-visible pickup instructions for the Location..

- Value shape: string. Buyer-visible pickup instructions for the Location. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible pickup instructions for the Location. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.location_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.location_id variant 1

anyOf variant 1: ID of the Location buyers can collect from..

- Value shape: string. ID of the Location buyers can collect from. ID of the Location buyers can collect from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location buyers can collect from. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.name

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.name variant 1

anyOf variant 1: Name of the Location, as buyers see it when choosing pickup..

- Value shape: string. Name of the Location, as buyers see it when choosing pickup. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the Location, as buyers see it when choosing pickup. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.location variant 1.timezone

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate variant 1.timezone](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate-variant-1timezone).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.pickup_mode

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.pickup_mode variant 1

anyOf variant 1: How the buyer collects the items at this Location..

- Value shape: string. How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup variant 1.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. How the buyer collects the items at this Location. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1

anyOf variant 1: Recipient fields this option asks for. A selection can leave out required fields, but payment needs them..

- Value shape: Array of object. Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 2

anyOf variant 2.

- Value shape: null. Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `field` | Optional | string or null | Recipient field the method asks for. Values: `"name"`, `"email"`, `"phone"`. `field`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recipient_requirements-variant-1-fields-1field). |
| `format` | Optional | string or null | Format the value must follow. Values: `"text"`, `"email"`, `"e164"`. `format`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recipient_requirements-variant-1-fields-1format). |
| `required` | Optional | boolean or null | Whether payment needs this field. `required`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recipient_requirements-variant-1-fields-1required). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.field

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.field variant 1

anyOf variant 1: Recipient field the method asks for..

- Value shape: string. Recipient field the method asks for. Values: `"name"`, `"email"`, `"phone"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.field variant 2

anyOf variant 2.

- Value shape: null. Recipient field the method asks for. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.format

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.format variant 1

anyOf variant 1: Format the value must follow..

- Value shape: string. Format the value must follow. Values: `"text"`, `"email"`, `"e164"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.format variant 2

anyOf variant 2.

- Value shape: null. Format the value must follow. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.required

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.required variant 1

anyOf variant 1: Whether payment needs this field..

- Value shape: boolean. Whether payment needs this field. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1.required variant 2

anyOf variant 2.

- Value shape: null. Whether payment needs this field. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recommended

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recommended variant 1

anyOf variant 1: Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`..

- Value shape: boolean. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recommended variant 2

anyOf variant 2.

- Value shape: null. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.shipment

Shipment details. Set only when `type` is `shipment`.

Field definitions: [shared fields](#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.shipment variant 1

anyOf DeliveryShipmentDetailsPreviousAttributes.

- Optional: `instructions`, `service_level`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.shipment variant 2

anyOf variant 2.

- Undeclared: `instructions`, `service_level`.
- Value shape: null. Shipment details. Set only when `type` is `shipment`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.shipment variant 1.instructions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.instructions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery-variant-1instructions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.shipment variant 1.service_level

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery variant 1.service_level](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery-variant-1service_level).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.taxable

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.taxable variant 1

anyOf variant 1: Whether tax applies to the delivery charge..

- Value shape: boolean. Whether tax applies to the delivery charge. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether tax applies to the delivery charge. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at, window_end_at, and any offered windows..

- Value shape: string. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.type variant 1

anyOf variant 1: Delivery type of this option..

- Value shape: string. Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Delivery type of this option. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at variant 1

anyOf variant 1: End of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_pricing

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_pricing variant 1

anyOf variant 1: Whether the offered windows cost the same..

- Value shape: string. Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_pricing variant 2

anyOf variant 2.

- Value shape: null. Whether the offered windows cost the same. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_selection

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_selection variant 1

anyOf variant 1: Whether the buyer chooses a delivery window..

- Value shape: string. Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_selection variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer chooses a delivery window. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at variant 1

anyOf variant 1: Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.retryable

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.retryable variant 1

anyOf variant 1: Whether trying again later can succeed. Set only when `type` is `cannot_calculate`..

- Value shape: boolean. Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.retryable variant 2

anyOf variant 2.

- Value shape: null. Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 1.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 1.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 1.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.unavailable_reason

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.unavailable_reason variant 1

anyOf variant 1: Why the method is unavailable and the action that can make it eligible.
- `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method.
- `destination_not_served`: Use a destination covered by this method or choose another method.
- `pickup_unavailable`: Choose an available pickup method or location.
- `no_window_available`: Choose another offered window or a method with availability for the requested time.
- `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule.
- `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group.
- `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price.
- `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method..

- Value shape: string. Why the method is unavailable and the action that can make it eligible. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: `"dependency_revoked"`, `"destination_not_served"`, `"pickup_unavailable"`, `"no_window_available"`, `"eligibility_no_match"`, `"method_type_not_allowed"`, `"pricing_unavailable"`, `"inventory_unavailable"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why the method is unavailable and the action that can make it eligible. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 2.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 2.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 2.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"unavailable"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 3.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 3.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 3.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 3.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"input_required"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 4.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 4.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 4.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 4.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"cannot_calculate"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 5.type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 5.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 5.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1 variant 5.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"requires_checkout_context"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.delivery_choice_group_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.delivery_choice_group_id variant 1

anyOf variant 1: Identifier used to choose one option for this group..

- Value shape: string. Identifier used to choose one option for this group. Identifier used to choose one option for this group. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier used to choose one option for this group. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.evaluation_status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.evaluation_status variant 1

anyOf variant 1: How completely Flint evaluated the group's candidate delivery methods..

- Value shape: string. How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.evaluation_status variant 2

anyOf variant 2.

- Value shape: null. How completely Flint evaluated the group's candidate delivery methods. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.execution_legs

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.execution_legs variant 1

anyOf variant 1: Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs..

- Value shape: Array of object. Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.execution_legs variant 2

anyOf variant 2.

- Value shape: null. Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.execution_legs variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1execution_legs-variant-1-fields-1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.input_requirements

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.input_requirements variant 1

anyOf variant 1: Inputs this group's delivery methods need before they can be priced or selected..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs this group's delivery methods need before they can be priced or selected. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs this group's delivery methods need before they can be priced or selected. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.input_requirements variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1

anyOf variant 1: Order line items, or bundle components, this group covers, with the quantity covered..

- Value shape: Array of object. Order line items, or bundle components, this group covers, with the quantity covered. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 2

anyOf variant 2.

- Value shape: null. Order line items, or bundle components, this group covers, with the quantity covered. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. `bundle_component_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1line_items-variant-1-fields-1bundle_component_id). |
| `order_id` | Optional | string or null | ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1line_items-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item. `order_line_item_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1line_items-variant-1-fields-1order_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.bundle_component_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle..

- Value shape: string. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.order_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order that owns this line item. Checkout credentials receive only their own session's order ID..

- Value shape: string. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.order_line_item_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: ID of the order line item..

- Value shape: string. ID of the order line item. ID of the order line item. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.method_types

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.method_types variant 1

anyOf variant 1: Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them..

- Value shape: Array of string. Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.method_types variant 2

anyOf variant 2.

- Value shape: null. Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1

anyOf variant 1: Delivery options the buyer can choose now..

- Value shape: Array of object. Delivery options the buyer can choose now. Items: A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 2

anyOf variant 2.

- Value shape: null. Delivery options the buyer can choose now. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery charge for this option. |
| `arrival_estimate` | Optional | Alternative shapes (see declared variants) | Estimated arrival dates. Omitted when the method makes no timing promise. `arrival_estimate`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate). |
| `buyer_instructions` | Optional | Alternative shapes (see declared variants) | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. `buyer_instructions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions). |
| `charge_tax_category` | Optional | string or null | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1charge_tax_category). |
| `consumed_by_delivery_selection_id` | Optional | string or null | ID of the delivery selection that chose this option. Omitted until a selection does. `consumed_by_delivery_selection_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1consumed_by_delivery_selection_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method that produced this option. `delivery_method_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision this option was priced from. `delivery_method_revision_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_method_revision_id). |
| `delivery_option_id` | Optional | string or null | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. `delivery_option_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_option_id). |
| `delivery_plan` | Optional | Alternative shapes (see declared variants) | How the option divides the items into deliveries. `delivery_plan`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_plan). |
| `description` | Optional | string or null | Buyer-visible description of the option. Omitted when the method has none. `description`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1description). |
| `display_position` | Optional | integer or null | Position in which this option displays among the others. Lower values display first. `display_position`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1display_position). |
| `execution_legs` | Optional | Array of object or null | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1execution_legs). |
| `expires_at` | Optional | string or null | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. `expires_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1expires_at). |
| `local_delivery` | Optional | Alternative shapes (see declared variants) | Local delivery details. Set only when `type` is `local_delivery`. `local_delivery`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery). |
| `name` | Optional | string or null | Buyer-visible name of the option. `name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1name). |
| `offered_windows` | Optional | Array of object or null | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1offered_windows). |
| `pickup` | Optional | Alternative shapes (see declared variants) | Pickup details. Set only when `type` is `pickup`. `pickup`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup). |
| `recipient_requirements` | Optional | Array of object or null | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recipient_requirements). |
| `recommended` | Optional | boolean or null | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. `recommended`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recommended). |
| `shipment` | Optional | Alternative shapes (see declared variants) | Shipment details. Set only when `type` is `shipment`. `shipment`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1shipment). |
| `taxable` | Optional | boolean or null | Whether tax applies to the delivery charge. `taxable`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1taxable). |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. `timezone`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1timezone). |
| `type` | Optional | string or null | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1type). |
| `window_end_at` | Optional | string or null | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_end_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_end_at). |
| `window_pricing` | Optional | string or null | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. `window_pricing`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_pricing). |
| `window_selection` | Optional | string or null | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. `window_selection`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_selection). |
| `window_start_at` | Optional | string or null | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_start_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_start_at). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.arrival_estimate

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1arrival_estimate).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.buyer_instructions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.charge_tax_category

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.charge_tax_category](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1charge_tax_category).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.consumed_by_delivery_selection_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1consumed_by_delivery_selection_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.delivery_method_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_method_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.delivery_method_revision_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_method_revision_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.delivery_option_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_option_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.delivery_plan

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1delivery_plan).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.description

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.description](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1description).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.display_position

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.display_position](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1display_position).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.execution_legs

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1execution_legs).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.expires_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1expires_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.local_delivery

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.local_delivery](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1local_delivery).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.name

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.name](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1name).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.offered_windows

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.offered_windows](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1offered_windows).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.pickup

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.pickup](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1pickup).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.recipient_requirements

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recipient_requirements).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.recommended

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recommended](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recommended).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.shipment

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.shipment](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1shipment).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.taxable

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.taxable](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1taxable).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.timezone

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1timezone).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.type

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.type](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1type).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.window_end_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_end_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.window_pricing

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_pricing](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_pricing).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.window_selection

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_selection](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_selection).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.window_start_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1window_start_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.previously_selected_delivery_method_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.previously_selected_delivery_method_id variant 1

anyOf variant 1: Method chosen for this group in the previous selection. Omitted when there is none..

- Value shape: string. Method chosen for this group in the previous selection. Omitted when there is none. Method chosen for this group in the previous selection. Omitted when there is none. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.previously_selected_delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Method chosen for this group in the previous selection. Omitted when there is none. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.stable_key

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.stable_key variant 1

anyOf variant 1: Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change..

- Value shape: string. Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.stable_key variant 2

anyOf variant 2.

- Value shape: null. Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_quote_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_quote_id variant 1

anyOf variant 1: ID of the checkout's current delivery quote. Omitted until the checkout has one..

- Value shape: string. ID of the checkout's current delivery quote. Omitted until the checkout has one. ID of the checkout's current delivery quote. Omitted until the checkout has one. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_quote_id variant 2

anyOf variant 2.

- Value shape: null. ID of the checkout's current delivery quote. Omitted until the checkout has one. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_selection_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_selection_id variant 1

anyOf variant 1: Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes..

- Value shape: (string or null). Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.evaluation_status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.evaluation_status variant 1

anyOf variant 1: How completely Flint evaluated the candidate delivery methods..

- Value shape: string. How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.evaluation_status variant 2

anyOf variant 2.

- Value shape: null. How completely Flint evaluated the candidate delivery methods. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.expires_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.input_requirements

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.input_requirements variant 1

anyOf variant 1: Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.input_requirements variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1

anyOf variant 1: Always present with an API key or dashboard credential..

- Value shape: Array of object. Always present with an API key or dashboard credential. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 2

anyOf variant 2.

- Value shape: null. Always present with an API key or dashboard credential. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`. `code`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1code). |
| `delivery_method_id` | Optional | string or null | ID of the method that was evaluated. Omitted when the diagnostic is about a Location. `delivery_method_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1delivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. `delivery_method_revision_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1delivery_method_revision_id). |
| `diagnostic_id` | Optional | string or null | ID to quote when you ask Flint about this diagnostic. `diagnostic_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1diagnostic_id). |
| `eligibility_mismatches` | Optional | Array of object or null | Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. `eligibility_mismatches`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1eligibility_mismatches). |
| `occurred_at` | Optional | string or null | Time Flint recorded this diagnostic. `occurred_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1occurred_at). |
| `outcome` | Optional | string or null | What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. `outcome`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1outcome). |
| `recommended_action` | Optional | string or null | What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`. `recommended_action`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1recommended_action). |
| `retryable` | Optional | boolean or null | Whether trying again later can succeed. `retryable`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1retryable). |
| `scope` | Optional | string or null | What the diagnostic is about. Values: `"method"`. `scope`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1scope). |
| `summary` | Optional | string or null | Plain-language explanation for the merchant. `summary`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1summary). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.code

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.code variant 1

anyOf variant 1: Stable reason the method did not produce an option.
- `eligibility_no_match`: The configured eligibility expression excluded the method.
- `method_unavailable`: The method was unavailable for this evaluation.
- `input_required`: The buyer or caller must provide more information to evaluate the method.
- `checkout_context_required`: A checkout session is required to evaluate the method.
- `dependency_failure`: Flint could not check whether the method is available.
- `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method..

- Value shape: string. Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.code variant 2

anyOf variant 2.

- Value shape: null. Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.delivery_method_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.delivery_method_id variant 1

anyOf variant 1: ID of the method that was evaluated. Omitted when the diagnostic is about a Location..

- Value shape: string. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.delivery_method_revision_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location..

- Value shape: string. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.diagnostic_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.diagnostic_id variant 1

anyOf variant 1: ID to quote when you ask Flint about this diagnostic..

- Value shape: string. ID to quote when you ask Flint about this diagnostic. ID to quote when you ask Flint about this diagnostic. Example: `"ddiag_01KEZF7C002JPVD08857RGDGPC"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.diagnostic_id variant 2

anyOf variant 2.

- Value shape: null. ID to quote when you ask Flint about this diagnostic. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1

anyOf variant 1: Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match..

- Value shape: Array of object. Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 2

anyOf variant 2.

- Value shape: null. Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `condition` | Optional | string or null | The configured eligibility condition family that did not match. Values: [11 declared values](#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1eligibility_mismatches-variant-1-fields-1-condition-values). `condition`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1eligibility_mismatches-variant-1-fields-1condition). |
| `expression_path` | Optional | string or null | The condition's path in the configured eligibility expression, starting at $. `expression_path`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1eligibility_mismatches-variant-1-fields-1expression_path). |
| `field` | Optional | string or null | The eligibility fact evaluated by the condition. Buyer fact values are not included. `field`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1eligibility_mismatches-variant-1-fields-1field). |
| `negated` | Optional | boolean or null | Whether the condition matched inside a not expression and therefore rejected the method. `negated`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1merchant_diagnostics-variant-1-fields-1eligibility_mismatches-variant-1-fields-1negated). |

#### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1 condition values

- `"zone"`
- `"country"`
- `"state"`
- `"postal_code"`
- `"radius"`
- `"window_time"`
- `"subscription_purchase"`
- `"customer_segment"`
- `"customer_merchant_verified"`
- `"customer_has_email"`
- `"customer_has_phone"`

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.condition

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.condition variant 1

anyOf variant 1: The configured eligibility condition family that did not match..

- Value shape: string. The configured eligibility condition family that did not match. Values: `"zone"`, `"country"`, `"state"`, `"postal_code"`, `"radius"`, `"window_time"`, `"subscription_purchase"`, `"customer_segment"`, `"customer_merchant_verified"`, `"customer_has_email"`, `"customer_has_phone"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.condition variant 2

anyOf variant 2.

- Value shape: null. The configured eligibility condition family that did not match. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.expression_path

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.expression_path variant 1

anyOf variant 1: The condition's path in the configured eligibility expression, starting at $..

- Value shape: string. The condition's path in the configured eligibility expression, starting at $. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.expression_path variant 2

anyOf variant 2.

- Value shape: null. The condition's path in the configured eligibility expression, starting at $. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.field

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.field variant 1

anyOf variant 1: The eligibility fact evaluated by the condition. Buyer fact values are not included..

- Value shape: string. The eligibility fact evaluated by the condition. Buyer fact values are not included. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.field variant 2

anyOf variant 2.

- Value shape: null. The eligibility fact evaluated by the condition. Buyer fact values are not included. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.negated

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.negated variant 1

anyOf variant 1: Whether the condition matched inside a not expression and therefore rejected the method..

- Value shape: boolean. Whether the condition matched inside a not expression and therefore rejected the method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches variant 1.[] fields 1.negated variant 2

anyOf variant 2.

- Value shape: null. Whether the condition matched inside a not expression and therefore rejected the method. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.occurred_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.occurred_at variant 1

anyOf variant 1: Time Flint recorded this diagnostic..

- Value shape: string. Time Flint recorded this diagnostic. Time Flint recorded this diagnostic. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.occurred_at variant 2

anyOf variant 2.

- Value shape: null. Time Flint recorded this diagnostic. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.outcome

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.outcome variant 1

anyOf variant 1: What happened when Flint evaluated the method or Location..

- Value shape: string. What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.outcome variant 2

anyOf variant 2.

- Value shape: null. What happened when Flint evaluated the method or Location. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.recommended_action

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.recommended_action variant 1

anyOf variant 1: What the merchant can do to get an option..

- Value shape: string. What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.recommended_action variant 2

anyOf variant 2.

- Value shape: null. What the merchant can do to get an option. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.retryable

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.retryable variant 1

anyOf variant 1: Whether trying again later can succeed..

- Value shape: boolean. Whether trying again later can succeed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.retryable variant 2

anyOf variant 2.

- Value shape: null. Whether trying again later can succeed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.scope

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.scope variant 1

anyOf variant 1: What the diagnostic is about..

- Value shape: string. What the diagnostic is about. Values: `"method"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.scope variant 2

anyOf variant 2.

- Value shape: null. What the diagnostic is about. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.summary

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.summary variant 1

anyOf variant 1: Plain-language explanation for the merchant..

- Value shape: string. Plain-language explanation for the merchant. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics variant 1.[] fields 1.summary variant 2

anyOf variant 2.

- Value shape: null. Plain-language explanation for the merchant. 

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

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.gift_card_challenge

Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `url` | Conditional | string or null | Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends. `url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesgift_card_challenge-variant-1url). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.gift_card_challenge variant 1

anyOf CheckoutGiftCardChallengePreviousAttributes.

- Optional: `url`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.gift_card_challenge variant 2

anyOf variant 2.

- Undeclared: `url`.
- Value shape: null. Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.gift_card_challenge variant 1.url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.gift_card_challenge variant 1.url variant 1

anyOf variant 1: Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends..

- Value shape: string. Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends. Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends. Format: `uri`. Example: `"https://example.com/receipt"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.gift_card_challenge variant 1.url variant 2

anyOf variant 2.

- Value shape: null. Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids variant 1

anyOf variant 1: Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle..

- Value shape: Array of string. Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids variant 2

anyOf variant 2.

- Value shape: null. Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice

Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_block_status` | Conditional | string or null | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. `collection_block_status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1collection_block_status). |
| `created_at` | Conditional | string or null | When the invoice was created. `created_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1created_at). |
| `customer_id` | Conditional | string or null | Customer billed by the invoice. Absent when the invoice has no customer. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1customer_id). |
| `due_date` | Conditional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. `due_date`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1due_date). |
| `invoice_id` | Conditional | string or null | Flint invoice ID. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1invoice_id). |
| `invoice_number` | Conditional | string or null | Sequential document number assigned when the invoice is issued. Absent on a draft. `invoice_number`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1invoice_number). |
| `is_overdue` | Conditional | boolean or null | Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. `is_overdue`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1is_overdue). |
| `order_id` | Conditional | string or null | The order the invoice bills. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1order_id). |
| `pricing_amounts` | Conditional | Alternative shapes (see declared variants) | The invoice pricing totals, frozen at issue; a draft previews the backing order. `pricing_amounts`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1pricing_amounts). |
| `refund_status` | Conditional | string or null | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1refund_status). |
| `settlement_amounts` | Conditional | Alternative shapes (see declared variants) | The same settlement amounts as the full Invoice. `settlement_amounts`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1settlement_amounts). |
| `status` | Conditional | string or null | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. `status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1status). |
| `supported_actions` | Conditional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. `supported_actions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1supported_actions). |
| `updated_at` | Conditional | string or null | When the invoice last changed. `updated_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1updated_at). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1

anyOf variant 1: Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice.; anyOf ExpandedInvoiceSummaryPreviousAttributes.

- Optional: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 2, 3

anyOf variant 1: Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice.; anyOf variant 2; anyOf variant 2.

- Undeclared: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.collection_block_status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.collection_block_status variant 1

anyOf variant 1: Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait..

- Value shape: string. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.collection_block_status variant 2

anyOf variant 2.

- Value shape: null. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.created_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.created_at variant 1

anyOf variant 1: When the invoice was created..

- Value shape: string. When the invoice was created. When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was created. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.customer_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.customer_id variant 1

anyOf variant 1: Customer billed by the invoice. Absent when the invoice has no customer..

- Value shape: string. Customer billed by the invoice. Absent when the invoice has no customer. Customer billed by the invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer billed by the invoice. Absent when the invoice has no customer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.due_date

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.due_date variant 1

anyOf variant 1: Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date..

- Value shape: string. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.due_date variant 2

anyOf variant 2.

- Value shape: null. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_id variant 1

anyOf variant 1: Flint invoice ID..

- Value shape: string. Flint invoice ID. Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice ID. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_number

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_number variant 1

anyOf variant 1: Sequential document number assigned when the invoice is issued. Absent on a draft..

- Value shape: string. Sequential document number assigned when the invoice is issued. Absent on a draft. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_number variant 2

anyOf variant 2.

- Value shape: null. Sequential document number assigned when the invoice is issued. Absent on a draft. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.is_overdue

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.is_overdue variant 1

anyOf variant 1: Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it..

- Value shape: boolean. Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.is_overdue variant 2

anyOf variant 2.

- Value shape: null. Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.order_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.order_id variant 1

anyOf variant 1: The order the invoice bills..

- Value shape: string. The order the invoice bills. The order the invoice bills. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. The order the invoice bills. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.pricing_amounts

The invoice pricing totals, frozen at issue; a draft previews the backing order.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1pricing_amounts).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.pricing_amounts variant 1

anyOf PricingAmountsPreviousAttributes.

- Optional: `additive_tax_money`, `charge_money`, `discount_money`, `inclusive_tax_money`, `requested_tip_money`, `subtotal_money`, `tax_money`, `total_money`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.pricing_amounts variant 2

anyOf variant 2.

- Undeclared: `additive_tax_money`, `charge_money`, `discount_money`, `inclusive_tax_money`, `requested_tip_money`, `subtotal_money`, `tax_money`, `total_money`.
- Value shape: null. The invoice pricing totals, frozen at issue; a draft previews the backing order. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.refund_status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.refund_status variant 1

anyOf variant 1: How much of the collected money has been refunded. It doesn't change status..

- Value shape: string. How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.refund_status variant 2

anyOf variant 2.

- Value shape: null. How much of the collected money has been refunded. It doesn't change status. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.settlement_amounts

The same settlement amounts as the full Invoice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credited_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit is not included. |
| `currently_due_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of outstanding_money due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. This is the amount the next collect call or checkout session charges. Always 0 unless the invoice is open or partially_paid. |
| `late_fee_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Excluded from pricing_amounts.total_money. |
| `net_collected_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero. |
| `outstanding_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. |
| `paid_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. |
| `refunded_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money returned to the buyer from what was collected toward the bill. |
| `written_off_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.settlement_amounts variant 1

anyOf InvoiceSettlementAmountsPreviousAttributes.

- Optional: `credited_money`, `currently_due_money`, `late_fee_money`, `net_collected_money`, `outstanding_money`, `paid_money`, `refunded_money`, `written_off_money`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.settlement_amounts variant 2

anyOf variant 2.

- Undeclared: `credited_money`, `currently_due_money`, `late_fee_money`, `net_collected_money`, `outstanding_money`, `paid_money`, `refunded_money`, `written_off_money`.
- Value shape: null. The same settlement amounts as the full Invoice. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.status variant 1

anyOf variant 1: Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice..

- Value shape: string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.supported_actions

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.updated_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.updated_at variant 1

anyOf variant 1: When the invoice last changed..

- Value shape: string. When the invoice last changed. When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice last changed. 

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

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal

The terms and policy links this session shows the buyer, and whether the buyer must accept the terms.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Conditional | string or null | An `https://` URL of the contract the buyer agrees to, linked in checkout. `contract_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributeslegal-variant-1contract_url). |
| `refund_policy_url` | Conditional | string or null | An `https://` URL of your refund policy, linked in checkout. `refund_policy_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributeslegal-variant-1refund_policy_url). |
| `require_terms_of_service` | Conditional | boolean or null | Whether the buyer must accept the terms of service before paying. `require_terms_of_service`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributeslegal-variant-1require_terms_of_service). |
| `shipping_policy_url` | Conditional | string or null | An `https://` URL of your shipping policy, linked in checkout. `shipping_policy_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributeslegal-variant-1shipping_policy_url). |
| `terms_of_service_url` | Conditional | string or null | An `https://` URL of your terms of service, linked in checkout. `terms_of_service_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributeslegal-variant-1terms_of_service_url). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1

anyOf CheckoutLegalConfigPreviousAttributes.

- Optional: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 2

anyOf variant 2.

- Undeclared: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.
- Value shape: null. The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.contract_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.contract_url variant 1

anyOf variant 1: An `https://` URL of the contract the buyer agrees to, linked in checkout..

- Value shape: string. An `https://` URL of the contract the buyer agrees to, linked in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.contract_url variant 2

anyOf variant 2.

- Value shape: null. An `https://` URL of the contract the buyer agrees to, linked in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.refund_policy_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.refund_policy_url variant 1

anyOf variant 1: An `https://` URL of your refund policy, linked in checkout..

- Value shape: string. An `https://` URL of your refund policy, linked in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.refund_policy_url variant 2

anyOf variant 2.

- Value shape: null. An `https://` URL of your refund policy, linked in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.require_terms_of_service

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.require_terms_of_service variant 1

anyOf variant 1: Whether the buyer must accept the terms of service before paying..

- Value shape: boolean. Whether the buyer must accept the terms of service before paying. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.require_terms_of_service variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer must accept the terms of service before paying. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.shipping_policy_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.shipping_policy_url variant 1

anyOf variant 1: An `https://` URL of your shipping policy, linked in checkout..

- Value shape: string. An `https://` URL of your shipping policy, linked in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.shipping_policy_url variant 2

anyOf variant 2.

- Value shape: null. An `https://` URL of your shipping policy, linked in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.terms_of_service_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.terms_of_service_url variant 1

anyOf variant 1: An `https://` URL of your terms of service, linked in checkout..

- Value shape: string. An `https://` URL of your terms of service, linked in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.legal variant 1.terms_of_service_url variant 2

anyOf variant 2.

- Value shape: null. An `https://` URL of your terms of service, linked in checkout. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Map values: maxLength: `4096`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order

Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1

anyOf variant 1: Present only when `expand` includes `order`; `null` when expanded and there is no related order.; anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 2, 3

anyOf variant 1: Present only when `expand` includes `order`; `null` when expanded and there is no related order.; anyOf variant 2; anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_reason](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_reason).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1deferred_promotions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1fulfillment_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.order_number

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_number](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_number).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.payment_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.pricing_amounts

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.pricing_amounts](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1pricing_amounts).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.refund_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.refund_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1refund_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.settlement_amounts

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.settlement_amounts](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1settlement_amounts).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.supported_actions

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.supported_actions](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1supported_actions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at).

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

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection

Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Conditional | Alternative shapes (see declared variants) | Client configuration for collecting the payment through Stripe. `stripe`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1

anyOf PaymentCollectionPreviousAttributes.

- Optional: `stripe`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 2

anyOf variant 2.

- Undeclared: `stripe`.
- Value shape: null. Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe

Client configuration for collecting the payment through Stripe.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Conditional | string or null or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. `account_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1account_id). |
| `elements` | Conditional | Alternative shapes (see declared variants) | Stripe Elements configuration for the available payment methods and amounts. `elements`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements). |
| `publishable_key` | Conditional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1publishable_key). |
| `return_url` | Conditional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1return_url). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1

anyOf PaymentCollectionStripePreviousAttributes.

- Optional: `account_id`, `elements`, `publishable_key`, `return_url`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 2

anyOf variant 2.

- Undeclared: `account_id`, `elements`, `publishable_key`, `return_url`.
- Value shape: null. Client configuration for collecting the payment through Stripe. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.account_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount..

- Value shape: (string or null). Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. Example: `"acct_1234567890"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements

Stripe Elements configuration for the available payment methods and amounts.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount and currency used to initialize the payment form. |
| `digital_wallets` | Conditional | Array of string or null | Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. `digital_wallets`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1digital_wallets). |
| `mode` | Conditional | string or null | Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`. `mode`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1mode). |
| `next_step` | Conditional | string or null | Browser collection operation to perform before calling submit_to. Values: `"collect_setup_payment_source"`, `"create_confirmation_token"`. `next_step`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1next_step). |
| `payment_method_creation` | Conditional | string or null | Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Values: `"manual"`. `payment_method_creation`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1payment_method_creation). |
| `payment_method_options` | Conditional | Alternative shapes (see declared variants) | Payment method settings passed to the payment form. `payment_method_options`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1payment_method_options). |
| `payment_method_types` | Conditional | Array of string or null | Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. `payment_method_types`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1payment_method_types). |
| `payment_options` | Conditional | Array of string or null | Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `payment_options`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1payment_options). |
| `selectable_payment_intents` | Conditional | Array of object or null | Order payment intents that the buyer can select for collection. `selectable_payment_intents`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1selectable_payment_intents). |
| `submit_to` | Conditional | string or null | Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`. `submit_to`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1submit_to). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1: `payment_method_creation` = `"manual"`

anyOf PaymentCollectionStripeElementsPreviousAttributes.

- Optional: `amount_money`, `digital_wallets`, `mode`, `next_step`, `payment_method_creation`, `payment_method_options`, `payment_method_types`, `payment_options`, `selectable_payment_intents`, `submit_to`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `digital_wallets`, `mode`, `next_step`, `payment_method_creation`, `payment_method_options`, `payment_method_types`, `payment_options`, `selectable_payment_intents`, `submit_to`.
- Value shape: null. Stripe Elements configuration for the available payment methods and amounts. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.digital_wallets

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.digital_wallets variant 1

anyOf variant 1: Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release..

- Value shape: Array of string. Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.digital_wallets variant 2

anyOf variant 2.

- Value shape: null. Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.mode

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.mode variant 1

anyOf variant 1: Whether Elements is collecting a payment source for an immediate payment or a setup source for future use..

- Value shape: string. Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.mode variant 2

anyOf variant 2.

- Value shape: null. Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.next_step

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.next_step variant 1

anyOf variant 1: Browser collection operation to perform before calling submit_to..

- Value shape: string. Browser collection operation to perform before calling submit_to. Values: `"collect_setup_payment_source"`, `"create_confirmation_token"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.next_step variant 2

anyOf variant 2.

- Value shape: null. Browser collection operation to perform before calling submit_to. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_creation

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_creation variant 1

anyOf variant 1: Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod..

- Value shape: string. Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Values: `"manual"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_creation variant 2

anyOf variant 2.

- Value shape: null. Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_options

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_options variant 1

anyOf variant 1.

- Value shape: object. Payment method settings passed to the payment form. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_options variant 2

anyOf variant 2.

- Value shape: null. Payment method settings passed to the payment form. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_types

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_types variant 1

anyOf variant 1: Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release..

- Value shape: Array of string. Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_method_types variant 2

anyOf variant 2.

- Value shape: null. Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_options

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_options variant 1

anyOf variant 1: Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed..

- Value shape: Array of string. Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.payment_options variant 2

anyOf variant 2.

- Value shape: null. Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1

anyOf variant 1: Order payment intents that the buyer can select for collection..

- Value shape: Array of object. Order payment intents that the buyer can select for collection. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 2

anyOf variant 2.

- Value shape: null. Order payment intents that the buyer can select for collection. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `last_payment_error` | Optional | Alternative shapes (see declared variants) | Most recent payment failure, when one is recorded. `last_payment_error`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1selectable_payment_intents-variant-1-fields-1last_payment_error). |
| `payment_collection` | Optional | Alternative shapes (see declared variants) | Client setup details for collecting this payment. `payment_collection`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements-variant-1selectable_payment_intents-variant-1-fields-1payment_collection). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1payment_intent_id). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesstatus). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Portion of this payment's amount allocated to a tip. |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.last_payment_error

Most recent payment failure, when one is recorded.

Field definitions: [shared fields](#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. Most recent payment failure, when one is recorded. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.last_payment_error variant 1.code

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.code](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1code).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.last_payment_error variant 1.failed_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.failed_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1failed_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.last_payment_error variant 1.message

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.message](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1message).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.last_payment_error variant 1.remediation

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1remediation).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.payment_collection

Client setup details for collecting this payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Conditional | Alternative shapes (see declared variants) | Client configuration for collecting the payment through Stripe. `stripe`: [field definitions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.payment_collection variant 1

anyOf PaymentCollectionPreviousAttributes.

- Optional: `stripe`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.payment_collection variant 2

anyOf variant 2.

- Undeclared: `stripe`.
- Value shape: null. Client setup details for collecting this payment. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.payment_collection variant 1.stripe

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.payment_intent_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.payment_intent_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1payment_intent_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.selectable_payment_intents variant 1.[] fields 1.status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesstatus).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.submit_to

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.submit_to variant 1

anyOf variant 1: Flint operation that accepts the result of next_step..

- Value shape: string. Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements variant 1.submit_to variant 2

anyOf variant 2.

- Value shape: null. Flint operation that accepts the result of next_step. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.publishable_key

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.publishable_key variant 1

anyOf variant 1: Publishable Stripe key for initializing the payment client..

- Value shape: string. Publishable Stripe key for initializing the payment client. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.publishable_key variant 2

anyOf variant 2.

- Value shape: null. Publishable Stripe key for initializing the payment client. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.return_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.return_url variant 1

anyOf variant 1: URL the buyer returns to after a redirect payment step..

- Value shape: string. URL the buyer returns to after a redirect payment step. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.return_url variant 2

anyOf variant 2.

- Value shape: null. URL the buyer returns to after a redirect payment step. 

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

- Value shape: Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes). Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `capture_method` | Optional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer_id` | Optional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1customer_id). |
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents-variant-1-fields-1-dispute_status-values). `dispute_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status). |
| `order_id` | Optional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1order_id). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1payment_intent_id). |
| `payment_source` | Optional | Alternative shapes (see declared variants) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. `payment_source`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source). |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. Items values: `"confirm"`, `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

#### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1 dispute_status values

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

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.capture_method

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.capture_method](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.customer_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.customer_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1customer_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.dispute_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.dispute_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.order_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.order_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1order_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.payment_intent_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.payment_intent_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1payment_intent_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.payment_source

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.payment_source](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.refund_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.refund_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesstatus).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.supported_actions

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.supported_actions](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributessupported_actions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link

Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Conditional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1completed_count). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `description` | Conditional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1description). |
| `name` | Conditional | string or null | Name of the payment link. `name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1name). |
| `payment_link_id` | Conditional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1payment_link_id). |
| `payment_link_type` | Conditional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1payment_link_type). |
| `status` | Conditional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1status). |
| `subscription_plan_id` | Conditional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1subscription_plan_id). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `url` | Conditional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1url). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1

anyOf variant 1: Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link.; anyOf ExpandedPaymentLinkSummaryPreviousAttributes.

- Optional: `completed_count`, `created_at`, `description`, `name`, `payment_link_id`, `payment_link_type`, `status`, `subscription_plan_id`, `updated_at`, `url`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 2, 3

anyOf variant 1: Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link.; anyOf variant 2; anyOf variant 2.

- Undeclared: `completed_count`, `created_at`, `description`, `name`, `payment_link_id`, `payment_link_type`, `status`, `subscription_plan_id`, `updated_at`, `url`.
- Value shape: null. Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.completed_count

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.completed_count variant 1

anyOf variant 1: Number of paid checkout sessions started from this link..

- Value shape: integer. Number of paid checkout sessions started from this link. Number of paid checkout sessions started from this link. Format: `int32`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.completed_count variant 2

anyOf variant 2.

- Value shape: null. Number of paid checkout sessions started from this link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.description

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.description variant 1

anyOf variant 1: Text about what the link sells, returned to buyers when they open it..

- Value shape: string. Text about what the link sells, returned to buyers when they open it. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.description variant 2

anyOf variant 2.

- Value shape: null. Text about what the link sells, returned to buyers when they open it. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.name

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.name variant 1

anyOf variant 1: Name of the payment link..

- Value shape: string. Name of the payment link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the payment link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_id variant 1

anyOf variant 1: Unique identifier for this payment link, prefixed `pl_`..

- Value shape: string. Unique identifier for this payment link, prefixed `pl_`. Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link, prefixed `pl_`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_type variant 1

anyOf variant 1: What kind of link this is..

- Value shape: string. What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_type variant 2

anyOf variant 2.

- Value shape: null. What kind of link this is. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.status

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.status variant 1

anyOf variant 1: Whether the link can start new checkouts..

- Value shape: string. Whether the link can start new checkouts. Values: `"active"`, `"inactive"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Whether the link can start new checkouts. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.subscription_plan_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription..

- Value shape: string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.url variant 1

anyOf variant 1: URL buyers open to use the link..

- Value shape: string. URL buyers open to use the link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.url variant 2

anyOf variant 2.

- Value shape: null. URL buyers open to use the link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id variant 1

anyOf variant 1: ID of the payment link the session was started from. Absent when it was not started from a payment link..

- Value shape: string. ID of the payment link the session was started from. Absent when it was not started from a payment link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment link the session was started from. Absent when it was not started from a payment link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url variant 1

anyOf variant 1: Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Query strings are deliberately excluded so credentials and provider state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048 characters..

- Value shape: string. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Query strings are deliberately excluded so credentials and provider state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048 characters. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Query strings are deliberately excluded so credentials and provider state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url variant 2

anyOf variant 2.

- Value shape: null. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Query strings are deliberately excluded so credentials and provider state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048 characters. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments

Configured payment options for merchant credentials; currently available payment options for the checkout credential.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Conditional | Array of string or null | Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `enabled_payment_options`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayments-variant-1enabled_payment_options). |
| `payment_note` | Conditional | string or null | A note shown to the buyer with the payment options. `payment_note`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayments-variant-1payment_note). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments variant 1

anyOf CheckoutPaymentConfigPreviousAttributes.

- Optional: `enabled_payment_options`, `payment_note`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments variant 2

anyOf variant 2.

- Undeclared: `enabled_payment_options`, `payment_note`.
- Value shape: null. Configured payment options for merchant credentials; currently available payment options for the checkout credential. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments variant 1.enabled_payment_options

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments variant 1.enabled_payment_options variant 1

anyOf variant 1: Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting..

- Value shape: Array of string. Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments variant 1.enabled_payment_options variant 2

anyOf variant 2.

- Value shape: null. Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments variant 1.payment_note

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments variant 1.payment_note variant 1

anyOf variant 1: A note shown to the buyer with the payment options..

- Value shape: string. A note shown to the buyer with the payment options. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payments variant 1.payment_note variant 2

anyOf variant 2.

- Value shape: null. A note shown to the buyer with the payment options. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill

Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Conditional | Alternative shapes (see declared variants) | The billing address to fill in. `billing_address`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesprefill-variant-1billing_address). |
| `email` | Conditional | string or null | The buyer's email address to fill in. `email`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesprefill-variant-1email). |
| `phone` | Conditional | string or null | The buyer's phone number to fill in. `phone`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesprefill-variant-1phone). |
| `shipping_address` | Conditional | Alternative shapes (see declared variants) | The shipping address to fill in. `shipping_address`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesprefill-variant-1shipping_address). |
| `shipping_recipient_name` | Conditional | string or null | The name of the person receiving the delivery, to fill in with the shipping address. `shipping_recipient_name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesprefill-variant-1shipping_recipient_name). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1

anyOf CheckoutPrefillPreviousAttributes.

- Optional: `billing_address`, `email`, `phone`, `shipping_address`, `shipping_recipient_name`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 2

anyOf variant 2.

- Undeclared: `billing_address`, `email`, `phone`, `shipping_address`, `shipping_recipient_name`.
- Value shape: null. Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address

The billing address to fill in.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The billing address to fill in. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.billing_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.email

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.email variant 1

anyOf variant 1: The buyer's email address to fill in..

- Value shape: string. The buyer's email address to fill in. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.email variant 2

anyOf variant 2.

- Value shape: null. The buyer's email address to fill in. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.phone

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.phone variant 1

anyOf variant 1: The buyer's phone number to fill in..

- Value shape: string. The buyer's phone number to fill in. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.phone variant 2

anyOf variant 2.

- Value shape: null. The buyer's phone number to fill in. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address

The shipping address to fill in.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The shipping address to fill in. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_recipient_name

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_recipient_name variant 1

anyOf variant 1: The name of the person receiving the delivery, to fill in with the shipping address..

- Value shape: string. The name of the person receiving the delivery, to fill in with the shipping address. The name of the person receiving the delivery, to fill in with the shipping address. minLength: `1`. maxLength: `200`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.prefill variant 1.shipping_recipient_name variant 2

anyOf variant 2.

- Value shape: null. The name of the person receiving the delivery, to fill in with the shipping address. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems variant 1

anyOf variant 1: Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error..

- Value shape: Array of [CheckoutProblemResourcePreviousAttributes](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributes). Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems variant 2

anyOf variant 2.

- Value shape: null. Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config

Whether automatic promotions apply to this session and whether the buyer can enter promotion codes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Conditional | boolean or null | Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. `automatic_enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespromotion_config-variant-1automatic_enabled). |
| `codes_enabled` | Conditional | boolean or null or null | Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. `codes_enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespromotion_config-variant-1codes_enabled). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config variant 1

anyOf CheckoutPromotionConfigPreviousAttributes.

- Optional: `automatic_enabled`, `codes_enabled`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config variant 2

anyOf variant 2.

- Undeclared: `automatic_enabled`, `codes_enabled`.
- Value shape: null. Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config variant 1.automatic_enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config variant 1.automatic_enabled variant 1

anyOf variant 1: Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off..

- Value shape: boolean. Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config variant 1.automatic_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config variant 1.codes_enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config variant 1.codes_enabled variant 1

anyOf variant 1: Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled..

- Value shape: (boolean or null). Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.promotion_config variant 1.codes_enabled variant 2

anyOf variant 2.

- Value shape: null. Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects

Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_url` | Conditional | string or null | Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. `cancel_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1cancel_url). |
| `expired_url` | Conditional | string or null | Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. `expired_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1expired_url). |
| `success_url` | Conditional | string or null | Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. `success_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects-variant-1success_url). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1

anyOf CheckoutRedirectsPreviousAttributes.

- Optional: `cancel_url`, `expired_url`, `success_url`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 2

anyOf variant 2.

- Undeclared: `cancel_url`, `expired_url`, `success_url`.
- Value shape: null. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.cancel_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.cancel_url variant 1

anyOf variant 1: Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters..

- Value shape: string. Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.cancel_url variant 2

anyOf variant 2.

- Value shape: null. Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.expired_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.expired_url variant 1

anyOf variant 1: Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters..

- Value shape: string. Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.expired_url variant 2

anyOf variant 2.

- Value shape: null. Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.success_url

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.success_url variant 1

anyOf variant 1: Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters..

- Value shape: string. Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects variant 1.success_url variant 2

anyOf variant 2.

- Value shape: null. Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1

anyOf variant 1: All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back..

- Value shape: Array of [BuyerRefundPreviousAttributes](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributes). All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 2

anyOf variant 2.

- Value shape: null. All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total refunded across all tenders, including `refunded_tip_money`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1credit_note_id). |
| `customer` | Optional | Alternative shapes (see declared variants) or null | The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `customer`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer). |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1customer_id). |
| `failure_reason` | Optional | string or null | A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`. `failure_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1invoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributes](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributes) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations). |
| `order` | Optional | Alternative shapes (see declared variants) or null | The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `order`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder). |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1order_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1order_id). |
| `payment_intent` | Optional | Alternative shapes (see declared variants) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `payment_intent`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1payment_intent_id). |
| `payment_refunds` | Optional | Array of [BuyerPaymentRefundPreviousAttributes](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributes) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds). |
| `pending_reason` | Optional | string or null or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by). |
| `reason` | Optional | string or null or null | `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`. `reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1refund_id). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1refunded_at). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1return_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1return_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1succeeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationPreviousAttributes](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributes) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.credit_note_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.credit_note_id variant 1

anyOf variant 1: ID of the credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.customer

Declared alternatives: [BuyerRefundPreviousAttributes.customer](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.customer_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.customer_id variant 1

anyOf variant 1: ID of the customer on the refunded order or payment. Absent when neither has one..

- Value shape: string. ID of the customer on the refunded order or payment. Absent when neither has one. ID of the customer on the refunded order or payment. Absent when neither has one. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer on the refunded order or payment. Absent when neither has one. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.failure_reason

Declared alternatives: [BuyerRefundPreviousAttributes.failure_reason](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesfailure_reason).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.idempotency_key

Declared alternatives: [BuyerRefundPreviousAttributes.idempotency_key](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.invoice_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.invoice_id variant 1

anyOf variant 1: ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.line_item_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order

Declared alternatives: [BuyerRefundPreviousAttributes.order](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order_edit_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order_edit_id variant 1

anyOf variant 1: ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit..

- Value shape: string. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund..

- Value shape: string. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.payment_intent

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.payment_intent_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.payment_intent_id variant 1

anyOf variant 1: ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through..

- Value shape: string. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.payment_refunds

Declared alternatives: [BuyerRefundPreviousAttributes.payment_refunds](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.pending_reason

Declared alternatives: [BuyerRefundPreviousAttributes.pending_reason](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.processed_by

Declared alternatives: [BuyerRefundPreviousAttributes.processed_by](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.reason

Declared alternatives: [BuyerRefundPreviousAttributes.reason](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.reason_message

Declared alternatives: [BuyerRefundPreviousAttributes.reason_message](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refund_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refund_id variant 1

anyOf variant 1: Unique identifier for this refund, prefixed `ref_`..

- Value shape: string. Unique identifier for this refund, prefixed `ref_`. Unique identifier for this refund, prefixed `ref_`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund, prefixed `ref_`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refund_reference

Declared alternatives: [BuyerRefundPreviousAttributes.refund_reference](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refunded_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refunded_at variant 1

anyOf variant 1: When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant..

- Value shape: string. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refunded_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.return_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.return_id variant 1

anyOf variant 1: ID of the return this refund paid out. Present only on refunds issued by a return..

- Value shape: string. ID of the return this refund paid out. Present only on refunds issued by a return. ID of the return this refund paid out. Present only on refunds issued by a return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return this refund paid out. Present only on refunds issued by a return. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.return_resolution_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued this refund. Present only on refunds issued by a return..

- Value shape: string. ID of the return resolution that issued this refund. Present only on refunds issued by a return. ID of the return resolution that issued this refund. Present only on refunds issued by a return. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued this refund. Present only on refunds issued by a return. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.status

Declared alternatives: [BuyerRefundPreviousAttributes.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.succeeded_at

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.succeeded_at variant 1

anyOf variant 1: When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time..

- Value shape: string. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.tax_breakdown_refunds

Declared alternatives: [BuyerRefundPreviousAttributes.tax_breakdown_refunds](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.tender_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.tender_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection

Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Conditional | Alternative shapes (see declared variants) | Client configuration for saving a payment method through Stripe on the merchant's connected account. `stripe`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessetup_collection-variant-1stripe). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1

anyOf SetupCollectionPreviousAttributes.

- Optional: `stripe`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 2

anyOf variant 2.

- Undeclared: `stripe`.
- Value shape: null. Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe

Client configuration for saving a payment method through Stripe on the merchant's connected account.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Conditional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. `account_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessetup_collection-variant-1stripe-variant-1account_id). |
| `elements` | Conditional | Alternative shapes (see declared variants) | Stripe Elements configuration for the available payment methods and amounts. `elements`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements). |
| `publishable_key` | Conditional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1publishable_key). |
| `return_url` | Conditional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1return_url). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe variant 1

anyOf SetupCollectionStripePreviousAttributes.

- Optional: `account_id`, `elements`, `publishable_key`, `return_url`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe variant 2

anyOf variant 2.

- Undeclared: `account_id`, `elements`, `publishable_key`, `return_url`.
- Value shape: null. Client configuration for saving a payment method through Stripe on the merchant's connected account. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe variant 1.account_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe variant 1.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe variant 1.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe variant 1.elements

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.elements](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1elements).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe variant 1.publishable_key

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.publishable_key](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1publishable_key).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.setup_collection variant 1.stripe variant 1.return_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_collection variant 1.stripe variant 1.return_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_collection-variant-1stripe-variant-1return_url).

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
| `billing_interval` | Conditional | string or null | Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1billing_interval). |
| `billing_interval_count` | Conditional | integer or null | Number of billing intervals between recurring charges. `billing_interval_count`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1billing_interval_count). |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Billing intervals the buyer can choose from, frozen from the plan when the session was created. `billing_interval_options`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1billing_interval_options). |
| `contract_term_months` | Conditional | integer or null | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. `contract_term_months`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1contract_term_months). |
| `deliveries_per_period` | Conditional | integer or null | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. `deliveries_per_period`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1deliveries_per_period). |
| `delivery_interval` | Conditional | string or null or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. `delivery_interval`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1delivery_interval). |
| `delivery_interval_count` | Conditional | integer or null or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. `delivery_interval_count`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1delivery_interval_count). |
| `delivery_required` | Conditional | boolean or null | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. `delivery_required`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1delivery_required). |
| `early_termination_fee_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. |
| `gift_recipient` | Conditional | Alternative shapes (see declared variants) or null | Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. `gift_recipient`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gift_recipient). |
| `gifts_enabled` | Conditional | boolean or null | Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. `gifts_enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gifts_enabled). |
| `line_items` | Conditional | Array of object or null | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items). |
| `plan_name` | Conditional | string or null | Plan name shown to the buyer. `plan_name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1plan_name). |
| `recurring_shipping` | Conditional | Alternative shapes (see declared variants) | Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. `recurring_shipping`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1recurring_shipping). |
| `recurring_total_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. |
| `setup_fee_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | One-time fee charged with the first payment, when the plan has one. |
| `subscription_plan_id` | Conditional | string or null | Flint subscription plan ID the terms come from. `subscription_plan_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1subscription_plan_id). |
| `trial_period_days` | Conditional | integer or null | Days before the first recurring charge, when the plan has a trial. `trial_period_days`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1trial_period_days). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1

anyOf CheckoutSubscriptionTermsPreviousAttributes.

- Optional: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `contract_term_months`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `delivery_required`, `early_termination_fee_money`, `gift_recipient`, `gifts_enabled`, `line_items`, `plan_name`, `recurring_shipping`, `recurring_total_money`, `setup_fee_money`, `subscription_plan_id`, `trial_period_days`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `contract_term_months`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `delivery_required`, `early_termination_fee_money`, `gift_recipient`, `gifts_enabled`, `line_items`, `plan_name`, `recurring_shipping`, `recurring_total_money`, `setup_fee_money`, `subscription_plan_id`, `trial_period_days`.
- Value shape: null. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval variant 1

anyOf variant 1: Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`..

- Value shape: string. Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval_count

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval_count variant 1

anyOf variant 1: Number of billing intervals between recurring charges..

- Value shape: integer. Number of billing intervals between recurring charges. Number of billing intervals between recurring charges. Format: `int32`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of billing intervals between recurring charges. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval_options

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval_options variant 1

anyOf variant 1: Billing intervals the buyer can choose from, frozen from the plan when the session was created..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes). Billing intervals the buyer can choose from, frozen from the plan when the session was created. Billing intervals the buyer can choose from, frozen from the plan when the session was created. minItems: `1`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Billing intervals the buyer can choose from, frozen from the plan when the session was created. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.contract_term_months

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.contract_term_months variant 1

anyOf variant 1: The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier..

- Value shape: integer. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.contract_term_months variant 2

anyOf variant 2.

- Value shape: null. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.deliveries_per_period

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.deliveries_per_period variant 1

anyOf variant 1: Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery..

- Value shape: integer. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.deliveries_per_period variant 2

anyOf variant 2.

- Value shape: null. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval variant 1

anyOf variant 1: Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period..

- Value shape: (string or null). Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval variant 2

anyOf variant 2.

- Value shape: null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval_count

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval_count variant 1

anyOf variant 1: Number of delivery intervals between deliveries. Null when no separate delivery cadence is set..

- Value shape: (integer or null). Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_required

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_required variant 1

anyOf variant 1: Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value..

- Value shape: boolean. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_required variant 2

anyOf variant 2.

- Value shape: null. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient

Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Conditional | string or null | The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. `email`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gift_recipient-variant-1email). |
| `message` | Conditional | string or null or null | A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. `message`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gift_recipient-variant-1message). |
| `name` | Conditional | string or null or null | The recipient's name, shown in their gift emails. Null when no name was given. `name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gift_recipient-variant-1name). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1

anyOf variant 1: Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one.; anyOf SubscriptionGiftRecipientPreviousAttributes.

- Optional: `email`, `message`, `name`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 2, 3

anyOf variant 1: Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one.; anyOf variant 2; anyOf variant 2.

- Undeclared: `email`, `message`, `name`.
- Value shape: null. Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.email

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.email variant 1

anyOf variant 1: The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email..

- Value shape: string. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. Format: `email`. Example: `"buyer@example.com"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.email variant 2

anyOf variant 2.

- Value shape: null. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.message

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.message variant 1

anyOf variant 1: A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note..

- Value shape: (string or null). A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.message variant 2

anyOf variant 2.

- Value shape: null. A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.name

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.name variant 1

anyOf variant 1: The recipient's name, shown in their gift emails. Null when no name was given..

- Value shape: (string or null). The recipient's name, shown in their gift emails. Null when no name was given. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.name variant 2

anyOf variant 2.

- Value shape: null. The recipient's name, shown in their gift emails. Null when no name was given. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gifts_enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gifts_enabled variant 1

anyOf variant 1: Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created..

- Value shape: boolean. Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gifts_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1

anyOf variant 1: Identified frozen plan lines with buyer quantity permissions and bounds..

- Value shape: Array of object. Identified frozen plan lines with buyer quantity permissions and bounds. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 2

anyOf variant 2.

- Value shape: null. Identified frozen plan lines with buyer quantity permissions and bounds. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer may adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items-variant-1-fields-1allow_quantity_adjustment). |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items-variant-1-fields-1max_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items-variant-1-fields-1min_quantity). |
| `name` | Optional | string or null | The captured line name. `name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items-variant-1-fields-1name). |
| `quantity` | Optional | integer or null | The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items-variant-1-fields-1quantity). |
| `subscription_plan_line_item_id` | Optional | string or null | The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. `subscription_plan_line_item_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items-variant-1-fields-1subscription_plan_line_item_id). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The captured unit price. |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.allow_quantity_adjustment

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the buyer may adjust this line quantity..

- Value shape: boolean. Whether the buyer may adjust this line quantity. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer may adjust this line quantity. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.max_quantity

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.min_quantity

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.name

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.name variant 1

anyOf variant 1: The captured line name..

- Value shape: string. The captured line name. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. The captured line name. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.quantity

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.quantity variant 1

anyOf variant 1: The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.quantity variant 2

anyOf variant 2.

- Value shape: null. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 1

anyOf variant 1: The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID..

- Value shape: string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.plan_name

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.plan_name variant 1

anyOf variant 1: Plan name shown to the buyer..

- Value shape: string. Plan name shown to the buyer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.plan_name variant 2

anyOf variant 2.

- Value shape: null. Plan name shown to the buyer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping

Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_name` | Conditional | string or null | Name of the delivery method the buyer chose, as the buyer sees it. `delivery_method_name`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1recurring_shipping-variant-1delivery_method_name). |
| `price_type` | Conditional | string or null | Whether the delivery method charges a flat price or a price worked out for each delivery. Values: `"fixed"`, `"quoted"`. `price_type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1recurring_shipping-variant-1price_type). |
| `shipping_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Shipping charge for one delivery with this delivery method. For a `quoted` method it is the amount worked out now, and later deliveries can charge a different amount. |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping variant 1

anyOf CheckoutSubscriptionRecurringShippingPreviousAttributes.

- Optional: `delivery_method_name`, `price_type`, `shipping_money`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping variant 2

anyOf variant 2.

- Undeclared: `delivery_method_name`, `price_type`, `shipping_money`.
- Value shape: null. Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping variant 1.delivery_method_name

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping variant 1.delivery_method_name variant 1

anyOf variant 1: Name of the delivery method the buyer chose, as the buyer sees it..

- Value shape: string. Name of the delivery method the buyer chose, as the buyer sees it. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping variant 1.delivery_method_name variant 2

anyOf variant 2.

- Value shape: null. Name of the delivery method the buyer chose, as the buyer sees it. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping variant 1.price_type

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping variant 1.price_type variant 1

anyOf variant 1: Whether the delivery method charges a flat price or a price worked out for each delivery..

- Value shape: string. Whether the delivery method charges a flat price or a price worked out for each delivery. Values: `"fixed"`, `"quoted"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.recurring_shipping variant 1.price_type variant 2

anyOf variant 2.

- Value shape: null. Whether the delivery method charges a flat price or a price worked out for each delivery. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.subscription_plan_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.subscription_plan_id variant 1

anyOf variant 1: Flint subscription plan ID the terms come from..

- Value shape: string. Flint subscription plan ID the terms come from. Flint subscription plan ID the terms come from. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Flint subscription plan ID the terms come from. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.trial_period_days

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.trial_period_days variant 1

anyOf variant 1: Days before the first recurring charge, when the plan has a trial..

- Value shape: integer. Days before the first recurring charge, when the plan has a trial. Days before the first recurring charge, when the plan has a trial. Format: `int32`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.trial_period_days variant 2

anyOf variant 2.

- Value shape: null. Days before the first recurring charge, when the plan has a trial. 

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

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax

The session's tax settings. Omitted when the session sets none.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Conditional | Alternative shapes (see declared variants) | The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses. `calculation`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestax-variant-1calculation). |
| `enabled` | Conditional | boolean or null | Whether the session collects tax, as set when it was created. `enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestax-variant-1enabled). |
| `location_fixed_by_merchant` | Conditional | Alternative shapes (see declared variants) | The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. `location_fixed_by_merchant`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestax-variant-1location_fixed_by_merchant). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1

anyOf CheckoutSessionTaxPreviousAttributes.

- Optional: `calculation`, `enabled`, `location_fixed_by_merchant`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 2

anyOf variant 2.

- Undeclared: `calculation`, `enabled`, `location_fixed_by_merchant`.
- Value shape: null. The session's tax settings. Omitted when the session sets none. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation

The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Conditional | string or null | Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. `components_source`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestax-variant-1calculation-variant-1components_source). |
| `mode` | Conditional | string or null | `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestax-variant-1calculation-variant-1mode). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1: `components_source` = `"callback"`

anyOf CheckoutTaxCalculationPreviousAttributes.

- Optional: `components_source`, `mode`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 2

anyOf variant 2.

- Undeclared: `components_source`, `mode`.
- Value shape: null. The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.components_source

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.components_source variant 1

anyOf variant 1: Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`..

- Value shape: string. Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.components_source variant 2

anyOf variant 2.

- Value shape: null. Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.mode

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.mode variant 1

anyOf variant 1: `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`..

- Value shape: string. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.mode variant 2

anyOf variant 2.

- Value shape: null. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.enabled variant 1

anyOf variant 1: Whether the session collects tax, as set when it was created..

- Value shape: boolean. Whether the session collects tax, as set when it was created. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the session collects tax, as set when it was created. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant

The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tax variant 1.location_fixed_by_merchant variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason variant 1

anyOf variant 1: Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied..

- Value shape: string. Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Values: `"payment_succeeded"`, `"payment_partially_succeeded"`, `"expired"`, `"closed_by_merchant"`, `"order_mutated"`, `"superseded"`, `"order_paid_elsewhere"`, `"invoice_paid_elsewhere"`, `"invoice_voided"`, `"invoice_uncollectible"`, `"invoice_balance_changed"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason variant 2

anyOf variant 2.

- Value shape: null. Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme

The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Conditional | string or null | Accent color, from the session or link theme, or from branding settings. `accent_color`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestheme-variant-1accent_color). |
| `background_color` | Conditional | string or null | Page background color from branding settings, as a six-digit hex value such as `#ffffff`. `background_color`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestheme-variant-1background_color). |
| `corner_radius` | Conditional | integer or null | Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. `corner_radius`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestheme-variant-1corner_radius). |
| `font_family` | Conditional | string or null | Font family from branding settings. New values may be added. Values: `"instrument_sans"`, `"system_sans"`, `"system_serif"`, `"monospace"`. `font_family`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestheme-variant-1font_family). |
| `primary_color` | Conditional | string or null | Primary color, from the session or link theme, or from branding settings. `primary_color`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestheme-variant-1primary_color). |
| `text_color` | Conditional | string or null | Text color from branding settings, as a six-digit hex value. `text_color`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestheme-variant-1text_color). |
| `title` | Conditional | string or null | Title shown in place of the merchant's business name. `title`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestheme-variant-1title). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1

anyOf CheckoutThemePreviousAttributes.

- Optional: `accent_color`, `background_color`, `corner_radius`, `font_family`, `primary_color`, `text_color`, `title`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 2

anyOf variant 2.

- Undeclared: `accent_color`, `background_color`, `corner_radius`, `font_family`, `primary_color`, `text_color`, `title`.
- Value shape: null. The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.accent_color

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.accent_color variant 1

anyOf variant 1: Accent color, from the session or link theme, or from branding settings..

- Value shape: string. Accent color, from the session or link theme, or from branding settings. Accent color, from the session or link theme, or from branding settings. maxLength: `50`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.accent_color variant 2

anyOf variant 2.

- Value shape: null. Accent color, from the session or link theme, or from branding settings. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.background_color

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.background_color variant 1

anyOf variant 1: Page background color from branding settings, as a six-digit hex value such as `#ffffff`..

- Value shape: string. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. pattern: `^#[0-9a-fA-F]{6}$`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.background_color variant 2

anyOf variant 2.

- Value shape: null. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.corner_radius

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.corner_radius variant 1

anyOf variant 1: Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner..

- Value shape: integer. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Format: `int32`. minimum: `0`. maximum: `32`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.corner_radius variant 2

anyOf variant 2.

- Value shape: null. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.font_family

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.font_family variant 1

anyOf variant 1: Font family from branding settings. New values may be added..

- Value shape: string. Font family from branding settings. New values may be added. Values: `"instrument_sans"`, `"system_sans"`, `"system_serif"`, `"monospace"`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.font_family variant 2

anyOf variant 2.

- Value shape: null. Font family from branding settings. New values may be added. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.primary_color

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.primary_color variant 1

anyOf variant 1: Primary color, from the session or link theme, or from branding settings..

- Value shape: string. Primary color, from the session or link theme, or from branding settings. Primary color, from the session or link theme, or from branding settings. maxLength: `50`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.primary_color variant 2

anyOf variant 2.

- Value shape: null. Primary color, from the session or link theme, or from branding settings. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.text_color

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.text_color variant 1

anyOf variant 1: Text color from branding settings, as a six-digit hex value..

- Value shape: string. Text color from branding settings, as a six-digit hex value. Text color from branding settings, as a six-digit hex value. pattern: `^#[0-9a-fA-F]{6}$`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.text_color variant 2

anyOf variant 2.

- Value shape: null. Text color from branding settings, as a six-digit hex value. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.title

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.title variant 1

anyOf variant 1: Title shown in place of the merchant's business name..

- Value shape: string. Title shown in place of the merchant's business name. Title shown in place of the merchant's business name. maxLength: `255`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.theme variant 1.title variant 2

anyOf variant 2.

- Value shape: null. Title shown in place of the merchant's business name. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip

The tip options this session offers the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Conditional | boolean or null | Whether buyers can enter a custom tip amount. `custom_tip_enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestip-variant-1custom_tip_enabled). |
| `default_smart_tip_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. |
| `default_tip_percent` | Conditional | number or null | The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. `default_tip_percent`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestip-variant-1default_tip_percent). |
| `enabled` | Conditional | boolean or null | Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. `enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestip-variant-1enabled). |
| `smart_tip_money_options` | Conditional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. `smart_tip_money_options`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestip-variant-1smart_tip_money_options). |
| `smart_tips_enabled` | Conditional | boolean or null | Whether checkout offers fixed tip amounts instead of tip percentages. `smart_tips_enabled`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestip-variant-1smart_tips_enabled). |
| `tip_percent_options` | Conditional | Array of number or null | Three tip percents to offer, each from 1 through 100 with at most four decimal places. `tip_percent_options`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestip-variant-1tip_percent_options). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1

anyOf CheckoutTipConfigPreviousAttributes.

- Optional: `custom_tip_enabled`, `default_smart_tip_money`, `default_tip_percent`, `enabled`, `smart_tip_money_options`, `smart_tips_enabled`, `tip_percent_options`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 2

anyOf variant 2.

- Undeclared: `custom_tip_enabled`, `default_smart_tip_money`, `default_tip_percent`, `enabled`, `smart_tip_money_options`, `smart_tips_enabled`, `tip_percent_options`.
- Value shape: null. The tip options this session offers the buyer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.custom_tip_enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.custom_tip_enabled variant 1

anyOf variant 1: Whether buyers can enter a custom tip amount..

- Value shape: boolean. Whether buyers can enter a custom tip amount. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.custom_tip_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether buyers can enter a custom tip amount. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.default_tip_percent

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.default_tip_percent variant 1

anyOf variant 1: The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip..

- Value shape: number. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.default_tip_percent variant 2

anyOf variant 2.

- Value shape: null. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.enabled variant 1

anyOf variant 1: Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it..

- Value shape: boolean. Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.smart_tip_money_options

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.smart_tip_money_options variant 1

anyOf variant 1: Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency..

- Value shape: Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.smart_tip_money_options variant 2

anyOf variant 2.

- Value shape: null. Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.smart_tips_enabled

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.smart_tips_enabled variant 1

anyOf variant 1: Whether checkout offers fixed tip amounts instead of tip percentages..

- Value shape: boolean. Whether checkout offers fixed tip amounts instead of tip percentages. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.smart_tips_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout offers fixed tip amounts instead of tip percentages. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.tip_percent_options

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.tip_percent_options variant 1

anyOf variant 1: Three tip percents to offer, each from 1 through 100 with at most four decimal places..

- Value shape: Array of number. Three tip percents to offer, each from 1 through 100 with at most four decimal places. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.tip variant 1.tip_percent_options variant 2

anyOf variant 2.

- Value shape: null. Three tip percents to offer, each from 1 through 100 with at most four decimal places. 

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

