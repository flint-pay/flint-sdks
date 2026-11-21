import { d8709 as c0, d8706 as c1, d8707 as c2, d8708 as c3 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8709 as d8709 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingSourceRequest"]:c0(),["SharedCodec1460"]:c1(),["SharedCodec1461"]:c2(),["SharedCodec1462"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
