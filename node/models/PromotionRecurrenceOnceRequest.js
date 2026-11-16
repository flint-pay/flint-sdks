import { d1281 as c0 } from '../descriptors/data/62.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8323 as c1 } from '../descriptors/data/394.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1281 as d1281 } from '../descriptors/data/62.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1281;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceOnceRequest"]:c0(),["SharedCodec1886"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceOnceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
