import { d1485 as c0 } from '../descriptors/data/73.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10854 as c1, d10855 as c2 } from '../descriptors/data/515.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1485 as d1485 } from '../descriptors/data/73.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLimitSettingsPatch"]:c0(),["SharedCodec2135"]:c1(),["SharedCodec2136"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLimitSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
