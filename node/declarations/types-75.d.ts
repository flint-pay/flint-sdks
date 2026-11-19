import type { ExpandedOrderSummary, ExpandedOrderSummaryPreviousAttributes } from './types-26.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataPatchRequest, MetadataPatchRequestInput } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { ResponseMeta } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CheckInTicketRequestInput, CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-6.js';
import type { LookupTicketRequestInput } from './types-40.js';
import type { UpdateTicketRequestInput } from './types-78.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type { CloseGiftCardRequest, CheckoutSubscriptionTermsRequest, CheckoutSubscriptionTermsRequestInput } from './types-7.js';
import type { ImageRequest, ImageRequestInput } from './types-31.js';
import type { CreditNoteLineItemRequest, CreditNoteLineItemRequestInput } from './types-15.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { TaxIdentityPatch, TaxIdentityPatchInput } from './types-74.js';
import type { CustomerTaxExemptionCoverage, CustomerTaxExemptionCoverageRequestInput } from './types-17.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationPatchRequest
} from './types-19.js';
/** Colors and title to apply to a checkout session's page. */
export type ThemeConfigRequestInput = {
    /** Accent color of the checkout, such as #1A73E8. minLength: 1. */
    "accent_color"?: string;
    /** Primary color of the checkout, such as #1A73E8. minLength: 1. */
    "primary_color"?: string;
    /** Title shown in place of the merchant's business name. minLength: 1. */
    "title"?: string;
};
/**
 * An individual admission, a top-level child of an order. Merchant reads and webhooks never
 * include the bearer admission code.
 */
export type Ticket = {
    /**
     * The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
     * bearer secret: only the paid checkout session's own paying credential receives it, on its
     * own order's tickets that aren't voided. A checkout credential from a launch URL a merchant
     * reads or requests after payment never does. Returned only to the checkout credential; never
     * in webhook payloads. minLength: 16.
     */
    "admission_code"?: string;
    /** Last four characters of the current admission code. */
    "admission_code_last4": string;
    /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
    "attendee_name": string | null;
    /**
     * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
     * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
     * "manual". anyOf[2] (Value): null.
     */
    "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
    /**
     * When the ticket was admitted. Null when the ticket is not checked in. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "checked_in_at": string | null;
    /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded.
     */
    "order"?: ExpandedOrderSummary;
    /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
    "payment_link_id": string;
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
    "status": "issued" | "checked_in" | "voided" | (string & {});
    /**
     * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in", "void". []
     * (Value): string. Value enum: "check_in", "undo_check_in", "void".
     */
    "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
    /** Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". */
    "ticket_id": string;
    /**
     * The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize
     * entry.
     */
    "ticket_number": string;
    /** Name of the ticket tier on the purchased order line. */
    "tier_name"?: string;
    /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * When the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "voided_at": string | null;
};
export type TicketCheckedInEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "tier_name"?: string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "admission_code"?: ((string) | (null));
            "admission_code_last4"?: ((string) | (null));
            "attendee_name"?: ((string) | (null));
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_line_item_id"?: ((string) | (null));
            "payment_link_id"?: ((string) | (null));
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            "ticket_id"?: ((string) | (null));
            "ticket_number"?: ((string) | (null));
            "tier_name"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "ticket.checked_in";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "tier_name"?: string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "admission_code"?: ((string) | (null));
            "admission_code_last4"?: ((string) | (null));
            "attendee_name"?: ((string) | (null));
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_line_item_id"?: ((string) | (null));
            "payment_link_id"?: ((string) | (null));
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            "ticket_id"?: ((string) | (null));
            "ticket_number"?: ((string) | (null));
            "tier_name"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "ticket.checked_in";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "ticket.checked_in";
});
/**
 * The `ticket.checked_in` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type TicketCheckedInInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.tier_name (Optional): string. Name of the ticket tier on the purchased order line.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.admission_code (Optional): string or null. The
     * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer
     * secret: only the paid checkout session's own paying credential receives it, on its own
     * order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads
     * or requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. previous_attributes.admission_code.anyOf[1] (Value): string. The ticket's
     * 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret:
     * only the paid checkout session's own paying credential receives it, on its own order's
     * tickets that aren't voided. A checkout credential from a launch URL a merchant reads or
     * requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. minLength: 16. previous_attributes.admission_code.anyOf[2] (Value): null.
     * previous_attributes.admission_code_last4 (Optional): string or null. Last four characters of
     * the current admission code. previous_attributes.admission_code_last4.anyOf[1] (Value):
     * string. Last four characters of the current admission code.
     * previous_attributes.admission_code_last4.anyOf[2] (Value): null.
     * previous_attributes.attendee_name (Optional): string or null. Optional attendee name. Null
     * when not supplied. previous_attributes.attendee_name.anyOf[1] (Value): string. Optional
     * attendee name. Null when not supplied. minLength: 1. maxLength: 200.
     * previous_attributes.attendee_name.anyOf[2] (Value): null.
     * previous_attributes.check_in_method (Optional): string or null. How the ticket was admitted.
     * Null when the ticket is not checked in. Value enum: "admission_code", "manual".
     * previous_attributes.check_in_method.anyOf[1] (Value): string. Value enum: "admission_code",
     * "manual". previous_attributes.check_in_method.anyOf[2] (Value): null.
     * previous_attributes.checked_in_at (Optional): string or null. When the ticket was admitted.
     * Null when the ticket is not checked in. previous_attributes.checked_in_at.anyOf[1] (Value):
     * string. When the ticket was admitted. Null when the ticket is not checked in. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.checked_in_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the ticket
     * was issued. previous_attributes.created_at.anyOf[1] (Value): string. When the ticket was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
     * expand=order. Requires commerce.orders.read. previous_attributes.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value):
     * null. previous_attributes.order_id (Optional): string or null. The order that purchased this
     * ticket. previous_attributes.order_id.anyOf[1] (Value): string. The order that purchased this
     * ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.order_line_item_id (Optional): string or null. The
     * purchased ticket tier. previous_attributes.order_line_item_id.anyOf[1] (Value): string. The
     * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * previous_attributes.order_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. The event payment link.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. The event payment link.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. The admission
     * lifecycle. Value enum: "issued", "checked_in", "voided". previous_attributes.status.anyOf[1]
     * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
     * "check_in", "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Actions currently offered for this ticket. [] enum: "check_in",
     * "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "check_in", "undo_check_in", "void".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.ticket_id
     * (Optional): string or null. Unique ticket identity with the tkt_ prefix.
     * previous_attributes.ticket_id.anyOf[1] (Value): string. Unique ticket identity with the tkt_
     * prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". previous_attributes.ticket_id.anyOf[2]
     * (Value): null. previous_attributes.ticket_number (Optional): string or null. The event
     * prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[1] (Value): string. The event prefix and sequence,
     * such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[2] (Value): null. previous_attributes.tier_name
     * (Optional): string or null. Name of the ticket tier on the purchased order line.
     * previous_attributes.tier_name.anyOf[1] (Value): string. Name of the ticket tier on the
     * purchased order line. previous_attributes.tier_name.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the ticket last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the ticket last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. previous_attributes.version.anyOf[1] (Value): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null. previous_attributes.voided_at (Optional): string or null. When the ticket was
     * permanently voided. Null when the ticket has not been voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the ticket was permanently
     * voided. Null when the ticket has not been voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. tier_name (Optional): string. Name of the
         * ticket tier on the purchased order line. updated_at (Required): string. When the ticket
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1. voided_at
         * (Required): string or null. When the ticket was permanently voided. Null when the ticket
         * has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** Name of the ticket tier on the purchased order line. */
            "tier_name"?: string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. admission_code (Optional): string or null. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. admission_code.anyOf[1] (Value): string. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. minLength: 16. admission_code.anyOf[2] (Value):
         * null. admission_code_last4 (Optional): string or null. Last four characters of the
         * current admission code. admission_code_last4.anyOf[1] (Value): string. Last four
         * characters of the current admission code. admission_code_last4.anyOf[2] (Value): null.
         * attendee_name (Optional): string or null. Optional attendee name. Null when not
         * supplied. attendee_name.anyOf[1] (Value): string. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. attendee_name.anyOf[2] (Value): null.
         * check_in_method (Optional): string or null. How the ticket was admitted. Null when the
         * ticket is not checked in. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[1] (Value): string. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[2] (Value): null. checked_in_at (Optional): string or null. When
         * the ticket was admitted. Null when the ticket is not checked in. checked_in_at.anyOf[1]
         * (Value): string. When the ticket was admitted. Null when the ticket is not checked in.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checked_in_at.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the ticket was issued.
         * created_at.anyOf[1] (Value): string. When the ticket was issued. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. order (Optional):
         * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
         * expand=order. Requires commerce.orders.read. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order that purchased this ticket. order_id.anyOf[1]
         * (Value): string. The order that purchased this ticket. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_line_item_id
         * (Optional): string or null. The purchased ticket tier. order_line_item_id.anyOf[1]
         * (Value): string. The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
         * order_line_item_id.anyOf[2] (Value): null. payment_link_id (Optional): string or null.
         * The event payment link. payment_link_id.anyOf[1] (Value): string. The event payment
         * link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * status (Optional): string or null. The admission lifecycle. Value enum: "issued",
         * "checked_in", "voided". status.anyOf[1] (Value): string. The admission lifecycle. Value
         * enum: "issued", "checked_in", "voided". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
         * "check_in", "undo_check_in", "void". supported_actions.anyOf[1] (Value): Array of
         * string. Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
         * "void". supported_actions.anyOf[1][] (Value): string. Value enum: "check_in",
         * "undo_check_in", "void". supported_actions.anyOf[2] (Value): null. ticket_id (Optional):
         * string or null. Unique ticket identity with the tkt_ prefix. ticket_id.anyOf[1] (Value):
         * string. Unique ticket identity with the tkt_ prefix. Example:
         * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". ticket_id.anyOf[2] (Value): null. ticket_number
         * (Optional): string or null. The event prefix and sequence, such as GAL001. Numbers are
         * never reused and do not authorize entry. ticket_number.anyOf[1] (Value): string. The
         * event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize
         * entry. ticket_number.anyOf[2] (Value): null. tier_name (Optional): string or null. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[1] (Value): string. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. When the ticket last changed. updated_at.anyOf[1]
         * (Value): string. When the ticket last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null. voided_at (Optional): string or null. When the ticket was permanently
         * voided. Null when the ticket has not been voided. voided_at.anyOf[1] (Value): string.
         * When the ticket was permanently voided. Null when the ticket has not been voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. anyOf[1] (Value):
             * string. The ticket's 16-character Crockford base32 admission code, the value its QR
             * code holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16. anyOf[2]
             * (Value): null.
             */
            "admission_code"?: ((string) | (null));
            /**
             * Last four characters of the current admission code. anyOf[1] (Value): string. Last
             * four characters of the current admission code. anyOf[2] (Value): null.
             */
            "admission_code_last4"?: ((string) | (null));
            /**
             * Optional attendee name. Null when not supplied. anyOf[1] (Value): string. Optional
             * attendee name. Null when not supplied. minLength: 1. maxLength: 200. anyOf[2]
             * (Value): null.
             */
            "attendee_name"?: ((string) | (null));
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. anyOf[1]
             * (Value): string. When the ticket was admitted. Null when the ticket is not checked
             * in. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "checked_in_at"?: ((string) | (null));
            /**
             * When the ticket was issued. anyOf[1] (Value): string. When the ticket was issued.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order that purchased this ticket. anyOf[1] (Value): string. The order that
             * purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The purchased ticket tier. anyOf[1] (Value): string. The purchased ticket tier.
             * Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
             */
            "order_line_item_id"?: ((string) | (null));
            /**
             * The event payment link. anyOf[1] (Value): string. The event payment link. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * The admission lifecycle. Value enum: "issued", "checked_in", "voided". anyOf[1]
             * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in",
             * "voided". anyOf[2] (Value): null.
             */
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". anyOf[1] (Value): Array of string. Actions currently offered for this
             * ticket. [] enum: "check_in", "undo_check_in", "void". anyOf[1][] (Value): string.
             * Value enum: "check_in", "undo_check_in", "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            /**
             * Unique ticket identity with the tkt_ prefix. anyOf[1] (Value): string. Unique ticket
             * identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". anyOf[2]
             * (Value): null.
             */
            "ticket_id"?: ((string) | (null));
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry. anyOf[1] (Value): string. The event prefix and sequence, such as
             * GAL001. Numbers are never reused and do not authorize entry. anyOf[2] (Value): null.
             */
            "ticket_number"?: ((string) | (null));
            /**
             * Name of the ticket tier on the purchased order line. anyOf[1] (Value): string. Name
             * of the ticket tier on the purchased order line. anyOf[2] (Value): null.
             */
            "tier_name"?: ((string) | (null));
            /**
             * When the ticket last changed. anyOf[1] (Value): string. When the ticket last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * anyOf[1] (Value): string. When the ticket was permanently voided. Null when the
             * ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "ticket.checked_in". */
    "event_type"?: "ticket.checked_in";
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
 * The `ticket.checked_in` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type TicketCheckedInMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.tier_name (Optional): string. Name of the ticket tier on the purchased order line.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.admission_code (Optional): string or null. The
     * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer
     * secret: only the paid checkout session's own paying credential receives it, on its own
     * order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads
     * or requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. previous_attributes.admission_code.anyOf[1] (Value): string. The ticket's
     * 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret:
     * only the paid checkout session's own paying credential receives it, on its own order's
     * tickets that aren't voided. A checkout credential from a launch URL a merchant reads or
     * requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. minLength: 16. previous_attributes.admission_code.anyOf[2] (Value): null.
     * previous_attributes.admission_code_last4 (Optional): string or null. Last four characters of
     * the current admission code. previous_attributes.admission_code_last4.anyOf[1] (Value):
     * string. Last four characters of the current admission code.
     * previous_attributes.admission_code_last4.anyOf[2] (Value): null.
     * previous_attributes.attendee_name (Optional): string or null. Optional attendee name. Null
     * when not supplied. previous_attributes.attendee_name.anyOf[1] (Value): string. Optional
     * attendee name. Null when not supplied. minLength: 1. maxLength: 200.
     * previous_attributes.attendee_name.anyOf[2] (Value): null.
     * previous_attributes.check_in_method (Optional): string or null. How the ticket was admitted.
     * Null when the ticket is not checked in. Value enum: "admission_code", "manual".
     * previous_attributes.check_in_method.anyOf[1] (Value): string. Value enum: "admission_code",
     * "manual". previous_attributes.check_in_method.anyOf[2] (Value): null.
     * previous_attributes.checked_in_at (Optional): string or null. When the ticket was admitted.
     * Null when the ticket is not checked in. previous_attributes.checked_in_at.anyOf[1] (Value):
     * string. When the ticket was admitted. Null when the ticket is not checked in. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.checked_in_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the ticket
     * was issued. previous_attributes.created_at.anyOf[1] (Value): string. When the ticket was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
     * expand=order. Requires commerce.orders.read. previous_attributes.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value):
     * null. previous_attributes.order_id (Optional): string or null. The order that purchased this
     * ticket. previous_attributes.order_id.anyOf[1] (Value): string. The order that purchased this
     * ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.order_line_item_id (Optional): string or null. The
     * purchased ticket tier. previous_attributes.order_line_item_id.anyOf[1] (Value): string. The
     * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * previous_attributes.order_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. The event payment link.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. The event payment link.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. The admission
     * lifecycle. Value enum: "issued", "checked_in", "voided". previous_attributes.status.anyOf[1]
     * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
     * "check_in", "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Actions currently offered for this ticket. [] enum: "check_in",
     * "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "check_in", "undo_check_in", "void".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.ticket_id
     * (Optional): string or null. Unique ticket identity with the tkt_ prefix.
     * previous_attributes.ticket_id.anyOf[1] (Value): string. Unique ticket identity with the tkt_
     * prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". previous_attributes.ticket_id.anyOf[2]
     * (Value): null. previous_attributes.ticket_number (Optional): string or null. The event
     * prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[1] (Value): string. The event prefix and sequence,
     * such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[2] (Value): null. previous_attributes.tier_name
     * (Optional): string or null. Name of the ticket tier on the purchased order line.
     * previous_attributes.tier_name.anyOf[1] (Value): string. Name of the ticket tier on the
     * purchased order line. previous_attributes.tier_name.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the ticket last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the ticket last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. previous_attributes.version.anyOf[1] (Value): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null. previous_attributes.voided_at (Optional): string or null. When the ticket was
     * permanently voided. Null when the ticket has not been voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the ticket was permanently
     * voided. Null when the ticket has not been voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. tier_name (Optional): string. Name of the
         * ticket tier on the purchased order line. updated_at (Required): string. When the ticket
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1. voided_at
         * (Required): string or null. When the ticket was permanently voided. Null when the ticket
         * has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** Name of the ticket tier on the purchased order line. */
            "tier_name"?: string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. admission_code (Optional): string or null. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. admission_code.anyOf[1] (Value): string. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. minLength: 16. admission_code.anyOf[2] (Value):
         * null. admission_code_last4 (Optional): string or null. Last four characters of the
         * current admission code. admission_code_last4.anyOf[1] (Value): string. Last four
         * characters of the current admission code. admission_code_last4.anyOf[2] (Value): null.
         * attendee_name (Optional): string or null. Optional attendee name. Null when not
         * supplied. attendee_name.anyOf[1] (Value): string. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. attendee_name.anyOf[2] (Value): null.
         * check_in_method (Optional): string or null. How the ticket was admitted. Null when the
         * ticket is not checked in. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[1] (Value): string. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[2] (Value): null. checked_in_at (Optional): string or null. When
         * the ticket was admitted. Null when the ticket is not checked in. checked_in_at.anyOf[1]
         * (Value): string. When the ticket was admitted. Null when the ticket is not checked in.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checked_in_at.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the ticket was issued.
         * created_at.anyOf[1] (Value): string. When the ticket was issued. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. order (Optional):
         * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
         * expand=order. Requires commerce.orders.read. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order that purchased this ticket. order_id.anyOf[1]
         * (Value): string. The order that purchased this ticket. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_line_item_id
         * (Optional): string or null. The purchased ticket tier. order_line_item_id.anyOf[1]
         * (Value): string. The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
         * order_line_item_id.anyOf[2] (Value): null. payment_link_id (Optional): string or null.
         * The event payment link. payment_link_id.anyOf[1] (Value): string. The event payment
         * link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * status (Optional): string or null. The admission lifecycle. Value enum: "issued",
         * "checked_in", "voided". status.anyOf[1] (Value): string. The admission lifecycle. Value
         * enum: "issued", "checked_in", "voided". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
         * "check_in", "undo_check_in", "void". supported_actions.anyOf[1] (Value): Array of
         * string. Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
         * "void". supported_actions.anyOf[1][] (Value): string. Value enum: "check_in",
         * "undo_check_in", "void". supported_actions.anyOf[2] (Value): null. ticket_id (Optional):
         * string or null. Unique ticket identity with the tkt_ prefix. ticket_id.anyOf[1] (Value):
         * string. Unique ticket identity with the tkt_ prefix. Example:
         * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". ticket_id.anyOf[2] (Value): null. ticket_number
         * (Optional): string or null. The event prefix and sequence, such as GAL001. Numbers are
         * never reused and do not authorize entry. ticket_number.anyOf[1] (Value): string. The
         * event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize
         * entry. ticket_number.anyOf[2] (Value): null. tier_name (Optional): string or null. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[1] (Value): string. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. When the ticket last changed. updated_at.anyOf[1]
         * (Value): string. When the ticket last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null. voided_at (Optional): string or null. When the ticket was permanently
         * voided. Null when the ticket has not been voided. voided_at.anyOf[1] (Value): string.
         * When the ticket was permanently voided. Null when the ticket has not been voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. anyOf[1] (Value):
             * string. The ticket's 16-character Crockford base32 admission code, the value its QR
             * code holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16. anyOf[2]
             * (Value): null.
             */
            "admission_code"?: ((string) | (null));
            /**
             * Last four characters of the current admission code. anyOf[1] (Value): string. Last
             * four characters of the current admission code. anyOf[2] (Value): null.
             */
            "admission_code_last4"?: ((string) | (null));
            /**
             * Optional attendee name. Null when not supplied. anyOf[1] (Value): string. Optional
             * attendee name. Null when not supplied. minLength: 1. maxLength: 200. anyOf[2]
             * (Value): null.
             */
            "attendee_name"?: ((string) | (null));
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. anyOf[1]
             * (Value): string. When the ticket was admitted. Null when the ticket is not checked
             * in. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "checked_in_at"?: ((string) | (null));
            /**
             * When the ticket was issued. anyOf[1] (Value): string. When the ticket was issued.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order that purchased this ticket. anyOf[1] (Value): string. The order that
             * purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The purchased ticket tier. anyOf[1] (Value): string. The purchased ticket tier.
             * Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
             */
            "order_line_item_id"?: ((string) | (null));
            /**
             * The event payment link. anyOf[1] (Value): string. The event payment link. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * The admission lifecycle. Value enum: "issued", "checked_in", "voided". anyOf[1]
             * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in",
             * "voided". anyOf[2] (Value): null.
             */
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". anyOf[1] (Value): Array of string. Actions currently offered for this
             * ticket. [] enum: "check_in", "undo_check_in", "void". anyOf[1][] (Value): string.
             * Value enum: "check_in", "undo_check_in", "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            /**
             * Unique ticket identity with the tkt_ prefix. anyOf[1] (Value): string. Unique ticket
             * identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". anyOf[2]
             * (Value): null.
             */
            "ticket_id"?: ((string) | (null));
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry. anyOf[1] (Value): string. The event prefix and sequence, such as
             * GAL001. Numbers are never reused and do not authorize entry. anyOf[2] (Value): null.
             */
            "ticket_number"?: ((string) | (null));
            /**
             * Name of the ticket tier on the purchased order line. anyOf[1] (Value): string. Name
             * of the ticket tier on the purchased order line. anyOf[2] (Value): null.
             */
            "tier_name"?: ((string) | (null));
            /**
             * When the ticket last changed. anyOf[1] (Value): string. When the ticket last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * anyOf[1] (Value): string. When the ticket was permanently voided. Null when the
             * ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "ticket.checked_in". */
    "event_type"?: "ticket.checked_in";
});
export type TicketCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "tier_name"?: string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "ticket.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "tier_name"?: string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "ticket.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "ticket.created";
});
/**
 * The `ticket.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type TicketCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.tier_name (Optional): string. Name of the ticket tier on the purchased order line.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. tier_name (Optional): string. Name of the
         * ticket tier on the purchased order line. updated_at (Required): string. When the ticket
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1. voided_at
         * (Required): string or null. When the ticket was permanently voided. Null when the ticket
         * has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** Name of the ticket tier on the purchased order line. */
            "tier_name"?: string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "ticket.created". */
    "event_type"?: "ticket.created";
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
 * The `ticket.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type TicketCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.tier_name (Optional): string. Name of the ticket tier on the purchased order line.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. tier_name (Optional): string. Name of the
         * ticket tier on the purchased order line. updated_at (Required): string. When the ticket
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1. voided_at
         * (Required): string or null. When the ticket was permanently voided. Null when the ticket
         * has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** Name of the ticket tier on the purchased order line. */
            "tier_name"?: string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "ticket.created". */
    "event_type"?: "ticket.created";
});
/** A page of `Ticket` objects. */
export type TicketListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Ticket}. An individual admission, a top-level child of an order. Merchant reads and webhooks
     * never include the bearer admission code.
     */
    "data": Array<Ticket>;
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
/** A response containing `Ticket` data. */
export type TicketResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An individual admission,
     * a top-level child of an order. Merchant reads and webhooks never include the bearer
     * admission code.
     */
    "data": Ticket;
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
export type TicketUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "tier_name"?: string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "admission_code"?: ((string) | (null));
            "admission_code_last4"?: ((string) | (null));
            "attendee_name"?: ((string) | (null));
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_line_item_id"?: ((string) | (null));
            "payment_link_id"?: ((string) | (null));
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            "ticket_id"?: ((string) | (null));
            "ticket_number"?: ((string) | (null));
            "tier_name"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "ticket.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "tier_name"?: string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "admission_code"?: ((string) | (null));
            "admission_code_last4"?: ((string) | (null));
            "attendee_name"?: ((string) | (null));
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_line_item_id"?: ((string) | (null));
            "payment_link_id"?: ((string) | (null));
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            "ticket_id"?: ((string) | (null));
            "ticket_number"?: ((string) | (null));
            "tier_name"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "ticket.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "ticket.updated";
});
/**
 * The `ticket.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type TicketUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.tier_name (Optional): string. Name of the ticket tier on the purchased order line.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.admission_code (Optional): string or null. The
     * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer
     * secret: only the paid checkout session's own paying credential receives it, on its own
     * order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads
     * or requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. previous_attributes.admission_code.anyOf[1] (Value): string. The ticket's
     * 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret:
     * only the paid checkout session's own paying credential receives it, on its own order's
     * tickets that aren't voided. A checkout credential from a launch URL a merchant reads or
     * requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. minLength: 16. previous_attributes.admission_code.anyOf[2] (Value): null.
     * previous_attributes.admission_code_last4 (Optional): string or null. Last four characters of
     * the current admission code. previous_attributes.admission_code_last4.anyOf[1] (Value):
     * string. Last four characters of the current admission code.
     * previous_attributes.admission_code_last4.anyOf[2] (Value): null.
     * previous_attributes.attendee_name (Optional): string or null. Optional attendee name. Null
     * when not supplied. previous_attributes.attendee_name.anyOf[1] (Value): string. Optional
     * attendee name. Null when not supplied. minLength: 1. maxLength: 200.
     * previous_attributes.attendee_name.anyOf[2] (Value): null.
     * previous_attributes.check_in_method (Optional): string or null. How the ticket was admitted.
     * Null when the ticket is not checked in. Value enum: "admission_code", "manual".
     * previous_attributes.check_in_method.anyOf[1] (Value): string. Value enum: "admission_code",
     * "manual". previous_attributes.check_in_method.anyOf[2] (Value): null.
     * previous_attributes.checked_in_at (Optional): string or null. When the ticket was admitted.
     * Null when the ticket is not checked in. previous_attributes.checked_in_at.anyOf[1] (Value):
     * string. When the ticket was admitted. Null when the ticket is not checked in. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.checked_in_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the ticket
     * was issued. previous_attributes.created_at.anyOf[1] (Value): string. When the ticket was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
     * expand=order. Requires commerce.orders.read. previous_attributes.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value):
     * null. previous_attributes.order_id (Optional): string or null. The order that purchased this
     * ticket. previous_attributes.order_id.anyOf[1] (Value): string. The order that purchased this
     * ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.order_line_item_id (Optional): string or null. The
     * purchased ticket tier. previous_attributes.order_line_item_id.anyOf[1] (Value): string. The
     * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * previous_attributes.order_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. The event payment link.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. The event payment link.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. The admission
     * lifecycle. Value enum: "issued", "checked_in", "voided". previous_attributes.status.anyOf[1]
     * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
     * "check_in", "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Actions currently offered for this ticket. [] enum: "check_in",
     * "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "check_in", "undo_check_in", "void".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.ticket_id
     * (Optional): string or null. Unique ticket identity with the tkt_ prefix.
     * previous_attributes.ticket_id.anyOf[1] (Value): string. Unique ticket identity with the tkt_
     * prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". previous_attributes.ticket_id.anyOf[2]
     * (Value): null. previous_attributes.ticket_number (Optional): string or null. The event
     * prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[1] (Value): string. The event prefix and sequence,
     * such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[2] (Value): null. previous_attributes.tier_name
     * (Optional): string or null. Name of the ticket tier on the purchased order line.
     * previous_attributes.tier_name.anyOf[1] (Value): string. Name of the ticket tier on the
     * purchased order line. previous_attributes.tier_name.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the ticket last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the ticket last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. previous_attributes.version.anyOf[1] (Value): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null. previous_attributes.voided_at (Optional): string or null. When the ticket was
     * permanently voided. Null when the ticket has not been voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the ticket was permanently
     * voided. Null when the ticket has not been voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. tier_name (Optional): string. Name of the
         * ticket tier on the purchased order line. updated_at (Required): string. When the ticket
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1. voided_at
         * (Required): string or null. When the ticket was permanently voided. Null when the ticket
         * has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** Name of the ticket tier on the purchased order line. */
            "tier_name"?: string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. admission_code (Optional): string or null. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. admission_code.anyOf[1] (Value): string. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. minLength: 16. admission_code.anyOf[2] (Value):
         * null. admission_code_last4 (Optional): string or null. Last four characters of the
         * current admission code. admission_code_last4.anyOf[1] (Value): string. Last four
         * characters of the current admission code. admission_code_last4.anyOf[2] (Value): null.
         * attendee_name (Optional): string or null. Optional attendee name. Null when not
         * supplied. attendee_name.anyOf[1] (Value): string. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. attendee_name.anyOf[2] (Value): null.
         * check_in_method (Optional): string or null. How the ticket was admitted. Null when the
         * ticket is not checked in. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[1] (Value): string. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[2] (Value): null. checked_in_at (Optional): string or null. When
         * the ticket was admitted. Null when the ticket is not checked in. checked_in_at.anyOf[1]
         * (Value): string. When the ticket was admitted. Null when the ticket is not checked in.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checked_in_at.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the ticket was issued.
         * created_at.anyOf[1] (Value): string. When the ticket was issued. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. order (Optional):
         * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
         * expand=order. Requires commerce.orders.read. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order that purchased this ticket. order_id.anyOf[1]
         * (Value): string. The order that purchased this ticket. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_line_item_id
         * (Optional): string or null. The purchased ticket tier. order_line_item_id.anyOf[1]
         * (Value): string. The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
         * order_line_item_id.anyOf[2] (Value): null. payment_link_id (Optional): string or null.
         * The event payment link. payment_link_id.anyOf[1] (Value): string. The event payment
         * link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * status (Optional): string or null. The admission lifecycle. Value enum: "issued",
         * "checked_in", "voided". status.anyOf[1] (Value): string. The admission lifecycle. Value
         * enum: "issued", "checked_in", "voided". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
         * "check_in", "undo_check_in", "void". supported_actions.anyOf[1] (Value): Array of
         * string. Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
         * "void". supported_actions.anyOf[1][] (Value): string. Value enum: "check_in",
         * "undo_check_in", "void". supported_actions.anyOf[2] (Value): null. ticket_id (Optional):
         * string or null. Unique ticket identity with the tkt_ prefix. ticket_id.anyOf[1] (Value):
         * string. Unique ticket identity with the tkt_ prefix. Example:
         * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". ticket_id.anyOf[2] (Value): null. ticket_number
         * (Optional): string or null. The event prefix and sequence, such as GAL001. Numbers are
         * never reused and do not authorize entry. ticket_number.anyOf[1] (Value): string. The
         * event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize
         * entry. ticket_number.anyOf[2] (Value): null. tier_name (Optional): string or null. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[1] (Value): string. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. When the ticket last changed. updated_at.anyOf[1]
         * (Value): string. When the ticket last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null. voided_at (Optional): string or null. When the ticket was permanently
         * voided. Null when the ticket has not been voided. voided_at.anyOf[1] (Value): string.
         * When the ticket was permanently voided. Null when the ticket has not been voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. anyOf[1] (Value):
             * string. The ticket's 16-character Crockford base32 admission code, the value its QR
             * code holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16. anyOf[2]
             * (Value): null.
             */
            "admission_code"?: ((string) | (null));
            /**
             * Last four characters of the current admission code. anyOf[1] (Value): string. Last
             * four characters of the current admission code. anyOf[2] (Value): null.
             */
            "admission_code_last4"?: ((string) | (null));
            /**
             * Optional attendee name. Null when not supplied. anyOf[1] (Value): string. Optional
             * attendee name. Null when not supplied. minLength: 1. maxLength: 200. anyOf[2]
             * (Value): null.
             */
            "attendee_name"?: ((string) | (null));
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. anyOf[1]
             * (Value): string. When the ticket was admitted. Null when the ticket is not checked
             * in. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "checked_in_at"?: ((string) | (null));
            /**
             * When the ticket was issued. anyOf[1] (Value): string. When the ticket was issued.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order that purchased this ticket. anyOf[1] (Value): string. The order that
             * purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The purchased ticket tier. anyOf[1] (Value): string. The purchased ticket tier.
             * Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
             */
            "order_line_item_id"?: ((string) | (null));
            /**
             * The event payment link. anyOf[1] (Value): string. The event payment link. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * The admission lifecycle. Value enum: "issued", "checked_in", "voided". anyOf[1]
             * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in",
             * "voided". anyOf[2] (Value): null.
             */
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". anyOf[1] (Value): Array of string. Actions currently offered for this
             * ticket. [] enum: "check_in", "undo_check_in", "void". anyOf[1][] (Value): string.
             * Value enum: "check_in", "undo_check_in", "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            /**
             * Unique ticket identity with the tkt_ prefix. anyOf[1] (Value): string. Unique ticket
             * identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". anyOf[2]
             * (Value): null.
             */
            "ticket_id"?: ((string) | (null));
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry. anyOf[1] (Value): string. The event prefix and sequence, such as
             * GAL001. Numbers are never reused and do not authorize entry. anyOf[2] (Value): null.
             */
            "ticket_number"?: ((string) | (null));
            /**
             * Name of the ticket tier on the purchased order line. anyOf[1] (Value): string. Name
             * of the ticket tier on the purchased order line. anyOf[2] (Value): null.
             */
            "tier_name"?: ((string) | (null));
            /**
             * When the ticket last changed. anyOf[1] (Value): string. When the ticket last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * anyOf[1] (Value): string. When the ticket was permanently voided. Null when the
             * ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "ticket.updated". */
    "event_type"?: "ticket.updated";
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
 * The `ticket.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type TicketUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.tier_name (Optional): string. Name of the ticket tier on the purchased order line.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.admission_code (Optional): string or null. The
     * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer
     * secret: only the paid checkout session's own paying credential receives it, on its own
     * order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads
     * or requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. previous_attributes.admission_code.anyOf[1] (Value): string. The ticket's
     * 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret:
     * only the paid checkout session's own paying credential receives it, on its own order's
     * tickets that aren't voided. A checkout credential from a launch URL a merchant reads or
     * requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. minLength: 16. previous_attributes.admission_code.anyOf[2] (Value): null.
     * previous_attributes.admission_code_last4 (Optional): string or null. Last four characters of
     * the current admission code. previous_attributes.admission_code_last4.anyOf[1] (Value):
     * string. Last four characters of the current admission code.
     * previous_attributes.admission_code_last4.anyOf[2] (Value): null.
     * previous_attributes.attendee_name (Optional): string or null. Optional attendee name. Null
     * when not supplied. previous_attributes.attendee_name.anyOf[1] (Value): string. Optional
     * attendee name. Null when not supplied. minLength: 1. maxLength: 200.
     * previous_attributes.attendee_name.anyOf[2] (Value): null.
     * previous_attributes.check_in_method (Optional): string or null. How the ticket was admitted.
     * Null when the ticket is not checked in. Value enum: "admission_code", "manual".
     * previous_attributes.check_in_method.anyOf[1] (Value): string. Value enum: "admission_code",
     * "manual". previous_attributes.check_in_method.anyOf[2] (Value): null.
     * previous_attributes.checked_in_at (Optional): string or null. When the ticket was admitted.
     * Null when the ticket is not checked in. previous_attributes.checked_in_at.anyOf[1] (Value):
     * string. When the ticket was admitted. Null when the ticket is not checked in. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.checked_in_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the ticket
     * was issued. previous_attributes.created_at.anyOf[1] (Value): string. When the ticket was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
     * expand=order. Requires commerce.orders.read. previous_attributes.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value):
     * null. previous_attributes.order_id (Optional): string or null. The order that purchased this
     * ticket. previous_attributes.order_id.anyOf[1] (Value): string. The order that purchased this
     * ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.order_line_item_id (Optional): string or null. The
     * purchased ticket tier. previous_attributes.order_line_item_id.anyOf[1] (Value): string. The
     * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * previous_attributes.order_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. The event payment link.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. The event payment link.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. The admission
     * lifecycle. Value enum: "issued", "checked_in", "voided". previous_attributes.status.anyOf[1]
     * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
     * "check_in", "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Actions currently offered for this ticket. [] enum: "check_in",
     * "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "check_in", "undo_check_in", "void".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.ticket_id
     * (Optional): string or null. Unique ticket identity with the tkt_ prefix.
     * previous_attributes.ticket_id.anyOf[1] (Value): string. Unique ticket identity with the tkt_
     * prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". previous_attributes.ticket_id.anyOf[2]
     * (Value): null. previous_attributes.ticket_number (Optional): string or null. The event
     * prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[1] (Value): string. The event prefix and sequence,
     * such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[2] (Value): null. previous_attributes.tier_name
     * (Optional): string or null. Name of the ticket tier on the purchased order line.
     * previous_attributes.tier_name.anyOf[1] (Value): string. Name of the ticket tier on the
     * purchased order line. previous_attributes.tier_name.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the ticket last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the ticket last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. previous_attributes.version.anyOf[1] (Value): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null. previous_attributes.voided_at (Optional): string or null. When the ticket was
     * permanently voided. Null when the ticket has not been voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the ticket was permanently
     * voided. Null when the ticket has not been voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. tier_name (Optional): string. Name of the
         * ticket tier on the purchased order line. updated_at (Required): string. When the ticket
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1. voided_at
         * (Required): string or null. When the ticket was permanently voided. Null when the ticket
         * has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** Name of the ticket tier on the purchased order line. */
            "tier_name"?: string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. admission_code (Optional): string or null. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. admission_code.anyOf[1] (Value): string. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. minLength: 16. admission_code.anyOf[2] (Value):
         * null. admission_code_last4 (Optional): string or null. Last four characters of the
         * current admission code. admission_code_last4.anyOf[1] (Value): string. Last four
         * characters of the current admission code. admission_code_last4.anyOf[2] (Value): null.
         * attendee_name (Optional): string or null. Optional attendee name. Null when not
         * supplied. attendee_name.anyOf[1] (Value): string. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. attendee_name.anyOf[2] (Value): null.
         * check_in_method (Optional): string or null. How the ticket was admitted. Null when the
         * ticket is not checked in. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[1] (Value): string. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[2] (Value): null. checked_in_at (Optional): string or null. When
         * the ticket was admitted. Null when the ticket is not checked in. checked_in_at.anyOf[1]
         * (Value): string. When the ticket was admitted. Null when the ticket is not checked in.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checked_in_at.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the ticket was issued.
         * created_at.anyOf[1] (Value): string. When the ticket was issued. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. order (Optional):
         * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
         * expand=order. Requires commerce.orders.read. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order that purchased this ticket. order_id.anyOf[1]
         * (Value): string. The order that purchased this ticket. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_line_item_id
         * (Optional): string or null. The purchased ticket tier. order_line_item_id.anyOf[1]
         * (Value): string. The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
         * order_line_item_id.anyOf[2] (Value): null. payment_link_id (Optional): string or null.
         * The event payment link. payment_link_id.anyOf[1] (Value): string. The event payment
         * link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * status (Optional): string or null. The admission lifecycle. Value enum: "issued",
         * "checked_in", "voided". status.anyOf[1] (Value): string. The admission lifecycle. Value
         * enum: "issued", "checked_in", "voided". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
         * "check_in", "undo_check_in", "void". supported_actions.anyOf[1] (Value): Array of
         * string. Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
         * "void". supported_actions.anyOf[1][] (Value): string. Value enum: "check_in",
         * "undo_check_in", "void". supported_actions.anyOf[2] (Value): null. ticket_id (Optional):
         * string or null. Unique ticket identity with the tkt_ prefix. ticket_id.anyOf[1] (Value):
         * string. Unique ticket identity with the tkt_ prefix. Example:
         * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". ticket_id.anyOf[2] (Value): null. ticket_number
         * (Optional): string or null. The event prefix and sequence, such as GAL001. Numbers are
         * never reused and do not authorize entry. ticket_number.anyOf[1] (Value): string. The
         * event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize
         * entry. ticket_number.anyOf[2] (Value): null. tier_name (Optional): string or null. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[1] (Value): string. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. When the ticket last changed. updated_at.anyOf[1]
         * (Value): string. When the ticket last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null. voided_at (Optional): string or null. When the ticket was permanently
         * voided. Null when the ticket has not been voided. voided_at.anyOf[1] (Value): string.
         * When the ticket was permanently voided. Null when the ticket has not been voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. anyOf[1] (Value):
             * string. The ticket's 16-character Crockford base32 admission code, the value its QR
             * code holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16. anyOf[2]
             * (Value): null.
             */
            "admission_code"?: ((string) | (null));
            /**
             * Last four characters of the current admission code. anyOf[1] (Value): string. Last
             * four characters of the current admission code. anyOf[2] (Value): null.
             */
            "admission_code_last4"?: ((string) | (null));
            /**
             * Optional attendee name. Null when not supplied. anyOf[1] (Value): string. Optional
             * attendee name. Null when not supplied. minLength: 1. maxLength: 200. anyOf[2]
             * (Value): null.
             */
            "attendee_name"?: ((string) | (null));
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. anyOf[1]
             * (Value): string. When the ticket was admitted. Null when the ticket is not checked
             * in. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "checked_in_at"?: ((string) | (null));
            /**
             * When the ticket was issued. anyOf[1] (Value): string. When the ticket was issued.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order that purchased this ticket. anyOf[1] (Value): string. The order that
             * purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The purchased ticket tier. anyOf[1] (Value): string. The purchased ticket tier.
             * Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
             */
            "order_line_item_id"?: ((string) | (null));
            /**
             * The event payment link. anyOf[1] (Value): string. The event payment link. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * The admission lifecycle. Value enum: "issued", "checked_in", "voided". anyOf[1]
             * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in",
             * "voided". anyOf[2] (Value): null.
             */
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". anyOf[1] (Value): Array of string. Actions currently offered for this
             * ticket. [] enum: "check_in", "undo_check_in", "void". anyOf[1][] (Value): string.
             * Value enum: "check_in", "undo_check_in", "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            /**
             * Unique ticket identity with the tkt_ prefix. anyOf[1] (Value): string. Unique ticket
             * identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". anyOf[2]
             * (Value): null.
             */
            "ticket_id"?: ((string) | (null));
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry. anyOf[1] (Value): string. The event prefix and sequence, such as
             * GAL001. Numbers are never reused and do not authorize entry. anyOf[2] (Value): null.
             */
            "ticket_number"?: ((string) | (null));
            /**
             * Name of the ticket tier on the purchased order line. anyOf[1] (Value): string. Name
             * of the ticket tier on the purchased order line. anyOf[2] (Value): null.
             */
            "tier_name"?: ((string) | (null));
            /**
             * When the ticket last changed. anyOf[1] (Value): string. When the ticket last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * anyOf[1] (Value): string. When the ticket was permanently voided. Null when the
             * ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "ticket.updated". */
    "event_type"?: "ticket.updated";
});
/** An optional version fence for the ticket. */
export type TicketVersionRequestInput = {
    /**
     * The ticket version last read. The change applies only while the ticket is at this version; a
     * stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse
     * the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
export type TicketVoidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "tier_name"?: string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "admission_code"?: ((string) | (null));
            "admission_code_last4"?: ((string) | (null));
            "attendee_name"?: ((string) | (null));
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_line_item_id"?: ((string) | (null));
            "payment_link_id"?: ((string) | (null));
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            "ticket_id"?: ((string) | (null));
            "ticket_number"?: ((string) | (null));
            "tier_name"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "ticket.voided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "tier_name"?: string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "admission_code"?: ((string) | (null));
            "admission_code_last4"?: ((string) | (null));
            "attendee_name"?: ((string) | (null));
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_line_item_id"?: ((string) | (null));
            "payment_link_id"?: ((string) | (null));
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            "ticket_id"?: ((string) | (null));
            "ticket_number"?: ((string) | (null));
            "tier_name"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "ticket.voided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "ticket.voided";
});
/**
 * The `ticket.voided` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type TicketVoidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.tier_name (Optional): string. Name of the ticket tier on the purchased order line.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.admission_code (Optional): string or null. The
     * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer
     * secret: only the paid checkout session's own paying credential receives it, on its own
     * order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads
     * or requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. previous_attributes.admission_code.anyOf[1] (Value): string. The ticket's
     * 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret:
     * only the paid checkout session's own paying credential receives it, on its own order's
     * tickets that aren't voided. A checkout credential from a launch URL a merchant reads or
     * requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. minLength: 16. previous_attributes.admission_code.anyOf[2] (Value): null.
     * previous_attributes.admission_code_last4 (Optional): string or null. Last four characters of
     * the current admission code. previous_attributes.admission_code_last4.anyOf[1] (Value):
     * string. Last four characters of the current admission code.
     * previous_attributes.admission_code_last4.anyOf[2] (Value): null.
     * previous_attributes.attendee_name (Optional): string or null. Optional attendee name. Null
     * when not supplied. previous_attributes.attendee_name.anyOf[1] (Value): string. Optional
     * attendee name. Null when not supplied. minLength: 1. maxLength: 200.
     * previous_attributes.attendee_name.anyOf[2] (Value): null.
     * previous_attributes.check_in_method (Optional): string or null. How the ticket was admitted.
     * Null when the ticket is not checked in. Value enum: "admission_code", "manual".
     * previous_attributes.check_in_method.anyOf[1] (Value): string. Value enum: "admission_code",
     * "manual". previous_attributes.check_in_method.anyOf[2] (Value): null.
     * previous_attributes.checked_in_at (Optional): string or null. When the ticket was admitted.
     * Null when the ticket is not checked in. previous_attributes.checked_in_at.anyOf[1] (Value):
     * string. When the ticket was admitted. Null when the ticket is not checked in. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.checked_in_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the ticket
     * was issued. previous_attributes.created_at.anyOf[1] (Value): string. When the ticket was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
     * expand=order. Requires commerce.orders.read. previous_attributes.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value):
     * null. previous_attributes.order_id (Optional): string or null. The order that purchased this
     * ticket. previous_attributes.order_id.anyOf[1] (Value): string. The order that purchased this
     * ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.order_line_item_id (Optional): string or null. The
     * purchased ticket tier. previous_attributes.order_line_item_id.anyOf[1] (Value): string. The
     * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * previous_attributes.order_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. The event payment link.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. The event payment link.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. The admission
     * lifecycle. Value enum: "issued", "checked_in", "voided". previous_attributes.status.anyOf[1]
     * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
     * "check_in", "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Actions currently offered for this ticket. [] enum: "check_in",
     * "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "check_in", "undo_check_in", "void".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.ticket_id
     * (Optional): string or null. Unique ticket identity with the tkt_ prefix.
     * previous_attributes.ticket_id.anyOf[1] (Value): string. Unique ticket identity with the tkt_
     * prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". previous_attributes.ticket_id.anyOf[2]
     * (Value): null. previous_attributes.ticket_number (Optional): string or null. The event
     * prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[1] (Value): string. The event prefix and sequence,
     * such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[2] (Value): null. previous_attributes.tier_name
     * (Optional): string or null. Name of the ticket tier on the purchased order line.
     * previous_attributes.tier_name.anyOf[1] (Value): string. Name of the ticket tier on the
     * purchased order line. previous_attributes.tier_name.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the ticket last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the ticket last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. previous_attributes.version.anyOf[1] (Value): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null. previous_attributes.voided_at (Optional): string or null. When the ticket was
     * permanently voided. Null when the ticket has not been voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the ticket was permanently
     * voided. Null when the ticket has not been voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. tier_name (Optional): string. Name of the
         * ticket tier on the purchased order line. updated_at (Required): string. When the ticket
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1. voided_at
         * (Required): string or null. When the ticket was permanently voided. Null when the ticket
         * has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** Name of the ticket tier on the purchased order line. */
            "tier_name"?: string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. admission_code (Optional): string or null. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. admission_code.anyOf[1] (Value): string. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. minLength: 16. admission_code.anyOf[2] (Value):
         * null. admission_code_last4 (Optional): string or null. Last four characters of the
         * current admission code. admission_code_last4.anyOf[1] (Value): string. Last four
         * characters of the current admission code. admission_code_last4.anyOf[2] (Value): null.
         * attendee_name (Optional): string or null. Optional attendee name. Null when not
         * supplied. attendee_name.anyOf[1] (Value): string. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. attendee_name.anyOf[2] (Value): null.
         * check_in_method (Optional): string or null. How the ticket was admitted. Null when the
         * ticket is not checked in. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[1] (Value): string. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[2] (Value): null. checked_in_at (Optional): string or null. When
         * the ticket was admitted. Null when the ticket is not checked in. checked_in_at.anyOf[1]
         * (Value): string. When the ticket was admitted. Null when the ticket is not checked in.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checked_in_at.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the ticket was issued.
         * created_at.anyOf[1] (Value): string. When the ticket was issued. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. order (Optional):
         * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
         * expand=order. Requires commerce.orders.read. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order that purchased this ticket. order_id.anyOf[1]
         * (Value): string. The order that purchased this ticket. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_line_item_id
         * (Optional): string or null. The purchased ticket tier. order_line_item_id.anyOf[1]
         * (Value): string. The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
         * order_line_item_id.anyOf[2] (Value): null. payment_link_id (Optional): string or null.
         * The event payment link. payment_link_id.anyOf[1] (Value): string. The event payment
         * link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * status (Optional): string or null. The admission lifecycle. Value enum: "issued",
         * "checked_in", "voided". status.anyOf[1] (Value): string. The admission lifecycle. Value
         * enum: "issued", "checked_in", "voided". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
         * "check_in", "undo_check_in", "void". supported_actions.anyOf[1] (Value): Array of
         * string. Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
         * "void". supported_actions.anyOf[1][] (Value): string. Value enum: "check_in",
         * "undo_check_in", "void". supported_actions.anyOf[2] (Value): null. ticket_id (Optional):
         * string or null. Unique ticket identity with the tkt_ prefix. ticket_id.anyOf[1] (Value):
         * string. Unique ticket identity with the tkt_ prefix. Example:
         * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". ticket_id.anyOf[2] (Value): null. ticket_number
         * (Optional): string or null. The event prefix and sequence, such as GAL001. Numbers are
         * never reused and do not authorize entry. ticket_number.anyOf[1] (Value): string. The
         * event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize
         * entry. ticket_number.anyOf[2] (Value): null. tier_name (Optional): string or null. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[1] (Value): string. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. When the ticket last changed. updated_at.anyOf[1]
         * (Value): string. When the ticket last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null. voided_at (Optional): string or null. When the ticket was permanently
         * voided. Null when the ticket has not been voided. voided_at.anyOf[1] (Value): string.
         * When the ticket was permanently voided. Null when the ticket has not been voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. anyOf[1] (Value):
             * string. The ticket's 16-character Crockford base32 admission code, the value its QR
             * code holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16. anyOf[2]
             * (Value): null.
             */
            "admission_code"?: ((string) | (null));
            /**
             * Last four characters of the current admission code. anyOf[1] (Value): string. Last
             * four characters of the current admission code. anyOf[2] (Value): null.
             */
            "admission_code_last4"?: ((string) | (null));
            /**
             * Optional attendee name. Null when not supplied. anyOf[1] (Value): string. Optional
             * attendee name. Null when not supplied. minLength: 1. maxLength: 200. anyOf[2]
             * (Value): null.
             */
            "attendee_name"?: ((string) | (null));
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. anyOf[1]
             * (Value): string. When the ticket was admitted. Null when the ticket is not checked
             * in. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "checked_in_at"?: ((string) | (null));
            /**
             * When the ticket was issued. anyOf[1] (Value): string. When the ticket was issued.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order that purchased this ticket. anyOf[1] (Value): string. The order that
             * purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The purchased ticket tier. anyOf[1] (Value): string. The purchased ticket tier.
             * Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
             */
            "order_line_item_id"?: ((string) | (null));
            /**
             * The event payment link. anyOf[1] (Value): string. The event payment link. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * The admission lifecycle. Value enum: "issued", "checked_in", "voided". anyOf[1]
             * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in",
             * "voided". anyOf[2] (Value): null.
             */
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". anyOf[1] (Value): Array of string. Actions currently offered for this
             * ticket. [] enum: "check_in", "undo_check_in", "void". anyOf[1][] (Value): string.
             * Value enum: "check_in", "undo_check_in", "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            /**
             * Unique ticket identity with the tkt_ prefix. anyOf[1] (Value): string. Unique ticket
             * identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". anyOf[2]
             * (Value): null.
             */
            "ticket_id"?: ((string) | (null));
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry. anyOf[1] (Value): string. The event prefix and sequence, such as
             * GAL001. Numbers are never reused and do not authorize entry. anyOf[2] (Value): null.
             */
            "ticket_number"?: ((string) | (null));
            /**
             * Name of the ticket tier on the purchased order line. anyOf[1] (Value): string. Name
             * of the ticket tier on the purchased order line. anyOf[2] (Value): null.
             */
            "tier_name"?: ((string) | (null));
            /**
             * When the ticket last changed. anyOf[1] (Value): string. When the ticket last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * anyOf[1] (Value): string. When the ticket was permanently voided. Null when the
             * ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "ticket.voided". */
    "event_type"?: "ticket.voided";
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
 * The `ticket.voided` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type TicketVoidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.tier_name (Optional): string. Name of the ticket tier on the purchased order line.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.admission_code (Optional): string or null. The
     * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer
     * secret: only the paid checkout session's own paying credential receives it, on its own
     * order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads
     * or requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. previous_attributes.admission_code.anyOf[1] (Value): string. The ticket's
     * 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret:
     * only the paid checkout session's own paying credential receives it, on its own order's
     * tickets that aren't voided. A checkout credential from a launch URL a merchant reads or
     * requests after payment never does. Returned only to the checkout credential; never in
     * webhook payloads. minLength: 16. previous_attributes.admission_code.anyOf[2] (Value): null.
     * previous_attributes.admission_code_last4 (Optional): string or null. Last four characters of
     * the current admission code. previous_attributes.admission_code_last4.anyOf[1] (Value):
     * string. Last four characters of the current admission code.
     * previous_attributes.admission_code_last4.anyOf[2] (Value): null.
     * previous_attributes.attendee_name (Optional): string or null. Optional attendee name. Null
     * when not supplied. previous_attributes.attendee_name.anyOf[1] (Value): string. Optional
     * attendee name. Null when not supplied. minLength: 1. maxLength: 200.
     * previous_attributes.attendee_name.anyOf[2] (Value): null.
     * previous_attributes.check_in_method (Optional): string or null. How the ticket was admitted.
     * Null when the ticket is not checked in. Value enum: "admission_code", "manual".
     * previous_attributes.check_in_method.anyOf[1] (Value): string. Value enum: "admission_code",
     * "manual". previous_attributes.check_in_method.anyOf[2] (Value): null.
     * previous_attributes.checked_in_at (Optional): string or null. When the ticket was admitted.
     * Null when the ticket is not checked in. previous_attributes.checked_in_at.anyOf[1] (Value):
     * string. When the ticket was admitted. Null when the ticket is not checked in. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.checked_in_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the ticket
     * was issued. previous_attributes.created_at.anyOf[1] (Value): string. When the ticket was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
     * expand=order. Requires commerce.orders.read. previous_attributes.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value):
     * null. previous_attributes.order_id (Optional): string or null. The order that purchased this
     * ticket. previous_attributes.order_id.anyOf[1] (Value): string. The order that purchased this
     * ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.order_line_item_id (Optional): string or null. The
     * purchased ticket tier. previous_attributes.order_line_item_id.anyOf[1] (Value): string. The
     * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * previous_attributes.order_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. The event payment link.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. The event payment link.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. The admission
     * lifecycle. Value enum: "issued", "checked_in", "voided". previous_attributes.status.anyOf[1]
     * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
     * "check_in", "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Actions currently offered for this ticket. [] enum: "check_in",
     * "undo_check_in", "void". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "check_in", "undo_check_in", "void".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.ticket_id
     * (Optional): string or null. Unique ticket identity with the tkt_ prefix.
     * previous_attributes.ticket_id.anyOf[1] (Value): string. Unique ticket identity with the tkt_
     * prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". previous_attributes.ticket_id.anyOf[2]
     * (Value): null. previous_attributes.ticket_number (Optional): string or null. The event
     * prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[1] (Value): string. The event prefix and sequence,
     * such as GAL001. Numbers are never reused and do not authorize entry.
     * previous_attributes.ticket_number.anyOf[2] (Value): null. previous_attributes.tier_name
     * (Optional): string or null. Name of the ticket tier on the purchased order line.
     * previous_attributes.tier_name.anyOf[1] (Value): string. Name of the ticket tier on the
     * purchased order line. previous_attributes.tier_name.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the ticket last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the ticket last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. previous_attributes.version.anyOf[1] (Value): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null. previous_attributes.voided_at (Optional): string or null. When the ticket was
     * permanently voided. Null when the ticket has not been voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the ticket was permanently
     * voided. Null when the ticket has not been voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. tier_name (Optional): string. Name of the
         * ticket tier on the purchased order line. updated_at (Required): string. When the ticket
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1. voided_at
         * (Required): string or null. When the ticket was permanently voided. Null when the ticket
         * has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** Name of the ticket tier on the purchased order line. */
            "tier_name"?: string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. admission_code (Optional): string or null. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. admission_code.anyOf[1] (Value): string. The
         * ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
         * bearer secret: only the paid checkout session's own paying credential receives it, on
         * its own order's tickets that aren't voided. A checkout credential from a launch URL a
         * merchant reads or requests after payment never does. Returned only to the checkout
         * credential; never in webhook payloads. minLength: 16. admission_code.anyOf[2] (Value):
         * null. admission_code_last4 (Optional): string or null. Last four characters of the
         * current admission code. admission_code_last4.anyOf[1] (Value): string. Last four
         * characters of the current admission code. admission_code_last4.anyOf[2] (Value): null.
         * attendee_name (Optional): string or null. Optional attendee name. Null when not
         * supplied. attendee_name.anyOf[1] (Value): string. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. attendee_name.anyOf[2] (Value): null.
         * check_in_method (Optional): string or null. How the ticket was admitted. Null when the
         * ticket is not checked in. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[1] (Value): string. Value enum: "admission_code", "manual".
         * check_in_method.anyOf[2] (Value): null. checked_in_at (Optional): string or null. When
         * the ticket was admitted. Null when the ticket is not checked in. checked_in_at.anyOf[1]
         * (Value): string. When the ticket was admitted. Null when the ticket is not checked in.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checked_in_at.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the ticket was issued.
         * created_at.anyOf[1] (Value): string. When the ticket was issued. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. order (Optional):
         * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary, present only with
         * expand=order. Requires commerce.orders.read. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order that purchased this ticket. order_id.anyOf[1]
         * (Value): string. The order that purchased this ticket. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_line_item_id
         * (Optional): string or null. The purchased ticket tier. order_line_item_id.anyOf[1]
         * (Value): string. The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
         * order_line_item_id.anyOf[2] (Value): null. payment_link_id (Optional): string or null.
         * The event payment link. payment_link_id.anyOf[1] (Value): string. The event payment
         * link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * status (Optional): string or null. The admission lifecycle. Value enum: "issued",
         * "checked_in", "voided". status.anyOf[1] (Value): string. The admission lifecycle. Value
         * enum: "issued", "checked_in", "voided". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions currently offered for this ticket. [] enum:
         * "check_in", "undo_check_in", "void". supported_actions.anyOf[1] (Value): Array of
         * string. Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
         * "void". supported_actions.anyOf[1][] (Value): string. Value enum: "check_in",
         * "undo_check_in", "void". supported_actions.anyOf[2] (Value): null. ticket_id (Optional):
         * string or null. Unique ticket identity with the tkt_ prefix. ticket_id.anyOf[1] (Value):
         * string. Unique ticket identity with the tkt_ prefix. Example:
         * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". ticket_id.anyOf[2] (Value): null. ticket_number
         * (Optional): string or null. The event prefix and sequence, such as GAL001. Numbers are
         * never reused and do not authorize entry. ticket_number.anyOf[1] (Value): string. The
         * event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize
         * entry. ticket_number.anyOf[2] (Value): null. tier_name (Optional): string or null. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[1] (Value): string. Name
         * of the ticket tier on the purchased order line. tier_name.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. When the ticket last changed. updated_at.anyOf[1]
         * (Value): string. When the ticket last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null. voided_at (Optional): string or null. When the ticket was permanently
         * voided. Null when the ticket has not been voided. voided_at.anyOf[1] (Value): string.
         * When the ticket was permanently voided. Null when the ticket has not been voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. anyOf[1] (Value):
             * string. The ticket's 16-character Crockford base32 admission code, the value its QR
             * code holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16. anyOf[2]
             * (Value): null.
             */
            "admission_code"?: ((string) | (null));
            /**
             * Last four characters of the current admission code. anyOf[1] (Value): string. Last
             * four characters of the current admission code. anyOf[2] (Value): null.
             */
            "admission_code_last4"?: ((string) | (null));
            /**
             * Optional attendee name. Null when not supplied. anyOf[1] (Value): string. Optional
             * attendee name. Null when not supplied. minLength: 1. maxLength: 200. anyOf[2]
             * (Value): null.
             */
            "attendee_name"?: ((string) | (null));
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method"?: (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. anyOf[1]
             * (Value): string. When the ticket was admitted. Null when the ticket is not checked
             * in. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "checked_in_at"?: ((string) | (null));
            /**
             * When the ticket was issued. anyOf[1] (Value): string. When the ticket was issued.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order that purchased this ticket. anyOf[1] (Value): string. The order that
             * purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The purchased ticket tier. anyOf[1] (Value): string. The purchased ticket tier.
             * Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
             */
            "order_line_item_id"?: ((string) | (null));
            /**
             * The event payment link. anyOf[1] (Value): string. The event payment link. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * The admission lifecycle. Value enum: "issued", "checked_in", "voided". anyOf[1]
             * (Value): string. The admission lifecycle. Value enum: "issued", "checked_in",
             * "voided". anyOf[2] (Value): null.
             */
            "status"?: (("issued" | "checked_in" | "voided" | (string & {})) | (null));
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". anyOf[1] (Value): Array of string. Actions currently offered for this
             * ticket. [] enum: "check_in", "undo_check_in", "void". anyOf[1][] (Value): string.
             * Value enum: "check_in", "undo_check_in", "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"check_in" | "undo_check_in" | "void" | (string & {})>) | (null));
            /**
             * Unique ticket identity with the tkt_ prefix. anyOf[1] (Value): string. Unique ticket
             * identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". anyOf[2]
             * (Value): null.
             */
            "ticket_id"?: ((string) | (null));
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry. anyOf[1] (Value): string. The event prefix and sequence, such as
             * GAL001. Numbers are never reused and do not authorize entry. anyOf[2] (Value): null.
             */
            "ticket_number"?: ((string) | (null));
            /**
             * Name of the ticket tier on the purchased order line. anyOf[1] (Value): string. Name
             * of the ticket tier on the purchased order line. anyOf[2] (Value): null.
             */
            "tier_name"?: ((string) | (null));
            /**
             * When the ticket last changed. anyOf[1] (Value): string. When the ticket last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * anyOf[1] (Value): string. When the ticket was permanently voided. Null when the
             * ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "ticket.voided". */
    "event_type"?: "ticket.voided";
});
/**
 * A ticket with the admission code a rotation just minted. An individual admission, a top-level
 * child of an order. Merchant reads and webhooks never include the bearer admission code.
 */
export type TicketWithAdmissionCode = (Exclude<Ticket & object, readonly unknown[]>)
    & ({
    /**
     * The new bearer admission code, formatted as XXXX-XXXX-XXXX-XXXX. Returned only by the
     * rotation that minted it, and by a retry of that rotation within 24 hours while the ticket is
     * unchanged; omitted otherwise. Encode it in a QR code without hyphens, and treat it like a
     * password. minLength: 19. maxLength: 19.
     */
    "admission_code"?: string;
});
/** A response containing `TicketWithAdmissionCode` data. */
export type TicketWithAdmissionCodeResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A ticket with the
     * admission code a rotation just minted. An individual admission, a top-level child of an
     * order. Merchant reads and webhooks never include the bearer admission code.
     */
    "data": TicketWithAdmissionCode;
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
/**
 * Event details for a ticketed order: name, location, start time, time zone, and the tickets
 * issued.
 */
export type TicketedEvent = {
    /** Where the event takes place. */
    "location"?: string;
    /** Event name when the order was placed. */
    "name": string;
    /**
     * When the event starts. RFC 3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string;
    /**
     * Ticket numbers issued for this order. Empty while ticket_status is pending. [] (Value):
     * string.
     */
    "ticket_numbers": Array<string>;
    /** Whether the order's tickets are issued. Value enum: "pending", "issued", "voided". */
    "ticket_status": "pending" | "issued" | "voided" | (string & {});
    /** IANA time zone Flint shows the event in. */
    "timezone"?: string;
};
export type TicketedEventPreviousAttributes = {
    /**
     * Where the event takes place. anyOf[1] (Value): string. Where the event takes place. anyOf[2]
     * (Value): null.
     */
    "location"?: ((string) | (null));
    /**
     * Event name when the order was placed. anyOf[1] (Value): string. Event name when the order
     * was placed. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * When the event starts. RFC 3339 timestamp. anyOf[1] (Value): string. When the event starts.
     * RFC 3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
     * null.
     */
    "starts_at"?: ((string) | (null));
    /**
     * Ticket numbers issued for this order. Empty while ticket_status is pending. anyOf[1]
     * (Value): Array of string. Ticket numbers issued for this order. Empty while ticket_status is
     * pending. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     */
    "ticket_numbers"?: ((Array<string>) | (null));
    /**
     * Whether the order's tickets are issued. Value enum: "pending", "issued", "voided". anyOf[1]
     * (Value): string. Whether the order's tickets are issued. Value enum: "pending", "issued",
     * "voided". anyOf[2] (Value): null.
     */
    "ticket_status"?: (("pending" | "issued" | "voided" | (string & {})) | (null));
    /**
     * IANA time zone Flint shows the event in. anyOf[1] (Value): string. IANA time zone Flint
     * shows the event in. anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
};
export type TicketsCheckInParams = (InputValue<CheckInTicketRequestInput>);
export type TicketsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order. Include the order
     * summary. Limits: at most 10 unique expand paths per request. Checkout session credentials
     * cannot use expand on this route. [] enum: "order". Value enum: "order". anyOf[1] (Value):
     * Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order". anyOf[2]
     * (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type TicketsListParams = {
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
     * Only tickets for this event payment link. pattern: ^pl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: InputValue<string>;
    /**
     * Only tickets belonging to this order. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by ticket status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "issued", "checked_in", "voided". Value enum: "issued", "checked_in",
     * "voided". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "issued", "checked_in",
     * "voided". anyOf[1][] (Value): string. Value enum: "issued", "checked_in", "voided". anyOf[2]
     * (Value): string. Value enum: "issued", "checked_in", "voided".
     */
    "status"?: InputValue<("issued" | "checked_in" | "voided") | readonly ("issued" | "checked_in" | "voided")[]>;
    /**
     * Case-insensitive text search across ticket number, attendee name, buyer name and buyer
     * email. For Dashboard check-in staff it matches ticket number and attendee name only.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by ticket_id. Default:
     * "created_at". Value enum: "created_at", "attendee_name".
     */
    "sort_by"?: InputValue<"created_at" | "attendee_name">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Inclusive lower bound on checked_in_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "checked_in_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on checked_in_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "checked_in_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. Checkout session
     * credentials cannot use expand on this route. [] enum: "order". Value enum: "order". anyOf[1]
     * (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order".
     * anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type TicketsLookupParams = (InputValue<LookupTicketRequestInput>)
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
export type TicketsRotateCodeParams = (InputValue<TicketVersionRequestInput>);
export type TicketsUndoCheckInParams = TicketsRotateCodeParams;
export type TicketsUpdateParams = (InputValue<UpdateTicketRequestInput>);
export type TicketsVoidParams = TicketsRotateCodeParams;
/**
 * A tip on an order, with its requested, settled, and refunded amounts, status, and how it was
 * paid.
 */
export type Tip = {
    /**
     * Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Optional description that stays on the tip for your reporting. */
    "description"?: string;
    /**
     * The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "effective_amount_money": MoneyValue;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Optional name that stays on the tip for your reporting. */
    "name"?: string;
    /** ID of the tip, prefixed `tip_`. Example: "tip_01KEZF7C00JRPYP11RTMB97MYH". */
    "order_tip_id": string;
    /**
     * How much of the tip each payment intent paid, one entry per payment intent. Flint adds an
     * entry when it records that payment's tip on the order. [] (Value): {@link
     * TipPaymentIntentAllocation}. The part of a tip paid through one payment intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How much of the tip has been refunded. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * How much of the tip has been paid. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "settled_amount_money": MoneyValue;
    /**
     * Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled
     * before collection. Value enum: "requested", "paid", "partially_refunded", "refunded",
     * "canceled".
     */
    "status": "requested" | "paid" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * How much of the tip gift cards paid, one entry per gift card redemption that included tip
     * money. Empty when no gift card paid any of the tip. [] (Value): {@link
     * TipValueSettlementAllocation}. The part of a tip paid through one value settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/** The part of a tip paid through one payment intent. */
export type TipPaymentIntentAllocation = {
    /**
     * The part of the tip this payment intent paid. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of the payment intent that paid this part of the tip. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
};
export type TipPaymentIntentAllocationPreviousAttributes = {
    /**
     * The part of the tip this payment intent paid. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the payment intent that paid this part of the tip. anyOf[1] (Value): string. ID of the
     * payment intent that paid this part of the tip. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * anyOf[2] (Value): null.
     */
    "payment_intent_id"?: ((string) | (null));
};
export type TipPreviousAttributes = {
    /**
     * Fixed tip amount, when the tip is set as an amount. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Optional description that stays on the tip for your reporting. anyOf[1] (Value): string.
     * Optional description that stays on the tip for your reporting. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * The tip amount the order collects. For a percent tip, the resolved amount. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "effective_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null));
    /**
     * Optional name that stays on the tip for your reporting. anyOf[1] (Value): string. Optional
     * name that stays on the tip for your reporting. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * ID of the tip, prefixed `tip_`. anyOf[1] (Value): string. ID of the tip, prefixed `tip_`.
     * Example: "tip_01KEZF7C00JRPYP11RTMB97MYH". anyOf[2] (Value): null.
     */
    "order_tip_id"?: ((string) | (null));
    /**
     * How much of the tip each payment intent paid, one entry per payment intent. Flint adds an
     * entry when it records that payment's tip on the order. anyOf[1] (Value): Array of {@link
     * TipPaymentIntentAllocationPreviousAttributes}. How much of the tip each payment intent paid,
     * one entry per payment intent. Flint adds an entry when it records that payment's tip on the
     * order. anyOf[1][] (Value): {@link TipPaymentIntentAllocationPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "payment_intent_allocations"?: ((Array<TipPaymentIntentAllocationPreviousAttributes>) | (null));
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * anyOf[1] (Value): number. Tip percentage in percentage points, such as `18` for 18%, when
     * the tip is set as a percent. multipleOf: 0.0001. anyOf[2] (Value): null.
     */
    "percent"?: ((number) | (null));
    /**
     * How much of the tip has been refunded. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * How much of the tip has been paid. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "settled_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled
     * before collection. Value enum: "requested", "paid", "partially_refunded", "refunded",
     * "canceled". anyOf[1] (Value): string. Whether the tip is awaiting payment, paid in full,
     * refunded in part or in full, or canceled before collection. Value enum: "requested", "paid",
     * "partially_refunded", "refunded", "canceled". anyOf[2] (Value): null.
     */
    "status"?: (("requested" | "paid" | "partially_refunded" | "refunded" | "canceled" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * How much of the tip gift cards paid, one entry per gift card redemption that included tip
     * money. Empty when no gift card paid any of the tip. anyOf[1] (Value): Array of {@link
     * TipValueSettlementAllocationPreviousAttributes}. How much of the tip gift cards paid, one
     * entry per gift card redemption that included tip money. Empty when no gift card paid any of
     * the tip. anyOf[1][] (Value): {@link TipValueSettlementAllocationPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "value_settlement_allocations"?: ((Array<TipValueSettlementAllocationPreviousAttributes>) | (null));
};
/** The part of a tip paid through one value settlement. */
export type TipValueSettlementAllocation = {
    /**
     * The part of the tip this gift card redemption paid. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of the value settlement Flint recorded for the gift card redemption that paid this part
     * of the tip. Example: "ovst_01KEZF7C00EMVZ016PM34KKFGY".
     */
    "value_settlement_id": string;
};
export type TipValueSettlementAllocationPreviousAttributes = {
    /**
     * The part of the tip this gift card redemption paid. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the value settlement Flint recorded for the gift card redemption that paid this part
     * of the tip. anyOf[1] (Value): string. ID of the value settlement Flint recorded for the gift
     * card redemption that paid this part of the tip. Example: "ovst_01KEZF7C00EMVZ016PM34KKFGY".
     * anyOf[2] (Value): null.
     */
    "value_settlement_id"?: ((string) | (null));
};
/**
 * Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips
 * are allowed.
 */
export type TippingSettings = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * Whether hosted checkout offers tips when a checkout session or payment link doesn't set its
     * own `tip`. Defaults to false.
     */
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its
     * amount and currency must match one of the effective smart_tip_money_options. `null` when no
     * preselection is set; effective settings use Flint's default. anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. anyOf[1].amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO 4217 currency code for
     * this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "default_smart_tip_money": ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * The preselected tip percent, from 1 through 100 with at most four decimal places. It must
     * match one of the effective tip_percent_options. `null` when no preselection is set;
     * effective settings use Flint's default. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent": number | null;
    /**
     * Three fixed tip amounts to offer. minItems: 3. maxItems: 3. [] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. [].amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. [].currency (Required): string. ISO 4217 currency code for this amount.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Tipping settings to change when updating settings. Omit a field to keep it; send null to clear a
 * preselected tip. minProperties: 1.
 */
export type TippingSettingsPatch = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * Whether hosted checkout offers tips when a checkout session or payment link doesn't set its
     * own `tip`. Defaults to false.
     */
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Omit to preserve the current value.
     * Send null to clear the preselection and use Flint's default. When replacing presets,
     * explicitly replace or clear a preselection that is no longer offered. anyOf[1] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * anyOf[2] (Value): null.
     */
    "default_smart_tip_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Omit to preserve the current value. Send null to clear the preselection and use Flint's
     * default. When replacing presets, explicitly replace or clear a preselection that is no
     * longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number | null;
    /**
     * Three fixed tip amounts to offer. minItems: 3. maxItems: 3. [] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. [].amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. [].currency (Required): string. ISO 4217 currency code for this amount.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Tipping settings to change when updating settings. Omit a field to keep it; send null to clear a
 * preselected tip. minProperties: 1.
 */
export type TippingSettingsPatchInput = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * Whether hosted checkout offers tips when a checkout session or payment link doesn't set its
     * own `tip`. Defaults to false.
     */
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Omit to preserve the current value.
     * Send null to clear the preselection and use Flint's default. When replacing presets,
     * explicitly replace or clear a preselection that is no longer offered. anyOf[1] (Value):
     * {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * anyOf[2] (Value): null.
     */
    "default_smart_tip_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Omit to preserve the current value. Send null to clear the preselection and use Flint's
     * default. When replacing presets, explicitly replace or clear a preselection that is no
     * longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number | null;
    /**
     * Three fixed tip amounts to offer. minItems: 3. maxItems: 3. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. [].amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. [].currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/** An optional version fence for removing the merchant freeze. */
export type UnfreezeGiftCardRequestInput = CloseGiftCardRequest;
/** The request body for: Update an API key. minProperties: 1. */
export type UpdateAPIKeyRequest = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access"?: "full" | "read_only" | "restricted" | (string & {});
    /**
     * Resource version last read by the caller. Required when access or scopes is present.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | null;
    /**
     * A label that helps you tell keys apart, 1 to 100 characters. Omit to keep the current name;
     * `null` is rejected. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.license_keys.read"
        | "commerce.license_keys.secrets.write"
        | "commerce.license_keys.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
})
    & ((({
    /** Value enum: "full". */
    "access": unknown;
}))
    | (({
    /** Value enum: "read_only". */
    "access": unknown;
}))
    | ({
    /** Value enum: "restricted". */
    "access": unknown;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.license_keys.read"
        | "commerce.license_keys.secrets.write"
        | "commerce.license_keys.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
})
    | (unknown)
    | (Record<string, unknown>));
/** The request body for: Update an API key. minProperties: 1. */
export type UpdateAPIKeyRequestInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access"?: "full" | "read_only" | "restricted";
    /**
     * Resource version last read by the caller. Required when access or scopes is present.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * A label that helps you tell keys apart, 1 to 100 characters. Omit to keep the current name;
     * `null` is rejected. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.license_keys.read"
        | "commerce.license_keys.secrets.write"
        | "commerce.license_keys.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    & ((({
    /** Value enum: "full". */
    "access": ("full") & ("full");
})
    & ({
    "scopes"?: never;
}))
    | (({
    /** Value enum: "read_only". */
    "access": ("read_only") & ("read_only");
})
    & ({
    "scopes"?: never;
}))
    | ({
    /** Value enum: "restricted". */
    "access": ("restricted") & ("restricted");
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.license_keys.read",
     * "commerce.license_keys.secrets.write", "commerce.license_keys.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.license_keys.read"
        | "commerce.license_keys.secrets.write"
        | "commerce.license_keys.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    | (({
    "access"?: never;
})));
/**
 * A component to keep or add when updating a bundle, with its variant, quantity, position, and
 * delivery profile.
 */
export type UpdateBundleComponentRequest = {
    /**
     * Identifier of an existing component to retain. Omit it to add a new component. minLength: 1.
     * pattern: ^bunc_[0-9A-HJKMNP-TV-Z]{26}$. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string;
    /**
     * Delivery profile for this component. Omit it to copy the variant's current profile when the
     * component is saved; later changes to the variant's profile don't follow. On update, omitting
     * it on a retained component replaces any override with the variant's current profile, so
     * resend it to keep it. Send null to leave the component without a profile, which makes a
     * physical component `action_required` and a digital or service component `not_applicable`
     * with no delivery requirement. Digital and service components never use defaults; explicit
     * and inherited profiles must be required/manual with allowed_types exactly [digital] or
     * [service], matching the component product type. Existing order delivery snapshots do not
     * change. minLength: 1. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: string | null;
    /** Display order among the bundle's components, starting at zero. Format: int32. minimum: 0. */
    "position"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Identifier of the product variant included in the bundle. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/**
 * A component to keep or add when updating a bundle, with its variant, quantity, position, and
 * delivery profile.
 */
export type UpdateBundleComponentRequestInput = UpdateBundleComponentRequest;
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging. minProperties: 1.
 */
export type UpdateBundleRequest = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Replaces all bundle components atomically. Include an existing bundle_component_id to retain
     * a member. Omitted members are removed. All must share taxable and line_item_tax_category; an
     * unset category equals only another unset category. Components are compared with the first
     * input component, with a NOT_ALLOWED detail at each differing components[index].variant_id.
     * Null is not accepted. [] (Value): {@link UpdateBundleComponentRequest}. A component to keep
     * or add when updating a bundle, with its variant, quantity, position, and delivery profile.
     */
    "components"?: Array<UpdateBundleComponentRequest>;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Resource version last read by the caller. Required when components or images is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /**
     * Bundle name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Whether the bundle is active or inactive. An inactive bundle cannot be sold. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
});
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging. minProperties: 1.
 */
export type UpdateBundleRequestInput = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Replaces all bundle components atomically. Include an existing bundle_component_id to retain
     * a member. Omitted members are removed. All must share taxable and line_item_tax_category; an
     * unset category equals only another unset category. Components are compared with the first
     * input component, with a NOT_ALLOWED detail at each differing components[index].variant_id.
     * Null is not accepted. [] (Value): {@link UpdateBundleComponentRequestInput}. A component to
     * keep or add when updating a bundle, with its variant, quantity, position, and delivery
     * profile.
     */
    "components"?: Array<UpdateBundleComponentRequestInput>;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Resource version last read by the caller. Required when components or images is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /**
     * Bundle name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Whether the bundle is active or inactive. An inactive bundle cannot be sold. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
});
/** The request body for: Update category. minProperties: 1. */
export type UpdateCategoryRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Category version last read by the caller. Optional for updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * Category name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 100.
     */
    "name"?: string;
};
/** The request body for: Update category. minProperties: 1. */
export type UpdateCategoryRequestInput = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Category version last read by the caller. Optional for updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Category name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 100.
     */
    "name"?: string;
};
/** The request body for: Update checkout session. minProperties: 1. */
export type UpdateCheckoutSessionRequest = {
    /**
     * Checkout session credentials only. Saves the contact the buyer entered while the session is
     * open. A patch object: omitted fields are unchanged, and null clears a field. A merchant
     * credential that sends buyer_contact fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail
     * on `buyer_contact`. Buyer contact to supply with payment or save during checkout. Send at
     * least one field. Values are stored exactly as sent, so an email with surrounding spaces is
     * rejected. Checkout session updates keep omitted fields and accept null to clear a field.
     * Payment requests do not accept null. minProperties: 1.
     */
    "buyer_contact"?: CheckoutBuyerContactRequest;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * send null to clear. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Subscription plan sessions only. The billing interval and line quantities the buyer chose
     * from the frozen subscription_terms, and the gift recipient when
     * subscription_terms.gifts_enabled is true. Send billing_interval and billing_interval_count
     * together. Accepted from your API key or the checkout credential. Subscription choices for a
     * checkout session: billing interval, interval count, line quantities, and gift recipient.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for
     * Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: 1.
     * maxLength: 64.
     */
    "timezone"?: string;
};
/** The request body for: Update checkout session. minProperties: 1. */
export type UpdateCheckoutSessionRequestInput = {
    /**
     * Checkout session credentials only. Saves the contact the buyer entered while the session is
     * open. A patch object: omitted fields are unchanged, and null clears a field. A merchant
     * credential that sends buyer_contact fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail
     * on `buyer_contact`. Buyer contact to supply with payment or save during checkout. Send at
     * least one field. Values are stored exactly as sent, so an email with surrounding spaces is
     * rejected. Checkout session updates keep omitted fields and accept null to clear a field.
     * Payment requests do not accept null. minProperties: 1.
     */
    "buyer_contact"?: CheckoutBuyerContactRequestInput;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * send null to clear. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Subscription plan sessions only. The billing interval and line quantities the buyer chose
     * from the frozen subscription_terms, and the gift recipient when
     * subscription_terms.gifts_enabled is true. Send billing_interval and billing_interval_count
     * together. Accepted from your API key or the checkout credential. Subscription choices for a
     * checkout session: billing interval, interval count, line quantities, and gift recipient.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for
     * Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: 1.
     * maxLength: 64.
     */
    "timezone"?: string;
};
/** The request body for: Update credit note. minProperties: 1. */
export type UpdateCreditNoteRequest = ({
    /**
     * Credit note version last read. Required when line_items is present. Required when any of
     * these fields is present: line_items. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Full replacement of the draft's owned line collection; requires expected_version.
     * Recalculates corrections from current remaining creditable pools. After VERSION_CONFLICT,
     * replace the existing corrections using current_version as expected_version, review the new
     * amounts, and issue again. Scalar memo or reason changes do not reprice lines. [] (Value):
     * {@link CreditNoteLineItemRequest}. A credit note line you supply when creating or updating a
     * credit note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequest>;
    /** Send null to clear it. minLength: 1. maxLength: 4096. */
    "memo"?: string | null;
    /**
     * Why the invoice is being corrected: returned_goods, order_adjustment, billing_error,
     * goodwill, or other. Cannot be null; omit it to keep the current reason. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
});
/** The request body for: Update credit note. minProperties: 1. */
export type UpdateCreditNoteRequestInput = ({
    /**
     * Credit note version last read. Required when line_items is present. Required when any of
     * these fields is present: line_items. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Full replacement of the draft's owned line collection; requires expected_version.
     * Recalculates corrections from current remaining creditable pools. After VERSION_CONFLICT,
     * replace the existing corrections using current_version as expected_version, review the new
     * amounts, and issue again. Scalar memo or reason changes do not reprice lines. [] (Value):
     * {@link CreditNoteLineItemRequestInput}. A credit note line you supply when creating or
     * updating a credit note: the invoice line item it credits and how much, or an existing line
     * to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequestInput>;
    /** Send null to clear it. minLength: 1. maxLength: 4096. */
    "memo"?: string | null;
    /**
     * Why the invoice is being corrected: returned_goods, order_adjustment, billing_error,
     * goodwill, or other. Cannot be null; omit it to keep the current reason. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other";
});
/**
 * The request body for: Update a customer address; Update one of the current buyer's addresses.
 * minProperties: 1.
 */
export type UpdateCustomerAddressRequest = {
    /**
     * Replaces the whole postal address. Send every field you want to keep; omitted optional
     * fields such as line2 are removed. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /**
     * The `version` of the saved address you last read. The update fails with a conflict if the
     * address has changed since. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. Send null to clear it. minLength: 1. maxLength: 100.
     */
    "label"?: string | null;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "phone"?: string | null;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name"?: string;
};
/**
 * The request body for: Update a customer address; Update one of the current buyer's addresses.
 * minProperties: 1.
 */
export type UpdateCustomerAddressRequestInput = {
    /**
     * Replaces the whole postal address. Send every field you want to keep; omitted optional
     * fields such as line2 are removed. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /**
     * The `version` of the saved address you last read. The update fails with a conflict if the
     * address has changed since. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. Send null to clear it. minLength: 1. maxLength: 100.
     */
    "label"?: string | null;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "phone"?: string | null;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name"?: string;
};
/** The request body for: Update the current buyer's email preferences. minProperties: 1. */
export type UpdateCustomerEmailPreferencesRequest = {
    /** A reminder after leaving checkout without paying. */
    "checkout_reminders"?: boolean;
    /**
     * The `version` of the preferences you last read. The update fails with a conflict if they
     * have changed since. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** Emails about shipments and deliveries, such as shipped, out for delivery, and delivered. */
    "shipping_updates"?: boolean;
};
/** The request body for: Update the current buyer's email preferences. minProperties: 1. */
export type UpdateCustomerEmailPreferencesRequestInput = UpdateCustomerEmailPreferencesRequest;
/** The request body for: Update customer. minProperties: 1. */
export type UpdateCustomerRequest = ({
    /**
     * Default payment term for this customer's invoices. Send null to clear it. minLength: 1.
     * Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * The active off_session payment method to use by default. Existing subscriptions keep their
     * payment_method_id. Omit to leave unchanged; null clears it. A change sends customer.updated.
     * minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "default_payment_method_id"?: string | null;
    /**
     * The customer's email. Omit to leave unchanged; null clears it. In `flint_hosted` mode, you
     * can set, correct, or clear the email until the buyer authenticates or verifies ownership of
     * it. Existing identities with unknown sign-in history remain protected and require a
     * buyer-confirmed change. In `merchant_hosted` mode, you can set, change, or clear it. An
     * email change ends customer sessions and access links for the old address. The local part
     * before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1. maxLength:
     * 320. Example: "buyer@example.com".
     */
    "email"?: string | null;
    /**
     * Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return
     * a conflict. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Internal note about this customer. Omit to leave unchanged; null clears it. Surrounding
     * whitespace is trimmed before length validation. A supplied value cannot be blank; use null
     * where clearing is supported. minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string | null;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * Customer name, up to 255 characters (Unicode code points) after trimming surrounding
     * whitespace. Omit to leave unchanged; null clears it. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1.
     */
    "name"?: string | null;
    /**
     * Customer phone number in E.164 format: a leading `+`, then the country code and number as
     * digits only, such as `+14155551234`, matching `^\+[1-9][0-9]{1,14}$`. Flint trims
     * surrounding whitespace but rejects spaces, hyphens, dots, and parentheses inside the number,
     * so send `+14155550100`, not `+1 (415) 555-0100`. Leave out a national trunk prefix: send
     * `+442079460958`, not `+4402079460958`. Omit to leave unchanged; null clears it. minLength:
     * 1. Example: "+14155551234".
     */
    "phone"?: string | null;
    /**
     * ID of a wholesale price list in this merchant environment. Omit to leave unchanged; null
     * clears it. An inactive list can be assigned but does not apply. An archived list returns 409
     * ACTION_NOT_ALLOWED; a missing list returns 404 RESOURCE_NOT_FOUND. minLength: 1. pattern:
     * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource. Omit to
     * leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    /**
     * Whether Flint treats this customer as exempt from tax on their orders, so it skips tax
     * calculation for them. Omit to leave unchanged; `null` is not accepted.
     */
    "tax_exempt"?: boolean;
    /**
     * Legal name, registered address and tax IDs printed on this customer's invoices and credit
     * notes. Omit to leave unchanged; null clears it. anyOf[1] (Value): {@link TaxIdentityPatch}.
     * Merchant-provided legal identity displayed on invoices and credit notes. Flint does not
     * verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ
     * destination to its tax provider, which can apply a reverse charge; other IDs do not change
     * tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
});
/** The request body for: Update customer. minProperties: 1. */
export type UpdateCustomerRequestInput = ({
    /**
     * Default payment term for this customer's invoices. Send null to clear it. minLength: 1.
     * Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * The active off_session payment method to use by default. Existing subscriptions keep their
     * payment_method_id. Omit to leave unchanged; null clears it. A change sends customer.updated.
     * minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "default_payment_method_id"?: string | null;
    /**
     * The customer's email. Omit to leave unchanged; null clears it. In `flint_hosted` mode, you
     * can set, correct, or clear the email until the buyer authenticates or verifies ownership of
     * it. Existing identities with unknown sign-in history remain protected and require a
     * buyer-confirmed change. In `merchant_hosted` mode, you can set, change, or clear it. An
     * email change ends customer sessions and access links for the old address. The local part
     * before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1. maxLength:
     * 320. Example: "buyer@example.com".
     */
    "email"?: string | null;
    /**
     * Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return
     * a conflict. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Internal note about this customer. Omit to leave unchanged; null clears it. Surrounding
     * whitespace is trimmed before length validation. A supplied value cannot be blank; use null
     * where clearing is supported. minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string | null;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Customer name, up to 255 characters (Unicode code points) after trimming surrounding
     * whitespace. Omit to leave unchanged; null clears it. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1.
     */
    "name"?: string | null;
    /**
     * Customer phone number in E.164 format: a leading `+`, then the country code and number as
     * digits only, such as `+14155551234`, matching `^\+[1-9][0-9]{1,14}$`. Flint trims
     * surrounding whitespace but rejects spaces, hyphens, dots, and parentheses inside the number,
     * so send `+14155550100`, not `+1 (415) 555-0100`. Leave out a national trunk prefix: send
     * `+442079460958`, not `+4402079460958`. Omit to leave unchanged; null clears it. minLength:
     * 1. Example: "+14155551234".
     */
    "phone"?: string | null;
    /**
     * ID of a wholesale price list in this merchant environment. Omit to leave unchanged; null
     * clears it. An inactive list can be assigned but does not apply. An archived list returns 409
     * ACTION_NOT_ALLOWED; a missing list returns 404 RESOURCE_NOT_FOUND. minLength: 1. pattern:
     * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource. Omit to
     * leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    /**
     * Whether Flint treats this customer as exempt from tax on their orders, so it skips tax
     * calculation for them. Omit to leave unchanged; `null` is not accepted.
     */
    "tax_exempt"?: boolean;
    /**
     * Legal name, registered address and tax IDs printed on this customer's invoices and credit
     * notes. Omit to leave unchanged; null clears it. anyOf[1] (Value): {@link
     * TaxIdentityPatchInput}. Merchant-provided legal identity displayed on invoices and credit
     * notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU,
     * GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do
     * not change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
});
/**
 * Sparse patch. Omitted fields stay unchanged. Expired and archived records cannot be edited. A
 * version fence alone is not a change. minProperties: 1.
 */
export type UpdateCustomerTaxExemptionRequest = ({
    /**
     * Merchant's exemption certificate number. Null when none is recorded. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "certificate_number"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. Requires expected_version when
     * present. Replaced as a whole: send every field you want to keep. Covers all US states or an
     * explicit list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverage;
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. Send null to
     * clear it. minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Send null to clear it. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. Send null to clear it. minLength: 1. maxLength:
     * 1024.
     */
    "evidence_reference"?: string | null;
    /**
     * Resource version last read by the caller. Required when replacing coverage; optional for
     * other changes. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "start_date"?: string;
})
    & (({
    /**
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
})
    | ({
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. Send null to
     * clear it. minLength: 1. maxLength: 500.
     */
    "description": string | null;
})
    | ({
    /**
     * Replaced as a whole: send every field you want to keep. Requires expected_version when
     * present. Replaced as a whole: send every field you want to keep. Covers all US states or an
     * explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverage;
})
    | ({
    /**
     * Merchant's exemption certificate number. Null when none is recorded. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "certificate_number": string | null;
})
    | ({
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. Send null to clear it. minLength: 1. maxLength:
     * 1024.
     */
    "evidence_reference": string | null;
})
    | ({
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
})
    | ({
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Send null to clear it. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "end_date": string | null;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequest) | (null));
})
    | (Record<string, unknown>));
/**
 * Sparse patch. Omitted fields stay unchanged. Expired and archived records cannot be edited. A
 * version fence alone is not a change. minProperties: 1.
 */
export type UpdateCustomerTaxExemptionRequestInput = ({
    /**
     * Merchant's exemption certificate number. Null when none is recorded. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "certificate_number"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. Requires expected_version when
     * present. Replaced as a whole: send every field you want to keep. Covers all US states or an
     * explicit list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverageRequestInput;
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. Send null to
     * clear it. minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Send null to clear it. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. Send null to clear it. minLength: 1. maxLength:
     * 1024.
     */
    "evidence_reference"?: string | null;
    /**
     * Resource version last read by the caller. Required when replacing coverage; optional for
     * other changes. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "start_date"?: string;
})
    & (({
    /**
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
})
    | ({
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. Send null to
     * clear it. minLength: 1. maxLength: 500.
     */
    "description": string | null;
})
    | ({
    /**
     * Replaced as a whole: send every field you want to keep. Requires expected_version when
     * present. Replaced as a whole: send every field you want to keep. Covers all US states or an
     * explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverageRequestInput;
})
    | ({
    /**
     * Merchant's exemption certificate number. Null when none is recorded. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "certificate_number": string | null;
})
    | ({
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. Send null to clear it. minLength: 1. maxLength:
     * 1024.
     */
    "evidence_reference": string | null;
})
    | ({
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
})
    | ({
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Send null to clear it. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "end_date": string | null;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequestInput) | (null));
}));
/**
 * Delivery fulfillment fields to change when updating a fulfillment, such as courier, tracking,
 * and delivery times. Send null to clear a field.
 */
export type UpdateDeliveryFulfillmentDetails = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Time at which the courier collected the order. Send null to clear it. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "courier_pickup_at"?: string | null;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number | null;
    /**
     * Delivery network or merchant fleet provider handling the job. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Buyer-safe support number for the courier or merchant fleet. Send null to clear it.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string | null;
    /**
     * Time by which the order should be delivered. Passing it does not change status or emit an
     * event automatically; the merchant decides how to follow up. Send null to clear it. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "delivery_due_at"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "dispatched_at"?: string | null;
    /**
     * Driver-facing notes for the final handoff. Send null to clear it. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. Send null to clear
     * it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_delivery_id"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number | null;
    /**
     * Time at which the order became ready for courier pickup. Send null to clear it. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string | null;
    /** Send null to clear it. minLength: 1. Example: "boston-north". */
    "service_area_id"?: string | null;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to
     * clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | null;
};
/**
 * Delivery fulfillment fields to change when updating a fulfillment, such as courier, tracking,
 * and delivery times. Send null to clear a field.
 */
export type UpdateDeliveryFulfillmentDetailsInput = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Time at which the courier collected the order. Send null to clear it. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "courier_pickup_at"?: string | globalThis.Date | null;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number | null;
    /**
     * Delivery network or merchant fleet provider handling the job. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Buyer-safe support number for the courier or merchant fleet. Send null to clear it.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string | globalThis.Date | null;
    /**
     * Time by which the order should be delivered. Passing it does not change status or emit an
     * event automatically; the merchant decides how to follow up. Send null to clear it. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "delivery_due_at"?: string | globalThis.Date | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "dispatched_at"?: string | globalThis.Date | null;
    /**
     * Driver-facing notes for the final handoff. Send null to clear it. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. Send null to clear
     * it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_delivery_id"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number | null;
    /**
     * Time at which the order became ready for courier pickup. Send null to clear it. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. Example: "boston-north". */
    "service_area_id"?: string | null;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to
     * clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date | null;
};
/** The request body for: Update delivery location set. minProperties: 1. */
export type UpdateDeliveryLocationSetRequest = ({
    /**
     * Replaced as a whole: send every field you want to keep. location_ids replaces the set's
     * Locations; leave configuration out to keep them. Null, an empty object, an empty list, and
     * duplicate IDs are invalid. Publishes a new immutable revision, even when the values are
     * unchanged, and requires expected_version. The location IDs in a delivery location set.
     */
    "configuration"?: DeliveryLocationSetConfiguration;
    /**
     * Current resource version. Required when the request carries a revision field: configuration.
     * A revision field publishes a new immutable revision even when its value is unchanged.
     * Optional for other fields, which advance version and keep the current revision. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Merchant-facing name. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
})
    & (({
    /**
     * Merchant-facing name. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Replaced as a whole: send every field you want to keep. location_ids replaces the set's
     * Locations; leave configuration out to keep them. Null, an empty object, an empty list, and
     * duplicate IDs are invalid. Publishes a new immutable revision, even when the values are
     * unchanged, and requires expected_version. The location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequest) | (null));
})
    | (Record<string, unknown>));
/** The request body for: Update delivery location set. minProperties: 1. */
export type UpdateDeliveryLocationSetRequestInput = ({
    /**
     * Replaced as a whole: send every field you want to keep. location_ids replaces the set's
     * Locations; leave configuration out to keep them. Null, an empty object, an empty list, and
     * duplicate IDs are invalid. Publishes a new immutable revision, even when the values are
     * unchanged, and requires expected_version. The location IDs in a delivery location set.
     */
    "configuration"?: DeliveryLocationSetConfigurationInput;
    /**
     * Current resource version. Required when the request carries a revision field: configuration.
     * A revision field publishes a new immutable revision even when its value is unchanged.
     * Optional for other fields, which advance version and keep the current revision. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Merchant-facing name. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name"?: string;
})
    & (({
    /**
     * Merchant-facing name. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Replaced as a whole: send every field you want to keep. location_ids replaces the set's
     * Locations; leave configuration out to keep them. Null, an empty object, an empty list, and
     * duplicate IDs are invalid. Publishes a new immutable revision, even when the values are
     * unchanged, and requires expected_version. The location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfigurationInput;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequestInput) | (null));
}));
/** The request body for: Update delivery method. minProperties: 1. */
export type UpdateDeliveryMethodRequest = ({
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Each key you send
     * replaces that part of the configuration as a whole, so send every field you want to keep in
     * pricing, origin, eligibility, and the other objects. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even
     * when the values are unchanged, and requires expected_version. Patch object: fields you send
     * are applied, fields you omit are unchanged. Each key you send replaces that part of the
     * configuration as a whole, so send every field you want to keep in pricing, origin,
     * eligibility, and the other objects. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. An empty
     * configuration is invalid. Publishes a new immutable revision, even when the values are
     * unchanged, and requires expected_version. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequest;
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Current resource version. Required when the request carries a revision field: configuration,
     * name, description, display_position, recommendation_priority. A revision field publishes a
     * new immutable revision even when its value is unchanged. Optional for other fields, which
     * advance version and keep the current revision. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Name of the method. Buyers see it as the option name at checkout. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name"?: string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
    /**
     * Whether the method is in use. Send it alone, with `expected_version`; combining it with
     * another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Value
     * enum: "inactive", "active".
     */
    "status"?: "inactive" | "active" | (string & {});
})
    & (({
    /**
     * Name of the method. Buyers see it as the option name at checkout. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Each key you send
     * replaces that part of the configuration as a whole, so send every field you want to keep in
     * pricing, origin, eligibility, and the other objects. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even
     * when the values are unchanged, and requires expected_version. Patch object: fields you send
     * are applied, fields you omit are unchanged. Each key you send replaces that part of the
     * configuration as a whole, so send every field you want to keep in pricing, origin,
     * eligibility, and the other objects. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. An empty
     * configuration is invalid. Publishes a new immutable revision, even when the values are
     * unchanged, and requires expected_version. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequest;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequest) | (null));
})
    | ({
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description": string | null;
})
    | ({
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position": number;
})
    | ({
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /**
     * Whether the method is in use. Send it alone, with `expected_version`; combining it with
     * another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Value
     * enum: "inactive", "active".
     */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
