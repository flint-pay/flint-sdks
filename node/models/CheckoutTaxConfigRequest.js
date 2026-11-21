import { d8276 as c0, d8277 as c1 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8277 as d8277 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxCalculationRequest"]:c0(),["CheckoutTaxConfigRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutTaxConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
