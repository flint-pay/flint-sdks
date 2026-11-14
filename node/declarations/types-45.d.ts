import type { PaymentIntentActivity, PartnerWebhookEnvelope, PaymentIntent, PaymentCollection } from './types-44.js';
import type { ResponseMeta } from './types-54.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { WebhookPaymentIntent } from './types-70.js';
import type { MoneyValue } from './types-39.js';
import type { PendingPaymentAction } from './types-49.js';
import type { InputValue } from '../runtime.js';
import type { CancelPaymentIntentRequestInput } from './types-4.js';
import type {
    CapturePaymentIntentRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig
} from './types-5.js';
import type { ConfirmPaymentIntentRequestInput } from './types-7.js';
import type { CreatePaymentIntentRequestInput } from './types-11.js';
import type { SendPaymentIntentReceiptRequestInput, SelectedProductOption } from './types-59.js';
import type { UpdatePaymentIntentRequestInput } from './types-67.js';
import type { CheckoutRedirects, CheckoutTaxConfig, CheckoutTipConfig } from './types-6.js';
import type { ExpandedSubscriptionPlanSummary } from './types-24.js';
import type { ImageAttachment, Image } from './types-28.js';
import type { InventoryRoutingSource } from './types-30.js';
import type { LegalSettings } from './types-35.js';
import type { PaymentLinkEventConfig, PaymentLinkLineItem, PaymentLinkSalesSummary } from './types-46.js';
import type { ThemeConfig } from './types-65.js';
import type { PublicResolvedModifierGroup, QuantityPriceBreak } from './types-52.js';
/** A page of `PaymentIntentActivity` objects. */
export type PaymentIntentActivityListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentIntentActivity}. A read-only entry in a payment intent's human-readable history. Read
     * the referenced resource for authoritative state.
     */
    "data": Array<PaymentIntentActivity>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentIntentAuthorizationExpiringEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.authorization_expiring";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.authorization_expiring";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.authorization_expiring";
});
/**
 * The `payment_intent.authorization_expiring` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type PaymentIntentAuthorizationExpiringInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.authorization_expiring". */
    "event_type"?: "payment_intent.authorization_expiring";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.authorization_expiring` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type PaymentIntentAuthorizationExpiringMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.authorization_expiring". */
    "event_type"?: "payment_intent.authorization_expiring";
});
export type PaymentIntentCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.canceled";
});
/**
 * The `payment_intent.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled";
});
export type PaymentIntentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.created";
});
/**
 * The `payment_intent.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created";
});
export type PaymentIntentExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.expired";
});
/**
 * The `payment_intent.expired` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired";
});
export type PaymentIntentFulfillmentHoldUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.fulfillment_hold_updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.fulfillment_hold_updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.fulfillment_hold_updated";
});
/**
 * The `payment_intent.fulfillment_hold_updated` webhook payload for the `installed_merchants`
 * event source. Fields shared by partner webhook payloads.
 */
export type PaymentIntentFulfillmentHoldUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.fulfillment_hold_updated` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type PaymentIntentFulfillmentHoldUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated";
});
/** A page of `PaymentIntent` objects. */
export type PaymentIntentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentIntent}. One payment from a buyer, standalone or as a leg of an order. amount_money
     * is the amount requested. Once the payment is authorized, authorized_money equals
     * amount_money (on a payment intent canceled with cancellation_reason payment_returned, the
     * authorization Flint released) and splits into captured_money (collected), capturable_money
     * (still on hold), and released_money (returned without being charged), so authorized_money
     * equals the sum of those three whenever the capture is at most the authorization. An
     * overcapture (see request_overcapture) has capturable_money and released_money zero and
     * captured_money above authorized_money. Reconcile revenue from captured_money.
     */
    "data": Array<PaymentIntent>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Whether one capture can collect more than the authorization. */
export type PaymentIntentOvercapture = {
    /**
     * The most one capture can collect. Equals capturable_money when status is unavailable.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_capturable_money": MoneyValue;
    /**
     * Whether the processor allows overcapturing this authorization. Can gain values; treat an
     * unknown value as unavailable. Value enum: "available", "unavailable".
     */
    "status": "available" | "unavailable" | (string & {});
};
export type PaymentIntentPaymentFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.payment_failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.payment_failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.payment_failed";
});
/**
 * The `payment_intent.payment_failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentPaymentFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.payment_failed". */
    "event_type"?: "payment_intent.payment_failed";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.payment_failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentPaymentFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.payment_failed". */
    "event_type"?: "payment_intent.payment_failed";
});
/**
 * The platform fee a partner app charges on this payment. The merchant pays it beside
 * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
 */
export type PaymentIntentPlatformFee = {
    /**
     * The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it
     * at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and
     * it is 0 when Flint canceled the fee before collection. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** The partner app that charges the fee. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * The platform fee record, which the partner app's owner reads. Example:
     * "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     */
    "platform_fee_id": string;
    /**
     * The fee returned to the merchant so far: by refunds the partner app created with
     * `refund_platform_fee: true`, each returned once its payment refund succeeds, and by Flint's
     * returns of the whole application fee. 0 when nothing was returned. See [Platform
     * fees](/docs/guides/platform-fees). Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
};
export type PaymentIntentProcessingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.processing";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.processing";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.processing";
});
/**
 * The `payment_intent.processing` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentProcessingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.processing". */
    "event_type"?: "payment_intent.processing";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.processing` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PaymentIntentProcessingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.processing". */
    "event_type"?: "payment_intent.processing";
});
export type PaymentIntentRequiresActionEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.requires_action";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.requires_action";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.requires_action";
});
/**
 * The `payment_intent.requires_action` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentRequiresActionInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.requires_action". */
    "event_type"?: "payment_intent.requires_action";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.requires_action` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentRequiresActionMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.requires_action". */
    "event_type"?: "payment_intent.requires_action";
});
export type PaymentIntentRequiresCaptureEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.requires_capture";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.requires_capture";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.requires_capture". */
    "event_type"?: "payment_intent.requires_capture";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.requires_capture` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentRequiresCaptureMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.requires_capture". */
    "event_type"?: "payment_intent.requires_capture";
});
/** A response containing `PaymentIntent` data. */
export type PaymentIntentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One payment from a
     * buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money (on a payment intent canceled
     * with cancellation_reason payment_returned, the authorization Flint released) and splits into
     * captured_money (collected), capturable_money (still on hold), and released_money (returned
     * without being charged), so authorized_money equals the sum of those three whenever the
     * capture is at most the authorization. An overcapture (see request_overcapture) has
     * capturable_money and released_money zero and captured_money above authorized_money.
     * Reconcile revenue from captured_money.
     */
    "data": PaymentIntent;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentIntentSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.succeeded". */
    "event_type"?: "payment_intent.succeeded";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.succeeded". */
    "event_type"?: "payment_intent.succeeded";
});
export type PaymentIntentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPaymentIntent;
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`,
     * `payment_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookPaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated";
});
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money (on a payment
 * intent canceled with cancellation_reason payment_returned, the authorization Flint released) and
 * splits into captured_money (collected), capturable_money (still on hold), and released_money
 * (returned without being charged), so authorized_money equals the sum of those three whenever the
 * capture is at most the authorization. An overcapture (see request_overcapture) has
 * capturable_money and released_money zero and captured_money above authorized_money. Reconcile
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
 * requested. Once the payment is authorized, authorized_money equals amount_money (on a payment
 * intent canceled with cancellation_reason payment_returned, the authorization Flint released) and
 * splits into captured_money (collected), capturable_money (still on hold), and released_money
 * (returned without being charged), so authorized_money equals the sum of those three whenever the
 * capture is at most the authorization. An overcapture (see request_overcapture) has
 * capturable_money and released_money zero and captured_money above authorized_money. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntentWithCollection = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Setup details your client uses to collect the buyer's payment details. Returned on both
     * standalone and order-owned creates except card_present payments, which have no
     * payment_collection. On GET, returned only for a standalone intent in requires_payment_method
     * or requires_confirmation, and omitted for an intent owned by a checkout session when read
     * with merchant credentials. Order-owned intents never include it on GET; use
     * Order.payment_collection, whose selectable_payment_intents lists the staged payments.
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
});
/** A response containing `PaymentIntentWithCollection` data. */
export type PaymentIntentWithCollectionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One payment from a
     * buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money (on a payment intent canceled
     * with cancellation_reason payment_returned, the authorization Flint released) and splits into
     * captured_money (collected), capturable_money (still on hold), and released_money (returned
     * without being charged), so authorized_money equals the sum of those three whenever the
     * capture is at most the authorization. An overcapture (see request_overcapture) has
     * capturable_money and released_money zero and captured_money above authorized_money.
     * Reconcile revenue from captured_money.
     */
    "data": PaymentIntentWithCollection;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentIntentsCancelParams = (InputValue<CancelPaymentIntentRequestInput>
    | {
    "cancellation_reason"?: never;
    "expected_version"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentIntentsCaptureParams = (InputValue<CapturePaymentIntentRequestInput>
    | {
    "amount_money"?: never;
    "expected_version"?: never;
    "final_amount_money"?: never;
    "platform_fee"?: never;
    "splits"?: never;
    "tip_money"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentIntentsConfirmParams = (ConfirmPaymentIntentRequestInput)
    & {
    /**
     * An optional stable random device identifier, independent of the payment intent. Keep it for
     * subsequent payments from the same device; it grants no access. pattern: ^[a-f0-9]{32}$.
     */
    "Flint-Buyer-Device"?: InputValue<string>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentIntentsCreateParams = (InputValue<CreatePaymentIntentRequestInput>
    | {
    "amount_money"?: never;
    "capture_method"?: never;
    "customer_id"?: never;
    "expected_order_version"?: never;
    "external_reference_id"?: never;
    "metadata"?: never;
    "order_id"?: never;
    "payment_options"?: never;
    "payment_return_url"?: never;
    "payment_source_selection"?: never;
    "platform_fee"?: never;
    "receipt_email"?: never;
    "request_overcapture"?: never;
    "splits"?: never;
    "tip_money"?: never;
    "transaction_purpose"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentIntentsCreateResponse = ({
    "data"?: {
        [key: string]: unknown;
    };
})
    & (Exclude<PaymentIntentWithCollectionResponse & object, readonly unknown[]>);
export type PaymentIntentsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, invoice, order.
     * Expansion requires payments.payment_intents.read plus the read scope for each expanded
     * resource. Limits: at most 10 unique expand paths per request. [] enum: "customer",
     * "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1] (Value): Array of
     * string. [] enum: "customer", "invoice", "order". anyOf[1][] (Value): string. Value enum:
     * "customer", "invoice", "order". anyOf[2] (Value): string. Value enum: "customer", "invoice",
     * "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentIntentsListActivitiesParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "created", "updated", "status_changed", "failed", "canceled", "expired",
     * "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent". Value
     * enum: "created", "updated", "status_changed", "failed", "canceled", "expired",
     * "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent". anyOf[1][] (Value):
     * string. Value enum: "created", "updated", "status_changed", "failed", "canceled", "expired",
     * "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent".
     * anyOf[2] (Value): string. Value enum: "created", "updated", "status_changed", "failed",
     * "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed",
     * "receipt_sent".
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
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentIntentsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by invoice ID. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by whether the merchant must capture the payment or respond to a dispute. A dispute
     * requires action when its status is needs_response or inquiry_needs_response, evidence
     * responses are allowed, and its deadline is absent or has not passed. Omit to include both
     * groups.
     */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Filter by payment intent status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". Value enum:
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
     * Filter by the latest completed risk assessment. Repeat or comma-separate values. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "normal", "elevated",
     * "highest", "not_assessed". Value enum: "normal", "elevated", "highest", "not_assessed".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[1][] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[2] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed".
     */
    "risk_level"?: InputValue<("normal" | "elevated" | "highest" | "not_assessed")
        | readonly ("normal" | "elevated" | "highest" | "not_assessed")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1][] (Value): string. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[2] (Value): string. Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
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
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by linked Return ID. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by linked ReturnResolution ID. pattern: ^retres_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
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
     * status. Combined with dispute_status, both filters must match. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "none", "partially_refunded",
     * "refunded". Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "none", "partially_refunded", "refunded". anyOf[1][] (Value):
     * string. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): string.
     * Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Exact match on dispute_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with refund_status, both filters must match. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "none", "inquiry_needs_response",
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
     * Include related objects in the response. Supported expansions: customer, invoice, order.
     * Include the requested related resources using scoped batch reads for this page. Each
     * relationship requires its existing target read scopes. Expansion changes the representation
     * without changing pagination tokens. Limits: at most 10 unique expand paths per request. []
     * enum: "customer", "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "invoice", "order". anyOf[1][] (Value):
     * string. Value enum: "customer", "invoice", "order". anyOf[2] (Value): string. Value enum:
     * "customer", "invoice", "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentIntentsSendReceiptParams = (InputValue<SendPaymentIntentReceiptRequestInput> | {
    "email"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PaymentIntentsUpdateParams = (InputValue<UpdatePaymentIntentRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */
export type PaymentLimitSettings = {
    /**
     * Enforced maximum USD amounts for every supported exact payment_option.surface selector. Only
     * returned by GET /v1/settings/effective. Includes merchant limits and Flint support
     * approvals; the approval map is private. * (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "effective_max_amounts"?: Record<string, MoneyValue>;
    /**
     * Enforced minimum USD amounts for every supported exact payment_option.surface selector. Only
     * returned by GET /v1/settings/effective. Includes merchant limits and Flint's payment-option
     * floors. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "effective_min_amounts"?: Record<string, MoneyValue>;
    /**
     * Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector.
     * Merchant settings cannot raise Flint's policy ceiling. * (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_amounts"?: Record<string, MoneyValue>;
    /**
     * Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector.
     * Merchant settings cannot lower Flint's payment-option floor. * (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
        "currency": "USD" | (string & {});
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
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
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
        "currency": "USD";
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
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
    /** Number of paid checkout sessions started from this link. Format: int32. */
    "completed_count": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Questions buyers answer before paying. Answers are recorded on the order and checkout
     * session in `custom_field_answers`. [] (Value): {@link PaymentLinkCustomField}. A custom
     * field on a payment link that collects an answer from the buyer.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /**
     * Custom text for checkouts started from this link. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Delivery methods the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver. []
     * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /** Text about what the link sells, returned to buyers when they open it. */
    "description"?: string;
    /**
     * Largest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Smallest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event details for an `event` link: when and where it takes place and how many tickets it
     * sells. Event settings on an event payment link, such as its date, venue, ticket limit, and
     * ticket emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Image shown to buyers with the link. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "image"?: ImageAttachment;
    /** Message to show the buyer when the link is inactive. */
    "inactive_message"?: string;
    /**
     * The inventory location or routing policy that supplies stock for the link's catalog lines.
     * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
     * inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a payment link.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /**
     * Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once
     * the limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Format: int32.
     */
    "max_completions"?: number;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Name of the payment link. */
    "name": string;
    /**
     * Unique identifier for this payment link, prefixed `pl_`. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id": string;
    /** What kind of link this is. Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment options for checkouts started from this link. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Whether automatic promotions apply to checkouts started from this link and whether buyers
     * can enter promotion codes. Promotion settings for a checkout: whether automatic promotions
     * apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is headless; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
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
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id"?: string;
    /**
     * Tax settings for checkouts started from this link. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for checkouts started from this link, over your branding settings.
     * Colors and title applied to a payment link's checkout page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for checkouts started from this link. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "total_quantity_sold": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** URL buyers open to use the link. */
    "url": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
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
     * Omitted when neither has an image. An image with its URL, size, and alt text.
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
     * Identifier of the product the offered variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Default variant quantity breaks. Use the largest minimum_quantity not above this line's own
     * quantity; an empty array uses the base price. [] (Value): {@link QuantityPriceBreak}. A net
     * unit price that applies when one catalog line reaches minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /**
     * The variant's product option values, in product option position order. Empty when the
     * product has no options. [] (Value): {@link SelectedProductOption}. An option and value
     * chosen for a product variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /**
     * Current catalog base unit price in the line currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** ID of the offered product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
};
export type PaymentLinkCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds"?: number;
            "completed_count": number;
            "created_at": string;
            "custom_fields"?: Array<PaymentLinkCustomField>;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description"?: string;
            "donation_max_amount_money"?: MoneyValue;
            "donation_min_amount_money"?: MoneyValue;
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            "event_config"?: PaymentLinkEventConfig;
            "external_reference_id"?: string;
            "image"?: ImageAttachment;
            "inactive_message"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "legal"?: LegalSettings;
            "line_items"?: Array<PaymentLinkLineItem>;
            "max_completions"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "payment_link_id": string;
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects"?: CheckoutRedirects;
            "sales_end_at"?: string;
            "sales_summary"?: PaymentLinkSalesSummary;
            "status": "active" | "inactive" | (string & {});
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "tax"?: CheckoutTaxConfig;
            "theme"?: ThemeConfig;
            "tip"?: CheckoutTipConfig;
            "total_quantity_sold": number;
            "updated_at": string;
            "url": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_link.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds"?: number;
            "completed_count": number;
            "created_at": string;
            "custom_fields"?: Array<PaymentLinkCustomField>;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description"?: string;
            "donation_max_amount_money"?: MoneyValue;
            "donation_min_amount_money"?: MoneyValue;
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            "event_config"?: PaymentLinkEventConfig;
            "external_reference_id"?: string;
            "image"?: ImageAttachment;
            "inactive_message"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "legal"?: LegalSettings;
            "line_items"?: Array<PaymentLinkLineItem>;
            "max_completions"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "payment_link_id": string;
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects"?: CheckoutRedirects;
            "sales_end_at"?: string;
            "sales_summary"?: PaymentLinkSalesSummary;
            "status": "active" | "inactive" | (string & {});
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "tax"?: CheckoutTaxConfig;
            "theme"?: ThemeConfig;
            "tip"?: CheckoutTipConfig;
            "total_quantity_sold": number;
            "updated_at": string;
            "url": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_link.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.donation_min_amount_money (Optional): {@link
     * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}.
     * Amounts a donation link offers as one-tap choices.
     * object.donation_suggested_amount_money_options[] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.event_config (Optional): {@link PaymentLinkEventConfig}. Event details for an `event`
     * link: when and where it takes place and how many tickets it sells. Event settings on an
     * event payment link, such as its date, venue, ticket limit, and ticket emails.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.image (Optional):
     * {@link ImageAttachment}. Image shown to buyers with the link. An image attached to a
     * resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Where an order,
     * payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
     * expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}.
     * Available to merchant callers, including dashboard sessions and API keys with
     * checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales
     * summary. Paid-order sales totals for a payment link, computed on request. Paid means the
     * order's collection has completed. Fully and partially refunded orders still count, and
     * paid_totals reports the amount collected before refunds. Each order counts once even if it
     * has multiple checkout sessions. object.status (Required): string. Whether the link can start
     * new checkouts. Value enum: "active", "inactive". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.tax (Optional): {@link CheckoutTaxConfig}. Tax settings for checkouts started from
     * this link. Whether tax is collected for a checkout session or payment link. object.theme
     * (Optional): {@link ThemeConfig}. The title and colors for checkouts started from this link,
     * over your branding settings. Colors and title applied to a payment link's checkout page.
     * object.tip (Optional): {@link CheckoutTipConfig}. Tip options for checkouts started from
     * this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.total_quantity_sold (Required):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.url (Required): string. URL buyers open to use the link.
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. donation_min_amount_money (Optional): {@link
         * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. donation_suggested_amount_money_options[]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event
         * details for an `event` link: when and where it takes place and how many tickets it
         * sells. Event settings on an event payment link, such as its date, venue, ticket limit,
         * and ticket emails. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
         * inventory allocation policy, or one policy revision. legal (Optional): {@link
         * LegalSettings}. The terms and policy links checkouts started from this link show the
         * buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the
         * terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is headless; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
         * expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link CheckoutTaxConfig}.
         * Tax settings for checkouts started from this link. Whether tax is collected for a
         * checkout session or payment link. theme (Optional): {@link ThemeConfig}. The title and
         * colors for checkouts started from this link, over your branding settings. Colors and
         * title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Where an order, payment link, or reservation routes inventory from: a fixed
             * Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is headless; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_link.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentLinkCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.donation_min_amount_money (Optional): {@link
     * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}.
     * Amounts a donation link offers as one-tap choices.
     * object.donation_suggested_amount_money_options[] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.event_config (Optional): {@link PaymentLinkEventConfig}. Event details for an `event`
     * link: when and where it takes place and how many tickets it sells. Event settings on an
     * event payment link, such as its date, venue, ticket limit, and ticket emails.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.image (Optional):
     * {@link ImageAttachment}. Image shown to buyers with the link. An image attached to a
     * resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Where an order,
     * payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
     * expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}.
     * Available to merchant callers, including dashboard sessions and API keys with
     * checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales
     * summary. Paid-order sales totals for a payment link, computed on request. Paid means the
     * order's collection has completed. Fully and partially refunded orders still count, and
     * paid_totals reports the amount collected before refunds. Each order counts once even if it
     * has multiple checkout sessions. object.status (Required): string. Whether the link can start
     * new checkouts. Value enum: "active", "inactive". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.tax (Optional): {@link CheckoutTaxConfig}. Tax settings for checkouts started from
     * this link. Whether tax is collected for a checkout session or payment link. object.theme
     * (Optional): {@link ThemeConfig}. The title and colors for checkouts started from this link,
     * over your branding settings. Colors and title applied to a payment link's checkout page.
     * object.tip (Optional): {@link CheckoutTipConfig}. Tip options for checkouts started from
     * this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.total_quantity_sold (Required):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.url (Required): string. URL buyers open to use the link.
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. donation_min_amount_money (Optional): {@link
         * MoneyValue}. Smallest amount a buyer can give on a donation link. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. donation_suggested_amount_money_options[]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event
         * details for an `event` link: when and where it takes place and how many tickets it
         * sells. Event settings on an event payment link, such as its date, venue, ticket limit,
         * and ticket emails. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
         * inventory allocation policy, or one policy revision. legal (Optional): {@link
         * LegalSettings}. The terms and policy links checkouts started from this link show the
         * buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the
         * terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is headless; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_summary (Optional): {@link PaymentLinkSalesSummary}. Present only with
         * expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link CheckoutTaxConfig}.
         * Tax settings for checkouts started from this link. Whether tax is collected for a
         * checkout session or payment link. theme (Optional): {@link ThemeConfig}. The title and
         * colors for checkouts started from this link, over your branding settings. Colors and
         * title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Where an order, payment link, or reservation routes inventory from: a fixed
             * Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is headless; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
});
/** A custom field on a payment link that collects an answer from the buyer. */
export type PaymentLinkCustomField = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Unique identifier for this payment link custom field, prefixed `plcf_`. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id": string;
    /** Hint text shown inside the empty field. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequest = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     * Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id"?: string;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequestInput = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     * Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id"?: string;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequest = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequestInput = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
