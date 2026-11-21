import { d648 as c0 } from '../descriptors/data/36.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d648 as d648 } from '../descriptors/data/36.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d648;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyInputFixedLocation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyInputFixedLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
