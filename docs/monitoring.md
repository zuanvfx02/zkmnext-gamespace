# Monitoring and services

Understand where readings come from and how sessions behave.

## Telemetry

CPU/GPU frequency and load, RAM, battery, temperature, refresh rate, network and FPS use readers supported by the device. GPU load may be estimated; read the indicator.

Display refresh rate is not game FPS. Ping to 1.1.1.1 indicates internet connectivity, not game-server latency. Traffic readings generally cover the whole device.

## Android services

Game detection, overlays, music and enabled tools run as foreground services. With Shizuku, Axeron or Root, backend mode starts these services only when the app is open or a library game is running, and they stop about 20 seconds after the game is closed. In Basic mode, game detection stays running. Most internal services are not exported. Notification and accessibility services use Android binding permissions.

Switching away from a game parks its session while the game process is still alive. If the game is closed or killed, the session ends. A time limit you set yourself still applies.

Closing a game, locking the screen, stopping a service or revoking access should follow the available cleanup/recovery paths. A ROM may stop services despite requested battery exemptions.

## Testing status

GameSpace includes cleanup, sampling limits and recovery. That alone does not establish battery use, long-term stability or recovery on every ROM.

An error-free UI does not prove backend behavior. Test session start/end, rotation, lock/unlock, access loss and recovery after process termination.
