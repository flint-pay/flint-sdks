import { d805 as c0, d806 as c1, d1826 as c2, d1827 as c3, d77 as c4, d1830 as c5, d1829 as c6, d2024 as c7, d2030 as c8, d2165 as c9, d14 as c10, d894 as c11, d1828 as c12, d2020 as c13, d2021 as c14, d2022 as c15, d2023 as c16, d41 as c17, d227 as c18 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2030 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2030;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec278"]:c11(),["SharedCodec492"]:c12(),["SharedCodec529"]:c13(),["SharedCodec530"]:c14(),["SharedCodec531"]:c15(),["SharedCodec532"]:c16(),["SharedCodec6"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
