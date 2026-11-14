import { d318 as c0 } from '../descriptors/data/19.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c1 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8124 as c2 } from '../descriptors/data/394.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8136 as c3 } from '../descriptors/data/395.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d318 as d318 } from '../descriptors/data/19.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePriceListPricesRequest"]:c0(),["MoneyValue"]:c1(),["PriceListPriceRequest"]:c2(),["QuantityPriceBreakRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePriceListPricesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
