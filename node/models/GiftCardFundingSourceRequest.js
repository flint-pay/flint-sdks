import { d874 as c0 } from '../descriptors/data/48.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9047 as c1, d9048 as c2, d9049 as c3, d9050 as c4, d9051 as c5, d9052 as c6, d9053 as c7, d9054 as c8, d9055 as c9, d9056 as c10, d9057 as c11, d9058 as c12, d9059 as c13, d9060 as c14, d9061 as c15, d9062 as c16 } from '../descriptors/data/409.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9063 as c17 } from '../descriptors/data/410.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d874 as d874 } from '../descriptors/data/48.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d874;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec423"]:c1(),["SharedCodec424"]:c2(),["SharedCodec425"]:c3(),["SharedCodec426"]:c4(),["SharedCodec427"]:c5(),["SharedCodec428"]:c6(),["SharedCodec429"]:c7(),["SharedCodec430"]:c8(),["SharedCodec431"]:c9(),["SharedCodec432"]:c10(),["SharedCodec433"]:c11(),["SharedCodec434"]:c12(),["SharedCodec435"]:c13(),["SharedCodec436"]:c14(),["SharedCodec437"]:c15(),["SharedCodec438"]:c16(),["SharedCodec439"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
