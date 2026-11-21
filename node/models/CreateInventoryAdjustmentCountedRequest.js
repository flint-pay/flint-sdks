import { d307 as c0 } from '../descriptors/data/16.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9134 as c1, d9144 as c10, d9145 as c11 } from '../descriptors/data/413.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9160 as c2, d9156 as c3, d9157 as c4, d9158 as c5, d9161 as c6, d9162 as c7, d9163 as c8, d9159 as c9, d9146 as c12 } from '../descriptors/data/414.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d307 as d307 } from '../descriptors/data/16.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d307;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCountedRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1391"]:c3(),["SharedCodec1392"]:c4(),["SharedCodec1393"]:c5(),["SharedCodec452"]:c6(),["SharedCodec453"]:c7(),["SharedCodec454"]:c8(),["SharedCodec455"]:c9(),["SharedCodec456"]:c10(),["SharedCodec457"]:c11(),["SharedCodec458"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
