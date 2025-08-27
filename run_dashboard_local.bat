@echo off
title EsembleData Dashboard (Safe Mode)
echo Starting EsembleData Dashboard...
echo.

REM Navigate to project folder
cd /d "%~dp0"

REM Start frontend
echo Launching frontend...
cd frontend
call npm start
cd ..

REM Start backend
echo Launching backend...
cd backend
call npm start
cd ..

echo.
echo ===========================================
echo Dashboard processes exited.
echo Press any key to close this window.
echo ===========================================
pause >nul
