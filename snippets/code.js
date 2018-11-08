let frames = []

while (await renderer.displayNextFrame()) {
    frames.push(
        renderer.canvas
            .toDataURL('image/jpeg', 0.9)
            .replace('data:image/jpeg;base64,', '')
    )
}

await fetch('http://api/generationfinished', {
    method: 'POST',
    body: JSON.stringify(frames)
})



