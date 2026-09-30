
import type { CustomerReceivableBalance } from './CustomerReceivableBalance.js';

export type CustomerReceivables = { "balances": Array<CustomerReceivableBalance>; /** RFC3339 timestamp. Format: date-time. */ "observed_at": string; };
