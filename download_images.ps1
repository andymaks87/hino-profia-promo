$content = Get-Content -Path "temp_page.html" -Raw
$pattern = 'href="(/media/filer_public/[^"]+\.jpg)"'
$matches = [regex]::Matches($content, $pattern)
$uniquePaths = $matches | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique

$i = 1
foreach ($path in $uniquePaths) {
    $url = "https://unionauto.org" + $path
    $filename = "assets/hino_$i.jpg"
    Write-Host "Downloading $url to $filename..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $filename
    } catch {
        Write-Host "Failed to download $url"
    }
    $i++
}
Write-Host "Done."
