import { d1740 as c0 } from '../descriptors/data/86.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9221 as c1, d9222 as c2 } from '../descriptors/data/418.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1740 as d1740 } from '../descriptors/data/86.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseInventoryReservationRequest"]:c0(),["SharedCodec2583"]:c1(),["SharedCodec2584"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
