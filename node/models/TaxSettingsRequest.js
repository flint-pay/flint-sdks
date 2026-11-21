import { d10856 as c0, d10857 as c1 } from '../descriptors/data/515.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7716 as c2 } from '../descriptors/data/323.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7716 as d7716 } from '../descriptors/data/323.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7716;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3042"]:c0(),["SharedCodec3043"]:c1(),["TaxSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
