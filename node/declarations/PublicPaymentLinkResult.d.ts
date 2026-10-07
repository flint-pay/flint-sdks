
import type { Image } from './Image.js';
import type { PaymentLinkSubscriptionPreview } from './PaymentLinkSubscriptionPreview.js';
import type { PublicPaymentLink } from './PublicPaymentLink.js';
import type { PublicResolvedLineItemInfo } from './PublicResolvedLineItemInfo.js';
import type { ThemeConfig } from './ThemeConfig.js';

export type PublicPaymentLinkResult = { /** The theme a checkout opened from this link uses: your checkout branding settings, with the link's own `theme` over them. Use it to style a page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. */ "checkout_theme"?: ThemeConfig; "is_sold_out"?: boolean; "merchant_icon"?: Image; "merchant_logo"?: Image; "merchant_name"?: string; "payment_link": PublicPaymentLink; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "remaining_quantity"?: number; "resolution_context": string; /** RFC3339 timestamp. Format: date-time. */ "resolution_context_expires_at": string; /** RFC3339 timestamp. Format: date-time. */ "resolution_context_start_deadline_at": string; "resolved_line_items"?: Array<PublicResolvedLineItemInfo>; /** Present for active plan-backed payment links when authoritative subscription terms are available. */ "subscription_preview"?: PaymentLinkSubscriptionPreview; };
