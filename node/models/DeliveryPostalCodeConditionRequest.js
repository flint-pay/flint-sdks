import { d7264 as c0, d7265 as c1 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7264 as d7264 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeConditionRequest"]:c0(),["DeliveryPostalCodeValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
