import { d504 as c0 } from '../descriptors/data/29.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8308 as c1, d8310 as c2 } from '../descriptors/data/367.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d504 as d504 } from '../descriptors/data/29.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d504;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageAllStatesRequest"]:c0(),["SharedCodec689"]:c1(),["SharedCodec691"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageAllStatesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
