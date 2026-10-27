import type { InputValue } from '../runtime.js';
import type {
    UpdateOrderChargeRequestInput,
    UpdateOrderRequestInput,
    UpdateLineItemRequestInput,
    UpdateOrganizationRequestInput,
    UpdatePackageRequestInput,
    UpdatePackageItemRequestInput
} from './types-48.js';
import type {
    ExpandedOrganizationSummary,
    Dimensions,
    ExpandedOrderSummary,
    DimensionsInput,
    DeveloperListPartnerInstallsInput
} from './types-16.js';
import type { ResponseMeta } from './types-40.js';
import type { CreateOrganizationRequestInput, CreatePackageItemRequest, CreatePackageItemRequestInput } from './types-7.js';
import type { GrantOrganizationMembershipRequestInput } from './types-19.js';
import type { ReturnResolutionLineItemRequest, ReturnShipmentLineItemAllocationInput } from './types-42.js';
import type { Weight, WeightInput } from './types-61.js';
import type { FulfillmentTransitionRequestMarkPackedInput } from './types-18.js';
import type { VoidPackageRequestInput } from './types-50.js';
import type { PartnerAppPermissionManifestEntry, PartnerEnvironmentGrant } from './types-35.js';
export type OrdersUpdateChargeInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "order_charge_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateOrderChargeRequestInput}. The request body for: Update order
     * charge.
     */
    "body": InputValue<UpdateOrderChargeRequestInput>;
};
export type OrdersUpdateInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateOrderRequestInput}. The request body for: Update order.
     * minProperties: 1.
     */
    "body": InputValue<UpdateOrderRequestInput>;
};
export type OrdersUpdateLineItemInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "order_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateLineItemRequestInput}. The request body for: Update line item.
     */
    "body": InputValue<UpdateLineItemRequestInput>;
};
/** Shape $ (Value): {@link Organization}. An organization that manages merchant accounts. */
export type Organization = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "organization_id": string;
    /**
     * Shape $ (Value): {@link ExpandedOrganizationSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedOrganizationSummary}. An organization's summary fields, such as its name,
     * status, and parent, returned when the organization is expanded. Shape $.anyOf[2] (Value):
     * null.
     */
    "parent_organization"?: ((ExpandedOrganizationSummary) | (null));
    /** Shape $ (Value): string. */
    "parent_organization_id"?: string;
    /**
     * Shape $ (Value): string. Current status. Archived: deleted. API keys can no longer read or
     * list the organization. Value enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted organization configuration and membership
     * version. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link OrganizationListResponse}. A page of `Organization` objects. */
export type OrganizationListResponse = {
    /**
     * Shape $ (Value): Array of {@link Organization}. Shape $[] (Value): {@link Organization}. An
     * organization that manages merchant accounts.
     */
    "data": Array<Organization>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link OrganizationMembership}. A user's membership in an organization, with
 * the role and whether it is active or removed.
 */
export type OrganizationMembership = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "organization_id": string;
    /** Shape $ (Value): string.  Value enum: "owner", "admin", "operator", "viewer". */
    "role": "owner" | "admin" | "operator" | "viewer" | (string & {});
    /** Shape $ (Value): string.  Value enum: "active", "removed". */
    "status": "active" | "removed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Shape $ (Value): string. */
    "user_id": string;
};
/**
 * Shape $ (Value): {@link OrganizationMembershipListResponse}. A page of `OrganizationMembership`
 * objects.
 */
export type OrganizationMembershipListResponse = {
    /**
     * Shape $ (Value): Array of {@link OrganizationMembership}. Shape $[] (Value): {@link
     * OrganizationMembership}. A user's membership in an organization, with the role and whether
     * it is active or removed.
     */
    "data": Array<OrganizationMembership>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link OrganizationMembershipResponse}. A response containing
 * `OrganizationMembership` data.
 */
export type OrganizationMembershipResponse = {
    /**
     * Shape $ (Value): {@link OrganizationMembership}. A user's membership in an organization,
     * with the role and whether it is active or removed.
     */
    "data": OrganizationMembership;
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
/** Shape $ (Value): {@link OrganizationResponse}. A response containing `Organization` data. */
export type OrganizationResponse = {
    /** Shape $ (Value): {@link Organization}. An organization that manages merchant accounts. */
    "data": Organization;
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
export type OrganizationsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateOrganizationRequestInput}. The request body for: Create
     * organization.
     */
    "body": InputValue<CreateOrganizationRequestInput>;
};
export type OrganizationsGetInput = {
    /** Shape $ (Value): string. */
    "organization_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "parent_organization". Shape $[] (Value): string.
     * Value enum: "parent_organization".
     */
    "expand"?: InputValue<Array<"parent_organization">>;
};
export type OrganizationsGrantMembershipInput = {
    /** Shape $ (Value): string. */
    "organization_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link GrantOrganizationMembershipRequestInput}. The request body for:
     * Grant organization membership.
     */
    "body": InputValue<GrantOrganizationMembershipRequestInput>;
};
export type OrganizationsListInput = {
    /** Shape $ (Value): string. */
    "parent_organization_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "name", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
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
    /**
     * Shape $ (Value): Array of string. [] enum: "parent_organization". Shape $[] (Value): string.
     * Value enum: "parent_organization".
     */
    "expand"?: InputValue<Array<"parent_organization">>;
};
export type OrganizationsListMembershipsInput = {
    /** Shape $ (Value): string. */
    "organization_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type OrganizationsRemoveInput = {
    /** Shape $ (Value): string. */
    "organization_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type OrganizationsRevokeMembershipInput = {
    /** Shape $ (Value): string. */
    "organization_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "user_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type OrganizationsUpdateInput = {
    /** Shape $ (Value): string. */
    "organization_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateOrganizationRequestInput}. The request body for: Update
     * organization. minProperties: 1.
     */
    "body": InputValue<UpdateOrganizationRequestInput>;
};
/** Shape $ (Value): {@link Package}. A package within a shipment. */
export type Package = {
    /** Shape $ (Value): string. Carrier transporting the package. */
    "carrier"?: string;
    /** Shape $ (Value): string. Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. Package delivery timestamp. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): {@link Dimensions}. Physical length, width, and height of the package.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Null when no estimate is set. Retained after delivery as history. This estimate is
     * separate from the fulfillment's promised shipment window. Format: date-time.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Shape $ (Value): string. Fulfillment whose items are in the package. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified.
     */
    "label_url"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned key-value metadata associated with the package.
     * Shape $.* (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Order summary returned when the order
     * relationship is expanded. Shape $.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. Order whose items are in the package. */
    "order_id": string;
    /** Shape $ (Value): string. Stable identifier of the package. */
    "package_id": string;
    /**
     * Shape $ (Value): string. Return this package belongs to. Present only on packages of return
     * shipments.
     */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Return line quantities
     * allocated to this parcel. Present only on packages of return shipments. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
     * shipment or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Shape $ (Value): string. Carrier service used for the package. */
    "service_code"?: string;
    /** Shape $ (Value): string. Shipment carrying this package. */
    "shipment_id": string;
    /** Shape $ (Value): string. Package handoff timestamp. Format: date-time. */
    "shipped_at"?: string;
    /**
     * Shape $ (Value): string. Current package lifecycle state. Package states are the source used
     * to derive shipment status. - `created`: The package record exists but has not been packed or
     * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The
     * package was handed to the carrier. - `in_transit`: The carrier is moving the package through
     * its network. - `out_for_delivery`: The package is on its final delivery route. -
     * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier
     * attempted delivery but did not complete it. Follow the carrier instructions before retrying
     * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
     * carrier-reported issue. - `returned`: The package was returned toward or to its origin. -
     * `voided`: The package was voided and will not continue through delivery. Value enum:
     * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Shape $ (Value): string. Additional explanation of the package's current status. */
    "status_reason"?: string;
    /**
     * Shape $ (Value): Array of string. Read-only actions currently supported for this package. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped". Shape $[] (Value):
     * string. Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception",
     * "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
        | (string & {})>;
    /**
     * Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified.
     */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified.
     */
    "tracking_url"?: string;
    /** Shape $ (Value): string. Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Monotonic package version for expected_version checks. Use
     * an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
    /**
     * Shape $ (Value): {@link Weight}. Physical weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "weight"?: Weight;
};
/**
 * Shape $ (Value): {@link PackageCreateInputCreated}. The `created` variant of
 * `PackageCreateInput`.
 */
export type PackageCreateInputCreated = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): Array of {@link CreatePackageItemRequest}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequest}. The request body for:
     * Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Required for a package on
     * a return shipment: allocates quantities from the shipment's return_line_items to this
     * parcel. Rejected on outbound shipments. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /** Shape $ (Value): string.  Value enum: "created". */
    "status": "created" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * Shape $ (Value): {@link PackageCreateInputCreatedInput}. The `created` variant of
 * `PackageCreateInput`.
 */
export type PackageCreateInputCreatedInput = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): Array of {@link CreatePackageItemRequestInput}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequestInput}. The request body
     * for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link ReturnShipmentLineItemAllocationInput}. Required for a
     * package on a return shipment: allocates quantities from the shipment's return_line_items to
     * this parcel. Rejected on outbound shipments. Shape $[] (Value): {@link
     * ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a return
     * shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "created". */
    "status": "created";
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or pounds,
     * used in delivery profile configuration.
     */
    "weight"?: WeightInput;
})
    & (({
    "shipped_at"?: never;
}))
    & (({
    "buyer_notification_behavior"?: never;
}));
/**
 * Shape $ (Value): {@link PackageCreateInputShipped}. The `shipped` variant of
 * `PackageCreateInput`.
 */
export type PackageCreateInputShipped = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): Array of {@link CreatePackageItemRequest}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequest}. The request body for:
     * Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Required for a package on
     * a return shipment: allocates quantities from the shipment's return_line_items to this
     * parcel. Rejected on outbound shipments. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /** Shape $ (Value): string.  Value enum: "shipped". */
    "status": "shipped" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * Shape $ (Value): {@link PackageCreateInputShippedInput}. The `shipped` variant of
 * `PackageCreateInput`.
 */
export type PackageCreateInputShippedInput = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): Array of {@link CreatePackageItemRequestInput}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequestInput}. The request body
     * for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link ReturnShipmentLineItemAllocationInput}. Required for a
     * package on a return shipment: allocates quantities from the shipment's return_line_items to
     * this parcel. Rejected on outbound shipments. Shape $[] (Value): {@link
     * ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a return
     * shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "shipped". */
    "status": "shipped";
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or pounds,
     * used in delivery profile configuration.
     */
    "weight"?: WeightInput;
})
    & (({
    "return_line_items"?: never;
}));
/** Shape $ (Value): {@link PackageCreateRequest}. The request body for: Create package. */
export type PackageCreateRequest = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): Array of {@link CreatePackageItemRequest}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequest}. The request body for:
     * Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Required for a package on
     * a return shipment: allocates quantities from the shipment's return_line_items to this
     * parcel. Rejected on outbound shipments. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /** Shape $ (Value): string.  Value enum: "created", "shipped". */
    "status": "created" | "shipped" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<PackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link PackageCreateRequestInput}. The request body for: Create package. */
export type PackageCreateRequestInput = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): Array of {@link CreatePackageItemRequestInput}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequestInput}. The request body
     * for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link ReturnShipmentLineItemAllocationInput}. Required for a
     * package on a return shipment: allocates quantities from the shipment's return_line_items to
     * this parcel. Rejected on outbound shipments. Shape $[] (Value): {@link
     * ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a return
     * shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "created", "shipped". */
    "status": "created" | "shipped";
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or pounds,
     * used in delivery profile configuration.
     */
    "weight"?: WeightInput;
})
    & ((Exclude<PackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShippedInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link PackageItem}. An order item assigned to a package. */
export type PackageItem = {
    /** Shape $ (Value): string. Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "package_id": string;
    /** Shape $ (Value): string. */
    "package_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "shipment_id": string;
    /** Shape $ (Value): string. Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted item version, independent of package shipment and
     * capacity guards. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link PackageItemListResponse}. A page of `PackageItem` objects. */
export type PackageItemListResponse = {
    /**
     * Shape $ (Value): Array of {@link PackageItem}. Shape $[] (Value): {@link PackageItem}. An
     * order item assigned to a package.
     */
    "data": Array<PackageItem>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link PackageItemResponse}. A response containing `PackageItem` data. */
export type PackageItemResponse = {
    /** Shape $ (Value): {@link PackageItem}. An order item assigned to a package. */
    "data": PackageItem;
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
/** Shape $ (Value): {@link PackageListResponse}. A page of `Package` objects. */
export type PackageListResponse = {
    /**
     * Shape $ (Value): Array of {@link Package}. Shape $[] (Value): {@link Package}. A package
     * within a shipment.
     */
    "data": Array<Package>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link PackageResponse}. A response containing `Package` data. */
export type PackageResponse = {
    /** Shape $ (Value): {@link Package}. A package within a shipment. */
    "data": Package;
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
/** Shape $ (Value): {@link PackageTransitionRequest}. The request body for: Transition package. */
export type PackageTransitionRequest = ((PackageTransitionRequestMarkDelivered)
    | (PackageTransitionRequestMarkDeliveryAttempted)
    | (PackageTransitionRequestMarkException)
    | (PackageTransitionRequestMarkInTransit)
    | (PackageTransitionRequestMarkOutForDelivery)
    | (PackageTransitionRequestMarkPacked)
    | (PackageTransitionRequestMarkReturned)
    | (PackageTransitionRequestMarkShipped)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PackageTransitionRequestInput}. The request body for: Transition
 * package.
 */
export type PackageTransitionRequestInput = ((PackageTransitionRequestMarkDeliveredInput)
    | (PackageTransitionRequestMarkDeliveryAttemptedInput)
    | (PackageTransitionRequestMarkExceptionInput)
    | (PackageTransitionRequestMarkInTransitInput)
    | (PackageTransitionRequestMarkOutForDeliveryInput)
    | (PackageTransitionRequestMarkPackedInput)
    | (PackageTransitionRequestMarkReturnedInput)
    | (PackageTransitionRequestMarkShippedInput));
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkDelivered}. The `mark_delivered` variant of
 * `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkDelivered = {
    /** Shape $ (Value): string.  Value enum: "mark_delivered". */
    "action": "mark_delivered" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkDeliveredInput}. The `mark_delivered`
 * variant of `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkDeliveredInput = {
    /** Shape $ (Value): string.  Value enum: "mark_delivered". */
    "action": "mark_delivered";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkDeliveryAttempted}. The
 * `mark_delivery_attempted` variant of `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkDeliveryAttempted = {
    /** Shape $ (Value): string.  Value enum: "mark_delivery_attempted". */
    "action": "mark_delivery_attempted" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkDeliveryAttemptedInput}. The
 * `mark_delivery_attempted` variant of `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkDeliveryAttemptedInput = {
    /** Shape $ (Value): string.  Value enum: "mark_delivery_attempted". */
    "action": "mark_delivery_attempted";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkException}. The `mark_exception` variant of
 * `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkException = {
    /** Shape $ (Value): string.  Value enum: "mark_exception". */
    "action": "mark_exception" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkExceptionInput}. The `mark_exception`
 * variant of `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkExceptionInput = {
    /** Shape $ (Value): string.  Value enum: "mark_exception". */
    "action": "mark_exception";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkInTransit}. The `mark_in_transit` variant of
 * `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkInTransit = {
    /** Shape $ (Value): string.  Value enum: "mark_in_transit". */
    "action": "mark_in_transit" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkInTransitInput}. The `mark_in_transit`
 * variant of `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkInTransitInput = {
    /** Shape $ (Value): string.  Value enum: "mark_in_transit". */
    "action": "mark_in_transit";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkOutForDelivery}. The `mark_out_for_delivery`
 * variant of `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkOutForDelivery = {
    /** Shape $ (Value): string.  Value enum: "mark_out_for_delivery". */
    "action": "mark_out_for_delivery" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkOutForDeliveryInput}. The
 * `mark_out_for_delivery` variant of `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkOutForDeliveryInput = {
    /** Shape $ (Value): string.  Value enum: "mark_out_for_delivery". */
    "action": "mark_out_for_delivery";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkPacked}. The `mark_packed` variant of
 * `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkPacked = {
    /** Shape $ (Value): string.  Value enum: "mark_packed". */
    "action": "mark_packed" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkPackedInput}. The `mark_packed` variant of
 * `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkPackedInput = FulfillmentTransitionRequestMarkPackedInput;
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkReturned}. The `mark_returned` variant of
 * `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkReturned = {
    /** Shape $ (Value): string.  Value enum: "mark_returned". */
    "action": "mark_returned" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkReturnedInput}. The `mark_returned` variant
 * of `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkReturnedInput = {
    /** Shape $ (Value): string.  Value enum: "mark_returned". */
    "action": "mark_returned";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkShipped}. The `mark_shipped` variant of
 * `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkShipped = {
    /** Shape $ (Value): string.  Value enum: "mark_shipped". */
    "action": "mark_shipped" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "service_code"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1. maxLength: 2048.
     */
    "tracking_url"?: string;
};
/**
 * Shape $ (Value): {@link PackageTransitionRequestMarkShippedInput}. The `mark_shipped` variant of
 * `PackageTransitionRequest`.
 */
export type PackageTransitionRequestMarkShippedInput = {
    /** Shape $ (Value): string.  Value enum: "mark_shipped". */
    "action": "mark_shipped";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "service_code"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1. maxLength: 2048.
     */
    "tracking_url"?: string;
};
export type PackagesCreateItemInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePackageItemRequestInput}. The request body for: Create package
     * item.
     */
    "body": InputValue<CreatePackageItemRequestInput>;
};
export type PackagesDeleteItemInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "package_item_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type PackagesGetInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
export type PackagesGetItemInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "package_item_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
export type PackagesListInput = {
    /** Shape $ (Value): string. */
    "shipment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "external_system"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Shape $[] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "status"?: InputValue<Array<"created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "tracking_number"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "carrier"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
export type PackagesListPackageItemsInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
export type PackagesTransitionInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link PackageTransitionRequestInput}. The request body for: Transition
     * package.
     */
    "body": InputValue<PackageTransitionRequestInput>;
};
export type PackagesUpdateInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link UpdatePackageRequestInput}. The request body for: Update package. */
    "body": InputValue<UpdatePackageRequestInput>;
};
export type PackagesUpdateItemInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "package_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePackageItemRequestInput}. The request body for: Update package
     * item.
     */
    "body": InputValue<UpdatePackageItemRequestInput>;
};
export type PackagesVoidResourceInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link VoidPackageRequestInput}. The request body for: Void package. */
    "body"?: InputValue<VoidPackageRequestInput>;
};
/**
 * Shape $ (Value): {@link PartnerApp}. An application that merchants can authorize to access their
 * accounts.
 */
export type PartnerApp = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "allowed_scopes": Array<string>;
    /** Shape $ (Value): string. */
    "api_version": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "api_version_changed_at"?: string;
    /** Shape $ (Value): string. */
    "api_version_previous"?: string;
    /** Shape $ (Value): string. */
    "client_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "default_requested_permissions": Array<string>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "partner_app_id": string;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntry}. Shape $[] (Value):
     * {@link PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a
     * title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "previous_secret_expires_at"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "redirect_uris": Array<string>;
    /** Shape $ (Value): string.  Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link PartnerAppInstall}. A merchant's authorization of a partner application.
 */
export type PartnerAppInstall = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): Array of {@link PartnerEnvironmentGrant}. Shape $[] (Value): {@link
     * PartnerEnvironmentGrant}. A partner application's authorization to access an environment.
     */
    "environment_grants"?: Array<PartnerEnvironmentGrant>;
    /** Shape $ (Value): string. */
    "installed_by_user_id"?: string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): string. */
    "partner_app_id": string;
    /** Shape $ (Value): string. */
    "partner_app_install_id": string;
    /** Shape $ (Value): string. The app’s current name. */
    "partner_app_name": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    /** Shape $ (Value): string.  Value enum: "merchant", "partner_app". */
    "revoked_by"?: "merchant" | "partner_app" | (string & {});
    /** Shape $ (Value): string. */
    "revoked_by_user_id"?: string;
    /** Shape $ (Value): string.  Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link PartnerAppInstallListResponse}. A page of `PartnerAppInstall` objects.
 */
export type PartnerAppInstallListResponse = {
    /**
     * Shape $ (Value): Array of {@link PartnerAppInstall}. Shape $[] (Value): {@link
     * PartnerAppInstall}. A merchant's authorization of a partner application.
     */
    "data": Array<PartnerAppInstall>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PartnerAppInstallResponse}. A response containing `PartnerAppInstall`
 * data.
 */
export type PartnerAppInstallResponse = {
    /**
     * Shape $ (Value): {@link PartnerAppInstall}. A merchant's authorization of a partner
     * application.
     */
    "data": PartnerAppInstall;
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
export type PartnerAppInstallsListInput = DeveloperListPartnerInstallsInput;
export type PartnerAppInstallsRevokeInput = {
    /** Shape $ (Value): string. */
    "partner_app_install_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
/** Shape $ (Value): {@link PartnerAppListResponse}. A page of `PartnerApp` objects. */
export type PartnerAppListResponse = {
    /**
     * Shape $ (Value): Array of {@link PartnerApp}. Shape $[] (Value): {@link PartnerApp}. An
     * application that merchants can authorize to access their accounts.
     */
    "data": Array<PartnerApp>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
