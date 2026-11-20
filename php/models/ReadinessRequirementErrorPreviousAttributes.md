[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessRequirementErrorPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Flint verification failure code. New codes may be added; use message and resolution for unknown codes. Values: [12 declared values](ReadinessRequirementErrorInput.md#readinessrequirementerrorinput-code-values). `code`: [declared alternatives](../models/ReadinessRequirementErrorPreviousAttributes.md#readinessrequirementerrorpreviousattributescode). |
| `message` | Optional | string or null | What could not be verified. `message`: [declared alternatives](../models/ReadinessRequirementErrorPreviousAttributes.md#readinessrequirementerrorpreviousattributesmessage). |
| `requirement` | Optional | string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `requirement`: [declared alternatives](../models/ReadinessRequirementErrorPreviousAttributes.md#readinessrequirementerrorpreviousattributesrequirement). |
| `resolution` | Optional | string or null | What the merchant should do to resolve the requirement. `resolution`: [declared alternatives](../models/ReadinessRequirementErrorPreviousAttributes.md#readinessrequirementerrorpreviousattributesresolution). |

### ReadinessRequirementErrorPreviousAttributes.code

### ReadinessRequirementErrorPreviousAttributes.code variant 1

anyOf variant 1: Flint verification failure code. New codes may be added; use message and resolution for unknown codes..

- Value shape: string. Flint verification failure code. New codes may be added; use message and resolution for unknown codes. Values: `"statement_descriptor_mismatch"`, `"statement_descriptor_rejected"`, `"tax_id_mismatch"`, `"identity_mismatch"`, `"document_unreadable"`, `"document_expired"`, `"document_mismatch"`, `"document_rejected"`, `"invalid_value"`, `"terms_reacceptance_required"`, `"profile_field_rejected"`, `"verification_failed"`.

### ReadinessRequirementErrorPreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. Flint verification failure code. New codes may be added; use message and resolution for unknown codes. 

### ReadinessRequirementErrorPreviousAttributes.message

### ReadinessRequirementErrorPreviousAttributes.message variant 1

anyOf variant 1: What could not be verified..

- Value shape: string. What could not be verified. 

### ReadinessRequirementErrorPreviousAttributes.message variant 2

anyOf variant 2.

- Value shape: null. What could not be verified. 

### ReadinessRequirementErrorPreviousAttributes.requirement

### ReadinessRequirementErrorPreviousAttributes.requirement variant 1

anyOf variant 1: Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information..

- Value shape: string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Values: `"additional_account_information"`, `"business_address"`, `"business_description"`, `"business_directors"`, `"business_executives"`, `"business_name"`, `"business_owners"`, `"business_phone"`, `"business_support_email"`, `"business_support_phone"`, `"business_support_url"`, `"business_tax_id"`, `"business_verification_document"`, `"business_website"`, `"merchant_category_code"`, `"owner_address"`, `"owner_additional_identity_document"`, `"owner_date_of_birth"`, `"owner_first_name"`, `"owner_identity_document"`, `"owner_last_name"`, `"owner_tax_id_last_four"`, `"payout_destination"`, `"payout_destination_ownership_document"`, `"representative_address"`, `"representative_additional_identity_document"`, `"representative_date_of_birth"`, `"representative_email"`, `"representative_first_name"`, `"representative_identity_document"`, `"representative_last_name"`, `"representative_phone"`, `"representative_tax_id"`, `"representative_tax_id_last_four"`, `"terms_acceptance"`, `"statement_descriptor"`.

### ReadinessRequirementErrorPreviousAttributes.requirement variant 2

anyOf variant 2.

- Value shape: null. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. 

### ReadinessRequirementErrorPreviousAttributes.resolution

### ReadinessRequirementErrorPreviousAttributes.resolution variant 1

anyOf variant 1: What the merchant should do to resolve the requirement..

- Value shape: string. What the merchant should do to resolve the requirement. 

### ReadinessRequirementErrorPreviousAttributes.resolution variant 2

anyOf variant 2.

- Value shape: null. What the merchant should do to resolve the requirement. 

