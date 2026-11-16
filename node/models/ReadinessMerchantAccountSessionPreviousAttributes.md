[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessMerchantAccountSessionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string or null | How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Values: `"upfront"`, `"incremental"`. `collection_strategy`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributescollection_strategy). |
| `components` | Optional | Array of string or null | Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`, `"payments"`. `components`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributescomponents). |
| `future_requirements` | Optional | string or null | Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Values: `"omit"`, `"include"`. `future_requirements`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributesfuture_requirements). |
| `targeted_requirements` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). `targeted_requirements`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |

### ReadinessMerchantAccountSessionPreviousAttributes.collection_strategy

### ReadinessMerchantAccountSessionPreviousAttributes.collection_strategy variant 1

anyOf variant 1: How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due..

- Value shape: string. How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Values: `"upfront"`, `"incremental"`.

### ReadinessMerchantAccountSessionPreviousAttributes.collection_strategy variant 2

anyOf variant 2.

- Value shape: null. How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. 

### ReadinessMerchantAccountSessionPreviousAttributes.components

### ReadinessMerchantAccountSessionPreviousAttributes.components variant 1

anyOf variant 1: Flint components to request. Send this list as components in POST /v1/merchant-account-sessions..

- Value shape: Array of string. Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`, `"payments"`.

### ReadinessMerchantAccountSessionPreviousAttributes.components variant 2

anyOf variant 2.

- Value shape: null. Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. 

### ReadinessMerchantAccountSessionPreviousAttributes.future_requirements

### ReadinessMerchantAccountSessionPreviousAttributes.future_requirements variant 1

anyOf variant 1: Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due..

- Value shape: string. Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Values: `"omit"`, `"include"`.

### ReadinessMerchantAccountSessionPreviousAttributes.future_requirements variant 2

anyOf variant 2.

- Value shape: null. Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. 

### ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements

### ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements variant 1

anyOf variant 1: Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information..

- Value shape: Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: `"additional_account_information"`, `"business_address"`, `"business_description"`, `"business_directors"`, `"business_executives"`, `"business_name"`, `"business_owners"`, `"business_phone"`, `"business_support_phone"`, `"business_support_url"`, `"business_tax_id"`, `"business_verification_document"`, `"business_website"`, `"merchant_category_code"`, `"owner_address"`, `"owner_additional_identity_document"`, `"owner_date_of_birth"`, `"owner_first_name"`, `"owner_identity_document"`, `"owner_last_name"`, `"owner_tax_id_last_four"`, `"payout_destination"`, `"representative_address"`, `"representative_additional_identity_document"`, `"representative_date_of_birth"`, `"representative_email"`, `"representative_first_name"`, `"representative_identity_document"`, `"representative_last_name"`, `"representative_phone"`, `"representative_tax_id"`, `"representative_tax_id_last_four"`.

### ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements variant 2

anyOf variant 2.

- Value shape: null. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. 

