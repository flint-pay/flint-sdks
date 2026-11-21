import { d448 as c0 } from '../descriptors/data/27.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8396 as c1 } from '../descriptors/data/372.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d448 as d448 } from '../descriptors/data/27.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestQuantityRequest"]:c0(),["SharedCodec616"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequestQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
