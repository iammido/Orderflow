@echo off
setlocal
set "PATH=%~dp0..\..\node_modules\.bin;%PATH%"
pushd "%~dp0"
call "%~dp0node_modules\.bin\remotion.cmd" %*
set "REMO_RESULT=%errorlevel%"
popd
exit /b %REMO_RESULT%
