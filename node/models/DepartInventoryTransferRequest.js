import { d736 as c0 } from '../descriptors/data/40.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9240 as c1 } from '../descriptors/data/418.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9160 as c2, d9156 as c5, d9157 as c6, d9158 as c7, d9161 as c8, d9162 as c9, d9163 as c10, d9159 as c11 } from '../descriptors/data/414.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9247 as c3, d9248 as c4 } from '../descriptors/data/419.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d736 as d736 } from '../descriptors/data/40.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d736;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DepartInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1105"]:c3(),["SharedCodec1106"]:c4(),["SharedCodec1391"]:c5(),["SharedCodec1392"]:c6(),["SharedCodec1393"]:c7(),["SharedCodec452"]:c8(),["SharedCodec453"]:c9(),["SharedCodec454"]:c10(),["SharedCodec455"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
