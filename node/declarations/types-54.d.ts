import type {
    SubscriptionBillingScheduleUpdateInputExternal,
    SubscriptionBillingScheduleUpdateInputExternalInput,
    Subscription,
    SubscriptionAddressVerification
} from './types-53.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { DeliveryRecipientResource } from './types-18.js';
import type { MoneyValue } from './types-35.js';
import type { Address, AddressRequestInput } from './types-0.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionDeliveryMigrationRequestInput } from './types-11.js';
import type { DeliverySelectionRecipientRequest, DeliverySelectionRecipientRequestInput } from './types-19.js';
import type { SubscriptionServiceLocationRequest } from './types-56.js';
/** The `flint` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputFlint = {
    /**
     * UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a
     * moved next_billing_at. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /** Future date at which Flint attempts the next charge. Format: date-time. minLength: 1. */
    "next_billing_at": string;
    /** Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/** The `flint` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputFlintInput = {
    /**
     * UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a
     * moved next_billing_at. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /** Future date at which Flint attempts the next charge. Format: date-time. minLength: 1. */
    "next_billing_at": string | globalThis.Date;
    /** Value enum: "flint". */
    "owner": "flint";
};
/** A closed owner-specific billing schedule update. */
export type SubscriptionBillingScheduleUpdateRequest = ((SubscriptionBillingScheduleUpdateInputFlint)
    | (SubscriptionBillingScheduleUpdateInputExternal)
    | (Record<string, unknown>));
/** A closed owner-specific billing schedule update. */
export type SubscriptionBillingScheduleUpdateRequestInput = ((SubscriptionBillingScheduleUpdateInputFlintInput)
    | (SubscriptionBillingScheduleUpdateInputExternalInput));
/** The `immediate` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImmediate = {
    /** Value enum: "immediate". */
    "type": "immediate" | (string & {});
};
/** The `immediate` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImmediateInput = {
    /** Value enum: "immediate". */
    "type": "immediate";
};
/** The `imported` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImported = {
    /**
     * Number of billing cycles already charged on the previous billing system, including the
     * current imported period. The subscription's completed_cycles starts here, and the next
     * renewal's subscription_cycle is this number plus one. minimum: 0. Default: 0.
     */
    "completed_cycles"?: number;
    /**
     * Start of the already-running billing period being imported. Format: date-time. minLength: 1.
     */
    "period_started_at": string;
    /** Value enum: "imported". */
    "type": "imported" | (string & {});
};
/** The `imported` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImportedInput = {
    /**
     * Number of billing cycles already charged on the previous billing system, including the
     * current imported period. The subscription's completed_cycles starts here, and the next
     * renewal's subscription_cycle is this number plus one. minimum: 0. Default: 0.
     */
    "completed_cycles"?: number;
    /**
     * Start of the already-running billing period being imported. Format: date-time. minLength: 1.
     */
    "period_started_at": string | globalThis.Date;
    /** Value enum: "imported". */
    "type": "imported";
};
/** The `scheduled` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputScheduled = {
    /** Future instant when the first billing period starts. Format: date-time. minLength: 1. */
    "starts_at": string;
    /** Value enum: "scheduled". */
    "type": "scheduled" | (string & {});
};
/** The `scheduled` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputScheduledInput = {
    /** Future instant when the first billing period starts. Format: date-time. minLength: 1. */
    "starts_at": string | globalThis.Date;
    /** Value enum: "scheduled". */
    "type": "scheduled";
};
/** How billing begins. Send exactly one closed tagged-union branch. */
export type SubscriptionBillingStartRequest = ((SubscriptionBillingStartInputImmediate)
    | (SubscriptionBillingStartInputScheduled)
    | (SubscriptionBillingStartInputImported)
    | (Record<string, unknown>));
/** How billing begins. Send exactly one closed tagged-union branch. */
export type SubscriptionBillingStartRequestInput = ((SubscriptionBillingStartInputImmediateInput)
    | (SubscriptionBillingStartInputScheduledInput)
    | (SubscriptionBillingStartInputImportedInput));
export type SubscriptionCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.canceled";
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
    "event_type": "subscription.canceled";
});
/**
 * The `subscription.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.canceled". */
    "event_type"?: "subscription.canceled";
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
 * The `subscription.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.canceled". */
    "event_type"?: "subscription.canceled";
});
/** The cancellation request behind a scheduled or completed cancellation. */
export type SubscriptionCancellationDetails = {
    /**
     * What the requester wrote. Only merchant credentials read it; buyers never receive it.
     * Omitted when none was given, and cleared when the customer is deleted. maxLength: 500.
     */
    "comment"?: string;
    /**
     * The reason the requester chose. Omitted when none was given. Value enum: "too_expensive",
     * "missing_features", "switched_service", "unused", "customer_service", "too_complex",
     * "low_quality", "other".
     */
    "reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /** When the cancellation was requested. Format: date-time. */
    "requested_at": string;
    /**
     * buyer: the buyer, in Flint's buyer account or with a customer session. merchant: a merchant
     * credential, such as an API key or the dashboard. Value enum: "buyer", "merchant".
     */
    "requested_by": "buyer" | "merchant" | (string & {});
};
export type SubscriptionCancellationScheduledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cancellation_scheduled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cancellation_scheduled";
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
    "event_type": "subscription.cancellation_scheduled";
});
/**
 * The `subscription.cancellation_scheduled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionCancellationScheduledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.cancellation_scheduled". */
    "event_type"?: "subscription.cancellation_scheduled";
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
 * The `subscription.cancellation_scheduled` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionCancellationScheduledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.cancellation_scheduled". */
    "event_type"?: "subscription.cancellation_scheduled";
});
/** Counts of subscriptions by status: active, past due, and paused. */
export type SubscriptionCounts = {
    /** Format: int64. */
    "active": number;
    /** Format: int64. */
    "past_due": number;
    /** Format: int64. */
    "paused": number;
};
export type SubscriptionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.created";
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
    "event_type": "subscription.created";
});
/**
 * The `subscription.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.created". */
    "event_type"?: "subscription.created";
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
 * The `subscription.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.created". */
    "event_type"?: "subscription.created";
});
export type SubscriptionCycleSkippedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cycle_skipped";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cycle_skipped";
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
    "event_type": "subscription.cycle_skipped";
});
/**
 * The `subscription.cycle_skipped` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionCycleSkippedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.cycle_skipped". */
    "event_type"?: "subscription.cycle_skipped";
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
 * The `subscription.cycle_skipped` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type SubscriptionCycleSkippedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.cycle_skipped". */
    "event_type"?: "subscription.cycle_skipped";
});
/**
 * A subscription's saved delivery preference: method, destination, recipient, shipping cost, and
 * who last changed it.
 */
export type SubscriptionDelivery = {
    /**
     * The verification state of a subscription's delivery address: `verified`, `unverified`,
     * `needs_review`, or `unverifiable`.
     */
    "address_verification"?: SubscriptionAddressVerification;
    /**
     * A short summary of a subscription's delivery method: name, description, type, and whether
     * its price is fixed or quoted.
     */
    "delivery_method"?: SubscriptionDeliveryMethodSummary;
    "delivery_method_id": string;
    /** Version of the subscription's saved delivery preference. Format: uint64. minimum: 0. */
    "delivery_version": number;
    /**
     * The delivery address for a subscription's future shipments, with the saved customer address
     * it came from.
     */
    "destination": SubscriptionDeliveryDestination;
    /** The person receiving a delivery selection, with optional `name`, `email`, and `phone`. */
    "recipient"?: DeliveryRecipientResource;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "shipping_money"?: MoneyValue;
    /** Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Who last changed the delivery preference. Omitted until the preference changes after
     * creation. Pairs with updated_at. Value enum: "buyer", "merchant", "migration".
     */
    "updated_by"?: "buyer" | "merchant" | "migration" | (string & {});
};
export type SubscriptionDeliveryActionRequiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_action_required";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_action_required";
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
    "event_type": "subscription.delivery_action_required";
});
/**
 * The `subscription.delivery_action_required` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionDeliveryActionRequiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.delivery_action_required". */
    "event_type"?: "subscription.delivery_action_required";
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
 * The `subscription.delivery_action_required` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionDeliveryActionRequiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.delivery_action_required". */
    "event_type"?: "subscription.delivery_action_required";
});
/**
 * The delivery address for a subscription's future shipments, with the saved customer address it
 * came from.
 */
export type SubscriptionDeliveryDestination = {
    /**
     * Resolved delivery address used by future shipments. anyOf[1] (Value): {@link Address}. A
     * postal address. Every address has country. Addresses Flint checked as complete (customer and
     * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country. anyOf[2] (Value):
     * null.
     */
    "address": ((Address) | (null));
    /**
     * Display reference to the saved customer address used when this destination was written.
     * Editing that saved address does not change the subscription destination.
     */
    "customer_address_id"?: string;
};
/** The `address` variant of `SubscriptionDeliveryDestinationInput`. */
export type SubscriptionDeliveryDestinationInputAddressInput = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequestInput;
    /** Value enum: "address". */
    "type": "address";
};
/** The `customer_address` variant of `SubscriptionDeliveryDestinationInput`. */
export type SubscriptionDeliveryDestinationInputCustomerAddressInput = {
    /** minLength: 1. pattern: ^caddr_[0-9A-HJKMNP-TV-Z]{26}$. */
    "customer_address_id": string;
    /** Value enum: "customer_address". */
    "type": "customer_address";
};
/** Where to deliver a subscription: a saved customer address by ID, or a new address. */
export type SubscriptionDeliveryDestinationRequestInput = ((SubscriptionDeliveryDestinationInputCustomerAddressInput)
    | (SubscriptionDeliveryDestinationInputAddressInput));
/**
 * A hold on a subscription's deliveries because its delivery method or destination no longer
 * works, and who can fix it.
 */
export type SubscriptionDeliveryHold = {
    /** RFC3339 timestamp. Format: date-time. */
    "ends_at": string;
    /** Value enum: "buyer", "merchant". */
    "fixable_by": "buyer" | "merchant" | (string & {});
    /** Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". */
    "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "started_at": string;
};
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
