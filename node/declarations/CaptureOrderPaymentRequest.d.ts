
import type { MoneyValue } from './MoneyValue.js';

export type CaptureOrderPaymentRequest = { "amount_money"?: MoneyValue; /** Owning Flint payment attempt ID. Required while the authorization belongs to an active attempt. */ "order_payment_attempt_id"?: string; };
