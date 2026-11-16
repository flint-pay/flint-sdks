import { d9265 as c0, d9266 as c2, d9267 as c3, d9268 as c4, d9269 as c5, d9270 as c6, d9271 as c7 } from '../descriptors/data/450.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9281 as c1 } from '../descriptors/data/451.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9265 as d9265 } from '../descriptors/data/450.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2131"]:c2(),["SharedCodec2132"]:c3(),["SharedCodec2133"]:c4(),["SharedCodec2134"]:c5(),["SharedCodec2135"]:c6(),["SharedCodec2136"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
