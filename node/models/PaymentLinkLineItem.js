import { d69 as c0, d1687 as c1, d1788 as c2, d367 as c3, d366 as c4, d1784 as c5, d1783 as c6, d1786 as c7, d1785 as c8, d1787 as c9, d37 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1788 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1788;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItem"]:c2(),["SharedCodec134"]:c3(),["SharedCodec135"]:c4(),["SharedCodec454"]:c5(),["SharedCodec455"]:c6(),["SharedCodec456"]:c7(),["SharedCodec457"]:c8(),["SharedCodec458"]:c9(),["SharedCodec5"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
