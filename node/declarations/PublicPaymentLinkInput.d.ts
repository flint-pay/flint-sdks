
import type { CheckoutCustomTextWriteConfigInput } from './CheckoutCustomTextWriteConfigInput.js';
import type { CheckoutPaymentConfigInput } from './CheckoutPaymentConfigInput.js';
import type { ImageInput } from './ImageInput.js';
import type { LegalSettingsInput } from './LegalSettingsInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PaymentLinkCustomFieldInput } from './PaymentLinkCustomFieldInput.js';
import type { PaymentLinkEventConfigInput } from './PaymentLinkEventConfigInput.js';
import type { PaymentLinkLineItemInput } from './PaymentLinkLineItemInput.js';
import type { ThemeConfigInput } from './ThemeConfigInput.js';

export type PublicPaymentLinkInput = { /** Format: int32. */ "completed_count": number; "custom_fields"?: Array<PaymentLinkCustomFieldInput>; "custom_text"?: CheckoutCustomTextWriteConfigInput; "description"?: string; "donation_max_amount_money"?: MoneyValueInput; "donation_min_amount_money"?: MoneyValueInput; "donation_suggested_amount_money_options"?: Array<MoneyValueInput>; "event_config"?: PaymentLinkEventConfigInput; "image"?: ImageInput; "inactive_message"?: string; "legal"?: LegalSettingsInput; "line_items"?: Array<PaymentLinkLineItemInput>; /** Format: int32. */ "max_completions"?: number; "name": string; "payment_link_id": string; "payment_link_type"?: "standard" | "donation" | "event"; "payments"?: CheckoutPaymentConfigInput; "status": "active" | "inactive"; "subscription_plan_id"?: string; "theme"?: ThemeConfigInput; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version": string; };
