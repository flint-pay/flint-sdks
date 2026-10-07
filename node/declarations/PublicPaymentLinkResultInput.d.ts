
import type { ImageInput } from './ImageInput.js';
import type { PaymentLinkSubscriptionPreviewInput } from './PaymentLinkSubscriptionPreviewInput.js';
import type { PublicPaymentLinkInput } from './PublicPaymentLinkInput.js';
import type { PublicResolvedLineItemInfoInput } from './PublicResolvedLineItemInfoInput.js';
import type { ThemeConfigInput } from './ThemeConfigInput.js';

export type PublicPaymentLinkResultInput = { /** The theme a checkout opened from this link uses: your checkout branding settings, with the link's own `theme` over them. Use it to style a page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. */ "checkout_theme"?: ThemeConfigInput; "is_sold_out"?: boolean; "merchant_icon"?: ImageInput; "merchant_logo"?: ImageInput; "merchant_name"?: string; "payment_link": PublicPaymentLinkInput; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "remaining_quantity"?: number; "resolution_context": string; /** RFC3339 timestamp. Format: date-time. */ "resolution_context_expires_at": string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "resolution_context_start_deadline_at": string | globalThis.Date; "resolved_line_items"?: Array<PublicResolvedLineItemInfoInput>; /** Present for active plan-backed payment links when authoritative subscription terms are available. */ "subscription_preview"?: PaymentLinkSubscriptionPreviewInput; };
