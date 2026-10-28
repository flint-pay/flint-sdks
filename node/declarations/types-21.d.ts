import type {
    Webhook_subscription_reactivated_installed_merchants,
    Webhook_subscription_reactivated_merchant,
    Webhook_subscription_cancellation_scheduled_installed_merchants,
    Webhook_subscription_cancellation_scheduled_merchant,
    Webhook_subscription_delivery_action_required_installed_merchants,
    Webhook_subscription_delivery_action_required_merchant,
    Webhook_subscription_resumed_installed_merchants,
    Webhook_subscription_resumed_merchant,
    Webhook_subscription_payment_retry_failed_installed_merchants,
    Webhook_subscription_payment_retry_failed_merchant,
    Webhook_return_updated_installed_merchants,
    Webhook_return_updated_merchant,
    Webhook_subscription_updated_installed_merchants,
    Webhook_subscription_updated_merchant,
    Webhook_subscription_cycle_skipped_installed_merchants,
    Webhook_subscription_cycle_skipped_merchant,
    Webhook_subscription_created_installed_merchants,
    Webhook_subscription_created_merchant,
    Webhook_subscription_dunning_exhausted_installed_merchants,
    Webhook_subscription_dunning_exhausted_merchant,
    Webhook_subscription_delivery_updated_installed_merchants,
    Webhook_subscription_delivery_updated_merchant
} from './types-61.js';
import type {
    Webhook_credit_note_voided_installed_merchants,
    Webhook_credit_note_voided_merchant,
    Webhook_delivery_profile_activated_installed_merchants,
    Webhook_delivery_profile_activated_merchant,
    Webhook_customer_deletion_request_created_installed_merchants,
    Webhook_customer_deletion_request_created_merchant,
    Webhook_customer_created_installed_merchants,
    Webhook_customer_created_merchant,
    Webhook_credit_note_created_installed_merchants,
    Webhook_credit_note_created_merchant,
    Webhook_customer_deletion_request_rejected_installed_merchants,
    Webhook_customer_deletion_request_rejected_merchant,
    Webhook_checkout_session_closed_merchant,
    Webhook_delivery_method_activated_installed_merchants,
    Webhook_delivery_method_activated_merchant,
    Webhook_customer_updated_installed_merchants,
    Webhook_customer_updated_merchant
} from './types-55.js';
import type {
    Webhook_payout_destination_updated_merchant,
    Webhook_payout_destination_disabled_merchant,
    Webhook_order_partially_refunded_installed_merchants,
    Webhook_order_partially_refunded_merchant,
    Webhook_payment_method_failed_installed_merchants,
    Webhook_payment_method_failed_merchant,
    Webhook_payment_intent_succeeded_installed_merchants,
    Webhook_payment_intent_succeeded_merchant,
    Webhook_payout_destination_created_merchant
} from './types-59.js';
import type {
    Webhook_gift_card_notification_updated_installed_merchants,
    Webhook_gift_card_notification_updated_merchant,
    Webhook_inventory_reservation_created_installed_merchants,
    Webhook_inventory_reservation_created_merchant,
    Webhook_inventory_reservation_at_risk_installed_merchants,
    Webhook_inventory_reservation_at_risk_merchant,
    Webhook_inventory_transfer_closed_installed_merchants,
    Webhook_inventory_transfer_closed_merchant,
    Webhook_invoice_late_fee_assessed_installed_merchants,
    Webhook_invoice_late_fee_assessed_merchant,
    Webhook_inventory_receipt_created_installed_merchants,
    Webhook_inventory_receipt_created_merchant,
    Webhook_inventory_reservation_released_installed_merchants,
    Webhook_inventory_reservation_released_merchant
} from './types-57.js';
import type {
    Webhook_invoice_payment_attempt_expired_installed_merchants,
    Webhook_invoice_payment_attempt_expired_merchant,
    Webhook_merchant_updated_merchant,
    Webhook_modifier_group_updated_installed_merchants,
    Webhook_modifier_group_updated_merchant,
    Webhook_merchant_billing_balance_updated_merchant,
    Webhook_modifier_group_archived_installed_merchants,
    Webhook_modifier_group_archived_merchant,
    Webhook_invoice_payment_attempt_canceled_installed_merchants,
    Webhook_invoice_payment_attempt_canceled_merchant,
    Webhook_order_created_installed_merchants,
    Webhook_order_created_merchant,
    Webhook_invoice_voided_installed_merchants,
    Webhook_invoice_voided_merchant,
    Webhook_invoice_late_fee_waived_installed_merchants,
    Webhook_invoice_late_fee_waived_merchant,
    Webhook_invoice_payment_attempt_failed_installed_merchants,
    Webhook_invoice_payment_attempt_failed_merchant,
    Webhook_merchant_billing_invoice_updated_merchant,
    Webhook_order_inventory_exception_created_installed_merchants,
    Webhook_order_inventory_exception_created_merchant,
    Webhook_modifier_group_created_installed_merchants,
    Webhook_modifier_group_created_merchant
} from './types-58.js';
import type {
    Webhook_dispute_created_merchant,
    Webhook_delivery_profile_created_installed_merchants,
    Webhook_delivery_profile_created_merchant,
    Webhook_gift_card_created_installed_merchants,
    Webhook_gift_card_created_merchant,
    Webhook_gift_card_load_updated_installed_merchants,
    Webhook_gift_card_load_updated_merchant,
    Webhook_fulfillment_event_created_installed_merchants,
    Webhook_fulfillment_event_created_merchant,
    Webhook_fulfillment_completed_installed_merchants,
    Webhook_fulfillment_completed_merchant,
    Webhook_delivery_rate_callback_deactivated_installed_merchants,
    Webhook_delivery_rate_callback_deactivated_merchant,
    Webhook_delivery_rate_callback_updated_installed_merchants,
    Webhook_delivery_rate_callback_updated_merchant,
    Webhook_delivery_profile_deactivated_installed_merchants,
    Webhook_delivery_profile_deactivated_merchant,
    Webhook_delivery_rate_callback_activated_installed_merchants,
    Webhook_delivery_rate_callback_activated_merchant
} from './types-56.js';
import type {
    Webhook_product_variant_updated_installed_merchants,
    Webhook_product_variant_updated_merchant,
    Webhook_payout_settings_updated_merchant,
    Webhook_return_created_installed_merchants,
    Webhook_return_created_merchant,
    Webhook_promotion_code_archived_installed_merchants,
    Webhook_promotion_code_archived_merchant,
    Webhook_return_decision_recorded_installed_merchants,
    Webhook_return_decision_recorded_merchant,
    Webhook_return_inspection_created_installed_merchants,
    Webhook_return_inspection_created_merchant,
    Webhook_return_inspection_superseded_installed_merchants,
    Webhook_return_inspection_superseded_merchant
} from './types-60.js';
import type {
    Webhook_checkout_session_closed_installed_merchants,
    Webhook_category_updated_installed_merchants,
    Webhook_category_updated_merchant
} from './types-54.js';
/** Shape $ (Value): {@link IncomingWebhook42dd85c73d6bPayload}. */
export type IncomingWebhook42dd85c73d6bPayload = ((Webhook_subscription_reactivated_merchant)
    | (Webhook_subscription_reactivated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook43a17bfb8144Payload}. */
export type IncomingWebhook43a17bfb8144Payload = ((Webhook_credit_note_voided_merchant) | (Webhook_credit_note_voided_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook44764240a51fPayload}. */
export type IncomingWebhook44764240a51fPayload = ((Webhook_subscription_cancellation_scheduled_merchant)
    | (Webhook_subscription_cancellation_scheduled_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_destination_updated_merchant}. The
 * `payout_destination.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type IncomingWebhook44e6923a1369Payload = Webhook_payout_destination_updated_merchant;
/** Shape $ (Value): {@link IncomingWebhook45be12e0c91dPayload}. */
export type IncomingWebhook45be12e0c91dPayload = ((Webhook_gift_card_notification_updated_merchant)
    | (Webhook_gift_card_notification_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook46209f173440Payload}. */
export type IncomingWebhook46209f173440Payload = ((Webhook_delivery_profile_activated_merchant)
    | (Webhook_delivery_profile_activated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook480c3be91770Payload}. */
export type IncomingWebhook480c3be91770Payload = ((Webhook_invoice_payment_attempt_expired_merchant)
    | (Webhook_invoice_payment_attempt_expired_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_merchant_updated_merchant}. The `merchant.updated` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook4886b3bb3446Payload = Webhook_merchant_updated_merchant;
/**
 * Shape $ (Value): {@link Webhook_dispute_created_merchant}. The `dispute.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook498370f9652cPayload = Webhook_dispute_created_merchant;
/** Shape $ (Value): {@link IncomingWebhook4e994140ffcePayload}. */
export type IncomingWebhook4e994140ffcePayload = ((Webhook_customer_deletion_request_created_merchant)
    | (Webhook_customer_deletion_request_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook4f5d724069c4Payload}. */
export type IncomingWebhook4f5d724069c4Payload = ((Webhook_modifier_group_updated_merchant)
    | (Webhook_modifier_group_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook509670d4d8a5Payload}. */
export type IncomingWebhook509670d4d8a5Payload = ((Webhook_inventory_reservation_created_merchant)
    | (Webhook_inventory_reservation_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook525b56e32d02Payload}. */
export type IncomingWebhook525b56e32d02Payload = ((Webhook_subscription_delivery_action_required_merchant)
    | (Webhook_subscription_delivery_action_required_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_destination_disabled_merchant}. The
 * `payout_destination.disabled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type IncomingWebhook527f9bd2c39dPayload = Webhook_payout_destination_disabled_merchant;
/** Shape $ (Value): {@link IncomingWebhook54f21d035575Payload}. */
export type IncomingWebhook54f21d035575Payload = ((Webhook_subscription_resumed_merchant)
    | (Webhook_subscription_resumed_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_merchant_billing_balance_updated_merchant}. The
 * `merchant_billing_balance.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type IncomingWebhook54f564ce918cPayload = Webhook_merchant_billing_balance_updated_merchant;
/** Shape $ (Value): {@link IncomingWebhook5552ddfae579Payload}. */
export type IncomingWebhook5552ddfae579Payload = ((Webhook_delivery_profile_created_merchant)
    | (Webhook_delivery_profile_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook562b424d8b0dPayload}. */
export type IncomingWebhook562b424d8b0dPayload = ((Webhook_product_variant_updated_merchant)
    | (Webhook_product_variant_updated_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_settings_updated_merchant}. The `payout_settings.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook587b04e915e2Payload = Webhook_payout_settings_updated_merchant;
/** Shape $ (Value): {@link IncomingWebhook588d0bbca380Payload}. */
export type IncomingWebhook588d0bbca380Payload = ((Webhook_gift_card_created_merchant) | (Webhook_gift_card_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook58b33e47adbePayload}. */
export type IncomingWebhook58b33e47adbePayload = ((Webhook_return_created_merchant) | (Webhook_return_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook5a99fd5f39b4Payload}. */
export type IncomingWebhook5a99fd5f39b4Payload = ((Webhook_modifier_group_archived_merchant)
    | (Webhook_modifier_group_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook5b3fd054ffdfPayload}. */
export type IncomingWebhook5b3fd054ffdfPayload = ((Webhook_order_partially_refunded_merchant)
    | (Webhook_order_partially_refunded_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook5ba4cc14391ePayload}. */
export type IncomingWebhook5ba4cc14391ePayload = ((Webhook_invoice_payment_attempt_canceled_merchant)
    | (Webhook_invoice_payment_attempt_canceled_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook5de06b12da29Payload}. */
export type IncomingWebhook5de06b12da29Payload = ((Webhook_gift_card_load_updated_merchant)
    | (Webhook_gift_card_load_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook607f05b24d65Payload}. */
export type IncomingWebhook607f05b24d65Payload = ((Webhook_customer_created_merchant) | (Webhook_customer_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook638a8c59872dPayload}. */
export type IncomingWebhook638a8c59872dPayload = ((Webhook_fulfillment_event_created_merchant)
    | (Webhook_fulfillment_event_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook63b2b06a26ecPayload}. */
export type IncomingWebhook63b2b06a26ecPayload = ((Webhook_order_created_merchant) | (Webhook_order_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook63cd5f8b0721Payload}. */
export type IncomingWebhook63cd5f8b0721Payload = ((Webhook_subscription_payment_retry_failed_merchant)
    | (Webhook_subscription_payment_retry_failed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook641fbc1fc294Payload}. */
export type IncomingWebhook641fbc1fc294Payload = ((Webhook_fulfillment_completed_merchant)
    | (Webhook_fulfillment_completed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook642cd7269ce9Payload}. */
export type IncomingWebhook642cd7269ce9Payload = ((Webhook_inventory_reservation_at_risk_merchant)
    | (Webhook_inventory_reservation_at_risk_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook64406eae7092Payload}. */
export type IncomingWebhook64406eae7092Payload = ((Webhook_return_updated_merchant) | (Webhook_return_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook647f08b314c3Payload}. */
export type IncomingWebhook647f08b314c3Payload = ((Webhook_delivery_rate_callback_deactivated_merchant)
    | (Webhook_delivery_rate_callback_deactivated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook659c69fe23c6Payload}. */
export type IncomingWebhook659c69fe23c6Payload = ((Webhook_payment_method_failed_merchant)
    | (Webhook_payment_method_failed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook6a2a6e17495ePayload}. */
export type IncomingWebhook6a2a6e17495ePayload = ((Webhook_invoice_voided_merchant) | (Webhook_invoice_voided_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook6abcc176d530Payload}. */
export type IncomingWebhook6abcc176d530Payload = ((Webhook_subscription_updated_merchant)
    | (Webhook_subscription_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook6d96c0c875cdPayload}. */
export type IncomingWebhook6d96c0c875cdPayload = ((Webhook_credit_note_created_merchant)
    | (Webhook_credit_note_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook6db8b53dce1bPayload}. */
export type IncomingWebhook6db8b53dce1bPayload = ((Webhook_customer_deletion_request_rejected_merchant)
    | (Webhook_customer_deletion_request_rejected_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook6e888acafb4bPayload}. */
export type IncomingWebhook6e888acafb4bPayload = ((Webhook_checkout_session_closed_merchant)
    | (Webhook_checkout_session_closed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook6ec2eb9e3a41Payload}. */
export type IncomingWebhook6ec2eb9e3a41Payload = ((Webhook_subscription_cycle_skipped_merchant)
    | (Webhook_subscription_cycle_skipped_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook701c073b0a0cPayload}. */
export type IncomingWebhook701c073b0a0cPayload = ((Webhook_delivery_method_activated_merchant)
    | (Webhook_delivery_method_activated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7086d395fc50Payload}. */
export type IncomingWebhook7086d395fc50Payload = ((Webhook_promotion_code_archived_merchant)
    | (Webhook_promotion_code_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7216a23a3dddPayload}. */
export type IncomingWebhook7216a23a3dddPayload = ((Webhook_delivery_rate_callback_updated_merchant)
    | (Webhook_delivery_rate_callback_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook72368f2647acPayload}. */
export type IncomingWebhook72368f2647acPayload = ((Webhook_subscription_created_merchant)
    | (Webhook_subscription_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7253fff5f748Payload}. */
export type IncomingWebhook7253fff5f748Payload = ((Webhook_payment_intent_succeeded_merchant)
    | (Webhook_payment_intent_succeeded_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook72eec85cad89Payload}. */
export type IncomingWebhook72eec85cad89Payload = ((Webhook_invoice_late_fee_waived_merchant)
    | (Webhook_invoice_late_fee_waived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook73f6eab801d1Payload}. */
export type IncomingWebhook73f6eab801d1Payload = ((Webhook_invoice_payment_attempt_failed_merchant)
    | (Webhook_invoice_payment_attempt_failed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7511be004770Payload}. */
export type IncomingWebhook7511be004770Payload = ((Webhook_inventory_transfer_closed_merchant)
    | (Webhook_inventory_transfer_closed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook769913a11504Payload}. */
export type IncomingWebhook769913a11504Payload = ((Webhook_invoice_late_fee_assessed_merchant)
    | (Webhook_invoice_late_fee_assessed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7730424c8474Payload}. */
export type IncomingWebhook7730424c8474Payload = ((Webhook_return_decision_recorded_merchant)
    | (Webhook_return_decision_recorded_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_merchant_billing_invoice_updated_merchant}. The
 * `merchant_billing_invoice.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type IncomingWebhook778c71bb3922Payload = Webhook_merchant_billing_invoice_updated_merchant;
/** Shape $ (Value): {@link IncomingWebhook78590778ef68Payload}. */
export type IncomingWebhook78590778ef68Payload = ((Webhook_customer_updated_merchant) | (Webhook_customer_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook78dd0ab94c35Payload}. */
export type IncomingWebhook78dd0ab94c35Payload = ((Webhook_category_updated_merchant) | (Webhook_category_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook798ccb00af41Payload}. */
export type IncomingWebhook798ccb00af41Payload = ((Webhook_inventory_receipt_created_merchant)
    | (Webhook_inventory_receipt_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7adf7ff33e7aPayload}. */
export type IncomingWebhook7adf7ff33e7aPayload = ((Webhook_return_inspection_created_merchant)
    | (Webhook_return_inspection_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7c5df18e2269Payload}. */
export type IncomingWebhook7c5df18e2269Payload = ((Webhook_subscription_dunning_exhausted_merchant)
    | (Webhook_subscription_dunning_exhausted_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7ca80d2d99aePayload}. */
export type IncomingWebhook7ca80d2d99aePayload = ((Webhook_order_inventory_exception_created_merchant)
    | (Webhook_order_inventory_exception_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7cb5db59fd23Payload}. */
export type IncomingWebhook7cb5db59fd23Payload = ((Webhook_modifier_group_created_merchant)
    | (Webhook_modifier_group_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7cb66beed654Payload}. */
export type IncomingWebhook7cb66beed654Payload = ((Webhook_delivery_profile_deactivated_merchant)
    | (Webhook_delivery_profile_deactivated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook7dc0310d3669Payload}. */
export type IncomingWebhook7dc0310d3669Payload = ((Webhook_delivery_rate_callback_activated_merchant)
    | (Webhook_delivery_rate_callback_activated_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_destination_created_merchant}. The
 * `payout_destination.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type IncomingWebhook7dd2b7d6ef54Payload = Webhook_payout_destination_created_merchant;
/** Shape $ (Value): {@link IncomingWebhook809a7aac7ac4Payload}. */
export type IncomingWebhook809a7aac7ac4Payload = ((Webhook_inventory_reservation_released_merchant)
    | (Webhook_inventory_reservation_released_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook8172dd26545fPayload}. */
export type IncomingWebhook8172dd26545fPayload = ((Webhook_return_inspection_superseded_merchant)
    | (Webhook_return_inspection_superseded_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook848c73c96bfaPayload}. */
export type IncomingWebhook848c73c96bfaPayload = ((Webhook_subscription_delivery_updated_merchant)
    | (Webhook_subscription_delivery_updated_installed_merchants)
    | (unknown));
