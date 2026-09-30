
import type { MoneyValueInput } from './MoneyValueInput.js';

export type OrderAuthorizationAmountsInput = { "authorized_money": MoneyValueInput; "capturable_money": MoneyValueInput; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string | globalThis.Date; };
