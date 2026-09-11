export interface AudioRecorder { start():Promise<void>; stop():Promise<Blob>; isRecording():boolean }
