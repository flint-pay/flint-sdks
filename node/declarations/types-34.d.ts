import type { Address, AddressRequest, AddressRequestInput, AssessInvoiceLateFeeRequestInput } from './types-0.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary } from './types-24.js';
import type { InvoiceCollection, Invoice, InvoiceAutopayRetryPolicy, InvoiceAutopayRetryPolicyInput } from './types-31.js';
import type { InvoiceLateFee, InvoiceDiscount, InvoiceLineItem } from './types-32.js';
import type {
    InvoicePaymentDue,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentPolicy,
    InvoiceReminderPolicy,
    InvoicePaymentPolicyRequestInput,
    InvoiceReminderPolicyInput
} from './types-33.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { PricingAmounts } from './types-50.js';
import type { WebhookInvoice } from './types-70.js';
import type { ResponseMeta } from './types-54.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { SettlementAmounts } from './types-59.js';
import type { OrderCharge } from './types-40.js';
import type { OrderTaxExemption } from './types-42.js';
import type { TaxBreakdown } from './types-64.js';
import type { TaxCurrencyConversion, TaxIdentity, TaxReverseCharge } from './types-65.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { CollectInvoiceRequestInput } from './types-7.js';
import type { CreateInvoiceManualPaymentRequestInput, CreateInvoiceRequestInput } from './types-10.js';
import type { IssueInvoiceRequestInput } from './types-35.js';
import type { CustomersListAddressesParams } from './types-16.js';
import type { CreditNotesListAllocationsParams } from './types-15.js';
/**
 * One reminder in an invoice reminder policy. `days_from_due` sets when it is sent: negative
 * values are days before the due date, positive values days after.
 */
export type InvoiceReminderRule = {
    /**
     * Calendar days from the due date in the invoice timezone. Negative values send before it,
     * zero sends on it, and positive values send after it. Format: int32. minimum: -90. maximum:
     * 365.
     */
    "days_from_due": number;
};
/**
 * One reminder in an invoice reminder policy. `days_from_due` sets when it is sent: negative
 * values are days before the due date, positive values days after.
 */
export type InvoiceReminderRuleInput = InvoiceReminderRule;
export type InvoiceReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.reopened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.reopened";
});
/**
 * The `invoice.reopened` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceReopenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.reopened". */
    "event_type"?: "invoice.reopened";
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
 * The `invoice.reopened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.reopened". */
    "event_type"?: "invoice.reopened";
});
/** A response containing `Invoice` data. */
export type InvoiceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A bill issued to a
     * customer.
     */
    "data": Invoice;
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
 * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total,
 * or the remaining balance.
 */
export type InvoiceScheduleAmountSpecification = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed", "percentage", "remaining_balance". */
    "type": "fixed" | "percentage" | "remaining_balance" | (string & {});
})
    & ((Exclude<InvoiceScheduleAmountSpecificationFixed & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationPercentage & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationRemainingBalance & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `fixed` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationFixed = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Value enum: "fixed". */
    "type": "fixed" | (string & {});
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
}));
/** The `fixed` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationFixedRequestInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Value enum: "fixed". */
    "type": "fixed";
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValueInput;
})
    & ({
    "percent"?: never;
}));
/** The `percentage` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationPercentage = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent": number;
    /** How the entry's amount is set. Value enum: "percentage". */
    "type": "percentage" | (string & {});
})
    & (({
    /** Value enum: "percentage". */
    "type": "percentage" | (string & {});
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent": number;
}));
/** The `percentage` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationPercentageRequestInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent": number;
    /** How the entry's amount is set. Value enum: "percentage". */
    "type": "percentage";
})
    & (({
    /** Value enum: "percentage". */
    "type": "percentage";
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent": number;
})
    & ({
    "amount_money"?: never;
}));
/** The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationRemainingBalance = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "remaining_balance". */
    "type": "remaining_balance" | (string & {});
})
    & (({
    /** Value enum: "remaining_balance". */
    "type": "remaining_balance" | (string & {});
}));
/** The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "remaining_balance". */
    "type": "remaining_balance";
})
    & (({
    /** Value enum: "remaining_balance". */
    "type": "remaining_balance";
})
    & (({
    "amount_money"?: never;
}) & ({
    "percent"?: never;
})));
/**
 * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total,
 * or the remaining balance.
 */
export type InvoiceScheduleAmountSpecificationRequestInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed", "percentage", "remaining_balance". */
    "type": "fixed" | "percentage" | "remaining_balance";
})
    & ((Exclude<InvoiceScheduleAmountSpecificationFixedRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationPercentageRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput & object, readonly unknown[]>));
/**
 * When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice
 * due date.
 */
export type InvoiceScheduleDue = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due date is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date" | (string & {});
})
    & ((Exclude<InvoiceScheduleDueAtIssue & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueDate & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueInvoiceDueDate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `at_issue` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueAtIssue = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due date is set. Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
})
    & ({
    /** Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
});
/** The `date` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date": string;
    /** How the entry's due date is set. Value enum: "date". */
    "type": "date" | (string & {});
})
    & ({
    /** Value enum: "date". */
    "type": "date" | (string & {});
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date": string;
});
/** The `invoice_due_date` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueInvoiceDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due date is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
})
    & ({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
});
/**
 * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
 * issue, on a set date, or on the invoice due date.
 */
export type InvoiceScheduleDueWrite = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date" | (string & {});
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssue & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueDate & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `at_issue` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteAtIssue = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
})
    & (({
    /** Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
}));
/** The `at_issue` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteAtIssueInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue";
})
    & (({
    /** Value enum: "at_issue". */
    "type": "at_issue";
}) & ({
    "due_date"?: never;
}));
/** The `date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteDateInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
    /** How the entry's due time is set. Value enum: "date". */
    "type": "date";
})
    & ({
    /** Value enum: "date". */
    "type": "date";
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
});
/**
 * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
 * issue, on a set date, or on the invoice due date.
 */
export type InvoiceScheduleDueWriteInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date";
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssueInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteDateInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDateInput & object, readonly unknown[]>));
/** The `invoice_due_date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteInvoiceDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
})
    & (({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
}));
/** The `invoice_due_date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteInvoiceDueDateInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & (({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & ({
    "due_date"?: never;
}));
/**
 * One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
 * its due time, amounts, and status.
 */
export type InvoiceScheduleEntry = {
    /**
     * How the entry's amount is set: a fixed amount, a percent of the invoice total, or the
     * remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage
     * of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * Credit note credit allocated to this entry, minus reversed allocations. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "credited_money": MoneyValue;
    /**
     * When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a
     * set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDue;
    /**
     * Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry.
     * Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id": string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance" | (string & {});
    /**
     * What is still owed on this entry, including its unpaid late fee, never below zero. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments applied to this entry, minus reversed payments, including payments toward its late
     * fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late
     * fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * The entry's payment status, computed when the invoice is read. It follows the entry's
     * balance and due time, not the invoice's status. Value enum: "pending", "due",
     * "partially_satisfied", "satisfied", "overdue".
     */
    "status": "pending" | "due" | "partially_satisfied" | "satisfied" | "overdue" | (string & {});
    /**
     * The entry's share of the invoice total, resolved from amount_specification against
     * pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late
     * fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * The part of this entry written off when the invoice was marked uncollectible, including its
     * unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "written_off_money": MoneyValue;
};
/**
 * One payment schedule entry you supply when creating or updating an invoice. Set its kind, how
 * much it collects, and when it is due.
 */
export type InvoiceScheduleEntryWrite = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance" | (string & {});
})
    & ((Exclude<InvoiceScheduleEntryWriteDeposit & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteInstallment & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteBalance & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `balance` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteBalance = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "balance". */
    "kind": "balance" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of pricing_amounts.total_money to collect, greater than 0 and
     * at most 100, with up to four decimal places. Required with percentage and not accepted with
     * any other type. multipleOf: 0.0001. type (Required): string. How the entry's amount is set.
     * Value enum: "remaining_balance". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "remaining_balance". */
        "type"?: "remaining_balance" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date", "invoice_due_date". oneOf[1]
     * (Value): {@link InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date`
     * variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDate}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "invoice_due_date", "date". */
        "type"?: "invoice_due_date" | "date" | (string & {});
    });
    /** Value enum: "balance". */
    "kind"?: "balance" | (string & {});
});
/** The `balance` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteBalanceInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "balance". */
    "kind": "balance";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001. type (Required): string. How the
     * entry's amount is set. Value enum: "remaining_balance". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "remaining_balance". */
        "type"?: "remaining_balance";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date", "invoice_due_date". oneOf[1]
     * (Value): {@link InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The
     * `date` variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "invoice_due_date", "date". */
        "type"?: "invoice_due_date" | "date";
    });
    /** Value enum: "balance". */
    "kind"?: "balance";
});
/** The `deposit` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteDeposit = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit". */
    "kind": "deposit" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of pricing_amounts.total_money to collect, greater than 0 and
     * at most 100, with up to four decimal places. Required with percentage and not accepted with
     * any other type. multipleOf: 0.0001. type (Required): string. How the entry's amount is set.
     * Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "at_issue", "date". oneOf[1] (Value):
     * {@link InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link InvoiceScheduleDueWriteInvoiceDueDate}.
     * The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "at_issue", "date". */
        "type"?: "at_issue" | "date" | (string & {});
    });
    /** Value enum: "deposit". */
    "kind"?: "deposit" | (string & {});
});
/** The `deposit` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteDepositInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit". */
    "kind": "deposit";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001. type (Required): string. How the
     * entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "at_issue", "date". oneOf[1] (Value):
     * {@link InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The
     * `date` variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "at_issue", "date". */
        "type"?: "at_issue" | "date";
    });
    /** Value enum: "deposit". */
    "kind"?: "deposit";
});
/**
 * One payment schedule entry you supply when creating or updating an invoice. Set its kind, how
 * much it collects, and when it is due.
 */
export type InvoiceScheduleEntryWriteInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance";
})
    & ((Exclude<InvoiceScheduleEntryWriteDepositInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteInstallmentInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteBalanceInput & object, readonly unknown[]>));
/** The `installment` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteInstallment = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "installment". */
    "kind": "installment" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of pricing_amounts.total_money to collect, greater than 0 and
     * at most 100, with up to four decimal places. Required with percentage and not accepted with
     * any other type. multipleOf: 0.0001. type (Required): string. How the entry's amount is set.
     * Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date". oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link InvoiceScheduleDueWriteInvoiceDueDate}.
     * The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "date". */
        "type"?: "date" | (string & {});
    });
    /** Value enum: "installment". */
    "kind"?: "installment" | (string & {});
});
/** The `installment` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteInstallmentInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "installment". */
    "kind": "installment";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001. type (Required): string. How the
     * entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date". oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "date". */
        "type"?: "date";
    });
    /** Value enum: "installment". */
    "kind"?: "installment";
});
export type InvoiceSentEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.sent";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.sent";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.sent";
});
/**
 * The `invoice.sent` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type InvoiceSentInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent";
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
 * The `invoice.sent` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceSentMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent";
});
/**
 * Merchant defaults for invoices, including numbering prefixes, default memo and footer,
 * collection mode, reminders, and autopay retries.
 */
export type InvoiceSettings = {
    /**
     * Replaced as a whole: send every field you want to keep. When to retry a failed automatic
     * invoice payment, as a list of day offsets.
     */
    "autopay_retry_policy"?: InvoiceAutopayRetryPolicy;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization.
     * maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external".
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. maxLength:
     * 4096.
     */
    "default_footer"?: string;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. maxLength:
     * 4096.
     */
    "default_memo"?: string;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization.
     * maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Which payment options an invoice
     * accepts, any per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
    /**
     * Replaced as a whole: send every field you want to keep. Rules for automatic invoice
     * reminders, each sent a set number of days before or after the due date.
     */
    "reminder_policy"?: InvoiceReminderPolicy;
    /**
     * Replaced as a whole: send every field you want to keep. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Format:
     * email. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string;
};
/**
 * Changes to a merchant's invoice settings. Send only the fields to change, and send null on a
 * nullable field to clear it. minProperties: 1.
 */
export type InvoiceSettingsPatch = {
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceAutopayRetryPolicy}. When to retry a failed automatic invoice payment, as a list of
     * day offsets. anyOf[2] (Value): null.
     */
    "autopay_retry_policy"?: ((InvoiceAutopayRetryPolicy) | (null));
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string | null;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external", null.
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null | (string & {}) | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_memo"?: string | null;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoicePaymentPolicy}. Which payment options an invoice accepts, any per-option total
     * limits, and whether to show a cost comparison. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicy) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceReminderPolicy}. Rules for automatic invoice reminders, each sent a set number of
     * days before or after the due date. anyOf[2] (Value): null.
     */
    "reminder_policy"?: ((InvoiceReminderPolicy) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequest}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "remit_to_address"?: ((AddressRequest) | (null));
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Send null to
     * clear it. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string | null;
};
/**
 * Changes to a merchant's invoice settings. Send only the fields to change, and send null on a
 * nullable field to clear it. minProperties: 1.
 */
export type InvoiceSettingsPatchInput = {
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceAutopayRetryPolicyInput}. When to retry a failed automatic invoice payment, as a list
     * of day offsets. anyOf[2] (Value): null.
     */
    "autopay_retry_policy"?: ((InvoiceAutopayRetryPolicyInput) | (null));
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string | null;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external", null.
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_memo"?: string | null;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoicePaymentPolicyRequestInput}. Which payment options an invoice accepts, any per-option
     * total limits, and whether to show a cost comparison. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicyRequestInput) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceReminderPolicyInput}. Rules for automatic invoice reminders, each sent a set number
     * of days before or after the due date. anyOf[2] (Value): null.
     */
    "reminder_policy"?: ((InvoiceReminderPolicyInput) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequestInput}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "remit_to_address"?: ((AddressRequestInput) | (null));
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Send null to
     * clear it. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string | null;
};
/**
 * The bill settlement amounts plus credit notes, the amount due now, and late fees. Invoice
 * paid_money includes late-fee payments and excludes reversed payments. Refunds and dispute losses
 * do not reopen outstanding_money or reduce paid_money. net_collected_money is paid_money minus
 * refunded_money, never below zero. Money collected, returned, waived, and still owed on a bill.
 */
export type InvoiceSettlementAmounts = ({
    /**
     * Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit
     * is not included. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "credited_money": MoneyValue;
    /**
     * The part of outstanding_money due now. Without schedule_entries, it equals
     * outstanding_money. With schedule_entries, it is the outstanding amount of the first entry,
     * in schedule order, whose due date has started and that still has a balance, or 0 when there
     * is none. This is the amount the next collect call or checkout session charges. Always 0
     * unless the invoice is open or partially_paid. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "currently_due_money": MoneyValue;
    /**
     * Late fees assessed after issue, minus waivers, including amounts since paid or written off.
     * Itemized in late_fees. Excluded from pricing_amounts.total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "late_fee_money": MoneyValue;
    /**
     * paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_collected_money": MoneyValue;
    /**
     * Money still owed on the bill, never below zero. Refunds return money already collected and
     * do not add to it. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Money collected toward the bill, net of reversed payments. Excludes written-off debt. On
     * orders, dispute losses do not reduce this amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Money returned to the buyer from what was collected toward the bill. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money
     * or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
})
    & (Exclude<SettlementAmounts & object, readonly unknown[]>);
/**
 * A frozen copy of an issued invoice's content, including line items, charges, discounts, tax
 * identities, and pricing amounts.
 */
export type InvoiceSnapshot = {
    /**
     * Billing address captured on the invoice. Kept after the customer is deleted, because an
     * issued invoice must keep it. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "billing_address"?: Address;
    /** The backing order's buyer note, captured on the invoice. */
    "buyer_note"?: string;
    /**
     * Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue
     * freezes the identity, which later profile edits and customer deletion preserve. `null` when
     * no buyer tax identity is available, including after customer deletion while the invoice is a
     * draft. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the
     * tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
     * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2]
     * (Value): null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /**
     * The backing order's service charges, frozen at issue. [] (Value): {@link OrderCharge}. An
     * additional charge applied to an order.
     */
    "charges"?: Array<OrderCharge>;
    /**
     * Buyer name captured on the invoice. Kept after the customer is deleted, because an issued
     * invoice must keep it.
     */
    "customer_display_name"?: string;
    /** Buyer email captured on the invoice. */
    "customer_email"?: string;
    /**
     * The discounts applied to the backing order, frozen at issue. [] (Value): {@link
     * InvoiceDiscount}. A discount applied to an invoice, with its source, the discount amount,
     * the amount actually applied, and any promotion.
     */
    "discounts"?: Array<InvoiceDiscount>;
    /**
     * The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads
     * leave it out.
     */
    "internal_note"?: string;
    /**
     * The billed line items, frozen at issue. A draft previews the backing order's lines. []
     * (Value): {@link InvoiceLineItem}. A line item on an invoice.
     */
    "line_items"?: Array<InvoiceLineItem>;
    /**
     * Your business name as shown on the invoice. A draft shows your current name; issue freezes
     * it.
     */
    "merchant_display_name"?: string;
    /**
     * The tip requested on the backing order, frozen at issue. Absent when none was requested. A
     * tip requested on an invoice, set as a fixed amount or a percentage, with an optional name
     * and description.
     */
    "requested_tip"?: InvoiceTip;
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured. anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Flint
     * does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ
     * destination to its tax provider, which can apply a reverse charge; other IDs do not change
     * tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows;
     * issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax
     * produces these rows, and so does automatic tax outside the US, one per national or
     * provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in
     * pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum
     * to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to
     * Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same
     * field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax
     * rows apply. Some older external-tax invoices have no frozen rows. [] (Value): {@link
     * TaxBreakdown}. The tax calculated for one jurisdiction on an order, line item, or charge,
     * with the taxable amount, rate or flat amount, and tax.
     */
    "tax_breakdowns": Array<TaxBreakdown>;
    /**
     * VAT stated in the currency of the country that charges it, one entry per currency, frozen at
     * issue. EU member states require their national currency and the UK requires sterling. Each
     * entry gives the converted VAT, the converted taxable amount, and the rate with its source
     * and date. Present for VAT above zero charged by an EU member state or the UK; always []
     * otherwise, including reverse charge, invoices in that currency already, and invoices issued
     * before conversions were recorded. The invoice PDF prints the same figures. [] (Value):
     * {@link TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
     * country whose VAT is charged.
     */
    "tax_currency_conversions": Array<TaxCurrencyConversion>;
    /**
     * Exemption assessment captured on this invoice. A draft previews the backing order's
     * assessment; issue freezes it. Omitted when no assessment was recorded, including on older
     * invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply
     * to the same invoice: when an exemption applies, Flint calculates no tax, so
     * tax_reverse_charge is null. The exemption assessment recorded for an order or invoice,
     * frozen when tax commits. Fields absent from historical snapshots stay omitted.
     */
    "tax_exemption"?: OrderTaxExemption;
    /**
     * The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the
     * tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse
     * charge applies, including when an exemption applies: Flint calculates no tax for an exempt
     * sale, so the two never appear on the same invoice. Drafts preview the order's current value.
     * anyOf[1] (Value): {@link TaxReverseCharge}. The buyer accounts for the tax under the reverse
     * charge. Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2]
     * (Value): null.
     */
    "tax_reverse_charge"?: ((TaxReverseCharge) | (null));
};
/**
 * A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and
 * description.
 */
export type InvoiceTip = {
    /**
     * Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Optional description that stays on the tip for your reporting. */
    "description"?: string;
    /** Optional name that stays on the tip for your reporting. */
    "name"?: string;
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
};
export type InvoiceUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.updated";
});
/**
 * The `invoice.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated";
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
 * The `invoice.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated";
});
export type InvoiceVoidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.voided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.voided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.voided";
});
/**
 * The `invoice.voided` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceVoidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided";
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
 * The `invoice.voided` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceVoidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided";
});
export type InvoicesCancelPaymentAttemptParams = DisputesAcceptParams;
export type InvoicesCollectParams = (InputValue<CollectInvoiceRequestInput>
    | {
    "invoice_schedule_entry_id"?: never;
    "payment_method_id"?: never;
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
export type InvoicesCreateLateFeeParams = (InputValue<AssessInvoiceLateFeeRequestInput> | {
    "invoice_schedule_entry_id"?: never;
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
export type InvoicesCreateManualPaymentParams = (InputValue<CreateInvoiceManualPaymentRequestInput>)
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
export type InvoicesCreateParams = (CreateInvoiceRequestInput)
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
export type InvoicesGetManualPaymentParams = DisputesAcceptParams;
export type InvoicesGetPDFParams = DisputesAcceptParams;
export type InvoicesGetPDFResponse = Uint8Array;
export type InvoicesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order. Expansion
     * requires commerce.invoices.read plus the read scope for each expanded resource. Limits: at
     * most 10 unique expand paths per request. [] enum: "customer", "order". Value enum:
     * "customer", "order". anyOf[1] (Value): Array of string. [] enum: "customer", "order".
     * anyOf[1][] (Value): string. Value enum: "customer", "order". anyOf[2] (Value): string. Value
     * enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
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
export type InvoicesGetPaymentAttemptParams = DisputesAcceptParams;
export type InvoicesIssueParams = (InputValue<IssueInvoiceRequestInput>
    | {
    "delivery_mode"?: never;
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
export type InvoicesListActivitiesParams = {
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
     * Filter by activity_type. The output-only catch-all other is not accepted. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "draft_created", "issued",
     * "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started",
     * "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded",
     * "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated",
     * "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due",
     * "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited". Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent",
     * "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[1][] (Value): string. Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[2] (Value): string. Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited".
     */
    "activity_type"?: InputValue<("draft_created"
        | "issued"
        | "sent"
        | "delivery_sent"
        | "reminder_sent"
        | "viewed"
        | "payment_attempt_started"
        | "payment_applied"
        | "manual_payment_recorded"
        | "manual_payment_reversed"
        | "refund_succeeded"
        | "voided"
        | "token_regenerated"
        | "collection_blocked"
        | "collection_block_resolved"
        | "updated"
        | "marked_uncollectible"
        | "payment_processing"
        | "issue_failed"
        | "overdue"
        | "reminder_due"
        | "late_fee_due"
        | "late_fee_assessed"
        | "late_fee_waived"
        | "credited")
        | readonly ("draft_created"
        | "issued"
        | "sent"
        | "delivery_sent"
        | "reminder_sent"
        | "viewed"
        | "payment_attempt_started"
        | "payment_applied"
        | "manual_payment_recorded"
        | "manual_payment_reversed"
        | "refund_succeeded"
        | "voided"
        | "token_regenerated"
        | "collection_blocked"
        | "collection_block_resolved"
        | "updated"
        | "marked_uncollectible"
        | "payment_processing"
        | "issue_failed"
        | "overdue"
        | "reminder_due"
        | "late_fee_due"
        | "late_fee_assessed"
        | "late_fee_waived"
        | "credited")[]>;
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
export type InvoicesListDeliveryAttemptsParams = CustomersListAddressesParams;
export type InvoicesListLateFeesParams = CustomersListAddressesParams;
export type InvoicesListManualPaymentsParams = CreditNotesListAllocationsParams;
