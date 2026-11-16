import { d9426 as c0, d9428 as c5, d9429 as c6 } from '../descriptors/data/459.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d792 as c1 } from '../descriptors/data/41.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7385 as c2, d7386 as c3, d7387 as c4 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d792 as d792 } from '../descriptors/data/41.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d792;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryOriginPolicyRequest"]:c0(),["InventorySettingsRequest"]:c1(),["SharedCodec1114"]:c2(),["SharedCodec1115"]:c3(),["SharedCodec1116"]:c4(),["SharedCodec1117"]:c5(),["SharedCodec1118"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
