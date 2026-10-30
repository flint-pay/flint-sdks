import type { PartnerWebhookEnvelope, PaymentIntent, PaymentCollection } from './types-40.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { ResponseMeta } from './types-48.js';
import type { PendingPaymentAction } from './types-43.js';
import type { InputValue } from '../runtime.js';
import type { CancelPaymentIntentRequestInput } from './types-3.js';
import type {
    CapturePaymentIntentRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects
} from './types-4.js';
import type { ConfirmPaymentIntentRequestInput } from './types-6.js';
import type { CreatePaymentIntentRequestInput } from './types-9.js';
import type { OrdersCreatePaymentIntentResponse } from './types-38.js';
import type { SendPaymentIntentReceiptRequestInput, SelectedProductOption } from './types-53.js';
import type { UpdatePaymentIntentRequestInput } from './types-59.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { CheckoutTaxConfig, CheckoutTipConfig } from './types-5.js';
import type { ExpandedSubscriptionPlanSummary } from './types-21.js';
import type { ImageAttachment, Image } from './types-25.js';
import type { InventoryRoutingSource } from './types-27.js';
import type { LegalSettings } from './types-32.js';
import type { PaymentLinkSalesSummary, PaymentLinkLineItemVariant } from './types-42.js';
import type { ThemeConfig } from './types-57.js';
import type { PublicResolvedModifierGroup } from './types-46.js';
import type { OrderLineItemTax, OrderLineItemTaxInput } from './types-37.js';
import type { ProductPriceRange } from './types-44.js';
/**
 * The `payment_intent.requires_action` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentRequiresActionInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.requires_action". */
    "event_type"?: "payment_intent.requires_action";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_intent.requires_action` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentRequiresActionMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.requires_action". */
    "event_type"?: "payment_intent.requires_action";
});
export type PaymentIntentRequiresCaptureEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_capture";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_capture";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "payment_intent.requires_capture";
});
/**
 * The `payment_intent.requires_capture` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type PaymentIntentRequiresCaptureInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.requires_capture". */
    "event_type"?: "payment_intent.requires_capture";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_intent.requires_capture` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentRequiresCaptureMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.requires_capture". */
    "event_type"?: "payment_intent.requires_capture";
});
/** A response containing `PaymentIntent` data. */
export type PaymentIntentResponse = {
    /**
     * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
     * requested. Once the payment is authorized, authorized_money equals amount_money and splits
     * into captured_money (collected), capturable_money (still on hold), and released_money
     * (returned without being charged), so authorized_money always equals the sum of those three.
     * Reconcile revenue from captured_money.
     */
    "data": PaymentIntent;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentIntentSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "payment_intent.succeeded";
});
/**
 * The `payment_intent.succeeded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.succeeded". */
    "event_type"?: "payment_intent.succeeded";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_intent.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.succeeded". */
    "event_type"?: "payment_intent.succeeded";
});
export type PaymentIntentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "payment_intent.updated";
});
/**
 * The `payment_intent.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_intent.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated";
});
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money and splits into
 * captured_money (collected), capturable_money (still on hold), and released_money (returned
 * without being charged), so authorized_money always equals the sum of those three. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntentWithAction = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Typed browser authority for the current standalone payment action. Complete it, then call
     * the same confirm endpoint with credential_type attached. Null when no buyer action is needed
     * or Flint cannot produce the action yet. If status is requires_action and this is null, call
     * confirm again with credential_type attached. anyOf[1] (Value): {@link PendingPaymentAction}.
     * Client-side action required before continuing a payment. Resume an order through PayOrder
     * with order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm
     * endpoint without a replacement credential. anyOf[2] (Value): null.
     */
    "current_payment_action": ((PendingPaymentAction) | (null));
});
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money and splits into
 * captured_money (collected), capturable_money (still on hold), and released_money (returned
 * without being charged), so authorized_money always equals the sum of those three. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntentWithCollection = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Setup details your client uses to collect the buyer's payment details. Required on both
     * standalone and order-owned creates. On GET, returned only for a standalone intent in
     * requires_payment_method or requires_confirmation, and omitted for an intent owned by a
     * checkout session when read with merchant credentials. Order-owned intents never include it
     * on GET; use Order.payment_collection, whose selectable_payment_intents lists the staged
     * payments. Client-side details for collecting payment from the buyer, such as the Stripe
     * settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
});
/** A response containing `PaymentIntentWithCollection` data. */
export type PaymentIntentWithCollectionResponse = {
    /**
     * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
     * requested. Once the payment is authorized, authorized_money equals amount_money and splits
     * into captured_money (collected), capturable_money (still on hold), and released_money
     * (returned without being charged), so authorized_money always equals the sum of those three.
     * Reconcile revenue from captured_money.
     */
    "data": PaymentIntentWithCollection;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentIntentsCancelParams = (InputValue<CancelPaymentIntentRequestInput>);
export type PaymentIntentsCaptureParams = (InputValue<CapturePaymentIntentRequestInput>);
export type PaymentIntentsConfirmParams = (ConfirmPaymentIntentRequestInput)
    & {
    /**
     * An optional stable random device identifier, independent of the payment intent. Keep it for
     * subsequent payments from the same device; it grants no access. pattern: ^[a-f0-9]{32}$.
     */
    "Flint-Buyer-Device"?: InputValue<string>;
};
export type PaymentIntentsCreateParams = (InputValue<CreatePaymentIntentRequestInput>);
export type PaymentIntentsCreateResponse = OrdersCreatePaymentIntentResponse;
export type PaymentIntentsGetParams = {
    /**
     * Supported expansions: customer, invoice, order. Expansion requires
     * payments.payment_intents.read plus the read scope for each expanded resource. Limits: at
     * most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer",
     * "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1] (Value): Array of
     * string. [] enum: "customer", "invoice", "order". anyOf[1][] (Value): string. Value enum:
     * "customer", "invoice", "order". anyOf[2] (Value): string. Value enum: "customer", "invoice",
     * "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
};
export type PaymentIntentsListActivitiesParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity type. Repeat the parameter or pass comma-separated values to OR multiple
     * types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent". Value enum: "created",
     * "updated", "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "created", "updated", "status_changed", "failed",
     * "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed",
     * "receipt_sent". anyOf[1][] (Value): string. Value enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent". anyOf[2] (Value): string.
     * Value enum: "created", "updated", "status_changed", "failed", "canceled", "expired",
     * "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent".
     */
    "activity_type"?: InputValue<("created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent")
        | readonly ("created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent")[]>;
};
export type PaymentIntentsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Filter by customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /** Filter by invoice ID. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by whether the merchant must capture the payment or respond to a dispute. A dispute
     * requires action when its status is needs_response or inquiry_needs_response, evidence
     * responses are allowed, and its deadline is absent or has not passed. Omit to include both
     * groups.
     */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Filter by payment intent status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[1][] (Value):
     * string. Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[2] (Value):
     * string. Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired".
     */
    "status"?: InputValue<("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired")
        | readonly ("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired")[]>;
    /**
     * Filter by the latest completed risk assessment. Repeat or comma-separate values. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "normal", "elevated", "highest", "not_assessed". Value
     * enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "normal", "elevated", "highest", "not_assessed". anyOf[1][] (Value):
     * string. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value):
     * string. Value enum: "normal", "elevated", "highest", "not_assessed".
     */
    "risk_level"?: InputValue<("normal" | "elevated" | "highest" | "not_assessed")
        | readonly ("normal" | "elevated" | "highest" | "not_assessed")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * anyOf[1][] (Value): string. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")
        | readonly ("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by linked ReturnResolution ID. Example: "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Search across payment_intent_id, external_reference_id, and receipt_email. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /**
     * Inclusive lower bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Exact match on refund_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with dispute_status, both filters must match. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "none", "partially_refunded", "refunded". Value enum: "none",
     * "partially_refunded", "refunded". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "none", "partially_refunded", "refunded". anyOf[1][] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded". anyOf[2] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Exact match on dispute_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with refund_status, both filters must match. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". anyOf[1][] (Value): string. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): string. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status"?: InputValue<("none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")
        | readonly ("none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by payment_intent_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: customer, invoice, order. Include the requested related resources
     * using scoped batch reads for this page. Each relationship requires its existing target read
     * scopes. Expansion changes the representation without changing pagination tokens. Limits: at
     * most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer",
     * "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1] (Value): Array of
     * string. [] enum: "customer", "invoice", "order". anyOf[1][] (Value): string. Value enum:
     * "customer", "invoice", "order". anyOf[2] (Value): string. Value enum: "customer", "invoice",
     * "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
};
export type PaymentIntentsSendReceiptParams = (InputValue<SendPaymentIntentReceiptRequestInput>);
export type PaymentIntentsUpdateParams = (InputValue<UpdatePaymentIntentRequestInput>);
/** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */
export type PaymentLimitSettings = {
    /**
     * Map replaced as a whole: the keys you send become the full map. Maximum USD amounts keyed by
     * default, surface, or an exact payment_option.surface selector. Merchant settings cannot
     * raise Flint's policy ceiling. * (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "max_amounts"?: Record<string, MoneyValue>;
    /**
     * Map replaced as a whole: the keys you send become the full map. Minimum USD amounts keyed by
     * default, surface, or an exact payment_option.surface selector. Merchant settings cannot
     * lower Flint's payment-option floor. * (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_amounts"?: Record<string, MoneyValue>;
};
/**
 * Changes to a merchant's payment amount limits. Each map replaces the existing one, and null
 * clears it. minProperties: 1.
 */
export type PaymentLimitSettingsPatch = {
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. *.currency (Required): string. minLength: 1. Value enum:
     * "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount": `${bigint}`;
        /** minLength: 1. Value enum: "USD". */
        "currency": "USD" | (string & {});
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. *.currency (Required): string. minLength: 1. Value enum:
     * "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount": `${bigint}`;
        /** minLength: 1. Value enum: "USD". */
        "currency": "USD" | (string & {});
    }>
        | null;
};
/**
 * Changes to a merchant's payment amount limits. Each map replaces the existing one, and null
 * clears it. minProperties: 1.
 */
export type PaymentLimitSettingsPatchInput = {
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. *.currency (Required): string. minLength: 1. Value enum:
     * "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /** minLength: 1. Value enum: "USD". */
        "currency": "USD";
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. *.currency (Required): string. minLength: 1. Value enum:
     * "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /** minLength: 1. Value enum: "USD". */
        "currency": "USD";
    }>
        | null;
};
/** A reusable link that opens checkout. */
export type PaymentLink = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /** Format: int32. */
    "completed_count": number;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     *  [] (Value): {@link PaymentLinkCustomField}. A custom field on a payment link that collects
     * an answer from the buyer, such as text, a dropdown, or a checkbox.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /** Custom text shown in checkout: an order summary message and a shipping address label. */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Delivery methods the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver. []
     * (Value): string.
     */
    "delivery_method_ids": Array<string>;
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_max_amount_money"?: MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_min_amount_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
     * emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** An image attached to a resource, with its display properties and attachment metadata. */
    "image"?: ImageAttachment;
    "inactive_message"?: string;
    /**
     * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
     * inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     *  [] (Value): {@link PaymentLinkLineItem}. A line item on a payment link, sold from a catalog
     * variant, a bundle, or an ad hoc name and price, with quantity and price rules.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /** Format: int32. */
    "max_completions"?: number;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name": string;
    "payment_link_id": string;
    /** Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment settings for a checkout: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Format: date-time.
     */
    "sales_end_at"?: string;
    /**
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions.
     */
    "sales_summary"?: PaymentLinkSalesSummary;
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    "subscription_plan_id"?: string;
    /** Whether tax is collected for a checkout session or payment link. */
    "tax"?: CheckoutTaxConfig;
    /** Colors and title applied to a payment link's checkout page. */
    "theme"?: ThemeConfig;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "total_quantity_sold": number;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    "url": string;
    /** Format: int64. */
    "version": number;
};
/**
 * A listed payment link variant that can be sold in the line currency, with its current price,
 * options, image, modifiers, and advisory stock state.
 */
export type PaymentLinkAvailableVariant = {
    /**
     * Modifier groups available for this variant's effective modifier set. Omitted when the
     * variant has none. [] (Value): {@link PublicResolvedModifierGroup}. A modifier group as
     * resolved for a payment link line item, with its selection limits, display flags, and options
     * or text settings.
     */
    "available_modifiers"?: Array<PublicResolvedModifierGroup>;
    /**
     * Effective primary variant image, inherited from the product when the variant has none.
     * Omitted when neither has an image. An image with its `url`, `width`, and `height`, and
     * optional `alt` text.
     */
    "image"?: Image;
    /**
     * True when tracked inventory cannot supply the line's starting quantity through the payment
     * link's inventory_routing_source. Uses min_quantity when quantity is adjustable, otherwise
     * quantity. Always false for untracked variants. Advisory only: no stock is held at read or
     * resolve time, and no stock counts are published.
     */
    "is_sold_out": boolean;
    /** Order line name for this variant: the product name plus the variant label. */
    "name": string;
    /**
     * The variant's product option values, in product option position order. Empty when the
     * product has no options. [] (Value): {@link SelectedProductOption}. An option and value
     * chosen for a product variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /**
     * Current catalog unit price in the line currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** ID of the offered product variant. */
    "variant_id": string;
};
export type PaymentLinkCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "payment_link.created";
});
/**
 * The `payment_link.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentLinkCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentLink}. A reusable link that opens checkout. */
    "data"?: {
        /** A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `payment_link.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentLinkCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentLink}. A reusable link that opens checkout. */
    "data"?: {
        /** A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
});
/**
 * A custom field on a payment link that collects an answer from the buyer, such as text, a
 * dropdown, or a checkbox.
 */
export type PaymentLinkCustomField = {
    /** Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are
     * stored in order metadata as custom_field_<key>. minLength: 1. maxLength: 243.
     */
    "key": string;
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four
     * UTF-8 bytes in the combined metadata size budget. Format: int32. minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined
     * metadata size budget. [] (Value): string. maxLength: 4096.
     */
    "options"?: Array<string>;
    "payment_link_custom_field_id": string;
    "placeholder"?: string;
    /** Format: int32. */
    "position"?: number;
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequest = {
    /** Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are
     * stored in order metadata as custom_field_<key>. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four
     * UTF-8 bytes in the combined metadata size budget. Format: int32. minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined
     * metadata size budget. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     */
    "payment_link_custom_field_id"?: string;
    /** minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Format: int32. */
    "position"?: number;
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequestInput = {
    /** Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are
     * stored in order metadata as custom_field_<key>. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four
     * UTF-8 bytes in the combined metadata size budget. Format: int32. minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined
     * metadata size budget. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     */
    "payment_link_custom_field_id"?: string;
    /** minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Format: int32. */
    "position"?: number;
    "required"?: boolean;
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequest = {
    /** Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are
     * stored in order metadata as custom_field_<key>. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four
     * UTF-8 bytes in the combined metadata size budget. Format: int32. minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined
     * metadata size budget. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Format: int32. */
    "position"?: number;
    "required"?: boolean;
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequestInput = {
    /** Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are
     * stored in order metadata as custom_field_<key>. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four
     * UTF-8 bytes in the combined metadata size budget. Format: int32. minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined
     * metadata size budget. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Format: int32. */
    "position"?: number;
    "required"?: boolean;
};
/**
 * Custom text shown on a payment link's checkout, such as the order summary message and shipping
 * address label.
 */
export type PaymentLinkCustomTextConfigInput = {
    /** minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string;
    /** minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string;
};
/** Changes to a payment link's custom checkout text. Send null to clear a field. */
export type PaymentLinkCustomTextPatchRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string | null;
};
/** Changes to a payment link's custom checkout text. Send null to clear a field. */
export type PaymentLinkCustomTextPatchRequestInput = PaymentLinkCustomTextPatchRequest;
/**
 * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
 * emails.
 */
export type PaymentLinkEventConfig = {
    /** RFC3339 timestamp. Format: date-time. */
    "event_at"?: string;
    /**
     * Most tickets the event sells across all orders. Absent means no limit. On update, send null
     * to remove the limit; a value below the tickets already sold or held by payments in progress
     * returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not
     * supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. maxLength: 5.
     */
    "ticket_prefix"?: string;
    "timezone"?: string;
    /** maxLength: 500. */
    "venue"?: string;
};
/** Changes to an event payment link's settings. Send null on a nullable field to clear it. */
export type PaymentLinkEventConfigPatchRequest = {
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "event_at"?: string;
    /**
     * Most tickets the event sells across all orders. Absent means no limit. On update, send null
     * to remove the limit; a value below the tickets already sold or held by payments in progress
     * returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not
     * supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. Send null to clear it. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
/** Changes to an event payment link's settings. Send null on a nullable field to clear it. */
export type PaymentLinkEventConfigPatchRequestInput = {
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "event_at"?: string | globalThis.Date;
    /**
     * Most tickets the event sells across all orders. Absent means no limit. On update, send null
     * to remove the limit; a value below the tickets already sold or held by payments in progress
     * returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not
     * supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. Send null to clear it. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
/** Event settings you supply when creating an event payment link. */
export type PaymentLinkEventConfigRequestInput = {
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "event_at"?: string | globalThis.Date;
    /**
     * Most tickets the event sells across all orders. Absent means no limit. On update, send null
     * to remove the limit; a value below the tickets already sold or held by payments in progress
     * returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not
     * supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** minLength: 1. */
    "timezone"?: string;
    /** minLength: 1. maxLength: 500. */
    "venue"?: string;
};
/**
 * Legal links on a payment link: contract, refund policy, shipping policy, and terms of service
 * URLs, and whether buyers must accept the terms.
 */
export type PaymentLinkLegalConfigInput = {
    /** minLength: 1. maxLength: 2048. */
    "contract_url"?: string;
    /** minLength: 1. maxLength: 2048. */
    "refund_policy_url"?: string;
    "require_terms_of_service"?: boolean;
    /** minLength: 1. maxLength: 2048. */
    "shipping_policy_url"?: string;
    /** minLength: 1. maxLength: 2048. */
    "terms_of_service_url"?: string;
};
/** Changes to a payment link's legal links and terms setting. Send null on a URL to clear it. */
export type PaymentLinkLegalPatchRequestInput = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "contract_url"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "refund_policy_url"?: string | null;
    "require_terms_of_service"?: boolean;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "shipping_policy_url"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "terms_of_service_url"?: string | null;
};
/**
 * A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and
 * price, with quantity and price rules.
 */
export type PaymentLinkLineItem = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    "name"?: string;
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. This is the catalog value at
     * read time, not a stored snapshot: checkout resolves the price again when a buyer opens the
     * link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines,
     * and when the catalog object no longer exists. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom_fixed", "custom_variable". */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `bundle` variant of `PaymentLinkLineItem`. */
export type PaymentLinkLineItemBundle = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    "name"?: string;
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. This is the catalog value at
     * read time, not a stored snapshot: checkout resolves the price again when a buyer opens the
     * link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines,
     * and when the catalog object no longer exists. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    "bundle_id": string;
}));
/** The `custom_fixed` variant of `PaymentLinkLineItem`. */
export type PaymentLinkLineItemCustomFixed = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    "name": string;
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. This is the catalog value at
     * read time, not a stored snapshot: checkout resolves the price again when a buyer opens the
     * link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines,
     * and when the catalog object no longer exists. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `custom_variable` variant of `PaymentLinkLineItem`. */
export type PaymentLinkLineItemCustomVariable = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment": boolean;
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    "name": string;
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input.
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. This is the catalog value at
     * read time, not a stored snapshot: checkout resolves the price again when a buyer opens the
     * link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines,
     * and when the catalog object no longer exists. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    "name": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputBundle = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputBundleInput = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "bundle". */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})));
/** The `custom_fixed` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomFixed = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `custom_fixed` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomFixedInput = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `custom_variable` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomVariable = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment": boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "name": string;
}));
/** The `custom_variable` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomVariableInput = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment": boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "custom_variable". */
    "type": "custom_variable";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /** minLength: 1. maxLength: 255. */
    "name": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputVariant = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /** minLength: 1. */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** The `variant` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputVariantInput = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant". */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /** minLength: 1. */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids": Array<string>;
}))
    & (({
    "bundle_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
/** The `bundle` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputBundle = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputBundleInput = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "bundle". */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})));
/** The `custom_fixed` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomFixed = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `custom_fixed` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomFixedInput = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment"?: boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValueInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `custom_variable` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomVariable = ({
    "allow_quantity_adjustment"?: boolean;
    "allow_unit_price_adjustment": boolean;
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_variant_id"?: string | null;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "min_unit_price_money"?: MoneyValue;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Stable ID of an existing line item. Omit it to create a new line item. minLength: 1. */
    "payment_link_line_item_id"?: string;
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "name": string;
}));
