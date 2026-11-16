import { d6844 as c0, d6842 as c3, d6843 as c4 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8062 as c1, d8063 as c2 } from '../descriptors/data/376.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8063 as d8063 } from '../descriptors/data/376.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8063;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["OrderDeliveryDestinationRecipientRequest"]:c1(),["OrderDeliveryDestinationRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
