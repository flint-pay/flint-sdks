
import type { MoneyValue } from './MoneyValue.js';

export type CustomerReceivableBalance = { /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "outstanding_money": MoneyValue; "overdue_money": MoneyValue; };
