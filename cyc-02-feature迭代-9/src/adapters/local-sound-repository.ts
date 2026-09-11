import type { SoundPlace } from '../core/sound-place'; import type { SoundRepository } from '../ports/sound-repository'
const KEY='sound-map-places'
export class LocalSoundRepository implements SoundRepository { list(){try{return JSON.parse(localStorage.getItem(KEY)||'[]') as SoundPlace[]}catch{return[]}} save(place:SoundPlace){localStorage.setItem(KEY,JSON.stringify([place,...this.list().filter(x=>x.id!==place.id)]))} }
