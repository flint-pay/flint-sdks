import { d323 as c0, d1859 as c1, d1861 as c2, d1862 as c3, d1858 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1859 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1859;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftLineItemTaxCalculationRequest"]:c1(),["OrderDraftTaxComponentRequest"]:c2(),["OrderDraftTaxJurisdictionRequest"]:c3(),["SharedCodec473"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemTaxCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
