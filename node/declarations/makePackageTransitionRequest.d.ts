import type { InputValue } from '../runtime.js';
import type { Model } from '../runtime.js';
import type { PackageTransitionRequestInput } from './PackageTransitionRequestInput.js';

export declare function makePackageTransitionRequest(value: InputValue<Exclude<PackageTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<PackageTransitionRequestInput & object, readonly unknown[]>>;

export declare function makePackageTransitionRequest(value: InputValue<PackageTransitionRequestInput>): Model<PackageTransitionRequestInput>;
