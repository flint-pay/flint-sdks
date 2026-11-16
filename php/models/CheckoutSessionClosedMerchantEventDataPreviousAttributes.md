[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [OrderPaymentAttemptPreviousAttributes](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributes) or null | The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. `active_payment_attempt`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt). |
| `buyer_contact` | Optional | [CheckoutBuyerContactPreviousAttributes](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributes) or null | Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. `buyer_contact`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_contact). |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsPreviousAttributes](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributes) or null | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `can_apply_promotion_code` | Optional | boolean or null | Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. `can_apply_promotion_code`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescan_apply_promotion_code). |
| `checkout_session_id` | Optional | string or null | Unique identifier for this checkout session, prefixed `cs_`. `checkout_session_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescheckout_session_id). |
| `client_reference` | Optional | string or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. `client_reference`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference). |
| `closed_reason_message` | Optional | string or null | The note supplied when the checkout session was closed. `closed_reason_message`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclosed_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `custom_field_answers` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `custom_field_answers`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers). |
| `custom_text` | Optional | [CheckoutCustomTextConfigPreviousAttributes](../models/CheckoutCustomTextConfigPreviousAttributes.md#checkoutcustomtextconfigpreviousattributes) or null | The custom text this session shows in checkout. |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer_id). |
| `delivery` | Optional | [CheckoutDerivedDeliveryResourcePreviousAttributes](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributes) or null | Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. `delivery`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery). |
| `delivery_method_ids` | Optional | Array of string or null | Immutable delivery method assignment captured when the checkout was created. `delivery_method_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_method_ids). |
| `delivery_selection_required` | Optional | boolean or null | Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. `delivery_selection_required`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_selection_required). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expires_in_seconds` | Optional | integer or null | The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. `expires_in_seconds`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesexpires_in_seconds). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_card_challenge` | Optional | [CheckoutGiftCardChallengePreviousAttributes](../models/CheckoutGiftCardChallengePreviousAttributes.md#checkoutgiftcardchallengepreviousattributes) or null | Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. `gift_card_challenge`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesgift_card_challenge). |
| `inventory_reservation_ids` | Optional | Array of string or null | Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. `inventory_reservation_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinventory_reservation_ids). |
| `invoice` | Optional | [ExpandedInvoiceSummaryPreviousAttributes](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributes) or null | Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. `invoice`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice). |
| `invoice_id` | Optional | string or null | ID of the invoice a session of type `invoice` collects payment for. Absent for other types. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice_id). |
| `is_in_recovery` | Optional | boolean or null | Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. `is_in_recovery`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesis_in_recovery). |
| `legal` | Optional | [CheckoutLegalConfigPreviousAttributes](../models/CheckoutLegalConfigPreviousAttributes.md#checkoutlegalconfigpreviousattributes) or null | The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder_id). |
| `page_origin` | Optional | string or null | Origin of the page that renders this headless checkout. Omitted when not set. `page_origin`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespage_origin). |
| `payment_collection` | Optional | [PaymentCollectionPreviousAttributes](../models/PaymentCollectionPreviousAttributes.md#paymentcollectionpreviousattributes) or null | Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents for the session's order. Absent when the order has none. `payment_intent_ids`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. `payment_intents`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents). |
| `payment_link` | Optional | [ExpandedPaymentLinkSummaryPreviousAttributes](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributes) or null | Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. `payment_link`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link). |
| `payment_link_id` | Optional | string or null | ID of the payment link the session was started from. Absent when it was not started from a payment link. `payment_link_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link_id). |
| `payment_return_url` | Optional | string or null | Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Query strings are deliberately excluded so credentials and provider state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048 characters. `payment_return_url`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_return_url). |
| `payments` | Optional | [CheckoutPaymentConfigPreviousAttributes](../models/CheckoutPaymentConfigPreviousAttributes.md#checkoutpaymentconfigpreviousattributes) or null | Configured payment options for merchant credentials; currently available payment options for the checkout credential. |
| `prefill` | Optional | [CheckoutPrefillPreviousAttributes](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributes) or null | Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. |
| `problems` | Optional | Array of [CheckoutProblemResourcePreviousAttributes](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributes) or null | Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. `problems`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesproblems). |
| `promotion_config` | Optional | [CheckoutPromotionConfigPreviousAttributes](../models/CheckoutPromotionConfigPreviousAttributes.md#checkoutpromotionconfigpreviousattributes) or null | Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. |
| `redirects` | Optional | [CheckoutRedirectsPreviousAttributes](../models/CheckoutRedirectsPreviousAttributes.md#checkoutredirectspreviousattributes) or null | Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects). |
| `refunds` | Optional | Array of [BuyerRefundPreviousAttributes](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributes) or null | All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. `refunds`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds). |
| `setup_collection` | Optional | [SetupCollectionPreviousAttributes](../models/SetupCollectionPreviousAttributes.md#setupcollectionpreviousattributes) or null | Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. |
| `status` | Optional | string or null | Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. `status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesstatus). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. `subscription_plan_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_plan_id). |
| `subscription_terms` | Optional | [CheckoutSubscriptionTermsPreviousAttributes](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributes) or null | Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. `subscription_terms`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms). |
| `superseding_checkout_session_id` | Optional | string or null | ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. `superseding_checkout_session_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessuperseding_checkout_session_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. Items values: `"close"`. `supported_actions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessupported_actions). |
| `surface` | Optional | string or null | How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Values: `"hosted"`, `"headless"`. `surface`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessurface). |
| `tax` | Optional | [CheckoutSessionTaxPreviousAttributes](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributes) or null | The session's tax settings. Omitted when the session sets none. |
| `terminal_reason` | Optional | string or null | Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Values: [11 declared values](BuyerCheckoutSessionInput.md#buyercheckoutsessioninput-terminal_reason-values). `terminal_reason`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesterminal_reason). |
| `theme` | Optional | [CheckoutThemePreviousAttributes](../models/CheckoutThemePreviousAttributes.md#checkoutthemepreviousattributes) or null | The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. |
| `tip` | Optional | [CheckoutTipConfigPreviousAttributes](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributes) or null | The tip options this session offers the buyer. |
| `type` | Optional | string or null | What the session collects payment for, fixed at creation. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`. `type`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt

The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Conditional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `expected_outstanding_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. |
| `gift_card_redemptions` | Conditional | Array of [PaymentAttemptGiftCardRedemptionPreviousAttributes](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributes) or null | Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. `gift_card_redemptions`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesgift_card_redemptions). |
| `is_resumable` | Conditional | boolean or null | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. `is_resumable`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesis_resumable). |
| `last_payment_error` | Conditional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. `last_payment_error`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributeslast_payment_error). |
| `mode` | Conditional | string or null | Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Values: `"payment"`, `"setup"`, `"settlement"`. `mode`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesmode). |
| `order_id` | Conditional | string or null | The order this payment attempt collects money for or saves a payment method for. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1order_id). |
| `order_payment_attempt_id` | Conditional | string or null | Unique identifier for this order payment attempt, prefixed `opat_`. `order_payment_attempt_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1order_payment_attempt_id). |
| `payment_intents` | Conditional | Array of [PaymentAttemptPaymentIntentPreviousAttributes](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributes) or null | The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. `payment_intents`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents). |
| `payment_method_save` | Conditional | [OrderPaymentAttemptPaymentMethodSavePreviousAttributes](../models/OrderPaymentAttemptPaymentMethodSavePreviousAttributes.md#orderpaymentattemptpaymentmethodsavepreviousattributes) or null | Reports only a checkout buyer's skipped save when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A merchant save has no entry here; read payment_source.card.payment_method_id on the payment intent. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. |
| `pending_actions` | Conditional | Array of [PendingPaymentActionPreviousAttributes](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributes) or null | Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. `pending_actions`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespending_actions). |
| `started_at` | Conditional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `status` | Conditional | string or null | Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Values: `"processing"`, `"requires_action"`, `"requires_capture"`, `"partially_succeeded"`, `"succeeded"`, `"failed"`, `"expired"`, `"canceled"`. `status`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesstatus). |
| `status_reason` | Conditional | string or null | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [30 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). `status_reason`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesstatus_reason). |
| `supported_actions` | Conditional | Array of string or null | Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributessupported_actions). |

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

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.gift_card_redemptions](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesgift_card_redemptions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.is_resumable

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.is_resumable](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesis_resumable).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.last_payment_error](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributeslast_payment_error).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.mode

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.mode](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesmode).

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

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.payment_intents](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.pending_actions

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.pending_actions](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespending_actions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.started_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.status

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.status](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesstatus).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.status_reason

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.status_reason](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesstatus_reason).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.supported_actions

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.supported_actions](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributessupported_actions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact

Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted.

Field definitions: [shared fields](ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1

anyOf CheckoutBuyerContactPreviousAttributes.

- Optional: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 2

anyOf variant 2.

- Undeclared: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.
- Value shape: null. Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.email

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.email](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact-variant-1email).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.is_email_cleared

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.is_email_cleared](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesis_email_cleared).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.is_phone_cleared

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.is_phone_cleared](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesis_phone_cleared).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.phone

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.phone](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesphone).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.updated_at

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.updated_at](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact-variant-1updated_at).

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

- Value shape: string. The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. minLength: `1`. maxLength: `255`. 

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

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer

Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1

anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.email

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.email](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.name

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.name](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.phone

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.phone](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer variant 1.status

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.status](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus).

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
| `buyer_reasons` | Conditional | Array of string or null | Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. `buyer_reasons`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesbuyer_reasons). |
| `choice_groups` | Conditional | Array of [DeliveryQuoteChoiceGroupResourcePreviousAttributes](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributes) or null | Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. `choice_groups`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributeschoice_groups). |
| `delivery_quote_id` | Conditional | string or null | ID of the checkout's current delivery quote. Omitted until the checkout has one. `delivery_quote_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1delivery_quote_id). |
| `delivery_selection_id` | Conditional | string or null | Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. `delivery_selection_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1delivery_selection_id). |
| `evaluation_status` | Conditional | string or null | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. `evaluation_status`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesevaluation_status). |
| `expires_at` | Conditional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `input_requirements` | Conditional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. `input_requirements`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesinput_requirements). |
| `merchant_diagnostics` | Conditional | Array of [DeliveryMerchantDiagnosticPreviousAttributes](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributes) or null | Always present with an API key or dashboard credential. `merchant_diagnostics`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesmerchant_diagnostics). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1

anyOf CheckoutDerivedDeliveryResourcePreviousAttributes.

- Optional: `buyer_reasons`, `choice_groups`, `delivery_quote_id`, `delivery_selection_id`, `evaluation_status`, `expires_at`, `input_requirements`, `merchant_diagnostics`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 2

anyOf variant 2.

- Undeclared: `buyer_reasons`, `choice_groups`, `delivery_quote_id`, `delivery_selection_id`, `evaluation_status`, `expires_at`, `input_requirements`, `merchant_diagnostics`.
- Value shape: null. Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.buyer_reasons

Declared alternatives: [CheckoutDerivedDeliveryResourcePreviousAttributes.buyer_reasons](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesbuyer_reasons).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups

Declared alternatives: [CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributeschoice_groups).

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

- Value shape: string. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.evaluation_status

Declared alternatives: [CheckoutDerivedDeliveryResourcePreviousAttributes.evaluation_status](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesevaluation_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.expires_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.input_requirements

Declared alternatives: [CheckoutDerivedDeliveryResourcePreviousAttributes.input_requirements](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesinput_requirements).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.merchant_diagnostics

Declared alternatives: [CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesmerchant_diagnostics).

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
| `collection_block_status` | Conditional | string or null | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. `collection_block_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescollection_block_status). |
| `created_at` | Conditional | string or null | When the invoice was created. `created_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1created_at). |
| `customer_id` | Conditional | string or null | Customer billed by the invoice. Absent when the invoice has no customer. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1customer_id). |
| `due_date` | Conditional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. `due_date`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1due_date). |
| `invoice_id` | Conditional | string or null | Flint invoice ID. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1invoice_id). |
| `invoice_number` | Conditional | string or null | Sequential document number assigned when the invoice is issued. Absent on a draft. `invoice_number`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesinvoice_number). |
| `is_overdue` | Conditional | boolean or null | Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. `is_overdue`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesis_overdue). |
| `order_id` | Conditional | string or null | The order the invoice bills. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1order_id). |
| `pricing_amounts` | Conditional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | The invoice pricing totals, frozen at issue; a draft previews the backing order. |
| `refund_status` | Conditional | string or null | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesrefund_status). |
| `settlement_amounts` | Conditional | [InvoiceSettlementAmountsPreviousAttributes](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributes) or null | The same settlement amounts as the full Invoice. |
| `status` | Conditional | string or null | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. `status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesstatus). |
| `supported_actions` | Conditional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. `supported_actions`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributessupported_actions). |
| `updated_at` | Conditional | string or null | When the invoice last changed. `updated_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1updated_at). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1

anyOf ExpandedInvoiceSummaryPreviousAttributes.

- Optional: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 2

anyOf variant 2.

- Undeclared: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.collection_block_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.collection_block_status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescollection_block_status).

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

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.invoice_number](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesinvoice_number).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.is_overdue

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.is_overdue](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesis_overdue).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.order_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.order_id variant 1

anyOf variant 1: The order the invoice bills..

- Value shape: string. The order the invoice bills. The order the invoice bills. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. The order the invoice bills. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.refund_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.refund_status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesrefund_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesstatus).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.supported_actions

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.supported_actions](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributessupported_actions).

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

anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.order variant 1.supported_actions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.supported_actions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions).

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
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id). |
| `payment_source` | Optional | [PaymentSourceSummaryPreviousAttributes](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributes) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus). |
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

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.payment_intent_id](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.refund_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.refund_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1.status

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.status](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus).

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
| `completed_count` | Conditional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributescompleted_count). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `description` | Conditional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesdescription). |
| `name` | Conditional | string or null | Name of the payment link. `name`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesname). |
| `payment_link_id` | Conditional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1payment_link_id). |
| `payment_link_type` | Conditional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_type). |
| `status` | Conditional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesstatus). |
| `subscription_plan_id` | Conditional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link-variant-1subscription_plan_id). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `url` | Conditional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesurl). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1

anyOf ExpandedPaymentLinkSummaryPreviousAttributes.

- Optional: `completed_count`, `created_at`, `description`, `name`, `payment_link_id`, `payment_link_type`, `status`, `subscription_plan_id`, `updated_at`, `url`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 2

anyOf variant 2.

- Undeclared: `completed_count`, `created_at`, `description`, `name`, `payment_link_id`, `payment_link_type`, `status`, `subscription_plan_id`, `updated_at`, `url`.
- Value shape: null. Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.completed_count

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.completed_count](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributescompleted_count).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.description

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.description](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesdescription).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.name

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.name](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesname).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_id variant 1

anyOf variant 1: Unique identifier for this payment link, prefixed `pl_`..

- Value shape: string. Unique identifier for this payment link, prefixed `pl_`. Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link, prefixed `pl_`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.payment_link_type

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_type](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_type).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link variant 1.status

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.status](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesstatus).

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

Declared alternatives: [ExpandedPaymentLinkSummaryPreviousAttributes.url](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesurl).

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

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems variant 1

anyOf variant 1: Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error..

- Value shape: Array of [CheckoutProblemResourcePreviousAttributes](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributes). Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems variant 2

anyOf variant 2.

- Value shape: null. Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. 

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
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `customer`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer). |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1customer_id). |
| `failure_reason` | Optional | string or null | A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`. `failure_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1invoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributes](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributes) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations). |
| `order` | Optional | [BuyerExpandedOrderSummaryPreviousAttributes](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributes) or null | The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `order`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder). |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1order_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1order_id). |
| `payment_intent` | Optional | [BuyerExpandedPaymentIntentSummaryPreviousAttributes](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributes) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `payment_intent`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1payment_intent_id). |
| `payment_refunds` | Optional | Array of [BuyerPaymentRefundPreviousAttributes](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributes) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds). |
| `pending_reason` | Optional | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by). |
| `reason` | Optional | string or null | `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`. `reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason). |
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
| `billing_interval` | Conditional | string or null | Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval). |
| `billing_interval_count` | Conditional | integer or null | Number of billing intervals between recurring charges. `billing_interval_count`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval_count). |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Billing intervals the buyer can choose from, frozen from the plan when the session was created. `billing_interval_options`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval_options). |
| `contract_term_months` | Conditional | integer or null | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. `contract_term_months`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributescontract_term_months). |
| `deliveries_per_period` | Conditional | integer or null | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. `deliveries_per_period`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdeliveries_per_period). |
| `delivery_interval` | Conditional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. `delivery_interval`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval). |
| `delivery_interval_count` | Conditional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. `delivery_interval_count`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval_count). |
| `delivery_required` | Conditional | boolean or null | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. `delivery_required`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_required). |
| `early_termination_fee_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. |
| `gift_recipient` | Conditional | [SubscriptionGiftRecipientPreviousAttributes](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributes) or null | Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. `gift_recipient`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgift_recipient). |
| `gifts_enabled` | Conditional | boolean or null | Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. `gifts_enabled`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgifts_enabled). |
| `line_items` | Conditional | Array of object or null | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items). |
| `plan_name` | Conditional | string or null | Plan name shown to the buyer. `plan_name`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesplan_name). |
| `recurring_shipping` | Conditional | [CheckoutSubscriptionRecurringShippingPreviousAttributes](../models/CheckoutSubscriptionRecurringShippingPreviousAttributes.md#checkoutsubscriptionrecurringshippingpreviousattributes) or null | Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. |
| `recurring_total_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. |
| `setup_fee_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | One-time fee charged with the first payment, when the plan has one. |
| `subscription_plan_id` | Conditional | string or null | Flint subscription plan ID the terms come from. `subscription_plan_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1subscription_plan_id). |
| `trial_period_days` | Conditional | integer or null | Days before the first recurring charge, when the plan has a trial. `trial_period_days`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributestrial_period_days). |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1

anyOf CheckoutSubscriptionTermsPreviousAttributes.

- Optional: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `contract_term_months`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `delivery_required`, `early_termination_fee_money`, `gift_recipient`, `gifts_enabled`, `line_items`, `plan_name`, `recurring_shipping`, `recurring_total_money`, `setup_fee_money`, `subscription_plan_id`, `trial_period_days`.

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `contract_term_months`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `delivery_required`, `early_termination_fee_money`, `gift_recipient`, `gifts_enabled`, `line_items`, `plan_name`, `recurring_shipping`, `recurring_total_money`, `setup_fee_money`, `subscription_plan_id`, `trial_period_days`.
- Value shape: null. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.billing_interval](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval_count

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.billing_interval_count](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval_count).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.billing_interval_options

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.billing_interval_options](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval_options).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.contract_term_months

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.contract_term_months](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributescontract_term_months).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.deliveries_per_period

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.deliveries_per_period](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdeliveries_per_period).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.delivery_interval](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval_count

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.delivery_interval_count](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval_count).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_required

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.delivery_required](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_required).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.gift_recipient](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgift_recipient).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gifts_enabled

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.gifts_enabled](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgifts_enabled).

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
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer may adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemallow_quantity_adjustment). |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemmin_quantity). |
| `name` | Optional | string or null | The captured line name. `name`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemname). |
| `quantity` | Optional | integer or null | The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemquantity). |
| `subscription_plan_line_item_id` | Optional | string or null | The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. `subscription_plan_line_item_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1line_items-variant-1-fields-1subscription_plan_line_item_id). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The captured unit price. |

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.allow_quantity_adjustment

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.allow_quantity_adjustment](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemallow_quantity_adjustment).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.max_quantity

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.max_quantity](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemmax_quantity).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.min_quantity

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.min_quantity](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemmin_quantity).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.name

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.name](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemname).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.quantity

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.quantity](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemquantity).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 1

anyOf variant 1: The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID..

- Value shape: string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.plan_name

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.plan_name](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesplan_name).

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.subscription_plan_id

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.subscription_plan_id variant 1

anyOf variant 1: Flint subscription plan ID the terms come from..

- Value shape: string. Flint subscription plan ID the terms come from. Flint subscription plan ID the terms come from. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Flint subscription plan ID the terms come from. 

### CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.trial_period_days

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.trial_period_days](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributestrial_period_days).

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

