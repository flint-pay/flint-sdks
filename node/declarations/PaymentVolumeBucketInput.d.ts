
import type { CountMetricInput } from './CountMetricInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';

export type PaymentVolumeBucketInput = { "label": string; "payments_count": CountMetricInput; "period_end"?: string; "period_start"?: string; "previous_volume_money"?: MoneyValueInput; "volume_money": MoneyValueInput; };
