import { d42 as c0, d43 as c1, d1826 as c2, d1827 as c3, d77 as c4, d1830 as c5, d1829 as c6, d2165 as c7, d14 as c8, d1828 as c9, d40 as c10, d41 as c11, d227 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d43 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d43;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["BalanceListResponse"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec492"]:c9(),["SharedCodec5"]:c10(),["SharedCodec6"]:c11(),["SignedMoney"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
