import { d367 as c0 } from '../descriptors/data/21.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d367 as d367 } from '../descriptors/data/21.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d367;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionCodeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
