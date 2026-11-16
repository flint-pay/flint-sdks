import { d7879 as c0 } from '../descriptors/data/368.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6745 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c2 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6482 as c3 } from '../descriptors/data/283.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6482 as d6482 } from '../descriptors/data/283.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6482;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryBackorderPolicyRequest"]:c0(),["SharedCodec2406"]:c1(),["SharedCodec2409"]:c2(),["UpdateInventoryItemRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
