import { d307 as c0 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9142 as c1, d9143 as c2 } from '../descriptors/data/415.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c3 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d307 as d307 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d307;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAllocationPolicyRequest"]:c0(),["InventoryAllocationPolicyConfigurationRequest"]:c1(),["InventoryAllocationPolicyLocation"]:c2(),["MetadataRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
