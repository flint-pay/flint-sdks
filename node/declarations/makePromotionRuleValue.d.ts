import type { InputValue } from '../runtime.js';
import type { Model } from '../runtime.js';
import type { PromotionRuleValueInput } from './PromotionRuleValueInput.js';

export declare function makePromotionRuleValue(value: InputValue<Exclude<PromotionRuleValueInput & object, readonly unknown[]>>): Model<Exclude<PromotionRuleValueInput & object, readonly unknown[]>>;

export declare function makePromotionRuleValue(value: InputValue<PromotionRuleValueInput>): Model<PromotionRuleValueInput>;
