import { d315 as c0 } from '../descriptors/data/16.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9245 as c1 } from '../descriptors/data/419.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d315 as d315 } from '../descriptors/data/16.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryTransferRequest"]:c0(),["InventoryTransferLineRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
