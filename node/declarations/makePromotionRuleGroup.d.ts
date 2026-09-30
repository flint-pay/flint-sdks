import type { InputValue } from '../runtime.js';
import type { Model } from '../runtime.js';
import type { PromotionRuleGroupInput } from './PromotionRuleGroupInput.js';

export declare function makePromotionRuleGroup(value: InputValue<Exclude<PromotionRuleGroupInput & object, readonly unknown[]>>): Model<Exclude<PromotionRuleGroupInput & object, readonly unknown[]>>;

export declare function makePromotionRuleGroup(value: InputValue<PromotionRuleGroupInput>): Model<PromotionRuleGroupInput>;
