import { d9422 as c0, d9423 as c1 } from '../descriptors/data/459.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d177 as c2 } from '../descriptors/data/7.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d177 as d177 } from '../descriptors/data/7.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d177;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettingsRequest"]:c0(),["CheckoutSavedPaymentDetailsSettingsRequest"]:c1(),["CheckoutSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
