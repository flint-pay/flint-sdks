
import type { MoneyValueInput } from './MoneyValueInput.js';

export type PayOrderRequestResumeInput = { "action": "resume"; /** Buyer email for receipts and the order's buyer_email. A checkout session credential that omits it uses the email saved on the session's buyer_contact. */ "buyer_email"?: string; /** Buyer phone in E.164 format, recorded as the order's buyer_phone. A checkout session credential that omits it uses the phone saved on the session's buyer_contact. */ "buyer_phone"?: string; "expected_outstanding_money"?: MoneyValueInput; /** minLength: 1. */ "payment_attempt_id": string; };
