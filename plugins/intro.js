/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．2．2                                                   // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail <https://github.com/SuhailTechInfo>
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @infoription : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin date : 10/6/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/



const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'Wa.me/+2348105117310' // Source URL
const number = '+2348105117310'
var name = 'Chi~chi🌹🥹😒™️'
var body = '𝐂𝐡𝐢~𝐂𝐡𝐢🌹🥹😒™️ 𝐁𝐨𝐭'
var image = 'https://telegra.ph/file/8089485dfe5b7ae96f642.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
│ 𝐍𝐚𝐦𝐞      : 𝐂𝐡𝐢~𝐜𝐡𝐢🌹🥹😒™️ 𝐭𝐡𝐞 𝐠𝐫𝐞𝐚𝐭
│ 𝐆𝐞𝐧𝐝𝐞𝐫    :  𝐅𝐞𝐦𝐚𝐥𝐞
│ 𝐏𝐡𝐨𝐧𝐞     : wa.me/2348105117310
│ 𝐒𝐭𝐚𝐭𝐮𝐬     : 𝐍𝐢𝐜𝐞 , 𝐥𝐨𝐯𝐞𝐥𝐲 𝐚𝐧𝐝 𝐣𝐨𝐯𝐢𝐚𝐥🌹🥹😒
𝐈𝐟 𝐲𝐨𝐮 𝐦𝐚𝐤𝐞 𝐚𝐧𝐲 𝐦𝐨𝐧𝐞𝐲, 𝐭𝐡𝐞 𝐠𝐨𝐯𝐞𝐫𝐧𝐦𝐞𝐧𝐭 𝐬𝐡𝐨𝐯𝐞𝐬 𝐲𝐨𝐮 𝐢𝐧 𝐭𝐡𝐞 𝐜𝐫𝐞𝐞𝐤 𝐨𝐧𝐜𝐞 𝐚 𝐲𝐞𝐚𝐫 𝐰𝐢𝐭𝐡 𝐢𝐭 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐩𝐨𝐜𝐤𝐞𝐭𝐬, 𝐚𝐧𝐝 𝐚𝐥𝐥 𝐭𝐡𝐚𝐭 𝐝𝐨𝐧'𝐭 𝐠𝐞𝐭 𝐰𝐞𝐭 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐤𝐞𝐞𝐩. "𝐁𝐲 𝐖𝐢𝐥𝐥 𝐑𝐨𝐠𝐞𝐫𝐬"

╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄


 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
