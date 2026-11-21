import { d348 as c0 } from '../descriptors/data/19.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9042 as c3 } from '../descriptors/data/409.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9416 as c4 } from '../descriptors/data/427.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d348 as d348 } from '../descriptors/data/19.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTipPercent"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec217"]:c3(),["SharedCodec510"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderTipPercent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
