[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBuyerContactPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null or null | Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. `email`: [declared alternatives](../models/CheckoutBuyerContactPreviousAttributesInput.md#checkoutbuyercontactpreviousattributesinputemail). |
| `is_email_cleared` | Optional | boolean or null | True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true. `is_email_cleared`: [declared alternatives](../models/CheckoutBuyerContactPreviousAttributesInput.md#checkoutbuyercontactpreviousattributesinputis_email_cleared). |
| `is_phone_cleared` | Optional | boolean or null | True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true. `is_phone_cleared`: [declared alternatives](../models/CheckoutBuyerContactPreviousAttributesInput.md#checkoutbuyercontactpreviousattributesinputis_phone_cleared). |
| `phone` | Optional | string or null or null | Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. `phone`: [declared alternatives](../models/CheckoutBuyerContactPreviousAttributesInput.md#checkoutbuyercontactpreviousattributesinputphone). |
| `updated_at` | Optional | string or null | When the buyer last changed the saved checkout contact. Omitted on order buyer contact. `updated_at`: [declared alternatives](../models/CheckoutBuyerContactPreviousAttributesInput.md#checkoutbuyercontactpreviousattributesinputupdated_at). |

### CheckoutBuyerContactPreviousAttributesInput.email

### CheckoutBuyerContactPreviousAttributesInput.email variant 1

anyOf variant 1: Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear..

- Value shape: (string or null). Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. 

### CheckoutBuyerContactPreviousAttributesInput.email variant 2

anyOf variant 2.

- Value shape: null. Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. 

### CheckoutBuyerContactPreviousAttributesInput.is_email_cleared

### CheckoutBuyerContactPreviousAttributesInput.is_email_cleared variant 1

anyOf variant 1: True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true..

- Value shape: boolean. True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true. 

### CheckoutBuyerContactPreviousAttributesInput.is_email_cleared variant 2

anyOf variant 2.

- Value shape: null. True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true. 

### CheckoutBuyerContactPreviousAttributesInput.is_phone_cleared

### CheckoutBuyerContactPreviousAttributesInput.is_phone_cleared variant 1

anyOf variant 1: True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true..

- Value shape: boolean. True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true. 

### CheckoutBuyerContactPreviousAttributesInput.is_phone_cleared variant 2

anyOf variant 2.

- Value shape: null. True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true. 

### CheckoutBuyerContactPreviousAttributesInput.phone

### CheckoutBuyerContactPreviousAttributesInput.phone variant 1

anyOf variant 1: Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear..

- Value shape: (string or null). Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. pattern: `^\+[1-9][0-9]{1,14}$`. 

### CheckoutBuyerContactPreviousAttributesInput.phone variant 2

anyOf variant 2.

- Value shape: null. Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. 

### CheckoutBuyerContactPreviousAttributesInput.updated_at

### CheckoutBuyerContactPreviousAttributesInput.updated_at variant 1

anyOf variant 1: When the buyer last changed the saved checkout contact. Omitted on order buyer contact..

- Value shape: string. When the buyer last changed the saved checkout contact. Omitted on order buyer contact. When the buyer last changed the saved checkout contact. Omitted on order buyer contact. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutBuyerContactPreviousAttributesInput.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the buyer last changed the saved checkout contact. Omitted on order buyer contact. 

