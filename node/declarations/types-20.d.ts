import type { DeliveryZone } from './types-19.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryZoneRequestInput, CreateDemoSessionRequestInput, CreateDeviceRequestInput } from './types-7.js';
import type { DeliveryLocationSetsDeleteParams } from './types-15.js';
import type { UpdateDeliveryZoneRequestInput, UpdateDeviceRequestInput } from './types-58.js';
import type { ResetDemoSessionRequestInput } from './types-47.js';
import type { Settings, SimulateDisputeRequestInput } from './types-53.js';
import type { TaxConnection } from './types-57.js';
import type { PromotionCandidate } from './types-45.js';
import type { CreateOrderDiscount, CreateOrderDiscountInput } from './types-9.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-21.js';
import type { MoneyValue } from './types-35.js';
/**
 * The `delivery_zone.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryZoneCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.created". */
    "event_type"?: "delivery_zone.created";
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
 * The `delivery_zone.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryZoneCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.created". */
    "event_type"?: "delivery_zone.created";
});
export type DeliveryZoneDeactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.deactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.deactivated";
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
    "event_type": "delivery_zone.deactivated";
});
/**
 * The `delivery_zone.deactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryZoneDeactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.deactivated". */
    "event_type"?: "delivery_zone.deactivated";
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
 * The `delivery_zone.deactivated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryZoneDeactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.deactivated". */
    "event_type"?: "delivery_zone.deactivated";
});
/** A page of `DeliveryZone` objects. */
export type DeliveryZoneListResponse = {
    /**  [] (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data": Array<DeliveryZone>;
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
/** A response containing `DeliveryZone` data. */
export type DeliveryZoneResponse = {
    /** A geographic area served by a delivery method. */
    "data": DeliveryZone;
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
export type DeliveryZoneUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.updated";
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
    "event_type": "delivery_zone.updated";
});
/**
 * The `delivery_zone.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryZoneUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.updated". */
    "event_type"?: "delivery_zone.updated";
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
 * The `delivery_zone.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryZoneUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.updated". */
    "event_type"?: "delivery_zone.updated";
});
export type DeliveryZonesCreateParams = (InputValue<CreateDeliveryZoneRequestInput>);
export type DeliveryZonesDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryZonesGetParams = {};
export type DeliveryZonesListParams = {
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
     * Search across delivery_zone_id, name, and external_reference_id. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as dzone_01. maxLength: 255.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Filter by an active current method that references this resource. Example:
     * "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "delivery_method_id"?: InputValue<string>;
};
export type DeliveryZonesUpdateParams = (UpdateDeliveryZoneRequestInput);
/**
 * A demo session with its sandbox, API key, and expiry, returned when you create or reset a demo
 * session.
 */
export type DemoSession = {
    /** The API key issued for a demo session, with its `secret_key` and the scopes it grants. */
    "api_key": DemoSessionAPIKey;
    "demo_session_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    "sandbox_id": string;
};
/** The API key issued for a demo session, with its `secret_key` and the scopes it grants. */
export type DemoSessionAPIKey = {
    /**
     * [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
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
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
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
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
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
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
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
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    "secret_key": string;
};
/** A response containing `DemoSession` data. */
export type DemoSessionResponse = {
    /**
     * A demo session with its sandbox, API key, and expiry, returned when you create or reset a
     * demo session.
     */
    "data": DemoSession;
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
export type DemoSessionsCreateParams = (InputValue<CreateDemoSessionRequestInput>)
    & {
    /**
     * Challenge token from Flint's hosted bot check on the page that offers the demo. Flint
     * identifies the demo client by its IP address.
     */
    "Flint-Challenge-Token": InputValue<string>;
};
export type DemoSessionsResetParams = (InputValue<ResetDemoSessionRequestInput>)
    & {
    /**
     * Challenge token from Flint's hosted bot check on the page that offers the demo. Flint
     * identifies the demo client by its IP address.
     */
    "Flint-Challenge-Token": InputValue<string>;
};
/** The request body for: Create onboarding API key. */
export type DeveloperInitialAPIKeyRequest = {
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**  [] (Value): string. minLength: 1. */
    "scopes"?: Array<string>;
};
/** The request body for: Create onboarding API key. */
export type DeveloperInitialAPIKeyRequestInput = DeveloperInitialAPIKeyRequest;
/**
 * A device registered to the merchant account by hardware fingerprint, optionally assigned to a
 * location. Registering a device doesn't change how payments are accepted.
 */
export type Device = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "device_id": string;
    "hardware_fingerprint"?: string;
    "location_id"?: string;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name": string;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Persisted device configuration version. Format: uint64. minimum: 1. */
    "version": number;
};
/** A page of `Device` objects. */
export type DeviceListResponse = {
    /**
     *  [] (Value): {@link Device}. A device registered to the merchant account by hardware
     * fingerprint, optionally assigned to a location. Registering a device doesn't change how
     * payments are accepted.
     */
    "data": Array<Device>;
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
/** A response containing `Device` data. */
export type DeviceResponse = {
    /**
     * A device registered to the merchant account by hardware fingerprint, optionally assigned to
     * a location. Registering a device doesn't change how payments are accepted.
     */
    "data": Device;
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
export type DevicesCreateParams = (InputValue<CreateDeviceRequestInput>);
export type DevicesDeleteParams = {
    /** Optional device version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type DevicesGetParams = {};
export type DevicesListParams = {
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
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /** Filter by assigned Flint location ID. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "location_id"?: InputValue<string>;
    /**
     * Exact, case-sensitive match. Archived devices release their fingerprint, so this finds at
     * most the one active device that holds it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by device_id. Default:
     * "created_at". Value enum: "name", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type DevicesUpdateParams = (InputValue<UpdateDeviceRequestInput>);
/**
 * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
 */
export type DigitalFulfillmentDetails = {
    /** When the digital goods were delivered, in RFC3339 format. Format: date-time. */
    "delivered_at"?: string;
    /** URL where the recipient can access the delivered digital goods. */
    "delivery_url"?: string;
};
/** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
export type Dimensions = {
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "height": number;
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "length": number;
    /**
     * Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum:
     * "millimeter", "centimeter", "inch".
     */
    "unit": "millimeter" | "centimeter" | "inch" | (string & {});
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "width": number;
};
/** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
export type DimensionsInput = {
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "height": number;
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "length": number;
    /**
     * Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum:
     * "millimeter", "centimeter", "inch".
     */
    "unit": "millimeter" | "centimeter" | "inch";
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "width": number;
};
/** The request body for: Disconnect automatic tax. */
export type DisconnectTaxConnectionRequest = {
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Choose turn_off to stop adding tax to new orders that inherit the default, or keep to leave
     * the default unchanged. Keep refuses those orders and holds subscription renewals until
     * automatic tax is reconnected or the default is turned off. Neither choice turns tax on.
     * Value enum: "turn_off", "keep".
     */
    "tax_default_behavior": "turn_off" | "keep" | (string & {});
};
/** The request body for: Disconnect automatic tax. */
export type DisconnectTaxConnectionRequestInput = {
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Choose turn_off to stop adding tax to new orders that inherit the default, or keep to leave
     * the default unchanged. Keep refuses those orders and holds subscription renewals until
     * automatic tax is reconnected or the default is turned off. Neither choice turns tax on.
     * Value enum: "turn_off", "keep".
     */
    "tax_default_behavior": "turn_off" | "keep";
};
/** A response containing `DisconnectTaxConnectionResult` data. */
export type DisconnectTaxConnectionResponse = {
    /**
     * The disconnected automatic tax connection and merchant settings after the requested
     * default-tax change.
     */
    "data": DisconnectTaxConnectionResult;
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
/**
 * The disconnected automatic tax connection and merchant settings after the requested default-tax
 * change.
 */
export type DisconnectTaxConnectionResult = {
    /**
     * Merchant settings, as returned by GET /v1/settings. The settings for one scope
     * (organization, merchant, location, or device), grouped by area such as checkout, tax,
     * receipts, and tipping.
     */
    "settings": Settings;
    /**
     * The connection changed by this operation. Its version is the expected_version target. The
     * environment's automatic sales tax connection. Before a record exists, identity, version and
     * timestamps are omitted. Read-time business-detail changes and provider pauses do not advance
     * version or send webhooks. Status_reason and supported_actions can also change with the clock
     * as registrations end, without a version change or webhook.
     */
    "tax_connection": TaxConnection;
};
/**
 * Promotions evaluated for an order, grouped into those that were applied, those that are
 * available, and those that were skipped.
 */
export type DiscountPreview = {
    /**
     *  [] (Value): {@link PromotionCandidate}. A promotion considered for an order, with its
     * discount amounts, its stacking rules, and why it was or was not applied.
     */
    "applied": Array<PromotionCandidate>;
    /**
     *  [] (Value): {@link PromotionCandidate}. A promotion considered for an order, with its
     * discount amounts, its stacking rules, and why it was or was not applied.
     */
    "available": Array<PromotionCandidate>;
    /**
     *  [] (Value): {@link PromotionCandidate}. A promotion considered for an order, with its
     * discount amounts, its stacking rules, and why it was or was not applied.
     */
    "skipped": Array<PromotionCandidate>;
};
/** The request body for: Create discount preview. */
export type DiscountPreviewRequest = {
    /**
     * A discount to apply when creating an order: either a manual discount or a reference to a
     * promotion.
     */
    "discount"?: CreateOrderDiscount;
    /**
     * The order to evaluate. Checkout session credentials can use only their own order. minLength:
     * 1.
     */
    "order_id": string;
};
/** The request body for: Create discount preview. */
export type DiscountPreviewRequestInput = {
    /**
     * A discount to apply when creating an order: either a manual discount or a reference to a
     * promotion.
     */
    "discount"?: CreateOrderDiscountInput;
    /**
     * The order to evaluate. Checkout session credentials can use only their own order. minLength:
     * 1.
     */
    "order_id": string;
};
/** A response containing `DiscountPreview` data. */
export type DiscountPreviewResponse = {
    /**
     * Promotions evaluated for an order, grouped into those that were applied, those that are
     * available, and those that were skipped.
     */
    "data": DiscountPreview;
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
export type DiscountPreviewsCreateParams = (InputValue<DiscountPreviewRequestInput>);
/** A challenge to a collected payment. */
export type Dispute = {
    /**
     * Amount in dispute. For a chargeback, this amount left your balance when the case opened; an
     * inquiry moves no money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Whether this dispute has an evidence response window. It stays true after the window closes
     * or a decision is made. Use is_action_required to know whether a response is needed now.
     */
    "can_respond_with_evidence": boolean;
    /**
     * Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other",
     * "bank_return".
     */
    "case_type": "inquiry"
        | "chargeback"
        | "compliance"
        | "resolution"
        | "block"
        | "other"
        | "bank_return"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** The customer on the disputed payment. Absent when the payment has none. */
    "customer_id"?: string;
    /** Stable identifier of the dispute. */
    "dispute_id": string;
    /**
     * Deadline for submitting evidence. Respond before it when is_action_required is true. `null`
     * when the dispute has no response window, such as a bank return or a case your processor gave
     * no deadline for. Format: date-time.
     */
    "evidence_due_at": string | null;
    /**
     * How many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     */
    "evidence_submission_count": number;
    /**
     * The fraud warning the card network sent for this payment before the dispute. Absent when
     * there was none.
     */
    "fraud_warning_id"?: string;
    /**
     * Whether evidence is saved for this dispute, submitted or not. evidence_submission_count says
     * whether it was submitted.
     */
    "has_evidence": boolean;
    /**
     * Whether you need to respond now: true while status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Flint evaluates it each time you read the dispute, so it turns false when the
     * deadline passes without a webhook.
     */
    "is_action_required": boolean;
    /**
     * Whether evidence_due_at has passed on a dispute with a response window. Flint evaluates it
     * each time you read the dispute. Always false when can_respond_with_evidence is false.
     */
    "is_evidence_deadline_passed": boolean;
    "merchant_id": string;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    "order_id"?: string;
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    "payment_intent_id"?: string;
    /** Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
    /**
     * Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     */
    "reason": "fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other"
        | (string & {});
    /**
     * Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason
     * is reported. Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable".
     */
    "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
    /**
     * Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "status": "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Recorded time of the current status. On first observation this is the dispute creation time.
     * Later status changes use the provider event time when available, or the time Flint observed
     * the change. This may not be the exact decision or submission time. Format: date-time.
     */
    "status_changed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
export type DisputeCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.created";
})
    & {
    "event_type": "dispute.created";
});
export type DisputeInquiryClosedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.inquiry_closed";
})
    & {
    "event_type": "dispute.inquiry_closed";
});
/** A page of `Dispute` objects. */
export type DisputeListResponse = {
    /**  [] (Value): {@link Dispute}. A challenge to a collected payment. */
    "data": Array<Dispute>;
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
export type DisputeLostEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.lost";
})
    & {
    "event_type": "dispute.lost";
});
export type DisputeNeedsResponseEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.needs_response";
})
    & {
    "event_type": "dispute.needs_response";
});
export type DisputePreventedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.prevented";
})
    & {
    "event_type": "dispute.prevented";
});
/** A response containing `Dispute` data. */
export type DisputeResponse = {
    /** A challenge to a collected payment. */
    "data": Dispute;
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
/**
 * A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived
 * `client_session` for the embedded response component.
 */
export type DisputeResponseSession = {
    /**
     * Browser session for responding to a dispute, with its expiry and the Stripe details needed
     * to load the embedded response component.
     */
    "client_session": DisputeResponseSessionClientSession;
    "dispute_id": string;
};
/**
 * Browser session for responding to a dispute, with its expiry and the Stripe details needed to
 * load the embedded response component.
 */
export type DisputeResponseSessionClientSession = {
    /** Time the browser session expires. Format: date-time. */
    "expires_at": string;
    /**
     * Stripe details for the embedded dispute response component: the publishable key, an account
     * session, and the components to render.
     */
    "stripe": DisputeResponseSessionStripe;
};
/** A response containing `DisputeResponseSession` data. */
export type DisputeResponseSessionResponse = {
    /**
     * A session for responding to a dispute in the browser, with the `dispute_id` and a
     * short-lived `client_session` for the embedded response component.
     */
    "data": DisputeResponseSession;
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
/**
 * Stripe details for the embedded dispute response component: the publishable key, an account
 * session, and the components to render.
 */
export type DisputeResponseSessionStripe = {
    /**
     * Single-use account session secret and the Stripe.js call that uses it to load the embedded
     * dispute response component.
     */
    "account_session": DisputeResponseSessionStripeAccountSession;
    /**
     * minItems: 1. maxItems: 1. [] (Value): {@link DisputeResponseSessionStripeComponent}. An
     * embedded Stripe component to render for the dispute response session, with the payment
     * reference to pass to it.
     */
    "components": Array<DisputeResponseSessionStripeComponent>;
    "publishable_key": string;
};
/**
 * Single-use account session secret and the Stripe.js call that uses it to load the embedded
 * dispute response component.
 */
export type DisputeResponseSessionStripeAccountSession = {
    /**
     * Single-use account session secret for fetchClientSecret. Create another response session
     * when a fresh secret is needed.
     */
    "client_secret": string;
    /**
     * Call loadConnectAndInitialize with publishableKey and fetchClientSecret. Value enum:
     * "load_connect_and_initialize".
     */
    "stripe_js_call": "load_connect_and_initialize" | (string & {});
};
/**
 * An embedded Stripe component to render for the dispute response session, with the payment
 * reference to pass to it.
 */
export type DisputeResponseSessionStripeComponent = {
    /** Value enum: "payment_disputes". */
    "component": "payment_disputes" | (string & {});
    /** Stripe payment reference to pass to setPayment or the React payment prop. */
    "payment": string;
};
export type DisputeUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.updated";
})
    & {
    "event_type": "dispute.updated";
});
export type DisputeWonEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.won";
})
    & {
    "event_type": "dispute.won";
});
export type DisputesAcceptParams = {};
export type DisputesCreateResponseSessionParams = {};
export type DisputesGetParams = {
    /**
     * Supported expansions: customer, order, payment_intent. Expansion requires
     * payments.disputes.read plus the read scope for each expanded resource. Limits: at most 10
     * unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or
     * pass one comma-separated value. [] enum: "customer", "order", "payment_intent". Value enum:
     * "customer", "order", "payment_intent". anyOf[1] (Value): Array of string. [] enum:
     * "customer", "order", "payment_intent". anyOf[1][] (Value): string. Value enum: "customer",
     * "order", "payment_intent". anyOf[2] (Value): string. Value enum: "customer", "order",
     * "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
};
export type DisputesListParams = {
    /** Inclusive lower bound on updated_at. Format: date-time. */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Optional Flint payment intent ID filter. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_intent_id"?: InputValue<string>;
    /** Optional Flint order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Optional Flint customer ID filter. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Optional dispute status filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". Value enum: "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". anyOf[1][] (Value): string. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): string. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other".
     */
    "status"?: InputValue<("inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")
        | readonly ("inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")[]>;
    /**
     * Optional normalized dispute reason filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". Value enum:
     * "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "fraudulent", "unrecognized", "duplicate",
     * "product_not_received", "product_not_as_described", "refund_not_processed",
     * "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized",
     * "bank_account_not_found", "other". anyOf[1][] (Value): string. Value enum: "fraudulent",
     * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
     * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
     * "debit_not_authorized", "bank_account_not_found", "other". anyOf[2] (Value): string. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     */
    "reason"?: InputValue<("fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other")
        | readonly ("fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other")[]>;
    /**
     * Optional dispute case type filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". Value
     * enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "inquiry", "chargeback",
     * "compliance", "resolution", "block", "other", "bank_return". anyOf[1][] (Value): string.
     * Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other",
     * "bank_return". anyOf[2] (Value): string. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return".
     */
    "case_type"?: InputValue<("inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return")
        | readonly ("inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return")[]>;
    /**
     * Filter by whether a merchant response is needed now. True includes needs_response and
     * inquiry_needs_response disputes that allow evidence and whose evidence deadline has not
     * passed; false includes the remaining disputes.
     */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by dispute_id. Default:
     * "created_at". Value enum: "created_at", "evidence_due_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "evidence_due_at" | "amount_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Inclusive lower bound on evidence_due_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "evidence_due_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on evidence_due_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "evidence_due_before"?: InputValue<string | globalThis.Date>;
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
     * Supported expansions: customer, order, payment_intent. Include the requested related
     * resources using scoped batch reads for this page. Each relationship requires its existing
     * target read scopes. Expansion changes the representation without changing pagination tokens.
     * Limits: at most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer",
     * "order", "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "order", "payment_intent". anyOf[1][]
     * (Value): string. Value enum: "customer", "order", "payment_intent". anyOf[2] (Value):
     * string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
};
export type DisputesSimulateParams = (InputValue<SimulateDisputeRequestInput>);
/**
 * A tax identifier printed on documents, with its country, optional region, identifier type, and
 * value. Flint does not verify the value.
 */
export type DocumentTaxID = {
    /**
     * Two-letter ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * Example: "US".
     */
    "country": string;
    /**
     * Server-generated identity of an existing entry. Omit when adding an entry. minLength: 1.
     * pattern: ^dti_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "document_tax_id"?: string;
    /**
     * Provider-independent identifier type, for example vat, gst, or ein. This is an open
     * vocabulary. minLength: 1. maxLength: 64. pattern: ^[a-z][a-z0-9_]*$.
     */
    "identifier_type": string;
    /** minLength: 1. maxLength: 64. */
    "region"?: string;
    /**
     * Full identifier printed on documents. Not verified by Flint. minLength: 1. maxLength: 255.
     */
    "value": string;
};
