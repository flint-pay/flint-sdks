import type {
    Webhook_custom_domain_archived_merchant,
    Webhook_checkout_session_invalidated_installed_merchants,
    Webhook_checkout_session_invalidated_merchant,
    Webhook_delivery_location_set_archived_installed_merchants,
    Webhook_delivery_location_set_archived_merchant,
    Webhook_bundle_created_installed_merchants,
    Webhook_bundle_created_merchant,
    Webhook_credit_note_updated_installed_merchants,
    Webhook_credit_note_updated_merchant,
    Webhook_balance_updated_merchant,
    Webhook_credit_note_voided_installed_merchants,
    Webhook_credit_note_voided_merchant,
    Webhook_customer_deletion_request_created_installed_merchants,
    Webhook_customer_deletion_request_created_merchant
} from './types-58.js';
import type {
    Webhook_package_created_installed_merchants,
    Webhook_package_created_merchant,
    Webhook_partner_app_install_created_partner_app,
    Webhook_payment_intent_requires_capture_installed_merchants,
    Webhook_payment_intent_requires_capture_merchant,
    Webhook_modifier_group_updated_installed_merchants,
    Webhook_modifier_group_updated_merchant
} from './types-62.js';
import type {
    Webhook_subscription_canceled_installed_merchants,
    Webhook_subscription_canceled_merchant,
    Webhook_return_reopened_installed_merchants,
    Webhook_return_reopened_merchant,
    Webhook_subscription_delivery_pause_upcoming_installed_merchants,
    Webhook_subscription_delivery_pause_upcoming_merchant,
    Webhook_return_receipt_verified_installed_merchants,
    Webhook_return_receipt_verified_merchant,
    Webhook_subscription_payment_succeeded_installed_merchants,
    Webhook_subscription_payment_succeeded_merchant,
    Webhook_subscription_delivery_migration_completed_installed_merchants,
    Webhook_subscription_delivery_migration_completed_merchant,
    Webhook_subscription_activated_installed_merchants,
    Webhook_subscription_activated_merchant,
    Webhook_subscription_payment_retry_succeeded_installed_merchants,
    Webhook_subscription_payment_retry_succeeded_merchant,
    Webhook_shipment_created_installed_merchants,
    Webhook_shipment_created_merchant,
    Webhook_subscription_reactivated_installed_merchants,
    Webhook_subscription_reactivated_merchant,
    Webhook_subscription_cancellation_scheduled_installed_merchants,
    Webhook_subscription_cancellation_scheduled_merchant,
    Webhook_subscription_delivery_action_required_installed_merchants,
    Webhook_subscription_delivery_action_required_merchant
} from './types-64.js';
import type {
    Webhook_invoice_paid_installed_merchants,
    Webhook_invoice_paid_merchant,
    Webhook_invoice_overdue_installed_merchants,
    Webhook_invoice_overdue_merchant,
    Webhook_merchant_billing_invoice_issued_merchant,
    Webhook_invoice_issued_installed_merchants,
    Webhook_invoice_issued_merchant,
    Webhook_invoice_marked_uncollectible_installed_merchants,
    Webhook_invoice_marked_uncollectible_merchant,
    Webhook_merchant_readiness_updated_merchant,
    Webhook_invoice_payment_attempt_processing_installed_merchants,
    Webhook_invoice_payment_attempt_processing_merchant,
    Webhook_invoice_reopened_installed_merchants,
    Webhook_invoice_reopened_merchant,
    Webhook_invoice_payment_attempt_expired_installed_merchants,
    Webhook_invoice_payment_attempt_expired_merchant,
    Webhook_merchant_updated_merchant,
    Webhook_merchant_billing_balance_updated_merchant
} from './types-61.js';
import type {
    Webhook_product_variant_archived_installed_merchants,
    Webhook_product_variant_archived_merchant,
    Webhook_refund_partially_succeeded_installed_merchants,
    Webhook_refund_partially_succeeded_merchant,
    Webhook_return_canceled_installed_merchants,
    Webhook_return_canceled_merchant,
    Webhook_promotion_created_installed_merchants,
    Webhook_promotion_created_merchant,
    Webhook_refund_updated_installed_merchants,
    Webhook_refund_updated_merchant,
    Webhook_payout_reversed_merchant,
    Webhook_refund_failed_installed_merchants,
    Webhook_refund_failed_merchant,
    Webhook_product_archived_installed_merchants,
    Webhook_product_archived_merchant,
    Webhook_product_updated_installed_merchants,
    Webhook_product_updated_merchant,
    Webhook_payout_destination_updated_merchant,
    Webhook_payout_destination_disabled_merchant
} from './types-63.js';
import type {
    Webhook_inventory_transfer_lost_installed_merchants,
    Webhook_inventory_transfer_lost_merchant,
    Webhook_inventory_reservation_action_required_installed_merchants,
    Webhook_inventory_reservation_action_required_merchant,
    Webhook_inventory_transfer_returned_installed_merchants,
    Webhook_inventory_transfer_returned_merchant,
    Webhook_gift_card_updated_installed_merchants,
    Webhook_gift_card_updated_merchant,
    Webhook_gift_card_notification_updated_installed_merchants,
    Webhook_gift_card_notification_updated_merchant,
    Webhook_inventory_reservation_created_installed_merchants,
    Webhook_inventory_reservation_created_merchant
} from './types-60.js';
import type {
    Webhook_environment_grant_revoked_partner_app,
    Webhook_delivery_profile_updated_installed_merchants,
    Webhook_delivery_profile_updated_merchant,
    Webhook_delivery_zone_updated_installed_merchants,
    Webhook_delivery_zone_updated_merchant,
    Webhook_delivery_zone_deactivated_installed_merchants,
    Webhook_delivery_zone_deactivated_merchant,
    Webhook_fraud_warning_created_installed_merchants,
    Webhook_fraud_warning_created_merchant,
    Webhook_delivery_method_updated_installed_merchants,
    Webhook_delivery_method_updated_merchant,
    Webhook_delivery_method_created_installed_merchants,
    Webhook_delivery_method_created_merchant,
    Webhook_delivery_profile_activated_installed_merchants,
    Webhook_delivery_profile_activated_merchant,
    Webhook_dispute_created_merchant,
    Webhook_delivery_profile_created_installed_merchants,
    Webhook_delivery_profile_created_merchant
} from './types-59.js';
import type {
    Webhook_subscription_trial_ending_installed_merchants,
    Webhook_subscription_trial_ending_merchant,
    Webhook_subscription_resumed_installed_merchants,
    Webhook_subscription_resumed_merchant
} from './types-65.js';
/**
 * Shape $ (Value): {@link Webhook_custom_domain_archived_merchant}. The `custom_domain.archived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook11e88c289069Payload = Webhook_custom_domain_archived_merchant;
/** Shape $ (Value): {@link IncomingWebhook11f5484d200dPayload}. */
export type IncomingWebhook11f5484d200dPayload = ((Webhook_package_created_merchant) | (Webhook_package_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook1255f92e9f23Payload}. */
export type IncomingWebhook1255f92e9f23Payload = ((Webhook_subscription_canceled_merchant)
    | (Webhook_subscription_canceled_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook155e0b06aa8fPayload}. */
export type IncomingWebhook155e0b06aa8fPayload = ((Webhook_invoice_paid_merchant) | (Webhook_invoice_paid_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook172f57408f3aPayload}. */
export type IncomingWebhook172f57408f3aPayload = ((Webhook_checkout_session_invalidated_merchant)
    | (Webhook_checkout_session_invalidated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook19afc192a8b9Payload}. */
export type IncomingWebhook19afc192a8b9Payload = ((Webhook_product_variant_archived_merchant)
    | (Webhook_product_variant_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook1a457f95e64ePayload}. */
export type IncomingWebhook1a457f95e64ePayload = ((Webhook_inventory_transfer_lost_merchant)
    | (Webhook_inventory_transfer_lost_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook1def026adfecPayload}. */
export type IncomingWebhook1def026adfecPayload = ((Webhook_invoice_overdue_merchant) | (Webhook_invoice_overdue_installed_merchants) | (unknown));
/**
 * Shape $ (Value): {@link Webhook_merchant_billing_invoice_issued_merchant}. The
 * `merchant_billing_invoice.issued` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type IncomingWebhook1e0bfe58cccePayload = Webhook_merchant_billing_invoice_issued_merchant;
/** Shape $ (Value): {@link IncomingWebhook1ee78a01be44Payload}. */
export type IncomingWebhook1ee78a01be44Payload = ((Webhook_inventory_reservation_action_required_merchant)
    | (Webhook_inventory_reservation_action_required_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook1fb7a0253dadPayload}. */
export type IncomingWebhook1fb7a0253dadPayload = ((Webhook_refund_partially_succeeded_merchant)
    | (Webhook_refund_partially_succeeded_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook2111a23e6e7cPayload}. */
export type IncomingWebhook2111a23e6e7cPayload = ((Webhook_return_canceled_merchant) | (Webhook_return_canceled_installed_merchants) | (unknown));
/**
 * Shape $ (Value): {@link Webhook_environment_grant_revoked_partner_app}. The
 * `environment_grant.revoked` webhook payload for the `partner_app` event source. Fields shared by
 * partner webhook payloads.
 */
export type IncomingWebhook21c7fdae52f1Payload = Webhook_environment_grant_revoked_partner_app;
/** Shape $ (Value): {@link IncomingWebhook22d72673a8cdPayload}. */
export type IncomingWebhook22d72673a8cdPayload = ((Webhook_return_reopened_merchant) | (Webhook_return_reopened_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook2525f823ec7cPayload}. */
export type IncomingWebhook2525f823ec7cPayload = ((Webhook_subscription_trial_ending_merchant)
    | (Webhook_subscription_trial_ending_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook25a1d8aaa819Payload}. */
export type IncomingWebhook25a1d8aaa819Payload = ((Webhook_delivery_location_set_archived_merchant)
    | (Webhook_delivery_location_set_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook25e323147b49Payload}. */
export type IncomingWebhook25e323147b49Payload = ((Webhook_promotion_created_merchant) | (Webhook_promotion_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook271f2a73e897Payload}. */
export type IncomingWebhook271f2a73e897Payload = ((Webhook_bundle_created_merchant) | (Webhook_bundle_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook274ba21f04d5Payload}. */
export type IncomingWebhook274ba21f04d5Payload = ((Webhook_invoice_issued_merchant) | (Webhook_invoice_issued_installed_merchants) | (unknown));
/**
 * Shape $ (Value): {@link Webhook_partner_app_install_created_partner_app}. The
 * `partner_app_install.created` webhook payload for the `partner_app` event source. Fields shared
 * by partner webhook payloads.
 */
export type IncomingWebhook275a5e442d58Payload = Webhook_partner_app_install_created_partner_app;
/** Shape $ (Value): {@link IncomingWebhook2841a4070c41Payload}. */
export type IncomingWebhook2841a4070c41Payload = ((Webhook_credit_note_updated_merchant)
    | (Webhook_credit_note_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook2873f18b6724Payload}. */
export type IncomingWebhook2873f18b6724Payload = ((Webhook_delivery_profile_updated_merchant)
    | (Webhook_delivery_profile_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook28a496c0fbf5Payload}. */
export type IncomingWebhook28a496c0fbf5Payload = ((Webhook_inventory_transfer_returned_merchant)
    | (Webhook_inventory_transfer_returned_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook28c5dc1777e5Payload}. */
export type IncomingWebhook28c5dc1777e5Payload = ((Webhook_delivery_zone_updated_merchant)
    | (Webhook_delivery_zone_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook28eb66b9f1a5Payload}. */
export type IncomingWebhook28eb66b9f1a5Payload = ((Webhook_refund_updated_merchant) | (Webhook_refund_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook2aac621fe04ePayload}. */
export type IncomingWebhook2aac621fe04ePayload = ((Webhook_subscription_delivery_pause_upcoming_merchant)
    | (Webhook_subscription_delivery_pause_upcoming_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook2b16597f72aaPayload}. */
export type IncomingWebhook2b16597f72aaPayload = ((Webhook_return_receipt_verified_merchant)
    | (Webhook_return_receipt_verified_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook2c03ad91f156Payload}. */
export type IncomingWebhook2c03ad91f156Payload = ((Webhook_delivery_zone_deactivated_merchant)
    | (Webhook_delivery_zone_deactivated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook30ac14eea065Payload}. */
export type IncomingWebhook30ac14eea065Payload = ((Webhook_fraud_warning_created_merchant)
    | (Webhook_fraud_warning_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook33ee5571b4b4Payload}. */
export type IncomingWebhook33ee5571b4b4Payload = ((Webhook_delivery_method_updated_merchant)
    | (Webhook_delivery_method_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook3573c4463034Payload}. */
export type IncomingWebhook3573c4463034Payload = ((Webhook_subscription_payment_succeeded_merchant)
    | (Webhook_subscription_payment_succeeded_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_reversed_merchant}. The `payout.reversed` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook358012160ab8Payload = Webhook_payout_reversed_merchant;
/** Shape $ (Value): {@link IncomingWebhook362af2129f9dPayload}. */
export type IncomingWebhook362af2129f9dPayload = ((Webhook_subscription_delivery_migration_completed_merchant)
    | (Webhook_subscription_delivery_migration_completed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook38eda7a4e990Payload}. */
export type IncomingWebhook38eda7a4e990Payload = ((Webhook_subscription_activated_merchant)
    | (Webhook_subscription_activated_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_balance_updated_merchant}. The `balance.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook39300cef9ff7Payload = Webhook_balance_updated_merchant;
/** Shape $ (Value): {@link IncomingWebhook3a84d3034c0dPayload}. */
export type IncomingWebhook3a84d3034c0dPayload = ((Webhook_subscription_payment_retry_succeeded_merchant)
    | (Webhook_subscription_payment_retry_succeeded_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook3ae537b058b5Payload}. */
export type IncomingWebhook3ae537b058b5Payload = ((Webhook_delivery_method_created_merchant)
    | (Webhook_delivery_method_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook3b618fd743f5Payload}. */
export type IncomingWebhook3b618fd743f5Payload = ((Webhook_refund_failed_merchant) | (Webhook_refund_failed_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook3b7384fc25c0Payload}. */
export type IncomingWebhook3b7384fc25c0Payload = ((Webhook_product_archived_merchant) | (Webhook_product_archived_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook3bed705c5a7fPayload}. */
export type IncomingWebhook3bed705c5a7fPayload = ((Webhook_invoice_marked_uncollectible_merchant)
    | (Webhook_invoice_marked_uncollectible_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook3d61e0141c17Payload}. */
export type IncomingWebhook3d61e0141c17Payload = ((Webhook_product_updated_merchant) | (Webhook_product_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook3e1e165872bePayload}. */
export type IncomingWebhook3e1e165872bePayload = ((Webhook_payment_intent_requires_capture_merchant)
    | (Webhook_payment_intent_requires_capture_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_merchant_readiness_updated_merchant}. The
 * `merchant.readiness_updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type IncomingWebhook3e96e4ac3133Payload = Webhook_merchant_readiness_updated_merchant;
/** Shape $ (Value): {@link IncomingWebhook3f41f2d16978Payload}. */
export type IncomingWebhook3f41f2d16978Payload = ((Webhook_invoice_payment_attempt_processing_merchant)
    | (Webhook_invoice_payment_attempt_processing_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook426f6ee2e99fPayload}. */
export type IncomingWebhook426f6ee2e99fPayload = ((Webhook_invoice_reopened_merchant) | (Webhook_invoice_reopened_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook426fd79260ecPayload}. */
export type IncomingWebhook426fd79260ecPayload = ((Webhook_shipment_created_merchant) | (Webhook_shipment_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook42d1750d6349Payload}. */
export type IncomingWebhook42d1750d6349Payload = ((Webhook_gift_card_updated_merchant) | (Webhook_gift_card_updated_installed_merchants) | (unknown));
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
