import { d8066 as c0, d8067 as c1, d8073 as c2 } from '../descriptors/data/353.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8073 as d8073 } from '../descriptors/data/353.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8073;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeImageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
