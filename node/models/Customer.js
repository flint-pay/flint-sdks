import { d148 as c0, d487 as c1, d501 as c2, d709 as c3, d140 as c4, d69 as c5, d65 as c6, d485 as c7, d66 as c8, d486 as c9, d141 as c10, d67 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d487 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d487;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerReceivableBalance"]:c2(),["DocumentTaxID"]:c3(),["ExpandedPaymentMethodSummary"]:c4(),["MoneyValue"]:c5(),["PostalAddress"]:c6(),["SharedCodec179"]:c7(),["SharedCodec18"]:c8(),["SharedCodec180"]:c9(),["SharedCodec42"]:c10(),["TaxIdentity"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
