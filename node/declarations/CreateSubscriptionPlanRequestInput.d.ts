
import type { ImageRequestInput } from './ImageRequestInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { SubscriptionPlanLineItemRequestInput } from './SubscriptionPlanLineItemRequestInput.js';

export type CreateSubscriptionPlanRequestInput = { "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; /** Format: int32. */ "billing_interval_count": number; /** Format: int32. */ "contract_term_months"?: number; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "description"?: string; "early_termination_fee_money"?: MoneyValueInput; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; /** The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8. */ "images"?: Array<ImageRequestInput>; "line_items"?: Array<SubscriptionPlanLineItemRequestInput>; "metadata"?: Record<string, string>; "name": string; "setup_fee_money"?: MoneyValueInput; /** Format: int32. */ "trial_period_days"?: number; };
