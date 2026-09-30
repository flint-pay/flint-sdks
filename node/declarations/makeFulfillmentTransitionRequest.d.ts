import type { InputValue } from '../runtime.js';
import type { Model } from '../runtime.js';
import type { FulfillmentTransitionRequestInput } from './FulfillmentTransitionRequestInput.js';

export declare function makeFulfillmentTransitionRequest(value: InputValue<Exclude<FulfillmentTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<FulfillmentTransitionRequestInput & object, readonly unknown[]>>;

export declare function makeFulfillmentTransitionRequest(value: InputValue<FulfillmentTransitionRequestInput>): Model<FulfillmentTransitionRequestInput>;
