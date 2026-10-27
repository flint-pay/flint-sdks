import type {
    Webhook_delivery_rate_callback_archived_installed_merchants,
    Webhook_delivery_rate_callback_archived_merchant,
    Webhook_delivery_zone_activated_installed_merchants,
    Webhook_delivery_zone_activated_merchant,
    Webhook_gift_card_notification_created_installed_merchants,
    Webhook_gift_card_notification_created_merchant,
    Webhook_dispute_updated_merchant,
    Webhook_delivery_zone_archived_installed_merchants,
    Webhook_delivery_zone_archived_merchant,
    Webhook_delivery_zone_created_installed_merchants,
    Webhook_delivery_zone_created_merchant,
    Webhook_dispute_needs_response_merchant,
    Webhook_delivery_selection_committed_installed_merchants,
    Webhook_delivery_selection_committed_merchant,
    Webhook_fulfillment_failed_installed_merchants,
    Webhook_fulfillment_failed_merchant,
    Webhook_delivery_revocation_created_installed_merchants,
    Webhook_delivery_revocation_created_merchant
} from './types-56.js';
import type {
    Webhook_delivery_location_set_created_installed_merchants,
    Webhook_delivery_location_set_created_merchant,
    Webhook_customer_deletion_request_failed_installed_merchants,
    Webhook_customer_deletion_request_failed_merchant,
    Webhook_delivery_profile_archived_installed_merchants,
    Webhook_delivery_profile_archived_merchant,
    Webhook_customer_deletion_request_processing_installed_merchants,
    Webhook_customer_deletion_request_processing_merchant,
    Webhook_checkout_session_expired_installed_merchants,
    Webhook_checkout_session_expired_merchant,
    Webhook_checkout_session_partially_paid_installed_merchants,
    Webhook_checkout_session_partially_paid_merchant,
    Webhook_customer_deletion_request_completed_installed_merchants,
    Webhook_customer_deletion_request_completed_merchant,
    Webhook_delivery_method_archived_installed_merchants,
    Webhook_delivery_method_archived_merchant,
    Webhook_delivery_method_deactivated_installed_merchants,
    Webhook_delivery_method_deactivated_merchant,
    Webhook_delivery_location_set_activated_installed_merchants,
    Webhook_delivery_location_set_activated_merchant,
    Webhook_delivery_location_set_deactivated_installed_merchants,
    Webhook_delivery_location_set_deactivated_merchant
} from './types-55.js';
import type {
    Webhook_return_completed_installed_merchants,
    Webhook_return_completed_merchant,
    Webhook_promotion_archived_installed_merchants,
    Webhook_promotion_archived_merchant,
    Webhook_product_variant_created_installed_merchants,
    Webhook_product_variant_created_merchant,
    Webhook_return_inspection_acceptance_decided_installed_merchants,
    Webhook_return_inspection_acceptance_decided_merchant,
    Webhook_return_disposition_created_installed_merchants,
    Webhook_return_disposition_created_merchant,
    Webhook_return_disposition_updated_installed_merchants,
    Webhook_return_disposition_updated_merchant,
    Webhook_report_succeeded_installed_merchants,
    Webhook_report_succeeded_merchant,
    Webhook_report_failed_installed_merchants,
    Webhook_report_failed_merchant,
    Webhook_refund_succeeded_installed_merchants,
    Webhook_refund_succeeded_merchant
} from './types-60.js';
import type {
    Webhook_invoice_refunded_installed_merchants,
    Webhook_invoice_refunded_merchant,
    Webhook_invoice_late_fee_due_merchant,
    Webhook_invoice_manual_payment_reversed_installed_merchants,
    Webhook_invoice_manual_payment_reversed_merchant,
    Webhook_modifier_set_updated_installed_merchants,
    Webhook_modifier_set_updated_merchant,
    Webhook_order_closed_installed_merchants,
    Webhook_order_closed_merchant,
    Webhook_invoice_partially_refunded_installed_merchants,
    Webhook_invoice_partially_refunded_merchant,
    Webhook_invoice_reminder_due_installed_merchants,
    Webhook_invoice_reminder_due_merchant,
    Webhook_modifier_set_archived_installed_merchants,
    Webhook_modifier_set_archived_merchant
} from './types-58.js';
import type {
    Webhook_balance_transaction_created_merchant,
    Webhook_category_created_installed_merchants,
    Webhook_category_created_merchant,
    Webhook_bundle_archived_installed_merchants,
    Webhook_bundle_archived_merchant
} from './types-54.js';
import type {
    Webhook_invoice_late_fee_due_installed_merchants,
    Webhook_inventory_reservation_closed_installed_merchants,
    Webhook_inventory_reservation_closed_merchant,
    Webhook_inventory_reservation_hold_expired_installed_merchants,
    Webhook_inventory_reservation_hold_expired_merchant,
    Webhook_invoice_delivery_attempt_failed_installed_merchants,
    Webhook_invoice_delivery_attempt_failed_merchant
} from './types-57.js';
import type {
    Webhook_payment_review_opened_installed_merchants,
    Webhook_payment_review_opened_merchant,
    Webhook_payout_failed_merchant,
    Webhook_payout_created_merchant,
    Webhook_payment_intent_processing_installed_merchants,
    Webhook_payment_intent_processing_merchant,
    Webhook_partner_app_install_updated_partner_app,
    Webhook_payment_intent_canceled_installed_merchants,
    Webhook_payment_intent_canceled_merchant,
    Webhook_order_partially_paid_installed_merchants,
    Webhook_order_partially_paid_merchant,
    Webhook_payment_intent_fulfillment_hold_updated_installed_merchants,
    Webhook_payment_intent_fulfillment_hold_updated_merchant,
    Webhook_order_paid_installed_merchants,
    Webhook_order_paid_merchant,
    Webhook_payment_link_updated_installed_merchants,
    Webhook_payment_link_updated_merchant
} from './types-59.js';
import type {
    Webhook_return_resolution_updated_installed_merchants,
    Webhook_return_resolution_updated_merchant,
    Webhook_subscription_plan_changed_installed_merchants,
    Webhook_subscription_plan_changed_merchant,
    Webhook_subscription_paused_installed_merchants,
    Webhook_subscription_paused_merchant
} from './types-61.js';
import type { GiftCardFundingSource, GiftCardFundingSourceInput } from './types-18.js';
import type { MoneyValue, MoneyValueInput, ModifierRequest, ModifierRequestInput } from './types-31.js';
import type { TextModifierConfigRequest, TextModifierConfigRequestInput } from './types-47.js';
import type { InventoryAdjustmentLine } from './types-24.js';
import type { InventorySourceSystem } from './types-25.js';
/** Shape $ (Value): {@link IncomingWebhookc823e4336c4aPayload}. */
export type IncomingWebhookc823e4336c4aPayload = ((Webhook_delivery_rate_callback_archived_merchant)
    | (Webhook_delivery_rate_callback_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookc82943441c1dPayload}. */
export type IncomingWebhookc82943441c1dPayload = ((Webhook_delivery_location_set_created_merchant)
    | (Webhook_delivery_location_set_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookc8cb35576c0fPayload}. */
export type IncomingWebhookc8cb35576c0fPayload = ((Webhook_return_completed_merchant) | (Webhook_return_completed_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookce317e37a514Payload}. */
export type IncomingWebhookce317e37a514Payload = ((Webhook_invoice_refunded_merchant) | (Webhook_invoice_refunded_installed_merchants) | (unknown));
/**
 * Shape $ (Value): {@link Webhook_balance_transaction_created_merchant}. The
 * `balance_transaction.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type IncomingWebhookcf769e4fa54cPayload = Webhook_balance_transaction_created_merchant;
/** Shape $ (Value): {@link IncomingWebhookcfa0fc3e7b61Payload}. */
export type IncomingWebhookcfa0fc3e7b61Payload = ((Webhook_delivery_zone_activated_merchant)
    | (Webhook_delivery_zone_activated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookcfd6ded146cfPayload}. */
export type IncomingWebhookcfd6ded146cfPayload = ((Webhook_customer_deletion_request_failed_merchant)
    | (Webhook_customer_deletion_request_failed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookcff5d1339489Payload}. */
export type IncomingWebhookcff5d1339489Payload = ((Webhook_invoice_late_fee_due_merchant)
    | (Webhook_invoice_late_fee_due_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd1b950ccae40Payload}. */
export type IncomingWebhookd1b950ccae40Payload = ((Webhook_promotion_archived_merchant) | (Webhook_promotion_archived_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd299182c6639Payload}. */
export type IncomingWebhookd299182c6639Payload = ((Webhook_gift_card_notification_created_merchant)
    | (Webhook_gift_card_notification_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd386b30cf8bcPayload}. */
export type IncomingWebhookd386b30cf8bcPayload = ((Webhook_payment_review_opened_merchant)
    | (Webhook_payment_review_opened_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_failed_merchant}. The `payout.failed` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhookd429a10e7388Payload = Webhook_payout_failed_merchant;
/** Shape $ (Value): {@link IncomingWebhookd43f3f619e51Payload}. */
export type IncomingWebhookd43f3f619e51Payload = ((Webhook_product_variant_created_merchant)
    | (Webhook_product_variant_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd5308faf7210Payload}. */
export type IncomingWebhookd5308faf7210Payload = ((Webhook_return_inspection_acceptance_decided_merchant)
    | (Webhook_return_inspection_acceptance_decided_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd59201b72b41Payload}. */
export type IncomingWebhookd59201b72b41Payload = ((Webhook_invoice_manual_payment_reversed_merchant)
    | (Webhook_invoice_manual_payment_reversed_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_created_merchant}. The `payout.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhookd5a6f520dad7Payload = Webhook_payout_created_merchant;
/**
 * Shape $ (Value): {@link Webhook_dispute_updated_merchant}. The `dispute.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhookd5c9a344b9b1Payload = Webhook_dispute_updated_merchant;
/** Shape $ (Value): {@link IncomingWebhookd61edf29f9d2Payload}. */
export type IncomingWebhookd61edf29f9d2Payload = ((Webhook_delivery_zone_archived_merchant)
    | (Webhook_delivery_zone_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd79629c05a8cPayload}. */
export type IncomingWebhookd79629c05a8cPayload = ((Webhook_modifier_set_updated_merchant)
    | (Webhook_modifier_set_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd7a01fed3e2fPayload}. */
export type IncomingWebhookd7a01fed3e2fPayload = ((Webhook_order_closed_merchant) | (Webhook_order_closed_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd7ae2aa49927Payload}. */
export type IncomingWebhookd7ae2aa49927Payload = ((Webhook_delivery_profile_archived_merchant)
    | (Webhook_delivery_profile_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd8d5a73039b9Payload}. */
export type IncomingWebhookd8d5a73039b9Payload = ((Webhook_delivery_zone_created_merchant)
    | (Webhook_delivery_zone_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookd934e5bd4fdePayload}. */
export type IncomingWebhookd934e5bd4fdePayload = ((Webhook_customer_deletion_request_processing_merchant)
    | (Webhook_customer_deletion_request_processing_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookdb74c29bf1ffPayload}. */
export type IncomingWebhookdb74c29bf1ffPayload = ((Webhook_payment_intent_processing_merchant)
    | (Webhook_payment_intent_processing_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookdc1126d5a87dPayload}. */
export type IncomingWebhookdc1126d5a87dPayload = ((Webhook_checkout_session_expired_merchant)
    | (Webhook_checkout_session_expired_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookdc2332579846Payload}. */
export type IncomingWebhookdc2332579846Payload = ((Webhook_return_resolution_updated_merchant)
    | (Webhook_return_resolution_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookdd77f0f69512Payload}. */
export type IncomingWebhookdd77f0f69512Payload = ((Webhook_invoice_partially_refunded_merchant)
    | (Webhook_invoice_partially_refunded_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookde0dbbc12385Payload}. */
export type IncomingWebhookde0dbbc12385Payload = ((Webhook_invoice_reminder_due_merchant)
    | (Webhook_invoice_reminder_due_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookde1181d5a457Payload}. */
export type IncomingWebhookde1181d5a457Payload = ((Webhook_checkout_session_partially_paid_merchant)
    | (Webhook_checkout_session_partially_paid_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooke076fde84729Payload}. */
export type IncomingWebhooke076fde84729Payload = ((Webhook_category_created_merchant) | (Webhook_category_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhooke23306bb131fPayload}. */
export type IncomingWebhooke23306bb131fPayload = ((Webhook_customer_deletion_request_completed_merchant)
    | (Webhook_customer_deletion_request_completed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooke24aaa50d5c2Payload}. */
export type IncomingWebhooke24aaa50d5c2Payload = ((Webhook_return_disposition_created_merchant)
    | (Webhook_return_disposition_created_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_dispute_needs_response_merchant}. The `dispute.needs_response`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhooke3b79e3983d2Payload = Webhook_dispute_needs_response_merchant;
/** Shape $ (Value): {@link IncomingWebhooke74609eef397Payload}. */
export type IncomingWebhooke74609eef397Payload = ((Webhook_modifier_set_archived_merchant)
    | (Webhook_modifier_set_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooke8cda7b80a54Payload}. */
export type IncomingWebhooke8cda7b80a54Payload = ((Webhook_inventory_reservation_closed_merchant)
    | (Webhook_inventory_reservation_closed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooke9b503f62410Payload}. */
export type IncomingWebhooke9b503f62410Payload = ((Webhook_subscription_plan_changed_merchant)
    | (Webhook_subscription_plan_changed_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_partner_app_install_updated_partner_app}. The
 * `partner_app_install.updated` webhook payload for the `partner_app` event source. Fields shared
 * by partner webhook payloads.
 */
export type IncomingWebhooke9b8c0e5d6d1Payload = Webhook_partner_app_install_updated_partner_app;
/** Shape $ (Value): {@link IncomingWebhookea0ef7d1c212Payload}. */
export type IncomingWebhookea0ef7d1c212Payload = ((Webhook_delivery_method_archived_merchant)
    | (Webhook_delivery_method_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookea7c17575709Payload}. */
export type IncomingWebhookea7c17575709Payload = ((Webhook_bundle_archived_merchant) | (Webhook_bundle_archived_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookeab48bfd0932Payload}. */
export type IncomingWebhookeab48bfd0932Payload = ((Webhook_return_disposition_updated_merchant)
    | (Webhook_return_disposition_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooked8e7a89077ePayload}. */
export type IncomingWebhooked8e7a89077ePayload = ((Webhook_delivery_method_deactivated_merchant)
    | (Webhook_delivery_method_deactivated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookeeed437c2e46Payload}. */
export type IncomingWebhookeeed437c2e46Payload = ((Webhook_inventory_reservation_hold_expired_merchant)
    | (Webhook_inventory_reservation_hold_expired_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookefe153a00c42Payload}. */
export type IncomingWebhookefe153a00c42Payload = ((Webhook_payment_intent_canceled_merchant)
    | (Webhook_payment_intent_canceled_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf2be10231857Payload}. */
export type IncomingWebhookf2be10231857Payload = ((Webhook_report_succeeded_merchant) | (Webhook_report_succeeded_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf4c208cc6c8ePayload}. */
export type IncomingWebhookf4c208cc6c8ePayload = ((Webhook_order_partially_paid_merchant)
    | (Webhook_order_partially_paid_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf530aae049ddPayload}. */
export type IncomingWebhookf530aae049ddPayload = ((Webhook_invoice_delivery_attempt_failed_merchant)
    | (Webhook_invoice_delivery_attempt_failed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf5b72c2a310ePayload}. */
export type IncomingWebhookf5b72c2a310ePayload = ((Webhook_delivery_selection_committed_merchant)
    | (Webhook_delivery_selection_committed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf6f719ba2af4Payload}. */
export type IncomingWebhookf6f719ba2af4Payload = ((Webhook_report_failed_merchant) | (Webhook_report_failed_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf70dc9ecfaabPayload}. */
export type IncomingWebhookf70dc9ecfaabPayload = ((Webhook_payment_intent_fulfillment_hold_updated_merchant)
    | (Webhook_payment_intent_fulfillment_hold_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf7fecabbf9a9Payload}. */
export type IncomingWebhookf7fecabbf9a9Payload = ((Webhook_fulfillment_failed_merchant) | (Webhook_fulfillment_failed_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf93bed5b28a1Payload}. */
export type IncomingWebhookf93bed5b28a1Payload = ((Webhook_order_paid_merchant) | (Webhook_order_paid_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookf9640e80dd75Payload}. */
export type IncomingWebhookf9640e80dd75Payload = ((Webhook_delivery_location_set_activated_merchant)
    | (Webhook_delivery_location_set_activated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookfa87c6adfc53Payload}. */
export type IncomingWebhookfa87c6adfc53Payload = ((Webhook_payment_link_updated_merchant)
    | (Webhook_payment_link_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookfadc19784021Payload}. */
export type IncomingWebhookfadc19784021Payload = ((Webhook_refund_succeeded_merchant) | (Webhook_refund_succeeded_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookfce7e0c4eba0Payload}. */
export type IncomingWebhookfce7e0c4eba0Payload = ((Webhook_subscription_paused_merchant)
    | (Webhook_subscription_paused_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookfd258d9a47caPayload}. */
export type IncomingWebhookfd258d9a47caPayload = ((Webhook_delivery_revocation_created_merchant)
    | (Webhook_delivery_revocation_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookff9afffd27c6Payload}. */
export type IncomingWebhookff9afffd27c6Payload = ((Webhook_delivery_location_set_deactivated_merchant)
    | (Webhook_delivery_location_set_deactivated_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link InitialGiftCardFunding}. The initial funding for a new gift card: the
 * `source` of the value, the `value_money`, and optional consideration and source time.
 */
export type InitialGiftCardFunding = ({
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[1].amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Amount in the currency's minor unit, such
     * as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. Shape $.anyOf[1].currency (Required): string. ISO 4217 currency
     * code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Shape $.anyOf[2]
     * (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Shape $ (Value): {@link GiftCardFundingSource}. Where the value of a gift card load came
     * from, such as an external payment, a Flint payment, an import, or an adjustment, with your
     * reference for it. Shape $.funding_source_type (Required): string. Value enum:
     * "external_payment", "flint_payment", "import". Shape $.customer_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. Shape $.order_id (Optional):
     * string. minLength: 1. maxLength: 255. Shape $.order_manual_payment_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.payment_intent_id (Optional): string. The original
     * payment for flint_payment or store_credit value. For standalone paid funding, use a captured
     * payment intent without an order_id. Order-linked payments fund purchased cards or store
     * credit through their order. minLength: 1. maxLength: 255. Shape $.refund_id (Optional):
     * string. Refund that issued this value. Present only when funding_source_type is
     * store_credit. minLength: 1. Shape $.oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPayment}. The `flint_payment` variant of `GiftCardFundingSource`.
     * Shape $.oneOf[3] (Value): {@link GiftCardFundingSourceFlintManualPayment}. The
     * `flint_manual_payment` variant of `GiftCardFundingSource`. Shape $.oneOf[4] (Value): {@link
     * GiftCardFundingSourceImport}. The `import` variant of `GiftCardFundingSource`. Shape
     * $.oneOf[5] (Value): {@link GiftCardFundingSourceAdjustment}. The `adjustment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[6] (Value): {@link
     * GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. Shape $.oneOf[8]
     * (Value): {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Shape $ (Value): any.  Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
});
/**
 * Shape $ (Value): {@link InitialGiftCardFundingInput}. The initial funding for a new gift card:
 * the `source` of the value, the `value_money`, and optional consideration and source time.
 */
export type InitialGiftCardFundingInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput} or null. Shape $.anyOf[1] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. Shape $.anyOf[1].amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.anyOf[1].currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Shape $.anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Shape $ (Value): {@link GiftCardFundingSourceInput}. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. Shape $.funding_source_type (Required): string. Value enum:
     * "external_payment", "flint_payment", "import". Shape $.customer_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. Shape $.order_id (Optional):
     * string. minLength: 1. maxLength: 255. Shape $.payment_intent_id (Optional): string. The
     * original payment for flint_payment or store_credit value. For standalone paid funding, use a
     * captured payment intent without an order_id. Order-linked payments fund purchased cards or
     * store credit through their order. minLength: 1. maxLength: 255. Shape $.oneOf[1] (Value):
     * {@link GiftCardFundingSourceExternalPaymentInput}. The `external_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPaymentInput}. The `flint_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPaymentInput}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[4] (Value): {@link GiftCardFundingSourceImportInput}.
     * The `import` variant of `GiftCardFundingSource`. Shape $.oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustmentInput}. The `adjustment` variant of `GiftCardFundingSource`.
     * Shape $.oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefundInput}. The
     * `gift_card_refund` variant of `GiftCardFundingSource`. Shape $.oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. Shape $.oneOf[8]
     * (Value): {@link GiftCardFundingSourceStoreCreditInput}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Shape $ (Value): any.  Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: "external_payment" | "flint_payment" | "import";
    })
        & (Exclude<GiftCardFundingSourceInput & object, readonly unknown[]>)
        & ({
        "order_manual_payment_id"?: never;
    });
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
});
/**
 * Shape $ (Value): {@link InlineModifierGroupRequest}. A modifier group defined inline when
 * setting up a modifier set, with its name, rules for how many options can be selected, and its
 * modifiers.
 */
export type InlineModifierGroupRequest = {
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * Default: false.
     */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "max_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Maximum number of distinct modifiers buyers can select from a list
     * group. Omit it for no limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer string. Maximum combined whole-number quantity across selected list
     * modifiers; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): integer string. Minimum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "min_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Minimum number of distinct modifiers buyers must select from a
     * list group. Omit it to require no selections. A modifier set can override this value.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier group. For a group a modifier set
     * owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
     * `/v1/modifier-groups` doesn't return it. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On
     * create, inferred as text when text configuration is supplied, otherwise list. Value enum:
     * "list", "text".
     */
    "modifier_group_type"?: "list" | "text" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ModifierRequest}. Choices in a list group. Only active
     * modifiers whose set override's available is not false are offered to buyers. Text groups do
     * not have choices. Shape $[] (Value): {@link ModifierRequest}. A modifier you supply when
     * creating or updating a modifier group, such as an add-on with a price change.
     */
    "modifiers"?: Array<ModifierRequest>;
    /**
     * Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): {@link TextModifierConfigRequest}. Text entry rules for a text group. Use
     * text.required to require a value; list groups use min_selected instead. Settings for a text
     * modifier group when creating or updating one: required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/**
 * Shape $ (Value): {@link InlineModifierGroupRequestInput}. A modifier group defined inline when
 * setting up a modifier set, with its name, rules for how many options can be selected, and its
 * modifiers.
 */
export type InlineModifierGroupRequestInput = {
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * Default: false.
     */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "max_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Maximum number of distinct modifiers buyers can select from a list
     * group. Omit it for no limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer string. Maximum combined whole-number quantity across selected list
     * modifiers; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): integer string. Minimum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "min_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Minimum number of distinct modifiers buyers must select from a
     * list group. Omit it to require no selections. A modifier set can override this value.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier group. For a group a modifier set
     * owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
     * `/v1/modifier-groups` doesn't return it. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On
     * create, inferred as text when text configuration is supplied, otherwise list. Value enum:
     * "list", "text".
     */
    "modifier_group_type"?: "list" | "text";
    /**
     * Shape $ (Value): Array of {@link ModifierRequestInput}. Choices in a list group. Only active
     * modifiers whose set override's available is not false are offered to buyers. Text groups do
     * not have choices. Shape $[] (Value): {@link ModifierRequestInput}. A modifier you supply
     * when creating or updating a modifier group, such as an add-on with a price change.
     */
    "modifiers"?: Array<ModifierRequestInput>;
    /**
     * Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): {@link TextModifierConfigRequestInput}. Text entry rules for a text group.
     * Use text.required to require a value; list groups use min_selected instead. Settings for a
     * text modifier group when creating or updating one: required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequestInput;
};
/**
 * Shape $ (Value): {@link InventoryActionRequired}. Says that an inventory reservation needs
 * action, with the `reason` and the reservation lines affected.
 */
export type InventoryActionRequired = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "inventory_reservation_line_ids": Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "inventory_shortage", "hold_expired",
     * "payment_pending", "other".
     */
    "reason": "inventory_shortage" | "hold_expired" | "payment_pending" | "other" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryAdjustment}. A recorded stock change with its reason and the
 * quantity changes Flint computed.
 */
export type InventoryAdjustment = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "inventory_adjustment_id": string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentLine}. Shape $[] (Value): {@link
     * InventoryAdjustmentLine}. One line of an inventory adjustment, with the item, Location,
     * movement written, and the change in on-hand and each non-sellable quantity.
     */
    "lines": Array<InventoryAdjustmentLine>;
    /** Shape $ (Value): string. */
    "note"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Value enum: "received", "returned", "sold", "theft", "loss",
     * "condition_changed", "counted", "correction".
     */
    "reason": "received"
        | "returned"
        | "sold"
        | "theft"
        | "loss"
        | "condition_changed"
        | "counted"
        | "correction"
        | (string & {});
    /**
     * Shape $ (Value): {@link InventorySourceSystem} or null. Shape $.anyOf[1] (Value): {@link
     * InventorySourceSystem}. The system an inventory event came from, such as manual entry, a
     * point of sale, a warehouse system, or Flint, with your source identifier when it applies.
     * Shape $.anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
};
/**
 * Shape $ (Value): {@link InventoryAdjustmentConditionChangeLineRequest}. One line of an inventory
 * condition change: moves a `quantity` of an item at a Location from one condition to another.
 */
export type InventoryAdjustmentConditionChangeLineRequest = ({
    /**
     * Shape $ (Value): string. Condition the units leave. Defaults to `sellable`. Default:
     * "sellable". Value enum: "sellable", "quality_control", "damaged", "quarantined".
     */
    "from_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Units this line records. Must be at least 1. Whole-number
     * quantity; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Condition the units move to. Must differ from `from_condition`.
     * Value enum: "sellable", "quality_control", "damaged", "quarantined".
     */
    "to_condition": "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
});
