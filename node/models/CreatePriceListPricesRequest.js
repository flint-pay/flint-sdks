import { d319 as c0 } from '../descriptors/data/19.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c1 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8089 as c2, d8101 as c3 } from '../descriptors/data/390.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d319 as d319 } from '../descriptors/data/19.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePriceListPricesRequest"]:c0(),["MoneyValue"]:c1(),["PriceListPriceRequest"]:c2(),["QuantityPriceBreakRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePriceListPricesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
