import { d700 as c0 } from '../descriptors/data/39.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6915 as c1, d6916 as c2, d6917 as c3, d6918 as c4, d6919 as c5, d6920 as c6, d6921 as c7, d6922 as c8 } from '../descriptors/data/326.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6923 as c9, d6924 as c10, d6925 as c11, d6926 as c12, d6927 as c13, d6928 as c14, d6929 as c15, d6930 as c16, d6931 as c17 } from '../descriptors/data/327.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d700 as d700 } from '../descriptors/data/39.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d700;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec276"]:c1(),["SharedCodec277"]:c2(),["SharedCodec278"]:c3(),["SharedCodec279"]:c4(),["SharedCodec280"]:c5(),["SharedCodec281"]:c6(),["SharedCodec282"]:c7(),["SharedCodec283"]:c8(),["SharedCodec284"]:c9(),["SharedCodec285"]:c10(),["SharedCodec286"]:c11(),["SharedCodec287"]:c12(),["SharedCodec288"]:c13(),["SharedCodec289"]:c14(),["SharedCodec290"]:c15(),["SharedCodec291"]:c16(),["SharedCodec292"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
