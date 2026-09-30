
import type { CustomerReceivableBalanceInput } from './CustomerReceivableBalanceInput.js';

export type CustomerReceivablesInput = { "balances": Array<CustomerReceivableBalanceInput>; /** RFC3339 timestamp. Format: date-time. */ "observed_at": string | globalThis.Date; };
