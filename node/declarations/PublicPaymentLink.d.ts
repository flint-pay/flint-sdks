
import type { CheckoutCustomTextWriteConfig } from './CheckoutCustomTextWriteConfig.js';
import type { CheckoutPaymentConfig } from './CheckoutPaymentConfig.js';
import type { Image } from './Image.js';
import type { LegalSettings } from './LegalSettings.js';
import type { MoneyValue } from './MoneyValue.js';
import type { PaymentLinkCustomField } from './PaymentLinkCustomField.js';
import type { PaymentLinkEventConfig } from './PaymentLinkEventConfig.js';
import type { PaymentLinkLineItem } from './PaymentLinkLineItem.js';
import type { ThemeConfig } from './ThemeConfig.js';

export type PublicPaymentLink = { /** Format: int32. */ "completed_count": number; "custom_fields"?: Array<PaymentLinkCustomField>; "custom_text"?: CheckoutCustomTextWriteConfig; "description"?: string; "donation_max_amount_money"?: MoneyValue; "donation_min_amount_money"?: MoneyValue; "donation_suggested_amount_money_options"?: Array<MoneyValue>; "event_config"?: PaymentLinkEventConfig; "image"?: Image; "inactive_message"?: string; "legal"?: LegalSettings; "line_items"?: Array<PaymentLinkLineItem>; /** Format: int32. */ "max_completions"?: number; "name": string; "payment_link_id": string; "payment_link_type"?: "standard" | "donation" | "event" | (string & {}); "payments"?: CheckoutPaymentConfig; "status": "active" | "inactive" | (string & {}); "subscription_plan_id"?: string; "theme"?: ThemeConfig; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version": string; };
