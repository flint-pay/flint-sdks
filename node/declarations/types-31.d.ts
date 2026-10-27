import type { InputValue } from '../runtime.js';
import type { UpdateMerchantRequestInput, UpdateModifierGroupRequestInput, UpdateModifierSetRequestInput } from './types-48.js';
import type { TextModifierConfig } from './types-47.js';
import type { ResponseMeta, ResponseWarning } from './types-40.js';
import type { CreateModifierGroupRequestInput, CreateModifierSetRequestInput } from './types-7.js';
import type { InlineModifierGroupRequest, InlineModifierGroupRequestInput } from './types-23.js';
import type { DeveloperInitialAPIKeyRequestInput } from './types-15.js';
import type { OnboardingVerifyEmailRequestInput } from './types-32.js';
export type MerchantSubscriptionInvoicesGetInput = {
    /** Shape $ (Value): string. */
    "merchant_billing_invoice_id": InputValue<string>;
};
export type MerchantSubscriptionInvoicesListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "draft", "open", "collecting",
     * "paid", "delinquent", "void", "written_off". Shape $[] (Value): string. Value enum: "draft",
     * "open", "collecting", "paid", "delinquent", "void", "written_off".
     */
    "status"?: InputValue<Array<"draft" | "open" | "collecting" | "paid" | "delinquent" | "void" | "written_off">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/** Shape $ (Value): {@link MerchantWebhookEnvelope}. Fields shared by merchant webhook payloads. */
export type MerchantWebhookEnvelope = {
    /** Shape $ (Value): string. Format: date. */
    "api_version": string;
    /** Shape $ (Value): string. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): object. Shape $.object (Required): object. */
    "data": {
        /** Shape $ (Value): object. */
        "object": {
            [key: string]: unknown;
        };
    };
    /**
     * Shape $ (Value): string. Value enum: "customer_deletion_request.processing",
     * "customer_deletion_request.failed", "invoice_delivery_attempt.sent",
     * "invoice_delivery_attempt.failed", "invoice_delivery_attempt.suppressed",
     * "fulfillment.canceled", "fulfillment.failed", "merchant.updated", "product.created",
     * "product.updated", "product.archived", "product_variant.created", "product_variant.updated",
     * "product_variant.archived", "bundle.created", "bundle.updated", "bundle.archived",
     * "category.created", "category.updated", "category.deleted", "modifier_group.created",
     * "modifier_group.updated", "modifier_group.archived", "modifier_set.created",
     * "modifier_set.updated", "modifier_set.archived", "promotion.created", "promotion.updated",
     * "promotion.archived", "promotion_code.created", "promotion_code.updated",
     * "promotion_code.archived", "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "checkout_session.partially_paid",
     * "checkout_session.created", "checkout_session.paid", "checkout_session.closed",
     * "checkout_session.expired", "checkout_session.invalidated",
     * "credit_note_allocation.created", "credit_note_allocation.reversed", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided", "customer.created",
     * "customer_deletion_request.completed", "customer_deletion_request.rejected",
     * "customer_deletion_request.created", "customer.updated", "customer.deleted",
     * "custom_domain.updated", "custom_domain.archived", "dispute.created", "dispute.lost",
     * "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.inquiry_closed",
     * "dispute.won", "fraud_warning.created", "fraud_warning.updated", "gift_card.created",
     * "gift_card.updated", "gift_card_load.created", "gift_card_load.updated",
     * "gift_card_notification.created", "gift_card_notification.updated",
     * "gift_card_redemption.created", "gift_card_redemption.updated",
     * "gift_card_transaction.created", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.updated",
     * "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated",
     * "delivery_method.activated", "delivery_method.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.activated", "delivery_location_set.updated",
     * "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated",
     * "delivery_profile.activated", "delivery_profile.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.archived", "delivery_zone.created",
     * "delivery_zone.deactivated", "delivery_zone.activated", "delivery_zone.updated",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.credited",
     * "invoice.created", "invoice.issued", "invoice.issue_failed", "invoice.late_fee_due",
     * "invoice.late_fee_assessed", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed", "invoice.overdue",
     * "invoice.paid", "invoice_payment_attempt.processing", "invoice_payment_attempt.canceled",
     * "invoice_payment_attempt.expired", "invoice_payment_attempt.failed",
     * "invoice_payment_attempt.settled", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "inventory_reservation.action_required",
     * "inventory_count.applied", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_level.shortage_detected",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "merchant_billing_balance.updated", "merchant.readiness_updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "order.partially_refunded", "order.closed", "order.created", "fulfillment.completed",
     * "fulfillment.created", "fulfillment_event.created", "package.created", "package.updated",
     * "shipment.created", "shipment.updated", "fulfillment.updated",
     * "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.partially_paid", "order.paid", "order.refunded", "order.updated",
     * "payment_intent.expired", "payment_intent.updated", "payment_intent.created",
     * "payment_intent.canceled", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_link.created", "payment_link.updated",
     * "payment_method.archived", "payment_method.failed", "payment_method.activated",
     * "payout.canceled", "payout.created", "payout.failed", "payout.paid", "payout.reversed",
     * "payout.updated", "payout_destination.created", "payout_destination.archived",
     * "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated",
     * "refund.partially_succeeded", "refund.succeeded", "refund.created", "refund.failed",
     * "refund.updated", "report.failed", "report.succeeded", "return.canceled",
     * "return.completed", "return.created", "return.decision_recorded", "return.reopened",
     * "return.updated", "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "payment_review.closed", "payment_review.reopened", "payment_review.opened",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded",
     * "subscription_payment_retry.created", "subscription_payment_retry.succeeded",
     * "subscription_payment_retry.failed", "subscription.reactivated", "subscription.resumed",
     * "subscription.renewal_upcoming", "subscription.trial_ending", "subscription.plan_changed",
     * "subscription.updated", "subscription.delivery_action_required",
     * "subscription.delivery_pause_upcoming", "subscription.delivery_updated",
     * "subscription.cycle_skipped", "subscription_delivery_migration.completed".
     */
    "event_type": "customer_deletion_request.processing"
        | "customer_deletion_request.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.suppressed"
        | "fulfillment.canceled"
        | "fulfillment.failed"
        | "merchant.updated"
        | "product.created"
        | "product.updated"
        | "product.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "product_variant.archived"
        | "bundle.created"
        | "bundle.updated"
        | "bundle.archived"
        | "category.created"
        | "category.updated"
        | "category.deleted"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_group.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "modifier_set.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "promotion_code.archived"
        | "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "checkout_session.partially_paid"
        | "checkout_session.created"
        | "checkout_session.paid"
        | "checkout_session.closed"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "customer.created"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.rejected"
        | "customer_deletion_request.created"
        | "customer.updated"
        | "customer.deleted"
        | "custom_domain.updated"
        | "custom_domain.archived"
        | "dispute.created"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.inquiry_closed"
        | "dispute.won"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.updated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.activated"
        | "delivery_method.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.activated"
        | "delivery_location_set.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.activated"
        | "delivery_profile.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.activated"
        | "delivery_zone.updated"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.credited"
        | "invoice.created"
        | "invoice.issued"
        | "invoice.issue_failed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.settled"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "inventory_reservation.action_required"
        | "inventory_count.applied"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_level.shortage_detected"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "merchant_billing_balance.updated"
        | "merchant.readiness_updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "order.partially_refunded"
        | "order.closed"
        | "order.created"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment_event.created"
        | "package.created"
        | "package.updated"
        | "shipment.created"
        | "shipment.updated"
        | "fulfillment.updated"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.partially_paid"
        | "order.paid"
        | "order.refunded"
        | "order.updated"
        | "payment_intent.expired"
        | "payment_intent.updated"
        | "payment_intent.created"
        | "payment_intent.canceled"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_method.activated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.created"
        | "payout_destination.archived"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.created"
        | "refund.failed"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "payment_review.closed"
        | "payment_review.reopened"
        | "payment_review.opened"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.succeeded"
        | "subscription_payment_retry.failed"
        | "subscription.reactivated"
        | "subscription.resumed"
        | "subscription.renewal_upcoming"
        | "subscription.trial_ending"
        | "subscription.plan_changed"
        | "subscription.updated"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.cycle_skipped"
        | "subscription_delivery_migration.completed"
        | (string & {});
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /**
     * Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before
     * 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /**
     * Shape $ (Value): object or null. Shape $.id (Required): string. Shape $.idempotency_key
     * (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent
     * none.
     */
    "request": {
        /** Shape $ (Value): string. */
        "id": string;
        /**
         * Shape $ (Value): string. The Idempotency-Key the originating request sent. Absent when
         * it sent none.
         */
        "idempotency_key"?: string;
    }
        | null;
    /**
     * Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint,
     * false otherwise.
     */
    "test": boolean;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
export type MerchantsGetInput = {
    /**
     * Shape $ (Value): Array of string. [] enum: "organization". Shape $[] (Value): string. Value
     * enum: "organization".
     */
    "expand"?: InputValue<Array<"organization">>;
};
export type MerchantsUpdateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateMerchantRequestInput}. The request body for: Update merchant.
     */
    "body": InputValue<UpdateMerchantRequestInput>;
};
/** Shape $ (Value): {@link Modifier}. A purchasable customization choice. */
export type Modifier = {
    /**
     * Shape $ (Value): string. When the modifier was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Identifier of the group that owns this modifier. For an inline
     * group, read the group through its modifier set.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier. In a replacement request,
     * include it to retain a modifier or omit it to create one.
     */
    "modifier_id": string;
    /** Shape $ (Value): string. Name of the choice shown to buyers. */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position": number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default.
     */
    "selected_by_default": boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment": boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt": boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount added to the item's unit price for each unit of
     * this modifier. A modifier set can override this value. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. When the modifier last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
};
/** Shape $ (Value): {@link ModifierGroup}. A group of choices that customize an item. */
export type ModifierGroup = {
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     */
    "allow_quantities": boolean;
    /**
     * Shape $ (Value): string. When the modifier group was created, as an RFC3339 timestamp.
     * Format: date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
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
    /** Shape $ (Value): string. Identifier of the merchant that owns this modifier group. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string.
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
     * `/v1/modifier-groups` doesn't return it.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On
     * create, inferred as text when text configuration is supplied, otherwise list. Value enum:
     * "list", "text".
     */
    "modifier_group_type": "list" | "text" | (string & {});
    /**
     * Shape $ (Value): Array of {@link Modifier}. Choices in a list group. Only active modifiers
     * whose set override's available is not false are offered to buyers. Text groups do not have
     * choices. Shape $[] (Value): {@link Modifier}. A purchasable customization choice.
     */
    "modifiers": Array<Modifier>;
    /** Shape $ (Value): string. Name of the modifier group shown to buyers. */
    "name": string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment": boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt": boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): {@link TextModifierConfig}. Text entry rules for a text group. Use
     * text.required to require a value; list groups use min_selected instead. Settings for a text
     * modifier group: whether input is required or multiline, and its length limits.
     */
    "text"?: TextModifierConfig;
    /**
     * Shape $ (Value): string. When the modifier group or its modifiers last changed, as an
     * RFC3339 timestamp. Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Version of the modifier group and its modifiers. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ModifierGroupListResponse}. A page of `ModifierGroup` objects. */
export type ModifierGroupListResponse = {
    /**
     * Shape $ (Value): Array of {@link ModifierGroup}. Modifier groups matching the request
     * filters for this page. Shape $[] (Value): {@link ModifierGroup}. A group of choices that
     * customize an item.
     */
    "data": Array<ModifierGroup>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Response metadata, including API version, trace
     * identifier, and warnings when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Pass this token as page_token to read the next page with the same
     * filters. Absent when there are no more results.
     */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting Flint
     * support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link ModifierGroupResponse}. A response containing `ModifierGroup` data. */
export type ModifierGroupResponse = {
    /**
     * Shape $ (Value): {@link ModifierGroup}. The modifier group returned by this operation. A
     * group of choices that customize an item.
     */
    "data": ModifierGroup;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Response metadata, including API version, trace
     * identifier, and warnings when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting Flint
     * support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type ModifierGroupsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequestInput}. The request body for: Create
     * modifier group.
     */
    "body": InputValue<CreateModifierGroupRequestInput>;
};
export type ModifierGroupsGetInput = {
    /** Shape $ (Value): string. */
    "modifier_group_id": InputValue<string>;
};
export type ModifierGroupsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "list", "text". Shape $[] (Value):
     * string. Value enum: "list", "text".
     */
    "modifier_group_type"?: InputValue<Array<"list" | "text">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at". */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type ModifierGroupsRemoveInput = {
    /** Shape $ (Value): string. */
    "modifier_group_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ModifierGroupsUpdateInput = {
    /** Shape $ (Value): string. */
    "modifier_group_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateModifierGroupRequestInput}. The request body for: Update
     * modifier group.
     */
    "body": InputValue<UpdateModifierGroupRequestInput>;
};
/**
 * Shape $ (Value): {@link ModifierOverride}. Settings for one modifier that apply only within a
 * modifier set group, overriding the modifier group's own values.
 */
export type ModifierOverride = {
    /**
     * Shape $ (Value): boolean. Whether this modifier can be offered in this set. Defaults to
     * true; the modifier must also have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Shape $ (Value): integer string. Overrides the modifier's default_quantity for this set.
     * Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are
     * whole numbers; fractional quantities are not supported. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Overrides the modifier's line_item_tax_category for this set. Omit
     * it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): string. Identifier of the list modifier these overrides apply to.
     * minLength: 1.
     */
    "modifier_id": string;
    /**
     * Shape $ (Value): boolean. Overrides the modifier's selected_by_default for this set. Omit it
     * to use the modifier's value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the modifier's taxable for this set. Omit it to use the
     * modifier's value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Overrides the modifier's unit_price_delta_money for
     * this set. Omit it to use the modifier's value. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link ModifierOverrideInput}. Settings for one modifier that apply only within
 * a modifier set group, overriding the modifier group's own values.
 */
export type ModifierOverrideInput = {
    /**
     * Shape $ (Value): boolean. Whether this modifier can be offered in this set. Defaults to
     * true; the modifier must also have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Shape $ (Value): integer string. Overrides the modifier's default_quantity for this set.
     * Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are
     * whole numbers; fractional quantities are not supported. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Overrides the modifier's line_item_tax_category for this set. Omit
     * it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Shape $ (Value): string. Identifier of the list modifier these overrides apply to.
     * minLength: 1.
     */
    "modifier_id": string;
    /**
     * Shape $ (Value): boolean. Overrides the modifier's selected_by_default for this set. Omit it
     * to use the modifier's value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the modifier's taxable for this set. Omit it to use the
     * modifier's value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Overrides the modifier's unit_price_delta_money
     * for this set. Omit it to use the modifier's value. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/**
 * Shape $ (Value): {@link ModifierRequest}. A modifier you supply when creating or updating a
 * modifier group, such as an add-on with a price change.
 */
export type ModifierRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier. In a replacement request,
     * include it to retain a modifier or omit it to create one. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): string. Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. Default: false.
     */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount added to the item's unit price for each unit of
     * this modifier. A modifier set can override this value. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link ModifierRequestInput}. A modifier you supply when creating or updating a
 * modifier group, such as an add-on with a price change.
 */
export type ModifierRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier. In a replacement request,
     * include it to retain a modifier or omit it to create one. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): string. Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. Default: false.
     */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount added to the item's unit price for each
     * unit of this modifier. A modifier set can override this value. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/** Shape $ (Value): {@link ModifierSet}. A reusable collection of customization groups. */
export type ModifierSet = {
    /**
     * Shape $ (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. Identifier of the merchant that owns this modifier set. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link ModifierSetGroup}. Ordered group entries in this set,
     * including references to reusable groups and groups owned by the set. Shape $[] (Value):
     * {@link ModifierSetGroup}. A modifier group as it appears in a modifier set, with its
     * selection limits, display options, and per-modifier overrides.
     */
    "modifier_groups": Array<ModifierSetGroup>;
    /** Shape $ (Value): string. Stable identifier of the modifier set assigned to catalog items. */
    "modifier_set_id": string;
    /** Shape $ (Value): string. Name used to identify this modifier set. */
    "name": string;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. When the modifier set, its group entries, or its inline groups last
     * changed, as an RFC3339 timestamp. Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Version of the modifier set, its group entries, and its
     * inline groups. Send it as expected_version when replacing modifier_groups. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ModifierSetGroup}. A modifier group as it appears in a modifier set,
 * with its selection limits, display options, and per-modifier overrides.
 */
export type ModifierSetGroup = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link ModifierGroup}. Modifier group owned by this set when source is
     * inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups
     * doesn't return it. A group of choices that customize an item.
     */
    "modifier_group"?: ModifierGroup;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing.
     */
    "modifier_group_id"?: string;
    /** Shape $ (Value): string. Current name of the referenced modifier group. */
    "modifier_group_name"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position": number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Inline groups are owned by this modifier set. Existing groups are
     * independent resources referenced by this set. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<ModifierSetGroupExisting & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ModifierSetGroupExisting}. The `existing` variant of `ModifierSetGroup`.
 */
export type ModifierSetGroupExisting = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link ModifierGroup}. Modifier group owned by this set when source is
     * inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups
     * doesn't return it. A group of choices that customize an item.
     */
    "modifier_group"?: ModifierGroup;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing.
     */
    "modifier_group_id": string;
    /** Shape $ (Value): string. Current name of the referenced modifier group. */
    "modifier_group_name": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position": number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Inline groups are owned by this modifier set. Existing groups are
     * independent resources referenced by this set. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing.
     */
    "modifier_group_id": string;
    /** Shape $ (Value): string. Current name of the referenced modifier group. */
    "modifier_group_name": string;
}));
/** Shape $ (Value): {@link ModifierSetGroupInline}. The `inline` variant of `ModifierSetGroup`. */
export type ModifierSetGroupInline = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link ModifierGroup}. Modifier group owned by this set when source is
     * inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups
     * doesn't return it. A group of choices that customize an item.
     */
    "modifier_group": ModifierGroup;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing.
     */
    "modifier_group_id"?: string;
    /** Shape $ (Value): string. Current name of the referenced modifier group. */
    "modifier_group_name"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one.
     */
    "modifier_set_group_id": string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position": number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Inline groups are owned by this modifier set. Existing groups are
     * independent resources referenced by this set. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline" | (string & {});
    /**
     * Shape $ (Value): {@link ModifierGroup}. Modifier group owned by this set when source is
     * inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups
     * doesn't return it. A group of choices that customize an item.
     */
    "modifier_group": ModifierGroup;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupInputExisting}. The `existing` variant of
 * `ModifierSetGroupInput`.
 */
export type ModifierSetGroupInputExisting = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupInputExistingInput}. The `existing` variant of
 * `ModifierSetGroupInput`.
 */
export type ModifierSetGroupInputExistingInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequestInput}. Modifier group owned by this set
     * when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing";
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupInputInline}. The `inline` variant of
 * `ModifierSetGroupInput`.
 */
export type ModifierSetGroupInputInline = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline" | (string & {});
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupInputInlineInput}. The `inline` variant of
 * `ModifierSetGroupInput`.
 */
export type ModifierSetGroupInputInlineInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequestInput}. Modifier group owned by this set
     * when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline";
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequestInput}. Modifier group owned by this set
     * when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
/**
 * Shape $ (Value): {@link ModifierSetGroupRequest}. A modifier group you add to a modifier set,
 * either an existing group by ID or a new inline group, with selection limits and overrides.
 */
export type ModifierSetGroupRequest = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<ModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ModifierSetGroupRequestInput}. A modifier group you add to a modifier
 * set, either an existing group by ID or a new inline group, with selection limits and overrides.
 */
export type ModifierSetGroupRequestInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link InlineModifierGroupRequestInput}. Modifier group owned by this set
     * when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a
     * modifier set, with its name, rules for how many options can be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): string. Stable identifier of this group entry within the set. In a
     * replacement request, include it to retain an entry or omit it to create one. minLength: 1.
     */
    "modifier_set_group_id"?: string;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<ModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link ModifierSetListResponse}. A page of `ModifierSet` objects. */
export type ModifierSetListResponse = {
    /**
     * Shape $ (Value): Array of {@link ModifierSet}. Modifier sets matching the request filters
     * for this page. Shape $[] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups.
     */
    "data": Array<ModifierSet>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Response metadata, including API version, trace
     * identifier, and warnings when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Pass this token as page_token to read the next page with the same
     * filters. Absent when there are no more results.
     */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting Flint
     * support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link ModifierSetResponse}. A response containing `ModifierSet` data. */
export type ModifierSetResponse = {
    /**
     * Shape $ (Value): {@link ModifierSet}. The modifier set returned by this operation. A
     * reusable collection of customization groups.
     */
    "data": ModifierSet;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Response metadata, including API version, trace
     * identifier, and warnings when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting Flint
     * support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type ModifierSetsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateModifierSetRequestInput}. The request body for: Create
     * modifier set.
     */
    "body": InputValue<CreateModifierSetRequestInput>;
};
export type ModifierSetsGetInput = {
    /** Shape $ (Value): string. */
    "modifier_set_id": InputValue<string>;
};
export type ModifierSetsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at". */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type ModifierSetsRemoveInput = {
    /** Shape $ (Value): string. */
    "modifier_set_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ModifierSetsUpdateInput = {
    /** Shape $ (Value): string. */
    "modifier_set_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateModifierSetRequestInput}. The request body for: Update
     * modifier set.
     */
    "body": InputValue<UpdateModifierSetRequestInput>;
};
/**
 * Shape $ (Value): {@link MoneyMovementBlockedReason}. Why a money movement action is blocked,
 * with an error code, a message, next steps, and who can resolve it.
 */
export type MoneyMovementBlockedReason = {
    /** Shape $ (Value): string. */
    "code": string;
    /** Shape $ (Value): string. */
    "message"?: string;
    /** Shape $ (Value): string. */
    "next_steps"?: string;
    /** Shape $ (Value): string. */
    "param"?: string;
    /** Shape $ (Value): string.  Value enum: "merchant", "flint", "integrator", "buyer". */
    "resolution_owner"?: "merchant" | "flint" | "integrator" | "buyer" | (string & {});
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
};
/**
 * Shape $ (Value): {@link MoneyMovementHistoryMeta}. How complete the history in a money movement
 * list is, with the earliest available and latest reconciled times.
 */
export type MoneyMovementHistoryMeta = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "earliest_available_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "latest_reconciled_at"?: string;
    /** Shape $ (Value): string.  Value enum: "backfilling", "partial", "unavailable". */
    "status": "backfilling" | "partial" | "unavailable" | (string & {});
};
/**
 * Shape $ (Value): {@link MoneyMovementListMeta}. Response metadata for money movement lists,
 * including request and trace IDs, warnings, and the state of the available history.
 */
export type MoneyMovementListMeta = {
    /** Shape $ (Value): string. */
    "api_version"?: string;
    /**
     * Shape $ (Value): {@link MoneyMovementHistoryMeta}. How complete the history in a money
     * movement list is, with the earliest available and latest reconciled times.
     */
    "history"?: MoneyMovementHistoryMeta;
    /** Shape $ (Value): boolean. */
    "idempotency_replayed"?: boolean;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** Shape $ (Value): string. */
    "trace_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ResponseWarning}. Shape $[] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/**
 * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
 * ISO 4217 currency code.
 */
export type MoneyValue = {
    /**
     * Shape $ (Value): integer string. Amount in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "amount": `${bigint}`;
    /**
     * Shape $ (Value): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "currency": string;
};
/**
 * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
 * plus an ISO 4217 currency code.
 */
export type MoneyValueInput = {
    /**
     * Shape $ (Value): integer string. Amount in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "amount": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "currency": string;
};
/**
 * Shape $ (Value): {@link NextAction}. A suggested next step for resolving an error, warning, or
 * blocked state, such as the API operation to call or the scope it needs.
 */
export type NextAction = {
    /**
     * Shape $ (Value): string. Action to take next. Use its target resource and required_fields to
     * prepare the request. Value enum: "get_operation", "get_checkout_session",
     * "get_payment_intent", "confirm_payment_intent", "capture_payment_intent",
     * "cancel_payment_intent", "get_order", "capture_order_payment", "cancel_order_payment",
     * "pay_order", "close_order", "add_line_items", "update_checkout_session",
     * "close_checkout_session", "create_refund", "get_refund", "get_dispute",
     * "review_onboarding_state", "review_merchant_readiness", "recreate_delivery_quote",
     * "create_merchant_account_session", "issue_developer_sandbox_test_key",
     * "start_new_image_ingestion", "get_payout_settings", "payment_authentication",
     * "complete_gift_card_challenge".
     */
    "action_type": "get_operation"
        | "get_checkout_session"
        | "get_payment_intent"
        | "confirm_payment_intent"
        | "capture_payment_intent"
        | "cancel_payment_intent"
        | "get_order"
        | "capture_order_payment"
        | "cancel_order_payment"
        | "pay_order"
        | "close_order"
        | "add_line_items"
        | "update_checkout_session"
        | "close_checkout_session"
        | "create_refund"
        | "get_refund"
        | "get_dispute"
        | "review_onboarding_state"
        | "review_merchant_readiness"
        | "recreate_delivery_quote"
        | "create_merchant_account_session"
        | "issue_developer_sandbox_test_key"
        | "start_new_image_ingestion"
        | "get_payout_settings"
        | "payment_authentication"
        | "complete_gift_card_challenge"
        | (string & {});
    /**
     * Shape $ (Value): string. When this suggested action expires, in RFC3339 format. Format:
     * date-time.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): {@link NextActionMerchantAccountSession}. Request body fields to send to
     * POST /v1/merchant-account-sessions when action_type is create_merchant_account_session.
     * Recommended request body fields for creating a merchant account session when a next action
     * is `create_merchant_account_session`.
     */
    "merchant_account_session"?: NextActionMerchantAccountSession;
    /** Shape $ (Value): string. Machine-readable reason this action is suggested. */
    "reason_code"?: string;
    /** Shape $ (Value): string. Explanation of why this action is suggested. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): Array of string. Field names that must be supplied to perform this action.
     * Shape $[] (Value): string.
     */
    "required_fields"?: Array<string>;
    /**
     * Shape $ (Value): string. API key scope required to call the public endpoint in url, when the
     * action points at another Flint API endpoint. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "required_scope"?: "accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.inventory_locations.write"
        | "commerce.inventory_policies.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.return_policies.write"
        | "commerce.return_reasons.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.read"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.payment_options.read"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {});
    /**
     * Shape $ (Value): boolean. Whether a person must approve the action before it is performed.
     */
    "requires_human_confirmation"?: boolean;
    /**
     * Shape $ (Value): integer. Suggested wait before performing the action, in milliseconds.
     * Format: int32.
     */
    "suggested_delay_milliseconds"?: number;
    /**
     * Shape $ (Value): string. Public endpoint or launch URL for this remediation action, when
     * applicable.
     */
    "url"?: string;
};
/**
 * Shape $ (Value): {@link NextActionMerchantAccountSession}. Recommended request body fields for
 * creating a merchant account session when a next action is `create_merchant_account_session`.
 */
export type NextActionMerchantAccountSession = {
    /**
     * Shape $ (Value): string. Recommended verification collection breadth. Value enum: "upfront",
     * "incremental".
     */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /**
     * Shape $ (Value): string. Resolver-recommended component to send to POST
     * /v1/merchant-account-sessions. Value enum: "account_onboarding", "account_management",
     * "payouts", "balances", "tax_documents", "notification_banner".
     */
    "component": "account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {});
    /**
     * Shape $ (Value): string. Recommended future-requirement collection behavior. Value enum:
     * "omit", "include".
     */
    "future_requirements"?: "omit" | "include" | (string & {});
};
export type OauthAuthorizePartnerInstallInput = {
    /** Shape $ (Value): string.  Value enum: "code". */
    "response_type": InputValue<"code">;
    /** Shape $ (Value): string. */
    "client_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "redirect_uri": InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": InputValue<"test" | "live">;
    /** Shape $ (Value): string. */
    "code_challenge": InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "S256". */
    "code_challenge_method": InputValue<"S256">;
    /** Shape $ (Value): string. */
    "scope"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "sandbox_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "merchant_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "state": InputValue<string>;
};
export type OauthAuthorizePartnerInstallResponse = {
    location?: string;
};
export type OauthPreviewPartnerInstallAuthorizationInput = {
    /** Shape $ (Value): string.  Value enum: "code". */
    "response_type"?: InputValue<"code">;
    /** Shape $ (Value): string. */
    "client_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "redirect_uri": InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": InputValue<"test" | "live">;
    /** Shape $ (Value): string. */
    "code_challenge"?: InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "S256". */
    "code_challenge_method"?: InputValue<"S256">;
    /** Shape $ (Value): string. */
    "scope"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "sandbox_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "state"?: InputValue<string>;
};
export type OnboardingAdvanceInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link OnboardingAdvanceRequestInput}. The request body for: Advance
     * onboarding flow.
     */
    "body": InputValue<OnboardingAdvanceRequestInput>;
};
/**
 * Shape $ (Value): {@link OnboardingAdvanceRequest}. The request body for: Advance onboarding
 * flow.
 */
export type OnboardingAdvanceRequest = {
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * Shape $ (Value): {@link OnboardingProfileRequest}. Contact and website details you submit
     * for a merchant during onboarding. Send null to clear a field.
     */
    "profile"?: OnboardingProfileRequest;
    /**
     * Shape $ (Value): Array of string. Exact initial Flint capability set. Include
     * accept_card_payments and receive_payouts together. Optionally include
     * accept_ach_debit_payments, or omit the field to use the card and payout default set. []
     * enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". Shape
     * $.oneOf[1] (Value): Array of string. minItems: 2. maxItems: 2. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts". Shape $.oneOf[1][] (Value): string. Value enum:
     * "accept_card_payments", "receive_payouts". Shape $.oneOf[2] (Value): Array of string.
     * minItems: 3. maxItems: 3. uniqueItems: true. [] enum: "accept_ach_debit_payments",
     * "accept_card_payments", "receive_payouts". Shape $.oneOf[2][] (Value): string. Value enum:
     * "accept_ach_debit_payments", "accept_card_payments", "receive_payouts".
     */
    "requested_capabilities"?: ((Array<"accept_card_payments" | "receive_payouts" | (string & {})>)
        | (Array<"accept_ach_debit_payments" | "accept_card_payments" | "receive_payouts" | (string & {})>)
        | (unknown));
    /** Shape $ (Value): string. minLength: 1. */
    "sandbox_id"?: string;
};
/**
 * Shape $ (Value): {@link OnboardingAdvanceRequestInput}. The request body for: Advance onboarding
 * flow.
 */
export type OnboardingAdvanceRequestInput = {
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US";
    /**
     * Shape $ (Value): {@link OnboardingProfileRequestInput}. Contact and website details you
     * submit for a merchant during onboarding. Send null to clear a field.
     */
    "profile"?: OnboardingProfileRequestInput;
    /**
     * Shape $ (Value): Array of string. Exact initial Flint capability set. Include
     * accept_card_payments and receive_payouts together. Optionally include
     * accept_ach_debit_payments, or omit the field to use the card and payout default set. []
     * enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". Shape
     * $.oneOf[1] (Value): Array of string. minItems: 2. maxItems: 2. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts". Shape $.oneOf[1][] (Value): string. Value enum:
     * "accept_card_payments", "receive_payouts". Shape $.oneOf[2] (Value): Array of string.
     * minItems: 3. maxItems: 3. uniqueItems: true. [] enum: "accept_ach_debit_payments",
     * "accept_card_payments", "receive_payouts". Shape $.oneOf[2][] (Value): string. Value enum:
     * "accept_ach_debit_payments", "accept_card_payments", "receive_payouts".
     */
    "requested_capabilities"?: ((Array<"accept_card_payments" | "receive_payouts">)
        | (Array<"accept_ach_debit_payments" | "accept_card_payments" | "receive_payouts">));
    /** Shape $ (Value): string. minLength: 1. */
    "sandbox_id"?: string;
};
export type OnboardingCreateAPIKeyInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link DeveloperInitialAPIKeyRequestInput}. The request body for: Create
     * onboarding API key.
     */
    "body": InputValue<DeveloperInitialAPIKeyRequestInput>;
};
export type OnboardingGetStateInput = {
    /** Shape $ (Value): string. */
    "sandbox_id"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link OnboardingLaunchRecommendedPolicy}. The recommended collection strategy
 * and future-requirement behavior for launching embedded onboarding.
 */
export type OnboardingLaunchRecommendedPolicy = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy": "upfront" | "incremental" | (string & {});
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements": "omit" | "include" | (string & {});
};
/**
 * Shape $ (Value): {@link OnboardingLaunchReference}. How to launch the embedded onboarding
 * component: the endpoint and method to call, and the recommended policy to send.
 */
export type OnboardingLaunchReference = {
    /** Shape $ (Value): string.  Value enum: "account_onboarding". */
    "component": "account_onboarding" | (string & {});
    /**
     * Shape $ (Value): string. Endpoint for creating the browser session. Uses the same public API
     * base URL as submit_endpoint: absolute when configured, relative otherwise.
     */
    "endpoint": string;
    /** Shape $ (Value): string.  Value enum: "POST". */
    "method": "POST" | (string & {});
    /**
     * Shape $ (Value): {@link OnboardingLaunchRecommendedPolicy}. The recommended collection
     * strategy and future-requirement behavior for launching embedded onboarding.
     */
    "recommended_policy": OnboardingLaunchRecommendedPolicy;
    /** Shape $ (Value): string. */
    "sandbox_id"?: string;
};
/**
 * Shape $ (Value): {@link OnboardingNextStep}. The next step to move onboarding forward, with who
 * owns it, whether a machine can complete it, and the endpoint to submit to.
 */
export type OnboardingNextStep = {
    /**
     * Shape $ (Value): string. Value enum: "check_onboarding_state", "start_onboarding",
     * "complete_business_profile", "complete_verification_step", "wait_for_review",
     * "create_api_key".
     */
    "code": "check_onboarding_state"
        | "start_onboarding"
        | "complete_business_profile"
        | "complete_verification_step"
        | "wait_for_review"
        | "create_api_key"
        | (string & {});
    /**
     * Shape $ (Value): {@link OnboardingLaunchReference}. How to launch the embedded onboarding
     * component: the endpoint and method to call, and the recommended policy to send.
     */
    "launch"?: OnboardingLaunchReference;
    /** Shape $ (Value): boolean. */
    "machine_completable": boolean;
    /** Shape $ (Value): string.  Value enum: "agent", "human", "system". */
    "owner": "agent" | "human" | "system" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "required_fields"?: Array<string>;
    /** Shape $ (Value): string. */
    "submit_endpoint"?: string;
    /** Shape $ (Value): string. HTTP method for submit_endpoint. */
    "submit_method"?: string;
};
/**
 * Shape $ (Value): {@link OnboardingProfile}. Contact and website details recorded for a merchant
 * during onboarding.
 */
export type OnboardingProfile = {
    /** Shape $ (Value): string or null. */
    "email": string | null;
    /** Shape $ (Value): string. */
    "support_email"?: string;
    /** Shape $ (Value): string. */
    "support_phone"?: string;
    /** Shape $ (Value): string. */
    "support_url"?: string;
    /** Shape $ (Value): string. */
    "website_url"?: string;
};
/**
 * Shape $ (Value): {@link OnboardingProfileRequest}. Contact and website details you submit for a
 * merchant during onboarding. Send null to clear a field.
 */
export type OnboardingProfileRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "email"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_email"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_phone"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_url"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "website_url"?: string | null;
};
/**
 * Shape $ (Value): {@link OnboardingProfileRequestInput}. Contact and website details you submit
 * for a merchant during onboarding. Send null to clear a field.
 */
export type OnboardingProfileRequestInput = OnboardingProfileRequest;
export type OnboardingStartFlowInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link OnboardingStartRequestInput}. The request body for: Start onboarding
     * flow.
     */
    "body": InputValue<OnboardingStartRequestInput>;
};
/** Shape $ (Value): {@link OnboardingStartRequest}. The request body for: Start onboarding flow. */
export type OnboardingStartRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "email": string;
    /** Shape $ (Value): string. minLength: 1. */
    "first_name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "last_name": string;
};
/**
 * Shape $ (Value): {@link OnboardingStartRequestInput}. The request body for: Start onboarding
 * flow.
 */
export type OnboardingStartRequestInput = OnboardingStartRequest;
/**
 * Shape $ (Value): {@link OnboardingStartResponse}. A response containing `OnboardingStartResult`
 * data.
 */
export type OnboardingStartResponse = {
    /**
     * Shape $ (Value): {@link OnboardingStartResult}. The result of starting onboarding: whether
     * email verification began, plus the verification token and its expiry.
     */
    "data": OnboardingStartResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link OnboardingStartResult}. The result of starting onboarding: whether email
 * verification began, plus the verification token and its expiry.
 */
export type OnboardingStartResult = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /** Shape $ (Value): boolean. */
    "verification_started": boolean;
    /** Shape $ (Value): string. */
    "verification_token": string;
};
/**
 * Shape $ (Value): {@link OnboardingState}. A merchant's onboarding status, profile, next step,
 * requested capabilities, and whether an API key can be issued.
 */
export type OnboardingState = {
    /** Shape $ (Value): boolean. */
    "can_issue_api_key": boolean;
    /**
     * Shape $ (Value): string. Immutable business country for the selected stable provider-account
     * target. Omitted until the target has selected an effective country. minLength: 2. maxLength:
     * 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /** Shape $ (Value): string. */
    "default_sandbox_id"?: string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link OnboardingNextStep}. The next step to move onboarding forward, with
     * who owns it, whether a machine can complete it, and the endpoint to submit to.
     */
    "next_step"?: OnboardingNextStep;
    /**
     * Shape $ (Value): {@link OnboardingProfile}. Contact and website details recorded for a
     * merchant during onboarding.
     */
    "profile": OnboardingProfile;
    /**
     * Shape $ (Value): Array of string. Canonical Flint capability intent persisted on the
     * selected stable provider-account target. The initial merchant-account configuration always
     * includes accept_card_payments and receive_payouts and may also include
     * accept_ach_debit_payments. [] enum: "accept_card_payments", "receive_payouts",
     * "accept_ach_debit_payments". Shape $.oneOf[1] (Value): Array of string. minItems: 2.
     * maxItems: 2. uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts". Shape
     * $.oneOf[1][] (Value): string. Value enum: "accept_card_payments", "receive_payouts". Shape
     * $.oneOf[2] (Value): Array of string. minItems: 3. maxItems: 3. uniqueItems: true. [] enum:
     * "accept_ach_debit_payments", "accept_card_payments", "receive_payouts". Shape $.oneOf[2][]
     * (Value): string. Value enum: "accept_ach_debit_payments", "accept_card_payments",
     * "receive_payouts".
     */
    "requested_capabilities"?: ((Array<"accept_card_payments" | "receive_payouts" | (string & {})>)
        | (Array<"accept_ach_debit_payments" | "accept_card_payments" | "receive_payouts" | (string & {})>)
        | (unknown));
    /**
     * Shape $ (Value): string. Onboarding workflow status for activation and remediation, not a
     * durable account-readiness boolean. Value enum: "complete", "waiting_for_review",
     * "needs_external_action", "needs_input".
     */
    "status": "complete" | "waiting_for_review" | "needs_external_action" | "needs_input" | (string & {});
};
/**
 * Shape $ (Value): {@link OnboardingStateResponse}. A response containing `OnboardingState` data.
 */
export type OnboardingStateResponse = {
    /**
     * Shape $ (Value): {@link OnboardingState}. A merchant's onboarding status, profile, next
     * step, requested capabilities, and whether an API key can be issued.
     */
    "data": OnboardingState;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type OnboardingVerifyEmailCodeInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link OnboardingVerifyEmailRequestInput}. The request body for: Verify
     * onboarding email.
     */
    "body": InputValue<OnboardingVerifyEmailRequestInput>;
};
