import { d224 as c0 } from '../descriptors/data/10.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9223 as c1, d9224 as c2 } from '../descriptors/data/418.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d224 as d224 } from '../descriptors/data/10.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d224;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CommitInventoryReservationRequest"]:c0(),["SharedCodec328"]:c1(),["SharedCodec329"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCommitInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
