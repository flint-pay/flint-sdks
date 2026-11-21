import { d239 as c0 } from '../descriptors/data/11.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8007 as c1 } from '../descriptors/data/348.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7983 as c2 } from '../descriptors/data/347.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d239 as d239 } from '../descriptors/data/11.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequestFull"]:c0(),["SharedCodec341"]:c1(),["SharedCodec5"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
