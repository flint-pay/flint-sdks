import { d10797 as c0, d10799 as c5, d10800 as c6 } from '../descriptors/data/514.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d989 as c1 } from '../descriptors/data/52.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8681 as c2, d8682 as c3, d8683 as c4 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d989 as d989 } from '../descriptors/data/52.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d989;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryOriginPolicyRequest"]:c0(),["InventorySettingsRequest"]:c1(),["SharedCodec1454"]:c2(),["SharedCodec1455"]:c3(),["SharedCodec1456"]:c4(),["SharedCodec1459"]:c5(),["SharedCodec1460"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
