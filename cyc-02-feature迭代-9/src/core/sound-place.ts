export type SoundCategory = '交通' | '自然' | '人声' | '生活'
export interface SoundPlace { id:string; name:string; note:string; category:SoundCategory; x:number; y:number; createdAt:string; audioUrl?:string }
export const seedPlaces:SoundPlace[]=[
 {id:'dawn',name:'梧桐街的清晨',note:'自行车铃声从树影里穿过',category:'交通',x:28,y:25,createdAt:'今天 06:42'},
 {id:'market',name:'菜场的人间烟火',note:'叫卖声、塑料袋与推车',category:'人声',x:68,y:48,createdAt:'昨天'},
 {id:'river',name:'河岸晚风',note:'水声轻轻拍着石阶',category:'自然',x:44,y:76,createdAt:'09.08'}]
