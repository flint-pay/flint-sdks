
import type { MoneyValue } from './MoneyValue.js';
import type { SignedMoney } from './SignedMoney.js';

export type SettlementAmounts = { /** outstanding_money minus credit_money. Negative when the order holds money beyond its total that has not been returned. */ "balance_money": SignedMoney; /** Money collected beyond the order total and not yet refunded. */ "credit_money": MoneyValue; "net_collected_money": MoneyValue; /** What is still left to collect: the order total minus paid_money, never below zero. Refunds return money already collected and do not add to it. */ "outstanding_money": MoneyValue; "paid_money": MoneyValue; /** Money returned to the buyer from what this order collected. */ "refunded_money": MoneyValue; "settled_tip_money": MoneyValue; };
