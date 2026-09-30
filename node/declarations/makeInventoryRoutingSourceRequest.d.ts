import type { InputValue } from '../runtime.js';
import type { Model } from '../runtime.js';
import type { InventoryRoutingSourceRequestInput } from './InventoryRoutingSourceRequestInput.js';

export declare function makeInventoryRoutingSourceRequest(value: InputValue<Exclude<InventoryRoutingSourceRequestInput & object, readonly unknown[]>>): Model<Exclude<InventoryRoutingSourceRequestInput & object, readonly unknown[]>>;

export declare function makeInventoryRoutingSourceRequest(value: InputValue<InventoryRoutingSourceRequestInput>): Model<InventoryRoutingSourceRequestInput>;
