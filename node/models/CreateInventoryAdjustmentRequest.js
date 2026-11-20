import { d308 as c0 } from '../descriptors/data/16.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9118 as c1, d9120 as c2, d9122 as c3, d9123 as c8, d9124 as c9, d9125 as c10, d9126 as c11, d9127 as c12, d9132 as c17, d9133 as c18 } from '../descriptors/data/413.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9148 as c4, d9144 as c5, d9145 as c6, d9146 as c7, d9149 as c13, d9150 as c14, d9151 as c15, d9147 as c16, d9134 as c19, d9135 as c20, d9136 as c21, d9137 as c22, d9138 as c23 } from '../descriptors/data/414.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d308 as d308 } from '../descriptors/data/16.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1386"]:c5(),["SharedCodec1387"]:c6(),["SharedCodec1388"]:c7(),["SharedCodec1389"]:c8(),["SharedCodec1390"]:c9(),["SharedCodec1391"]:c10(),["SharedCodec1392"]:c11(),["SharedCodec1393"]:c12(),["SharedCodec448"]:c13(),["SharedCodec449"]:c14(),["SharedCodec450"]:c15(),["SharedCodec451"]:c16(),["SharedCodec452"]:c17(),["SharedCodec453"]:c18(),["SharedCodec454"]:c19(),["SharedCodec455"]:c20(),["SharedCodec456"]:c21(),["SharedCodec457"]:c22(),["SharedCodec458"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
