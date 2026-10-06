
import type { MoneyValue } from './MoneyValue.js';

export type CheckoutTipConfig = { "default_smart_tip_money"?: MoneyValue; /** The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of tip_percent_options. minimum: 1. maximum: 100. multipleOf: 0.0001. */ "default_tip_percent"?: number; "enabled"?: boolean; "is_custom_tip_enabled"?: boolean; "is_smart_tips_enabled"?: boolean; "smart_tip_money_options"?: Array<MoneyValue>; /** Three tip percents to offer, each from 1 through 100 with at most four decimal places. */ "tip_percent_options"?: Array<number>; };
