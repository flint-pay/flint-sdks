import { d15 as c0 } from '../descriptors/data/0.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9128 as c1 } from '../descriptors/data/413.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d15 as d15 } from '../descriptors/data/0.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d15;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustGiftCardBalanceRequest"]:c0(),["SignedMoneyRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAdjustGiftCardBalanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
