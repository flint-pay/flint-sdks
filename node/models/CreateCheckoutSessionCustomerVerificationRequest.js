import { d207 as c0 } from '../descriptors/data/9.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5956 as c1, d5957 as c2 } from '../descriptors/data/267.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5967 as c3, d5968 as c4, d5969 as c5, d5970 as c6, d5971 as c7 } from '../descriptors/data/268.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d207 as d207 } from '../descriptors/data/9.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d207;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionCustomerVerificationRequest"]:c0(),["CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest"]:c1(),["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c2(),["SharedCodec198"]:c3(),["SharedCodec199"]:c4(),["SharedCodec200"]:c5(),["SharedCodec201"]:c6(),["SharedCodec202"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
