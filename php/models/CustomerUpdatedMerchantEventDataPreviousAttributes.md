[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | Alternative shapes (see declared variants) or null | The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. `billing_address`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesbilling_address). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer_id` | Optional | string or null | Unique identifier for this customer, prefixed `cus_`. `customer_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributescustomer_id). |
| `default_invoice_payment_term_id` | Optional | string or null | ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. `default_invoice_payment_term_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_invoice_payment_term_id). |
| `default_payment_method` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. `default_payment_method`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method). |
| `default_payment_method_id` | Optional | string or null or null | ID of the customer's default off-session payment method. `null` when none is set. `default_payment_method_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method_id). |
| `email` | Optional | string or null or null | Customer email. `null` when the customer has none. Unique among the environment's customers. `email`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1email). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. `external_reference_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesexternal_reference_id). |
| `internal_note` | Optional | string or null or null | Internal note about this customer. `null` when none is set. Not returned to customer sessions. `internal_note`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesinternal_note). |
| `is_merchant_verified` | Optional | boolean or null | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. `is_merchant_verified`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesis_merchant_verified). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null or null | Customer name. `null` when none is set. `name`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1name). |
| `phone` | Optional | string or null or null | Customer phone number. `null` when none is set. `phone`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1phone). |
| `price_list_id` | Optional | string or null or null | ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. `price_list_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesprice_list_id). |
| `receivables` | Optional | Alternative shapes (see declared variants) | What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. `receivables`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesreceivables). |
| `segment` | Optional | string or null or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. `segment`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributessegment). |
| `shipping_address` | Optional | Alternative shapes (see declared variants) or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. `shipping_address`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesshipping_address). |
| `status` | Optional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1status). |
| `tax_exempt` | Optional | boolean or null | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. `tax_exempt`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestax_exempt). |
| `tax_identity` | Optional | Alternative shapes (see declared variants) or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. `tax_identity`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestax_identity). |
| `test_clock_id` | Optional | string or null | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. `test_clock_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestest_clock_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address

The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 1

anyOf variant 1: The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default.; anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.billing_address variant 2, 3

anyOf variant 1: The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default.; anyOf variant 2; anyOf variant 2.

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

### CustomerUpdatedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: Unique identifier for this customer, prefixed `cus_`..

- Value shape: string. Unique identifier for this customer, prefixed `cus_`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this customer, prefixed `cus_`. 

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
| `card` | Conditional | Alternative shapes (see declared variants) | Brand, expiry and last four digits. Present when type is card. `card`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer_id` | Conditional | string or null | Customer this payment method belongs to. `customer_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1customer_id). |
| `payment_method_id` | Conditional | string or null | Unique identifier for this payment method, prefixed `pm_`. `payment_method_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1payment_method_id). |
| `status` | Conditional | string or null | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1status). |
| `type` | Conditional | string or null | Kind of payment method. Values: `"card"`. `type`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1type). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1: `type` = `"card"`

anyOf variant 1: Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method.; anyOf ExpandedPaymentMethodSummaryPreviousAttributes.

- Optional: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 2, 3

anyOf variant 1: Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method.; anyOf variant 2; anyOf variant 2.

- Undeclared: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.
- Value shape: null. Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card

Brand, expiry and last four digits. Present when type is card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Conditional | string or null | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. `brand`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1brand). |
| `exp_month` | Conditional | integer or null | Month the card expires, from 1 to 12. `exp_month`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card-variant-1exp_month). |
| `exp_year` | Conditional | integer or null | Four-digit year the card expires. `exp_year`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card-variant-1exp_year). |
| `last4` | Conditional | string or null | Last four digits of the card number. `last4`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1last4). |
| `wallet` | Conditional | string or null | The wallet the card came from. Absent for a card entered directly. Values: `"apple_pay"`, `"google_pay"`. `wallet`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card-variant-1wallet). |

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1

anyOf CardDetailsPreviousAttributes.

- Optional: `brand`, `exp_month`, `exp_year`, `last4`, `wallet`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 2

anyOf variant 2.

- Undeclared: `brand`, `exp_month`, `exp_year`, `last4`, `wallet`.
- Value shape: null. Brand, expiry and last four digits. Present when type is card. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.brand

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.brand](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1brand).

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.exp_month

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.exp_month variant 1

anyOf variant 1: Month the card expires, from 1 to 12..

- Value shape: integer. Month the card expires, from 1 to 12. Month the card expires, from 1 to 12. Format: `int32`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.exp_month variant 2

anyOf variant 2.

- Value shape: null. Month the card expires, from 1 to 12. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.exp_year

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.exp_year variant 1

anyOf variant 1: Four-digit year the card expires..

- Value shape: integer. Four-digit year the card expires. Four-digit year the card expires. Format: `int32`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.exp_year variant 2

anyOf variant 2.

- Value shape: null. Four-digit year the card expires. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.last4

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.last4](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1last4).

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.wallet

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.wallet variant 1

anyOf variant 1: The wallet the card came from. Absent for a card entered directly..

- Value shape: string. The wallet the card came from. Absent for a card entered directly. Values: `"apple_pay"`, `"google_pay"`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.wallet variant 2

anyOf variant 2.

- Value shape: null. The wallet the card came from. Absent for a card entered directly. 

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

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.status variant 1

anyOf variant 1: Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later..

- Value shape: string. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.type

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.type variant 1

anyOf variant 1: Kind of payment method..

- Value shape: string. Kind of payment method. Values: `"card"`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Kind of payment method. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id variant 1

anyOf variant 1: ID of the customer's default off-session payment method. `null` when none is set..

- Value shape: (string or null). ID of the customer's default off-session payment method. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer's default off-session payment method. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.email

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.email](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1email).

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. minLength: `1`. maxLength: `255`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note

### CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note variant 1

anyOf variant 1: Internal note about this customer. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Internal note about this customer. `null` when none is set. Not returned to customer sessions. 

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

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.name](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1name).

### CustomerUpdatedMerchantEventDataPreviousAttributes.phone

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.phone](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1phone).

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id variant 1

anyOf variant 1: ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions..

- Value shape: (string or null). ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables

What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Conditional | Array of object or null | One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. `balances`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesreceivables-variant-1balances). |
| `observed_at` | Conditional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1

anyOf CustomerReceivablesPreviousAttributes.

- Optional: `balances`, `observed_at`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 2

anyOf variant 2.

- Undeclared: `balances`, `observed_at`.
- Value shape: null. What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances variant 1

anyOf variant 1: One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing..

- Value shape: Array of object. One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances variant 2

anyOf variant 2.

- Value shape: null. One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesreceivables-variant-1balances-variant-1-fields-1currency). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. |
| `overdue_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. |

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances variant 1.[] fields 1.currency

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances variant 1.[] fields 1.currency variant 1

anyOf variant 1: ISO 4217 currency code..

- Value shape: string. ISO 4217 currency code. ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances variant 1.[] fields 1.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.observed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment variant 1

anyOf variant 1: Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment variant 2

anyOf variant 2.

- Value shape: null. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address

The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 1

anyOf variant 1: The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default.; anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.shipping_address variant 2, 3

anyOf variant 1: The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default.; anyOf variant 2; anyOf variant 2.

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

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1status).

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt variant 1

anyOf variant 1: Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions..

- Value shape: boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt variant 2

anyOf variant 2.

- Value shape: null. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_identity

Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions.

Field definitions: [shared fields](CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity).

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_identity variant 1

anyOf variant 1: Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions.; anyOf TaxIdentityPreviousAttributes.

- Optional: `legal_name`, `registered_address`, `tax_ids`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_identity variant 2, 3

anyOf variant 1: Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions.; anyOf variant 2; anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_identity variant 1.legal_name

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.legal_name](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1legal_name).

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_identity variant 1.registered_address

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1registered_address).

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_identity variant 1.tax_ids

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids).

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

