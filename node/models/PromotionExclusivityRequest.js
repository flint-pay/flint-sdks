import { d9041 as c0 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9041 as d9041 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9041;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionExclusivityRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionExclusivityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
