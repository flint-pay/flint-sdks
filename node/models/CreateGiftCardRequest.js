import { d301 as c0 } from '../descriptors/data/15.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9076 as c1, d9063 as c24, d9064 as c25, d9065 as c26, d9066 as c27 } from '../descriptors/data/410.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9028 as c3 } from '../descriptors/data/408.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9043 as c4, d9044 as c5, d9045 as c6, d9046 as c7, d9047 as c8, d9048 as c9, d9049 as c10, d9050 as c11, d9051 as c12, d9052 as c13, d9053 as c14, d9054 as c15, d9055 as c16, d9056 as c17, d9057 as c18, d9058 as c19, d9059 as c20, d9060 as c21, d9061 as c22, d9062 as c23 } from '../descriptors/data/409.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9112 as c28, d9113 as c29 } from '../descriptors/data/412.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d301 as d301 } from '../descriptors/data/15.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec216"]:c3(),["SharedCodec419"]:c4(),["SharedCodec420"]:c5(),["SharedCodec421"]:c6(),["SharedCodec422"]:c7(),["SharedCodec423"]:c8(),["SharedCodec424"]:c9(),["SharedCodec425"]:c10(),["SharedCodec426"]:c11(),["SharedCodec427"]:c12(),["SharedCodec428"]:c13(),["SharedCodec429"]:c14(),["SharedCodec430"]:c15(),["SharedCodec431"]:c16(),["SharedCodec432"]:c17(),["SharedCodec433"]:c18(),["SharedCodec434"]:c19(),["SharedCodec435"]:c20(),["SharedCodec436"]:c21(),["SharedCodec437"]:c22(),["SharedCodec438"]:c23(),["SharedCodec439"]:c24(),["SharedCodec440"]:c25(),["SharedCodec441"]:c26(),["SharedCodec442"]:c27(),["SharedCodec446"]:c28(),["SharedCodec447"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
