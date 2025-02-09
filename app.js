async function startTranslation() {
    const sourceLang = document.getElementById('source-lang').value;
    const targetLang = document.getElementById('target-lang').value;
    const textToTranslate = document.getElementById('text-to-translate').value;

    const apiKey = 'AIzaSyD4HjBVAbKAWC5wf98ay1b6iveuolmmDCc';  // Replace with your API key
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: textToTranslate,
            source: sourceLang,
            target: targetLang,
        }),
    });

    const data = await response.json();
    if (data && data.data && data.data.translations) {
        alert('Translation: ' + data.data.translations[0].translatedText);
    } else {
        alert('Error in translation.');
    }
}
