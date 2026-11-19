import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10441 as c1, d10443 as c3, d10444 as c4, d10445 as c5, d10446 as c6 } from '../descriptors/data/487.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8995 as c2 } from '../descriptors/data/403.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10441 as d10441 } from '../descriptors/data/487.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundTenderAllocationRequest"]:c1(),["SharedCodec216"]:c2(),["SharedCodec2568"]:c3(),["SharedCodec2569"]:c4(),["SharedCodec2573"]:c5(),["SharedCodec2574"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
