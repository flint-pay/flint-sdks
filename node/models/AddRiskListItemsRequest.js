import { d12 as c0 } from '../descriptors/data/0.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d12 as d12 } from '../descriptors/data/0.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d12;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddRiskListItemsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddRiskListItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
