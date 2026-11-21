import { d285 as c0 } from '../descriptors/data/14.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d285 as d285 } from '../descriptors/data/14.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d285;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeviceRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeviceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
