import { d789 as c0 } from '../descriptors/data/41.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d789 as d789 } from '../descriptors/data/41.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d789;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingSourceInputFixedLocation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingSourceInputFixedLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
