import type { SubscriptionCounts, Subscription, SubscriptionDeliveryDestinationRequestInput } from './types-54.js';
import type { MerchantWebhookEnvelope, MoneyValue, MetadataMap } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionDeliveryMigrationRequestInput, CreateSubscriptionOfferRequestInput } from './types-11.js';
import type { DeliverySelectionRecipientRequest, DeliverySelectionRecipientRequestInput } from './types-19.js';
import type { SubscriptionServiceLocationRequest } from './types-56.js';
import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-4.js';
import type { Image } from './types-25.js';
import type { OrderLineItemModifier } from './types-37.js';
import type { SelectedProductOption } from './types-53.js';
import type { UpdateSubscriptionOfferRequestInput } from './types-60.js';
import type { PaymentErrorSummary } from './types-41.js';
/** Subscription counts by status for one delivery method. */
export type SubscriptionDeliveryMethodCounts = {
    "delivery_method_id": string;
    /** Counts of subscriptions by status: active, past due, and paused. */
    "subscription_counts": SubscriptionCounts;
};
/**
 * How a delivery method change affects subscriptions: current counts and how many would no longer
 * be eligible.
 */
export type SubscriptionDeliveryMethodImpact = {
    "delivery_method_id": string;
    /** Value enum: "delivery_method_update". */
    "mode": "delivery_method_update" | (string & {});
    /** Counts of subscriptions by status: active, past due, and paused. */
    "no_longer_eligible_counts": SubscriptionCounts;
    /** Counts of subscriptions by status: active, past due, and paused. */
    "subscription_counts": SubscriptionCounts;
};
/**
 * A short summary of a subscription's delivery method: name, description, type, and whether its
 * price is fixed or quoted.
 */
export type SubscriptionDeliveryMethodSummary = {
    "description"?: string;
    "name"?: string;
    /** Value enum: "fixed", "quoted". */
    "price_type"?: "fixed" | "quoted" | (string & {});
    /** Value enum: "shipment", "local_delivery". */
    "type"?: "shipment" | "local_delivery" | (string & {});
};
/** A move of subscribers from one delivery method to another. */
export type SubscriptionDeliveryMigration = {
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Format: int64. */
    "failed_count": number;
    /**
     *  [] (Value): {@link SubscriptionDeliveryMigrationFailureReasonCount}. The number of
     * subscriptions that failed a delivery method migration for one reason.
     */
    "failure_reason_counts": Array<SubscriptionDeliveryMigrationFailureReasonCount>;
    "from_delivery_method_id": string;
    /** Format: int64. */
    "moved_count": number;
    /** Format: int64. */
    "pending_count": number;
    /** Value enum: "pending", "running", "completed". */
    "status": "pending" | "running" | "completed" | (string & {});
    "subscription_delivery_migration_id": string;
    "subscription_plan_id"?: string;
    "to_delivery_method_id": string;
    /** Format: int64. */
    "total_count": number;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
export type SubscriptionDeliveryMigrationCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionDeliveryMigration;
    };
    "event_type"?: "subscription_delivery_migration.completed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionDeliveryMigration;
    };
    "event_type"?: "subscription_delivery_migration.completed";
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
    "event_type": "subscription_delivery_migration.completed";
});
/**
 * The `subscription_delivery_migration.completed` webhook payload for the `installed_merchants`
 * event source. Fields shared by partner webhook payloads.
 */
export type SubscriptionDeliveryMigrationCompletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionDeliveryMigration}. A move of subscribers from one
     * delivery method to another.
     */
    "data"?: {
        /** A move of subscribers from one delivery method to another. */
        "object": SubscriptionDeliveryMigration;
    };
    /** Value enum: "subscription_delivery_migration.completed". */
    "event_type"?: "subscription_delivery_migration.completed";
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
 * The `subscription_delivery_migration.completed` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionDeliveryMigrationCompletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionDeliveryMigration}. A move of subscribers from one
     * delivery method to another.
     */
    "data"?: {
        /** A move of subscribers from one delivery method to another. */
        "object": SubscriptionDeliveryMigration;
    };
    /** Value enum: "subscription_delivery_migration.completed". */
    "event_type"?: "subscription_delivery_migration.completed";
});
/** A subscription that could not be moved to a new delivery method, with the reason. */
export type SubscriptionDeliveryMigrationFailure = {
    "message": string;
    /**
     * Value enum: "method_not_offered", "destination_not_served", "rate_unavailable",
     * "method_unavailable", "no_longer_applicable", "not_movable".
     */
    "reason": "method_not_offered"
        | "destination_not_served"
        | "rate_unavailable"
        | "method_unavailable"
        | "no_longer_applicable"
        | "not_movable"
        | (string & {});
    "subscription_id": string;
};
/** A page of `SubscriptionDeliveryMigrationFailure` objects. */
export type SubscriptionDeliveryMigrationFailureListResponse = {
    /**
     *  [] (Value): {@link SubscriptionDeliveryMigrationFailure}. A subscription that could not be
     * moved to a new delivery method, with the reason.
     */
    "data": Array<SubscriptionDeliveryMigrationFailure>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The number of subscriptions that failed a delivery method migration for one reason. */
export type SubscriptionDeliveryMigrationFailureReasonCount = {
    /** Format: int64. */
    "count": number;
    /**
     * Value enum: "method_not_offered", "destination_not_served", "rate_unavailable",
     * "method_unavailable", "no_longer_applicable", "not_movable".
     */
    "reason": "method_not_offered"
        | "destination_not_served"
        | "rate_unavailable"
        | "method_unavailable"
        | "no_longer_applicable"
        | "not_movable"
        | (string & {});
};
/** A page of `SubscriptionDeliveryMigration` objects. */
export type SubscriptionDeliveryMigrationListResponse = {
    /**
     *  [] (Value): {@link SubscriptionDeliveryMigration}. A move of subscribers from one delivery
     * method to another.
     */
    "data": Array<SubscriptionDeliveryMigration>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `SubscriptionDeliveryMigration` data. */
export type SubscriptionDeliveryMigrationResponse = {
    /** A move of subscribers from one delivery method to another. */
    "data": SubscriptionDeliveryMigration;
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
export type SubscriptionDeliveryMigrationsCreateParams = (InputValue<CreateSubscriptionDeliveryMigrationRequestInput>);
export type SubscriptionDeliveryMigrationsGetParams = {};
export type SubscriptionDeliveryMigrationsListFailuresParams = {
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
    /**
     * Filter by the reason a subscription could not be moved. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "method_not_offered", "destination_not_served",
     * "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable". Value enum:
     * "method_not_offered", "destination_not_served", "rate_unavailable", "method_unavailable",
     * "no_longer_applicable", "not_movable". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "method_not_offered", "destination_not_served", "rate_unavailable",
     * "method_unavailable", "no_longer_applicable", "not_movable". anyOf[1][] (Value): string.
     * Value enum: "method_not_offered", "destination_not_served", "rate_unavailable",
     * "method_unavailable", "no_longer_applicable", "not_movable". anyOf[2] (Value): string. Value
     * enum: "method_not_offered", "destination_not_served", "rate_unavailable",
     * "method_unavailable", "no_longer_applicable", "not_movable".
     */
    "reason"?: InputValue<("method_not_offered"
        | "destination_not_served"
        | "rate_unavailable"
        | "method_unavailable"
        | "no_longer_applicable"
        | "not_movable")
        | readonly ("method_not_offered"
        | "destination_not_served"
        | "rate_unavailable"
        | "method_unavailable"
        | "no_longer_applicable"
        | "not_movable")[]>;
};
export type SubscriptionDeliveryMigrationsListParams = {
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
    /**
     * Filter by the delivery method subscriptions are moving from. Example:
     * "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "from_delivery_method_id"?: InputValue<string>;
    /**
     * Filter by migration status: pending, running, or completed. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "pending", "running", "completed". Value enum: "pending",
     * "running", "completed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending",
     * "running", "completed". anyOf[1][] (Value): string. Value enum: "pending", "running",
     * "completed". anyOf[2] (Value): string. Value enum: "pending", "running", "completed".
     */
    "status"?: InputValue<("pending" | "running" | "completed") | readonly ("pending" | "running" | "completed")[]>;
};
/**
 * A delivery method offered for a subscription, with its availability, price, and the reason it is
 * unavailable if it is.
 */
export type SubscriptionDeliveryOption = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** Value enum: "available", "unavailable", "cannot_calculate". */
    "availability": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * True when this is the subscription's saved preferred delivery method, including when
     * unavailable.
     */
    "current": boolean;
    "delivery_method_id": string;
    "description"?: string;
    /**
     * Reason the method cannot serve this subscription destination. Values can expand as delivery
     * capabilities change. Value enum: "dependency_failure", "timeout", "malformed_response",
     * "callback_transport_failure", "callback_circuit_open", "callback_result_invalid",
     * "callback_unavailable", "pricing_failure", "schedule_failure", "option_lifetime_too_short",
     * "geography_failure", "routing_failure", "invalid_configuration", "invalid_buyer_input",
     * "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    "name": string;
    /** Value enum: "fixed", "quoted". */
    "price_type": "fixed" | "quoted" | (string & {});
    /** True when this method is offered, renewable, and currently serves the destination. */
    "selectable": boolean;
    /** Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery" | (string & {});
    /**
     * Reason the method cannot serve this subscription destination. Values can expand as delivery
     * capabilities change. Value enum: "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
};
export type SubscriptionDeliveryPauseUpcomingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_pause_upcoming";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_pause_upcoming";
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
    "event_type": "subscription.delivery_pause_upcoming";
});
/**
 * The `subscription.delivery_pause_upcoming` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionDeliveryPauseUpcomingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.delivery_pause_upcoming". */
    "event_type"?: "subscription.delivery_pause_upcoming";
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
 * The `subscription.delivery_pause_upcoming` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionDeliveryPauseUpcomingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.delivery_pause_upcoming". */
    "event_type"?: "subscription.delivery_pause_upcoming";
});
/**
 * The delivery preference to set on a subscription: delivery method, type, destination, and
 * recipient.
 */
export type SubscriptionDeliveryRequest = {
    /** minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */
    "delivery_method_id": string;
    /** Where to deliver a subscription: a saved customer address by ID, or a new address. */
    "destination": SubscriptionServiceLocationRequest;
    /**
     * Recipient details you supply with a delivery selection or subscription delivery: optional
     * `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequest;
    /** Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery" | (string & {});
};
/**
 * The delivery preference to set on a subscription: delivery method, type, destination, and
 * recipient.
 */
export type SubscriptionDeliveryRequestInput = {
    /** minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */
    "delivery_method_id": string;
    /** Where to deliver a subscription: a saved customer address by ID, or a new address. */
    "destination": SubscriptionDeliveryDestinationRequestInput;
    /**
     * Recipient details you supply with a delivery selection or subscription delivery: optional
     * `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequestInput;
    /** Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery";
};
export type SubscriptionDeliveryUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_updated";
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
    "event_type": "subscription.delivery_updated";
});
/**
 * The `subscription.delivery_updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionDeliveryUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.delivery_updated". */
    "event_type"?: "subscription.delivery_updated";
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
 * The `subscription.delivery_updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionDeliveryUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.delivery_updated". */
    "event_type"?: "subscription.delivery_updated";
});
export type SubscriptionDunningExhaustedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.dunning_exhausted";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.dunning_exhausted";
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
    "event_type": "subscription.dunning_exhausted";
});
/**
 * The `subscription.dunning_exhausted` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionDunningExhaustedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.dunning_exhausted". */
    "event_type"?: "subscription.dunning_exhausted";
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
 * The `subscription.dunning_exhausted` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionDunningExhaustedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.dunning_exhausted". */
    "event_type"?: "subscription.dunning_exhausted";
});
/** A billing interval, such as every 2 months, offered by a subscription plan. */
export type SubscriptionIntervalOption = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
};
/** A billing interval, such as every 2 months, offered by a subscription plan. */
export type SubscriptionIntervalOptionInput = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
};
/**
 * Shows that a subscription renewal is waiting for inventory, with the order and invoice involved
 * and when the wait started.
 */
export type SubscriptionInventoryWait = {
    "invoice_id": string;
    "order_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at": string;
};
/** An item included in a customer's recurring purchase. */
export type SubscriptionLineItem = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "base_subtotal_money": MoneyValue;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "modifier_total_money": MoneyValue;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    "subscription_line_item_id"?: string;
    "subscription_offer_id"?: string;
    "subscription_plan_line_item_id"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    "variant_id"?: string;
};
/** A page of `Subscription` objects. */
export type SubscriptionListResponse = {
    /**  [] (Value): {@link Subscription}. A customer's recurring purchase. */
    "data": Array<Subscription>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Recurring terms offered on catalog products or variants. Updates affect new signups; existing
 * subscriptions keep their paid signup terms.
 */
export type SubscriptionOffer = {
    /**
     * minItems: 1. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string.
     */
    "product_ids": Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it.
     */
    "promotion_id": string | null;
    /** Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string.
     */
    "subscription_delivery_method_ids": Array<string>;
    "subscription_offer_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string.
     */
    "variant_ids": Array<string>;
    /** Format: uint64. minimum: 0. */
    "version": number;
};
/** A subscription offer and variant to include in subscription offer terms. */
export type SubscriptionOfferLineItemRequest = {
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /** minLength: 1. */
    "subscription_offer_id": string;
    /** minLength: 1. */
    "variant_id": string;
};
/** A subscription offer and variant to include in subscription offer terms. */
export type SubscriptionOfferLineItemRequestInput = SubscriptionOfferLineItemRequest;
/** A page of `SubscriptionOffer` objects. */
export type SubscriptionOfferListResponse = {
    /**
     *  [] (Value): {@link SubscriptionOffer}. Recurring terms offered on catalog products or
     * variants. Updates affect new signups; existing subscriptions keep their paid signup terms.
     */
    "data": Array<SubscriptionOffer>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `SubscriptionOffer` data. */
export type SubscriptionOfferResponse = {
    /**
     * Recurring terms offered on catalog products or variants. Updates affect new signups;
     * existing subscriptions keep their paid signup terms.
     */
    "data": SubscriptionOffer;
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
/** The `subscription_offer` variant of `SubscriptionTermsInput`. */
export type SubscriptionOfferTermsRequest = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * minItems: 1. [] (Value): {@link SubscriptionOfferLineItemRequest}. A subscription offer and
     * variant to include in subscription offer terms.
     */
    "line_items": Array<SubscriptionOfferLineItemRequest>;
    /** Value enum: "subscription_offer". */
    "type": "subscription_offer" | (string & {});
};
/** The `subscription_offer` variant of `SubscriptionTermsInput`. */
export type SubscriptionOfferTermsRequestInput = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * minItems: 1. [] (Value): {@link SubscriptionOfferLineItemRequestInput}. A subscription offer
     * and variant to include in subscription offer terms.
     */
    "line_items": Array<SubscriptionOfferLineItemRequestInput>;
    /** Value enum: "subscription_offer". */
    "type": "subscription_offer";
};
export type SubscriptionOffersCreateParams = (InputValue<CreateSubscriptionOfferRequestInput>);
export type SubscriptionOffersDeleteParams = {
    /**
     * Resource version last read by the caller. Refuses the deletion if the offer has changed.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type SubscriptionOffersGetParams = {};
export type SubscriptionOffersListParams = {
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
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /** Filter by Flint product ID. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "product_id"?: InputValue<string>;
    /** Filter by Flint variant ID. Example: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "variant_id"?: InputValue<string>;
    /** Case-insensitive search over name, subscription_offer_id, and external_reference_id. */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by subscription_offer_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type SubscriptionOffersUpdateParams = (InputValue<UpdateSubscriptionOfferRequestInput>);
export type SubscriptionPastDueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.past_due";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.past_due";
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
    "event_type": "subscription.past_due";
});
/**
 * The `subscription.past_due` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionPastDueInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.past_due". */
    "event_type"?: "subscription.past_due";
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
 * The `subscription.past_due` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionPastDueMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.past_due". */
    "event_type"?: "subscription.past_due";
});
export type SubscriptionPausedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.paused";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.paused";
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
    "event_type": "subscription.paused";
});
/**
 * The `subscription.paused` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionPausedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.paused". */
    "event_type"?: "subscription.paused";
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
 * The `subscription.paused` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionPausedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.paused". */
    "event_type"?: "subscription.paused";
});
/** An attempt to collect a subscription's overdue payment. */
export type SubscriptionPaymentRetry = {
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "idempotency_key": string;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    "order_id"?: string;
    "order_payment_attempt_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Value enum: "pending", "processing", "succeeded", "failed". */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    "subscription_id": string;
    "subscription_payment_retry_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
export type SubscriptionPaymentRetryCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.created";
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
    "event_type": "subscription_payment_retry.created";
});
/**
 * The `subscription_payment_retry.created` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetryCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.created". */
    "event_type"?: "subscription_payment_retry.created";
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
 * The `subscription_payment_retry.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetryCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.created". */
    "event_type"?: "subscription_payment_retry.created";
});
export type SubscriptionPaymentRetryFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.failed";
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
    "event_type": "subscription_payment_retry.failed";
});
/**
 * The `subscription_payment_retry.failed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetryFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.failed". */
    "event_type"?: "subscription_payment_retry.failed";
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
 * The `subscription_payment_retry.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetryFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.failed". */
    "event_type"?: "subscription_payment_retry.failed";
});
/** A page of `SubscriptionPaymentRetry` objects. */
export type SubscriptionPaymentRetryListResponse = {
    /**
     *  [] (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data": Array<SubscriptionPaymentRetry>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `SubscriptionPaymentRetry` data. */
export type SubscriptionPaymentRetryResponse = {
    /** An attempt to collect a subscription's overdue payment. */
    "data": SubscriptionPaymentRetry;
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
export type SubscriptionPaymentRetrySucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.succeeded";
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
    "event_type": "subscription_payment_retry.succeeded";
});
/**
 * The `subscription_payment_retry.succeeded` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetrySucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.succeeded". */
    "event_type"?: "subscription_payment_retry.succeeded";
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
 * The `subscription_payment_retry.succeeded` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetrySucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.succeeded". */
    "event_type"?: "subscription_payment_retry.succeeded";
});
export type SubscriptionPaymentSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.payment_succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.payment_succeeded";
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
    "event_type": "subscription.payment_succeeded";
});
