import { d9168 as c0, d9169 as c1 } from '../descriptors/data/415.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9168 as d9168 } from '../descriptors/data/415.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicyConfigurationRequest"]:c0(),["InventoryAllocationPolicyLocation"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicyConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
