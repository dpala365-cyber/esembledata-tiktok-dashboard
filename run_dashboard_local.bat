@echo off
SET PROJECT_PATH=%~dp0

REM --- Start Backend ---
start cmd /k "cd /d %PROJECT_PATH%\backend && npm install && npm start && pause"

REM --- Start Frontend ---
start cmd /k "cd /d %PROJECT_PATH%\frontend && npm install && npm start && pause"
