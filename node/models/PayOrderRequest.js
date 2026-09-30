import { d69 as c0, d1692 as c1, d1814 as c2, d1805 as c3, d1810 as c4, d1811 as c5, d1812 as c6, d1813 as c7 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1814 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1814;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderPaymentIntentSelection"]:c1(),["PayOrderRequest"]:c2(),["PaymentSourceCredential"]:c3(),["SharedCodec460"]:c4(),["SharedCodec461"]:c5(),["SharedCodec462"]:c6(),["SharedCodec463"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
