import { d9214 as c0 } from '../descriptors/data/418.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9134 as c1, d9130 as c3, d9131 as c4, d9132 as c5, d9135 as c12, d9136 as c13, d9137 as c14, d9133 as c15 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1709 as c2 } from '../descriptors/data/84.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9233 as c6, d9234 as c7, d9235 as c8, d9236 as c9, d9237 as c10, d9238 as c11 } from '../descriptors/data/420.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1709 as d1709 } from '../descriptors/data/84.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec1387"]:c5(),["SharedCodec2530"]:c6(),["SharedCodec2531"]:c7(),["SharedCodec2532"]:c8(),["SharedCodec2533"]:c9(),["SharedCodec2534"]:c10(),["SharedCodec2535"]:c11(),["SharedCodec448"]:c12(),["SharedCodec449"]:c13(),["SharedCodec450"]:c14(),["SharedCodec451"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
