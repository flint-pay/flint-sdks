import { d304 as c0 } from '../descriptors/data/15.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9118 as c1, d9123 as c6, d9124 as c7, d9125 as c8, d9126 as c9, d9127 as c10 } from '../descriptors/data/413.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9148 as c2, d9144 as c3, d9145 as c4, d9146 as c5, d9149 as c11, d9150 as c12, d9151 as c13, d9147 as c14 } from '../descriptors/data/414.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d304 as d304 } from '../descriptors/data/15.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1386"]:c3(),["SharedCodec1387"]:c4(),["SharedCodec1388"]:c5(),["SharedCodec1389"]:c6(),["SharedCodec1390"]:c7(),["SharedCodec1391"]:c8(),["SharedCodec1392"]:c9(),["SharedCodec1393"]:c10(),["SharedCodec448"]:c11(),["SharedCodec449"]:c12(),["SharedCodec450"]:c13(),["SharedCodec451"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
