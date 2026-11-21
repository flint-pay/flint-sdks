import { d23 as c0 } from '../descriptors/data/1.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d23 as d23 } from '../descriptors/data/1.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d23;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyInventoryCountRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
