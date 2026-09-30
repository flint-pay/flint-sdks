
import type { CountMetric } from './CountMetric.js';
import type { MoneyValue } from './MoneyValue.js';

export type PaymentVolumeBucket = { "label": string; "payments_count": CountMetric; "period_end"?: string; "period_start"?: string; "previous_volume_money"?: MoneyValue; "volume_money": MoneyValue; };
