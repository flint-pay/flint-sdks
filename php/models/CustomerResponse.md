[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerResponse

A response containing `Customer` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Customer](../models/Customer.md#customer) | Resource, collection, or operation result returned by this request. A merchant's customer profile. `data`: [field definitions](../models/CustomerResponse.md#customerresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerResponse.data

Resource, collection, or operation result returned by this request. A merchant's customer profile.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Required | [Address](../models/Address.md#address) or null | The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. `billing_address`: [declared alternatives](../models/CustomerResponse.md#customerresponsedatabilling_address). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | Unique identifier for this customer, prefixed `cus_`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `default_invoice_payment_term_id` | Optional | string | ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `default_payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null | Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. `default_payment_method`: [declared alternatives](../models/CustomerResponse.md#customerresponsedatadefault_payment_method). |
| `default_payment_method_id` | Required | string or null | ID of the customer's default off-session payment method. `null` when none is set. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `email` | Required | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `internal_note` | Required | string or null | Internal note about this customer. `null` when none is set. Not returned to customer sessions. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string or null | Customer name. `null` when none is set. |
| `phone` | Required | string or null | Customer phone number. `null` when none is set. |
| `price_list_id` | Required | string or null | ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. |
| `receivables` | Optional | [CustomerReceivables](../models/CustomerReceivables.md#customerreceivables) | What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. A customer's receivable balances by currency and when they were observed. `receivables`: [field definitions](../models/CustomerResponse.md#customerresponsedatareceivables). |
| `segment` | Required | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. |
| `shipping_address` | Required | [Address](../models/Address.md#address) or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. `shipping_address`: [declared alternatives](../models/CustomerResponse.md#customerresponsedatashipping_address). |
| `status` | Required | string | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_exempt` | Optional | boolean | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. `tax_identity`: [declared alternatives](../models/CustomerResponse.md#customerresponsedatatax_identity). |
| `test_clock_id` | Optional | string | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. Example: `"tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### CustomerResponse.data.billing_address

The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatadeliverydestinationaddress).

### CustomerResponse.data.billing_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### CustomerResponse.data.billing_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. 

### CustomerResponse.data.default_payment_method

Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatapayment_method).

### CustomerResponse.data.default_payment_method variant 1: `type` = `"card"`

anyOf ExpandedPaymentMethodSummary: A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded..

- Required: `payment_method_id`, `status`, `type`.
- Optional: `card`, `created_at`, `customer_id`, `updated_at`.

### CustomerResponse.data.default_payment_method variant 2

anyOf variant 2.

- Undeclared: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.
- Value shape: null. Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. 

### CustomerResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CustomerResponse.data.receivables

What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. A customer's receivable balances by currency and when they were observed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Required | Array of [CustomerReceivableBalance](../models/CustomerReceivableBalance.md#customerreceivablebalance) | One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. `balances[]`: [field definitions](../models/CustomerResponse.md#customerresponsedatareceivablesbalances). |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CustomerResponse.data.receivables.balances[]

A customer's outstanding and overdue amounts in one currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `overdue_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CustomerResponse.data.shipping_address

The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatadeliverydestinationaddress).

### CustomerResponse.data.shipping_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### CustomerResponse.data.shipping_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. 

### CustomerResponse.data.tax_identity

Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity).

### CustomerResponse.data.tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### CustomerResponse.data.tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. 

### CustomerResponse.data.tax_identity variant 1.registered_address

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1registered_address).

### CustomerResponse.data.tax_identity variant 1.tax_ids[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.tax_ids[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1tax_ids).

### CustomerResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

