# Backup video for the Round 3 demo

`replay-demo.mp4`: 1 min 21 s, 1600×900, no sound, English captions burned in. Play it if the live demo on slide 9 fails (no network, laptop problem, app error).

What it shows, in order:
1. Data page → **History replay** sample: 606 pallets of demand, actual plan of 606 pallets on 87 routes.
2. **Calculate plan**: Actual plan (history) 32,698, optimised 31,316, saving 1,382 (4.2%), Plan checks Passed, and the note that nothing is sent to any system.
3. **Review & approve → Generate explanation**: "…against 32,698 for the actual plan from history…".
4. A second week uploaded as a ZIP (`history-week-2.zip`): 33,812 actual, 33,066 verified, 746 lower (2.2%).
5. Closing caption: four synthetic weeks 2.2% to 4.2%, 3.16% overall; the gate is at least 2% on real weeks.

All data is synthetic. During the pitch, say the captions in your own words rather than reading them.

## Record it again

Needs Node.js, Playwright with Chromium (`npm i playwright` or `playwright-core`), and ffmpeg on the PATH. From the repository root, in Git Bash:

```bash
cd mvp
NORDIC_DB=/tmp/demo.db GROQ_API_KEY= .venv/Scripts/python.exe -m uvicorn api.main:app --port 8014 &
BASE_URL=http://127.0.0.1:8014 node ../deliverables/round3/demo/record-demo.js /tmp/demo-video
ffmpeg -y -f concat -safe 0 -i /tmp/demo-video/frames.txt \
  -vf "fps=30,scale=1600:900:flags=lanczos,format=yuv420p" -c:v libx264 -crf 20 -movflags +faststart \
  ../deliverables/round3/demo/replay-demo.mp4
```

Use a fresh database (a new `NORDIC_DB` file) so the app shows "Plan 1". The script draws a blue dot as the cursor and a caption bar; change the captions in `record-demo.js`.
