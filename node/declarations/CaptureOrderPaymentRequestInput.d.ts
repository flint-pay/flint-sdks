
import type { MoneyValueInput } from './MoneyValueInput.js';

export type CaptureOrderPaymentRequestInput = { "amount_money"?: MoneyValueInput; /** Owning Flint payment attempt ID. Required while the authorization belongs to an active attempt. */ "payment_attempt_id"?: string; };
