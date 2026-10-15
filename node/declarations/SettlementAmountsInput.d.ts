
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { SignedMoneyInput } from './SignedMoneyInput.js';

export type SettlementAmountsInput = { /** outstanding_money minus credit_money. Negative when the order holds money beyond its total that has not been returned. */ "balance_money": SignedMoneyInput; /** Money collected beyond the order total and not yet refunded. */ "credit_money": MoneyValueInput; "net_collected_money": MoneyValueInput; /** What is still left to collect: the order total minus paid_money, never below zero. Refunds return money already collected and do not add to it. */ "outstanding_money": MoneyValueInput; "paid_money": MoneyValueInput; /** Money returned to the buyer from what this order collected. */ "refunded_money": MoneyValueInput; "settled_tip_money": MoneyValueInput; };
