import { d144 as c0, d323 as c1, d1872 as c2, d1890 as c3, d2027 as c4, d2016 as c5, d1869 as c6, d1871 as c7, d1870 as c8, d2023 as c9, d2022 as c10, d2021 as c11, d2024 as c12, d2025 as c13, d2026 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2027 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2027;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec476"]:c6(),["SharedCodec477"]:c7(),["SharedCodec478"]:c8(),["SharedCodec503"]:c9(),["SharedCodec504"]:c10(),["SharedCodec505"]:c11(),["SharedCodec506"]:c12(),["SharedCodec507"]:c13(),["SharedCodec508"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
