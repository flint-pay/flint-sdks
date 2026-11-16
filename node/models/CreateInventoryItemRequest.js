import { d7878 as c0 } from '../descriptors/data/367.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d274 as c1 } from '../descriptors/data/14.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c2 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d274 as d274 } from '../descriptors/data/14.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryBackorderPolicyRequest"]:c0(),["CreateInventoryItemRequest"]:c1(),["MetadataRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
