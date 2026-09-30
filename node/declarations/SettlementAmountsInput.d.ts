
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { SignedMoneyInput } from './SignedMoneyInput.js';

export type SettlementAmountsInput = { "balance_money": SignedMoneyInput; "credit_money": MoneyValueInput; "net_collected_money": MoneyValueInput; "outstanding_money": MoneyValueInput; "paid_money": MoneyValueInput; "refunded_money": MoneyValueInput; "settled_tip_money": MoneyValueInput; };
