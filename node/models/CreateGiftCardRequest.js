import { d264 as c0 } from '../descriptors/data/13.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7779 as c1 } from '../descriptors/data/360.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c2 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7731 as c3 } from '../descriptors/data/357.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7743 as c4, d7744 as c5, d7745 as c6, d7746 as c7, d7747 as c8, d7748 as c9, d7749 as c10, d7750 as c11 } from '../descriptors/data/358.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7751 as c12, d7752 as c13, d7753 as c14, d7754 as c15, d7755 as c16, d7756 as c17, d7757 as c18, d7758 as c19, d7759 as c20, d7760 as c21, d7761 as c22, d7762 as c23, d7763 as c24, d7764 as c25, d7765 as c26, d7766 as c27 } from '../descriptors/data/359.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7815 as c28, d7816 as c29 } from '../descriptors/data/361.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d264 as d264 } from '../descriptors/data/13.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec175"]:c3(),["SharedCodec356"]:c4(),["SharedCodec357"]:c5(),["SharedCodec358"]:c6(),["SharedCodec359"]:c7(),["SharedCodec360"]:c8(),["SharedCodec361"]:c9(),["SharedCodec362"]:c10(),["SharedCodec363"]:c11(),["SharedCodec364"]:c12(),["SharedCodec365"]:c13(),["SharedCodec366"]:c14(),["SharedCodec367"]:c15(),["SharedCodec368"]:c16(),["SharedCodec369"]:c17(),["SharedCodec370"]:c18(),["SharedCodec371"]:c19(),["SharedCodec372"]:c20(),["SharedCodec373"]:c21(),["SharedCodec374"]:c22(),["SharedCodec375"]:c23(),["SharedCodec376"]:c24(),["SharedCodec377"]:c25(),["SharedCodec378"]:c26(),["SharedCodec379"]:c27(),["SharedCodec383"]:c28(),["SharedCodec384"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
