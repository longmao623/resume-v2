import subprocess
import sys
import os
import shutil

project_dir = r"C:\Users\dbw\.openclaw\workspace\projects\resume-v2"
os.chdir(project_dir)

npm = shutil.which("npm") or r"C:\Users\dbw\AppData\Local\nvm\v24.15.0\npm.cmd"
npx = shutil.which("npx") or r"C:\Users\dbw\AppData\Local\nvm\v24.15.0\npx.cmd"

print("Building...")
result = subprocess.run([npm, "run", "build"], shell=True, capture_output=True, text=True)
print(result.stdout)
if result.returncode != 0:
    print("BUILD FAILED")
    print(result.stderr)
    sys.exit(1)

print("Starting preview...")
subprocess.Popen([npx, "vite", "preview", "--port", "9877"], shell=True)
print("Preview started at http://localhost:9877/")
