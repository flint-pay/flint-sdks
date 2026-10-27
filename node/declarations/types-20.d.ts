import type {
    Webhook_payment_review_reopened_installed_merchants,
    Webhook_payment_review_reopened_merchant,
    Webhook_payment_intent_requires_action_installed_merchants,
    Webhook_payment_intent_requires_action_merchant,
    Webhook_payment_method_activated_installed_merchants,
    Webhook_payment_method_activated_merchant,
    Webhook_order_updated_installed_merchants,
    Webhook_order_updated_merchant,
    Webhook_package_created_installed_merchants,
    Webhook_package_created_merchant,
    Webhook_partner_app_install_created_partner_app,
    Webhook_payout_reversed_merchant,
    Webhook_payment_intent_requires_capture_installed_merchants,
    Webhook_payment_intent_requires_capture_merchant
} from './types-59.js';
import type {
    Webhook_dispute_prevented_merchant,
    Webhook_environment_grant_created_partner_app,
    Webhook_delivery_rate_callback_created_installed_merchants,
    Webhook_delivery_rate_callback_created_merchant,
    Webhook_environment_grant_revoked_partner_app,
    Webhook_delivery_profile_updated_installed_merchants,
    Webhook_delivery_profile_updated_merchant,
    Webhook_delivery_zone_updated_installed_merchants,
    Webhook_delivery_zone_updated_merchant,
    Webhook_delivery_zone_deactivated_installed_merchants,
    Webhook_delivery_zone_deactivated_merchant,
    Webhook_fraud_warning_created_installed_merchants,
    Webhook_fraud_warning_created_merchant
} from './types-56.js';
import type {
    Webhook_inventory_reservation_committed_installed_merchants,
    Webhook_inventory_reservation_committed_merchant,
    Webhook_gift_card_transaction_created_installed_merchants,
    Webhook_gift_card_transaction_created_merchant,
    Webhook_gift_card_redemption_updated_installed_merchants,
    Webhook_gift_card_redemption_updated_merchant,
    Webhook_inventory_transfer_lost_installed_merchants,
    Webhook_inventory_transfer_lost_merchant,
    Webhook_inventory_reservation_action_required_installed_merchants,
    Webhook_inventory_reservation_action_required_merchant,
    Webhook_invoice_issued_installed_merchants,
    Webhook_invoice_issued_merchant,
    Webhook_inventory_transfer_returned_installed_merchants,
    Webhook_inventory_transfer_returned_merchant,
    Webhook_gift_card_updated_installed_merchants,
    Webhook_gift_card_updated_merchant
} from './types-57.js';
import type {
    Webhook_invoice_payment_attempt_settled_installed_merchants,
    Webhook_invoice_payment_attempt_settled_merchant,
    Webhook_invoice_paid_installed_merchants,
    Webhook_invoice_paid_merchant,
    Webhook_invoice_overdue_installed_merchants,
    Webhook_invoice_overdue_merchant,
    Webhook_merchant_billing_invoice_issued_merchant,
    Webhook_invoice_marked_uncollectible_installed_merchants,
    Webhook_invoice_marked_uncollectible_merchant,
    Webhook_merchant_readiness_updated_merchant,
    Webhook_invoice_payment_attempt_processing_installed_merchants,
    Webhook_invoice_payment_attempt_processing_merchant,
    Webhook_invoice_reopened_installed_merchants,
    Webhook_invoice_reopened_merchant
} from './types-58.js';
import type {
    Webhook_credit_note_allocation_reversed_installed_merchants,
    Webhook_credit_note_allocation_reversed_merchant,
    Webhook_checkout_session_created_installed_merchants,
    Webhook_checkout_session_created_merchant,
    Webhook_custom_domain_archived_merchant,
    Webhook_checkout_session_invalidated_installed_merchants,
    Webhook_checkout_session_invalidated_merchant,
    Webhook_delivery_location_set_archived_installed_merchants,
    Webhook_delivery_location_set_archived_merchant,
    Webhook_credit_note_updated_installed_merchants,
    Webhook_credit_note_updated_merchant,
    Webhook_delivery_method_updated_installed_merchants,
    Webhook_delivery_method_updated_merchant,
    Webhook_delivery_method_created_installed_merchants,
    Webhook_delivery_method_created_merchant
} from './types-55.js';
import type {
    Webhook_subscription_canceled_installed_merchants,
    Webhook_subscription_canceled_merchant,
    Webhook_return_reopened_merchant,
    Webhook_subscription_trial_ending_installed_merchants,
    Webhook_subscription_trial_ending_merchant,
    Webhook_subscription_delivery_pause_upcoming_installed_merchants,
    Webhook_subscription_delivery_pause_upcoming_merchant,
    Webhook_subscription_payment_succeeded_installed_merchants,
    Webhook_subscription_payment_succeeded_merchant,
    Webhook_subscription_delivery_migration_completed_installed_merchants,
    Webhook_subscription_delivery_migration_completed_merchant,
    Webhook_subscription_activated_installed_merchants,
    Webhook_subscription_activated_merchant,
    Webhook_subscription_payment_retry_succeeded_installed_merchants,
    Webhook_subscription_payment_retry_succeeded_merchant,
    Webhook_shipment_created_installed_merchants,
    Webhook_shipment_created_merchant
} from './types-61.js';
import type {
    Webhook_product_variant_archived_installed_merchants,
    Webhook_product_variant_archived_merchant,
    Webhook_refund_partially_succeeded_installed_merchants,
    Webhook_refund_partially_succeeded_merchant,
    Webhook_return_canceled_installed_merchants,
    Webhook_return_canceled_merchant,
    Webhook_return_reopened_installed_merchants,
    Webhook_promotion_created_installed_merchants,
    Webhook_promotion_created_merchant,
    Webhook_refund_updated_installed_merchants,
    Webhook_refund_updated_merchant,
    Webhook_return_receipt_verified_installed_merchants,
    Webhook_return_receipt_verified_merchant,
    Webhook_refund_failed_installed_merchants,
    Webhook_refund_failed_merchant,
    Webhook_product_archived_installed_merchants,
    Webhook_product_archived_merchant,
    Webhook_product_updated_installed_merchants,
    Webhook_product_updated_merchant
} from './types-60.js';
import type {
    Webhook_bundle_created_installed_merchants,
    Webhook_bundle_created_merchant,
    Webhook_balance_updated_merchant
} from './types-54.js';
/**
 * Shape $ (Value): {@link ImageReferenceRequest}. A reference to an image by `url`, with optional
 * `alt` text, used on an order line item.
 */
export type ImageReferenceRequest = {
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1.
     */
    "alt"?: string;
    /** Shape $ (Value): string. URL of the image. minLength: 1. */
    "url": string;
};
/**
 * Shape $ (Value): {@link ImageReferenceRequestInput}. A reference to an image by `url`, with
 * optional `alt` text, used on an order line item.
 */
export type ImageReferenceRequestInput = ImageReferenceRequest;
/**
 * Shape $ (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional `alt`
 * text and external reference.
 */
export type ImageRequest = ({
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & (({
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url": string;
})
    | ({
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id": string;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with optional
 * `alt` text and external reference.
 */
export type ImageRequestInput = {
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url": string;
}
    | {
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id": string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
};
/** Shape $ (Value): {@link IncomingWebhook019a504a3353Payload}. */
export type IncomingWebhook019a504a3353Payload = ((Webhook_payment_review_reopened_merchant)
    | (Webhook_payment_review_reopened_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_dispute_prevented_merchant}. The `dispute.prevented` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook04494e8bd1b3Payload = Webhook_dispute_prevented_merchant;
/** Shape $ (Value): {@link IncomingWebhook0452cf0e91f7Payload}. */
export type IncomingWebhook0452cf0e91f7Payload = ((Webhook_inventory_reservation_committed_merchant)
    | (Webhook_inventory_reservation_committed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook0480be55a902Payload}. */
export type IncomingWebhook0480be55a902Payload = ((Webhook_payment_intent_requires_action_merchant)
    | (Webhook_payment_intent_requires_action_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook05f1b45d6cf6Payload}. */
export type IncomingWebhook05f1b45d6cf6Payload = ((Webhook_invoice_payment_attempt_settled_merchant)
    | (Webhook_invoice_payment_attempt_settled_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook062843b7e875Payload}. */
export type IncomingWebhook062843b7e875Payload = ((Webhook_credit_note_allocation_reversed_merchant)
    | (Webhook_credit_note_allocation_reversed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook067bab7c655aPayload}. */
export type IncomingWebhook067bab7c655aPayload = ((Webhook_gift_card_transaction_created_merchant)
    | (Webhook_gift_card_transaction_created_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_environment_grant_created_partner_app}. The
 * `environment_grant.created` webhook payload for the `partner_app` event source. Fields shared by
 * partner webhook payloads.
 */
export type IncomingWebhook078273f39700Payload = Webhook_environment_grant_created_partner_app;
/** Shape $ (Value): {@link IncomingWebhook08302bc1b414Payload}. */
export type IncomingWebhook08302bc1b414Payload = ((Webhook_payment_method_activated_merchant)
    | (Webhook_payment_method_activated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook08a3ab8065ffPayload}. */
export type IncomingWebhook08a3ab8065ffPayload = ((Webhook_checkout_session_created_merchant)
    | (Webhook_checkout_session_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook0caa82ed1aafPayload}. */
export type IncomingWebhook0caa82ed1aafPayload = ((Webhook_delivery_rate_callback_created_merchant)
    | (Webhook_delivery_rate_callback_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook0d891c599afbPayload}. */
export type IncomingWebhook0d891c599afbPayload = ((Webhook_order_updated_merchant) | (Webhook_order_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook0ed7a866163aPayload}. */
export type IncomingWebhook0ed7a866163aPayload = ((Webhook_gift_card_redemption_updated_merchant)
    | (Webhook_gift_card_redemption_updated_installed_merchants)
    | (unknown));
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
