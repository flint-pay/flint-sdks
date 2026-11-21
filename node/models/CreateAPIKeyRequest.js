import { d238 as c0 } from '../descriptors/data/10.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8007 as c1, d7997 as c2, d7998 as c3, d7999 as c4 } from '../descriptors/data/348.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7983 as c5 } from '../descriptors/data/347.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d238 as d238 } from '../descriptors/data/10.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequest"]:c0(),["SharedCodec341"]:c1(),["SharedCodec342"]:c2(),["SharedCodec343"]:c3(),["SharedCodec344"]:c4(),["SharedCodec5"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
