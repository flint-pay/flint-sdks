import { d798 as c0, d799 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2017 as c5, d2024 as c6, d2157 as c7, d2158 as c8, d14 as c9, d888 as c10, d1821 as c11, d2013 as c12, d2014 as c13, d2015 as c14, d2016 as c15, d41 as c16, d226 as c17 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2024 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2024;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["Payout"]:c5(),["PayoutResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec274"]:c10(),["SharedCodec487"]:c11(),["SharedCodec524"]:c12(),["SharedCodec525"]:c13(),["SharedCodec526"]:c14(),["SharedCodec527"]:c15(),["SharedCodec6"]:c16(),["SignedMoney"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
