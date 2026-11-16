import { d6413 as c0 } from '../descriptors/data/279.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6413 as d6413 } from '../descriptors/data/279.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6413;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionTaxCalculationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
