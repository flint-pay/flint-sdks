import { d9228 as c0 } from '../descriptors/data/418.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9148 as c1, d9144 as c3, d9145 as c4, d9146 as c5, d9149 as c12, d9150 as c13, d9151 as c14, d9147 as c15 } from '../descriptors/data/414.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1711 as c2 } from '../descriptors/data/84.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9247 as c6, d9248 as c7, d9249 as c8, d9250 as c9, d9251 as c10, d9252 as c11 } from '../descriptors/data/420.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1711 as d1711 } from '../descriptors/data/84.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1386"]:c3(),["SharedCodec1387"]:c4(),["SharedCodec1388"]:c5(),["SharedCodec2536"]:c6(),["SharedCodec2537"]:c7(),["SharedCodec2538"]:c8(),["SharedCodec2539"]:c9(),["SharedCodec2540"]:c10(),["SharedCodec2541"]:c11(),["SharedCodec448"]:c12(),["SharedCodec449"]:c13(),["SharedCodec450"]:c14(),["SharedCodec451"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
