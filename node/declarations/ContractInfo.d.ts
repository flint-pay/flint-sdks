
import type { MoneyValue } from './MoneyValue.js';

export type ContractInfo = { "early_termination_fee_money"?: MoneyValue; "is_within_contract_term": boolean; /** Format: int32. */ "remaining_months"?: number; };
