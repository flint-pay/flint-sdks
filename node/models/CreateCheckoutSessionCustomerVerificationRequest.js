import { d206 as c0 } from '../descriptors/data/9.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6781 as c1, d6782 as c2 } from '../descriptors/data/301.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6792 as c3, d6793 as c4, d6794 as c5, d6795 as c6, d6796 as c7 } from '../descriptors/data/303.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d206 as d206 } from '../descriptors/data/9.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d206;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionCustomerVerificationRequest"]:c0(),["CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest"]:c1(),["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c2(),["SharedCodec279"]:c3(),["SharedCodec280"]:c4(),["SharedCodec281"]:c5(),["SharedCodec282"]:c6(),["SharedCodec283"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
