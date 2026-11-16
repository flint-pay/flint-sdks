import { d195 as c0 } from '../descriptors/data/8.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9656 as c1 } from '../descriptors/data/470.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d195 as d195 } from '../descriptors/data/8.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d195;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConnectTaxConnectionRequest"]:c0(),["SellerTaxAttestationRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConnectTaxConnectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
