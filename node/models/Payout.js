import { d805 as c0, d806 as c1, d77 as c2, d2024 as c3, d894 as c4, d2020 as c5, d2021 as c6, d2022 as c7, d2023 as c8, d41 as c9, d227 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2024 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2024;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["SharedCodec278"]:c4(),["SharedCodec529"]:c5(),["SharedCodec530"]:c6(),["SharedCodec531"]:c7(),["SharedCodec532"]:c8(),["SharedCodec6"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
