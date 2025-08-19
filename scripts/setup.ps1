$ErrorActionPreference = "Stop"

$requiredNodeMajor = 20
$requiredYarnVersion = "3.5.1"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "Node.js v$requiredNodeMajor is required"
}

$nodeMajor = (node -v).TrimStart('v').Split('.')[0]
if ($nodeMajor -ne $requiredNodeMajor.ToString()) {
  Write-Error "Node.js v$requiredNodeMajor is required. You have $(node -v)."
}

if (-not (Get-Command corepack -ErrorAction SilentlyContinue)) {
  Write-Error "corepack is required"
}

corepack enable | Out-Null
$yarnVersion = yarn -v
if ($yarnVersion.Trim() -ne $requiredYarnVersion) {
  Write-Error "Yarn $requiredYarnVersion is required. You have $yarnVersion."
}

yarn install
Write-Host "Setup complete"
