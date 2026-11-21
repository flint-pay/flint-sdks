import { d369 as c0 } from '../descriptors/data/21.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10495 as c2, d10496 as c3 } from '../descriptors/data/493.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d369 as d369 } from '../descriptors/data/21.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReaderRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec542"]:c2(),["SharedCodec543"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
