import { d323 as c0, d1864 as c1, d1865 as c2, d1866 as c3, d1867 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1865 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1865;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftLineItemTaxCalculationRequest"]:c1(),["OrderDraftLineItemTaxRequest"]:c2(),["OrderDraftTaxComponentRequest"]:c3(),["OrderDraftTaxJurisdictionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
