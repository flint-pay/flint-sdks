import type { InputValue } from '../runtime.js';
import type { Model } from '../runtime.js';
import type { OrderTaxLocationRequestInput } from './OrderTaxLocationRequestInput.js';

export declare function makeOrderTaxLocationRequest(value: InputValue<Exclude<OrderTaxLocationRequestInput & object, readonly unknown[]>>): Model<Exclude<OrderTaxLocationRequestInput & object, readonly unknown[]>>;

export declare function makeOrderTaxLocationRequest(value: InputValue<OrderTaxLocationRequestInput>): Model<OrderTaxLocationRequestInput>;
