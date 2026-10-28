import type {
    Webhook_fulfillment_updated_installed_merchants,
    Webhook_fulfillment_updated_merchant,
    Webhook_dispute_won_merchant,
    Webhook_fraud_warning_updated_installed_merchants,
    Webhook_fraud_warning_updated_merchant,
    Webhook_fulfillment_created_installed_merchants,
    Webhook_fulfillment_created_merchant,
    Webhook_dispute_lost_merchant,
    Webhook_fulfillment_canceled_installed_merchants,
    Webhook_fulfillment_canceled_merchant,
    Webhook_gift_card_load_created_installed_merchants,
    Webhook_gift_card_load_created_merchant,
    Webhook_dispute_inquiry_closed_merchant
} from './types-56.js';
import type {
    Webhook_inventory_reservation_consumed_installed_merchants,
    Webhook_inventory_reservation_consumed_merchant,
    Webhook_inventory_level_updated_installed_merchants,
    Webhook_inventory_level_updated_merchant,
    Webhook_invoice_created_installed_merchants,
    Webhook_invoice_created_merchant,
    Webhook_inventory_transfer_departed_installed_merchants,
    Webhook_inventory_transfer_departed_merchant,
    Webhook_gift_card_redemption_created_installed_merchants,
    Webhook_gift_card_redemption_created_merchant,
    Webhook_invoice_credited_installed_merchants,
    Webhook_invoice_credited_merchant,
    Webhook_inventory_transfer_received_installed_merchants,
    Webhook_inventory_transfer_received_merchant,
    Webhook_inventory_count_applied_installed_merchants,
    Webhook_inventory_count_applied_merchant,
    Webhook_invoice_collection_blocked_installed_merchants,
    Webhook_invoice_collection_blocked_merchant,
    Webhook_invoice_delivery_attempt_suppressed_installed_merchants,
    Webhook_invoice_delivery_attempt_suppressed_merchant,
    Webhook_inventory_level_shortage_detected_installed_merchants,
    Webhook_inventory_level_shortage_detected_merchant,
    Webhook_invoice_delivery_attempt_sent_installed_merchants,
    Webhook_invoice_delivery_attempt_sent_merchant,
    Webhook_invoice_issue_failed_installed_merchants,
    Webhook_invoice_issue_failed_merchant,
    Webhook_invoice_collection_block_resolved_installed_merchants,
    Webhook_invoice_collection_block_resolved_merchant
} from './types-57.js';
import type {
    Webhook_payout_updated_merchant,
    Webhook_promotion_code_updated_installed_merchants,
    Webhook_promotion_code_updated_merchant,
    Webhook_return_receipt_created_installed_merchants,
    Webhook_return_receipt_created_merchant,
    Webhook_refund_created_installed_merchants,
    Webhook_refund_created_merchant,
    Webhook_promotion_updated_installed_merchants,
    Webhook_promotion_updated_merchant,
    Webhook_promotion_code_created_installed_merchants,
    Webhook_promotion_code_created_merchant,
    Webhook_return_receipt_superseded_installed_merchants,
    Webhook_return_receipt_superseded_merchant,
    Webhook_product_created_installed_merchants,
    Webhook_product_created_merchant
} from './types-60.js';
import type {
    Webhook_balance_transaction_updated_merchant,
    Webhook_category_deleted_installed_merchants,
    Webhook_category_deleted_merchant,
    Webhook_bundle_updated_installed_merchants,
    Webhook_bundle_updated_merchant
} from './types-54.js';
import type {
    Webhook_payment_intent_updated_installed_merchants,
    Webhook_payment_intent_updated_merchant,
    Webhook_order_refunded_installed_merchants,
    Webhook_order_refunded_merchant,
    Webhook_package_updated_installed_merchants,
    Webhook_package_updated_merchant,
    Webhook_order_inventory_exception_resolved_merchant,
    Webhook_payment_method_archived_installed_merchants,
    Webhook_payment_method_archived_merchant,
    Webhook_payment_intent_created_installed_merchants,
    Webhook_payment_intent_created_merchant,
    Webhook_payment_intent_expired_installed_merchants,
    Webhook_payment_intent_expired_merchant,
    Webhook_payout_canceled_merchant,
    Webhook_payment_review_closed_installed_merchants,
    Webhook_payment_review_closed_merchant,
    Webhook_payment_intent_payment_failed_installed_merchants,
    Webhook_payment_intent_payment_failed_merchant,
    Webhook_payment_link_created_installed_merchants,
    Webhook_payment_link_created_merchant,
    Webhook_partner_app_install_permissions_updated_partner_app,
    Webhook_partner_app_install_revoked_partner_app,
    Webhook_payout_paid_merchant,
    Webhook_payout_destination_archived_merchant
} from './types-59.js';
import type {
    Webhook_invoice_updated_installed_merchants,
    Webhook_invoice_updated_merchant,
    Webhook_order_inventory_exception_resolved_installed_merchants,
    Webhook_invoice_sent_installed_merchants,
    Webhook_invoice_sent_merchant,
    Webhook_invoice_manual_payment_created_installed_merchants,
    Webhook_invoice_manual_payment_created_merchant,
    Webhook_modifier_set_created_installed_merchants,
    Webhook_modifier_set_created_merchant,
    Webhook_invoice_partially_paid_installed_merchants,
    Webhook_invoice_partially_paid_merchant
} from './types-58.js';
import type {
    Webhook_subscription_renewal_upcoming_installed_merchants,
    Webhook_subscription_renewal_upcoming_merchant,
    Webhook_shipment_updated_installed_merchants,
    Webhook_shipment_updated_merchant,
    Webhook_subscription_payment_retry_created_installed_merchants,
    Webhook_subscription_payment_retry_created_merchant,
    Webhook_return_resolution_created_installed_merchants,
    Webhook_return_resolution_created_merchant,
    Webhook_subscription_past_due_installed_merchants,
    Webhook_subscription_past_due_merchant
} from './types-61.js';
import type {
    Webhook_customer_deleted_installed_merchants,
    Webhook_customer_deleted_merchant,
    Webhook_credit_note_issued_installed_merchants,
    Webhook_credit_note_issued_merchant,
    Webhook_delivery_location_set_updated_installed_merchants,
    Webhook_delivery_location_set_updated_merchant,
    Webhook_checkout_session_paid_installed_merchants,
    Webhook_checkout_session_paid_merchant,
    Webhook_credit_note_allocation_created_installed_merchants,
    Webhook_credit_note_allocation_created_merchant,
    Webhook_custom_domain_updated_merchant
} from './types-55.js';
/** Shape $ (Value): {@link IncomingWebhook85009aa9b4a5Payload}. */
export type IncomingWebhook85009aa9b4a5Payload = ((Webhook_fulfillment_updated_merchant)
    | (Webhook_fulfillment_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook8616683d55b7Payload}. */
export type IncomingWebhook8616683d55b7Payload = ((Webhook_inventory_reservation_consumed_merchant)
    | (Webhook_inventory_reservation_consumed_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_updated_merchant}. The `payout.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook88596065c1b9Payload = Webhook_payout_updated_merchant;
/**
 * Shape $ (Value): {@link Webhook_balance_transaction_updated_merchant}. The
 * `balance_transaction.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type IncomingWebhook89b737dd7119Payload = Webhook_balance_transaction_updated_merchant;
/** Shape $ (Value): {@link IncomingWebhook8a237991564ePayload}. */
export type IncomingWebhook8a237991564ePayload = ((Webhook_payment_intent_updated_merchant)
    | (Webhook_payment_intent_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook8a9065a6c890Payload}. */
export type IncomingWebhook8a9065a6c890Payload = ((Webhook_inventory_level_updated_merchant)
    | (Webhook_inventory_level_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook8b9272735b74Payload}. */
export type IncomingWebhook8b9272735b74Payload = ((Webhook_order_refunded_merchant) | (Webhook_order_refunded_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook8c8f435e6e23Payload}. */
export type IncomingWebhook8c8f435e6e23Payload = ((Webhook_invoice_updated_merchant) | (Webhook_invoice_updated_installed_merchants) | (unknown));
/**
 * Shape $ (Value): {@link Webhook_dispute_won_merchant}. The `dispute.won` webhook payload for the
 * `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook8d0ecb37ce13Payload = Webhook_dispute_won_merchant;
/** Shape $ (Value): {@link IncomingWebhook8f2ee441a7caPayload}. */
export type IncomingWebhook8f2ee441a7caPayload = ((Webhook_package_updated_merchant) | (Webhook_package_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook90c487338917Payload}. */
export type IncomingWebhook90c487338917Payload = ((Webhook_invoice_created_merchant) | (Webhook_invoice_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook9123c6d282f9Payload}. */
export type IncomingWebhook9123c6d282f9Payload = ((Webhook_subscription_renewal_upcoming_merchant)
    | (Webhook_subscription_renewal_upcoming_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook943f404e4346Payload}. */
export type IncomingWebhook943f404e4346Payload = ((Webhook_order_inventory_exception_resolved_merchant)
    | (Webhook_order_inventory_exception_resolved_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook94a6b6847c7bPayload}. */
export type IncomingWebhook94a6b6847c7bPayload = ((Webhook_promotion_code_updated_merchant)
    | (Webhook_promotion_code_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook94eb39c32263Payload}. */
export type IncomingWebhook94eb39c32263Payload = ((Webhook_category_deleted_merchant) | (Webhook_category_deleted_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook95766a188943Payload}. */
export type IncomingWebhook95766a188943Payload = ((Webhook_shipment_updated_merchant) | (Webhook_shipment_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook9647232e2632Payload}. */
export type IncomingWebhook9647232e2632Payload = ((Webhook_subscription_payment_retry_created_merchant)
    | (Webhook_subscription_payment_retry_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook96ad40704e72Payload}. */
export type IncomingWebhook96ad40704e72Payload = ((Webhook_return_resolution_created_merchant)
    | (Webhook_return_resolution_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook96bb47deea93Payload}. */
export type IncomingWebhook96bb47deea93Payload = ((Webhook_invoice_sent_merchant) | (Webhook_invoice_sent_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook9951dbd034fePayload}. */
export type IncomingWebhook9951dbd034fePayload = ((Webhook_inventory_transfer_departed_merchant)
    | (Webhook_inventory_transfer_departed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook9b7963c3e444Payload}. */
export type IncomingWebhook9b7963c3e444Payload = ((Webhook_return_receipt_created_merchant)
    | (Webhook_return_receipt_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook9d6f9adeef1cPayload}. */
export type IncomingWebhook9d6f9adeef1cPayload = ((Webhook_gift_card_redemption_created_merchant)
    | (Webhook_gift_card_redemption_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook9db076db828fPayload}. */
export type IncomingWebhook9db076db828fPayload = ((Webhook_customer_deleted_merchant) | (Webhook_customer_deleted_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook9f2c64cbfcafPayload}. */
export type IncomingWebhook9f2c64cbfcafPayload = ((Webhook_credit_note_issued_merchant) | (Webhook_credit_note_issued_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhooka1881a33c0d8Payload}. */
export type IncomingWebhooka1881a33c0d8Payload = ((Webhook_invoice_credited_merchant) | (Webhook_invoice_credited_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhooka21c445159a7Payload}. */
export type IncomingWebhooka21c445159a7Payload = ((Webhook_inventory_transfer_received_merchant)
    | (Webhook_inventory_transfer_received_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooka245b43d0520Payload}. */
export type IncomingWebhooka245b43d0520Payload = ((Webhook_payment_method_archived_merchant)
    | (Webhook_payment_method_archived_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooka4fe11e3a17bPayload}. */
export type IncomingWebhooka4fe11e3a17bPayload = ((Webhook_payment_intent_created_merchant)
    | (Webhook_payment_intent_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooka822b93dd6a2Payload}. */
export type IncomingWebhooka822b93dd6a2Payload = ((Webhook_inventory_count_applied_merchant)
    | (Webhook_inventory_count_applied_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhooka9876afe4b94Payload}. */
export type IncomingWebhooka9876afe4b94Payload = ((Webhook_refund_created_merchant) | (Webhook_refund_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhooka9f404707239Payload}. */
export type IncomingWebhooka9f404707239Payload = ((Webhook_invoice_collection_blocked_merchant)
    | (Webhook_invoice_collection_blocked_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookaa949d7898b5Payload}. */
export type IncomingWebhookaa949d7898b5Payload = ((Webhook_invoice_manual_payment_created_merchant)
    | (Webhook_invoice_manual_payment_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookab5114542a0ePayload}. */
export type IncomingWebhookab5114542a0ePayload = ((Webhook_invoice_delivery_attempt_suppressed_merchant)
    | (Webhook_invoice_delivery_attempt_suppressed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookac68e02edc21Payload}. */
export type IncomingWebhookac68e02edc21Payload = ((Webhook_fraud_warning_updated_merchant)
    | (Webhook_fraud_warning_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookae6a3c3a172aPayload}. */
export type IncomingWebhookae6a3c3a172aPayload = ((Webhook_inventory_level_shortage_detected_merchant)
    | (Webhook_inventory_level_shortage_detected_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookaff034e4ba97Payload}. */
export type IncomingWebhookaff034e4ba97Payload = ((Webhook_fulfillment_created_merchant)
    | (Webhook_fulfillment_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookb12519577889Payload}. */
export type IncomingWebhookb12519577889Payload = ((Webhook_invoice_delivery_attempt_sent_merchant)
    | (Webhook_invoice_delivery_attempt_sent_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookb3d603928db4Payload}. */
export type IncomingWebhookb3d603928db4Payload = ((Webhook_promotion_updated_merchant) | (Webhook_promotion_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookb5e016d3aecaPayload}. */
export type IncomingWebhookb5e016d3aecaPayload = ((Webhook_delivery_location_set_updated_merchant)
    | (Webhook_delivery_location_set_updated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookb65376063a56Payload}. */
export type IncomingWebhookb65376063a56Payload = ((Webhook_invoice_issue_failed_merchant)
    | (Webhook_invoice_issue_failed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookb7cabb92626bPayload}. */
export type IncomingWebhookb7cabb92626bPayload = ((Webhook_payment_intent_expired_merchant)
    | (Webhook_payment_intent_expired_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookb8b7fd84925cPayload}. */
export type IncomingWebhookb8b7fd84925cPayload = ((Webhook_checkout_session_paid_merchant)
    | (Webhook_checkout_session_paid_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookb8e1ba81d204Payload}. */
export type IncomingWebhookb8e1ba81d204Payload = ((Webhook_modifier_set_created_merchant)
    | (Webhook_modifier_set_created_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_payout_canceled_merchant}. The `payout.canceled` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhookb9b1da5ab933Payload = Webhook_payout_canceled_merchant;
/** Shape $ (Value): {@link IncomingWebhookbacbcc6e2726Payload}. */
export type IncomingWebhookbacbcc6e2726Payload = ((Webhook_promotion_code_created_merchant)
    | (Webhook_promotion_code_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookbafad46f84b3Payload}. */
export type IncomingWebhookbafad46f84b3Payload = ((Webhook_bundle_updated_merchant) | (Webhook_bundle_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookbb439dd961a8Payload}. */
export type IncomingWebhookbb439dd961a8Payload = ((Webhook_subscription_past_due_merchant)
    | (Webhook_subscription_past_due_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookbc7cef57bba4Payload}. */
export type IncomingWebhookbc7cef57bba4Payload = ((Webhook_payment_review_closed_merchant)
    | (Webhook_payment_review_closed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookbca943d8a28aPayload}. */
export type IncomingWebhookbca943d8a28aPayload = ((Webhook_payment_intent_payment_failed_merchant)
    | (Webhook_payment_intent_payment_failed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookbcf939b58d94Payload}. */
export type IncomingWebhookbcf939b58d94Payload = ((Webhook_credit_note_allocation_created_merchant)
    | (Webhook_credit_note_allocation_created_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_dispute_lost_merchant}. The `dispute.lost` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhookbd445ea5b01aPayload = Webhook_dispute_lost_merchant;
/** Shape $ (Value): {@link IncomingWebhookbd61ef55b477Payload}. */
export type IncomingWebhookbd61ef55b477Payload = ((Webhook_payment_link_created_merchant)
    | (Webhook_payment_link_created_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_partner_app_install_permissions_updated_partner_app}. The
 * `partner_app_install.permissions_updated` webhook payload for the `partner_app` event source.
 * Fields shared by partner webhook payloads.
 */
export type IncomingWebhookbf82f70fc209Payload = Webhook_partner_app_install_permissions_updated_partner_app;
/** Shape $ (Value): {@link IncomingWebhookbf8fcac49fb2Payload}. */
export type IncomingWebhookbf8fcac49fb2Payload = ((Webhook_fulfillment_canceled_merchant)
    | (Webhook_fulfillment_canceled_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_partner_app_install_revoked_partner_app}. The
 * `partner_app_install.revoked` webhook payload for the `partner_app` event source. Fields shared
 * by partner webhook payloads.
 */
export type IncomingWebhookbfd0f4b7922ePayload = Webhook_partner_app_install_revoked_partner_app;
/** Shape $ (Value): {@link IncomingWebhookbfe731fc8c52Payload}. */
export type IncomingWebhookbfe731fc8c52Payload = ((Webhook_return_receipt_superseded_merchant)
    | (Webhook_return_receipt_superseded_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookc04d32fcb4e2Payload}. */
export type IncomingWebhookc04d32fcb4e2Payload = ((Webhook_invoice_collection_block_resolved_merchant)
    | (Webhook_invoice_collection_block_resolved_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_custom_domain_updated_merchant}. The `custom_domain.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhookc27deb295b21Payload = Webhook_custom_domain_updated_merchant;
/**
 * Shape $ (Value): {@link Webhook_payout_paid_merchant}. The `payout.paid` webhook payload for the
 * `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhookc3ebf1cf7ec9Payload = Webhook_payout_paid_merchant;
/**
 * Shape $ (Value): {@link Webhook_payout_destination_archived_merchant}. The
 * `payout_destination.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type IncomingWebhookc5b206b55e8ePayload = Webhook_payout_destination_archived_merchant;
/** Shape $ (Value): {@link IncomingWebhookc6eb56dac7d3Payload}. */
export type IncomingWebhookc6eb56dac7d3Payload = ((Webhook_product_created_merchant) | (Webhook_product_created_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhookc71d9380e0c9Payload}. */
export type IncomingWebhookc71d9380e0c9Payload = ((Webhook_invoice_partially_paid_merchant)
    | (Webhook_invoice_partially_paid_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhookc7c9c518e9d3Payload}. */
export type IncomingWebhookc7c9c518e9d3Payload = ((Webhook_gift_card_load_created_merchant)
    | (Webhook_gift_card_load_created_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_dispute_inquiry_closed_merchant}. The `dispute.inquiry_closed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhookc80b5d8589f2Payload = Webhook_dispute_inquiry_closed_merchant;
