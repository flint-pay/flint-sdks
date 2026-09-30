import type { InputValue } from '../runtime.js';
import type { Model } from '../runtime.js';
import type { RiskPredicateNodeInput } from './RiskPredicateNodeInput.js';

export declare function makeRiskPredicateNode(value: InputValue<Exclude<RiskPredicateNodeInput & object, readonly unknown[]>>): Model<Exclude<RiskPredicateNodeInput & object, readonly unknown[]>>;

export declare function makeRiskPredicateNode(value: InputValue<RiskPredicateNodeInput>): Model<RiskPredicateNodeInput>;
