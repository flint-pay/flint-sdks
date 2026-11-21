[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionActivatedInstalledMerchantsEventInput

The `subscription.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"subscription.activated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### SubscriptionActivatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributes). |

### SubscriptionActivatedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](WebhookSnapshotSubscriptionInput.md#webhooksnapshotsubscriptioninput).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer or null | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. `billing_anchor_day`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesbilling_anchor_day). |
| `billing_hold` | Optional | [SubscriptionBillingHoldPreviousAttributesInput](../models/SubscriptionBillingHoldPreviousAttributesInput.md#subscriptionbillingholdpreviousattributesinput) or null | Configuration issue or automatic retry delaying billing, with the first detection time. Flint retries automatically without starting payment recovery. Cleared when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or a card decline starts payment recovery. Included only in merchant responses. |
| `billing_interval` | Optional | string or null | How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of billing_interval units between charges. Changes with billing_interval. `billing_interval_count`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributesInput](../models/SubscriptionIntervalOptionPreviousAttributesInput.md#subscriptionintervaloptionpreviousattributesinput) or null | Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. `billing_interval_options`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesbilling_interval_options). |
| `billing_schedule_owner` | Optional | string or null | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`. `billing_schedule_owner`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesbilling_schedule_owner). |
| `billing_schedule_waiting_started_at` | Optional | string or null | RFC3339 timestamp. `billing_schedule_waiting_started_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `cancel_at_period_end` | Optional | boolean or null | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. `cancel_at_period_end`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributescancel_at_period_end). |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `cancellation_details` | Optional | [SubscriptionCancellationDetailsPreviousAttributesInput](../models/SubscriptionCancellationDetailsPreviousAttributesInput.md#subscriptioncancellationdetailspreviousattributesinput) or null | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. |
| `cancellation_reason` | Optional | string or null | Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`, `"signup_order_refunded"`. `cancellation_reason`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributescancellation_reason). |
| `completed_cycles` | Optional | integer or null | Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. `completed_cycles`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributescompleted_cycles). |
| `contract_end_at` | Optional | string or null | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. `contract_end_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributescontract_end_at). |
| `contract_start_at` | Optional | string or null | When the recorded contract term started. Does not move when the subscription pauses or changes plan. `contract_start_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributescontract_start_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `current_period_end_at` | Optional | string or null | RFC3339 timestamp. `current_period_end_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `current_period_start_at` | Optional | string or null | RFC3339 timestamp. `current_period_start_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributesInput](../models/ExpandedCustomerSummaryPreviousAttributesInput.md#expandedcustomersummarypreviousattributesinput) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | The customer this subscription bills. `customer_id`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputcustomer_id). |
| `deliveries_per_period` | Optional | integer or null | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. `deliveries_per_period`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdeliveries_per_period). |
| `delivery` | Optional | [SubscriptionDeliveryPreviousAttributesInput](../models/SubscriptionDeliveryPreviousAttributesInput.md#subscriptiondeliverypreviousattributesinput) or null | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. |
| `delivery_hold` | Optional | [SubscriptionDeliveryHoldPreviousAttributesInput](../models/SubscriptionDeliveryHoldPreviousAttributesInput.md#subscriptiondeliveryholdpreviousattributesinput) or null | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. |
| `delivery_interval` | Optional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. `delivery_interval`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdelivery_interval). |
| `delivery_interval_count` | Optional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. `delivery_interval_count`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdelivery_interval_count). |
| `early_termination_fee_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. |
| `end_after` | Optional | ([SubscriptionEndAfterPreviousAttributesInput](../models/SubscriptionEndAfterPreviousAttributesInput.md#subscriptionendafterpreviousattributesinput) or null) or null | Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. |
| `expires_at` | Optional | string or null | Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. `expires_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesexpires_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientPreviousAttributesInput](../models/SubscriptionGiftRecipientPreviousAttributesInput.md#subscriptiongiftrecipientpreviousattributesinput) or null | Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `inventory_wait` | Optional | [SubscriptionInventoryWaitPreviousAttributesInput](../models/SubscriptionInventoryWaitPreviousAttributesInput.md#subscriptioninventorywaitpreviousattributesinput) or null | Renewal or prepaid delivery waiting for stock. Buyers receive only started_at. |
| `is_awaiting_billing_schedule` | Optional | boolean or null | True while an active or trialing subscription on an external billing schedule has no next billing date. `is_awaiting_billing_schedule`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesis_awaiting_billing_schedule). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributesInput](../models/PaymentErrorSummaryPreviousAttributesInput.md#paymenterrorsummarypreviousattributesinput) or null | Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. |
| `line_items` | Optional | Array of [SubscriptionLineItemPreviousAttributesInput](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinput) or null | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. `line_items`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesline_items). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `missed_billing_at` | Optional | string or null | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. `missed_billing_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesmissed_billing_at). |
| `next_billing_at` | Optional | string or null | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. `next_billing_at`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputnext_billing_at). |
| `next_delivery_at` | Optional | string or null | When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. `next_delivery_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesnext_delivery_at). |
| `next_retry_at` | Optional | string or null | Recorded automatic payment retry time. Null when no retry time is available. `next_retry_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesnext_retry_at). |
| `open_renewal_order_id` | Optional | string or null | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. `open_renewal_order_id`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesopen_renewal_order_id). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. |
| `pause_reason` | Optional | string or null | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. `pause_reason`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributespause_reason). |
| `paused_at` | Optional | string or null | RFC3339 timestamp. `paused_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `paused_delivery_hold` | Optional | [SubscriptionPausedDeliveryHoldPreviousAttributesInput](../models/SubscriptionPausedDeliveryHoldPreviousAttributesInput.md#subscriptionpauseddeliveryholdpreviousattributesinput) or null | The delivery hold that expired and paused the subscription. Null when no stored expiry reason exists, including a manual pause during an active hold, or the subscription is no longer paused for delivery action. |
| `payment_link_id` | Optional | string or null | The payment link that started this subscription, when there was one. `payment_link_id`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributespayment_link_id). |
| `payment_method` | Optional | [ExpandedPaymentMethodSummaryPreviousAttributesInput](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinput) or null | Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. |
| `payment_method_due_at` | Optional | string or null | First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. `payment_method_due_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributespayment_method_due_at). |
| `payment_method_id` | Optional | string or null | Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. `payment_method_id`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributespayment_method_id). |
| `promotions` | Optional | Array of [SubscriptionPromotionPreviousAttributesInput](../models/SubscriptionPromotionPreviousAttributesInput.md#subscriptionpromotionpreviousattributesinput) or null | Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. `promotions`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributespromotions). |
| `prorate_first_period` | Optional | boolean or null | Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. `prorate_first_period`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesprorate_first_period). |
| `recurring_subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the cancel response returns it as null. Retrieve the subscription again to get it. |
| `remaining_cycles` | Optional | integer or null | Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. `remaining_cycles`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesremaining_cycles). |
| `remaining_prepaid_deliveries` | Optional | integer or null | Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. `remaining_prepaid_deliveries`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesremaining_prepaid_deliveries). |
| `resume_requested_at` | Optional | string or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. `resume_requested_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesresume_requested_at). |
| `scheduled_cancel_at` | Optional | string or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. `scheduled_cancel_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesscheduled_cancel_at). |
| `scheduled_plan_change` | Optional | [SubscriptionScheduledPlanChangePreviousAttributesInput](../models/SubscriptionScheduledPlanChangePreviousAttributesInput.md#subscriptionscheduledplanchangepreviousattributesinput) or null | Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. |
| `scheduled_promotions` | Optional | Array of [SubscriptionPromotionPreviousAttributesInput](../models/SubscriptionPromotionPreviousAttributesInput.md#subscriptionpromotionpreviousattributesinput) or null | Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. `scheduled_promotions`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesscheduled_promotions). |
| `scheduled_resume_at` | Optional | string or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. `scheduled_resume_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesscheduled_resume_at). |
| `service_location` | Optional | [SubscriptionServiceLocationPreviousAttributesInput](../models/SubscriptionServiceLocationPreviousAttributesInput.md#subscriptionservicelocationpreviousattributesinput) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `starts_at` | Optional | string or null | When a scheduled start's first billing period begins. Present only until that first payment succeeds. `starts_at`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesstarts_at). |
| `status` | Optional | string or null | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. `status`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputstatus). |
| `subscription_id` | Optional | string or null | Stable identifier of the subscription. `subscription_id`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributessubscription_id). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryPreviousAttributesInput](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinput) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string or null | Subscription plan ID. Omitted when terms_type is subscription_offer. `subscription_plan_id`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. `supported_actions`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `tax` | Optional | [SubscriptionTaxPreviousAttributesInput](../models/SubscriptionTaxPreviousAttributesInput.md#subscriptiontaxpreviousattributesinput) or null | The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. |
| `terms_type` | Optional | string or null | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. `terms_type`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputterms_type). |
| `test_clock_id` | Optional | string or null | ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. `test_clock_id`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributestest_clock_id). |
| `trial_end_at` | Optional | string or null | RFC3339 timestamp. `trial_end_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `upcoming_delivery_hold` | Optional | [SubscriptionUpcomingDeliveryHoldPreviousAttributesInput](../models/SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.md#subscriptionupcomingdeliveryholdpreviousattributesinput) or null | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. `version`: [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEventInput.md#subscriptionactivatedinstalledmerchantseventinputdataprevious_attributesversion). |

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_anchor_day

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_anchor_day variant 1

anyOf variant 1: UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules..

- Value shape: integer. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_anchor_day variant 2

anyOf variant 2.

- Value shape: null. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval variant 1

anyOf variant 1: How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move..

- Value shape: string. How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval_count

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval_count variant 1

anyOf variant 1: Number of billing_interval units between charges. Changes with billing_interval..

- Value shape: integer. Number of billing_interval units between charges. Changes with billing_interval. Number of billing_interval units between charges. Changes with billing_interval. Format: `int32`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of billing_interval units between charges. Changes with billing_interval. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval_options

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval_options variant 1

anyOf variant 1: Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributesInput](../models/SubscriptionIntervalOptionPreviousAttributesInput.md#subscriptionintervaloptionpreviousattributesinput). Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. maxItems: `12`. uniqueItems: `true`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_schedule_owner

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_schedule_owner variant 1

anyOf variant 1: Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}..

- Value shape: string. Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`.

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_schedule_owner variant 2

anyOf variant 2.

- Value shape: null. Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.billing_schedule_waiting_started_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.cancel_at_period_end

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.cancel_at_period_end variant 1

anyOf variant 1: True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false..

- Value shape: boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.cancel_at_period_end variant 2

anyOf variant 2.

- Value shape: null. True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 1

anyOf variant 1: Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise..

- Value shape: string. Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`, `"signup_order_refunded"`.

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.completed_cycles

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.completed_cycles variant 1

anyOf variant 1: Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one..

- Value shape: integer. Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Format: `uint64`. minimum: `0`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.completed_cycles variant 2

anyOf variant 2.

- Value shape: null. Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.contract_end_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.contract_end_at variant 1

anyOf variant 1: When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier..

- Value shape: string. When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.contract_end_at variant 2

anyOf variant 2.

- Value shape: null. When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.contract_start_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.contract_start_at variant 1

anyOf variant 1: When the recorded contract term started. Does not move when the subscription pauses or changes plan..

- Value shape: string. When the recorded contract term started. Does not move when the subscription pauses or changes plan. When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.contract_start_at variant 2

anyOf variant 2.

- Value shape: null. When the recorded contract term started. Does not move when the subscription pauses or changes plan. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.current_period_end_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.current_period_start_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.customer_id

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributesInput.customer_id](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputcustomer_id).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.deliveries_per_period

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributesInput.deliveries_per_period](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdeliveries_per_period).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_interval

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributesInput.delivery_interval](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdelivery_interval).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_interval_count

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributesInput.delivery_interval_count](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdelivery_interval_count).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.expires_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 1

anyOf variant 1: Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled..

- Value shape: string. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.idempotency_key](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesidempotency_key).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.is_awaiting_billing_schedule

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.is_awaiting_billing_schedule variant 1

anyOf variant 1: True while an active or trialing subscription on an external billing schedule has no next billing date..

- Value shape: boolean. True while an active or trialing subscription on an external billing schedule has no next billing date. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.is_awaiting_billing_schedule variant 2

anyOf variant 2.

- Value shape: null. True while an active or trialing subscription on an external billing schedule has no next billing date. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.line_items

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 1

anyOf variant 1: What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again..

- Value shape: Array of [SubscriptionLineItemPreviousAttributesInput](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinput). What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.missed_billing_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.missed_billing_at variant 1

anyOf variant 1: The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due..

- Value shape: string. The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.missed_billing_at variant 2

anyOf variant 2.

- Value shape: null. The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.next_billing_at

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributesInput.next_billing_at](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputnext_billing_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.next_delivery_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.next_delivery_at variant 1

anyOf variant 1: When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled..

- Value shape: string. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.next_delivery_at variant 2

anyOf variant 2.

- Value shape: null. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.next_retry_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.next_retry_at variant 1

anyOf variant 1: Recorded automatic payment retry time. Null when no retry time is available..

- Value shape: string. Recorded automatic payment retry time. Null when no retry time is available. Recorded automatic payment retry time. Null when no retry time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.next_retry_at variant 2

anyOf variant 2.

- Value shape: null. Recorded automatic payment retry time. Null when no retry time is available. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.open_renewal_order_id

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.open_renewal_order_id variant 1

anyOf variant 1: ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included..

- Value shape: string. ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.open_renewal_order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.pause_reason

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.pause_reason variant 1

anyOf variant 1: Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused..

- Value shape: string. Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`.

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.pause_reason variant 2

anyOf variant 2.

- Value shape: null. Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.paused_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id variant 1

anyOf variant 1: The payment link that started this subscription, when there was one..

- Value shape: string. The payment link that started this subscription, when there was one. The payment link that started this subscription, when there was one. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. The payment link that started this subscription, when there was one. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_method_due_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_method_due_at variant 1

anyOf variant 1: First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary..

- Value shape: string. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_method_due_at variant 2

anyOf variant 2.

- Value shape: null. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_method_id

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_method_id variant 1

anyOf variant 1: Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it..

- Value shape: string. Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.promotions

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.promotions variant 1

anyOf variant 1: Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded..

- Value shape: Array of [SubscriptionPromotionPreviousAttributesInput](../models/SubscriptionPromotionPreviousAttributesInput.md#subscriptionpromotionpreviousattributesinput). Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.promotions variant 2

anyOf variant 2.

- Value shape: null. Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.prorate_first_period

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.prorate_first_period variant 1

anyOf variant 1: Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period..

- Value shape: boolean. Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.prorate_first_period variant 2

anyOf variant 2.

- Value shape: null. Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.remaining_cycles

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.remaining_cycles variant 1

anyOf variant 1: Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled..

- Value shape: integer. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: `uint64`. minimum: `0`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.remaining_cycles variant 2

anyOf variant 2.

- Value shape: null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.remaining_prepaid_deliveries

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.remaining_prepaid_deliveries variant 1

anyOf variant 1: Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds..

- Value shape: integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. Format: `int32`. minimum: `0`. maximum: `23`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.remaining_prepaid_deliveries variant 2

anyOf variant 2.

- Value shape: null. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.resume_requested_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.resume_requested_at variant 1

anyOf variant 1: When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending..

- Value shape: string. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.resume_requested_at variant 2

anyOf variant 2.

- Value shape: null. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_cancel_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_cancel_at variant 1

anyOf variant 1: When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available..

- Value shape: string. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_cancel_at variant 2

anyOf variant 2.

- Value shape: null. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_promotions

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_promotions variant 1

anyOf variant 1: Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled..

- Value shape: Array of [SubscriptionPromotionPreviousAttributesInput](../models/SubscriptionPromotionPreviousAttributesInput.md#subscriptionpromotionpreviousattributesinput). Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_promotions variant 2

anyOf variant 2.

- Value shape: null. Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_resume_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_resume_at variant 1

anyOf variant 1: When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out..

- Value shape: string. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.scheduled_resume_at variant 2

anyOf variant 2.

- Value shape: null. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.starts_at

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.starts_at variant 1

anyOf variant 1: When a scheduled start's first billing period begins. Present only until that first payment succeeds..

- Value shape: string. When a scheduled start's first billing period begins. Present only until that first payment succeeds. When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.starts_at variant 2

anyOf variant 2.

- Value shape: null. When a scheduled start's first billing period begins. Present only until that first payment succeeds. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.status

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributesInput.status](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputstatus).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.subscription_id

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 1

anyOf variant 1: Stable identifier of the subscription..

- Value shape: string. Stable identifier of the subscription. Stable identifier of the subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the subscription. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id variant 1

anyOf variant 1: Subscription plan ID. Omitted when terms_type is subscription_offer..

- Value shape: string. Subscription plan ID. Omitted when terms_type is subscription_offer. Subscription plan ID. Omitted when terms_type is subscription_offer. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Subscription plan ID. Omitted when terms_type is subscription_offer. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials..

- Value shape: Array of string. Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`.

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.terms_type

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributesInput.terms_type](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputterms_type).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.test_clock_id

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.test_clock_id variant 1

anyOf variant 1: ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses..

- Value shape: string. ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. Example: `"tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ"`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.test_clock_id variant 2

anyOf variant 2.

- Value shape: null. ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.trial_end_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.version

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed..

- Value shape: integer. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: `uint64`. minimum: `0`. 

### SubscriptionActivatedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. 

### SubscriptionActivatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

