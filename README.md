# cyc-02 · 声场

纯前端城市声音地图。点击地图空白处可放置标记，通过浏览器麦克风录音或上传音频；点击标记即可播放，并显示实时频谱。地点元数据保存于 LocalStorage。

## 运行

```bash
npm install
npm run dev
```

Docker 部署：`docker compose up --build`，访问 `http://localhost:8080`。

## 分层

- `core`：声音地点领域模型
- `ports`：存储与录音能力抽象
- `adapters`：浏览器 MediaRecorder 和 LocalStorage 实现
- `ui`：DOM 渲染、地图交互与频谱展示
