
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ContractInfoInput = { "early_termination_fee_money"?: MoneyValueInput; "is_within_contract_term": boolean; /** Format: int32. */ "remaining_months"?: number; };
