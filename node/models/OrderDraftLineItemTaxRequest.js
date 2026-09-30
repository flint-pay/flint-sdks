import { d69 as c0, d1680 as c1, d1681 as c2, d1682 as c3, d1683 as c4, d1679 as c5 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1681 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1681;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftLineItemTaxCalculationRequest"]:c1(),["OrderDraftLineItemTaxRequest"]:c2(),["OrderDraftTaxComponentRequest"]:c3(),["OrderDraftTaxJurisdictionRequest"]:c4(),["SharedCodec441"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
