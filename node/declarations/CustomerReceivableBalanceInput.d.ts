
import type { MoneyValueInput } from './MoneyValueInput.js';

export type CustomerReceivableBalanceInput = { /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "outstanding_money": MoneyValueInput; "overdue_money": MoneyValueInput; };
