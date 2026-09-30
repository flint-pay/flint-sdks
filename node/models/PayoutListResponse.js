import { d730 as c0, d731 as c1, d1643 as c2, d1644 as c3, d69 as c4, d1646 as c5, d1645 as c6, d1826 as c7, d1832 as c8, d1960 as c9, d1821 as c10, d1822 as c11, d1823 as c12, d1824 as c13, d1825 as c14, d37 as c15, d1666 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1832 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1832;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["ResponseWarning"]:c9(),["SharedCodec464"]:c10(),["SharedCodec465"]:c11(),["SharedCodec466"]:c12(),["SharedCodec467"]:c13(),["SharedCodec468"]:c14(),["SharedCodec5"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
