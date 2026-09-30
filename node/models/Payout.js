import { d730 as c0, d731 as c1, d69 as c2, d1826 as c3, d1821 as c4, d1822 as c5, d1823 as c6, d1824 as c7, d1825 as c8, d37 as c9, d1666 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1826 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1826;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["SharedCodec464"]:c4(),["SharedCodec465"]:c5(),["SharedCodec466"]:c6(),["SharedCodec467"]:c7(),["SharedCodec468"]:c8(),["SharedCodec5"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
