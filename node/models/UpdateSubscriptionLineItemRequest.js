import { d6533 as c0 } from '../descriptors/data/287.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6533 as d6533 } from '../descriptors/data/287.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6533;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateSubscriptionLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
