import { d9240 as c0 } from '../descriptors/data/418.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9160 as c1, d9156 as c3, d9157 as c4, d9158 as c5, d9161 as c12, d9162 as c13, d9163 as c14, d9159 as c15 } from '../descriptors/data/414.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1711 as c2 } from '../descriptors/data/84.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9259 as c6, d9260 as c7, d9261 as c8, d9262 as c9, d9263 as c10, d9264 as c11 } from '../descriptors/data/420.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1711 as d1711 } from '../descriptors/data/84.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1391"]:c3(),["SharedCodec1392"]:c4(),["SharedCodec1393"]:c5(),["SharedCodec2541"]:c6(),["SharedCodec2542"]:c7(),["SharedCodec2543"]:c8(),["SharedCodec2544"]:c9(),["SharedCodec2545"]:c10(),["SharedCodec2546"]:c11(),["SharedCodec452"]:c12(),["SharedCodec453"]:c13(),["SharedCodec454"]:c14(),["SharedCodec455"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
