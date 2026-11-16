import { d7878 as c0 } from '../descriptors/data/367.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7879 as c1 } from '../descriptors/data/368.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7878 as d7878 } from '../descriptors/data/367.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7878;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryBackorderPolicyRequest"]:c0(),["InventoryBackorderPolicyRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryBackorderPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
