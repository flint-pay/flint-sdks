import { d8473 as c0 } from '../descriptors/data/376.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8308 as c1, d8309 as c2, d8310 as c3, d8311 as c4 } from '../descriptors/data/367.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8473 as d8473 } from '../descriptors/data/376.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8473;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec689"]:c1(),["SharedCodec690"]:c2(),["SharedCodec691"]:c3(),["SharedCodec692"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
