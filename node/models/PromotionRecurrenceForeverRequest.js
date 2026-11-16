import { d1279 as c0 } from '../descriptors/data/62.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8326 as c1 } from '../descriptors/data/394.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1279 as d1279 } from '../descriptors/data/62.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceForeverRequest"]:c0(),["SharedCodec1889"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceForeverRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
