import { d9393 as c0 } from '../descriptors/data/426.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9393 as d9393 } from '../descriptors/data/426.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9393;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationPostalAddressRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationPostalAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
