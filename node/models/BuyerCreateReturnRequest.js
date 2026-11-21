import { d60 as c0 } from '../descriptors/data/2.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9730 as c1 } from '../descriptors/data/449.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d60 as d60 } from '../descriptors/data/2.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d60;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
