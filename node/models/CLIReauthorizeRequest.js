import { d117 as c0 } from '../descriptors/data/5.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8498 as c1 } from '../descriptors/data/401.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d117 as d117 } from '../descriptors/data/5.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d117;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLIReauthorizeRequest"]:c0(),["SharedCodec261"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLIReauthorizeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
