
import type { MoneyValue } from './MoneyValue.js';

export type CheckoutTipConfig = { "default_smart_tip_money"?: MoneyValue; /** minimum: 1. maximum: 100. */ "default_tip_percentage"?: number; "enabled"?: boolean; "is_custom_tip_enabled"?: boolean; "is_smart_tips_enabled"?: boolean; "smart_tip_money_options"?: Array<MoneyValue>; "tip_percentages"?: Array<number>; };
