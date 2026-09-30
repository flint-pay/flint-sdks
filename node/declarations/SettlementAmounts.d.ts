
import type { MoneyValue } from './MoneyValue.js';
import type { SignedMoney } from './SignedMoney.js';

export type SettlementAmounts = { "balance_money": SignedMoney; "credit_money": MoneyValue; "net_collected_money": MoneyValue; "outstanding_money": MoneyValue; "paid_money": MoneyValue; "refunded_money": MoneyValue; "settled_tip_money": MoneyValue; };
