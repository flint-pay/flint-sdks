import { d321 as c0 } from '../descriptors/data/19.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8961 as c2 } from '../descriptors/data/431.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8973 as c3 } from '../descriptors/data/432.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d321 as d321 } from '../descriptors/data/19.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePriceListPricesRequest"]:c0(),["MoneyValue"]:c1(),["PriceListPriceRequest"]:c2(),["QuantityPriceBreakRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePriceListPricesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
