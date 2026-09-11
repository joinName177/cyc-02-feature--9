import type { SoundPlace } from '../core/sound-place'
export interface SoundRepository { list():SoundPlace[]; save(place:SoundPlace):void }
