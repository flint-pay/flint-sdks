[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. `billing_address`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesbilling_address). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer_id` | Optional | string or null | Unique identifier for this customer, prefixed `cus_`. `customer_id`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributescustomer_id). |
| `default_invoice_payment_term_id` | Optional | string or null | ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. `default_invoice_payment_term_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_invoice_payment_term_id). |
| `default_payment_method` | Optional | [ExpandedPaymentMethodSummaryPreviousAttributes](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributes) or null | Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. `default_payment_method`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method). |
| `default_payment_method_id` | Optional | string or null | ID of the customer's default off-session payment method. `null` when none is set. `default_payment_method_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method_id). |
| `email` | Optional | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. `email`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. `external_reference_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesexternal_reference_id). |
| `internal_note` | Optional | string or null | Internal note about this customer. `null` when none is set. Not returned to customer sessions. `internal_note`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesinternal_note). |
| `is_merchant_verified` | Optional | boolean or null | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. `is_merchant_verified`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesis_merchant_verified). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Customer name. `null` when none is set. `name`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname). |
| `phone` | Optional | string or null | Customer phone number. `null` when none is set. `phone`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone). |
| `price_list_id` | Optional | string or null | ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. `price_list_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesprice_list_id). |
| `receivables` | Optional | [CustomerReceivablesPreviousAttributes](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributes) or null | What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. `receivables`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesreceivables). |
| `segment` | Optional | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. `segment`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributessegment). |
| `shipping_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. `shipping_address`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesshipping_address). |
| `status` | Optional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus). |
| `tax_exempt` | Optional | boolean or null | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. `tax_exempt`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestax_exempt). |
| `tax_identity` | Optional | [TaxIdentityPreviousAttributes](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributes) or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. |
| `test_clock_id` | Optional | string or null | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. `test_clock_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestest_clock_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address

The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CustomerUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.customer_id

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.customer_id](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributescustomer_id).

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id variant 1

anyOf variant 1: ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set..

- Value shape: string. ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method

Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Conditional | [CardDetailsPreviousAttributes](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributes) or null | Brand, expiry and last four digits. Present when type is card. |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer_id` | Conditional | string or null | Customer this payment method belongs to. `customer_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1customer_id). |
| `payment_method_id` | Conditional | string or null | Unique identifier for this payment method, prefixed `pm_`. `payment_method_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1payment_method_id). |
| `status` | Conditional | string or null | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributesstatus). |
| `type` | Conditional | string or null | Kind of payment method. Values: `"card"`. `type`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributestype). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1: `type` = `"card"`

anyOf ExpandedPaymentMethodSummaryPreviousAttributes.

- Optional: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 2

anyOf variant 2.

- Undeclared: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.
- Value shape: null. Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.customer_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.customer_id variant 1

anyOf variant 1: Customer this payment method belongs to..

- Value shape: string. Customer this payment method belongs to. Customer this payment method belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer this payment method belongs to. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.payment_method_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.payment_method_id variant 1

anyOf variant 1: Unique identifier for this payment method, prefixed `pm_`..

- Value shape: string. Unique identifier for this payment method, prefixed `pm_`. Unique identifier for this payment method, prefixed `pm_`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment method, prefixed `pm_`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.status

Declared alternatives: [ExpandedPaymentMethodSummaryPreviousAttributes.status](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributesstatus).

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.type

Declared alternatives: [ExpandedPaymentMethodSummaryPreviousAttributes.type](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributestype).

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id variant 1

anyOf variant 1: ID of the customer's default off-session payment method. `null` when none is set..

- Value shape: string. ID of the customer's default off-session payment method. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer's default off-session payment method. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.email

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.email](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail).

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions..

- Value shape: string. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. minLength: `1`. maxLength: `255`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note

### CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note variant 1

anyOf variant 1: Internal note about this customer. `null` when none is set. Not returned to customer sessions..

- Value shape: string. Internal note about this customer. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note variant 2

anyOf variant 2.

- Value shape: null. Internal note about this customer. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified

### CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified variant 1

anyOf variant 1: Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address..

- Value shape: boolean. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified variant 2

anyOf variant 2.

- Value shape: null. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CustomerUpdatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### CustomerUpdatedMerchantEventDataPreviousAttributes.name

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.name](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname).

### CustomerUpdatedMerchantEventDataPreviousAttributes.phone

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.phone](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone).

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id variant 1

anyOf variant 1: ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions..

- Value shape: string. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables

What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Conditional | Array of [CustomerReceivableBalancePreviousAttributes](../models/CustomerReceivableBalancePreviousAttributes.md#customerreceivablebalancepreviousattributes) or null | One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. `balances`: [declared alternatives](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributesbalances). |
| `observed_at` | Conditional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1

anyOf CustomerReceivablesPreviousAttributes.

- Optional: `balances`, `observed_at`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 2

anyOf variant 2.

- Undeclared: `balances`, `observed_at`.
- Value shape: null. What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances

Declared alternatives: [CustomerReceivablesPreviousAttributes.balances](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributesbalances).

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.observed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment variant 1

anyOf variant 1: Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions..

- Value shape: string. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment variant 2

anyOf variant 2.

- Value shape: null. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address

The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CustomerUpdatedMerchantEventDataPreviousAttributes.status

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.status](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus).

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt variant 1

anyOf variant 1: Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions..

- Value shape: boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt variant 2

anyOf variant 2.

- Value shape: null. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id variant 1

anyOf variant 1: ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions..

- Value shape: string. ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id variant 2

anyOf variant 2.

- Value shape: null. ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

