import { d805 as c0, d806 as c1, d77 as c2, d1830 as c3, d1829 as c4, d2024 as c5, d2031 as c6, d2164 as c7, d2165 as c8, d14 as c9, d894 as c10, d1828 as c11, d2020 as c12, d2021 as c13, d2022 as c14, d2023 as c15, d41 as c16, d227 as c17 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2031 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2031;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["Payout"]:c5(),["PayoutResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec278"]:c10(),["SharedCodec492"]:c11(),["SharedCodec529"]:c12(),["SharedCodec530"]:c13(),["SharedCodec531"]:c14(),["SharedCodec532"]:c15(),["SharedCodec6"]:c16(),["SignedMoney"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
