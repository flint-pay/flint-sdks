import { d1274 as c0 } from '../descriptors/data/62.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1274 as d1274 } from '../descriptors/data/62.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionExclusivityPatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionExclusivityPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
