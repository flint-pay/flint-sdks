import { d8684 as c0, d8681 as c1, d8682 as c2, d8683 as c3 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8684 as d8684 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8684;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingSourceRequest"]:c0(),["SharedCodec1454"]:c1(),["SharedCodec1455"]:c2(),["SharedCodec1456"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
