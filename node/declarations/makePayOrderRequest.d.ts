import type { InputValue } from '../runtime.js';
import type { Model } from '../runtime.js';
import type { PayOrderRequestInput } from './PayOrderRequestInput.js';

export declare function makePayOrderRequest(value: InputValue<Exclude<PayOrderRequestInput & object, readonly unknown[]>>): Model<Exclude<PayOrderRequestInput & object, readonly unknown[]>>;

export declare function makePayOrderRequest(value: InputValue<PayOrderRequestInput>): Model<PayOrderRequestInput>;
