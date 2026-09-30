import { d730 as c0, d731 as c1, d69 as c2, d1646 as c3, d1645 as c4, d1826 as c5, d1833 as c6, d1959 as c7, d1960 as c8, d1821 as c9, d1822 as c10, d1823 as c11, d1824 as c12, d1825 as c13, d37 as c14, d1666 as c15 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1833 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1833;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["Payout"]:c5(),["PayoutResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec464"]:c9(),["SharedCodec465"]:c10(),["SharedCodec466"]:c11(),["SharedCodec467"]:c12(),["SharedCodec468"]:c13(),["SharedCodec5"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
