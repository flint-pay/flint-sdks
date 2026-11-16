import { d6782 as c0 } from '../descriptors/data/304.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6782 as d6782 } from '../descriptors/data/304.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6782;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
