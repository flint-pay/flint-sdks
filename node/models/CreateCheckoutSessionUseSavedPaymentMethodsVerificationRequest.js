import { d6781 as c0, d6782 as c1 } from '../descriptors/data/301.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d216 as c2 } from '../descriptors/data/10.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d216 as d216 } from '../descriptors/data/10.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d216;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest"]:c0(),["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c1(),["CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
