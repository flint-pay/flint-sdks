import { d9425 as c0 } from '../descriptors/data/459.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9425 as d9425 } from '../descriptors/data/459.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9425;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAccountRouteTemplatesRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountRouteTemplatesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
