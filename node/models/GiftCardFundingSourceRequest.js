import { d702 as c0 } from '../descriptors/data/38.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7747 as c1, d7748 as c2, d7749 as c3, d7750 as c4 } from '../descriptors/data/358.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7751 as c5, d7752 as c6, d7753 as c7, d7754 as c8, d7755 as c9, d7756 as c10, d7757 as c11, d7758 as c12, d7759 as c13, d7760 as c14, d7761 as c15, d7762 as c16, d7763 as c17 } from '../descriptors/data/359.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d702 as d702 } from '../descriptors/data/38.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d702;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec360"]:c1(),["SharedCodec361"]:c2(),["SharedCodec362"]:c3(),["SharedCodec363"]:c4(),["SharedCodec364"]:c5(),["SharedCodec365"]:c6(),["SharedCodec366"]:c7(),["SharedCodec367"]:c8(),["SharedCodec368"]:c9(),["SharedCodec369"]:c10(),["SharedCodec370"]:c11(),["SharedCodec371"]:c12(),["SharedCodec372"]:c13(),["SharedCodec373"]:c14(),["SharedCodec374"]:c15(),["SharedCodec375"]:c16(),["SharedCodec376"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
